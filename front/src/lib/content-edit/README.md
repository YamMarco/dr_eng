# content-edit — the `/edit` and `/edit-exam` authoring workspaces

A dev-flavoured, self-contained pair of workspaces: **`/edit`** for Module C
lesson content (the path graph **and** each lesson's screens, with a live
preview) and **`/edit-exam`** for one module's exams (parts + screens, no
graph — exams aren't a DAG). Both are dev: open, deployed site: one password
prompt per browser session (the two share the same unlock — `editStore`).
Entry points into `/edit`:

- Lessons path, dev only: the **✎** FAB (top-start) → `/edit`; each node's
  popover has **✎ ערוך** → `/edit?section=…&lesson=…`.
- While playing a lesson, dev only: **✏️ ערוך מסך זה** (bottom-start FAB) →
  `/edit?section=…&lesson=…&round=…&screen=…`, focused on that screen.

Entry point into `/edit-exam`: the module's exam list page always shows an
**✎ ערוך** link → `/edit-exam?module=<id>` (never gated by `editStore` itself —
that link *is* the only way to reach the password screen on the deployed
site, so gating it would make it unreachable there).

Everything lives in `src/lib/content-edit/` + `src/routes/edit/` +
`src/routes/edit-exam/` + `src/routes/api/content-edit/` — see **Detach** at
the end.

## Layout

`EditWorkspace.svelte` is the shell (issue list · one save) with a
**🗺️ מפת השיעורים / ✏️ עריכת שיעור** switch — the graph and the lesson editor
are separate views, never shown together. A one-line hint strip explains the
current view.

### Graph — `GraphEditor.svelte`

The whole module's map (**every section at once**, colour-coded, with a
section-title band above each). Drag a node = reposition (snaps to 10px, hold
Shift to free-drag). Drag the **+** circle under a node onto another node =
add/flip a prerequisite; click an edge = cut it. Toolbar (labeled, colour-
coded): ➕ שיעור חדש · ⧉ שכפול · 🗑 מחיקה · 🔗 מיזוג (only with 2+ Ctrl-picked) ·
✂️ פיצול · 🏷 שינוי מזהה · **✏️ פתיחה לעריכת תוכן**. Double-click a node opens
it in the lesson editor. A small QA float sits beside every node
(**`ReviewFloat.svelte`**): tick "תקציר" (preface reviewed), one tick per
round, and a "כל השאלות" master box that ticks/clears every round at once —
plus a one-line comment. State lives in `reviewNotes.svelte.ts`, autosaved
(debounced) to `review-notes.json` via `/api/content-edit/review` — same
disk/GitHub split as the main save, but kept out of the `LessonNode` schema:
it's QA scratch state, not curriculum content, so it never touches
`c-*.ts`.

### Lesson editor — `LessonEditorView.svelte` (PowerPoint-style)

- header: **← חזרה למפה**, the node's id/title, **שם ומזהה** (title / id /
  big), **▶ נסיון מכאן** (opens the real `LessonRunner` at the selected screen
  via `startScreenIndex`).
- **`SlideFilmstrip.svelte`** — a narrow vertical rail on the side: every
  screen of the lesson, in order, as a small clickable card (type name +
  one-line text snippet + scored/issue markers). Bucket headers (פתיח / סבב N)
  carry a **⋯** menu with the round actions (move earlier/later, duplicate,
  delete). Drag a card to reorder it within or across buckets. Green
  **➕ הוספת מסך** at each bucket's end and **➕ הוספת סבב** at the bottom insert
  a blank screen/round directly — no type-choosing step, the type is picked
  in the stage.
- **`SlideStage.svelte`** — the big central pane for the *selected* screen:
  one place with the **type selector**, **EditableScreen** (the editable
  canvas — prose is click-to-type via `MarkdownInput` in **bare** mode), every
  structural field that can't be typed onto the canvas (correct answer,
  `mark-*` token marks + categories, question lists, word bank, min-word
  numbers, mode, timer keys), **🗑 מחיקת המסך**, and a **JSON** escape hatch —
  no popup, no separate panel. Reuses the `fields/*` building blocks.

