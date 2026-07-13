#!/usr/bin/env python3
"""Pack chroma-cleaned world concepts into one retro 2.5D runtime atlas."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance


ASSETS = (
    "wall",
    "gate",
    "tower",
    "palisade",
    "siege-wreck",
    "camp",
    "war-drum",
    "breach",
    "powder-cart",
    "dumpling-cart",
    "shrine",
    "beacon",
)

LOGICAL_CELL = 128
RUNTIME_CELL = 128
COLS = 4
ROWS = 4


def pixel_sprite(path: Path) -> Image.Image:
    image = Image.open(path).convert("RGBA")
    bounds = image.getchannel("A").getbbox()
    if bounds is None:
        raise ValueError(f"empty alpha image: {path}")
    image = image.crop(bounds)

    usable = 122
    scale = min(usable / image.width, usable / image.height)
    width = max(1, round(image.width * scale))
    height = max(1, round(image.height * scale))
    image = image.resize((width, height), Image.Resampling.LANCZOS)
    rgb = ImageEnhance.Contrast(image.convert("RGB")).enhance(1.08)
    rgb = ImageEnhance.Color(rgb).enhance(1.04)
    rgb = rgb.quantize(colors=56, method=Image.Quantize.MEDIANCUT).convert("RGB")
    alpha = image.getchannel("A").point(
        lambda value: 0 if value < 28 else 96 if value < 112 else 208 if value < 220 else 255
    )
    image = Image.merge("RGBA", (*rgb.split(), alpha))

    logical = Image.new("RGBA", (LOGICAL_CELL, LOGICAL_CELL), (0, 0, 0, 0))
    logical.alpha_composite(image, ((LOGICAL_CELL - width) // 2, LOGICAL_CELL - height - 3))
    return logical.resize((RUNTIME_CELL, RUNTIME_CELL), Image.Resampling.NEAREST)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    atlas = Image.new(
        "RGBA",
        (RUNTIME_CELL * COLS, RUNTIME_CELL * ROWS),
        (0, 0, 0, 0),
    )
    for index, name in enumerate(ASSETS):
        cell = pixel_sprite(args.input / f"{name}.png")
        x = (index % COLS) * RUNTIME_CELL
        y = (index // COLS) * RUNTIME_CELL
        atlas.alpha_composite(cell, (x, y))

    args.output.parent.mkdir(parents=True, exist_ok=True)
    atlas.save(args.output, optimize=True)


if __name__ == "__main__":
    main()
