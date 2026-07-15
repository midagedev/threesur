import {
  Scene,
  Mesh,
  PlaneGeometry,
  ShaderMaterial,
  DoubleSide,
  Vector2,
  Vector3,
} from 'three';
import { CASTLE } from '../game/battlefieldMap';

// 낙양 거점화·수성 중 "내가 지키는 성 안"을 바닥에 표시하는 방어 구역 레이어(GFX).
// 성벽(3D)만으로 애매하던 공간을 지면으로 구분한다 — 외성 안뜰 틴트 + 경계 라인(성문 통로 끊김)
// + 내성(본성) 이중 라인 강조. 정보 전달용이라 은은하되 명확: 지면 텍스처가 비치게 저알파,
// 색은 동료 청록(블룸 임계 아래)으로 additive 아닌 알파 블렌드 → 화이트아웃 원천 차단.
//
// 지오메트리는 정적(사각 2개). 매 프레임 할당 0 — uOpacity/uTime 유니폼만 갱신.
// SDF 사각 셰이더로 채움·라인·성문 끊김·이중 라인을 한 장에서 처리(메시 최소).

const FADE_IN_SEC = 0.6;
const FADE_OUT_SEC = 0.4;

// 채움/라인 색: 동료 청록(markers.ts ALLIED_CYAN과 톤 통일). 최댓값 0.55 < 블룸 임계 → 광원처럼 안 탐.
const OUTER_COLOR = new Vector3(0.14, 0.46, 0.44);
const INNER_COLOR = new Vector3(0.17, 0.55, 0.5); // 내성은 조금 더 진한 톤(핵심부 구분)

// 지면 살짝 위(z-fighting 회피). 내성이 외성 위로 합성되게 미세하게 더 높이 둔다.
const OUTER_Y = 0.03;
const INNER_Y = 0.045;

const GATE_SOFT = 1.2; // 성문 통로 가장자리 부드러움(m)

interface ZoneParams {
  halfX: number;
  halfZ: number;
  color: Vector3;
  fill: number; // 채움 알파(지면 텍스처가 비치게 저알파)
  line: number; // 경계 라인 최대 알파
  borderW: number; // 라인 폭(m)
  gateHalf: number; // 성문 반폭(m) — 이 폭만큼 라인을 끊어 통로로
  gateMode: number; // 0=없음, 1=남·동·서(외성), 2=남만(내성문)
  innerGap: number; // >0이면 라인 안쪽에 평행 이중선(내성 강조), 0=단선
  y: number;
}

