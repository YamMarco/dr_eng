# Module G QA report

**Scope:** `content/g/g-1.ts` (18 reading lessons), `content/g/g-2.ts` (8 writing lessons), `quiz/g/index.ts` (5 exams).
Graded twice: as a 5-point student trying to learn, and as a Bagrut teacher judging the material.

**Spec check** (Ministry papers 016582): reading 60 points, writing 40, essay 120-140 words.
Exam texts here: 451-469 words, 9 questions, reading parts sum to 60. Matches.

**Status marks:** ✅ fixed · 🟡 partly fixed · ⏳ planned elsewhere · ⬜ open

---

## Grades (before → now)

- **Reading lessons** - student 5.5 → 7 · teacher 7 → 8
- **Writing lessons** - student 6 → 7 · teacher 5 → 7
- **Exams** - student 8 → 8 · teacher 8.5 → 9
- **Overall** - student 6 → 7 · teacher 7 → 8

**QA grade: 6.5 → 7.5 / 10**

Still holding it back: option order (#1, shuffle planned), the LLM being off (#2 grades by keywords until it is on), untaught exam question types (#5).

---

## Reading lessons

### 1. Options never shuffle - ⏳ shuffle planned
`passage-mcq` / `cloze-pick` keep authored order. Correct answer = first option in 71/77 g-1 cases; every cloze-pick is `[0]`.

### 2. Typed answers graded by keyword - ✅
**Problem:** keyword substring match. Valid paraphrases fail (`chang`, `home`), echoing the question passes (`safe`), the stem's grammar is never checked.

**Fix:**
- `passage-quiz` uses the LLM reading grader (`llmGrade` on section g-1): passage sent once, `answerHint` as the expected answer.
- Stem-continuation rule added to `grade-reading.md` (exams share it).
- Keywords stay as the fallback, now with `a|b` alternatives; 15 weak keyword sets widened.
- **Live only once `LLM_ENABLED` is true** (`server/llm.ts`). Until then the fallback grades.

### 3. No per-option feedback - ✅
**Problem:** none of the ~50 g-1 `passage-mcq` questions said why an option is wrong.

**Fix:** all 50 questions (200 options) have feedback. The right option quotes its evidence; a wrong one says why it fails.
- `g-mc-eliminate`: each wrong option named by elimination type (סותרת / לא כתוב / מוגזמת)
- `g-by-to`: grammar error vs content error
- `g-difference`: the "same in both" traps

### 4. Weak distractors - ⬜
Absolute or silly options; the longest hedged option is nearly always right.

### 5. Exam question types never taught - ⬜
Why the writer mentions X, best title, main purpose, writer's attitude.

### 6. Small issues - ⬜
- Intro mentions "magnets" before they are taught
- `g-question-words` quotes paragraph IV before it is shown
- `g-names` asks for person/place but targets a University
- `g-line-refs` round 1 has no line references
- "Hebrew answer = 0" taught 4 times
- "רמת בחינה" rounds use 60-100 word texts
- Dictionary use never taught

---

## Writing lessons

### 7. Too thin for 40% of the grade - 🟡
Was 6 lessons and one full essay before the exams. Now 8 lessons and two full essays (AI + timed unseen topic).

### 8. Copying instead of transfer - 🟡
**Problem:** the AI essay task repeats the prompt whose model essay the student just read twice; no unseen-topic essay.

**Fix:** new `g-w-timed-essay`: unseen topic (choosing school subjects), no model before writing, 40 min. The plan screen's model is a frame, not content.
**Open:** the AI essay itself is unchanged.

### 9. Missing building blocks - 🟡
**Fixed:**
- New `g-w-body`: claim → explanation → example; counter-argument closes paragraph 3
- Rubric weights (8/10/16/6) and the length table in `g-w-timed-essay`
- Essay map mentions the counter-argument

**Open:** second conditional not taught (exam models no longer use it).

### 10. Templates lesson incomplete - ⬜
Names 4 templates but only shows the master template's openers.

---

## Exams

### 11. Model essays break the taught map - ✅
**Problem:** exam 2 had 5 paragraphs, exam 5 "partly agreed", exam 4 opened with a 52-word anecdote, all used the untaught second conditional.

**Fix (all 5):** 4 paragraphs, 132-139 words, clear stance, first conditional only. Counter-arguments at the end of paragraph 3 (exams 2-5). Exam 4's intro is 2 sentences; exam 5 now disagrees.

### 12. Wrong quote in exam 3 - ⬜
Title feedback quotes "body clock", which is not in the passage (`quiz/g/index.ts`, title question).

### 13. Answer-position pattern - ⬜
Single-answer MCQ correct = B in 6 of 8.

### 14. Weak grading notes - ⬜
Key texts like "However" and "this approach" don't help the grader.

---

## Cross-module

### 15. Word-bank entries with punctuation never counted - ✅
`usesWord` used `\b` after the comma, so `First,` / `In conclusion,` never matched.
Fixed with lookarounds (`writingLint.ts`); test in `tests/writing-lint.test.ts`.

### 16. Arabic missing for new text - ⬜
New Hebrew strings (option feedback, 2 lessons, titles) show in Hebrew in the Arabic UI.
Run `node scripts/content-i18n.mjs`.
