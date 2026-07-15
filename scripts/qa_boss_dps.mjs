// #47 보스 DPS 직접 측정 — 이동/카이팅 노이즈 제거.
// 플레이어를 매 프레임 보스 옆에 고정 → 무기가 확실히 보스 타격. 고정 시간창 후 보스 HP 잔량 비교.
// melee(보스 배수 4.5×, 기존)와 ranged(투사체 보스 배수 신규 4.5×)가 비슷하게 딜하면 원거리 보정 성공.
import { chromium } from '@playwright/test';
const URL = process.env.URL || 'http://localhost:5203/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(1600);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const clearLevels = async () => { for (let i = 0; i < 40; i++) { const s = await stats(); if (s.state !== 'levelup') break; await p.keyboard.press('Digit1'); await p.waitForTimeout(15); } };

// 보스 옆 고정 후 window초간 hp01 잔량 측정. 처치 시 처치시각 기록.
async function dps(hero, weapons, passives, type, t, windowSec = 14) {
  await hook('goToTitle'); await p.waitForTimeout(250);
  await hook('selectHero', hero); await p.waitForTimeout(350);
  for (const w of weapons) await hook('giveWeapon', w);
  for (const [pid, lv] of passives) await hook('givePassive', pid, lv);
  await hook('setTime', t); await hook('setInvulnerable', 999999);
  await p.waitForTimeout(400);
  await hook('spawnBoss', type); await p.waitForTimeout(600);
  await clearLevels();
  const t0 = Date.now(); let killedAt = null; let last = 1;
  while ((Date.now() - t0) / 1000 < windowSec) {
    const s = await stats();
    if (!s.bossActive) { killedAt = +((Date.now() - t0) / 1000).toFixed(1); break; }
    // 플레이어를 보스 바로 옆(사거리 내)으로 고정 → 무기 확정 타격
    await hook('setPlayerPosition', s.bossX - 2.2, s.bossZ);
    last = s.bossHp01;
    if (s.state === 'levelup') await clearLevels();
    await p.waitForTimeout(90);
  }
  return { remain: killedAt ? 0 : +last.toFixed(3), killedAt, dropped: +(1 - (killedAt ? 0 : last)).toFixed(3) };
}

const P = [['power', 4], ['haste', 4], ['area', 3]];
const out = {};
// 3분 보스(yuanshao) 동일 조건: 근접 vs 원거리
out.yuanshao_melee = await dps('guanyu', ['sword', 'halberd', 'spear'], P, 'yuanshao', 180);
out.yuanshao_ranged = await dps('huangzhong', ['bow', 'talisman'], P, 'yuanshao', 180);
// 6분 보스(dongzhuo, firezone) — 고시간 탱커
out.dongzhuo_melee = await dps('guanyu', ['sword', 'halberd', 'spear'], P, 'dongzhuo', 360);
out.dongzhuo_ranged = await dps('huangzhong', ['bow', 'talisman'], P, 'dongzhuo', 360);

function ratio(m, r) {
  // 딜량 비: melee dropped / ranged dropped (1에 가까울수록 파리티). 처치 시 dropped=1.
  if (m.dropped <= 0.001 || r.dropped <= 0.001) return null;
  return +(m.dropped / r.dropped).toFixed(2);
}
out.parity = {
  yuanshao_meleeDrop_over_rangedDrop: ratio(out.yuanshao_melee, out.yuanshao_ranged),
  dongzhuo_meleeDrop_over_rangedDrop: ratio(out.dongzhuo_melee, out.dongzhuo_ranged),
};
out.errs = errs.slice(0, 3);
console.log(JSON.stringify(out, null, 2));
await b.close();
