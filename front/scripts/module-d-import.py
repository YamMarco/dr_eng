# Module D importer: unit JSON (docs/material/module-d) -> front/src/lib/content/d/d-<N>.ts
# Run: python front/scripts/module-d-import.py docs/material/module-d front/src/lib/content/d && npx prettier --write (in front/)
# Overwrites /edit changes: only for a fresh import.
import json, re, sys, os

SRC, OUT = sys.argv[1], sys.argv[2]
UNITS = [
    ('unit1_the_road_not_taken.json', 'road'),
    ('unit2_count_that_day_lost.json', 'count-day'),
    ('unit3_introduction_to_poetry.json', 'intro-poetry'),
    ('unit4_thank_you_maam.json', 'thank-you'),
    ('unit5_as_i_grew_older.json', 'grew-older'),
]
GROUPS = [('before', [1, 2]), ('read', [3, 4, 5]), ('meaning', [6, 7, 8]), ('think', [9, 10, 11]),
          ('answer', [12, 13]), ('challenge', [14]), ('mastery', [15]), ('samples', [16])]
XS = [0, 70, 100, 70, 0, -70, -100, -70]


# Prototype controls the app doesn't have (flip cards, the 📜 drawer).
FIXES = [
    ('לחצו על כל כרטיס כדי לראות את הפירוש.', 'כרטיס אחרי כרטיס, ואחר כך תרגול קצר.'),
    ('לחצו על כל כרטיס כדי לגלות מה הוא מסמל:', 'הנה הסמלים בשיר, ומה כל אחד מהם מסמל:'),
    ('לחצו על כל כרטיס כדי לגלות מה התמונה אומרת על קריאת שירה:', 'הנה התמונות בשיר, ומה כל אחת אומרת על קריאת שירה:'),
    ('לחצו על כל כרטיס כדי לגלות מה הפרט מראה:', 'הנה הפרטים, ומה כל אחד מהם מראה:'),
    ('אפשר לפתוח את השיר בכל רגע בכפתור 📜 למעלה.', 'השיר מופיע במסך הבא - קראו אותו שוב לפני השאלות.'),
    ('אפשר לפתוח את מפת הסיפור בכל רגע בכפתור 📜 למעלה.', 'מפת הסיפור מופיעה במסך הבא - קראו אותה שוב לפני השאלות.'),
    (' - ואם צריך, הוא תמיד כאן ב־📜.', '.'),
    (' - ואם צריך, היא תמיד כאן ב־📜.', '.'),
]


def d(s):
    """No em/en dashes in study text."""
    if not isinstance(s, str):
        return s
    s = re.sub(r'\s*--\s*', ' - ', s.replace('—', '-').replace('–', '-'))
    for a, b in FIXES:
        s = s.replace(a, b)
    return s


def split_bi(s):
    en, _, he = s.partition(' · ')
    return en.strip(), he.strip()


def rtl(s):
    return '\n'.join('{d:rtl}' + l if l.strip() else l for l in d(s).split('\n'))


