# Platform: web, mobile, accounts

One SvelteKit codebase (`front/`), two build targets.

## Routes

| Path | What | Web | Mobile |
|---|---|---|---|
| `/`, `/about`, `/plans`, `/privacy`, `/terms` | `routes/(site)` - public pages, pre-rendered | yes | redirects to `/app` |
| `/checkout` | `routes/(site)/checkout` - client-only (needs the session) | yes | redirects to `/app` |
| `/app/...` | `routes/app` - the student app, client-only (`ssr = false`) | yes | yes (the whole bundle) |
| `/edit`, `/edit-exam`, `/vocab-images` | `routes/(admin)` - authoring tools | yes | redirects to `/app`, links hidden |
| `/api/...` | server routes | yes | absent - the app calls the web deployment |

Home page (`/`) photos and looping videos: files in `front/static/home/`, paths in `$lib/site/media.ts`; an empty slot shows gradient art.

Old app URLs (`/unit/...`, `/settings`, `/streak`, `/book`) 308 to `/app/...` (`hooks.server.ts`).

## Builds

- **Web:** `npm run build` - `adapter-auto` (picks Vercel/Netlify/Cloudflare on the host). Vercel is only the dev site for now. Security headers and the install command (`npm ci`) are in `front/vercel.json`; the CSP (built pages only) in `vite.config.ts` - a new external origin (fonts, CDN, analytics) must be added there.
- **Mobile:** `npm run build:mobile` (`vite build --mode mobile`) - `adapter-static` SPA in `build-mobile/`, Capacitor's `webDir`.
  - `$lib/platform.ts` `MOBILE_BUILD` is the compile-time switch.
  - `.env.mobile` (committed, public values only) sets `VITE_API_BASE` to the web deployment. Change it when there's a real domain.
- **All calls to our server go through `apiFetch` (`$lib/api.ts`):** base URL + the session's bearer token.
- **CORS:** the student APIs (`STUDENT_APIS` in `hooks.server.ts`) accept the Capacitor origins (`capacitor://localhost`, `https://localhost`).

## Accounts (Supabase Auth, email + password)

Off until the env vars are set; the app then runs open, as before. Once set:

- `/app` shows the login screen until there's a session (`$lib/auth.svelte.ts`, `LoginScreen.svelte`): sign in, sign up, forgot password.
- **The email only verifies.** Sign-up and password reset send a link; everyday sign-in is email + password. Links open in a browser and point at the web deployment (`VITE_API_BASE` from the mobile app, else the current origin) + `/app`. A reset link lands on `/app` in "choose a new password" mode.
- The phone-code (OTP) sign-in is a disabled mockup (`OTP_ENABLED` in `LoginScreen.svelte`), not wired to anything.
- **Roles:** staff have `app_metadata.role = "admin"` (set only with the secret key: `node --env-file=.env.local scripts/create-admin.mjs <email>...`, passwords to `front/admin-users.local.txt`). `auth.isAdmin` gates the editing links, the `/edit`, `/edit-exam` and `/vocab-images` pages, the debug tools and the settings developer section; `/api/content-edit/*` returns 403 to non-staff. With accounts off, everything stays open (dev).
- Every `/api` route needs `Authorization: Bearer <token>`, otherwise 401, except those named in `PUBLIC_APIS` (`hooks.server.ts`): only `/api/waitlist`. `hooks.server.ts` matches on `event.route.id`, never the raw path (`/api/%67rade` routes to `/api/grade`), and handlers check `locals` again.
- **LLM spend guard** (`server/llmGuard.ts`, on `/api/grade`, `/api/speak`, `/api/chat-speak`, `/api/ocr`): outside dev, accounts and `DATABASE_URL` on and a signed-in user (fails closed, so a preview without a DB has no LLM); with billing on, an active plan (402 otherwise; staff pass); a daily quota per user (`DAILY_LIMIT`, counted in the `llm_usage` table, 429 when over) and for everyone together (`GLOBAL_DAILY_LIMIT`, 503); a per-instance burst limit.
- **Settings > account:** sign out, and delete account (`DELETE /api/account`, which uses the secret key). Deleting also removes the account's progress and LLM usage rows and clears this device's; orders stay (purchase records for tax law).

### Turning it on

1. Env vars in `.env.local` and on the host:
   - `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` (public; the mobile build reads them from `.env.local` too)
   - `SUPABASE_SECRET_KEY` (server only)
2. **Authentication > Sign In / Providers > Email:** "Confirm email" on, minimum password length 8.
3. **Authentication > URL Configuration:** Site URL = the web deployment; add `<web deployment>/**` to Redirect URLs (the email links go to `/app`).
4. **Email sending:** Supabase's built-in sender is for testing only: a couple of emails an hour, and only to your organization's team members. Before real students sign up, set custom SMTP (needs a domain for Resend; Gmail with an app password works for development). The default link-only templates are fine for this flow; customizing them needs custom SMTP.

## Plans, checkout, access

