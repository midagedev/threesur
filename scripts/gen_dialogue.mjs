// 군웅전(three-kingdoms-mud) gunungjeon 팩 NPC 카드에서 대사를 추출해 src/data/dialogue.ts(ko) 재생성.
// 출처: ../three-kingdoms-mud/internal/npc/packs/gunungjeon/cards/<id>.json (자체 제작 콘텐츠)
//   각 카드의 voice(대표1) + voices(다수) + time_voices(새벽/한낮/저물녘/밤 4연)을 사용.
//
// 커레이션 방침(#49):
//   - EXISTING_IDS(초기 13인): voices+time_voices 전부 통과(기존 노출 풀 무손실 — 절제 원칙: 다양성만 확장).
//   - NEW_IDS(스프라이트 보유 신규 23인): "짧은 6줄 우선" 규칙 — voices를 길이 오름차순으로 6줄 선별
//     (동률은 원문 순서, 서사 순서로 복원) + time_voices 4줄 = 인당 10줄. MUD 시스템 용어는
//     voices 층엔 나타나지 않아 별도 블록리스트 불필요(장부·군량 등은 삼국지 공통 소재라 유지).
//   - 영어(dialogueEn.ts)는 스크립트가 건드리지 않는다(수기 번역, ko와 1:1 순서 대응).
// 재현: `node scripts/gen_dialogue.mjs`. 접근자(i18n pack 분기)는 이 스크립트 템플릿이 그대로 재출력한다.
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = '/Users/hckim/repo/three-kingdoms-mud/internal/npc/packs/gunungjeon/cards';

// 초기 13인 — 원문 풀 전량 통과(무손실).
const EXISTING_IDS = [
  'zhaoyun', 'guanyu', 'zhangfei', 'zhugeliang', 'huangzhong', 'lvbu',
  'yuanshao', 'dongzhuo', 'liubei', 'caocao', 'zhouyu', 'zhangliao', 'sunshangxiang',
];
// 스프라이트 보유 신규 23인(sgrade 8 + apriority 15) — 짧은 6줄 + time_voices 4줄로 커레이션.
const NEW_IDS = [
  // sgrade 추가 8
  'caopi', 'caorui', 'caozhen', 'sunce', 'sunquan', 'lumeng', 'luxun', 'simayi',
  // apriority 15 (도겸 'do'는 카드 없음 — 제외, 36인 = 13+23)
  'mizhu', 'caoren', 'caozhi', 'chengong', 'chengyu', 'dianwei', 'dongzhao', 'gaoshun',
  'guojia', 'huaxin', 'jushou', 'shenpei', 'tianfeng', 'xiahoudun', 'xiahouyuan',
];
const IDS = [...EXISTING_IDS, ...NEW_IDS];

// 카드가 없는 수기 작성 항목(#30 손상향 — 스프라이트 프로토타입 시 대사 신규 창작). 원문 보존.
const MANUAL_ENTRIES = {
  sunshangxiang: {
    name: '손상향',
    select: '손가의 딸은 규방보다 활터가 어울려요.',
    lines: [
      '큰오라버니(손책)의 패기와 작은오라버니(손권)의 진중함, 둘 다 내 화살에 담겨요.',
      '내 시녀들은 노리개 대신 칼을 찼어요. 처소가 곧 병영이었죠.',
      '활을 당기는 순간만은 누구도 나를 공주라 부르지 않아요.',
      '겨눈 곳은 반드시 맞혀요. 빗나갔다면 애초에 겨누지 않은 거예요.',
      '강동은 오라버니들이 세웠지만, 지키는 건 사내들만의 몫이 아니에요.',
      '형주로 시집간다 해도 이 활만은 두고 가지 않아요.',
      '사내들은 내 활을 보고 놀라죠. 놀랄 시간에 제 시위나 얹는 게 나을 텐데.',
      '화살은 망설이지 않아요. 나도 그래요.',
      '새벽엔 시위를 새로 얹고 손끝의 굳은살을 살펴요.',
      '한낮엔 강바람의 결을 읽어 과녁을 다시 잡아요.',
      '저물녘엔 오라버니들의 안부를 화살 깃에 실어 보내요.',
      '밤엔 활을 머리맡에 두고 얕게 자요.',
    ],
  },
};

const NEW_VOICE_PICK = 6; // 신규 인물 voices 선별 수(길이 짧은 순)

