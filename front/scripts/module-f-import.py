# Module F importer: docs/material/module-f/module_F_two_stories.json -> front/src/lib/content/f/f-<N>.ts
# Run: python front/scripts/module-f-import.py docs/material/module-f/module_F_two_stories.json front/src/lib/content/f
# then `npx prettier --write src/lib/content/f` in front/. Overwrites /edit changes: only for a fresh import.
import json, re, sys, os

SRC, OUT = sys.argv[1], sys.argv[2]
SLUGS = ['summer', 'know-all']
XS = [0, 70, 100, 70, 0, -70, -100, -70]

# Per story, by screen number (1-based): what the package's `fb` is for an open task.
# answer = a student-facing answer (shown after the check); tip = guidance before answering;
# anything else = notes for the grader only.
FB_KIND = [
    {4: 'tip', 5: 'answer', 6: 'answer', 8: 'answer', 10: 'answer', 11: 'answer', 13: 'tip', 15: 'tip', 16: 'answer'},
    {3: 'answer', 9: 'answer', 10: 'answer', 11: 'answer', 14: 'tip', 15: 'answer', 17: 'answer'},
]
# "Fact or inference?" screens have no sentences to mark: one mcq instead (inference first).
FACT_OR_INFERENCE = [
    ['Mr. Cattanzara spread the second rumor.', 'George tells people that he finished the books.',
     'Sophie stops giving George money.'],
    ['The pearls are real, and someone else gave them to Mrs. Ramsay.', 'Mr. Kelada says the pearls are an imitation.',
     'Mr. Kelada pays a hundred dollars.'],
]
# "From a sentence to a paragraph" in story 1 names no sentence to improve.
IMPROVE_1 = ('Improve this one-sentence answer into a paragraph (60-100 words).\n'
             '{p:text}Question: Does George change at the end of the story?\n'
             '{p:text}Answer: George changes because he goes to the library.')


def d(s):
    """No em/en dashes in study text."""
    return re.sub(r'\s*--\s*', ' - ', s.replace('—', '-').replace('–', '-')) if isinstance(s, str) else s


def rtl(s):
    return '\n'.join('{d:rtl}' + l if l.strip() else l for l in d(s).split('\n'))


def notes(story, extra):
    return (f'A short literature answer about "{story["title"]}" by {story["author"]} '
            f'(Bagrut Module F, B2 level; content and language count equally). {extra}')


def writing(story, prompt, fb_notes, starters=None, lo=None, hi=None, model=None):
    s = {'type': 'writing-task', 'prompt': prompt}
    if starters:
        s['wordBank'] = [d(x) for x in starters]
    if lo:
        s['minWords'], s['maxWords'] = lo, hi
    if model:
        s['modelAnswer'] = d(model)
    s['llmGrade'] = True
    s['gradingNotes'] = notes(story, d(fb_notes))
    return s


def screen(si, story, n, sc):
    out = [{'type': 'preface', 'text': f'### {d(sc["t"])}\n{{p:text}}{d(sc["en"])}\n{rtl(sc["he"])}'}]
    task, fb = d(sc['task']), d(sc['fb'])
    if 'opts' in sc:
        out.append({'type': 'mcq', 'prompt': re.sub(r'^Choose: ', '', task), 'options': [d(o) for o in sc['opts']],
                    'correctIndex': sc['a'], 'explanation': fb})
    elif sc['t'] == 'Fact or inference?':
        out.append({'type': 'mcq', 'prompt': 'Which sentence is an inference, not a fact written in the story?',
                    'options': FACT_OR_INFERENCE[si], 'correctIndex': 0, 'explanation': fb})
    else:
        kind = FB_KIND[si].get(n)
        model = fb[len('Model: '):] if fb.startswith('Model: ') else (fb if kind == 'answer' else None)
        lo = hi = None
        if sc['t'] == 'From a sentence to a paragraph':
            lo, hi = 60, 100
        if sc['t'] == 'Mastery challenge':
            lo, hi = 80, 100
        body = IMPROVE_1 if (si == 0 and sc['t'] == 'From a sentence to a paragraph') else task
        prompt = f'{{p:text}}**{body.splitlines()[0]}**' + ''.join('\n' + l for l in body.splitlines()[1:])
        if kind == 'tip':
            prompt += f'\n{{p:callout}}{fb}'
        context = f'What the student learned on this screen: {d(sc["en"])} Task: {task.rstrip(".")} Notes: {fb}'
        out.append(writing(story, prompt, context, sc.get('starters'), lo, hi, model))
    return out


def node(nid, section, title_en, required, gi, y0, rounds, big=False):
    return {'id': nid, 'section': section, 'titleEn': title_en, 'required': required,
            'position': {'x': XS[gi % 8], 'y': y0 + gi * 120}, 'big': big,
            'content': {'preface': [], 'rounds': rounds}}


