# Security audit rule book

Reusable checklist for auditing this app (SvelteKit + Supabase + Drizzle + LLM routes + `/mcp`, Vercel, Capacitor, users are minors). Re-run it before launch and after any change to auth, `/api`, `/mcp`, payments or dependencies.

## How to run an audit

1. Refresh the threat list: search for new CVEs for `@sveltejs/kit`, `svelte`, `vite`, `devalue`, `@supabase/*`, `@modelcontextprotocol/*`, and new npm supply-chain incidents. Add anything relevant to "Known exploit classes".
2. Check installed versions (`node_modules/<pkg>/package.json`), then `npm audit --omit=dev` and `npm audit`.
3. Walk every server entry point: `hooks.server.ts`, `routes/api/**`, `routes/mcp`, `lib/server/**`.
4. Check Supabase (RLS, policies, storage buckets, auth settings) and host env vars.
5. Score each area below 0-10 and give an overall grade with a fix list ordered by priority (exploitable now > before launch > hardening).

## Known exploit classes

| ID | Class | What to check |
|---|---|---|
| E1 | SvelteKit CVEs (remote form DoS, prototype pollution, deserialization, cross-request data race) | Kit >= 2.69.1 at minimum; check GitHub advisories for newer |
| E2 | `devalue` (SvelteKit serializer): DoS, `__proto__` bypass | Version > 5.9.2 or newer advisory fix |
| E3 | Transitive DoS libs (`brace-expansion`, `source-map-js`), `cookie` < 0.7 | `npm audit` clean or each item justified |
| E4 | npm worms (Shai-Hulud family): steal tokens on install, plant `.claude/settings.json` / `.vscode/tasks.json` | Lockfile committed, `npm ci`, soak period before upgrading, no unexpected files in those paths |
| E5 | Vite dev server `server.fs.deny` bypasses (incl. Windows backslash) | Patched Vite; dev server never on `--host` in untrusted networks |
| E6 | Unauthenticated remote MCP servers | `/mcp` auth, read-only tools, input limits, rate limit |
| E7 | Prompt injection, direct (student text) and indirect (OCR'd images) | Grader prompts isolate student input; output schema-validated |
| E8 | System prompt leakage | Prompts hold no secrets; security never depends on the prompt |
| E9 | Unbounded LLM consumption (cost / DoS) | Per-user quota, global cap, input size limit, max tokens, timeouts; burst limit not per-instance only |
| E10 | Supabase misconfig: RLS off, `USING (true)`, `SECURITY DEFINER` functions, leaked secret key | Every exposed table has RLS; secret key server-only |

## Checklist

### Web app (OWASP Top 10:2025)
1. **Access control:** every `/api` route checks the session on the server; admin checks use `app_metadata.role` from a verified token, never a client flag; no IDOR (user ids come from the token, not the request).
2. **Config:** CSP, HSTS, `frame-ancestors`, `Referrer-Policy`, `X-Content-Type-Options`; CORS is an exact allowlist; errors return no stack traces.
3. **Supply chain:** lockfile committed, `npm ci` in builds, audit in CI, `--ignore-scripts` where possible, minimal deps.
4. **Secrets / crypto:** no secrets in `VITE_*` or `PUBLIC_*` vars, no committed `.env*` with secrets, TLS only.
5. **Injection:** Drizzle parameterized queries only (no raw `sql` with user strings); no `{@html}` on user or LLM output; zod on every request body.
6. **Auth:** Supabase JWT verified server-side (`auth.getUser` or JWKS, not decode-only); leaked-password protection on; CAPTCHA / rate limit on sign-up, sign-in and reset; exact redirect URLs, no open redirects.
7. **Integrity:** prices computed on the server; payment webhooks signature-verified and idempotent; coupon redemption atomic (no race past `max uses`).
8. **Logging:** Sentry scrubs PII (tokens, emails, essay text); no replay; failures alerting exists.
9. **Fail closed:** when a check (auth, access, quota DB) errors, paid/LLM routes deny. Only offline content may fail open.

### LLM
10. Student text goes in a delimited user message, never concatenated into instructions; the model has no tools or secrets.
11. Output parsed with zod; scores clamped to the rubric range; rendered as text.
12. Limits: max input chars / image size, max output tokens, request timeout, per-user daily quota, global spend cap and provider-side budget alert.

### MCP endpoint
13. Auth (OAuth 2.1 + PKCE, or a scoped per-editor token); read-only tools; no filesystem path built from input (`repoFiles` traversal); body size and rate limits.

### Supabase / DB
14. RLS on every table in exposed schemas; no permissive policies; secret key and `DATABASE_URL` server-only; storage buckets: public read OK, upload restricted to staff, MIME/size limits; 2FA on the dashboard.

### Mobile (Capacitor)
15. The bundle holds public values only; tokens stored by the Supabase client, not in custom plaintext; CORS allows only the Capacitor origins.

### Privacy (Israel Protection of Privacy Law, Amendment 13; Data Security Regulations 5777)
16. Privacy notice: purpose, controller, recipients, access/correction rights; data minimization; working account deletion that also removes server rows; check DPO need (large-scale minors' data); minors' consent follows guardianship law.
17. Security regulations: access control, encryption at rest/in transit, periodic audit, written incident procedure.

### Ops
18. 2FA on GitHub, Vercel, Supabase, npm, LLM provider; host secrets marked sensitive; separate preview and prod keys; key rotation steps known.

## Grading scale

- **9-10:** checklist met, no open high items, monitored.
- **7-8:** no exploitable issue; some hardening missing.
- **5-6:** at least one exploitable medium, or several missing basics.
- **3-4:** an exploitable high (data exposure, auth bypass, unbounded spend).
- **1-2:** critical exposure (secret leaked, open admin, public PII).

## References

- [OWASP Top 10:2025](https://owasp.org/Top10/2025/)
- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)
- [MCP security risks and controls (Checkmarx)](https://checkmarx.com/learn/mcp-security-risks-real-world-incidents-and-security-controls/)
- [Shai-Hulud npm worm (Microsoft)](https://www.microsoft.com/en-us/security/blog/2025/12/09/shai-hulud-2-0-guidance-for-detecting-investigating-and-defending-against-the-supply-chain-attack/)
- [Supabase RLS docs](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Israel PPL incl. Amendment 13](https://edlaw.eduverse.com/docs/jurisdiction/nat/il/protection-of-privacy-law)
- SvelteKit advisories: https://github.com/sveltejs/kit/security/advisories