class Unit:
    def __init__(self, u):
        self.u = u
        self.story = u.get('kind') == 'story'
        self.lines = {p['n']: p for p in u['poem']}
        self.ref = 'event' if self.story else 'line'

    def quote(self, n):
        p = self.lines.get(n)
        if not p or not p['en'].strip():
            return None
        en = p['en'] if self.story else f'"{p["en"]}"'
        return f'{{p:text}}{en} ({self.ref} {n})'

    def stanza_label(self, i, a, b):
        if self.story:
            return f'Part {i + 1} - {self.u["partNames"][i]}'
        if self.u.get('textPending'):
            return f'Lines {a}-{b}' if a != b else f'Line {a}'
        return f'Stanza {i + 1}'

    def stanza(self, i, nums=None):
        a, b = self.u['stanzas'][i]
        nums = nums or list(range(a, b + 1))
        st = {'label': self.stanza_label(i, a, b),
              'lines': [{'n': n, 'en': self.lines[n]['en'], **({'he': d(self.lines[n]['he'])} if self.lines[n]['he'] else {})}
                        for n in nums]}
        notes = self.u.get('stanzaNotes')
        if notes and not any(self.lines[n]['en'].strip() for n in nums):
            st['note'] = f'{{p:text}}{d(notes[i]["en"])}\n{rtl(notes[i]["he"])}'
        return st

    def poem_screen(self, nums=None, title=None):
        stanzas = []
        for i, (a, b) in enumerate(self.u['stanzas']):
            sel = [n for n in range(a, b + 1) if nums is None or n in nums]
            if sel:
                stanzas.append(self.stanza(i, sel))
        s = {'type': 'poem'}
        if title:
            s['title'] = title
        s['stanzas'] = stanzas
        return s

    # ---- questions ----
    def mcq(self, q, mastery):
        opts = [d(o) if q['why'][i] is None else [d(o), d(q['why'][i])] for i, o in enumerate(q['opts'])]
        parts = [rtl(q['he'])]
        ev = [x for x in (self.quote(n) for n in q['ev']['lines']) if x]
        if ev:
            parts.append('{d:rtl}📜 ' + ('ראיה מהסיפור:' if self.story else 'ראיה מהשיר:'))
            parts += ev
        elif q['ev']['lines']:
            word = 'אירועים' if self.story else 'שורות'
            parts.append(f'{{d:rtl}}📜 {word} {", ".join(map(str, q["ev"]["lines"]))}')
        if q.get('tip'):
            parts.append('{p:callout}**טיפ לבגרות:** ' + d(q['tip']))
        s = {'type': 'mcq', 'prompt': d(q['q']), 'options': opts, 'correctIndex': q['a'],
             'explanation': '\n'.join(parts)}
        if not mastery and (q.get('hint') or q.get('kw')):
            # Key words of the question: only those that appear in it, never on vocab questions.
            kw = [] if q.get('tag') == 'vocab' else [k for k in q.get('kw', [])
                                                      if d(k).split(' - ')[0].split('→')[0].strip().lower() in q['q'].lower()]
            lines = []
            for k in kw:
                en, _, he = d(k).partition(' - ')
                lines.append(f'{{p:ul}}**{en.strip()}** - {he.strip().replace("→", "←")}' if he else f'{{p:ul}}**{en.strip()}**')
            if q.get('hint'):
                lines.append(rtl(q['hint']))
            if lines:
                s['hint'] = '\n'.join(lines)
        return s

    # ---- blocks ----
    def blocks(self, blocks, title):
        out, buf = [], []

        def flush():
            if buf:
                out.append({'type': 'preface', 'text': '\n\n'.join(buf)})
                buf.clear()

        for b in blocks:
            t = b['t']
            if t == 'he':
                buf.append(rtl(b['text']))
            elif t == 'en':
                buf.append('{p:text}' + d(b['text']))
            elif t == 'tip':
                buf.append('{p:callout}' + d(b['he']))
            elif t == 'card':
                flush()
                head = f'### {b.get("icon", "")} {d(b["title"])}'.replace('###  ', '### ')
                body = [head]
                if b.get('en'):
                    body.append('{p:text}' + d(b['en']))
                if b.get('he'):
                    body.append(rtl(b['he']))
                out.append({'type': 'preface', 'text': '\n'.join(body)})
            elif t == 'quote':
                flush()
                out.append(self.poem_screen(set(b['lines'])))
            elif t == 'feelings':
                flush()
                out.append({'type': 'steps', 'steps': [
                    f'**"{d(i["word"])}"** ({self.ref} {i["line"]}): {d(i["en"])}\n{rtl(i["he"])}' for i in b['items']]})
            elif t == 'steps':
                flush()
                out.append({'type': 'steps', 'ordered': True, 'steps': [
                    f'**{i["en"]}** - {d(i["he"])}\n{{p:text}}{d(i["ex"])}' for i in b['items']]})
            elif t == 'compare':
                flush()
                lines = []
                for side in ('left', 'right'):
                    lines.append(f'{{p:text}}**{d(b[side]["title"])}**')
                    lines += [x for x in (self.quote(n) for n in b[side]['lines']) if x]
                    if side == 'left':
                        lines.append('---')
                lines.append(rtl(b['he']))
                out.append({'type': 'preface', 'text': '\n'.join(lines)})
            else:
                raise ValueError(t)
        flush()
        # The source screen's Hebrew title heads its first screen.
        if out and out[0]['type'] == 'preface':
            out[0]['text'] = f'## {d(title)}\n' + out[0]['text']
        elif out and out[0]['type'] == 'poem':
            out[0]['title'] = d(title)
        else:
            out.insert(0, {'type': 'preface', 'text': f'## {d(title)}'})
        return out

    def screen(self, s, opt_round):
        out = self.blocks(s['blocks'], s['heTitle'])
        if any('במסך הבא - קראו' in x.get('text', '') for x in out):
            out.append(self.poem_screen(title=f'{self.u["title"]} - {self.u["author"]}'))
        w = s.get('widget') or {}
        t = w.get('type')
        mastery = bool(s.get('mastery'))
        if t == 'reflect':
            en, he = split_bi(w['prompt'])
            out.append({'type': 'preface', 'text': '\n'.join(
                [f'{{p:text}}**{d(en)}**', rtl(he)] + [f'{{p:ul}}{d(o)}' for o in w['options']] +
                ['{p:callout}' + d(w['feedback'])])})
        elif t == 'vocab':
            words = w['words']
            for half in (words[:5], words[5:]):
                for x in half:
                    ex = d(x['ex'])
                    ex = re.sub(r'\b(' + re.escape(x['en']) + r')\b', r'**\1**', ex, count=1, flags=re.I)
                    out.append({'type': 'word-card', 'word': x['en'], 'translationHe': d(x['he']), 'exampleEn': ex})
                if len(half) >= 2:
                    out.append({'type': 'match-pairs', 'pairs': [{'en': x['en'], 'he': d(x['he'])} for x in half]})
        elif t == 'poem':
            out.append(self.poem_screen(title=f'{self.u["title"]} - {self.u["author"]}'))
        elif t == 'reveal':
            steps = []
            for c in w['cards']:
                en, he = split_bi(c['back'])
                steps.append(f'**{d(c["front"])}**\n{{p:text}}{d(en)}\n{rtl(he)}')
            out.append({'type': 'steps', 'steps': steps})
        elif t == 'order':
            out.append({'type': 'order',
                        'prompt': f'{{p:text}}**{d(w["question"])}**\n{{d:rtl}}סדרו את המשפטים לתשובה מלאה: ' + ' → '.join(w['labels']),
                        'tiles': [d(x) for x in w['items']], 'explanation': rtl(w['done'])})
        elif t == 'build':
            full = []
            for i, st in enumerate(w['steps']):
                right = next(k for k, o in enumerate(st['opts']) if o['ok'])
                full.append(d(st['opts'][right]['s']))
                q = {'type': 'mcq',
                     'prompt': f'{{p:text}}**{d(w["question"])}**\n{{d:rtl}}שלב {i + 1}: בחרו את משפט ה־{st["label"]} הטוב ביותר.',
                     'options': [d(o['s']) if o['ok'] else [d(o['s']), d(o['why'])] for o in st['opts']],
                     'correctIndex': right}
                if i == len(w['steps']) - 1:
                    q['explanation'] = '{d:rtl}התשובה המלאה:\n' + '\n'.join('{p:text}' + x for x in full)
                out.append(q)
            wr = s['write']
            m = re.search(r'(\d+)-(\d+)', wr['promptHe'])
            lo, hi = (int(m.group(1)), int(m.group(2))) if m else (40, 60)
            opt_round.append({'type': 'opener', 'kicker': 'סיבוב 2 (רשות)', 'title': 'כותבים לבד',
                              'subtitle': 'למי שרוצה לתרגל תשובה מלאה בכתיבה: ANSWER → PROVE → EXPLAIN.', 'level': 2})
            opt_round.append({
                'type': 'writing-task',
                'prompt': f'{{p:text}}**{d(wr["prompt"])}**\n{rtl(wr["promptHe"])}',
                'wordBank': [d(x) for x in wr['starters']],
                'minWords': lo, 'maxWords': hi,
                'checklist': [split_bi(d(c))[1] or d(c) for c in wr['checklist']],
                'modelAnswer': d(wr['model']),
                'llmGrade': True,
                'gradingNotes': (f'A short literature answer about "{self.u["title"]}" by {self.u["author"]} '
                                 f'(Bagrut Module D, B1 level). A good answer has three parts: ANSWER (one clear sentence), '
                                 f'PROVE (a quote or detail from the {"story" if self.story else "poem"}, with a {self.ref} number), '
                                 f'EXPLAIN ("This shows that..." / "because"). Judge structure and relevance, not literary depth. '
                                 f'Model answer: {d(wr["model"])}'),
            })
        elif t == 'samples':
            for i, it in enumerate(w['items']):
                out.append({'type': 'preface', 'text': f'### שאלה {i + 1}\n{{p:text}}**{d(it["q"])}**\n---\n{{p:text}}{d(it["a"])}'})
            out.append({'type': 'summary', 'title': 'ביטויי זהב',
                        'lines': [f'**{d(p["en"])}** - {d(p["he"])}' for p in self.u['phrases']]})
            out.append({'type': 'summary', 'title': 'מושגים',
                        'lines': [f'**{d(p["en"])}** - {d(p["he"])}' for p in self.u['terms']]})
        elif t:
            raise ValueError(t)
        for q in s.get('questions') or []:
            out.append(self.mcq(q, mastery))
        return out


