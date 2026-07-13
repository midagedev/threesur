import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/boss35';
const URL = process.env.URL || 'http://localhost:5188/threesur/';
await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const errors = [];

// 각 신규/변경 패턴을 대표 보스로 검증 (dash/rush/delaybolt/fan/firezone + 미니보스)
const cases = [
  { id: 'xiahoudun', pattern: 'dash', dwell: 5200 },
  { id: 'sunce', pattern: 'rush', dwell: 5200 },
  { id: 'simayi', pattern: 'delaybolt', dwell: 4200 },
  { id: 'yuanshao', pattern: 'fan', dwell: 3500 },
  { id: 'dongzhuo', pattern: 'firezone', dwell: 3500 },
  { id: 'dianwei', pattern: 'miniboss-dash', dwell: 4200 },
];
const results = [];

for (const c of cases) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('pageerror', (e) => errors.push(`${c.id}: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${c.id} console: ${m.text()}`); });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.__GAME_TEST__.selectHero('zhaoyun'));
  await page.evaluate(() => window.__GAME_TEST__.setBossFlags(true, true, true));
  await page.evaluate(() => window.__GAME_TEST__.setInvulnerable(60));
  await page.evaluate((id) => window.__GAME_TEST__.spawnBoss(id), c.id);

  const fpsSamples = [];
  const ticks = Math.ceil(c.dwell / 200);
  for (let t = 0; t < ticks; t++) {
    await page.waitForTimeout(200);
    const fps = await page.evaluate(() => window.__DEBUG__.info().fps);
    fpsSamples.push(fps);
  }
  await page.screenshot({ path: `${OUT}/${c.id}-${c.pattern}.png` });
  const dbg = await page.evaluate(() => window.__DEBUG__.info());
  const minFps = Math.min(...fpsSamples);
  const avgFps = Math.round(fpsSamples.reduce((a, b) => a + b, 0) / fpsSamples.length);
  results.push({ id: c.id, pattern: c.pattern, avgFps, minFps, calls: dbg.calls, tris: dbg.tris });
  await page.close();
}

console.log(JSON.stringify({ results, errors }, null, 2));
await browser.close();
if (errors.length) process.exit(1);
