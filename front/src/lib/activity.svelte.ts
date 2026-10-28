// Which calendar days the student practiced (finished a lesson round or
// submitted an exam), for the home dashboard's weekly goal and streak.

import { onSyncedChange, saveSynced } from '$lib/progressSync.svelte';

const STORAGE_KEY = 'activity-days';
/** Enough history for any streak we'd realistically show. */
const MAX_DAYS = 400;
/** Practice days a week counts as "met". */
export const WEEKLY_GOAL = 4;

/** Local-time yyyy-mm-dd, so a streak follows the student's own midnight. */
export function dayKey(date: Date): string {
	const pad = (n: number) => String(n).padStart(2, '0');
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function load(): string[] {
	if (typeof localStorage === 'undefined') return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}

class ActivityStore {
	private days = $state<string[]>(load());
	/** Today just became a practice day here: the streak modal is due. */
	celebrating = $state(false);

	constructor() {
		onSyncedChange(STORAGE_KEY, () => (this.days = load()));
	}

	recordToday() {
		const today = dayKey(new Date());
		if (this.days.includes(today)) return;
		this.days = [...this.days, today].slice(-MAX_DAYS);
		saveSynced(STORAGE_KEY, this.days);
		this.celebrating = true;
	}

	/** Whether the student practiced on this day. */
	practiced(date: Date): boolean {
		return this.days.includes(dayKey(date));
	}

	get totalDays(): number {
		return this.days.length;
	}

	/** Consecutive weeks (Sunday to Saturday) that reached WEEKLY_GOAL, ending
	 *  this week if it already did, else last week. */
	get weeksAtGoal(): number {
		const set = new Set(this.days);
		// A local walking cursor, not reactive state.
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const weekStart = new Date();
		weekStart.setDate(weekStart.getDate() - weekStart.getDay());
		const daysIn = (start: Date) => {
			// eslint-disable-next-line svelte/prefer-svelte-reactivity
			const d = new Date(start);
			let n = 0;
			for (let i = 0; i < 7; i++, d.setDate(d.getDate() + 1)) if (set.has(dayKey(d))) n++;
			return n;
		};
		if (daysIn(weekStart) < WEEKLY_GOAL) weekStart.setDate(weekStart.getDate() - 7);
		let count = 0;
		while (daysIn(weekStart) >= WEEKLY_GOAL) {
			count++;
			weekStart.setDate(weekStart.getDate() - 7);
		}
		return count;
	}

	/** Practice days in the current week (Sunday to Saturday, the Israeli week). */
	get daysThisWeek(): number {
		// A local walking cursor, not reactive state.
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const cursor = new Date();
		const set = new Set(this.days);
		let count = 0;
		for (let i = cursor.getDay(); i >= 0; i--) {
			if (set.has(dayKey(cursor))) count++;
			cursor.setDate(cursor.getDate() - 1);
		}
		return count;
	}

	/** Consecutive practice days ending today - or yesterday, so the streak
	 *  doesn't read 0 in the morning before today's practice. */
	get streak(): number {
		const set = new Set(this.days);
		// A local walking cursor, not reactive state.
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const cursor = new Date();
		if (!set.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
		let count = 0;
		while (set.has(dayKey(cursor))) {
			count++;
			cursor.setDate(cursor.getDate() - 1);
		}
		return count;
	}
}

export const activity = new ActivityStore();
