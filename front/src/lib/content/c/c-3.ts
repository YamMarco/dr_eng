// Part C — Writing. One node per programme lesson (lesson17…lesson22).
// Source: docs/module c/insertprogram/lesson##_module_c.docx
import type { LessonNode } from '../types';

export const c3Lessons: LessonNode[] = [
	{
		id: 'l17',
		section: 'c-3',
		titleHe: 'מה רוצים ממני?',
		titleEn: 'What the Task Wants',
		code: 'c.3.1',
		required: ['l16'],
		position: { x: 0, y: 2160 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'טעות נפוצה:\n\n"Do you think teenagers should volunteer?"\nתלמיד: "Volunteering is good. Many people volunteer."\n← אין דעה. אין סיבות.\n\nנכון:\n"Yes, I think… First… For example… In addition…"\n← דעה + שתי סיבות + דוגמה.'
				},
				{
					type: 'summary',
					title: 'איך מתחלקות 30 הנקודות',
					lines: [
						'📝 תוכן וארגון — 10 נקודות. הכי חשוב.',
						'📚 אוצר מילים — 8 נקודות.',
						'🔤 דקדוק — 8 נקודות.',
						'✏️ כתיב ופיסוק — 4 נקודות.',
						'גם עם דקדוק חלש — תוכן נכון וברור מביא 22-25 מתוך 30.'
					]
				},
				{
					type: 'summary',
					title: 'מה תמיד נדרש',
					lines: [
						'מטלת הכתיבה = 30% מהציון.',
						'70-90 מילים. חובה. פחות מ-60 מוריד נקודות.',
						'"Do you think?" ← תמיד דעה + הסבר.',
						'"Give reasons" ← לפחות שתי סיבות + דוגמה.'
					]
				},
				{
					type: 'summary',
					title: 'הנושאים שחוזרים במודול C',
					lines: [
						'🌍 סביבה — הגנה על הסביבה, זיהום, עצים, בעלי חיים',
						'🤝 קהילה — התנדבות, עזרה לאחרים, שינוי חברתי',
						'🏥 בריאות — ספורט, תזונה, בריאות נפשית',
						'💻 טכנולוגיה — מסכים, אינטרנט, המצאות',
						'📚 חינוך — בית ספר, שפות, כישורים לחיים',
						'כדאי להכין בבית 2-3 דוגמאות לכל נושא, לפני הבחינה.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT\n\n"Do you think all teenagers should volunteer? Give reasons to explain your opinion."\nמה נדרש: דעה (YES/NO) + סיבות + 70-90 מילים.\n\n"Do you think it is important for schools to teach about the environment? Give reasons."\nאותו מבנה בדיוק. תמיד.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'"Do you think teenagers should have a part-time job? Give reasons." — מה חייב להופיע בתשובה?',
							options: [
								'YES או NO, לפחות שתי סיבות, ו-70-90 מילים',
								'תרגום של הנושא לעברית',
								'רשימת מילים באנגלית',
								'סיכום של טקסט הקריאה'
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: 'איזה קריטריון שווה הכי הרבה נקודות בכתיבה?',
							options: ['דקדוק', 'כתיב ופיסוק', 'תוכן וארגון', 'אורך התשובה'],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'כתבתם 45 מילים בלבד. מה קורה?',
							options: [
								'לא קורה כלום — העיקר התוכן',
								'מקבלים בונוס על קיצור',
								'הבודק מוסיף מילים',
								'מאבדים נקודות — פחות מ-60 מילים מוריד ניקוד'
							],
							correctIndex: 3
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — תכנון לפני כתיבה.\n\n"Do you think it is important to protect the environment? Give reasons."'
						},
						{
							type: 'mcq',
							prompt: 'מה השלב הראשון בתשובה?',
							options: [
								'לכתוב YES או NO — הדעה שלי',
								'לתת דוגמה',
								'לכתוב סיכום',
								'לספור מילים'
							],
							correctIndex: 0
						},
						{
							type: 'self-check',
							prompt:
								'תכננו: YES או NO, סיבה 1, סיבה 2, ומילת תוכן אחת שתשתמשו בה. כתבו את התכנון (אפשר בעברית).',
							modelAnswer:
								'YES. סיבה 1: pollution destroys nature and affects our health. סיבה 2: small actions can protect the environment for the next generation. מילת תוכן: environment / protect / benefit.'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"Do you think? = YES/NO + 2 reasons. 70-90 מילים."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l18',
		section: 'c-3',
		titleHe: 'P14 — נוסחת הכתיבה',
		titleEn: 'P14 Structure',
		code: 'c.3.2',
		required: ['l17'],
		position: { x: 70, y: 2280 },
		big: false,
		content: {
			preface: [
				{
					type: 'summary',
					title: 'P14 — נוסחת הכתיבה שלכם',
					lines: [
						'YES / NO',
						'↓ I think that… because…',
						'↓ This means… / For example…',
						'↓ In addition,…',
						'↓ In conclusion, I believe that…'
					]
				},
				{ type: 'word-card', word: 'I think / I believe that', translationHe: 'אני חושב/ת ש־' },
				{ type: 'word-card', word: 'because', translationHe: 'כי' },
				{ type: 'word-card', word: 'This means that', translationHe: 'זאת אומרת ש־' },
				{ type: 'word-card', word: 'For example', translationHe: 'לדוגמה' },
				{ type: 'word-card', word: 'In addition', translationHe: 'בנוסף' },
				{ type: 'word-card', word: 'Another reason is', translationHe: 'סיבה נוספת היא' },
				{ type: 'word-card', word: 'In conclusion', translationHe: 'לסיכום' },
				{
					type: 'preface',
					text: 'על דקדוק בכתיבה — להירגע:\n\nדקדוק שווה 8 נקודות. תוכן שווה 10.\nהרעיון שלכם חשוב יותר מהמשפט המושלם.\n\nמה שחייב להיות בכל משפט: subject + verb. זה הבסיס. השאר בונוס.'
				},
				{
					type: 'steps',
					steps: [
						'"Yes, I think that teenagers should volunteer in their community." ← הדעה.',
						'"First, volunteering develops important skills." ← סיבה 1.',
						'"For example, many teenagers learn to work in a team and become more responsible." ← דוגמה.',
						'"In addition, volunteering is good for mental health. Studies show that young volunteers feel less stressed." ← סיבה 2 + דוגמה.',
						'"In conclusion, I believe that volunteering has many benefits for teenagers and for society." ← סיכום. סה״כ 79 מילים.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: 'TRY IT — "Do you think schools should teach students about the environment?"\nנבנה את P14 שלב אחרי שלב.'
						},
						{
							type: 'mcq',
							prompt: 'איזה משפט פותח נכון לפי P14?',
							options: [
								'The environment is a big problem in the world today.',
								'I think that schools should teach students about the environment.',
								'For example, we can recycle plastic.',
								'In conclusion, the environment is important.'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'אחרי הדעה — מה בא?',
							options: [
								'סיכום',
								'עוד דעה',
								'סיבה ראשונה: "First, it is important because…"',
								'שאלה חדשה'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'איזו מילה פותחת את הסיבה השנייה?',
							options: ['However', 'Because', 'For example', 'In addition'],
							correctIndex: 3
						},
						{
							type: 'mcq',
							prompt: 'איך מסיימים?',
							options: [
								'In conclusion, I believe that…',
								'Thank you for reading.',
								'This is my opinion, bye.',
								'לא צריך משפט סיום'
							],
							correctIndex: 0
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — עכשיו כותבים פסקה שלמה לפי P14.\nשימו לב למונה המילים: היעד הוא 70-90.'
						},
						{
							type: 'self-check',
							prompt:
								'"Do you think it is important for teenagers to learn a foreign language? Give reasons to explain your opinion." — כתבו תשובה מלאה לפי P14.',
							placeholder: 'I think that...',
							minWords: 70,
							maxWords: 90,
							modelAnswer:
								'Yes, I think that it is important for teenagers to learn a foreign language. First, a foreign language opens many opportunities. For example, students who speak English can study abroad and find better jobs. This means that they are better prepared for the future. In addition, learning a language helps us understand other cultures and meet new people. In conclusion, I believe that every teenager should learn at least one foreign language, because it improves both education and society.'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"I think… because… For example… In addition… 70-90."']
						}
					]
				}
			]
		}
	}
];
