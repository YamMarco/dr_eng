// Which calendar days the student practiced (finished a lesson round or
// submitted an exam), for the home dashboard's weekly goal and streak.

const STORAGE_KEY = 'activity-days';
/** Enough history for any streak we'd realistically show. */
const MAX_DAYS = 400;

/** Local-time yyyy-mm-dd, so a streak follows the student's own midnight. */
function dayKey(date: Date): string {
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

	recordToday() {
		const today = dayKey(new Date());
		if (this.days.includes(today)) return;
		this.days = [...this.days, today].slice(-MAX_DAYS);
		if (typeof localStorage !== 'undefined')
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.days));
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
