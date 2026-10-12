# Module E plan

Written 2026-10-12 from the winter 2026 exam (questionnaire 016471, version A, "new format").
Status: plan only, nothing built. Module E serves both the 4-unit and the 5-unit tracks (`lib/curriculum.ts`).

## The exam

75 minutes, no dictionary.

| Part | Points | What |
|---|---|---|
| I - Reading | 70 | One article, about 400 words, 5 paragraphs (I-V), line numbers, a glossary of 4 underlined words. 9 questions, 7-8 points each |
| II - Vocabulary | 30 | 5 sets. Each set: 6 items, 3 English definitions, match 3 of the 6. 2 points per match |

Part I question mix (this exam):
- 4 MCQs "What are we told / do we learn in paragraph X?". The options are **topics** ("How he searches for old objects"), not facts. This is new: Module C does not teach it.
- 5 open answers tied to a paragraph or lines: "COMPLETE THE ANSWER" (`By ___`, `Because they want to ___`), "COMPLETE THE SENTENCE" (`They must ___`), and one "ANSWER: ___". Module C teaches these (c-l03, c-l10, c-l11).

Part II: each set is one word class - verbs (`to attach`), nouns (`criticism`), adjectives (`weird`), adverbs (`eventually`), chunks (`to get rid of`). English to English, no context. Pure word knowledge from a closed list.

## Shape: nodes + deck

- **Reading = a short node path.** One fixed method, learned once, so the C path model fits.
- **Vocabulary = a spaced-repetition deck.** Part II is a closed list of a few hundred items that must be *retained*. A node is "done forever" once completed; a word is not. The deck schedules each word by how well it is known.
- **Mock exams** combine both.

## Before building

| # | Decision | Default |
|---|---|---|
| E1 | The official Module E word list (Ministry). Without it the deck is guesswork | Get it; if none, build the list from 3-4 new-format exams + their band |
| E2 | Is the question mix stable (4 topic MCQs + 5 completions)? | Check 2-3 more new-format exams |
| E3 | Does E assume Module C done? (5-unit students may skip C) | Assume C; add one short "method" detour node for those who skipped it |
| E4 | Progress storage | localStorage now (like `lessonProgress`); Supabase table later |

## Part 1: Reading path (sections `e-1`, ~6-8 nodes)

Uses the C round pattern (docs/lesson-structure.md) and C's definition of done (docs/module-c-roadmap.md).

1. **Bridge** - the C method (keyword -> locate -> read that sentence) on an E-length text. A check, not a re-teach.
2. **Method detour** (optional, for students without C) - condensed c-l03.
3. **What are we told in paragraph X** - new skill: name the paragraph's topic in 3-4 words (who / how / why / what happened), then match it to an option. Distractors: a true detail that is not the topic, a topic from another paragraph, a "why" for a "how".
4. **Topic MCQs, exam level** - the same skill on full texts, all 5 paragraphs.
5. **Complete the answer / sentence from lines** - refresher of c-l11: continue the given opener (`By` -> -ing, `Because they want to` -> base verb, `They must` -> base verb).
6. **Glossary + time** - use the glossary instead of stopping; time split ~50 min reading / ~15 vocab / ~10 check.
7. **Mixed exam set** (timed).

Needs: a text pool of E-length articles (5 paragraphs, line numbers, 3-4 glossary words). Build it first, as C learned (roadmap D5).

## Part 2: Vocabulary deck (section `words`)

### Data - one list, single source

`lib/content/e/words.ts`:

```ts
type DeckWord = {
  id: string;            // 'attach'
  word: string;          // 'to attach' - as the exam prints it
  pos: 'verb' | 'noun' | 'adj' | 'adv' | 'chunk';
  defEn: string;         // exam-style English definition
  he: string;            // Hebrew meaning
  exampleEn?: string;    // one sentence, `**word**` bolded
  hookHe?: string;       // memory hook, as in word-card
};
```

`pos` matters: distractors must come from the same class, like the exam.

### Scheduler - pure, tiny, tested

`lib/deck/scheduler.ts`. Leitner boxes, binary right/wrong (the exam is binary; no "easy/hard" self-rating that kids would game).

