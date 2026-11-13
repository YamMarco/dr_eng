# Handoff: test findings (open items only)

Run: `npm run e2e` (phone + desktop), `npm run e2e:content` (crawler, ~5 min). Plan and decisions: `testing-plan.md`.

## Owner

- [ ] **Reset email subject is still the English "Reset your password"** (Supabase Auth > Email Templates).
- [ ] **Check exam passages on a real phone**: printed lines fit at ~12px (no wrapping from 390px wide). Too small? The alternative is wrapped lines. Also check a 360px phone.
- [ ] **Look at the first CI run** on a PR (`.github/workflows/ci.yml`: unit, svelte-check, e2e); a red run uploads the Playwright report.
- [ ] **Arabic `home.hookWords`** still says "for review": have the translator change it to "for today", like the Hebrew.
- [ ] **When COBE comes back:** say so, and the parked COBE items below get fixed and tested.

## Open findings

- [ ] **The tester feedback button (teal, bottom left) covers the start of text** in long screens such as the report's open answers, and sits almost on the primary CTA in onboarding. Testers only; revisit when it goes (or move it up).
- [ ] **The lesson map opens with ~280px of empty space** above the first section on a `?lesson=` deep link to a locked lesson. May be the scroll position; check on a real phone.
- [ ] **Malformed `%` in a URL** (`/app/unit/%E0%A4%A/module/c`): the server answers a proper 400 page, but SvelteKit's client router logs "URI malformed". Framework; low.
- [ ] **Pages sent `Access-Control-Allow-Origin: *` by `vite preview`**: probably preview-only (Vercel config differs); confirm on the deployed site's headers.
- [ ] **`/api/grade` trusts the client's grading context** (question, editor notes, points, mechanics): look them up on the server by screen id. Low priority: scores live on the device; daily caps bound the spend.
- [ ] **Lint:** `eslint .` is clean; `prettier --check .` flags 37 older files, including prompt `.md` files (reformatting would change prompt text: check those by hand first). CI does not run lint yet.
- [ ] **Local build hangs with `.env.local`'s keys:** `npm run build` took 90 min (prerender/write step), 1 min with `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `DATABASE_URL` blank. The e2e server builds with them blank, like CI. Find what the prerender waits on.
- [ ] **Exam timer runs on the wall clock:** changing the clock mid-exam shortens or stretches it (only cheats one's own practice; a monotonic timer would stop while the phone sleeps). Left as is.
- [ ] **Not covered by tests:** a successful sign-up form submit (Turnstile needs a human or a project with Cloudflare's test keys), that auth emails arrive (the owner confirms they do), signed-in calls from the mobile build (bearer token), push, the native shell.

## COBE (parked, not tested)

- [ ] **AI chat and COBE speaking fail on the built site.** The CSP's `connect-src 'self'` blocks `fetch(blob:...)` of the recording (`chatAi.ts`, `speakingAi.ts`, `Speak.svelte`): every turn shows "לא הצלחנו לשמוע את התשובה". Dev has no CSP. Fix: `blob:` in `connect-src` (`vite.config.ts`).
- [ ] **No tests for COBE**: exam (fake mic + a long recording, `page.clock`), chat, COBE lessons in the crawler (`UNITS` in `e2e/content.spec.ts`), COBE audio prompt injection.
