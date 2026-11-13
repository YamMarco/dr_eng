// The 24h retake lock, on the server. An attempt's open answers come in one request (/api/grade,
// kind 'exam'), a part per reading passage + the essay, part ids from the exam content
// (quiz/examParts). Each part is graded at most once per attempt and stored; a retry grades only
// the parts still missing. When every part of a request has its verdict the attempt is done, and
// the lock runs from then. An attempt that never finished (a part kept failing) locks from its
// first graded part: dropping a part can't dodge the lock, only be retried. Staff are exempt.
import { error } from '@sveltejs/kit';
import { and, eq, sql } from 'drizzle-orm';
import type { ExamRef, PartVerdict } from '$lib/feedback/types';
import { examLocked } from '$lib/quiz/retake';
import { db } from './db';
import { examAttempts as t } from './db/schema';

const exempt = (locals: App.Locals) => !locals.userId || locals.isAdmin || !db;

/** The verdicts this attempt already has (none for staff); 429 when the exam is locked. */
export async function openAttempt(
	locals: App.Locals,
	exam: ExamRef
): Promise<Record<string, PartVerdict>> {
	if (exempt(locals)) return {};
	const [row] = await db!
		.select()
		.from(t)
		.where(and(eq(t.userId, locals.userId!), eq(t.quizId, exam.quizId)));
	if (examLocked(row, exam.attempt, Date.now())) throw error(429, 'exam locked');
	return row?.attempt === exam.attempt ? row.grades : {};
}

/** Stores the newly graded parts; `complete`: every part of the request has its verdict. */
export async function saveAttempt(
	locals: App.Locals,
	exam: ExamRef,
	graded: Record<string, PartVerdict>,
	complete: boolean
): Promise<void> {
	const fresh = Object.keys(graded).length > 0;
	if (exempt(locals) || (!fresh && !complete)) return;
	// In ON CONFLICT ... SET, the columns are the stored row's values.
	const same = sql`${t.attempt} = ${exam.attempt}`;
	const json = sql`${JSON.stringify(graded)}::jsonb`;
	const started = fresh ? sql`now()` : sql`null::timestamptz`;
	const done = complete ? sql`now()` : sql`null::timestamptz`;
	await db!
		.insert(t)
		.values({
			userId: locals.userId!,
			quizId: exam.quizId,
			attempt: exam.attempt,
			grades: graded,
			startedAt: started,
			doneAt: done
		})
		.onConflictDoUpdate({
			target: [t.userId, t.quizId],
			set: {
				attempt: exam.attempt,
				grades: sql`case when ${same} then ${t.grades} || ${json} else ${json} end`,
				startedAt: sql`case when ${same} then coalesce(${t.startedAt}, ${started}) else ${started} end`,
				doneAt: sql`case when ${same} then coalesce(${t.doneAt}, ${done}) else ${done} end`
			}
		});
}
