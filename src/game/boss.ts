import type { WeaponContext } from './weapons/types';
import {
  EK_ARROW,
  EK_FIREBALL,
  EK_HEAVY,
  EK_LIGHTNING,
  EK_POISON,
  type EnemyProjectilePool,
} from './enemyProjectiles';
import type { Atlas } from '../gfx/atlas';
import { SHEET_SGRADE, SHEET_APRIORITY } from './enemies';
import { TG_CIRCLE, TG_CONE, TG_RECT } from '../gfx/telegraph';
import { ENEMY_TYPES } from '../data/enemyTypes';

// 패턴: 기존 AI 파라미터 변형(신규 AI 최소화). fan=부채꼴 사격 / firezone=화염장판 /
// dash=강화 돌진+참격 / rush=쾌속 근접 연속돌진 / delaybolt=지연 낙뢰(예고→광기둥) / lvbu=최종 복합.
type BossPattern = 'fan' | 'firezone' | 'dash' | 'rush' | 'delaybolt' | 'lvbu';

interface BossDef {
  name: string;
  hanja: string;
  charIndex: number;
  sheet: number; // SHEET_SGRADE | SHEET_APRIORITY
  pattern: BossPattern;
  hp: number;
  speed: number;
  contact: number;
  radius: number;
  tr: number;
  tg: number;
  tb: number;
}

// 3분/6분/9분 슬롯 + 무한 미니보스. 전부 스프라이트 보유(sgrade/apriority manifest charIndex).
export const BOSS_DEFS: Record<string, BossDef> = {
  // 3분 슬롯 (랜덤 1)
  yuanshao: { name: '원소', hanja: '袁紹', charIndex: 14, sheet: SHEET_SGRADE, pattern: 'fan', hp: 6000, speed: 2.5, contact: 14, radius: 1.4, tr: 1.1, tg: 1.1, tb: 1.4 },
  xiahoudun: { name: '하후돈', hanja: '夏侯惇', charIndex: 14, sheet: SHEET_APRIORITY, pattern: 'dash', hp: 6000, speed: 2.9, contact: 16, radius: 1.45, tr: 1.5, tg: 0.85, tb: 0.8 },
  sunce: { name: '손책', hanja: '孫策', charIndex: 12, sheet: SHEET_SGRADE, pattern: 'rush', hp: 5800, speed: 3.3, contact: 15, radius: 1.35, tr: 1.0, tg: 1.2, tb: 1.5 },
  // 6분 슬롯 (랜덤 1)
  dongzhuo: { name: '동탁', hanja: '董卓', charIndex: 4, sheet: SHEET_SGRADE, pattern: 'firezone', hp: 3600, speed: 2.1, contact: 18, radius: 1.6, tr: 1.4, tg: 1.0, tb: 0.9 },
  simayi: { name: '사마의', hanja: '司馬懿', charIndex: 11, sheet: SHEET_SGRADE, pattern: 'delaybolt', hp: 4000, speed: 2.3, contact: 16, radius: 1.5, tr: 0.9, tg: 1.05, tb: 1.5 },
  zhouyu: { name: '주유', hanja: '周瑜', charIndex: 18, sheet: SHEET_SGRADE, pattern: 'firezone', hp: 3600, speed: 2.4, contact: 16, radius: 1.5, tr: 2.0, tg: 1.0, tb: 0.45 },
  // 9분 고정 최종
  lvbu: { name: '여포', hanja: '呂布', charIndex: 10, sheet: SHEET_SGRADE, pattern: 'lvbu', hp: 7500, speed: 3.6, contact: 20, radius: 1.5, tr: 1.5, tg: 0.9, tb: 1.1 },
  // 무한 미니보스 (12분+ 순환, 스케일링)
  dianwei: { name: '전위', hanja: '典韋', charIndex: 6, sheet: SHEET_APRIORITY, pattern: 'dash', hp: 5000, speed: 2.8, contact: 17, radius: 1.4, tr: 1.4, tg: 1.1, tb: 0.9 },
  gaoshun: { name: '고순', hanja: '高順', charIndex: 8, sheet: SHEET_APRIORITY, pattern: 'fan', hp: 5000, speed: 2.5, contact: 15, radius: 1.35, tr: 1.2, tg: 1.15, tb: 1.0 },
  xiahouyuan: { name: '하후연', hanja: '夏侯淵', charIndex: 15, sheet: SHEET_APRIORITY, pattern: 'delaybolt', hp: 5000, speed: 2.6, contact: 15, radius: 1.4, tr: 1.45, tg: 0.95, tb: 0.85 },
  lumeng: { name: '여몽', hanja: '呂蒙', charIndex: 8, sheet: SHEET_SGRADE, pattern: 'firezone', hp: 5000, speed: 2.5, contact: 16, radius: 1.45, tr: 0.95, tg: 1.3, tb: 1.05 },
  luxun: { name: '육손', hanja: '陸遜', charIndex: 9, sheet: SHEET_SGRADE, pattern: 'fan', hp: 5000, speed: 2.5, contact: 15, radius: 1.4, tr: 2.0, tg: 1.05, tb: 0.5 },
};

