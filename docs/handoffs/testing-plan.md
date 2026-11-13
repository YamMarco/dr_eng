# Handoff: testing plan (open items only)

Built: Playwright in `front/e2e` (smoke + axe + focus walk, journeys, API, content crawler, scripted personas + monkey, opt-in real-LLM and accounts-on runs), unit tests, CI on PRs. Principles: assert on what a student sees (roles, labels, Hebrew from the i18n dict), no screenshot diffs, AI and outside services mocked unless the test exists to check them. Findings: `test-findings.md`.

## Still to do

- **Accounts-on, the rest:** sign up / confirm / sign in / reset through the UI (needs Turnstile test keys and a readable inbox), quota screens (429) and the 24h exam lock end to end (needs LLM calls or counter rows).
- **Claude-driven persona runs:** a weekly scheduled run with a report to `/kanban`, and more personas (Arabic interface, 360px phone, tablet landscape).
- **Mobile build with a signed-in session** (bearer token), then re-measure on a real low-end phone.

## Open decisions (owner)

- Accounts-on tests: a separate Supabase test project, or the local Supabase CLI? (Only the production project exists, so none run now.)
- Real-AI nightly smoke: yes or no, and a monthly budget.
- Persona runs: on demand only, or a weekly scheduled task?
- CI on PRs: run e2e on every PR, or only on `main`?
