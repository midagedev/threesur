import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { writeFile, unlink, mkdir } from 'node:fs/promises';

// 낙양 방어 구역 바닥(CastleZone) 격리 시각 QA.
// run.ts 배선 전이므로 게임을 거치지 않고 CastleZone을 직접 인스턴스화하는 임시 하네스를
// 프로젝트 루트에 써서(vite dev가 온더플라이로 TS 변환), 게임과 동일한 블룸 파이프라인
// (UnrealBloomPass strength=0.34 radius=0.4 threshold=0.88 · renderer.ts와 일치)으로 렌더한다.
// 성 위치(cx=0, cz=-48)를 55° 부감으로 프레이밍하고, 노이즈 텍스처 지면 위에 구역을 얹어
// "지면 텍스처가 비치는지(저알파)"를 실측한다.
//
// 검증: (a) setActive(true) 시 청록 틴트+경계 라인 렌더(청록 픽셀 증가),
//       (b) hotFrac<0.02(지면에 눕는 요소라 화이트아웃 특히 금지),
//       (c) 지면 텍스처 안 덮음(구역 내부 휘도 분산이 off의 40% 이상 유지 + 평균 휘도 상승 절제),
//       (d) 내성(중앙) 강조 > 외성 안뜰(청록 강도),
//       (e) setActive(false) 후 페이드아웃(청록 회귀),
//       (f) 콘솔/페이지 에러 0.

const PORT = 5210;
const ROOT = '/Users/hckim/repo/threesur';
const HARNESS = `${ROOT}/__castlezone_harness.html`;
const HARNESS_NAME = '__castlezone_harness.html';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/castlezone';

const HTML = `<!doctype html><html><head><meta charset="utf-8"><title>castlezone</title></head>
<body style="margin:0;background:#05060a;overflow:hidden">
<script type="module">
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CastleZone } from './src/gfx/castleZone.ts';
import { CASTLE } from './src/game/battlefieldMap.ts';

const W = 1280, H = 720;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(W, H); renderer.setPixelRatio(1);
renderer.toneMapping = THREE.ACESFilmicToneMapping; // renderer.ts와 일치
renderer.toneMappingExposure = 1.0;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05060a);
scene.fog = new THREE.FogExp2(0x05060a, 0.008);

// 성 중심(0,0,-48)을 55° 부감으로 프레이밍(게임 카메라 tilt와 동급).
const ELEV = 55 * Math.PI / 180, D = 76;
const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 400);
camera.position.set(CASTLE.cx, D * Math.sin(ELEV), CASTLE.cz + D * Math.cos(ELEV));
camera.lookAt(CASTLE.cx, 0, CASTLE.cz);

// 노이즈 텍스처 지면(게임 지면과 유사한 수묵 얼룩) — "텍스처가 비치는지" 검증용.
function noiseTex() {
  const S = 256; const cv = document.createElement('canvas'); cv.width = S; cv.height = S;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#080a11'; ctx.fillRect(0, 0, S, S);
  for (let i = 0; i < 1400; i++) {
    const sh = 10 + Math.random() * 34;
    ctx.fillStyle = 'rgba(' + sh + ',' + (sh + 4) + ',' + (sh + 12) + ',0.08)';
    ctx.beginPath(); ctx.arc(Math.random() * S, Math.random() * S, 1 + Math.random() * 7, 0, 6.2832); ctx.fill();
  }
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(16, 16); return t;
}
const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshBasicMaterial({ map: noiseTex(), toneMapped: true }));
ground.rotation.x = -Math.PI / 2; ground.position.set(CASTLE.cx, 0, CASTLE.cz); ground.renderOrder = -1; scene.add(ground);

const zone = new CastleZone(scene);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(W, H), 0.34, 0.4, 0.88));
composer.addPass(new OutputPass());

window.__CZ_TEST__ = { setActive: (b) => zone.setActive(!!b), reset: () => zone.reset() };

let last = performance.now();
function loop() {
  const now = performance.now();
  let dt = (now - last) / 1000; last = now;
  if (dt > 0.05) dt = 0.05;
  zone.update(dt);
  composer.render();
  requestAnimationFrame(loop);
}
loop();
window.__CZ_READY__ = true;
</script></body></html>`;