// 무한 모드 미니보스 순환 순서.
export const MINIBOSS_CYCLE = ['dianwei', 'gaoshun', 'xiahouyuan', 'lumeng', 'luxun'];

const SGRADE_BLOCK = 4 * 48; // sgrade/apriority 캐릭터 블록 폭(px, 4열)

// 중간/최종 보스 컨트롤러. EnemyPool 엔트리(controlled)를 소유하고 패턴을 얹는다.
export class Boss {
  active = false;
  idx = -1;
  typeId = '';
  private def: BossDef | null = null;
  private readonly atlas: Atlas;
  private readonly onWarn: (name: string, hanja: string) => void;

  private atk1 = 0;
  private atk2 = 0;
  private atk3 = 0;
  private dashState = 0; // 0 없음 / 1 예열 / 2 돌진
  private dashT = 0;
  private dashDx = 0;
  private dashDz = 0;
  // 지연 낙뢰(사마의/하후연): 예고 좌표 + 강하 타이머
  private readonly boltX = new Float32Array(3);
  private readonly boltZ = new Float32Array(3);
  private boltT = -1;
  // 그로기(틈) 윈도우 (#40 14.5): 시그니처 패턴 종료 후 숨 고르기 — 근접 처단 창.
  private groggyT = 0;
  private groggyCd = 0;

  constructor(atlas: Atlas, onWarn: (name: string, hanja: string) => void) {
    this.atlas = atlas;
    this.onWarn = onWarn;
  }

  get name(): string {
    return this.def ? this.def.name : '';
  }
  get hanja(): string {
    return this.def ? this.def.hanja : '';
  }

  hpFrac(ctx: WeaponContext): number {
    if (!this.active || this.idx < 0) return 0;
    const en = ctx.enemies;
    if (en.alive[this.idx] === 0) return 0;
    return Math.max(0, en.hp[this.idx] / en.maxHp[this.idx]);
  }

