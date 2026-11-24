# /// script
# requires-python = ">=3.10"
# dependencies = ["kokoro-onnx==0.4.9", "soundfile>=0.13"]
# ///
"""Voice comparison page: records phrases in every English Kokoro voice into one
self-contained HTML file (audio inlined), to pick voices or check a phrase. Dev PC only.

  uv run scripts/voice-ab.py <model-dir> <out.html> ["phrase" ...]
"""

import base64
import html
import io
import sys
from pathlib import Path

import soundfile as sf
from kokoro_onnx import Kokoro

DEFAULT = [
    "(all) on your own",
    "all on your own",
    "(every) once in a while",
    "every once in a while",
    "drop out (of school)",
    "drop out of school",
    "keep",
    "deliver",
    "support",
    "headquarters",
    "rubbish",
]
ACCENTS = {"a": ("אמריקאי", "en-us"), "b": ("בריטי", "en-gb")}
CURRENT = {"bf_emma", "bm_george"}


def main() -> None:
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    model_dir, out, phrases = Path(sys.argv[1]), Path(sys.argv[2]), sys.argv[3:] or DEFAULT
    kokoro = Kokoro(str(model_dir / "kokoro-v1.0.onnx"), str(model_dir / "voices-v1.0.bin"))
    voices = sorted(v for v in kokoro.get_voices() if v[:1] in ACCENTS and v[1:2] in "fm")

    rows = []
    for v in voices:
        accent, lang = ACCENTS[v[0]]
        cells = []
        for p in phrases:
            samples, rate = kokoro.create(p, voice=v, lang=lang)
            buf = io.BytesIO()
            sf.write(buf, samples, rate, format="MP3")
            src = "data:audio/mpeg;base64," + base64.b64encode(buf.getvalue()).decode()
            cells.append(f'<td><button data-src="{src}" aria-label="{html.escape(p)}">▶</button></td>')
        name = v.split("_", 1)[1].title()
        gender = "אישה" if v[1] == "f" else "גבר"
        mark = " ★" if v in CURRENT else ""
        rows.append(
            f'<tr><th scope="row" dir="ltr">{name}{mark}<small>{v}</small></th>'
            f"<td>{accent}, {gender}</td>{''.join(cells)}</tr>"
        )
        print(f"recorded {v}", flush=True)

    heads = "".join(f'<th scope="col" dir="ltr">{html.escape(p)}</th>' for p in phrases)
    out.write_text(PAGE.format(heads=heads, rows="\n".join(rows)), encoding="utf8")
    print(out)


PAGE = """<!doctype html><html lang="he" dir="rtl"><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>השוואת קולות</title>
<style>
body{{font:15px system-ui,sans-serif;margin:16px;color:#222}}
.wrap{{overflow-x:auto}} table{{border-collapse:collapse}}
th,td{{border-bottom:1px solid #ddd;padding:6px 10px;text-align:center;white-space:nowrap}}
thead th{{position:sticky;top:0;background:#fff;font-weight:600;max-width:12em;white-space:normal}}
tbody th{{text-align:start}} small{{display:block;color:#888;font-weight:400}}
button{{font-size:16px;min-width:44px;min-height:36px;border:1px solid #ccc;border-radius:8px;background:#fafafa;cursor:pointer}}
button.on{{background:#2563eb;color:#fff;border-color:#2563eb}}
</style>
<h1>השוואת קולות Kokoro</h1>
<p>★ = הקולות שבשימוש היום. לחיצה מנגנת.</p>
<div class="wrap"><table><thead><tr><th>קול</th><th>מבטא</th>{heads}</tr></thead>
<tbody>{rows}</tbody></table></div>
<script>
const a=new Audio();let cur;
document.addEventListener('click',e=>{{const b=e.target.closest('button[data-src]');if(!b)return;
cur?.classList.remove('on');cur=b;b.classList.add('on');a.src=b.dataset.src;a.play();}});
a.onended=()=>cur?.classList.remove('on');
</script></html>
"""

if __name__ == "__main__":
    main()
