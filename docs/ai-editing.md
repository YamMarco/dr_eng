# AI editing - entry point

The `/mcp` endpoint (`front/src/routes/mcp/+server.ts`) serves this file live from
GitHub `main` to any AI editing lesson content, together with every file linked
under "Always read". Edit this file to change what the AI reads - no code change,
no deploy. Paths are repo-root-relative and must live under `docs/`, `QC_report/`
or `front/src/lib/`.

## Always read

- [Lesson-screen shapes and field docs](front/src/lib/lesson-screens/schema.ts) - the code that defines every screen type and field. Source of truth for structure.
- [Lesson structure](docs/lesson-structure.md) - text formatting syntax, distractor rules, round patterns, conventions.
- [Voice guide](docs/study-plan-conversion/voice-guide.md) - how student-facing text sounds.
- [Text colours](front/src/lib/lesson-screens/textColors.ts) - names allowed in `{c:name}`.
- [Mark-all colours](front/src/lib/lesson-screens/markAllColors.ts) - names allowed in `mark-all` categories.

## Bottom line

- Return exactly one screen, valid against the schema, and nothing else changed unless asked.
- Student-facing explanation text is Hebrew; English only where it is the material itself (words, sentences, passages, questions, answers).
- No long dashes (`—` or `--`) in content. A single `-` at most.
- Indexes are 0-based; for `mark-word` / `mark-all`, split the text on spaces and count tokens.
- Wrong options must be tempting: same part of speech, same topic, exactly one defensible answer.
- Never invent screen types, fields or image paths.
- Always run `validate_screen` before returning, and fix every error it reports.
