import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const URL = process.env.URL || 'http://localhost:5188/';
await mkdir(OUT, { recursive: true });
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
await p.goto(URL, { waitUntil: 'networkidle' });
await p.waitForTimeout(2000);
const hook = (fn, ...args) => p.evaluate(({ fn, args }) => window.__GAME_TEST__[fn](...args), { fn, args });
const info = () => p.evaluate(() => window.__DEBUG__.info());
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const clearLevels = async () => {
  for (let i = 0; i < 60; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1');
    await p.waitForTimeout(60);
  }
};

// 보스 없이 적만 대량 누적 (약한 무기 + 생존 패시브)
await hook('selectHero', 'zhaoyun');
await hook('setBossFlags', true, true, true);
await hook('givePassive', 'armor', 5);
await hook('givePassive', 'wine', 5);
await hook('setTime', 460);

const keys = ['d', 's', 'a', 'w'];
let maxAlive = 0;
const samples = [];
for (let i = 0; i < 26; i++) {
  const k = keys[i % 4];
  await p.keyboard.down(k);
  await p.waitForTimeout(900);
  await p.keyboard.up(k);
  await clearLevels();
  const s = await stats();
  maxAlive = Math.max(maxAlive, s.alive);
  if (i >= 12) samples.push(await info());
}
await p.screenshot({ path: OUT + '/perf.png' });
const avg = (arr, key) => Math.round(arr.reduce((a, x) => a + x[key], 0) / arr.length);
console.log(JSON.stringify({
  maxAlive,
  fps: avg(samples, 'fps'),
  calls: avg(samples, 'calls'),
  tris: avg(samples, 'tris'),
  geometries: samples.at(-1).geometries,
  textures: samples.at(-1).textures,
  errs: errs.slice(0, 5),
}, null, 2));
await b.close();
