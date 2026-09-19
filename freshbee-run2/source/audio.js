const ASSETS={
 music:'/assets/audio/jungle-groove.mp3',water:'/assets/audio/river.mp3',
 jump:'/assets/audio/jump.mp3',boost:'/assets/audio/boost.mp3',
 splash:'/assets/audio/splash.mp3',dive:'/assets/audio/dive.mp3'
};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export class RaceAudio{
 constructor({onStatus=()=>{},storage,Context=globalThis.AudioContext||globalThis.webkitAudioContext,fetcher=globalThis.fetch?.bind(globalThis)}={}){
  if(storage===undefined){try{storage=globalThis.localStorage;}catch{storage=null;}}
  this.onStatus=onStatus;this.storage=storage;this.Context=Context;this.fetcher=fetcher;this.ctx=null;this.buffers={};this.loops={};this.voices=new Set();this.phase='ready';this.lastPhase='ready';this.hidden=false;this.lastEvent={};this.lastMix=-1;this.resumeTimer=null;this.ready=false;this.failures=[];
  this.settings={muted:false,music:.65,effects:.8};
  try{const s=JSON.parse(storage?.getItem('freshbee-audio-v1')||'null');if(s){this.settings.muted=!!s.muted;for(const k of ['music','effects'])if(Number.isFinite(s[k]))this.settings[k]=clamp(s[k],0,1);}}catch{}
  // Download without autoplay or an AudioContext; decoding starts after a real gesture.
  this.downloads={};for(const [key,url]of Object.entries(ASSETS))this.downloads[key]=fetcher(url).then(r=>{if(!r.ok)throw new Error('Audio asset unavailable');return r.arrayBuffer();}).catch(()=>{this.failures.push(key);return null;});
 }
 emit(){this.onStatus({ready:this.ready,muted:this.settings.muted,failures:[...this.failures],supported:!!this.Context});}
 persist(){try{this.storage?.setItem('freshbee-audio-v1',JSON.stringify(this.settings));}catch{}this.emit();}
 setVolume(channel,value){if(!['music','effects'].includes(channel))return;this.settings[channel]=clamp(Number(value)||0,0,1);this.lastMix=-1;this.persist();this.applyMix();}
 toggleMute(){this.settings.muted=!this.settings.muted;this.persist();this.applyMix();return this.settings.muted;}
 async unlock(){
  if(!this.Context){this.emit();return false;}
  clearTimeout(this.resumeTimer);
  if(!this.ctx){
   this.ctx=new this.Context({latencyHint:'interactive'});const c=this.ctx;
   this.master=c.createGain();this.master.gain.value=0;
   this.limiter=c.createDynamicsCompressor();this.limiter.threshold.value=-6;this.limiter.knee.value=3;this.limiter.ratio.value=16;this.limiter.attack.value=.002;this.limiter.release.value=.18;
   this.musicGain=c.createGain();this.waterGain=c.createGain();this.fxGain=c.createGain();this.musicFilter=c.createBiquadFilter();this.waterFilter=c.createBiquadFilter();
   this.musicFilter.type='lowpass';this.waterFilter.type='lowpass';this.musicFilter.frequency.value=18000;this.waterFilter.frequency.value=9000;
   this.musicGain.connect(this.musicFilter);this.musicFilter.connect(this.limiter);this.waterGain.connect(this.waterFilter);this.waterFilter.connect(this.limiter);this.fxGain.connect(this.limiter);this.limiter.connect(this.master);this.master.connect(c.destination);
   this.musicGain.gain.value=0;this.waterGain.gain.value=0;this.fxGain.gain.value=.8;
   // Each layer can start as soon as it decodes; one failed sound never blocks racing.
   this.loading=Promise.all(Object.entries(this.downloads).map(async([key,promise])=>{try{const bytes=await promise;if(!bytes)return;const buffer=await c.decodeAudioData(bytes.slice(0));this.buffers[key]=buffer;if(key==='music'||key==='water')this.ensureLoop(key);this.ready=!!this.buffers.music&&!!this.buffers.water;this.applyMix();this.emit();}catch{if(!this.failures.includes(key))this.failures.push(key);this.emit();}}));
  }
  try{await this.ctx.resume();this.applyMix();this.emit();return true;}catch{this.emit();return false;}
 }
 ensureLoop(key){if(!this.ctx||!this.buffers[key]||this.loops[key])return;const source=this.ctx.createBufferSource();source.buffer=this.buffers[key];source.loop=true;source.connect(key==='music'?this.musicGain:this.waterGain);source.start();this.loops[key]=source;}
 smooth(param,value,tau=.09){if(!param||!this.ctx)return;param.setTargetAtTime(value,this.ctx.currentTime,tau);}
 applyMix(){if(!this.ctx)return;const active=this.phase==='racing'||this.phase==='countdown';const running=active&&!this.hidden;this.smooth(this.master.gain,this.settings.muted||!running?0:.7,.045);this.smooth(this.musicGain.gain,this.settings.music*(this.phase==='countdown'?.55:1));this.smooth(this.fxGain.gain,this.settings.effects);if(!running)this.smooth(this.waterGain.gain,0);}
 setPhase(phase){if(this.phase===phase)return;this.phase=phase;clearTimeout(this.resumeTimer);this.applyMix();
  if(phase==='paused'||phase==='finished'||phase==='ready'){this.stopVoices();this.resumeTimer=setTimeout(()=>{if(this.ctx&&['paused','finished','ready'].includes(this.phase))this.ctx.suspend().catch(()=>{});},180);}
  else if(!this.hidden){this.ctx?.resume().catch(()=>{});}
 }
 setHidden(hidden){this.hidden=hidden;this.applyMix();if(hidden){clearTimeout(this.resumeTimer);this.stopVoices();this.ctx?.suspend().catch(()=>{});}else if(this.phase==='racing'||this.phase==='countdown'){this.ctx?.resume().catch(()=>{});}}
 restart(){clearTimeout(this.resumeTimer);this.stopVoices();this.lastEvent={};for(const source of Object.values(this.loops)){try{source.stop();}catch{}source.disconnect();}this.loops={};this.ensureLoop('music');this.ensureLoop('water');this.lastMix=-1;this.setPhase('countdown');}
 update(s){if(!this.ctx)return;this.setPhase(s.phase);if(s.phase!=='racing')return;const t=this.ctx.currentTime;if(t-this.lastMix<.08)return;this.lastMix=t;
  const speed=clamp((s.speed-25)/42,0,1),under=s.mode==='dive';const airborne=s.mode==='jump';
  this.smooth(this.waterGain.gain,this.settings.effects*(.28+speed*.43)*(under?.48:airborne?.38:1),.09);
  this.smooth(this.waterFilter.frequency,under?620:3400+speed*7000,.055);
  this.smooth(this.musicFilter.frequency,under?1500:18000,.06);
  this.smooth(this.musicGain.gain,this.settings.music*(s.boost>0?.80:under?.74:1),.10);
  if(this.loops.water)this.smooth(this.loops.water.playbackRate,.89+speed*.20,.15);
 }
 play(key,{volume=1,rate=1}={}){if(!this.ctx||this.ctx.state!=='running'||!this.buffers[key]||this.settings.muted||this.settings.effects===0||this.hidden||this.phase!=='racing')return false;
  const now=this.ctx.currentTime;if(now-(this.lastEvent[key]??-999)<.08)return false;this.lastEvent[key]=now;
  while(this.voices.size>=3){const oldest=this.voices.values().next().value;try{oldest.source.stop();}catch{}this.removeVoice(oldest);}
  const source=this.ctx.createBufferSource(),gain=this.ctx.createGain();source.buffer=this.buffers[key];source.playbackRate.value=rate;gain.gain.value=clamp(volume,0,1);source.connect(gain);gain.connect(this.fxGain);const voice={source,gain};this.voices.add(voice);source.onended=()=>this.removeVoice(voice);source.start(now);return true;
 }
 removeVoice(v){v.source.disconnect();v.gain.disconnect();this.voices.delete(v);}
 stopVoices(){for(const v of [...this.voices]){try{v.source.stop();}catch{}this.removeVoice(v);}}
 event(e){const actions={jump:()=>this.play('jump'),land:()=>this.play('splash'),dive:()=>this.play('dive',{volume:.85}),surface:()=>this.play('splash',{volume:.65,rate:1.2}),boost:()=>this.play('boost'),cut:()=>this.play('boost',{rate:1.1}),waterfall:()=>this.play('boost',{volume:.9}),spin:()=>this.play('jump',{volume:.38,rate:1.8}),hit:()=>this.play('splash',{volume:.75,rate:.7})};actions[e]?.();}
 debug(){return {context:this.ctx?.state||'locked',ready:this.ready,phase:this.phase,settings:{...this.settings},loaded:Object.keys(this.buffers),failures:[...this.failures],activeVoices:this.voices.size,loops:Object.keys(this.loops)};}
}
