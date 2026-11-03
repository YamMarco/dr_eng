// The 24h retake lock, on the server. Each exam grading request names its attempt and how many
// parts (requests) the attempt makes. A part graded successfully ticks the attempt; the last one
// marks the exam done, and the lock runs from then. A new attempt within 24h of a done one is
// refused (429), practice included. Practice never ticks. Staff are exempt.
import { error } from '@sveltejs/kit';
import { and, eq, sql } from 'drizzle-orm';
import type { ExamRef } from '$lib/feedback/types';
import { RETAKE_WAIT_MS } from '$lib/quiz/retake';
import { db } from './db';
import { examAttempts as t } from './db/schema';

const exempt = (locals: App.Locals) => !locals.userId || locals.isAdmin || !db;

/** Throws 429 when another attempt of this exam was done in the last 24h. */
export async function assertExamOpen(locals: App.Locals, exam: ExamRef): Promise<void> {
	if (exempt(locals)) return;
	const [last] = await db!
		.select()
		.from(t)
		.where(and(eq(t.userId, locals.userId!), eq(t.quizId, exam.quizId)));
	if (!last?.doneAt || last.attempt === exam.attempt) return;
	if (Date.now() - last.doneAt.getTime() < RETAKE_WAIT_MS) throw error(429, 'exam locked');
}

/** Ticks one graded part; the attempt's last part marks the exam done (a retry keeps that time). */
export async function recordExamPart(locals: App.Locals, exam: ExamRef): Promise<void> {
	if (exempt(locals) || exam.practice) return;
	// In ON CONFLICT ... SET, the columns are the stored row's values.
	const same = sql`${t.attempt} = ${exam.attempt}`;
	const ticked = sql`case when ${same} then ${t.doneParts} + 1 else 1 end`;
	await db!
		.insert(t)
		.values({
			userId: locals.userId!,
			quizId: exam.quizId,
			attempt: exam.attempt,
			doneParts: 1,
			doneAt: exam.parts <= 1 ? sql`now()` : null
		})
		.onConflictDoUpdate({
			target: [t.userId, t.quizId],
			set: {
				attempt: exam.attempt,
				doneParts: ticked,
				doneAt: sql`case when ${same} and ${t.doneAt} is not null then ${t.doneAt}
					when ${ticked} >= ${exam.parts} then now() end`
			}
		});
}
