// Leitner scheduling for the word deck. Pure: no Svelte, no storage.
// Binary right/wrong, like the exam - no self-rated "easy / hard".
import type { DeckProgress, WordState } from './types';

/** Days until the next review, by box (index 0 unused). */
export const INTERVAL_DAYS = [0, 1, 3, 7, 14, 30];
export const MAX_BOX = INTERVAL_DAYS.length - 1;

/** Local calendar day as YYYY-MM-DD. */
export function dayKey(date: Date): string {
	const pad = (n: number) => String(n).padStart(2, '0');
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function addDays(day: string, days: number): string {
	const [y, m, d] = day.split('-').map(Number);
	return dayKey(new Date(y, m - 1, d + days));
}

/**
 * Next state after one answer. A new word (no state) starts in box 1 either way.
 * Right moves a box up; wrong drops back to box 1. Both are due again after
 * the new box's interval, so a miss comes back tomorrow (it was already
 * replayed once in the session itself).
 */
export function review(state: WordState | undefined, correct: boolean, today: string): WordState {
	const lapses = (state?.lapses ?? 0) + (correct ? 0 : 1);
	const box = !state || !correct ? 1 : Math.min(state.box + 1, MAX_BOX);
	return { box, due: addDays(today, INTERVAL_DAYS[box]), lapses };
}

/** Ids of seen words due today or earlier, most overdue first. */
export function dueWords(progress: DeckProgress, today: string): string[] {
	return Object.entries(progress)
		.filter(([, s]) => s.due <= today)
		.sort(([, a], [, b]) => a.due.localeCompare(b.due) || a.box - b.box)
		.map(([id]) => id);
}
