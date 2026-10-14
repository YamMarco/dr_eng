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

## Accounts (Supabase Auth, email one-time code)

Off until the env vars are set; the app then runs open, as before. Once set:

- `/app` shows the login screen (email -> code) until there's a session (`$lib/auth.svelte.ts`).
- `/api/grade`, `/api/ocr` and `/api/account` need `Authorization: Bearer <token>`. Otherwise they return 401.
- **Settings > account:** sign out, and delete account (`DELETE /api/account`, which uses the secret key). Deleting also clears this device's progress.

### Turning it on

1. Create the Supabase project (or reuse the one in `.env.example`'s `DATABASE_URL`).
2. **Authentication > Emails > Magic Link template:** put the code in the email - `{{ .Token }}` - instead of the link. A link would open the browser, not the mobile app. Write the template in Hebrew.
3. **Authentication > URL Configuration:** Site URL = the web deployment.
4. Set the env vars in `.env.local` and on the host:
   - `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` (public; the mobile build reads them from `.env.local` too)
   - `SUPABASE_SECRET_KEY` (server only)
5. **Email sending:** Supabase's built-in sender is rate-limited (a few emails an hour). That's fine for development. Before real students arrive, set custom SMTP (e.g. Resend), which needs a domain.

## Capacitor, on the day

`@capacitor/core` and `@capacitor/cli` are installed; `capacitor.config.ts` points at `build-mobile`.

1. Settle `appId` in `capacitor.config.ts`. It's permanent once the app is published.
2. `npm i @capacitor/android @capacitor/ios`, then `npx cap add android` / `npx cap add ios`.
3. `npm run cap:sync` (mobile build + copy into the native projects), then open in Android Studio / Xcode.

Not done yet: progress lives in `localStorage` per device. Syncing it to the account needs tables (Drizzle) and is a separate step.
