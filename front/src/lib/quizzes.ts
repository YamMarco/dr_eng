export type QuizKind = 'assorted' | 'ministry';

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

export const assortedQuizzes: AssortedQuiz[] = [
	{
		id: 'module-c-exam-3',
		uuid: 'c-t-7192',
		moduleId: 'c',
		kind: 'assorted',
		titleHe: 'ידידויות יוצאות דופן בין בעלי חיים'
	}
];

export const ministryQuizzes: MinistryQuiz[] = [];

export const allQuizzes: Quiz[] = [...assortedQuizzes, ...ministryQuizzes];

export function getQuiz(id: string): Quiz | undefined {
	return allQuizzes.find((quiz) => quiz.id === id);
}

export function getQuizzesForModule(moduleId: string) {
	return {
		assorted: assortedQuizzes.filter((quiz) => quiz.moduleId === moduleId),
		ministry: ministryQuizzes.filter((quiz) => quiz.moduleId === moduleId)
	};
}
