# Submit → feedback framework

Status 2026-10-12: lessons path built (Layer 1 gates, `/api/grade`, prompts, `FeedbackView`, rule cascade in code). Exams and the workbench are not. Decisions below reflect the owner's answers.

One loop for every free-text submit (lesson writing, exam essays):

```
photo? ─► OCR ─► student reviews text ─┐
                                       ▼
typed text ───────────────────────► Layer 1 (local, free, instant)
                                       │ gate fails ─► outright "wrong", no API call
                                       │ passes     ─► keeps its flags (typos…) while waiting
                                       ▼
                                   Layer 2 (LLM, /api/grade)
                                       ▼
                         mergeFeedback(l1, llm) ─► Feedback ─► UI
```

## Already built (reuse, don't rebuild)

| piece                                                           | where                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| L1 checks: typos, mechanics, language use, Ministry length rule | `lib/checks/` (`checkWriting`, `worthGrading`)                                        |
| Best-answer prototype                                           | `acceptedAnswers` on `writing-task` + `lesson-screens/acceptedAnswers.ts`             |
| OCR, already 2-shot (scan → `ScanReview` → text)                | `lib/ocr/`, `routes/api/ocr`, `prompts/ocr.md`                                        |
| Gateway client + roles `grade-short`, `grade-essay`, `ocr`      | `server/llm.ts`, `llm-gateway/config.yaml`                                            |
| Per-screen rule fields                                          | `maxTypos`, `capitalIsError`, `autoCheck`, `minWords`, `requiredMoves` in `schema.ts` |

Missing: rule cascade, `/api/grade`, grade prompts, the shared `Feedback` shape, the workbench.

## 1. Layer 1 - rules

### Rule set and cascade

One flat `RuleSet` (the fields the screen schema already has, plus the few below), optional at every level:

```ts
type RuleSet = {
  minWords;
  maxWords;
  maxTypos;
  capitalIsError;
  autoCheck;
  requiredMoves;
  minWordsUsed;
  llmFallback; // acceptedAnswers miss => ask the LLM instead of failing outright
};
type Rules = Partial<RuleSet> & { lock?: boolean };
```

Levels: **module → section → lesson → screen**. `resolveRules(chain)` merges from the top down; the nearest level that sets a field wins. Resolved at read time (inheritance), not copied into screens.

- Editing the module default changes every screen that doesn't set the field itself. A screen field _is_ the override, so "don't overwrite my setting" already holds with no flag.
- `lock` only matters for the editor's bulk **"apply to all below"** button: it clears child overrides _except_ levels with `lock: true`. That is the only job of the flag.
- Storage: `rules?` on `SectionMeta` and `LessonNode`; a module constant for the top level. Screen fields stay where they are.
- UI: a "rules" panel at the module / section / lesson header in `/edit`, same fields as the screen's, with an "inherited" hint on unset ones.

### Gate vs flag

Fixed in code (thresholds come from the RuleSet):

- **Gate** (no API call, outright wrong): empty, not English, below the zero-score length, unresolved OCR `[?]`, `maxTypos` exceeded (lesson only), `acceptedAnswers` miss (unless `llmFallback`), word-bank minimum missed.
- **Flag** (goes on to the LLM, becomes a mark and a deduction): every other typo / mechanics / language issue, short-of-target length.

### Best answer without the LLM

`acceptedAnswers` is the mechanism. Order: accepted match → pass, done, zero cost. Miss → fail, or with `llmFallback` → L2 with the accepted list as reference. Exams have no best answer; they always go to L2.

### Typos: L1 → L2 handoff

L1 returns its marks immediately and holds them while L2 runs.

- The LLM is **told** the spelling/mechanics rules are handled, and receives the text with each typo replaced by its top suggestion. It then judges content, organisation and vocabulary without being distracted, and spends output tokens on none of the typos.
- The student's original text is never altered on screen; only the LLM copy is cleaned.
- The spelling deduction is computed locally (rubric: mechanics) and added in the merge.

## 2. Layer 2 - LLM

### Request

The client sends **ids and text only**: `{ screenRef, text, l1: { typos, issueCount } }`. The server loads the question, `gradingNotes` and rubric itself, so the client can't tamper with them and no rubric travels twice.

- Roles: lesson → `grade-short`, exam essay → `grade-essay`.
- `gradingNotes?: string` on writing screens: the editor's best answer(s), examples, pitfalls. One field covers both "best answer" and "examples".
- Prompts: `server/prompts/grade-short.md`, `grade-essay.md` (+ the rubric inside, see `bagrut-module-c-rubric` notes). Separate user-message template in code, system prompt in the file.

### Response (the cheap part)

The LLM writes **no prose explanations**. It picks tags from a closed list; the Hebrew text for each tag lives in i18n, exactly like L1's `rule` ids.

