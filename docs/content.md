# content

Read before adding or editing lesson/exam content.

- Model, authoring, screen usage, round patterns, distractor rules, writing checks: docs/lesson-structure.md (read it instead of re-reading the source).
- Section (`content/<m>/<m>-N.ts`) and exam (`quiz/<m>/index.ts`) files stay plain literals: no top-level consts or helpers inside the array, or the editor can't save them (`tests/content-edit-files.test.ts`).
- The student shell (home, module page, lesson path) reads `content/meta.generated.ts` (lessons without screens, built from the section files by `scripts/lesson-meta.mjs`; git-ignored, rebuilt on build, on dev edits, and by `npm test` / `npm run check`). The screens load per file when a lesson opens (`content/load.ts`). A new section file goes in three lists: `content/index.ts`, `content/load.ts`, `scripts/lesson-meta.mjs` (`tests/lesson-meta.test.ts` fails if they differ).
- Exam "answer N of these": `choose: N` on a part (editor: the part's menu). All its questions stay open, the first N answered count, fewer than N score 0 for the missing ones. Its questions must be worth equal points (schema check). The side passage only shows within its own part.
- Vocab nodes are NOT limited to 4 question types; mix any scored screen type (mcq, spell-word, cloze-pick, mark-all, passage-mcq).

## material
- What exists per module, down to the lesson: docs/material.md. After adding, removing or renaming a lesson, section or exam, update it.
