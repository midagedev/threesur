// #47 플래시 누적 상한 검증 — 차분 방식.
// 플래시 색 rgba(200,220,255): 전 프레임 평균 B채널 상승분으로 밝기 측정.
// flashBurst(1,0.5)=단발(항상 0.5) vs flashBurst(6,0.4)=6발(상한없으면 ~0.95, 상한0.5면 클램프).
// 상한 작동 → 두 피크 B상승분이 거의 같음. 상한 미작동 → 6발이 훨씬 밝음.
import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import fs from 'fs';
const URL = process.env.URL || 'http://localhost:5203/threesur/';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(1600);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });

await hook('selectHero', 'zhaoyun'); await p.waitForTimeout(500);
await hook('setInvulnerable', 99999); await hook('setTime', 120);
await p.waitForTimeout(500);

const meanB = (buf) => { const png = PNG.sync.read(buf); const d = png.data; let s = 0, n = 0; for (let i = 2; i < d.length; i += 4) { s += d[i]; n++; } return s / n; };
// 애니 피크 근처를 잡기 위해: 발사 → 즉시 스크린샷(스크린샷 지연이 곧 애니 경과).
async function burstPeak(n, each) {
  await hook('flashBurst', n, each);
  const buf = await p.screenshot();
  await p.waitForTimeout(260); // 애니(120ms) 종료 + flashActive 회수
  return { peakB: +meanB(buf).toFixed(1), buf };
}

const baseB = +meanB(await p.screenshot()).toFixed(1);
const single = await burstPeak(1, 0.5);   // 상한과 무관, 항상 0.5
const six = await burstPeak(6, 0.4);      // 상한 없으면 ~0.95, 상한이면 0.5로 클램프
fs.writeFileSync(`${OUT}/flashcap_six.png`, six.buf);
const settledB = +meanB(await p.screenshot()).toFixed(1); // 회수 후 baseline 복귀?
// 회수 정상 확인: 다시 6발 → 첫 6발과 동일 피크여야(누수 시 상승)
const six2 = await burstPeak(6, 0.4);

const singleLift = +(single.peakB - baseB).toFixed(1);
const sixLift = +(six.peakB - baseB).toFixed(1);
console.log(JSON.stringify({
  baseB, singlePeakB: single.peakB, sixPeakB: six.peakB, settledB, six2PeakB: six2.peakB,
  singleLift, sixLift,
  capHolds: Math.abs(sixLift - singleLift) < singleLift * 0.5 + 6, // 6발 ≈ 단발(상한 동일)
  settledBackToBase: Math.abs(settledB - baseB) < 6,               // 회수 정상
  noLeak: Math.abs(six2.peakB - six.peakB) < 8,                    // 재발사 피크 동일
  errs: errs.slice(0, 3),
}, null, 2));
await b.close();
