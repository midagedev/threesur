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
const dbg = () => p.evaluate(() => window.__DEBUG__.info());
const clearLevels = async () => {
  for (let i = 0; i < 40; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(45);
  }
};

await hook('selectHero', 'zhaoyun');
await hook('setBossFlags', true, true, true);
await hook('giveWeapon', 'guandao');
await hook('setInvulnerable', 600);
await hook('setTime', 300);
await p.waitForTimeout(300);

// (1) 성곽 전경: 남성문 남쪽에서 성문/깃발/이름표 관찰
await hook('setPlayerPosition', 0, -20);
await p.waitForTimeout(1500);
await clearLevels();
await hook('setInvulnerable', 600);
await p.waitForTimeout(600);
const front = await stats();
await p.screenshot({ path: OUT + '/castle_front.png' });

// (2) 성문으로 적이 흘러드는 장면: 안뜰(bailey)에서 관찰
await hook('setPlayerPosition', 0, -38);
await p.waitForTimeout(2600);
await clearLevels();
await hook('setInvulnerable', 600);
await p.waitForTimeout(900);
const inflow = await stats();
await p.screenshot({ path: OUT + '/castle_gate_inflow.png' });

// (3) 1분 방치 후 분포(무한 뭉침 확인). 내성(본성) 안에 서서 flow 경로 테스트.
await hook('setPlayerPosition', 0, -48);
await hook('setInvulnerable', 600);
const before = await stats();
const killsBefore = before.kills;
const t0 = Date.now();
const fpsSamples = [];
for (let i = 0; i < 60; i++) {
  await p.waitForTimeout(1000);
  await hook('setInvulnerable', 600);
  await clearLevels();
  if (i % 8 === 0) fpsSamples.push(await dbg());
}
const after = await stats();
await p.screenshot({ path: OUT + '/castle_idle60.png' });
const killsRate = (after.kills - killsBefore) / ((Date.now() - t0) / 1000);

// (4a) 호로관 공존: 성곽 깊숙이(본성)에서 트리거 → 중복/겹침 벽 없어야, 벽 바깥 배치
const deepHulao0 = await stats();
await hook('triggerHulao');
await p.waitForTimeout(500);
const deepHulao1 = await stats();
// (4b) 성곽 남쪽 개활지로 이동 후 재트리거 → 성곽+호로관 동시 프레이밍
await hook('setPlayerPosition', 0, 6);
await hook('setInvulnerable', 600);
await p.waitForTimeout(500);
await hook('triggerHulao');
await p.waitForTimeout(800);
const postHulao = await stats();
await p.screenshot({ path: OUT + '/castle_hulao_coexist.png' });

// fps 정밀 샘플(성곽 전투)
const fps2 = [];
for (let i = 0; i < 10; i++) { await p.waitForTimeout(150); fps2.push(await dbg()); }
const avg = (arr, k) => Math.round(arr.reduce((a, x) => a + x[k], 0) / arr.length);

console.log(JSON.stringify({
  front: { walls: front.map.walls, colliders: front.map.colliders, roads: front.map.roads, landmarks: front.map.landmarks, alive: front.alive, px: front.map.playerX, pz: front.map.playerZ, playerInsideWall: front.map.playerInsideWall },
  inflow: { alive: inflow.alive, kills: inflow.kills, enemiesInsideWall: inflow.map.enemiesInsideWall, collisions: inflow.map.collisions },
  idle60: { aliveBefore: before.alive, aliveAfter: after.alive, killsInMinute: after.kills - killsBefore, killsPerSec: +killsRate.toFixed(1), enemiesInsideWall: after.map.enemiesInsideWall, playerInsideWall: after.map.playerInsideWall },
  hulaoCoexist: { castleWalls: deepHulao0.map.walls, deepInsideWallsAfter: deepHulao1.map.walls, deepPlayerInsideWall: deepHulao1.map.playerInsideWall, southWallsAfter: postHulao.map.walls, southCollidersAfter: postHulao.map.colliders, playerInsideWall: postHulao.map.playerInsideWall },
  fpsIdle: avg(fpsSamples, 'fps'),
  fpsCombat: avg(fps2, 'fps'), calls: avg(fps2, 'calls'), tris: avg(fps2, 'tris'),
  errs: errs.slice(0, 8),
}, null, 2));
await b.close();
