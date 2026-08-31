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
	/**
	 * Single-round shorthand — most lessons only ever have one round. Missing
	 * or empty = content not written yet — the node still shows (title only)
	 * but is locked. Ignored when `rounds` is set; use `getRounds()` rather
	 * than reading either field directly.
	 */
	screens?: LessonScreen[];
	/**
	 * Multiple rounds of the same lesson (Duolingo-style): completing round 1
	 * unlocks the path same as any lesson, and tapping the node again offers
	 * the next round — usually a harder or differently-shaped rehash of the
	 * same words. See getRounds().
	 */
	rounds?: LessonScreen[][];
	/** Force the path node's size, overriding the automatic message-only sizing. */
	big?: boolean;
	/**
	 * Ids of lessons that must be completed before this one unlocks (from
	 * anywhere in the module, not just this section) — AND'd together.
	 * Missing/empty = a root node, unlocked from the start. This is the one
	 * graph every module's path is built from; see the lessons path page.
	 */
	prerequisites?: string[];
	/** Canvas placement in px, relative to the path's horizontal center. */
	x?: number;
	y?: number;
};

/** A lesson's rounds — always at least one entry, even for single-round lessons. */
export function getRounds(lesson: Lesson): LessonScreen[][] {
	if (lesson.rounds && lesson.rounds.length > 0) return lesson.rounds;
	return [lesson.screens ?? []];
}

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
// see hasContent in the lessons path page.
//
// `prerequisites`/`x`/`y` are the generic canvas graph every module's path
// is drawn from (see the lessons path page): sections 1 and 2 are two
// independent chains placed side by side (positive x = section 1, negative
// x = section 2), converging into section 3's first lesson, which then
// chains straight through section 6.
function titleOnly(
	id: string,
	titleHe: string,
	prerequisites: string[],
	x: number,
	y: number
): Lesson {
	return { id, titleHe, screens: [], prerequisites, x, y };
}

