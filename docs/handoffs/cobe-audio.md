# Handoff: COBE audio model (none today)

Gemini was removed from the app. COBE's two LLM roles, `grade-speaking` (`/api/speak`, grades a recording) and `chat-speaking` (`/api/chat-speak`, the AI conversation partner), have no model in `server/llmModels.ts`. Their calls answer 503 "not configured", so admins see "unavailable" in COBE and students see nothing (COBE is behind `COBE_OPEN = false`). The quota is charged before the 503, which is harmless for admins.

The rest of the pipeline is unchanged: the client records a 12 kHz WAV (max 2 min), `chat()` in `llm.ts` still sends `audio` as `input_audio`, and the prompts are `prompts/grade-speaking.md` and `chat-speaking.md`.

## The problem

GPT-6.x and Claude take no audio input. The COBE rubric grades pronunciation and fluency, and those don't exist in a transcript.

## Options (gateway prices, Nov 2026)

1. **Transcribe, then grade the text on GPT.** STT: OpenAI GPT Transcribe $0.0045/min, MAI-Transcribe 2 $0.0017/min, AssemblyAI Universal-2 $0.0025/min. Grading and chat on gpt-6-luna ($0.10 / $0.50 per 1M) or gpt-6.1-terra ($1 / $5). Cheapest, one AI provider stays (if OpenAI STT). Loses pronunciation; fluency only from what the transcript shows (fillers, restarts, timing if the STT returns word timestamps).
2. **An audio-in model.** Keeps the voice. Check the gateway catalog (`type: realtime` / audio-capable language models) for one from OpenAI first, so the privacy policy keeps one AI vendor. Gemini is out: Google's gen-AI terms bar services likely used by under-18s.
3. **Hybrid:** transcript for content and language + an audio model only for pronunciation/fluency.

Decide with a test: 10-20 real recordings with teacher marks, scored per option; compare against the marks and cost per attempt.

## On the day COBE opens

- Set the two roles' models in `llmModels.ts`; for option 1, add an STT step before `chatJson` in `server/speaking.ts` and `server/chatSpeaking.ts` (the transcript is already saved with COBE attempts).
- Privacy (`he.ts` "בדיקה בעזרת AI" + providers list + links) and `docs/policies.md` "Sent to AI": add COBE recordings and chat turns, and the STT vendor if it isn't OpenAI.
- Re-check COBE caps in `server/llmLimits.ts` against the new cost per minute.
- Then flip `COBE_OPEN` and delete this handoff.
