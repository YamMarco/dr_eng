// Module G, Part A - Reading Skills. 18 lessons on one exam-length text type.
// Source: docs/material/module-g/Module_G_Reading_Lessons_APP_FINAL_REVISED.docx
import type { LessonNode } from '../types';

export const g1Lessons: LessonNode[] = [
	{
		id: 'g-reading-intro',
		section: 'g-1',
		titleEn: 'Reading Part: The Focus',
		required: [],
		requiredRounds: 2,
		position: {
			x: 0,
			y: 130
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}ב-Module G יש טקסט אחד ארוך ושאלות עליו. **המטרה היא לא לתרגם כל מילה.**\n\n{d:rtl}המטרה היא קריאה אסטרטגית: להבין במה הטקסט עוסק, למצוא את המידע שכל שאלה צריכה, ולענות באנגלית מדויקת.'
				},
				{
					type: 'summary',
					title: 'מבנה חלק הקריאה',
					lines: [
						'📄 טקסט אחד, בדרך כלל כ-450-500 מילים. לא מתרגמים כל מילה.',
						'❓ בדרך כלל 8-10 שאלות. חלק הקריאה שווה 60 נקודות.',
						'✍️ עונים באנגלית, בדיוק על מה שנשאל.',
						'📖 מילון מאושר, לפי הוראות משרד החינוך למועד הבחינה.'
					]
				},
				{
					type: 'summary',
					title: 'בכל שאלה - אותו סדר',
					lines: [
						'1 · מבינים מה מבקשים: סיבה, פרט, מסקנה, השוואה.',
						'2 · מוצאים את המקום הנכון בטקסט.',
						'3 · עונים רק על מה שנשאל, עם מידע מהטקסט.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: 'איזו שאלה קל יותר לאתר בטקסט?',
							options: [
								'"How long has Sarah Mitchell worked at DataLink?"',
								'"What does the writer think about knowledge transfer?"'
							],
							correctIndex: 0,
							explanation:
								'בשאלה הראשונה יש שמות ברורים: Sarah Mitchell ו-DataLink. קל למצוא אותם בטקסט. "think" כללי ולא מראה לאן ללכת.'
						},
						{
							type: 'mcq',
							prompt: 'מה המטרה בחלק הקריאה?',
							options: [
								'למצוא את המידע שהשאלה צריכה ולענות במדויק',
								'לתרגם כל מילה לפני שעונים',
								'לקרוא את כל הטקסט שלוש פעמים מההתחלה'
							],
							correctIndex: 0,
							explanation: 'לא צריך להבין כל מילה. מבינים את השאלה, מוצאים את המקום ועונים.'
						},
						{
							type: 'mcq',
							prompt: 'באיזו שפה עונים על השאלות?',
							options: ['באנגלית', 'בעברית', 'בעברית או באנגלית, לבחירתכם'],
							correctIndex: 0,
							explanation: 'עונים באנגלית. תשובה בעברית לא מקבלת נקודות.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'שלב 1: קראו את השאלה. שלב 2: סמנו לעצמכם מילת שאלה או מגנט. שלב 3: מצאו משפט תומך, ורק אז ענו.'
						},
						{
							type: 'passage-quiz',
							text: 'Local libraries in several cities have begun lending more than books. Members can now borrow tools, sewing machines and even small musical instruments. The idea developed after librarians noticed that many residents needed such items only occasionally and did not want to buy them. Supporters say the service saves money and reduces waste. However, some librarians worry that repairing damaged equipment may become expensive. For this reason, a few libraries require users to attend a short safety session before borrowing certain tools.',
							questions: [
								{
									prompt: 'Why did libraries begin lending non-book items?',
									keywords: ['buy'],
									answerHint:
										'Residents needed the items only occasionally and did not want to buy them.'
								},
								{
									prompt: 'What TWO advantages of the service are mentioned?',
									keywords: ['money', 'waste'],
									answerHint: 'It saves money and reduces waste.'
								},
								{
									prompt: 'What concern do some librarians have?',
									keywords: ['repair'],
									answerHint: 'Repairing damaged equipment may become expensive.'
								},
								{
									prompt: 'What can we understand about the safety sessions?',
									keywords: ['safe'],
									answerHint: 'They help users handle some tools safely and reduce problems.'
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-scan',
		section: 'g-1',
		titleEn: 'Scan Before the Questions',
		required: ['g-reading-intro'],
		requiredRounds: 2,
		position: {
			x: 70,
			y: 250
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}לפני השאלה הראשונה, שווה להשקיע **3 דקות** בסריקה. הן חוסכות הרבה חיפוש אחר כך.'
				},
				{
					type: 'summary',
					title: 'סורקים בשלושה צעדים',
					lines: [
						'1️⃣ הכותרת - מה הנושא?',
						'2️⃣ הפסקה הראשונה - מי הדמויות? מה ההקשר?',
						'3️⃣ המשפט הראשון בכל פסקה - על מה היא? כך נבנית מפה.'
					]
				},
				{
					type: 'preface',
					text: '{p:callout}{d:rtl}הסריקה לא מחליפה קריאה. היא מראה **לאן ללכת**. שם קוראים בעיון ומוצאים את התשובה.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'summary',
							title: 'המפה של DIGITAL MENTORING AT WORK',
							lines: [
								'I · Sarah Mitchell has worked as a marketing director... ← רקע: מי היא',
								'II · ...sometimes called "reverse digital mentoring" ← מה המושג',
								'III · ...report clear benefits ← יתרונות',
								'IV · ...not without challenges ← קשיים',
								'V · ...go beyond technical skills ← תוצאות רחבות'
							]
						},
						{
							type: 'mcq',
							prompt:
								'לפי המפה, באיזו פסקה תחפשו קודם?\n\n{p:text}What challenges does reverse digital mentoring face?',
							options: ['I', 'II', 'III', 'IV', 'V'],
							correctIndex: 3,
							explanation: 'challenges = קשיים. משפט הפתיחה של פסקה IV: "not without challenges".'
						},
						{
							type: 'mcq',
							prompt:
								'לפי המפה, באיזו פסקה תחפשו קודם?\n\n{p:text}According to Dr. Shapira, when did reverse digital mentoring begin?',
							options: ['I', 'II', 'III', 'IV', 'V'],
							correctIndex: 1,
							explanation: 'פסקה II מסבירה מה המושג ומאיפה הוא בא. שם מופיעים Dr. Shapira וה-2010s.'
						},
						{
							type: 'mcq',
							prompt:
								'לפי המפה, באיזו פסקה תחפשו קודם?\n\n{p:text}What effect does the program have on junior employees?',
							options: ['I', 'II', 'III', 'IV', 'V'],
							correctIndex: 4,
							explanation: 'effect = תוצאה. פסקה V עוסקת בתוצאות שמעבר לכישורים טכניים.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'אל תקראו הכול לעומק. קראו את פתיחת כל פסקה, ואז בחרו לכל שאלה את הפסקה שתקראו **ראשונה**.'
						},
						{
							type: 'passage-mcq',
							text: 'I  In many offices, employees spend most of the day sitting. Some companies have therefore introduced short "movement breaks" during the working day.\n\nII  Researchers studying these breaks found that even five minutes of light activity can improve concentration. The effect was especially noticeable in the afternoon.\n\nIII  Not every employee welcomed the idea. Some felt uncomfortable exercising near colleagues, while others worried that breaks would interrupt their work.\n\nIV  To solve this problem, several companies began offering optional walks outside the building instead of group exercises. Participation increased soon afterward.',
							questions: [
								{
									prompt: 'What benefit of movement breaks was found by researchers?',
									options: ['I', 'II', 'III', 'IV'],
									correctIndex: 1
								},
								{
									prompt: 'Why were some workers unwilling to participate?',
									options: ['I', 'II', 'III', 'IV'],
									correctIndex: 2
								},
								{
									prompt: "How did companies respond to employees' concerns?",
									options: ['I', 'II', 'III', 'IV'],
									correctIndex: 3
								},
								{
									prompt: 'What change in modern work created the need for movement breaks?',
									options: ['I', 'II', 'III', 'IV'],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-traffic-light',
		section: 'g-1',
		titleEn: 'The Traffic Light',
		required: ['g-scan'],
		requiredRounds: 2,
		position: {
			x: 100,
			y: 370
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}סרקתם וקיבלתם מפה. עכשיו לשאלות.\n\n{d:rtl}הטעות הנפוצה: לחזור ולקרוא את הטקסט מההתחלה. **לא צריך.**'
				},
				{
					type: 'summary',
					title: '🚦 שיטת הרמזור',
					lines: [
						'🔴 עוצרים - קוראים את השאלה לאט. מה בדיוק שואלים?',
						'🟡 חושבים - יש מגנט? שם, מספר, תאריך או מילה בולטת.',
						'🟢 מחפשים - הולכים לאזור, קוראים סביב המגנט ובודקים שזה באמת עונה על השאלה.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '{d:rtl}דוגמה:\n{p:text}Why did Sarah Mitchell request a meeting with Ben Cohen?\n{d:rtl}🔴 שואלים: למה היא ביקשה פגישה.\n{d:rtl}🟡 מגנטים: Mitchell, Ben Cohen ← פסקה I.\n{d:rtl}🟢 בפסקה I: she wants Cohen to teach her how to use the new digital marketing platform.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}According to Dr. Shapira, what began in the early 2010s?\n\n{d:rtl}🟡 מה המגנטים בשאלה?',
							options: ['"Dr. Shapira" + "2010s"', '"what" + "began"', '"according" + "early"'],
							correctIndex: 0,
							explanation:
								'שם ומספר בולטים בטקסט וקל למצוא אותם. began ו-early יכולות להופיע בכל מקום.'
						},
						{
							type: 'passage-quiz',
							text: 'II  The approach that Mitchell and Cohen are practicing is sometimes called "reverse digital mentoring." As technology changes faster than ever, companies are discovering that their youngest employees often have skills their most experienced managers lack. According to Dr. Noa Shapira of Tel Aviv University, this trend began quietly in the early 2010s and has since spread to companies of all sizes. "The traditional idea was always that experience flows downward," she explains. "What we are seeing now is that knowledge can also flow upward."',
							questions: [
								{
									prompt: 'According to Dr. Shapira, what began in the early 2010s?',
									keywords: ['mentoring'],
									answerHint:
										'The trend of reverse digital mentoring began, and it has spread to companies of all sizes.'
								}
							]
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle: '🔴 מה שואלים? 🟡 איזה רמז יעזור למצוא? 🟢 קראו סביב הרמז ובדקו את התשובה.'
						},
						{
							type: 'passage-quiz',
							text: 'When biologist Maya Rosen began studying city birds, she expected traffic noise to make communication more difficult. Instead, she discovered that several species had changed the pitch of their calls. Birds living near busy roads used higher sounds, which were easier to hear above low-frequency engine noise. Rosen warns, however, that not all species can make this adjustment.',
							questions: [
								{
									prompt: 'What did Rosen discover about birds living near busy roads?',
									keywords: ['chang'],
									answerHint: 'Some species had changed the pitch of their calls.'
								},
								{
									prompt: 'Why do some city birds use higher calls?',
									keywords: ['hear'],
									answerHint: 'Higher calls are easier to hear above traffic and engine noise.'
								},
								{
									prompt: 'What does Rosen imply about species that cannot change their calls?',
									keywords: ['communicat'],
									answerHint: 'They may have more difficulty communicating in noisy areas.'
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-numbers',
		section: 'g-1',
		titleEn: 'Magnets: Numbers',
		required: ['g-traffic-light'],
		requiredRounds: 2,
		position: {
			x: 70,
			y: 490
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}כשיש מספר בשאלה, הוא רמז מצוין למיקום.\n{p:text}twelve years · 23-year-old · three months · 45% · 300 managers\n{p:callout}{d:rtl}המספר עוזר **לאתר**. המשפט סביבו נותן **את התשובה**. קראו תמיד את המילה שליד המספר: מה הוא מודד?'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mark-all',
							instruction: 'סמנו את כל מגנטי המספרים בפסקה.',
							text: 'Sarah Mitchell has worked as a marketing director at DataLink for over twelve years. She is waiting for a meeting with Ben Cohen, a 23-year-old recent graduate who joined the company just three months ago.',
							correctIndices: [12, 24, 32]
						},
						{
							type: 'passage-mcq',
							text: '**DIGITAL MENTORING AT WORK**\n\nI  Sarah Mitchell has worked as a marketing director at DataLink for over twelve years. She is waiting in her office for a meeting with Ben Cohen, a 23-year-old recent graduate who joined the company just three months ago. Unlike most meetings Mitchell attends, this one was requested by her: she wants Cohen to teach her how to use the company\'s new digital marketing platform.\n\nIII  Companies that have adopted reverse digital mentoring report clear benefits. A recent survey of 300 managers across different industries found that 45% felt significantly more confident using digital tools after working with a younger colleague. According to Dr. Shapira, "Older employees often feel embarrassed asking basic questions in a group setting. A one-on-one session with a younger colleague removes that pressure entirely."',
							questions: [
								{
									prompt: 'How long has Sarah Mitchell worked at DataLink?',
									options: [
										'For over twelve years',
										'For three months',
										'For 23 years',
										'For 45 years'
									],
									correctIndex: 0
								},
								{
									prompt: 'How old is Ben Cohen?',
									options: ['23', '12', '3', '45'],
									correctIndex: 0
								},
								{
									prompt:
										'According to paragraph III, what percentage of managers felt more confident?',
									options: ['45%', '60%', '23%', '300'],
									correctIndex: 0
								}
							]
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'מספרים הם רמזים, לא תשובות. מצאו את המספר ואת מה שהוא מודד: מה השתנה? מה הוא מראה?'
						},
						{
							type: 'passage-mcq',
							text: 'A university tested a new bicycle-sharing program for students. During the first month, 1,200 rides were recorded. By the third month, the number had risen to 2,050. A survey also found that 38% of users had previously travelled to campus by car at least twice a week. After six months, that figure fell to 21%.',
							questions: [
								{
									prompt: 'What do the figures 1,200 and 2,050 show?',
									options: [
										'Use of the program increased between the first and third months',
										'The program had 2,050 users in its first month',
										'Fewer students used the bicycles after three months',
										'1,200 students stopped driving to campus'
									],
									correctIndex: 0
								},
								{
									prompt: 'What change is reflected in the figures 38% and 21%?',
									options: [
										'Fewer users were travelling to campus by car regularly',
										'More users started driving to campus',
										'21% of the rides were cancelled',
										'38% of students used the bicycles every day'
									],
									correctIndex: 0
								},
								{
									prompt: 'What can we infer about the bicycle-sharing program?',
									options: [
										'It seems to have encouraged some students to replace car trips with bicycles',
										'It made every student stop using a car',
										'It was more popular in the first month than later',
										'It was cancelled after six months'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-names',
		section: 'g-1',
		titleEn: 'Magnets: Names',
		required: ['g-numbers'],
		requiredRounds: 2,
		position: {
			x: 0,
			y: 610
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}כל שם פרטי באנגלית מתחיל **באות גדולה**, גם באמצע משפט. לכן קל לראות אותו בטקסט.'
				},
				{
					type: 'summary',
					title: 'שלושה סוגי שמות',
					lines: [
						'👤 אדם - Sarah Mitchell · Dr. Noa Shapira · Marcus Levy',
						'🏢 ארגון - DataLink · GlobalNet · Tel Aviv University',
						'📍 מקום - northern Israel · Haifa'
					]
				},
				{
					type: 'preface',
					text: '{p:callout}{i:warn}{d:rtl}זהירות: גם המילה הראשונה במשפט מתחילה באות גדולה, והיא לא שם.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mark-all',
							instruction: 'סמנו את כל המילים שהן חלק משם (אדם או מקום).',
							text: 'According to Dr. Noa Shapira of Tel Aviv University, this trend began quietly in the early 2010s and has since spread to companies of all sizes.',
							correctIndices: [2, 3, 4, 6, 7, 8]
						},
						{
							type: 'passage-mcq',
							text: 'II  The approach that Mitchell and Cohen are practicing is sometimes called "reverse digital mentoring." As technology changes faster than ever, companies are discovering that their youngest employees often have skills their most experienced managers lack. According to Dr. Noa Shapira of Tel Aviv University, this trend began quietly in the early 2010s and has since spread to companies of all sizes. "The traditional idea was always that experience flows downward," she explains. "What we are seeing now is that knowledge can also flow upward."',
							questions: [
								{
									prompt: 'Who explains the idea of reverse digital mentoring in paragraph II?',
									options: [
										'Dr. Noa Shapira, of Tel Aviv University',
										'Sarah Mitchell, a marketing director',
										'Ben Cohen, a recent graduate',
										'Marcus Levy, the CEO of GlobalNet'
									],
									correctIndex: 0
								},
								{
									prompt: 'According to Dr. Shapira, when did the trend begin?',
									options: [
										'In the early 2010s',
										'Twelve years ago',
										'Three months ago',
										'When she joined Tel Aviv University'
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
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle: 'מצאו את השם בשאלה, מצאו אותו בטקסט, וקראו את הפעולה שמופיעה לידו.'
						},
						{
							type: 'passage-quiz',
							text: 'At Greenfield School, science teacher Liat Cohen asked students to measure classroom air quality. Engineer Amir Salim helped them build simple sensors, while principal Dana Levi arranged access to different rooms after school. The students later presented their findings to Dr. Karen Moss, a public-health researcher, who suggested repeating the measurements during winter.',
							questions: [
								{
									prompt: 'Who helped the students build the equipment they needed?',
									keywords: ['salim'],
									answerHint: 'Amir Salim, the engineer.'
								},
								{
									prompt: 'What did Dana Levi contribute to the project?',
									keywords: ['room'],
									answerHint: 'She arranged access to different rooms after school.'
								},
								{
									prompt: 'According to Dr. Moss, what should the students do next?',
									keywords: ['winter'],
									answerHint: 'Repeat the measurements during winter.'
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-question-words',
		section: 'g-1',
		titleEn: 'Question Words',
		required: ['g-names'],
		requiredRounds: 2,
		position: {
			x: -70,
			y: 730
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}לפני שמחפשים תשובה, צריך להבין **מה השאלה מבקשת**. כמה ביטויים חוזרים כמעט בכל בגרות G.'
				},
				{
					type: 'summary',
					title: 'שאלות ישירות',
					lines: [
						'**According to X** ← מה X אמר. מוצאים את X וקוראים לידו.',
						'**What does X refer to?** ← למה המילה מתייחסת. חוזרים אחורה.',
						'**Base your answer on lines...** ← קוראים בדיוק את השורות האלה.'
					]
				},
				{
					type: 'summary',
					title: 'שאלות מרומזות',
					lines: [
						'**What does X imply?** ← מה X רומז בלי לומר ישירות.',
						'**What can we infer?** ← מסקנה שהטקסט תומך בה.',
						'**What can we understand?** ← יכול להיות ישיר או מרומז.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'II  The approach that Mitchell and Cohen are practicing is sometimes called "reverse digital mentoring." As technology changes faster than ever, companies are discovering that their youngest employees often have skills their most experienced managers lack. According to Dr. Noa Shapira of Tel Aviv University, this trend began quietly in the early 2010s and has since spread to companies of all sizes. "The traditional idea was always that experience flows downward," she explains. "What we are seeing now is that knowledge can also flow upward."',
							questions: [
								{
									prompt: 'What does "this trend" in paragraph II refer to?',
									options: [
										'The practice of reverse digital mentoring',
										'The idea that experience flows downward',
										'The growth of Tel Aviv University',
										'Companies of all sizes'
									],
									correctIndex: 0
								},
								{
									prompt: 'What does Dr. Shapira imply about the traditional idea of mentoring?',
									options: [
										'It is being challenged, because knowledge can also flow upward',
										'It is still the only way companies train workers',
										'It began in the early 2010s',
										'It works best in small companies'
									],
									correctIndex: 0
								}
							]
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}According to CEO Marcus Levy, what changed after the program was reframed?\n\n{d:rtl}השאלה ישירה או מרומזת?',
							options: [
								'ישירה - מחפשים את Marcus Levy ומה הוא אמר שקרה אחרי השינוי',
								'מרומזת - צריך להסיק משהו שהטקסט לא אומר'
							],
							correctIndex: 0,
							explanation: 'According to = מה X אמר. התשובה כתובה בטקסט, ליד השם.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}What does the writer imply about senior managers who refused to participate?\n\n{d:rtl}מה מחפשים בטקסט?',
							options: [
								'מילים שמראות יחס, כמו humiliating, ומה הן רומזות',
								'מספר שמופיע ליד המילה managers',
								'את המשפט הראשון בטקסט'
							],
							correctIndex: 0,
							explanation:
								'imply = רמז. מחפשים מילים שמראות יחס או ניגוד ושואלים מה הן אומרות בלי לומר.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'לפני כל תשובה, זהו את מילת השאלה: According to = ישיר · refer to = למה זה מתייחס · imply / infer = מסקנה נתמכת.'
						},
						{
							type: 'passage-quiz',
							text: 'Some supermarkets have introduced "quiet hours" for customers who are sensitive to noise and bright light. During these periods, music is turned off, announcements are limited, and some lights are dimmed. According to store manager Hila Bar, the change was originally designed for customers with sensory difficulties, but other shoppers have also said they enjoy the calmer atmosphere. "That surprised us," Bar says. "We expected the service to help a small group."',
							questions: [
								{
									prompt: 'According to Bar, who was the service originally intended to help?',
									keywords: ['sensory'],
									answerHint: 'Customers with sensory difficulties.'
								},
								{
									prompt: 'What does "That" refer to?',
									keywords: ['enjoy'],
									answerHint: 'The fact that other shoppers also enjoy the calmer atmosphere.'
								}
							]
						},
						{
							type: 'passage-mcq',
							text: 'According to store manager Hila Bar, the change was originally designed for customers with sensory difficulties, but other shoppers have also said they enjoy the calmer atmosphere. "That surprised us," Bar says. "We expected the service to help a small group."',
							questions: [
								{
									prompt: 'What does Bar imply about the response to quiet hours?',
									options: [
										'The service appealed to more people than the store expected',
										'The store regretted introducing quiet hours',
										'Only customers with sensory difficulties used the service',
										'Bar planned the service for all shoppers from the start'
									],
									correctIndex: 0
								},
								{
									prompt: 'What can we infer about the effect of the change on other customers?',
									options: [
										'Some customers without sensory difficulties also prefer a quieter shop',
										'All shoppers dislike music in supermarkets',
										'Other customers stopped shopping during quiet hours',
										'Other customers asked for brighter lights'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-mc-eliminate',
		section: 'g-1',
		titleEn: 'Multiple Choice: Eliminate',
		required: ['g-question-words'],
		requiredRounds: 2,
		position: {
			x: -100,
			y: 850
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}בשאלה אמריקאית כמה אפשרויות נשמעות הגיוניות. שיטת ההסרה בודקת איזו מהן **באמת נתמכת בטקסט**.'
				},
				{
					type: 'summary',
					title: 'מה מסירים',
					lines: [
						'❌ אפשרות שסותרת את הטקסט',
						'❌ אפשרות שנשמעת הגיונית, אבל הטקסט לא אומר אותה',
						'❌ אפשרות מוגזמת או כללית מדי (always, all, only)',
						'✅ אפשרות שנתמכת בטקסט, ישירות או בעקיפין. בודקים אותה מול השאר.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'III  Companies that have adopted reverse digital mentoring report clear benefits. A recent survey of 300 managers across different industries found that 45% felt significantly more confident using digital tools after working with a younger colleague. According to Dr. Shapira, "Older employees often feel embarrassed asking basic questions in a group setting. A one-on-one session with a younger colleague removes that pressure entirely."',
							questions: [
								{
									prompt: 'What do we learn about older employees from paragraph III?',
									options: [
										'Their confidence with digital tools increased after working with a younger colleague',
										'They prefer learning in group sessions',
										'They are better at asking questions than younger employees',
										'Many of them refused to take part in the survey'
									],
									correctIndex: 0
								}
							]
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}They prefer learning in group sessions.\n\n{d:rtl}למה הסרנו את האפשרות הזו?',
							options: [
								'היא סותרת את הטקסט: הם מתביישים לשאול בקבוצה',
								'היא נכונה, אבל מפסקה אחרת',
								'היא מוגזמת'
							],
							correctIndex: 0,
							explanation:
								'הטקסט אומר ש-older employees feel embarrassed asking basic questions in a group setting. זה ההפך מהעדפה.'
						},
						{
							type: 'passage-mcq',
							text: 'IV  Despite its advantages, reverse digital mentoring is not without challenges. CEO Marcus Levy of GlobalNet recalls that several senior managers at first refused to participate. "They saw it as humiliating," he says. "We had to reframe it completely, not as \'your junior is teaching you\', but as \'two colleagues sharing expertise.\' Once the language changed, participation rose by 60%."',
							questions: [
								{
									prompt: 'What can we understand from paragraph IV?',
									options: [
										'Changing the way the program was described led to more participation',
										'Junior employees were paid to teach senior managers',
										'CEO Levy introduced the program against his own wishes',
										'All senior managers refused to take part'
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
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'התשובה הנכונה היא לרוב **פרפרזה** או **מסקנה**, לא העתקה. הסירו אפשרויות מוחלטות או לא נתמכות.'
						},
						{
							type: 'passage-mcq',
							text: 'Many people assume that handwritten notes are disappearing from classrooms. Yet a study of university students found that some learners still choose paper when preparing for exams. The researchers found no single method that was best for everyone. Students who organized digital notes effectively performed just as well as those who wrote by hand. The researchers therefore concluded that the quality of the study strategy mattered more than the device used.',
							questions: [
								{
									prompt: 'What can we understand from the text?',
									options: [
										'How students use their notes may be more important than the format',
										'Handwriting always leads to better exam results',
										'Digital notes are useful only for university students',
										'Researchers recommend that all students stop using paper'
									],
									correctIndex: 0
								},
								{
									prompt:
										'According to the study, who performed as well as students who wrote by hand?',
									options: [
										'Students who organized digital notes effectively',
										'Students who used no notes at all',
										'Students who studied in groups',
										'Every university student'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-two-correct',
		section: 'g-1',
		titleEn: 'Two Correct Answers',
		required: ['g-mc-eliminate'],
		requiredRounds: 2,
		position: {
			x: -70,
			y: 970
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}כשההוראה אומרת **PUT A √ BY THE TWO CORRECT ANSWERS**, בוחרים בדיוק שתיים. סימון נוסף עלול לעלות בנקודות.'
				},
				{
					type: 'summary',
					title: '4 צעדים',
					lines: [
						'1 · קוראים את כל הפסקה שהשאלה מפנה אליה.',
						'2 · עוברים על כל האפשרויות: V או X לכל אחת.',
						'3 · יש 3 V? חוזרים לטקסט. אחת מהן לא באמת נתמכת.',
						'4 · מסמנים רק שתיים.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								"{p:text}Sarah Mitchell has worked as a marketing director at DataLink for over twelve years. She is waiting in her office for a meeting with Ben Cohen, a 23-year-old recent graduate who joined the company just three months ago. Unlike most meetings Mitchell attends, this one was requested by her: she wants Cohen to teach her how to use the company's new digital marketing platform.\n\nWhat are we told about Sarah Mitchell in paragraph I? PUT A √ BY THE TWO CORRECT ANSWERS.",
							options: [
								'How long she has worked at DataLink',
								'Why she decided to join DataLink',
								'How old Ben Cohen is',
								'What field Ben Cohen studied',
								'What she asked Cohen to teach her'
							],
							correctIndices: [0, 4],
							explanation:
								'"for over twelve years" ו-"teach her how to use the platform". הגיל 23 נכון, אבל הוא של Ben Cohen ולא של Mitchell. למה הצטרפה ומה Cohen למד - לא כתוב.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'בדקו כל אפשרות לבד מול הטקסט. V רק אם יש לה תמיכה ברורה. בסוף: בדיוק שתיים.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}A coastal town created a volunteer program in which teenagers visit elderly residents once a week. At first, organizers expected the main benefit to be practical help with shopping and smartphones. After several months, interviews showed another result: many older participants said they felt less isolated, while teenagers reported becoming more comfortable speaking with people from another generation.\n\nWhat are we told about the program? PUT A √ BY THE TWO CORRECT ANSWERS.',
							options: [
								'Teenagers receive payment for each visit',
								'Organizers initially focused on practical assistance',
								'Older residents taught teenagers how to use smartphones',
								'Some older participants felt less lonely',
								'The program was created by a national organization'
							],
							correctIndices: [1, 3],
							explanation:
								'practical help = practical assistance, less isolated = less lonely. תשלום וארגון ארצי לא מוזכרים. הסמארטפונים: הצעירים עזרו למבוגרים, לא להפך.'
						}
					]
				}
			]
		}
	},
	{
		id: 'g-difference',
		section: 'g-1',
		titleEn: 'A Difference in (-)',
		required: ['g-two-correct'],
		requiredRounds: 2,
		position: {
			x: 0,
			y: 1090
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}בשאלה **A difference in (-)** לא שואלים מה ההבדל המדויק, אלא **באיזה תחום** הוא.\n\n{d:rtl}למשל: amount (כמות) · time (זמן) · type (סוג) · purpose (מטרה) · method (שיטה)'
				},
				{
					type: 'preface',
					text: '{d:rtl}דוגמה: mason bees עובדות במזג אוויר קר. honeybees יוצאות רק מעל 10 מעלות.\n\n{d:rtl}ההבדל המדויק: קר מול חם.\n{d:rtl}**התחום:** the weather conditions in which they are active.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: '**WILD BEES**\n\nI  Every spring, apple orchards in northern Israel come alive with colour. Farmer Ruth Adler has been growing apples on her farm for eighteen years. She has learned that the secret to a good harvest is not just water and soil: it is bees. But not the kind most people expect. "My visitors always look for honeybees," she says. "What they find instead surprises them."\n\nII  The bees that surprise Adler\'s visitors are wild mason bees. Unlike honeybees, which live in hives, mason bees nest in small holes in wood or stone. They are excellent pollinators in cold weather, which makes them essential in early spring when apple flowers first open. Honeybees, by contrast, only leave their hives when temperatures rise above 10 degrees. According to Dr. Paolo Russo of the University of Haifa, "For the first three weeks of the apple blossom season, mason bees do almost all of the work."',
							questions: [
								{
									prompt:
										'What difference between mason bees and honeybees does the text mention? A difference in (-).',
									options: [
										'the weather conditions in which they are active',
										'the types of flowers they prefer',
										'the number of flowers they visit per day',
										'the types of trees near which they nest'
									],
									correctIndex: 0
								}
							]
						},
						{
							type: 'passage-mcq',
							text: 'IV  Despite its advantages, reverse digital mentoring is not without challenges. CEO Marcus Levy of GlobalNet recalls that several senior managers at first refused to participate. "They saw it as humiliating," he says. "We had to reframe it completely, not as \'your junior is teaching you\', but as \'two colleagues sharing expertise.\' Once the language changed, participation rose by 60%."',
							questions: [
								{
									prompt:
										'What difference does paragraph IV describe between before and after the language was changed? A difference in (-).',
									options: [
										'the rate of participation',
										'the age of the participants',
										'the topics covered in sessions',
										'the length of each session'
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
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'שאלו את עצמכם: במה שני הדברים שונים? בזמן? בכמות? בשיטה? בתדירות? זה התחום.'
						},
						{
							type: 'passage-mcq',
							text: 'Two community gardens use different methods to save water. Garden A waters its plants every evening for ten minutes. Garden B waters only twice a week, but for forty minutes each time. Both gardens use approximately the same total amount of water each week.',
							questions: [
								{
									prompt:
										'What difference between Garden A and Garden B is described? A difference in (-).',
									options: [
										'the frequency and length of watering sessions',
										'the amount of water used each week',
										'the types of vegetables they grow',
										'the source of their water'
									],
									correctIndex: 0
								}
							]
						},
						{
							type: 'passage-mcq',
							text: 'Two schools have started teaching computer coding. At Hillside School, students learn coding in an after-school club that meets on Tuesdays. At Lakeview School, coding is part of every regular maths lesson. Both schools say their students enjoy the subject.',
							questions: [
								{
									prompt:
										'What difference between the two schools is described? A difference in (-).',
									options: [
										'when and where coding is taught',
										'how much students enjoy coding',
										'the age of the students',
										'the number of coding teachers'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-complete-answer',
		section: 'g-1',
		titleEn: 'Complete the Answer',
		required: ['g-difference'],
		requiredRounds: 2,
		position: {
			x: 70,
			y: 1210
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}ב-**Complete the Answer / Sentence** השאלון נותן את תחילת התשובה. זה **הגזע**. אתם ממשיכים אותו.\n\n{p:callout}{i:warn}{d:rtl}תשובה שלא מתחברת לגזע בדקדוק או במשמעות עלולה לאבד נקודות.'
				},
				{
					type: 'summary',
					title: 'ממשיך את הגזע או משפט חדש?',
					lines: [
						'{d:ltr}Because senior managers needed to...',
						'{d:ltr}✅ ...learn digital skills from younger colleagues.',
						'{d:ltr}❌ They needed new technology training.',
						'השנייה פותחת משפט חדש עם נושא משלה (They), ולא ממשיכה את הגזע.'
					]
				},
				{
					type: 'summary',
					title: 'גזעים נפוצים',
					lines: [
						'**Because...** ← סיבה',
						'**In order to...** ← מטרה',
						'**Ones that...** ← תיאור',
						'**They... / He...** ← פעולה'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'{p:text}Because the older employees needed to ...\n\n{d:rtl}איזה המשך ממשיך את הגזע?',
							options: [
								'learn how to use new digital tools',
								'They lacked knowledge of social media',
								'the program was very popular',
								'Companies adopted this approach'
							],
							correctIndex: 0,
							explanation:
								'רק "learn how to use..." ממשיך את needed to. השאר פותחים משפט חדש או לא מתאימים לדקדוק.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}In order to ...\n\n{d:rtl}איזה המשך ממשיך את הגזע?',
							options: [
								'ensure that all employees are up to date with technology',
								'companies adopted this approach',
								'ensuring that employees are up to date',
								'because technology changes fast'
							],
							correctIndex: 0,
							explanation:
								'אחרי In order to בא פועל בסיס: ensure. ensuring לא מתאים, ו-companies פותח משפט חדש.'
						},
						{
							type: 'passage-quiz',
							text: 'III  Companies that have adopted reverse digital mentoring report clear benefits. A recent survey of 300 managers across different industries found that 45% felt significantly more confident using digital tools after working with a younger colleague. According to Dr. Shapira, "Older employees often feel embarrassed asking basic questions in a group setting. A one-on-one session with a younger colleague removes that pressure entirely."',
							questions: [
								{
									prompt:
										'Why do older employees find it difficult to ask questions in groups? COMPLETE THE ANSWER: Because they ...',
									keywords: ['embarrass'],
									answerHint:
										'Because they feel embarrassed asking basic questions in a group setting.'
								}
							]
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'קראו את הגזע יחד עם התשובה שלכם. זה צריך להיות משפט אחד נכון, שמתאים לטקסט. כתבו רק את ההמשך.'
						},
						{
							type: 'passage-quiz',
							text: 'A museum noticed that many visitors spent less than ten seconds looking at each painting. It therefore introduced "slow-looking" cards that invite visitors to choose one artwork and examine it for five minutes before reading any information about it. The museum says the goal is to encourage visitors to notice details independently.',
							questions: [
								{
									prompt:
										'Why did the museum introduce slow-looking cards? COMPLETE THE ANSWER: Because visitors ...',
									keywords: ['paint'],
									answerHint: '...were spending very little time looking at each painting.'
								},
								{
									prompt:
										'What are visitors asked to do before reading information? COMPLETE THE ANSWER: They ...',
									keywords: ['minutes'],
									answerHint: '...choose one artwork and examine it for five minutes.'
								},
								{
									prompt:
										'What is the purpose of the activity? COMPLETE THE ANSWER: In order to ...',
									keywords: ['detail'],
									answerHint: '...encourage visitors to notice details independently.'
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-by-to',
		section: 'g-1',
		titleEn: 'BY or TO?',
		required: ['g-complete-answer'],
		requiredRounds: 2,
		position: {
			x: 100,
			y: 1330
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}לפני כל תשובה שמתחילה ב-BY או ב-TO, עוצרים ושואלים: במה הגזע נגמר?'
				},
				{
					type: 'summary',
					title: 'הכלל',
					lines: [
						'🔵 אחרי **BY** ← פועל + ing',
						'{d:ltr}By studying ✅   By study ❌',
						'🟠 אחרי **TO** ← פועל בסיס, בלי ing',
						'{d:ltr}In order to study ✅   In order to studying ❌'
					]
				},
				{
					type: 'preface',
					text: '{p:callout}{i:warn}{d:rtl}לפעמים אחרי BY בא מספר או אמצעי, לא פעולה: rose by 60% · by bus. אז לא מוסיפים ing.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'cloze-pick',
							clause: ' the program, the company convinced more managers to join.',
							options: ['By reframing', 'By reframe', 'By reframed', 'To reframing'],
							correctIndices: [0],
							explanation: 'BY + ing: By reframing.'
						},
						{
							type: 'cloze-pick',
							clause: ' success, the school checks the results every year.',
							options: [
								'In order to ensure',
								'In order to ensuring',
								'In order ensure',
								'By ensure'
							],
							correctIndices: [0],
							explanation: 'TO + פועל בסיס: In order to ensure.'
						},
						{
							type: 'cloze-pick',
							clause: ' a reminder system, the college improved return rates.',
							options: ['By introducing', 'By introduce', 'By introduced', 'By to introduce'],
							correctIndices: [0],
							explanation: 'BY + ing: By introducing.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}Participation rose by ___.\n\n{d:rtl}מה מתאים כאן?',
							options: ['60%', 'increasing', 'to increase'],
							correctIndex: 0,
							explanation: 'כאן BY מציג מספר (בכמה עלתה ההשתתפות), לא פעולה. לכן אין ing.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle: 'בחרו את ההמשך שגם נכון בדקדוק וגם נכון לפי הטקסט.'
						},
						{
							type: 'passage-mcq',
							text: 'A school reduced food waste by changing how lunch was served. Instead of giving every student the same portion, staff allowed students to request smaller servings and return for more if necessary. The school also placed signs near the bins to remind students to take only what they expected to eat.',
							questions: [
								{
									prompt: 'The school reduced waste by ...',
									options: [
										'changing how lunch was served',
										'change how lunch was served',
										'they changed how lunch was served',
										'giving every student the same portion'
									],
									correctIndex: 0
								},
								{
									prompt: 'Students could avoid wasting food by ...',
									options: [
										'requesting smaller servings',
										'request smaller servings',
										'to request smaller servings',
										'returning their food to the kitchen'
									],
									correctIndex: 0
								},
								{
									prompt: 'The signs were placed near the bins in order to ...',
									options: [
										'remind students to take only what they expected to eat',
										'reminding students to take only what they expected to eat',
										'make the bins easier to find',
										'they reminded students about food'
									],
									correctIndex: 0
								},
								{
									prompt: 'Staff allowed students to return for more so as to ...',
									options: [
										'let them take more food if they were still hungry',
										'letting them take more food if they were still hungry',
										'make every portion the same size',
										'they could eat more'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-by-ing',
		section: 'g-1',
		titleEn: 'BY + ing: Practice',
		required: ['g-by-to'],
		requiredRounds: 2,
		position: {
			x: 70,
			y: 1450
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}למדנו את הכלל. עכשיו מתקנים את שלוש הטעויות הנפוצות.'
				},
				{
					type: 'summary',
					title: 'שלוש טעויות נפוצות',
					lines: [
						'{d:ltr}By interview experts ❌ → By interviewing experts ✅',
						'{d:ltr}By they interview experts ❌ → By interviewing experts ✅',
						'{d:ltr}In order to ensuring ❌ → In order to ensure ✅',
						'חסר ing · משפט חדש עם נושא אחרי By · ing אחרי to'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-quiz',
							text: '**WILD BEES**\n\nI  Every spring, apple orchards in northern Israel come alive with colour. Farmer Ruth Adler has been growing apples on her farm for eighteen years. She has learned that the secret to a good harvest is not just water and soil: it is bees. But not the kind most people expect. "My visitors always look for honeybees," she says. "What they find instead surprises them."\n\nII  The bees that surprise Adler\'s visitors are wild mason bees. Unlike honeybees, which live in hives, mason bees nest in small holes in wood or stone. They are excellent pollinators in cold weather, which makes them essential in early spring when apple flowers first open. Honeybees, by contrast, only leave their hives when temperatures rise above 10 degrees. According to Dr. Paolo Russo of the University of Haifa, "For the first three weeks of the apple blossom season, mason bees do almost all of the work."',
							questions: [
								{
									prompt:
										'According to the text, how do mason bees help the apple harvest? COMPLETE THE ANSWER: By ...',
									keywords: ['pollinat'],
									answerHint:
										'By pollinating the apple flowers in cold weather, when honeybees stay in their hives.'
								}
							]
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}תקנו:\n{p:text}By the farmers use mason bees',
							options: [
								'By using mason bees',
								'By use mason bees',
								'By used mason bees',
								'By farmers use mason bees'
							],
							correctIndex: 0,
							explanation: 'אחרי By לא בא נושא (the farmers). בא פועל עם ing: By using.'
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}תקנו:\n{p:text}By plant different flowers',
							options: [
								'By planting different flowers',
								'By plants different flowers',
								'By to plant different flowers'
							],
							correctIndex: 0,
							explanation: 'BY + ing: By planting.'
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}תקנו:\n{p:text}In order to ensuring a good harvest',
							options: [
								'In order to ensure a good harvest',
								'In order ensuring a good harvest',
								'In order to ensured a good harvest'
							],
							correctIndex: 0,
							explanation: 'אחרי to בא פועל בסיס: ensure.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'קודם מוצאים את הפעולה בטקסט. רק אחר כך מתאימים אותה לצורה By + ing. כתבו רק את ההמשך.'
						},
						{
							type: 'passage-quiz',
							text: 'Researchers wanted to know whether trees could reduce heat around school buildings. They compared temperatures in two playgrounds: one with several mature trees and one with almost no shade. At midday, the shaded playground was on average 4°C cooler. The researchers suggest that schools can make outdoor areas more comfortable without installing expensive cooling systems.',
							questions: [
								{
									prompt:
										'How can schools make playgrounds more comfortable? COMPLETE THE ANSWER: By ...',
									keywords: ['tree'],
									answerHint: '...planting or keeping mature trees that provide shade.'
								},
								{
									prompt:
										'How did the researchers examine the effect of trees? COMPLETE THE ANSWER: By ...',
									keywords: ['compar'],
									answerHint:
										'...comparing temperatures in a shaded playground and in one with almost no shade.'
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-open-answer',
		section: 'g-1',
		titleEn: 'Open Answer (ANSWER:)',
		required: ['g-by-ing'],
		requiredRounds: 2,
		position: {
			x: 0,
			y: 1570
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}בשאלת **ANSWER:** אין גזע. כותבים חופשי, אבל לפי כמה כללים.'
				},
				{
					type: 'summary',
					title: 'כללי ANSWER',
					lines: [
						'✍️ באנגלית בלבד',
						'1️⃣ Give ONE = רעיון אחד · Give TWO = שניים. לא יותר.',
						'📄 רק מהטקסט, בלי ידע כללי',
						'🔁 לא חוזרים על השאלה. נותנים מידע.',
						"🚫 לא משאירים ריק ולא כותבים I don't know"
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-quiz',
							text: 'V  The results of such programs go beyond technical skills. Junior employees who take part say they feel a stronger sense of purpose at work. "When younger and older colleagues share knowledge directly, both sides communicate more openly and young people see that their knowledge is valued," says Dr. Shapira. Levy agrees: "When younger and older employees work together, communication in mixed-age teams improves significantly."',
							questions: [
								{
									prompt:
										'According to paragraph V, how do junior employees who take part feel? ANSWER:',
									keywords: ['purpose'],
									answerHint: 'They feel a stronger sense of purpose at work.'
								}
							]
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}Why did several senior managers refuse to participate at first? ANSWER:\n\n{d:rtl}איזו תשובה תקבל ניכוי?',
							options: [
								'Because the program was boring and too long.',
								'They saw it as humiliating.',
								'Because they felt the program was humiliating.'
							],
							correctIndex: 0,
							explanation:
								'"boring and too long" לא כתוב בטקסט. מידע מומצא מוריד נקודות. שתי האחרות נתמכות בפסקה IV.'
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}תלמיד ענה על אותה שאלה: "כי הם הרגישו מושפלים." מה יקבל?',
							options: ['0 - התשובות נכתבות באנגלית', 'ניקוד מלא - התוכן נכון', 'חצי מהניקוד'],
							correctIndex: 0,
							explanation: 'גם תוכן נכון לא מקבל נקודות כשהוא בעברית.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'שימו לב למילת השאלה ולמספר הרעיונות שמבקשים. כתבו תשובה קצרה, רק עם מידע מהטקסט.'
						},
						{
							type: 'passage-quiz',
							text: 'For years, a small theatre struggled to attract younger audiences. Last year it began offering "pay what you can" performances once a month. Attendance among people under 30 increased sharply, but total income from those evenings was lower than on regular nights. The theatre nevertheless kept the program because many first-time visitors later returned and bought full-price tickets.',
							questions: [
								{
									prompt: 'What problem was the theatre trying to solve? ANSWER:',
									keywords: ['young'],
									answerHint: 'It had difficulty attracting younger audiences.'
								},
								{
									prompt: 'Why did the theatre decide to continue the program? ANSWER:',
									keywords: ['return'],
									answerHint:
										'Many first-time visitors later returned and bought full-price tickets.'
								}
							]
						},
						{
							type: 'passage-mcq',
							text: 'Attendance among people under 30 increased sharply, but total income from those evenings was lower than on regular nights.',
							questions: [
								{
									prompt: 'What disadvantage of the program is mentioned?',
									options: [
										'The theatre earned less on those evenings',
										'Fewer young people came to the theatre',
										'Tickets became more expensive',
										'The performances were shorter'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-paraphrase',
		section: 'g-1',
		titleEn: 'Paraphrasing',
		required: ['g-open-answer'],
		requiredRounds: 2,
		position: {
			x: -70,
			y: 1690
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}בגרות G מנסחת שאלות ותשובות **במילים אחרות** מהטקסט. צריך לזהות את אותו רעיון גם כשהמילים שונות.\n\n{d:rtl}הכלל: **משמעות לפני מילים.**'
				},
				{
					type: 'summary',
					title: 'הטקסט ← פרפרזה',
					lines: [
						'{d:ltr}"knowledge can also flow upward" → junior employees can teach senior ones',
						'{d:ltr}"feel embarrassed asking basic questions" → are uncomfortable showing what they do not know',
						'{d:ltr}"participation rose by 60%" → many more managers joined'
					]
				},
				{
					type: 'preface',
					text: '{p:callout}{d:rtl}אין כלל של כמה מילים להחליף. משנים ניסוח רק כשהמשמעות נשארת מדויקת.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'{d:rtl}איזו פרפרזה שומרת על המשמעות?\n{p:text}The traditional idea was always that experience flows downward.',
							options: [
								'Traditionally, people believed that experienced staff teach less experienced ones',
								'Traditionally, young workers always taught their managers',
								'Experience is no longer important at work',
								'Older workers never shared what they knew'
							],
							correctIndex: 0,
							explanation:
								'flows downward = עובר מהמנוסים לפחות מנוסים. השנייה הפוכה, והאחרונות מוסיפות רעיון שלא נאמר.'
						},
						{
							type: 'mcq',
							prompt:
								'{d:rtl}איזו פרפרזה שומרת על המשמעות?\n{p:text}Once the language changed, participation rose by 60%.',
							options: [
								'After the program was described differently, many more managers took part',
								'After the managers learned a new language, they joined the program',
								'60% of the managers refused to take part',
								'The sessions became 60% shorter'
							],
							correctIndex: 0,
							explanation:
								'language כאן = הניסוח של התוכנית, לא שפה זרה. rose by 60% = הרבה יותר השתתפו.'
						},
						{
							type: 'self-check',
							prompt:
								'כתבו במילים שלכם (באנגלית):\n{p:text}A one-on-one session with a younger colleague removes that pressure entirely.',
							modelAnswer:
								'Working alone with a younger colleague makes older employees feel completely comfortable asking questions.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle: 'הבינו את הרעיון, ואז מצאו את האפשרות שאומרת אותו במילים אחרות.'
						},
						{
							type: 'passage-mcq',
							text: 'A recent survey found that remote workers did not necessarily work fewer hours than office employees. In fact, many reported that the boundary between work and personal time had become less clear. Some said they checked messages late at night because they felt they should always be available.',
							questions: [
								{
									prompt:
										'"the boundary between work and personal time had become less clear" means:',
									options: [
										'It became harder to separate work time from private time',
										'They worked fewer hours than office workers',
										'Their homes were too small to work in',
										'Their personal lives became more important than work'
									],
									correctIndex: 0
								},
								{
									prompt: '"they felt they should always be available" means:',
									options: [
										'They believed they had to be reachable at all times',
										'They wanted more free time',
										'They were happy to work late',
										'They did not answer messages'
									],
									correctIndex: 0
								},
								{
									prompt: 'What can we understand about one possible disadvantage of remote work?',
									options: [
										"Work may continue into people's free time",
										'Remote workers earn less money',
										'Remote workers work fewer hours',
										'Messages are never answered at night'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-two-opinions',
		section: 'g-1',
		titleEn: 'Comparing Two Opinions',
		required: ['g-paraphrase'],
		requiredRounds: 2,
		position: {
			x: -100,
			y: 1810
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}לפעמים שואלים: **What opinion do X and Y share?**\n\n{d:rtl}כאן חייבים לקרוא **את שתי הדעות**. מי שקורא רק את X לא יודע מה משותף.'
				},
				{
					type: 'summary',
					title: 'שלושה צעדים',
					lines: [
						'1️⃣ מה X אומר? בשורה אחת.',
						'2️⃣ מה Y אומר? בשורה אחת.',
						'3️⃣ איזה רעיון שניהם תומכים בו? גם אם המילים שונות.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'{p:text}Dr. Shapira: "Older employees often feel embarrassed asking basic questions in a group setting. A one-on-one session with a younger colleague removes that pressure entirely."\n{p:text}CEO Levy: "We had to reframe it completely, not as \'your junior is teaching you\', but as \'two colleagues sharing expertise.\'"\n\nWhat opinion do Dr. Shapira and CEO Levy share?',
							options: [
								"The way the relationship between the colleagues is set up affects the program's success",
								'Older employees should learn in large groups',
								'Junior employees should be paid for teaching',
								'The program should be stopped'
							],
							correctIndex: 0,
							explanation:
								'Shapira: מפגש אחד על אחד מוריד את הלחץ. Levy: ניסוח מחדש של היחסים גרם לזה לעבוד. המשותף: האופן שבו מציגים את הקשר חשוב.'
						},
						{
							type: 'passage-mcq',
							text: 'V  The results of such programs go beyond technical skills. Junior employees who take part say they feel a stronger sense of purpose at work. "When younger and older colleagues share knowledge directly, both sides communicate more openly and young people see that their knowledge is valued," says Dr. Shapira. Levy agrees: "When younger and older employees work together, communication in mixed-age teams improves significantly."',
							questions: [
								{
									prompt: 'What opinion do Dr. Shapira and Levy share in paragraph V?',
									options: [
										'Working together improves communication between younger and older employees',
										'Mixed-age teams should be avoided',
										'Only senior managers benefit from the program',
										'Young employees should work alone'
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
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'כתבו לעצמכם במשפט קצר מה אומר כל דובר. אחר כך חפשו רעיון אחד ששניהם באמת תומכים בו.'
						},
						{
							type: 'passage-quiz',
							text: 'Dr. Amina Haddad says community projects succeed when residents are involved in planning them from the beginning: "People support changes they helped shape." Architect Ron Halevi agrees that participation matters, but adds that experts still need to set realistic limits: "Residents know what the neighborhood needs; professionals know what can actually be built."',
							questions: [
								{
									prompt: 'What opinion do Haddad and Halevi share? ANSWER:',
									keywords: ['resident'],
									answerHint:
										'Both believe residents should be involved in planning community projects.'
								}
							]
						},
						{
							type: 'passage-mcq',
							text: 'Dr. Amina Haddad says community projects succeed when residents are involved in planning them from the beginning: "People support changes they helped shape." Architect Ron Halevi agrees that participation matters, but adds that experts still need to set realistic limits: "Residents know what the neighborhood needs; professionals know what can actually be built."',
							questions: [
								{
									prompt: "In what way does Halevi's view add to Haddad's?",
									options: [
										'He adds that experts still need to set realistic limits',
										'He says residents should not take part',
										'He says professionals know what the neighborhood needs',
										'He says projects should be built quickly'
									],
									correctIndex: 0
								},
								{
									prompt: 'Which statement best summarizes their common position?',
									options: [
										'Local people should be involved, while professional knowledge also has a role',
										'Experts should make all decisions alone',
										'Community projects usually fail because residents disagree',
										'Building projects should avoid public discussion'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-line-refs',
		section: 'g-1',
		titleEn: 'Line References and Precision',
		required: ['g-two-opinions'],
		requiredRounds: 2,
		position: {
			x: -70,
			y: 1930
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}**Base your answer on lines 17-20** = מפה לאוצר. הגבולות כבר ידועים.\n\n{d:rtl}קוראים קודם את השורות האלה. חסר הקשר? מציצים במשפט שלפניהן, אבל עונים **מהשורות שהשאלה ביקשה**.'
				},
				{
					type: 'summary',
					title: 'מה מוריד נקודות',
					lines: [
						'1 · תשובה שאינה באנגלית',
						'2 · תשובה ריקה, או תשובה בלי מידע',
						'3 · מידע שסותר את הטקסט',
						'4 · מידע מומצא שהטקסט לא אומר',
						'5 · תשובה שלא עונה על מה ששאלו'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'{p:text}Why did several senior managers refuse to participate at first?\n\n{d:rtl}איזו תשובה תקבל ניקוד מלא?',
							options: [
								'Because they saw the program as humiliating.',
								'כי הם הרגישו מושפלים.',
								'Because they were bored and tired.',
								'Senior managers refused to participate at first.'
							],
							correctIndex: 0,
							explanation:
								'העברית מקבלת 0. bored and tired מומצא. האחרונה רק חוזרת על השאלה ולא נותנת מידע.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}Because they were bored and tired.\n\n{d:rtl}מה יקרה לתשובה הזו?',
							options: [
								'ניכוי - המידע לא כתוב בטקסט',
								'ניקוד מלא - זו סיבה הגיונית',
								'ניקוד מלא - היא באנגלית'
							],
							correctIndex: 0,
							explanation: 'סיבה הגיונית לא מספיקה. התשובה חייבת להיות נתמכת בטקסט.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle: 'קראו רק את השורות שהשאלה נותנת. ענו מהן, בלי להוסיף מידע מבחוץ.'
						},
						{
							type: 'passage-quiz',
							text: '(Lines 1-3) A city planted flowers beside several bus stops after residents complained that the areas looked neglected.\n\n(Lines 4-6) Six months later, researchers recorded less litter at the redesigned stops than at similar stops nearby.\n\n(Lines 7-9) The researchers cannot prove that flowers caused the change. They suggest that people may treat attractive public spaces with greater care.',
							questions: [
								{
									prompt: 'Base your answer on lines 4-6. What change did researchers observe?',
									keywords: ['litter'],
									answerHint: 'There was less litter at the redesigned bus stops.'
								},
								{
									prompt:
										'Base your answer on lines 7-9. Why are the researchers careful about their conclusion?',
									keywords: ['prove'],
									answerHint: 'They cannot prove that the flowers caused the change.'
								},
								{
									prompt: 'What explanation do they suggest for the change?',
									keywords: ['care'],
									answerHint: 'People may take better care of public spaces that look attractive.'
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: 'g-time',
		section: 'g-1',
		titleEn: 'Time Management',
		required: ['g-line-refs'],
		requiredRounds: 2,
		position: {
			x: 0,
			y: 2050
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}⏱️ הבחינה כולה: **שעה ו-45 דקות**.\n\n{d:rtl}חלוקה מומלצת: קריאה כ-55-60 דקות, כתיבה כ-40-45 דקות. התאימו לקצב שלכם.'
				},
				{
					type: 'summary',
					title: 'הזמן בחלק הקריאה',
					lines: [
						'🔍 סריקה - 3 דק׳: כותרת, פסקה ראשונה, משפטי פתיחה',
						'❓ שאלות - כ-45-50 דק׳, לפי רמת הקושי',
						'🔁 חזרה לשאלות שסימנתם - 5-7 דק׳',
						'✅ בדיקה - 3-5 דק׳: מספר תשובות, אנגלית, התאמה לגזע'
					]
				},
				{
					type: 'summary',
					title: 'סדר מומלץ',
					lines: [
						'⚡ קודם: שאלות אמריקאיות, Two Correct Answers, הפניות לשורות',
						'🐢 אחר כך: Complete the Answer, ANSWER:, שאלות imply / infer'
					]
				},
				{
					type: 'preface',
					text: '{p:callout}{i:warn}{d:rtl}שאלה מעכבת אתכם? סמנו אותה וחזרו בסוף. עדיף זמן לכל השאלות מאשר להיתקע על אחת.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: '{d:rtl}עברו 7 דקות על שאלה 3 ועדיין אין תשובה. מה עושים?',
							options: [
								'מסמנים אותה, ממשיכים, וחוזרים אליה בסוף',
								'ממשיכים לחפש עד שמוצאים',
								'משאירים ריק ולא חוזרים'
							],
							correctIndex: 0,
							explanation: 'שאלה אחת לא שווה את הזמן של כל השאר. חוזרים אליה עם ראש נקי.'
						},
						{
							type: 'mcq',
							prompt:
								'{d:rtl}שאלה 6 היא What does the writer imply? והיא לוקחת זמן. מה עושים קודם?',
							options: [
								'עונים על השאלות הישירות, ואז חוזרים אליה',
								'מתחילים ממנה כי היא הקשה ביותר',
								'מדלגים עליה לגמרי'
							],
							correctIndex: 0,
							explanation:
								'קודם צוברים נקודות קלות. שאלות imply דורשות חשיבה ומשאירים להן זמן בסוף.'
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}נשארו 4 דקות ו-3 שאלות בלי תשובה. מה העדיפות?',
							options: [
								'לכתוב תשובה קצרה ונתמכת לכל אחת',
								'לענות על אחת בצורה מושלמת',
								'לבדוק שוב את התשובות הקודמות'
							],
							correctIndex: 0,
							explanation: 'תשובה חלקית מקבלת יותר מתשובה ריקה.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle:
								'השעון רץ. התחילו בשאלות עם מספר או תשובה ישירה. השאירו את שאלת ה-infer לסוף.'
						},
						{
							type: 'passage-mcq',
							text: 'A college introduced reusable takeaway boxes in its cafeteria. Students pay a small deposit, take food in a box, and receive the deposit back when they return it. In the first semester, disposable-container use fell by 64%. However, staff discovered that many boxes were not returned within a week, so the college added reminder messages to its app. Return rates then improved.',
							label: 'REUSABLE BOXES',
							timerKey: 'g-time-boxes',
							questions: [
								{
									prompt: 'What percentage reduction was recorded?',
									options: ['64%', '6%', '46%', '100%'],
									correctIndex: 0
								},
								{
									prompt: 'Why did the college add app reminders?',
									options: [
										'Many boxes were not returned within a week',
										'Students lost their deposits',
										'The boxes were too expensive',
										'Students did not use the app'
									],
									correctIndex: 0
								},
								{
									prompt:
										'What can we infer about the deposit system before the reminders were added?',
									options: [
										'It reduced disposable use but did not make sure boxes came back quickly',
										'It did not reduce the use of disposable containers',
										'It made every student return the box on time',
										'It was cancelled after the first semester'
									],
									correctIndex: 0
								}
							]
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}באיזו שאלה מהטקסט האחרון היה כדאי לטפל **אחרונה**?',
							options: [
								'What can we infer about the deposit system before the reminders were added?',
								'What percentage reduction was recorded?',
								'Why did the college add app reminders?'
							],
							correctIndex: 0,
							explanation:
								'שאלת infer דורשת חיבור בין כמה פרטים. שאלת המספר והשאלה הישירה מהירות יותר.'
						}
					]
				}
			]
		}
	},
	{
		id: 'g-final',
		section: 'g-1',
		titleEn: 'Final Practice',
		required: ['g-time'],
		requiredRounds: 2,
		position: {
			x: 70,
			y: 2170
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}הגענו לתרגול המסכם 🎉\n\n{d:rtl}קודם טקסט מוכר עם כל סוגי השאלות. אחריו טקסט חדש ברמת בחינה.\n\n{d:rtl}בכל שאלה: מפה ← מבינים את השאלה ← מוצאים הוכחה ← עונים במדויק.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'opener',
							kicker: 'תרגול מודרך',
							level: 3,
							title: 'כל הטקסט: DIGITAL MENTORING AT WORK',
							subtitle: 'זוכרים את הכלים?'
						},
						{
							type: 'passage-mcq',
							text: '**DIGITAL MENTORING AT WORK**\n\nI  Sarah Mitchell has worked as a marketing director at DataLink for over twelve years. She is waiting in her office for a meeting with Ben Cohen, a 23-year-old recent graduate who joined the company just three months ago. Unlike most meetings Mitchell attends, this one was requested by her: she wants Cohen to teach her how to use the company\'s new digital marketing platform.\n\nII  The approach that Mitchell and Cohen are practicing is sometimes called "reverse digital mentoring." As technology changes faster than ever, companies are discovering that their youngest employees often have skills their most experienced managers lack. According to Dr. Noa Shapira of Tel Aviv University, this trend began quietly in the early 2010s and has since spread to companies of all sizes. "The traditional idea was always that experience flows downward," she explains. "What we are seeing now is that knowledge can also flow upward."\n\nIII  Companies that have adopted reverse digital mentoring report clear benefits. A recent survey of 300 managers across different industries found that 45% felt significantly more confident using digital tools after working with a younger colleague. According to Dr. Shapira, "Older employees often feel embarrassed asking basic questions in a group setting. A one-on-one session with a younger colleague removes that pressure entirely."\n\nIV  Despite its advantages, reverse digital mentoring is not without challenges. CEO Marcus Levy of GlobalNet recalls that several senior managers at first refused to participate. "They saw it as humiliating," he says. "We had to reframe it completely, not as \'your junior is teaching you\', but as \'two colleagues sharing expertise.\' Once the language changed, participation rose by 60%."\n\nV  The results of such programs go beyond technical skills. Junior employees who take part say they feel a stronger sense of purpose at work. "When younger and older colleagues share knowledge directly, both sides communicate more openly and young people see that their knowledge is valued," says Dr. Shapira. Levy agrees: "When younger and older employees work together, communication in mixed-age teams improves significantly."',
							questions: [
								{
									prompt: 'What can we understand from paragraph II?',
									options: [
										'The idea that knowledge only flows downward is being challenged',
										'Companies started replacing senior employees with younger ones',
										'Tel Aviv University began a digital mentoring program',
										'Most companies have adopted reverse digital mentoring'
									],
									correctIndex: 0
								},
								{
									prompt:
										'What did CEO Levy do after senior managers refused to participate? (paragraph IV)',
									options: [
										'He changed the way the program was described',
										'He cancelled the program',
										'He made participation compulsory',
										'He asked older managers to teach the juniors'
									],
									correctIndex: 0
								},
								{
									prompt: 'What does paragraph IV tell us about the word "humiliating"?',
									options: [
										'It describes how senior managers saw the program at first',
										'It is how Levy criticized his managers',
										'It shows that junior employees felt uncomfortable teaching',
										'It explains why DataLink stopped the program'
									],
									correctIndex: 0
								},
								{
									prompt:
										'According to paragraph IV, what happened after the language of the program was changed?',
									options: [
										'Participation rose by 60%',
										'45% of managers felt more confident',
										'Senior managers refused to participate',
										'The sessions became one-on-one'
									],
									correctIndex: 0
								},
								{
									prompt:
										'What can we understand from paragraph V about junior and senior employees?',
									options: [
										'The program improves communication across age groups',
										'Junior employees earn more after the program',
										'Senior employees choose the topics of each session',
										'Junior employees feel less confident after teaching'
									],
									correctIndex: 0
								}
							]
						},
						{
							type: 'passage-quiz',
							text: '**DIGITAL MENTORING AT WORK**\n\nIII  Companies that have adopted reverse digital mentoring report clear benefits. A recent survey of 300 managers across different industries found that 45% felt significantly more confident using digital tools after working with a younger colleague. According to Dr. Shapira, "Older employees often feel embarrassed asking basic questions in a group setting. A one-on-one session with a younger colleague removes that pressure entirely."\n\nV  The results of such programs go beyond technical skills. Junior employees who take part say they feel a stronger sense of purpose at work. "When younger and older colleagues share knowledge directly, both sides communicate more openly and young people see that their knowledge is valued," says Dr. Shapira. Levy agrees: "When younger and older employees work together, communication in mixed-age teams improves significantly."',
							questions: [
								{
									prompt:
										'Why do older employees find it difficult to ask questions in groups? COMPLETE THE ANSWER: Because they ...',
									keywords: ['embarrass'],
									answerHint: '...feel embarrassed asking basic questions in a group setting.'
								},
								{
									prompt:
										'What change does paragraph V describe in junior employees who take part? ANSWER:',
									keywords: ['purpose'],
									answerHint: 'They feel a stronger sense of purpose at work.'
								}
							]
						},
						{
							type: 'mcq',
							prompt:
								"{p:text}Sarah Mitchell has worked as a marketing director at DataLink for over twelve years. She is waiting in her office for a meeting with Ben Cohen, a 23-year-old recent graduate who joined the company just three months ago. Unlike most meetings Mitchell attends, this one was requested by her: she wants Cohen to teach her how to use the company's new digital marketing platform.\n\nWhat are we told in paragraph I? PUT A √ BY THE TWO CORRECT ANSWERS.",
							options: [
								'How long Mitchell has worked at DataLink',
								'Why Mitchell decided to join DataLink',
								'What Mitchell asked Ben Cohen to teach her',
								'How Ben Cohen found out about the job',
								'How many meetings Mitchell and Cohen have had'
							],
							correctIndices: [0, 2],
							explanation:
								'"for over twelve years" ו-"teach her how to use the platform". שאר האפשרויות לא מוזכרות.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2',
							level: 4,
							title: 'רמת בחינה',
							subtitle: 'טקסט חדש, באורך של בחינה. סרקו קודם, ואז ענו לפי הסדר המומלץ.'
						},
						{
							type: 'passage-mcq',
							text: '**THE QUIET VALUE OF "THIRD PLACES"**\n\nI  For much of the twentieth century, sociologists used the expression "third place" to describe informal public spaces that are neither home nor work. Cafés, libraries, parks and community centers can all serve this function. What matters is not the building itself but the kind of contact it allows. In a third place, people may meet neighbors, exchange information, or simply spend time around others without needing a formal reason to be there.\n\nII  Researchers have recently returned to the idea because daily routines have changed. Remote work, online shopping and digital entertainment have made it possible to complete many activities without leaving home. These conveniences save time, yet they may also reduce the number of unplanned encounters people have with those outside their immediate circle. Such encounters can seem insignificant, but some researchers argue that they help people feel connected to the places in which they live.\n\nIII  A team at Northbridge University examined this issue in three medium-sized cities. Rather than asking residents only how many friends they had, the researchers recorded how often participants visited shared public spaces and whether they recognized people they did not know personally. Participants who regularly used libraries, local markets or neighborhood cafés were more likely to report a sense of belonging. The researchers were careful, however, not to claim that visiting a café automatically makes people less lonely.\n\nIV  The study also found that design can influence whether a space becomes genuinely social. A beautiful square may remain empty if it is difficult to reach or offers nowhere comfortable to sit. By contrast, an ordinary library can become an important meeting point when it is open at convenient hours and provides areas for different age groups. According to urban planner Maya Chen, successful public spaces give people "a reason to stay, not merely a reason to pass through."\n\nV  Cost is another factor. Commercial spaces often expect visitors to buy something, which can exclude people with limited income. Public libraries and parks are different because people can usually remain there without spending money. For this reason, several cities have begun investing in small neighborhood facilities rather than concentrating all cultural services in large central buildings.\n\nVI  Supporters of such investment do not suggest that public spaces can solve social isolation on their own. Families, schools, workplaces and online communities all shape social life. Still, the renewed interest in third places reflects a broader question: as more activities move online, where will people continue to encounter those whose lives are different from their own? The answer may depend partly on whether cities preserve places in which simply being present is enough.',
							label: 'THIRD PLACES',
							timerKey: 'g-final-third',
							questions: [
								{
									prompt:
										'What did the Northbridge University researchers examine besides the number of friends participants had? (paragraph III)',
									options: [
										'How often participants visited shared public spaces',
										'How much money participants spent in cafés',
										'How many friends participants had online',
										'Which city participants preferred'
									],
									correctIndex: 0
								},
								{
									prompt: 'What can we infer from the final sentence of paragraph III?',
									options: [
										'Using public spaces and feeling you belong are not simply cause and effect',
										'The researchers believe cafés are the best solution to loneliness',
										'Lonely participants were not included in the study',
										'Libraries were less useful than cafés'
									],
									correctIndex: 0
								},
								{
									prompt:
										'What does "a reason to stay, not merely a reason to pass through" mean? (paragraph IV)',
									options: [
										'A good public space makes people want to spend time there, not just walk through it',
										'Public spaces should be built on main roads',
										'People should not stay long in libraries',
										'Every public space needs a café'
									],
									correctIndex: 0
								},
								{
									prompt:
										'What question is raised in paragraph VI about the future of social life?',
									options: [
										'Where people will keep meeting others whose lives are different from their own',
										'How cities can build more cafés',
										'Why families are less important today',
										'When online communities will replace schools'
									],
									correctIndex: 0
								}
							]
						},
						{
							type: 'passage-quiz',
							text: '**THE QUIET VALUE OF "THIRD PLACES"**\n\nI  For much of the twentieth century, sociologists used the expression "third place" to describe informal public spaces that are neither home nor work. Cafés, libraries, parks and community centers can all serve this function. What matters is not the building itself but the kind of contact it allows. In a third place, people may meet neighbors, exchange information, or simply spend time around others without needing a formal reason to be there.\n\nII  Researchers have recently returned to the idea because daily routines have changed. Remote work, online shopping and digital entertainment have made it possible to complete many activities without leaving home. These conveniences save time, yet they may also reduce the number of unplanned encounters people have with those outside their immediate circle. Such encounters can seem insignificant, but some researchers argue that they help people feel connected to the places in which they live.\n\nIII  A team at Northbridge University examined this issue in three medium-sized cities. Rather than asking residents only how many friends they had, the researchers recorded how often participants visited shared public spaces and whether they recognized people they did not know personally. Participants who regularly used libraries, local markets or neighborhood cafés were more likely to report a sense of belonging. The researchers were careful, however, not to claim that visiting a café automatically makes people less lonely.\n\nIV  The study also found that design can influence whether a space becomes genuinely social. A beautiful square may remain empty if it is difficult to reach or offers nowhere comfortable to sit. By contrast, an ordinary library can become an important meeting point when it is open at convenient hours and provides areas for different age groups. According to urban planner Maya Chen, successful public spaces give people "a reason to stay, not merely a reason to pass through."\n\nV  Cost is another factor. Commercial spaces often expect visitors to buy something, which can exclude people with limited income. Public libraries and parks are different because people can usually remain there without spending money. For this reason, several cities have begun investing in small neighborhood facilities rather than concentrating all cultural services in large central buildings.\n\nVI  Supporters of such investment do not suggest that public spaces can solve social isolation on their own. Families, schools, workplaces and online communities all shape social life. Still, the renewed interest in third places reflects a broader question: as more activities move online, where will people continue to encounter those whose lives are different from their own? The answer may depend partly on whether cities preserve places in which simply being present is enough.',
							questions: [
								{
									prompt:
										'Why have researchers become interested in third places again? (paragraph II) COMPLETE THE ANSWER: Because modern routines ...',
									keywords: ['home'],
									answerHint:
										'...allow many activities to be done without leaving home, and may reduce unplanned encounters.'
								},
								{
									prompt:
										'What advantage of libraries and parks over commercial spaces is mentioned in paragraph V? COMPLETE THE SENTENCE: People can usually ...',
									keywords: ['money'],
									answerHint: '...stay there without spending money.'
								}
							]
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}For much of the twentieth century, sociologists used the expression "third place" to describe informal public spaces that are neither home nor work. Cafés, libraries, parks and community centers can all serve this function. What matters is not the building itself but the kind of contact it allows. In a third place, people may meet neighbors, exchange information, or simply spend time around others without needing a formal reason to be there.\n\nWhat are we told about "third places" in paragraph I? PUT A √ BY THE TWO CORRECT ANSWERS.',
							options: [
								'They are always owned by local governments',
								'They are different from home and work',
								'They allow informal contact between people',
								'They were first created in the twenty-first century',
								'They must provide food and drinks'
							],
							correctIndices: [1, 2],
							explanation:
								'"neither home nor work" ו-"the kind of contact it allows". שאר האפשרויות לא כתובות, ו-twentieth century סותר את הרביעית.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}The study also found that design can influence whether a space becomes genuinely social. A beautiful square may remain empty if it is difficult to reach or offers nowhere comfortable to sit. By contrast, an ordinary library can become an important meeting point when it is open at convenient hours and provides areas for different age groups. According to urban planner Maya Chen, successful public spaces give people "a reason to stay, not merely a reason to pass through."\n\nAccording to paragraph IV, what can help a public space become social? PUT A √ BY THE TWO CORRECT ANSWERS.',
							options: [
								'It is easy to reach',
								'It has comfortable places to sit',
								'It is a beautiful square',
								'It is a large central building',
								'It expects visitors to buy something'
							],
							correctIndices: [0, 1],
							explanation:
								'כיכר יפה "may remain empty if it is difficult to reach or offers nowhere comfortable to sit". כלומר: נגישות וישיבה נוחה. יופי לבד לא מספיק.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 3 (רשות)',
							level: 4,
							title: 'תרגול נוסף',
							subtitle:
								'סימולציה מלאה על טקסט חדש: STUDY PODS. מתאים למי שרוצה עוד תרגול לפני הבחינה.'
						},
						{
							type: 'passage-quiz',
							text: '**STUDY PODS**\n\nI  In many cities, finding a quiet place to study has become surprisingly difficult. Cafés are busy, homes may be crowded, and public libraries often close early. In response, several municipalities have begun experimenting with small self-service study rooms placed in parks, transport stations and shopping areas. The rooms, sometimes called study pods, can be reserved through an app for periods of thirty to ninety minutes. They contain a desk, a chair, electricity and basic sound insulation.\n\nII  The first large pilot program was introduced in Riverton, where twelve pods were installed near bus and train stations. City officials expected commuters to use them mainly before or after work. Instead, usage data showed that university students made nearly 60% of all reservations. Many said the locations saved them a long trip to campus on days when they had only one online class or needed a short period of concentrated study.\n\nIII  The program has also revealed unexpected problems. Because the pods are unsupervised, some users leave rubbish behind or stay beyond their reserved time. Others reserve rooms but do not appear, preventing someone else from using the space. The city initially considered charging a fee for every reservation. However, student groups argued that this would reduce access for people with limited incomes. Officials chose a different approach: users now lose booking privileges temporarily if they repeatedly fail to appear or leave the room in poor condition.\n\nIV  Researchers at North Valley University are studying whether the pods actually improve learning. Their early findings suggest that users value the privacy and convenience, but the researchers warn against assuming that a quiet room automatically leads to better academic performance. Students still need effective study habits, and some tasks are better done collaboratively. The researchers are therefore comparing results from individual work in pods with results from group-study sessions in libraries.\n\nV  Despite these questions, other cities are interested in the idea. Riverton has received requests for information from more than twenty local authorities. Urban planner Elena Morris believes the main lesson is not that every city needs identical pods. Rather, she says, public spaces should respond to the changing ways people study and work. A successful solution in one neighborhood may be inappropriate in another. For that reason, she recommends collecting local data before deciding where, and whether, to install new study spaces.',
							questions: [
								{
									prompt: 'What problem led cities to experiment with study pods? ANSWER:',
									keywords: ['quiet'],
									answerHint: 'People had difficulty finding quiet places to study.'
								},
								{
									prompt:
										'Why did many university students find the pod locations useful? COMPLETE THE ANSWER: Because they ...',
									keywords: ['campus'],
									answerHint: '...could avoid a long trip to campus for a short period of study.'
								},
								{
									prompt:
										'Why did officials decide not to charge for every reservation? COMPLETE THE ANSWER: In order to ...',
									keywords: ['access'],
									answerHint: '...avoid reducing access for people with limited incomes.'
								},
								{
									prompt: 'What are the researchers comparing? (paragraph IV) ANSWER:',
									keywords: ['group'],
									answerHint:
										'Results from individual work in pods and from group-study sessions in libraries.'
								}
							]
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}The first large pilot program was introduced in Riverton, where twelve pods were installed near bus and train stations. City officials expected commuters to use them mainly before or after work. Instead, usage data showed that university students made nearly 60% of all reservations. Many said the locations saved them a long trip to campus on days when they had only one online class or needed a short period of concentrated study.\n\nWhat are we told about the Riverton pilot? PUT A √ BY THE TWO CORRECT ANSWERS.',
							options: [
								'It began on a university campus',
								'Twelve pods were installed',
								'Most reservations were made by commuters',
								'Students used the pods more than officials expected',
								'Every reservation lasted ninety minutes'
							],
							correctIndices: [1, 3],
							explanation:
								'הפודים הוצבו ליד תחנות, לא בקמפוס. הפקידים ציפו לנוסעים, אבל סטודנטים הזמינו כמעט 60%.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}The program has also revealed unexpected problems. Because the pods are unsupervised, some users leave rubbish behind or stay beyond their reserved time. Others reserve rooms but do not appear, preventing someone else from using the space. The city initially considered charging a fee for every reservation. However, student groups argued that this would reduce access for people with limited incomes. Officials chose a different approach: users now lose booking privileges temporarily if they repeatedly fail to appear or leave the room in poor condition.\n\nWhat TWO problems with the reservation system are mentioned? PUT A √ BY THE TWO CORRECT ANSWERS.',
							options: [
								'Some users stay beyond their reserved time',
								'Some users reserve rooms but do not appear',
								'Every reservation costs money',
								'The pods have no electricity',
								'Students cannot use the app'
							],
							correctIndices: [0, 1],
							explanation: 'הבעיות: נשארים מעבר לזמן, ומזמינים בלי להגיע. תשלום רק נשקל ולא הונהג.'
						},
						{
							type: 'passage-mcq',
							text: '**STUDY PODS**\n\nI  In many cities, finding a quiet place to study has become surprisingly difficult. Cafés are busy, homes may be crowded, and public libraries often close early. In response, several municipalities have begun experimenting with small self-service study rooms placed in parks, transport stations and shopping areas. The rooms, sometimes called study pods, can be reserved through an app for periods of thirty to ninety minutes. They contain a desk, a chair, electricity and basic sound insulation.\n\nII  The first large pilot program was introduced in Riverton, where twelve pods were installed near bus and train stations. City officials expected commuters to use them mainly before or after work. Instead, usage data showed that university students made nearly 60% of all reservations. Many said the locations saved them a long trip to campus on days when they had only one online class or needed a short period of concentrated study.\n\nIII  The program has also revealed unexpected problems. Because the pods are unsupervised, some users leave rubbish behind or stay beyond their reserved time. Others reserve rooms but do not appear, preventing someone else from using the space. The city initially considered charging a fee for every reservation. However, student groups argued that this would reduce access for people with limited incomes. Officials chose a different approach: users now lose booking privileges temporarily if they repeatedly fail to appear or leave the room in poor condition.\n\nIV  Researchers at North Valley University are studying whether the pods actually improve learning. Their early findings suggest that users value the privacy and convenience, but the researchers warn against assuming that a quiet room automatically leads to better academic performance. Students still need effective study habits, and some tasks are better done collaboratively. The researchers are therefore comparing results from individual work in pods with results from group-study sessions in libraries.\n\nV  Despite these questions, other cities are interested in the idea. Riverton has received requests for information from more than twenty local authorities. Urban planner Elena Morris believes the main lesson is not that every city needs identical pods. Rather, she says, public spaces should respond to the changing ways people study and work. A successful solution in one neighborhood may be inappropriate in another. For that reason, she recommends collecting local data before deciding where, and whether, to install new study spaces.',
							questions: [
								{
									prompt: 'What does the writer imply about a quiet study space in paragraph IV?',
									options: [
										'It may help, but study methods still matter',
										'It guarantees better grades',
										'It is useful only for individual tasks',
										'Researchers have stopped comparing study methods'
									],
									correctIndex: 0
								},
								{
									prompt: 'What opinion does Elena Morris express about study pods?',
									options: [
										'Cities should adapt solutions to local needs rather than copy identical pods',
										'Every city needs the same study pods',
										'Study pods should replace public libraries',
										'Riverton should stop the program'
									],
									correctIndex: 0
								},
								{
									prompt: 'What can we understand from the final paragraph about local data?',
									options: [
										'It should be collected before deciding whether and where to build study spaces',
										'It shows that pods work the same way everywhere',
										'It is collected by students in Riverton',
										'It is less important than the opinion of experts'
									],
									correctIndex: 0
								}
							]
						}
					]
				}
			]
		}
	}
];
