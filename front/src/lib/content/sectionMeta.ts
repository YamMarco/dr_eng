// Section grouping for the path canvas (headings + theme-color order).
// One section per Part of a module's programme. Ids are `<moduleId>-<n>`.
import type { SectionMeta } from './types';

export const sectionMeta: SectionMeta[] = [
	{
		id: 'c-2',
		titleEn: 'Part A - Vocabulary',
		intro: {
			greeting: 'The words that keep coming back',
			goal: 'עשרה שיעורים קצרים ומבחן סיכום על המילים שחוזרות בכל בחינה: מילות שאלה, מילות ניווט ומילות תוכן.'
		}
	},
	{
		id: 'c-1',
		titleEn: 'Part B - Reading Skills',
		intro: {
			greeting: 'I search - I do not read',
			goal: 'שמונה־עשר שיעורים ומבחן סיכום שבונים את הכלים: איך ניגשים לטקסט, איך מוצאים את התשובה, ואיך עונים על כל סוג שאלה.'
		}
	},
	{
		id: 'c-3',
		titleEn: 'Part C - Writing',
		intro: {
			greeting: '70-90 words, every time',
			goal: 'שבעה מיקרו-סקילס שבונים פסקה שלב אחר שלב, ואחריהם ארבעה שיעורי נושא על שאלות בגרות אמיתיות.'
		}
	},
	{
		id: 'e-1',
		titleEn: 'Part I - Reading Skills',
		intro: {
			greeting: 'I search - I do not read',
			goal: 'הכלים לחלק הקריאה בבגרות: איך ניגשים לטקסט, איך מוצאים את התשובה, ואיך עונים על כל סוג שאלה.'
		}
	}
];
