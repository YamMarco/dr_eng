// Bagrut sessions (winter / summer of a year) and their approximate dates.

export type ExamSeason = 'winter' | 'summer';
export type ExamSession = { season: ExamSeason; year: number };

// Approximate English sitting per session - close enough for a countdown.
const SEASON_DATE: Record<ExamSeason, { month: number; day: number }> = {
	winter: { month: 0, day: 25 },
	summer: { month: 5, day: 1 }
};

export function examDate(session: ExamSession): Date {
	const { month, day } = SEASON_DATE[session.season];
	return new Date(session.year, month, day);
}

/** The next `count` sessions that haven't happened yet, soonest first. */
export function upcomingSessions(count = 4, now = new Date()): ExamSession[] {
	const result: ExamSession[] = [];
	for (let year = now.getFullYear(); result.length < count; year++) {
		for (const season of ['winter', 'summer'] as const) {
			const session = { season, year };
			if (examDate(session) > now && result.length < count) result.push(session);
		}
	}
	return result;
}
