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
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המושגים. בלי לחץ.\n\n📌 זכור: אני מחפש, לא קורא.'
						},
						{
							type: 'mcq',
							prompt:
								'יש לכם קבוצת וואטסאפ עם 200 הודעות. חבר שואל "מתי הבחינה?". מה אתם עושים?',
							options: ['קוראים מההתחלה', 'מחפשים "בחינה" ב-🔍', 'שואלים את החבר מחדש'],
							correctIndex: 1,
							explanation: 'מחפשים מילת מפתח — לא קוראים הכל.'
						},
						{
							type: 'mcq',
							prompt: 'בבחינת Module C צריך להבין כל מילה בטקסט כדי לענות.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 1,
							explanation: 'שקר. מחפשים מילת מפתח בלבד — לא חייבים להבין הכל.'
						},
						{
							type: 'mcq',
							prompt: 'מה המטרה בקריאת הטקסט?',
							options: [
								'להבין כל מילה',
								'לתרגם הכל לעברית',
								'למצוא את המידע שהשאלה מבקשת'
							],
							correctIndex: 2,
							explanation: 'מחפשים — לא קוראים. כמו חיפוש בוואטסאפ.'
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 2 🌟\nעם טקסטים אמיתיים. כמו בקורס.'
						},
						{
							type: 'self-check',
							prompt:
								'השלימו: הטקסט = קבוצת וואטסאפ. השאלה = ___________. מילת המפתח = ___________.',
							modelAnswer: 'השאלה = החיפוש. מילת המפתח = מה שכותבים ב-🔍.'
						},
						{
							type: 'mcq',
							prompt: 'תלמיד מנסה לקרוא ולהבין את כל הטקסט. מה יקרה?',
							options: ['יענה על כל השאלות נכון', 'יגמור מהר', 'לא יישאר לו זמן לכתיבה'],
							correctIndex: 2,
							explanation: 'קריאת הכל = בזבוז זמן. הבחינה נמשכת 1:45 — זמן הכתיבה ייגמר.'
						},
						{
							type: 'mcq',
							prompt: '"אני מחפש, לא קורא" — זה המשפט שמסכם את כל הקורס.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 0,
							explanation: 'נכון. זו המנטליות שמשנה את כל הגישה לבחינה.'
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
								'הסבירו בעברית: מה ההבדל בין "לקרוא טקסט" לבין "לחפש בטקסט"? (שני משפטים)',
							modelAnswer:
								'לקרוא = מתחילים מההתחלה ומנסים להבין הכל. לחפש = מוצאים מילת מפתח בשאלה ומחפשים אותה ישירות בטקסט — כמו חיפוש בוואטסאפ.'
						},
						{
							type: 'mcq',
							prompt:
								'תלמיד רואה את המילה "environmentalists" בטקסט ולא מכיר אותה. מה הוא עושה?',
							options: [
								'עוצר ומתרגם את כל הפסקה',
								'ממשיך — מחפש את מה שהשאלה ביקשה',
								'סוגר את הבחינה'
							],
							correctIndex: 1,
							explanation:
								'ממשיכים. אם המילה לא בשאלה — אפשר להתעלם ממנה. P1 עובד גם בלי להבין הכל.'
						},
						{
							type: 'self-check',
							prompt: 'כתבו את המשפט שמסכם את השיעור הזה:',
							modelAnswer: '"אני מחפש, לא קורא."'
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
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: 30 שניות. כותרת + פסקה 1. עכשיו יש לי מפה.'
						},
						{
							type: 'mcq',
							prompt: 'קראו את הכותרת: "THE RETURN OF THE TREES". על מה הטקסט?',
							options: ['על בניינים בעיר', 'על עצים שחוזרים ונשתלים', 'על בעלי חיים בסכנה'],
							correctIndex: 1,
							explanation: 'כותרת = נושא. THE RETURN OF THE TREES = עצים שחוזרים.'
						},
						{
							type: 'mcq',
							prompt: 'מה קוראים כדי לבנות את מפת הדרכים?',
							options: ['את כל הטקסט', 'כותרת + כל הפסקאות', 'כותרת + פסקה 1 בלבד'],
							correctIndex: 2,
							explanation: 'כותרת + פסקה 1 = 30 שניות. זה מספיק.'
						},
						{
							type: 'mcq',
							prompt: 'מפת הדרכים נותנת לכם את כל התשובות לשאלות.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 1,
							explanation: 'שקר. המפה נותנת רק את הנושא הכללי — מספיק כדי לא להיות אבודים.'
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
							type: 'passage-mcq',
							text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.',
							questions: [
								{
									prompt: 'על מה הטקסט?',
									options: [
										'על זיהום אוויר בערים',
										'על פרויקט נטיעת עצים באפריקה',
										'על כריתת יערות בעולם'
									],
									correctIndex: 1
								}
							]
						},
						{
							type: 'self-check',
							text: 'Five years ago, the streets of Greenville had almost no plants or trees. A local charity planted 2,000 trees and 15 gardens.',
							prompt: 'השלימו: הטקסט הזה הוא על ___________ ב-___________.',
							modelAnswer: 'על נטיעת עצים וגינות (שינוי ירוק) בעיר Greenville.'
						},
						{
							type: 'mcq',
							prompt: 'כדאי לקרוא את פסקה 1 גם אם כבר קראתם את הכותרת.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 0,
							explanation: 'נכון. כותרת = נושא, פסקה 1 = פרטים. ביחד מפה טובה יותר.'
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
								'"LEARNING TO SWIM AS AN ADULT — I Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults cannot swim. II One study found that adults who learned later often became stronger swimmers."\n\nמה נכלל במפת הדרכים?',
							options: [
								'הכותרת + פסקה I בלבד',
								'הכותרת + פסקה II',
								'כל הפסקאות',
								'רק המשפט האחרון'
							],
							correctIndex: 0,
							explanation: 'כותרת: LEARNING TO SWIM AS AN ADULT. פסקה I בלבד — שני המשפטים הראשונים.'
						},
						{
							type: 'self-check',
							prompt:
								'על סמך הכותרת ופסקה 1 שלמעלה — על מה הטקסט? ענו במשפט אחד.',
							modelAnswer: 'הטקסט על מבוגרים שלומדים לשחות.'
						},
						{
							type: 'self-check',
							prompt: 'כמה זמן לוקח לקרוא כותרת + פסקה 1, ולמה זה שווה את הזמן?',
							modelAnswer:
								'30 שניות. אחרי זה יודעים על מה הטקסט ולא נכנסים לשאלות "עיוור".'
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
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: לא ירוק — לא עונים.'
						},
						{
							type: 'mcq',
							prompt: '"What do we learn from paragraph I?" — מה הצבע שלכם?',
							options: [
								'🔴 אדום — לא מבין',
								'🟡 צהוב — מבין חלקית',
								'🟢 ירוק — "מה לומדים מפסקה 1?"'
							],
							correctIndex: 2,
							explanation: '🟢 ירוק. "מה לומדים מפסקה 1?" — ברור. עונים.'
						},
						{
							type: 'mcq',
							prompt: '"What does visible mean?" — מה הצבע שלכם?',
							options: [
								'🟢 ירוק — ברור',
								'🟡 צהוב — המילה visible לא ברורה ← מילון',
								'ממשיכים בלי לבדוק'
							],
							correctIndex: 1,
							explanation: 'visible לא ברור ← מילון, 30 שניות. לא עונים לפני שירוקים.'
						},
						{
							type: 'mcq',
							prompt: 'צהוב זה בסדר. אפשר לענות.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 1,
							explanation: 'שקר. צהוב = עדיין לא ברור. רק ירוק = עונים.'
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 2 🌟\nעכשיו על שאלות אמיתיות.'
						},
						{
							type: 'mcq',
							prompt:
								'איזו שאלה היא 🟡 צהוב — כלומר דורשת מילון?\n\n1. "According to Dr. Diallo, why do trees die?"\n2. "What does contribute mean in paragraph II?"\n3. "Give ONE answer from paragraph III."',
							options: ['שאלה 1', 'שאלה 2', 'שאלה 3', 'כל השלוש'],
							correctIndex: 1,
							explanation:
								'according to + why = ירוק. "give ONE answer" = ירוק. מילה לא מוכרת בשאלה = צהוב ← מילון.'
						},
						{
							type: 'mcq',
							prompt: 'כמה זמן מותר לבזבז על מילה אחת במילון?',
							options: ['כמה שצריך', '30 שניות בלבד', '3 דקות'],
							correctIndex: 1,
							explanation: 'מקסימום 30 שניות. לא מצאתם? M קטן ועוברים הלאה.'
						},
						{
							type: 'mcq',
							prompt:
								'"give ONE answer" = ירוק — כי אפשר להסביר את השאלה בעברית במשפט אחד.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 0,
							explanation: 'נכון. "תנו תשובה אחת מהטקסט" — ברור. ירוק.'
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
								'אילו שאלות דורשות מילון?\n\n1. "What do we learn from paragraph I?"\n2. "What does environmentalists mean?"\n3. "According to Dr. Klein, give ONE reason."\n4. "How did the phenomenon affect students?"\n5. "Give TWO answers from paragraph III."',
							options: ['1 ו-3', '2 ו-4', '3 ו-5', 'כולן'],
							correctIndex: 1,
							explanation: 'environmentalists ו-phenomenon אינן ברורות ← מילון. השאר ירוקות.'
						},
						{
							type: 'self-check',
							prompt: 'מלאו את הכלל: רק _______ = עונה. צהוב מרגיש כמו _______ — אבל הוא לא.',
							modelAnswer: 'רק ירוק = עונה. צהוב מרגיש כמו ירוק — אבל הוא לא.'
						},
						{
							type: 'self-check',
							prompt: 'תלמיד קרא שאלה, "הבין", ענה — וקיבל 0. מה כנראה קרה?',
							modelAnswer:
								'הוא היה בצהוב ולא בירוק. חשב שהבין, אבל לא הבין מה בדיוק השאלה ביקשה.'
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
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: שאלה → מילת מפתח → אתר → קרא → ענה.'
						},
						{
							type: 'mcq',
							prompt:
								'"According to Dr. Diallo, why do most trees die?" — מהי מילת המפתח?',
							options: ['"why"', '"Dr. Diallo" / "trees die"', '"According"'],
							correctIndex: 1,
							explanation:
								'"Dr. Diallo" ו-"trees die" הן מה שמחפשים בטקסט. "why" ו-"according" הן מילות שאלה.'
						},
						{
							type: 'mcq',
							prompt: 'מהו הסדר הנכון של חמשת שלבי P1?',
							options: [
								'קרא השאלה ← מצא מילת מפתח ← אתר בטקסט ← קרא את המשפט ← ענה',
								'קרא את הטקסט ← קרא השאלה ← ענה ← בדוק ← סיים',
								'מצא מילת מפתח ← קרא השאלה ← ענה ← אתר בטקסט ← קרא',
								'קרא השאלה ← ענה ← אתר בטקסט ← קרא את המשפט ← בדוק'
							],
							correctIndex: 0,
							explanation: '1-קרא השאלה · 2-מילת מפתח · 3-אתר בטקסט · 4-קרא את המשפט · 5-ענה.'
						},
						{
							type: 'mcq',
							prompt: 'בשלב 4 של P1 קוראים את כל הפסקה.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 1,
							explanation:
								'שקר. קוראים רק את המשפט שמכיל את מילת המפתח, ואולי את זה שלפניו או אחריו.'
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
							type: 'mcq',
							prompt:
								'"What happened to rivers in Kenya? (paragraph III)" — מהי מילת המפתח, ובאיזו פסקה?',
							options: ['What — פסקה I', 'Kenya — פסקה III', 'rivers — פסקה II'],
							correctIndex: 1,
							explanation: '"Kenya" — שם מקום ספציפי. הפסקה כבר מצוינת בשאלה: III.'
						},
						{
							type: 'self-check',
							text: 'II  "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein.',
							prompt:
								'מלאו את P1 לשאלה "According to Dr. Klein, how did adults improve?" — מילת מפתח, פסקה, ותשובה.',
							modelAnswer:
								'מילת מפתח: Dr. Klein / improve. פסקה: II. תשובה: By understanding explanations and correcting their mistakes more quickly.'
						},
						{
							type: 'mcq',
							prompt: 'P1 עובד גם כשהטקסט קשה מאוד ולא מבינים אותו.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 0,
							explanation: 'נכון. P1 הוא חיפוש, לא הבנה — מחפשים מילת מפתח בלי קשר לקושי.'
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
							type: 'passage-mcq',
							text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.\n\nII  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.',
							questions: [
								{
									prompt:
										'"When did scientists start the project?" — באיזה שלב של P1 מוצאים את "2019"?',
									options: [
										'שלב 1 — קריאת השאלה',
										'שלב 3 — איתור בטקסט',
										'שלב 5 — כתיבת התשובה'
									],
									correctIndex: 1
								}
							]
						},
						{
							type: 'self-check',
							text: 'II  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them.',
							prompt:
								'"According to Dr. Diallo, why do most trees die? Give ONE answer." — כתבו את חמשת שלבי P1 ואת התשובה.',
							modelAnswer:
								'1-קורא את השאלה. 2-מילת מפתח: Dr. Diallo / trees die. 3-פסקה II. 4-"most trees die because nobody looks after them". 5-תשובה: Because nobody looks after them.'
						},
						{
							type: 'self-check',
							prompt: 'הסבירו בעברית: למה P1 יעיל דווקא לתלמיד עם אנגלית חלשה?',
							modelAnswer:
								'כי הוא נותן נוסחה קבועה לכל שאלה. לא צריך לחשוב מחדש בכל פעם — רק לבצע חמישה שלבים.'
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
,
				{
					screens: [
						{
							type: 'preface',
							text: 'PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: מספר בשאלה = GPS. ישר לשם.'
						},
						{
							type: 'mcq',
							prompt: '"How many trees were planted?" — מה תחפשו בטקסט?',
							options: ['את המילה "trees" בלבד', 'מספר שצמוד ל-trees / planted', 'את שם הפרויקט'],
							correctIndex: 1,
							explanation: 'מספר = GPS. סורקים את הטקסט ומחפשים מספר שקשור ל-trees.'
						},
						{
							type: 'mcq',
							prompt:
								'"According to the survey, what percentage of adults cannot swim?" — מה ה-Eye Catcher?',
							options: ['survey', 'adults', 'האחוז — 30%'],
							correctIndex: 2,
							explanation: 'אחוז בשאלה = מספר = GPS. מחפשים אותו ישירות בטקסט.'
						},
						{
							type: 'mcq',
							prompt: 'מספר בשאלה אומר: לקרוא את הטקסט מההתחלה.',
							options: ['✅ נכון', '❌ לא נכון'],
							correctIndex: 1,
							explanation: 'שקר. מספר = GPS. סורקים — לא קוראים מההתחלה.'
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
							type: 'mcq',
							prompt:
								'באילו שאלות יש Eye Catcher של מספר?\n\n1. "How many countries are in the project?"\n2. "What happened after 2019?"\n3. "Give TWO answers from paragraph III."\n4. "What percentage of students improved?"',
							options: ['רק ב-2', 'ב-1, 2 ו-4', 'בכולן — 1, 2, 3 ו-4', 'רק ב-3 ו-4'],
							correctIndex: 2,
							explanation:
								'"How many" · "2019" · "TWO" · "percentage" — כולם מספרים, כולם Eye Catchers.'
						},
						{
							type: 'self-check',
							text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030. The project has already planted over 200 million trees in 15 countries.',
							prompt:
								'השלימו מהטקסט: "The project has already planted over _______ trees in _______ countries."',
							modelAnswer: '200 million trees · 15 countries.'
						},
						{
							type: 'mcq',
							prompt:
								'השאלה: "By how much did stress levels fall?" הטקסט: "Stress levels fell by 40%." — מה התשובה?',
							options: ['They fell significantly', 'By 40%', 'Stress fell because of the trees'],
							correctIndex: 1,
							explanation: 'By 40% — מספר מדויק מהטקסט. זה כל מה שצריך.'
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
								'"According to Professor James Lee, what percentage of residents are satisfied?" — מה עושים?',
							options: [
								'קוראים את פסקה 1 ומחפשים',
								'מחפשים "James Lee", ובפסקה שלו מחפשים את האחוז',
								'קוראים את כל הטקסט'
							],
							correctIndex: 1,
							explanation:
								'שם + אחוז = שני Eye Catchers. מוצאים את James Lee, ובפסקה שלו סורקים אחר % ← 85%.'
						},
						{
							type: 'self-check',
							text: 'I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed and never try to learn. However, experts say it is never too late.',
							prompt:
								'"According to the survey, what percentage of adults cannot swim? Give ONE answer." — כתבו ANSWER:',
							modelAnswer: 'ANSWER: Over 30% of adults cannot swim.'
						},
						{
							type: 'self-check',
							prompt: 'הסבירו: למה "מספר בשאלה = GPS" עוזר במיוחד לתלמיד חלש?',
							modelAnswer:
								'כי מספרים קל לזהות בסריקה מהירה — העין מוצאת אותם בלי לקרוא, וזה חוסך המון זמן חיפוש.'
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
,
	{
		id: 'l09',
		section: 'c-1',
		titleHe: 'שאלות אמריקאיות',
		titleEn: 'Multiple Choice',
		code: 'c.1.10',
		required: ['l08'],
		position: { x: 70, y: 1200 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'הטעות הנפוצה:\n"התלמיד קורא אפשרות i. נשמעת טוב. מסמן. אחרי הבחינה מתברר ש-i הייתה שגויה."\n\nהדרך הנכונה:\n"קוראים את כל 4 האפשרויות. חוצים את השגויות. מוצאים הוכחה בפסקה הנכונה. עונים."'
				},
				{
					type: 'summary',
					title: 'THE TOOL — ארבעה צעדים',
					lines: [
						'1 · קראו את כל 4 האפשרויות לפני שחוזרים לטקסט.',
						'2 · חצו כל אפשרות שסותרת את הטקסט — או שנכונה אבל לא קשורה לשאלה.',
						'3 · חזרו לטקסט ומצאו הוכחה בפסקה הנכונה.',
						'4 · ענו — תשובה אחת בלבד.'
					]
				},
				{
					type: 'summary',
					title: 'שני סוגי מסיחים',
					lines: [
						'סוג א׳ — סותר את הטקסט. הטקסט: "without payment" ← "Volunteers receive payment" ← חצו.',
						'סוג ב׳ — נכון, אבל עונה על שאלה אחרת. השאלה על פסקה I, האפשרות מפסקה III ← חצו.',
						'הכלל: נכון + לא קשור לשאלה = שגוי.'
					]
				},
				{
					type: 'preface',
					text: 'כלל זהב ל-"What do we learn from paragraph X?"\n\nלכו רק לפסקה X. אל תקראו פסקאות אחרות.\nהשאלה מגבילה אתכם לפסקה אחת. כל מידע מפסקה אחרת = שגוי, גם אם הוא נכון בטקסט.\n\n⚠️ אין לכם הוכחה בפסקה הנכונה? אל תענו. חזרו לטקסט.\n🚦 ולפני שעונים — בדקו רמזור. רק ירוק = עונים.'
				},
				{
					type: 'preface',
					text: 'WATCH IT\n\nהשאלה: What do we learn from paragraph I about young volunteers?\n\ni) Volunteers receive payment ← סוג א׳: סותר את "without payment".\nii) Young volunteers are happier ← ✓ הוכחה בפסקה I: "60% more likely to be happy".\niii) Researchers expected volunteering to help ← סוג א׳: הטקסט אומר "Researchers were surprised".\niv) Schools that volunteer have better results ← סוג ב׳: נכון, אבל זה מפסקה III.\n\nהתשובה: ii.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'I  Every year, millions of young people around the world choose to volunteer — to give their time to help others without payment. A study found that young people who volunteer for at least two hours a week are 60% more likely to describe themselves as happy. Researchers were surprised because they expected that money and success would be the main reason for happiness.\n\nII  The benefits of volunteering go beyond simple happiness. Dr. Sarah Okafor studied the effects of volunteering on mental health for ten years. She found that teenagers who volunteer feel less stressed and sleep better. However, not all types of volunteering produce the same results. According to Dr. Okafor, the most effective programmes bring young people face to face with the people they help.\n\nIII  Results from 12 countries show that schools that introduced volunteering programmes found that students became more responsible and more focused in class. Professor David Mills argues that helping others teaches young people skills that no classroom can ever replace.',
							questions: [
								{
									prompt:
										'What do we learn from paragraph III about schools? (לכו רק לפסקה III)',
									options: [
										'Schools stopped volunteering programmes',
										'Students who volunteer become more responsible',
										'Professor Mills works at a school',
										'Young volunteers feel less stressed'
									],
									correctIndex: 1
								},
								{
									prompt:
										'"Young volunteers feel less stressed" נכון לפי הטקסט. למה בכל זאת חצינו אותו?',
									options: [
										'כי הוא סותר את הטקסט',
										'כי הוא מפסקה II, והשאלה על פסקה III — סוג ב׳',
										'כי הוא לא מוזכר בטקסט',
										'כי הוא קצר מדי'
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
							text: 'YOUR TURN — בפורמט בחינה.\n🚦 רמזור לפני שעונים. רק ירוק = עונים.'
						},
						{
							type: 'passage-mcq',
							text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.\n\nII  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again.',
							questions: [
								{
									prompt: 'What do we learn from paragraph II about the project?',
									options: [
										'The project teaches people to plant and care for trees',
										'Dr. Diallo plants the trees personally',
										'Most trees survive without any help',
										'In Ethiopia, birds increased by 60%'
									],
									correctIndex: 0
								},
								{
									prompt: 'איזו אפשרות היא מסיח מסוג ב׳ — נכונה, אבל מהפסקה הלא נכונה?',
									options: [
										'"Dr. Diallo plants the trees personally"',
										'"Most trees survive without any help"',
										'"In Ethiopia, birds increased by 60%"',
										'אין כאן מסיח כזה'
									],
									correctIndex: 2
								}
							]
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"What do we learn from paragraph X? ← לך רק לפסקה X."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l10',
		section: 'c-1',
		titleHe: 'תשובה קצרה',
		titleEn: 'Short Answer',
		code: 'c.1.11',
		required: ['l09'],
		position: { x: 100, y: 1320 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'טעות נפוצה:\n"Give ONE answer." — התלמיד כותב שלושה משפטים מהדעה שלו.\n← שלוש תשובות, ולא מהטקסט.\n\nנכון:\n"Give ONE answer." — משפט אחד מהטקסט.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — שלושה כללים',
					lines: [
						'1 · ONE = תשובה אחת בלבד.',
						'2 · מהטקסט — לא מהדעה שלכם.',
						'3 · משפט אחד. לא צריך להסביר.'
					]
				},
				{
					type: 'summary',
					title: 'מה מחפשים לפי מילת השאלה',
					lines: [
						'Why? ← because / since / as a result / therefore ← עונים "Because…"',
						'When? ← שנה, תאריך, תקופה (in 2019, ago) ← הזמן מהטקסט',
						'How? ← by / through / using + פעולה ← "By…"',
						'Where? ← שם מקום, in / at / on ← המקום מהטקסט',
						'What? ← המשפט שמתאר את הנושא ← מעתיקים את המשפט'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT\n\nהשאלה: According to Dr. Okafor, why do teenagers who volunteer feel less stressed?\n\nWhy? ← מחפשים מילת סיבה.\nפסקה II: "teenagers who volunteer feel less stressed and sleep better".\n\nתשובה: Because they feel less stressed and sleep better than those who do not volunteer.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '🚦 רמזור: ירוק? רק ירוק = עונים.'
						},
						{
							type: 'passage-mcq',
							text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
							questions: [
								{
									prompt:
										'Why do most trees die, according to Dr. Diallo? Give ONE answer. — איזו מילה בטקסט מסגירה את התשובה?',
									options: ['survive', 'because', 'local', 'when'],
									correctIndex: 1
								},
								{
									prompt: 'מה התשובה?',
									options: [
										'Rivers became cleaner',
										'Because scientists did not help',
										'Because nobody looks after them',
										'Because only 85% survive'
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
							text: 'דקדוק בתשובות קריאה:\nלא מורידים נקודות על שגיאות דקדוק קלות בחלק א׳.\n\nמה שחשוב: המידע הנכון מהטקסט. כל עוד התשובה מובנת — מקבלים את הנקודות.\nלמשל "Because the goats ate all plants" מקבל ניקוד מלא, גם בלי "the" לפני plants.'
						},
						{
							type: 'preface',
							text: 'YOUR TURN — בפורמט בחינה.\n🚦 רמזור: ירוק? רק ירוק = עונים.'
						},
						{
							type: 'self-check',
							text: 'II  The benefits of volunteering go beyond simple happiness. Dr. Sarah Okafor studied the effects of volunteering on mental health for ten years. She found that teenagers who volunteer feel less stressed and sleep better. However, not all types of volunteering produce the same results. According to Dr. Okafor, the most effective programmes bring young people face to face with the people they help.',
							prompt:
								'According to Dr. Okafor, how do volunteers feel compared to non-volunteers? Give ONE answer.',
							modelAnswer: 'ANSWER: They feel less stressed and sleep better.'
						},
						{
							type: 'mcq',
							prompt: 'השאלה מתחילה ב-When? מה מחפשים בטקסט?',
							options: [
								'מילת סיבה — because',
								'שנה, תאריך או תקופה',
								'שם של מקום',
								'שם של אדם'
							],
							correctIndex: 1
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"תשובה אחת. מהטקסט. Why? ← because. When? ← זמן."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l11',
		section: 'c-1',
		titleHe: 'השלמת משפט',
		titleEn: 'Complete the Sentence',
		code: 'c.1.12',
		required: ['l10'],
		position: { x: 70, y: 1440 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'שני פורמטים של Complete the Sentence:\n\nפורמט א׳ — "People left because ___" ← מחפשים because / since.\nפורמט ב׳ — "They brought goats in order to ___" ← מחפשים to / in order to / so that.\n\nההבדל: because = למה זה קרה (סיבה). in order to = מה הם רצו להשיג (מטרה).'
				},
				{
					type: 'summary',
					title: 'THE TOOL — ארבעה שלבים',
					lines: [
						'1 · קראו את ההתחלה: "Because ___" או "In order to ___"?',
						'2 · חפשו בטקסט את מילות המפתח המתאימות.',
						'3 · מצאו את החלק שמשלים את המשפט.',
						'4 · קראו בראש את המשפט השלם — הוא מסתדר?'
					]
				},
				{
					type: 'summary',
					title: 'מילות המפתח',
					lines: [
						'ל-"Because ___": because · since · as a result · therefore · so · due to',
						'ל-"In order to ___": to · in order to · so that · so they could',
						'⚠️ ה-because / in order to כבר כתוב בשאלה — אל תכתבו אותו שוב.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT — REDONDA ISLAND\n\n"People first came to Redonda 150 years ago. They brought many goats with them because they wanted meat and milk. The goats ate all the plants. The people could not find enough food, so they left the island. In 2016, environmentalists removed the goats so that the plants could grow back."\n\nBecause ___ ← מחפשים because/so ← "could not find food, so they left"\n← Because they could not find enough food.\n\nIn order to ___ ← מחפשים so that/to ← "removed the goats so that the plants could grow"\n← In order to let the plants grow back.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '🚦 רמזור: ירוק? רק ירוק = עונים.'
						},
						{
							type: 'passage-mcq',
							text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.',
							questions: [
								{
									prompt:
										'Why did scientists start the Green Africa project? COMPLETE: Because ___',
									options: [
										'Because the birds needed to return',
										'Because forests around the world are being destroyed',
										'Because Kenya had dry rivers',
										'Because local people asked for trees'
									],
									correctIndex: 1
								},
								{
									prompt: 'המשפט מתחיל ב-"Because". מה אסור לכתוב בתשובה?',
									options: [
										'את המילה because עוד פעם',
										'שם של מקום',
										'מספרים מהטקסט',
										'משפט מהפסקה'
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
							text: 'דקדוק בתשובות קריאה:\nלא מורידים נקודות על שגיאות דקדוק קלות בחלק א׳. מה שחשוב הוא המידע הנכון מהטקסט.'
						},
						{
							type: 'preface',
							text: 'YOUR TURN — בפורמט בחינה. שתי השלמות: אחת של סיבה, אחת של מטרה.\n🚦 רמזור: ירוק? רק ירוק = עונים.'
						},
						{
							type: 'self-check',
							text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
							prompt:
								'Why do most trees survive in the Green Africa project? COMPLETE: Because ___',
							modelAnswer: 'Because local people are involved and learn how to care for the trees.'
						},
						{
							type: 'self-check',
							text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
							prompt:
								'What do scientists do in order to help the trees? COMPLETE: In order to help the trees, they ___',
							modelAnswer: 'In order to help the trees, they teach local people how to care for them.'
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"Because ___ = סיבה. In order to ___ = מטרה."']
						}
					]
				}
			]
		}
	}
,
	{
		id: 'l12',
		section: 'c-1',
		titleHe: 'שתי תשובות',
		titleEn: 'Two Answers',
		code: 'c.1.13',
		required: ['l11'],
		position: { x: 0, y: 1560 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'הטעות הכי יקרה:\n\n"Give TWO answers." — התלמיד מצא אחת ועבר הלאה.\nTWO = שתיים. תמיד.\n\nבבחינה: "How did Redonda change? Give TWO answers from paragraph IV."\n(1) ______  (2) ______  ← 14 נקודות, 7 לכל תשובה.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — ארבעה שלבים',
					lines: [
						'1 · קראו את הפסקה.',
						'2 · מצאו תשובה ראשונה — סמנו אותה.',
						'3 · אל תעצרו — המשיכו לחפש תשובה שנייה.',
						'4 · רק אחרי שיש שתיים — כותבים (1) ו-(2).'
					]
				},
				{
					type: 'summary',
					title: 'הסיגנלים לתשובה השנייה',
					lines: [
						'In addition · Also · And · Furthermore · Moreover',
						'ראיתם אחת מהן? תשובה שנייה מגיעה מיד אחריה.',
						'❌ תשובה אחת = מאבדים 7 נקודות · ❌ שלוש = עלולים לאבד נקודות · ✅ שתיים מהטקסט = 14 נקודות'
					]
				},
				{
					type: 'steps',
					steps: [
						'WATCH IT — How did the area change after trees were planted? Give TWO answers. (paragraph III)',
						'תשובה 1: "the number of birds increased by 60%" — סימנו, וממשיכים.',
						'מחפשים סיגנל: "In addition" ← הנה הוא.',
						'תשובה 2: "in Kenya, rivers that were dry for 20 years began to flow again".'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '🚦 רמזור: ירוק? רק ירוק = עונים.'
						},
						{
							type: 'passage-mcq',
							text: 'III  Results from 12 countries show that schools that introduced volunteering programmes found that students became more responsible and more focused in class. Professor David Mills argues that helping others teaches young people skills that no classroom can ever replace.',
							questions: [
								{
									prompt:
										'Give TWO answers: How do volunteer students change? (paragraph III) — איזה זוג נכון?',
									options: [
										'More responsible + better grades',
										'More responsible + more focused in class',
										'More focused + they stop volunteering',
										'Better grades + less stressed'
									],
									correctIndex: 1
								},
								{
									prompt: 'איזו מילה בפסקה חיברה בין שתי התשובות?',
									options: ['"however"', '"because"', '"and"', '"argues"'],
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
							text: 'דקדוק בתשובות קריאה:\nלא מורידים נקודות על שגיאות דקדוק קלות בחלק א׳. מה שחשוב הוא המידע הנכון מהטקסט.'
						},
						{
							type: 'preface',
							text: 'YOUR TURN — בפורמט בחינה. שתי תשובות, ממוספרות.\n🚦 רמזור: ירוק? רק ירוק = עונים.'
						},
						{
							type: 'self-check',
							text: 'III  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.',
							prompt:
								'What changed in Greenville after the project? (paragraph III) Give TWO answers — כתבו (1) ו-(2).',
							modelAnswer:
								'(1) Stress levels fell by 40%.  (2) The number of people who exercise outdoors increased from 15% to 60%.'
						},
						{
							type: 'mcq',
							prompt: 'כתבתם תשובה אחת בשאלת TWO. כמה נקודות מפסידים?',
							options: [
								'לא מפסידים — מספיק אחת נכונה',
								'חצי מהניקוד — 7 מתוך 14',
								'את כל הניקוד',
								'תלוי באורך התשובה'
							],
							correctIndex: 1
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"מצאתי AND / IN ADDITION? ← תשובה שנייה מגיעה."']
						}
					]
				}
			]
		}
	}
];
