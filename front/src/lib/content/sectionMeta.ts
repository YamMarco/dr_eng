// Section grouping for the path canvas (headings + theme-color order).
// One section per Part of the Module C programme.
import type { SectionMeta } from './types';

export const sectionMeta: SectionMeta[] = [
	{
		id: 'c-2',
		titleHe: 'חלק א׳ — אוצר מילים',
		titleEn: 'Part A — Vocabulary',
		intro: {
			greeting: 'The words that keep coming back',
			goal: 'ארבעה שיעורים על המילים שחוזרות בכל בחינה: מילות שאלה, מילות ניווט ומילות תוכן.'
		}
	},
	{
		id: 'c-1',
		titleHe: 'חלק ב׳ — הבנת הנקרא',
		titleEn: 'Part B — Reading Skills',
		intro: {
			greeting: 'I search — I do not read',
			goal: 'שלושה־עשר שיעורים שבונים את הכלים: איך ניגשים לטקסט, איך מוצאים את התשובה, ואיך עונים על כל סוג שאלה.'
		}
	},
	{
		id: 'c-3',
		titleHe: 'חלק ג׳ — כתיבה',
		titleEn: 'Part C — Writing',
		intro: {
			greeting: '70-90 words, every time',
			goal: 'שישה שיעורים שבונים את מטלת הכתיבה: מה רוצים ממני, מבנה P14, דקדוק, ספירת מילים ובחינה שלמה.'
		}
	}
];