  spawn(typeId: string, minute: number, ctx: WeaponContext, px: number, pz: number): void {
    const def = BOSS_DEFS[typeId];
    if (!def) return;
    const en = ctx.enemies;
    const hp = def.hp * (1 + 0.08 * minute);
    // 화면 위쪽 밖에서 등장, 스케일 2.2. 시트는 보스별(sgrade/apriority).
    const i = en.spawn(px, pz - 16, hp, def.speed, def.radius, def.contact, 40, 2.2, def.sheet, def.charIndex * SGRADE_BLOCK, 0);
    if (i < 0) return;
    en.boss[i] = 1;
    en.kbResist[i] = 0.9; // 보스: 넉백 90% 저항(밀리지 않는 위압감)
    en.controlled[i] = 1;
    en.tr[i] = def.tr;
    en.tg[i] = def.tg;
    en.tb[i] = def.tb;
    en.labels[i] = `${def.name} ${def.hanja}`;
    en.markSpecial(i);
    this.idx = i;
    this.typeId = typeId;
    this.def = def;
    this.active = true;
    this.atk1 = 2.0;
    // 여포의 첫 번개 창은 돌진 전에 보여 회피 방향을 읽을 시간을 준다.
    this.atk2 = def.pattern === 'lvbu' ? 1.15 : 3.5;
    this.atk3 = 6.0;
    this.dashState = 0;
    this.boltT = -1;
    this.groggyT = 0;
    this.groggyCd = 4.0; // 첫 그로기까지 최소 간격
    ctx.effects.spawnRing(px, pz, 24, 2.4, 1.2, 0.6, 0.9);
    // 쇼케이스: 보스 등장 시 light-field 우선 광원 백라이트(테마색) — 등장 위압감을 3D 조명으로.
    // 등장 순간에만 짧게 스미는 테마색 백라이트(일반 광원 → 전투광에 밀려 누적 안 됨).
    // 강도·반경을 절제해 보스 스프라이트를 하얗게 태우지 않는다.
    ctx.effects.spawnLight?.(px, pz - 16, def.tr * 0.45, def.tg * 0.45, def.tb * 0.45, 8, 0.55);
    this.onWarn(def.name, def.hanja);
  }

  update(dt: number, ctx: WeaponContext, enemyProj: EnemyProjectilePool, px: number, pz: number): void {
    if (!this.active) return;
    const en = ctx.enemies;
    if (en.alive[this.idx] === 0) {
      this.active = false;
      this.idx = -1;
      return;
    }
    const i = this.idx;
    const def = this.def!;
    this.groggyCd -= dt;

    // 그로기(틈): 시그니처 패턴 종료 후 숨 고르기 — 이동/공격 정지 + 슬럼프 틴트, 근접 처단 창.
    if (this.groggyT > 0) {
      this.groggyT -= dt;
      en.groggy[i] = 1;
      en.tr[i] = 0.55; en.tg[i] = 0.78; en.tb[i] = 1.28; // 회청 슬럼프
      if (this.groggyT <= 0) {
        en.groggy[i] = 0;
        en.tr[i] = def.tr; en.tg[i] = def.tg; en.tb[i] = def.tb; // 틴트 복원
      }
      return; // 그로기 중엔 이동/패턴 정지
    }

    let dx = px - en.x[i];
    let dz = pz - en.z[i];
    const dist = Math.hypot(dx, dz) || 1;
    dx /= dist;
    dz /= dist;

    // 이동: 돌진 중이 아니면 접근(원거리 패턴형은 거리 유지)
    if (this.dashState === 2) {
      en.x[i] += this.dashDx * 18 * dt;
      en.z[i] += this.dashDz * 18 * dt;
    } else if (this.dashState === 1) {
      // 예열: 정지 + 플래시
      en.flash[i] = 0.6;
    } else {
      // 원거리형(fan)은 거리 유지, 근접형은 접근.
      const approach = def.pattern === 'fan' ? (dist > 9 ? 1 : -0.2) : 1;
      en.x[i] += dx * def.speed * approach * dt;
      en.z[i] += dz * def.speed * approach * dt;
    }

    this.atk1 -= dt;
    this.atk2 -= dt;
    this.atk3 -= dt;

    switch (def.pattern) {
      case 'fan': this.updateFan(ctx, enemyProj, i, dx, dz); break;
      case 'firezone': this.updateFirezone(ctx, enemyProj, i, px, pz, dx, dz); break;
      case 'dash': this.updateDash(dt, ctx, enemyProj, i, dx, dz); break;
      case 'rush': this.updateRush(dt, ctx, i, dx, dz); break;
      case 'delaybolt': this.updateDelaybolt(dt, ctx, enemyProj, i, px, pz); break;
      case 'lvbu': this.updateLvbu(dt, ctx, enemyProj, i, px, pz, dx, dz); break;
    }
  }

