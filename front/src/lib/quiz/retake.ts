// Shared by the exam page (client lock) and /api/grade (server lock): no Svelte imports.

/** After a submit, an exam can't be solved again (or practiced) for this long; review stays open. */
export const RETAKE_WAIT_MS = 24 * 60 * 60_000;
