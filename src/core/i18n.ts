// i18n (한/영). navigator.language 기반 자동 선택 + 수동 토글(localStorage 지속).
// 방침: 한자(漢字) 표기는 양 언어 공통 테마 요소로 유지 — i18n은 한글/영문 부분만 제공하고,
//   한자는 각 데이터(heroes/weapons…)의 hanja 필드에서 그대로 병기한다.
//   인명(장수/보스)은 병음 로마자, 무기/패시브/유물/업그레이드는 의미 번역.
// 사용: t('start') → 현재 언어 문자열. t('hudKills', { n: 12 }) → 파라미터 치환.
// ⚠ 배선(전 파일에서 리터럴 → t() 교체)은 코드 레인 병합 후 단독 창에서 수행 (task #19).

export type Lang = 'ko' | 'en';

const LS_KEY = 'threesur-lang';
let current: Lang = detectInitial();
const listeners = new Set<(l: Lang) => void>();

function detectInitial(): Lang {
  try {
    const saved = localStorage.getItem(LS_KEY);
    if (saved === 'ko' || saved === 'en') return saved;
  } catch {
    /* ignore */
  }
  return detectLang();
}

// navigator.language 기반 자동 판정. ko* → 'ko', 그 외 → 'en'.
export function detectLang(): Lang {
  const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]) || [];
  for (const l of langs) {
    if (typeof l === 'string' && l.toLowerCase().startsWith('ko')) return 'ko';
  }
  return 'en';
}

export function getLang(): Lang {
  return current;
}

export function setLang(l: Lang): void {
  if (l === current) return;
  current = l;
  try {
    localStorage.setItem(LS_KEY, l);
  } catch {
    /* ignore */
  }
  for (const fn of listeners) fn(l);
}

export function toggleLang(): Lang {
  setLang(current === 'ko' ? 'en' : 'ko');
  return current;
}

// 언어 변경 구독 (UI 재렌더용). 해제 함수 반환.
export function onLangChange(fn: (l: Lang) => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// 문자열 조회. 없으면 ko 폴백 → key 폴백. params로 {name} 치환.
export function t(key: string, params?: Record<string, string | number>): string {
  const table = UI[current] ?? UI.ko;
  let s = table[key] ?? UI.ko[key] ?? key;
  if (params) {
    for (const k in params) s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), String(params[k]));
  }
  return s;
}

// id 기반 이름의 영문 표기(영어일 때만 사용; 한글은 데이터 원본 name 사용). 한자는 별도 병기.
export function nameOf(kind: 'hero' | 'weapon' | 'passive' | 'upgrade', id: string, koName: string): string {
  if (current === 'ko') return koName;
  const m = NAME_EN[kind];
  return m[id] ?? koName;
}

