import type { Atlas } from '../gfx/atlas';
import type { LightUniforms } from '../gfx/lightField';
import { cellUvOffset } from '../gfx/atlas';
import { SpriteQuad, dirFromVelocity } from '../gfx/sprites';
import type { Input } from '../core/input';
import type { HeroDef } from '../data/heroes';
import { CELL_W } from '../data/spriteManifest';
import { PASSIVE_BY_ID } from '../data/passives';
import { RELIC_BY_ID } from '../data/relics';
import type { MetaMods } from '../data/upgrades';

export type BuffKind = 'attack' | 'speed' | 'musou';

// 무기/이동/피해 계산에 쓰이는 전체 스탯. 패시브 적용으로 갱신.
export interface PlayerStats {
  damageMul: number;
  cooldownMul: number;
  speedMul: number;
  maxHpMul: number;
  pickupMul: number;
  xpMul: number;
  dmgReduction: number; // 0..0.8 (받는 피해 감소 비율)
  goldMul: number;
  hpRegen: number; // 초당 체력 재생
  projectileBonus: number; // 추가 투사체 수 (정수)
  rangeMul: number; // 사거리/투사체 속도
  areaMul: number; // 광역 효과 반경
  dmgTakenMul: number; // 받는 피해 배수 (여포)
}

const ANIM_FPS = 8;
const INVULN = 0.5;
const FLASH_DECAY = 6;
export const PLAYER_RADIUS = 0.5;
// 이동 손맛: 가속 반응/관성 감쇠 + i-frame 대시
const ACCEL = 20; // 목표 속도로 수렴하는 반응(클수록 즉각적)
const DECEL = 13; // 입력 없을 때 관성 감쇠(클수록 빨리 멈춤)
const DASH_TIME = 0.16; // 대시 지속
const DASH_CD = 0.8; // 대시 쿨다운
const DASH_SPEED_MUL = 3.8; // 대시 속도 배수
const DASH_IFRAME = 0.24; // 대시 무적 시간
const DOUBLE_TAP = 0.26; // 더블탭 인정 간격
const TAP_DIR: Record<string, { x: number; z: number }> = {
  KeyW: { x: 0, z: -1 }, ArrowUp: { x: 0, z: -1 },
  KeyS: { x: 0, z: 1 }, ArrowDown: { x: 0, z: 1 },
  KeyA: { x: -1, z: 0 }, ArrowLeft: { x: -1, z: 0 },
  KeyD: { x: 1, z: 0 }, ArrowRight: { x: 1, z: 0 },
};
const TAP_CODES = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

export class Player {
  x = 0;
  z = 0;
  hp: number;
  maxHp: number;
  readonly stats: PlayerStats;
  hero: HeroDef;
  private meta: MetaMods | null = null; // 메타 상점 영구 강화 (런 시작 시 세팅)
  private relicIds: string[] = []; // 보유 저주 유물
  private curPassives: Record<string, number> = {}; // 마지막 재계산에 쓴 패시브(버프 만료 재계산용)
  private buffAttackT = 0; // 사당 공격 버프 잔여(초)
  private buffSpeedT = 0; // 사당 이속 버프 잔여
  private buffMusouT = 0; // 사당 무쌍충전 버프 잔여

  // 바라보는 방향(단위 벡터). 무기 발사 방향으로 사용.
  faceX = 0;
  faceZ = 1;

  invuln = 0;
  musouInvuln = false; // 무쌍 중 완전 무적
  private flash = 0;
  private dir = 0;
  private frame = 0;
  private animTime = 0;
  private moving = false;

  // 이동 손맛 상태
  private vx = 0;
  private vz = 0;
  private dashT = 0;
  private dashCd = 0;
  private ddx = 0;
  private ddz = 1;
  private time = 0;
  private lastTapCode = '';
  private lastTapAt = -1;
  private sqSX = 1;
  private sqSY = 1;
  justDashed = false; // run이 읽어 잔상/리본/카메라 펄스 트리거 (읽은 뒤 false로)
  dashDirX = 0;
  dashDirZ = 1;

