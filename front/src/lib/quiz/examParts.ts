// An exam's grading parts, derived from its content the same way on the client and the server:
// one per reading part with open answers (the part's id, its answers graded together) and one
// per essay (its screen id). The server only grades parts the exam really has.
import { screensWithIds } from './screenIds.ts';
import type { QuizNode } from './types.ts';

export type ExamPartKind = 'reading' | 'essay';

/** A writing-task's grading part: the essay alone, a short answer with its part. */
export const partIdOf = (partId: string, screenId: string, essay: boolean) =>
	essay ? screenId : partId;

export function examParts(quiz: QuizNode): Map<string, ExamPartKind> {
	const out = new Map<string, ExamPartKind>();
	for (const part of quiz.parts)
		for (const { id, screen } of screensWithIds(part)) {
			if (screen.type !== 'writing-task') continue;
			const essay = screen.minWords !== undefined;
			out.set(partIdOf(part.id, id, essay), essay ? 'essay' : 'reading');
		}
	return out;
}
