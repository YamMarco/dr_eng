# /// script
# requires-python = ">=3.10"
# dependencies = ["kokoro-onnx==0.4.9", "soundfile>=0.13"]
# ///
"""Records vocab words with Kokoro, offline, as MP3: <out>/<voice>/<key>.mp3.
Run by scripts/vocab-audio.mjs, which picks the words missing from the bucket.

  uv run scripts/vocab-audio.py <model-dir> <jobs.json> <out-dir>

jobs.json: [{"voice": "af_sky", "key": "look-forward-to", "text": "look forward to"}]
Model files (kokoro-v1.0.onnx, voices-v1.0.bin): github.com/thewh1teagle/kokoro-onnx/releases.
"""

import json
import sys
from pathlib import Path

import soundfile as sf
from kokoro_onnx import Kokoro


def main() -> None:
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    model_dir, jobs, out = Path(sys.argv[1]), json.loads(Path(sys.argv[2]).read_text("utf8")), Path(sys.argv[3])
    kokoro = Kokoro(str(model_dir / "kokoro-v1.0.onnx"), str(model_dir / "voices-v1.0.bin"))
    for i, job in enumerate(jobs, 1):
        (out / job["voice"]).mkdir(parents=True, exist_ok=True)
        lang = "en-us" if job["voice"].startswith("a") else "en-gb"  # a* = US voices, b* = UK
        samples, rate = kokoro.create(job["text"], voice=job["voice"], lang=lang)
        sf.write(out / job["voice"] / f"{job['key']}.mp3", samples, rate, format="MP3")
        if i % 50 == 0 or i == len(jobs):
            print(f"recorded {i}/{len(jobs)}", flush=True)


if __name__ == "__main__":
    main()
