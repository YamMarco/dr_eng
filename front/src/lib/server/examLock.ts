// The 24h retake lock, on the server: every exam grading call names its attempt. A new attempt
// within 24h of the last submitted one is refused (429), practice included; the same attempt
// (its other calls, a grading retry) passes. Practice never starts a lock. Staff are exempt.
// An exam with no open answers makes no grading call: only the client lock covers it.
import { error } from '@sveltejs/kit';
import { and, eq, sql } from 'drizzle-orm';
import type { ExamRef } from '$lib/feedback/types';
import { RETAKE_WAIT_MS } from '$lib/quiz/retake';
import { db } from './db';
import { examAttempts } from './db/schema';

export async function claimExamAttempt(locals: App.Locals, exam: ExamRef): Promise<void> {
	const { userId, isAdmin } = locals;
	if (!userId || isAdmin || !db) return;
	const [last] = await db
		.select()
		.from(examAttempts)
		.where(and(eq(examAttempts.userId, userId), eq(examAttempts.quizId, exam.quizId)));
	if (last?.attempt === exam.attempt) return;
	if (last && Date.now() - last.at.getTime() < RETAKE_WAIT_MS) throw error(429, 'exam locked');
	if (exam.practice) return;
	await db
		.insert(examAttempts)
		.values({ userId, quizId: exam.quizId, attempt: exam.attempt })
		.onConflictDoUpdate({
			target: [examAttempts.userId, examAttempts.quizId],
			set: { attempt: exam.attempt, at: sql`now()` }
		});
}
