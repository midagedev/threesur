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
  for (let i = 0; i < 60; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(55);
  }
};
await hook('selectHero', 'zhangfei'); // 장팔사모(최강 넉백)
await hook('setBossFlags', true, true, true);
for (const w of ['guandao', 'halberd']) await hook('giveWeapon', w);
await hook('setTime', 320);
// 개활지에서 대군을 끌어모으며 이동 → 멈춰 서서 부채꼴 넉백 관찰
const keys = ['s', 'd', 'w', 'a'];
for (let i = 0; i < 10; i++) { await p.keyboard.down(keys[i % 4]); await p.waitForTimeout(560); await p.keyboard.up(keys[i % 4]); }
await clearLevels();
await p.waitForTimeout(700); // 인파가 다시 몰려 부채꼴로 밀려나는 순간
const s1 = await stats();
await p.screenshot({ path: OUT + '/of_knockback.png' });
// 맵 상태(오픈필드 = walls 0)
const dbg = await p.evaluate(() => window.__GAME_TEST__.stats.map ?? null);
// 호로관 세트피스
await hook('triggerHulao');
await p.waitForTimeout(700);
await p.screenshot({ path: OUT + '/of_hulao.png' });
const s2 = await stats();
// fps
const fps = [];
for (let i = 0; i < 8; i++) { await p.waitForTimeout(160); fps.push(await p.evaluate(() => window.__DEBUG__.info())); }
const avg = (k) => Math.round(fps.reduce((a, x) => a + x[k], 0) / fps.length);
console.log(JSON.stringify({
  openField: { alive: s1.alive, mapWalls: dbg ? dbg.walls : 'n/a', colliders: dbg ? dbg.colliders : 'n/a' },
  hulao: { walls: s2.map ? s2.map.walls : 'n/a', colliders: s2.map ? s2.map.colliders : 'n/a' },
  fps: avg('fps'), calls: avg('calls'), errs: errs.slice(0, 6),
}, null, 2));
await b.close();