const waitServer = async (base, timeoutMs = 30000) => {
  const t0 = Date.now();
  for (;;) {
    try { await fetch(base); return; } catch { /* not up yet */ }
    if (Date.now() - t0 > timeoutMs) throw new Error('vite dev 기동 대기 초과');
    await new Promise((r) => setTimeout(r, 400));
  }
};

// 화면 픽셀 통계: OS 합성 screenshot(PNG)을 디코드해 샘플(qa_staraura 방식).
// hotFrac = 화이트아웃(l>230) 비율. tealFrac = 청록 픽셀 비율(구역 렌더 커버리지).
//   청록 판별은 어두운 청색 지면(b가 g보다 우세)과 구분: g가 r보다 뚜렷↑ AND g≈b(구역은 g≈b).
// box = { keep(중앙=내성), court(외성 안뜰 채움부), out(모서리=구역 밖) } 각 rgb 평균·휘도 분산.
//   청록 강도(teal)는 (g+b)/2-r로 판정에서 계산 — 지면 고유 청색 편향은 off 대비 델타로 상쇄.
const sample = async (page, w, h) => {
  const buf = await page.screenshot({ type: 'png' });
  const dataUrl = 'data:image/png;base64,' + buf.toString('base64');
  return page.evaluate(async ({ dataUrl, w, h }) => {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = dataUrl; });
    const off = document.createElement('canvas'); off.width = w; off.height = h;
    const ctx = off.getContext('2d'); ctx.drawImage(img, 0, 0, w, h);
    const d = ctx.getImageData(0, 0, w, h).data;
    // 프레임 정중앙 = 성 중심(내성). court = 내성 좌측 외성 안뜰 채움부(라인 없음). out = 좌상단 모서리.
    const boxes = {
      keep: [0.44, 0.56, 0.43, 0.57],
      court: [0.33, 0.40, 0.46, 0.56],
      out: [0.03, 0.11, 0.04, 0.12],
    };
    const acc = {};
    for (const k in boxes) acc[k] = { lum: 0, lum2: 0, r: 0, g: 0, b: 0, n: 0 };
    let hot = 0, teal = 0, n = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const r = d[i], g = d[i + 1], b = d[i + 2];
        const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (l > 230) hot++;
        // 청록: 녹이 적보다 뚜렷↑ + 녹≈청(청색 우세 지면 배제) + 과밝지 않음.
        if (g > r + 14 && g >= b - 4 && l > 30 && l < 214) teal++;
        n++;
        const fx = x / w, fy = y / h;
        for (const k in boxes) {
          const bx = boxes[k];
          if (fx >= bx[0] && fx < bx[1] && fy >= bx[2] && fy < bx[3]) {
            const a = acc[k]; a.lum += l; a.lum2 += l * l; a.r += r; a.g += g; a.b += b; a.n++;
          }
        }
      }
    }
    const stat = {};
    for (const k in acc) {
      const a = acc[k]; const nn = Math.max(1, a.n); const mean = a.lum / nn;
      const varr = Math.max(0, a.lum2 / nn - mean * mean);
      stat[k] = {
        lumMean: +mean.toFixed(2), lumVar: +varr.toFixed(2),
        r: +(a.r / nn).toFixed(2), g: +(a.g / nn).toFixed(2), b: +(a.b / nn).toFixed(2),
      };
    }
    return { hotFrac: +(hot / n).toFixed(5), tealFrac: +(teal / n).toFixed(4), box: stat };
  }, { dataUrl, w, h });
};

// 박스의 청록 강도(teal) = (g+b)/2 - r.
const teal = (S, k) => (S.box[k].g + S.box[k].b) * 0.5 - S.box[k].r;

await mkdir(OUT, { recursive: true });
await writeFile(HARNESS, HTML, 'utf8');