def build(n, fname, slug, y0):
    u = json.load(open(os.path.join(SRC, fname), encoding='utf-8'))
    unit = Unit(u)
    nodes, titles, prev = [], {}, []
    for gi, (phase, nums) in enumerate(GROUPS):
        screens, opt = [], []
        for k in nums:
            screens += unit.screen(u['screens'][k - 1], opt)
        nid = f'd-{slug}-{phase}'
        scored = any(s['type'] in ('mcq', 'order', 'match-pairs', 'writing-task') for s in screens + opt)
        rounds = [{'screens': screens, **({'retryMissed': True} if phase != 'mastery' and scored else {})}]
        if opt:
            rounds.append({'screens': opt, 'retryMissed': True})
        nodes.append({'id': nid, 'section': f'd-{n}', 'titleEn': u['screens'][nums[0] - 1]['phase'],
                      'required': prev, 'position': {'x': XS[gi % 8], 'y': y0 + gi * 120},
                      'big': not scored, 'content': {'preface': [], 'rounds': rounds}})
        titles[nid] = d(u['screens'][nums[0] - 1]['phaseHe'])
        prev = [nid]
    return u, nodes, titles


y = 130
allTitles = {}
for i, (f, slug) in enumerate(UNITS, 1):
    u, nodes, titles = build(i, f, slug, y)
    y += len(GROUPS) * 120 + 160
    allTitles[f'd-{i}'] = u['title']
    allTitles.update(titles)
    header = (f"// Module D, unit {i}: {u['title']} - {u['author']} ({u['year']}).\n"
              f"// Source: EngUp_Literature_Developer_Package (04_Data/module_D/{f}).\n"
              "import type { LessonNode } from '../types';\n\n")
    body = json.dumps(nodes, ensure_ascii=False, indent='\t')
    open(os.path.join(OUT, f'd-{i}.ts'), 'w', encoding='utf-8', newline='\n').write(
        header + f'export const d{i}Lessons: LessonNode[] = {body};\n')
# Titles for i18n/locales/titles.he.ts.
sys.stdout.reconfigure(encoding="utf-8")
print(json.dumps(allTitles, ensure_ascii=False, indent=1))
