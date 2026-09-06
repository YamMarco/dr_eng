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
,
	{
		id: 'l03',
		section: 'c-1',
		titleHe: 'P1 — ניווט בטקסט',
		titleEn: 'P1 Navigation',
		code: 'c.1.4',
		required: ['l02'],
		position: { x: 70, y: 480 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'הרגע הכי קשה בבחינה:\n\n"פתחתי את הדף. 200 מילים באנגלית. לא מכיר מילה אחת. הלב נופל."\n\nמה שרוב התלמידים עושים: מנסים לקרוא ולהבין הכל ← נתקעים ← פאניקה ← שוכחים לכתוב.'
				},
				{
					type: 'preface',
					text: 'מה שצריך לעשות:\n\nלא קוראים את הטקסט. קוראים רק את השאלה הראשונה. מחפשים מילת מפתח.\n\n"לא מבין את הטקסט" ≠ "לא יכול לענות".\nP1 עובד גם כשהטקסט קשה — כי מחפשים, לא קוראים.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — P1',
					lines: [
						'1 · קראו את השאלה עד הסוף — לא את הטקסט.',
						'2 · מצאו מילת מפתח — המילה שתחפשו בטקסט.',
						'3 · אתרו אותה בטקסט — כמו חיפוש בוואטסאפ.',
						'4 · קראו רק את המשפט שמכיל אותה.',
						'5 · ענו — מהטקסט בלבד, לא מהראש.'
					]
				},
				{
					type: 'preface',
					text: 'מהי מילת מפתח?\n\nבדרך כלל השם החשוב בשאלה. לא what, how או why — אלה מילות שאלה.\n\n"Why did the scientists start the project?" ← מילת מפתח = scientists / project'
				},
				{
					type: 'preface',
					text: 'WATCH IT — P1 בפעולה\n\nGREEN AFRICA (פסקה II)\n\n"The project is led by Dr. Amara Diallo, a scientist from Senegal. \'We do not just plant trees,\' says Dr. Diallo. \'We teach local people how to care for them.\' According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive."\n\nהשאלה: According to Dr. Diallo, why do most trees die?'
				},
				{
					type: 'steps',
					steps: [
						'קוראים את השאלה: "לפי ד״ר דיאלו, למה רוב העצים מתים?"',
						'מילות מפתח: Dr. Diallo + trees die.',
						'מחפשים את Dr. Diallo בטקסט — הוא בפסקה II.',
						'קוראים רק שם: "most trees die because nobody looks after them".',
						'תשובה: Because nobody looks after them.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.\n\nII  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again. Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.',
							questions: [
								{
									prompt:
										'השאלה: What do we learn from paragraph I about the Green Africa project? — מהי מילת המפתח?',
									options: ['forests', 'Green Africa', 'However', 'scientists say'],
									correctIndex: 1
								},
								{
									prompt: 'באיזו פסקה מצאתם אותה?',
									options: ['פסקה I', 'פסקה II', 'פסקה III', 'לא מופיעה בטקסט'],
									correctIndex: 0
								},
								{
									prompt: 'מה התשובה?',
									options: [
										'It teaches local people how to care for trees',
										'It has already planted over 200 million trees in 15 countries',
										'It made rivers in Kenya flow again',
										'It reduced carbon by 15%'
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
							text: 'YOUR TURN — חמישה שלבים, לבד.\n\nהשאלה: What happened in Ethiopia after trees were planted? (paragraph III)'
						},
						{
							type: 'mcq',
							prompt: 'שלב 2 — מהי מילת המפתח שתחפשו בטקסט?',
							options: ['trees', 'Ethiopia', 'planted', 'happened'],
							correctIndex: 1
						},
						{
							type: 'self-check',
							text: 'III  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again. Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.',
							prompt: 'שלב 5 — כתבו את התשובה במילים של הטקסט.',
							modelAnswer: 'The number of birds increased by 60%.'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"הטקסט קשה? לא מבין? — P1 עדיין עובד. מחפש, לא קורא."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l04',
		section: 'c-1',
		titleHe: 'מגנט לעין — מספרים',
		titleEn: 'Eye Catcher: Numbers',
		code: 'c.1.5',
		required: ['l03'],
		position: { x: 0, y: 600 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'בלי Eye Catcher:\n"השאלה על 2,000. קורא פסקה 1... 2... 3. מוצא אחרי דקה." — 60 שניות.\n\nעם Eye Catcher:\n"רואה 2,000 בשאלה. סורק את הטקסט ומחפש 2,000. מוצא תוך 3 שניות." — 3 שניות.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — מספר בשאלה',
					lines: [
						'רואים מספר בשאלה ← סורקים את הטקסט ומחפשים אותו. לא קוראים מההתחלה.',
						'שנים: 2019 · 1985   |   אחוזים: 85% · 60%   |   כמויות: 2,000 · 15',
						'מספר בשאלה = GPS. הולכים ישר לשם.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT\n\nהשאלה: According to Professor James Lee, what percentage of residents are satisfied?\nמחפשים 85% ← סורקים ← פסקה III: "85% of residents now say they are satisfied."\nתשובה: 85% of residents.\n\nהשאלה: How much did the project cost?\nמחפשים 500,000 dollars ← פסקה II.\nתשובה: Only 500,000 dollars.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'I  Five years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city. Today, Greenville looks very different.\n\nII  The person behind this change is Dr. Maria Santos, a professor at Greenville University. "We wanted to show that any city can become greener," she says. According to Dr. Santos, the project cost only 500,000 dollars — much less than similar projects in other cities.\n\nIII  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.',
							questions: [
								{
									prompt:
										'השאלה: How many community gardens were created? — איזה מספר תחפשו בטקסט?',
									options: ['2,000', '15', '85%', '500,000'],
									correctIndex: 1
								},
								{
									prompt: 'באיזו פסקה הוא נמצא, ומה התשובה?',
									options: [
										'פסקה I — 15 community gardens',
										'פסקה II — 15 professors',
										'פסקה III — 15% of residents',
										'לא כתוב בטקסט'
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
							text: 'YOUR TURN — שתי שאלות. מצאו את המספר, ואז ענו.'
						},
						{
							type: 'self-check',
							text: 'III  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.',
							prompt: 'By how much did stress levels fall?',
							modelAnswer: 'By 40%.'
						},
						{
							type: 'self-check',
							text: 'III  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.',
							prompt: 'What percentage of people exercise outdoors now?',
							modelAnswer: '60%. (It increased from 15% to 60%.)'
						},
						{
							type: 'mcq',
							prompt: 'למה "60%" לבד היא תשובה מסוכנת בשאלה כזאת?',
							options: [
								'כי צריך לכתוב את המספר במילים',
								'כי בטקסט יש עוד מספרים — 15% ו-85% — וצריך את זה שצמוד ל-exercise outdoors',
								'כי אחוזים אף פעם לא תשובה',
								'כי חייבים לצטט משפט שלם'
							],
							correctIndex: 1
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"מספר בשאלה = GPS. ישר לשם."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l05',
		section: 'c-1',
		titleHe: 'מגנט לעין — שמות',
		titleEn: 'Eye Catcher: Names',
		code: 'c.1.6',
		required: ['l04'],
		position: { x: -70, y: 720 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'כלל הזהב:\n\nכל שם פרטי בטקסט — Dr. Santos, Prof. Lee — שייך לפסקה מסוימת.\nכשיש שם בשאלה, הולכים ישר לפסקה שלו. לא קוראים את כל הטקסט.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — שם בשאלה',
					lines: [
						'1 · ראיתם שם בשאלה.',
						'2 · חפשו את השם בטקסט — באיזו פסקה הוא יושב?',
						'3 · קראו רק את מה שאותו אדם אמר.',
						'⚠️ "According to Dr. Santos" ≠ מה שכולם אומרים. רק מה ש-Santos אמרה.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT\n\nהשאלה: According to Professor James Lee, what happened to residents?\n\nהשם: Professor James Lee ← זה המגנט.\nהמיקום: פסקה III.\nהמשפט: "85% of residents now say they are satisfied with their city."\n\nתשובה: 85% of residents say they are satisfied.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'I  Five years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city.\n\nII  The person behind this change is Dr. Maria Santos, a professor at Greenville University. "We wanted to show that any city can become greener," she says. According to Dr. Santos, the project cost only 500,000 dollars — much less than similar projects in other cities.\n\nIII  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.',
							questions: [
								{
									prompt:
										'השאלה: According to Dr. Maria Santos, what did the project want to show? — באיזו פסקה מופיעה Dr. Santos?',
									options: ['פסקה I', 'פסקה II', 'פסקה III', 'בכל הפסקאות'],
									correctIndex: 1
								},
								{
									prompt: 'קראו רק שם. מה התשובה?',
									options: [
										'That the project cost 500,000 dollars',
										'That 85% of residents are satisfied',
										'That any city can become greener',
										'That stress levels fell by 40%'
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
							text: 'YOUR TURN — טקסט אחר, אותה שיטה.\n\nהשאלה: According to Dr. Amara Diallo, what do most trees die from?'
						},
						{
							type: 'mcq',
							prompt: 'באיזו פסקה נמצא Dr. Diallo?',
							options: ['פסקה I', 'פסקה II', 'פסקה III', 'לא מופיע בטקסט'],
							correctIndex: 1
						},
						{
							type: 'self-check',
							text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
							prompt: 'כתבו את התשובה במילים של הטקסט.',
							modelAnswer: 'Because nobody looks after them.'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"שם בשאלה = כתובת. הולך לפסקה שלו."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l06',
		section: 'c-1',
		titleHe: 'NOT — המילה הכי מסוכנת',
		titleEn: 'Eye Catcher: NOT',
		code: 'c.1.7',
		required: ['l05'],
		position: { x: -100, y: 840 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'המילה הכי מסוכנת בבחינה:\n\nNOT\n\n90% מהתלמידים שרואים NOT בשאלה עונים על השאלה ההפוכה. הם מחפשים מה נכון — במקום מה לא נכון.\nNOT משנה את כל השאלה.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — NOT = ציד',
					lines: [
						'שאלה רגילה: "What do we learn?" ← מחפשים מה נכון.',
						'שאלה עם NOT: "Which is NOT true?" ← מחפשים מה לא נכון.',
						'כל שאר האפשרויות נכונות ומופיעות בטקסט. זו שלא — היא התשובה.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT\n\nהשאלה: Which of the following is NOT mentioned in the text?\n\ni) 30% of adults cannot swim ← מוזכר, פסקה I ✓\nii) Adults become stronger swimmers ← מוזכר, פסקה II ✓\niii) The cost of adult swimming classes ← לא מוזכר בכלל ✗\n\nהתשובה: iii. המחיר לא מוזכר.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.\n\nII  One study found that adults who learned to swim later in life often became stronger swimmers than those who learned as children. "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein. "They are also not afraid to ask questions."\n\nIII  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.',
							questions: [
								{
									prompt: 'Which of the following does Dr. Klein NOT say?',
									options: [
										'Adults understand explanations',
										'Adults correct mistakes faster',
										'Adults prefer group lessons',
										'Adults are not afraid to ask questions'
									],
									correctIndex: 2
								},
								{
									prompt: 'איך ידעתם שזו התשובה?',
									options: [
										'כי היא הכי ארוכה',
										'כי בדקנו את שלוש האחרות מול פסקה II — הן מופיעות שם, והיא לא',
										'כי היא נשמעת לא הגיונית',
										'ניחשנו'
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
							text: 'YOUR TURN — שאלת NOT על פסקה III. בדקו כל אפשרות מול הטקסט.'
						},
						{
							type: 'passage-mcq',
							text: 'III  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.',
							questions: [
								{
									prompt: 'Which is NOT true about adult swimming classes? (paragraph III)',
									options: [
										'Classes meet once or three times a week',
										'Classes are free for adults over 30',
										'Adults who practice make good progress',
										'Progress takes less than two months'
									],
									correctIndex: 1
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'פספסתם את המילה NOT בשאלה. מה יקרה?',
							options: [
								'לא יקרה כלום — התשובה זהה',
								'תבחרו משפט נכון, והתשובה תיפסל',
								'תקבלו חצי ניקוד',
								'השאלה תתבטל'
							],
							correctIndex: 1
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"ראיתי NOT? אני ציד — מחפש מה לא נכון."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l07',
		section: 'c-1',
		titleHe: 'most / only — תשובה אחת',
		titleEn: 'Key Limiters',
		code: 'c.1.8',
		required: ['l06'],
		position: { x: -70, y: 960 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '"According to Dr. Okafor, what is the MOST effective type of volunteering?"\n\nתלמיד קרא את הטקסט. מצא שני סוגי התנדבות. כתב את שניהם.\nשניהם נכונים. שניהם מהטקסט.\nציון: 0 נקודות.'
				},
				{
					type: 'preface',
					text: 'מה קרה?\n\nהמילה MOST ביקשה אחד בלבד — הכי יעיל. הוא כתב שניים, ולכן לא ענה על ה-MOST.\n\nMOST = הכי, אחד. לא שניים.\nONLY = רק אחד. לא שניים.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — מילות הגבלה',
					lines: [
						'most — "The MOST effective..." ← לא כולן, רק הכי טובה.',
						'only — "The ONLY reason..." ← לא סיבות אחרות, רק אחת.',
						'מצאו בטקסט את הדבר הספציפי הזה. אל תוסיפו פרטים נוספים.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT\n\nהשאלה: According to Dr. Okafor, what is the most effective type of volunteering programme?\n\nמחפשים "most effective" בטקסט — לא את כל הסוגים.\nפסקה II: "the most effective programmes bring young people face to face with the people they help."\n\nתשובה: Programmes that bring young people face to face with the people they help.\nולא יותר מזה — רק ה-most effective אחד.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'III  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.',
							questions: [
								{
									prompt: 'According to the text, in most cities, what is available?',
									options: [
										'Free swimming pools',
										'Adult swimming classes',
										'Private swimming coaches',
										'Three sessions every day'
									],
									correctIndex: 1
								},
								{
									prompt: 'השאלה כללה את המילה most. כמה תשובות מותר לכתוב?',
									options: [
										'תשובה אחת בלבד',
										'שתיים — ליתר ביטחון',
										'כל מה שמצאתם בפסקה',
										'תלוי באורך השאלה'
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
							text: 'YOUR TURN — שימו לב למילת ההגבלה בשאלה.\n\nהשאלה: According to Dr. Diallo, why do most trees die?'
						},
						{
							type: 'self-check',
							text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
							prompt: 'כתבו תשובה אחת בלבד, במילים של הטקסט.',
							modelAnswer: 'Because nobody looks after them.'
						},
						{
							type: 'mcq',
							prompt: 'כתבתם שתי תשובות לשאלה עם most. מה יקרה?',
							options: [
								'תקבלו ניקוד על שתיהן',
								'הבודק יבחר את הטובה מביניהן',
								'התשובה תיפסל — נדרשה אחת',
								'לא משנה, העיקר שהתשובה מהטקסט'
							],
							correctIndex: 2
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"most / only = תשובה אחת מסוימת. לא יותר."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l08',
		section: 'c-1',
		titleHe: 'however / but — הפנייה',
		titleEn: 'Contrast Words',
		code: 'c.1.9',
		required: ['l07'],
		position: { x: 0, y: 1080 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'סיטואציה מהבחינה:\n\n"What does paragraph I say about people who cannot swim?"\n\nהתלמיד קרא: "Many people cannot swim. However, experts say it is never too late."\nהוא כתב: "Many people cannot swim."\nציון: 0 נקודות.'
				},
				{
					type: 'preface',
					text: 'מה קרה?\n\nהוא ענה על החצי השגוי של המשפט.\nhowever = פנייה. מה שאחריו הוא הנקודה האמיתית.\n\nהנקודה כאן: "it is never too late" — לא "many people cannot swim".'
				},
				{
					type: 'summary',
					title: 'THE TOOL — however / but',
					lines: [
						'לפני however: מידע כללי, רקע, בעיה.',
						'אחרי however: הנקודה החשובה. הסיפור האמיתי.',
						'שאלה שנוגעת למשפט עם however — התשובה כמעט תמיד מה שאחריו.'
					]
				},
				{
					type: 'steps',
					steps: [
						'WATCH IT — השאלה: What does Dr. Okafor say about different types of volunteering?',
						'מחפשים however בפסקה II.',
						'"However, not all types of volunteering produce the same results."',
						'מה בא אחרי however? זו התשובה: Not all types of volunteering produce the same results.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.',
							questions: [
								{
									prompt: 'What does paragraph I say about people who cannot swim?',
									options: [
										'They feel embarrassed and never try',
										'Swimming classes are expensive',
										'It is never too late to learn',
										'They are over 30 years old'
									],
									correctIndex: 2
								},
								{
									prompt: 'למה "They feel embarrassed" היא לא התשובה?',
									options: [
										'כי היא לא כתובה בטקסט',
										'כי היא הרקע — היא לפני however, והנקודה באה אחריו',
										'כי היא ארוכה מדי',
										'כי היא לא בפסקה I'
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
							text: 'YOUR TURN — מצאו את however, וקראו מה בא אחריו.\n\nהשאלה: What good news does paragraph I mention?'
						},
						{
							type: 'mcq',
							prompt: 'איפה נמצא however בפסקה I?',
							options: [
								'במשפט הראשון, לפני "Every year"',
								'אחרי המשפט על יערות שנהרסים',
								'בסוף הפסקה, אחרי "15 countries"',
								'הוא לא מופיע בפסקה I'
							],
							correctIndex: 1
						},
						{
							type: 'self-check',
							text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.',
							prompt: 'כתבו את החדשות הטובות — מה שבא אחרי however.',
							modelAnswer:
								'There is good news: in 2019 scientists started a project to plant one billion trees in Africa.'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"however / but = פנייה. מה שאחריו = הנקודה."']
						}
					]
				}
			]
		}
	}
];