```ts
type WordState = { box: number; due: string /* YYYY-MM-DD */; lapses: number };
const INTERVAL_DAYS = [0, 1, 3, 7, 14, 30];   // box 0..5
review(state, correct, today): WordState       // right -> box+1, wrong -> box 1 (due today), lapses+1
dueWords(states, today): string[]
```

No SM-2/FSRS (YAGNI). Swap later only if real data shows Leitner is too coarse.

### Store

`lib/deckProgress.svelte.ts`, same pattern as `lessonProgress.svelte.ts`: localStorage key `deck-progress`, `{ [moduleId]: { [wordId]: WordState } }`. Calls `activity.recordToday()` so sessions count toward the streak. Later: `word_progress (user_id, word_id, box, due, lapses)` in `content/schema.sql`.

### Session builder - words -> screens

`lib/deck/session.ts`: `buildSession(words, states, today) -> { screens: LessonScreen[]; targets: string[][] }`.
`targets[i]` = the word ids screen `i` tests. Kept beside the screens, not in the screen schema (the schema stays content-only).

- Picks: all due words (oldest first, cap ~15) + up to 5 new words (list order, grouped by `pos`).
- **The box decides the screen** - difficulty rises as the word is learned:

| Box | Screen | Existing? |
|---|---|---|
| new | `word-card` (word, Hebrew, definition, example) then `match-pairs` EN-HE | yes |
| 1 | `mcq` honeycomb: Hebrew -> pick the word (same-`pos` distractors) | yes |
| 2 | `mcq`: English definition -> pick the word | yes |
| 3+ | `match-definitions`: the exam format, 6 items / 3 definitions | **new** |
| 4+ (some) | `spell-word` listen | yes |

- Distractors: same `pos`, words the student has already seen (rule from C: never a decoy before its card).
- Missed words are replayed at the end of the session (box drops to 1, due today).

### Plumbing

1. **Per-screen result from the runner.** `LessonRunner` takes `screens` already, but only reports round pass/fail. Add one optional prop `onScreenResult(index, correct)`; the deck page maps `index` -> `targets[index]` -> `review()`. Lessons ignore it.
   - `match-definitions` has 3 targets: report per target (`correct: boolean[]`) so one wrong match does not fail the other two words.
2. **Deck sessions never fail.** No 80% gate - the result is the schedule. The end screen shows "learned / to review tomorrow".
3. **New screen type `match-definitions`** (the four steps in lesson-structure.md "Adding a screen type"): `items: string[6]`, `definitions: { text, itemIndex }[3]`. Also used by authored nodes and the mock, so it is not deck-only.
4. **Deck page** in module E's `words` section: words due today, a start button, box distribution (new / learning / known), daily new-word limit. Hebrew UI.

### Tests (no screenshots)

- `scheduler.ts`: box moves, intervals, wrong -> box 1, due calculation across days.
- `session.ts`: due-first order, new-word cap, distractors same `pos` and already seen, `targets` aligned with `screens`.
- `match-definitions`: per-target scoring.

## Part 3: Mock exams (section `e-exam`)

One article + 9 questions + 5 `match-definitions` sets, timed (75 min). Vocab sets drawn from `words.ts`. Uses the existing exam route (`routes/unit/[unitId]/module/[moduleId]/exam`).

## Code prep (before content)

- `lessons/+page.svelte:70` returns no nodes unless the module is `c`.
- `sectionMeta.ts` is one global list - needs a `module` field (or one list per module).
- `editModel.svelte.ts:16` hardcodes `MODULE_ID = 'c'`; `edit-exam` defaults to `'c'`.
- `content/e/e-<N>.ts` registered in `content/index.ts`.
- Update agents.md, docs/lesson-structure.md and add docs/module-e-audit.md.

## Order

1. E1-E4 decisions; word list in `words.ts`.
2. Code prep (module-aware path, sectionMeta, editor).
3. Deck: scheduler + store + tests -> `match-definitions` -> runner hook -> session builder -> deck page.
4. Text pool, then reading nodes 1-7.
5. Mocks.

Deck before reading: it is the new engineering, it is 30 points of pure retention (the earlier students start, the more it pays), and reading leans on C.
