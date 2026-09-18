import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
const asset=name=>window.FRESHBEE_ASSETS?.[name]||new URL('./assets/'+name,document.baseURI).href;
const Y=new THREE.Vector3(0,1,0),X=new THREE.Vector3(1,0,0),Z=new THREE.Vector3(0,0,1);
export function upgradeVisuals(scene,renderer,ground,sun,legacyActors,legacyBatches){
 let loaded=false,error=null;const actors=[];const loader=new THREE.TextureLoader();const temp=new THREE.Vector3(),temp2=new THREE.Vector3(),tempQ=new THREE.Quaternion(),parentQ=new THREE.Quaternion(),deltaQ=new THREE.Quaternion();
 for(const a of legacyActors)a.root.visible=false;for(const b of legacyBatches.values())b.mesh.visible=false;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.02;
 scene.fog=new THREE.Fog('#9dbac3',120,340);scene.background=new THREE.Color('#86b9db');
 scene.traverse(o=>{if(o.isHemisphereLight){o.intensity=1.45;o.color.set('#d5e5f2');o.groundColor.set('#556244');}});
 sun.intensity=3.2;sun.color.set('#fff2d9');sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-26;sun.shadow.camera.right=26;sun.shadow.camera.top=31;sun.shadow.camera.bottom=-31;sun.shadow.camera.near=1;sun.shadow.camera.far=145;sun.shadow.normalBias=.018;sun.shadow.bias=-.0002;scene.add(sun.target);ground.receiveShadow=true;
 const ready=Promise.all([
  new GLTFLoader().loadAsync(asset('athlete.glb')),
  loader.loadAsync(asset('turf-base.jpg')),
  loader.loadAsync(asset('turf-normal.jpg')),
  loader.loadAsync(asset('turf-rough.jpg')),
  loader.loadAsync(asset('skyline.jpg'))
 ]).then(([home,base,normal,rough,sky])=>{
  const away=home;
  for(const t of [base,normal,rough]){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(100,100);t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());}
  base.colorSpace=THREE.SRGBColorSpace;ground.material.map=base;ground.material.normalMap=normal;ground.material.normalScale.set(.48,.48);ground.material.roughnessMap=rough;ground.material.color.set('#d3ddb8');ground.material.roughness=.94;ground.material.needsUpdate=true;
  sky.colorSpace=THREE.SRGBColorSpace;sky.anisotropy=4;sky.wrapS=THREE.RepeatWrapping;sky.repeat.set(4,1);
  // Distant photographic environment; live ground and actors remain real geometry.
  const panorama=new THREE.Mesh(new THREE.CylinderGeometry(190,190,138,128,1,true,0,Math.PI*2),new THREE.MeshBasicMaterial({map:sky,side:THREE.BackSide,fog:false,toneMapped:false}));panorama.position.y=57;panorama.rotation.y=Math.PI;scene.add(panorama);
  for(const gltf of [home,away]){let hasSkin=false;gltf.scene.traverse(o=>{if(o.isSkinnedMesh)hasSkin=true;});if(!hasSkin||!gltf.animations.length)throw new Error('Athlete asset must contain a skeleton and locomotion clip.');}
  for(let i=0;i<10;i++){
   const gltf=i<5?home:away,clip=gltf.animations[0].clone();clip.name='Run';
   const root=new THREE.Group(),pivot=new THREE.Group(),model=clone(gltf.scene);scene.add(root);root.add(pivot);pivot.add(model);
   const bones=[],byName={};model.traverse(o=>{if(o.isBone){bones.push({bone:o,q:o.quaternion.clone(),p:o.position.clone(),s:o.scale.clone(),run:o.quaternion.clone()});byName[o.name]=o;}
    if(o.isSkinnedMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;o.material=kitMaterial(o.material,i);}
   });
   model.updateMatrixWorld(true);const bbox=new THREE.Box3().setFromObject(model,true),scale=1.82/(bbox.max.y-bbox.min.y);model.scale.multiplyScalar(scale);model.position.y=-bbox.min.y*scale;
   const mixer=new THREE.AnimationMixer(model),run=mixer.clipAction(clip);run.play();mixer.setTime(i*.113);
   const hips=byName.Hips,baseHip=bones.find(b=>b.bone===hips);actors.push({root,pivot,model,bones,byName,mixer,run,weight:0,scale,hips,baseHip,number:[23,11,7,19,4,17,31,8,12,6][i],home:i<5});
  }
  loaded=true;return {actors:actors.length,baseSkins:1,uniformVariants:2,clips:home.animations.length};
 }).catch(e=>{error=e;console.error('Visual asset load failed',e);throw e;});
 function kitMaterial(original,index){
  const m=original.clone();m.transparent=false;m.opacity=1;m.depthWrite=true;m.side=THREE.FrontSide;m.roughness=.83;m.metalness=0;m.envMapIntensity=.6;
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;const c=canvas.getContext('2d');c.clearRect(0,0,256,256);c.fillStyle=index<5?'#f7f6ee':'#18221d';c.textAlign='center';c.font='bold 29px Arial';c.fillText(index<5?'FRESHBEE':'BOSTON',128,42);c.font='bold 150px Arial';c.fillText(String([23,11,7,19,4,17,31,8,12,6][index]),128,196);const badge=new THREE.CanvasTexture(canvas);badge.colorSpace=THREE.SRGBColorSpace;
  m.onBeforeCompile=shader=>{
   shader.uniforms.uAway={value:index>=5?1:0};shader.uniforms.uJerseyBadge={value:badge};
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vKitPosition; varying vec3 vKitNormal;').replace('#include <begin_vertex>','#include <begin_vertex>\nvKitPosition=position;vKitNormal=normal;');
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vKitPosition; varying vec3 vKitNormal; uniform float uAway; uniform sampler2D uJerseyBadge;').replace('#include <map_fragment>',`#include <map_fragment>
    float maxC=max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b));
    float minC=min(diffuseColor.r,min(diffuseColor.g,diffuseColor.b));
    float sat=(maxC-minC)/(maxC+0.001);
    float zone=smoothstep(0.84,0.91,vKitPosition.y)*(1.0-smoothstep(1.405,1.48,vKitPosition.y));
    float fabric=zone*(1.0-smoothstep(0.28,0.55,sat))*(1.0-smoothstep(0.19,0.34,maxC));
    vec3 ivory=vec3(0.78,0.79,0.75)*(0.70+clamp(maxC*5.0,0.0,0.32));
    diffuseColor.rgb=mix(diffuseColor.rgb,ivory,fabric*uAway);
    vec2 badgeUV=vec2(0.5-vKitPosition.x/0.34,(vKitPosition.y-1.025)/0.315);
    if(vKitPosition.z< -0.012 && vKitNormal.z< -0.30 && badgeUV.x>0.0 && badgeUV.x<1.0 && badgeUV.y>0.0 && badgeUV.y<1.0){vec4 printColor=texture2D(uJerseyBadge,badgeUV);diffuseColor.rgb=mix(diffuseColor.rgb,printColor.rgb,printColor.a);}
   `);
  };
  m.customProgramCacheKey=()=>`freshbee-real-kit-${index<5?'home':'away'}`;return m;
 }
 function direction(a,name,child,x,y,z){
  const bone=a.byName[name],end=a.byName[child];if(!bone||!end)return;
  bone.getWorldPosition(temp);end.getWorldPosition(temp2);temp2.sub(temp).normalize();
  temp.set(x,y,z).normalize().applyQuaternion(a.root.quaternion);
  deltaQ.setFromUnitVectors(temp2,temp);bone.getWorldQuaternion(tempQ);tempQ.premultiply(deltaQ);bone.parent.getWorldQuaternion(parentQ).invert();bone.quaternion.copy(parentQ.multiply(tempQ));bone.updateMatrixWorld(true);
 }
 function update(state,dt,charge){
  if(!loaded)return;
  const focus=state.athletes[state.active];sun.position.set(focus.x-38,65,focus.z+24);sun.target.position.set(focus.x,0,focus.z-5);sun.target.updateMatrixWorld();
  for(let i=0;i<actors.length;i++){
   const a=actors[i],p=state.athletes[i],speed=Math.hypot(p.vx,p.vz),holding=state.disc.holder===i;
   a.root.position.set(p.x,0,p.z);a.root.rotation.set(0,Math.PI-p.angle,0);a.pivot.rotation.x=0;a.pivot.position.y=0;
   a.mixer.timeScale=Math.max(.2,speed/5.1);a.mixer.update(dt);let hipY=a.hips.position.y;
   for(const b of a.bones){b.run.copy(b.bone.quaternion);b.bone.quaternion.copy(b.q);b.bone.position.copy(b.p);b.bone.scale.copy(b.s);}
   a.root.updateMatrixWorld(true);
   // Rest pose is a true T-pose. Orient joint chains in world space rather
   // than assuming local bone axes shared by arbitrary generated rigs.
   direction(a,'LeftArm','LeftForeArm',.16,-1,.08);direction(a,'LeftForeArm','LeftHand',.08,-1,.16);
   direction(a,'RightArm','RightForeArm',-.16,-1,.08);direction(a,'RightForeArm','RightHand',-.08,-1,.16);
   const targetWeight=Math.min(1,speed/2.6);a.weight+=(targetWeight-a.weight)*(1-Math.exp(-dt*10));
   for(const b of a.bones)b.bone.quaternion.slerp(b.run,a.weight);
   a.hips.position.y=THREE.MathUtils.lerp(a.baseHip.p.y,hipY,a.weight);a.hips.position.x=a.baseHip.p.x;a.hips.position.z=a.baseHip.p.z;a.hips.scale.copy(a.baseHip.s);a.root.updateMatrixWorld(true);
   if(holding){
    const windup=charge*.5+(p.fake>0?Math.sin(p.fake*15)*.3:0);
    direction(a,'RightArm','RightForeArm',-.45-windup,-.55,.65);direction(a,'RightForeArm','RightHand',-.65-windup,.02,.68);
    direction(a,'LeftArm','LeftForeArm',.2,-.9,.15);direction(a,'LeftForeArm','LeftHand',-.2,-.25,1);
   }
   if(p.throwAnim>0){const f=1-p.throwAnim/.55;direction(a,'RightArm','RightForeArm',-.8+f*1.2,-.15,1);direction(a,'RightForeArm','RightHand',.1,0,1);}
   if(p.dive>0){const f=Math.sin(p.dive/.85*Math.PI);direction(a,'LeftArm','LeftForeArm',.1,.1,1);direction(a,'LeftForeArm','LeftHand',.1,0,1);direction(a,'RightArm','RightForeArm',-.1,.1,1);direction(a,'RightForeArm','RightHand',-.1,0,1);a.pivot.rotation.x=f*1.3;a.pivot.position.y=f*.65;}
   a.root.updateMatrixWorld(true);
  }
 }
 function handPosition(index,target){if(!loaded)return false;const a=actors[index],hand=a.byName.RightHand;if(!hand)return false;hand.getWorldPosition(target);temp.set(0,-.015,.08).applyQuaternion(a.root.quaternion);target.add(temp);return true;}
 function setQuality(high){renderer.shadowMap.enabled=high;renderer.setPixelRatio(high?Math.min(devicePixelRatio,1.5):1);}
 return {ready,actors,update,handPosition,setQuality,get loaded(){return loaded;},get error(){return error;}};
}
