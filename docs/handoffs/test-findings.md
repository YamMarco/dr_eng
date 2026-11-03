# Handoff: test findings (from the testing plan runs)

Found by `front/e2e` (Playwright) and hands-on persona runs. Run: `npm run e2e` (phone + desktop), `npm run e2e:content` (crawler, ~5 min).

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

## Open

- [ ] **Arabic copy of `home.hookWords`** still says "for review" (same issue as the Hebrew one).
- [ ] **Brand teal contrast** (white on teal 3.3:1): owner's call to keep it; axe's color-contrast rule is off.

## COBE (parked, not tested)

- [ ] **AI chat and COBE speaking fail on the built site.** The CSP's `connect-src 'self'` blocks `fetch(blob:...)` of the recording (`chatAi.ts`, `speakingAi.ts`, `Speak.svelte`): every turn shows "לא הצלחנו לשמוע את התשובה". Dev has no CSP. Fix: `blob:` in `connect-src` (`vite.config.ts`).

## Not covered yet

- Accounts on (phase 4) and the accounts-on API checks: waits for the test-Supabase decision.
- COBE exam and chat (parked).
- Persona runs as a scheduled job (phase 6): done by hand this round.
