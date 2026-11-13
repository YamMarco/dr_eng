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

## Open, by priority

1. **#5** teach the 4 untaught exam question types (biggest gap for students)
2. **#12** wrong quote in exam 3 (a factual error, one line)
3. **#13** exam answer positions (B in 7 of 9)
4. **#16** Arabic for the new text (run the i18n script)
5. **#14** grading notes in exams 1-2
6. **#9 / #10 / #8** writing extras: second conditional, the 4 templates, AI essay transfer

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
Exams 2-5 ask them (mention X: exams 2 and 4, main purpose: 2, best title: 3, attitude: 5). No g-1 lesson practices them, so students meet them first in the exam.
**Suggested fix:** one lesson (or a round in `g-mc-eliminate`) per type, each with the trap: a true detail that is too narrow for a title or purpose.

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
`g-exam-3` ("Why Teenagers Can't Wake Up"): the best-title feedback (`quiz/g/index.ts` ~line 596) quotes "body clock", but the passage says "biology" ("more to do with biology than with character"). Quote that line instead.

### 13. Answer-position pattern - ⬜
Single-answer exam MCQs: correct = B in 7 of 9 (A in the other 2). Exams keep authored order (a fixed paper), so the lesson shuffle (#1) doesn't help here; reorder the options in the content.

### 14. Weak grading notes - ⬜
Key texts that don't locate the answer: `"this approach"` (exam 1, ~line 168) and `"However"` (exam 2, ~line 299). Quote the sentence that holds the answer.

---

## Cross-module

### 15. Word-bank entries with punctuation never counted - ✅
`usesWord` used `\b` after the comma, so `First,` / `In conclusion,` never matched.
Fixed with lookarounds (`writingLint.ts`); test in `tests/writing-lint.test.ts`.

### 16. Arabic missing for new text - ⬜
New Hebrew strings (option feedback, 2 lessons, titles, the "שאלות בסגנון בחינה" opener title, the dictionary card) show in Hebrew in the Arabic UI. `titles.ar.ts` has no entry for `g-w-body` / `g-w-timed-essay`.
Run `node scripts/content-i18n.mjs` (generated, not hand-written).
