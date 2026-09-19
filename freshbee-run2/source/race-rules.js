export const meta = { game: 'FRESHBEE: FRISBEE DISC RACE', minPlayers: 1, maxPlayers: 1 };
const DT=1/60, LENGTH=2400, BASE_SPEED=43;
const FORKS=[{start:330,end:650},{start:1000,end:1320},{start:1580,end:1920}];
function course(){
 const list=[]; const add=(type,z,x,w=2)=>list.push({id:list.length,type,z,x,w});
 add('ring',90,0,2.5); add('log',155,0,5); add('rock',222,-6,2.8); add('vine',275,3,5);
 for(const f of FORKS){
  add('log',f.start+70,-12,4.3); add('drop',f.start+142,-12,4.5); add('ring',f.start+174,-12,2.7); add('log',f.end-58,-13,2.8);
  add('rock',f.start+96,2.9,1.8); add('ring',f.start+168,-1.5,2.4); add('rock',f.end-59,-2.8,1.6);
  add('bridge',f.start+72,12,4.8); add('vine',f.start+172,12,4.8); add('ring',f.start+232,12,2.6);
 }
 add('rock',712,-8,3); add('log',772,2,7); add('vine',834,-4,7); add('whirl',909,5,4); add('ring',949,-6,2.7);
 add('bridge',1388,0,19); add('underrock',1402,-7,3); add('underrock',1410,7,3); add('ring',1455,0,2.5); add('bridge',1517,0,19); add('underrock',1530,6,3);
 add('vine',1980,0,7); add('ring',2042,-7,2.7); add('rock',2098,4,3.2); add('log',2150,-3,6); add('ring',2200,5,2.7); add('whirl',2250,-6,3.7); add('vine',2310,2,5); add('ring',2360,0,3);
 return list.sort((a,b)=>a.z-b.z);
}
export function setup(players){return {players:[...players],phase:'ready',t:0,z:0,x:0,vx:0,y:0.45,speed:BASE_SPEED,mode:'surface',modeT:0,spin:0,jumpCD:0,diveCD:0,spinCD:0,boost:0,hitT:0,hits:0,rings:0,cuts:0,route:null,routeIndex:-1,routes:[],forks:FORKS.map(f=>({...f})),obstacles:course(),cleared:[],event:'',eventSerial:0,finishTime:0};}
export function validateAction(s,p,a){
 if(!s.players.includes(p))return {ok:false,error:'not a racer'};
 if(!a||!['start','tick','jump','dive','spin','pause','resume','restart'].includes(a.type))return {ok:false,error:'unknown action'};
 if(a.type==='tick'&&(!Number.isFinite(a.steer)||Math.abs(a.steer)>1))return {ok:false,error:'steer must be within -1 and 1'};
 if(['tick','jump','dive','spin','pause'].includes(a.type)&&s.phase!=='racing')return {ok:false,error:'race is not running'};
 if(a.type==='start'&&s.phase!=='ready')return {ok:false,error:'already started'};
 if(a.type==='resume'&&s.phase!=='paused')return {ok:false,error:'not paused'};
 if(a.type==='jump'&&(s.mode!=='surface'||s.jumpCD>0))return {ok:false,error:'jump recharging'};
 if(a.type==='dive'&&(s.mode!=='surface'||s.diveCD>0))return {ok:false,error:'dive recharging'};
 if(a.type==='spin'&&s.spinCD>0)return {ok:false,error:'spin recharging'};
 return {ok:true};
}
export function applyAction(s,p,a){
 if(!validateAction(s,p,a).ok)return s;
 if(a.type==='restart')return setup(s.players);
 if(a.type==='start'||a.type==='resume')return {...s,phase:'racing'};
 if(a.type==='pause')return {...s,phase:'paused'};
 if(a.type==='jump')return {...s,mode:'jump',modeT:.95,jumpCD:1.1,event:'jump',eventSerial:s.eventSerial+1};
 if(a.type==='dive')return {...s,mode:'dive',modeT:1.05,diveCD:1.3,event:'dive',eventSerial:s.eventSerial+1};
 if(a.type==='spin')return {...s,spin:.7,spinCD:1.1,event:'spin',eventSerial:s.eventSerial+1};
 const n={...s,t:s.t+DT,cleared:[...s.cleared],routes:[...s.routes]};
 for(const k of ['spin','jumpCD','diveCD','spinCD','boost','hitT'])n[k]=Math.max(0,s[k]-DT);
 n.modeT=Math.max(0,s.modeT-DT);
 if(n.modeT===0&&s.mode!=='surface'){n.mode='surface';n.event=s.mode==='jump'?'land':'surface';n.eventSerial++;}
 n.y=n.mode==='jump'?.45+Math.sin((1-n.modeT/.95)*Math.PI)*3.8:n.mode==='dive'?.45-Math.min(1,(1.05-n.modeT)*9,n.modeT*9)*2.8:.45;
 const fi=FORKS.findIndex(f=>s.z>=f.start&&s.z<f.end);
 if(fi!==-1&&s.routeIndex!==fi){n.route=s.x < -5 ? -1 : s.x >5 ? 1:0;n.routeIndex=fi;n.routes.push(n.route);n.event='route';n.eventSerial++;}
 if(fi===-1)n.route=null;
 const factor=n.route===-1?1.22:n.route===1?1.14:n.route===0?.94:1;
 const target=BASE_SPEED*factor+(n.boost>0?15:0);
 n.speed=s.speed+(target-s.speed)*(n.hitT>0?.022:.045);
 n.vx=s.vx+(a.steer*17-s.vx)*.18;
 n.x=s.x+n.vx*DT;
 let low=-18.2,high=18.2;
 if(fi!==-1){low=n.route*12-4.6;high=n.route*12+4.6;}
 if(n.x<low||n.x>high){n.x=Math.max(low,Math.min(high,n.x));n.vx*=.2;}
 n.z=Math.min(LENGTH,s.z+n.speed*DT);
 for(const o of s.obstacles){
  if(o.z<s.z-4||o.z>n.z+2||n.cleared.includes(o.id))continue;
  if(s.z<=o.z&&n.z>=o.z){
   n.cleared.push(o.id);
   if(Math.abs(n.x-o.x)>o.w+.65)continue;
   if(o.type==='ring'){if(n.mode!=='dive'&&n.y<2.5){n.boost=1.6;n.rings++;n.event='boost';n.eventSerial++;}continue;}
   const pass=(['log','rock','drop'].includes(o.type)&&n.y>1.75)||(o.type==='bridge'&&n.y<-.7)||(o.type==='underrock'&&n.mode!=='dive')||(o.type==='whirl'&&n.y>2);
   if(pass){if(o.type==='drop'){n.boost=1.2;n.event='waterfall';n.eventSerial++;}continue;}
   if(o.type==='vine'&&n.spin>0){n.boost=1.4;n.cuts++;n.event='cut';n.eventSerial++;continue;}
   if(n.hitT<=0){n.speed=Math.max(25,n.speed*.52);n.hitT=.8;n.hits++;n.boost=0;n.event='hit';n.eventSerial++;}
  }
 }
 if(n.z>=LENGTH){n.phase='finished';n.finishTime=n.t;n.event='finish';n.eventSerial++;}
 return n;
}
export function isGameOver(s){return s.phase==='finished'?{over:true,winner:s.players[0],time:s.finishTime}:{over:false};}
export function viewFor(s,p){return {...s,you:p,goal:'Reach the finish quickly',next:'Read the river and choose your line'};}
