import { WEAPON_DEFS } from './weapons';

// 업적/칭호 정의 (DESIGN §10). RunResult + 누적 저장값으로 순수 판정.
// save.ts 스키마에 직접 의존하지 않도록 구조적 컨텍스트만 받는다(연결은 Phase 3/리드).
export interface AchievementCtx {
  victory: boolean;
  kills: number;
  maxCombo: number;
  time: number; // 생존 초
  level: number;
  bosses: string[]; // 이번 런에서 처치한 보스 id
  weapons: { id: string; level: number }[];
  noHitTime?: number; // 최대 무피격 지속(초) — 있으면 사용
  totalKills?: number; // 누적 킬(저장값)
  totalWins?: number; // 누적 승리 수
  endless?: boolean; // 무한 모드 여부
}

export interface Achievement {
  id: string;
  name: string; // 칭호 (한글)
  hanja: string;
  desc: string;
  priority: number; // 공유 카드 대표 칭호 선정 우선순위(클수록 우선)
  check: (c: AchievementCtx) => boolean;
}

function evolutionCount(weapons: { id: string; level: number }[]): number {
  let n = 0;
  for (const w of weapons) if (WEAPON_DEFS[w.id]?.evolution) n++;
  return n;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_win',
    name: '천하의 주인',
    hanja: '天下之主',
    desc: '첫 승리 (10:00 생존)',
    priority: 60,
    check: (c) => c.victory,
  },
  {
    id: 'slay_lvbu',
    name: '비장군 참살',
    hanja: '飛將軍斬殺',
    desc: '최종보스 여포 처치',
    priority: 80,
    check: (c) => c.bosses.includes('lvbu'),
  },
  {
    id: 'thousand_cut',
    name: '천인참',
    hanja: '千人斬',
    desc: '한 런에서 1,000명 처치',
    priority: 55,
    check: (c) => c.kills >= 1000,
  },
  {
    id: 'five_hundred_cut',
    name: '오백인참',
    hanja: '五百人斬',
    desc: '한 런에서 500명 처치',
    priority: 35,
    check: (c) => c.kills >= 500,
  },
  {
    id: 'invincible',
    name: '금강불괴',
    hanja: '金剛不壞',
    desc: '3분간 무피격 유지',
    priority: 65,
    check: (c) => (c.noHitTime ?? 0) >= 180,
  },
  {
    id: 'master_smith',
    name: '전설의 대장장이',
    hanja: '傳說鍛冶',
    desc: '한 런에서 진화 무기 3종 이상',
    priority: 70,
    check: (c) => evolutionCount(c.weapons) >= 3,
  },
  {
    id: 'combo_master',
    name: '연격의 화신',
    hanja: '連擊化身',
    desc: '최대 콤보 500 돌파',
    priority: 50,
    check: (c) => c.maxCombo >= 500,
  },
  {
    id: 'veteran',
    name: '백전노장',
    hanja: '百戰老將',
    desc: '누적 10,000명 처치',
    priority: 45,
    check: (c) => (c.totalKills ?? 0) >= 10000,
  },
  {
    id: 'all_bosses',
    name: '군웅할거의 종결자',
    hanja: '群雄割據終結',
    desc: '한 런에서 세 보스 모두 처치',
    priority: 75,
    check: (c) => c.bosses.includes('yuanshao') && c.bosses.includes('dongzhuo') && c.bosses.includes('lvbu'),
  },
  {
    id: 'high_level',
    name: '병법의 대가',
    hanja: '兵法大家',
    desc: '레벨 40 도달',
    priority: 40,
    check: (c) => c.level >= 40,
  },
  {
    id: 'endless_walker',
    name: '무명의 사신',
    hanja: '無名死神',
    desc: '무한 모드에서 15분 생존',
    priority: 85,
    check: (c) => !!c.endless && c.time >= 900,
  },
  {
    id: 'survivor',
    name: '역전의 용사',
    hanja: '歷戰勇士',
    desc: '5분 이상 생존',
    priority: 20,
    check: (c) => c.time >= 300,
  },
];

export const ACHIEVEMENT_BY_ID: Record<string, Achievement> = {};
for (const a of ACHIEVEMENTS) ACHIEVEMENT_BY_ID[a.id] = a;

// 이번 런에서 조건을 만족한 업적 id 목록.
export function evaluateAchievements(ctx: AchievementCtx): string[] {
  const out: string[] = [];
  for (const a of ACHIEVEMENTS) if (a.check(ctx)) out.push(a.id);
  return out;
}

// 획득 업적 중 공유 카드에 표시할 대표 칭호(우선순위 최고). 없으면 '무명'.
export function bestTitle(earnedIds: string[]): { name: string; hanja: string } {
  let best: Achievement | null = null;
  for (const id of earnedIds) {
    const a = ACHIEVEMENT_BY_ID[id];
    if (a && (!best || a.priority > best.priority)) best = a;
  }
  return best ? { name: best.name, hanja: best.hanja } : { name: '무명의 장수', hanja: '無名將' };
}
