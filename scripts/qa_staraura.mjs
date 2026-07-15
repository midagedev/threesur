import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { writeFile, unlink, mkdir } from 'node:fs/promises';

// 사당 버프 스타파워 오라(StarAura) 격리 시각 QA.
// run.ts 배선 전이므로 게임을 거치지 않고 StarAura를 직접 인스턴스화하는 임시 하네스를
// 프로젝트 루트에 써서(vite dev가 온더플라이로 TS/HTML 변환) 게임과 동일한 블룸 파이프라인
// (UnrealBloomPass strength=0.34 radius=0.4 threshold=0.88 · renderer.ts와 일치)으로 렌더한다.
// 검증: (a) active 시 오라 스파클·색순환 링이 렌더(밝은 픽셀 증가), (b) hotFrac<0.03(30초 지속이라
// 특히 엄격 — 화이트아웃 금지), (c) active=false 후 페이드아웃(밝은 픽셀 감소), (d) 콘솔 에러 0.
// 격리 포트 5205 전용 vite dev를 직접 띄우고, 하네스 파일은 종료 시 정리한다.

const PORT = 5205;
const ROOT = '/Users/hckim/repo/threesur';
const HARNESS = `${ROOT}/__staraura_harness.html`;
const HARNESS_NAME = '__staraura_harness.html';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/staraura';

const HTML = `<!doctype html><html><head><meta charset="utf-8"><title>staraura</title></head>
<body style="margin:0;background:#0a0a12;overflow:hidden">
<script type="module">
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { StarAura } from './src/gfx/starAura.ts';

const W = 1280, H = 720;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(W, H); renderer.setPixelRatio(1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a12);
const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 200);
camera.position.set(0, 13, 11); camera.lookAt(0, 0.7, 0);

// 어두운 지면.
const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshBasicMaterial({ color: 0x161b28 }));
ground.rotation.x = -Math.PI / 2; scene.add(ground);
// 중립 회색 플레이어 프록시 — additive 오라가 밝은 본체 위에서 화이트아웃되지 않는지 검증(과거 사고 패턴).
const proxy = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.2), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.62, 0.62, 0.64) }));
proxy.position.set(0, 1.1, 0); scene.add(proxy);

const aura = new StarAura(scene);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(W, H), 0.34, 0.4, 0.88));
composer.addPass(new OutputPass());

let active = false;
window.__AURA_TEST__ = { setActive: (b) => { active = !!b; }, reset: () => aura.reset() };

let last = performance.now();
function loop() {
  const now = performance.now();
  let dt = (now - last) / 1000; last = now;
  if (dt > 0.05) dt = 0.05;
  aura.update(dt, 0, 0, active);
  composer.render();
  requestAnimationFrame(loop);
}
loop();
window.__AURA_READY__ = true;
</script></body></html>`;

// vite dev는 localhost(IPv6 ::1)에 바인딩하므로 http fetch로 폴링(어떤 응답이든 = 기동 완료).
const waitServer = async (base, timeoutMs = 30000) => {
  const t0 = Date.now();
  for (;;) {
    try { await fetch(base); return; } catch { /* not up yet */ }
    if (Date.now() - t0 > timeoutMs) throw new Error('vite dev 기동 대기 초과');
    await new Promise((r) => setTimeout(r, 400));
  }
};