  get dashing(): boolean {
    return this.dashT > 0;
  }
  get velX(): number {
    return this.vx;
  }
  get velZ(): number {
    return this.vz;
  }
  // 최대속도 대비 현재 속력(0..~1). 동적 카메라 룩어헤드에 사용.
  get speedFrac(): number {
    return Math.hypot(this.vx, this.vz) / Math.max(0.01, this.baseSpeed * this.stats.speedMul);
  }

  private baseSpeed: number;
  private baseHp: number;
  private blockPx: number;
  private readonly quad: SpriteQuad;
  private readonly atlas: Atlas;
  private readonly uv = { u: 0, v: 0 };

  constructor(atlas: Atlas, hero: HeroDef, light: LightUniforms) {
    this.atlas = atlas;
    this.hero = hero;
    this.quad = new SpriteQuad(atlas.sgrade, light);
    this.quad.setPlayer(true); // 군중 속 가독성용 림 글로우 활성
    this.baseSpeed = hero.baseSpeed;
    this.baseHp = hero.baseHp;
    this.stats = {
      damageMul: 1,
      cooldownMul: 1,
      speedMul: 1,
      maxHpMul: 1,
      pickupMul: 1,
      xpMul: 1,
      dmgReduction: 0,
      goldMul: 1,
      hpRegen: 0,
      projectileBonus: 0,
      rangeMul: 1,
      areaMul: 1,
      dmgTakenMul: 1,
    };
    this.blockPx = hero.charIndex * 4 * CELL_W;
    this.resetStats({});
    this.maxHp = this.baseHp * this.stats.maxHpMul;
    this.hp = this.maxHp;
  }

  get mesh() {
    return this.quad.mesh;
  }

  get radius(): number {
    return PLAYER_RADIUS;
  }

  // 플레이어 림 글로우 강도(모바일 저해상도 블룸 대응).
  setRimScale(s: number): void {
    this.quad.setRimScale(s);
  }

  // 장수 교체(선택 화면). 파생 스탯 갱신. 스프라이트 시트는 sgrade 공용.
  setHero(hero: HeroDef): void {
    this.hero = hero;
    this.baseSpeed = hero.baseSpeed;
    this.baseHp = hero.baseHp;
    this.blockPx = hero.charIndex * 4 * CELL_W;
  }

  // 메타 상점 영구 강화 세팅. resetStats에서 base·패시브 위에 곱해진다.
  setMeta(meta: MetaMods | null): void {
    this.meta = meta;
  }

  // 스탯을 장수 base로 리셋한 뒤 보유 패시브를 전부 재적용. 누적 드리프트 없음.
  resetStats(passives: Record<string, number>): void {
    this.curPassives = passives;
    const s = this.stats;
    const h = this.hero;
    s.damageMul = h.damageMul;
    s.cooldownMul = h.cooldownMul;
    s.speedMul = h.speedMul;
    s.maxHpMul = h.maxHpMul;
    s.pickupMul = 1;
    s.xpMul = 1;
    s.dmgReduction = 0;
    s.goldMul = 1;
    s.hpRegen = 0;
    s.projectileBonus = 0;
    s.rangeMul = h.rangeMul;
    s.areaMul = 1;
    s.dmgTakenMul = h.dmgTakenMul;
    for (const id in passives) {
      const def = PASSIVE_BY_ID[id];
      if (def) def.apply(s, passives[id]);
    }
    // 메타 강화는 base+패시브 위에 곱해진다(누적 드리프트 없음: 매번 base부터 재계산).
    if (this.meta) {
      s.damageMul *= this.meta.damageMul;
      s.maxHpMul *= this.meta.maxHpMul;
      s.speedMul *= this.meta.speedMul;
      s.pickupMul *= this.meta.pickupMul;
      s.cooldownMul *= this.meta.cooldownMul;
    }
    // 저주 유물(강한 이득 + 대가)
    for (const id of this.relicIds) {
      const r = RELIC_BY_ID[id];
      if (r) r.apply(s);
    }
    // 사당 임시 버프
    if (this.buffAttackT > 0) s.damageMul *= 1.3;
    if (this.buffSpeedT > 0) s.speedMul *= 1.25;
  }

