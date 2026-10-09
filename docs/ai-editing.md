# AI editing - rule book for screen editors

For anyone (person or AI) creating or editing lesson screens outside the code -
e.g. Claude on the web connected to the app's `/mcp` endpoint. The goal: new or
changed screens that fit the screen schema and the house rules, so they paste
into the editor (`/edit` → a screen's JSON panel) without breaking anything.

The `/mcp` endpoint serves this file live from GitHub `main`, together with every
file linked under "Always read". Edit this file or any linked file to change what
editors follow - no code change, no deploy. Links are relative to this file and
must point inside `docs/`, `QC_report/` or `front/src/lib/`.

## Always read

- [Screen schema](../front/src/lib/lesson-screens/schema.ts) - the code that defines every screen type, its fields and what each field means. Source of truth for structure.
- [Lesson structure](lesson-structure.md) - text formatting syntax, how to write wrong options, round patterns, conventions.
- [Voice guide](study-plan-conversion/voice-guide.md) - how student-facing text sounds.
- [Text colours](../front/src/lib/lesson-screens/textColors.ts) - names allowed in `{c:name}`.
- [Mark-all colours](../front/src/lib/lesson-screens/markAllColors.ts) - names allowed in `mark-all` categories.

## Bottom line

- A screen is one JSON object whose `type` is one of the schema's screen types. Work on one screen or several; return each as a full JSON object.
- Never invent screen types, fields or image paths. Leave out optional fields you don't need.
- Student-facing explanation text is Hebrew; English only where it is the material itself (words, sentences, passages, questions, answers).
- No long dashes (`—` or `--`) in content. A single `-` at most.
- Indexes are 0-based; for `mark-all`, split the text on spaces and count tokens.
- Wrong options must be tempting: same part of speech, same topic, exactly one defensible answer.
- A word is never an answer or a decoy before its `word-card`.
- Validate every screen (`validate_screens`) before handing it over, and fix every error.
