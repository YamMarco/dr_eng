# content-edit — the `/edit` authoring workspace

A dev-flavoured, self-contained workspace for editing Module C content: the
path graph **and** each lesson's screens, with a live preview. Reached at
**`/edit`** (dev: open; deployed site: one password prompt per browser
session). Entry points into it:

- Lessons path, dev only: the **✎** FAB (top-start) → `/edit`; each node's
  popover has **✎ ערוך** → `/edit?section=…&lesson=…`.
- While playing a lesson, dev only: **✏️ ערוך מסך זה** (bottom-start FAB) →
  `/edit?section=…&lesson=…&round=…&screen=…`, focused on that screen.

Everything lives in `src/lib/content-edit/` + `src/routes/edit/` +
`src/routes/api/content-edit/` — see **Detach** at the end.

## Layout

`EditWorkspace.svelte` is the shell (section picker · issue list · one save):

- **`GraphEditor.svelte`** (left, toggle with **גרף**) — the lessons-path
  canvas, editable. Drag a node = reposition (snaps to 10px, hold Shift to
  free-drag). Drag the small circle under a node onto another node = add/flip
  a prerequisite; click an edge = cut it. Toolbar: add / duplicate / delete /
  merge (Ctrl-click to multi-select) / split (by round) / rename id. Select a
  node → the right pane switches to it.
- **`LessonPane.svelte`** (right) — for the selected node:
  - **`OutlineTree.svelte`** — preface + every round + every screen. Add /
    delete / reorder / duplicate rounds; add a screen (type menu); drag a
    screen row to move it within or across buckets (preface ⇄ any round).
    Red/orange dot = a validation issue on that screen.
  - **`ScreenForm.svelte`** — the selected screen's typed form (unchanged;
    `fields/*` building blocks, `MarkdownInput`, **JSON מתקדם** escape hatch).
  - **`ScreenPreview.svelte`** — the real runtime component rendered live in a
    phone frame, re-mounting on every keystroke. **טופס / תצוגה / שניהם**
    toggles it.
  - **▶ נגן מכאן** — opens the real `LessonRunner` at this round, starting on
    the selected screen (`startScreenIndex` prop).

## Model & save

`editModel.svelte.ts` holds one **section's** whole `LessonNode[]` as a
mutable `$state` working copy (cloned from `getLessonsBySection`), a `dirty`
flag, the current selection, and every mutation helper (`setPosition`,
`togglePrereq`, `mergeNodes`, `splitNode`, `addRound`/`moveRound`/…,
`moveScreen`, `applyScreen`, …). Nothing hits the network per edit.

One **💾 שמור** (or ⌘/Ctrl-S) calls `saveSection(sectionId, nodes)` →
`POST /api/content-edit` with `{ sectionId, nodes }`, which rewrites the whole
`c-<N>.ts` array. The endpoint also still accepts the older
`{ lessonId, content }` shape (single-lesson replace).

`validate.ts` runs on every change: empty screens, `mark-all` indices out of
range, `timerKey` with no producing screen, missing/​self `required`,
duplicate id/code, scoreless round 0. Results show as the outline dots and the
header **בעיות** list (click to jump).

The server re-serialises the array in the files' hand-written style
(`emit()` — tab indent, small primitive-only objects/arrays kept inline) and
then runs **Prettier** (`prettier.config.js`) over it, so a save produces a
minimal, lint-clean diff. Hand-added comments / non-JSON-expressible values in
a content file are still lost on the first save of that file.

## Local dev vs. production

- **Dev** (`$app/environment` `dev`): `/edit` opens with no password; the
  endpoint writes straight to disk; Vite HMR-reloads `$lib/content`.
- **Deployed site**: `/edit` shows a password form
  (`checkContentEditPassword` → `POST /api/content-edit/login`, verified
  server-side; unlocked per session in `sessionStorage` via
  `editStore.authed`). The endpoint has no writable FS, so it commits through
  GitHub's Contents API (`github.ts`) — one commit per save, one retry on a
  stale-sha 409. Server env vars: `GITHUB_TOKEN` (fine-grained PAT, Contents:
  Read & write, this repo only), `GITHUB_OWNER`, `GITHUB_REPO`,
  `GITHUB_BRANCH`, `CONTENT_EDIT_PASSWORD`, optional `CONTENT_EDIT_AUTHOR`
  (default `Emil`, prefixes commit messages). Set in `front/.env.local`
  (gitignored) and in Vercel. Outside dev the endpoint 401s any request
  without a matching `x-content-edit-key`.

## Detach

1. `rm -r src/lib/content-edit src/routes/edit src/routes/api/content-edit`
2. `src/routes/+layout.svelte` — drop `/^\/edit/` from `noNavPatterns`.
3. `src/routes/unit/[unitId]/module/[moduleId]/lessons/+page.svelte` — remove
   the `dev` import + the two `/edit` links (node popover, top-start FAB).
4. `src/lib/lesson-screens/LessonRunner.svelte` — remove the
   `$lib/content-edit/screenPath` import (inline `screensForRound` /
   `screenPathsForRound`, ~15 lines — see git history), the `dev` import, the
   `startScreenIndex` prop, and the `editHref` FAB.
5. Remove the GitHub/password env vars from Vercel and delete the token.
