// 군웅전(three-kingdoms-mud) gunungjeon 팩 NPC 카드에서 대사를 추출해 src/data/dialogue.ts 생성.
// 출처: ../three-kingdoms-mud/internal/npc/packs/gunungjeon/cards/<id>.json (자체 제작 콘텐츠)
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = '/Users/hckim/repo/three-kingdoms-mud/internal/npc/packs/gunungjeon/cards';
// threesur id → 카드 파일명 (동일)
const IDS = ['zhaoyun', 'guanyu', 'zhangfei', 'zhugeliang', 'huangzhong', 'lvbu', 'yuanshao', 'dongzhuo'];

const out = {};
for (const id of IDS) {
  const d = JSON.parse(readFileSync(`${SRC}/${id}.json`, 'utf8'));
  const lines = [...(d.voices ?? []), ...(d.time_voices ?? [])].filter((x) => typeof x === 'string' && x.trim());
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
// scripts/gen_dialogue.mjs 로 재생성. 직접 편집하지 말 것.

export interface CharDialogue {
  name: string; // 한글 이름
  select: string; // 대표 한 줄 (선택 화면 등)
  lines: string[]; // 혼잣말·바크 (voices + time_voices)
}

export const DIALOGUE: Record<string, CharDialogue> = {
${body}
};

// id의 대사 중 하나(index 기반, 순환). 없으면 빈 문자열.
export function pickLine(id: string, index: number): string {
  const d = DIALOGUE[id];
  if (!d || d.lines.length === 0) return '';
  return d.lines[((index % d.lines.length) + d.lines.length) % d.lines.length];
}

// id의 랜덤 대사. rand는 0..1 (미지정 시 Math.random). 없으면 빈 문자열.
export function randomLine(id: string, rand: () => number = Math.random): string {
  const d = DIALOGUE[id];
  if (!d || d.lines.length === 0) return '';
  return d.lines[Math.floor(rand() * d.lines.length)];
}

// 전체 장수에서 랜덤 한 줄(타이틀 혼잣말용). {id, name, line} 반환.
export function anyRandomLine(rand: () => number = Math.random): { id: string; name: string; line: string } {
  const ids = Object.keys(DIALOGUE);
  const id = ids[Math.floor(rand() * ids.length)];
  const d = DIALOGUE[id];
  return { id, name: d.name, line: d.lines[Math.floor(rand() * d.lines.length)] ?? d.select };
}
`;

writeFileSync('/Users/hckim/repo/threesur/src/data/dialogue.ts', ts);
console.log('생성 완료: src/data/dialogue.ts');
for (const id of IDS) console.log(`  ${id} (${out[id].name}): select 1 + lines ${out[id].lines.length}`);
