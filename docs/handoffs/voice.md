# Handoff: recorded voice, what's left

Vocab words are recorded (Kokoro, offline, bucket `vocab-audio`): docs/platform.md "Voice". Everything below still uses the browser's `speechSynthesis`. Out of scope: the COBE chat's AI replies (they will be read by a voice from the LLM API, through `chatVoice.ts`).

## Left to record

| What | Where it's spoken | Count | Size (2 voices) |
|---|---|---|---|
| Speaking prompts | `speak` screens: `prompt`, via `SpeakButtons` / `ListenCard` (`listen: true`) | ~35 lessons + COBE exam questions | ~6 MB |
| Listening lines | `mcq.listen` (`ListenCard`) | few | <1 MB |
| Dictation | `order` with `listen: true`: the `tiles` joined (`ListenCard`) | ~15 | ~1 MB |
| Word-card example sentences | `word-card.exampleEn`, deck `exampleEn`: shown, not read aloud today (new button) | ~950 | ~37 MB |

Sizes: ~8 KB per second of speech per voice (current MP3). A lower bitrate roughly halves them.

## Can't be pre-recorded (stay on the browser voice)

- "My phrases" (`PhraseBank`, `ChatSummary`): the student's own text.

## How to extend

1. A sentence key can't be the text itself (too long, edits): use a short hash of the spoken text (`speechText`) in `vocabAudio.ts`, the same function on both sides.
2. Collect the new texts in `scripts/vocab-words.mjs` (or a sibling collector) so `scripts/vocab-audio.mjs` records and uploads what's missing.
3. Play them through `speakWord` (rename it when it covers more than words) in `SpeakButtons` / `ListenCard`; the browser voice stays the fallback.
4. `ListenCard` and `SpellWord` (listen mode) still gate on `speechSupported()`: once their text is recorded, they can play without browser speech.
