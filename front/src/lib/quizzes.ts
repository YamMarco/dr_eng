// The exam list/routing registry - derived from the actual QuizNode content
// (allQuizNodes) instead of hand-maintained separately, so there's exactly
// one place (a QuizNode's own id/uuid/kind/year/titleHe/module fields) that
// can drift out of sync. Content-edit only ever writes QuizNode files; this
// module has nothing of its own to save.
import { allQuizNodes, type QuizKind } from './quiz';

export type { QuizKind };

type QuizBase = {
	id: string;
	/** Same exam, different format - short id shaped `<module letter>-t-xxxx`, alongside the readable `id` slug. */
	uuid: string;
	moduleId: string;
	titleHe: string;
};

export type AssortedQuiz = QuizBase & {
	kind: 'assorted';
};

export type MinistryQuiz = QuizBase & {
	kind: 'ministry';
	year: number;
};

export type Quiz = AssortedQuiz | MinistryQuiz;

export const allQuizzes: Quiz[] = allQuizNodes.map((q) =>
	q.kind === 'ministry'
		? {
				id: q.id,
				uuid: q.uuid,
				moduleId: q.module,
				kind: 'ministry',
				titleHe: q.titleHe,
				year: q.year ?? 0
			}
		: { id: q.id, uuid: q.uuid, moduleId: q.module, kind: 'assorted', titleHe: q.titleHe }
);

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
