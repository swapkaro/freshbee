import { describe, it, expect } from 'vitest';
import { setup, validateAction, applyAction, isGameOver } from '../src/logic.js';
const start=(training=true)=>applyAction(setup(['p']),'p',{type:'start',training});
const step=(s,n,f={x:0,z:0})=>{while(n-->0)s=applyAction(s,'p',{type:'frames',frames:[f]});return s;};
describe('Ultimate match mechanics',()=>{
 it('rejects spectators, bad input, giant batches, NaN, and invalid targets',()=>{const s=start();for(const [p,a] of [['x',{type:'pause'}],['p',{type:'frames',frames:[{x:NaN,z:0}]}],['p',{type:'frames',frames:[{x:0,z:0,target:6}]}],['p',{type:'frames',frames:Array(40).fill({x:0,z:0})}],['p',{type:'frames',frames:[{x:0,z:0,power:8}]}]])expect(validateAction(s,p,a).ok).toBe(false);});
 it('keeps carrier planted but runs a switched athlete',()=>{let s=start();let p=s.athletes[0];s=step(s,30,{x:1,z:-1});expect(s.athletes[0].x).toBe(p.x);expect(s.athletes[0].z).toBe(p.z);s=step(s,1,{x:0,z:0,command:'switch'});let x=s.athletes[1].x;s=step(s,30,{x:1,z:0});expect(s.athletes[1].x).toBeGreaterThan(x+1);});
 it('passes and catches with control transfer',()=>{let s=start();s=step(s,1,{x:0,z:0,command:'pass'});expect(s.disc.holder).toBe(-1);expect(s.active).toBe(1);s=step(s,140);expect(s.completions).toBe(1);expect(s.disc.holder).toBe(1);});
 it('missed manual throw turns over',()=>{let s=start();s=step(s,1,{x:1,z:0,command:'throw',power:1});s=step(s,300);expect(s.event).not.toBe('flight');expect(s.completions).toBe(0);});
 it('stall turns over after ten seconds',()=>{let s=step(start(false),601);expect(s.possession).toBe(1);expect(s.event).toBe('stall');});
 it('scores on an end-zone catch once',()=>{let s=start();s.athletes[0].z=-24;s.athletes[1].x=0;s.athletes[1].z=-36;for(let i=2;i<5;i++)s.athletes[i].x=16;s=step(s,1,{x:0,z:0,command:'pass'});s=step(s,70);expect(s.score[0]).toBe(1);expect(s.phase).toBe('point');s=step(s,100);expect(s.score[0]).toBe(1);});
 it('pauses and ends on match clock',()=>{let s=start(false);s=applyAction(s,'p',{type:'pause'});const clock=s.clock;s=step(s,50);expect(s.clock).toBe(clock);s.pause=false;s.clock=.01;s=step(s,1);expect(isGameOver(s).over).toBe(true);});
 it('deterministic and immutable over a long replay',()=>{let a=start(),b=start();const before=JSON.stringify(a);const next=step(a,1,{x:0,z:0,command:'pass'});expect(JSON.stringify(a)).toBe(before);expect(next).not.toBe(a);for(let i=0;i<800;i++){const f={x:Math.sin(i*.1),z:Math.cos(i*.12),...(i%121===0?{command:'pass'}:{})};a=step(a,1,f);b=step(b,1,f);}expect(a).toEqual(b);expect(JSON.parse(JSON.stringify(a))).toEqual(a);});
});
