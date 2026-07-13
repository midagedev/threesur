#!/usr/bin/env python3
"""Convert a 3x2 chroma-key fortress concept sheet into a 4x2 runtime atlas."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance


COLS_IN = 3
ROWS_IN = 2
CELL_OUT = 256
COLS_OUT = 4
ROWS_OUT = 2


def remove_green(image: Image.Image) -> Image.Image:
    image = image.convert("RGBA")
    px = image.load()
    for y in range(image.height):
        for x in range(image.width):
            r, g, b, _ = px[x, y]
            keyed = g > 105 and g > r * 1.34 and g > b * 1.25
            if keyed:
                strength = min(255, max(0, int((g - max(r, b)) * 2.7)))
                alpha = 255 - strength
                px[x, y] = (r, min(g, max(r, b)), b, alpha if alpha > 24 else 0)
    return image


def module_sprite(image: Image.Image) -> Image.Image:
    image = remove_green(image)
    bounds = image.getchannel("A").getbbox()
    if bounds is None:
        return Image.new("RGBA", (CELL_OUT, CELL_OUT), (0, 0, 0, 0))
    image = image.crop(bounds)
    usable = CELL_OUT - 12
    scale = min(usable / image.width, usable / image.height)
    size = (max(1, round(image.width * scale)), max(1, round(image.height * scale)))
    image = image.resize(size, Image.Resampling.LANCZOS)
    rgb = ImageEnhance.Contrast(image.convert("RGB")).enhance(1.05)
    rgb = ImageEnhance.Color(rgb).enhance(0.94)
    rgb = rgb.quantize(colors=96, method=Image.Quantize.MEDIANCUT).convert("RGB")
    alpha = image.getchannel("A").point(
        lambda value: 0 if value < 24 else 112 if value < 96 else 220 if value < 220 else 255
    )
    image = Image.merge("RGBA", (*rgb.split(), alpha))
    cell = Image.new("RGBA", (CELL_OUT, CELL_OUT), (0, 0, 0, 0))
    cell.alpha_composite(image, ((CELL_OUT - size[0]) // 2, CELL_OUT - size[1] - 4))
    return cell


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    source = Image.open(args.input).convert("RGBA")
    cell_w = source.width // COLS_IN
    cell_h = source.height // ROWS_IN
    atlas = Image.new("RGBA", (CELL_OUT * COLS_OUT, CELL_OUT * ROWS_OUT), (0, 0, 0, 0))
    for row in range(ROWS_IN):
        for col in range(COLS_IN):
            crop = source.crop((col * cell_w, row * cell_h, (col + 1) * cell_w, (row + 1) * cell_h))
            index = row * COLS_IN + col
            atlas.alpha_composite(module_sprite(crop), ((index % COLS_OUT) * CELL_OUT, (index // COLS_OUT) * CELL_OUT))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    atlas.save(args.output, optimize=True)


if __name__ == "__main__":
    main()
