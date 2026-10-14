# Platform: web, mobile, accounts

One SvelteKit codebase (`front/`), two build targets.

## Routes

| Path | What | Web | Mobile |
|---|---|---|---|
| `/`, `/privacy`, `/terms` | `routes/(site)` - public pages, pre-rendered | yes | redirects to `/app` |
| `/app/...` | `routes/app` - the student app, client-only (`ssr = false`) | yes | yes (the whole bundle) |
| `/edit`, `/edit-exam`, `/vocab-images` | `routes/(admin)` - authoring tools | yes | redirects to `/app`, links hidden |
| `/api/...`, `/mcp` | server routes | yes | absent - the app calls the web deployment |

Old app URLs (`/unit/...`, `/settings`, `/streak`, `/book`) 308 to `/app/...` (`hooks.server.ts`).

## Builds

- **Web:** `npm run build` - `adapter-auto` (picks Vercel/Netlify/Cloudflare on the host). Vercel is only the dev site for now.
- **Mobile:** `npm run build:mobile` (`vite build --mode mobile`) - `adapter-static` SPA in `build-mobile/`, Capacitor's `webDir`.
  - `$lib/platform.ts` `MOBILE_BUILD` is the compile-time switch.
  - `.env.mobile` (committed, public values only) sets `VITE_API_BASE` to the web deployment. Change it when there's a real domain.
- **All calls to our server go through `apiFetch` (`$lib/api.ts`):** base URL + the session's bearer token.
- **CORS:** `/api/grade`, `/api/ocr` and `/api/account` accept the Capacitor origins (`capacitor://localhost`, `https://localhost`).

## Accounts (Supabase Auth, email + password)

Off until the env vars are set; the app then runs open, as before. Once set:

- `/app` shows the login screen until there's a session (`$lib/auth.svelte.ts`, `LoginScreen.svelte`): sign in, sign up, forgot password.
- **The email only verifies.** Sign-up and password reset send a link; everyday sign-in is email + password. Links open in a browser and point at the web deployment (`VITE_API_BASE` from the mobile app, else the current origin) + `/app`. A reset link lands on `/app` in "choose a new password" mode.
- The phone-code (OTP) sign-in is a disabled mockup (`OTP_ENABLED` in `LoginScreen.svelte`), not wired to anything.
- **Roles:** staff have `app_metadata.role = "admin"` (set only with the secret key: `node --env-file=.env.local scripts/create-admin.mjs <email>...`, passwords to `front/admin-users.local.txt`). `auth.isAdmin` gates the editing links, the `/edit`, `/edit-exam` and `/vocab-images` pages, the debug tools and the settings developer section; `/api/content-edit/*` returns 403 to non-staff. With accounts off, everything stays open (dev).
- `/api/grade`, `/api/ocr` and `/api/account` need `Authorization: Bearer <token>`. Otherwise they return 401.
- **Settings > account:** sign out, and delete account (`DELETE /api/account`, which uses the secret key). Deleting also clears this device's progress.

### Turning it on

1. Env vars in `.env.local` and on the host:
   - `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` (public; the mobile build reads them from `.env.local` too)
   - `SUPABASE_SECRET_KEY` (server only)
2. **Authentication > Sign In / Providers > Email:** "Confirm email" on, minimum password length 8.
3. **Authentication > URL Configuration:** Site URL = the web deployment; add `<web deployment>/**` to Redirect URLs (the email links go to `/app`).
4. **Email sending:** Supabase's built-in sender is for testing only: a couple of emails an hour, and only to your organization's team members. Before real students sign up, set custom SMTP (needs a domain for Resend; Gmail with an app password works for development). The default link-only templates are fine for this flow; customizing them needs custom SMTP.

## Capacitor, on the day

`@capacitor/core` and `@capacitor/cli` are installed; `capacitor.config.ts` points at `build-mobile`.

1. Settle `appId` in `capacitor.config.ts`. It's permanent once the app is published.
2. `npm i @capacitor/android @capacitor/ios`, then `npx cap add android` / `npx cap add ios`.
3. `npm run cap:sync` (mobile build + copy into the native projects), then open in Android Studio / Xcode.

Not done yet: progress lives in `localStorage` per device. Syncing it to the account needs tables (Drizzle) and is a separate step.

## `/mcp` endpoint (screen editing for outside editors)

Read-only MCP server (`@modelcontextprotocol/server` v2, stateless per request, no auth). Lets Claude on the web get the rule book and validate screens; edited JSON goes back through the editor (`/edit` → a screen's **JSON** panel → **החל**). Connect once per person: Claude → Settings → Connectors → custom connector → `<web deployment>/mcp` (paid plan).

| name | kind | what |
| --- | --- | --- |
| `get_editing_guide` | tool | `docs/ai-editing.md` plus every file it links, live from GitHub `main` |
| `read_repo_file` | tool | one file live; only under `docs/`, `QC_report/`, `front/src/lib/` |
| `get_screen_schema` | tool | screen types, or one type's JSON Schema (deployed code) |
| `validate_screens` | tool | one screen or an array; same checks as the editor (deployed code) |
| `edit_screens` | prompt | "יצירה ועריכה של מסכים" |

- Rules follow `main` with no deploy: edit `ai-editing.md` or a file linked under its "Always read". Keep `ai-editing.md` at its path and free of dev notes, since editors receive it whole.
- Screen shapes live once in `lesson-screens/schema.ts`; validation (`screenChecks.ts`) runs deployed code, so it follows the last deploy. Server: `server/mcp.ts`, `server/repoFiles.ts`, `routes/mcp/+server.ts`.
- If `GITHUB_TOKEN` is rejected (401) the reader falls back to public raw GitHub (up to ~5 min stale), and `/edit`'s save-to-GitHub breaks too. Add a token check before any tool that writes.
