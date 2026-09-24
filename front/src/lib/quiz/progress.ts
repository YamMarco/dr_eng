// localStorage persistence for quiz attempts. No backend yet (see plan notes
// - Supabase is future work), so this is the only place progress lives.

import type { QuizScore } from './scoring';

export interface QuizAttempt {
	quizId: string;
	startedAt: number;
	submittedAt: number;
	answers: Record<string, unknown>;
	score: QuizScore;
}

export interface QuizInProgress {
	quizId: string;
	startedAt: number;
	/** Index into the quiz's screens flattened across every part (parts are a
	 *  cosmetic grouping, not a separate navigation phase). */
	entryIndex: number;
	answers: Record<string, unknown>;
	remainingSeconds: number;
}

const attemptKey = (quizId: string) => `quiz:attempt:${quizId}`;
const progressKey = (quizId: string) => `quiz:progress:${quizId}`;

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
}

export function getLastAttempt(quizId: string): QuizAttempt | null {
	if (!hasStorage()) return null;
	return safeParse<QuizAttempt>(localStorage.getItem(attemptKey(quizId)));
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
