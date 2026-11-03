# Handoff: test findings (from the testing plan runs)

Found by `front/e2e` (Playwright) and persona runs. Fix, then tick.

## Phase 2: smoke

Axe's color-contrast rule is off: the brand teal stays as is (owner's call). Listed below are only the unreadable cases.


- [ ] **Dark theme: module hero "continue" button unreadable.** `bg-white text-brand-dark` = light teal on white, 1.7:1 (`/app/unit/*/module/*`).
- [ ] **Home page: highlighted `<mark>` in the demo** (`m-anchor`): 1.2:1 in the dark theme.
- [ ] **Home page: horizontal card scroller not keyboard reachable** (`ul.scrollbar-none`, axe scrollable-region-focusable).
- [ ] **Staff: the lesson runner's debug button sits under the feedback button** (same corner, feedback is on top).

## Phase 3: journeys


- [ ] **A finished lesson is lost if the student leaves from the "כל הכבוד" screen.** The round is saved only when "המשך לשיעור הבא" / "חזרה למסלול" is tapped; closing, reloading or the X on the finish screen drops it. Save on reaching the finish screen.
- [ ] **The day's streak popup opens over the next lesson** ("המשך לשיעור הבא"), not over the finish screen that earned it. Same root cause as above.

- [ ] **Exam: "הגש מבחן" stays disabled until the essay reaches its minimum words** (e.g. 70). A short or missing essay blocks submitting the whole exam, though grading already scores it (length deduction, 0 under 25 words).
- [ ] **Exam: after "יציאה מהמבחן" (confirmed, "nothing is kept") it still shows as unfinished**: "באמצע" in the list and "התחלה" instead of "התחלת מבחן". Clear the marker on a confirmed exit.
- [ ] **Exam passage on a phone: every printed line wraps again** ("cannot see well or are / blind."), a ragged column; also why line numbers differ between phone and desktop (notes.txt).
- [ ] **Exam dialog: an empty `<h1>`** in its header (screen readers announce a blank heading).

- [ ] **Home, module E: "6 מילים לחזרה היום" for a new student**: the count is reviews + new words (the words page says 0 to review, 6 new). Copy: "להיום", not "לחזרה".
- [ ] **Tester welcome, 3rd item repeats itself**: "אנחנו עדיין מכווננים את ה-AI" then "...נותן AI, ואנחנו עדיין מכווננים אותו".

- [ ] **Streak page: two `<h1>`** ("הרצף שלי" and the week count).

## Phase 5: content crawler

330 lesson rounds, every screen, phone: no crashes, no sideways overflow.

- [ ] **`c-vocab-test`: an empty screen.** A preface that is only `{d:rtl}` counts as text (`isScreenEmpty` doesn't strip directives).

## COBE (parked, not tested)

- [ ] **AI chat and COBE speaking fail on the built site.** The CSP's `connect-src 'self'` blocks `fetch(blob:...)` of the recording (`chatAi.ts`, `speakingAi.ts`, `Speak.svelte`): every turn shows "לא הצלחנו לשמוע את התשובה". Dev server has no CSP, so it never showed there. Fix when COBE is back: `blob:` in `connect-src` (`vite.config.ts`).
