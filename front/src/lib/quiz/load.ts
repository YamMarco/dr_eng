// An exam's content, loaded when its page opens: one chunk per exam file, so the student shell
// never downloads the exams (passages, questions, answers). Add a new exam file here and to
// QUIZ_FILES in scripts/lesson-meta.mjs (tests/lesson-meta.test.ts checks they agree).
import { getQuiz } from '$lib/quizzes';
import type { QuizNode } from './types';

type Loader = () => Promise<QuizNode[]>;

/** Exam file (as in Quiz.file) -> its exams. */
export const QUIZ_FILES: Record<string, Loader> = {
	c: () => import('./c').then((m) => m.cQuizzes),
	e: () => import('./e').then((m) => m.eQuizzes),
	g: () => import('./g').then((m) => m.gQuizzes),
	cobe: () => import('./cobe').then((m) => m.cobeQuizzes)
};

/** An exam with its parts, or undefined for an unknown id. */
export async function loadQuizNode(id: string): Promise<QuizNode | undefined> {
	const load = QUIZ_FILES[getQuiz(id)?.file ?? ''];
	return (await load?.())?.find((q) => q.id === id);
}
