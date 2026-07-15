// 균일 그리드(셀 2m) 스페이셜 해시. 프레임마다 clear→insert*→query.
// query는 재사용 배열에 후보 인덱스를 채워 반환(할당 회피).
const CELL = 2;
const OFF = 4096; // 좌표 인코딩 오프셋 (음수 셀 대응)
const STRIDE = 8192;

function keyOf(cx: number, cz: number): number {
  return (cx + OFF) * STRIDE + (cz + OFF);
}

export class SpatialHash {
  private readonly buckets = new Map<number, number[]>();
  private readonly used: number[] = [];

  clear(): void {
    const used = this.used;
    for (let i = 0; i < used.length; i++) {
      const b = this.buckets.get(used[i]);
      if (b) b.length = 0;
    }
    used.length = 0;
  }

  insert(index: number, x: number, z: number): void {
    const cx = Math.floor(x / CELL);
    const cz = Math.floor(z / CELL);
    const k = keyOf(cx, cz);
    let b = this.buckets.get(k);
    if (b === undefined) {
      b = [];
      this.buckets.set(k, b);
    }
    if (b.length === 0) this.used.push(k);
    b.push(index);
  }

  // (x,z) 중심 반경 r을 덮는 셀들의 후보 인덱스를 out에 채우고 개수 반환.
  query(x: number, z: number, r: number, out: number[]): number {
    const minx = Math.floor((x - r) / CELL);
    const maxx = Math.floor((x + r) / CELL);
    const minz = Math.floor((z - r) / CELL);
    const maxz = Math.floor((z + r) / CELL);
    let n = 0;
    for (let cx = minx; cx <= maxx; cx++) {
      for (let cz = minz; cz <= maxz; cz++) {
        const b = this.buckets.get(keyOf(cx, cz));
        if (b === undefined) continue;
        for (let i = 0; i < b.length; i++) {
          out[n++] = b[i];
        }
      }
    }
    return n;
  }
}

// 오토에임 대상 선택: (px,pz)에서 maxR 이내 최근접 적. 없으면 -1.
// #40 보스 가중치: 사거리 내 보스가 있으면 조준 duty의 일부 구간을 보스에 배분한다.
// 잡몹은 항상 플레이어에 밀착(접촉거리)이라 순수 거리 스코어로는 원거리 유지형 보스가 영영 조준 밖 →
// 투사체가 보스에 닿지 못해 데미지 스펀지가 됨. 전량 락온은 잡몹 과밀 유발(과보정)이므로,
// 발사 시각의 일부(≈42%)만 보스로 향하게 하여 "유효 히트 일부가 보스로" 간다. (enemies.boss는 run이 전달하는 풀에 존재)
let aimFrame = 0;
export function findNearestEnemy(
  enemies: { alive: Uint8Array; x: Float32Array; z: Float32Array; boss?: Uint8Array },
  hash: SpatialHash,
  px: number,
  pz: number,
  maxR: number,
  scratch: number[],
  density = 0, // #47 동시 생존 적 수 — 보스 조준 duty를 밀도 비례로 상향(고밀도에서 보스 스펀지화 완화)
): number {
  const n = hash.query(px, pz, maxR, scratch);
  let best = -1;
  let bestD = maxR * maxR;
  let bossBest = -1;
  let bossBestD = maxR * maxR;
  const bossArr = enemies.boss;
  for (let c = 0; c < n; c++) {
    const j = scratch[c];
    if (enemies.alive[j] === 0) continue;
    const dx = enemies.x[j] - px;
    const dz = enemies.z[j] - pz;
    const d2 = dx * dx + dz * dz;
    if (d2 < bestD) {
      bestD = d2;
      best = j;
    }
    if (bossArr !== undefined && bossArr[j] === 1 && d2 < bossBestD) {
      bossBestD = d2;
      bossBest = j;
    }
  }
  // 보스 조준 duty (프레임 기준 → fps 무관하게 발사 시각의 일정 비율이 보스로 향함).
  // 밀집 전장에선 최근접이 항상 잡몹이라 보스가 조준 밖 → 이 duty로 조준의 일부를 보스에 고정.
  aimFrame++;
  if (bossBest >= 0) {
    const PERIOD = 200;
    // #47 밀도 비례 보스 duty: 저밀도 45%(90/200) → 고밀도(≈150+ 동시) 65%(130/200)까지 상향.
    // 6분+ 과밀 전장에선 비-보스 조준이 잡몹에 희석돼 보스가 스펀지화 → 밀도 높을수록 보스 조준 비중↑.
    const bossWindow = 90 + Math.round(40 * Math.min(1, Math.max(0, density - 60) / 90));
    if (aimFrame % PERIOD < bossWindow) return bossBest;
  }
  return best;
}

// 점 p가 선분 a→b에서 떨어진 거리의 제곱. 부채꼴/캡슐 판정에 재사용.
export function distToSegmentSq(
  px: number,
  pz: number,
  ax: number,
  az: number,
  bx: number,
  bz: number,
): number {
  const dx = bx - ax;
  const dz = bz - az;
  const len2 = dx * dx + dz * dz;
  let t = len2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / len2 : 0;
  if (t < 0) t = 0;
  else if (t > 1) t = 1;
  const cx = ax + dx * t;
  const cz = az + dz * t;
  const ex = px - cx;
  const ez = pz - cz;
  return ex * ex + ez * ez;
}
