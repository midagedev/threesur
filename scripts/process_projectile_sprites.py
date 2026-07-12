#!/usr/bin/env python3
"""Convert chroma-key-cleaned projectile art into compact retro runtime sprites."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance


SPRITES = (
    "player-arrow",
    "talisman",
    "slash-wave",
    "bagua-orb",
    "cavalry",
    "enemy-arrow",
    "enemy-orb",
)


def make_sprite(source: Path, destination: Path, flip: bool) -> None:
    image = Image.open(source).convert("RGBA")
    if flip:
        image = image.transpose(Image.Transpose.FLIP_LEFT_RIGHT)

    alpha = image.getchannel("A")
    bounds = alpha.getbbox()
    if bounds is None:
        raise ValueError(f"empty alpha image: {source}")
    image = image.crop(bounds)

    # Paint the source onto a deliberately small logical canvas. The final 4x
    # nearest-neighbour upscale preserves chunky pixels while keeping a 256px
    # texture that remains crisp under camera zoom.
    logical_size = 64
    usable = 58
    scale = min(usable / image.width, usable / image.height)
    width = max(1, round(image.width * scale))
    height = max(1, round(image.height * scale))
    image = image.resize((width, height), Image.Resampling.LANCZOS)

    rgb = ImageEnhance.Contrast(image.convert("RGB")).enhance(1.12)
    rgb = ImageEnhance.Color(rgb).enhance(1.08)
    rgb = rgb.quantize(colors=40, method=Image.Quantize.MEDIANCUT).convert("RGB")

    alpha = image.getchannel("A").point(
        lambda value: 0 if value < 28 else 96 if value < 112 else 192 if value < 210 else 255
    )
    image = Image.merge("RGBA", (*rgb.split(), alpha))

    logical = Image.new("RGBA", (logical_size, logical_size), (0, 0, 0, 0))
    logical.alpha_composite(image, ((logical_size - width) // 2, (logical_size - height) // 2))
    runtime = logical.resize((256, 256), Image.Resampling.NEAREST)
    destination.parent.mkdir(parents=True, exist_ok=True)
    runtime.save(destination, optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    for name in SPRITES:
        make_sprite(
            args.input / f"{name}.png",
            args.output / f"{name}.png",
            flip=name == "player-arrow",
        )


if __name__ == "__main__":
    main()
