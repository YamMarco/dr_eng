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
		id: 'cobe-1',
		modules: ['cobe'],
		skill: 'speaking',
		titleEn: 'Part 1 - Project',
		intro: {
			greeting: 'Confidence, not memory',
			goal: 'חמישה שיעורים לשאלות על הפרויקט: פתיחה אישית, משפט חילוץ כששוכחים פרט, למה הנושא חשוב היום, וסימולציה מוקלטת.'
		}
	},
	{
		id: 'cobe-2',
		modules: ['cobe'],
		skill: 'speaking',
		titleEn: 'Part 2 - Clip',
		intro: {
			greeting: 'Watch, then speak',
			goal: 'שני שיעורים לחלק של הקליפ: לתאר מה ראיתם (סט 1), ולהסביר מה אתם חושבים (סט 2).'
		}
	}
];
