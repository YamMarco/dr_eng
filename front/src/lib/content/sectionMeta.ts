// Section grouping for the path canvas (headings + theme-color order).
// One section per Part of a module's programme. A section can sit on several
// modules' paths (`modules`); they then share its lessons and its progress.
import type { SectionMeta } from './types';

export const sectionMeta: SectionMeta[] = [
	{
		id: 'c-2',
		modules: ['c'],
		skill: 'vocab',
		titleEn: 'Part A - Vocabulary',
		intro: {
			greeting: 'The words that keep coming back',
			goal: 'עשרה שיעורים קצרים ומבחן סיכום על המילים שחוזרות בכל בחינה: מילות שאלה, מילות ניווט ומילות תוכן.'
		}
	},
	{
		id: 'c-1',
		modules: ['c', 'e'],
		progressScope: 'reading',
		skill: 'reading',
		titleEn: 'Part B - Reading Skills',
		intro: {
			greeting: 'I search - I do not read',
			goal: 'שמונה־עשר שיעורים ומבחן סיכום שבונים את הכלים: איך ניגשים לטקסט, איך מוצאים את התשובה, ואיך עונים על כל סוג שאלה.'
		}
	},
	{
		id: 'c-3',
		modules: ['c'],
		skill: 'writing',
		titleEn: 'Part C - Writing',
		intro: {
			greeting: '70-90 words, every time',
			goal: 'שבעה מיקרו-סקילס שבונים פסקה שלב אחר שלב, ואחריהם ארבעה שיעורי נושא על שאלות בגרות אמיתיות.'
		}
	},
	{
		id: 'g-1',
		modules: ['g'],
		skill: 'reading',
		titleEn: 'Part A - Reading Skills',
		intro: {
			greeting: 'Map, locate, answer',
			goal: 'שמונה־עשר שיעורים על טקסט באורך בחינה: סריקה, מגנטים, סוגי שאלות, פרפרזה, השוואת דעות וניהול זמן.'
		}
	},
	{
		id: 'g-2',
		modules: ['g'],
		skill: 'writing',
		titleEn: 'Part B - Writing',
		intro: {
			greeting: 'One clear opinion, two reasons',
			goal: 'שישה שיעורים לחיבור דעה: מפת 4 הפסקאות, שלושה מבנים שמעלים את רמת השפה, תבניות לפי סוג שאלה וחיבור מלא.'
		}
	},
	{
		id: 'cobe-1',
		modules: ['cobe'],
		skill: 'speaking',
		titleEn: 'Part A - About me',
		intro: {
			greeting: 'Answer all, say why, give an example',
			goal: 'חמישה שיעורים לחלק האישי: חוקי הבחינה, סולם התשובה, משפטי הצלה, ותרגול על עצמכם, הבית וסיפורים.'
		}
	},
	{
		id: 'cobe-2',
		modules: ['cobe'],
		skill: 'speaking',
		titleEn: 'Part B - Project',
		intro: {
			greeting: 'One full minute about your project',
			goal: 'חמישה שיעורים לשאלות על הפרויקט: כרטיס פרויקט, משפחות השאלות, מאתגר לפתרון, להאריך לדקה, ותרגול.'
		}
	},
	{
		id: 'cobe-3',
		modules: ['cobe'],
		skill: 'speaking',
		titleEn: 'Part C - Clip',
		intro: {
			greeting: 'Watch, then speak',
			goal: 'חמישה שיעורים לחלק של הקליפ: לתאר מה קרה ואת התוצאה (סט 1), ולהסביר רגשות, מסר ו"אילו הייתי" (סט 2).'
		}
	}
];
