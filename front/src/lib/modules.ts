export type ModuleId = 'c' | 'e' | 'g';

export type ExamModule = {
	id: ModuleId;
	letter: string;
	units: string;
	title: string;
	description: string;
};

export const modules: ExamModule[] = [
	{
		id: 'c',
		letter: 'C',
		units: '3 יח"ל',
		title: 'מודול C',
		description: 'הבנת הנקרא ואוצר מילים בסיסי'
	},
	{
		id: 'e',
		letter: 'E',
		units: '4 יח"ל',
		title: 'מודול E',
		description: 'הבנת הנקרא, כתיבה ואוצר מילים מורחב'
	},
	{
		id: 'g',
		letter: 'G',
		units: '5 יח"ל',
		title: 'מודול G',
		description: 'טקסטים מתקדמים, ניתוח וכתיבה אקדמית'
	}
];

export function getModule(id: string): ExamModule | undefined {
	return modules.find((m) => m.id === id.toLowerCase());
}

export const EXAM_MINUTES = 30;
