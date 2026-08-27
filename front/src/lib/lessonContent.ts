// Structured content for individual lessons. A lesson without an entry here
// falls back to the generic "coming soon" placeholder on the lesson page.
//
// Content strings are authored Hebrew teaching material (not UI chrome), so
// they aren't run through the i18n dictionaries — same convention as
// curriculum.ts section labels.
//
// Each part is just a flat, declarative list of screens — plug in a message
// or a question, no new code needed. See lesson-screens/types.ts for the
// available screen shapes and lesson-screens/registry.ts for how they're
// rendered.

import type { LessonScreen } from './lesson-screens/types';

export type { LessonScreen };

export type LessonPart = {
	id: string;
	titleHe: string;
	/** Empty = content not written yet (node shows lowlighted, not clickable). */
	screens: LessonScreen[];
};

export type LessonIntro = {
	greeting: string;
	goal: string;
};

export type LessonContent = {
	intro?: LessonIntro;
	parts: LessonPart[];
};

const moduleCLesson1: LessonContent = {
	intro: {
		greeting:
			'💬 ברוך הבא לאקדמיית הבלשים. מהיום, כל טקסט באנגלית הוא זירת חקירה — ואתה הבלש. וסוד ראשון שמורידים איתו חצי מהפחד: בלש לא צריך להבין כל פרט בזירה כדי לפתור את התיק. הוא צריך לדעת מה לחפש. אף אחד לא מבין כל מילה — גם התלמידים הכי חזקים. בקורס הזה תלמד לפתור את התיק גם כשלא הבנת הכול. זו בדיוק המיומנות שהבחינה בודקת.',
		goal: '🎯 בסוף השיעור תדע: לקרוא שאלות לפני הטקסט, לזהות 6 מילות שאלה, ולכתוב 3 משפטים נכונים באנגלית — בעצמך.'
	},
	parts: [
		{
			id: 'read-questions-first',
			titleHe: 'קריאת השאלות לפני הטקסט',
			screens: [
				{
					type: 'preface',
					text: 'רוב התלמידים קוראים קודם את הטקסט ואז את השאלות — ואז קוראים את הטקסט שוב, ושוב. מתעייפים, מתייאשים, ומרגישים "אני לא טוב באנגלית". אבל הבעיה לא בהם — בסדר העבודה. מהיום עובדים הפוך, כמו בלש שיודע מה הוא מחפש לפני שהוא נכנס לחדר:'
				},
				{
					type: 'steps',
					steps: [
						'צעד 1: קרא את כל השאלות לפני הטקסט. עכשיו אתה יודע בדיוק מה מחפשים — הקריאה הופכת מחיפוש באפלה לחיפוש עם פנס.',
						'צעד 2: סמן בכל שאלה את מילת השאלה: Who = אדם · What = דבר או פעולה · When = זמן · Where = מקום · Why = סיבה (חפש because) · How = איך.',
						'צעד 3: קרא את הטקסט פעם אחת בלבד — וכשאתה פוגש תשובה, ענה מיד. לא לחכות לסוף.'
					]
				},
				{
					type: 'summary',
					title: '🗂 כרטיס שיטה 1 — שאלות קודם',
					lines: [
						'קרא שאלות ← סמן מילת שאלה ← רק אז קרא את הטקסט',
						'Who=מי · What=מה · When=מתי · Where=איפה · Why=למה (because!) · How=איך',
						'פגשת תשובה תוך כדי קריאה? ענה מיד'
					]
				},
				// The exercise for this step: feel the difference yourself, on two
				// short (non-English) texts, once in each reading order.
				{
					type: 'preface',
					text: 'עכשיו נבדוק את זה בעצמכם. שני טקסטים קצרים, לא באנגלית — פעם אחת תקראו טקסט ואז שאלות, ופעם שנייה תקראו שאלות ואז טקסט. שימו לב להבדל בתחושה.'
				},
				{
					type: 'timed-reading',
					label: 'סיבוב 1 · קודם הטקסט',
					timerKey: 'roundA',
					text: 'דנה קמה בשבע בבוקר וישר הלכה למטבח. היא הכינה לעצמה כוס תה חם ואכלה פרוסת לחם עם גבינה. אחרי זה היא לקחה את התיק ויצאה לתחנת האוטובוס. האוטובוס איחר בעשר דקות, אז היא ישבה על ספסל וקראה בספר עד שהוא הגיע.'
				},
				{
					type: 'mcq',
					prompt: 'באיזו שעה דנה קמה?',
					options: ['בשש', 'בשבע', 'בשמונה', 'בתשע'],
					correctIndex: 1
				},
				{
					type: 'mcq',
					prompt: 'מה דנה עשתה בזמן שחיכתה לאוטובוס?',
					options: ['התקשרה לחברה', 'קראה בספר', 'אכלה עוגה', 'ישנה'],
					correctIndex: 1
				},
				{ type: 'time-result', label: 'סיימתם את סיבוב 1!', timerKey: 'roundA' },
				{
					type: 'question-preview',
					intro: 'קראו את השאלות הבאות לפני הטקסט, ושימו לב מה לחפש:',
					prompts: ['למה יוסי לא בישל?', 'כמה זמן יוסי חיכה לשליח?']
				},
				{
					type: 'timed-reading',
					label: 'סיבוב 2 · קודם השאלות',
					timerKey: 'roundB',
					text: 'יוסי סיים את העבודה מאוחר בערב ולא היה לו כוח לבשל. הוא החליט להזמין פיצה מהמסעדה שליד הבית. הוא חיכה כחצי שעה עד שהשליח הגיע. כשהפיצה הגיעה, יוסי ישב מול הטלוויזיה ואכל שלוש פרוסות.'
				},
				{
					type: 'mcq',
					prompt: 'למה יוסי לא בישל?',
					options: ['לא היה לו אוכל', 'לא היה לו כוח', 'הוא לא ידע לבשל', 'הוא לא היה רעב'],
					correctIndex: 1
				},
				{
					type: 'mcq',
					prompt: 'כמה זמן יוסי חיכה לשליח?',
					options: ['רבע שעה', 'חצי שעה', 'שעה', 'שעתיים'],
					correctIndex: 1
				},
				{ type: 'time-result', label: 'סיימתם את סיבוב 2!', timerKey: 'roundB' },
				{
					type: 'time-comparison',
					aLabel: 'סיבוב 1 · קודם הטקסט',
					aKey: 'roundA',
					bLabel: 'סיבוב 2 · קודם השאלות',
					bKey: 'roundB',
					fasterMessage: 'הרגשתם? כשידעתם מה לחפש, קראתם מהר ובטוח יותר.',
					tieMessage:
						'גם אם הפעם הזמן דומה — בטקסט ארוך ואמיתי ההבדל הרבה יותר משמעותי. קודם שאלות, תמיד.'
				}
			]
		},
		{
			id: 'mark-question-words',
			titleHe: 'זיהוי מילות שאלה במשפט',
			screens: [
				{
					type: 'preface',
					text: 'עכשיו נסמן ביחד. בכל משפט, הקישו על המילה שהיא מילת השאלה — זו המילה שאומרת לכם מה לחפש. נתחיל בעברית כדי לוודא שהרעיון ברור, ואז נעבור לאנגלית.'
				},
				{ type: 'mark-word', sentence: 'מי הלך אתמול לבית הספר?', correctWordIndex: 0, dir: 'rtl' },
				{
					type: 'mark-word',
					sentence: 'Where did she find the keys?',
					correctWordIndex: 0,
					dir: 'ltr'
				},
				{
					type: 'mark-word',
					sentence: 'When does the museum open?',
					correctWordIndex: 0,
					dir: 'ltr'
				},
				{ type: 'mark-word', sentence: 'Why did he stay home?', correctWordIndex: 0, dir: 'ltr' },
				{
					type: 'mark-word',
					sentence: 'How did they solve the problem?',
					correctWordIndex: 0,
					dir: 'ltr'
				},
				{ type: 'mark-word', sentence: 'What made her laugh?', correctWordIndex: 0, dir: 'ltr' }
			]
		},
		// Placeholder: sub-lesson not written yet. Shows up on the path
		// lowlighted and non-clickable.
		{ id: 'coming-soon-3', titleHe: 'בקרוב', screens: [] }
	]
};

const contentByLesson: Record<string, LessonContent> = {
	'c-1': moduleCLesson1
};

export function getLessonContent(moduleId: string, lessonId: number): LessonContent | undefined {
	return contentByLesson[`${moduleId.toLowerCase()}-${lessonId}`];
}
