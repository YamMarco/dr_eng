# Module G

Present state only. 5-unit module (unit group 5: E, G, COBE). Ids are `g-` prefixed. Source material: `docs/material/module-g/` (reading lessons, writing templates, AI essay worksheet). All texts are original, not from past exams.

## Sections

- **g-1, Part A - Reading** (`content/g/g-1.ts`, 18 nodes, linear chain). `requiredRounds: 2` on every node: round 1 = method on the shared DIGITAL MENTORING AT WORK text (5 paragraphs; WILD BEES I-II for lessons 9 and 12), round 2 = exam level on a new short text. `g-final` adds an optional round 3 (STUDY PODS full simulation). Round 2 of `g-final` is the exam-length text THIRD PLACES (6 paragraphs, about 520 words).
- **g-2, Part B - Writing** (`content/g/g-2.ts`, 6 nodes, after `g-final`). The 4-paragraph opinion essay: map -> Present Perfect -> conditional -> inversion -> templates by question type -> full AI essay (120-140 words, 40-minute countdown).

## Exams

- `quiz/g/index.ts`: `g-exam-1`..`g-exam-5`, from `Module_G_App_Package.zip` (`module_g_content.json`; teacher copy in its .docx). Each: 5-paragraph article + 9 questions (60 pts), essay 120-140 words (40 pts), 1:45.
- Mapping: `mc` -> `mcq`, `two` -> `mcq.correctIndices`, `open` / `complete` -> `writing-task` (LLM-graded; the stem goes in the prompt). Option feedback -> the option's `[text, feedback]` tuple (quote on its own line), the half-right line -> `partialFeedback`; model answer + key quote -> `modelAnswer` + `gradingNotes`; model essay -> the essay's `modelAnswer`.
- Essay grading: the official G rubric (`content/rubrics/module-g-writing.json`, from FGExternalInternal2020.pdf; prompt `grade-essay-g.md`): content /8, vocabulary /10, language /16, mechanics /6. Length table for 120-140 in `checks/length.ts`; under 50 valid words = 0. Exams pick the rubric by `quiz.module`.
- Not carried over (no exam screen for them yet): the 4-level writing help, self-check, practice/exam modes, the colored model-essay highlights.

## Authoring rules

- Typed answers (`passage-quiz`) use one stem keyword (`pollinat`, `embarrass`) that every correct phrasing contains. If no single word fits, the question is a `passage-mcq` instead.
- Tick-two questions are `mcq` with `correctIndices`; the paragraph goes in the prompt as `{p:text}`, since `mcq` has no text field.
- Essay tasks set `minWords: 120` + `maxWords: 140` (official range): that range brings the G deduction table.

## Open

- Verify against the Ministry booklet: exam length 1:45, reading = 60 points, 8-10 questions, "Hebrew answer = 0".
- Arabic: no `ar.json` entries or `titles.ar.ts` titles yet (falls back to Hebrew).
- The report doesn't show open questions' `modelAnswer` yet; the Hebrew checklists of open questions were not carried over.
- Not played by a student yet.
