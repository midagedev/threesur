import { chromium } from '@playwright/test';
const URL = 'http://localhost:5203/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type()==='error') errs.push('console:'+m.text()); });
await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(1600);
const hook = (fn,...a)=>p.evaluate(({fn,a})=>window.__GAME_TEST__[fn](...a),{fn,a});
const stats = ()=>p.evaluate(()=>window.__GAME_TEST__.stats);
await hook('selectHero','zhaoyun'); await p.waitForTimeout(500);
await hook('setInvulnerable',99999); await hook('setTime',420); // 7분 고밀도
for (const w of ['bow','talisman','sword','spear']) await hook('giveWeapon',w);
await hook('givePassive','area',5);
// 고밀도 플레이 12초 + 보스 소환 + 파성 유도
await hook('spawnBoss','dongzhuo'); await p.waitForTimeout(300);
let maxAlive=0;
for (let i=0;i<50;i++){ await p.keyboard.down(['w','d','s','a'][i%4]); await p.waitForTimeout(120); await p.keyboard.up(['w','d','s','a'][i%4]); const s=await stats(); if(s.state==='levelup') await p.keyboard.press('Digit1'); maxAlive=Math.max(maxAlive,s.alive); }
const s=await stats();
console.log(JSON.stringify({ scene:s.state, time:Math.round(s.time), maxAlive, bossActive:s.bossActive, bossHp01:s.bossHp01!=null?+s.bossHp01.toFixed(2):null, kills:s.kills, errCount:errs.length, errs:errs.slice(0,5) },null,2));
await b.close();
