# content-edit — in-app screen editor

Toggle edit mode on the lessons path (pencil FAB), open a lesson's popover →
**ערוך תוכן**, or edit the currently-visible screen while actually playing a
lesson (✏️ FAB, bottom-start). Works in local dev (writes straight to the
content file) and on the deployed site (password-gated, commits through
GitHub — see "Production" below).

## Save model: lesson-wide draft, one big button

Every edit (change a field, add a screen, delete a screen, reorder steps)
only touches a **local working copy** of that lesson's `content` — nothing
hits the network per edit. A single **💾 שמור שינויים** button persists the
whole draft in one write/commit, however many screens changed since the last
save:

- `LessonEditor.svelte` (the popover's full-lesson view): sticky footer
  button, disabled until something's dirty.
- `LessonRunner.svelte`'s inline sheet (editing the on-screen screen while
  playing): a green **💾 שמור** button appears next to the location pill once
  dirty. Add/delete only ever mutate `LessonRunner`'s own `draftContent`
  (seeded once from the lesson, see `screensForRound`/`screenPathsForRound`
  in `screenPath.ts`) — so deleting or editing a screen keeps you in the
  lesson view instead of kicking you back to the node map.
- Leaving with unsaved changes — the in-app back button, finishing the round,
  or closing/reloading the browser tab — is guarded by a confirm prompt
  (`beforeunload` shows the browser's own generic wording; can't be
  customized, that's a browser restriction, not a bug here).
- After a successful save, a banner tells the editor to wait ~a minute and
  refresh — a save on the deployed site is a git commit + Vercel redeploy,
  not instant.

Per-screen, `ScreenForm`'s **עדכן טיוטה** button and **מחק** only ever write
into that shared local draft (`onApply`/`onDelete` props) — never the network
directly. The type dropdown (grouped: טקסט והצגה / שאלות / תזמון) resets a
screen to that type's blank shape; `preface`/`mcq`/`steps` get proper little
forms (steps entries drag-reorder via the ⠿ handle, text fields go through
`MarkdownInput.svelte` — a tiny WYSIWYG B/I/`<>`/🔗 field, `execCommand`-based,
no deps); everything else gets a raw-JSON textarea.

Markdown is `**bold**`, `*italic*`, `` `code` ``, `[text](url)`, rendered at
runtime by `src/lib/lesson-screens/miniMarkdown.ts` — that file is NOT part
of this detachable folder; it stays even if the editor is removed.

Files are re-emitted as 2-space JSON (matches the existing snapshot format).
Any hand-added comments / trailing commas in a content file are lost the
first time one of its lessons is saved — fine for the current all-JSON files.

## Local dev vs. production

`POST /api/content-edit` takes `{ lessonId, content }` — the lesson's whole
`LessonContent` — and replaces it wholesale in the right `c-<N>.ts`:

- **Dev** (`import.meta.env.DEV`): writes straight to the file on disk. No
  password needed. Vite then HMR-reloads `$lib/content` automatically.
- **Anywhere else** (the deployed site): there's no writable local
  filesystem, so it commits through GitHub's Contents API instead
  (`github.ts`) — one commit per save. Requires:
  - The password (`POST /api/content-edit/login` checks it server-side; the
    client never holds/verifies the real secret). Unlocked once per browser
    session (`sessionStorage`) via the 🔒 FAB on the lessons path
    (`editStore.authed`; `editStore.available = dev || authed`).
  - Server env vars: `GITHUB_TOKEN` (fine-grained PAT, Contents: Read & write,
    scoped to this repo only), `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_BRANCH`,
    `CONTENT_EDIT_PASSWORD`, optional `CONTENT_EDIT_AUTHOR` (defaults to
    `Emil` — prefixes every commit message as `[Emil] content-edit: ...` so
    saves from the web editor are easy to spot in git history). Set locally
    in `front/.env.local` (gitignored) and in the Vercel project's
    Environment Variables for the deployed site.
  - One retry on a stale-sha 409 (another save landed in between).

Server side always requires the password outside dev — it 403s a request
with a missing/wrong `x-content-edit-key` header.

## Detach

1. `rm -r src/lib/content-edit`
2. `rm -r src/routes/api/content-edit`
3. In `src/routes/unit/[unitId]/module/[moduleId]/lessons/+page.svelte` remove:
   the `$lib/content-edit/*` imports, `Pencil`/`Lock` from the lucide import,
   `editingLesson` state, `unlockEditor`, the popover's edit button, the
   lock/pencil FABs, the `{#if editingLesson}` block, and the `lesson`/
   `roundIndex` props on the real `<LessonRunner>` (pass `screens={...}` the
   old way instead — see git history for `screensForRound`).
4. In `src/lib/lesson-screens/LessonRunner.svelte` remove: the
   `$lib/content-edit/*` imports, the `lesson`/`roundIndex` props and
   everything derived from `draftContent`, the edit/save/guard functions, the
   location-pill + save FABs, and the `{#if editSheetOpen}` sheet.
5. Remove the 5 env vars from Vercel and delete the GitHub token.
