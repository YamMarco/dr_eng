# Security audit rule book

Reusable checklist for auditing this app (SvelteKit + Supabase + Drizzle + LLM routes, Vercel, users are minors). Re-run it before launch and after any change to auth, `/api`, payments or dependencies. Also apply it when writing such code, not only when auditing.

**Core principle: never trust the client.** Every price, user id, role, plan status, feature flag and rate-limit counter is enforced on the server. Anything that lives only in the browser, the mobile bundle or the request body is controlled by the attacker.

## How to run an audit

1. Refresh the threat list: search for new CVEs for `@sveltejs/kit`, `svelte`, `vite`, `devalue`, `@supabase/*`, and new npm supply-chain incidents. Add anything relevant to "Known exploit classes".
2. Check installed versions (`node_modules/<pkg>/package.json`), then `npm audit --omit=dev` and `npm audit`.
3. Secrets sweep: `gitleaks detect` (whole history), `git ls-files | grep -i env`, grep for `sk_live_`, `sk_test_`, `AKIA`, `ghp_`, `glpat-`, `xoxb-`, `postgres://user:pass@`, and `VITE_*` / `PUBLIC_*` names containing secret, private, service or key.
4. Walk every server entry point: `hooks.server.ts`, `routes/api/**`, `lib/server/**`.
5. Check Supabase (RLS, policies, functions, storage buckets, auth settings) and host env vars per environment.
6. Probe the live deployment: security headers, `/.git/HEAD`, `*.js.map`, error pages, CORS response to a foreign origin.
7. Report (format below) and grade.

## Known exploit classes

