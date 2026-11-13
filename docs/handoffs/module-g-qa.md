# Module G QA report

**Scope:** `content/g/g-1.ts` (18 reading lessons), `content/g/g-2.ts` (8 writing lessons), `quiz/g/index.ts` (5 exams).
Graded twice: as a 5-point student trying to learn, and as a Bagrut teacher judging the material.

**Spec check** (Ministry papers 016582): reading 60 points, writing 40, essay 120-140 words.
Exam texts here: 451-469 words, 9 questions, reading parts sum to 60. Matches.

**Status marks:** ✅ fixed · 🟡 partly fixed · ⬜ open

---

## Grades (before → now)

- **Reading lessons** - student 5.5 → 8 · teacher 7 → 8.5
- **Writing lessons** - student 6 → 7 · teacher 5 → 7
- **Exams** - student 8 → 8 · teacher 8.5 → 9
- **Overall** - student 6 → 8 · teacher 7 → 8.5

**QA grade: 6.5 → 8.5 / 10**

Still holding it back: the LLM being off (#2 grades by keywords until it is on), untaught exam question types (#5).

---

## Reading lessons

### 1. Options never shuffle - ✅
**Problem:** `passage-mcq` / `cloze-pick` kept authored order; correct = first option in 71/77 g-1 cases, every cloze-pick `[0]`.

**Fix:** both now shuffle in lessons like `mcq` (shared `optionOrder` in `lesson-screens/shuffle.ts`); exams keep authored order.

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

### 4. Weak distractors - ✅
**Problem:** absolute or silly options (cancelled, paid, cafés, main roads); the longest hedged option was nearly always right.

**Fix:** 35 wrong options replaced, each with new feedback. The new ones tempt:
- A real detail from the text that answers a different question (technology changing fast, twenty cities asking, 60% participation)
- One speaker's opinion offered as the shared one (two-opinions lessons)
- Swapped roles (residents vs professionals, juniors teaching vs learning)
- Plausible but unstated ideas (remote workers feel lonely, visitors come more often)

Some wrong options are now as long as the right one; options now shuffle (#1).

### 5. Exam question types never taught - ⬜
Why the writer mentions X, best title, main purpose, writer's attitude.

### 6. Small issues - ✅
- Intro no longer mentions "magnets" before they are taught
- `g-question-words`: the imply question now shows Levy's quote itself
- `g-names` instruction: person, organization or place
- `g-line-refs` round 1: new line-reference passage (2 questions); the traps are true details from the wrong lines
- "Hebrew = 0": the repeat in `g-line-refs` removed (an answer that's true but doesn't answer the question took its place); now taught in the intro and `g-open-answer` only
- The 17 short-text rounds are now titled "שאלות בסגנון בחינה"; only `g-final` (full-length texts) is "רמת בחינה"
- Dictionary use: a card + a question in `g-time` (look up only words the answer depends on)

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
New Hebrew strings (option feedback, 2 lessons, titles, the "שאלות בסגנון בחינה" opener title, the dictionary card) show in Hebrew in the Arabic UI.
Run `node scripts/content-i18n.mjs`.
