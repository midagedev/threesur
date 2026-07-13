import {
  DynamicDrawUsage,
  InstancedBufferAttribute,
  InstancedMesh,
  NearestFilter,
  NormalBlending,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  TextureLoader,
} from 'three';

export type ProjectileSpriteName =
  | 'player-arrow'
  | 'player-arrow-basic'
  | 'talisman'
  | 'slash-wave'
  | 'bagua-orb'
  | 'cavalry'
  | 'enemy-arrow'
  | 'enemy-arrow-volley'
  | 'enemy-orb'
  | 'enemy-talisman'
  | 'boss-fireball'
  | 'boss-poison-orb'
  | 'boss-lightning-spear'
  | 'boss-heavy-shot';

// 생성 원화를 64px 논리 격자로 재가공한 레트로 스프라이트 배치.
// 투사체 종류별 텍스처는 달라도, 각 종류 안에서는 InstancedMesh 한 번으로 그린다.
export class RetroProjectileBatch {
  private readonly mesh: InstancedMesh;
  private readonly matrices: Float32Array;
  private readonly fade: Float32Array;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly material: ShaderMaterial;
  private cursor = 0;

  constructor(
    scene: Scene,
    name: ProjectileSpriteName,
    capacity: number,
    renderOrder = 5,
    intensity = 1,
    flutter = false,
  ) {
    const texture = new TextureLoader().load(
      `${import.meta.env.BASE_URL}assets/projectiles/${name}.png`,
    );
    texture.colorSpace = SRGBColorSpace;
    texture.magFilter = NearestFilter;
    texture.minFilter = NearestFilter;
    texture.generateMipmaps = false;

    // 부적: 종이가 팔랑이도록 길이 방향 세그먼트를 준다.
    const geometry = new PlaneGeometry(1, 1, flutter ? 12 : 1, 1);
    geometry.rotateX(-Math.PI / 2);
    this.fade = new Float32Array(capacity);
    this.fadeAttr = new InstancedBufferAttribute(this.fade, 1);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geometry.setAttribute('aFade', this.fadeAttr);

    this.material = new ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uTime: { value: 0 },
        uIntensity: { value: intensity },
      },
      vertexShader: /* glsl */ `
        attribute float aFade;
        uniform float uTime;
        varying vec2 vUv;
        varying float vFade;
        void main() {
          vUv = uv;
          vFade = aFade;
          vec3 pos = position;
          ${flutter ? 'pos.y += sin(pos.x * 7.0 + uTime * 13.0) * 0.13 + sin(pos.z * 5.0 - uTime * 9.0) * 0.05;' : ''}
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;
        varying float vFade;
        void main() {
          vec4 texel = texture2D(uMap, vUv);
          if (texel.a < 0.04) discard;
          float inkPulse = 0.97 + 0.03 * sin(uTime * 5.0 + vUv.x * 5.0);
          // EffectComposer의 OutputPass가 최종 변환하므로 원화 sRGB를 먼저 선형화한다.
          vec3 col = pow(texel.rgb, vec3(2.2)) * inkPulse * uIntensity;
          gl_FragColor = vec4(col, texel.a * vFade);
        }
      `,
      transparent: true,
      blending: NormalBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.mesh = new InstancedMesh(geometry, this.material, capacity);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = renderOrder;
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(time: number): void {
    this.cursor = 0;
    this.material.uniforms.uTime.value = time;
  }

  push(
    x: number,
    y: number,
    z: number,
    theta: number,
    scaleX: number,
    scaleZ: number,
    fade: number,
  ): void {
    const i = this.cursor++;
    const m = i * 16;
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    this.matrices[m] = ct * scaleX;
    this.matrices[m + 1] = 0;
    this.matrices[m + 2] = -st * scaleX;
    this.matrices[m + 3] = 0;
    this.matrices[m + 4] = 0;
    this.matrices[m + 5] = 1;
    this.matrices[m + 6] = 0;
    this.matrices[m + 7] = 0;
    this.matrices[m + 8] = st * scaleZ;
    this.matrices[m + 9] = 0;
    this.matrices[m + 10] = ct * scaleZ;
    this.matrices[m + 11] = 0;
    this.matrices[m + 12] = x;
    this.matrices[m + 13] = y;
    this.matrices[m + 14] = z;
    this.matrices[m + 15] = 1;
    this.fade[i] = fade;
  }

  end(): void {
    this.mesh.count = this.cursor;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }
}
