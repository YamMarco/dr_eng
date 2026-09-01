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
import { markTargets } from './markText';
import { vocabSectionContent } from './vocabSections';
import { programContent } from './program';

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
	 * The lesson part of the material code shown on the node label
	 * (module.section.lesson). Defaults to the lesson's 1-based position in
	 * its section — set it for side-by-side nodes, e.g. '2a' / '2b'.
	 */
	code?: string;
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
			x: 50,
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
			x: 40,
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

// Section 3 (4.c.3) is hand-extended past its generated vocab opener with two
// more lessons: mark numbers & names in a text, then use them (P2/P3) to
// navigate to answers. vocabSections.ts leaves the vertical room (s3-l2/l3 at
// y 1140/1260) and pushes sections 4+ down; s4-l1 is rewired to follow s3-l3.
const gardenP1 =
	'Five years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city. Today, Greenville looks very different.';
const gardenP2 =
	'The person behind this change is Dr. Maria Santos, a professor at Greenville University. "We wanted to show that any city can become greener in less than ten years," she explains. Her team worked with more than 300 volunteers from the local community. The volunteers spent an average of three hours a week working in the gardens.';
const gardenP3 =
	'The results were surprising. According to the charity, 85% of Greenville residents now say the city is a better place to live. Dr. Santos\'s colleague, Professor James Wu, found that stress levels among residents had fallen by 40%. "When people have access to green spaces, they feel calmer and happier," he says. The project now receives visits from city planners from over 50 countries who want to learn from Greenville\'s success.';
const gardenFull = `${gardenP1}\n\n${gardenP2}\n\n${gardenP3}`;
const sportText =
	'A new community sports programme in the city of Portland has helped over 4,000 residents become more active over the past two years. The programme offers free fitness classes three times a week in 12 different neighbourhoods. According to Dr. Laura Kim, who runs the programme, the idea is simple. "We bring the sport to the people, not the people to the sport," she says. "Most people want to be active — they just need the opportunity." Professor Marcus Allen of Portland State University found that participants in the programme were 60% less likely to suffer from stress-related health problems.';

const s3MarkLesson: Lesson = {
	id: 's3-l2',
	titleHe: 'מציאה וסימון — מספרים ושמות',
	prerequisites: ['s3-l1'],
	x: 70,
	y: 1140,
	screens: [
		{
			type: 'preface',
			text: 'בסריקה מהירה, שני סוגי פרטים כמעט תמיד מובילים אל התשובה: מספרים ושמות.\n\nמספר = המספר יחד עם מה שהוא סופר: "2,000 trees", "three hours a week", "40%", "five years".\nשם = אנשים, מקומות וארגונים: "Dr. Maria Santos", "Greenville", "Greenville University".'
		},
		{
			type: 'summary',
			title: 'מה מסמנים',
			lines: [
				'מספרים: המספר + שם העצם שצמוד אליו. לדוגמה: 2,000 trees · three hours · 85% · ten years',
				'שמות: אות גדולה באמצע משפט — אדם, מקום או מוסד. לדוגמה: Dr. Maria Santos · Greenville University · Professor James Wu'
			]
		},
		{
			type: 'preface',
			text: 'לפניכם הטקסט THE CITY GARDEN PROJECT בשלוש פסקאות. בכל פסקה סמנו את כל המספרים והשמות.'
		},
		{
			type: 'mark-all',
			instruction: 'פסקה I — סמנו את כל המספרים והשמות',
			dir: 'ltr',
			text: gardenP1,
			correctIndices: markTargets(gardenP1, [
				'Five years',
				'2,000 trees',
				'15 community gardens',
				'Greenville'
			])
		},
		{
			type: 'mark-all',
			instruction: 'פסקה II — סמנו את כל המספרים והשמות',
			dir: 'ltr',
			text: gardenP2,
			correctIndices: markTargets(gardenP2, [
				'Dr. Maria Santos',
				'Greenville University',
				'ten years',
				'300 volunteers',
				'three hours'
			])
		},
		{
			type: 'mark-all',
			instruction: 'פסקה III — סמנו את כל המספרים והשמות',
			dir: 'ltr',
			text: gardenP3,
			correctIndices: markTargets(gardenP3, [
				'85%',
				"Dr. Santos's",
				'Professor James Wu',
				'40%',
				'50 countries',
				'Greenville',
				"Greenville's"
			])
		}
	]
};

