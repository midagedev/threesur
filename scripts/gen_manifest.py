#!/usr/bin/env python3
"""Generate public/assets/sprites/manifest.json from three-kingdoms-mud placement data.

Sheet layout (all sheets): 48x64 px cells. Each character occupies a 4-col x 4-row block:
  rows = directions [south, west, east, north], cols = frames [idle, step1, idle2, step2].
Character block i in a strip sheet starts at column i*4.
The variants sheet is a grid of 4x4 blocks addressed by (sheet_column, sheet_row).
"""
import json
import os

SD = "/Users/hckim/repo/three-kingdoms-mud/cmd/damboy/assets/generated/character-sd"
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "sprites", "manifest.json")

ARCHETYPE_NAMES = {
    "warlord": "군웅", "general_spear": "창수", "general_blade": "도수",
    "general_bow": "궁수", "strategist": "책사", "official": "관원",
    "merchant": "상인", "worker": "인부", "guard": "수문병", "runner": "전령",
}
# plain color variants to expose per archetype (no field-kit / accessory variants)
COLORS = ["umber", "reed", "river", "ash", "plum", "saffron", "teal", "brick",
          "slate", "pine", "bone", "dusk", "rust", "midnight", "copper", "olive",
          "rosewood", "flax", "cobalt", "moss", "smoke", "berry", "ochre", "seafoam"]


def load(p):
    with open(p) as f:
        return json.load(f)


def strip_sheet(placement_path, file_name):
    d = load(placement_path)
    order = d["order"]
    return {
        "file": file_name,
        "cols": len(order) * 4,
        "rows": 4,
        "chars": {cid: i for i, cid in enumerate(order)},
    }


def main():
    roster = load(f"{SD}/npc/gunungjeon-npc-sprite-roster.v1.json")
    names = {e["npc_id"]: e["name"] for e in roster["entries"]}

    sgrade = strip_sheet(
        f"{SD}/npc/gunungjeon-s-grade/gunungjeon-s-grade-walk-v1-placement-v1.json",
        "sgrade.png")
    apriority = strip_sheet(
        f"{SD}/npc/gunungjeon-a-priority/gunungjeon-a-priority-walk-v1-placement-v1.json",
        "apriority.png")
    soldiers = strip_sheet(
        f"{SD}/npc/fallback-archetypes/gunungjeon-fallback-archetypes-walk-v1-placement-v1.json",
        "soldiers.png")

    var = load(f"{SD}/npc/fallback-archetypes/gunungjeon-fallback-archetypes-walk-v1.variants-placement-v1.json")
    variants = {}
    for s in var["sprites"]:
        arch, v = s["base_archetype"], s["variant"]
        if v in COLORS and "field" not in s.get("detail", "") and s["sprite_id"] == f"{arch}@{v}":
            variants.setdefault(arch, []).append({"c": s["sheet_column"], "r": s["sheet_row"], "v": v})

    manifest = {
        "cell": {"w": 48, "h": 64},
        "content": {"w": 32, "h": 48, "anchor": "bottom-center"},
        "directions": ["south", "west", "east", "north"],
        "frames": ["idle", "step1", "idle2", "step2"],
        "sheets": {"sgrade": sgrade, "apriority": apriority, "soldiers": soldiers,
                   "soldiersVariants": {"file": "soldiers-variants.png", "cols": 168, "rows": 64,
                                        "blockCols": 4, "blockRows": 4, "variants": variants}},
        "names": {
            **{cid: names[cid] for cid in sgrade["chars"] if cid in names},
            **{cid: names[cid] for cid in apriority["chars"] if cid in names},
            **ARCHETYPE_NAMES,
        },
    }
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    counts = {k: len(v) for k, v in variants.items()}
    print("names:", len(manifest["names"]), "| variant colors per archetype:", counts)


if __name__ == "__main__":
    main()