// 축정렬 사각 하나(채움 + 경계 라인 + 성문 끊김 + 옵션 이중선)를 렌더하는 메시.
function makeZoneMesh(center: Vector2, p: ZoneParams): { mesh: Mesh; mat: ShaderMaterial } {
  // 라인이 경계 양쪽에 걸치도록 지오메트리를 라인 폭만큼 여유 있게 키운다.
  const margin = p.borderW + 0.6;
  const geo = new PlaneGeometry((p.halfX + margin) * 2, (p.halfZ + margin) * 2);
  geo.rotateX(-Math.PI / 2); // 지면에 눕힘(법선 +Y)

  const mat = new ShaderMaterial({
    uniforms: {
      uCenter: { value: center.clone() },
      uHalf: { value: new Vector2(p.halfX, p.halfZ) },
      uColor: { value: p.color.clone() },
      uFill: { value: p.fill },
      uLine: { value: p.line },
      uBorderW: { value: p.borderW },
      uGateHalf: { value: p.gateHalf },
      uGateSoft: { value: GATE_SOFT },
      uGateMode: { value: p.gateMode },
      uInnerGap: { value: p.innerGap },
      uOpacity: { value: 0 },
      uTime: { value: 0 },
      uFlow: { value: 0.15 }, // 경계를 도는 은은한 셰이드 진폭(절제)
    },
    vertexShader: /* glsl */ `
      uniform vec2 uCenter;
      varying vec2 vRel;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vRel = wp.xz - uCenter; // 중심 기준 월드 XZ 오프셋(x=동서, y=남북 Z)
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec2 uHalf;
      uniform vec3 uColor;
      uniform float uFill, uLine, uBorderW, uGateHalf, uGateSoft, uGateMode, uInnerGap, uOpacity, uTime, uFlow;
      varying vec2 vRel;
      void main() {
        vec2 a = abs(vRel);
        float dX = uHalf.x - a.x; // 세로변(동·서)에서 안쪽으로 들어온 거리(m)
        float dZ = uHalf.y - a.y; // 가로변(남·북)에서 안쪽으로 들어온 거리(m)
        float d = min(dX, dZ);    // 가장 가까운 변까지 거리(안쪽 +, 바깥 -)

        // 채움: 사각 안쪽만(살짝 AA). 지면이 비치도록 저알파.
        float fill = smoothstep(0.0, 0.4, d) * uFill;

        // 경계 라인: 변(d≈0)에 밴드. 내성은 안쪽 평행선 1겹 추가(이중선).
        float line = smoothstep(uBorderW, 0.0, abs(d));
        if (uInnerGap > 0.001) line += 0.7 * smoothstep(uBorderW, 0.0, abs(d - uInnerGap));
        line = min(line, 1.2);

        // 성문 통로: 해당 변의 성문 폭만큼 라인을 끊는다.
        float gate = 0.0;
        if (uGateMode > 0.5) {
          if (dX < dZ) {
            // 세로변(동·서 성문) — 외성(mode 1)에만. 성문은 vRel.y(남북) 중앙.
            if (uGateMode < 1.5) gate = 1.0 - smoothstep(uGateHalf, uGateHalf + uGateSoft, abs(vRel.y));
          } else {
            // 가로변: 남성문만(vRel.y>0), 북벽은 폐쇄.
            float south = 1.0 - smoothstep(uGateHalf, uGateHalf + uGateSoft, abs(vRel.x));
            gate = vRel.y > 0.0 ? south : 0.0;
          }
        }
        line *= (1.0 - gate);

        // 경계를 천천히 도는 은은한 셰이드(활성 방어선 느낌 — 저진폭·저속).
        float ang = atan(vRel.y, vRel.x);
        float flow = (1.0 - uFlow) + uFlow * (0.5 + 0.5 * sin(ang * 2.0 - uTime * 0.9));
        line *= flow;

        float alpha = (fill + line * uLine) * uOpacity;
        if (alpha <= 0.003) discard;
        // 라인은 같은 색조로 약간 밝게(블룸 임계는 안 넘게).
        vec3 col = uColor * (1.0 + 0.45 * line);
        gl_FragColor = vec4(col, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: DoubleSide,
  });

  const mesh = new Mesh(geo, mat);
  mesh.position.set(center.x, p.y, center.y);
  mesh.renderOrder = 0; // 지면(-1) 위, 마커/글로우(2)·깃발(1) 아래
  mesh.frustumCulled = false;
  mesh.visible = false;
  return { mesh, mat };
}

export class CastleZone {
  private readonly outerMat: ShaderMaterial;
  private readonly innerMat: ShaderMaterial;
  private readonly outer: Mesh;
  private readonly inner: Mesh;
  private opacity = 0; // 현재 페이드값
  private target = 0; // 목표(0/1)
  private time = 0;

  constructor(scene: Scene) {
    const center = new Vector2(CASTLE.cx, CASTLE.cz);

    // 외성 안뜰: 넓은 저알파 틴트 + 남·동·서 성문 끊긴 경계 라인.
    const o = makeZoneMesh(center, {
      halfX: CASTLE.ohx,
      halfZ: CASTLE.ohz,
      color: OUTER_COLOR,
      fill: 0.13,
      line: 0.5,
      borderW: 0.7,
      gateHalf: 4.5, // CASTLE_GATE(9) / 2
      gateMode: 1,
      innerGap: 0,
      y: OUTER_Y,
    });
    // 내성(본성): 조금 더 진한 틴트 + 이중 라인(핵심부). 남 내성문만 끊는다.
    const i = makeZoneMesh(center, {
      halfX: CASTLE.ihx,
      halfZ: CASTLE.ihz,
      color: INNER_COLOR,
      fill: 0.2,
      line: 0.6,
      borderW: 0.45,
      gateHalf: 4.0, // CASTLE_KEEP_GATE(8) / 2
      gateMode: 2,
      innerGap: 1.1,
      y: INNER_Y,
    });
    this.outer = o.mesh;
    this.outerMat = o.mat;
    this.inner = i.mesh;
    this.innerMat = i.mat;
    scene.add(this.outer, this.inner);
  }

  // 거점화·수성 중이면 on. off면 페이드아웃 후 비가시.
  setActive(on: boolean): void {
    this.target = on ? 1 : 0;
    if (on) {
      this.outer.visible = true;
      this.inner.visible = true;
    }
  }

  update(dt: number): void {
    // 페이드아웃 완료 후엔 완전 정지(렌더 스킵).
    if (this.opacity === 0 && this.target === 0) {
      if (this.outer.visible) {
        this.outer.visible = false;
        this.inner.visible = false;
      }
      return;
    }
    this.time += dt;
    if (this.opacity !== this.target) {
      const step = this.target > this.opacity ? dt / FADE_IN_SEC : dt / FADE_OUT_SEC;
      this.opacity =
        this.target > this.opacity
          ? Math.min(this.target, this.opacity + step)
          : Math.max(this.target, this.opacity - step);
    }
    this.outerMat.uniforms.uOpacity.value = this.opacity;
    this.innerMat.uniforms.uOpacity.value = this.opacity;
    this.outerMat.uniforms.uTime.value = this.time;
    this.innerMat.uniforms.uTime.value = this.time;
    if (this.opacity === 0) {
      this.outer.visible = false;
      this.inner.visible = false;
    }
  }

  reset(): void {
    this.opacity = 0;
    this.target = 0;
    this.time = 0;
    this.outerMat.uniforms.uOpacity.value = 0;
    this.innerMat.uniforms.uOpacity.value = 0;
    this.outer.visible = false;
    this.inner.visible = false;
  }
}
