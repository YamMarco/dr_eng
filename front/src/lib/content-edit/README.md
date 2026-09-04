# content-edit — dev-only in-app screen editor

Toggle edit mode on the lessons path (pencil FAB, dev only), open a lesson's
popover → **ערוך תוכן**, tweak a screen, **שמור מסך**. The change is written
straight back into `src/lib/content/c/c-<N>.ts`; Vite HMR reloads it.

- Per screen: a **type dropdown** (converts it, resetting to that type's blank
  shape) and **מחק** to remove it. A **+ מסך כאן** row sits between every screen
  (and before the first / after the last) to insert at that spot.
  Add/delete write through immediately; edits need **שמור מסך**.
- `preface`, `mcq`, `steps` get proper little forms; every other screen type
  gets a raw-JSON textarea (parsed on save).
- The editor keeps its own working copy, so add/delete/edit all show instantly
  even though each save triggers a full HMR reload of `$lib/content`.
- Files are re-emitted as 2-space JSON (matches the existing snapshot format).
  Any hand-added comments / trailing commas in a content file are lost the
  first time one of its lessons is saved — fine for the current all-JSON files.
- Server side is guarded by `dev`; it 403s in a build and the FAB never renders.

## Detach

1. `rm -r src/lib/content-edit`
2. `rm -r src/routes/api/content-edit`
3. In `src/routes/unit/[unitId]/module/[moduleId]/lessons/+page.svelte` remove:
   the two `$lib/content-edit/*` imports, `Pencil` from the lucide import,
   `editingLesson` state, the `{#if editStore.enabled}` popover button, the
   `{#if editStore.available}` FAB, and the `{#if editingLesson}` block.
