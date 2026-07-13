import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('c:' + m.text()); });
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1600);
const hook = (fn, ...args) => p.evaluate(({ fn, args }) => window.__GAME_TEST__[fn](...args), { fn, args });
const clearLevels = async () => {
  for (let i = 0; i < 60; i++) {
    const s = await p.evaluate(() => window.__GAME_TEST__.stats);
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(60);
  }
};
await hook('selectHero', 'zhaoyun');
await hook('setBossFlags', true, true, true);
for (const w of ['guandao', 'crossbow']) await hook('giveWeapon', w);
await hook('setTime', 320);
// 크라우드 모으기
const keys = ['s', 'd', 'w', 'a'];
for (let i = 0; i < 8; i++) { await p.keyboard.down(keys[i % 4]); await p.waitForTimeout(600); await p.keyboard.up(keys[i % 4]); }
await clearLevels();
// 밀집(카메라 줌아웃) 샷
await p.waitForTimeout(400);
await p.screenshot({ path: OUT + '/move_dense.png' });
// 대시: 'd' 더블탭 → 동쪽 대시 (연출 캡처)
await p.keyboard.press('d');
await p.waitForTimeout(90);
await p.keyboard.press('d');
await p.waitForTimeout(110);
await p.screenshot({ path: OUT + '/move_dash.png' });
// fps 샘플
const fps = [];
for (let i = 0; i < 10; i++) { await p.waitForTimeout(180); fps.push(await p.evaluate(() => window.__DEBUG__.info())); }
const s = await p.evaluate(() => window.__GAME_TEST__.stats);
const avg = (k) => Math.round(fps.reduce((a, x) => a + x[k], 0) / fps.length);
console.log(JSON.stringify({ alive: s.alive, fps: avg('fps'), calls: avg('calls'), errs: errs.slice(0, 6) }));
await b.close();
