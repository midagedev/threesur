import { chromium } from '@playwright/test';
const b=await chromium.launch({args:['--use-angle=metal']});
const p=await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:5188/threesur/',{waitUntil:'domcontentloaded'}); await p.waitForTimeout(1500);
await p.evaluate(()=>window.__GAME_TEST__?.selectHero?.('zhaoyun')); await p.waitForTimeout(500);
await p.evaluate(()=>window.__GAME_TEST__?.setTime?.(120));
for(let i=0;i<6;i++){ await p.keyboard.down('d'); await p.waitForTimeout(400); await p.keyboard.up('d'); }
const s=await p.evaluate(()=>window.__GAME_TEST__?.stats);
console.log('smoke: state=%s time=%s alive=%s kills=%s errs=%s', s?.state, s?.time?.toFixed(0), s?.alive, s?.kills, errs.slice(0,3));
await b.close();
