export type QuizKind = 'assorted' | 'ministry';

type QuizBase = {
	id: string;
	titleHe: string;
	descriptionHe: string;
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

// Placeholder entries for the quizzes list shell — replace with real content
// once a quiz's screens are authored.
export const assortedQuizzes: AssortedQuiz[] = [
	{
		id: 'rotating-subject',
		kind: 'assorted',
		titleHe: 'נושא מתחלף',
		descriptionHe: 'כל סבב עובר לנושא אחר - קריאה, מילים, כתיבה.',
		twistHe: 'נושא מתחלף בכל סבב'
	},
	{
		id: 'against-the-clock',
		kind: 'assorted',
		titleHe: 'מרוץ נגד הזמן',
		descriptionHe: 'שאלות מכל המודול תחת טיימר יורד.',
		twistHe: 'טיימר יורד לכל שאלה'
	}
];

export const ministryQuizzes: MinistryQuiz[] = [
	{
		id: 'moe-2024',
		kind: 'ministry',
		year: 2024,
		titleHe: 'מבחן בגרות 2024',
		descriptionHe: 'מבחן רשמי של משרד החינוך משנת 2024.'
	},
	{
		id: 'moe-2023',
		kind: 'ministry',
		year: 2023,
		titleHe: 'מבחן בגרות 2023',
		descriptionHe: 'מבחן רשמי של משרד החינוך משנת 2023.'
	}
];

export const allQuizzes: Quiz[] = [...assortedQuizzes, ...ministryQuizzes];

export function getQuiz(id: string): Quiz | undefined {
	return allQuizzes.find((quiz) => quiz.id === id);
}
