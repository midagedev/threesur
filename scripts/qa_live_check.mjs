import { chromium } from '@playwright/test';
const URL='https://midagedev.github.io/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(URL,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(2500);
const info = await p.evaluate(()=>({
  hasGameTest: typeof window.__GAME_TEST__!=='undefined',
  hasDebug: typeof window.__DEBUG__!=='undefined',
  dbg: window.__DEBUG__?.info?window.__DEBUG__.info():null,
  title: !!Array.from(document.querySelectorAll('div')).find(d=>(d.textContent||'').includes('一騎當千')),
  startBtn: !!Array.from(document.querySelectorAll('button')).find(b=>/출진/.test(b.textContent||'')),
}));
console.log('LIVE:', JSON.stringify(info), 'errs:', errs.slice(0,2));
await b.close();