function buildLines(d, isNew) {
  const voices = (d.voices ?? []).filter((x) => typeof x === 'string' && x.trim());
  const tv = (d.time_voices ?? []).filter((x) => typeof x === 'string' && x.trim());
  if (!isNew) return [...voices, ...tv];
  const chosen = voices
    .map((s, i) => ({ s, i, len: [...s].length }))
    .sort((a, b) => a.len - b.len || a.i - b.i)
    .slice(0, NEW_VOICE_PICK)
    .sort((a, b) => a.i - b.i)
    .map((x) => x.s);
  return [...chosen, ...tv];
}

const out = {};
for (const id of IDS) {
  if (MANUAL_ENTRIES[id]) {
    out[id] = MANUAL_ENTRIES[id];
    continue;
  }
  const d = JSON.parse(readFileSync(`${SRC}/${id}.json`, 'utf8'));
  const lines = buildLines(d, NEW_IDS.includes(id));
  out[id] = { name: d.name ?? id, select: d.voice ?? (lines[0] ?? ''), lines };
}

const body = Object.entries(out)
  .map(([id, v]) => {
    const lines = v.lines.map((l) => `    ${JSON.stringify(l)},`).join('\n');
    return `  ${id}: {\n    name: ${JSON.stringify(v.name)},\n    select: ${JSON.stringify(v.select)},\n    lines: [\n${lines}\n    ],\n  },`;
  })
  .join('\n');

const ts = `// 장수 대사 — 군웅전(three-kingdoms-mud) gunungjeon 팩 NPC 카드에서 추출(자체 제작 콘텐츠).
// 출처: internal/npc/packs/gunungjeon/cards/<id>.json 의 voice/voices/time_voices.
// DIALOGUE(ko)는 scripts/gen_dialogue.mjs 로 재생성. 영어는 dialogueEn.ts(수기 번역).
// 접근자는 현재 언어(i18n)에 따라 ko/en을 고른다.
import { getLang } from '../core/i18n';
import { DIALOGUE_EN } from './dialogueEn';

export interface CharDialogue {
  name: string; // 한글 이름
  select: string; // 대표 한 줄 (선택 화면 등)
  lines: string[]; // 혼잣말·바크 (voices + time_voices)
}

export const DIALOGUE: Record<string, CharDialogue> = {
${body}
};

// 현재 언어에 맞는 대사 팩 (en이면 dialogueEn, 없으면 ko 폴백).
function pack(id: string): CharDialogue | undefined {
  if (getLang() === 'en' && DIALOGUE_EN[id]) return DIALOGUE_EN[id];
  return DIALOGUE[id];
}

// 장수 이름 (현재 언어). 없으면 빈 문자열.
export function dialogueName(id: string): string {
  return pack(id)?.name ?? '';
}

// 장수 대표 한 줄 (현재 언어). 없으면 빈 문자열.
export function dialogueSelect(id: string): string {
  return pack(id)?.select ?? '';
}

// id의 대사 중 하나(index 기반, 순환). 없으면 빈 문자열.
export function pickLine(id: string, index: number): string {
  const d = pack(id);
  if (!d || d.lines.length === 0) return '';
  return d.lines[((index % d.lines.length) + d.lines.length) % d.lines.length];
}

// id의 랜덤 대사. rand는 0..1 (미지정 시 Math.random). 없으면 빈 문자열.
export function randomLine(id: string, rand: () => number = Math.random): string {
  const d = pack(id);
  if (!d || d.lines.length === 0) return '';
  return d.lines[Math.floor(rand() * d.lines.length)];
}

// 전체 장수에서 랜덤 한 줄(타이틀 혼잣말용). {id, name, line} 반환.
export function anyRandomLine(rand: () => number = Math.random): { id: string; name: string; line: string } {
  const ids = Object.keys(DIALOGUE);
  const id = ids[Math.floor(rand() * ids.length)];
  const d = pack(id) ?? DIALOGUE[id];
  return { id, name: d.name, line: d.lines[Math.floor(rand() * d.lines.length)] ?? d.select };
}
`;

writeFileSync('/Users/hckim/repo/threesur/src/data/dialogue.ts', ts);
console.log('생성 완료: src/data/dialogue.ts');
for (const id of IDS) {
  const tag = NEW_IDS.includes(id) ? 'NEW' : 'keep';
  console.log(`  [${tag}] ${id} (${out[id].name}): lines ${out[id].lines.length}`);
}
