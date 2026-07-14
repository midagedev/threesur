import { chromium } from '@playwright/test';
const b=await chromium.launch({args:['--use-angle=metal']});
const p=await b.newPage({viewport:{width:1280,height:720}});
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:5188/threesur/',{waitUntil:'networkidle'}); await p.waitForTimeout(1200);
const hook=(fn,...a)=>p.evaluate(({fn,a})=>window.__GAME_TEST__[fn](...a),{fn,a});
const drift=()=>p.evaluate(()=>globalThis.__drift);
await hook('selectHero','zhaoyun'); await p.waitForTimeout(400);
await hook('setInvulnerable',9999);
// (A) 직진 대시: 오른쪽 이동 유지 + Shift, 방향 변경 없음 → 부스트 없어야 함
await p.keyboard.down('d'); await p.waitForTimeout(200);
await p.keyboard.down('Shift'); await p.waitForTimeout(20); await p.keyboard.up('Shift');
let peakA=0, tierA=0;
for(let i=0;i<20;i++){ await p.waitForTimeout(20); const d=await drift(); if(d){peakA=Math.max(peakA,d.speed); tierA=Math.max(tierA,d.tier);} }
await p.keyboard.up('d'); await p.waitForTimeout(600);
// (B) 드리프트 대시: 오른쪽 대시 시작 → 즉시 위쪽으로 조향(수직, >40°) 유지 → 부스트 발동해야 함
await p.keyboard.down('d'); await p.waitForTimeout(150);
await p.keyboard.down('Shift'); await p.waitForTimeout(15); await p.keyboard.up('Shift');
await p.keyboard.up('d'); await p.keyboard.down('w'); // 대시 중 수직 조향
let peakB=0, tierB=0, chargeB=0;
for(let i=0;i<40;i++){ await p.waitForTimeout(20); const d=await drift(); if(d){peakB=Math.max(peakB,d.speed); tierB=Math.max(tierB,d.tier); chargeB=Math.max(chargeB,d.charge);} }
await p.keyboard.up('w');
console.log(JSON.stringify({ straightDash:{peakSpeed:peakA, boostTier:tierA}, driftDash:{peakSpeed:peakB, boostTier:tierB, maxCharge:chargeB}, errs:errs.slice(0,3) }));
await b.close();
