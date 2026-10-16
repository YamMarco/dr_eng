# Lesson structure

Read this instead of re-reading the source when adding or editing Module C content. Screen types, fields and scoring live in `front/src/lib/lesson-screens/schema.ts` (zod, field docs in `.describe()`): that is the source of truth, this doc only adds rules and gotchas.

## Model

Flat: one **LessonNode** = one path node = one object in `front/src/lib/content/c/c-<N>.ts` (`export const c<N>Lessons: LessonNode[]`). Nothing is derived at build time: what you write is what renders.

```
LessonNode ──content──> LessonContent ──preface──> LessonScreen[]   (teaching intro, round 0 only)
                                     └─rounds──> LessonRound ──screens──> LessonScreen
LessonNode ──required[]──> LessonNode        (prerequisite DAG, by id)
LessonNode ──section──> SectionMeta          (heading + theme color, in sectionMeta.ts)
```

- `id` is the only identifier (node label, progress, `required`). Always starts with the module letter + `-` (`c-l06`, `c-exam-4`); editor-made ids are `c-<8 hex>`. Renaming an id needs a progress migration.
- Display titles are not on the node: `lib/i18n/locales/titles.he.ts` (and `titles.ar.ts`), keyed by id.
- Section order and theme color = position in `lib/content/sectionMeta.ts`; headings render above a section's first node.
- Runtime state is separate: `lessonProgress.svelte.ts` (localStorage, rounds done per lesson), `LessonScore` and `LessonSession` (`Record<timerKey, elapsedMs>`) in memory per round.
- Planned Supabase tables: `lib/content/schema.sql` (not wired up).

## Authoring a lesson

```ts
{
  id: 'c-past-simple',
  section: 'c-7',
  required: ['c-s7-l1'],         // prerequisite ids, AND'd; [] = a root node
  position: { x: -70, y: 1560 }, // px offset from the 400px canvas centre; y grows down
  big: false,                    // 80px node instead of 64px; for content-free / recap nodes
  content: {
    preface: [ { type: 'preface', text: '…' } ],  // played once, before round 0 only; [] if none
    rounds: [ { screens: [ { type: 'mcq', /* … */ } ] } ],
  },
}
```

- **Positions are manual.** Inserting a node means nudging the `y` of those below. Keep a section's nodes about 120 apart; the old `x` cycle was `[0, 70, 100, 70, 0, -70, -100, -70]`.
- `preface` holds rule cards, steps and summary intros. Exercises and mid/end-of-round teaching screens go in `rounds[].screens`. Round 0's played list is `[...preface, ...rounds[0].screens]`.
- **Unlock:** a node opens when every id in `required` has `roundsCompleted >= requiredRounds` (default 1). Round 0 is mandatory; rounds 1+ are optional and affect nothing downstream. To require the first N rounds, set `requiredRounds: N`.
- A node with no non-empty screen in any round renders as a permanently locked placeholder.
- New section: add `<module>/<module>-<N>.ts` exporting `<module><N>Lessons` (e.g. `cobe/cobe-1.ts`, `cobe1Lessons`; the /edit save endpoint derives the file from the section id), import and spread it in `lib/content/index.ts`, add an entry to `sectionMeta.ts` with `modules` (modules whose path shows it, owner first) and `skill` (vocab / reading / writing / speaking: the module page row).
- A section can sit on several paths: `c-1` (reading) has `modules: ['c', 'e']`, one shared progress under the section's `progressScope` (`'reading'`; default the owning module). Progress calls go through `lib/lessonPath.ts`, never the module being viewed.
- The path canvas is `routes/app/unit/[unitId]/module/[moduleId]/lessons/+page.svelte`.

## Screen usage notes

Scoring: exercises count 1, `passage-mcq` / `passage-quiz` 1 per question (`countQuestions()`).

