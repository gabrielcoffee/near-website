"""The invite link's preview video and still (public/og/invite.mp4, public/og/invite.png), 1200×630.

White ground. Two orange discs (the app's accent, #FF9300) come in from the sides, speeding up, and meet in the
middle, overlapping a little like Near's mark (the overlap a lighter orange). On contact they squash and spring
back, the ground floods orange from the contact point as a widening circle, and the discs turn white; it holds
on that. No words: the link's title says who invited you, in the reader's language. 3.2 s at 30 fps, H.264,
yuv420p, faststart, well under a megabyte. The still is the last frame (WhatsApp and Telegram show only it).

Run: python3 scripts/render-invite-video.py   (needs Pillow and ffmpeg)
"""

import math
import os
import shutil
import subprocess
import sys
import tempfile

from PIL import Image, ImageDraw

W, H = 1200, 630
FPS = 30
SECONDS = 3.2
SCALE = 3  # supersampling for smooth edges

ACCENT = (0xFF, 0x93, 0x00)
WHITE = (0xFF, 0xFF, 0xFF)
OVERLAP_ON_WHITE = (0xFF, 0xC6, 0x7A)   # the discs' overlap while orange on white
OVERLAP_ON_ACCENT = (0xFF, 0xE4, 0xBF)  # the discs' overlap once white on orange

R = 96          # disc radius
OVERLAP = 22    # how far the discs cut into each other at rest

ENTER = (0.15, 1.15)    # the discs travel in
SQUASH = (1.15, 1.75)   # squash and spring back
FLOOD = (1.12, 1.95)    # the orange widens from the contact point
TURN = (1.18, 1.62)     # the discs go from orange to white


def clamp(value, low=0.0, high=1.0):
    return max(low, min(high, value))


def progress(t, span):
    return clamp((t - span[0]) / (span[1] - span[0]))


def ease_in(p):
    return p * p


def ease_out(p):
    return 1 - (1 - p) ** 3


def mix(a, b, p):
    return tuple(round(x + (y - x) * p) for x, y in zip(a, b))


def squash(t):
    """Horizontal and vertical scale on contact: a quick squash, then a damped spring back to 1."""
    p = progress(t, SQUASH)
    if p <= 0 or p >= 1:
        return 1.0, 1.0
    amount = 0.14 * math.exp(-5 * p) * math.cos(3.2 * math.pi * p)
    return 1 - amount, 1 + amount * 0.7


def frame(t):
    s = SCALE
    image = Image.new("RGB", (W * s, H * s), WHITE)
    draw = ImageDraw.Draw(image)
    cx, cy = W / 2, H / 2

    # The flood: a circle of orange growing from the contact point until it covers the frame.
    flood = ease_out(progress(t, FLOOD))
    if flood > 0:
        reach = math.hypot(W / 2, H / 2) + 4
        radius = reach * flood
        draw.ellipse([(cx - radius) * s, (cy - radius) * s, (cx + radius) * s, (cy + radius) * s], fill=ACCENT)

    # The discs: from just off each side to resting with their overlap.
    rest = R - OVERLAP / 2
    travel = ease_in(progress(t, ENTER))
    start = cx + rest + W / 2 + R
    offset = start + (rest - start) * travel
    sx, sy = squash(t)
    rx, ry = R * sx, R * sy
    turn = progress(t, TURN)
    color = mix(ACCENT, WHITE, turn)
    overlap_color = mix(OVERLAP_ON_WHITE, OVERLAP_ON_ACCENT, turn)

    left = (cx - offset, cy)
    right = (cx + offset, cy)
    for x, y in (left, right):
        draw.ellipse([(x - rx) * s, (y - ry) * s, (x + rx) * s, (y + ry) * s], fill=color)

    # Their overlap, a step lighter (the lens of the two circles), once they touch.
    if offset < R:
        mask_left = Image.new("L", image.size, 0)
        mask_right = Image.new("L", image.size, 0)
        ImageDraw.Draw(mask_left).ellipse(
            [(left[0] - rx) * s, (left[1] - ry) * s, (left[0] + rx) * s, (left[1] + ry) * s], fill=255
        )
        ImageDraw.Draw(mask_right).ellipse(
            [(right[0] - rx) * s, (right[1] - ry) * s, (right[0] + rx) * s, (right[1] + ry) * s], fill=255
        )
        lens = Image.new("L", image.size, 0)
        lens.paste(mask_left, mask=mask_right)
        image.paste(Image.new("RGB", image.size, overlap_color), mask=lens)

    return image.resize((W, H), Image.LANCZOS)


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_dir = os.path.join(root, "public", "og")
    os.makedirs(out_dir, exist_ok=True)
    if shutil.which("ffmpeg") is None:
        sys.exit("ffmpeg is needed")
    frames = round(SECONDS * FPS)
    with tempfile.TemporaryDirectory() as work:
        for index in range(frames):
            frame(index / FPS).save(os.path.join(work, f"{index:04d}.png"))
        frame(SECONDS).save(os.path.join(out_dir, "invite.png"), optimize=True)
        subprocess.run(
            [
                "ffmpeg", "-y", "-loglevel", "error", "-framerate", str(FPS), "-i", os.path.join(work, "%04d.png"),
                "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p", "-crf", "24", "-preset", "slow",
                "-movflags", "+faststart", "-an", os.path.join(out_dir, "invite.mp4"),
            ],
            check=True,
        )
    for name in ("invite.mp4", "invite.png"):
        size = os.path.getsize(os.path.join(out_dir, name))
        print(f"public/og/{name}: {size // 1024} KB")


if __name__ == "__main__":
    main()