const s3UseLesson: Lesson = {
	id: 's3-l3',
	titleHe: 'שימוש במספרים ושמות לניווט',
	prerequisites: ['s3-l2'],
	x: 70,
	y: 1260,
	screens: [
		{
			type: 'preface',
			text: 'עד עכשיו סימנתם מספרים ושמות. עכשיו משתמשים בהם כדי לנווט מהר אל התשובה — בלי לקרוא את כל הטקסט.'
		},
		{
			type: 'summary',
			title: 'P2 · מספרים   |   P3 · שמות',
			lines: [
				'P2 (מספר בשאלה): חפשו את המספר בטקסט ← ודאו שהוא צמוד לדבר הנכון ← זו התשובה',
				'P3 (שם בשאלה): לכו לפסקה של אותו שם ← קראו רק שם ← אל תקראו פסקאות אחרות'
			]
		},
		{
			type: 'timed-passage',
			label: 'THE CITY GARDEN PROJECT',
			timerKey: 's3garden',
			text: gardenFull,
			questions: [
				{
					prompt: 'How many trees did the charity plant in Greenville? (paragraph I)',
					options: ['Over 2,000', 'About 200', '15', 'More than 300'],
					correctIndex: 0
				},
				{
					prompt: 'According to Dr. Maria Santos, what did her team want to show? (paragraph II)',
					options: [
						'That any city can become greener in less than ten years',
						'That Greenville was polluted five years ago',
						'That 300 volunteers were not enough',
						'That stress levels fell by 40%'
					],
					correctIndex: 0
				},
				{
					prompt: 'How many hours a week did the volunteers spend in the gardens? (paragraph II)',
					options: ['An average of three hours', 'Ten years', 'Over 50 hours', '85 hours'],
					correctIndex: 0
				},
				{
					prompt: 'What do we learn from Professor James Wu about the results? (paragraph III)',
					options: [
						'Why he decided to study the Greenville project',
						'How stress levels changed among residents',
						'How many people visited Greenville from other countries',
						"Why he disagrees with Dr. Santos's findings"
					],
					correctIndex: 1
				}
			]
		},
		{ type: 'preface', text: 'אתגר מתוזמן: טקסט חדש, שתי שאלות. השתמשו ב-P2 וב-P3.' },
		{
			type: 'timed-passage',
			label: 'SPORT FOR ALL',
			timerKey: 's3sport',
			text: sportText,
			questions: [
				{
					prompt:
						"According to Professor Marcus Allen, how did the programme affect participants' health?",
					options: [
						'They were 60% less likely to have stress-related health problems',
						'They exercised for 60 minutes more each day',
						'They were twice as likely to join a gym',
						'They became 40% stronger'
					],
					correctIndex: 0
				},
				{
					prompt: 'What does Dr. Laura Kim explain about the programme?',
					options: [
						'Why sports equipment is expensive in Portland',
						'How many people run the programme every year',
						'Why the programme brings sport to different neighbourhoods',
						'How participants became healthier than before'
					],
					correctIndex: 2
				}
			]
		},
		{ type: 'time-result', label: 'סיימתם את האתגר!', timerKey: 's3sport' }
	]
};

// Section 4 (4.c.4) — negatives & contrast, from docs/module c/schema2.md.
// Past its generated opener the section splits into two side-by-side tracks
// (the `a` / `b` nodes): each marks the eye catchers, then applies them to
// NOT-questions. Both tracks work the same text in a different order, and
// section 5 waits for both.
const givingP1 =
	'Every year, millions of young people around the world choose to volunteer — to give their time to help others without payment. A study from a research institute found that young people who volunteer for at least two hours a week are 60% more likely to describe themselves as happy. Researchers were surprised. They had expected that money and success — not helping others — would be the main reason for happiness among teenagers.';
const givingP2 =
	'The benefits of volunteering go beyond simple happiness. Dr. Sarah Okafor, a researcher at a European university, studied the effects of volunteering on mental health for ten years. She found that teenagers who volunteer feel less stressed and sleep better than those who do not. However, not all types of volunteering produce the same results. According to Okafor, the most effective programmes bring young people face to face with the people they help — not online activities.';
const givingP3 =
	'Results from 12 countries show that the benefits of volunteering are not limited to the volunteers themselves. Schools that introduced volunteering programmes found that students became more responsible and more focused in class. Professor David Mills of an Australian university argues that helping others teaches young people skills that no classroom can ever replace. "When you help someone," he says, "you also help yourself."';
