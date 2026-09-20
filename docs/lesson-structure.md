# Lesson structure — quick reference

Read this instead of re-reading the source when adding or editing Module C content.
Companion: `docs/lesson-data-model.md` (the model itself).

## Model

Flat: one **LessonNode** = one path node = one object in `front/src/lib/content/c/c-<N>.ts`.
It carries everything — `position`, `required` prerequisites, `content.rounds[].screens[]`.
No build-time derivation: what you write is what renders.

There is no separate display code — `id` is the only identifier, shown on
the node label and everywhere else. Material position (unit/module/section/
lesson, e.g. `4.c.1.2`) is conveyed by where the node sits in its section,
not by a field on the node.

## Where things live (`front/src/`)

| file | role |
| --- | --- |
| `lib/content/c/c-1.ts` … `c-25.ts` | the lessons — one `export const c<N>Lessons: LessonNode[]` each |
| `lib/content/sectionMeta.ts` | section headings + theme-color order |
| `lib/content/index.ts` | `allLessons`, `getLesson`, `getLessonsBySection` |
| `lib/content/types.ts` | `LessonNode` / `LessonContent` / `LessonRound` / `SectionMeta` |
| `lib/lesson-screens/types.ts` | `LessonScreen` union + `isScreenEmpty()` + `countQuestions()` |
| `lib/lesson-screens/registry.ts` | screen type → component |
| `lib/lesson-screens/LessonRunner.svelte` | plays one round |
| `lib/lessonProgress.svelte.ts` | localStorage progress (rounds done per lesson) |
| `routes/unit/[unitId]/module/[moduleId]/lessons/+page.svelte` | the path canvas |
| `scripts/snapshot-content.ts` | one-off generator that produced `lib/content/` (kept for reference) |

## Authoring a lesson

Add an object to the right section's array:

```ts
{
  id: 's7-l2',                 // globally unique in the module; convention s{section}-l{n}
  section: 'c-7',
  titleHe: 'שם השיעור',
  required: ['s7-l1'],         // prerequisite lesson ids, AND'd; [] = a root node
  position: { x: -70, y: 1560 }, // px offset from the 400px canvas centre; y grows down
  big: false,                  // true = larger node (use for content-free / recap nodes)
  content: {
    preface: [ { type: 'preface', text: '…' } ],  // teaching intro, shown once before round 0; [] if none
    rounds: [
      { screens: [ { type: 'mcq', /* … */ } ] },   // round 0 — practice; unlocks the path
      // optional extra practice rounds (played without the preface)
    ],
  },
}
```

- **Positions are manual now.** Inserting a node between two others means nudging
  the `y` of the ones below it. Keep a section's nodes roughly `~120` apart; the
  `x` cycle the old builder used was `[0, 70, 100, 70, 0, -70, -100, -70]`.
- `preface` plays once, before round 0 only. Put rule cards / steps / summary
  intro screens there; keep exercises (and any mid- or end-of-round teaching
  screens) in `rounds[].screens`. Round 0's played list is `[...preface, ...rounds[0].screens]`.
- Round 0 is mandatory to progress; completing it unlocks dependents. Rounds 1+
  are optional and don't affect anything downstream. To make the first N rounds
  mandatory (a node that teaches its content across several short rounds, e.g. the
  vocab nodes), set `requiredRounds: N` on the node; dependents unlock after N rounds.
- A node with no non-empty screen in `preface` or any round renders as a
  permanently-locked placeholder.
- To add a section: new `c/c-<N>.ts`, import + spread it in `index.ts`, add an
  entry to `sectionMeta.ts`.

## Screen types

