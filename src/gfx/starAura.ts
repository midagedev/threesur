import {
  Scene,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  AdditiveBlending,
  Vector2,
  Texture,
} from 'three';
import { SPRITE_TILT, SPRITE_WORLD_H } from './sprites';
import { CELL_W, CELL_H } from '../data/spriteManifest';
import type { SheetInfo } from './atlas';

// 군신 사당 버프 오라 — "캐릭터 실루엣을 따라 흐르는 네온"(오너 재피드백: 네모 프레임 폐기).
// 플레이어 현재 스프라이트 프레임의 알파를 팽창(dilate)시킨 마스크에서 원본을 빼 얻은 외곽 밴드에만
// 네온을 발광시킨다 → 캐릭터 모양 그대로의 아웃라인. 몸통(알파>0.5)은 투명 유지, 배경(알파 없음)엔 네온 없음.
//  · 플레이어 스프라이트와 동일 지오메트리(QUAD_W_RATIO·SPRITE_TILT·발 정렬·worldH)로 오버레이 → 정확히 실루엣에 정렬.
//  · 아틀라스 텍스처 + 현재 프레임 UV(u,v) + 셀 UV/텍셀을 run이 넘겨줌(NearestFilter 도트라 경계 또렷).
//  · 색(청록↔자홍↔보라)이 윤곽을 타고 흐르고 밝은 스윕이 한 바퀴 돎. 절제: hotFrac<0.03, 화이트아웃 금지.
// active=false 시 0.4s 페이드아웃 후 정지. 시그니처 확장(sheet/u/v) — 미전달 시 no-op 안전.

const QUAD_W_RATIO = CELL_W / CELL_H; // 셀 가로/세로 비(sprites.ts와 동일)
const FADE_IN = 0.25;
const FADE_OUT = 0.4;

export class StarAura {
  private readonly mesh: Mesh;
  private readonly mat: ShaderMaterial;
  private time = 0;
  private vis = 0; // 0..1 페이드
  private boundTex: Texture | null = null;