def story_nodes(si, story, y0):
    slug, sec = SLUGS[si], f'f-{si + 1}'
    nodes, titles = [], {}
    sc = story['screens']

    def add(phase, title_he, title_en, rounds, big=False):
        nid = f'f-{slug}-{phase}'
        nodes.append(node(nid, sec, title_en, [nodes[-1]['id']] if nodes else [], len(nodes), y0, rounds, big))
        titles[nid] = title_he

    words = []
    vocab = story['vocab']
    for half in (vocab[:6], vocab[6:]):
        words += [{'type': 'word-card', 'word': en, 'translationHe': he} for en, he in half]
        words.append({'type': 'match-pairs', 'pairs': [{'en': en, 'he': he} for en, he in half]})
    setting = {'type': 'preface', 'text': f'## {d(story["title"])}\n{{p:text}}{d(story["author"])}\n'
                                          f'{{d:rtl}}**זמן ומקום:**\n{{p:text}}{d(story["setting"])}'}
    add('words', 'מילים לסיפור', 'Key words', [{'screens': [setting] + words, 'retryMissed': True}])

    def screens(a, b):
        return [x for n in range(a, b + 1) for x in screen(si, story, n, sc[n - 1])]

    add('understand-1', 'מבינים את הסיפור (1)', 'Understand 1', [{'screens': screens(1, 6), 'retryMissed': True}])
    add('understand-2', 'מבינים את הסיפור (2)', 'Understand 2', [{'screens': screens(7, 12), 'retryMissed': True}])
    add('think', 'חושבים על הסיפור', 'Think', [{'screens': screens(13, 16), 'retryMissed': True}])
    add('answer', 'עונים כמו מקצוענים', 'Answer', [{'screens': screens(17, 19), 'retryMissed': True}])
    add('mastery', 'משימת שליטה', 'Mastery', [{'screens': screens(20, 20)}])

    review = [{'type': 'steps', 'ordered': True, 'steps': [d(p) for p in story['plot']]}]
    review[0:0] = [{'type': 'preface', 'text': '## תרשים העלילה\n{d:rtl}כל הסיפור בתשעה שלבים או פחות. שווה לחזור לפני מבחן.'}]
    review.append({'type': 'preface', 'text': '## טעויות נפוצות\n{d:rtl}משפטים שתלמידים כותבים, ומה נכון באמת:'})
    review.append({'type': 'steps', 'steps': [f'❌ {d(a)}\n✅ {d(b)}' for a, b in story['mistakes']]})
    for i, q in enumerate(story['questions']):
        review.append({'type': 'preface', 'text': (
            f'### תשובה לדוגמה {i + 1}\n{{p:text}}**{d(q["q"])}**\n{rtl(q["how"])}\n'
            f'{{d:rtl}}📜 ראיה: {d(q["ev"])}\n---\n{{p:text}}{d(q["a"])}')})
    bridge = d(story['bridging'])
    bridge_task = re.sub(r'^Bridging text and context: ', '', bridge)
    opt = [{'type': 'opener', 'kicker': 'סיבוב 2 (רשות)', 'title': 'גשר להקשר',
            'subtitle': 'מחברים את הסיפור לתקופה שלו. 80-100 מילים.', 'level': 4},
           writing(story, f'{{p:text}}**{bridge_task}**', f'A bridging-text-and-context task: {bridge_task}', lo=80, hi=100)]
    add('review', 'חזרה ותשובות לדוגמה', 'Review', [{'screens': review}, {'screens': opt}])
    return nodes, titles


data = json.load(open(SRC, encoding='utf-8'))
y, titles = 130, {}
files = []
for si, story in enumerate(data['stories']):
    nodes, t = story_nodes(si, story, y)
    y += len(nodes) * 120 + 160
    titles[f'f-{si + 1}'] = story['title']
    titles.update(t)
    files.append((si + 1, story, nodes))

# Comparing the two stories (CD9).
cmp_screens = [{'type': 'preface', 'text': (
    '## משווים בין הסיפורים\n{d:rtl}בחמש יחידות שואלים גם על שתי יצירות יחד. '
    'תשובה טובה מראה במה הדמויות או הרעיונות **דומים**, במה הם **שונים**, ומביאה אירוע מכל סיפור.\n'
    '{p:text}Both... / Similarly, ... / However, ... / while ... / In contrast, ...')}]
for c in data['compare']:
    cmp_screens.append(writing({'title': "A Summer's Reading\" and \"Mr. Know-All", 'author': 'Malamud and Maugham'},
                               f'{{p:text}}**{d(c["q"])}**\n{{p:callout}}80-100 מילים, אירוע אחד לפחות מכל סיפור.',
                               'Compare the two stories: similarities AND differences, an event from each story.',
                               ['Both', 'Similarly,', 'However,', 'In contrast,'], 80, 100, c['a']))
compare = node('f-compare', 'f-3', 'Compare', [f'f-{SLUGS[0]}-mastery', f'f-{SLUGS[1]}-mastery'], 0, y,
               [{'screens': cmp_screens, 'retryMissed': True}])
titles['f-3'] = 'השוואה בין הסיפורים'
titles['f-compare'] = 'משווים בין שני הסיפורים'
files.append((3, None, [compare]))

for n, story, nodes in files:
    head = (f"// Module F, story {n}: {story['title']} - {story['author']}.\n" if story else
            "// Module F: comparing the two stories (CD9).\n")
    head += "// Source: docs/material/module-f/module_F_two_stories.json (scripts/module-f-import.py).\n"
    head += "import type { LessonNode } from '../types';\n\n"
    body = json.dumps(nodes, ensure_ascii=False, indent='\t')
    open(os.path.join(OUT, f'f-{n}.ts'), 'w', encoding='utf-8', newline='\n').write(
        head + f'export const f{n}Lessons: LessonNode[] = {body};\n')

# Titles for i18n/locales/titles.he.ts.
sys.stdout.reconfigure(encoding='utf-8')
print(json.dumps(titles, ensure_ascii=False))
