// Structured content for a module's sections. A section without an entry
// here falls back to the generic "coming soon" placeholder.
//
// Content strings are authored Hebrew teaching material (not UI chrome), so
// they aren't run through the i18n dictionaries — same convention as
// curriculum.ts section labels.
//
// A section's `lessons` array is a flat, declarative list — plug in a
// message or a question, no new code needed. See lesson-screens/types.ts for
// the available screen shapes and lesson-screens/registry.ts for how
// they're rendered. Cascade: unit → module → section → lesson → screen.

import type { LessonScreen } from './lesson-screens/types';

export type { LessonScreen };

export type Lesson = {
	id: string;
	titleHe: string;
	/** Empty = content not written yet — the node still shows (title only) but is locked. */
	screens: LessonScreen[];
	/** Force the path node's size, overriding the automatic message-only sizing. */
	big?: boolean;
};

export type SectionIntro = {
	greeting: string;
	goal?: string;
};

export type SectionContent = {
	intro?: SectionIntro;
	lessons: Lesson[];
};

// Mockup only — 3 sections × 2 lessons each, so the zone-color transitions
// between sections are visible on the continuous path. Not real material.
function mockLesson(id: string, titleHe: string, promptWord: string, answer: string): Lesson {
	return {
		id,
		titleHe,
		screens: [
			{ type: 'preface', text: `(מוקאפ) תוכן לדוגמה עבור "${titleHe}".` },
			{
				type: 'mcq',
				prompt: `(מוקאפ) מה זה "${promptWord}"?`,
				options: ['תשובה א', answer, 'תשובה ג', 'תשובה ד'],
				correctIndex: 1
			}
		]
	};
}

