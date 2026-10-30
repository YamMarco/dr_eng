# Module E plan

Based on the winter 2026 exam (questionnaire 016471, version A, "new format"). Module E serves both the 4-unit and 5-unit tracks (`lib/curriculum.ts`). Built: the vocabulary deck (the 4 Ministry lists of Band III Core I, 856 items) and a reading section `e-1` (`lib/content/e/e-1.ts`): a copy of Module C's `c-1` (19 lessons, ids `e-...`), with its own progress, edited separately from C. Also built: 4 mock exams (below). Not built: the E-specific reading nodes below.

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
| E1 | Band III Core I (874 words, Ministry lists A-D) is the tested vocabulary; all four lists are tested. A real Part II also had words outside it (earlier bands: muscle, citizen, budget) | Decks cover Core I; add earlier-band words only if more exams show them |
| E2 | Is the question mix stable (4 topic MCQs + 5 completions)? | Check 2-3 more new-format exams |
| E3 | Does E assume Module C done? | Assume C; add a short "method" detour node for those who skipped it |

## Reading path (section `e-1`)

Today the copy of C's reading lessons. Plan for adapting it to E (about 6-8 nodes); uses the reading round pattern (`lesson-structure.md`) and the definition of a 10 (`module-c.md`).

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

- **One deck per Ministry list:** `lib/content/e/list-a.ts` .. `list-d.ts`, one `DeckWord` per entry, in the list's order, using the meaning the list gives. Grammar-only entries (modals, prepositions, pronouns, exclamations) are left out; a word listed twice in one list keeps one meaning. `pos` (verb / noun / adj / adv / chunk) matters because distractors must come from the same class, like the exam.
- **Ambiguity guard:** two items with near-synonym definitions in one list would make a set ambiguous. Write one definition to contain the other's headword (`probable`: "likely to be true"), so `clashes()` keeps them apart.
- Each list has its own progress and schedule (deck id `e-a` .. `e-d`). The words page lists them with progress and states all four are tested; the main button opens the started list with work today. Module-level numbers (home, module page, gateway) sum the lists in progress.
- **Leitner boxes 1-5, binary right/wrong.** The exam is binary; no easy/hard self-rating that kids would game. No SM-2/FSRS (YAGNI); swap only if real data shows Leitner is too coarse.
- **Scheduling is per word**, never per screen: screens are rebuilt each session from the word's box. Intervals 1, 3, 7, 14, 30 days. Right = up a box. Wrong = a lapse: the first drops one box, later ones drop to box 1; a miss is due tomorrow. A miss on a new word's first answer is not a lapse.
- **The box decides the screen**, difficulty rises as the word is learned:

| Box | Screen |
|---|---|
| new | `word-card`, Hebrew-meaning `mcq`, `spell-word` copy; then `match-pairs` EN-HE of the words met |
| 1 | `mcq`: word -> pick the Hebrew meaning |
| 2 | `mcq` honeycomb: example sentence with a blank -> pick the word (no clean blank: definition) |
| 3+ | `match-definitions` in sets of 3: the exam format, 6 items of one class / 3 definitions; leftovers and classes too small for 3 decoys: `mcq` definition -> pick the word |

- **Known** = box 4-5 (passed the exam format at least once). Learning = box 1-3.
- Graded: only screens with `targets`. For a new word only the meaning `mcq` counts; card, copy-spelling and `match-pairs` do not. A word answered twice in a session counts right only if both were. `match-definitions` grades each target separately; its decoys are not graded.
- **Printed like the exam** (`printed()`): `to` + verb, `a`/`an` + noun, adjectives and adverbs bare, phrasal chunks with `to` (`to mix up`), other chunks bare (`at least`). Exceptions sit on the word as `form` (uncountable nouns bare, `a union`). Spelling and fill-the-blank use the bare word.
- **Classes like the exam's sets** (`wordClass()`): verb, noun, adj, adv, phrasal chunk, other chunk. A set holds one class only, decoys included, so the printed `to`/`a` never gives the answer away. English `mcq` options also stay in the class unless it is too small.
- Distractors: from words already met (never a decoy before its card). Missed screens replay at the end of the session (`retryMissed`).
- Deck sessions never fail: no 80% gate, the result is the schedule. Leaving early saves what was answered.
- Per session: up to 15 due reviews (most overdue first), then up to 6 new words only if reviews leave room. Nothing due: "extra practice" on the soonest-due words. Sessions call `activity.recordToday()` so they count toward the weekly goal.
- **Shown as wins, never X/total:** the 850 stays hidden. Home, module page and list rows show "שלטתם ב-N" (a word is *won* at box 2+, `deckStats().won`), and the bar fills toward the next multiple of 50 (`nextMilestone`).
- Progress: localStorage `deck-progress`, synced to the account (`docs/platform.md`).
- Tests, no screenshots: scheduler box moves, lapses and due dates; session due-first order, new-word cap, same-`pos` distractors, `targets` aligned with `screens`; `match-definitions` per-target scoring.

## Mock exams

`quiz/e/index.ts`: `e-exam-1`..`e-exam-4`, original practice papers (not Ministry exams), generated by `front/scripts/module-e-import.ts` from `new/Module_E_Keyword_Feedback_Updated.zip` (papers + `Module_E_App_Keyword_Feedback.json`; tests in `tests/module-e-import.test.ts`). 75 minutes.

- Part I (70): one article (5 paragraphs, glossary on the `passage`) + 7 questions, as the papers have them: a tick-two topic MCQ (14), `By ___` x2 (16), then 8-point MCQs and completions. MCQs carry `optionFeedback` (the right option: explanation + evidence quote; wrong ones: their rejection) and `explanation` (keywords + the question's own tip). Completions are LLM-graded `writing-task`s: `modelAnswer`, `explanation`, and `gradingNotes` with both answer-key wordings ("any wording with the same meaning").
- Part II (30): 5 `match-definitions` sets, 6 points each, `feedback` per definition, `itemGlosses` (Hebrew) per item. Exam 1 keeps its source sets (some words outside Core I: budget, hire, put off...). The source repeated one set in exams 2-4, so theirs are drawn from the Core I decks (one class per set, no clashes, no word twice; seeded, reproducible).
- Practice and exam runs: see `docs/ux-principles.md` section 3.
- The question mix (7 questions) differs from the winter 2026 exam's 9 (decision E2 still open).

## Code prep still open

- `lessons/+page.svelte` shows the edit link and path only for module `c`.
- `editModel.svelte.ts` hardcodes `MODULE_ID = 'c'`; `edit-exam` defaults to `'c'`.
- E-only sections go in `content/e/e-<N>.ts`, registered in `content/index.ts`, with `modules: ['e']` in `sectionMeta.ts`.
- Once E-only nodes exist, add a per-node grades and open-issues section here, like `module-c.md`.
