// Option lists for the goal pickers, shared by onboarding and settings.
import { i18n } from '$lib/i18n/index.svelte';
import { upcomingSessions, type ExamSession } from '$lib/examSessions';
import type { UnitsGoal } from '$lib/profile.svelte';

export const UNKNOWN_SESSION = 'unknown';

export function unitsOptions(): { value: UnitsGoal; label: string }[] {
	const t = i18n.dict.onboarding;
	return [
		{ value: '4', label: t.units4 },
		{ value: '5', label: t.units5 },
		{ value: 'undecided', label: t.undecided }
	];
}

export function sessionKey(session: ExamSession | null): string {
	return session ? `${session.season}-${session.year}` : UNKNOWN_SESSION;
}

export function parseSessionKey(key: string): ExamSession | null {
	const [season, year] = key.split('-');
	if (season !== 'winter' && season !== 'summer') return null;
	return { season, year: Number(year) };
}

/** Upcoming sessions, plus the saved one if it has already passed. */
export function sessionOptions(current: ExamSession | null = null) {
	const t = i18n.dict.onboarding;
	const sessions = upcomingSessions();
	if (current && !sessions.some((s) => sessionKey(s) === sessionKey(current)))
		sessions.unshift(current);
	return [
		...sessions.map((s) => ({
			value: sessionKey(s),
			label: `${s.season === 'winter' ? t.seasonWinter : t.seasonSummer} ${s.year}`
		})),
		{ value: UNKNOWN_SESSION, label: t.examUnknown }
	];
}
