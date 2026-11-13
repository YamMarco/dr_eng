# Module G QA report

Scope: `content/g/g-1.ts` (18 reading lessons), `content/g/g-2.ts` (8 writing lessons), `quiz/g/index.ts` (5 exams). Graded twice: as a 5-point student trying to learn, and as a Bagrut teacher judging the material.

Spec check (Ministry papers 016582): reading 60 points, writing 40, essay 120-140 words. Exam texts here: 451-469 words, 9 questions, reading parts sum to 60. Matches.

Status: ✅ fixed · 🟡 partly fixed · ⏳ planned elsewhere · ⬜ open

## Grades

| Part | Student (before → now) | Teacher (before → now) |
|---|---|---|
| Reading lessons | 5.5 → 7 | 7 → 8 |
| Writing lessons | 6 → 7 | 5 → 7 |
| Exams | 8 → 8 | 8.5 → 9 |
| **Overall** | **6 → 7** | **7 → 8** |

**QA grade: 6.5 → 7.5 / 10.** What still holds it back: the option order (#1, shuffle planned), the LLM being off (#2 grades by keywords until it is on), and the untaught exam question types (#5).

## Findings

| # | Area | Finding | Status |
|---|---|---|---|
| 1 | Reading lessons | `passage-mcq` / `cloze-pick` never shuffle; correct answer = first option in 71/77 g-1 cases, every cloze-pick `[0]` | ⏳ shuffle planned |
| 2 | Reading lessons | Typed answers graded by keyword substring: valid paraphrases fail (`chang`, `home`), echoing the question passes (`safe`), stem grammar never checked | ✅ `passage-quiz` uses the LLM reading grader (`llmGrade` on section g-1; passage once, `answerHint` as expected answer, stem-continuation rule added to `grade-reading.md`, which exams share). Keywords stay as the fallback, now with `a\|b` alternatives; 15 weak keyword sets widened. **Live only once `LLM_ENABLED` is true** (`server/llm.ts`); until then the fallback grades |
| 3 | Reading lessons | No per-option feedback in any g-1 `passage-mcq` (~50 questions); the student never learns why an option is wrong | ✅ all 50 questions (200 options) have feedback: the right one quotes its evidence, a wrong one says why it fails. In `g-mc-eliminate` each wrong option is named by its elimination type (סותרת / לא כתוב / מוגזמת); in `g-by-to` grammar vs content errors; in `g-difference` the "same in both" traps |
| 4 | Reading lessons | Weak distractors (absolute / silly options); the longest hedged option is nearly always right | ⬜ |
| 5 | Reading lessons | Exam question types never taught: why the writer mentions X, best title, main purpose, writer's attitude | ⬜ |
| 6 | Reading lessons | Small: intro mentions "magnets" before they are taught; `g-question-words` quotes paragraph IV before it is shown; `g-names` asks for person/place but targets a University; `g-line-refs` round 1 has no line references; "Hebrew = 0" taught 4 times; "רמת בחינה" rounds use 60-100 word texts; dictionary use never taught | ⬜ |
| 7 | Writing lessons | Too thin for 40% of the grade; one full essay before the exams | 🟡 8 lessons now; two full essays before the exams (AI + timed unseen topic) |
| 8 | Writing lessons | The AI essay task repeats the prompt whose model essay the student just read twice (copy, not transfer); no unseen-topic essay | 🟡 new `g-w-timed-essay`: unseen topic (choosing school subjects), no model before writing, 40 min, the plan screen's model is a frame, not content. The AI essay itself is unchanged |
| 9 | Writing lessons | Missing: body-paragraph development, counter-argument, second conditional, rubric and length deductions | 🟡 new `g-w-body` (claim → explanation → example; counter-argument closes paragraph 3); rubric weights (8/10/16/6) and the length table in `g-w-timed-essay`; essay map mentions the counter-argument. Second conditional still not taught (exam models no longer use it) |
| 10 | Writing lessons | Templates lesson names 4 templates but only shows the master template's openers | ⬜ |
| 11 | Exams vs lessons | Model essays break the taught map: exam 2 has 5 paragraphs, exam 5 "partly agrees", exam 4 opens with a 52-word anecdote, all use the untaught second conditional | ✅ all 5: 4 paragraphs, 132-139 words, clear stance, first conditional only; counter-arguments sit at the end of paragraph 3 (exams 2-5); exam 4's intro is 2 sentences; exam 5 now disagrees |
| 12 | Exams | Exam 3 title feedback quotes "body clock", which is not in the passage | ⬜ |
| 13 | Exams | Single-answer MCQ correct = B in 6/8 | ⬜ |
| 14 | Exams | Weak grading-note key texts ("However", "this approach") | ⬜ |
| 15 | Writing (all modules) | Word-bank entries ending in punctuation (`First,`, `In conclusion,`) never counted: `usesWord` used `\b` after the comma | ✅ lookarounds instead of `\b` (`writingLint.ts`), test in `tests/writing-lint.test.ts` |
| 16 | i18n | New Hebrew strings (option feedback, 2 lessons, titles) have no Arabic yet; they show in Hebrew in the Arabic UI | ⬜ run `node scripts/content-i18n.mjs` |
