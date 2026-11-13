# Module G QA report

Scope: `content/g/g-1.ts` (18 reading lessons), `content/g/g-2.ts` (writing lessons), `quiz/g/index.ts` (5 exams). Graded twice: as a 5-point student trying to learn, and as a Bagrut teacher judging the material.

Spec check (Ministry papers 016582): reading 60 points, writing 40, essay 120-140 words. Exam texts here: 451-469 words, 9 questions, reading parts sum to 60. Matches.

Status: ✅ fixed · ⏳ planned elsewhere · ⬜ open

## Grades

| Part | Student | Teacher |
|---|---|---|
| Reading lessons | 5.5 | 7 |
| Writing lessons | 6 | 5 |
| Exams | 8 | 8.5 |
| **Overall** | **6** | **7** |

**QA grade: 6.5 / 10** (before fixes).

## Findings

| # | Area | Finding | Status |
|---|---|---|---|
| 1 | Reading lessons | `passage-mcq` / `cloze-pick` never shuffle; correct answer = first option in 71/77 g-1 cases, every cloze-pick `[0]` | ⏳ shuffle planned |
| 2 | Reading lessons | Typed answers graded by keyword substring: valid paraphrases fail (`chang`, `home`), echoing the question passes (`safe`), stem grammar never checked | ✅ `passage-quiz` uses the LLM reading grader (`llmGrade` on section g-1; passage once, `answerHint` as expected answer, stem-continuation rule added to `grade-reading.md`, which exams share). Keywords stay as the fallback, now with `a\|b` alternatives; 15 weak keyword sets widened. **Live only once `LLM_ENABLED` is true** (`server/llm.ts`); until then the fallback grades |
| 3 | Reading lessons | No per-option feedback in any g-1 `passage-mcq` (~50 questions); the student never learns why an option is wrong | ✅ all 50 questions (200 options) have feedback: the right one quotes its evidence, a wrong one says why it fails. In `g-mc-eliminate` each wrong option is named by its elimination type (סותרת / לא כתוב / מוגזמת); in `g-by-to` grammar vs content errors; in `g-difference` the "same in both" traps |
| 4 | Reading lessons | Weak distractors (absolute / silly options); the longest hedged option is nearly always right | ⬜ |
| 5 | Reading lessons | Exam question types never taught: why the writer mentions X, best title, main purpose, writer's attitude | ⬜ |
| 6 | Reading lessons | Small: intro mentions "magnets" before they are taught; `g-question-words` quotes paragraph IV before it is shown; `g-names` asks for person/place but targets a University; `g-line-refs` round 1 has no line references; "Hebrew = 0" taught 4 times; "רמת בחינה" rounds use 60-100 word texts; dictionary use never taught | ⬜ |
| 7 | Writing lessons | Too thin for 40% of the grade; one full essay before the exams | ⬜ |
| 8 | Writing lessons | The AI essay task repeats the prompt whose model essay the student just read twice (copy, not transfer); no unseen-topic essay | ⬜ |
| 9 | Writing lessons | Missing: body-paragraph development, counter-argument, second conditional, rubric and length deductions | ⬜ |
| 10 | Writing lessons | Templates lesson names 4 templates but only shows the master template's openers | ⬜ |
| 11 | Exams vs lessons | Model essays break the taught map: exam 2 has 5 paragraphs, exam 5 "partly agrees", exam 4 opens with a 52-word anecdote, all use the untaught second conditional | ⬜ |
| 12 | Exams | Exam 3 title feedback quotes "body clock", which is not in the passage | ⬜ |
| 13 | Exams | Single-answer MCQ correct = B in 6/8 | ⬜ |
| 14 | Exams | Weak grading-note key texts ("However", "this approach") | ⬜ |