const givingFull = `${givingP1}\n\n${givingP2}\n\n${givingP3}`;

/** The negative + contrast bank this section hunts for — also shown in round 1. */
const NEG_CONTRAST = ['not', 'no', 'never', 'without', 'cannot', 'however', 'although', 'but'];

const markNegContrast = (
	instruction: string,
	text: string,
	extra: { wordBank?: string[]; timerKey?: string } = {}
): LessonScreen => ({
	type: 'mark-all',
	instruction,
	dir: 'ltr',
	text,
	correctIndices: markTargets(text, NEG_CONTRAST),
	...extra
});

const negContrastPreface: LessonScreen = {
	type: 'preface',
	text: 'מילות שלילה ומילות ניגוד הן מגנטים לעין קטנים — אבל הן הופכות משפט על פיו. מי שמפספס אותן עונה בדיוק הפוך.\n\nשלילה: not · no · never · without · cannot\nניגוד: however · although · but'
};

const negContrastCard: LessonScreen = {
	type: 'summary',
	title: 'שלילה וניגוד',
	lines: [
		'שלילה: not · no · never · without · cannot — הופכות את משמעות המשפט',
		'ניגוד: however · although · but — מסמנות שינוי כיוון; מה שבא אחריהן חשוב',
		'ראיתם מילה כזו? עצרו וקראו את המשפט שוב, לאט.'
	]
};

const s4Mark2a: Lesson = {
	id: 's4-l2a',
	titleHe: 'סימון שלילה וניגוד — מסלול א׳',
	code: '2a',
	prerequisites: ['s4-l1'],
	x: -70,
	y: 1500,
	rounds: [
		[
			negContrastPreface,
			negContrastCard,
			markNegContrast(
				'סמנו את כל מילות השלילה והניגוד',
				'She found that teenagers who volunteer feel less stressed and sleep better than those who do not. However, not all types of volunteering produce the same results.',
				{ wordBank: NEG_CONTRAST }
			)
		],
		[
			{ type: 'preface', text: 'הפעם בלי בנק מילים — פסקה שלמה. סמנו את כל מילות השלילה והניגוד.' },
			markNegContrast('פסקה II — סמנו את כל מילות השלילה והניגוד', givingP2)
		],
		[
			{ type: 'preface', text: 'הטקסט המלא, בלי בנק מילים, עם שעון. סרקו — אל תקראו מילה־מילה.' },
			markNegContrast('GIVING TIME, GAINING HAPPINESS — סמנו הכול', givingFull, {
				timerKey: 'markFull'
			}),
			{ type: 'time-result', label: 'סיימתם את הסריקה!', timerKey: 'markFull' }
		]
	]
};

const s4Mark2b: Lesson = {
	id: 's4-l2b',
	titleHe: 'סימון שלילה וניגוד — מסלול ב׳',
	code: '2b',
	prerequisites: ['s4-l1'],
	x: 70,
	y: 1500,
	rounds: [
		[
			negContrastPreface,
			negContrastCard,
			markNegContrast(
				'סמנו את כל מילות השלילה והניגוד',
				'Results from 12 countries show that the benefits of volunteering are not limited to the volunteers themselves. Professor David Mills of an Australian university argues that helping others teaches young people skills that no classroom can ever replace.',
				{ wordBank: NEG_CONTRAST }
			)
		],
		[
			{
				type: 'preface',
				text: 'הפעם בלי בנק מילים — שתי פסקאות. סמנו את כל מילות השלילה והניגוד.'
			},
			markNegContrast(
				'פסקאות I ו-III — סמנו את כל מילות השלילה והניגוד',
				`${givingP1}\n\n${givingP3}`
			)
		],
		[
			{ type: 'preface', text: 'הטקסט המלא, בלי בנק מילים, עם שעון. סרקו — אל תקראו מילה־מילה.' },
			markNegContrast('GIVING TIME, GAINING HAPPINESS — סמנו הכול', givingFull, {
				timerKey: 'markFull'
			}),
			{ type: 'time-result', label: 'סיימתם את הסריקה!', timerKey: 'markFull' }
		]
	]
};

