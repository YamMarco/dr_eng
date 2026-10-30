# Module G

Present state only. 5-unit module (unit group 5: E, G, COBE). Ids are `g-` prefixed. Source material: `docs/material/module-g/` (reading lessons, writing templates, AI essay worksheet). All texts are original, not from past exams.

## Sections

- **g-1, Part A - Reading** (`content/g/g-1.ts`, 18 nodes, linear chain). `requiredRounds: 2` on every node: round 1 = method on the shared DIGITAL MENTORING AT WORK text (5 paragraphs; WILD BEES I-II for lessons 9 and 12), round 2 = exam level on a new short text. `g-final` adds an optional round 3 (STUDY PODS full simulation). Round 2 of `g-final` is the exam-length text THIRD PLACES (6 paragraphs, about 520 words).
- **g-2, Part B - Writing** (`content/g/g-2.ts`, 6 nodes, after `g-final`). The 4-paragraph opinion essay: map -> Present Perfect -> conditional -> inversion -> templates by question type -> full AI essay (120-150 words, 40-minute countdown).

## Authoring rules

- Typed answers (`passage-quiz`) use one stem keyword (`pollinat`, `embarrass`) that every correct phrasing contains. If no single word fits, the question is a `passage-mcq` instead.
- Tick-two questions are `mcq` with `correctIndices`; the paragraph goes in the prompt as `{p:text}`, since `mcq` has no text field.
- Essay tasks set `minWords` + `maxWords`: the length line uses that range, and the Module C deduction table applies only to 70-90.

## Open

- Verify against the Ministry booklet: essay length (120-150 is assumed), exam length 1:45, reading = 60 points, 8-10 questions, "Hebrew answer = 0".
- Arabic: no `ar.json` entries or `titles.ar.ts` titles yet (falls back to Hebrew).
- No Module G exams (`quizzes.ts`) yet; THIRD PLACES and STUDY PODS could seed the first one.
- Not played by a student yet.
