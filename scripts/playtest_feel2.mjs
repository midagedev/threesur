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
const clearLevels = async () => {
  for (let i = 0; i < 90; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(45);
  }
};
await hook('selectHero', 'guanyu');
await hook('setTime', 470); // 대군 밀집
await clearLevels();
// 무적 없이 포위당하며 서 있기 → 지속적 피격(비네트) + 아군 타격(스케일 펀치)
await p.waitForTimeout(1200);
await clearLevels();
// 빠른 연속 캡처: 타격 펀치/데미지 팝 + 붉은 피격 비네트를 포착
for (let i = 0; i < 12; i++) {
  await p.waitForTimeout(60);
  await p.screenshot({ path: `${OUT}/feel2_${i}.png` });
}
const s = await stats();
console.log(JSON.stringify({ alive: s.alive, errs: errs.slice(0, 6) }, null, 2));
await b.close();
