import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/banner';
const URL = 'http://localhost:4173/threesur/';
await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const errors = [];

// 각 세력 경계 직후로 시간 점프 → 배너 트리거. 펼침~유지 프레임 포착.
const cases = [
  { label: 'dongzhuo', t: 185 },
  { label: 'yuanshao', t: 365 },
  { label: 'warlords', t: 545 },
];
for (const c of cases) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('pageerror', (e) => errors.push(`${c.label}: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${c.label} console: ${m.text()}`); });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.__GAME_TEST__.selectHero('zhaoyun'));
  await page.evaluate(() => window.__GAME_TEST__.setInvulnerable(120));
  await page.evaluate(() => window.__GAME_TEST__.setBossFlags(true, true, true)); // 보스 스폰 억제
  await page.evaluate((t) => window.__GAME_TEST__.setTime(t), c.t);
  for (const [tag, ms] of [['a', 250], ['b', 550], ['c', 700]]) {
    await page.waitForTimeout(ms);
    await page.screenshot({ path: `${OUT}/${c.label}-${tag}.png` });
  }
  await page.close();
}
console.log(JSON.stringify({ errors }, null, 2));
await browser.close();