  // 저주 유물 획득(최대 2개는 run이 관리). 스탯 재계산.
  addRelic(id: string): void {
    if (this.relicIds.includes(id)) return;
    this.relicIds.push(id);
    this.recomputeStats(this.curPassives);
  }
  get relicCount(): number {
    return this.relicIds.length;
  }

  // 사당 30초 버프 적용. attack/speed는 스탯, musou는 게이지 충전 배수(run이 읽음).
  applyBuff(kind: BuffKind, dur: number): void {
    if (kind === 'attack') this.buffAttackT = Math.max(this.buffAttackT, dur);
    else if (kind === 'speed') this.buffSpeedT = Math.max(this.buffSpeedT, dur);
    else this.buffMusouT = Math.max(this.buffMusouT, dur);
    this.recomputeStats(this.curPassives);
  }
  get musouBuffed(): boolean {
    return this.buffMusouT > 0;
  }

  // 패시브 변경 시 호출: 스탯 재계산 + 최대체력 반영(현재 비율 유지).
  recomputeStats(passives: Record<string, number>): void {
    const ratio = this.maxHp > 0 ? this.hp / this.maxHp : 1;
    this.resetStats(passives);
    this.maxHp = this.baseHp * this.stats.maxHpMul;
    this.hp = this.maxHp * ratio;
  }

  reset(passives: Record<string, number>): void {
    this.x = 0;
    this.z = 0;
    this.relicIds = [];
    this.buffAttackT = 0;
    this.buffSpeedT = 0;
    this.buffMusouT = 0;
    this.resetStats(passives);
    this.maxHp = this.baseHp * this.stats.maxHpMul;
    this.hp = this.maxHp;
    this.invuln = 0;
    this.musouInvuln = false;
    this.flash = 0;
    this.faceX = 0;
    this.faceZ = 1;
    this.vx = 0;
    this.vz = 0;
    this.dashT = 0;
    this.dashCd = 0;
    this.sqSX = 1;
    this.sqSY = 1;
    this.justDashed = false;
  }

