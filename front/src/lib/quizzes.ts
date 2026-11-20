// The exam list/routing registry for the student shell: every exam without its parts, generated
// from the QuizNode files (scripts/lesson-meta.mjs), so there's one source and the shell never
// carries the exams themselves. The exam loads when its page opens (quiz/load.ts).
import { quizMeta } from './quiz/meta.generated';
import type { QuizKind } from './quiz/types';

export type { QuizKind };

type QuizBase = {
	id: string;
	/** Same exam, different format - short id shaped `<module letter>-t-xxxx`, alongside the readable `id` slug. */
	uuid: string;
	moduleId: string;
	/** The exam file it lives in (quiz/load.ts key), e.g. 'c'. */
	file: string;
};

export type AssortedQuiz = QuizBase & {
	kind: 'assorted';
};

export type MinistryQuiz = QuizBase & {
	kind: 'ministry';
	year: number;
};

export type Quiz = AssortedQuiz | MinistryQuiz;

export const allQuizzes: Quiz[] = quizMeta;

export const assortedQuizzes: AssortedQuiz[] = allQuizzes.filter(
	(q): q is AssortedQuiz => q.kind === 'assorted'
);

export const ministryQuizzes: MinistryQuiz[] = allQuizzes.filter(
	(q): q is MinistryQuiz => q.kind === 'ministry'
);

export function getQuiz(id: string): Quiz | undefined {
	return allQuizzes.find((quiz) => quiz.id === id);
}

export function getQuizzesForModule(moduleId: string) {
	return {
		assorted: assortedQuizzes.filter((quiz) => quiz.moduleId === moduleId),
		ministry: ministryQuizzes.filter((quiz) => quiz.moduleId === moduleId)
	};
}
