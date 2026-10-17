---
name: ui-review
description: Review or build student-facing UI (Svelte pages/components under front/src) against the product's UX principles and the Vercel Web Interface Guidelines. Use when designing a screen, before committing UI changes, or when asked to audit/review UI. Not for /edit, /edit-exam or /vocab-images authoring tools.
---

# UI review

Two layers, in this order of authority:

1. **docs/ux-principles.md** - product decisions (goals, tone, exams, gamification, ads,
   device split, copy). It overrides any generic rule.
2. **references/web-interface-guidelines.md** - Vercel's code-level checklist (pinned copy).

## Procedure

1. Read docs/ux-principles.md. Name the screen's job: who arrives, from where, the one
   primary action, what "done" looks like, and what comes next (no dead ends).
2. Check the screen against the principles (section by section).
3. Check the files against the guidelines, with the overrides below.
4. Look at it: screenshot mobile (390px, touch) and desktop (1280px), both themes when
   colors changed. Full-page captures at desktop width can render Hebrew mirrored in
   headless Chromium - use viewport captures there.
5. Report findings as `file:line - issue -> fix`, grouped by file, most severe first.
   Tag each with its source: `[P:<principle>]` or `[G:<guideline section>]`.

## Motion and feedback are required, not polish

A screen with no motion or feedback fails review. For every screen, check each:

1. **Entrance:** content arrives, it doesn't just appear. Lists and cards use
   `fly` + `staggerDelay(i)` from `$lib/motion` (see home); route changes already
   cross-fade via view transitions in `+layout.svelte`.
2. **Press feedback:** every tappable thing reacts instantly - `active:scale-[0.98]`
   (or `.puck-3d` for primary buttons) plus a hover state. No dead taps.
3. **State change feedback:** when a number, bar or status changes, it animates
   (`transition-[width]`, tweens like the lesson score count-up), never snaps.
4. **Success and progress moments get a reward:** finishing a lesson/round/exam,
   a new best score, a section done -> confetti, star pop-ins, a celebratory
   transition (`Confetti.svelte`, the node "pop"). Failure gets a calm response,
   never a red flash or shake (see the principles: no shaming).
5. **Loading and waiting:** anything async (grading, OCR, fetch) shows motion
   ("בודקים...", a spinner or skeleton), never a frozen screen.
6. **Respect `prefers-reduced-motion`:** `staggerDelay` already returns 0; CSS
   animation goes through the guards in `layout.css`. Only animate `transform` and
   `opacity` (plus width on progress bars). Never `transition: all`.
7. **Budget:** entrances 200-300ms, press feedback under 120ms, celebrations may
   run longer but must be skippable by just tapping on. Motion never delays the
   student's next action, and never blocks reading.

When reviewing, list missing motion/feedback as findings like any other issue,
tagged `[P:motion]`.

## Overrides to the guidelines (this project)

- **Accessibility and Focus States: deferred** to a later pass. Don't fix; report only
  what breaks use for everyone (e.g. a label that isn't visible).
- **Svelte, not React:** `onclick`/`bind:value` replace `onClick`/`onChange`; ignore
  `nuqs`, `suppressHydrationWarning`, `<Link>`. The app is client-rendered: skip
  Hydration Safety.
- **Copy is Hebrew** (AGENTS.md: Hebrew-only UI text): no Title Case; quotes and
  ellipsis per Hebrew usage; lesson content uses at most a single `-`, never an em-dash.
  Address the student in plural (`לכם`, `סיימתם`). English exam/passage titles stay
  English and get `dir="auto"`.
- **RTL:** logical properties only (`ms-`/`me-`/`ps-`/`pe-`/`start`/`end`), never
  `left`/`right` for layout.
- **Navigation & State** (URL reflects state): apply to pages, not to transient UI
  like a node's label popup.
- **Reuse before building:** Button, StatTile, AppBar, ChoiceList, Sheet,
  LessonProgressBar in `$lib/components`; dashboard cards in `$lib/dashboard`.
  A pattern used twice becomes a component.
