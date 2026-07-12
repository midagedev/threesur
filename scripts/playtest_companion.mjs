import { chromium } from '@playwright/test';

const URL = process.env.URL || 'http://localhost:5188/threesur/';
const OUT = process.env.OUT || '/private/tmp/threesur-companion-qa';
const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const results = [];

async function verifyCompanion(hero, heroName, expected, viewport, mobile = false) {
  const context = await browser.newContext({ viewport, hasTouch: mobile, isMobile: mobile });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  await page.evaluate((id) => window.__GAME_TEST__.selectHero(id), hero);
  await page.evaluate(() => window.__GAME_TEST__.setTime(12));
  await page.waitForTimeout(250);
  const heroQuote = await page.locator('.battle-quote').textContent();
  await page.evaluate(() => {
    window.__GAME_TEST__.setBossFlags(true, true, true);
    window.__GAME_TEST__.spawnBoss('yuanshao');
    window.__GAME_TEST__.setTime(44);
  });
  await page.waitForTimeout(150);
  const before = await page.evaluate(() => window.__GAME_TEST__.stats.companion);
  await page.evaluate(() => window.__GAME_TEST__.setTime(45.2));
  await page.waitForTimeout(500);
  const after = await page.evaluate(() => window.__GAME_TEST__.stats.companion);
  const quote = await page.locator('.battle-quote').textContent();
  await page.waitForTimeout(350);
  const attacks = await page.evaluate(() => window.__GAME_TEST__.stats.companionAttacks);
  await page.screenshot({ path: `${OUT}/${hero}-${mobile ? 'mobile' : 'desktop'}.png` });
  if (before !== null) throw new Error(`${hero}: 45초 전에 원군이 합류함 (${before})`);
  if (!heroQuote?.includes(heroName)) throw new Error(`${hero}: 선택 장수 전투 대사가 보이지 않음`);
  if (after !== expected) throw new Error(`${hero}: 원군 ${expected} 대신 ${after}`);
  if (!quote?.trim()) throw new Error(`${hero}: 합류 대사가 보이지 않음`);
  if (attacks < 1) throw new Error(`${hero}: 원군 자동 공격이 발동하지 않음`);
  if (errors.length) throw new Error(`${hero}: 브라우저 오류 ${errors.join(' | ')}`);
  results.push({ hero, expected, before, after, attacks, heroQuote: heroQuote.trim(), quote: quote.trim(), mobile, errors });
  await context.close();
}

await import('node:fs/promises').then((fs) => fs.mkdir(OUT, { recursive: true }));
await verifyCompanion('zhaoyun', '조운', 'liubei', { width: 1280, height: 720 });
await verifyCompanion('zhugeliang', '제갈량', 'zhouyu', { width: 390, height: 844 }, true);
await browser.close();
console.log(JSON.stringify(results, null, 2));
