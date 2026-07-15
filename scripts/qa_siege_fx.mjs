import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

// 낙양 공방전 GFX 시각 스모크: (a) 깃발 점령 웨이브가 청록으로 물드는지,
// (b) 불화살 볼리가 화이트아웃(hotFrac) 없이 떨어지는지, (c) 콘솔 에러 0.
// 신규 테스트 훅(flipBanners/arrowVolley)이 run.ts에 배선돼 있어야 완전 실행됨 —
// 미배선이면 hooksMissing로 표기하고 해당 단언은 건너뛴다(리드 배선 후 2차 라운드에서 통과 확인).

const URL = process.env.URL || 'http://localhost:5192/threesur/';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/siege_fx';
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e.message)));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const hook = (fn, ...args) => page.evaluate(({ fn, args }) => {
  const g = window.__GAME_TEST__;
  if (!g || typeof g[fn] !== 'function') return { __missing: fn };
  return g[fn](...args) ?? null;
}, { fn, args });

const hasHook = (fn) => page.evaluate((fn) => !!(window.__GAME_TEST__ && typeof window.__GAME_TEST__[fn] === 'function'), fn);

// 화면 픽셀 통계. teal/red = 청록·적색 지배 픽셀 수(깃발 전환 검증), hotFrac = 밝은 픽셀 비율(화이트아웃 검증).
// 게임 WebGL 캔버스는 preserveDrawingBuffer:false라 라이브 drawImage가 검정 → OS 합성 screenshot(PNG)을
// 디코드해 샘플한다. yMaxFrac로 상단 스트립만 셀 수 있다(하단 HP바 등 불변 적색 UI 배제).
const sample = async (w, h, yMaxFrac = 1) => {
  const buf = await page.screenshot({ type: 'png' });
  const dataUrl = 'data:image/png;base64,' + buf.toString('base64');
  return page.evaluate(async ({ dataUrl, w, h, yMaxFrac }) => {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = dataUrl; });
    const off = document.createElement('canvas');
    off.width = w; off.height = h;
    const ctx = off.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);
    const d = ctx.getImageData(0, 0, w, h).data;
    const yMax = Math.floor(h * yMaxFrac);
    let teal = 0, red = 0, hot = 0, n = 0;
    for (let y = 0; y < yMax; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const r = d[i], g = d[i + 1], b = d[i + 2];
        // 청록: 초록·파랑이 빨강보다 크고 g≈b(파란 fog 배제: g>b*0.72).
        if (g > r + 10 && b > r + 6 && g > 32 && g > b * 0.72) teal++;
        // 적색 군기: 빨강 지배 + 밝음.
        if (r > g + 22 && r > b + 22 && r > 70) red++;
        const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (l > 230) hot++;
        n++;
      }
    }
    return { teal, red, hotFrac: +(hot / n).toFixed(4) };
  }, { dataUrl, w, h, yMaxFrac });
};

const report = { url: URL, hooksMissing: [], errors: [] };

// 공통 셋업: 조운 선택 + 무적 + 보스 억제.
await hook('selectHero', 'zhaoyun');
await page.waitForTimeout(700);
await hook('setInvulnerable', 999);
await hook('setBossFlags', true, true, true);

// ── (a) 깃발 점령 웨이브 ─────────────────────────────
try {
  const flipReady = await hasHook('flipBanners');
  if (!flipReady) report.hooksMissing.push('flipBanners');
  // 남성문 앞으로 이동해 붉은 군기를 프레임에 담는다(성 중심 0,-48 / 남성문 z≈-28).
  await hook('setPlayerPosition', 0, -24);
  await page.waitForTimeout(600);
  const before = await sample(320, 180, 0.34); // 상단 스트립만(HP바 배제)
  await page.screenshot({ path: OUT + '/banner_before.png' });
  if (flipReady) {
    await hook('flipBanners', true); // 아군 점령 → 청록 전환
    // 웨이브: 원점(성 중심)에서 성문 깃발까지 딜레이(~1.14s) + 0.8s lerp → 완료 ~1.94s. 여유 있게 대기.
    await page.waitForTimeout(2400);
    const after = await sample(320, 180, 0.34);
    await page.screenshot({ path: OUT + '/banner_after.png' });
    report.bannerFlip = {
      redBefore: before.red, redAfter: after.red, redDrop: before.red - after.red,
      tealBefore: before.teal, tealAfter: after.teal, tealRise: after.teal - before.teal,
      // 붉은 군기가 전환으로 사라지고(적색 감소) 청록이 늘어남.
      pass: before.red - after.red > 12 && after.teal - before.teal > 8,
    };
  } else {
    report.bannerFlip = { skipped: 'flipBanners hook 미배선', redBefore: before.red };
  }
} catch (e) { report.bannerFlip = { error: String(e) }; }

// ── (b) 불화살 볼리 화이트아웃 검증 ─────────────────────
try {
  const volleyReady = await hasHook('testVolley');
  if (!volleyReady) report.hooksMissing.push('testVolley');
  await hook('setPlayerPosition', 0, 0); // 오픈필드로 복귀
  await page.waitForTimeout(500);
  if (volleyReady) {
    const samples = [];
    await hook('testVolley'); // 플레이어 주변 5~7발 일제사(t≈0.9)
    // 예고→낙하→착탄 전 구간을 촘촘히 샘플(최대 hotFrac 포착).
    for (let i = 0; i < 14; i++) {
      await page.waitForTimeout(90);
      samples.push((await sample(160, 90)).hotFrac);
      if (i === 8) await page.screenshot({ path: OUT + '/volley_fall.png' });
    }
    await page.screenshot({ path: OUT + '/volley_impact.png' });
    const hotFracMax = Math.max(...samples);
    report.arrowVolley = { hotFracMax, pass: hotFracMax < 0.02, samples };
  } else {
    report.arrowVolley = { skipped: 'testVolley hook 미배선' };
  }
} catch (e) { report.arrowVolley = { error: String(e) }; }

report.errors = errors;
report.consoleErrorCount = errors.length;
console.log(JSON.stringify(report, null, 2));
await browser.close();
process.exit(errors.length === 0 && report.hooksMissing.length === 0 ? 0 : 1);
