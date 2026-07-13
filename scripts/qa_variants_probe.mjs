import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/variants';
const URL = 'http://localhost:5188/threesur/';
await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const errors = [];

for (const min of [0, 2, 4, 6, 8]) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('pageerror', (e) => errors.push(`m${min}: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`m${min} console: ${m.text()}`); });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.__GAME_TEST__.selectHero('zhaoyun'));
  await page.evaluate(() => window.__GAME_TEST__.setInvulnerable(120));
  await page.evaluate((s) => window.__GAME_TEST__.setTime(s), min * 60 + 5);
  // 적 축적 대기
  await page.waitForTimeout(3500);
  const stats = await page.evaluate(() => window.__GAME_TEST__.stats);
  await page.screenshot({ path: `${OUT}/min${min}.png` });
  errors.push(`m${min}: alive=${stats.alive}`);
  await page.close();
}
console.log(JSON.stringify({ errors }, null, 2));
await browser.close();
