import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT = process.env.OUT || '/private/tmp/threesur-projectile-qa';
const URL = process.env.URL || 'http://localhost:5188/threesur/';
await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const errors = [];

async function open(viewport, mobile) {
  const page = await browser.newPage({ viewport, isMobile: mobile, hasTouch: mobile });
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.__GAME_TEST__.selectHero('zhaoyun'));
  await page.evaluate(() => window.__GAME_TEST__.setBossFlags(true, true, true));
  return page;
}

const desktop = await open({ width: 1280, height: 720 }, false);
await desktop.evaluate(() => window.__GAME_TEST__.showProjectiles());
await desktop.waitForTimeout(250);
await desktop.evaluate(() => window.__GAME_TEST__.showProjectiles());
await desktop.waitForTimeout(180);
await desktop.screenshot({ path: `${OUT}/projectile-showcase-desktop.png` });
const showcaseInfo = await desktop.evaluate(() => window.__DEBUG__.info());

for (const id of ['baiyu', 'crossbow', 'orbit', 'zhanma', 'cavalry']) {
  await desktop.evaluate((weapon) => window.__GAME_TEST__.giveWeapon(weapon), id);
}
await desktop.evaluate(() => window.__GAME_TEST__.setTime(160));
await desktop.keyboard.down('d');
await desktop.waitForTimeout(2600);
await desktop.keyboard.up('d');
for (let i = 0; i < 30; i++) {
  const state = await desktop.evaluate(() => window.__GAME_TEST__.stats.state);
  if (state !== 'levelup') break;
  await desktop.keyboard.press('Digit1');
  await desktop.waitForTimeout(60);
}
await desktop.screenshot({ path: `${OUT}/projectile-combat-desktop.png` });
const combatInfo = await desktop.evaluate(() => window.__DEBUG__.info());
await desktop.close();

const mobile = await open({ width: 390, height: 844 }, true);
await mobile.evaluate(() => window.__GAME_TEST__.showProjectiles());
await mobile.waitForTimeout(300);
await mobile.screenshot({ path: `${OUT}/projectile-showcase-mobile.png` });
const mobileInfo = await mobile.evaluate(() => window.__DEBUG__.info());
await mobile.close();

console.log(JSON.stringify({ showcaseInfo, combatInfo, mobileInfo, errors }, null, 2));
await browser.close();
