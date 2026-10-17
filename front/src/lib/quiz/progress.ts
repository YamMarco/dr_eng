// localStorage persistence for quiz attempts. No backend yet (see plan notes
// - Supabase is future work), so this is the only place progress lives.

import '$lib/legacyIds';
import { scorePercent, type QuizScore } from './scoring';
import type { ExamGrade } from '$lib/feedback/types';
import { activity } from '$lib/activity.svelte';

export interface QuizAttempt {
	quizId: string;
	startedAt: number;
	submittedAt: number;
	answers: Record<string, unknown>;
	score: QuizScore;
	/** LLM grades of the open answers, by screen id (absent while grading or before this existed). */
	grades?: Record<string, ExamGrade>;
}

/** Marker for an exam left unfinished (exams can't be resumed). */
export interface QuizInProgress {
	quizId: string;
	startedAt: number;
}

const attemptKey = (quizId: string) => `quiz:attempt:${quizId}`;
const progressKey = (quizId: string) => `quiz:progress:${quizId}`;
const resultsKey = (quizId: string) => `quiz:results:${quizId}`;

/** One finished attempt's final percent - every attempt is kept, unlike the full attempt. */
export type ExamResult = { at: number; percent: number };

function safeParse<T>(raw: string | null): T | null {
	if (!raw) return null;
	try {
		return JSON.parse(raw) as T;
	} catch {
		return null;
	}
}

function hasStorage() {
	return typeof localStorage !== 'undefined';
}

export function saveAttempt(attempt: QuizAttempt) {
	if (!hasStorage()) return;
	localStorage.setItem(attemptKey(attempt.quizId), JSON.stringify(attempt));
	clearInProgress(attempt.quizId);
	const percent = scorePercent(attempt.score);
	if (percent !== undefined) {
		// Saved again after grading (and on a grading retry): replace, don't append.
		const results = getResults(attempt.quizId).filter((r) => r.at !== attempt.submittedAt);
		results.push({ at: attempt.submittedAt, percent });
		localStorage.setItem(resultsKey(attempt.quizId), JSON.stringify(results));
	}
	activity.recordToday();
}

export function getLastAttempt(quizId: string): QuizAttempt | null {
	if (!hasStorage()) return null;
	return safeParse<QuizAttempt>(localStorage.getItem(attemptKey(quizId)));
}

/** Every finished attempt, oldest first. */
export function getResults(quizId: string): ExamResult[] {
	if (!hasStorage()) return [];
	return safeParse<ExamResult[]>(localStorage.getItem(resultsKey(quizId))) ?? [];
}

export function saveInProgress(state: QuizInProgress) {
	if (!hasStorage()) return;
	localStorage.setItem(progressKey(state.quizId), JSON.stringify(state));
}

export function getInProgress(quizId: string): QuizInProgress | null {
	if (!hasStorage()) return null;
	return safeParse<QuizInProgress>(localStorage.getItem(progressKey(quizId)));
}

export function clearInProgress(quizId: string) {
	if (!hasStorage()) return;
	localStorage.removeItem(progressKey(quizId));
}
