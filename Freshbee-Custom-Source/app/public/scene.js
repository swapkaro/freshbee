import * as THREE from 'three';
import {upgradeVisuals} from './realistic-visuals.js';
const TAU=Math.PI*2;
let seed=2307;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
export function createWorld(container){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#a8c8d4');scene.fog=new THREE.Fog('#b4cbd0',100,340);
 const camera=new THREE.PerspectiveCamera(53,1,.1,420);camera.position.set(27,12,43);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;container.appendChild(renderer.domElement);
 scene.add(new THREE.HemisphereLight('#d8eeff','#66734a',2.3));const sun=new THREE.DirectionalLight('#fff0d1',3.1);sun.position.set(-40,65,20);scene.add(sun);
 const tmp=new THREE.Object3D(),v=new THREE.Vector3(),q=new THREE.Quaternion(),unitY=new THREE.Vector3(0,1,0),mat=(c,rough=1)=>new THREE.MeshStandardMaterial({color:c,roughness:rough});
 const geo={box:new THREE.BoxGeometry(1,1,1),sphere:new THREE.SphereGeometry(1,12,9),cyl:new THREE.CylinderGeometry(1,1,1,10),cone:new THREE.ConeGeometry(1,1,8)};
 function mesh(g,m,x,y,z,sx=1,sy=1,sz=1){const a=new THREE.Mesh(g,m);a.position.set(x,y,z);a.scale.set(sx,sy,sz);scene.add(a);return a;}
 function instances(g,m,list){const batch=new THREE.InstancedMesh(g,m,list.length);for(let i=0;i<list.length;i++){const a=list[i];tmp.position.set(a.x,a.y,a.z);tmp.rotation.set(a.rx||0,a.ry||0,a.rz||0);tmp.scale.set(a.sx||1,a.sy||1,a.sz||1);tmp.updateMatrix();batch.setMatrixAt(i,tmp.matrix);if(a.color)batch.setColorAt(i,new THREE.Color(a.color));}scene.add(batch);return batch;}
 const turf=document.createElement('canvas');turf.width=turf.height=512;const tc=turf.getContext('2d');tc.fillStyle='#466239';tc.fillRect(0,0,512,512);for(let i=0;i<65000;i++){const n=rand();tc.strokeStyle=`rgba(${65+n*40|0},${86+n*55|0},${31+n*35|0},${.2+rand()*.6})`;const x=rand()*512,y=rand()*512;tc.beginPath();tc.moveTo(x,y);tc.lineTo(x+(rand()-.5)*4,y-rand()*5);tc.stroke();}
 const tex=new THREE.CanvasTexture(turf);tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(42,64);tex.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),8);tex.colorSpace=THREE.SRGBColorSpace;
 const groundMat=new THREE.MeshStandardMaterial({map:tex,roughness:1,color:'#b8c29c'});const ground=mesh(new THREE.PlaneGeometry(360,360),groundMat,0,-.035,0);ground.rotation.x=-Math.PI/2;
 const stripeMat=new THREE.MeshBasicMaterial({color:'#d6e0a6',transparent:true,opacity:.055,depthWrite:false});for(let z=-50;z<50;z+=10){const a=mesh(new THREE.PlaneGeometry(37,5),stripeMat,0,.004,z+2.5);a.rotation.x=-Math.PI/2;}
 const lines=[];function line(x,z,sx,sz){lines.push({x,y:.02,z,sx,sy:.018,sz});}line(-18.5,0,.09,100);line(18.5,0,.09,100);for(const z of [-50,-32,0,32,50])line(0,z,37,z===0?.035:.1);instances(geo.box,mat('#eeefcf'),lines);
 const zoneMat=new THREE.MeshBasicMaterial({color:'#e3d59d',transparent:true,opacity:.11,depthWrite:false});for(const z of [-41,41]){let a=mesh(new THREE.PlaneGeometry(37,18),zoneMat,0,.006,z);a.rotation.x=-Math.PI/2;}
 function sign(text,w,h,bg='#182e28',fg='#f3f0db',size=100){const cv=document.createElement('canvas');cv.width=1024;cv.height=256;const c=cv.getContext('2d');c.fillStyle=bg;c.fillRect(0,0,1024,256);c.fillStyle=fg;c.font=`700 ${size}px Arial`;c.textAlign='center';c.textBaseline='middle';c.fillText(text,512,132);const t=new THREE.CanvasTexture(cv);t.colorSpace=THREE.SRGBColorSpace;return new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:t,side:THREE.DoubleSide}));}
 for(const z of [-41,41]){const s=sign('F R E S H B E E',28,6,'#52673f','#bbc391',90);s.rotation.x=-Math.PI/2;s.position.set(0,.03,z);if(z===41)s.rotation.z=Math.PI;scene.add(s);}
 const cones=[];for(const x of [-18.7,18.7])for(const z of [-50,-32,32,50])cones.push({x,y:.21,z,sx:.15,sy:.42,sz:.15});instances(geo.cone,mat('#f99e4f'),cones);
 const concrete=mat('#7d8479');const railmat=mat('#83978c',.45);const structures=[];
 for(const side of [-1,1]){
  for(let row=0;row<4;row++)structures.push({x:side*(26+row*.85),y:.4+row*.48,z:-6,sx:.8,sy:.22,sz:72});
  structures.push({x:side*29.2,y:1,z:-6,sx:.18,sy:2,sz:73});
  const banner=sign('FRESHBEE   /   ULTIMATE FIELD CLUB   /   FRESHBEE',65,1.25,'#172d26','#dadfcc',55);banner.position.set(side*23,.7,-6);banner.rotation.y=side*Math.PI/2;scene.add(banner);
 }
 instances(geo.box,concrete,structures);
 const spectators=[];for(let i=0;i<440;i++){const side=i%2?1:-1,row=i%4;const z=-41+rand()*72;if(rand()<.1)continue;spectators.push({x:side*(26+row*.84),y:1+row*.48,z,sx:.18,sy:.34,sz:.17,color:['#465866','#b3baa9','#c6b291','#34463f','#866f5e','#899e9c'][i%6]});spectators.push({x:side*(26+row*.84),y:1.43+row*.48,z,sx:.11,sy:.14,sz:.11,color:['#b28d68','#72523d','#d5b895'][i%3]});}instances(geo.sphere,mat('#ffffff'),spectators);
 const trunks=[],leaves=[];for(let i=0;i<110;i++){const angle=TAU*i/110,r=85+rand()*45;let x=Math.cos(angle)*r,z=Math.sin(angle)*r;if(Math.abs(x)<32&&z>0)continue;let h=5+rand()*7;trunks.push({x,y:h/2,z,sx:.22+rand()*.2,sy:h,sz:.3});for(let j=0;j<4;j++)leaves.push({x:x+(rand()-.5)*5,y:h+rand()*3,z:z+(rand()-.5)*5,sx:2+rand()*2,sy:2.6+rand()*2,sz:2+rand()*2,color:['#314f35','#3f5e36','#486f3d','#5d773f'][i%4]});}instances(geo.cyl,mat('#65553b'),trunks).visible=false;instances(new THREE.IcosahedronGeometry(1,2),mat('#ffffff'),leaves).visible=false;
 const buildings=[],windows=[];for(let i=0;i<60;i++){const x=-150+i*5.4,z=-132-rand()*42,w=3+rand()*8,h=10+rand()*42,depth=4+rand()*8;buildings.push({x,y:h/2,z,sx:w,sy:h,sz:depth,color:['#748b96','#a8b4b4','#7a929e','#b9bbb0','#8fa2a7'][i%5]});for(let yy=4;yy<h-1;yy+=2.2)for(let xx=-w/2+1;xx<w/2-.4;xx+=1.3)windows.push({x:x+xx,y:yy,z:z+depth/2+.015,sx:.55,sy:1,sz:.02,color:rand()>.7?'#d4d7c3':'#526d7d'});}instances(geo.box,mat('#ffffff'),buildings).visible=false;instances(geo.box,mat('#ffffff'),windows).visible=false;
 const poles=[],lamps=[];for(const x of [-34,34])for(const z of [-45,25]){poles.push({x,y:10,z,sx:.14,sy:20,sz:.14});poles.push({x,y:20,z,sx:4,sy:.13,sz:.13});for(let j=-2;j<=2;j++)lamps.push({x:x+j*.7,y:19.7,z,sx:.48,sy:.65,sz:.23});}instances(geo.cyl,railmat,poles);instances(geo.box,mat('#eeeada'),lamps);
 for(const x of [-35,35]){mesh(geo.cyl,railmat,x,4,-61,.2,8,.2);}const board=sign('FRESHBEE   /   RIVERSIDE',15,4,'#162e26','#f5f1df',65);board.position.set(0,7,-60);scene.add(board);mesh(geo.cyl,railmat,-5,3.5,-60,.18,7,.18);mesh(geo.cyl,railmat,5,3.5,-60,.18,7,.18);
 const clouds=[];for(let i=0;i<80;i++)clouds.push({x:(rand()-.5)*400,y:60+rand()*45,z:-70-rand()*180,sx:7+rand()*15,sy:1.5+rand()*3,sz:3+rand()*9});instances(geo.sphere,new THREE.MeshBasicMaterial({color:'#e6eff0',transparent:true,opacity:.37,depthWrite:false}),clouds).visible=false;
 // Articulated anatomy shares material/geometry batches rather than a draw per limb.
 const actors=[],parts=[],batches=new Map();
 const materials={skin0:mat('#b58662',.82),skin1:mat('#75513d',.82),skin2:mat('#cfaa88',.82),home:mat('#202a25',.94),away:mat('#e4e6dc',.94),shorts:mat('#202821',.94),hair:mat('#25251e'),shoe:mat('#d5d7c8'),sock:mat('#bdc6b6'),face:mat('#574635')};
 function part(parent,key,g,pos,scale){const node=new THREE.Object3D();node.position.set(...pos);node.scale.set(...scale);parent.add(node);const k=key+'-'+g;parts.push({node,k});if(!batches.has(k))batches.set(k,{geometry:geo[g],material:materials[key],nodes:[]});batches.get(k).nodes.push(node);return node;}
 for(let i=0;i<10;i++){
  const root=new THREE.Object3D();scene.add(root);const torso=new THREE.Object3D();torso.position.y=.98;root.add(torso);const skin='skin'+i%3,kit=i<5?'home':'away';
  part(torso,kit,'sphere',[0,.32,0],[.25,.34,.145]);part(torso,kit,'sphere',[0,.52,0],[.285,.13,.15]);part(torso,'shorts','sphere',[0,.01,0],[.215,.15,.15]);part(torso,skin,'cyl',[0,.65,0],[.073,.17,.073]);
  const head=new THREE.Object3D();head.position.set(0,.83,0);torso.add(head);part(head,skin,'sphere',[0,0,0],[.135,.177,.133]);part(head,'hair','sphere',[0,.075,.025],[.139,.115,.137]);part(head,skin,'sphere',[0,-.015,-.139],[.025,.036,.035]);for(const x of [-1,1]){part(head,skin,'sphere',[x*.133,-.025,0],[.025,.046,.035]);part(head,'face','sphere',[x*.055,.015,-.12],[.018,.011,.012]);}
  const arms=[],legs=[];
  for(const side of [-1,1]){
   const arm=new THREE.Object3D();arm.position.set(side*.275,.49,0);torso.add(arm);part(arm,kit,'sphere',[0,-.075,0],[.105,.15,.105]);part(arm,skin,'sphere',[0,-.22,0],[.071,.19,.067]);const elbow=new THREE.Object3D();elbow.position.y=-.35;arm.add(elbow);part(elbow,skin,'sphere',[0,-.145,0],[.054,.17,.055]);part(elbow,skin,'sphere',[0,-.315,-.005],[.053,.075,.033]);arms.push({arm,elbow});
   const leg=new THREE.Object3D();leg.position.set(side*.13,0,0);torso.add(leg);part(leg,'shorts','sphere',[0,-.12,0],[.116,.195,.115]);part(leg,skin,'sphere',[0,-.285,0],[.085,.155,.083]);const knee=new THREE.Object3D();knee.position.y=-.4;leg.add(knee);part(knee,skin,'sphere',[0,-.12,0],[.062,.14,.068]);part(knee,'sock','sphere',[0,-.275,0],[.053,.13,.053]);part(knee,'shoe','sphere',[0,-.365,-.057],[.068,.047,.132]);legs.push({leg,knee});
  }
  const cv=document.createElement('canvas');cv.width=128;cv.height=128;const cx=cv.getContext('2d');cx.fillStyle=i<5?'#ececda':'#25352b';cx.textAlign='center';cx.font='bold 66px Arial';cx.fillText(String([23,11,7,19,4,17,31,8,12,6][i]),64,92);cx.font='bold 12px Arial';cx.fillText(i<5?'FRESHBEE':'BOSTON',64,27);const labelmat=new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(cv),transparent:true,side:THREE.DoubleSide,depthWrite:false});const label=new THREE.Mesh(new THREE.PlaneGeometry(.34,.34),labelmat);label.position.set(0,.34,.148);label.rotation.y=Math.PI;torso.add(label);
  actors.push({root,torso,head,arms,legs});
 }
 for(const b of batches.values()){b.mesh=new THREE.InstancedMesh(b.geometry,b.material,b.nodes.length);b.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);b.mesh.frustumCulled=false;scene.add(b.mesh);}
 const realVisuals=upgradeVisuals(scene,renderer,ground,sun,actors,batches);
 const shadows=new THREE.InstancedMesh(new THREE.CircleGeometry(1,24),new THREE.MeshBasicMaterial({color:'#0b2113',transparent:true,opacity:.2,depthWrite:false}),10);scene.add(shadows);
 const discGroup=new THREE.Group();scene.add(discGroup);const disc=new THREE.Mesh(new THREE.CylinderGeometry(.17,.165,.026,40),mat('#fffdec',.3));discGroup.add(disc);const rim=new THREE.Mesh(new THREE.TorusGeometry(.143,.01,8,40),mat('#183429'));rim.rotation.x=Math.PI/2;rim.position.y=.02;discGroup.add(rim);const discLogo=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,.001,24),mat('#1f3e2b'));discLogo.position.y=.016;discGroup.add(discLogo);
 const ring=new THREE.Mesh(new THREE.RingGeometry(.62,.7,48),new THREE.MeshBasicMaterial({color:'#efa15f',side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;scene.add(ring);const targetRing=new THREE.Mesh(new THREE.RingGeometry(.67,.71,40),new THREE.MeshBasicMaterial({color:'#faf4db',transparent:true,opacity:.8,side:THREE.DoubleSide}));targetRing.rotation.x=-Math.PI/2;scene.add(targetRing);
 const guideGeo=new THREE.BufferGeometry();const guidePositions=new Float32Array(26*3);guideGeo.setAttribute('position',new THREE.BufferAttribute(guidePositions,3));const guide=new THREE.Line(guideGeo,new THREE.LineDashedMaterial({color:'#f5e2b0',dashSize:.45,gapSize:.3,transparent:true,opacity:.6}));scene.add(guide);
 const trailGeo=new THREE.BufferGeometry(),trailPositions=new Float32Array(18*3);trailGeo.setAttribute('position',new THREE.BufferAttribute(trailPositions,3));const trail=new THREE.Line(trailGeo,new THREE.LineBasicMaterial({color:'#fff4cb',transparent:true,opacity:.4}));scene.add(trail);
 const camGoal=new THREE.Vector3(),lookGoal=new THREE.Vector3(),look=new THREE.Vector3(0,1,5);let mode=0,flightGuide=true,lastTick=-1;
 function resize(){const {width,height}=container.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();}new ResizeObserver(resize).observe(container);resize();
 function update(s,dt,charge=0){
  for(let i=0;i<10;i++){
   const p=s.athletes[i],a=actors[i],speed=Math.hypot(p.vx,p.vz),cycle=p.anim*2.7;
   a.root.position.set(p.x,0,p.z);a.root.rotation.y=-p.angle;
   const running=Math.min(1,speed/4),wave=Math.sin(cycle)*running,holding=s.disc.holder===i;
   a.torso.position.y=.98+Math.abs(Math.sin(cycle))*.045*running;a.torso.rotation.x=-running*.12+(p.dive>0?-Math.sin(p.dive/.85*Math.PI)*1.23:0);a.torso.position.y-=p.dive>0?Math.sin(p.dive/.85*Math.PI)*.48:0;
   a.legs[0].leg.rotation.x=wave*.7;a.legs[1].leg.rotation.x=-wave*.7;a.legs[0].knee.rotation.x=Math.max(0,-wave)*1.0;a.legs[1].knee.rotation.x=Math.max(0,wave)*1.0;
   for(let j=0;j<2;j++){a.arms[j].arm.rotation.x=(j===0?-wave:wave)*.5;a.arms[j].arm.rotation.z=(j===0?-1:1)*.1;a.arms[j].elbow.rotation.x=-.35-running*.6;}
   if(holding){a.arms[1].arm.rotation.x=-.55;a.arms[1].arm.rotation.z=-.6-charge*.8;a.arms[1].elbow.rotation.x=-1.1;a.legs[0].leg.rotation.z=.12;a.legs[1].leg.rotation.z=-.12;}else{a.legs[0].leg.rotation.z=0;a.legs[1].leg.rotation.z=0;}
   if(p.throwAnim>0){a.arms[1].arm.rotation.x=-1.1;a.arms[1].arm.rotation.z=-p.throwAnim*2.5;a.arms[1].elbow.rotation.x=-p.throwAnim;}
   if(p.fake>0&&p.team===0)a.arms[1].arm.rotation.z=-.8-Math.sin(p.fake*15)*.45;
   if(p.dive>0){a.arms[0].arm.rotation.x=a.arms[1].arm.rotation.x=-2.4;a.arms[0].elbow.rotation.x=a.arms[1].elbow.rotation.x=-.1;}
   a.root.updateMatrixWorld(true);tmp.position.set(p.x+.3,.033,p.z-.2);tmp.rotation.set(-Math.PI/2,0,0);tmp.scale.set(.53,.9,1);tmp.updateMatrix();shadows.setMatrixAt(i,tmp.matrix);
  }
  shadows.instanceMatrix.needsUpdate=true;
  for(const b of batches.values()){for(let i=0;i<b.nodes.length;i++)b.mesh.setMatrixAt(i,b.nodes[i].matrixWorld);b.mesh.instanceMatrix.needsUpdate=true;}
  const d=s.disc;
  if(d.holder>=0){const a=actors[d.holder];a.arms[1].elbow.localToWorld(v.set(0,-.36,-.02));discGroup.position.copy(v);discGroup.rotation.set(.12,0,.12);}
  else{discGroup.position.set(d.x,d.y,d.z);discGroup.rotation.y+=dt*19;discGroup.rotation.z=.07+Math.sin(d.age*3)*.06;discGroup.rotation.x=-Math.atan2(d.vy,Math.hypot(d.vx,d.vz))*.35;}
  // Slightly oversized flying disc improves tracking from a mobile camera.
  discGroup.scale.setScalar(d.holder<0?1.55:1);
  const active=s.athletes[s.active],target=s.athletes[s.target];ring.position.set(active.x,.05,active.z);targetRing.position.set(target.x,.045,target.z);targetRing.visible=d.holder>=0&&s.possession===0&&s.phase!=='ready';
  guide.visible=flightGuide&&d.holder===s.active&&s.phase==='playing';
  if(guide.visible){const h=s.athletes[d.holder],range=s.manual?10+charge*36:Math.hypot(target.x-h.x,target.z-h.z),dx=s.manual?Math.sin(s.aim)*range:target.x-h.x,dz=s.manual?-Math.cos(s.aim)*range:target.z-h.z;for(let i=0;i<26;i++){const f=i/25;guidePositions[i*3]=h.x+dx*f;guidePositions[i*3+1]=1.15+Math.sin(f*Math.PI)*Math.min(2,range*.05);guidePositions[i*3+2]=h.z+dz*f;}guide.geometry.attributes.position.needsUpdate=true;guide.computeLineDistances();}
  trail.visible=d.holder<0;
  if(s.tick!==lastTick){if(d.holder>=0)for(let i=0;i<18;i++){trailPositions[i*3]=d.x;trailPositions[i*3+1]=d.y;trailPositions[i*3+2]=d.z;}else{trailPositions.copyWithin(3,0,51);trailPositions[0]=d.x;trailPositions[1]=d.y;trailPositions[2]=d.z;}trail.geometry.attributes.position.needsUpdate=true;lastTick=s.tick;}
  if(s.phase==='ready'){const t=performance.now()*.00004;camGoal.set(27+Math.sin(t)*4,12,43);lookGoal.set(-2,1,-7);}
  else if(mode===1){camGoal.set(active.x*.25+27,34,active.z+28);lookGoal.set(active.x*.5,0,active.z-8);}
  else{camGoal.set(active.x+2.25,3.25,active.z+6.2);lookGoal.set(active.x,1.2,active.z-14);if(d.holder<0){lookGoal.x=active.x*.55+d.x*.45;lookGoal.y=Math.max(1.3,d.y*.65);}}
  camera.position.lerp(camGoal,1-Math.exp(-dt*3));look.lerp(lookGoal,1-Math.exp(-dt*4));camera.lookAt(look);
  realVisuals.update(s,dt,charge);
  if(d.holder>=0)realVisuals.handPosition(d.holder,discGroup.position);
  renderer.render(scene,camera);
 }
 return {update,renderer,camera,scene,actors:realVisuals.actors,ready:realVisuals.ready,get loaded(){return realVisuals.loaded;},resize,setCamera:()=>{mode=1-mode;return mode;},setQuality:realVisuals.setQuality,setGuide:v=>{flightGuide=v;},project:(x,y,z)=>{v.set(x,y,z).project(camera);return {x:(v.x+1)*.5*container.clientWidth,y:(1-v.y)*.5*container.clientHeight,visible:v.z<1&&Math.abs(v.x)<.94&&Math.abs(v.y)<.9};}};
}
