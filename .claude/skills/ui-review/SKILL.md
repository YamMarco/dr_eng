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

## Overrides to the guidelines (this project)

- **Accessibility and Focus States: deferred** to a later pass. Don't fix; report only
  what breaks use for everyone (e.g. a label that isn't visible).
- **Svelte, not React:** `onclick`/`bind:value` replace `onClick`/`onChange`; ignore
  `nuqs`, `suppressHydrationWarning`, `<Link>`. The app is client-rendered: skip
  Hydration Safety.
- **Copy is Hebrew** (agents.md: Hebrew-only UI text): no Title Case; quotes and
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
