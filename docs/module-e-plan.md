# Module E plan

Based on the winter 2026 exam (questionnaire 016471, version A, "new format"). Module E serves both the 4-unit and 5-unit tracks (`lib/curriculum.ts`). Built: the vocabulary deck (List A, 180 items) and a reading path that shows Module C's `c-1` with shared progress. Not built: E-only reading nodes, mock exams.

## The exam

75 minutes, no dictionary.

| Part | Points | What |
|---|---|---|
| I - Reading | 70 | One article, about 400 words, 5 paragraphs (I-V), line numbers, a glossary of 4 underlined words. 9 questions, 7-8 points each |
| II - Vocabulary | 30 | 5 sets. Each set: 6 items, 3 English definitions, match 3 of the 6. 2 points per match |

Part I mix: 4 MCQs "What are we told / do we learn in paragraph X?" whose options are **topics** ("How he searches for old objects"), not facts (new, Module C does not teach it); 5 open answers tied to a paragraph or lines: "COMPLETE THE ANSWER" (`By ___`, `Because they want to ___`), "COMPLETE THE SENTENCE" (`They must ___`), one "ANSWER: ___" (Module C teaches these: c-l03, c-l10, c-l11).

Part II: each set is one word class (verbs `to attach`, nouns `criticism`, adjectives `weird`, adverbs `eventually`, chunks `to get rid of`). English to English, no context. Pure word knowledge from a closed list.

## Shape

- **Reading = a short node path.** One fixed method learned once, so the C path model fits.
- **Vocabulary = a spaced-repetition deck.** Part II is a closed list that must be *retained*; a node is "done forever", a word is not.
- **Mock exams** combine both.
- Deck before reading: it is the new engineering, it is 30 points of pure retention, and reading leans on C.

## Open decisions

| # | Decision | Default |
|---|---|---|
| E1 | The official Module E word list (Ministry); without it the deck is guesswork | Get it; if none, build from 3-4 new-format exams + their band |
| E2 | Is the question mix stable (4 topic MCQs + 5 completions)? | Check 2-3 more new-format exams |
| E3 | Does E assume Module C done? | Assume C; add a short "method" detour node for those who skipped it |

## Reading path (section `e-1`, about 6-8 nodes)

Uses the reading round pattern (`lesson-structure.md`) and the definition of a 10 (`module-c-audit.md`).

1. **Bridge:** the C method (keyword -> locate -> read that sentence) on an E-length text. A check, not a re-teach.
2. **Method detour** (optional): condensed c-l03.
3. **What are we told in paragraph X:** new skill. Name the paragraph's topic in 3-4 words (who / how / why / what happened), then match it to an option. Distractors: a true detail that is not the topic, a topic from another paragraph, a "why" for a "how".
4. **Topic MCQs, exam level:** the same skill on full texts, all 5 paragraphs.
5. **Complete the answer / sentence from lines:** continue the given opener (`By` -> -ing, `Because they want to` / `They must` -> base verb).
6. **Glossary + time:** use the glossary instead of stopping; about 50 min reading / 15 vocab / 10 check.
7. **Mixed exam set** (timed).

Needs first: a text pool of E-length articles (5 paragraphs, line numbers, 3-4 glossary words).

## Vocabulary deck (section `words`)

Implementation and file map: `lesson-structure.md` "Word deck". Design decisions:

- **Single source:** `lib/content/e/words.ts`, one `DeckWord` per item. `pos` (verb / noun / adj / adv / chunk) matters because distractors must come from the same class, like the exam.
- **Leitner boxes, binary right/wrong.** The exam is binary; no easy/hard self-rating that kids would game. No SM-2/FSRS (YAGNI); swap only if real data shows Leitner is too coarse.
- **The box decides the screen**, difficulty rises as the word is learned:

| Box | Screen |
|---|---|
| new | `word-card` then `match-pairs` EN-HE |
| 1 | `mcq` honeycomb: Hebrew -> pick the word (same-`pos` distractors) |
| 2 | `mcq`: English definition -> pick the word |
| 3+ | `match-definitions`: the exam format, 6 items / 3 definitions |
| 4+ (some) | `spell-word` listen |

- Distractors: same `pos`, words the student has already seen (never a decoy before its card). Missed words replay at the end of the session (box drops to 1, due today).
- Deck sessions never fail: no 80% gate, the result is the schedule. The end screen shows "learned / to review tomorrow". `match-definitions` reports per target, so one wrong match does not fail the other two words.
- The deck page lists words due today, a start button, box distribution (new / learning / known) and a daily new-word limit. Sessions call `activity.recordToday()` so they count toward the weekly goal.
- Later: `word_progress (user_id, word_id, box, due, lapses)` in `content/schema.sql`; progress is localStorage until then.
- Tests, no screenshots: scheduler box moves and due dates; session due-first order, new-word cap, same-`pos` distractors, `targets` aligned with `screens`; `match-definitions` per-target scoring.

## Mock exams (section `e-exam`)

One article + 9 questions + 5 `match-definitions` sets, timed (75 min). Vocab sets drawn from `words.ts`. Uses the existing exam route (`routes/app/unit/[unitId]/module/[moduleId]/exam`).

## Code prep still open

- `lessons/+page.svelte` shows the edit link and path only for module `c`.
- `editModel.svelte.ts` hardcodes `MODULE_ID = 'c'`; `edit-exam` defaults to `'c'`.
- E-only sections go in `content/e/e-<N>.ts`, registered in `content/index.ts`, with `modules: ['e']` in `sectionMeta.ts`.
- Add `docs/module-e-audit.md` once E-only nodes exist.