// The P4 warning, repeated on both question tracks so each stands alone.
const notQuestionIntro: LessonScreen[] = [
	{
		type: 'preface',
		text: 'במודול C הניקוד לא ניתן על קריאת הטקסט — הוא ניתן על השאלות. שאלה אחת שנקראה לא נכון מוחקת פסקה שקראתם מצוין.\n\nוהסוג המסוכן ביותר הוא שאלת NOT.'
	},
	{
		type: 'preface',
		text: '! STOP — this question has NOT in it.\nYou are looking for the STATEMENT THAT IS FALSE. P4.\n\nזהירות! NOT בשאלה. אתם מחפשים את המשפט השגוי.'
	},
	{
		type: 'summary',
		title: 'P4 — שאלת NOT',
		lines: [
			'NOT / NOT true / EXCEPT בשאלה ← עצרו.',
			'אתם מחפשים את המשפט השגוי — לא את הנכון.',
			'בדקו כל אפשרות מול הטקסט: נכון · נכון · נכון — והשגוי הוא התשובה.'
		]
	}
];

const s4Not3a: Lesson = {
	id: 's4-l3a',
	titleHe: 'שאלת NOT — P4',
	code: '3a',
	prerequisites: ['s4-l2a'],
	x: -70,
	y: 1620,
	screens: [
		...notQuestionIntro,
		{
			type: 'timed-passage',
			label: 'GIVING TIME, GAINING HAPPINESS',
			timerKey: 's4not',
			text: givingFull,
			questions: [
				{
					prompt: 'Which statement is NOT true according to paragraph II?',
					options: [
						'Dr. Okafor studied volunteering and mental health for ten years.',
						'All types of volunteering produce the same results.',
						'Teenagers who volunteer feel less stressed than those who do not.',
						'Dr. Okafor found that young volunteers sleep better.'
					],
					correctIndex: 1
				}
			]
		},
		{ type: 'time-result', label: 'סיימתם!', timerKey: 's4not' }
	]
};

const s4Not3b: Lesson = {
	id: 's4-l3b',
	titleHe: 'שאלות NOT ופרטים — תרגול',
	code: '3b',
	prerequisites: ['s4-l2b'],
	x: 70,
	y: 1620,
	screens: [
		...notQuestionIntro,
		{
			type: 'timed-passage',
			label: 'GIVING TIME, GAINING HAPPINESS',
			timerKey: 's4not',
			text: givingFull,
			questions: [
				{
					prompt:
						'According to Dr. Sarah Okafor, what type of volunteering is most effective? (paragraph II)',
					options: [
						'Programmes that bring young people face to face with the people they help',
						'Online volunteering activities',
						'Programmes that last at least ten years',
						'Volunteering that pays a small salary'
					],
					correctIndex: 0
				},
				{
					prompt: 'What do we learn from paragraph II about the different types of volunteering?',
					options: [
						'All types have the same positive effect on teenagers',
						'The most popular type is online volunteering',
						'Face-to-face programmes are more effective than online ones',
						'Dr. Okafor recommends only one type of volunteering'
					],
					correctIndex: 2
				},
				{
					prompt:
						'According to paragraph III, what is NOT true about the benefits of volunteering?',
					options: [
						'Schools with volunteering programmes saw students become more focused',
						'The benefits are limited to the volunteers themselves',
						'Professor Mills argues that classrooms cannot replace helping others',
						'Volunteering teaches young people important skills'
					],
					correctIndex: 1
				}
			]
		},
		{ type: 'time-result', label: 'סיימתם!', timerKey: 's4not' }
	]
};

const s3Lessons: Lesson[] = [...vocabSectionContent['c-3'].lessons, s3MarkLesson, s3UseLesson];
const s4Opener: Lesson = { ...vocabSectionContent['c-4'].lessons[0], prerequisites: ['s3-l3'] };
// Section 5 waits for both side-by-side tracks to finish.
const s5Opener: Lesson = {
	...vocabSectionContent['c-5'].lessons[0],
	prerequisites: ['s4-l3a', 's4-l3b']
};

// The pre-programme roster (vocab openers + the hand-built sections 3-5).
// Kept for reference on this branch; the live module is the programme in
// lib/program (see docs/module c/duolingo-program.md).
export const archivedContentBySection: Record<string, SectionContent> = {
	'c-1': vocabFoundationSection,
	...vocabSectionContent,
	'c-3': { lessons: s3Lessons },
	'c-4': { lessons: [s4Opener, s4Mark2a, s4Mark2b, s4Not3a, s4Not3b] },
	'c-5': { lessons: [s5Opener] }
};

export function getSectionContent(moduleId: string, sectionId: number): SectionContent | undefined {
	return programContent[`${moduleId.toLowerCase()}-${sectionId}`];
}