- **`mark-all`:** flowing text, each word tap-to-toggle. `correctIndices` are token positions (split on whitespace and count); targets = `correctIndices` plus every `categories[].indices`. Passes at 70% of targets with at most 1 stray tap. **Exactly one target = strict (no stray tap)**: this is how to author a tap-one-word screen (single sentence, `correctIndices: [n]`, no `categories`). `categories` is optional colour-coding (legend, colours on reveal; `color` is a key in `markAllColors.ts`); scoring ignores the category. There is no `mark-word` type.
- **`passage-quiz`:** correct when every keyword appears in the typed answer. Use content words only; avoid numbers (`"2,000"` vs `"2000"` won't match).
- **Paragraph markers** (`passage-mcq.text`, `passage-quiz.text`, `self-check.text`): start a paragraph with a roman numeral and **two spaces** (`"I  For years…\n\nII  In 2022…"`). Never `**I**`. `PassageText` renders the gutter marker. Texts of 100+ words have a title.
- **`passage-mcq`:** short text plus question(s) on one screen. `timerKey` (+ `label`) adds a stopwatch that stops on the last check.
- **`cloze-pick`:** options as tiles, the picked one previews the assembled sentence (`option + clause`). Use it instead of `writing-task` when the free part is really a small closed set (stance opener, verb form, connector), so scoring is a lookup.
- **`spell-word`:** listen mode speaks the word once on arrival (browser speech, en-GB), buttons replay at normal or slow speed; where the browser can't speak it falls back to copy mode. Keep copy right after a word's card; put listen later (review round, test). Never dictate homophones (affect / effect). `hintHe` shows the meaning under the buttons.
- **`match-pairs`:** English word to Hebrew meaning in either order, Hebrew column shuffled per mount. One scored question, passes with at most 1 wrong tap.
- **`match-definitions`** (Module E Part II): numbered `items` (exam uses 6) and `definitions` (3), each pointing at its item by `itemIndex`; pick a definition, then an item; 1 point per definition. `word-card.definitionEn` shows an English definition under the translation.
- **`mcq.layout: 'honeycomb'`** for fill-the-blank vocab picks where every option is a single word or short phrase; omit for stacked rows. Lessons shuffle `mcq` options on every mount (exams keep authored order), so never refer to an option by number in an `explanation`: quote its words.
- **`speak`** (COBE): the question (English, with listen buttons), an optional Hebrew `tip`, one take with no pause and a bar to `targetSeconds`, then playback, "record again" (replaces the take), and `modelAnswer` + `checklist`. Never scored in lessons. In an exam it takes `part` (A/B/C) + `points`, hides all feedback, keeps the take between questions and is graded in the report against the COBE rubric (see `docs/modules/cobe.md`). Audio stays in memory on the device (`lib/recorder.svelte.ts`); without a microphone it runs as a stopwatch.
- **`video`** (COBE Part C): a clip with an optional Hebrew `caption`. Without `src` it shows a dashed placeholder marking where the clip goes. Never scored.
- **`retryMissed: true`** on a round replays each wrongly-answered scored screen once at the end (score unchanged).

### Adding a screen type

1. Schema in `lesson-screens/schema.ts` (with `.describe()`), add to `lessonScreenSchema`, a type alias in `types.ts`, cases in `isScreenEmpty()` and `countQuestions()`. The /edit paste check and the /mcp endpoint pick it up from there.
2. Component in `lesson-screens/`: props `{ screen, onAdvance, disabled = $bindable(), label = $bindable() }` and `export function primaryAction()`.
3. Register in `registry.ts`.
4. Badge string in `i18n/locales/he.ts` under `exerciseKind`.

## Text formatting syntax

Free-text fields (`preface.text`, `steps[]`, `summary.lines[]`, `question-preview.intro`/`prompts[]`) go through `mdInline` / `mdBlock` (`lesson-screens/miniMarkdown.ts`), a fixed markdown subset, authored by hand or via the editor toolbar (`SlideStage.svelte` / `MarkdownInput.svelte`).

- **Inline:** `**bold**`, `*italic*` / `_italic_`, `++underline++`, `~~strike~~`, `` `code` ``, `[text](url)`, `{c:name}text{/c}` (key in `textColors.ts`).
- **Direction** (`textDir`): a line, sentence or quote is RTL when its first or last letter is Hebrew or it is mostly Hebrew (emoji, digits, punctuation don't count); else `dir="auto"`. `{d:..}` is a manual override.
- **Flow arrows:** browsers never mirror `→` / `←`. Use `←` in a line that renders RTL, `→` in an English line or between two English words.
- **Line-level** (leading tokens, `mdBlock` only): `{a:left|center|right}`, `{d:ltr|rtl}`, `{p:text}` (English study text card), `{p:callout}` (tip; `{i:warn|check|cross|star|fire|pin|ask}` swaps the icon, see `calloutIcons.ts`), `---` divider, `#`/`##`/`###` headers. Order: alignment/direction/paragraph tokens first, then the header, e.g. `{a:center}## כותרת`.

## Runner rules

- One `LessonRunner` per **round**, remounted each time; screens failing `isScreenEmpty()` are skipped.
- Score denominator is fixed upfront from `countQuestions()`. Pass = 80% correct; a round with 0 scored questions always passes.
- Timers write elapsed ms into a per-round bag keyed by `timerKey`; `time-result` / `time-comparison` read it. Screens that measure time get a "עם טיימר" checkbox in the editor (`fields/TimerField.svelte`). Only `passage-mcq` and `mark-all` have `timerKey`.
- Static-screen runs (the word deck) can pass `onScreenResult(index, answers)`, `retryMissed` and `alwaysPass`.

## Reading round pattern (Part B)

Reference: `c-l06` + `c-not-q`. Every round up to and including the first exam-level round is required (`requiredRounds`). Later rounds are optional, and their preface starts with "תרגול נוסף (רשות)". No true/false rounds about the method itself. Only the exam-level round is called "רמת בחינה".

Load rule: exhaustive marking ("mark every X") only on short material. On an exam-size text the student hunts **by question**. Per lesson: about 10-14 scored questions, at most one required exam-size text, about 6-8 minutes of required rounds.

**Marking lesson** (l04, l06, l07, l08), `requiredRounds` 4:
1. Recognise: Hebrew sentences to mark.
2. Switch language: English sentences, 1 rules MCQ mixed in.
3. Context + precision: 2 short paragraphs, 1 rules MCQ, then a paragraph with look-alikes that are not targets (another/noted/know for NOT, almost/everyone for limiters, butter/because for contrast, capitalised sentence starters for names).
4. Exam level: one exam-shaped text (title, I-IV, 200-250 words), `passage-mcq` with `timerKey`, 3 questions that each need one hunt.
5. Optional challenge: mark every target in the same text, `mark-all` with `timerKey`.

**Question lesson** (paired -q lessons, l01-l03, l09-l12), `requiredRounds` 3:
1. Rules MCQs, then a short text with one real question.
2. Your turn: one paragraph question.
3. Exam level: a familiar passage (for a -q lesson, the long text of its marking lesson) with 3-4 questions, then a **new text** (topic not used elsewhere) with 3 questions, one of them not a target-word question so students read each question. Answer-type lessons (l10-l12) use typed answers (`passage-quiz`).
4. On: optional practice.

New-text length grows: 120-150 words in l01-l04, 180-250 from NOT to l12, a full exam (about 340 words, 9 questions) only in the last lesson.

## Writing round pattern (Part C)

A round takes a weak student about 5 minutes (exceptions: the 4-sentence skeleton about 7, a 70-90 paragraph 10-15, which is never split). Budget per round: a few MCQs / taps plus at most one short writing task, or 1-2 one-sentence tasks, or one 2-4 sentence task.

- **Micro-skill node:** recognise (MCQ, tap) -> fix a weak example (upgrade task) -> one writing task per round, 3 reps of the new move on MIKUD topics, each repeating the earlier moves (snowball).
- **Topic node:** understand (MCQs) -> 4-sentence skeleton -> [For instance + As a result] -> 70-90 paragraph -> unseen MIKUD topic, no bank, `timeLimitMinutes: 20`. Supports fade across topic lessons: template + bank, then connectors + bank, then nothing.
- **Optional rounds:** `requiredRounds` stops before them; the preface starts with "תרגול נוסף (רשות)" and says who it is for. Only for skills a strong student already has by then.
- Every writing task has `modelAnswer` + `checklist`, and every model answer must pass the task's own checks.

## Writing distractors (wrong options)

Applies to `mcq`, `cloze-pick`, `passage-mcq`, `mark-all`. Test: could a student who does NOT know the target still pass by ruling out silly options? If yes, rewrite.

1. Every wrong option must tempt someone unsure: same part of speech, fits the blank grammatically, same topic. Never unrelated concrete nouns (bicycle, window, sandwich).
2. Wrong on one clear point you can state in the `explanation` (meaning, form, preposition, opposite). Exactly one defensible answer: read the sentence with each distractor before shipping.
3. Give the sentence a decisive clue. "Good for your ___" lets several fit; "keep your body strong and free from illness" does not.
4. Sources, in order: a word from the same node already carded (never before its card); another form of the target (health / healthy / heal); a near meaning failing on one detail; a collocation trap (responsible for, but proud of); for passage questions, a real detail from the same text answering a different question, or a plausible topic word the text never mentions.
5. Use `explanation` to say why the others fail, not only why the answer is right.

## Writing checks (`front/src/lib/checks/`)

Deterministic, free checks for student writing, run before (and instead of) the LLM. `checkWriting(text, loader, {prompt, extraWords, source})` returns the Ministry length report (70-90 words, deduction table, under 25 valid words = 0, copied prompt/passage sentences not counted) and issues by rubric area: spelling (nspell, en-US + en-GB, dictionaries in `static/dict/`), mechanics (`mechanics.ts`), language use and Israeli-student errors (`language.ts`). `confidence: 'maybe'` issues are worded as questions. `worthGrading(report)` gates the LLM call. UI: `<WritingCheck text options />` (writing-task, self-check). Lessons only: per-screen `autoCheck: false` hides it. Exams never auto-check. Rule explanations (Hebrew): `writingCheck.rule` in `i18n/locales/he.ts`.

`writing-task` options (lessons):
- `minWords` = paragraph mode: one textarea with a live counter and the length line, split into sentences for the punctuation / word-bank / lint checks; `minSentences` becomes a minimum. Use for every 70-90 word task; line mode for 1-3 sentence drills.
- `timeLimitMinutes` adds the exam countdown pill (`QuizTimer`); running out shows a note and the time taken, never fails the task. Set it wherever the text promises a time.
- `wordCounter` (line mode) live count; on for every 3+ sentence task.
- `requiredMoves` lists the paragraph moves the text must show (`writingMoves.ts`: stance, because, in-addition, for-example, for-instance, as-a-result, in-conclusion; synonyms count). A missing move fails the task and is named. Set it on every snowball task.
- `acceptedAnswers` for fixed-shape tasks (the one-sentence YES/NO stance): whole sentences, `(a|b)` alternatives, groups multiply out (`acceptedAnswers.ts`). Each line must equal one (case, punctuation, apostrophes ignored); word-bank / punctuation / lint checks are skipped; a wrong answer shows up to 3 examples.

## Word deck (Module E vocabulary)

A spaced-repetition deck, not nodes. Plan: `docs/modules/module-e.md`.
- Words: `lib/content/e/words.ts` (`DeckWord`: word, class, English definition, Hebrew, example with the word in `**bold**`; when the bold part is exactly the word, the example also becomes a fill-the-blank). Register a deck in `lib/deck/index.ts`. Arabic meanings: `lib/content/e/words.ar.ts` by word id (`localizeDeck`).
- `lib/deck/scheduler.ts`: Leitner boxes 1-5 (1, 3, 7, 14, 30 days); right = up a box, wrong = box 1.
- `lib/deck/session.ts` builds the screens. New words two at a time (card, Hebrew meaning, copy-spelling, match-pairs). Reviews by box: 1 Hebrew meaning, 2 fill the blank, 3+ in sets of 3 as `match-definitions` (leftovers: definition -> word).
- Progress: `lib/deck/deckProgress.svelte.ts` (localStorage `deck-progress`). Page: `/app/unit/<u>/module/<m>/words`. Tests: `npm test` (`front/tests/deck.test.ts`).

## Conventions

- UI chrome is in `i18n/locales/he.ts` (source of truth) and `ar.ts`. Teaching content is Hebrew inline in `c/*.ts`; Arabic lives in `lib/content/translations/ar.json` (whole Hebrew string -> whole Arabic string, English and markup kept), applied by `localizeContent` on lesson and exam pages only, never in the editor.
- After adding or editing Hebrew content: `node scripts/content-i18n.mjs` lists missing / stale Arabic entries (a missing one just shows Hebrew). A Hebrew `mark-all` text needs an Arabic version with the same token count and targets at the same positions (`tests/content-i18n.test.ts`).
- Editor settings (SlideStage): on wide screens the slide is the start column and the settings card sits beside it; narrow screens stack. Plain flow (nothing sticky), `SettingsGroup` blocks, type-specific first, then "הגדרות כלליות". Use `SettingsGroup` + `NumberField` for any new setting.
- After changes: `npm run check` in `front/`, then `graphify update .` at the repo root.
