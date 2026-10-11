// The student's goal, set once in onboarding (editable in settings): which
// unit level they're sitting and which Bagrut session. Drives the home
// dashboard - its route, and the days-to-exam counter.

import { examDate, type ExamSession } from './examSessions';

const STORAGE_KEY = 'profile';

/** 'undecided' falls back to the 4-unit route (the one with content today). */
export type UnitsGoal = '4' | '5' | 'undecided';

export type Profile = { units: UnitsGoal; exam: ExamSession | null };

function load(): Profile | null {
	if (typeof localStorage === 'undefined') return null;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}

class ProfileStore {
	/** null until onboarding is finished. */
	value = $state<Profile | null>(load());

	/** The unit group id whose route the dashboard shows. */
	get unitGroupId(): string {
		return this.value?.units === '5' ? '5' : '4';
	}

	/** Whole days until the chosen session; undefined when none was picked. */
	get daysToExam(): number | undefined {
		const exam = this.value?.exam;
		if (!exam) return undefined;
		const ms = examDate(exam).getTime() - Date.now();
		return Math.max(0, Math.ceil(ms / 86_400_000));
	}

	save(profile: Profile) {
		this.value = profile;
		if (typeof localStorage !== 'undefined')
			localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
	}
}

export const profile = new ProfileStore();
