#!/usr/bin/env python3
"""Convert a chroma-key landmark concept into a game-ready retro RGBA sprite."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--width", type=int, default=1024)
    parser.add_argument("--height", type=int, default=512)
    args = parser.parse_args()

    source = Image.open(args.input).convert("RGBA")
    px = source.load()
    for y in range(source.height):
      for x in range(source.width):
        r, g, b, _ = px[x, y]
        green_key = g > 105 and g > r * 1.35 and g > b * 1.28
        if green_key:
          strength = min(255, max(0, int((g - max(r, b)) * 2.6)))
          alpha = 255 - strength
          px[x, y] = (r, min(g, max(r, b)), b, alpha if alpha > 24 else 0)

    bounds = source.getchannel("A").getbbox()
    if bounds is None:
        raise ValueError("landmark became fully transparent")
    source = source.crop(bounds)
    usable_w = args.width - 20
    usable_h = args.height - 18
    scale = min(usable_w / source.width, usable_h / source.height)
    size = (max(1, round(source.width * scale)), max(1, round(source.height * scale)))
    source = source.resize(size, Image.Resampling.LANCZOS)
    rgb = ImageEnhance.Contrast(source.convert("RGB")).enhance(1.06)
    rgb = ImageEnhance.Color(rgb).enhance(0.94)
    rgb = rgb.quantize(colors=96, method=Image.Quantize.MEDIANCUT).convert("RGB")
    alpha = source.getchannel("A").point(
        lambda value: 0 if value < 24 else 112 if value < 96 else 220 if value < 220 else 255
    )
    sprite = Image.merge("RGBA", (*rgb.split(), alpha))
    canvas = Image.new("RGBA", (args.width, args.height), (0, 0, 0, 0))
    canvas.alpha_composite(sprite, ((args.width - size[0]) // 2, args.height - size[1] - 4))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(args.output, optimize=True)


if __name__ == "__main__":
    main()
