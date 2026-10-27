# Handoff: turn on Vercel AI Gateway

Code is ready: `llm.ts` sends each role to Vercel AI Gateway first (models and order in `front/src/lib/server/llmModels.ts`), then falls back to Gemini direct. Until `AI_GATEWAY_API_KEY` is set, production runs Gemini direct, as before.

## Turn it on (Vercel dashboard, phone is fine)

1. Vercel → team `site-boi` → **AI Gateway** → **API Keys** → create a key.
2. Project `dr-eng` → Settings → Environment Variables → `AI_GATEWAY_API_KEY`, **Production only**, Sensitive. Redeploy.
3. AI Gateway → set a monthly budget and a spend alert.

## Check (Claude can read the logs through the Vercel connector)

- One live call per role: a lesson answer, an exam open question, an essay, a photo scan, a COBE recording, a COBE chat turn.
- AI Gateway → Logs: each call is there with the primary model. Runtime logs: no `warn` lines like `grade-speaking: google/... 400` (that line means the gateway failed and Gemini direct answered).
- **Audio:** if the speaking roles always warn, the gateway rejects `input_audio`. They still work via Gemini direct; move them off the gateway then.

## Still open from before

- **Gemini billing** (AI Studio → the key's project): paid tier, so student prompts aren't used for training; budget alert in Google Cloud Billing. Needed while Gemini direct is the fallback.
- **Sentry:** create the project, set `VITE_SENTRY_DSN` on Vercel (Production).
- **Preview:** no `DATABASE_URL`, so AI routes there answer 503 (by design). Add a dev database, or accept it.
- **Vercel Pro** before the first paid user (Hobby is non-commercial).
- **Prices:** Gemini 3.8 Flash doubles on 2027-01-01 (see the note in `llmModels.ts`). Re-check in December.
- **Later:** once the gateway has run clean for a while, drop the Gemini-direct fallback or keep it as a backup on purpose.