  // 시그니처 패턴 종료 → 그로기 진입(재발동 쿨 중이면 무시). 근접 처단 창을 연다.
  private tryGroggy(ctx: WeaponContext, i: number): void {
    if (this.groggyCd > 0 || this.groggyT > 0) return;
    const en = ctx.enemies;
    const lowHp = en.hp[i] / en.maxHp[i] < 0.25;
    this.groggyT = lowHp ? 1.2 : 1.8;
    this.groggyCd = this.groggyT + 5.0; // 지속 + 재발동 간격
    en.groggy[i] = 1;
    en.hitPunch[i] = 1; // 스쿼시(스케일 팝)
    ctx.effects.spawnCrest(en.x[i], en.z[i], '隙', 0.6, 0.85, 1.4, this.groggyT);
    ctx.particles.dust(en.x[i], en.z[i]);
  }

  // fan: 투사체 부채꼴 + 유도 독탄 (원소/고순/육손). 거리 유지형.
  private updateFan(ctx: WeaponContext, enemyProj: EnemyProjectilePool, i: number, dx: number, dz: number): void {
    const en = ctx.enemies;
    if (this.atk1 <= 0) {
      this.atk1 = 2.4;
      const base = Math.atan2(dz, dx);
      for (let k = -3; k <= 3; k++) {
        const a = base + k * 0.16;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 10, 12, false, EK_ARROW);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 3, 1.4, 1.2, 2.0, 0.4);
      // 부채꼴 사격 콘 텔레그래프(사격 호 = 화살 확산 범위).
      ctx.effects.spawnTelegraph(TG_CONE, en.x[i], en.z[i], Math.atan2(dz, dx), 22, 22, 0.62, 0.5);
      this.tryGroggy(ctx, i); // 부채꼴 사격 후 틈
    }
    if (this.atk2 <= 0) {
      this.atk2 = 5.2;
      const base = Math.atan2(dz, dx);
      for (let k = -1; k <= 1; k++) {
        const a = base + k * 0.32;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 5.4, 16, true, EK_POISON);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 4.2, 0.7, 2.1, 1.2, 0.55);
    }
  }

  // firezone: 화염 장판 소환 + 중포/화염탄 (동탁/주유/여몽).
  private updateFirezone(
    ctx: WeaponContext,
    enemyProj: EnemyProjectilePool,
    i: number,
    px: number,
    pz: number,
    dx: number,
    dz: number,
  ): void {
    const en = ctx.enemies;
    if (this.atk1 <= 0) {
      this.atk1 = 3.2;
      // 플레이어 주변에 장판 3~4개
      for (let k = 0; k < 4; k++) {
        const a = ctx.rng.next() * Math.PI * 2;
        const r = ctx.rng.range(0, 5);
        const zx = px + Math.cos(a) * r;
        const zz = pz + Math.sin(a) * r;
        ctx.effects.spawnTelegraph(TG_CIRCLE, zx, zz, 0, 6, 6, 0, 0.6); // 장판 예고 원(장판 반경과 일치)
        ctx.zones.spawn(zx, zz, 3.0, 3.2, 16, 2.6, 0.7, 0.2);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 4, 2.4, 1.0, 0.4, 0.5);
      this.tryGroggy(ctx, i); // 장판 소환 후 틈
    }
    if (this.atk2 <= 0) {
      this.atk2 = 4.6;
      const base = Math.atan2(dz, dx);
      enemyProj.spawn(en.x[i], en.z[i], dx, dz, 7.2, 24, false, EK_HEAVY);
      for (const offset of [-0.32, 0.32]) {
        const a = base + offset;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 8.5, 17, false, EK_FIREBALL);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 4.8, 2.6, 0.75, 0.2, 0.55);
    }
  }

  // dash: 강화 돌진 + 참격파 (하후돈/전위). 쇼케이스 — 돌진 경로 지면 균열 데칼 + 먼지 웨이브.
  private updateDash(dt: number, ctx: WeaponContext, enemyProj: EnemyProjectilePool, i: number, dx: number, dz: number): void {
    const en = ctx.enemies;
    if (this.dashState === 1) {
      this.dashT -= dt;
      if (this.dashT <= 0) {
        this.dashState = 2;
        this.dashT = 0.5;
        this.dashDx = dx;
        this.dashDz = dz;
        en.damage[i] = 46; // 강화 돌진 고 대미지
        ctx.effects.spawnThrust(en.x[i], en.z[i], dx, dz, 12, 3.2, 2.2, 0.7, 0.6);
        ctx.effects.spawnDecal?.(en.x[i], en.z[i], 4, 2.4, 1.0, 0.4); // 균열 데칼
      }
    } else if (this.dashState === 2) {
      this.dashT -= dt;
      ctx.particles.dust(en.x[i], en.z[i]); // 먼지 웨이브
      if (Math.random() < 0.4) ctx.effects.spawnDecal?.(en.x[i], en.z[i], 2.6, 2.2, 0.9, 0.35);
      if (this.dashT <= 0) {
        this.dashState = 0;
        en.damage[i] = this.def!.contact;
        this.tryGroggy(ctx, i); // 돌진 종료 후 틈
      }
    }
    if (this.atk1 <= 0 && this.dashState === 0) {
      this.atk1 = 3.0;
      this.dashState = 1;
      this.dashT = 0.55;
      // 돌진 경로 사각 텔레그래프 — 윈드업 동안 채워지고 종료 시 돌진(범위 밖 안전).
      ctx.effects.spawnTelegraph(TG_RECT, en.x[i] + dx * 5.5, en.z[i] + dz * 5.5, Math.atan2(dz, dx), 11, 4.2, 0, 0.55);
    }
    if (this.atk2 <= 0) {
      this.atk2 = 3.4;
      const base = Math.atan2(dz, dx);
      for (let k = -1; k <= 1; k++) {
        const a = base + k * 0.22;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 11, 14, false, EK_HEAVY);
      }
    }
  }

  // rush: 쾌속 근접 연속 돌진 (손책). 쇼케이스 — 돌진 방향 청록 스피드 리본. 원거리 없음.
  private updateRush(dt: number, ctx: WeaponContext, i: number, dx: number, dz: number): void {
    const en = ctx.enemies;
    if (this.dashState === 2) {
      this.dashT -= dt;
      if (this.dashT <= 0) {
        this.dashState = 0;
        en.damage[i] = this.def!.contact;
        this.tryGroggy(ctx, i); // 돌진 종료 후 틈
      }
    }
    if (this.atk1 <= 0 && this.dashState === 0) {
      this.atk1 = 1.6; // 잦은 짧은 돌진
      this.dashState = 2;
      this.dashT = 0.3;
      this.dashDx = dx;
      this.dashDz = dz;
      en.damage[i] = 30;
      // 쾌속 돌진 경로 사각 텔레그래프(짧게).
      ctx.effects.spawnTelegraph(TG_RECT, en.x[i] + dx * 4, en.z[i] + dz * 4, Math.atan2(dz, dx), 8, 3.4, 0, 0.3);
      // 돌진 시작점에서 진행 방향으로 단일 리본 스트릭(재사용 슬롯 → 스택/블로우아웃 없음).
      ctx.effects.spawnThrust(en.x[i], en.z[i], dx, dz, 7, 2.4, 0.5, 1.25, 2.2, 0.34, false);
    }
  }

  // delaybolt: 지연 낙뢰 (사마의/하후연). 쇼케이스 — 예고 지면 데칼 → 0.7s 뒤 볼류메트릭 광기둥 강하.
  private updateDelaybolt(dt: number, ctx: WeaponContext, enemyProj: EnemyProjectilePool, i: number, px: number, pz: number): void {
    const en = ctx.enemies;
    if (this.atk1 <= 0 && this.boltT < 0) {
      this.atk1 = 3.6;
      for (let k = 0; k < 3; k++) {
        const a = ctx.rng.next() * Math.PI * 2;
        const r = ctx.rng.range(0, 6);
        this.boltX[k] = px + Math.cos(a) * r;
        this.boltZ[k] = pz + Math.sin(a) * r;
        // 낙뢰 착지 원형 텔레그래프(0.7s 채움 → 강하). 표시 원 = 실제 마탄 방사 원점.
        ctx.effects.spawnTelegraph(TG_CIRCLE, this.boltX[k], this.boltZ[k], 0, 6, 6, 0, 0.7);
      }
      this.boltT = 0.7;
    }
    if (this.boltT >= 0) {
      this.boltT -= dt;
      if (this.boltT <= 0) {
        this.boltT = -1;
        for (let k = 0; k < 3; k++) {
          ctx.effects.spawnLightning(this.boltX[k], this.boltZ[k], 0.7, 1.2, 2.6, 9); // 볼류메트릭 광기둥
          // 착지 방사 마탄(플레이어 피격 경로) — 예고 지점을 벗어나면 회피.
          for (let m = 0; m < 6; m++) {
            const a = (m / 6) * Math.PI * 2;
            enemyProj.spawn(this.boltX[k], this.boltZ[k], Math.cos(a), Math.sin(a), 5, 16, false, EK_LIGHTNING);
          }
        }
        this.tryGroggy(ctx, i); // 낙뢰 강하 후 틈
      }
    }
  }

  // 여포: 돌진 + 참격파 + 졸개 소환
  private updateLvbu(dt: number, ctx: WeaponContext, enemyProj: EnemyProjectilePool, i: number, px: number, pz: number, dx: number, dz: number): void {
    const en = ctx.enemies;
    // 돌진 시퀀스
    if (this.dashState === 1) {
      this.dashT -= dt;
      if (this.dashT <= 0) {
        this.dashState = 2;
        this.dashT = 0.45;
        this.dashDx = dx;
        this.dashDz = dz;
        en.damage[i] = 40; // 돌진 중 고 대미지
        ctx.effects.spawnThrust(en.x[i], en.z[i], dx, dz, 10, 3, 2.2, 0.8, 0.7);
      }
    } else if (this.dashState === 2) {
      this.dashT -= dt;
      ctx.particles.dust(en.x[i], en.z[i]);
      if (this.dashT <= 0) {
        this.dashState = 0;
        en.damage[i] = this.def!.contact;
        this.tryGroggy(ctx, i); // 돌진 종료 후 틈
      }
    }
    if (this.atk1 <= 0 && this.dashState === 0) {
      this.atk1 = 4.5;
      this.dashState = 1;
      this.dashT = 0.6;
      ctx.effects.spawnTelegraph(TG_RECT, en.x[i] + dx * 5, en.z[i] + dz * 5, Math.atan2(dz, dx), 10, 4.2, 0, 0.6); // 돌진 경로
    }
    // 참격파 (전방 부채꼴 마탄)
    if (this.atk2 <= 0) {
      this.atk2 = 3.0;
      const base = Math.atan2(dz, dx);
      ctx.effects.spawnTelegraph(TG_CONE, en.x[i], en.z[i], base, 20, 20, 0.5, 0.4); // 참격 호 예고
      for (let k = -2; k <= 2; k++) {
        const a = base + k * 0.2;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 13, 14, false, EK_LIGHTNING);
      }
      this.tryGroggy(ctx, i); // 참격 후에도 틈 — 여포 그로기 창 빈도 확보(패턴 저항 완화)
    }
    // 졸개 소환 (#40: 5/7s→3/11s — 누적 스웜이 여포 딜 유입을 막고 플레이어를 과부하시킴)
    if (this.atk3 <= 0) {
      this.atk3 = 11.0;
      const t = ENEMY_TYPES.general_blade;
      const bpx = this.atlas.soldierBlockPx(t.charIndex);
      for (let k = 0; k < 3; k++) {
        const a = ctx.rng.next() * Math.PI * 2;
        const r = 3 + ctx.rng.range(0, 3);
        en.spawn(px + Math.cos(a) * r, pz + Math.sin(a) * r, t.hp * 2, t.speed, t.radius, t.damage, t.gemValue, t.worldScale, 0, bpx, 0);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 5, 2.0, 0.8, 1.4, 0.5);
    }
  }
}
