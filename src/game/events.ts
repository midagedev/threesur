import type { EnemyPool } from './enemies';
import { SHEET_SOLDIERS } from './enemies';
import type { ZonePool } from './zones';
import type { EffectsSystem } from '../gfx/effects';
import type { ParticleSystem } from '../gfx/particles';
import type { Atlas } from '../gfx/atlas';
import type { Rng } from '../core/rng';
import { ENEMY_TYPES } from '../data/enemyTypes';

// 전장 이벤트 (DESIGN §10). run이 매 프레임 update를 호출하며 필요한 시스템을 주입한다.
// 기존 파일을 건드리지 않도록 모든 외부 상호작용을 EventDeps 콜백/참조로 받는다.
export interface EventDeps {
  enemies: EnemyPool;
  zones: ZonePool;
  effects: EffectsSystem;
  particles: ParticleSystem;
  atlas: Atlas;
  rng: Rng;
  banner: (text: string, color: string) => void; // 화면 상단 경고 배너
  playerX: () => number;
  playerZ: () => number;
  hitPlayer: (dmg: number) => void; // 유성우 등 플레이어 피해
  // TODO(통합): 보급 마차 처치 보상(골드+보물상자). run이 처리.
  onSupplyReward?: (x: number, z: number) => void;
}

const METEOR_CAP = 40;

// 랜덤 전장 사건 스케줄러 + 실행.
export class BattlefieldEvents {
  private readonly d: EventDeps;

  // 스케줄 상태
  private cartTimes: number[] = [];
  private cartFired = 0;
  private rush4 = false;
  private rush7 = false;
  private meteorCooldown = 0;

  // 진행 중 러시
  private rushRemaining = 0;
  private rushAcc = 0;
  private rushDirX = 0;
  private rushDirZ = 0;

  // 진행 중 유성우 + 낙하 예정 임팩트 풀(프레임당 할당 0)
  private showerRemaining = 0;
  private showerAcc = 0;
  private readonly mx = new Float32Array(METEOR_CAP);
  private readonly mz = new Float32Array(METEOR_CAP);
  private readonly mt = new Float32Array(METEOR_CAP); // 착탄까지 남은 시간
  private readonly mActive = new Uint8Array(METEOR_CAP);

  constructor(deps: EventDeps) {
    this.d = deps;
    this.reset();
  }

  reset(): void {
    // 보급 마차: 2~8분 사이 랜덤 2회
    const r = this.d.rng;
    this.cartTimes = [r.range(120, 300), r.range(300, 480)].sort((a, b) => a - b);
    this.cartFired = 0;
    this.rush4 = false;
    this.rush7 = false;
    this.meteorCooldown = 0;
    this.rushRemaining = 0;
    this.showerRemaining = 0;
    this.mActive.fill(0);
  }

  update(dt: number, gameTime: number): void {
    // === 트리거 ===
    if (this.cartFired < this.cartTimes.length && gameTime >= this.cartTimes[this.cartFired]) {
      this.cartFired++;
      this.spawnSupplyCart();
    }
    if (!this.rush4 && gameTime >= 240) {
      this.rush4 = true;
      this.startRush();
    }
    if (!this.rush7 && gameTime >= 420) {
      this.rush7 = true;
      this.startRush();
    }
    if (gameTime >= 360) {
      this.meteorCooldown -= dt;
      if (this.meteorCooldown <= 0 && this.showerRemaining <= 0) {
        this.meteorCooldown = this.d.rng.range(35, 55);
        this.startMeteorShower();
      }
    }

    // === 진행 중 이벤트 ===
    if (this.rushRemaining > 0) this.tickRush(dt, gameTime);
    if (this.showerRemaining > 0) this.tickShower(dt);
    this.tickMeteorImpacts(dt);
  }

  // 황건 대군 러시: 30초간 한 방향에서 대군이 일직선으로 밀려온다.
  private startRush(): void {
    const a = this.d.rng.next() * Math.PI * 2;
    this.rushDirX = Math.cos(a);
    this.rushDirZ = Math.sin(a);
    this.rushRemaining = 30;
    this.rushAcc = 0;
    this.d.banner('황건 대군 黃巾大軍', '#e8c667');
  }

