export type Lesson = {
	id: number;
	titleEn: string | null;
	titleHe: string;
};

const moduleCLessons: Lesson[] = [
	{ id: 1, titleEn: 'My School Day', titleHe: 'יום הלימודים שלי' },
	{ id: 2, titleEn: 'People Around Me', titleHe: 'האנשים סביבי' },
	{ id: 3, titleEn: 'Time & My Home', titleHe: 'זמן והבית שלי' },
	{ id: 4, titleEn: 'Things We Do', titleHe: 'דברים שאנחנו עושים' },
	{ id: 5, titleEn: 'Feelings & Words', titleHe: 'רגשות ומה שאומרים' },
	{ id: 6, titleEn: 'Places & Directions', titleHe: 'מקומות ותנועה' },
	{ id: 7, titleEn: 'How Much? How Many?', titleHe: 'כמויות ומלכודות' },
	{ id: 8, titleEn: 'Food, Body & Nature', titleHe: 'אוכל, גוף וטבע' },
	{ id: 9, titleEn: null, titleHe: 'הטקסט האמיתי הראשון' }
];

const lessonsByModule: Record<string, Lesson[]> = {
	c: moduleCLessons
};

export function getLessons(moduleId: string): Lesson[] {
	return lessonsByModule[moduleId] ?? [];
}

export function getLesson(moduleId: string, lessonId: number): Lesson | undefined {
	return getLessons(moduleId).find((lesson) => lesson.id === lessonId);
}