// "Eye Catchers" — the previous section 1 content (reading-strategy micro
// lessons + the restored test-1 passage quiz). Set aside while the module
// is rebuilt around docs/lessons frame.csv (see contentBySection below). Do
// not delete: kept for later.
export const archivedEyeCatchersSection: SectionContent = {
	intro: {
		greeting: 'Can you spot them?'
	},
	lessons: [
		{
			id: 'before-we-start',
			titleHe: 'לפני שמתחילים',
			screens: [
				{
					type: 'preface',
					text: 'לפני שמתחילים.\nבין כל שאלוני האנגלית — קריאה, כתיבה, דיבור — יש משהו משותף.\nכולם בודקים את אותן יכולות, עם אותם סוגי שאלות.\nמה שאתה בונה כאן הוא לא מיומנות לשאלון אחד.\nאתה בונה שיטה ואוצר מילים שיעבדו בכל שאלוני האנגלית שתיפגוש — קריאה, כתיבה ודיבור.\nהמילים שתלמד. הדרך שבה תקרא שאלה. הדרך שבה תבדוק שהבנת.\nהכל מתחבר.'
				}
			]
		},
		{
			id: 'read-questions-first',
			titleHe: 'קריאת השאלות לפני הטקסט',
			screens: [
				{
					type: 'preface',
					// "צעד 1:" label dropped — the numbered-steps framing lives in the
					// mark-question-words lesson (step 2) now, not duplicated here.
					text: 'רוב התלמידים קוראים קודם את הטקסט ואז את השאלות — ואז קוראים את הטקסט שוב, ושוב. מתעייפים, מתייאשים, ומרגישים "אני לא טוב באנגלית". אבל הבעיה לא בהם — בסדר העבודה. מהיום עובדים הפוך, כמו בלש שיודע מה הוא מחפש לפני שהוא נכנס לחדר:\n\nקרא את כל השאלות לפני הטקסט. עכשיו אתה יודע בדיוק מה מחפשים — הקריאה הופכת מחיפוש באפלה לחיפוש עם פנס. בואו תרגישו את זה בעצמכם.'
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
			big: true,
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
		},
		{
			id: 'eye-catcher-words',
			titleHe: '4 מילים לפני שמתחילים',
			screens: [
				{
					type: 'summary',
					title: '4 מילים שצריך להכיר לפני שמתחילים:',
					lines: [
						'volunteer = מתנדב/ת',
						'benefit = יתרון / תועלת',
						'effective = יעיל/ה',
						'replace = להחליף'
					]
				}
			]
		},
		mockLesson('mock-1-7', '(מוקאפ) שיעור א׳.7', 'book', 'ספר')
	]
};

export const archivedMockSection2: SectionContent = {
	intro: {
		greeting: '💬 (מוקאפ) עוברים ליחידה ב׳.',
		goal: '🎯 (מוקאפ) עוד שני דברים בסיסיים.'
	},
	lessons: [
		mockLesson('mock-2-1', '(מוקאפ) שיעור ב׳.1', 'friend', 'חבר'),
		mockLesson('mock-2-2', '(מוקאפ) שיעור ב׳.2', 'school', 'בית ספר')
	]
};

export const archivedMockSection3: SectionContent = {
	intro: {
		greeting: '💬 (מוקאפ) יחידה ג׳ — האחרונה במוקאפ.',
		goal: '🎯 (מוקאפ) עוד שני דברים בסיסיים.'
	},
	lessons: [
		mockLesson('mock-3-1', '(מוקאפ) שיעור ג׳.1', 'family', 'משפחה'),
		mockLesson('mock-3-2', '(מוקאפ) שיעור ג׳.2', 'teacher', 'מורה')
	]
};

// Title-only skeleton, built from docs/lessons frame.csv — no exercises
// written yet, so every lesson below has an empty `screens` array. A lesson
// with no content still renders as a (locked, unclickable) node on the path;
// see isBigNode/hasContent in the lessons path page.
function titleOnly(id: string, titleHe: string): Lesson {
	return { id, titleHe, screens: [] };
}

const vocabFoundationSection: SectionContent = {
	lessons: [
		titleOnly('s1-l1', 'מילות ליבה — טכנולוגיה'),
		titleOnly('s1-l2', 'מילות ליבה — סביבה'),
		titleOnly('s1-l3', 'מילות קישור ומעבר'),
		titleOnly('s1-l4', 'מילות ליבה — חינוך'),
		titleOnly('s1-l5', 'מילות ליבה — בריאות ואורח חיים'),
		titleOnly('s1-l6', 'אוצר מילים בהקשר'),
		titleOnly('s1-l7', 'חזרה ומבחן — סט מילים 1'),
		titleOnly('s1-l8', 'סט מילים 2 — מילים מתקדמות')
	]
};

const readingBasicsSection: SectionContent = {
	lessons: [
		titleOnly('s2-l1', 'סריקה מהירה לרעיון המרכזי'),
		titleOnly('s2-l2', 'סריקה לפרטים'),
		titleOnly('s2-l3', 'הבחנה בין רעיון מרכזי לפרטים תומכים'),
		titleOnly('s2-l4', 'מענה על שאלות "לפי הטקסט"'),
		titleOnly('s2-l5', 'פסילת תשובות שגויות'),
		titleOnly('s2-l6', 'שאלות הסקה'),
		titleOnly('s2-l7', 'אוצר מילים בקריאה'),
		titleOnly('s2-l8', 'תרגול מלא על טקסט')
	]
};

const advancedReadingSection: SectionContent = {
	lessons: [
		titleOnly('s3-l1', 'הבנת מבנה הטקסט'),
		titleOnly('s3-l2', 'מטרת הכותב'),
		titleOnly('s3-l3', 'טון ועמדה'),
		titleOnly('s3-l4', 'השוואה בין שני טקסטים'),
		titleOnly('s3-l5', 'סיכום טקסט'),
		titleOnly('s3-l6', 'ניהול זמן'),
		titleOnly('s3-l7', 'התמודדות עם טקסטים קשים'),
		titleOnly('s3-l8', 'תרגול וסיכום מלא')
	]
};

const opinionWritingSection: SectionContent = {
	lessons: [
		titleOnly('s4-l1', 'מבנה חיבור חוות דעת'),
		titleOnly('s4-l2', 'כתיבת פתיחה לחיבור חוות דעת'),
		titleOnly('s4-l3', 'הוספת נימוקים עם מילות קישור'),
		titleOnly('s4-l4', 'כתיבת סיכום חזק'),
		titleOnly('s4-l5', 'תיאור — אנשים'),
		titleOnly('s4-l6', 'תיאור — מקומות וחוויות'),
		titleOnly('s4-l7', 'שימוש יעיל בשמות תואר'),
		titleOnly('s4-l8', 'חיבור חוות דעת — תרגול מלא')
	]
};

const lettersWritingSection: SectionContent = {
	lessons: [
		titleOnly('s5-l1', 'פורמט מכתב — רשמי מול לא רשמי'),
		titleOnly('s5-l2', 'פתיחות וסיומות במכתבים'),
		titleOnly('s5-l3', 'מכתב תלונה'),
		titleOnly('s5-l4', 'מכתב בקשה'),
		titleOnly('s5-l5', 'סיכום — כל סוגי הכתיבה'),
		titleOnly('s5-l6', 'משוב עמיתים'),
		titleOnly('s5-l7', 'רשימת עריכה עצמית'),
		titleOnly('s5-l8', 'כתיבה — תרגול מלא')
	]
};

const fullIntegrationSection: SectionContent = {
	lessons: [
		titleOnly('s6-l1', 'מבחן מלא — קריאה וכתיבה'),
		titleOnly('s6-l2', 'סיכום מבחן — קריאה'),
		titleOnly('s6-l3', 'סיכום מבחן — כתיבה'),
		titleOnly('s6-l4', 'סבב מילים מהיר'),
		titleOnly('s6-l5', 'סיכום אסטרטגיות — כל הכישורים'),
		titleOnly('s6-l6', 'מבחן מלא #2'),
		titleOnly('s6-l7', 'סיכום סופי — נקודות חולשה'),
		titleOnly('s6-l8', 'ביטחון וגישה מנטלית')
	]
};

const contentBySection: Record<string, SectionContent> = {
	'c-1': vocabFoundationSection,
	'c-2': readingBasicsSection,
	'c-3': advancedReadingSection,
	'c-4': opinionWritingSection,
	'c-5': lettersWritingSection,
	'c-6': fullIntegrationSection
};

export function getSectionContent(moduleId: string, sectionId: number): SectionContent | undefined {
	return contentBySection[`${moduleId.toLowerCase()}-${sectionId}`];
}
