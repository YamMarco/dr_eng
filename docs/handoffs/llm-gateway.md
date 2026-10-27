# Handoff (urgent): AI grading has no real backend

## Where it stands

- The site runs on Vercel (team `site-boi`, project `dr-eng`) on the **Hobby** plan.
- `llm.ts` calls Gemini directly (the never-deployed LiteLLM proxy was removed): every role calls Gemini with `GEMINI_API_KEY`, falling back only to another Gemini model.
- The guard (`llmGuard.ts`) works in production (accounts + `DATABASE_URL` are set). Preview has no `DATABASE_URL`, so every AI route there answers 503 (fails closed, by design).

## Why it's urgent

1. **One vendor, no real fallback.** A Gemini outage, quota hit or key problem takes down all grading, speaking and OCR at once. 
2. **Student data and the Gemini tier.** On Google's unpaid tier, prompts may be used to improve Google's products. Our prompts are essays and recordings of minors. Unpaid-tier rate limits are also far below one exam submit (~10 parallel calls).
3. **No spend cap at the provider** (security checklist #24). The only limits are the app's (80 calls/user/day, 1000/day total). The burst limiter lives in memory per instance, which is weak on serverless.
4. **Failures are invisible.** `VITE_SENTRY_DSN` isn't set, so the `Sentry.captureException` calls in `llmRoute.ts` go nowhere.
5. **Hobby is non-commercial only.** Paid plans (checkout) need Vercel Pro. Hobby also allows only daily crons, and the practice reminder is built around that.

## Do today (no code)

1. **Gemini billing:** AI Studio, then the key's project. Confirm Cloud Billing is on (paid tier) and set a budget alert in Google Cloud Billing.
2. **Sentry:** create the project and set `VITE_SENTRY_DSN` on Vercel (Production). The CSP picks it up at build.
3. **Preview:** either add a dev `DATABASE_URL` to Preview, or accept that previews have no AI.
4. **Vercel Pro:** upgrade before the first paid user.

## Then: add Vercel AI Gateway (recommended)

AI Gateway is Vercel's managed, OpenAI-compatible gateway: no server to host or patch, cross-vendor fallbacks, budgets and logs. `llm.ts` already speaks OpenAI Chat Completions, so this is a small change.

- **Endpoint:** `https://ai-gateway.vercel.sh/v1`.
- **Auth:** `AI_GATEWAY_API_KEY` (simplest; create it with `vercel ai-gateway api-keys create`), or Vercel OIDC.
- **Models:** all of these are live with `no_training: all`: `google/gemini-3.8-flash`, `google/gemini-3.5-flash`, `google/gemini-3.1-flash-lite`, `openai/gpt-5.4-nano`, `anthropic/claude-sonnet-5.5`. Re-check `curl https://ai-gateway.vercel.sh/v1/models` before shipping.
- **Code:** in `llm.ts`, add an AI Gateway branch (OIDC on Vercel, or `AI_GATEWAY_API_KEY`).
  - Map each role to a primary model plus fallbacks: grade-short / grade-reading `openai/gpt-5.4-nano` → `google/gemini-3.1-flash-lite`; grade-essay and ocr `google/gemini-3.8-flash` → `anthropic/claude-sonnet-5.5`; speaking roles `google/gemini-3.8-flash` → `google/gemini-3.5-flash`. Send the fallbacks in the request's gateway options (check the docs for the exact Chat Completions field).
  - Keep the direct-Gemini branch as the second choice.
- **Audio caveat:** the catalog lists Gemini input as text, image, pdf and video, with no audio. Test `grade-speaking` and `chat-speaking` (they send `input_audio`) through the gateway. If audio is rejected, keep those two roles on direct Gemini.
- **Budget:** set a project budget with `vercel ai-gateway budgets set` (check `--help`) and a spend alert.
- **Check:** one live call per role (text, image for `ocr`, audio for speaking), then confirm the routing in AI Gateway Logs.
- **After it's live:** update `docs/feedback-framework.md` (roles line), `.env.example` and `docs/security.md` #24.

