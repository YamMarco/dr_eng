// A module's exam stats, from the last saved attempt of each of its exams
// (only the last attempt per exam is stored - see progress.ts).
import { getQuizzesForModule } from '$lib/quizzes';
import { getLastAttempt } from './progress';
import { i18n } from '$lib/i18n/index.svelte';

export type ExamStats = {
	taken: number;
	total: number;
	/** Auto-graded percent, averaged over taken exams; undefined before any. */
	avgPercent: number | undefined;
	avgMinutes: number | undefined;
};

export function examStats(moduleId: string): ExamStats {
	const { assorted, ministry } = getQuizzesForModule(moduleId);
	const quizzes = [...assorted, ...ministry];
	const attempts = quizzes.flatMap((q) => getLastAttempt(q.id) ?? []);
	const graded = attempts.filter((a) => a.score.auto.max > 0);
	const avg = (values: number[]) =>
		values.length ? Math.round(values.reduce((sum, v) => sum + v, 0) / values.length) : undefined;
	return {
		taken: attempts.length,
		total: quizzes.length,
		avgPercent: avg(graded.map((a) => (a.score.auto.earned / a.score.auto.max) * 100)),
		avgMinutes: avg(attempts.map((a) => (a.submittedAt - a.startedAt) / 60_000))
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