  private tickRush(dt: number, gameTime: number): void {
    this.rushRemaining -= dt;
    this.rushAcc += dt * 14; // 초당 스폰 수
    const px = this.d.playerX();
    const pz = this.d.playerZ();
    const minute = gameTime / 60;
    const hpScale = 1 + 0.13 * minute + 0.011 * minute * minute;
    // 진행 방향의 반대편(뒤)에서 폭 넓게 스폰 → 플레이어 쪽으로 밀려옴
    while (this.rushAcc >= 1) {
      this.rushAcc -= 1;
      const t = this.d.rng.range(-16, 16); // 진행축에 수직 폭
      const perpX = -this.rushDirZ;
      const perpZ = this.rushDirX;
      const sx = px - this.rushDirX * 26 + perpX * t;
      const sz = pz - this.rushDirZ * 26 + perpZ * t;
      const type = this.d.rng.next() < 0.7 ? ENEMY_TYPES.worker : ENEMY_TYPES.runner;
      this.d.enemies.spawn(
        sx, sz, type.hp * hpScale, type.speed, type.radius, type.damage, type.gemValue,
        type.worldScale, SHEET_SOLDIERS, this.d.atlas.soldierBlockPx(type.charIndex), 0,
      );
    }
  }

  // 유성우: 15초간 화염 운석 낙하(경고 → 착탄 폭발).
  private startMeteorShower(): void {
    this.showerRemaining = 15;
    this.showerAcc = 0;
    this.d.banner('유성우 流星雨', '#ff9a3c');
  }

  private tickShower(dt: number): void {
    this.showerRemaining -= dt;
    this.showerAcc += dt * 3; // 초당 낙하 수
    while (this.showerAcc >= 1) {
      this.showerAcc -= 1;
      this.queueMeteor();
    }
  }

  private queueMeteor(): void {
    let slot = -1;
    for (let i = 0; i < METEOR_CAP; i++) {
      if (this.mActive[i] === 0) {
        slot = i;
        break;
      }
    }
    if (slot < 0) return;
    const px = this.d.playerX();
    const pz = this.d.playerZ();
    const a = this.d.rng.next() * Math.PI * 2;
    const r = this.d.rng.range(0, 15);
    const x = px + Math.cos(a) * r;
    const z = pz + Math.sin(a) * r;
    this.mx[slot] = x;
    this.mz[slot] = z;
    this.mt[slot] = 1.0; // 경고 후 1초 뒤 착탄
    this.mActive[slot] = 1;
    // 경고 데칼(희미한 링)
    this.d.effects.spawnRing(x, z, 3.2, 2.0, 0.7, 0.2, 1.0);
  }

  private tickMeteorImpacts(dt: number): void {
    for (let i = 0; i < METEOR_CAP; i++) {
      if (this.mActive[i] === 0) continue;
      this.mt[i] -= dt;
      if (this.mt[i] > 0) continue;
      this.mActive[i] = 0;
      const x = this.mx[i];
      const z = this.mz[i];
      // 착탄: 큰 폭발 링 + 화염 장판(적 피해) + 파티클, 플레이어 근접 시 피해
      this.d.effects.spawnRing(x, z, 4.5, 2.6, 1.2, 0.4, 0.5);
      this.d.zones.spawn(x, z, 3.5, 0.5, 120, 2.6, 0.8, 0.2);
      this.d.particles.burst(x, z, 2.6, 1.2, 0.4, 24, 7);
      const dx = this.d.playerX() - x;
      const dz = this.d.playerZ() - z;
      if (dx * dx + dz * dz < 3.5 * 3.5) this.d.hitPlayer(28);
    }
  }

  // 보급 마차: 발광 마차가 화면을 가로질러 도주. 처치 시 골드+보물상자, 놓치면 사라짐.
  // TODO(통합): EnemyPool에 'flee'(플레이어 반대로 이동) 플래그가 필요.
  //   enemies.ts에 flee Uint8 + update 분기 추가 → 여기서 spawn 후 flee=1, 골드 배수/보물 태그.
  //   처치 감지는 run.handleKill에서 태그 확인 후 onSupplyReward 호출.
  private spawnSupplyCart(): void {
    this.d.banner('보급 마차 補給馬車', '#ffe14d');
    // 착수 시 구현 (flee AI + 처치 보상 배선).
  }
}