  update(dt: number, input: Input): void {
    this.time += dt;
    const mx = input.move.x;
    const mz = input.move.z;
    const len = Math.hypot(mx, mz);
    const inMove = len > 0;
    const nx = inMove ? mx / len : 0;
    const nz = inMove ? mz / len : 0;

    // 대시 입력: Shift 또는 방향키 더블탭
    let dashReq = false;
    let rdx = inMove ? nx : this.faceX;
    let rdz = inMove ? nz : this.faceZ;
    if (input.consumePressed('ShiftLeft') || input.consumePressed('ShiftRight')) dashReq = true;
    for (const code of TAP_CODES) {
      if (!input.consumePressed(code)) continue;
      if (this.lastTapCode === code && this.time - this.lastTapAt < DOUBLE_TAP) {
        dashReq = true;
        rdx = TAP_DIR[code].x;
        rdz = TAP_DIR[code].z;
      }
      this.lastTapCode = code;
      this.lastTapAt = this.time;
    }
    if (this.dashCd > 0) this.dashCd -= dt;
    if (dashReq && this.dashCd <= 0 && this.dashT <= 0) {
      const l = Math.hypot(rdx, rdz) || 1;
      this.ddx = rdx / l;
      this.ddz = rdz / l;
      this.dashT = DASH_TIME;
      this.dashCd = DASH_CD;
      this.invuln = Math.max(this.invuln, DASH_IFRAME);
      this.faceX = this.ddx;
      this.faceZ = this.ddz;
      this.dashDirX = this.ddx;
      this.dashDirZ = this.ddz;
      this.justDashed = true;
    }

    // 속도 통합: 대시 오버라이드 / 가속 수렴 / 관성 감쇠
    const maxSp = this.baseSpeed * this.stats.speedMul;
    if (this.dashT > 0) {
      this.dashT -= dt;
      const ds = maxSp * DASH_SPEED_MUL;
      this.vx = this.ddx * ds;
      this.vz = this.ddz * ds;
    } else if (inMove) {
      this.faceX = nx;
      this.faceZ = nz;
      const k = 1 - Math.exp(-ACCEL * dt);
      this.vx += (nx * maxSp - this.vx) * k;
      this.vz += (nz * maxSp - this.vz) * k;
    } else {
      const k = Math.exp(-DECEL * dt);
      this.vx *= k;
      this.vz *= k;
      if (Math.abs(this.vx) < 0.02) this.vx = 0;
      if (Math.abs(this.vz) < 0.02) this.vz = 0;
    }
    this.x += this.vx * dt;
    this.z += this.vz * dt;

    const spd = Math.hypot(this.vx, this.vz);
    this.moving = spd > 0.05;
    if (this.moving) {
      this.dir = dirFromVelocity(this.vx, this.vz, this.dir);
      this.animTime += dt;
      this.frame = ((this.animTime * ANIM_FPS) | 0) % 4;
    } else {
      this.dir = dirFromVelocity(this.faceX, this.faceZ, this.dir);
      this.frame = 0;
    }

    if (this.invuln > 0) this.invuln -= dt;
    if (this.flash > 0) {
      this.flash -= dt * FLASH_DECAY;
      if (this.flash < 0) this.flash = 0;
    }
    // 사당 임시 버프 만료 → 스탯 재계산 (스탯 버프만 재계산 필요)
    if (this.buffAttackT > 0 || this.buffSpeedT > 0 || this.buffMusouT > 0) {
      const a0 = this.buffAttackT > 0;
      const s0 = this.buffSpeedT > 0;
      if (this.buffAttackT > 0) this.buffAttackT -= dt;
      if (this.buffSpeedT > 0) this.buffSpeedT -= dt;
      if (this.buffMusouT > 0) this.buffMusouT -= dt;
      if ((a0 && this.buffAttackT <= 0) || (s0 && this.buffSpeedT <= 0)) {
        this.recomputeStats(this.curPassives);
      }
    }
    // 체력 재생 (백주)
    if (this.stats.hpRegen > 0 && this.hp < this.maxHp) {
      this.hp = Math.min(this.maxHp, this.hp + this.stats.hpRegen * dt);
    }

    // 스쿼시&스트레치: 대시=늘어남, 질주=미세, 정지=원형 (부피 보존)
    let tsy = 1;
    if (this.dashT > 0) tsy = 1.28;
    else if (spd > maxSp * 0.55) tsy = 1.07;
    const tsx = 1 / Math.sqrt(tsy);
    const sk = Math.min(1, dt * 16);
    this.sqSX += (tsx - this.sqSX) * sk;
    this.sqSY += (tsy - this.sqSY) * sk;
    this.quad.setSquash(this.sqSX, this.sqSY);

    cellUvOffset(this.atlas.sgrade, this.blockPx, 0, this.dir, this.frame, this.uv);
    this.quad.setUv(this.uv.u, this.uv.v);
    this.quad.setFlash(this.flash);
    this.quad.setPosition(this.x, 0, this.z);
  }

  setPosition(x: number, z: number): void {
    this.x = x;
    this.z = z;
    this.quad.setPosition(x, 0, z);
  }

  // 접촉 피해. 무적/무쌍이면 무시하고 false. 실제 적용 피해량은 stats 반영.
  takeDamage(dmg: number): boolean {
    if (this.musouInvuln || this.invuln > 0) return false;
    const applied = dmg * this.stats.dmgTakenMul * (1 - this.stats.dmgReduction);
    this.hp -= applied;
    if (this.hp < 0) this.hp = 0;
    this.invuln = INVULN;
    this.flash = 1;
    return true;
  }

  heal(amount: number): void {
    this.hp = Math.min(this.maxHp, this.hp + amount);
  }

  // 기사회생: HP 비율 회복 + 무적 부여. (run이 충격파/사운드 처리)
  revive(hpFrac: number, invulnSec: number): void {
    this.hp = this.maxHp * hpFrac;
    this.invuln = invulnSec;
    this.flash = 1;
  }

  get dead(): boolean {
    return this.hp <= 0;
  }
}