const BASE = `http://localhost:${PORT}`;
const vite = spawn('npx', ['vite', '--port', String(PORT), '--strictPort'], { cwd: ROOT, stdio: 'ignore' });
const report = { errors: [] };
let browser;
try {
  await waitServer(BASE);
  browser = await chromium.launch({ args: ['--use-angle=metal'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e.message)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

  await page.goto(`${BASE}/threesur/${HARNESS_NAME}`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__CZ_READY__ === true, { timeout: 15000 });
  await page.waitForTimeout(400);

  const hook = (fn, ...a) => page.evaluate(({ fn, a }) => window.__CZ_TEST__[fn](...a), { fn, a });

  // ── (0) 베이스라인(구역 off) ──
  const offS = await sample(page, 320, 180);
  await page.screenshot({ path: `${OUT}/zone_off.png` });

  // ── (a~d) 구역 활성 후 페이드인 완료 시점 샘플(최대 hotFrac 포착 위해 촘촘) ──
  await hook('setActive', true);
  const onSamples = [];
  let hotMax = 0;
  for (let i = 0; i < 14; i++) {
    await page.waitForTimeout(120);
    const s = await sample(page, 320, 180);
    onSamples.push(s);
    if (s.hotFrac > hotMax) hotMax = s.hotFrac;
    if (i === 8) await page.screenshot({ path: `${OUT}/zone_on.png` });
  }
  // 페이드인·flow가 안정된 후반 샘플의 대표값(마지막).
  const onS = onSamples[onSamples.length - 1];

  // ── (e) 비활성 후 페이드아웃 ──
  await hook('setActive', false);
  await page.waitForTimeout(700); // FADE_OUT 0.4s 초과
  const fadedS = await sample(page, 320, 180);
  await page.screenshot({ path: `${OUT}/zone_faded.png` });

  report.errors = errors;
  report.off = offS;
  report.on = onS;
  report.faded = fadedS;
  report.hotFracMax = hotMax;

  // off 대비 청록 강도 증분(지면 고유 청색 편향 상쇄).
  const courtD = +(teal(onS, 'court') - teal(offS, 'court')).toFixed(2);
  const keepD = +(teal(onS, 'keep') - teal(offS, 'keep')).toFixed(2);
  const outD = +(teal(onS, 'out') - teal(offS, 'out')).toFixed(2);
  const courtFadedD = +(teal(fadedS, 'court') - teal(offS, 'court')).toFixed(2);

  // 판정
  const renders = onS.tealFrac > offS.tealFrac + 0.03 && courtD > 6;
  const noWhiteout = hotMax < 0.02;
  // 지면 텍스처 비침: 외성 안뜰 채움부 휘도 분산이 off의 40% 이상 유지 + 평균 휘도 상승 절제(<40)
  //   + 구역 밖 모서리는 거의 안 물듦(청록 증분 미미 → 채움이 사각 안에 갇힘).
  const varRatio = offS.box.court.lumVar > 0.5 ? onS.box.court.lumVar / offS.box.court.lumVar : 1;
  const lumRise = +(onS.box.court.lumMean - offS.box.court.lumMean).toFixed(2);
  const groundVisible = varRatio > 0.4 && lumRise < 40 && outD < 4;
  // 내성 강조: 중앙(내성) 청록 증분 > 외성 안뜰 증분(더 진한 톤 + 이중 라인)
  const innerEmphasis = keepD > courtD * 1.15;
  const fadesOut = fadedS.tealFrac < (onS.tealFrac + offS.tealFrac) / 2 && courtFadedD < courtD * 0.4;
  const noErrors = errors.length === 0;

  report.checks = {
    a_renders: { pass: renders, tealFracOn: onS.tealFrac, tealFracOff: offS.tealFrac, courtTealDelta: courtD },
    b_noWhiteout: { pass: noWhiteout, hotFracMax: hotMax, limit: 0.02 },
    c_groundVisible: { pass: groundVisible, varRatio: +varRatio.toFixed(2), lumRise, outTealDelta: outD },
    d_innerEmphasis: { pass: innerEmphasis, keepTealDelta: keepD, courtTealDelta: courtD },
    e_fadesOut: { pass: fadesOut, tealFracFaded: fadedS.tealFrac, tealFracOn: onS.tealFrac, tealFracOff: offS.tealFrac, courtFadedDelta: courtFadedD },
    f_noErrors: { pass: noErrors, count: errors.length, sample: errors.slice(0, 3) },
  };
  report.pass = renders && noWhiteout && groundVisible && innerEmphasis && fadesOut && noErrors;
} catch (e) {
  report.fatal = String(e);
  report.pass = false;
} finally {
  if (browser) await browser.close();
  vite.kill('SIGTERM');
  await unlink(HARNESS).catch(() => {});
}

console.log(JSON.stringify(report, null, 2));
process.exit(report.pass ? 0 : 1);
