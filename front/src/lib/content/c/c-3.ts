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
,
	{
		id: 'l21',
		section: 'c-3',
		titleHe: 'בחינה שלמה — ניהול זמן',
		titleEn: 'Full Simulation',
		code: 'c.3.5',
		required: ['l20'],
		position: { x: 0, y: 2640 },
		big: false,
		content: {
			preface: [
				{
					type: 'summary',
					title: 'עברתם 20 שיעורים. עכשיו הכל ביחד',
					lines: [
						'מפת הדרכים ✅ · Traffic Light ✅ · P1 ✅ · Eye Catchers ✅',
						'MC ✅ · Short Answer ✅ · Complete ✅ · Two Answers ✅',
						'אוצר מילים ✅ · P14 ✅ · דקדוק ✅ · 70-90 מילים ✅',
						'הבחינה: שעה ו-45 דקות · קריאה 70 נקודות · כתיבה 30 נקודות'
					]
				},
				{
					type: 'preface',
					text: 'הטעות שגורמת לכישלון:\n\n"תלמיד נתקע בשאלה קשה. מנסה עוד דקה. עוד דקה. עוד דקה."\n10 דקות עברו, הוא עדיין לא ענה — ועכשיו אין זמן לכתיבה.\nתוצאה: 0 נקודות על הכתיבה.'
				},
				{
					type: 'summary',
					title: 'P15 — Mark → Move → Return',
					lines: [
						'Mark ✏️ — כתבו M קטן ליד שאלה קשה.',
						'Move ➡️ — עברו לשאלה הבאה מיד. לא "עוד שנייה".',
						'Return 🔄 — חזרו ל-M בדקה 100, אחרי שסיימתם את הכתיבה.',
						'שאלה שנראית קשה עכשיו לפעמים קלה אחרי שאר השאלות — ואם לא, לפחות ענינו על השאר.'
					]
				},
				{
					type: 'summary',
					title: 'THE TOOL — חלוקת הזמן',
					lines: [
						'0-3 דק׳ — מפת הדרכים: כותרת + פסקה 1',
						'3-8 דק׳ — קוראים את כל השאלות, רמזור לכל אחת',
						'8-70 דק׳ — עונים על שאלות 1-8: P1 + Eye Catchers + P15 לקשות',
						'דקה 70 — ⛔ עוצרים ועוברים לכתיבה, גם אם לא סיימתם',
						'70-100 דק׳ — כותבים 70-90 מילים לפי P14',
						'100-105 דק׳ — חוזרים לשאלות עם M'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'אתם עונים על שאלה 4. היא קשה ואתם לא מוצאים תשובה. מה עושים?',
							options: [
								'ממשיכים לנסות — "אולי אמצא"',
								'כותבים M ועוברים לשאלה 5',
								'מדלגים על כל השאלות הבאות',
								'עונים ניחוש ושוכחים מזה'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'השעון מראה דקה 70 ונשארו שתי שאלות קריאה. מה עושים?',
							options: [
								'מסיימים את הקריאה קודם',
								'מוותרים על הכתיבה',
								'עוצרים ועוברים לכתיבה — הכתיבה שווה 30 נקודות',
								'כותבים 30 מילים מהר וחוזרים לקריאה'
							],
							correctIndex: 2
						},
						{
							type: 'passage-mcq',
							text: 'A BIG CHANGE ON THE ISLAND OF REDONDA\n\nI  Redonda is an island near the east coast of America. Eight years ago, it looked like a desert. There were no trees and almost no grass. Today, however, Redonda is a beautiful green island that is home to many different birds.\n\nII  People first came to Redonda 150 years ago. They brought many goats because they wanted meat and milk. The goats ate all the plants. Eventually, the people left.\n\nIII  In 2016, environmentalists removed the goats. Grass and trees began to grow. "It was amazing how quickly the island changed," said Tammy Elliott.',
							questions: [
								{
									prompt: 'What did Redonda look like eight years ago? Give ONE answer.',
									options: [
										'A green island full of birds',
										'A desert with no trees and almost no grass',
										'A city near the coast',
										'A farm with many goats and plants'
									],
									correctIndex: 1
								},
								{
									prompt: 'Why did the people bring goats? COMPLETE: Because they ___',
									options: [
										'Because they wanted to make the island green',
										'Because environmentalists asked them to',
										'Because they wanted meat and milk',
										'Because the goats ate the plants'
									],
									correctIndex: 2
								}
							]
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — תנאי בחינה אמיתיים.\n\n⏱ שעה ו-45 דקות.\n📖 חלק א׳: שאלות 1-8 — 70 דקות.\n✏️ חלק ב׳: 70-90 מילים — 30 דקות.\n🔄 P15: חזרה לשאלות M — 5 דקות.'
						},
						{
							type: 'self-check',
							prompt:
								'תרגלו את חלק ב׳ בתנאי זמן: "Do you think all students should volunteer in their community?" — 70-90 מילים, לפי P14.',
							placeholder: 'Yes, I think that...',
							minWords: 70,
							maxWords: 90,
							modelAnswer:
								'Yes, I think that all students should volunteer in their community. First, volunteering develops important skills. For example, students learn to work in a team and to take responsibility. This means that they are better prepared for adult life. In addition, volunteering improves mental health, because volunteers feel less stressed and sleep better. In conclusion, I believe that schools should encourage every student to volunteer, because it helps both the students and society.'
						},
						{
							type: 'summary',
							title: 'Checklist — 5 דקות לפני ההגשה',
							lines: [
								'□ עניתי על כל השאלות 1-8? כולל השאלות עם M?',
								'□ ספרתי מילים בכתיבה? בין 70 ל-90?',
								'□ כתבתי YES או NO בכתיבה?',
								'□ יש לי 2 סיבות + דוגמאות?',
								'□ לא העתקתי משפטים שלמים מהטקסט?'
							]
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE — של כל הקורס',
							lines: [
								'"אני מחפש, לא קורא." — ויש לי את כל הכלים לעשות את זה.',
								'מפת הדרכים · רמזור · P1 · מספרים · שמות · NOT · most/only · however',
								'P15: Mark → Move → Return   |   P14: כתיבה 70-90 מילים'
							]
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l22',
		section: 'c-3',
		titleHe: 'What changes? — שאלת בגרות',
		titleEn: 'What Changes?',
		code: 'c.3.6',
		required: ['l21'],
		position: { x: -70, y: 2760 },
		big: true,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'כך נראית מטלת הכתיבה בבגרות האמיתית:\n\nSECTION 3 — PART II: WRITING TASK (30 Points)\n\n"In your opinion, what changes can be made to your school so that it can become a better place to learn? Give reasons to explain your opinion."\n\n• Write 70-90 words in English.\n• Give your OPINION — what should change.\n• Give REASONS — why each change will help.'
				},
				{
					type: 'summary',
					title: 'שימו לב — זה שונה מ-"Do you think?"',
					lines: [
						'"Do you think X?" ← שאלת כן/לא: YES/NO → because → for example',
						'"What changes?" ← שאלת שינויים: In my opinion → שינוי 1 + סיבה → שינוי 2 + סיבה → סיכום',
						'אותם ביטויים בדיוק — מבנה מעט שונה.'
					]
				},
				{
					type: 'summary',
					title: 'THE TOOL — מבנה "What changes?"',
					lines: [
						'1️⃣ פתיחה — "In my opinion, there are two important changes…"',
						'2️⃣ שינוי 1 — "First, I think we should have… This would help because…"',
						'3️⃣ שינוי 2 — "Also, I believe… For example…"',
						'4️⃣ סיכום — "In conclusion, I am sure that these changes will help students."'
					]
				},
				{ type: 'word-card', word: 'In my opinion', translationHe: 'לדעתי' },
				{ type: 'word-card', word: 'First / First of all', translationHe: 'ראשית / קודם כול' },
				{ type: 'word-card', word: 'This would help because', translationHe: 'זה יעזור כי' },
				{ type: 'word-card', word: 'Also / Another change is', translationHe: 'בנוסף / שינוי נוסף הוא' },
				{ type: 'word-card', word: 'In conclusion', translationHe: 'לסיכום' },
				{
					type: 'steps',
					steps: [
						'פתיחה: "In my opinion, there are two important changes that can make school a better place to learn."',
						'שינוי 1: "First, I think we should have shorter lessons and more breaks. Students often feel tired after sitting for a long time, so short breaks help them concentrate better."',
						'שינוי 2: "Also, I believe schools should have more computers in classrooms. This would make lessons more interesting and help students learn in new ways."',
						'סיכום: "In conclusion, I am sure that these changes will help all students enjoy school more and learn better." — כ-80 מילים ✓'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: 'TRY IT — נושא: "What changes can be made to improve your neighborhood?"'
						},
						{
							type: 'mcq',
							prompt: 'איך פותחים תשובה לשאלת "What changes?"',
							options: [
								'In my opinion, there are two important changes that can make my neighborhood better.',
								'Yes, I think so.',
								'My neighborhood is very nice.',
								'In conclusion, we need more parks.'
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: 'אחרי שכתבתם שינוי ראשון — מה חייב לבוא מיד?',
							options: [
								'הסיכום',
								'סיבה: "This would help because…"',
								'שינוי שלישי',
								'ספירת מילים'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'איזה ביטוי פותח את השינוי השני?',
							options: [
								'However,',
								'Because,',
								'Also, I believe… / Another change is…',
								'In conclusion,'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'ספרתם 65 מילים בטיוטה. מה עושים?',
							options: [
								'מגישים — קרוב מספיק',
								'מוחקים שינוי אחד',
								'כותבים הכל מחדש',
								'מוסיפים משפט קצר לאחת הסיבות ומגיעים ל-70+'
							],
							correctIndex: 3
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — בפורמט בגרות מלא.\n\n"In your opinion, what changes can be made to your school so that it can become a better place to learn? Give reasons to explain your opinion."\n\nארבעה שלבים: פתיחה · שינוי 1 + סיבה · שינוי 2 + סיבה · סיכום.'
						},
						{
							type: 'self-check',
							prompt: 'כתבו את התשובה המלאה — 70-90 מילים.',
							placeholder: 'In my opinion, there are two important changes...',
							minWords: 70,
							maxWords: 90,
							modelAnswer:
								'In my opinion, there are two important changes that can make my school a better place to learn. First, I think we should have shorter lessons and more breaks. Students often feel tired after sitting for a long time, so short breaks help them concentrate better. Also, I believe schools should have more computers in classrooms. This would make lessons more interesting and help students learn in new ways. In conclusion, I am sure that these changes will help all students learn better.'
						},
						{
							type: 'summary',
							title: 'בדיקה אחרונה',
							lines: [
								'□ בין 70 ל-90 מילים?',
								'□ יש שני שינויים?',
								'□ יש סיבה לכל שינוי?',
								'□ יש פתיחה וסיכום?'
							]
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: [
								'"In my opinion… → שינוי 1 + reason → שינוי 2 + reason → In conclusion…"',
								'ארבעה שלבים. 70-90 מילים. תמיד.',
								'🎓 הקורס הושלם. אתם מוכנים לבגרות.'
							]
						}
					]
				}
			]
		}
	}
];
