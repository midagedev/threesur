// 영구 저장 (localStorage). 골드·메타 강화·해금·최고기록·보스 도감·음소거.
// 버전 필드 + 마이그레이션 가드로 스키마 변경에 안전.

const KEY = 'threesur-save-v1';
const VERSION = 1;

export interface BestRecord {
  time: number; // 최고 생존시간(초)
  kills: number; // 최다 처치
  level: number; // 최고 레벨
  combo: number; // 최대 콤보
}

export interface SaveData {
  version: number;
  gold: number;
  upgrades: Record<string, number>; // 메타 강화 id → 레벨
  lvbuUnlocked: boolean;
  muted: boolean;
  best: BestRecord;
  bosses: string[]; // 처치한 보스 type id 목록 (도감)
  achievements: string[]; // 달성한 업적 id 목록 (누적)
  totalKills: number; // 누적 처치 수 (업적 판정용)
  totalWins: number; // 누적 승리 수
}

function fresh(): SaveData {
  return {
    version: VERSION,
    gold: 0,
    upgrades: {},
    lvbuUnlocked: false,
    muted: false,
    best: { time: 0, kills: 0, level: 1, combo: 0 },
    bosses: [],
    achievements: [],
    totalKills: 0,
    totalWins: 0,
  };
}

// 로드 + 마이그레이션. 손상/구버전이면 안전 병합(누락 필드 기본값 채움).
export function loadSave(): SaveData {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return fresh();
  }
  if (!raw) return fresh();
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return fresh();
  }
  return migrate(parsed);
}

function migrate(data: unknown): SaveData {
  const base = fresh();
  if (typeof data !== 'object' || data === null) return base;
  const d = data as Partial<SaveData>;
  // 버전이 미래값이면(다운그레이드 등) 안전하게 초기화
  if (typeof d.version === 'number' && d.version > VERSION) return base;
  return {
    version: VERSION,
    gold: numOr(d.gold, 0),
    upgrades: sanitizeUpgrades(d.upgrades),
    lvbuUnlocked: d.lvbuUnlocked === true,
    muted: d.muted === true,
    best: {
      time: numOr(d.best?.time, 0),
      kills: numOr(d.best?.kills, 0),
      level: numOr(d.best?.level, 1),
      combo: numOr(d.best?.combo, 0),
    },
    bosses: Array.isArray(d.bosses) ? d.bosses.filter((x) => typeof x === 'string') : [],
    achievements: Array.isArray(d.achievements) ? d.achievements.filter((x) => typeof x === 'string') : [],
    totalKills: numOr(d.totalKills, 0),
    totalWins: numOr(d.totalWins, 0),
  };
}

function numOr(v: unknown, fallback: number): number {
  return typeof v === 'number' && isFinite(v) ? v : fallback;
}

function sanitizeUpgrades(u: unknown): Record<string, number> {
  const out: Record<string, number> = {};
  if (typeof u === 'object' && u !== null) {
    for (const k in u as Record<string, unknown>) {
      const v = (u as Record<string, unknown>)[k];
      if (typeof v === 'number' && isFinite(v) && v > 0) out[k] = Math.floor(v);
    }
  }
  return out;
}

export function writeSave(data: SaveData): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // 쿼터 초과/프라이빗 모드 등 — 조용히 무시(게임은 정상 진행)
  }
}

// 최고기록 갱신: 각 항목별 최댓값 병합. 변경 여부 반환(신기록 배지용).
export function updateBest(best: BestRecord, run: { time: number; kills: number; level: number; combo: number }): {
  time: boolean;
  kills: boolean;
  level: boolean;
  combo: boolean;
} {
  const res = {
    time: run.time > best.time,
    kills: run.kills > best.kills,
    level: run.level > best.level,
    combo: run.combo > best.combo,
  };
  if (res.time) best.time = run.time;
  if (res.kills) best.kills = run.kills;
  if (res.level) best.level = run.level;
  if (res.combo) best.combo = run.combo;
  return res;
}
