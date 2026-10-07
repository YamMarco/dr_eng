# llm-gateway

A [LiteLLM](https://docs.litellm.ai) proxy: one OpenAI-compatible endpoint in front of every model vendor. The app (`front/src/lib/server/llm.ts`) asks for a **role** (`grade-short`, `grade-essay`), and `config.yaml` decides which model answers and which one is the fallback. Changing vendor = editing `config.yaml`, no app deploy.

Vercel can't host this (long-lived Python server). Run it as a container on Railway / Fly / Render.

## Deploy

1. Deploy this folder (it has a `Dockerfile`).
2. Set the env vars from `.env.example` on the host: `LITELLM_MASTER_KEY` (long random string) plus the vendor keys.
3. On Vercel set `LLM_GATEWAY_URL` (the host's public URL) and `LLM_GATEWAY_KEY` (= the master key).

## Run locally

```
pip install "litellm[proxy]==1.104.0"
cp .env.example .env.local   # fill in, then export the vars
litellm --config config.yaml --port 4000
```

On Windows set `PYTHONUTF8=1` first (the startup banner crashes on a Hebrew console codepage).

## Rules

- Student text is never logged or cached here (`turn_off_message_logging`, `cache: false`).
- Prices behind the model choices: see the comparison in the session notes; re-check the vendors' pricing pages before changing roles. Gemini 3.8 Flash is an intro price until 2026-12-31 and doubles after.
- Not built yet: per-student auth and rate limiting on the app side, the grading rubrics and the `/api/grade` route. Without a database the proxy has a single master key, so keep it server-side only.
