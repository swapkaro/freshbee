import {createScene} from './scene.js';
import {setup,applyAction,validateAction} from '../src/logic.js';
const $=id=>document.getElementById(id),clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
let state=setup(['local']),gfx,playing=false,paused=false,charging=false,charge=0,sprintTouch=false,joy={x:0,z:0},mouse=null,selected=1,aim={x:-11,z:-15},lastEvent=-1,eventUntil=0,showStats=false,high=true;
const keys=new Set();let startPointer=null,dragAim=null,simAccumulator=0,lastFrame=performance.now(),frameCount=0,fps=60,statTime=0,totalCpu=0;
const map=$('minimap').getContext('2d');
const events={ready:['FRESHBEE ARENA','YOUR GAME. YOUR MOMENT.'],catch:['POSSESSION SECURED','CLEAN CATCH'],interception:['DEFENSE INTO ATTACK','INTERCEPTION'],turnover:['POSSESSION CHANGES','TURNOVER'],goal:['SKYRIDERS +1','THAT’S ULTIMATE.'], 'opponent-goal':['WINDADDICTS +1','POINT TO OPPONENTS'],call:['GET OPEN','PASS REQUESTED'],restart:['NEXT POINT','PLAY ON'],win:['FIRST TO SEVEN','YOU OWNED THE MOMENT.'],loss:['FINAL WHISTLE','NEXT ONE IS YOURS.']};
function dispatch(a){if(validateAction(state,'local',a).ok)state=applyAction(state,'local',a);}
function resetInput(){keys.clear();sprintTouch=false;joy={x:0,z:0};charging=false;dragAim=null;mouse=null;$('stick').style.transform='';$('sprint').classList.remove('pressed');$('primary').classList.remove('pressed');}
function beginThrow(){if(!playing||paused||state.reset>0)return;if(state.owner!==state.controlled){dispatch({type:'catch'});return;}charging=true;charge=.3;dragAim=null;}
function endThrow(){if(!charging)return;charging=false;dispatch({type:'throw',x:aim.x,z:aim.z,power:charge});$('primary').classList.remove('pressed');mouse=null;dragAim=null;}
function cycleTarget(){if(state.owner===state.controlled){selected=(selected+1)%5;if(selected===state.controlled)selected=(selected+1)%5;mouse=null;dragAim=null;}else dispatch({type:'call'});}
function updateAim(){
  const p=state.athletes[state.controlled];let dest;
  if(dragAim)dest=dragAim;
  else if(mouse){const point=gfx.ray(mouse.x,mouse.y);if(point&&Math.abs(point.x)<100&&Math.abs(point.z)<150)dest=point;}
  if(!dest){if(selected===state.controlled)selected=(selected+1)%5;const t=state.athletes[selected],dist=Math.hypot(t.x-p.x,t.z-p.z);dest={x:t.x+t.vx*dist/19*.65,z:t.z+t.vz*dist/19*.65};}
  let tx=clamp(dest.x,-22,22),tz=clamp(dest.z,-53,53);
  if(mouse&&!dragAim){for(const t of state.athletes){if(t.team===0&&t.id!==state.controlled&&Math.hypot(t.x-tx,t.z-tz)<2.5){tx=t.x+t.vx*.2;tz=t.z+t.vz*.2;selected=t.id;break;}}}
  const dx=tx-p.x,dz=tz-p.z,dist=Math.hypot(dx,dz)||1,max=charging?8+28*charge:32,range=Math.min(dist,max);aim={x:p.x+dx/dist*range,z:p.z+dz/dist*range};
}
function startGame(){playing=true;paused=false;state=setup(['local']);selected=1;resetInput();$('menu').classList.add('hidden');document.body.classList.add('playing');for(const id of ['scoreboard','playercard','mapbox','matchtips','controls'])$(id).classList.remove('hidden');$('modal').classList.add('hidden');$('footerleft').textContent='HOLD SPACE TO THROW  /  E TO CATCH  /  Q TO CALL';lastEvent=-1;}
function openModal(help=false){if(!playing&& !help)return;paused=true;resetInput();$('modalTitle').textContent=help?'Make every pass count.':'Take a breather.';$('helpcontent').classList.remove('hidden');$('results').classList.add('hidden');$('resume').innerHTML=(playing?'BACK TO THE FIELD':'BACK TO THE ARENA')+' <span>→</span>';$('modal').classList.remove('hidden');}
function winModal(){paused=true;resetInput();$('modalTitle').textContent=state.winner===0?'The moment is yours.':'A match worth playing.';$('helpcontent').classList.add('hidden');$('results').classList.remove('hidden');$('results').innerHTML=`<strong style="color:#c5ef62;font:600 58px Barlow Condensed">${state.score[0]} — ${state.score[1]}</strong><br>${state.winner===0?'SKYRIDERS WIN':'WINDADDICTS WIN'}<br>${state.completed} completed catches · ${state.interceptions} interceptions`;$('resume').innerHTML='PLAY ANOTHER MATCH <span>→</span>';$('modal').classList.remove('hidden');}
$('start').onclick=startGame;$('help').onclick=()=>openModal(true);$('pause').onclick=()=>paused?resume():openModal();
function resume(){if(state.winner!==null){startGame();return;}paused=false;$('modal').classList.add('hidden');resetInput();}
$('resume').onclick=resume;$('restart').onclick=startGame;$('playercard').onclick=()=>{if(playing&&!paused)dispatch({type:'switch'});};
$('quality').onclick=()=>{high=!high;gfx?.quality(high);$('quality').textContent=high?'HIGH QUALITY':'PERFORMANCE';};
$('fullscreen').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen?.();else $('game').requestFullscreen?.().catch(()=>{});};
window.addEventListener('keydown',e=>{if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Tab'].includes(e.code))e.preventDefault();if(e.repeat)return;if(e.code==='Escape'){paused?resume():openModal();return;}if(e.code==='KeyH'){openModal(true);return;}if(e.code==='Backquote'){showStats=!showStats;$('perf').classList.toggle('hidden',!showStats);}if(!playing||paused)return;keys.add(e.code);if(e.code==='Space')beginThrow();if(e.code==='KeyE')dispatch({type:'catch'});if(e.code==='KeyQ')cycleTarget();if(e.code==='Tab')dispatch({type:'switch'});});
window.addEventListener('keyup',e=>{keys.delete(e.code);if(e.code==='Space')endThrow();});
window.addEventListener('blur',()=>{resetInput();if(playing&&!paused)openModal();});document.addEventListener('visibilitychange',()=>{if(document.hidden){resetInput();if(playing&&!paused)openModal();}});
$('world').addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&playing&&!paused)mouse={x:e.clientX,y:e.clientY};});
$('world').addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button===0&&playing&&!paused){mouse={x:e.clientX,y:e.clientY};beginThrow();}});
$('world').addEventListener('pointerup',()=>endThrow());
$('primary').addEventListener('pointerdown',e=>{e.preventDefault();if(paused||!playing)return;e.currentTarget.setPointerCapture(e.pointerId);startPointer={x:e.clientX,y:e.clientY};beginThrow();$('primary').classList.add('pressed');});
$('primary').addEventListener('pointermove',e=>{if(!charging||!startPointer)return;const dx=e.clientX-startPointer.x,dy=e.clientY-startPointer.y;if(Math.hypot(dx,dy)>8){const p=state.athletes[state.controlled],angle=-dx*.009,range=clamp(18-dy*.10,6,36);dragAim={x:p.x+Math.sin(angle)*range,z:p.z+Math.cos(angle)*range};}});
for(const event of ['pointerup','pointercancel'])$('primary').addEventListener(event,()=>{if(event==='pointerup')endThrow();else charging=false;startPointer=null;$('primary').classList.remove('pressed');});
$('sprint').addEventListener('pointerdown',e=>{e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);sprintTouch=true;e.currentTarget.classList.add('pressed');});for(const event of ['pointerup','pointercancel'])$('sprint').addEventListener(event,()=>{sprintTouch=false;$('sprint').classList.remove('pressed');});
$('call').addEventListener('pointerdown',e=>{e.preventDefault();if(playing&&!paused)cycleTarget();});
let joyPointer=null;function moveJoy(e){const r=$('joystick').getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,limit=r.width*.32,dx=e.clientX-cx,dy=e.clientY-cy,len=Math.hypot(dx,dy),scale=len>limit?limit/len:1;joy={x:dx*scale/limit,z:-dy*scale/limit};$('stick').style.transform=`translate(${dx*scale*146/r.width}px,${dy*scale*146/r.height}px)`;}
$('joystick').addEventListener('pointerdown',e=>{e.preventDefault();joyPointer=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);moveJoy(e);});$('joystick').addEventListener('pointermove',e=>{if(e.pointerId===joyPointer)moveJoy(e);});for(const event of ['pointerup','pointercancel'])$('joystick').addEventListener(event,()=>{joyPointer=null;joy={x:0,z:0};$('stick').style.transform='';});
function drawMap(){const w=260,h=150;map.clearRect(0,0,w,h);const mx=z=>12+(z+50)/100*(w-24),my=x=>h/2+x/37*(h-22);map.fillStyle='#9bc95b18';map.fillRect(12,11,(w-24)*.18,h-22);map.fillStyle='#88bdd615';map.fillRect(w-12-(w-24)*.18,11,(w-24)*.18,h-22);map.strokeStyle='#b5d8c060';map.lineWidth=1;map.strokeRect(12,11,w-24,h-22);for(const z of [-32,0,32]){map.beginPath();map.moveTo(mx(z),11);map.lineTo(mx(z),h-11);map.stroke();}for(const a of state.athletes){map.fillStyle=a.team===0?'#bdec6b':'#dbe9e8';map.beginPath();if(a.id===state.controlled){map.moveTo(mx(a.z)+5,my(a.x));map.lineTo(mx(a.z)-4,my(a.x)-4);map.lineTo(mx(a.z)-4,my(a.x)+4);map.closePath();}else map.arc(mx(a.z),my(a.x),3,0,Math.PI*2);map.fill();}map.strokeStyle='#ffe3a1';map.lineWidth=2;map.beginPath();map.arc(mx(state.disc.z),my(state.disc.x),5,0,Math.PI*2);map.stroke();}
function hud(now){
  if(!playing)return;
  $('homeScore').textContent=state.score[0];$('awayScore').textContent=state.score[1];$('clock').textContent=`${String(Math.floor(state.time/60)).padStart(2,'0')}:${String(Math.floor(state.time%60)).padStart(2,'0')}`;
  const p=state.athletes[state.controlled],owns=state.owner===state.controlled,approach=state.flight&&Math.hypot(state.disc.x-p.x,state.disc.z-p.z)<11;
  $('playernum').textContent=String(p.number).padStart(2,'0');$('possession').textContent=owns?`IN POSSESSION · ${Math.max(0,10-Math.floor(state.held))}s`:state.team===0?'ON OFFENSE':'ON DEFENSE';
  $('primaryLabel').textContent=owns?'THROW':state.team===0?'CATCH':'INTERCEPT';$('primaryKey').textContent=owns?'SPACE':'E';$('primary').classList.toggle('ready',!!approach);$('discIcon').style.opacity=owns?'1':'.55';
  $('call').querySelector('b').textContent=owns?'TARGET':'CALL';$('staminaFill').style.width=p.stamina*100+'%';$('chargebox').classList.toggle('hidden',!charging);$('powerFill').style.width=charge*100+'%';$('powerValue').textContent=Math.round(charge*100)+'%';
  $('contexttip').textContent=charging?'Aim your landing spot · release to throw':owns?'Hold THROW, aim, release to pass':approach?'MOVE TO THE DISC · TAP E TO CATCH':state.team===0?'Find open space · Q to call for a pass':'Close the passing lane · E to intercept';
  if(owns&&!state.reset){const pr=gfx.project({x:aim.x,y:1.6,z:aim.z});$('targetlabel').classList.toggle('hidden',pr.z>1||Math.abs(pr.x)>1||Math.abs(pr.y)>1);$('targetlabel').style.left=(pr.x*.5+.5)*innerWidth+'px';$('targetlabel').style.top=(-pr.y*.5+.5)*innerHeight+'px';$('targetdistance').textContent=Math.round(Math.hypot(aim.x-p.x,aim.z-p.z))+' m';$('targetname').textContent=mouse||dragAim?'LANDING ZONE':'PASS TO #'+state.athletes[selected].number;}else $('targetlabel').classList.add('hidden');
  if(lastEvent!==state.eventId){lastEvent=state.eventId;const message=events[state.event];if(message){$('eventkicker').textContent=message[0];$('eventtext').textContent=message[1];$('announcement').classList.add('active');eventUntil=now+(state.event==='goal'||state.event==='opponent-goal'?2100:1250);}if(state.winner!==null)setTimeout(winModal,1600);}
  if(matchMedia('(pointer:coarse)').matches){$('contexttip').textContent=charging?'Drag to aim · release to throw':owns?'Hold THROW · drag to aim · release':approach?'MOVE TO THE DISC · TAP CATCH':state.team===0?'Get open · tap CALL for a pass':'Close the lane · tap INTERCEPT';}if(now>eventUntil)$('announcement').classList.remove('active');drawMap();
}
async function boot(){
  try {gfx=await createScene($('world'),(p,msg)=>{$('loadbar').style.width=p*100+'%';$('loadstatus').textContent=msg;});$('start').disabled=false;$('startLabel').textContent='ENTER THE MATCH';$('loading').style.opacity='.25';
    window.__freshbee={get state(){return structuredClone(state);},dispatch,setup:()=>{state=setup(['local']);return state;},get renderInfo(){return {calls:gfx.renderer.info.render.calls,triangles:gfx.renderer.info.render.triangles,fps,animations:gfx.athletes[0].run?'run':'none'};}};
    if(new URLSearchParams(location.search).has('test'))window.__freshbee.setState=s=>{state=structuredClone(s);};
    requestAnimationFrame(frame);
  }catch(error){console.error(error);$('loadstatus').textContent='The 3D arena could not load. Check WebGL support and reload.';$('startLabel').textContent='RELOAD ARENA';$('start').disabled=false;$('start').onclick=()=>location.reload();}
}
function frame(now){
  const cpuStart=performance.now(),dt=Math.min(.05,(now-lastFrame)/1000);lastFrame=now;
  const sprint=sprintTouch||keys.has('ShiftLeft')||keys.has('ShiftRight');
  if(playing&&!paused&&state.winner===null){
    if(charging)charge=Math.min(1,charge+dt*.72);updateAim();
    let x=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0)+joy.x,z=(keys.has('KeyW')||keys.has('ArrowUp')?1:0)-(keys.has('KeyS')||keys.has('ArrowDown')?1:0)+joy.z;
    x=-x;const len=Math.hypot(x,z);if(len>1){x/=len;z/=len;}
    simAccumulator+=dt;while(simAccumulator>=1/60){dispatch({type:'step',x,z,sprint});simAccumulator-=1/60;}
  }else simAccumulator=0;
  gfx.render(state,paused?0:dt,{menu:!playing,aim,charging,sprint});hud(now);
  frameCount++;totalCpu+=performance.now()-cpuStart;
  if(now-statTime>1000){fps=frameCount*1000/(now-statTime);if(showStats)$('perf').textContent=`${fps.toFixed(0)} FPS · ${gfx.renderer.info.render.calls} draws\nCPU ${(totalCpu/frameCount).toFixed(1)}ms · GPU browser-managed`;statTime=now;frameCount=0;totalCpu=0;}
  requestAnimationFrame(frame);
}
window.addEventListener('resize',()=>gfx?.resize());boot();
