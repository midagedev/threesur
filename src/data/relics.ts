import type { PlayerStats } from '../game/player';

// 저주받은 유물 (DESIGN §10). risk-reward 레벨업 카드로 등장(보라색 테두리, 10% 확률, 최대 2개).
// 패시브와 동일하게 stats에 적용하되 강한 이득 + 뚜렷한 대가를 함께 준다.
// 카드/보유 제한/확률 로직은 run·levelup 통합 시 연결(현재는 데이터 + apply만 제공).
export interface RelicDef {
  id: string;
  name: string;
  hanja: string;
  desc: string;
  apply: (s: PlayerStats) => void;
}

export const RELIC_DEFS: RelicDef[] = [
  {
    id: 'seven_star',
    name: '칠성검',
    hanja: '七星劍',
    desc: '공격력 +40%, 최대 체력 -30%',
    apply: (s) => {
      s.damageMul *= 1.4;
      s.maxHpMul *= 0.7;
    },
  },
  {
    id: 'bronze_decree',
    name: '동작대 금령',
    hanja: '銅雀臺金令',
    desc: '골드 획득 +100%, 이동속도 -15%',
    apply: (s) => {
      s.goldMul *= 2.0;
      s.speedMul *= 0.85;
    },
  },
  {
    id: 'ox_fan',
    name: '우선',
    hanja: '牛扇',
    desc: '쿨다운 -25%, 픽업 반경 -50%',
    apply: (s) => {
      s.cooldownMul *= 0.75;
      s.pickupMul *= 0.5;
    },
  },
  {
    id: 'poison_pill',
    name: '오석산',
    hanja: '五石散',
    desc: '공격력 +30%, 받는 피해 +25%',
    apply: (s) => {
      s.damageMul *= 1.3;
      s.dmgTakenMul *= 1.25;
    },
  },
  {
    id: 'blood_banner',
    name: '피의 군기',
    hanja: '血軍旗',
    desc: '투사체 +2, 체력 재생 정지, 최대 체력 -15%',
    apply: (s) => {
      s.projectileBonus += 2;
      s.hpRegen = 0;
      s.maxHpMul *= 0.85;
    },
  },
  {
    id: 'greedy_seal',
    name: '탐랑의 인',
    hanja: '貪狼印',
    desc: '경험치 +50%, 광역 -25%',
    apply: (s) => {
      s.xpMul *= 1.5;
      s.areaMul *= 0.75;
    },
  },
];

export const RELIC_BY_ID: Record<string, RelicDef> = {};
for (const r of RELIC_DEFS) RELIC_BY_ID[r.id] = r;

// 아직 보유하지 않은 유물 중 하나를 무작위로 반환(없으면 null). (rng: 0..1 반환 함수)
export function rollRelic(rand: () => number, ownedIds: readonly string[]): RelicDef | null {
  const pool = RELIC_DEFS.filter((r) => !ownedIds.includes(r.id));
  if (pool.length === 0) return null;
  return pool[Math.floor(rand() * pool.length)];
}
