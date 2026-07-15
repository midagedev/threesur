// 낙양 공방전(DESIGN 20) QA — 파성→성주→점령→수성 개전→사수/함락 양 경로를 훅으로 강제 진행하며
// 상태 전이·이벤트 발화를 JSON으로 출력. run.ts/main.ts 배선(아래 기대 훅) 후 실행 가능.
//
// 기대 __GAME_TEST__ 훅 (리드 배선 스니펫 포함):
//   selectHero, setInvulnerable, setTime, setPlayerPosition (기존)
//   killBoss (기존 — 성주 처치=점령 경로)
//   siegeBreach(key)      → run.testSiegeBreach(key)      : 외성문 강제 파성 + siege 통지
//   siegeForceLord()      → run.testSiegeForceLord()      : 성주 강제 출진
//   siegeForceCounter()   → run.testSiegeForceCounter()   : 수성 강제 개전(100s 대기 우회)
//   siegeAddFall(n)       → run.testSiegeAddFall(n)       : 함락 게이지 가산
//   siegeForceDefend()    → run.testSiegeForceDefend()    : 사수 강제 성공
//   stats.siege           → run.testStats.siege           : { state, fallGauge, allied, events{...} }
//
// 실행(2차 라운드): 격리 preview 포트 5191 권장 — PORT=5191 node scripts/qa_siege.mjs
import { chromium } from '@playwright/test';

const PORT = process.env.PORT || 5188;
const BASE = `http://localhost:${PORT}/threesur/`;
const SCRATCH = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';

const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('c:' + m.text()); });
await p.goto(BASE, { waitUntil: 'networkidle' });
await p.waitForTimeout(1200);

const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const siege = () => p.evaluate(() => window.__GAME_TEST__.stats.siege);
const runState = () => p.evaluate(() => window.__GAME_TEST__.stats.state);
const step = async (ms = 500) => p.waitForTimeout(ms);

// 레벨업 카드 큐를 'play' 재개까지 반복 픽(명기 카드 + 누적 레벨업).
async function clearLevelups() {
  for (let i = 0; i < 30 && (await runState()) === 'levelup'; i++) {
    await p.locator('.levelup-card').first().click().catch(() => {});
    await step(150);
  }
}

// 성 남문 접근 위치(battlefieldMap CASTLE: 중심 0,-48 / 외성 반폭Z 20 → 남문 z=-28).
const NEAR_SOUTH_GATE = [0, -24]; // 남문 바깥(원점 쪽)
const INSIDE_COURTYARD = [0, -34]; // 남문 안쪽 안뜰

async function runPath(label, finisher) {
  const log = [];
  await hook('selectHero', 'guanyu');
  await step(400);
  await hook('setInvulnerable', 9999);
  await hook('setTime', 90); // minute>=1 (수비대/성주 스케일)
  await hook('setPlayerPosition', ...NEAR_SOUTH_GATE);
  await step(600);
  log.push(['approach', await siege()]);

  await hook('siegeBreach', 'castle-s');
  await step(300);
  log.push(['breach', await siege()]);

  await hook('setPlayerPosition', ...INSIDE_COURTYARD);
  await step(400);
  await hook('siegeForceLord');
  await step(500);
  log.push(['lord', await siege()]);

  await hook('killBoss'); // 성주 처치 → 점령
  await step(500);
  // 점령 명기 3택 + 누적 레벨업 큐가 열려 run 상태가 'levelup' → siege.update 정지.
  // 'play' 재개(실플레이 흐름)해야 수성 update 구동(불화살/게이지/타이머)이 돈다. 큐 소진까지 반복 픽.
  await clearLevelups();
  log.push(['captured', await siege()]);

  await hook('siegeForceCounter'); // 수성 강제 개전
  await step(400);
  log.push(['counter', await siege()]);

  // 성내 유지 → 불화살 일제사 발화 관찰. 무적 자동공격으로 레벨업이 계속 쌓이므로
  // 매초 카드 큐를 비워 'play' 시간을 확보하며 volley 발화(초기 2~4s)까지 최대 14s 관찰.
  await hook('setPlayerPosition', ...INSIDE_COURTYARD);
  for (let i = 0; i < 14; i++) {
    await clearLevelups();
    await step(1000);
    if ((await siege()).events.volley >= 1) break;
  }
  log.push(['under-siege', await siege()]);
  await clearLevelups();

  await finisher(); // 사수 or 함락
  await step(600);
  log.push([label, await siege()]);

  await p.screenshot({ path: `${SCRATCH}/siege_${label}.png` });
  return log;
}

// 경로 A: 사수 성공(HELD)
const held = await runPath('defended', async () => { await hook('siegeForceDefend'); });

// 인-앱 재시작(리로드 없이) → 지속 싱글턴 castleRenderData/map.reset()가 적으로 복원되는지 검증.
await hook('selectHero', 'guanyu');
await step(1000);
const resetSnap = await siege();
const resetClean = resetSnap.state === 'enemy_held' && resetSnap.allied === false;

// 페이지 리로드로 새 런(경로 B: 함락 FALLEN)
await p.goto(BASE, { waitUntil: 'networkidle' });
await p.waitForTimeout(1000);
const fallen = await runPath('fallen', async () => { await hook('siegeAddFall', 12); });

const fps = await p.evaluate(() => window.__DEBUG__.info().fps);

// 판정: 각 경로의 최종 상태 + 이벤트 발화 검증.
const heldFinal = held[held.length - 1][1];
const fallenFinal = fallen[fallen.length - 1][1];
const verdict = {
  heldPath: heldFinal?.state === 'held' && heldFinal?.events?.capture >= 1 &&
    heldFinal?.events?.counter >= 1 && heldFinal?.events?.defended >= 1,
  fallenPath: fallenFinal?.state === 'fallen' && fallenFinal?.events?.lost >= 1 &&
    fallenFinal?.allied === false,
  lordSpawned: held.some(([, s]) => s?.events?.lordSpawn >= 1),
  capturedAllied: held.some(([k, s]) => k === 'captured' && s?.allied === true),
  volleyFired: held.some(([, s]) => s?.events?.volley >= 1) &&
    fallen.some(([, s]) => s?.events?.volley >= 1),
  resetClean,
};

console.log(JSON.stringify({
  fps,
  verdict,
  held: held.map(([k, s]) => [k, s?.state, s?.fallGauge, s?.allied, s?.events]),
  fallen: fallen.map(([k, s]) => [k, s?.state, s?.fallGauge, s?.allied, s?.events]),
  errs: errs.slice(0, 6),
}, null, 2));

await b.close();
