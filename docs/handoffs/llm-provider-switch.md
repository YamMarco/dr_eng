# LLM provider switch: off Google

Status: decided to leave Google, provider not yet chosen. No code changed.

## Why

The Gemini API and Google Cloud gen-AI terms forbid apps "directed towards or likely to be accessed by" under-18s. EngUp's users are high-school students. LLM_ENABLED is currently on anyway (the owner's call).

## The three jobs

| Job | Roles (`llmModels.ts`) | Difficulty |
|---|---|---|
| Text grading | `grade-short`, `grade-reading`, `grade-essay` | easiest, any good text model |
| OCR of handwriting | `ocr` | vision; accuracy on student handwriting matters |
| Speaking recordings (COBE) | `grade-speaking`, `chat-speaking` | needs audio in; COBE is off (`COBE_OPEN = false`) |

## Minors policy

| Provider | Under-18 apps | Conditions |
|---|---|---|
| Google | ❌ | - |
| Anthropic | ✅ with safeguards | age verification, AI disclosure, Anthropic's child-safety system prompt, privacy-law compliance; may audit |
| OpenAI | ✅ with safeguards | parental consent, age-appropriate content; under-13 data needs zero retention |
| Mistral | ⚠️ unclear | consumer terms 13+ with parental consent; commercial (API) terms not found |

## Options per job

Prices per 1M tokens, in / out. Non-Anthropic prices are from third-party summaries: verify on the official page before deciding.

| Model | Text grading | OCR | Speaking |
|---|---|---|---|
| Claude Haiku 5.5 ($0.10 / $0.50) | ✅ cheapest | ✅ ~$0.0004/scan; handwriting accuracy untested | ❌ no audio input |
| Claude Sonnet 5.5 ($2 / $10) | fallback if Haiku's essays fall short | ~$0.008/scan | ❌ |
| OpenAI gpt-5-mini ($0.25 / $2) | ✅ but marked deprecated | ✅ | - |
| OpenAI gpt-audio-mini (audio $10 / $20) | - | - | ✅ hears the speech (pronunciation, fluency) |
| OpenAI gpt-transcribe (~$0.0045/min) + Claude | - | - | ⚠️ transcript loses pronunciation/fluency, which the COBE rubric grades |
| Mistral Voxtral Small (~$0.004/min) | - | - | ✅ hears the speech, cheapest; minors terms unclear |

## Recommendation

- Text grading + OCR: Anthropic, Claude Haiku 5.5, effort `low` (it thinks by default; thinking tokens are billed as output).
- Speaking: decide when COBE opens. gpt-audio-mini (terms clear) or Voxtral (cheaper, terms unclear).

## Cost (estimate)

Heavy user per month: 13 exams, 150 OCR, 22 lesson answers.

| | Per month |
|---|---|
| Gemini, 2027 prices | ~$0.95 (~₪3) |
| Claude Haiku 5.5 | ~$0.09 (~₪0.30) |

The Claude figure is unmeasured: a different tokenizer, image token counts and thinking tokens can raise it. Gemini measurements (simulated inputs): exam ~9,400 in / ~1,200 out; OCR ~1,200 in / 115-500 out per page.

## Next steps

1. Test Haiku 5.5 OCR on 5-10 real handwriting photos (the main unknown).
2. Run the graders on Haiku with the existing prompts; compare a sample against Gemini's marks.
3. Plan the code change for approval (inter-module): `llm.ts` speaks the OpenAI-compatible format; the Anthropic Messages API differs (system field, image blocks, no `response_format`; use structured outputs). Touches `llm.ts`, `llmModels.ts`, env keys, possibly prompts.
4. Safeguards: age confirmation at signup, AI disclosure, Anthropic's child-safety system prompt. OpenAI later also needs parental consent: one signup checkbox can cover both.
5. Update the privacy policy (it names Google as the only AI provider) and `finance.ts` expenses.
6. Speaking provider: decide before COBE opens.

## Sources

- [Anthropic: organizations serving minors](https://support.claude.com/en/articles/9307344-responsible-use-of-anthropic-s-models-guidelines-for-organizations-serving-minors)
- [OpenAI: under-18 API guidance](https://developers.openai.com/api/docs/guides/safety-checks/under-18-api-guidance)
- [OpenAI pricing](https://developers.openai.com/api/docs/pricing)
- [Claude: no audio input (OpenAI SDK compatibility)](https://platform.claude.com/docs/en/api/openai-sdk)
- [Mistral pricing](https://mistral.ai/pricing/api/)
- [Mistral consumer terms](https://legal.mistral.ai/terms/eu-consumers-terms-of-service)