| ID | Class | What to check |
|---|---|---|
| E1 | SvelteKit CVEs (remote form DoS, prototype pollution, deserialization, cross-request data race) | Kit >= 2.69.1 at minimum; check GitHub advisories for newer |
| E2 | `devalue` (SvelteKit serializer): DoS, `__proto__` bypass | Version > 5.9.2 or newer advisory fix |
| E3 | Transitive DoS libs (`brace-expansion`, `source-map-js`), `cookie` < 0.7 | `npm audit` clean or each item justified |
| E4 | npm worms (Shai-Hulud family): steal tokens on install, plant `.claude/settings.json` / `.vscode/tasks.json` | Lockfile committed, `npm ci`, soak period before upgrading, no unexpected files in those paths |
| E5 | Vite dev server `server.fs.deny` bypasses (incl. Windows backslash) | Patched Vite; dev server never on `--host` in untrusted networks |
| E6 | Prompt injection, direct (student text) and indirect (OCR'd images) | Grader prompts isolate student input; output schema-validated |
| E7 | System prompt leakage | Prompts hold no secrets; security never depends on the prompt |
| E8 | Unbounded LLM consumption (cost / DoS) | Per-user quota, global cap, input size limit, max tokens, timeouts; burst limit not per-instance only |
| E9 | Supabase misconfig: RLS off, `USING (true)`, `SECURITY DEFINER` functions, leaked secret key | Every exposed table has RLS; secret key server-only |
| E10 | Hook-only auth (cf. Next.js CVE-2025-29927 middleware bypass) | Auth re-checked inside each handler, not only in `hooks.server.ts` |
| E11 | Path-encoding bypass: Kit routes the decoded path, so `/api/%67rade` reaches `/api/grade` | Hooks match `event.route.id`, never a regex on `url.pathname`; probe `%`-encoded variants |
| E13 | Guessable 100% coupon in a public repo | 100% codes random, capped and expiring; no real code in docs |

## Checklist

### Secrets
1. Only public values client-side: Supabase URL + publishable key, Stripe `pk_*`. Never client-side: Supabase secret key, `DATABASE_URL`, LLM keys, payment secret keys, webhook secrets.
2. `.env*` (except committed public-only `.env.mobile`) and `admin-users.local.txt` are gitignored; `.env.example` holds placeholders only. A secret ever committed = rotate it; deleting the file doesn't remove it from history.

### Access control and auth (OWASP A01, A07)
3. Every `+server.ts` is a public endpoint: at the top, (a) zod-validate input, (b) authenticate, (c) authorize ownership. User ids come from the verified token, never the body (no IDOR). Unauthenticated routes are only those in `PUBLIC_APIS` (`hooks.server.ts`), each with a server-side write cap.
4. Supabase JWT verified server-side (`auth.getUser` or JWKS with issuer/audience/expiry checked; `alg: none` rejected), never decode-only. Admin = `app_metadata.role` from the verified token, never a client flag.
5. Return only the fields the client needs, never whole DB rows. Server-only code stays under `$lib/server`.
6. Sign-up / sign-in / reset: rate limited, CAPTCHA (Turnstile, enforced by Supabase; setup in platform.md), leaked-password protection, exact redirect URLs, no open redirects.
7. Tokens: supabase-js keeps them in `localStorage`, so XSS = token theft. Strong CSP and no `{@html}` on untrusted text are the real defence.

### Config and deployment (A02)
8. Headers: CSP (start strict, loosen as needed), HSTS, `frame-ancestors 'none'` / `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera=(), geolocation=(), microphone=(self) for the speak screen).
9. CORS: exact origin allowlist, never `*` on authenticated routes; `Allow-Credentials` only with specific origins.
10. Production: no public source maps, `/.git` not served, error pages without stack traces, no verbose logging.
11. Environments: preview deployments never use production DB, payment or LLM keys (previews are reachable by URL).

### Supply chain (A03)
12. Lockfile committed, `npm ci` in builds, audit in CI, `--ignore-scripts` where possible, minimal deps.

### Injection and input (A05)
13. Drizzle query builder or `sql` template tags only; never `sql.raw` with user input.
14. No mass assignment: never spread a request body into insert/update; pick allowed fields.
15. TypeScript types aren't runtime checks: zod on every body, query param, webhook and form.
16. No `{@html}` on user or LLM output.

### Payments and integrity (A08)
17. Prices from `$lib/plans.ts` on the server; plan/user metadata on a payment session set by the server.
18. Webhooks: signature verified on the raw body (`await request.text()` before parsing), idempotent per event id.
19. Access/plan status read from the DB on every protected request, not from a login-time value or JWT claim.
20. Coupon redemption atomic (no race past `max uses`).

### Rate limiting and abuse (LLM10)
21. Limits on: auth flows, LLM routes, email sending, file processing (OCR, uploads).
22. Counters not writable by users (no RLS-open public table); per-instance memory isn't a real limit on serverless.
23. Combine per-IP and per-user limits (IP alone: rotated; user alone: new accounts).
24. Billing alerts on Vercel, Supabase and the LLM provider; hard spend cap at the provider; per-user hard quota in the app.

### LLM
25. Student text goes in a separate user message, never concatenated into instructions; the model has no tools or secrets.
26. LLM output is untrusted input: parse with zod, clamp scores to the rubric, render as text, never execute.
27. Limits: max input chars / image size, max output tokens, request timeout.

### Supabase / DB
28. RLS on every table in exposed schemas (Drizzle migrations create tables with RLS off; check `pg_tables` where `rowsecurity = false`). Junction/log tables too. Server-only tables also revoke the `anon` / `authenticated` grants (RLS doesn't cover `TRUNCATE`).
29. No `USING (true)` or `USING (auth.uid() IS NOT NULL)` on select/update/delete; insert/update policies have `WITH CHECK`.
30. Users can't update sensitive columns (role, plan, credits): keep them in server-only tables or use column grants.
31. `SECURITY DEFINER` functions live outside `public`, set `search_path = ''`, validate inputs.
32. Storage: public read OK for `vocab-images`, upload/delete restricted to staff, MIME and size limits.
33. 2FA on the dashboard; secret key and `DATABASE_URL` server-only.

### Mobile build
34. The bundle holds public values only; all secret-key calls go through our `/api`.
35. Tokens: `localStorage` is plaintext on disk; keep the Supabase session out of long-lived storage where possible.
36. Deep links: validate every parameter, no tokens in URLs, no destructive action without confirmation.

### Logging and errors (A09, A10)
37. Fail closed: when auth, access or quota checks error, paid/LLM routes deny. Only offline content may fail open.

### Privacy (Israel Protection of Privacy Law, Amendment 13; Data Security Regulations 5777)
38. Privacy notice: purpose, controller, recipients, access/correction rights; data minimization; account deletion also removes server rows; check DPO need (large-scale minors' data); minors' consent follows guardianship law.
39. Security regulations: access control, encryption at rest/in transit, periodic audit, written incident procedure.

### Ops
40. 2FA on GitHub, Vercel, Supabase, npm, LLM provider; host secrets marked sensitive; key rotation steps known.

## Report format

- Critical issues (leaked secret, RLS off, auth bypass) go at the very top.
- Then by severity: Critical > High > Medium > Low. Only genuine security issues, no style nits.
- Per issue: `file:line`, vulnerability name, what an attacker can concretely do, before/after fix.
- Skip clean areas. End with a fix list ordered by exploitability and impact, and the grade.

## Grading scale

- **9-10:** checklist met, no open high items, monitored.
- **7-8:** no exploitable issue; some hardening missing.
- **5-6:** at least one exploitable medium, or several missing basics.
- **3-4:** an exploitable high (data exposure, auth bypass, unbounded spend).
- **1-2:** critical exposure (secret leaked, open admin, public PII).

## References

- [OWASP Top 10:2025](https://owasp.org/Top10/2025/)
- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)
- [vibe-security skill (common AI-coding security mistakes)](https://github.com/raroque/vibe-security-skill)
- [Shai-Hulud npm worm (Microsoft)](https://www.microsoft.com/en-us/security/blog/2025/12/09/shai-hulud-2-0-guidance-for-detecting-investigating-and-defending-against-the-supply-chain-attack/)
- [Supabase RLS docs](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Israel PPL incl. Amendment 13](https://edlaw.eduverse.com/docs/jurisdiction/nat/il/protection-of-privacy-law)
- SvelteKit advisories: https://github.com/sveltejs/kit/security/advisories
