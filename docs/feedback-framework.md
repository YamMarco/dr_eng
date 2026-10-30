# Submit → feedback framework

One loop for every free-text submit (lesson writing tasks, exam open answers and the exam essay):

```
photo? ─► OCR ─► student reviews text ─┐
                                       ▼
typed text ───────────────────────► Layer 1 (local, free, instant)
                                       │ gate fails ─► outright "wrong", no API call
                                       │ passes     ─► keeps its marks (typos…)
                                       ▼
                     typo-corrected copy ─► Layer 2 (LLM, /api/grade)
                                       ▼
                        L1 marks + L2 marks ─► Feedback ─► FeedbackView
```

## Rules (Layer 1 settings)

`RuleSet`: `llmGrade`, `llmFix`, `maxTypos`, `capitalIsError`, `autoCheck`. Levels **module → section → lesson → screen**; the nearest level that sets a field wins (resolved when read, never copied down).

- Module / section / lesson values: `front/src/lib/content/rules.json`. Screen values: the `writing-task` fields themselves.
- Editor: `/edit` → **⚙️ כללי בדיקה** (pick module / section / lesson), and on each writing-task screen the **כללי בדיקה** group. Unset rows show the inherited value.
- **⬇ החלה על כל מה שמתחת** clears the fields this level sets from every level and screen below, except those with `rulesLock` (🔒). Saved by the one save button.

## Gates (no API call, outright wrong)

Empty, not English, valid words under `minWords` (paragraph tasks), an unresolved OCR `[?]`, sure mechanics slips over `maxTypos`, word-bank minimum missed. `acceptedAnswers` tasks never reach the LLM (exact-match check, as before).

## One attempt

A lesson task is answered once, like every other question. Wrong → the student moves on and the runner replays the screen at the end of the lesson. LLM unavailable ("partial") → local marks only, nothing recorded, so it is replayed too.

## Layer 2

- Client sends `{ kind, question, text (typo-corrected), notes?, mechanics? }`, or for reading `{ kind, passage, items: [{ id, question, paragraph?, points, text, notes? }] }`; anonymous, no user info. Per-IP in-memory rate limit (30 / 5 min); per-student auth is still needed before a public launch.
- Kinds and roles: `lesson` → `grade-short` (pass/fail), `reading` → `grade-reading` (exam open question, 0..points), `essay` → `grade-essay` (official rubric), COBE recordings → `grade-speaking` (`/api/speak`, audio in), COBE chat turns → `chat-speaking` (`/api/chat-speak`; see `docs/material/modules/cobe.md`). Models per role, in fallback order, in `server/llmModels.ts`: Vercel AI Gateway (`AI_GATEWAY_API_KEY`) first, then Gemini direct (`GEMINI_API_KEY`, its `google/` models) as the safety net; a gateway failure moves on, a direct one only on 429/5xx; every model overloaded → one more round after 2 s. Workers call `chatJson` (`llm.ts`): the reply is zod-validated, and a cut-off, malformed or off-schema reply gets one retry. Every LLM endpoint is wrapped in `llmRoute` (`server/llmRoute.ts`): configured check, `guardLlm`, body validation (`jsonBody`), unexpected errors → logged 502.
- The LLM returns only tags + quoted spans, no prose: `{"pass": bool, "marks": [{"span", "tag", "nth", "fix"}]}`. `fix` only on `wrong-word` / `word-choice` (the word meant: span shown struck through with the fix above it) and `missing-word` (span = word after the gap; the fix is ghosted in before it); it becomes the mark's `suggestions`. The `llmFix` rule (default on) turns it off per level: the request sends `fixes: false`, the user message adds `FIXES: off`, and the server drops any `fix` anyway (lessons only; exams always on). Whole-answer tags (`off-topic`, `incomplete`) have an empty span and show as a general line. A fatal tag forces fail. Spans are mapped back onto the student's original text.
- Tags: `feedback/tags.ts` (ids), the prompt files (English descriptions), `i18n` `feedback.tag` (Hebrew). `tests/feedback.test.ts` fails if they drift apart.

## Exams