  constructor(scene: Scene) {
    // 플레이어 스프라이트와 동일한 유닛 지오메트리(발=원점, 카메라 각도만큼 눕힘).
    const geo = new PlaneGeometry(QUAD_W_RATIO, 1);
    geo.translate(0, 0.5, 0);
    geo.rotateX(SPRITE_TILT);
    this.mat = new ShaderMaterial({
      uniforms: {
        uMap: { value: null },
        uUvOffset: { value: new Vector2(0, 0) },
        uCellUv: { value: new Vector2(1, 1) },
        uTexel: { value: new Vector2(1, 1) },
        uTime: { value: 0 },
        uAlpha: { value: 0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform sampler2D uMap;
        uniform vec2 uUvOffset;
        uniform vec2 uCellUv;
        uniform vec2 uTexel;
        uniform float uTime;
        uniform float uAlpha;
        varying vec2 vUv;
        // 셀 내부 정규화 좌표(cuv 0..1)에서 알파 마스크 샘플. 셀 밖은 투명(0) → 콘텐츠 외곽선 정확.
        float aAt(vec2 cuv) {
          if (cuv.x < 0.0 || cuv.y < 0.0 || cuv.x > 1.0 || cuv.y > 1.0) return 0.0;
          return texture2D(uMap, uUvOffset + cuv * uCellUv).a >= 0.5 ? 1.0 : 0.0;
        }
        // 반경 r 텍셀 8방향 팽창(최대 알파).
        float dil(vec2 cuv, float r) {
          vec2 t = (uTexel / uCellUv) * r;
          float d = t.x * 0.7071, e = t.y * 0.7071;
          float m = aAt(cuv + vec2(t.x, 0.0));
          m = max(m, aAt(cuv + vec2(-t.x, 0.0)));
          m = max(m, aAt(cuv + vec2(0.0, t.y)));
          m = max(m, aAt(cuv + vec2(0.0, -t.y)));
          m = max(m, aAt(cuv + vec2(d, e)));
          m = max(m, aAt(cuv + vec2(-d, e)));
          m = max(m, aAt(cuv + vec2(d, -e)));
          m = max(m, aAt(cuv + vec2(-d, -e)));
          return m;
        }
        // 사이버 네온 팔레트: 청록→자홍→보라 순환.
        vec3 neon(float t) {
          t = fract(t) * 3.0;
          vec3 c0 = vec3(0.15, 0.95, 1.05);
          vec3 c1 = vec3(1.05, 0.22, 0.9);
          vec3 c2 = vec3(0.6, 0.32, 1.05);
          if (t < 1.0) return mix(c0, c1, smoothstep(0.0, 1.0, t));
          if (t < 2.0) return mix(c1, c2, smoothstep(0.0, 1.0, t - 1.0));
          return mix(c2, c0, smoothstep(0.0, 1.0, t - 2.0));
        }
        void main() {
          vec2 cuv = vUv;
          float own = aAt(cuv);                 // 몸통(불투명)이면 1
          float outer = 1.0 - own;              // 외곽(투명)만 밴드 후보
          float d1 = dil(cuv, 1.5);             // 얇은 밝은 외곽선
          float d2 = dil(cuv, 2.6);             // 살짝 넓은 은은한 글로우(몸통 쪽 번짐 최소화로 좁게)
          float band = (d1 + d2 * 0.4) * outer;
          if (band < 0.02) discard;             // 몸통(투명)·먼 배경(밴드 없음) → 안 가림
          // 흐르는 색: 스프라이트 프레임 중심 기준 각도 + 시간 → 팔레트가 윤곽을 타고 회전.
          vec2 P = cuv - 0.5;
          float a = atan(P.y, P.x) / 6.2831853 + 0.5;
          vec3 col = neon(a + uTime * 0.22);
          float sd = abs(fract(a - uTime * 0.42 + 0.5) - 0.5); // 이동 스윕 하이라이트
          float sweep = smoothstep(0.14, 0.0, sd);
          float b = min(1.4, band) * (0.6 + sweep * 0.55);
          // 게인 1.2로 코어만 블룸(임계 0.88) 살짝 태워 "버프 중" 확실히, 스윕/글로우 절제로 몸통 번짐·블로우아웃 없음.
          vec3 outc = (col + vec3(0.22) * sweep) * b * 1.2;
          gl_FragColor = vec4(outc, min(1.0, b) * uAlpha);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: false, // 플레이어 윤곽 위/주위에 항상 표시(가림 없이)
    });
    this.mesh = new Mesh(geo, this.mat);
    this.mesh.scale.setScalar(SPRITE_WORLD_H);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    this.mesh.renderOrder = 5; // 스프라이트(2) 위에 발광
    scene.add(this.mesh);
  }

  reset(): void {
    this.time = 0;
    this.vis = 0;
    this.mesh.visible = false;
  }

  // dt: 프레임 시간. x,z: 플레이어 좌표. active: 사당 버프 활성.
  // sheet: 플레이어 아틀라스 시트(텍스처+셀치수), u,v: 현재 프레임 UV 오프셋(player.frameUv).
  // sheet 미전달(미배선) 시 no-op 안전. active=false여도 vis>0인 동안 페이드아웃 유지.
  update(
    dt: number, x: number, z: number, active: boolean,
    sheet: SheetInfo | null = null, u = 0, v = 0,
  ): void {
    if (dt > 0.1) dt = 0.1; // 탭 복귀 등 큰 점프 클램프
    const canDraw = sheet !== null;
    this.vis = active && canDraw
      ? Math.min(1, this.vis + dt / FADE_IN)
      : Math.max(0, this.vis - dt / FADE_OUT);
    if (this.vis <= 0.001) {
      this.mesh.visible = false;
      return;
    }
    this.time += dt;
    if (sheet) {
      if (this.boundTex !== sheet.texture) {
        this.mat.uniforms.uMap.value = sheet.texture;
        this.boundTex = sheet.texture;
      }
      (this.mat.uniforms.uCellUv.value as Vector2).set(sheet.cellUvW, sheet.cellUvH);
      (this.mat.uniforms.uTexel.value as Vector2).set(1 / sheet.texW, 1 / sheet.texH);
      (this.mat.uniforms.uUvOffset.value as Vector2).set(u, v);
    }
    this.mesh.position.set(x, 0, z); // 발=지면, 플레이어 스프라이트와 동일 정렬
    this.mesh.visible = true;
    this.mat.uniforms.uTime.value = this.time;
    this.mat.uniforms.uAlpha.value = this.vis;
  }
}
