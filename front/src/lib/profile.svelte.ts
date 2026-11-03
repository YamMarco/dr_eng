// The student's goal, set once in onboarding (editable in settings): which
// unit level they're sitting and which Bagrut session. Drives the home
// dashboard - its route, and the days-to-exam counter.

import { examDate, type ExamSession } from './examSessions';
import { onSyncedChange, saveSynced } from './progressSync.svelte';
import { isRecord } from './storedJson';

const STORAGE_KEY = 'profile';

/** 'undecided' falls back to the 4-unit route (the one with content today). */
export type UnitsGoal = '4' | '5' | 'undecided';

/** `name`: the student's first name - optional, may stay empty. Never used in greetings. */
export type Profile = { units: UnitsGoal; exam: ExamSession | null; name?: string };

export const NAME_MAX = 30;

function load(): Profile | null {
	if (typeof localStorage === 'undefined') return null;
	try {
		const p: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
		if (!isRecord(p)) return null;
		const exam = p.exam;
		const validExam =
			isRecord(exam) &&
			(exam.season === 'winter' || exam.season === 'summer') &&
			Number.isInteger(exam.year);
		return {
			units: p.units === '5' || p.units === 'undecided' ? p.units : '4',
			exam: validExam ? (exam as ExamSession) : null,
			name: typeof p.name === 'string' ? p.name : undefined
		};
	} catch {
		return null;
	}
}

class ProfileStore {
	/** null until onboarding is finished. */
	value = $state<Profile | null>(load());

	constructor() {
		onSyncedChange(STORAGE_KEY, () => (this.value = load()));
	}

	/** The unit group id whose route the dashboard shows. */
	get unitGroupId(): string {
		return this.value?.units === '5' ? '5' : '4';
	}

	/** The student's first name, or undefined when not given. */
	get name(): string | undefined {
		return this.value?.name?.trim() || undefined;
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
		saveSynced(STORAGE_KEY, profile);
	}
}

export const profile = new ProfileStore();
