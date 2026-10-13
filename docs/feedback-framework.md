# Submit → feedback framework

Status 2026-10-13: lessons path live against Gemini; rule cascade with an editor panel. Exams not wired yet.

One loop for every free-text submit (lesson writing now, exam essays next):

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

`RuleSet`: `llmGrade`, `maxTypos`, `capitalIsError`, `autoCheck`. Levels **module → section → lesson → screen**; the nearest level that sets a field wins (resolved when read, never copied down).

- Module / section / lesson values: `front/src/lib/content/rules.json`. Screen values: the `writing-task` fields themselves.
- Editor: `/edit` → **⚙️ כללי בדיקה** (pick module / section / lesson), and on each writing-task screen the **כללי בדיקה** group. Unset rows show the inherited value.
- **⬇ החלה על כל מה שמתחת** clears the fields this level sets from every level and screen below, except those with `rulesLock` (🔒). Saved by the one save button.

## Gates (no API call, outright wrong)

Empty, not English, valid words under `minWords` (paragraph tasks), an unresolved OCR `[?]`, sure mechanics slips over `maxTypos`, word-bank minimum missed. `acceptedAnswers` tasks never reach the LLM (exact-match check, as before).

## One attempt

A lesson task is answered once, like every other question. Wrong → the student moves on and the runner replays the screen at the end of the lesson. LLM unavailable ("partial") → local marks only, nothing recorded, so it is replayed too.

## Layer 2

- Client sends `{ kind, question, text (typo-corrected), notes? }`; anonymous, no user info. Per-IP in-memory rate limit (20 / 5 min); per-student auth is still needed before a public launch.
- Roles: lesson → `grade-short` (Gemini flash-lite), exam → `grade-essay` (Gemini flash). Direct Gemini via `GEMINI_API_KEY` in `front/.env.local` when no gateway is set.
- The LLM returns only tags + quoted spans, no prose: `{"pass": bool, "marks": [{"span", "tag", "nth"}]}`. Whole-answer tags (`off-topic`, `incomplete`) have an empty span and show as a general line. A fatal tag forces fail. Spans are mapped back onto the student's original text.
- Tags: `feedback/tags.ts` (ids), the prompt files (English descriptions), `i18n` `feedback.tag` (Hebrew). `tests/feedback.test.ts` fails if they drift apart.
- Measured 2026-10-13: ~500 input / 10-140 output tokens per lesson answer.

## Tuning prompts in Gemini's web UI (AI Studio)

1. Open `front/src/lib/server/prompts/grade-short.md` (lessons) or `grade-essay.md` (exams) and paste it **as-is** into _System instructions_. The file is exactly what the app sends.
2. Set the model to the role's (see `server/llm.ts`), output format JSON.
3. User message, same shape the app sends:

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
| Prompts                            | `server/prompts/grade-short.md`, `grade-essay.md`                                                                     |
| Rule levels above the screen       | `content/rules.json`, `content/rules.ts`                                                                              |
| Rules editor                       | `content-edit/RulesPanel.svelte`, `fields/RuleFields.svelte`, `rulesStore.svelte.ts`, `routes/api/content-edit/rules` |
| Per-screen fields                  | `llmGrade`, `maxTypos`, `capitalIsError`, `autoCheck`, `rulesLock`, `gradingNotes` on `writing-task`                  |

## Next

1. Exams: batch-grade writing screens at final submit (`gradeExam` + prompt exist), local mechanics score (4 pts, needs a table you approve), report UI.
2. Per-student auth + a durable rate limit before `/api/grade` is public.