Off until `DATABASE_URL` is set (and accounts are on): `/api/access` then answers "active" for everyone and the app stays open.

- **Plans** live in `$lib/plans.ts` (id, price in agorot, months); names and features in i18n `plans.items`. The server prices orders from there, never from the client. Prices are placeholders.
- **Tables** (`server/db/schema.ts`, RLS on with no policies and no grants to the API roles, so the publishable key can't touch them): `coupons` (code, percent off, optional plan, max uses, expiry) and `orders` (one per checkout; `paid`/`free` with `access_until` ahead = access).
- **Access gate:** `/app` shows `Paywall.svelte` (redeem a code; plans link on web only, store apps can't link to outside purchases) while `/api/access` says no. Staff always pass. If the server can't be reached the app stays open (offline use).
- **Checkout** (`/checkout?plan=<id>&coupon=<code>`): sign up / in (the confirmation email returns to the same URL), apply a code (`/api/checkout/quote`), then `/api/checkout`. A 100% code completes at once (`free` order); access stacks on any remaining time. A paid total goes to `startPayment` in `server/payments.ts`, which returns null until a provider is wired (503 `payments-unavailable`). Wiring one: implement `startPayment`, add a webhook route that calls `completeOrder`.
- **Coupons:** `node --env-file=.env.local scripts/create-coupon.mjs <RANDOM-CODE> --percent 100 --max 50 --expires 2027-01-01` (no code = list with use counts). The repo is public: a 100% code is random, never a word, and needs `--max` and `--expires`. Tester link: `<web>/checkout?coupon=<code>`.
- **Migrations:** `npm run db:migrate` (needs `DATABASE_MIGRATE_URL`, the session pooler on 5432). Set `DATABASE_URL` (transaction pooler, 6543) on the host too.

## Waitlist

The home page CTAs (`$lib/site/JoinCtas.svelte`: waitlist or code, side by side) post an email to `/api/waitlist`: no account, stored lower-cased in the `waitlist` table (email + time only, users are minors). Duplicates are ignored, a honeypot field drops bots, and a daily cap (`DAILY_CAP`, 429) bounds what a script can write. Off (503) without `DATABASE_URL`. Read the list in Supabase's table editor.

## Progress sync

Progress follows the account (needs accounts and `DATABASE_URL`; otherwise it stays on the device). `localStorage` is the working copy; the `progress` table keeps one JSON row per key.

- **Synced keys:** `isSyncedKey` in `$lib/progressMerge.ts` (lessons, word deck, practice days, module location, last engagement, profile, my phrases, speaking stats, chat count, exam attempts and results). Theme, language, debug flags and the exam in-progress marker stay on the device; spoken-take audio never leaves it.
- **Writes:** stores save with `saveSynced(key, value)` (`$lib/progressSync.svelte.ts`), never `localStorage.setItem`, for a synced key. Pushed 3 s later in batches, and when the page is hidden. A store that holds the value in state registers `onSyncedChange(key, reload)`.
- **Merge** (`progressMerge.ts`, same code on client and `/api/progress`): never loses work. Max rounds per lesson, later review per word, union of days / phrases / results, newer `ts` / `submittedAt`; profile and last engagement keep the newer copy (`at`, the device clock). `{ replace: true }` overwrites (debug reset).
- **Sign-in:** pull, merge, push what differs. On a device the account used before, the app opens at once and merges in the background; on a new one it waits for the pull (max 4 s). Another account signing in on the device clears the previous one's local progress first (`progress-owner`).
- **Limits** (`/api/progress`): known keys only, 100 keys a request, 100 KB a value, 1 MB a body, 400 rows per user.
- **Renaming a lesson or exam id** (`legacyIds.ts`) now also needs the same rename on the `progress` rows.
- New synced key: add it to `isSyncedKey` and give it a merge in `mergeFor` (else newer copy wins).

## Word-card images

Public Supabase Storage bucket `vocab-images`. Content keeps `/vocab-images/<file>`; `lesson-screens/vocabImage.ts` maps it to the bucket URL. `/edit` uploads go straight to the bucket (live at once). Bulk copy: `node --env-file=.env.local scripts/upload-vocab-images.mjs <folder>`.

## Error reporting (Sentry)

Off until `VITE_SENTRY_DSN` is set (`.env.local` and the host). `hooks.client.ts` and `hooks.server.ts` report unhandled errors; the LLM routes also report their failures. No replay or tracing (students are minors).

## Capacitor, on the day

`@capacitor/core` and `@capacitor/cli` are installed; `capacitor.config.ts` points at `build-mobile`.

1. Settle `appId` in `capacitor.config.ts`. It's permanent once the app is published.
2. `npm i @capacitor/android @capacitor/ios`, then `npx cap add android` / `npx cap add ios`.
3. Microphone (the `speak` screen): Android `RECORD_AUDIO` in `AndroidManifest.xml`, iOS `NSMicrophoneUsageDescription` in `Info.plist`.
4. `npm run cap:sync` (mobile build + copy into the native projects), then open in Android Studio / Xcode.
