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
,
	{
		id: 'l19',
		section: 'c-3',
		titleHe: 'דקדוק בסיסי',
		titleEn: 'Basic Grammar',
		code: 'c.3.3',
		required: ['l18'],
		position: { x: 100, y: 2400 },
		big: false,
		content: {
			preface: [
				{
					type: 'summary',
					title: 'כמה נקודות שווה דקדוק?',
					lines: [
						'📝 תוכן וארגון — 10',
						'📚 אוצר מילים — 8',
						'🔤 דקדוק (Language Use) — 8',
						'✏️ כתיב ופיסוק (Mechanics) — 4',
						'גם עם דקדוק חלש — תוכן נכון וברור מביא 22-25 מתוך 30.'
					]
				},
				{
					type: 'preface',
					text: 'מה זה אומר לכם?\n\n✓ תוכן טוב + 70-90 מילים = עד 18/30 גם בלי דקדוק מושלם.\n✓ דקדוק "minimally correct" = 5 מתוך 8 — עדיין מקבלים.\n⚠️ ההפסד המקסימלי על כתיב הוא 2 נקודות בלבד.\n❌ פחות מ-60 מילים עולה יותר מכל שגיאת דקדוק.\n\nהמסקנה: כן ללמוד דקדוק — אבל לא לפחד ממנו.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — שני כללי ברזל',
					lines: [
						'כלל 1: כל משפט = subject + verb. "Students volunteer." ✓ · "Many teenagers jobs." ✗ חסר פועל.',
						'כלל 2: יחיד ורבים. I / He / She / It + verb+s ← "She volunteers." · We / They / Students + verb ← "They volunteer."'
					]
				},
				{
					type: 'preface',
					text: 'קריאה מול כתיבה:\n\n📖 בקריאה — דקדוק שגוי בתשובה לא מוריד נקודות. מה שחשוב הוא המידע מהטקסט.\n✏️ בכתיבה — דקדוק שווה 8 מתוך 30. subject + verb בכל משפט הוא הבסיס שמגן עליכם.'
				},
				{
					type: 'steps',
					steps: [
						'✗ Many students jobs. ← ✓ Many students have jobs.',
						'✗ Students is responsible. ← ✓ Students are responsible.',
						'✗ I was think it good. ← ✓ I think that it is good.',
						'✗ Because sport healthy. ← ✓ …because sport is healthy.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: 'תקנו: "Teenagers responsible for the environment."',
							options: [
								'Teenagers are responsible for the environment.',
								'Teenagers responsible are for the environment.',
								'Teenagers is responsible for the environment.',
								'המשפט תקין'
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: 'תקנו: "She volunteer at the community centre."',
							options: [
								'She are volunteer at the community centre.',
								'She volunteers at the community centre.',
								'She volunteering at the community centre.',
								'המשפט תקין'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'תקנו: "The students they learn new skills."',
							options: [
								'The students they learns new skills.',
								'They the students learn new skills.',
								'The students learn new skills.',
								'המשפט תקין'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'מה חסר במשפט "Many teenagers jobs"?',
							options: ['subject', 'נקודה בסוף', 'אות גדולה', 'verb — פועל'],
							correctIndex: 3
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — כתבו שלושה משפטים נכונים.\nבדיקה לכל משפט: יש subject? יש verb? יחיד/רבים נכון?'
						},
						{
							type: 'self-check',
							prompt: 'משפט 1 — על התנדבות. כתבו משפט אחד נכון באנגלית.',
							placeholder: 'Students...',
							modelAnswer: 'Students who volunteer develop important skills.'
						},
						{
							type: 'self-check',
							prompt: 'משפט 2 — על בריאות. כתבו משפט אחד נכון באנגלית.',
							placeholder: 'Exercise...',
							modelAnswer: 'Exercise keeps young people healthy and reduces stress.'
						},
						{
							type: 'self-check',
							prompt: 'משפט 3 — על הסביבה. כתבו משפט אחד נכון באנגלית.',
							placeholder: 'We...',
							modelAnswer: 'We must protect the environment because pollution destroys nature.'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"subject + verb בכל משפט. זה מגן על 8 הנקודות."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l20',
		section: 'c-3',
		titleHe: '70-90 מילים',
		titleEn: 'Word Count',
		code: 'c.3.4',
		required: ['l19'],
		position: { x: 70, y: 2520 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '55 מילים:\n"Yes, I think volunteering is good. It helps health. For example, students feel better. In conclusion, important."\n← חסרות 15 מילים. מאבדים נקודות.\n\n76 מילים:\n"Yes, I think teenagers should volunteer. First, it develops important skills. For example, teenagers learn to work in a team. This means they are ready for the future. In addition, it helps mental health. Volunteers feel less stressed. In conclusion, volunteering is very beneficial."'
				},
				{
					type: 'summary',
					title: 'THE TOOL — איך סופרים',
					lines: [
						'כל מילה = 1. גם a, the, and נספרות.',
						'"I(1) think(2) that(3) volunteering(4) is(5) important(6)."',
						'השיטה: כותבים ← סופרים ← רושמים את המספר בסוף ← בודקים שהוא בין 70 ל-90.'
					]
				},
				{
					type: 'summary',
					title: '⚠️ טבלת הקנסות הרשמית',
					lines: [
						'70-90 מילים ← ללא קנס. היעד.',
						'60-69 ← מינוס 1 נקודה',
						'50-59 ← מינוס 3 נקודות',
						'40-49 ← מינוס 6 נקודות',
						'30-39 ← מינוס 10 נקודות',
						'פחות מ-25 ← אפס על כל המטלה',
						'מינוס 6 על 45 מילים יקר יותר מכל שגיאת דקדוק.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT — ספרו:\n\n"Yes, I think that protecting the environment is very important. First, we need clean air and water to stay healthy. For example, in many cities, pollution causes serious health problems. In addition, protecting the environment helps animals and plants to survive. In conclusion, I believe that every person should do something to help the environment."\n\n68 מילים — קצת מתחת ל-70. מוסיפים משפט קצר: "…every single person should try to do something small." ← 75 מילים ✓'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: 'כתבתם 45 מילים. כמה נקודות מפסידים לפי הטבלה?',
							options: ['מינוס 1', 'מינוס 3', 'מינוס 6', 'לא מפסידים כלום'],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'כתבתם 24 מילים. מה קורה?',
							options: [
								'אפס על כל מטלת הכתיבה',
								'מינוס 10',
								'מינוס 3',
								'מקבלים ניקוד חלקי על התוכן'
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: 'ספרתם 68 מילים. מה עושים?',
							options: [
								'משאירים — קרוב מספיק',
								'מוסיפים משפט קצר כדי לעבור את 70',
								'מוחקים משפט',
								'כותבים הכל מחדש'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'האם "the" ו-"and" נספרות?',
							options: [
								'לא — רק מילים "חשובות"',
								'רק "and" נספרת',
								'רק בסוף המשפט',
								'כן — כל מילה נספרת'
							],
							correctIndex: 3
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — 20 דקות. בחרו נושא אחד:\n\n1. "Do you think all students should volunteer in their community?"\n2. "Do you think it is important to protect the environment?"\n3. "Do you think teenagers should learn a second language?"\n\nהשתמשו ב-P14. המונה למטה סופר בזמן אמת — היעד 70-90.'
						},
						{
							type: 'self-check',
							prompt:
								'כתבו את התשובה המלאה. עצרו כשהמונה ירוק — בין 70 ל-90 מילים.',
							placeholder: 'Yes, I think that...',
							minWords: 70,
							maxWords: 90,
							modelAnswer:
								'Yes, I think that all students should volunteer in their community. First, volunteering develops important skills. For example, students learn to work in a team and to be responsible for other people. This means that they are better prepared for adult life. In addition, volunteering is good for mental health, because volunteers feel less stressed and sleep better. In conclusion, I believe that every school should encourage students to volunteer, because it helps both the students and society. (78 words)'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"70-90 מילים. סופר כל פעם. הטבלה לא סולחת."']
						}
					]
				}
			]
		}
	}
];
