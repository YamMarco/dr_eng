// Plain-language Hebrew names for each screen type — used anywhere a screen
// type needs to be shown to a non-technical author (carousel card headers,
// the toaster's type selector) instead of the raw type string.
// Detachable — part of src/lib/content-edit/.
import type { LessonScreen } from '$lib/lesson-screens/types';

export const TYPE_HE: Record<LessonScreen['type'], string> = {
	preface: 'טקסט / הסבר',
	steps: 'שלבים',
	summary: 'סיכום',
	'question-preview': 'הצצה לשאלות',
	'word-card': 'כרטיס מילה',
	mcq: 'שאלה אמריקאית',
	'mark-word': 'סימון מילה',
	'cloze-pick': 'השלמת משפט מרשימה',
	'mark-all': 'סימון במלל',
	'spell-word': 'איות מילה',
	'match-pairs': 'התאמת זוגות',
	'writing-task': 'משימת כתיבה',
	'passage-quiz': 'קטע + שאלות פתוחות',
	'passage-mcq': 'קטע + שאלות אמריקאיות',
	'self-check': 'בדיקה עצמית',
	'sentence-completion': 'השלמת משפט',
	passage: 'קטע קריאה (מבחן)',
	'timed-reading': 'קריאה מתוזמנת',
	'time-result': 'תוצאת זמן',
	'time-comparison': 'השוואת זמנים'
};

export const typeHe = (t: string) => TYPE_HE[t as LessonScreen['type']] ?? t;
