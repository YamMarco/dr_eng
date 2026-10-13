// A module's exam stats, from the saved attempts and results of its exams
// (see progress.ts).
import { getQuizzesForModule, type Quiz } from '$lib/quizzes';
import { getInProgress, getLastAttempt, getResults } from './progress';
import { scorePercent } from './scoring';
import { i18n } from '$lib/i18n/index.svelte';

/** One exam's record: every finished attempt's percent, oldest first. */
export type ExamRow = {
	quiz: Quiz;
	percents: number[];
	best: number | undefined;
	last: number | undefined;
	/** Started and left mid-way - the runner offers to resume it. */
	inProgress: boolean;
};

export type ExamStats = {
	taken: number;
	total: number;
	/** Final percent of each exam's last attempt, averaged; undefined before any. */
	avgPercent: number | undefined;
	avgMinutes: number | undefined;
	best: number | undefined;
	/** Where to send the student next: an exam left open, else the first not tried. */
	next: Quiz | undefined;
};

export function examRow(quiz: Quiz): ExamRow {
	let percents = getResults(quiz.id).map((r) => r.percent);
	// Attempts saved before results were tracked still count once.
	if (!percents.length) {
		const last = getLastAttempt(quiz.id);
		const percent = last ? scorePercent(last.score) : undefined;
		if (percent !== undefined) percents = [percent];
	}
	return {
		quiz,
		percents,
		best: percents.length ? Math.max(...percents) : undefined,
		last: percents.at(-1),
		inProgress: !!getInProgress(quiz.id)
	};
}

export function examRows(moduleId: string): ExamRow[] {
	const { assorted, ministry } = getQuizzesForModule(moduleId);
	return [...assorted, ...ministry].map(examRow);
}

const avg = (values: number[]) =>
	values.length ? Math.round(values.reduce((sum, v) => sum + v, 0) / values.length) : undefined;

export function examStats(moduleId: string): ExamStats {
	const rows = examRows(moduleId);
	const taken = rows.filter((r) => r.last !== undefined);
	const attempts = rows.flatMap((r) => getLastAttempt(r.quiz.id) ?? []);
	return {
		taken: taken.length,
		total: rows.length,
		avgPercent: avg(taken.map((r) => r.last!)),
		avgMinutes: avg(attempts.map((a) => (a.submittedAt - a.startedAt) / 60_000)),
		best: taken.length ? Math.max(...taken.map((r) => r.best!)) : undefined,
		next: (rows.find((r) => r.inProgress) ?? rows.find((r) => r.last === undefined))?.quiz
	};
}

/** Display tiles shared by the dashboard and the module exam page. */
export function formatExamStats(stats: ExamStats): { value: string; label: string }[] {
	const t = i18n.dict.quizzes;
	return [
		{ value: `${stats.taken}/${stats.total}`, label: t.takenLabel },
		{ value: stats.avgPercent?.toString() ?? '-', label: t.avgGradeLabel },
		{ value: stats.avgMinutes?.toString() ?? '-', label: t.avgMinutesLabel }
	];
}