| type | fields | scored |
| --- | --- | --- |
| `preface` | `text`, `dir?` | — |
| `steps` | `steps[]`, `ordered?` (true = numbered) | — |
| `summary` | `title`, `lines[]` | — |
| `word-card` | `word`, `translationHe?`, `image?` (site path, 16:9 - set via the editor's crop dialog), `imageAlt?`, `exampleEn?` (`**word**` bolds), `exampleHe?`, `hookHe?` (memory hook) | — |
| `question-preview` | `intro`, `prompts[]` | — |
| `timed-reading` | `label`, `text`, `timerKey` | — |
| `time-result` | `label`, `timerKey` | — |
| `time-comparison` | `aLabel`, `aKey`, `bLabel`, `bKey`, `fasterMessage`, `tieMessage` | — |
| `mcq` | `prompt`, `options[]`, `correctIndex`, `explanation?`, `layout?: 'rows'\|'honeycomb'` | 1 |
| `mark-word` | `sentence`, `correctWordIndex`, `dir?` | 1 |
| `cloze-pick` | `clause`, `options[]`, `correctIndices[]`, `explanation?` | 1 |
| `mark-all` | `instruction`, `text`, `correctIndices[]`, `categories?[{name,color,indices[]}]`, `dir?`, `wordBank?`, `timerKey?` | 1 |
| `spell-word` | `word`, `mode: 'copy' \| 'listen'` | 1 |
| `match-pairs` | `pairs[{en, he}]` | 1 |
| `writing-task` | `prompt`, `wordBank[]`, `minSentences`, `minWordsUsed`, `maxTypos?` (default 1), `capitalIsError?` (default true) | 1 |
| `passage-quiz` | `text`, `questions[{prompt, keywords[], answerHint, points?}]` | n |
| `passage-mcq` | `text`, `questions[{prompt, options, correctIndex}]`, `timerKey?`, `label?` | n |

`mark-all` renders the passage as flowing text; each word is tap-to-toggle.
Scored leniently: pass on ≥70% of targets found with ≤1 stray tap.
`mark-all.correctIndices` are token positions — split the text on whitespace and
count. Targets = `correctIndices` ∪ every `categories[].indices`. `categories`
is optional colour-coding (names / negatives / …): shown as a legend, and the
matching tokens light up in that colour on the reveal (`color` is a key into
`lesson-screens/markAllColors.ts`). Scoring ignores which category a token is in. `passage-quiz` marks correct when every keyword appears in the typed answer
— keep keywords to content words, avoid numbers (`"2,000"` vs `"2000"` won't match).
`passage-mcq` is a short text + multiple-choice question(s) on one screen. Set
`timerKey` (+ `label`) to add a stopwatch that stops on the last check.
`cloze-pick` shows `options` as tiles; picking one previews the assembled
sentence (`option + clause`) live. Any tile in `correctIndices` passes — use
this instead of `writing-task` when the "free" part of an answer is really a
small closed set (a stance opener, a verb form, a connector word, …), in any
lesson, so scoring stays a lookup instead of fuzzy-matching typed text.
`match-pairs`: tap an English word and its Hebrew meaning, in either order; the Hebrew column is
shuffled per mount. One scored question, passes with at most 1 wrong tap; the
button opens once every pair is matched.
A round with `retryMissed: true` replays each wrongly-answered scored screen once
at the end (practice only, the score is unchanged). Used by the vocab nodes.
`mcq.layout: 'honeycomb'` fits a fill-the-blank vocab pick where every option
is a single word or short phrase (a stacked full-width row per option reads
oddly once options are that short) — omit `layout` (or set `'rows'`) for the
regular stacked-options look.

## Text formatting syntax

Free-text fields (`preface.text`, `steps[]`, `summary.lines[]`, `question-preview.intro`/`prompts[]`)
go through `mdInline`/`mdBlock` (`lib/lesson-screens/miniMarkdown.ts`), a tiny fixed
markdown subset — not full markdown. Authored either by hand or via the
content-edit toolbar (`SlideStage.svelte`), which stores this syntax through
`MarkdownInput.svelte`.

Inline (works anywhere in a line): `**bold**`, `*italic*`/`_italic_`,
`++underline++`, `~~strikethrough~~`, `` `code` ``, `[text](https://url)`,
`{c:name}text{/c}` (name = a key in `lib/lesson-screens/textColors.ts`'s
fixed palette).

Line-level (leading tokens on a line, `mdBlock` only — plain `mdInline` ignores
them): `{a:left|center|right}` alignment, `{d:ltr|rtl}` direction override,
`{p:text}` marks the line as English study text (tinted card with an accent edge,
left-to-right; implies `{d:ltr}`) so it stands out from the app's Hebrew
instructions, and a `#`/`##`/`###` prefix for the 3 header sizes (omit for regular text).
Order: alignment/direction/paragraph tokens first, then the header marker, e.g.
`{a:center}## כותרת ממורכזת`.

## Runner rules

- one `LessonRunner` per **round**, remounted each time
- screens that fail `isScreenEmpty()` are skipped, not shown blank
- score denominator is fixed upfront from `countQuestions()` — the badge reads 1/3, 1/3, 2/3
- pass = ≥80% correct; a round with 0 scored questions always passes
- timers write elapsed ms into a per-round session bag keyed by `timerKey`;
  `time-result` / `time-comparison` read it back

## Node / path rules

- node = lesson. Unlocks when every id in `required` has round 1 done
- a lesson with no content in any round renders as a permanently locked node
- `big: true` draws an 80px node instead of 64px
- canvas is 400px wide; `position.x` is an offset from centre, `position.y` grows downward
- label shows `titleHe`, the start / next-round button, and `id`

## Adding a screen type

1. shape in `lesson-screens/types.ts` → add to the `LessonScreen` union → add cases
   to `isScreenEmpty()` and `countQuestions()`
2. component in `lesson-screens/`: props `{ screen, onAdvance, disabled = $bindable(), label = $bindable() }`, and `export function primaryAction()`
3. register in `registry.ts`
4. badge string in `i18n/locales/he.ts` under `exerciseKind`

## Writing distractors (wrong options)

Applies to `mcq`, `cloze-pick`, `passage-mcq`, `mark-word`, in every part. The test: could a student who does NOT know the target word or skill still pass by ruling out silly options? If yes, rewrite.

Rules:
1. **Every wrong option must be tempting to someone who is unsure.** Same part of speech, grammatically fits the blank, and belongs to the same topic as the sentence. Never fill slots with unrelated concrete nouns (bicycle, window, sandwich, kitchen, holiday).
2. **Wrong on one clear point.** Each distractor fails for a reason you can state in the `explanation` (wrong meaning, wrong form, wrong preposition, opposite meaning). Keep exactly one defensible answer: read the sentence with each distractor in place before you ship it.
3. **Give the sentence a decisive clue.** A vague sentence ("good for your ___") lets several options fit. Add the detail that only the target satisfies ("keep your body strong and free from illness").
4. **Good sources of distractors, in order of preference:**
   - a word from the same node that is already carded (never before its card) and fits grammatically
   - another form of the target word (health / healthy / healthily / heal, society / social / societies)
   - a near meaning that fails on one detail (encourage vs forbid in a sentence that praises)
   - a collocation trap (responsible for, but proud of / afraid of)
   - for passage questions: a real detail from the same text that answers a different question, or a plausible topic word that the text never mentions. Not an absurd one (prices, traffic, weather).
5. **Use the `explanation` to say why the others fail**, not only why the answer is right. That is where the learning is.
6. Vary the position of the correct option.

Before / after (content-2c):
- Before: "Fruit and vegetables are good for your ___" support / health / window / society.
- After: "Fruit and vegetables keep your body strong and free from illness. They are good for your ___" society / health / support / school.
- Before: "Every member of ___ should follow the law" holiday / society / kitchen / bicycle.
- After: same sentence, options social / society / societies / socially (forces a choice of form, not just meaning).

## Conventions

- all UI chrome is Hebrew, in `i18n/locales/he.ts`; `ar.ts` is a partial override
- teaching content (passages, prompts, options) stays inline in the `c/*.ts` files — never i18n
- lesson ids are globally unique within the module; convention `s{section}-l{n}`
- after changes: `npm run check` in `front/`, then `graphify update .` at the repo root