Graded on final submit in **2 calls, in parallel**: one for every open reading answer of the passage (the passage sent once, paragraphs labelled [I], [II]...), one for the essay. Stored with the attempt (`QuizAttempt.grades`) so the report never re-grades.

- **Open reading questions** (`writing-task` without `minWords`): like a lesson task, but each answer carries its `paragraphRef` and `points`; the reply has a score out of `points` per answer id. Spelling/language mistakes cost nothing unless the meaning is lost. A full score drops contradicting content tags.
- **Essay** (`writing-task` with `minWords`): the official Module C rubric (`content/rubrics/module-c-writing.json`, written out in `grade-essay.md`). The LLM scores content /10, vocabulary /8, language /8 and mechanics /4 (from the software's spelling / punctuation / run-on counts). Code then applies the length table, starting with Content (rubric rule 5). Under 25 valid words, empty or not English = 0 with no call.
- **Score**: `applyGrades` adds them to the auto score; the pass threshold runs on the whole exam (/100). A failed call counts 0, and the report offers **בדיקה חוזרת**.
- **Report**: total, per part, and every open answer with its score, the answer highlighted in place, and the essay's criteria + length deduction.

## Tuning prompts in Gemini's web UI (AI Studio)

1. Open `front/src/lib/server/prompts/grade-short.md` (lessons), `grade-reading.md` (exam open questions) or `grade-essay.md` (exam essay) and paste it **as-is** into _System instructions_. The file is exactly what the app sends.
2. Set the model to the role's (see `server/llm.ts`), output format JSON.
3. User message, same shape the app sends (reading: `PASSAGE` once, then an `ANSWER q1` block per answer with `QUESTION`, `PARAGRAPH`, `POINTS`, `STUDENT ANSWER`; essay adds `MECHANICS COUNT: spelling 2, punctuation/capitalization 1, run-on sentences 0`; `GET /api/grade?kind=reading|essay` on the dev server prints a full sample):

```
QUESTION:
"""
Should students wear school uniforms? Give your opinion and one reason.
"""

EDITOR NOTES:
"""
(optional - the screen's gradingNotes)
"""

STUDENT ANSWER:
"""
I think students should wear uniforms because it make everyone equal.
"""
```

4. When a change works, paste it back into the `.md` file. Adding or renaming a tag also means `tags.ts` and `he.ts` (the test tells you).

## Where things are

| piece                              | file                                                                                                                  |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| types, tags, cascade, merge (pure) | `front/src/lib/feedback/`                                                                                             |
| Layer 1 + client loop              | `feedback/layer1.ts`, `feedback/grade.ts`                                                                             |
| Result UI                          | `feedback/FeedbackView.svelte`; Hebrew in `i18n` `feedback.*`                                                         |
| Layer 2 server                     | `server/grade.ts`, `routes/api/grade/+server.ts`                                                                      |
| Prompts                            | `server/prompts/grade-short.md`, `grade-reading.md`, `grade-essay.md`, `grade-speaking.md`, `chat-speaking.md`                            |
| Rubric                             | `content/rubrics/module-c-writing.json` (+ `index.ts`)                                                                |
| Exam grading                       | `feedback/gradeExam.ts`, `feedback/exam.ts` (pure), `quiz/scoring.ts` `applyGrades`, `quiz/ExamAnswerReview.svelte`   |
| Rule levels above the screen       | `content/rules.json`, `content/rules.ts`                                                                              |
| Rules editor                       | `content-edit/RulesPanel.svelte`, `fields/RuleFields.svelte`, `rulesStore.svelte.ts`, `routes/api/content-edit/rules` |
| Per-screen fields                  | `llmGrade`, `llmFix`, `maxTypos`, `capitalIsError`, `autoCheck`, `rulesLock`, `gradingNotes` on `writing-task`        |

Debug showcase of every layer-2 output (all tags, verdict lines, exam report; static samples through the real components): the flask button on the lessons page (`writing-lab/WritingLab.svelte`). Add a sample there when adding a tag.

## Next

1. Per-student auth + a durable rate limit before `/api/grade` is public.
2. Calibration on real answers (AI Studio), especially essay scores against teacher marks.
