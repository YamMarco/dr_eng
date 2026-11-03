# content

Read before adding or editing lesson/exam content.

- Model, authoring, screen usage, round patterns, distractor rules, writing checks: docs/lesson-structure.md (read it instead of re-reading the source).
- Section (`content/<m>/<m>-N.ts`) and exam (`quiz/<m>/index.ts`) files stay plain literals: no top-level consts or helpers inside the array, or the editor can't save them (`tests/content-edit-files.test.ts`).
- Vocab nodes are NOT limited to 4 question types; mix any scored screen type (mcq, spell-word, cloze-pick, mark-all, passage-mcq).

## material
- What exists per module, down to the lesson: docs/material.md. After adding, removing or renaming a lesson, section or exam, update it.
