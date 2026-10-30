# Module F

Present state only. Literature, 5-point path (unit group 5: E, F, G, COBE), level B2. Ids are `f-` prefixed. Source: `docs/material/module-f/module_F_two_stories.json` (EngUp literature package; the developer handoff is in `docs/material/module-d/`). Story texts are not in the app (copyright): students read them in class.

## Sections

Skill `literature`. Each story starts at a root node. The two stories run side by side (x = -130 / 130), converging on the comparison node below them.

| Section | Content |
|---|---|
| f-1 | A Summer's Reading - Bernard Malamud |
| f-2 | Mr. Know-All - W. Somerset Maugham |
| f-3 | Comparing the stories (CD9), after both mastery nodes |

7 nodes per story: `f-<story>-words` (setting + 12 words in two sets of 6), `-understand-1` (screens 1-6), `-understand-2` (7-12), `-think` (13-16), `-answer` (17-19), `-mastery` (20, 80-100 words), `-review` (plot chart, common mistakes, the 8 model answers; optional round 2 = the bridging task).

## Mapping

`front/scripts/module-f-import.py` generated `content/f/f-<N>.ts` (a fresh import overwrites /edit changes).

- A screen = a `preface` (English paragraph + Hebrew) and its task.
- Task with `opts` -> `mcq` (3 options, `fb` -> `explanation`; no per-option feedback in the source).
- Open task -> LLM-graded `writing-task`; `gradingNotes` = screen text + `fb`. What `fb` is for each screen (`FB_KIND` in the script): an answer -> `modelAnswer`, guidance -> a callout in the prompt, teacher notes -> grading notes only. "Model: ..." -> `modelAnswer`. Paragraph tasks: 60-100 words; mastery and bridging: 80-100.
- Authored here (the package had no material for them): the "Fact or inference?" screens are an `mcq` (inference vs facts), and story 1's "From a sentence to a paragraph" names the sentence to improve.
- The summative test (teacher copy) is not in the app.

## Open

- Grading uses the generic short-answer grader, not the F rubric (content 50 / language 50).
- The bridging task points to the Ministry's background page, which is not linked.
- Arabic: no `ar.json` entries or `titles.ar.ts` titles yet (falls back to Hebrew).
- Not played by a student yet.
