import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {clone} from 'three/addons/utils/SkeletonUtils.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
const V=THREE.Vector3;
export async function createScene(canvas, onProgress) {
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
  const scene=new THREE.Scene();scene.background=new THREE.Color('#a8cbdc');scene.fog=new THREE.Fog('#b1c9d1',95,210);
  const camera=new THREE.PerspectiveCamera(57,innerWidth/innerHeight,.1,240);camera.position.set(-4,3.8,-33);
  scene.add(new THREE.HemisphereLight('#d4eaff','#536635',2.25));
  const sun=new THREE.DirectionalLight('#fff3d7',3.5);sun.position.set(-35,48,-28);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-30;sun.shadow.camera.right=30;sun.shadow.camera.top=38;sun.shadow.camera.bottom=-38;sun.shadow.camera.near=1;sun.shadow.camera.far=160;sun.shadow.bias=-.0003;sun.shadow.normalBias=.025;sun.shadow.radius=3;scene.add(sun);scene.add(sun.target);
  const fill=new THREE.DirectionalLight('#beddf9',.6);fill.position.set(20,10,20);scene.add(fill);
  const sky=new THREE.Mesh(new THREE.SphereGeometry(225,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{sunDir:{value:new V(-.5,.65,-.35).normalize()}},vertexShader:'varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec3 vP;uniform vec3 sunDir;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}void main(){vec3 n=normalize(vP);float y=max(0.,n.y);vec3 c=mix(vec3(.77,.86,.89),vec3(.23,.51,.72),pow(y,.5));vec2 uv=n.xz/(y+.2)*3.;float cloud=noise(uv)*.55+noise(uv*2.)*.27+noise(uv*4.)*.13;float a=smoothstep(.50,.73,cloud)*smoothstep(.0,.35,y);c=mix(c,vec3(.97,.97,.94),a*.8);float sun=pow(max(0.,dot(n,sunDir)),250.);c+=vec3(1.,.85,.58)*sun*.6;gl_FragColor=vec4(c,1.);}`}));scene.add(sky);
  const materials={}, batches={};
  function mat(id,color,opts={}){materials[id]=new THREE.MeshStandardMaterial({color,roughness:.85,...opts});batches[id]=[];}
  mat('concrete','#77868a');mat('dark','#142938');mat('steel','#a8b1b4',{metalness:.6,roughness:.35});mat('roof','#adb9bd',{metalness:.3,side:THREE.DoubleSide});mat('teal','#247482');mat('white','#e8ede3');mat('black','#0c1c26');mat('light','#ffffff',{emissive:'#e3f4ff',emissiveIntensity:3});mat('cone','#ec8e42');
  const tmp=new THREE.Object3D();
  function geometry(g,id,x=0,y=0,z=0,rx=0,ry=0,rz=0){tmp.position.set(x,y,z);tmp.rotation.set(rx,ry,rz);tmp.scale.set(1,1,1);tmp.updateMatrix();g.applyMatrix4(tmp.matrix);batches[id].push(g);}
  function box(id,x,y,z,w,h,d,ry=0){geometry(new THREE.BoxGeometry(w,h,d),id,x,y,z,0,ry);}
  function beam(a,b,r=.09,id='steel'){const delta=new V().subVectors(b,a);const g=new THREE.CylinderGeometry(r,r,delta.length(),6);const q=new THREE.Quaternion().setFromUnitVectors(new V(0,1,0),delta.normalize());g.applyQuaternion(q);g.translate((a.x+b.x)/2,(a.y+b.y)/2,(a.z+b.z)/2);batches[id].push(g);}
  function ring(rx,rz,y,width,id){const n=112,positions=[],indices=[];for(let i=0;i<=n;i++){const a=i/n*Math.PI*2;positions.push(Math.cos(a)*rx,y,Math.sin(a)*rz,Math.cos(a)*(rx+width),y,Math.sin(a)*(rz+width));if(i<n){const k=i*2;indices.push(k,k+2,k+1,k+1,k+2,k+3);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();batches[id].push(g);}
  function riser(rx,rz,y){const pos=[],idx=[];for(let i=0;i<=112;i++){const a=i/112*Math.PI*2;pos.push(Math.cos(a)*rx,y,Math.sin(a)*rz,Math.cos(a)*rx,y-.55,Math.sin(a)*rz);if(i<112){let k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();batches.concrete.push(g);}
  // Bowl geometry. Merged material batches keep all tiers inexpensive to draw.
  for(let tier=0;tier<3;tier++){
    for(let row=0;row<10;row++){const r=tier*10+row;ring(27+r*.83,57+r*.83,1.6+r*.53+(tier*.8),.85,'concrete');riser(27+r*.83,57+r*.83,1.6+r*.53+tier*.8);}
    ring(26.6+tier*8.3,56.6+tier*8.3,1.2+tier*6.1,1,'dark');
  }
  ring(26,56,.5,1.2,'dark');ring(52,82,19.7,13,'roof');ring(51.5,81.5,19.55,.5,'steel');ring(57,87,22,8,'dark');
  for(let j=0;j<36;j++){
    const a=j/36*Math.PI*2,c=Math.cos(a),s=Math.sin(a);
    beam(new V(c*54,1,s*84),new V(c*57,23,s*87),.18);
    beam(new V(c*51,19.6,s*81),new V(c*65,22,s*95),.13);
    beam(new V(c*51,19.6,s*81),new V(c*57,23,s*87),.075);
    for(let k=0;k<5;k++) {const aa=a+(k-2)*.014;box('light',Math.cos(aa)*51.6,19.05,Math.sin(aa)*81.6,.72,.2,.5,-aa);}
  }
  // Seated spectators use two instanced draws with varied cloth/skin colours.
  const count=2400,people=new THREE.InstancedMesh(new THREE.BoxGeometry(.32,.44,.23),new THREE.MeshStandardMaterial({roughness:1}),count),heads=new THREE.InstancedMesh(new THREE.SphereGeometry(.12,5,3),new THREE.MeshStandardMaterial({roughness:1}),count);
  const crowdColors=['#e2dfd1','#617e8b','#284956','#b7c4bc','#50697d','#947568','#243744','#cab790','#748e8d','#304855'];
  let seed=1024;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  for(let i=0;i<count;i++){
    const row=Math.floor(i/80),tier=Math.floor(row/10),a=(i%80)/80*Math.PI*2+rand()*.022;
    tmp.position.set(Math.cos(a)*(27.5+row*.83),2.03+row*.53+tier*.8,Math.sin(a)*(57.5+row*.83));tmp.rotation.set(.05,Math.PI/2-a,0);tmp.scale.set(1,1,1);tmp.updateMatrix();people.setMatrixAt(i,tmp.matrix);people.setColorAt(i,new THREE.Color(crowdColors[Math.floor(rand()*crowdColors.length)]));tmp.position.y+=.39;tmp.updateMatrix();heads.setMatrixAt(i,tmp.matrix);heads.setColorAt(i,new THREE.Color(['#c69e7e','#aa7c5d','#785341','#ddba95'][Math.floor(rand()*4)]));
  }scene.add(people,heads);
  onProgress(.2,'Building the stadium…');
  const loader=new THREE.TextureLoader();const grass=await loader.loadAsync('/assets/grass_basecolor.png');grass.colorSpace=THREE.SRGBColorSpace;grass.wrapS=grass.wrapT=THREE.RepeatWrapping;grass.repeat.set(54,95);grass.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  const normal=await loader.loadAsync('/assets/grass_normal.png');normal.wrapS=normal.wrapT=THREE.RepeatWrapping;normal.repeat.copy(grass.repeat);
  const fieldMat=new THREE.MeshStandardMaterial({color:'#a8b78b',map:grass,normalMap:normal,normalScale:new THREE.Vector2(.3,.3),roughness:.96});
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(110,180),fieldMat);ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
  // Lawn mowing bands and true regulation-style boundaries.
  const stripeGeo=[];for(let i=0;i<10;i++){const g=new THREE.PlaneGeometry(37,5);g.rotateX(-Math.PI/2);g.translate(0,.006,-47.5+i*10);stripeGeo.push(g);}
  const stripes=new THREE.Mesh(mergeGeometries(stripeGeo),new THREE.MeshBasicMaterial({color:'#c1d698',transparent:true,opacity:.08,depthWrite:false}));scene.add(stripes);
  for(const x of [-18.5,18.5])box('white',x,.018,0,.12,.024,100);
  for(const z of [-50,-32,32,50])box('white',0,.018,z,37,.024,.13);
  for(let z=-40;z<=40;z+=10){for(const x of [-18.1,18.1])box('white',x,.022,z,.8,.024,.1);}
  box('white',0,.02,0,1.2,.022,.1);box('white',0,.02,0,.1,.022,1.2);
  const ezmat=new THREE.MeshBasicMaterial({color:'#244a54',transparent:true,opacity:.14,depthWrite:false});
  for(const z of [-41,41]){const ez=new THREE.Mesh(new THREE.PlaneGeometry(36.9,18),ezmat);ez.rotation.x=-Math.PI/2;ez.position.set(0,.009,z);scene.add(ez);}
  for(const x of [-19,19])for(const z of [-50,-32,32,50])geometry(new THREE.ConeGeometry(.16,.38,8),'cone',x,.19,z);
  function textTexture(text,bg='#102837',fg='#ecf1e7',width=1024,height=128){const c=document.createElement('canvas');c.width=width;c.height=height;const ctx=c.getContext('2d');ctx.fillStyle=bg;ctx.fillRect(0,0,width,height);ctx.fillStyle=fg;ctx.font=`700 ${height*.51}px Barlow, Arial`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,width/2,height*.52);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
  const adMat=new THREE.MeshBasicMaterial({map:textTexture('FreshBee    /    PLAY FURTHER.','#0d2938','#e8efdf'),side:THREE.DoubleSide});
  const adGeo=[];for(const side of [-1,1])for(let z=-48;z<50;z+=14){const g=new THREE.PlaneGeometry(13.7,1.1);g.rotateY(-side*Math.PI/2);g.translate(side*23,.72,z);adGeo.push(g);}
  for(const side of [-1,1])for(let x=-18;x<=18;x+=12){const g=new THREE.PlaneGeometry(11.7,1.1);g.rotateY(side>0?Math.PI:0);g.translate(x,.72,side*54);adGeo.push(g);}
  scene.add(new THREE.Mesh(mergeGeometries(adGeo),adMat));
  const ribbonMat=new THREE.MeshBasicMaterial({map:textTexture('F R E S H B E E     —     SAME GAME. MORE PEOPLE.','#163745','#dce5db'),side:THREE.DoubleSide});
  const ribbonGeo=[];for(const side of [-1,1])for(let z=-45;z<=45;z+=18){const g=new THREE.PlaneGeometry(17.8,.8);g.rotateY(-side*Math.PI/2);g.translate(side*35,7.75,z);ribbonGeo.push(g);}scene.add(new THREE.Mesh(mergeGeometries(ribbonGeo),ribbonMat));
  const endText=new THREE.Mesh(new THREE.PlaneGeometry(23,3.5),new THREE.MeshBasicMaterial({map:textTexture('F R E S H B E E','#294944','#a5bc93'),transparent:true,opacity:.55,depthWrite:false}));endText.rotation.x=-Math.PI/2;endText.rotation.z=Math.PI;endText.position.set(0,.025,43);scene.add(endText);
  const scoreboardCanvas=document.createElement('canvas');scoreboardCanvas.width=1024;scoreboardCanvas.height=384;const scoreCtx=scoreboardCanvas.getContext('2d');const scoreTexture=new THREE.CanvasTexture(scoreboardCanvas);scoreTexture.colorSpace=THREE.SRGBColorSpace;
  const board=new THREE.Mesh(new THREE.PlaneGeometry(14,5.25),new THREE.MeshBasicMaterial({map:scoreTexture}));board.rotation.y=Math.PI;board.position.set(0,14,75);scene.add(board);box('dark',0,14,75.4,14.5,5.8,.6);
  function updateBoard(home,away,time){scoreCtx.fillStyle='#081c2d';scoreCtx.fillRect(0,0,1024,384);scoreCtx.fillStyle='#c5ef62';scoreCtx.font='600 26px Arial';scoreCtx.textAlign='center';scoreCtx.fillText('FRESHBEE  /  ULTIMATE FRISBEE',512,60);scoreCtx.font='bold 140px Arial';scoreCtx.fillStyle='#f5f5f1';scoreCtx.fillText(`${home}  :  ${away}`,512,220);scoreCtx.font='28px Arial';scoreCtx.fillStyle='#b2c4c8';scoreCtx.fillText(`SKYRIDERS      ${time}      WINDADDICTS`,512,308);scoreTexture.needsUpdate=true;}
  updateBoard(0,0,'00:00');
  for(const [id,gs] of Object.entries(batches)){if(!gs.length)continue;for(const g of gs)g.deleteAttribute('uv');const mesh=new THREE.Mesh(mergeGeometries(gs),materials[id]);mesh.receiveShadow=true;scene.add(mesh);for(const g of gs)g.dispose();}
  // Real-time disc: raised rim, slightly domed face and concentric printed rings.
  const disc=new THREE.Group(),plastic=new THREE.MeshStandardMaterial({color:'#f8f8ef',roughness:.27,metalness:.03});
  const discBody=new THREE.Mesh(new THREE.CylinderGeometry(.145,.152,.019,40),plastic);discBody.castShadow=true;disc.add(discBody);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(.14,.011,6,40),plastic);rim.rotation.x=Math.PI/2;disc.add(rim);
  for(const r of [.07,.095]){const m=new THREE.Mesh(new THREE.TorusGeometry(r,.002,4,32),new THREE.MeshStandardMaterial({color:'#142b3b',roughness:.6}));m.rotation.x=Math.PI/2;m.position.y=.012;disc.add(m);}
  const mark=new THREE.Mesh(new THREE.BoxGeometry(.038,.002,.012),new THREE.MeshBasicMaterial({color:'#293d4d'}));mark.position.set(.04,.014,.03);disc.add(mark);scene.add(disc);
  const discShadow=new THREE.Mesh(new THREE.CircleGeometry(.21,24),new THREE.MeshBasicMaterial({color:'#07111b',transparent:true,opacity:.25,depthWrite:false}));discShadow.rotation.x=-Math.PI/2;scene.add(discShadow);
  const ringMesh=new THREE.Mesh(new THREE.RingGeometry(.48,.53,48),new THREE.MeshBasicMaterial({color:'#c5ef62',transparent:true,opacity:.75,depthWrite:false,side:THREE.DoubleSide}));ringMesh.rotation.x=-Math.PI/2;scene.add(ringMesh);
  const target=new THREE.Group();const targetRing=new THREE.Mesh(new THREE.RingGeometry(.65,.71,40),new THREE.MeshBasicMaterial({color:'#efffd7',transparent:true,opacity:.9,side:THREE.DoubleSide,depthWrite:false}));targetRing.rotation.x=-Math.PI/2;target.add(targetRing);const crossG=[];for(let j=0;j<4;j++){const a=j*Math.PI/2;const g=new THREE.BoxGeometry(.08,.03,.25);g.rotateY(a);g.translate(Math.sin(a)*.89,0,Math.cos(a)*.89);crossG.push(g);}target.add(new THREE.Mesh(mergeGeometries(crossG),new THREE.MeshBasicMaterial({color:'#d5fda2'})));scene.add(target);
  const path=new THREE.InstancedMesh(new THREE.SphereGeometry(.045,5,4),new THREE.MeshBasicMaterial({color:'#eafdd1',transparent:true,opacity:.82,depthTest:true}),36);scene.add(path);
  onProgress(.47,'Preparing your athlete…');
  const gltf=await new GLTFLoader().loadAsync('/assets/athlete.glb',p=>{if(p.total)onProgress(.47+.4*p.loaded/p.total,'Loading athlete and animations…');});
  const athletes=[];
  const box3=new THREE.Box3().setFromObject(gltf.scene),size=box3.getSize(new V());const scale=1.86/size.y;
  // Strip horizontal root translation so locomotion is driven only by game rules.
  const clips=gltf.animations.map(c=>{const cl=c.clone();cl.tracks=cl.tracks.filter(t=>!t.name.endsWith('.scale'));for(const track of cl.tracks){if(track.name.endsWith('.position')&&/hips|pelvis|root/i.test(track.name)){for(let k=0;k<track.values.length;k+=3){track.values[k]=track.values[0];track.values[k+2]=track.values[2];}}}return cl;});
  const runClip=clips.find(c=>/run/i.test(c.name))||clips[0];
  const badgeMat=new THREE.MeshBasicMaterial({color:'#c5ef62',side:THREE.DoubleSide,transparent:true,opacity:.9});
  for(let i=0;i<10;i++){
    const root=new THREE.Group(),model=clone(gltf.scene);model.scale.setScalar(scale);model.position.y=-box3.min.y*scale;
    const bones={},rest={};model.traverse(o=>{if(o.isBone){bones[o.name]=o;rest[o.name]={q:o.quaternion.clone(),p:o.position.clone()};}if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;o.material=o.material.clone();o.material.side=THREE.FrontSide;o.material.roughness=.83;}});
    // Recolour cloth only on the opposing team while preserving skin and shoes.
    if(i>=5) model.traverse(o=>{if(o.isMesh){o.material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>\n float clothMask = (1.0-smoothstep(0.12,0.29,max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b)))) * smoothstep(-0.015,0.015,diffuseColor.b-diffuseColor.r);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.82,0.86,0.85),clothMask*0.94);`);};o.material.customProgramCacheKey=()=> 'away-v1';}});
    root.add(model);scene.add(root);
    const mixer=new THREE.AnimationMixer(model);let run=null;if(runClip){run=mixer.clipAction(runClip);run.play();mixer.update(.15+i*.07);}
    const bindPose={};for(const [name,b]of Object.entries(bones))bindPose[name]=b.quaternion.clone();
    const shadow=new THREE.Mesh(new THREE.CircleGeometry(.38,18),new THREE.MeshBasicMaterial({color:'#112214',transparent:true,opacity:.2,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.025;scene.add(shadow);
    const label=document.createElement('canvas');label.width=128;label.height=128;const c=label.getContext('2d');c.fillStyle=i<5?'#c5ef62':'#e6eeee';c.font='bold 55px Arial';c.textAlign='center';c.fillText([7,10,21,14,9][i%5],64,69);const tx=new THREE.CanvasTexture(label);const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:tx,transparent:true,depthTest:false}));sprite.scale.set(.7,.7,1);scene.add(sprite);
    athletes.push({root,model,mixer,run,bones,bindPose,rest,shadow,sprite});
  }
  const cameraLook=new V(0,1.4,-16), desired=new V(), look=new V();let lastScore='',camInitialized=false;
  function poseAthlete(a,p,dt,owner,controlled){
    a.root.position.set(p.x,0,p.z);a.root.rotation.y=p.face;const speed=Math.hypot(p.vx,p.vz);
    if(a.run){a.run.timeScale=Math.max(.45,speed/4.5);a.mixer.update(dt);if(speed<.25){a.run.time=.07;a.mixer.update(0);for(const [n,b] of Object.entries(a.bones)){if(/leg|foot|toe|hips/i.test(n)){b.quaternion.copy(a.rest[n].q);b.position.copy(a.rest[n].p);}}}}
    const lean=Math.min(.13,speed*.018);a.model.rotation.x=lean;
    // Pose the throwing/catching arms over locomotion without moving the root.
    for(const [name,b] of Object.entries(a.bones)) {
      const lower=name.toLowerCase();
      if(/rightarm|upperarm_r|upperarm\.r|r_upperarm/.test(lower)){
        if(p.throwPose>0)b.rotation.x-=Math.sin((.55-p.throwPose)/.55*Math.PI)*1.4;
        else if(owner===p.id){b.rotation.z-=.4;b.rotation.x-=.65;}
        else if(p.reach>0)b.rotation.x-=1.4;
      }
      if(/leftarm|upperarm_l|upperarm\.l|l_upperarm/.test(lower)&&p.reach>0)b.rotation.x-=1.3;
    }
    a.shadow.position.set(p.x,.025,p.z);a.sprite.position.set(p.x,2.6,p.z);a.sprite.visible=p.id!==controlled;
  }
  function render(s, dt, state) {
    for(let i=0;i<10;i++)poseAthlete(athletes[i],s.athletes[i],dt,s.owner,s.controlled);
    const p=s.athletes[s.controlled];
    disc.position.set(s.disc.x,s.disc.y,s.disc.z);if(s.owner>=0){const hand=athletes[s.owner].bones.RightHand;if(hand){athletes[s.owner].root.updateMatrixWorld(true);hand.getWorldPosition(disc.position);disc.position.y+=.02;}}disc.scale.setScalar(s.flight?1.35:1);disc.rotation.y+=dt*(s.flight?33:1);disc.rotation.z=s.flight?Math.sin(s.time*3)*.07:.06;disc.rotation.x=s.flight?.08:0;
    discShadow.position.set(s.disc.x,.03,s.disc.z);discShadow.scale.setScalar(1+s.disc.y*.13);discShadow.material.opacity=.3/(1+s.disc.y*.5);
    ringMesh.position.set(p.x,.035,p.z);ringMesh.material.opacity=.5+Math.sin(s.time*4)*.1;
    if(state.menu){
      desired.set(p.x-3.3,2.7,p.z-4.7);look.set(p.x+1.2,1.3,p.z+3.5);
      // Offset the hero into the right third beneath the launch typography.
      camera.setViewOffset(innerWidth,innerHeight,-innerWidth*.20,0,innerWidth,innerHeight);
    }else{
      camera.clearViewOffset();const ahead=s.flight?Math.min(6,Math.max(-3,s.disc.z-p.z))*.16:0;
      desired.set(p.x-1.15,3.2,p.z-5.5);look.set(p.x+.45,1.25,p.z+6+ahead);
    }
    if(!camInitialized){camera.position.copy(desired);cameraLook.copy(look);camInitialized=true;}else{camera.position.lerp(desired,1-Math.exp(-dt*5));cameraLook.lerp(look,1-Math.exp(-dt*7));}
    camera.lookAt(cameraLook);camera.fov+=( (state.sprint?62:57)-camera.fov)*Math.min(1,dt*4);camera.updateProjectionMatrix();
    sun.target.position.set(p.x,0,p.z+12);sun.position.set(p.x-35,48,p.z-28);
    const aiming=s.owner===s.controlled&&!state.menu&&!s.reset;
    path.visible=aiming;target.visible=aiming||!!s.flight;
    if(s.flight){target.position.set(s.flight.ex,.055,s.flight.ez);target.scale.setScalar(1.2+Math.sin(s.time*7)*.1);targetRing.material.color.set(s.flight.team===0?'#c5ef62':'#ffd5a1');}else targetRing.material.color.set('#efffd7');
    if(aiming){
      const dest=state.aim,dx=dest.x-p.x,dz=dest.z-p.z,dist=Math.hypot(dx,dz)||1;
      target.position.set(dest.x,.055,dest.z);target.scale.setScalar(1+Math.sin(s.time*5)*.035);
      for(let i=0;i<36;i++){const t=i/35,w=Math.sin(t*Math.PI);tmp.position.set(p.x+dx*t-dz/dist*w*.28,1.15+w*(1.15+dist*.045),p.z+dz*t+dx/dist*w*.28);tmp.rotation.set(0,0,0);tmp.scale.setScalar(state.charging?1:.65);tmp.updateMatrix();path.setMatrixAt(i,tmp.matrix);}path.instanceMatrix.needsUpdate=true;
    }
    const time=`${String(Math.floor(s.time/60)).padStart(2,'0')}:${String(Math.floor(s.time%60)).padStart(2,'0')}`,key=s.score.join()+time;
    if(key!==lastScore){updateBoard(...s.score,time);lastScore=key;}
    renderer.render(scene,camera);
  }
  function resize(){renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();camInitialized=false;}
  function quality(high){renderer.setPixelRatio(high?Math.min(devicePixelRatio,1.5):1);renderer.shadowMap.enabled=high;people.count=high?2400:1200;heads.count=people.count;resize();}
  onProgress(1,'The field is ready.');
  return {renderer,scene,camera,render,resize,quality,athletes,project(v){return new V(v.x,v.y??.1,v.z).project(camera);},ray(x,y){const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(x/innerWidth*2-1,1-y/innerHeight*2),camera);const out=new V();return ray.ray.intersectPlane(new THREE.Plane(new V(0,1,0),0),out);}};
}
