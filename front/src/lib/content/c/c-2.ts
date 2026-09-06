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
			]
		}
	}
];
