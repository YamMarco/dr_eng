# Lesson structure — quick reference

Read this instead of re-reading the source when adding or editing module C content.

## Cascade

`unit → module → section → lesson (= one path node) → round → screen`

Material code `4.c.1.2` = unit 4 · module c · section 1 · lesson 2. Node labels show `module.section.lesson` (`c.1.2`).

## Where things live

| file (under `front/src/`) | role |
| --- | --- |
| `lib/program/index.ts` | **live roster.** Section list → `programSectionMeta` (nav) + `programContent` (`c-{id}` → `SectionContent`). Derives x/y and prerequisites. |
| `lib/program/s01.ts`, `s02.ts`, … | one file per section — teaching content only |
| `lib/program/builders.ts` | screen builders — the authoring API |
| `lib/program/texts.ts` | source passages, verbatim, deliberately reused across sections |
| `lib/lesson-screens/types.ts` | `LessonScreen` union + `isScreenEmpty()` + `countQuestions()` |
| `lib/lesson-screens/registry.ts` | screen type → component |
| `lib/lesson-screens/LessonRunner.svelte` | plays one round |
| `lib/sections.ts` | `getSections(moduleId)` → serves `programSectionMeta` |
| `lib/sectionContent.ts` | `Lesson` / `SectionContent` types, `getRounds()`; `getSectionContent()` serves `programContent` |
| `lib/lessonProgress.svelte.ts` | localStorage progress (rounds done per lesson) |
| `routes/unit/[unitId]/module/[moduleId]/lessons/+page.svelte` | the path canvas |
| `lib/vocabLesson.ts` | `vocabRounds()` — a 3-round vocab lesson from word specs |
| `lib/markText.ts` | `markTargets(text, phrases)` → token indices for `mark-all` |

**Archived, not served** (kept for reference — don't extend): `lib/vocabSections.ts`, `archivedContentBySection` + `archived*Section` in `sectionContent.ts`, `archived*ModuleCSections` in `sections.ts`.

## Authoring a section

A section file exports a `ProgramSection`:

```ts
{ id, titleEn, titleHe, intro?: { greeting, goal? }, lessons: ProgramLesson[] }
```

`ProgramLesson = { id, titleHe, screens?, rounds?, code? }` — **no x/y, no prerequisites**. `program/index.ts` derives them:

- `x` cycles `[0, 70, 100, 70, 0, -70, -100, -70]`; `y = 120 + row * 120`, row running across the whole programme
- each lesson's prerequisite = the previous lesson in declaration order (one straight chain)
- `code` defaults to the lesson's 1-based position in its section; set it for side-by-side nodes (`'2a'`, `'2b'`)

Register it: import in `program/index.ts` and add to `const sections`.

Use `screens` for a single round, `rounds` for several (round 1 unlocks the path; later rounds are optional extra practice).

## Builders

| builder | produces |
| --- | --- |
| `rule(text)` | preface — the rule card that opens a node |
| `takeaway(title, lines)` | summary — the closing card |
| `steps(list)` | steps |
| `mcqs(items)` | `McqScreen[]`, correct-answer slot rotated per item |
| `classify(question, categories, items)` | one MCQ per item, categories as the options |
| `mark(spec)` | mark-all; `targets` → indices via `markTargets`; optional `wordBank`, `timerKey` |
| `markWord(sentence, word)` | mark-word |
| `gap(text, questions)` | passage-quiz (typed answer, keyword-matched) |
| `timed(label, text, timerKey, items)` | `[timed-passage, time-result]` |
| `write(prompt, rubric, wordBank, minSentences, minWordsUsed)` | `[summary, writing-task]` |
| `preview(intro, prompts)` | question-preview |
| `vocabRounds(intro, words)` *(vocabLesson.ts)* | 3 rounds: meaning MCQ → cloze MCQ → in-context MCQ |

```ts
McqItem   = { prompt, answer, wrong: string[] }
MarkSpec  = { instruction, text, targets: string[], wordBank?, timerKey? }
VocabWord = { en, he, heWrong: string[], cloze, context }   // cloze distractors auto-drawn from sibling words
```

## Screen types

| type | fields | scored |
| --- | --- | --- |
| `preface` | `text`, `dir?` | — |
| `steps` | `steps[]` | — |
| `summary` | `title`, `lines[]` | — |
| `word-card` | `word`, `translationHe?`, `imageAlt?` | — |
| `question-preview` | `intro`, `prompts[]` | — |
| `timed-reading` | `label`, `text`, `timerKey` | — |
| `time-result` | `label`, `timerKey` | — |
| `time-comparison` | `aLabel`, `aKey`, `bLabel`, `bKey`, `fasterMessage`, `tieMessage` | — |
| `mcq` | `prompt`, `options[]`, `correctIndex` | 1 |
| `mark-word` | `sentence`, `correctWordIndex`, `dir?` | 1 |
| `mark-all` | `instruction`, `text`, `correctIndices[]`, `dir?`, `wordBank?`, `timerKey?` | 1 |
| `spell-word` | `word`, `mode: 'copy' \| 'listen'` | 1 |
| `writing-task` | `prompt`, `wordBank[]`, `minSentences`, `minWordsUsed` | 1 |
| `timed-passage` | `label`, `text`, `timerKey`, `questions[{prompt, options, correctIndex}]` | n |
| `passage-quiz` | `text`, `questions[{prompt, keywords[], answerHint, points?}]` | n |

`mark-all` is scored leniently: pass on ≥70% of targets found with ≤1 stray tap. `passage-quiz` marks correct when every keyword appears in the typed answer — keep keywords to content words, and avoid numbers (`"2,000"` vs `"2000"` won't match).

## Runner rules

- one `LessonRunner` per **round**, remounted each time
- screens that fail `isScreenEmpty()` are skipped, not shown blank
- score denominator is fixed upfront from `countQuestions()` — the badge reads 1/3, 1/3, 2/3
- pass = ≥80% correct; a round with 0 scored questions always passes
- timers write elapsed ms into a per-round session bag keyed by `timerKey`; `time-result` / `time-comparison` read it back

## Node / path rules

- node = lesson. Unlocks when every id in `prerequisites` has round 1 done
- a lesson with no content in any round renders as a permanently locked node
- "big" node (80px vs 64px) when no round has a scored question; `big` overrides
- canvas is 400px wide; `x` is an offset from centre, `y` grows downward
- label shows `titleHe`, the start / next-round button, and the material code

## Adding a screen type

1. shape in `types.ts` → add to the `LessonScreen` union → add cases to `isScreenEmpty()` and `countQuestions()`
2. component in `lesson-screens/`: props `{ screen, onAdvance, disabled = $bindable(), label = $bindable() }`, and `export function primaryAction()`
3. register in `registry.ts`
4. badge string in `i18n/locales/he.ts` under `exerciseKind`

## Conventions

- all UI chrome is Hebrew, in `i18n/locales/he.ts`; `ar.ts` is a partial override that falls back to Hebrew
- teaching content (passages, prompts, options) stays inline in section files / `texts.ts` — never i18n
- lesson ids are globally unique within a module; convention `s{section}-l{n}`
- after changes: `npm run check` in `front/`, then `graphify update .` at the repo root
