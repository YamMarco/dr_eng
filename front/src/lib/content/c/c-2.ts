// Part B — Vocabulary. One node per programme lesson (lesson13…lesson16).
// Source: docs/module c/insertprogram/lesson##_module_c.docx
import type { LessonNode } from '../types';

export const c2Lessons: LessonNode[] = [
	{
		id: 'l13',
		section: 'c-2',
		titleHe: 'מילות שאלה',
		titleEn: 'Question Words',
		code: 'c.2.1',
		required: ['l12'],
		position: { x: 0, y: 1680 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'כמה נקודות אבדו בגלל מילה אחת?\n\n"Give ONE answer from paragraph II."\nהתלמיד ידע את התשובה. כתב אותה — מהפסקה הנכונה. אבל כתב שתי תשובות במקום אחת.\nציון: 0 נקודות.'
				},
				{
					type: 'preface',
					text: 'מה קרה לתלמידים אחרים?\n\n✗ כתב תשובה מפסקה III כשביקשו מפסקה II ← 0\n✗ לא הבין "according to" וענה על משהו אחר ← 0\n✗ ב-"complete the sentence" כתב תשובה חדשה במקום להשלים ← 0\n\nכל הטעויות האלה — מעשר מילים שלא ידעו.'
				},
				{ type: 'word-card', word: 'paragraph', translationHe: 'פסקה' },
				{ type: 'word-card', word: 'according to', translationHe: 'לפי / על פי' },
				{ type: 'word-card', word: 'explain / explains', translationHe: 'להסביר / מסביר' },
				{ type: 'word-card', word: 'give ONE answer', translationHe: 'תנו תשובה אחת בלבד' },
				{ type: 'word-card', word: 'give TWO answers', translationHe: 'תנו שתי תשובות' },
				{ type: 'word-card', word: 'complete the sentence', translationHe: 'השלימו את המשפט' },
				{ type: 'word-card', word: 'circle the correct answer', translationHe: 'הקיפו את התשובה הנכונה' },
				{ type: 'word-card', word: 'what do we learn', translationHe: 'מה אנחנו לומדים' },
				{ type: 'word-card', word: 'because', translationHe: 'כי / מפני ש־' },
				{ type: 'word-card', word: 'in order to', translationHe: 'כדי ל־' },
				{
					type: 'steps',
					steps: [
						'"What do we learn from paragraph I about Redonda?" ← "what do we learn" = מה לומדים · "paragraph I" = רק פסקה 1.',
						'"According to Dr. Green, give ONE answer: why do trees die?" ← "according to" = לפסקה שלו · "give ONE" = תשובה אחת בדיוק.',
						'"Complete the sentence: People left because…" ← "complete" = יש התחלה ואני מסיים אותה מהטקסט, לא כותב תשובה חדשה.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: 'מה המשמעות של "paragraph"?',
							options: ['פסקה', 'שאלה', 'עמוד', 'משפט'],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: 'מה המשמעות של "according to"?',
							options: ['בניגוד ל־', 'לפי / על פי', 'בנוסף ל־', 'למרות'],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'מה המשמעות של "give ONE answer"?',
							options: [
								'תנו כמה תשובות שתמצאו',
								'תנו תשובה ארוכה',
								'תנו תשובה אחת בלבד',
								'תנו דוגמה'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'מה המשמעות של "circle the correct answer"?',
							options: [
								'כתבו תשובה משלכם',
								'סמנו את כל התשובות',
								'העתיקו מהטקסט',
								'הקיפו את התשובה הנכונה'
							],
							correctIndex: 3
						},
						{
							type: 'mcq',
							prompt: 'מה המשמעות של "complete the sentence"?',
							options: [
								'השלימו את המשפט שהתחיל',
								'כתבו משפט חדש משלכם',
								'תרגמו את המשפט',
								'מחקו את המשפט'
							],
							correctIndex: 0
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — בכל שאלה, מהי ההוראה שמסתתרת בתוכה?'
						},
						{
							type: 'mcq',
							prompt:
								'"What do we learn from paragraph III about the volunteers?" — מה ההוראה?',
							options: [
								'לקרוא את כל הטקסט',
								'"what do we learn" + "paragraph III" ← ללכת רק לפסקה III',
								'לתת שתי תשובות',
								'להשלים משפט'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt:
								'"According to Professor Mills, give ONE reason why volunteering is important." — מה ההוראה?',
							options: [
								'לכתוב את כל הסיבות',
								'לכתוב מה שאני חושב',
								'"according to" ← לפסקה של Mills, "give ONE" ← סיבה אחת',
								'להקיף תשובה'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: '"Give TWO answers: How did the students change?" — מה ההוראה?',
							options: [
								'תשובה אחת מפורטת',
								'שלוש תשובות ליתר ביטחון',
								'להשלים משפט',
								'שתי תשובות — ממוספרות'
							],
							correctIndex: 3
						},
						{
							type: 'mcq',
							prompt: '"Complete the sentence: Students volunteer because…" — מה ההוראה?',
							options: [
								'"complete" + "because" ← להשלים את הסיבה מהטקסט, בלי לכתוב שוב because',
								'לכתוב משפט חדש לגמרי',
								'להקיף את התשובה הנכונה',
								'לתרגם את המשפט לעברית'
							],
							correctIndex: 0
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: [
								'"השאלה אומרת לי מה לעשות — אם אני מבין אותה."',
								'paragraph · according to · give ONE — אלה ההוראות שלי.'
							]
						}
					]
				}
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: השאלה אומרת לי מה לעשות — אם אני מבין אותה.'
						},
						{
							type: 'mcq',
							prompt: 'איזו שורה נכונה?',
							options: [
								'paragraph = פסקה · according to = לפי · give ONE answer = תשובה אחת · complete = השלם',
								'paragraph = עמוד · according to = בניגוד ל־ · give ONE answer = דוגמה · complete = סיים',
								'paragraph = שאלה · according to = בנוסף · give ONE answer = שתי תשובות · complete = תרגם',
								'כל המילים האלה אומרות אותו דבר'
							],
							correctIndex: 0,
							explanation: 'חמש מילות השאלה הבסיסיות — לומדים אותן בעל פה.'
						},
						{
							type: 'mcq',
							prompt: '"Read paragraph II and give ONE answer." — מה עושים?',
							options: [
								'קוראים את כל הטקסט ונותנים תשובה',
								'הולכים לפסקה II בלבד ונותנים תשובה אחת',
								'קוראים פסקאות I ו-II ונותנים שתיים'
							],
							correctIndex: 1,
							explanation: 'paragraph II = רק שם. Give ONE = תשובה אחת.'
						},
						{
							type: 'mcq',
							prompt: '"Circle the correct answer" = כמה תשובות שרוצים.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 1,
							explanation: 'שקר. Circle = מקיפים תשובה אחת. זו שאלת רב-ברירה.'
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 2 🌟\nעכשיו על שאלות בחינה אמיתיות.'
						},
						{
							type: 'mcq',
							prompt:
								'"What do we learn from paragraph III about students?" — אילו מילות שאלה יש כאן?',
							options: [
								'"what do we learn" + "paragraph III"',
								'"according to" + "give ONE"',
								'"complete" + "because"',
								'אין כאן מילות שאלה'
							],
							correctIndex: 0,
							explanation: '"what do we learn" = מה לומדים · "paragraph III" = רק פסקה III.'
						},
						{
							type: 'mcq',
							prompt:
								'"According to paragraph II, explain what Dr. Okafor found." — כמה הוראות מסתתרות בשאלה?',
							options: ['אחת', 'שתיים', 'שלוש — according to · paragraph II · explain', 'אף אחת'],
							correctIndex: 2,
							explanation: 'צריך להבין את שלושתן כדי לענות נכון.'
						},
						{
							type: 'self-check',
							prompt:
								'השלימו: "Circle the correct answer" = ___ · "Give TWO answers" = ___ · "Complete the sentence" = ___',
							modelAnswer:
								'הקיפו תשובה אחת · כתבו שתי תשובות · השלימו — יש התחלה, ממשיכים אותה מהטקסט.'
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.'
						},
						{
							type: 'mcq',
							prompt:
								'"According to paragraph I, give ONE reason why adults cannot swim." — מה עושים?',
							options: [
								'קוראים את כל הטקסט',
								'הולכים לפסקה I, מחפשים סיבה, כותבים אחת',
								'נותנים שתי סיבות כדי לכסות'
							],
							correctIndex: 1,
							explanation: 'according to paragraph I = פסקה I בלבד. give ONE reason = סיבה אחת.'
						},
						{
							type: 'self-check',
							prompt:
								'תלמיד לא הבין "according to" וענה על מה שכולם אמרו — לא רק מה ש-Dr. Klein אמרה. מה קרה לו?',
							modelAnswer:
								'הוא קיבל 0. השאלה ביקשה ספציפית מה Dr. Klein אמרה — "according to X" = רק מה ש-X אמר.'
						},
						{
							type: 'self-check',
							prompt: 'כתבו את חמש מילות השאלה שהכי חשוב לדעת בעל פה:',
							modelAnswer:
								'paragraph · according to · give ONE answer · give TWO answers · complete the sentence.'
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l14',
		section: 'c-2',
		titleHe: 'מילות ניווט',
		titleEn: 'Navigation Words',
		code: 'c.2.2',
		required: ['l13'],
		position: { x: -70, y: 1800 },
		big: false,
		content: {
			preface: [
				{
					type: 'summary',
					title: 'Eye Catchers — סימנים שאומרים לאן ללכת',
					lines: [
						'however / but / although ← פנייה. מה שאחריו חשוב.',
						'NOT / NEVER / NO ← ציד. מחפשים מה שאינו נכון.',
						'most / only / main / first ← הגבלה. תשובה אחת ספציפית.',
						'in addition / also ← עוד מידע בא מיד.',
						'because / therefore ← סיבה ותוצאה.'
					]
				},
				{ type: 'word-card', word: 'however', translationHe: 'אולם / אבל' },
				{ type: 'word-card', word: 'although', translationHe: 'למרות ש־' },
				{ type: 'word-card', word: 'in addition', translationHe: 'בנוסף' },
				{ type: 'word-card', word: 'therefore / as a result', translationHe: 'לכן / כתוצאה מכך' },
				{ type: 'word-card', word: 'for example', translationHe: 'לדוגמה' },
				{ type: 'word-card', word: 'increase / decrease', translationHe: 'עלה / ירד' },
				{ type: 'word-card', word: 'found / discovered', translationHe: 'מצא / גילה' },
				{
					type: 'preface',
					text: 'WATCH IT\n\n"Every year, forests are destroyed. However, there is good news. Only ten rivers are responsible for most of the plastic, because they carry it to the sea. Stopping them could reduce plastic by 90%."\n\nhowever = פנייה · only / most = הגבלה · because = סיבה · 90% = GPS'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: '"However…" — מה זה אומר לכם?',
							options: [
								'פנייה — מה שאחריו חשוב יותר',
								'סיבה — מה שאחריו מסביר',
								'דוגמה מגיעה',
								'סוף הפסקה'
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: '"NOT true" בשאלה — מה זה אומר לכם?',
							options: [
								'הגבלה — תשובה אחת',
								'ציד — מחפשים את המשפט שאינו נכון',
								'פנייה בטקסט',
								'שתי תשובות'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: '"Most cities…" — מה זה אומר לכם?',
							options: [
								'כל הערים בלי יוצא מן הכלל',
								'ערים בודדות בלבד',
								'הגבלה — לא כולן, רוב',
								'אין לזה משמעות'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: '"In addition…" — מה זה אומר לכם?',
							options: [
								'סתירה למה שנאמר',
								'סוף הרעיון',
								'סיבה',
								'מידע נוסף מגיע — אולי תשובה שנייה'
							],
							correctIndex: 3
						},
						{
							type: 'mcq',
							prompt: '"Because…" — מה זה אומר לכם?',
							options: ['סיבה', 'ניגוד', 'הגבלה', 'דוגמה'],
							correctIndex: 0
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — סמנו כל Eye Catcher בטקסט: מילות ניגוד, שלילה והגבלה.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו כל Eye Catcher — ניגוד, שלילה או הגבלה',
							text: 'I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.\n\nII  One study found that adults who learned to swim later in life often became stronger swimmers than those who learned as children. "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein. "They are also not afraid to ask questions."\n\nIII  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.',
							correctIndices: [20, 26, 36, 40, 45, 51, 90, 91, 104, 109],
							wordBank: ['however', 'not', 'cannot', 'never', 'most', 'only', 'also', 'found']
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"ראיתי Eye Catcher — הוא מדבר אליי. אני עוצר ומקשיב."']
						}
					]
				}
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: Eye Catcher מדבר אליי. אני עוצר ומקשיב.'
						},
						{
							type: 'mcq',
							prompt: 'איזו שורה נכונה?',
							options: [
								'however = פנייה · NOT = ציד · most/only = הגבלה · in addition = תשובה שנייה · because = סיבה',
								'however = סיבה · NOT = פנייה · most = תשובה שנייה · in addition = ציד',
								'כל מילות הניווט מסמנות את אותו דבר',
								'however = הגבלה · NOT = סיבה · because = ציד'
							],
							correctIndex: 0,
							explanation: 'חמש מילות הניווט הבסיסיות, כל אחת והתפקיד שלה.'
						},
						{
							type: 'mcq',
							prompt: 'מה עושים כשרואים "however" בטקסט?',
							options: [
								'מתעלמים וממשיכים',
								'עוצרים — מה שאחריו הוא הנקודה החשובה',
								'חוצים את המשפט שלפניו'
							],
							correctIndex: 1,
							explanation: 'however = פנייה. עוצרים ומקשיבים למה שבא אחריה.'
						},
						{
							type: 'mcq',
							prompt: '"30%" בטקסט הוא Eye Catcher אם "30%" מופיע גם בשאלה.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 0,
							explanation: 'נכון. מספר בשאלה + אותו מספר בטקסט = GPS.'
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 2 🌟\nעם טקסטים אמיתיים.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו כל Eye Catcher — ניגוד, הגבלה, מספרים, שמות, "in addition"',
							text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.\n\nII  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.',
							correctIndices: [14, 20, 40, 41, 42, 56, 69, 87, 88, 89],
							wordBank: ['however', 'most', 'in addition', 'מספרים', 'שמות']
						},
						{
							type: 'mcq',
							prompt: '"In addition, in Kenya, rivers began to flow again." — מה זה מסמן?',
							options: ['שזה הסיכום', 'שתשובה שנייה מגיעה', 'שזו פנייה בסיפור'],
							correctIndex: 1,
							explanation: '"In addition" = עוד מידע. בשאלת TWO answers — כאן יושבת התשובה השנייה.'
						},
						{
							type: 'self-check',
							prompt: 'השלימו: however = ___ · not = ___ · in addition = ___',
							modelAnswer: 'however = פנייה · not = ציד, מה שלא נכון · in addition = תשובה שנייה מגיעה.'
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו כל Eye Catcher בטקסט',
							text: 'I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed and never try to learn. However, experts say it is never too late.\n\nII  One study found that adults who learned to swim later in life often became stronger swimmers. "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein.\n\nIII  Adult swimming classes are now available in most cities. According to instructors, adults who practice regularly usually make good progress in less than two months.',
							correctIndices: [20, 26, 34, 38, 43, 77, 78, 79, 88],
							wordBank: ['however', 'never', 'cannot', 'most', 'מספרים', 'שמות']
						},
						{
							type: 'self-check',
							prompt:
								'"Only ten rivers are responsible for most of the plastic." — כמה Eye Catchers יש כאן? רשמו כל אחד.',
							modelAnswer:
								'שניים: "Only" (הגבלה) ו-"most" (הגבלה). ואם "ten" מופיע גם בשאלה — גם הוא GPS.'
						},
						{
							type: 'self-check',
							prompt: 'הסבירו: למה Eye Catchers עוזרים דווקא לתלמיד עם אנגלית חלשה?',
							modelAnswer:
								'הם בולטים לעין — מספרים, שמות, however. אפשר לזהות אותם בלי להבין את כל הטקסט, והם חוסכים זמן חיפוש.'
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l15',
		section: 'c-2',
		titleHe: 'מילות תוכן א׳',
		titleEn: 'Content Words I',
		code: 'c.2.3',
		required: ['l14'],
		position: { x: -100, y: 1920 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'מה קורה כשלא מכירים מילת תוכן?\n\n"In 2016, a group of environmentalists decided to make Redonda green again."\n\nהתלמיד עוצר: "environmentalists? מה זה?" מנסה לתרגם. לא מוצא. מדלג. מאבד את ההקשר.\nשאלה 3 מתייחסת בדיוק למשפט הזה — והוא לא יכול לענות. 8 נקודות אבדו בגלל מילה אחת.'
				},
				{
					type: 'preface',
					text: 'ומה קורה כשמכירים אותה?\n\n"environmentalists" ← environment + ists = אנשים שעוסקים בסביבה.\nזיהה ← הבין ← ענה ← 8 נקודות.\n\nהמילים בשיעור הזה מופיעות ב-90% מהטקסטים. ללמוד אותן = לקרוא בביטחון, בלי לעצור.'
				},
				{ type: 'word-card', word: 'environment', translationHe: 'סביבה' },
				{ type: 'word-card', word: 'volunteer(s)', translationHe: 'מתנדב / מתנדבים' },
				{ type: 'word-card', word: 'community', translationHe: 'קהילה' },
				{ type: 'word-card', word: 'discover / found', translationHe: 'גילה / מצא' },
				{ type: 'word-card', word: 'result(s)', translationHe: 'תוצאה / תוצאות' },
				{ type: 'word-card', word: 'increase', translationHe: 'לגדול / לעלות' },
				{ type: 'word-card', word: 'reduce / decrease', translationHe: 'להקטין / לרדת' },
				{ type: 'word-card', word: 'protect', translationHe: 'להגן' },
				{ type: 'word-card', word: 'destroy', translationHe: 'להרוס' },
				{ type: 'word-card', word: 'species', translationHe: 'מין (ביולוגי)' },
				{ type: 'word-card', word: 'charity', translationHe: 'ארגון צדקה' },
				{ type: 'word-card', word: 'residents', translationHe: 'תושבים' },
				{ type: 'word-card', word: 'researchers', translationHe: 'חוקרים' },
				{ type: 'word-card', word: 'affect', translationHe: 'להשפיע על' },
				{ type: 'word-card', word: 'effective', translationHe: 'יעיל' },
				{
					type: 'preface',
					text: 'WATCH IT — מצאו את מילות התוכן:\n\n"A local charity decided to change the environment. The results were remarkable. Residents said stress levels fell."\n\ncharity · environment · results · residents — ארבע מילות תוכן במשפט אחד.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: 'The ______ is under threat. — סביבה',
							options: ['environment', 'community', 'charity', 'species'],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: 'Young ______ give their time to help others. — מתנדבים',
							options: ['residents', 'volunteers', 'researchers', 'results'],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'The ______ of the study were surprising. — תוצאות',
							options: ['species', 'charity', 'results', 'environment'],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'The local ______ helped with the project. — קהילה',
							options: ['result', 'charity', 'species', 'community'],
							correctIndex: 3
						},
						{
							type: 'mcq',
							prompt: 'The most ______ method was face-to-face work. — יעיל',
							options: ['effective', 'destroyed', 'increased', 'responsible'],
							correctIndex: 0
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — השלימו את המילה החסרה.'
						},
						{
							type: 'mcq',
							prompt: 'The scientists wanted to ______ the forests from destruction.',
							options: ['protect', 'destroy', 'increase', 'affect'],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: 'The ______ were already visible in Ethiopia.',
							options: ['charities', 'results', 'species', 'residents'],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: '85% of ______ say they are satisfied with their city.',
							options: ['researchers', 'volunteers', 'residents', 'results'],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'Young people who ______ feel happier.',
							options: ['destroy', 'reduce', 'protect', 'volunteer'],
							correctIndex: 3
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"environment, volunteer, result — אני מזהה ועובר הלאה."']
						}
					]
				}
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המילים.\n\n📌 זכור: environment, volunteer, result — מזהים בשנייה.'
						},
						{
							type: 'mcq',
							prompt: 'איזו שורה נכונה?',
							options: [
								'environment = סביבה · volunteer = מתנדב · result = תוצאה · protect = להגן · community = קהילה',
								'environment = קהילה · volunteer = חוקר · result = סיבה · protect = להרוס',
								'environment = תוצאה · volunteer = תושב · result = סביבה · community = מחקר',
								'כל המילים האלה קשורות רק לבריאות'
							],
							correctIndex: 0,
							explanation: 'חמש מילות הבסיס של סביבה וקהילה.'
						},
						{
							type: 'mcq',
							prompt: '"The results were remarkable." — מה זה results?',
							options: ['בעיות', 'תוצאות', 'פרויקטים'],
							correctIndex: 1,
							explanation: 'results = תוצאות. מופיע כמעט בכל טקסט במודול C.'
						},
						{
							type: 'mcq',
							prompt: '"Residents" = מחקרים.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 1,
							explanation: 'שקר. residents = תושבים · researchers = חוקרים. לא לבלבל.'
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 2 🌟\nעם משפטים מתוך טקסטים אמיתיים.'
						},
						{
							type: 'self-check',
							prompt:
								'השלימו:\n1. The scientists wanted to _______ the forests from destruction.\n2. Over 200 million trees were planted. The _______ are already visible.\n3. 85% of _______ say they are satisfied.\n4. Young people who _______ feel happier.',
							modelAnswer: '1. protect  2. results  3. residents  4. volunteer'
						},
						{
							type: 'mcq',
							prompt: '"The project could reduce carbon in the atmosphere." — מה זה reduce?',
							options: ['להגדיל', 'להפחית / לצמצם', 'לגלות'],
							correctIndex: 1,
							explanation: 'reduce = להפחית. ההפך מ-increase = לגדול.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו את מילות התוכן שאתם מזהים',
							text: 'Every year, forests around the world are destroyed by fire, farming, and pollution. In 2019, scientists started a project to plant one billion trees. The results are already visible: in Ethiopia, the number of birds increased, and rivers began to flow again.',
							correctIndices: [7, 12, 15, 18, 25, 35],
							wordBank: ['destroyed', 'pollution', 'scientists', 'project', 'results', 'increased']
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.'
						},
						{
							type: 'self-check',
							text: 'I  Every year, millions of young people choose to volunteer. A study found that young people who volunteer are 60% more likely to describe themselves as happy.',
							prompt:
								'"What do researchers say about volunteering?" — ענו באנגלית, והשתמשו במילות תוכן.',
							modelAnswer:
								'Researchers found that young people who volunteer are 60% more likely to describe themselves as happy.'
						},
						{
							type: 'self-check',
							prompt: 'כתבו שני משפטים על הסביבה, עם שלוש מילות תוכן מהשיעור.',
							modelAnswer:
								'The environment is under threat because of pollution. Scientists are working to protect endangered species, and the results are already visible.'
						},
						{
							type: 'self-check',
							prompt: 'למה חשוב ללמוד מילות תוכן גם לכתיבה, ולא רק לקריאה?',
							modelAnswer:
								'כי אוצר מילים שווה 8 מתוך 30 נקודות בכתיבה. environment · volunteer · community הן מילים "טובות" שמעלות את הציון.'
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l16',
		section: 'c-2',
		titleHe: 'מילות תוכן ב׳',
		titleEn: 'Content Words II',
		code: 'c.2.4',
		required: ['l15'],
		position: { x: -70, y: 2040 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'מילות שינוי, חינוך ובריאות — הנושאים שחוזרים בטקסטים על חינוך, בריאות ומדע.\n\nללמוד את 15 המילים האלה = לקרוא בביטחון, וגם לכתוב עם אוצר מילים טוב יותר.\nאוצר מילים שווה 8 מתוך 30 נקודות בכתיבה. כל מילה שאתם יודעים עוזרת.'
				},
				{ type: 'word-card', word: 'improve', translationHe: 'לשפר' },
				{ type: 'word-card', word: 'develop', translationHe: 'לפתח' },
				{ type: 'word-card', word: 'achieve', translationHe: 'להשיג' },
				{ type: 'word-card', word: 'affect / effect', translationHe: 'להשפיע / השפעה' },
				{ type: 'word-card', word: 'cause', translationHe: 'לגרום / סיבה' },
				{ type: 'word-card', word: 'education', translationHe: 'חינוך' },
				{ type: 'word-card', word: 'health / healthy', translationHe: 'בריאות / בריא' },
				{ type: 'word-card', word: 'skill(s)', translationHe: 'מיומנות / מיומנויות' },
				{ type: 'word-card', word: 'opportunity', translationHe: 'הזדמנות' },
				{ type: 'word-card', word: 'responsible', translationHe: 'אחראי' },
				{ type: 'word-card', word: 'require', translationHe: 'לדרוש' },
				{ type: 'word-card', word: 'benefit', translationHe: 'יתרון / להפיק תועלת' },
				{ type: 'word-card', word: 'encourage', translationHe: 'לעודד' },
				{ type: 'word-card', word: 'support', translationHe: 'תמיכה / לתמוך' },
				{ type: 'word-card', word: 'society', translationHe: 'חברה' },
				{
					type: 'preface',
					text: 'WATCH IT\n\n"Volunteering has many benefits. It develops important skills and makes students more responsible. Society benefits too."\n\nארבע מילות תוכן במשפט אחד — בדיוק מה שמעלה את ציון אוצר המילים בכתיבה.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: 'Volunteering can ______ your skills. — לשפר',
							options: ['improve', 'require', 'reduce', 'encourage'],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: 'Stress has a negative ______ on health. — השפעה',
							options: ['affect', 'effect', 'benefit', 'cause'],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'Students ______ better grades after the programme. — השיגו',
							options: ['required', 'supported', 'achieved', 'encouraged'],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'This is a great ______ to learn something new. — הזדמנות',
							options: ['society', 'skill', 'education', 'opportunity'],
							correctIndex: 3
						},
						{
							type: 'mcq',
							prompt: 'Schools ______ students to volunteer. — מעודדים',
							options: ['encourage', 'require', 'affect', 'develop'],
							correctIndex: 0
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'בכתיבה — השתמשו במילות התוכן שלמדתם.\nכל מילה כזאת במשפטי ה-P14 שלכם = אוצר מילים = ציון גבוה יותר.'
						},
						{
							type: 'self-check',
							prompt: 'השלימו באנגלית: "Volunteering can improve ..."',
							placeholder: 'Volunteering can improve...',
							modelAnswer: 'Volunteering can improve my English and my social skills.'
						},
						{
							type: 'self-check',
							prompt: 'השלימו באנגלית: "One benefit of exercise is ..."',
							placeholder: 'One benefit of exercise is...',
							modelAnswer: 'One benefit of exercise is better health.'
						},
						{
							type: 'self-check',
							prompt: 'השלימו באנגלית: "Students who volunteer become more ..."',
							placeholder: 'Students who volunteer become more...',
							modelAnswer: 'Students who volunteer become more responsible.'
						},
						{
							type: 'self-check',
							prompt: 'השלימו באנגלית: "This helps society because ..."',
							placeholder: 'This helps society because...',
							modelAnswer: 'This helps society because everyone learns to support each other.'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"improve, affect, skill — אני מזהה, וגם משתמש בהם בכתיבה."']
						}
					]
				}
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המילים.\n\n📌 זכור: improve, affect, skill — מזהים ומשתמשים.'
						},
						{
							type: 'mcq',
							prompt: 'איזו שורה נכונה?',
							options: [
								'improve = לשפר · benefit = יתרון · skill = מיומנות · responsible = אחראי · society = חברה',
								'improve = לדרוש · benefit = חיסרון · skill = הזדמנות · society = בריאות',
								'improve = להשיג · benefit = לעודד · skill = תמיכה · responsible = חינוך',
								'כל המילים האלה מתארות רגשות'
							],
							correctIndex: 0,
							explanation: 'חמש מילות הבסיס של שינוי וחינוך.'
						},
						{
							type: 'mcq',
							prompt: '"Volunteering develops important skills." — מה זה develops?',
							options: ['מספר', 'מפתח / מגדל', 'מוכר'],
							correctIndex: 1,
							explanation: 'develop = לפתח · skills = מיומנויות.'
						},
						{
							type: 'mcq',
							prompt: '"Affect" ו-"effect" הן אותה מילה.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 1,
							explanation:
								'שקר. affect (פועל) = להשפיע על · effect (שם עצם) = השפעה. "Noise AFFECTS sleep. The EFFECT is serious."'
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 2 🌟\nעם משפטים אמיתיים.'
						},
						{
							type: 'self-check',
							prompt:
								'השלימו:\n1. Volunteering can _______ your skills.\n2. Stress has a negative _______ on health.\n3. Schools _______ students to volunteer.\n4. This helps _______ as a whole.',
							modelAnswer: '1. improve  2. effect  3. encourage  4. society'
						},
						{
							type: 'mcq',
							prompt: '"Students became more responsible." — מאיזה טקסט בקורס זה?',
							options: [
								'הטקסט על שחייה',
								'הטקסט על עצים באפריקה',
								'הטקסט על התנדבות — GIVING TIME, GAINING HAPPINESS'
							],
							correctIndex: 2,
							explanation: 'פסקה III: "students became more responsible and more focused in class."'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו את כל מילות התוכן',
							text: 'Volunteering has many benefits. It develops important skills and makes students more responsible. Society benefits too.',
							correctIndices: [3, 5, 7, 12, 13, 14],
							wordBank: ['benefits', 'develops', 'skills', 'responsible', 'society']
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.'
						},
						{
							type: 'self-check',
							prompt:
								'השלימו את משפטי P14 במילות תוכן:\n"I think volunteering is important because it _______ important _______. For example, students become more _______ and _______ from new opportunities."',
							modelAnswer:
								'…because it improves important skills. For example, students become more responsible and benefit from new opportunities.'
						},
						{
							type: 'self-check',
							prompt: 'כתבו שני משפטים על חינוך, עם מילות תוכן מהשיעור.',
							modelAnswer:
								'Education develops important skills for society. It also encourages students to become more responsible adults.'
						},
						{
							type: 'self-check',
							prompt: 'מה ההבדל בין "affect" ל-"effect"? תנו דוגמה לכל אחד.',
							modelAnswer:
								'affect הוא פועל: "Stress affects sleep." effect הוא שם עצם: "The effect of stress is bad sleep."'
						}
					]
				}
			]
		}
	}
];
