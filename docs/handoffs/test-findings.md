# Handoff: test findings (from the testing plan runs)

Found by `front/e2e` (Playwright), hands-on persona runs and a break-it round. Run: `npm run e2e` (phone + desktop), `npm run e2e:content` (crawler, ~5 min).

## Fixed

- [x] **A finished lesson was lost if the student left from the "כל הכבוד" screen** (saved only on "המשך לשיעור הבא" / "חזרה למסלול"). Now saved when the finish screen shows (`LessonRunner` `onPass`).
- [x] **The day's streak popup opened over the next lesson.** Same cause; it now greets the finish screen.
- [x] **Exam: "הגש מבחן" stayed disabled until the essay reached its minimum words.** A short or empty essay now submits (grading already deducts for length; the timer submitted it anyway).
- [x] **Exam: a confirmed exit still showed the exam as unfinished** ("באמצע", "התחלה").
- [x] **Exam passage on a phone: printed lines wrapped again** (ragged column, line numbers off from desktop; notes.txt). The text shrinks to fit the longest line (`PassageBody`): no wraps from 390px wide, at ~12-12.6px. Under 390px some lines still wrap (12px floor).
- [x] **Exam header: an empty `<h1>`** (`AppBar` without a title).
- [x] **Dark theme: module hero "continue" button unreadable** (light teal on white, 1.7:1).
- [x] **Home page demo highlight unreadable** (1.2:1 dark): dark ink on the gold.
- [x] **Home page card scroller not keyboard reachable.**
- [x] **Lesson path nodes had no names for screen readers** (an emoji, or "ייפתח בקרוב" without the lesson). Now: title, plus "הושלם" / "נעול".
- [x] **`c-vocab-test`: an empty screen** (a preface of only `{d:rtl}`; `isScreenEmpty` now ignores line attributes).
- [x] **Home, module E: "6 מילים לחזרה היום" for a new student** (reviews + new): now "6 מילים להיום".
- [x] **Tester welcome, 3rd item repeated itself.**
- [x] **Streak page: two `<h1>`.**
- [x] **Staff: the lesson runner's debug button sat under the feedback button.**

## Fixed: break-it round

Corrupt stored data, hand-typed URLs, hostile input, rushed and interrupted use, API fuzzing. Regression tests: `e2e/robustness.spec.ts`, `tests/content-nodes.test.ts`.

- [x] **Critical: one malformed editor save blanked the whole app for every student** (home included), and in production it commits straight to `main`. `/api/content-edit` now checks lessons, sections and exams against the zod schemas (400). Bad JSON there was a 500, now 400.
- [x] **Malformed stored values blanked the app** (`activity-days`, exam attempt/results/marker, `module-location`, `speak-stats`, `profile.exam`). They sync to the account, so every device would break with no way out. Readers check the shape and fall back; a root `<svelte:boundary>` shows a Hebrew error with "רענון" instead of a white page.
- [x] **Back (Android back gesture) mid-exam dropped the exam silently.** It now opens the "לצאת מהמבחן?" prompt; closing the tab gets the browser's warning.
- [x] **Submitting an exam offline stuck on "בודקים..." forever** (the spell-check's dictionary fetch threw before grading). Answers now come back "not graded" with "בדיקה חוזרת".
- [x] **Two tabs: one tab's save undid the other's** (a lesson finished in tab A vanished when tab B saved). Stores now reload on the `storage` event.
- [x] **A double tap on "check" skipped the answer's feedback.** The button waits 400ms after feedback shows.
- [x] **Answers over 4,000 characters came back "not graded" on every retry** (the server's limit). Answer boxes cap at it (`MAX_TEXT`, shared).
- [x] **Exam grading had no daily cap.** The 24h lock is keyed on the client's quiz id and attempt, so a script could spend the app-wide daily cap (600) and leave every student with "service is busy". Now 40 per user per day.
- [x] **`/api/ocr` sent non-images to the paid LLM.** Now 415 unless it's a JPEG.

Held up: XSS (student text is escaped before markdown; `javascript:` links don't render; CSP), path traversal in the editor API (ids are regex-checked), code injection into content files (values emitted as escaped literals), coupon over-redemption (row lock), locked lessons via `?lesson=`, unknown units/modules/exams, `/api/grade`, `/api/speak` and `/api/chat-speak` input validation (400 on every malformed body).

## Open

- [ ] **Arabic copy of `home.hookWords`** still says "for review" (same issue as the Hebrew one).
- [ ] **Brand teal contrast** (white on teal 3.3:1): owner's call to keep it; axe's color-contrast rule is off.
- [ ] **`/api/grade` trusts the client's grading context** (question, editor notes, points, mechanics). Scores live on the device anyway, so only the LLM spend matters, and the daily caps bound it. Server-side lookup by screen id would close it.
- [ ] **Prompt injection in answers** ("ignore the rubric...") is untested: needs the real model. The prompts mark the answer as data.

## COBE (parked, not tested)

- [ ] **AI chat and COBE speaking fail on the built site.** The CSP's `connect-src 'self'` blocks `fetch(blob:...)` of the recording (`chatAi.ts`, `speakingAi.ts`, `Speak.svelte`): every turn shows "לא הצלחנו לשמוע את התשובה". Dev has no CSP. Fix: `blob:` in `connect-src` (`vite.config.ts`).

## Not covered yet

- Accounts on (phase 4) and the accounts-on API checks: waits for the test-Supabase decision.
- COBE exam and chat (parked).
- Persona runs as a scheduled job (phase 6): done by hand this round.
