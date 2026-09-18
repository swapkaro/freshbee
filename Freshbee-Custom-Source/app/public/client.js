import { setup, applyAction, validateAction } from '../src/logic.js';
import { createWorld } from './scene.js';
const $=id=>document.getElementById(id),names=['A. MORGAN','J. RIVERA','K. PARK','S. REED','T. ELLIS'];
const text={ready:'',start:'FIND YOUR SPACE. LET IT FLY.',flight:'DISC IN FLIGHT',huck:'GO LONG. CHASE IT DOWN.',catch:'CLEAN CATCH',interception:'INTERCEPTION · POSSESSION CHANGED',ground:'DISC DOWN · TURNOVER',out:'OUT OF BOUNDS · TURNOVER',stall:'STALL TEN · TURNOVER',fake:'MARKER FROZEN · FIND THE LANE',score:'POINT, FRESHBEE!',opponentScore:'POINT, BOSTON',restart:'NEW POINT · PLAY ON',fulltime:'FULL TIME'};
let playerId;try{playerId=localStorage.getItem('freshbee-player');if(!playerId){playerId=crypto.randomUUID();localStorage.setItem('freshbee-player',playerId);}}catch{playerId=crypto.randomUUID();}
let state=setup([playerId]),world,ws,connected=false,initialized=false,buffer=[],commands=[],keys={},joy={x:0,z:0},sprintTouch=false,charging=false,chargeStart=0,charge=0,modal=false,lastEvent=-1,accumulator=0,last=performance.now(),hudTick=0,frameCount=0,perfTime=performance.now(),fps=60,restarting=false;
const qs=new URLSearchParams(location.search),room=qs.get('room')||'solo-'+playerId.slice(0,24);
$('arena').classList.add('is-menu');
try{world=createWorld($('world'));$('play').disabled=true;$('training').disabled=true;$('play').innerHTML='LOADING ATHLETES & FIELD <span>…</span>';world.ready.then(()=>{$('play').disabled=false;$('training').disabled=false;$('play').innerHTML='TAKE THE FIELD <span>↗</span>';}).catch(()=>{$('webgl-error').hidden=false;$('webgl-error').innerHTML='<h2>Visual assets could not load</h2><p>Please reload the game. All detailed player and field assets must finish loading before play.</p>';});}catch(err){$('webgl-error').hidden=false;console.error('Graphics initialization failed',err);}
function connection(label){$('connection').textContent=label;}
function connect(){
 if(window.FRESHBEE_OFFLINE || location.protocol==='file:'){
  try{const saved=JSON.parse(localStorage.getItem('freshbee-local-match')||'null');if(saved?.version===1){state=saved;state.players=[playerId];}}catch{}
  connected=true;initialized=true;state.canControl=true;
  ws={readyState:1,send:raw=>{if(raw==='__ping')return;const msg=JSON.parse(raw);if(msg.type==='reset'){state=setup([playerId]);state.canControl=true;initialized=true;restarting=false;syncScreen();}try{localStorage.setItem('freshbee-local-match',JSON.stringify(state));}catch{}}};
  syncScreen();if(state.pause)showModal();connection('LOCAL MATCH');return;
 }
 initialized=false;connection('CONNECTING');ws=new WebSocket(`${location.protocol==='https:'?'wss':'ws'}://${location.host}/ws/${encodeURIComponent(room)}`);
 ws.onopen=()=>ws.send(JSON.stringify({type:'join',playerId}));
 ws.onmessage=e=>{if(e.data==='__pong')return;const m=JSON.parse(e.data);if(m.type==='state'&&m.view){connected=true;connection('MATCH SAVED');if(!initialized||restarting){state=m.view;initialized=true;buffer=[];restarting=false;syncScreen();if(state.pause)showModal();}if(!m.view.canControl){connection('SPECTATING');state=m.view;}}
 else if(m.type==='error'){console.warn(m.error);connection('SYNC ERROR');state.pause=true;showModal();}};
 ws.onclose=()=>{connected=false;connection('RECONNECTING');state.pause=true;buffer=[];setTimeout(connect,1800);};
 ws.onerror=()=>connection('CONNECTION LOST');
}
connect();
function send(action){if(!connected||!state.canControl&&initialized&&state.canControl===false)return;flush();state=applyAction(state,playerId,action);ws.send(JSON.stringify({type:'action',action}));syncScreen();}
function flush(){if(buffer.length&&connected&&ws.readyState===1){ws.send(JSON.stringify({type:'action',action:{type:'frames',frames:buffer}}));buffer=[];}}
function syncScreen(){const menu=state.phase==='ready';$('intro').hidden=!menu;$('arena').classList.toggle('is-menu',menu);$('finished').hidden=state.phase!=='over';if(state.phase==='over'){charging=false;$('resultTitle').textContent=state.score[0]>state.score[1]?'YOU OWNED THE FIELD.':state.score[0]===state.score[1]?'HONORS EVEN.':'THE NEXT ONE IS YOURS.';$('resultScore').textContent=`${state.score[0]} — ${state.score[1]}`;$('resultStats').textContent=`${state.completions} completions from ${state.passes} throws. Keep the spirit. Keep playing.`;}}
function start(training){if(!connected){connection('WAITING FOR CONNECTION');return;}send({type:'start',training});}
$('play').onclick=()=>start(false);$('training').onclick=()=>start(true);
function restart(){flush();restarting=true;initialized=false;charging=false;commands=[];modal=false;$('modal').hidden=true;ws.send(JSON.stringify({type:'reset'}));}
$('restart').onclick=restart;$('again').onclick=restart;
function showModal(){if(modal)return;modal=true;charging=false;charge=0;keys={};joy={x:0,z:0};if(state.phase==='playing'&&!state.pause)send({type:'pause'});$('modal').hidden=false;}
function hideModal(){modal=false;$('modal').hidden=true;if(state.pause)send({type:'pause'});}
$('help').onclick=showModal;$('settings').onclick=()=>modal?hideModal():showModal();$('closeModal').onclick=hideModal;$('resume').onclick=hideModal;
function camera(){const m=world?.setCamera();$('camera-label').textContent=m?'TACTICAL CAM':'FOLLOW CAM';}
$('camera').onclick=camera;$('quality').onchange=e=>world?.setQuality(e.target.checked);$('aimHelp').onchange=e=>world?.setGuide(e.target.checked);
function command(cmd,power){if(state.phase!=='playing'||state.pause||modal)return;commands.push({command:cmd,...(power===undefined?{}:{power})});}
for(const [id,cmd] of Object.entries({pass:'pass',huck:'huck',fake:'fake',dive:'dive',switch:'switch'}))$(id).onclick=()=>command(cmd);
function beginCharge(){if(state.phase!=='playing'||state.pause||modal||charging)return;charging=true;chargeStart=performance.now();$('throw').classList.add('charging');}
function endCharge(){if(!charging)return;charge=Math.min(1,(performance.now()-chargeStart)/1100);command('throw',charge);charging=false;charge=0;$('throw').classList.remove('charging');}
function cancelCharge(){charging=false;charge=0;$('throw').classList.remove('charging');}
$('throw').addEventListener('pointerdown',e=>{e.preventDefault();$('throw').setPointerCapture(e.pointerId);beginCharge();});$('throw').addEventListener('pointerup',endCharge);$('throw').addEventListener('pointercancel',cancelCharge);
$('sprint').addEventListener('pointerdown',e=>{e.preventDefault();$('sprint').setPointerCapture(e.pointerId);sprintTouch=true;});for(const type of ['pointerup','pointercancel'])$('sprint').addEventListener(type,()=>sprintTouch=false);
const bindings={KeyE:'pass',KeyQ:'target',KeyR:'switch',KeyF:'fake',KeyX:'dive',KeyH:'huck'};
window.addEventListener('keydown',e=>{if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Tab'].includes(e.code))e.preventDefault();keys[e.code]=true;if(e.repeat)return;if(e.code==='Escape'){modal?hideModal():showModal();return;}if(modal)return;if(e.code==='KeyC')camera();if(e.code==='Space')beginCharge();if(bindings[e.code])command(bindings[e.code]);});
window.addEventListener('keyup',e=>{keys[e.code]=false;if(e.code==='Space')endCharge();});
window.addEventListener('blur',()=>{keys={};joy={x:0,z:0};sprintTouch=false;cancelCharge();if(state.phase==='playing'&&!state.pause)showModal();});document.addEventListener('visibilitychange',()=>{if(document.hidden)flush();});
let joyPointer=null;function moveJoy(e){if(e.pointerId!==joyPointer)return;const r=$('joystick').getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dz=e.clientY-r.top-r.height/2,len=Math.hypot(dx,dz),max=r.width*.32,f=Math.min(1,max/(len||1));joy={x:dx*f/max,z:dz*f/max};$('stick').style.transform=`translate(${dx*f}px,${dz*f}px)`;}
$('joystick').addEventListener('pointerdown',e=>{e.preventDefault();joyPointer=e.pointerId;$('joystick').setPointerCapture(e.pointerId);moveJoy(e);});$('joystick').addEventListener('pointermove',moveJoy);for(const name of ['pointerup','pointercancel'])$('joystick').addEventListener(name,e=>{if(e.pointerId===joyPointer){joyPointer=null;joy={x:0,z:0};$('stick').style.transform='';}});
function input(){const x=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0),z=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0);return {x:Math.max(-1,Math.min(1,x+joy.x)),z:Math.max(-1,Math.min(1,z+joy.z)),sprint:!!(keys.ShiftLeft||keys.ShiftRight||sprintTouch),...(commands.shift()||{})};}
const receiverButtons=[];for(let i=0;i<5;i++){const b=document.createElement('button');b.innerHTML=`<b>${[23,11,7,19,4][i]}</b> ${names[i].split(' ')[1]}`;b.onclick=()=>commands.push({target:i});$('receivers').appendChild(b);receiverButtons.push(b);}
const radar=$('radar').getContext('2d');function drawRadar(){radar.clearRect(0,0,148,108);radar.strokeStyle='#e6ecce55';radar.lineWidth=1;radar.strokeRect(10,8,128,92);for(const y of [25,83]){radar.beginPath();radar.moveTo(10,y);radar.lineTo(138,y);radar.stroke();}for(const p of state.athletes){radar.beginPath();radar.arc(10+(p.x+18.5)/37*128,8+(p.z+50)/100*92,p.id===state.active?3.8:2.4,0,Math.PI*2);radar.fillStyle=p.id===state.active?'#f4a46c':p.team===0?'#8cab83':'#f2eee0';radar.fill();}radar.fillStyle='#ffc677';radar.beginPath();radar.arc(10+(state.disc.x+18.5)/37*128,8+(state.disc.z+50)/100*92,2,0,Math.PI*2);radar.fill();}
function hud(){
 const p=state.athletes[state.active],holder=state.disc.holder,secs=Math.ceil(state.clock);
 $('homeScore').textContent=state.score[0];$('awayScore').textContent=state.score[1];$('clock').textContent=`${Math.floor(secs/60).toString().padStart(2,'0')}:${(secs%60).toString().padStart(2,'0')}`;$('modeLabel').textContent=state.training?'TRAINING':'FIRST TO 5';
 $('playerName').textContent=names[state.active];document.querySelector('.jersey').textContent=p.number;$('stamina').style.width=`${p.stamina*100}%`;$('player-role').textContent=holder===p.id?'HANDLER':state.possession===0?'CUTTER':'DEFENDER';
 $('possession').textContent=state.possession===0?(holder===p.id?'YOUR POSSESSION · PIVOT & PASS':holder<0?'DISC IN FLIGHT · CHASE THE CATCH':'FIND SPACE · E TO CALL FOR DISC'):'BOSTON POSSESSION · CLOSE THE LANE';
 $('hint').innerHTML=holder===p.id?'<kbd>E</kbd> Quick pass <i>·</i> <kbd>Q</kbd> Next receiver <i>·</i> <kbd>R</kbd> Switch player':'<kbd>SHIFT</kbd> Sprint <i>·</i> <kbd>E</kbd> Call for disc <i>·</i> <kbd>X</kbd> Dive';
 $('stall').textContent=Math.floor(state.stall);$('stallBar').style.width=`${state.stall*10}%`;$('stallBox').style.opacity=holder>=0&&!state.training?'1':'0';
 for(let i=0;i<5;i++){receiverButtons[i].hidden=i===holder;receiverButtons[i].classList.toggle('active',i===state.target);}
 $('power').style.width=`${charge*100}%`;$('powerText').textContent=charging?`${Math.round(charge*100)}% · RELEASE TO THROW`:'HOLD SPACE, RELEASE TO THROW';
 if(state.eventTick!==lastEvent){lastEvent=state.eventTick;$('event').textContent=text[state.event]||'';syncScreen();}
 $('event').classList.toggle('visible',!!text[state.event]&&state.tick-state.eventTick<100&&state.phase!=='ready');
 if(world&&holder>=0&&state.possession===0&&state.phase==='playing'){const t=state.athletes[state.target],point=world.project(t.x,2.7,t.z);$('target-label').hidden=!point.visible;if(point.visible){$('target-label').style.left=point.x+'px';$('target-label').style.top=point.y+'px';$('target-label').querySelector('b').textContent=`#${t.number} · ${names[state.target].split(' ')[1]}`;}}else $('target-label').hidden=true;
 drawRadar();
}
function frame(now){const dt=Math.min(.05,(now-last)/1000);last=now;accumulator+=dt;if(charging)charge=Math.min(1,(now-chargeStart)/1100);
 while(accumulator>=1/60){if(!world?.loaded){accumulator-=1/60;continue;}if(connected&&initialized&&state.phase==='playing'&&!state.pause&&!modal&&state.canControl!==false){const f=input();state=applyAction(state,playerId,{type:'frames',frames:[f]});buffer.push(f);if(buffer.length>=12)flush();}else if(connected&&initialized&&state.phase==='point'&&!state.pause&&!modal){const f={x:0,z:0};state=applyAction(state,playerId,{type:'frames',frames:[f]});buffer.push(f);if(buffer.length>=12)flush();}accumulator-=1/60;}
 if(state.phase==='over')flush();world?.update(state,dt,charge);if(++hudTick%4===0)hud();frameCount++;if(now-perfTime>1000){fps=Math.round(frameCount*1000/(now-perfTime));frameCount=0;perfTime=now;}
 if(qs.has('debug')){$('debug').hidden=false;$('debug').textContent=`${fps} FPS | ${world?.renderer.info.render.calls||0} draws | CPU render + sim ${dt.toFixed(3)}s | GPU timing unavailable`;}
 requestAnimationFrame(frame);
}requestAnimationFrame(frame);setInterval(()=>{if(ws.readyState===1)ws.send('__ping');},25000);
window.freshbee={get state(){return structuredClone(state);},command,start,pause:showModal,get metrics(){return {fps,drawCalls:world?.renderer.info.render.calls,triangles:world?.renderer.info.render.triangles,webgl:!!world,connected,visualAssetsLoaded:!!world?.loaded,athleteCount:world?.actors.length};},validateAction};
