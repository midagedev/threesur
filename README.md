# 일기당천 (一騎當千) — 삼국 서바이버

한 명의 장수로 수천의 적병을 베어내는 브라우저 뱀서라이크.
뱀파이어 서바이버의 중독 루프 × 삼국무쌍의 쾌감 × Three.js 이펙트.

**Play**: https://midagedev.github.io/threesur/

- 이동: WASD / 화살표 / 가상 조이스틱 (모바일)
- 무쌍: Space (게이지 100%)
- 10분 생존 = 승리. 무기는 전부 자동 발동.

## 개발

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # 타입체크 + dist 빌드
```

기획/설계 문서: [docs/DESIGN.md](docs/DESIGN.md)

스프라이트: [three-kingdoms-mud](https://github.com/midagedev) 프로젝트의 군웅전 SD 캐릭터 시트 사용.
`scripts/gen_manifest.py`가 원본 placement 데이터에서 `public/assets/sprites/manifest.json`을 생성한다.
