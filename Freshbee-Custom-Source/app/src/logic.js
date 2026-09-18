export const meta = { game: 'FRESHBEE Ultimate', minPlayers: 1, maxPlayers: 1 };
const DT = 1 / 60;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const nums = [23, 11, 7, 19, 4, 17, 31, 8, 12, 6];
function formation(team) {
  return Array.from({ length: 10 }, (_, i) => {
    const side = i < 5 ? 0 : 1, n = i % 5;
    const z = team === 0 ? [23, 10, 4, -10, -16][n] : [-23, -10, -4, 10, 16][n];
    return { id: i, team: side, number: nums[i], x: [0,-11,11,-9,9][n] + (side !== team ? 1.7 : 0), z: z + (side !== team ? (team === 0 ? -5 : 5) : 0), vx: 0, vz: 0, angle: side === 0 ? 0 : Math.PI, stamina: 1, dive: 0, fake: 0, anim: 0, throwAnim: 0 };
  });
}
export function setup(players) {
  return { version: 1, players: [...players], athletes: formation(0), tick: 0, clock: 300, score: [0,0], active: 0, target: 1, aim: 0, manual: false, stall: 0, possession: 0, phase: 'ready', training: false, pause: false, resetIn: 0, event: 'ready', eventTick: 0, passes: 0, completions: 0, lastThrower: 0, wind: { x: 0.42, z: 0.08 }, disc: { x: 0, y: 1.1, z: 23, vx: 0, vy: 0, vz: 0, holder: 0, age: 0, tx: 0, tz: 0, receiver: 1, curve: 0 } };
}
export function validateAction(s, id, a) {
  if (!s.players.includes(id)) return { ok: false, error: 'Spectators cannot control the match.' };
  if (!a || typeof a !== 'object') return { ok: false, error: 'Invalid action.' };
  if (a.type === 'start') return typeof a.training === 'boolean' ? { ok: true } : { ok: false, error: 'Invalid mode.' };
  if (a.type === 'pause' || a.type === 'restart') return { ok: true };
  if (a.type !== 'frames' || !Array.isArray(a.frames) || a.frames.length < 1 || a.frames.length > 30) return { ok: false, error: 'Invalid input batch.' };
  for (const f of a.frames) {
    if (!f || !Number.isFinite(f.x) || !Number.isFinite(f.z) || Math.abs(f.x) > 1 || Math.abs(f.z) > 1) return { ok: false, error: 'Invalid movement.' };
    if (f.power !== undefined && (!Number.isFinite(f.power) || f.power < 0 || f.power > 1)) return { ok: false, error: 'Invalid throw power.' };
    if (f.target !== undefined && (!Number.isInteger(f.target) || f.target < 0 || f.target > 4)) return { ok: false, error: 'Invalid receiver.' };
    if (f.command !== undefined && !['pass','throw','huck','fake','dive','switch','target'].includes(f.command)) return { ok: false, error: 'Unknown command.' };
    if (f.sprint !== undefined && typeof f.sprint !== 'boolean') return { ok: false, error: 'Invalid sprint.' };
  }
  return { ok: true };
}
function announce(s, event) { s.event = event; s.eventTick = s.tick; }
function nearest(s, team, point, except = -1) {
  let result = -1, best = 1e9;
  for (const p of s.athletes) if (p.team === team && p.id !== except) { const d = distance(p, point); if (d < best) { best = d; result = p.id; } }
  return result;
}
function targetNext(s) { for (let n = 1; n < 6; n++) { const i = (s.target + n) % 5; if (i !== s.disc.holder) { s.target = i; s.manual = false; break; } } }
function give(s, id, event) {
  const p = s.athletes[id]; s.disc.holder = id; s.disc.x = p.x; s.disc.z = p.z; s.disc.y = 1.15; s.disc.vx = 0; s.disc.vy = 0; s.disc.vz = 0;
  s.stall = 0; s.possession = p.team; p.vx = 0; p.vz = 0; s.manual = false;
  if (p.team === 0) { s.active = id; s.target = nearest(s, 0, { x: p.x, z: p.z - 16 }, id); }
  announce(s, event);
}
function turnover(s, event) {
  const d = s.disc, team = 1 - s.possession;
  d.x = clamp(d.x, -17.7,17.7); d.z = clamp(d.z,-31,31);
  const i = nearest(s, team, d); s.athletes[i].x = d.x; s.athletes[i].z = d.z;
  give(s,i,event);
}
function release(s, from, to, kind, power = .5, manual = false) {
  const p = s.athletes[from], target = s.athletes[to], long = kind === 'huck';
  let tx = target.x, tz = target.z;
  const baseDist = distance(p,target), travel = clamp(baseDist / (long ? 18 : 23),.55,2.8);
  tx += target.vx * travel * .45; tz += target.vz * travel * .45;
  let dx = tx - p.x, dz = tz - p.z, len = Math.hypot(dx,dz) || 1;
  if (manual) { len = 10 + power * 36; dx = Math.sin(s.aim) * len; dz = -Math.cos(s.aim) * len; }
  else if (kind === 'throw') { const factor = .82 + power * .36; dx *= factor; dz *= factor; }
  else if (long) { dz += (p.team === 0 ? -1 : 1) * 7; }
  len = Math.hypot(dx,dz); const time = clamp(len / (long ? 16 : 23),.5,3.3), grav = long ? 3.8 : 2.25;
  const correction = .045 * time, age = 0;
  s.disc = { x:p.x,y:1.18,z:p.z,vx:dx / time * (1 + correction),vz:dz / time * (1 + correction),vy:grav * time / 2,gravity:grav,holder:-1,age,tx:p.x + dx,tz:p.z + dz,receiver:to,curve:manual ? .18 : 0 };
  s.lastThrower = from; p.throwAnim = .55; s.stall = 0; s.manual = false;
  if (p.team === 0) { s.passes++; s.active = to; }
  announce(s, long ? 'huck' : 'flight');
}
function step(s, input) {
  if (s.pause || s.phase === 'ready' || s.phase === 'over') return;
  s.tick++;
  if (!s.training) s.clock = Math.max(0, s.clock - DT);
  if (s.clock <= 0) { s.phase = 'over'; announce(s,'fulltime'); return; }
  if (s.resetIn > 0) {
    s.resetIn -= DT;
    if (s.resetIn <= 0) { const team = s.possession; s.athletes = formation(team); give(s,team * 5,'restart'); s.phase='playing'; }
    return;
  }
  const d = s.disc, command = input.command;
  if (input.target !== undefined && input.target !== d.holder) { s.target=input.target; s.manual=false; }
  if (command === 'target') targetNext(s);
  if (command === 'switch') { s.active = d.holder >= 0 && d.holder < 5 && s.active !== d.holder ? d.holder : (s.active + 1) % 5; }
  const controlled = s.athletes[s.active];
  if (command === 'dive' && controlled.dive <= 0) controlled.dive = .85;
  if (command === 'fake' && d.holder === s.active) { controlled.fake = .65; for(const p of s.athletes) if(p.team===1 && distance(p,controlled)<5) p.fake=.8; announce(s,'fake'); }
  if (d.holder >= 0 && d.holder < 5) {
    if (d.holder === s.active && Math.hypot(input.x,input.z) > .15) { s.aim = Math.atan2(input.x,-input.z); s.manual = true; }
    if (['pass','throw','huck'].includes(command)) {
      const target = d.holder === s.active ? s.target : s.active;
      if (target !== d.holder) release(s,d.holder,target,command,input.power ?? .5,s.manual && command!=='pass');
    }
  }
  const disc = s.disc;
  for (const p of s.athletes) {
    p.dive=Math.max(0,p.dive-DT); p.fake=Math.max(0,p.fake-DT); p.throwAnim=Math.max(0,p.throwAnim-DT);
    let ix=0, iz=0, sprint=false;
    if(p.id===disc.holder) {
      p.vx=0; p.vz=0;
      if(p.team===0) { const t=s.athletes[s.target]; p.angle=s.manual?s.aim:Math.atan2(t.x-p.x,-(t.z-p.z)); }
      else p.angle=Math.PI;
      continue;
    }
    if(p.id===s.active && Math.hypot(input.x,input.z)>.1) { ix=input.x; iz=input.z; sprint=!!input.sprint; }
    else {
      let tx=p.x,tz=p.z;
      if(disc.holder < 0) {
        const catchX=clamp(disc.tx,-17,17),catchZ=clamp(disc.tz,-48,48);
        if(p.id===disc.receiver || p.id===nearest(s,p.team,{x:catchX,z:catchZ},s.lastThrower)) { tx=catchX;tz=catchZ; }
        else { tx=p.x;tz=p.z+(p.team===s.possession?(p.team===0?-2:2):0); }
      } else if(p.team===s.possession) {
        const holder=s.athletes[disc.holder], n=p.id%5;
        tx=clamp([-1,-12,12,-8,8][n]+Math.sin(s.tick/125+n*2.4)*3,-16,16);
        tz=clamp(holder.z+(p.team===0?-1:1)*([0,12,15,25,29][n]||10)+Math.sin(s.tick/100+n)*3,-43,43);
      } else {
        const mark=s.athletes[p.team===1?p.id-5:p.id+5], holder=s.athletes[disc.holder];
        if(p.id===nearest(s,p.team,holder)) {tx=holder.x+1.15;tz=holder.z+(p.team===1?-2.3:2.3);}
        else {tx=mark.x+1.8;tz=mark.z+(p.team===1?-2.0:2.0);}
      }
      const dx=tx-p.x,dz=tz-p.z,len=Math.hypot(dx,dz);
      if(len>.35) {ix=dx/len*Math.min(1,len);iz=dz/len*Math.min(1,len);}
      if(s.training && p.team===1) {ix=0;iz=0;}
    }
    const len=Math.hypot(ix,iz);if(len>1) {ix/=len;iz/=len;}
    sprint=sprint&&p.stamina>.05;
    p.stamina=clamp(p.stamina+DT*(sprint?-.16:.10),0,1);
    const speed=(sprint?8.6:p.team===0?6.6:5.5)*(p.fake>0?.15:1)*(p.dive>.45?1.35:p.dive>0?.35:1);
    const accel=len>.1?9:13;
    p.vx+=(ix*speed-p.vx)*Math.min(1,accel*DT);p.vz+=(iz*speed-p.vz)*Math.min(1,accel*DT);
    p.x=clamp(p.x+p.vx*DT,-18.1,18.1);p.z=clamp(p.z+p.vz*DT,-49,49);
    if(Math.hypot(p.vx,p.vz)>.2) {const a=Math.atan2(p.vx,-p.vz);p.angle+=Math.atan2(Math.sin(a-p.angle),Math.cos(a-p.angle))*.16;}
    p.anim+=Math.hypot(p.vx,p.vz)*DT;
  }
  // Soft no-contact separation, never displaces a planted disc holder.
  for(let i=0;i<10;i++) for(let j=i+1;j<10;j++) {
    const a=s.athletes[i],b=s.athletes[j],dx=a.x-b.x,dz=a.z-b.z,len=Math.hypot(dx,dz);
    if(len>0.001 && len<.65) {const push=(.65-len)*.5;if(a.id!==disc.holder){a.x+=dx/len*push;a.z+=dz/len*push;}if(b.id!==disc.holder){b.x-=dx/len*push;b.z-=dz/len*push;}}
  }
  if(disc.holder >= 0) {
    const h=s.athletes[disc.holder];disc.x=h.x;disc.z=h.z;disc.y=1.15;s.stall+=DT;
    if(s.stall>=10&&!s.training) {turnover(s,'stall');return;}
    if(h.team===1 && s.stall>2.2) {
      let best=-1,value=-1e9;
      for(const p of s.athletes) if(p.team===1&&p.id!==h.id) {const open=distance(p,s.athletes[nearest(s,0,p)]),v=(p.z-h.z)*.3+open-distance(p,h)*.07;if(v>value){value=v;best=p.id;}}
      release(s,h.id,best,distance(h,s.athletes[best])>30?'huck':'pass');
    } else if(h.team===0 && h.id!==s.active && s.stall>3) release(s,h.id,s.active,'pass');
  } else {
    disc.age+=DT;
    disc.vx+=(s.wind.x+disc.curve-disc.vx*.09)*DT;disc.vz+=(s.wind.z-disc.vz*.09)*DT;disc.vy-=(disc.gravity||2.25)*DT;
    disc.x+=disc.vx*DT;disc.z+=disc.vz*DT;disc.y+=disc.vy*DT;
    if(Math.abs(disc.x)>18.5||Math.abs(disc.z)>50) {turnover(s,'out');return;}
    if(disc.age>.3 && disc.y>.25 && disc.y<2.65) {
      let catcher=-1,dist=1e9;
      for(const p of s.athletes) if(p.id!==s.lastThrower && !(s.training&&p.team===1)) {
        const reach=p.dive>0?2.6:p.team===s.possession?1.65:1.12, dd=distance(p,disc);
        if(dd<reach&&dd<dist) {catcher=p.id;dist=dd;}
      }
      if(catcher>=0) {
        const p=s.athletes[catcher], same=p.team===s.possession;
        if(same&&p.team===0)s.completions++;
        give(s,catcher,same?'catch':'interception');
        if((p.team===0&&p.z< -32)||(p.team===1&&p.z>32)) {
          s.score[p.team]++;s.phase='point';s.resetIn=3.2;s.possession=1-p.team;announce(s,p.team===0?'score':'opponentScore');
          if(s.score[p.team]>=5) {s.phase='over';announce(s,'fulltime');}
        }
        return;
      }
    }
    if(disc.y<=.09) turnover(s,'ground');
  }
}
export function applyAction(state,id,action) {
  if(!validateAction(state,id,action).ok)return state;
  if(action.type==='restart')return setup(state.players);
  const s={...state,athletes:state.athletes.map(p=>({...p})),disc:{...state.disc},score:[...state.score],wind:{...state.wind}};
  if(action.type==='start') {s.phase='playing';s.training=action.training;s.pause=false;announce(s,'start');}
  else if(action.type==='pause')s.pause=!s.pause;
  else if(action.type==='frames')for(const f of action.frames)step(s,f);
  return s;
}
export function isGameOver(s) {return s.phase==='over'?{over:true,winner:s.score[0]>s.score[1]?s.players[0]:null,draw:s.score[0]===s.score[1]}:{over:false};}
export function viewFor(s,id) {return {...s,canControl:s.players.includes(id)};}