// 화면 픽셀 통계(qa_siege_fx 방식): OS 합성 screenshot(PNG)을 디코드해 샘플.
// bright = 밝은 픽셀 비율(오라 스파클/링 존재 검증), hot = 화이트아웃 픽셀 비율(l>230).
const sample = async (page, w, h) => {
  const buf = await page.screenshot({ type: 'png' });
  const dataUrl = 'data:image/png;base64,' + buf.toString('base64');
  return page.evaluate(async ({ dataUrl, w, h }) => {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = dataUrl; });
    const off = document.createElement('canvas'); off.width = w; off.height = h;
    const ctx = off.getContext('2d'); ctx.drawImage(img, 0, 0, w, h);
    const d = ctx.getImageData(0, 0, w, h).data;
    let bright = 0, hot = 0, n = 0, cr = 0, cg = 0, cb = 0, cn = 0;
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i], g = d[i + 1], b = d[i + 2];
      const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (l > 135) bright++;
      if (l > 230) hot++;
      // 오라 채색 픽셀: 채도 있는 중간밝기(지면·회색 프록시 배제) → 순환색 평균 추적.
      const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
      if (l > 70 && mx - mn > 28) { cr += r; cg += g; cb += b; cn++; }
      n++;
    }
    const inv = cn > 0 ? 1 / (cn * 255) : 0;
    return {
      brightFrac: +(bright / n).toFixed(4), hotFrac: +(hot / n).toFixed(4),
      col: [+(cr * inv).toFixed(3), +(cg * inv).toFixed(3), +(cb * inv).toFixed(3)], colN: cn,
    };
  }, { dataUrl, w, h });
};

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

  await page.goto(`${BASE}/threesur/${HARNESS_NAME}`, { waitUntil: 'domcontentloaded' }); // base:/threesur/
  await page.waitForFunction(() => window.__AURA_READY__ === true, { timeout: 15000 });
  await page.waitForTimeout(400);

  const hook = (fn, ...a) => page.evaluate(({ fn, a }) => window.__AURA_TEST__[fn](...a), { fn, a });

  // ── (0) 베이스라인(오라 off) ──
  await page.waitForTimeout(300);
  const off = await sample(page, 320, 180);
  await page.screenshot({ path: `${OUT}/aura_off.png` });

  // ── (a) 오라 활성 + 색순환 전 구간 촘촘 샘플(최대 hotFrac 포착) ──
  await hook('setActive', true);
  const onSamples = [];
  let hotMax = 0, brightMax = 0;
  for (let i = 0; i < 18; i++) {
    await page.waitForTimeout(95); // ~1.7s 커버(색순환 CYCLE 1.3s 이상)
    const s = await sample(page, 320, 180);
    onSamples.push(s);
    if (s.hotFrac > hotMax) hotMax = s.hotFrac;
    if (s.brightFrac > brightMax) brightMax = s.brightFrac;
    if (i === 6) await page.screenshot({ path: `${OUT}/aura_on.png` });
  }
  // 색순환 폭: 오라 채색 평균의 정규화 색상(r-b, g-b)이 창 전체에서 얼마나 이동하는지.
  const norm = onSamples.filter((s) => s.colN > 30).map((s) => {
    const t = s.col[0] + s.col[1] + s.col[2] + 1e-4;
    return [(s.col[0] - s.col[2]) / t, (s.col[1] - s.col[2]) / t];
  });
  let hueSpread = 0;
  for (const a of norm) for (const b of norm) hueSpread = Math.max(hueSpread, Math.hypot(a[0] - b[0], a[1] - b[1]));

  // ── (c) 비활성 후 페이드아웃 ──
  await hook('setActive', false);
  await page.waitForTimeout(600); // FADE_OUT 0.4s 초과
  const faded = await sample(page, 320, 180);
  await page.screenshot({ path: `${OUT}/aura_faded.png` });

  report.errors = errors;
  report.consoleErrorCount = errors.length;
  report.baseline = off;
  report.onBrightMax = brightMax;
  report.hotFracMax = hotMax;
  report.faded = faded;

  report.hueSpread = +hueSpread.toFixed(3);

  // 판정
  const renders = brightMax > off.brightFrac * 1.3 + 0.002; // 오라가 밝은 픽셀을 눈에 띄게 추가
  const noWhiteout = hotMax < 0.03;
  const fadesOut = faded.brightFrac < (brightMax + off.brightFrac) / 2; // 중간점 아래로 회귀
  const colorCycles = hueSpread > 0.05; // 골드↔청록↔자홍 순환으로 평균색이 유의미하게 이동
  report.checks = {
    a_renders: { pass: renders, brightOn: brightMax, brightOff: off.brightFrac },
    b_noWhiteout: { pass: noWhiteout, hotFracMax: hotMax, limit: 0.03 },
    c_fadesOut: { pass: fadesOut, brightFaded: faded.brightFrac },
    d_noErrors: { pass: errors.length === 0, count: errors.length },
    e_colorCycle: { pass: colorCycles, hueSpread: +hueSpread.toFixed(3) },
  };
  report.pass = renders && noWhiteout && fadesOut && colorCycles && errors.length === 0;
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
