export type QuizKind = 'assorted' | 'ministry';

type QuizBase = {
	id: string;
	moduleId: string;
	titleHe: string;
};

export type AssortedQuiz = QuizBase & {
	kind: 'assorted';
	/** Short line naming this quiz's twist, e.g. a rotating subject per round. */
	twistHe: string;
};

export type MinistryQuiz = QuizBase & {
	kind: 'ministry';
	year: number;
};

export type Quiz = AssortedQuiz | MinistryQuiz;

// Placeholder entries for the quizzes list shell - replace with real content
// once a quiz's screens are authored. Module C only for now.
export const assortedQuizzes: AssortedQuiz[] = [
	{
		id: 'rotating-subject',
		moduleId: 'c',
		kind: 'assorted',
		titleHe: 'נושא מתחלף',
		twistHe: 'נושא מתחלף בכל סבב'
	},
	{
		id: 'against-the-clock',
		moduleId: 'c',
		kind: 'assorted',
		titleHe: 'מרוץ נגד הזמן',
		twistHe: 'טיימר יורד לכל שאלה'
	}
];

export const ministryQuizzes: MinistryQuiz[] = [
	{
		id: 'moe-2024',
		moduleId: 'c',
		kind: 'ministry',
		year: 2024,
		titleHe: 'מבחן בגרות 2024'
	},
	{
		id: 'moe-2023',
		moduleId: 'c',
		kind: 'ministry',
		year: 2023,
		titleHe: 'מבחן בגרות 2023'
	}
];

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