// Section 1's real content — preface text is the CSV's "Message (What to
// Teach)" column (translated to Hebrew); each exercise follows the CSV's
// "Exercise Type / Snippet" column. "Matching" (no matching screen type
// exists) is done as one mcq per word; l7's "Quizlet Live" (an external
// group activity, not a single question) becomes a message-only recap.
const vocabFoundationSection: SectionContent = {
	lessons: [
		{
			id: 's1-l1',
			titleHe: 'מילות ליבה — טכנולוגיה',
			prerequisites: [],
			x: 70,
			y: 0,
			// Round 1: meaning-mcq. Round 2: fill-blank. Round 3: context.
			rounds: [
				[
					{
						type: 'preface',
						text: 'אוצר מילים בתחום הטכנולוגיה חיוני להבנת טקסטים לא מוכרים ביחידה C. הכירו את 5 מילות המפתח הבאות.'
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "device"?',
						options: ['מכשיר', 'מסלול', 'תהליך', 'רעיון'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "innovate"?',
						options: ['לחדש', 'להעתיק', 'למחוק', 'להאט'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "digital"?',
						options: ['דיגיטלי', 'ידני', 'ישן', 'כבד'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "access"?',
						options: ['גישה', 'איסור', 'תשלום', 'עיכוב'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "download"?',
						options: ['להוריד', 'להעלות', 'למחוק', 'לשתף'],
						correctIndex: 0
					}
				],
				[
					{
						type: 'mcq',
						prompt: 'My phone is a useful ______ for taking photos.',
						options: ['device', 'innovate', 'digital', 'access'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'Companies must ______ constantly to stay ahead of competitors.',
						options: ['download', 'innovate', 'access', 'digital'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'We now use ______ maps instead of paper ones.',
						options: ['device', 'digital', 'download', 'access'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: "Students need ______ to the library's computers.",
						options: ['innovate', 'digital', 'access', 'download'],
						correctIndex: 2
					},
					{
						type: 'mcq',
						prompt: 'You can ______ the app for free.',
						options: ['device', 'access', 'download', 'innovate'],
						correctIndex: 2
					}
				],
				[
					{
						type: 'mcq',
						prompt:
							'"The doctor used a small device to check the patient\'s heart rate." — מה המשמעות של device במשפט הזה?',
						options: ['מכשיר', 'תרופה', 'ניתוח', 'בדיקה'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt:
							'"To stay competitive, the company decided to innovate and create new products every year." — מה המשמעות של innovate במשפט הזה?',
						options: ['לחדש', 'להעתיק', 'לפטר', 'למכור'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt:
							'"Most schools today use digital textbooks instead of paper ones." — מה המשמעות של digital במשפט הזה?',
						options: ['דיגיטלי', 'ישן', 'יקר', 'כבד'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt:
							'"People in remote villages often lack access to good hospitals." — מה המשמעות של access במשפט הזה?',
						options: ['גישה', 'כסף', 'זמן', 'רישיון'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt:
							'"He tried to download the movie, but his internet was too slow." — מה המשמעות של download במשפט הזה?',
						options: ['להוריד', 'למחוק', 'לצפות', 'לשדר'],
						correctIndex: 0
					}
				]
			]
		},
		{
			id: 's1-l2',
			titleHe: 'מילות ליבה — סביבה',
			prerequisites: ['s1-l1'],
			x: 90,
			y: 110,
			// Round 1: meaning-mcq. Round 2: fill-blank. Round 3: context.
			rounds: [
				[
					{
						type: 'preface',
						text: 'נושאים סביבתיים מופיעים לעיתים קרובות בטקסטים לא מוכרים. נלמד מילים חשובות בנושא: protect, pollute, ignore.'
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "protect"?',
						options: ['להגן', 'לזהם', 'להתעלם', 'לעזור'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "pollute"?',
						options: ['לנקות', 'לזהם', 'להגן', 'לתקן'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "ignore"?',
						options: ['להתעלם', 'להקשיב', 'לענות', 'לעזור'],
						correctIndex: 0
					}
				],
				[
					{
						type: 'mcq',
						prompt:
							'"We need to ______ the environment by using less plastic." — באיזו מילה משלימים את המשפט?',
						options: ['protect', 'pollute', 'ignore'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'Factories that ______ rivers must be punished.',
						options: ['protect', 'pollute', 'ignore'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: "Don't ______ the problem — we must act now.",
						options: ['protect', 'pollute', 'ignore'],
						correctIndex: 2
					}
				],
				[
					{
						type: 'mcq',
						prompt:
							'"Parents naturally want to protect their children from danger." — מה המשמעות של protect במשפט הזה?',
						options: ['להגן', 'להעניש', 'להתעלם', 'לשכוח'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt:
							'"The factory was fined for continuing to pollute the river with chemicals." — מה המשמעות של pollute במשפט הזה?',
						options: ['לנקות', 'לזהם', 'לתקן', 'להגן'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt:
							'"She decided to ignore the rude comment and keep smiling." — מה המשמעות של ignore במשפט הזה?',
						options: ['להתעלם', 'לענות', 'לצעוק', 'לבכות'],
						correctIndex: 0
					}
				]
			]
		},
		{
			id: 's1-l3',
			titleHe: 'מילות קישור ומעבר',
			prerequisites: ['s1-l2'],
			x: 100,
			y: 220,
			// Round 1: meaning-mcq. Round 2: fill-blank. Round 3: context.
			rounds: [
				[
					{
						type: 'preface',
						text: 'מילות קישור עוזרות לכתיבה שלכם לזרום. נלמד: "first of all", "second of all", "in my opinion", "for example", "to sum up".'
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של הביטוי "first of all"?',
						options: ['קודם כל', 'שנית', 'לדעתי', 'לסיכום'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של הביטוי "second of all"?',
						options: ['לדוגמה', 'שנית', 'קודם כל', 'לדעתי'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של הביטוי "in my opinion"?',
						options: ['לסיכום', 'לדוגמה', 'לדעתי', 'קודם כל'],
						correctIndex: 2
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של הביטוי "for example"?',
						options: ['קודם כל', 'לדוגמה', 'שנית', 'לסיכום'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של הביטוי "to sum up"?',
						options: ['שנית', 'לדעתי', 'לדוגמה', 'לסיכום'],
						correctIndex: 3
					}
				],
				[
					{
						type: 'mcq',
						prompt: '"______, let\'s discuss the benefits of exercise."',
						options: ['First of all', 'Second of all', 'In my opinion', 'For example', 'To sum up'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: '"______, it improves your mood."',
						options: ['First of all', 'Second of all', 'In my opinion', 'For example', 'To sum up'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt:
							'"______, I believe childhood is the most important time." — באיזה ביטוי משלימים את המשפט?',
						options: ['In my opinion', 'However', 'Therefore'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'Many students enjoy sports — ______, basketball and swimming.',
						options: ['First of all', 'Second of all', 'In my opinion', 'For example', 'To sum up'],
						correctIndex: 3
					},
					{
						type: 'mcq',
						prompt: '"______, exercise benefits both body and mind."',
						options: ['First of all', 'Second of all', 'In my opinion', 'For example', 'To sum up'],
						correctIndex: 4
					}
				],
				[
					{
						type: 'mcq',
						prompt:
							'"First of all, let me thank everyone for coming today." — מה תפקידו של הביטוי "first of all" במשפט?',
						options: ['לפתוח רשימת נקודות', 'לסכם', 'להביע דעה', 'לתת דוגמה'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt:
							'"Second of all, the plan will also save us money." — מה תפקידו של הביטוי "second of all" במשפט?',
						options: ['לתת דוגמה', 'להוסיף נקודה שנייה', 'לסכם', 'לפתוח נאום'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt:
							'"In my opinion, homework should be shorter." — מה תפקידו של הביטוי "in my opinion" במשפט?',
						options: ['לצטט מישהו אחר', 'להביע דעה אישית', 'לתת דוגמה', 'לסכם'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt:
							'"Many fruits are healthy — for example, apples and bananas." — מה תפקידו של הביטוי "for example" במשפט?',
						options: ['לסכם', 'להביע דעה', 'לתת דוגמה', 'לשאול שאלה'],
						correctIndex: 2
					},
					{
						type: 'mcq',
						prompt:
							'"To sum up, exercise is essential for a healthy life." — מה תפקידו של הביטוי "to sum up" במשפט?',
						options: ['לפתוח נושא', 'לתת דוגמה', 'להביע דעה', 'לסכם'],
						correctIndex: 3
					}
				]
			]
		},
		{
			id: 's1-l4',
			titleHe: 'מילות ליבה — חינוך',
			prerequisites: ['s1-l3'],
			x: 90,
			y: 330,
			// Round 1: meaning-mcq. Round 2: fill-blank. Round 3: context.
			rounds: [
				[
					{ type: 'preface', text: 'חינוך הוא נושא נפוץ ביחידה C.' },
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "learn"?',
						options: ['לרכוש ידע חדש', 'להעביר ידע לאחרים', 'להתכונן למבחן', 'לשכוח'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "teach"?',
						options: ['לרכוש ידע חדש', 'להעביר ידע לאחרים', 'לשחק', 'לנוח'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של המילה "study"?',
						options: ['לשחק', 'לנוח', 'להתעמק וללמוד לעומק', 'להעביר ידע'],
						correctIndex: 2
					}
				],
				[
					{
						type: 'mcq',
						prompt: '"We all ______ at home and at school." — באיזו מילה משלימים את המשפט?',
						options: ['learn', 'teach', 'study'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'Teachers ______ their students new skills every day.',
						options: ['learn', 'teach', 'study'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'She likes to ______ for her exams a week in advance.',
						options: ['learn', 'teach', 'study'],
						correctIndex: 2
					}
				],
				[
					{
						type: 'mcq',
						prompt:
							'"Every day, students learn new facts about the world in science class." — מה המשמעות של learn במשפט הזה?',
						options: ['לרכוש ידע חדש', 'להעביר ידע', 'לשכוח', 'לנוח'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt:
							'"My older sister loves to teach little kids how to read." — מה המשמעות של teach במשפט הזה?',
						options: ['לרכוש ידע', 'להעביר ידע לאחרים', 'לשחק', 'לישון'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt:
							'"He stayed up late to study for his history exam." — מה המשמעות של study במשפט הזה?',
						options: ['לשחק', 'לנוח', 'להתעמק וללמוד לעומק', 'לאכול'],
						correctIndex: 2
					}
				]
			]
		},
		{
			id: 's1-l5',
			titleHe: 'מילות ליבה — בריאות ואורח חיים',
			prerequisites: ['s1-l4'],
			x: 70,
			y: 440,
			// Round 1: meaning-mcq. Round 2: fill-blank. Round 3: context.
			rounds: [
				[
					{
						type: 'preface',
						text: 'אוצר מילים מתחום הבריאות ואורח החיים מופיע בטקסטים לא מוכרים.'
					},
					{
						type: 'mcq',
						prompt: 'איזו מילה פירושה "להתמודד עם בעיה" (to deal with a problem)?',
						options: ['ignore', 'cope with', 'avoid'],
						correctIndex: 1
					}
				],
				[
					{
						type: 'mcq',
						prompt:
							"When things get difficult, it's important to ______ your problems instead of running from them.",
						options: ['ignore', 'cope with', 'avoid'],
						correctIndex: 1
					}
				],
				[
					{
						type: 'mcq',
						prompt:
							'"After losing his job, he found it hard to cope with the stress." — מה המשמעות של cope with במשפט הזה?',
						options: ['להתעלם מ', 'להתמודד עם', 'להימנע מ'],
						correctIndex: 1
					}
				]
			]
		},
		{
			id: 's1-l6',
			titleHe: 'אוצר מילים בהקשר',
			prerequisites: ['s1-l5'],
			x: 70,
			y: 550,
			screens: [
				{
					type: 'preface',
					text: 'למילים יש משמעויות שונות בהקשרים שונים. נלמד להסיק משמעות מהקשר.'
				},
				{
					type: 'mcq',
					prompt:
						'"The residents of the small town were worried." — מה המשמעות של המילה "residents" בהקשר הזה?',
					options: ['תיירים', 'תושבים', 'עובדים', 'ילדים'],
					correctIndex: 1
				},
				{
					type: 'mcq',
					prompt: 'The ______ of the building complained about the noise.',
					options: ['residents', 'visitors', 'tourists', 'workers'],
					correctIndex: 0
				}
			]
		},
		{
			id: 's1-l7',
			titleHe: 'חזרה ומבחן — סט מילים 1',
			prerequisites: ['s1-l6'],
			x: 70,
			y: 660,
			screens: [
				{
					type: 'preface',
					text: 'חזרה מרווחת מחזקת את הזיכרון. הגיע הזמן לחזור על המילים שלמדנו בשיעורים 1-6.'
				},
				{
					type: 'summary',
					title: 'מילים לחזרה',
					lines: [
						'device, innovate, digital, access, download',
						'protect, pollute, ignore',
						'in my opinion, however, therefore',
						'learn, teach, study',
						'cope with',
						'residents'
					]
				}
			]
		},
		{
			id: 's1-l8',
			titleHe: 'סט מילים 2 — מילים מתקדמות',
			prerequisites: ['s1-l7'],
			x: 50,
			y: 770,
			screens: [
				{ type: 'preface', text: 'נרחיב את אוצר המילים שלכם. כתבו משפטים משלכם באנגלית.' },
				{
					type: 'writing-task',
					prompt: 'כתבו 5 משפטים מקוריים באנגלית, כל אחד משתמש באחת מהמילים שלמדנו בסעיף זה.',
					wordBank: ['device', 'innovate', 'digital', 'access', 'download', 'protect', 'pollute'],
					minSentences: 5,
					minWordsUsed: 3
				}
			]
		}
	]
};

const readingBasicsSection: SectionContent = {
	lessons: [
		titleOnly('s2-l1', 'סריקה מהירה לרעיון המרכזי', [], -70, 0),
		titleOnly('s2-l2', 'סריקה לפרטים', ['s2-l1'], -72, 110),
		titleOnly('s2-l3', 'הבחנה בין רעיון מרכזי לפרטים תומכים', ['s2-l2'], -78, 220),
		titleOnly('s2-l4', 'מענה על שאלות "לפי הטקסט"', ['s2-l3'], -76, 330),
		titleOnly('s2-l5', 'פסילת תשובות שגויות', ['s2-l4'], -70, 440),
		titleOnly('s2-l6', 'שאלות הסקה', ['s2-l5'], -90, 550),
		titleOnly('s2-l7', 'אוצר מילים בקריאה', ['s2-l6'], -100, 660),
		titleOnly('s2-l8', 'תרגול מלא על טקסט', ['s2-l7'], -90, 770)
	]
};

// Section 7 — "Strategic Reading". A third real track drawn straight down the
// center of the lessons path (x ~ 0), between the section-1 and section-2
// columns, converging into s3-l1 with them. Only three nodes: recognise the
// exam's instruction words, learn to skim for "eye catchers", then practice
// marking them in a paragraph.
const strategicReadingSection: SectionContent = {
	lessons: [
		{
			id: 's7-l1',
			titleHe: 'מילות הוראה בשאלון',
			prerequisites: [],
			x: 0,
			y: 60,
			// These five are exam-instruction phrases, not everyday vocabulary. Of
			// the "learn a new word" methods, spell-word (copy / dictation) is the
			// least effective here — typing "according to" or "complete the
			// sentence" drills spelling, not meaning (and listen-mode audio isn't
			// wired). So: word-card to introduce, then recognition (round 1) and
			// use-in-context (round 2) MCQ.
			rounds: [
				[
					{
						type: 'preface',
						text: 'המילים בשאלון לא מופיעות רק בטקסט — הן מופיעות גם בהוראות השאלה. מי שלא מבין את ההוראה מפסיד נקודות גם כשהבין את הטקסט. נכיר חמש מילות הוראה נפוצות.'
					},
					{ type: 'word-card', word: 'paragraph', translationHe: 'פסקה' },
					{ type: 'word-card', word: 'according to', translationHe: 'לפי / על פי' },
					{ type: 'word-card', word: 'explain / explains', translationHe: 'להסביר / מסביר' },
					{ type: 'word-card', word: 'give ONE answer', translationHe: 'תנו תשובה אחת בלבד' },
					{ type: 'word-card', word: 'complete the sentence', translationHe: 'השלימו את המשפט' },
					{
						type: 'mcq',
						prompt: 'מה המשמעות של "paragraph"?',
						options: ['פסקה', 'משפט', 'כותרת', 'עמוד'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: 'מה המשמעות של "according to"?',
						options: ['בניגוד ל־', 'לפי / על פי', 'למרות', 'בזכות'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'ההוראה "explain" מבקשת מכם...',
						options: [
							'לסמן תשובה נכונה',
							'להסביר במילים שלכם',
							'להעתיק שורה מהטקסט',
							'לתרגם לעברית'
						],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'ההוראה "give ONE answer" אומרת...',
						options: ['לתת כמה תשובות אפשריות', 'לתת תשובה אחת בלבד', 'לתת דוגמה', 'לא חובה לענות'],
						correctIndex: 1
					},
					{
						type: 'mcq',
						prompt: 'ההוראה "complete the sentence" מבקשת...',
						options: [
							'לכתוב משפט חדש לגמרי',
							'להשלים את החלק החסר במשפט',
							'לתקן שגיאה במשפט',
							'לקצר את המשפט'
						],
						correctIndex: 1
					}
				],
				[
					{
						type: 'mcq',
						prompt: '"Answer according to the text." — מה נדרש מכם?',
						options: [
							'לענות לפי מה שכתוב בטקסט',
							'לענות לפי דעתכם האישית',
							'לנחש',
							'להעתיק את כל הפסקה'
						],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: '"Read the third paragraph and give ONE answer." — כמה תשובות לכתוב?',
						options: ['אחת', 'שתיים', 'שלוש', 'כמה שאפשר'],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: '"Explain why the writer moved to Oslo." — איזו תשובה מתאימה?',
						options: [
							'משפט שמסביר את הסיבה',
							'סימון "נכון / לא נכון"',
							'מספר השורה בטקסט',
							'תרגום המשפט'
						],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: '"Complete the sentence: The study lasted ___." — מה עושים?',
						options: [
							'ממלאים את החסר לפי הטקסט',
							'כותבים משפט חדש לגמרי',
							'מוחקים את המשפט',
							'בוחרים תשובה מרשימה'
						],
						correctIndex: 0
					},
					{
						type: 'mcq',
						prompt: '"In paragraph 2, the writer explains that..." — היכן לחפש את התשובה?',
						options: ['בפסקה השנייה', 'בכותרת', 'במשפט האחרון של הטקסט', 'בשאלה הבאה'],
						correctIndex: 0
					}
				]
			]
		},
		{
			id: 's7-l2',
			titleHe: 'סריקה מהירה — מגנטים לעין',
			prerequisites: ['s7-l1'],
			x: 0,
			y: 320,
			screens: [
				{
					type: 'preface',
					text: 'סריקה (skim) היא מעבר מהיר על הטקסט לפני קריאה לעומק — לא קוראים כל מילה, אלא צדים "מגנטים לעין": פרטים בולטים שנושאים את עיקר המשמעות. ברגע שמזהים אותם כבר יודעים על מה הטקסט ואיפה יושבות התשובות.'
				},
				{
					type: 'summary',
					title: 'ארבעה סוגי מגנטים לעין',
					lines: [
						'מספרים וזמנים (כתום): 30% · once a week · three sessions · two months',
						'שמות פרטיים (סגול): Dr. Anna Klein · University of Oslo',
						'מילות שלילה (אדום): cannot · never · not',
						'מילות מפתח (ירוק): most · only'
					]
				}
			]
		},
		{
			id: 's7-l3',
			titleHe: 'תרגול — סמנו את המגנטים',
			prerequisites: ['s7-l2'],
			x: 0,
			y: 580,
			screens: [
				{
					type: 'preface',
					text: 'עכשיו תורכם. לפניכם פסקה קצרה — סרקו אותה וסמנו את כל המגנטים לעין: מספרים וזמנים, שמות פרטיים, מילות שלילה ומילות מפתח.'
				},
				{
					type: 'mark-all',
					instruction: 'סמנו את כל המגנטים לעין בפסקה',
					dir: 'ltr',
					text: 'Dr. Anna Klein studied sleep for two months. According to her report, most teenagers cannot sleep well. She tested 30 students once a week. Only three improved, and the rest never did.',
					// Dr.(0) Anna(1) Klein(2) | two(6) months.(7) | most(12) | cannot(14) |
					// 30(19) | once(21) a(22) week.(23) | Only(24) | three(25) | never(30)
					correctIndices: [0, 1, 2, 6, 7, 12, 14, 19, 21, 22, 23, 24, 25, 30]
				}
			]
		}
	]
};

const advancedReadingSection: SectionContent = {
	lessons: [
		// Converges all three parallel tracks — needs every one done.
		titleOnly('s3-l1', 'הבנת מבנה הטקסט', ['s1-l8', 's2-l8', 's7-l3'], 0, 880),
		titleOnly('s3-l2', 'מטרת הכותב', ['s3-l1'], 64, 990),
		titleOnly('s3-l3', 'טון ועמדה', ['s3-l2'], 96, 1100),
		titleOnly('s3-l4', 'השוואה בין שני טקסטים', ['s3-l3'], 64, 1210),
		titleOnly('s3-l5', 'סיכום טקסט', ['s3-l4'], 0, 1320),
		titleOnly('s3-l6', 'ניהול זמן', ['s3-l5'], -64, 1430),
		titleOnly('s3-l7', 'התמודדות עם טקסטים קשים', ['s3-l6'], -96, 1540),
		titleOnly('s3-l8', 'תרגול וסיכום מלא', ['s3-l7'], -64, 1650)
	]
};

const opinionWritingSection: SectionContent = {
	lessons: [
		titleOnly('s4-l1', 'מבנה חיבור חוות דעת', ['s3-l8'], 0, 1760),
		titleOnly('s4-l2', 'כתיבת פתיחה לחיבור חוות דעת', ['s4-l1'], 64, 1870),
		titleOnly('s4-l3', 'הוספת נימוקים עם מילות קישור', ['s4-l2'], 96, 1980),
		titleOnly('s4-l4', 'כתיבת סיכום חזק', ['s4-l3'], 64, 2090),
		titleOnly('s4-l5', 'תיאור — אנשים', ['s4-l4'], 0, 2200),
		titleOnly('s4-l6', 'תיאור — מקומות וחוויות', ['s4-l5'], -64, 2310),
		titleOnly('s4-l7', 'שימוש יעיל בשמות תואר', ['s4-l6'], -96, 2420),
		titleOnly('s4-l8', 'חיבור חוות דעת — תרגול מלא', ['s4-l7'], -64, 2530)
	]
};

const lettersWritingSection: SectionContent = {
	lessons: [
		titleOnly('s5-l1', 'פורמט מכתב — רשמי מול לא רשמי', ['s4-l8'], 0, 2640),
		titleOnly('s5-l2', 'פתיחות וסיומות במכתבים', ['s5-l1'], 64, 2750),
		titleOnly('s5-l3', 'מכתב תלונה', ['s5-l2'], 96, 2860),
		titleOnly('s5-l4', 'מכתב בקשה', ['s5-l3'], 64, 2970),
		titleOnly('s5-l5', 'סיכום — כל סוגי הכתיבה', ['s5-l4'], 0, 3080),
		titleOnly('s5-l6', 'משוב עמיתים', ['s5-l5'], -64, 3190),
		titleOnly('s5-l7', 'רשימת עריכה עצמית', ['s5-l6'], -96, 3300),
		titleOnly('s5-l8', 'כתיבה — תרגול מלא', ['s5-l7'], -64, 3410)
	]
};

const fullIntegrationSection: SectionContent = {
	lessons: [
		titleOnly('s6-l1', 'מבחן מלא — קריאה וכתיבה', ['s5-l8'], 0, 3520),
		titleOnly('s6-l2', 'סיכום מבחן — קריאה', ['s6-l1'], 64, 3630),
		titleOnly('s6-l3', 'סיכום מבחן — כתיבה', ['s6-l2'], 96, 3740),
		titleOnly('s6-l4', 'סבב מילים מהיר', ['s6-l3'], 64, 3850),
		titleOnly('s6-l5', 'סיכום אסטרטגיות — כל הכישורים', ['s6-l4'], 0, 3960),
		titleOnly('s6-l6', 'מבחן מלא #2', ['s6-l5'], -64, 4070),
		titleOnly('s6-l7', 'סיכום סופי — נקודות חולשה', ['s6-l6'], -96, 4180),
		titleOnly('s6-l8', 'ביטחון וגישה מנטלית', ['s6-l7'], -64, 4290)
	]
};

const contentBySection: Record<string, SectionContent> = {
	'c-1': vocabFoundationSection,
	'c-2': readingBasicsSection,
	'c-3': advancedReadingSection,
	'c-4': opinionWritingSection,
	'c-5': lettersWritingSection,
	'c-6': fullIntegrationSection,
	'c-7': strategicReadingSection
};

export function getSectionContent(moduleId: string, sectionId: number): SectionContent | undefined {
	return contentBySection[`${moduleId.toLowerCase()}-${sectionId}`];
}
