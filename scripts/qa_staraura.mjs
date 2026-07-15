import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { writeFile, unlink, mkdir } from 'node:fs/promises';

// 사당 버프 오라(StarAura) "캐릭터 실루엣 네온 아웃라인" 격리 시각 QA.
// run.ts 배선 전이므로 실제 플레이어 아틀라스 시트(sgrade.png)를 로드해 캐릭터 스프라이트를 렌더하고
// 그 위에 StarAura를 오버레이하는 임시 하네스를 프로젝트 루트에 써서 vite dev로 띄운다
// (게임 동일 블룸 0.34/0.4/0.88, 카메라 55° 부감으로 스프라이트 tilt 정면 정렬).
// 검증(off/on 스크린샷 비교):
//  a 렌더(네온 채색 픽셀 다수)  b 실루엣(네온이 스프라이트 알파에 밀착=hugFrac↑ → 네모 아님)
//  c hotFrac<0.03  d 중앙 투명(몸통 내부 픽셀 off≈on → 안 가림)  e 흐르는 색  f 페이드아웃  g 에러0.
// 격리 포트 5205 전용 vite dev를 직접 띄우고 하네스 파일은 종료 시 정리.

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

const W = 1280, H = 720, CELL_W = 48, CELL_H = 64, ELEV = 55 * Math.PI / 180;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(W, H); renderer.setPixelRatio(1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a12);
const D = 6; // 캐릭터를 화면에 크게 담아 실루엣/아웃라인을 또렷이 검증
const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 200);
camera.position.set(0, 1.2 + D * Math.sin(ELEV), D * Math.cos(ELEV)); camera.lookAt(0, 1.2, 0);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshBasicMaterial({ color: 0x161b28 }));
ground.rotation.x = -Math.PI / 2; scene.add(ground);

let aura = null, sheet = null, uv = { u: 0, v: 0 };
(async () => {
  const base = import.meta.env.BASE_URL; // /threesur/
  const dir = base + 'assets/sprites/';
  const manifest = await (await fetch(dir + 'manifest.json')).json();
  const sg = manifest.sheets.sgrade;
  const tex = await new Promise((res, rej) => new THREE.TextureLoader().load(dir + sg.file, res, undefined, rej));
  tex.magFilter = THREE.NearestFilter; tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false; tex.colorSpace = THREE.SRGBColorSpace; tex.premultiplyAlpha = false;
  tex.flipY = true; tex.needsUpdate = true;
  const texW = sg.cols * CELL_W, texH = sg.rows * CELL_H;
  sheet = { texture: tex, texW, texH, cellUvW: CELL_W / texW, cellUvH: CELL_H / texH };
  // 조운(정면 dir0, frame0) 셀 UV — player.ts cellUvOffset와 동일 수식.
  const charIndex = sg.chars.zhaoyun, dir0 = 0, frame0 = 0;
  const blockPx = charIndex * 4 * CELL_W;
  uv = { u: (blockPx + frame0 * CELL_W) / texW, v: 1 - (dir0 * CELL_H + CELL_H) / texH };

  // 실제 플레이어 스프라이트 프록시(동일 지오메트리·셀 UV) — 캐릭터 위에 아웃라인이 뜨는지 검증.
  const geo = new THREE.PlaneGeometry(CELL_W / CELL_H, 1);
  geo.translate(0, 0.5, 0); geo.rotateX(-ELEV);
  const pmat = new THREE.ShaderMaterial({
    uniforms: { uMap: { value: tex }, uUv: { value: new THREE.Vector2(uv.u, uv.v) }, uCell: { value: new THREE.Vector2(sheet.cellUvW, sheet.cellUvH) } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: 'uniform sampler2D uMap; uniform vec2 uUv; uniform vec2 uCell; varying vec2 vUv; void main(){ vec4 t=texture2D(uMap, uUv+vUv*uCell); if(t.a<0.5) discard; gl_FragColor=vec4(pow(t.rgb,vec3(2.2))*1.15,1.0); }',
  });
  const proxy = new THREE.Mesh(geo, pmat);
  proxy.scale.setScalar(2.4); proxy.position.set(0, 0, 0); proxy.renderOrder = 2;
  scene.add(proxy);

  aura = new StarAura(scene);
  window.__AURA_READY__ = true;
})();

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(W, H), 0.34, 0.4, 0.88));
composer.addPass(new OutputPass());

let active = false;
window.__AURA_TEST__ = { setActive: (b) => { active = !!b; }, reset: () => aura && aura.reset() };

