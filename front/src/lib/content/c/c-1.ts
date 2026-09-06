// Part A — Reading Skills. One node per programme lesson (lesson00…lesson12).
// Source: docs/module c/insertprogram/lesson##_module_c.docx
import type { LessonNode } from '../types';

export const c1Lessons: LessonNode[] = [
	{
		id: 'l00',
		section: 'c-1',
		titleHe: 'אני מחפש, לא קורא',
		titleEn: 'Mindset',
		code: 'c.1.1',
		required: [],
		position: { x: 0, y: 120 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'קבוצת וואטסאפ. 500 הודעות.\nחבר שואל: "מתי הבחינה?"\n\nאתם גוללים 500 הודעות מההתחלה?\n\nלא. לוחצים על 🔍 ומחפשים מילה אחת. תוך שנייה — שם.'
				},
				{
					type: 'preface',
					text: 'זה בדיוק מה שעושים בטקסט האנגלי.\n\nהטקסט = קבוצת הוואטסאפ.\nהשאלה = החיפוש.\nמילת המפתח = מה שמחפשים ב-🔍'
				},
				{
					type: 'preface',
					text: 'רוב התלמידים עושים את הטעות הזאת:\n\nמתחילים לקרוא מהמילה הראשונה. מנסים להבין הכל. נתקעים. הפאניקה מתחילה.\nאחרי 10 דקות — עדיין בפסקה 1. לכתיבה לא נשאר זמן.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — שני עקרונות',
					lines: [
						'1 · הטקסט שם — התשובה כתובה בתוכו. לא צריך אנגלית מושלמת.',
						'2 · לא צריך להבין הכל — רק למצוא את מה שהשאלה מבקשת.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT — ראו איך זה עובד.\n\n"Elephants are the largest land animals on Earth. They live in Africa and Asia. African elephants are bigger than Asian elephants. Elephants can live for up to 70 years."\n\nהשאלה: Where do elephants live?'
				},
				{
					type: 'steps',
					steps: [
						'קוראים את השאלה: "Where do elephants live?" — המילה שמחפשים היא live.',
						'לא קוראים מההתחלה — סורקים ומחפשים live בטקסט.',
						'מצאנו: "They live in Africa and Asia".',
						'כותבים: They live in Africa and Asia. — 8 שניות, בלי לקרוא את כל הפסקה.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'Dogs are one of the most popular pets in the world. They were first tamed from wolves thousands of years ago. Today, there are more than 400 different breeds of dog.',
							questions: [
								{
									prompt: 'השאלה: When were dogs first tamed? — מה המילה שאתם מחפשים בטקסט?',
									options: ['popular', 'tamed / first', 'breeds', 'world'],
									correctIndex: 1
								},
								{
									prompt: 'מצאתם את "first tamed from wolves thousands of years ago". מה התשובה?',
									options: [
										'Thousands of years ago',
										'More than 400',
										'From dogs',
										'It is not written in the text'
									],
									correctIndex: 0
								}
							]
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — עכשיו לבד, בדיוק כמו בבחינה.'
						},
						{
							type: 'passage-mcq',
							text: 'The Great Wall of China is one of the most famous structures in the world. It was built over many centuries to protect China from its enemies. The wall is about 21,000 kilometers long. Today, millions of tourists visit the wall every year.',
							questions: [
								{
									prompt: 'Why was the Great Wall of China built?',
									options: [
										'Because it is 21,000 km long',
										'To protect China from its enemies',
										'For the millions of tourists',
										'It is not written in the text'
									],
									correctIndex: 1
								}
							]
						},
						{
							type: 'self-check',
							text: 'The Great Wall of China is one of the most famous structures in the world. It was built over many centuries to protect China from its enemies. The wall is about 21,000 kilometers long. Today, millions of tourists visit the wall every year.',
							prompt: 'How long is the Great Wall? — כתבו את התשובה באנגלית, במילים של הטקסט.',
							modelAnswer: 'About 21,000 kilometers long.'
						},
						{
							type: 'mcq',
							prompt: 'אם אתם לא מבינים מילה בטקסט — מה עושים?',
							options: [
								'עוצרים ומתרגמים את כל הפסקה',
								'ממשיכים — מחפשים את מה שהשאלה ביקשה',
								'מדלגים על השאלה',
								'מנחשים תשובה'
							],
							correctIndex: 1
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"הטקסט שם."', '"אני לא קורא אותו — אני מחפש בו."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l01',
		section: 'c-1',
		titleHe: 'מפת הדרכים',
		titleEn: 'The Road Map',
		code: 'c.1.2',
		required: ['l00'],
		position: { x: 70, y: 240 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'בלי מפת הדרכים:\n\n"מקבלים טקסט. 200 מילים. מתחילים לקרוא. לא מכירים. לא מבינים. אחרי 3 שאלות — אבודים."'
				},
				{
					type: 'preface',
					text: 'עם מפת הדרכים:\n\n"כותרת: THE RETURN OF THE TREES. עצים! פסקה 1: מדענים שותלים מיליארד עצים. 30 שניות — יש מפה."\n\nהמפה לא אומרת לכם הכל — היא אומרת על מה הטקסט. זה מספיק כדי לא להיות אבודים.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — מפת הדרכים',
					lines: [
						'כותרת = שם הטקסט. הנושא הראשי.',
						'פסקה 1 = הרקע הכללי.',
						'ביחד = 30 שניות, ואתם כבר יודעים על מה הטקסט.'
					]
				},
				{
					type: 'preface',
					text: 'למה זה עוזר דווקא כשהאנגלית לא חזקה:\n\nכשיודעים על מה הטקסט — המילים שלא מכירים פחות מפחידות. ההקשר עושה חצי מהעבודה, בלי מילון.'
				},
				{
					type: 'preface',
					text: 'WATCH IT\n\nTHE RETURN OF THE TREES\n\n"Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030. The project has already planted over 200 million trees in 15 countries."'
				},
				{
					type: 'steps',
					steps: [
						'שלב 1 — הכותרת: THE RETURN OF THE TREES. מה מבינים? "זה על עצים שחוזרים."',
						'שלב 2 — פסקה 1 בלבד: יערות נהרסים, אבל יש חדשות טובות — מדענים שותלים מיליארד עצים.',
						'עכשיו יודעים: סביבה, שימור, פרויקט מדעי.',
						'30 שניות. יש מפה. מוכנים לשאלות.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'THE CITY GARDEN PROJECT\n\nFive years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city.',
							questions: [
								{
									prompt: 'קראו כותרת + פסקה 1 בלבד. על מה הטקסט?',
									options: [
										'על מחקר בבריאות',
										'על גינות בעיר ועל שינוי סביבתי',
										'על חינוך בבתי ספר',
										'על תחבורה ציבורית'
									],
									correctIndex: 1
								}
							]
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — 30 שניות. כותרת + פסקה 1. על מה הטקסט?'
						},
						{
							type: 'passage-mcq',
							text: 'LEARNING TO SWIM AS AN ADULT\n\nLearning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed and never try to learn. However, experts say it is never too late.',
							questions: [
								{
									prompt: 'על מה הטקסט?',
									options: [
										'ילדים שלומדים לשחות',
										'בריכות שחייה בערים גדולות',
										'מבוגרים שלומדים לשחות',
										'סקר על ערים גדולות'
									],
									correctIndex: 2
								},
								{
									prompt: 'אילו מילים בפסקה נתנו לכם את התשובה?',
									options: [
										'"adults" ו-"cannot swim"',
										'"survey" ו-"cities"',
										'"experts" ו-"late"',
										'"many people" ו-"think"'
									],
									correctIndex: 0
								}
							]
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"30 שניות. כותרת + פסקה 1. עכשיו יש לי מפה."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l02',
		section: 'c-1',
		titleHe: 'שיטת הרמזור',
		titleEn: 'Traffic Light',
		code: 'c.1.3',
		required: ['l01'],
		position: { x: 100, y: 360 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'סיטואציה אמיתית מבחינת בגרות:\n\n"Question 3: According to Dr. Klein, explain what she found in her study."\n\nתלמיד קורא. "ידעתי!" הוא חושב. כותב: "She found that adults learn faster."\nהציון שחזר: 0 נקודות.'
				},
				{
					type: 'preface',
					text: 'מה קרה?\n\nהשאלה ביקשה מה היא מצאה במחקר שלה. הוא ענה על מה שאחרים אמרו.\nמילה אחת שלא הבין — "explain" — עלתה לו בכל הנקודות.\n\nהפתרון: רמזור + מילון חכם. לפני שעונים — האם אני יכול להסביר את השאלה בעברית?'
				},
				{
					type: 'summary',
					title: 'THE TOOL — הרמזור',
					lines: [
						'🔴 אדום — לא מבין את השאלה. עצור. אל תענה.',
						'🟡 צהוב — מבין חלקית. בדוק שוב. זה הצבע המסוכן — הוא מרגיש כמו ירוק.',
						'🟢 ירוק — אני יכול להסביר את השאלה בעברית. עונים.'
					]
				},
				{
					type: 'summary',
					title: 'המילון — מתי ואיך',
					lines: [
						'✓ מילה בשאלה לא ברורה ← מילון.',
						'✗ מילים בטקסט שלא מכירים ← בדרך כלל אפשר להתעלם מהן.',
						'⏱ מקסימום 30 שניות למילה. לא מצאתם? סמנו M ועברו הלאה — חוזרים בסוף.',
						'❌ אל תחפשו: paragraph · according to · give ONE — את אלה לומדים בעל פה.'
					]
				},
				{
					type: 'steps',
					steps: [
						'"What do we learn from paragraph I?" ← 🟢 ירוק. עונים.',
						'"According to Dr. Diallo, why do most trees die?" ← 🟢 ירוק. עונים.',
						'"What does visible mean in paragraph III?" ← 🟡 צהוב. המילה visible לא ברורה ← מילון, 30 שניות.',
						'גם אחרי המילון לא ברור? M קטן בשוליים, ממשיכים לשאלה הבאה, וחוזרים בסוף.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: '"Give ONE answer from paragraph II." — מה הצבע שלכם?',
							options: [
								'🔴 אדום — לא מבין כלום',
								'🟡 צהוב — מבין חלקית',
								'🟢 ירוק — "תנו תשובה אחת מפסקה 2". ברור.',
								'לא יודע'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: '"What does contribute mean?" — לא מכירים את המילה. מה עושים?',
							options: [
								'🔴 עוצרים ומוותרים על השאלה',
								'🟢 מילון — 30 שניות — ועונים',
								'עונים בניחוש מהיר',
								'מתרגמים את כל הפסקה'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: 'חיפשתם במילון 30 שניות והמילה עדיין לא ברורה. מה עכשיו?',
							options: [
								'ממשיכים לחפש עד שמבינים',
								'מוותרים על השאלה לגמרי',
								'M קטן בשוליים, עוברים הלאה, וחוזרים בסוף',
								'עונים משהו כדי לא להשאיר ריק'
							],
							correctIndex: 2
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — קבעו צבע ופעולה לכל שאלה.'
						},
						{
							type: 'mcq',
							prompt: '"According to whom?" — צבע ופעולה?',
							options: [
								'🟢 עונים — "לפי מי"',
								'🟡 מילון, 30 שניות',
								'🔴 עוצרים',
								'M ועוברים הלאה'
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: '"Why did this occur in 2019?" — המילה occur לא ברורה. צבע ופעולה?',
							options: [
								'🟢 עונים מיד',
								'🟡 מילון, 30 שניות',
								'🔴 מדלגים על השאלה',
								'עונים לפי המספר 2019 בלבד'
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt: '"Give TWO answers from paragraph III." — צבע ופעולה?',
							options: [
								'🟡 מילון',
								'🔴 עוצרים',
								'🟢 עונים — שתי תשובות מפסקה 3',
								'🟢 עונים — תשובה אחת מפסקה 3'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt: 'איזה צבע הכי מסוכן?',
							options: [
								'🔴 אדום — כי לא מבינים כלום',
								'🟡 צהוב — כי הוא מרגיש כמו ירוק',
								'🟢 ירוק — כי עונים מהר',
								'כולם מסוכנים באותה מידה'
							],
							correctIndex: 1
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"לא ירוק — מילון 30 שניות. עדיין לא? M ועוברים."']
						}
					]
				}
			]
		}
	}
];