**Word-card image** — `WordImageField.svelte` sits on the word-card canvas with
add / replace / delete controls (top-right). Picking a file opens
`ImageCropper.svelte` (drag / zoom / rotate under a 16:9 frame, same shape as
the player's `WordImage`); accepting POSTs the cropped JPEG to
`/api/content-edit/image`, which stores it as `static/vocab-images/word-<hash>.jpg`
(disk in dev, a GitHub commit in production - live after the next deploy) and
the screen keeps its path in `image`. Delete only clears the field.

Prose is stored as markdown, rendered at runtime by
`src/lib/lesson-screens/miniMarkdown.ts` (not part of this folder).
`screenTypeNames.ts` holds the Hebrew name per screen type (used by both the
filmstrip and the stage's type selector). Each filmstrip card's preview isn't
a text snippet — it's the same `EditableScreen` the stage renders, scaled
down and inert.

## Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`

Mirrors the lesson editor's shell/PowerPoint-view split, scoped to one
module's exams (`examEditModel.load(moduleId)` loads only that module's
`QuizNode[]`, from `getQuizNodesByModule`). No graph — the workspace is just
an exam picker list (+ **➕ מבחן חדש**) that opens straight into the
PowerPoint-style editor.

**`SlideFilmstrip.svelte`, `SlideStage.svelte`, and `EditableScreen.svelte`
are shared with the lesson editor**, not duplicated: they take a `model:
EditModelLike` prop (`editModelTypes.ts`) instead of importing a singleton,
so `editModel.svelte.ts` (lessons) and `examEditModel.svelte.ts` (exams) are
two interchangeable implementations of the same interface.
`bucketsOf(nodeId)` is the key abstraction — a lesson's buckets are preface +
rounds, an exam's are its `QuizPart`s (no preface). A `QuizPart` plays the
role a lesson node plays for `editModel`: the level above a screen. Bucket
mutation methods are generically named (`addBucket`/`moveBucket`/
`duplicateBucket`/`deleteBucket`), not round-specific — `editModel` exposes
`addRound`/`moveRound`/… as the lesson-only concrete methods and wraps them
under the generic names for `EditModelLike` conformance.

An exam's routing/list metadata (`uuid`, `kind`, `year`) lives directly on
its `QuizNode` (see `$lib/quiz/types.ts`) — `$lib/quizzes.ts`'s
`assortedQuizzes`/`ministryQuizzes` are a *derived* view over
`allQuizNodes`, not a second hand-authored registry, so there's nothing else
to keep in sync when an exam is renamed, retyped, or deleted.

**▶ נסיון מכאן** opens the real `QuizRunner` at the selected part/screen via
`startPartIndex`/`startScreenIndex`, with `preview` set — that flag skips the
resume prompt and all progress/attempt persistence, so testing an unsaved
edit can never touch or get confused by a real student's saved progress
under the same quiz id.

## Model & save

`editModel.svelte.ts` holds the **whole module's** `LessonNode[]` (every
section, so the graph shows everything) as a mutable `$state` working copy, a
`dirty` flag, the current selection, and every mutation helper (`setPosition`,
`togglePrereq`, `mergeNodes`, `splitNode`, `moveScreen`, `applyScreen`, the
generic `EditModelLike` bucket ops, …). `examEditModel.svelte.ts` is the same
shape for one module's `QuizNode[]`, without the graph-only pieces
(position/required/big) or a preface bucket. Nothing hits the network per
edit. On load, each snapshots its baseline; `changedSections`
(`editModel`) / `changes()` (`examEditModel`) diff the live state against it.

One **💾 שמירת שינויים** (or ⌘/Ctrl-S) diffs the live state against its
baseline and calls `saveSection(sectionId, upserts, deletes)` or
`saveExamChanges(moduleId, upserts, deletes)` → both hit the same
**`POST /api/content-edit`**, with `{ sectionId, ... }` for a lesson section
or `{ examModuleId, ... }` for a module's exams — one call per changed
lesson-section or per changed module's-exams file. The endpoint (via the
shared helpers in `fileEmit.ts`: `splitArrayHead`/`extractArrayLiteral`/
`mergeById`/`emit`) merges that patch into the target array-literal file's
*current* content (nodes/exams nobody in this session touched pass through
untouched) rather than replacing the whole thing, so two people editing
different entries in the same file never clobber each other — in the file or
in git history. It also still accepts the older `{ lessonId, content }` shape
(single-lesson replace).

`validate.ts` runs on every change: empty screens, `mark-all` indices out of
range, `timerKey` with no producing screen, missing/​self `required`,
duplicate id, scoreless round 0. Results show as a dot on the filmstrip
card and in the header **בעיות** list (click to jump).

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

1. `rm -r src/lib/content-edit src/routes/edit src/routes/edit-exam src/routes/api/content-edit`
2. `src/routes/+layout.svelte` — drop `/^\/edit/` from `noNavPatterns`.
3. `src/routes/unit/[unitId]/module/[moduleId]/lessons/+page.svelte` — remove
   the `dev` import + the two `/edit` links (node popover, top-start FAB).
4. `src/routes/unit/[unitId]/module/[moduleId]/exam/+page.svelte` — remove
   the `editStore` import (if re-added) and the **✎ ערוך** `/edit-exam` link.
5. `src/lib/lesson-screens/LessonRunner.svelte` — remove the
   `$lib/content-edit/screenPath` import (inline `screensForRound` /
   `screenPathsForRound`, ~15 lines — see git history), the `dev` import, the
   `startScreenIndex` prop, and the `editHref` FAB.
6. `src/lib/quiz/QuizRunner.svelte` — remove the `preview`/`startPartIndex`/
   `startScreenIndex` props (content-edit's "play from here" only).
7. Remove the GitHub/password env vars from Vercel and delete the token.