// ===== UI 크롬 문자열 (안정 — 배선 우선 대상) =====
const UI: Record<Lang, Record<string, string>> = {
  ko: {
    // 타이틀
    titleKor: '일 기 당 천',
    titleTag: '삼국 서바이버 · 한 명의 장수로 수천을 베어라',
    start: '출진 出陣',
    shop: '본진 本陣',
    codex: '전공 戰功',
    back: '뒤로 ‹',
    controlsHint: '<b>WASD / 화살표</b> 이동 · <b>Space</b> 무쌍난무 · <b>Esc</b> 일시정지<br>모바일: 좌측 가상 조이스틱 + 우측 무쌍 버튼',
    // 장수 선택
    selectTitle: '장수 선택',
    weaponLabel: '무기',
    unlockAtShop: '본진에서 해금',
    // HUD
    hudKills: '처치 {n}',
    hudLevel: 'Lv {n}',
    hudCombo: '連 킬',
    musouHint: '무쌍 無雙 — Space',
    // 결과
    resultWin: '천하통일',
    resultLose: '전사',
    rsSurvive: '생존',
    rsKills: '처치',
    rsMaxCombo: '최대 콤보',
    rsLevel: '레벨',
    rsHero: '장수',
    rsBossKill: '보스 토벌',
    goldEarned: '획득 골드',
    goldBonus: '(콤보 보너스 +{n})',
    baseBalance: '본진 잔액 ⟡ {n}',
    retry: '다시 출진 再出陣',
    share: '전과 공유 戰果',
    toTitle: '본진으로 本陣',
    newRecord: '신기록',
    achGet: '업적 달성!',
    heroUnlockGet: '새 장수 해금!',
    // 상점/도감
    shopTitle: '본진',
    goldHeld: '보유 골드 ⟡ {n}',
    tabUpgrade: '강화 强化',
    tabCodex: '전공 戰功',
    upgradeBuy: '강화',
    unlockBuy: '해금',
    maxed: 'MAX',
    recSurvive: '최고 생존',
    recKills: '최다 처치',
    recLevel: '최고 레벨',
    recCombo: '최대 콤보',
    bossCodex: '보스 토벌 기록',
    slain: '토벌 완료',
    notSlain: '미토벌',
    achSection: '업적 業績',
    // 레벨업
    levelupTitle: '레벨 업 — 하나를 택하라',
    reroll: '리롤 (50G) · 보유 {n}G',
    levelupHint: '1 · 2 · 3 키로도 선택',
    tagNew: '신규',
    tagUp: '강화',
    tagMax: '최대',
    tagReward: '보상',
    // 일시정지
    pauseTitle: '일시정지',
    resume: '계속 繼續',
    abandon: '포기 抛棄',
    resumeHint: 'Esc 로도 계속',
  },
  en: {
    titleKor: 'ILGIDANGCHEON',
    titleTag: 'Three Kingdoms Survivor · One general, ten thousand foes',
    start: 'Sortie 出陣',
    shop: 'Camp 本陣',
    codex: 'Records 戰功',
    back: 'Back ‹',
    controlsHint: '<b>WASD / Arrows</b> Move · <b>Space</b> Musou · <b>Esc</b> Pause<br>Mobile: left virtual stick + right Musou button',
    selectTitle: 'Choose Your General',
    weaponLabel: 'Weapon',
    unlockAtShop: 'Unlock at Camp',
    hudKills: 'Kills {n}',
    hudLevel: 'Lv {n}',
    hudCombo: 'Combo',
    musouHint: 'Musou 無雙 — Space',
    resultWin: 'Unify the Realm',
    resultLose: 'Fallen in Battle',
    rsSurvive: 'Survived',
    rsKills: 'Kills',
    rsMaxCombo: 'Max Combo',
    rsLevel: 'Level',
    rsHero: 'General',
    rsBossKill: 'Bosses Slain',
    goldEarned: 'Gold Earned',
    goldBonus: '(combo bonus +{n})',
    baseBalance: 'Camp balance ⟡ {n}',
    retry: 'Sortie Again 再出陣',
    share: 'Share 戰果',
    toTitle: 'To Camp 本陣',
    newRecord: 'RECORD',
    achGet: 'Achievement unlocked!',
    heroUnlockGet: 'New general unlocked!',
    shopTitle: 'Camp',
    goldHeld: 'Gold ⟡ {n}',
    tabUpgrade: 'Upgrades 强化',
    tabCodex: 'Records 戰功',
    upgradeBuy: 'Upgrade',
    unlockBuy: 'Unlock',
    maxed: 'MAX',
    recSurvive: 'Best Survival',
    recKills: 'Most Kills',
    recLevel: 'Best Level',
    recCombo: 'Max Combo',
    bossCodex: 'Bosses Slain',
    slain: 'Slain',
    notSlain: 'Not yet',
    achSection: 'Achievements 業績',
    levelupTitle: 'Level Up — Choose One',
    reroll: 'Reroll (50G) · {n}G held',
    levelupHint: 'Or press 1 · 2 · 3',
    tagNew: 'NEW',
    tagUp: 'UP',
    tagMax: 'MAX',
    tagReward: 'REWARD',
    pauseTitle: 'Paused',
    resume: 'Resume 繼續',
    abandon: 'Abandon 抛棄',
    resumeHint: 'Esc to resume',
  },
};

// ===== id → 영문명 (영어일 때만; 한자는 데이터 hanja 병기) =====
// 인명: 병음 로마자. 무기/패시브/업그레이드: 의미 번역.
const NAME_EN: Record<'hero' | 'weapon' | 'passive' | 'upgrade', Record<string, string>> = {
  hero: {
    zhaoyun: 'Zhao Yun',
    guanyu: 'Guan Yu',
    zhangfei: 'Zhang Fei',
    zhugeliang: 'Zhuge Liang',
    huangzhong: 'Huang Zhong',
    lvbu: 'Lü Bu',
    yuanshao: 'Yuan Shao',
    dongzhuo: 'Dong Zhuo',
  },
  weapon: {
    spear: 'Dragon-Gall Spear',
    guandao: 'Green Dragon Blade',
    zhangba: 'Serpent Spear',
    baiyu: 'White Feather Fan',
    crossbow: 'Repeating Crossbow',
    fire: 'Fire Stratagem',
    thunder: 'Heavenly Thunder',
    orbit: 'Eight Trigrams Orbs',
    halberd: 'Sky Piercer Halberd',
    cavalry: 'Xiliang Cavalry',
    zhanma: 'Horse-Cleaver Sword',
    bamen: 'Eight Gates Formation',
    chibi: 'Red Cliff Inferno',
    tianfa: 'Heaven’s Judgment Bolt',
    yuanrong: 'Grand Repeater',
  },
  passive: {
    horseshoe: 'Red Hare Horseshoe',
    armor: 'Dark Iron Armor',
    warbook: 'Art of War',
    wine: 'White Wine',
    seal: 'Imperial Seal',
    censer: 'Incense Censer',
    talismanho: 'Protective Talisman',
    vermilion: 'Vermilion Banner',
  },
  upgrade: {
    attack: 'Martial Training',
    health: 'Iron Reinforcement',
    speed: 'Steed Training',
    pickup: 'Soul-Gathering Sachet',
    cooldown: 'Tactical Mastery',
    startLevel: 'Veteran Deployment',
    revive: 'Rise from Death',
  },
};
