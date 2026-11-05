# Handoff: testing plan (automation + human-like runs)

Goal: catch broken flows before students do, with two kinds of runs:
- **Scripted (regression):** deterministic Playwright journeys, run on every PR.
- **Persona (human-like):** Claude drives a real browser as a student persona, explores, and reports bugs and friction. Run on demand or weekly.

Now: unit tests (`npm test`), Playwright in `front/e2e` against the built site (`npm run e2e`: smoke + axe + focus walk, journeys, API; `npm run e2e:content`: the crawler), CI on PRs (`.github/workflows/ci.yml`: unit, svelte-check, e2e). Phases 1-3, 5, the accounts-off part of 7 and Phase 6 (scripted personas + monkey, `npm run e2e:persona`; Claude-driven runs still to do) an opt-in real-LLM exam run (`npm run e2e:realai`) and an opt-in accounts-on run against a real Supabase project (`npm run e2e:accounts`, creates and deletes its own users; see the spec's header) are in; findings in `test-findings.md`.

## Principles

- Assert on what a student sees: ARIA roles, labels, Hebrew text read from the i18n dict (never hard-coded copy). No screenshot diffs; screenshots and traces are evidence only.
- No `data-testid` until a role or label can't find the element.
- Tests are cheap and deterministic: AI and outside services are mocked unless a test exists to check them.
- One fixture per student state (new, mid-module, exam taken, quota used up), built by seeding localStorage or the DB, never by clicking through.

## Building blocks

| Need | How |
|---|---|
| Browser | `@playwright/test`, Chromium (in the cloud container: `executablePath: '/opt/pw-browsers/chromium'`) |
| Phone and desktop | Projects: iPhone-size and desktop, light and dark |
| AI grading, COBE, chat, OCR | `page.route('/api/grade' ...)` with canned replies (pass, fail, error, 429 quota); real-AI smoke only in nightly runs, with a budget |
| Microphone | Chromium fake device + a WAV file (`--use-file-for-fake-audio-capture`) |
| Camera / handwriting photo | `setInputFiles` with sample photos |
| Time (streaks, exam timer, 24h retake lock, pass pricing) | `page.clock` |
| Accounts | Accounts-off mode for most UI. Accounts-on: a test Supabase project (or local `supabase` CLI), Turnstile test keys (always pass), users created already confirmed with the admin API |
| Two devices (progress sync) | Two browser contexts, same user |
| Accessibility | `@axe-core/playwright` on every page + the keyboard focus walk (as used for `/accessibility`) |

## Phases (one at a time)

1. **Foundation:** Playwright config, fixtures (seeded student states), API mocks, i18n helper, `npm run e2e`, GitHub Actions on PRs (unit + e2e + svelte-check).
2. **Smoke:** every route loads with no console errors or failed requests, phone and desktop, both themes; axe and the focus walk on each.
3. **Core journeys (accounts off):** onboarding, then a first lesson to the end; word deck; exam start, submit, report (mocked grading: good, weak, error); COBE exam with the fake mic; AI chat and its transcript; handwriting scan; settings (theme, reminder hour); streak; feedback report.
4. **Accounts and access (accounts on):** sign up (consent and marketing opt-in saved), confirm, sign in, reset; progress sync across two devices; delete account (rows gone); code redemption and free checkout; access gating; quota-used-up screens; 24h exam lock.
5. **Content crawler:** walk every lesson and exam screen, answer with the content's own correct answers, and fail on a screen that can't render or be completed. Catches broken content at scale.
6. **Persona runs (human-like):** Claude + Playwright, one persona per run. Each persona has a goal, a device, a skill level and habits:
   - Weak 4-unit student on a phone, rushes and taps wrong answers
   - Strong 5-unit student going straight to exams
   - Keyboard-only / screen-reader user
   - Distracted: leaves mid-exam, comes back, loses network
   - Parent checking privacy, plans and checkout

   Output: a short report per run (steps, bugs, confusing Hebrew copy, dead ends) with traces, triaged into `/kanban`.
7. **API and security regression:** 401 without a token, no reading another user's data, `%`-encoded paths, quotas (from `docs/security.md`).
8. **Later:** the mobile build (static bundle against the web API), performance budgets.

## Open decisions (owner)

- Accounts-on tests: a separate Supabase test project, or the local Supabase CLI?
- Real-AI nightly smoke: yes or no, and a monthly budget.
- Persona runs: on demand only, or a weekly scheduled task?
- CI on PRs: run e2e on every PR, or only on `main`?
