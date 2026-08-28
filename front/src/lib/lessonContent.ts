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
	/** Empty = content not written yet — the node is skipped from the path entirely. */
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
					text: 'רוב התלמידים קוראים קודם את הטקסט ואז את השאלות — ואז קוראים את הטקסט שוב, ושוב. מתעייפים, מתייאשים, ומרגישים "אני לא טוב באנגלית". אבל הבעיה לא בהם — בסדר העבודה. מהיום עובדים הפוך, כמו בלש שיודע מה הוא מחפש לפני שהוא נכנס לחדר:\n\nצעד 1: קרא את כל השאלות לפני הטקסט. עכשיו אתה יודע בדיוק מה מחפשים — הקריאה הופכת מחיפוש באפלה לחיפוש עם פנס. בואו תרגישו את זה בעצמכם.'
				},
				// Transition into the exercise, right before it starts.
				{
					type: 'preface',
					text: 'מעולה! עכשיו ננסה את זה על אמת — יהיו לנו טקסט ושאלות, פעם בסדר אחד ופעם בסדר הפוך. יהיה גם טיימר, כדי שתרגישו את ההבדל במהירות ולא רק בהרגשה.'
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
				// Step 3, right before the round that practices it: now that
				// you know what you're looking for, read once and answer the
				// moment you meet the answer.
				{
					type: 'preface',
					text: 'צעד 3: קרא את הטקסט פעם אחת בלבד — וכשאתה פוגש תשובה, ענה מיד. לא לחכות לסוף. הפעם תדעו כבר מה מחפשים, אז ננסה את זה:'
				},
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
				},
				{
					type: 'summary',
					title: '🗂 כרטיס שיטה 1 — שאלות קודם',
					lines: [
						'קרא שאלות ← סמן מילת שאלה ← רק אז קרא את הטקסט',
						'Who=מי · What=מה · When=מתי · Where=איפה · Why=למה (because!) · How=איך',
						'פגשת תשובה תוך כדי קריאה? ענה מיד'
					]
				}
			]
		},
		{
			id: 'mark-question-words',
			titleHe: 'זיהוי מילות שאלה במשפט',
			screens: [
				// Step 2, right before the exercise that practices it.
				{
					type: 'preface',
					text: 'צעד 2: סמן בכל שאלה את מילת השאלה: Who = אדם · What = דבר או פעולה · When = זמן · Where = מקום · Why = סיבה (חפש because) · How = איך.'
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
		{
			id: 'read-once-answer-immediately',
			titleHe: 'קרא פעם אחת וענה מיד',
			screens: [
				{
					type: 'preface',
					text: 'צעד 3: קרא את הטקסט פעם אחת בלבד — וכשאתה פוגש תשובה, ענה מיד. לא לחכות לסוף.'
				},
				{
					type: 'timed-passage',
					label: 'קטע 1',
					timerKey: 'step3A',
					text: 'נועה הגיעה לספרייה בשעה ארבע אחר הצהריים כדי להחזיר שני ספרים. בדרך היא פגשה את השכנה שלה ודיברו כמה דקות על מזג האוויר. כשנכנסה לספרייה, נועה גם שאלה את הספרן אם הגיע ספר חדש שהזמינה, אבל הוא ענה שהוא עוד לא הגיע.',
					questions: [
						{
							prompt: 'מתי נועה הגיעה לספרייה?',
							options: ['בשתיים', 'בשלוש', 'בארבע', 'בחמש'],
							correctIndex: 2
						},
						{
							prompt: 'מה נועה שאלה את הספרן?',
							options: [
								'אם יש ספר חדש שהיא הזמינה',
								'איך מגיעים הביתה',
								'כמה עולה כרטיס ספרייה',
								'מתי הספרייה נסגרת'
							],
							correctIndex: 0
						}
					]
				},
				{
					type: 'timed-passage',
					label: 'קטע 2',
					timerKey: 'step3B',
					text: 'רון תכנן לנסוע לעבודה ברכבת השמונה, אבל התעורר מאוחר ופספס אותה. הוא חיכה לרכבת הבאה שיצאה רק בשמונה וחצי. בגלל האיחור, הוא שלח הודעה לבוס שלו כדי להסביר שהוא יגיע קצת אחרי תשע.',
					questions: [
						{
							prompt: 'לאיזו רכבת רון פספס?',
							options: ['לרכבת שבע', 'לרכבת שמונה', 'לרכבת תשע', 'לרכבת עשר'],
							correctIndex: 1
						},
						{
							prompt: 'למה רון שלח הודעה לבוס?',
							options: [
								'כדי לבקש יום חופש',
								'כדי להסביר שהוא יאחר',
								'כדי לשאול שאלה על העבודה',
								'כדי לבטל פגישה'
							],
							correctIndex: 1
						}
					]
				}
			]
		},
		{
			id: 'test-1',
			titleHe: 'מבחן קצר',
			screens: [
				{
					type: 'summary',
					title: '🗂 כרטיס שיטה 1 — שאלות קודם',
					lines: [
						'קרא שאלות ← סמן מילת שאלה ← רק אז קרא את הטקסט',
						'Who=מי · What=מה · When=מתי · Where=איפה · Why=למה (because!) · How=איך',
						'פגשת תשובה תוך כדי קריאה? ענה מיד'
					]
				},
				{
					type: 'summary',
					title: 'חמש מילים שיצילו אותך בטקסט (קרא לפני!)',
					lines: [
						'first day = יום ראשון (במקום חדש)',
						'gets up = קם (מהשינה)',
						'breakfast = ארוחת בוקר',
						'neighbor = שכן',
						'gives = נותן'
					]
				},
				{
					type: 'passage-quiz',
					text: 'Today is Dan\'s first day at his new school in Haifa. He gets up at seven o\'clock and eats breakfast with his mother. At eight, he walks to school with his new neighbor, Omer. The teacher, Mrs. Levi, gives Dan a book and a notebook. In the English lesson, Dan answers a question — and his answer is right! After school, Dan tells his mother: "I love my new school!"',
					questions: [
						{
							prompt: 'Who walks to school with Dan?',
							keywords: ['omer'],
							answerHint: 'Omer (his new neighbor)',
							points: 10
						},
						{
							prompt: 'When does Dan get up?',
							keywords: ['seven'],
							answerHint: "at seven (o'clock)",
							points: 10
						},
						{
							prompt: 'What does the teacher give Dan?',
							keywords: ['book', 'notebook'],
							answerHint: 'a book and a notebook',
							points: 10
						},
						{
							prompt: "Where is Dan's new school?",
							keywords: ['haifa'],
							answerHint: 'in Haifa',
							points: 10
						}
					]
				}
			]
		}
	]
};

const contentByLesson: Record<string, LessonContent> = {
	'c-1': moduleCLesson1
};

export function getLessonContent(moduleId: string, lessonId: number): LessonContent | undefined {
	return contentByLesson[`${moduleId.toLowerCase()}-${lessonId}`];
}
