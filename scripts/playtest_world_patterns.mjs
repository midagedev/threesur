import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT = process.env.OUT || '/private/tmp/threesur-world-pattern-qa';
const URL = process.env.URL || 'http://localhost:5188/';
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const errors = [];

async function open(viewport, mobile = false) {
  const page = await browser.newPage({ viewport, isMobile: mobile, hasTouch: mobile });
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.__GAME_TEST__.selectHero('zhaoyun'));
  await page.evaluate(() => window.__GAME_TEST__.setBossFlags(true, true, true));
  return page;
}

const desktop = await open({ width: 1280, height: 720 });
await desktop.waitForTimeout(500);
const initial = await desktop.evaluate(() => window.__GAME_TEST__.stats);
await desktop.screenshot({ path: `${OUT}/fortress-world-desktop.png` });

await desktop.evaluate(() => window.__GAME_TEST__.spawnPattern('charge'));
await desktop.waitForTimeout(180);
await desktop.screenshot({ path: `${OUT}/charge-telegraph.png` });
await desktop.waitForTimeout(1100);
const afterCharge = await desktop.evaluate(() => window.__GAME_TEST__.stats);

await desktop.evaluate(() => window.__GAME_TEST__.spawnPattern('volley'));
await desktop.waitForTimeout(260);
await desktop.screenshot({ path: `${OUT}/volley-telegraph.png` });
await desktop.waitForTimeout(1000);
const afterVolley = await desktop.evaluate(() => window.__GAME_TEST__.stats);

await desktop.evaluate(() => window.__GAME_TEST__.spawnPattern('strategist'));
await desktop.waitForTimeout(300);
await desktop.screenshot({ path: `${OUT}/strategist-telegraph.png` });
await desktop.waitForTimeout(1100);
const afterStrategist = await desktop.evaluate(() => window.__GAME_TEST__.stats);
await desktop.screenshot({ path: `${OUT}/battlefield-gimmicks.png` });
const desktopRender = await desktop.evaluate(() => window.__DEBUG__.info());
await desktop.close();

const mobile = await open({ width: 390, height: 844 }, true);
await mobile.evaluate(() => window.__GAME_TEST__.spawnPattern('charge'));
await mobile.waitForTimeout(250);
await mobile.screenshot({ path: `${OUT}/fortress-world-mobile.png` });
const mobileStats = await mobile.evaluate(() => window.__GAME_TEST__.stats);
const mobileRender = await mobile.evaluate(() => window.__DEBUG__.info());
await mobile.close();

const checks = {
  worldVisible: initial.worldProps >= 10,
  chargeTriggered: afterCharge.patterns.charge >= 1,
  volleyTriggered: afterVolley.patterns.volley >= 1,
  casterTriggered: afterStrategist.patterns.caster >= 1,
  objectVisible: afterStrategist.worldObjects >= 1,
  mobileWorldVisible: mobileStats.worldProps >= 10,
  desktopBudget: desktopRender.calls <= 120 && desktopRender.tris <= 200000 && desktopRender.textures <= 96,
  mobileBudget: mobileRender.calls <= 100 && mobileRender.tris <= 100000 && mobileRender.textures <= 96,
  noErrors: errors.length === 0,
};

console.log(JSON.stringify({
  checks,
  initial,
  afterCharge,
  afterVolley,
  afterStrategist,
  desktopRender,
  mobileStats,
  mobileRender,
  errors,
}, null, 2));

await browser.close();
if (Object.values(checks).some((ok) => !ok)) process.exitCode = 1;
