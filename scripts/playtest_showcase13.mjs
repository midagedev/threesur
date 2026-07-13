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
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const dbg = () => p.evaluate(() => window.__DEBUG__.info());
const clearLevels = async () => {
  for (let i = 0; i < 80; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(50);
  }
};
await hook('selectHero', 'guanyu');
await hook('setTime', 450); // 대군 밀집
await clearLevels();
await hook('setInvulnerable', 120);
await p.waitForTimeout(1200);
await clearLevels();
// 유성우: 다수 폭발 → 광원 + 균열 데칼 + 적 수광
await hook('triggerEvent', 'meteor');
for (let i = 0; i < 7; i++) { await p.waitForTimeout(200); await clearLevels(); await p.screenshot({ path: `${OUT}/sc13_${i}.png` }); }
// 성능(300+ 목표 확인용, 밀집 유지)
const frames = [];
for (let i = 0; i < 10; i++) { await p.waitForTimeout(120); frames.push(await dbg()); }
const avg = (k) => Math.round(frames.reduce((a, x) => a + x[k], 0) / frames.length);
const mx = (k) => Math.max(...frames.map((x) => x[k]));
const s = await stats();
console.log(JSON.stringify({
  alive: s.alive, fps: avg('fps'), calls: avg('calls'), maxCalls: mx('calls'),
  errs: errs.slice(0, 10),
}, null, 2));
await b.close();
