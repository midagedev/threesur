import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
async function shot(w, h, tag) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:5204/threesur/?touch', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1600);
  const hook = (fn,...a)=>p.evaluate(({fn,a})=>window.__GAME_TEST__[fn](...a),{fn,a});
  await hook('selectHero','zhaoyun'); await p.waitForTimeout(500);
  await hook('setInvulnerable',99999); await hook('setTime',120); await hook('fillMusou');
  await p.waitForTimeout(400);
  // 조이스틱 활성화: 좌하단 터치 드래그
  await p.touchscreen.tap(Math.round(w*0.22), Math.round(h*0.82)).catch(()=>{});
  await p.waitForTimeout(200);
  await p.screenshot({ path: `${OUT}/mob_${tag}.png` });
  await ctx.close();
}
await shot(390, 844, 'portrait');
await shot(844, 390, 'landscape');
console.log('done');
await b.close();
