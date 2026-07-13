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
await hook('selectHero', 'huangzhong');
await hook('setTime', 120);
await clearLevels();
await hook('setInvulnerable', 120);

// (A) 투사체 쇼케이스 — 3D 화살 형태를 다른 종류와 나란히 확인
await hook('showProjectiles');
await p.waitForTimeout(400);
await clearLevels();
await p.screenshot({ path: OUT + '/arrows_showcase.png' });

// (B) 밀집 전투에서 화살 다발 — 여러 프레임 캡처
await hook('setTime', 430);
await clearLevels();
await hook('giveWeapon', 'crossbow');
await p.waitForTimeout(1000);
await clearLevels();
for (let i = 0; i < 5; i++) { await p.waitForTimeout(130); await p.screenshot({ path: `${OUT}/arrows_c${i}.png` }); }

const frames = [];
for (let i = 0; i < 6; i++) { await p.waitForTimeout(140); frames.push(await dbg()); }
const avg = (k) => Math.round(frames.reduce((a, x) => a + x[k], 0) / frames.length);
const s = await stats();
console.log(JSON.stringify({ alive: s.alive, fps: avg('fps'), calls: avg('calls'), errs: errs.slice(0, 8) }, null, 2));
await b.close();