```ts
type LlmVerdict = {
  pass: boolean; // lesson: the verdict. exam: scores met the pass mark
  scores?: Record<CriterionId, number>; // exam only, integers
  marks?: { span: string; tag: Tag }[]; // max 5; span = quoted text, UI finds the offset
  tip?: string; // optional, one short Hebrew sentence; omitted for lessons by default
};
```

Server validates with zod; invalid JSON → one retry, then an error state (never a fake pass).

### Unified feedback (what the UI gets)

```ts
type Mark = {
  rule: string;
  start;
  end;
  text;
  suggestions?: string[];
  source: "l1" | "l2";
};
type Feedback = {
  stage: "l1-gate" | "l1-accepted" | "llm";
  pass: boolean;
  score?: { got: number; of: number }; // exam
  marks: Mark[]; // L1 + L2 in one list, one renderer
  tip?: string;
};
```

`mergeFeedback(l1Report, verdict, rules)` is a pure function (unit-testable): L1 marks + L2 marks → one sorted list, local spelling deduction applied to the score. One `<FeedbackView>` renders it for lessons and exams.

## 3. OCR

Stay with 2 shots: scan → student reviews/edits → submit. It is what already ships. The reviewed text is just "typed text" to everything downstream. One addition: an unresolved `[?]` is an L1 gate, so the student must fix it first.

## 4. Prompt workbench

Dev-only page behind the existing `/edit` password (`/lab`):

- pick a screen (or paste text), see the L1 report, the **assembled prompt**, the raw JSON, token counts and cost, and the merged `Feedback`.
- edit `server/prompts/*.md` in place through `repoFiles.ts`, rerun on a saved set of sample submissions.
- Samples live in `docs/` or a `samples/` folder as plain JSON, so a prompt change can be re-judged against the same inputs.

## Decisions (owner, 2026-10-12)

- Typos: Layer 1 still flags them (free, exact offsets, needed to gate). The LLM gets the **typo-corrected** text (top suggestion, zero lag) and never re-reports spelling; its spans are mapped back to the student's original text.
- Marks = tag + position; the student sees where and how. **No tips yet.**
- `lock` = protection from bulk "apply to all below" only.
- Lessons: the LLM sees the question and answers pass/fail with marks (no perfect answers exist yet; `gradingNotes` is optional). A fatal tag (`off-topic`, `incomplete`) forces fail.
- Retries: `maxAttempts` (default 2) submits; then the student moves on and the runner replays the screen at the end (existing `retryMissed`). Gate failures count as attempts; an LLM outage ("partial") does not.
- Exams: graded in one batch at final submit; screens that need no LLM score locally.
- Privacy: anonymous text only, no user info to the LLM.
- `/api/grade` takes the question from the client (YAGNI: tampering only hurts the tamperer). Rate limit is per-IP and in-memory; per-student auth is still the real fix.

## Where things are

| piece                                                                                 | file                                                                              |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| types / tags / rules cascade / merge (pure, tested in `front/tests/feedback.test.ts`) | `front/src/lib/feedback/`                                                         |
| Layer 1 + client loop                                                                 | `feedback/layer1.ts`, `feedback/grade.ts`                                         |
| Result UI                                                                             | `feedback/FeedbackView.svelte`; Hebrew in `i18n` `feedback.*`                     |
| Prompts (edit here)                                                                   | `front/src/lib/server/prompts/grade-short.md` (lessons), `grade-essay.md` (exams) |
| Assembled prompt to copy into a playground                                            | dev server: `GET /api/grade?kind=lesson` or `?kind=exam`                          |
| Module / section / lesson rules                                                       | `content/rules.ts` (`moduleRules`), `rules?` on `SectionMeta` and `LessonNode`    |
| Per-screen switches                                                                   | `llmGrade`, `maxAttempts`, `gradingNotes` on `writing-task`                       |

Turn it on for one screen with `llmGrade: true`; for a whole section/module by setting `rules: { llmGrade: true }` at that level.

## Build order

1. Contract + Layer 1 + cascade - **done** (no editor panel for module/section/lesson rules yet; edit the data files).
2. Lessons via the LLM - **done**, untested against a real model (needs `GEMINI_API_KEY` or the gateway).
3. Exams - server side (`gradeExam`, `grade-essay.md`) exists; **missing**: criteria wiring in `QuizRunner`, a local mechanics score, the batch-at-submit flow and report UI.
4. Workbench (`/lab`) - not started.
5. Rules panel in `/edit` for module / section / lesson levels, plus "apply to all below".

## Open

- Mechanics score (4 pts) from the Layer 1 issue count: needs a table you approve.
- Sample answers with expected grades for calibrating prompts (deferred: use the `GET /api/grade` prompt to test by hand).
