# UX audit

Living doc: top = what's still open, bottom = history (fixed items, decisions).
Snapshot: 2026-10-06. Source: a first-time-student walkthrough of https://dr-eng-five.vercel.app/ (iPhone 13 + 1280px desktop, Playwright), with suspected bugs confirmed in the code.
Original full report (all 17 items + cosmetics, with screenshots): https://claude.ai/artifact/KGfmZ6Zw3mNb9W9Uey6BB1

Difficulty: S = under an hour, M = half a day, L = more than a day.

## Open

### Critical

**#1 Made-up personal scores on the exam pages** - `/exam`, `/exam/[quizId]` - S
- Impact: a first-time student sees "best 92 / last attempt 81 / average 85" for an exam they never took; the exam list shows average score 78 and time 18:42.
- Evidence: hardcoded in `exam/[quizId]/+page.svelte` (marked "Mock scoreboard") and `exam/+page.svelte`. The "last attempt" tile mixes `7/10` with `92`.
- Fix: hide the scoreboard until a real attempt exists ("עדיין לא ניסית את המבחן"); drop the module-level averages.
- Screens: [exam detail](ux-audit/13-exam-detail-m.png), [exam list](ux-audit/12-exam-list-m.png)

**#2 Leaving a timed exam is silent and loses the attempt** - exam runner - S-M
- Impact: one accidental Android Back ends a 90-minute exam with no warning.
- Evidence: Back mid-exam goes straight to `/exam`. The runner is a `running` boolean on the page, not a route or history entry.
- Fix: push a history state when the exam starts; on `popstate` and the exit button, confirm "לצאת מהמבחן? התשובות לא יישמרו"; add `beforeunload`.
- Screen: [exam runner](ux-audit/14-exam-run-viewport-m.png)

**#3 Developer and admin tools are visible to students** - every page - S
- Still open: the 🐞 debug button is on by default (`debugStore.enabled` defaults to `true`) and covers answer options in lessons; "תמונות מילים" (a password-gated admin tool) takes one of the four nav tabs; settings has a "developers" section; ✎ links to the editors are visible.
- Partly done (2026-10-06): the floating ✎ and writing-lab buttons moved from over the lesson path into the app bar, so they no longer cover nodes.
- Fix: default debug to off; put ✎, the word-images tab and the developer settings behind one `isAuthor` flag.
- Screens: [debug button over an answer](ux-audit/09-vocab-08-m.png), [nav tab](ux-audit/02-home-m.png)

### High

**#9 Mixed Hebrew/English prompts render in the wrong order** - lesson MCQ prompts - S-M
- Impact: "השאלה: When were dogs first tamed? - מה המילה…" renders as "?When … -", exactly where the student reads the English question.
- Fix: wrap English runs inside Hebrew prompts in `<bdi>`, or put the English question on its own line.
- Screen: [prompt](ux-audit/09-vocab-08-m.png)

**#10 The fake login screen adds a step with no value** - `/` on first visit - S
- Impact: the first screen is two disabled fields with a tilted "demo only" note covering the phone field and the password label.
- Fix: until real login exists, a one-screen welcome with a single "בואו נתחיל" button.
- Screen: [login](ux-audit/01-home-mobile.png)

### Medium

**#16 Disabled "צפייה בפתרונות" gives no reason** - `/exam/[quizId]` - S
- Fix: hint "זמין אחרי שתסיימו את המבחן"; remove the second back button (the page has two).
- Screen: [exam detail](ux-audit/13-exam-detail-m.png)

### Deferred to the accessibility pass

- **#6 Feedback is colour-only and unexplained** - MCQ and scored screens. Add ✓/✗ + "נכון!" / "לא בדיוק" in a `role="status"` line, `aria-pressed` on options, optional one-line explanation. [screen](ux-audit/11-feedback-0-m.png)
- **#7 Lesson overlay and node popup aren't dialogs** - focus drops to `<body>` on open, the path behind stays reachable, Esc does nothing. Add `role="dialog"`, `aria-modal`, `inert` behind, focus the heading, close on Esc.
- **#13 Booking form** - day buttons announced as bare numbers, unlabeled notes textarea; success copy promises an email the app never collects ("ניצור איתכם קשר" instead).
- Also from #5: locked path nodes are announced as "השיעור הזה ייפתח בקרוב" (wrong reason - they're locked by prerequisites); open nodes are announced by their emoji, not their title.

## History

### Decisions

- **#8 Exam passage lines wrap twice on mobile** - intentional. Passages keep print-style line breaks so the exam looks like the real Bagrut page.

### Fixed on 2026-10-06 (branch ux-fixes, merged)

- **#4** "בדיקה" was tappable before any answer and did nothing. Now disabled until a pick in lesson mode too (Mcq, ClozePick, MarkWord, MarkAll, PassageMcq). MatchPairs left as is (its button skips the screen).
- **#5 (prototype)** Lesson path: titles under open and finished nodes; "התחילו כאן" pill on the first open node before any progress; rows stretched x1.4 and an extra gap at section breaks; section headings are centred dividers in the section's colour; finished ("gold") nodes have a coin texture and a staggered shine (off for reduced motion).
- **#11** Intro title "module c - פתיחה" -> "פתיחה - Module C"; round counter moved from the header (it truncated) to beside the progress bar.
- **#12** "המשך לשיעור הבא" offered when the finished node has exactly one dependent on the path graph (was array order within the section); also on a passed round that completes the node.
- **#14** 404 for unmatched routes shows "העמוד המבוקש לא נמצא" (was English "Not Found"); button says "חזרה לדף הבית".
- **#15** 44px tap targets: exam question chips (29x32), settings switches (56x32), theme options (32 tall), exam ✎ link (57x24). Chips and switches keep their visual size.
- **#17** Home unit cards list each module with its description ("C - טקסט · חיבור") instead of "C · E · COBE".
- **Cosmetic:** duplicate unit badge on Home removed; intro text typos ("מההתחלה.מתקדמים", "לבחינ"); exam-list columns stack on phones; floating ✎/lab buttons moved into the app bar. The "section label under the nav" item was the label sitting at the fold, not a bug.
