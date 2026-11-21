# /// script
# requires-python = ">=3.10"
# dependencies = ["kokoro-onnx==0.4.9", "soundfile>=0.13"]
# ///
"""Records every vocab word (scripts/vocab-words.mjs) with Kokoro, offline, in
both voices (src/lib/vocabAudio.ts VOICES), at normal and slow speed, as MP3:
<out>/<voice>/<key>.mp3 and <key>.slow.mp3. Files already in <out> are skipped,
so a re-run only records new words. Then upload with scripts/upload-vocab-audio.mjs.

The engine stays on this PC; only the MP3s ship. Model files (kokoro-v1.0.onnx,
voices-v1.0.bin) come from github.com/thewh1teagle/kokoro-onnx/releases.

  uv run scripts/vocab-audio.py <model-dir> <out-dir> [--only key1,key2]
"""

import json
import subprocess
import sys
from pathlib import Path

import soundfile as sf
from kokoro_onnx import Kokoro

VOICES = ["bf_emma", "bm_george"]  # keep in step with VOICES in src/lib/vocabAudio.ts
SPEEDS = {"": 1.0, ".slow": 0.7}  # file suffix -> Kokoro speed


def main() -> None:
    args = sys.argv[1:]
    if len(args) < 2:
        sys.exit(__doc__)
    model_dir, out = Path(args[0]), Path(args[1])
    only = set(args[3].split(",")) if len(args) > 3 and args[2] == "--only" else None

    front = Path(__file__).resolve().parent.parent
    words = json.loads(
        subprocess.run(
            ["node", "scripts/vocab-words.mjs"], cwd=front, check=True, capture_output=True, text=True
        ).stdout
    )
    if only:
        words = [w for w in words if w["key"] in only]

    kokoro = Kokoro(str(model_dir / "kokoro-v1.0.onnx"), str(model_dir / "voices-v1.0.bin"))
    made = skipped = 0
    for voice in VOICES:
        (out / voice).mkdir(parents=True, exist_ok=True)
        for w in words:
            for suffix, speed in SPEEDS.items():
                path = out / voice / f"{w['key']}{suffix}.mp3"
                if path.exists():
                    skipped += 1
                    continue
                samples, rate = kokoro.create(w["text"], voice=voice, speed=speed, lang="en-gb")
                sf.write(path, samples, rate, format="MP3")
                made += 1
        print(f"{voice}: done", flush=True)
    print(f"recorded {made}, already there {skipped}")


if __name__ == "__main__":
    main()
