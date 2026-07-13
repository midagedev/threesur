import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT = process.env.OUT || '/private/tmp/threesur-map-navigation-qa';
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
await desktop.waitForTimeout(400);
const initial = await desktop.evaluate(() => window.__GAME_TEST__.stats);
await desktop.screenshot({ path: `${OUT}/01-road-and-walls-desktop.png` });

// 북쪽 성벽의 문 왼쪽 면으로 실제 입력 이동: 법선 이동은 막히고 접선 이동은 허용돼야 한다.
await desktop.evaluate(() => window.__GAME_TEST__.setPlayerPosition(-8, -12.5));
const wallStart = await desktop.evaluate(() => window.__GAME_TEST__.stats.map);
await desktop.keyboard.down('w');
await desktop.waitForTimeout(1100);
await desktop.keyboard.up('w');
const wallBlocked = await desktop.evaluate(() => window.__GAME_TEST__.stats.map);
await desktop.keyboard.down('d');
await desktop.waitForTimeout(700);
await desktop.keyboard.up('d');
const wallSlid = await desktop.evaluate(() => window.__GAME_TEST__.stats.map);
await desktop.screenshot({ path: `${OUT}/02-wall-slide-desktop.png` });

// 닫힌 원점 북문을 파성시킨 뒤 같은 자리를 실제로 통과한다.
await desktop.evaluate(() => window.__GAME_TEST__.setPlayerPosition(0, -10.5));
await desktop.screenshot({ path: `${OUT}/03-gate-sealed-desktop.png` });
await desktop.evaluate(() => window.__GAME_TEST__.breachGate());
await desktop.waitForTimeout(110);
const impact = await desktop.evaluate(() => window.__GAME_TEST__.stats.map);
await desktop.screenshot({ path: `${OUT}/04-gate-impact-desktop.png` });
await desktop.waitForTimeout(700);
await desktop.screenshot({ path: `${OUT}/05-gate-open-desktop.png` });
await desktop.keyboard.down('w');
await desktop.waitForTimeout(1400);
await desktop.keyboard.up('w');
await desktop.waitForTimeout(2200);
const crossed = await desktop.evaluate(() => window.__GAME_TEST__.stats);
const desktopRender = await desktop.evaluate(() => window.__DEBUG__.info());
await desktop.screenshot({ path: `${OUT}/06-gate-rush-routing-desktop.png` });
await desktop.close();

const mobile = await open({ width: 390, height: 844 }, true);
await mobile.evaluate(() => window.__GAME_TEST__.setPlayerPosition(0, -10.5));
await mobile.evaluate(() => window.__GAME_TEST__.breachGate());
await mobile.waitForTimeout(120);
const mobileImpact = await mobile.evaluate(() => window.__GAME_TEST__.stats.map);
await mobile.screenshot({ path: `${OUT}/07-gate-impact-mobile.png` });
const mobileRender = await mobile.evaluate(() => window.__DEBUG__.info());
await mobile.close();

const checks = {
  hasRouteTopology: initial.map.walls >= 20 && initial.map.roads >= 12 && initial.map.colliders >= 40,
  playerNotInitiallyEmbedded: initial.map.playerInsideWall === false,
  wallBlocksNormal: wallBlocked.playerZ > -14.1 && wallBlocked.playerWallHits > wallStart.playerWallHits,
  wallSlideWorks: wallSlid.playerX - wallBlocked.playerX > 1.0 && wallSlid.playerInsideWall === false,
  gateBreachedOnce: impact.gateBreached === true && impact.breaches === 1,
  threeDimensionalDebris: impact.debris >= 20,
  crossedFormerGate: crossed.map.playerZ < -15.5 && crossed.map.playerInsideWall === false,
  enemiesRespectWalls: crossed.map.enemiesInsideWall === 0,
  mobileBreachVisible: mobileImpact.gateBreached === true && mobileImpact.debris >= 16,
  desktopBudget: desktopRender.calls <= 120 && desktopRender.tris <= 200000 && desktopRender.textures <= 96,
  mobileBudget: mobileRender.calls <= 100 && mobileRender.tris <= 100000 && mobileRender.textures <= 96,
  noErrors: errors.length === 0,
};

console.log(JSON.stringify({
  checks,
  initial: initial.map,
  wallStart,
  wallBlocked,
  wallSlid,
  impact,
  crossed: crossed.map,
  desktopRender,
  mobileImpact,
  mobileRender,
  errors,
}, null, 2));

await browser.close();
if (Object.values(checks).some((ok) => !ok)) process.exitCode = 1;
