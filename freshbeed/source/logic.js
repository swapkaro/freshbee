export const meta = { game: 'FreshBee: Ultimate Frisbee', minPlayers: 1, maxPlayers: 1 };
const DT = 1 / 60;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
function formation(team) {
  return Array.from({length:10}, (_,i) => {
    const t = i < 5 ? 0 : 1, j = i % 5, d = t === 0 ? 1 : -1;
    return {id:i, team:t, number:[7,10,21,14,9][j], x:[0,-11,10,-7,8][j], z:d * [-27,-15,-10,2,14][j] + (team===1 ? 2 : 0), vx:0,vz:0,face:t===0?0:Math.PI,stamina:1,reach:0,throwPose:0};
  });
}
export function setup(players) {
  return {players:[...players], athletes:formation(0), controlled:0, score:[0,0], time:0, owner:0, team:0, held:0, flight:null, disc:{x:0,y:1.15,z:-27}, catchWindow:0,catchCooldown:0, reset:0, nextTeam:0, event:'ready',eventId:0, completed:0,interceptions:0,winner:null,call:0};
}
export function validateAction(s, id, a) {
  if (!s.players.includes(id)) return {ok:false,error:'not seated'};
  if (!a || !['step','throw','catch','call','switch'].includes(a.type)) return {ok:false,error:'unknown action'};
  if (s.winner!==null) return {ok:false,error:'match finished'};
  if (a.type==='step' && (!Number.isFinite(a.x)||!Number.isFinite(a.z)||Math.abs(a.x)>1||Math.abs(a.z)>1)) return {ok:false,error:'invalid movement'};
  if (a.type==='throw' && (s.owner!==s.controlled||!Number.isFinite(a.x)||!Number.isFinite(a.z)||Math.abs(a.x)>30||Math.abs(a.z)>60||!Number.isFinite(a.power)||a.power<0||a.power>1)) return {ok:false,error:'invalid throw'};
  return {ok:true};
}
function emit(s, e) {s.event=e;s.eventId++;}
function toss(s, who, tx, tz, power=1) {
  const p=s.athletes[who];let dx=tx-p.x,dz=tz-p.z;
  let len=Math.hypot(dx,dz)||1;const max=8+28*power;
  if(len>max){dx*=max/len;dz*=max/len;len=max;}
  const ex=p.x+dx,ez=p.z+dz;
  s.flight={sx:p.x,sz:p.z,ex,ez,elapsed:0,duration:Math.max(.48,len/19),height:1.15+len*.045,from:who,team:p.team,curve:.28};
  s.owner=-1;s.held=0;p.throwPose=.55;p.face=Math.atan2(dx,dz);emit(s,'throw');
}
function possession(s, i, event='catch') {
  const a=s.athletes[i], oldTeam=s.team;
  s.owner=i;s.team=a.team;s.held=0;s.flight=null;s.disc={x:a.x,y:1.15,z:a.z};a.reach=.5;
  if(oldTeam!==a.team){if(a.team===0)s.interceptions++;emit(s,'interception');}else {emit(s,event);if(a.team===0)s.completed++;}
  if((a.team===0&&a.z>=32)||(a.team===1&&a.z<=-32)) {
    s.score[a.team]++;s.nextTeam=1-a.team;s.reset=2.4;emit(s,a.team===0?'goal':'opponent-goal');
    if(s.score[a.team]>=7){s.winner=a.team;emit(s,a.team===0?'win':'loss');}
  }
}
function turnover(s, x, z, team) {
  const candidates=s.athletes.filter(p=>p.team===team);
  candidates.sort((a,b)=>Math.hypot(a.x-x,a.z-z)-Math.hypot(b.x-x,b.z-z));
  const a=candidates[0];a.x=clamp(x,-17.4,17.4);a.z=clamp(z,-30,30);a.vx=0;a.vz=0;
  s.owner=a.id;s.team=team;s.held=0;s.flight=null;s.disc={x:a.x,y:1.15,z:a.z};emit(s,'turnover');
}
function move(p, x,z,speed,dt) {
  const n=Math.hypot(x,z);if(n>1){x/=n;z/=n;}
  const smooth=1-Math.exp(-dt*12);
  p.vx+=(x*speed-p.vx)*smooth;p.vz+=(z*speed-p.vz)*smooth;
  p.x=clamp(p.x+p.vx*dt,-18.1,18.1);p.z=clamp(p.z+p.vz*dt,-49,49);
  if(Math.hypot(p.vx,p.vz)>.3) {
    const dest=Math.atan2(p.vx,p.vz),delta=Math.atan2(Math.sin(dest-p.face),Math.cos(dest-p.face));p.face+=delta*Math.min(1,dt*10);
  }
}
function seek(p,x,z,speed,dt){const dx=x-p.x,dz=z-p.z,dist=Math.hypot(dx,dz);move(p,dx/Math.max(1,dist),dz/Math.max(1,dist),dist<.4?0:speed,dt);}
function ai(s, dt) {
  const holder=s.owner>=0?s.athletes[s.owner]:null;
  for(const p of s.athletes) {
    if(p.id===s.controlled)continue;
    const dir=p.team===0?1:-1, lane=[0,-12,12,-6,7][p.id%5];
    let tx=p.x,tz=p.z, speed=4.65;
    if(s.flight) {
      const f=s.flight;
      const near=Math.hypot(p.x-f.ex,p.z-f.ez);
      if(near<14){tx=f.ex;tz=f.ez;speed=p.team===f.team?6:5.0;}
      else {tx=lane;tz=clamp(s.disc.z+dir*(5+(p.id%5)*3),-45,45);}
    } else if(holder) {
      if(holder.id===p.id){tx=p.x+Math.sin(s.time+p.id)*2;tz=clamp(p.z+dir*5,-35,35);speed=2.5;}
      else if(p.team===s.team){tx=lane+Math.sin(s.time*.8+p.id)*2;tz=clamp(holder.z+dir*(9+(p.id%5)*4),-43,43);}
      else {
        const mark=s.athletes[p.team===0?p.id+5:p.id-5];
        tx=mark.x+Math.sin(s.time*.5+p.id)*.5;tz=mark.z-dir*2.6;
        speed=4.25;
      }
    }
    seek(p,tx,tz,speed,dt);
  }
  if(holder&&holder.id!==s.controlled&&s.held>(holder.team===0?1.5:2.0)) {
    let targets=s.athletes.filter(p=>p.team===holder.team&&p.id!==holder.id&&distance(p,holder)<34&&distance(p,holder)>4);
    const dir=holder.team===0?1:-1;
    targets.sort((a,b)=>{
      const value=p=>{let clear=10;for(const opp of s.athletes)if(opp.team!==p.team)clear=Math.min(clear,distance(opp,p));return (p.z-holder.z)*dir*.5+clear+(p.id===s.controlled?(s.call>0?24:6):0);};return value(b)-value(a);
    });
    if(targets.length) {
      const t=targets[0], flightTime=distance(t,holder)/19;
      const lead=t.id===s.controlled?.5:.7;
      toss(s,holder.id,clamp(t.x+t.vx*flightTime*lead,-17,17),clamp(t.z+t.vz*flightTime*lead,-47,47),1);
      s.call=0;
    } else if(s.held>4) toss(s,holder.id,clamp(holder.x+7,-15,15),clamp(holder.z+dir*15,-44,44),1);
  }
}
export function applyAction(state, id, a) {
  if(!validateAction(state,id,a).ok)return state;
  const s={...state,score:[...state.score],athletes:state.athletes.map(p=>({...p})),disc:{...state.disc},flight:state.flight?{...state.flight}:null};
  if(a.type==='throw'){toss(s,s.controlled,a.x,a.z,a.power);return s;}
  if(a.type==='catch'){
    if(s.catchCooldown<=0){s.catchWindow=.5;s.catchCooldown=.65;s.athletes[s.controlled].reach=.5;emit(s,'reach');}return s;
  }
  if(a.type==='call'){s.call=3;emit(s,'call');return s;}
  if(a.type==='switch'){
    if(s.owner>=0&&s.team===0)s.controlled=s.owner;
    else {let list=s.athletes.filter(p=>p.team===0&&p.id!==s.controlled);list.sort((p,q)=>distance(p,s.disc)-distance(q,s.disc));s.controlled=list[0].id;}
    s.catchWindow=0;return s;
  }
  s.time+=DT;s.call=Math.max(0,s.call-DT);s.catchWindow=Math.max(0,s.catchWindow-DT);s.catchCooldown=Math.max(0,s.catchCooldown-DT);
  for(const p of s.athletes){p.reach=Math.max(0,p.reach-DT);p.throwPose=Math.max(0,p.throwPose-DT);}
  if(s.reset>0){s.reset-=DT;if(s.reset<=0){s.athletes=formation(s.nextTeam);s.controlled=0;s.owner=s.nextTeam===0?0:5;s.team=s.nextTeam;s.flight=null;s.held=0;s.disc={x:s.athletes[s.owner].x,y:1.15,z:s.athletes[s.owner].z};emit(s,'restart');}return s;}
  const p=s.athletes[s.controlled], sprint=!!a.sprint&&p.stamina>.03&&Math.hypot(a.x,a.z)>.1;
  p.stamina=clamp(p.stamina+(sprint?-.26:.15)*DT,0,1);
  move(p,a.x,a.z,sprint?8.5:5.7,DT);if(s.owner>=0)s.held+=DT;
  ai(s,DT);
  // Soft player-body separation, preserving responsiveness and readable lanes.
  for(let i=0;i<10;i++)for(let j=i+1;j<10;j++){
    const u=s.athletes[i],v=s.athletes[j],dx=u.x-v.x,dz=u.z-v.z,dist=Math.hypot(dx,dz);
    if(dist>.01&&dist<.68){const push=(.68-dist)*.3;u.x+=dx/dist*push;u.z+=dz/dist*push;v.x-=dx/dist*push;v.z-=dz/dist*push;}
  }
  if(s.flight){
    const f=s.flight;f.elapsed+=DT;const t=Math.min(1,f.elapsed/f.duration),wave=Math.sin(Math.PI*t),dx=f.ex-f.sx,dz=f.ez-f.sz,len=Math.hypot(dx,dz)||1;
    s.disc={x:f.sx+dx*t-dz/len*wave*f.curve,y:1.15+wave*f.height,z:f.sz+dz*t+dx/len*wave*f.curve};
    if(f.elapsed>.24&&s.disc.y<2.45){
      const receiving=s.athletes.filter(q=>q.id!==f.from&&distance(q,s.disc)<(q.id===s.controlled?1.35:1.12));
      receiving.sort((u,v)=>distance(u,s.disc)-distance(v,s.disc));
      for(const q of receiving){
        if(q.id===s.controlled&&s.catchWindow<=0)continue;
        if(q.team!==f.team&&t<.28)continue;
        possession(s,q.id);break;
      }
    }
    if(s.flight&&t>=1){turnover(s,s.disc.x,s.disc.z,1-f.team);}
    else if(s.flight&&(Math.abs(s.disc.x)>18.5||Math.abs(s.disc.z)>50))turnover(s,s.disc.x,s.disc.z,1-f.team);
  } else if(s.owner>=0){
    const h=s.athletes[s.owner];s.disc={x:h.x+Math.cos(h.face)*.48,y:1.12,z:h.z-Math.sin(h.face)*.48};
    if(s.held>10)turnover(s,h.x,h.z,1-h.team);
  }
  return s;
}
export function isGameOver(s){return s.winner===null?{over:false}:{over:true,winner:s.winner===0?s.players[0]:'opponents'};}
export function viewFor(s,id){return {...s,you:id,goal:'Catch a pass in the attacking end zone. First to 7.',next:s.owner===s.controlled?'Find a teammate and throw':'Get open or intercept the disc'};}
