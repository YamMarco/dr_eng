# Study plan → prototype

Turn a raw study plan (teacher notes, a syllabus, a PDF outline) into app-ready
sections / lessons / screens.

| file | use |
| --- | --- |
| `PROMPT.md` | the conversion prompt - paste it, then paste the study plan |
| `current-material.md` | what the app already covers, unit → module level |
| `screen-requests/TEMPLATE.md` | spec form for a screen type the plan needs and we lack |
| `screen-requests/<type>.md` | one filled-in request per proposed screen type |

Shape of the output: one lesson per micro skill, at the plan's own scale, with
the preface written out in full and at least 3 rounds of 4 questions climbing to
real exam difficulty.

Downstream references the prompt assumes: `docs/lesson-structure.md` (builders,
screen types, path rules) and `docs/lesson-data-model.md` (the model).
