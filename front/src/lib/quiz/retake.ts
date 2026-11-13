// Shared by the exam page (client lock) and /api/grade (server lock): no Svelte imports.

/** After a submit, an exam can't be solved again for this long; review stays open. */
export const RETAKE_WAIT_MS = 24 * 60 * 60_000;

/** The server's stored attempt of an exam (server/examLock). */
export type StoredAttempt = { attempt: number; startedAt: Date | null; doneAt: Date | null };

/**
 * Whether a stored attempt blocks `attempt`: the same attempt is never blocked (a retry), another
 * one is, for RETAKE_WAIT_MS from when the stored one was done, or from its first graded part if
 * it never finished.
 */
export function examLocked(row: StoredAttempt | undefined, attempt: number, now: number): boolean {
	if (!row || row.attempt === attempt) return false;
	const from = row.doneAt ?? row.startedAt;
	return !!from && now - from.getTime() < RETAKE_WAIT_MS;
}
