# Module D

Present state only. Literature, 4-point path (unit group 4: C, D, E, COBE), level B1, for weak students. Ids are `d-` prefixed. Source: `docs/material/module-d/` (EngUp literature package: unit JSON, can-do codes, developer handoff). The package's prototype engine was not ported; its content runs on the lesson path.

## Sections

One section per work, skill `literature` (one "ספרות" row on the module page). Each section starts at a root node, so a student can open the work their class studies.

| Section | Work | Kind |
|---|---|---|
| d-1 | The Road Not Taken - Robert Frost | poem |
| d-2 | Count That Day Lost - Anonymous | poem |
| d-3 | Introduction to Poetry - Billy Collins | poem, **text pending** |
| d-4 | Thank You, Ma'am - Langston Hughes | story map (12 events, original paraphrase) |
| d-5 | As I Grew Older - Langston Hughes | poem |

Sections run side by side, one column each (x = -240..240, same start row). 8 nodes per work, a linear chain: `d-<work>-before` (screens 1-2), `-read` (3-5), `-meaning` (6-8), `-think` (9-11), `-answer` (12-13), `-challenge` (14), `-mastery` (15), `-samples` (16). One round each; `-answer` adds an optional round 2 (free writing, LLM-graded, 40-60 words).

## Mapping (package -> screens)

`front/scripts/module-d-import.py` generated `content/d/d-<N>.ts` (a fresh import overwrites /edit changes).

- Question -> `mcq`: `why` -> the option's `[text, feedback]`; `he` + evidence lines (quoted from the text) + `tip` -> `explanation`; `kw` (only those in the question, none on vocab questions) + `hint` -> `hint` (help button before answering). Mastery questions have no hint and no retry.
- `poem` widget / `quote` block -> `poem` screen (tap a line for its Hebrew). Story events show as numbered lines, evidence says "event N".
- `vocab` -> 5 `word-card` + `match-pairs`, twice. `reveal` / `feelings` -> `steps`. `order` -> `order`. `build` -> 3 `mcq` (ANSWER, PROVE, EXPLAIN) + the `write` task. `samples` -> one `preface` per sample, then phrases and terms as `summary`.
- `reflect` (no right answer) -> a `preface` with the question and options.
- Lessons shuffle options (the package asked not to; explanations never refer to an option's position).
- Can-do codes (`cd`) are not shown (teacher reports, not built).

## Open

- **Introduction to Poetry:** licensed; enter the 16 lines in `docs/material/module-d/unit3_introduction_to_poetry.json` (`poem[].en` / `he`) and re-import d-3, or type them into the `poem` screens and evidence in /edit. Until then the poem screens show a summary per stanza.
- Not carried over: XP, stars, review links by tag, the two-try question flow (a miss replays at the end of the round instead), the 📜 drawer (the full poem is a screen at the start of `-think`).
- Arabic: no `ar.json` entries or `titles.ar.ts` titles yet (falls back to Hebrew).
- Not played by a student yet.
