// 메타 상점 영구 강화 정의 (골드로 구매, localStorage 저장).
// 비용 공식: 다음 레벨 n(0-base) 구매에 200×2^n 골드.
// 효과는 런 시작 시 player.stats / run 세팅에 적용 (data/upgrades → game/run).

export interface UpgradeDef {
  id: string;
  name: string; // 한글
  hanja: string;
  maxLevel: number;
  // 레벨 L 효과 설명(UI). L=0이면 미보유 상태 설명도 포함.
  desc: (level: number) => string;
}

export const UPGRADE_DEFS: UpgradeDef[] = [
  {
    id: 'attack',
    name: '무예 단련',
    hanja: '武藝鍛鍊',
    maxLevel: 5,
    desc: (l) => `공격력 +${l * 8}%`,
  },
  {
    id: 'health',
    name: '철갑 강화',
    hanja: '鐵甲强化',
    maxLevel: 5,
    desc: (l) => `최대 체력 +${l * 10}%`,
  },
  {
    id: 'speed',
    name: '준마 훈련',
    hanja: '駿馬訓鍊',
    maxLevel: 5,
    desc: (l) => `이동속도 +${l * 5}%`,
  },
  {
    id: 'pickup',
    name: '집혼 향낭',
    hanja: '集魂香囊',
    maxLevel: 5,
    desc: (l) => `픽업 반경 +${l * 12}%`,
  },
  {
    id: 'cooldown',
    name: '전술 통달',
    hanja: '戰術通達',
    maxLevel: 5,
    desc: (l) => `쿨다운 -${(100 * (1 - Math.pow(0.96, l))).toFixed(0)}%`,
  },
  {
    id: 'startLevel',
    name: '숙련 출진',
    hanja: '熟練出陣',
    maxLevel: 5,
    desc: (l) => (l > 0 ? `${l}레벨 상태로 시작` : '기본 1레벨로 시작'),
  },
  {
    id: 'revive',
    name: '기사회생',
    hanja: '起死回生',
    maxLevel: 1,
    desc: (l) => (l > 0 ? '런당 1회 부활 (HP 50%·무적 2초·충격파)' : '사망 시 부활 없음'),
  },
];

export const UPGRADE_BY_ID: Record<string, UpgradeDef> = {};
for (const u of UPGRADE_DEFS) UPGRADE_BY_ID[u.id] = u;

// 다음 레벨 구매 비용. 최대치면 -1.
export function upgradeCost(def: UpgradeDef, currentLevel: number): number {
  if (currentLevel >= def.maxLevel) return -1;
  return 200 * Math.pow(2, currentLevel);
}

// 여포 해금 비용.
export const LVBU_UNLOCK_COST = 5000;

// 메타 강화 레벨 → 런에 적용할 배수/세팅.
export interface MetaMods {
  damageMul: number;
  maxHpMul: number;
  speedMul: number;
  pickupMul: number;
  cooldownMul: number;
  startLevel: number; // 추가 시작 레벨 수
  revive: boolean;
}

export function computeMeta(levels: Record<string, number>): MetaMods {
  const lv = (id: string) => levels[id] ?? 0;
  return {
    damageMul: 1 + 0.08 * lv('attack'),
    maxHpMul: 1 + 0.1 * lv('health'),
    speedMul: 1 + 0.05 * lv('speed'),
    pickupMul: 1 + 0.12 * lv('pickup'),
    cooldownMul: Math.pow(0.96, lv('cooldown')),
    startLevel: lv('startLevel'),
    revive: lv('revive') > 0,
  };
}