let last = performance.now();
function loop() {
  const now = performance.now();
  let dt = (now - last) / 1000; last = now;
  if (dt > 0.05) dt = 0.05;
  if (aura) aura.update(dt, 0, 0, active, sheet, uv.u, uv.v);
  composer.render();
  requestAnimationFrame(loop);
}
loop();
</script></body></html>`;

// vite dev는 localhost(IPv6 ::1)에 바인딩하므로 http fetch로 폴링.
const waitServer = async (base, timeoutMs = 30000) => {
  const t0 = Date.now();
  for (;;) {
    try { await fetch(base); return; } catch { /* not up yet */ }
    if (Date.now() - t0 > timeoutMs) throw new Error('vite dev 기동 대기 초과');
    await new Promise((r) => setTimeout(r, 400));
  }
};

// 단일 프레임 통계: 네온 채색 픽셀 수(colN)·평균색(흐르는 색 추적)·hotFrac(화이트아웃).
const sample = async (page, w, h) => {
  const buf = await page.screenshot({ type: 'png' });
  const dataUrl = 'data:image/png;base64,' + buf.toString('base64');
  const stats = await page.evaluate(async ({ dataUrl, w, h }) => {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = dataUrl; });
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d'); x.drawImage(img, 0, 0, w, h);
    const d = x.getImageData(0, 0, w, h).data;
    let hot = 0, n = 0, cr = 0, cg = 0, cb = 0, cn = 0;
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i], g = d[i + 1], b = d[i + 2];
      const l = 0.2126 * r + 0.7152 * g + 0.0722 * b, sat = Math.max(r, g, b) - Math.min(r, g, b);
      if (l > 230) hot++;
      if (l > 70 && sat > 30) { cr += r; cg += g; cb += b; cn++; }
      n++;
    }
    const inv = cn > 0 ? 1 / (cn * 255) : 0;
    return { hotFrac: +(hot / n).toFixed(4), colN: cn, col: [+(cr * inv).toFixed(3), +(cg * inv).toFixed(3), +(cb * inv).toFixed(3)] };
  }, { dataUrl, w, h });
  return { stats, buf };
};

// off 스크린샷에서 스프라이트 바운딩박스(정규화). 어두운 갑옷도 포함되게 낮은 임계.
const bboxOf = async (page, w, h) => {
  const buf = await page.screenshot({ type: 'png' });
  const dataUrl = 'data:image/png;base64,' + buf.toString('base64');
  return page.evaluate(async ({ dataUrl, w, h }) => {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = dataUrl; });
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d'); x.drawImage(img, 0, 0, w, h);
    const d = x.getImageData(0, 0, w, h).data;
    let x0 = w, y0 = h, x1 = 0, y1 = 0, found = 0;
    for (let y = 0; y < h; y++) for (let px = 0; px < w; px++) {
      const i = (y * w + px) * 4;
      const l = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
      if (l > 42) { if (px < x0) x0 = px; if (px > x1) x1 = px; if (y < y0) y0 = y; if (y > y1) y1 = y; found++; }
    }
    return found < 40 ? null : { x0, y0, x1, y1, found };
  }, { dataUrl, w, h });
};

// off/on 쌍 분석: 네온이 스프라이트에 밀착하는지(hugFrac, 블룸 확산 감안 R=10) +
// 몸통 중앙 사각형이 네온으로 채워지지 않는지(interiorNeonFrac·interiorDelta → 안 가림).
const analyzePair = async (page, offBuf, onBuf, w, h, bbox) => {
  const offUrl = 'data:image/png;base64,' + offBuf.toString('base64');
  const onUrl = 'data:image/png;base64,' + onBuf.toString('base64');
  return page.evaluate(async ({ offUrl, onUrl, w, h, bbox }) => {
    const dec = async (u) => {
      const img = new Image();
      await new Promise((r, j) => { img.onload = r; img.onerror = j; img.src = u; });
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      const x = c.getContext('2d'); x.drawImage(img, 0, 0, w, h);
      return x.getImageData(0, 0, w, h).data;
    };
    const O = await dec(offUrl), N = await dec(onUrl);
    const lum = (D, x, y) => { const i = (y * w + x) * 4; return 0.2126 * D[i] + 0.7152 * D[i + 1] + 0.0722 * D[i + 2]; };
    const neonAt = (D, x, y) => {
      const i = (y * w + x) * 4, r = D[i], g = D[i + 1], b = D[i + 2];
      const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return l > 70 && Math.max(r, g, b) - Math.min(r, g, b) > 30;
    };
    const sprite = new Uint8Array(w * h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (lum(O, x, y) > 42) sprite[y * w + x] = 1;
    const dilate = (m, r) => {
      const o = new Uint8Array(w * h);
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        if (!m[y * w + x]) continue;
        for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
          const nx = x + dx, ny = y + dy; if (nx >= 0 && ny >= 0 && nx < w && ny < h) o[ny * w + nx] = 1;
        }
      }
      return o;
    };
    const dmask = dilate(sprite, 10); // 스프라이트 근방(아웃라인 + 블룸 글로우 확산 허용)
    // 몸통 중앙 사각형(bbox 중심, 가장자리 아웃라인 제외).
    const bw = bbox.x1 - bbox.x0, bh = bbox.y1 - bbox.y0, cx = (bbox.x0 + bbox.x1) / 2, cy = (bbox.y0 + bbox.y1) / 2;
    const ix0 = Math.floor(cx - bw * 0.22), ix1 = Math.ceil(cx + bw * 0.22);
    const iy0 = Math.floor(cy - bh * 0.15), iy1 = Math.ceil(cy + bh * 0.22);
    let neon = 0, hug = 0, inNewNeon = 0, dSum = 0, inTot = 0;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const onNeon = neonAt(N, x, y);
      if (onNeon) { neon++; if (dmask[y * w + x]) hug++; }
      if (x >= ix0 && x < ix1 && y >= iy0 && y < iy1) {
        inTot++;
        // 오라가 새로 칠한 네온만(스프라이트 자체 색 배제): on=네온 & off=비네온.
        if (onNeon && !neonAt(O, x, y)) inNewNeon++;
        dSum += Math.abs(lum(N, x, y) - lum(O, x, y));
      }
    }
    return {
      neon, hugFrac: +(hug / Math.max(1, neon)).toFixed(3),
      interiorNeonFrac: +(inNewNeon / Math.max(1, inTot)).toFixed(3),
      interiorDelta: +(dSum / Math.max(1, inTot)).toFixed(2), interiorN: inTot,
    };
  }, { offUrl, onUrl, w, h, bbox });
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

  // ── (0) 베이스라인(오라 off): 캐릭터만 + bbox ──
  await page.waitForTimeout(300);
  const bbox = await bboxOf(page, 320, 180);
  const offR = await sample(page, 320, 180);
  await writeFile(`${OUT}/aura_off.png`, offR.buf);
  if (!bbox) throw new Error('스프라이트 bbox 검출 실패(하네스 렌더 확인)');

  // ── 오라 활성: 흐르는 색 전 구간 샘플 + 대표 on 프레임 캡처 ──
  await hook('setActive', true);
  const onSamples = [];
  let hotMax = 0, colNMax = 0, onBuf = null;
  for (let i = 0; i < 18; i++) {
    await page.waitForTimeout(95);
    const r = await sample(page, 320, 180);
    onSamples.push(r.stats);
    if (r.stats.hotFrac > hotMax) hotMax = r.stats.hotFrac;
    if (r.stats.colN > colNMax) colNMax = r.stats.colN;
    if (i === 6) { onBuf = r.buf; await writeFile(`${OUT}/aura_on.png`, r.buf); }
  }
  const norm = onSamples.filter((s) => s.colN > 30).map((s) => {
    const t = s.col[0] + s.col[1] + s.col[2] + 1e-4;
    return [(s.col[0] - s.col[2]) / t, (s.col[1] - s.col[2]) / t];
  });
  let hueSpread = 0;
  for (const a of norm) for (const b of norm) hueSpread = Math.max(hueSpread, Math.hypot(a[0] - b[0], a[1] - b[1]));

  const pair = await analyzePair(page, offR.buf, onBuf, 320, 180, bbox);

  // ── 비활성 후 페이드아웃 ──
  await hook('setActive', false);
  await page.waitForTimeout(600);
  const fadedR = await sample(page, 320, 180);
  await writeFile(`${OUT}/aura_faded.png`, fadedR.buf);

  report.errors = errors;
  report.consoleErrorCount = errors.length;
  report.bbox = bbox;
  report.pair = pair;
  report.baselineColN = offR.stats.colN;

  // 판정
  const renders = colNMax > 300;
  const silhouette = pair.hugFrac > 0.75;                   // 네온 대부분이 스프라이트 근방(네모 프레임이면 낮음)
  const noWhiteout = hotMax < 0.03;
  const centerClear = pair.interiorNeonFrac < 0.35 && pair.interiorN > 40; // 몸통 중앙이 네온으로 안 채워짐(안 가림)
  const flowing = hueSpread > 0.04;
  const fadesOut = fadedR.stats.colN < colNMax * 0.4 + offR.stats.colN;
  report.checks = {
    a_renders: { pass: renders, neonPxMax: colNMax },
    b_silhouette: { pass: silhouette, hugFrac: pair.hugFrac, note: '스프라이트 근방 네온 비율(실루엣=높음, 네모=낮음)' },
    c_noWhiteout: { pass: noWhiteout, hotFracMax: hotMax, limit: 0.03 },
    d_centerClear: { pass: centerClear, interiorNeonFrac: pair.interiorNeonFrac, interiorDelta: pair.interiorDelta, interiorN: pair.interiorN },
    e_flowing: { pass: flowing, hueSpread: +hueSpread.toFixed(3) },
    f_fadesOut: { pass: fadesOut, colnFaded: fadedR.stats.colN, colnOnMax: colNMax },
    g_noErrors: { pass: errors.length === 0, count: errors.length },
  };
  report.pass = renders && silhouette && noWhiteout && centerClear && flowing && fadesOut && errors.length === 0;
} catch (e) {
  report.fatal = String(e && e.stack ? e.stack : e);
  report.pass = false;
} finally {
  if (browser) await browser.close();
  vite.kill('SIGTERM');
  await unlink(HARNESS).catch(() => {});
}

console.log(JSON.stringify(report, null, 2));
process.exit(report.pass ? 0 : 1);
