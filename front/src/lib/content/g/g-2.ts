// Module G, Part B - Writing: the 4-paragraph opinion essay.
// Source: Module_G_Writing_Templates.docx + Module_G_Opinion_Essay_AI_Worksheet.docx (partner package).
import type { LessonNode } from '../types';

export const g2Lessons: LessonNode[] = [
	{
		id: 'g-w-essay-map',
		section: 'g-2',
		titleEn: 'The 4-Paragraph Map',
		required: ['g-final'],
		requiredRounds: 2,
		position: {
			x: 0,
			y: 2410
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}בחלק הכתיבה של Module G כותבים **חיבור דעה**: עמדה ברורה ושתי סיבות שונות.\n\n{d:rtl}לפני שכותבים מילה, מתכננים כמה דקות.'
				},
				{
					type: 'summary',
					title: 'לפני שכותבים',
					lines: [
						'1 · מבינים בדיוק מה שואלים',
						'2 · בוחרים עמדה ברורה: בעד או נגד',
						'3 · חושבים על **שתי** סיבות שונות',
						'4 · מנסחים משפט תזה אחד',
						'5 · מתכננים ארבע פסקאות'
					]
				},
				{
					type: 'summary',
					title: 'מפת 4 הפסקאות',
					lines: [
						'1 · פתיחה: הנושא + עמדה ברורה (I believe that...)',
						'2 · סיבה ראשונה: משפט נושא + הסבר או דוגמה (First, ...)',
						'3 · סיבה שנייה: סיבה **שונה** + פיתוח, ואם יש - טיעון נגדי (Second, ...)',
						'4 · סיכום: חוזרים על העמדה, בלי רעיון חדש (In conclusion, ...)'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '{d:rtl}השאלה:\n{p:text}It has been suggested that the use of AI for school purposes should be banned among high school students. What do you think?\n{d:rtl}נקרא חיבור לדוגמה, פסקה אחרי פסקה.'
						},
						{
							type: 'mcq',
							prompt:
								"{p:text}Artificial intelligence is part of students' lives, and schools are debating whether it should be banned for schoolwork. I believe that a ban is not the right solution because AI can support learning when it is used responsibly.\n\n{d:rtl}איזה משפט הוא **התזה**?",
							options: [
								'I believe that a ban is not the right solution because AI can support learning when it is used responsibly.',
								"Artificial intelligence is part of students' lives, and schools are debating whether it should be banned for schoolwork."
							],
							correctIndex: 0,
							explanation:
								'התזה היא המשפט שאומר את העמדה (I believe that...). המשפט הראשון רק מציג את הנושא.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}Second, schools should teach students how to use AI correctly. If teachers set clear rules, students will learn when AI is helpful and when using it becomes cheating. Never should students submit AI-generated work as their own.\n\n{d:rtl}מה התפקיד של הפסקה הזו?',
							options: ['סיבה שנייה, שונה מהראשונה', 'סיכום', 'פתיחה', 'דוגמה לסיבה הראשונה'],
							correctIndex: 0,
							explanation:
								'Second פותח סיבה חדשה: ללמד שימוש נכון. הסיבה הראשונה הייתה עזרה בהבנה ובכתיבה.'
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}איזה משפט **לא** מתאים לפסקת הסיכום?',
							options: [
								'Another reason is that AI is cheap for every family.',
								'In conclusion, schools should regulate AI rather than ban it.',
								'To sum up, a ban is not the right solution.'
							],
							correctIndex: 0,
							explanation: 'בסיכום לא מוסיפים סיבה חדשה. חוזרים על העמדה במילים אחרות.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}It has been suggested that the use of AI for school purposes should be banned among high school students. What do you think?\n\n{d:rtl}איזו תזה עונה ישירות על השאלה?',
							options: [
								'I believe that AI should not be banned for schoolwork, because it can support learning.',
								'AI is a very interesting technology.',
								'Many people use AI at work today.'
							],
							correctIndex: 0,
							explanation:
								'התזה חייבת לענות על השאלה: לאסור או לא. שתי האחרות נכונות, אבל לא אומרות עמדה.'
						}
					]
				},
				{
					screens: [
						{
							type: 'cloze-pick',
							clause: ' schools should not ban AI for schoolwork.',
							options: ['I believe that', 'For example,', 'In conclusion,', 'Second,'],
							correctIndices: [0],
							explanation:
								'פסקת הפתיחה מציגה עמדה: I believe that. For example בא בתוך סיבה, In conclusion בסיכום.'
						},
						{
							type: 'writing-task',
							prompt: 'Write a thesis sentence for the AI question: your position + one reason.',
							wordBank: ['I believe that', 'should', 'because'],
							modelAnswer:
								'I believe that AI should not be banned for schoolwork because it can help students understand difficult material.',
							checklist: [
								'העמדה ברורה: בעד או נגד איסור',
								'יש סיבה אחת אחרי because',
								'המשפט עונה על השאלה עצמה'
							],
							requiredMoves: ['stance', 'because'],
							minSentences: 1,
							minWordsUsed: 2
						}
					]
				}
			]
		}
	},
	{
		id: 'g-w-present-perfect',
		section: 'g-2',
		titleEn: 'Present Perfect',
		required: ['g-w-essay-map'],
		requiredRounds: 2,
		position: {
			x: 70,
			y: 2530
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}שלושה מבנים מעלים את רמת השפה בחיבור: **Present Perfect**, **תנאי** ו**היפוך**. מתחילים מהראשון.\n\n{p:callout}{i:warn}{d:rtl}בוחרים מבנה שאתם שולטים בו. משפט נכון וברור עדיף על משפט מסובך עם טעויות.'
				},
				{
					type: 'summary',
					title: 'Present Perfect · have / has + V3',
					lines: [
						'{d:ltr}In recent years, online learning **has become** very common.',
						'{d:ltr}Many people **have realized** that sleep matters.',
						'{d:ltr}Technology **has changed** the way we study.',
						'מתאים לפתיחה: משהו שהתחיל בעבר ועדיין נכון היום. has עם he / she / it ושם יחיד.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'cloze-pick',
							clause: ' the way teenagers communicate.',
							options: [
								'Social media has changed',
								'Social media have change',
								'Social media changing',
								'Social media has change'
							],
							correctIndices: [0],
							explanation:
								'has + V3: has changed. בלי has אין Present Perfect, ו-change בלי d אינו V3.'
						},
						{
							type: 'cloze-pick',
							clause: ' that regular exercise improves their mood.',
							options: [
								'Many people have realized',
								'Many people has realized',
								'Many people have realize',
								'Many people realizing'
							],
							correctIndices: [0],
							explanation: 'people = רבים, לכן have. אחריו V3: realized.'
						},
						{
							type: 'cloze-pick',
							clause: ' an important issue in schools.',
							options: [
								'In recent years, AI has become',
								'In recent years, AI have become',
								'In recent years, AI has became',
								'In recent years, AI becoming'
							],
							correctIndices: [0],
							explanation: 'AI = יחיד, לכן has. ה-V3 של become הוא become (לא became).'
						}
					]
				},
				{
					screens: [
						{
							type: 'writing-task',
							prompt:
								'Write an opening (2 sentences) for: "Should schools ban phones during the school day?" Sentence 1: the topic, with the Present Perfect. Sentence 2: your opinion.',
							wordBank: ['In recent years', 'has become', 'I believe that', 'because'],
							modelAnswer:
								'In recent years, phone use in class has become a serious issue. I believe that schools should ban phones during lessons because they distract students.',
							checklist: [
								'משפט 1 עם has / have + V3',
								'משפט 2 אומר עמדה ברורה',
								'שני המשפטים על הנושא של השאלה'
							],
							requiredMoves: ['stance'],
							wordCounter: true,
							minSentences: 2,
							minWordsUsed: 2
						}
					]
				}
			]
		}
	},
	{
		id: 'g-w-conditional',
		section: 'g-2',
		titleEn: 'First Conditional',
		required: ['g-w-present-perfect'],
		requiredRounds: 2,
		position: {
			x: 100,
			y: 2650
		},
		big: false,
		content: {
			preface: [
				{
					type: 'summary',
					title: 'If + הווה, will + פועל',
					lines: [
						'{d:ltr}If teachers **set** clear rules, students **will use** AI more responsibly.',
						'{d:ltr}If people **exercise** regularly, they **will feel** healthier.',
						'אחרי If - הווה פשוט, בלי will. בחלק השני - will + פועל בסיס.',
						'מראה סיבה ותוצאה. מתאים לסיבה השנייה.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'cloze-pick',
							clause: ' clear rules, students will use AI more responsibly.',
							options: [
								'If teachers set',
								'If teachers will set',
								'If teachers setting',
								'If teachers sets'
							],
							correctIndices: [0],
							explanation: 'אחרי If לא כותבים will. teachers = רבים, לכן set בלי s.'
						},
						{
							type: 'cloze-pick',
							clause: ' healthier and more energetic.',
							options: [
								'If people exercise regularly, they will feel',
								'If people will exercise regularly, they feel',
								'If people exercise regularly, they will feeling',
								'If people exercises regularly, they will feel'
							],
							correctIndices: [0],
							explanation: 'If + הווה (exercise), ואז will + פועל בסיס (will feel).'
						},
						{
							type: 'mcq',
							prompt:
								'{d:rtl}מה הטעות?\n{p:text}If schools will encourage volunteering, students will learn responsibility.',
							options: ['will encourage ← encourage', 'students ← student', 'learn ← learning'],
							correctIndex: 0,
							explanation:
								'אחרי If לא בא will: If schools encourage volunteering, students will learn...'
						}
					]
				},
				{
					screens: [
						{
							type: 'writing-task',
							prompt: 'Write ONE If-sentence: what will happen if schools encourage volunteering?',
							wordBank: ['If schools encourage', 'students will'],
							modelAnswer:
								'If schools encourage volunteering, students will become more responsible and more caring.',
							checklist: [
								'אחרי If אין will',
								'בחלק השני יש will + פועל בסיס',
								'התוצאה הגיונית ומתאימה לנושא'
							],
							minSentences: 1,
							minWordsUsed: 2
						}
					]
				}
			]
		}
	},
	{
		id: 'g-w-inversion',
		section: 'g-2',
		titleEn: 'Inversion',
		required: ['g-w-conditional'],
		requiredRounds: 2,
		position: {
			x: 70,
			y: 2770
		},
		big: false,
		content: {
			preface: [
				{
					type: 'summary',
					title: 'היפוך: Not only · Only by · Never',
					lines: [
						'{d:ltr}**Not only does** exercise improve our health, **but it also** reduces stress.',
						'{d:ltr}**Only by** working together **can we** solve the problem.',
						'{d:ltr}**Never should** students submit AI work as their own.',
						'אחרי הביטוי, פועל העזר בא **לפני** הנושא, כמו בשאלה.'
					]
				},
				{
					type: 'preface',
					text: '{d:rtl}איך בונים? מתחילים ממשפט רגיל:\n{p:text}Exercise improves our health.\n{d:rtl}מוסיפים does לפני הנושא, והפועל חוזר לצורת הבסיס:\n{p:text}Not only **does** exercise **improve** our health, but it also reduces stress.'
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'cloze-pick',
							clause:
								' technology make communication easier, but it also gives us access to information.',
							options: ['Not only does', 'Not only', 'Not only is', 'Not only do'],
							correctIndices: [0],
							explanation: 'technology = יחיד, הפועל make בבסיס, לכן does.'
						},
						{
							type: 'cloze-pick',
							clause: ' we solve this problem.',
							options: [
								'Only by working together can',
								'Only by working together we can',
								'Only by work together can',
								'Only working together by can'
							],
							correctIndices: [0],
							explanation: 'Only by + ing, ואז can לפני we.'
						},
						{
							type: 'cloze-pick',
							clause:
								' has technology made communication easier, but it has also changed how we learn.',
							options: ['Not only', 'Not only does', 'Never', 'Only by'],
							correctIndices: [0],
							explanation: 'כאן has כבר עומד לפני הנושא, אז לא מוסיפים does.'
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}איזה משפט נכון?',
							options: [
								'Not only does AI help students, but it also saves time.',
								'Not only AI helps students, but it also saves time.',
								'Not only does AI helps students, but it also saves time.'
							],
							correctIndex: 0,
							explanation: 'does לפני הנושא, ואחריו פועל בסיס (help, בלי s).'
						}
					]
				},
				{
					screens: [
						{
							type: 'writing-task',
							prompt: 'Write ONE Not only sentence about reading books: give two benefits.',
							wordBank: ['Not only does', 'but it also'],
							modelAnswer:
								'Not only does reading improve our vocabulary, but it also helps us relax.',
							checklist: [
								'does בא לפני הנושא',
								'אחרי does פועל בסיס, בלי s',
								'שני היתרונות שונים זה מזה'
							],
							minSentences: 1,
							minWordsUsed: 2
						}
					]
				}
			]
		}
	},
	{
		id: 'g-w-templates',
		section: 'g-2',
		titleEn: 'Templates by Question Type',
		required: ['g-w-inversion'],
		requiredRounds: 2,
		position: {
			x: 0,
			y: 2890
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}בכל התבניות אותו שלד: פתיחה עם עמדה, שתי סיבות, סיכום. מה שמשתנה: **פתיחי המשפטים**.\n\n{p:callout}{d:rtl}מתאימים את התבנית לשאלה. לא מעתיקים מילים שלא מתאימות לנושא.'
				},
				{
					type: 'summary',
					title: '4 תבניות',
					lines: [
						'1 · דעה כללית / בעד-נגד: Do you think...? Should...?',
						'2 · בתי ספר, הורים, ממשלה: חינוך, כללים, התנדבות',
						'3 · טכנולוגיה, רשתות, חיים מודרניים',
						'4 · בעיה ופתרון: לחץ, בריונות, בטיחות בדרכים'
					]
				},
				{
					type: 'summary',
					title: 'תבנית האב',
					lines: [
						'{d:ltr}In recent years, ... has become ... In my opinion, ... for two main reasons.',
						'{d:ltr}First of all, ... Not only does ..., but it also ... For example, ...',
						'{d:ltr}In addition, ... Many people have realized that ... If ..., ... will ...',
						'{d:ltr}In conclusion, I strongly believe that ... Only by ... can we ...'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'{p:text}Many teenagers suffer from stress before exams. What can be done about it?\n\n{d:rtl}איזו תבנית הכי מתאימה?',
							options: ['בעיה ופתרון', 'טכנולוגיה וחיים מודרניים', 'בתי ספר, הורים, ממשלה'],
							correctIndex: 0,
							explanation:
								'השאלה מציגה בעיה ומבקשת מה לעשות. תבנית 4: One major problem is... One possible solution is...'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}Should schools require students to do community service?\n\n{d:rtl}איזו תבנית הכי מתאימה?',
							options: ['בתי ספר, הורים, ממשלה', 'בעיה ופתרון', 'טכנולוגיה וחיים מודרניים'],
							correctIndex: 0,
							explanation:
								'השאלה על מה שבית הספר צריך לעשות. תבנית 2: In my opinion, schools should...'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}How has technology changed the way we learn? Is it for the better?\n\n{d:rtl}איזו תבנית הכי מתאימה?',
							options: ['טכנולוגיה וחיים מודרניים', 'בעיה ופתרון', 'בתי ספר, הורים, ממשלה'],
							correctIndex: 0,
							explanation:
								'תבנית 3: Technology has changed the way we... Although some people believe...'
						},
						{
							type: 'cloze-pick',
							clause: ' is to give students one quiet study period every day.',
							options: [
								'One possible solution',
								'One major problem',
								'In recent years,',
								'Not only does'
							],
							correctIndices: [0],
							explanation: 'הצעה למה לעשות = solution. problem מתאר את הבעיה, לא את הפתרון.'
						}
					]
				},
				{
					screens: [
						{
							type: 'writing-task',
							prompt:
								'"Many teenagers suffer from stress before exams. What can be done?" Write the problem paragraph and the solution paragraph (50-80 words). Use one If-sentence.',
							wordBank: [
								'One major problem is that',
								'Not only does',
								'One possible solution is to',
								'If'
							],
							modelAnswer:
								'One major problem is that students have many exams in the same week. Not only does this make them tired, but it also hurts their sleep. One possible solution is to spread the exams over the whole term. If schools plan the exams better, students will have time to rest and prepare. For example, a school can hold no more than two exams a week.',
							checklist: [
								'יש פסקת בעיה ופסקת פתרון',
								'יש משפט If נכון',
								'הפתרון קשור ישירות לבעיה',
								'50-80 מילים'
							],
							minSentences: 1,
							minWordsUsed: 3,
							minWords: 50,
							maxWords: 80
						}
					]
				}
			]
		}
	},
	{
		id: 'g-w-body',
		section: 'g-2',
		titleEn: 'Body Paragraph and Counter-Argument',
		required: ['g-w-templates'],
		requiredRounds: 2,
		position: {
			x: -70,
			y: 3010
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}בחיבור של 120-140 מילים כל סיבה מקבלת **פסקה**. משפט אחד לא מספיק: הבודק מחפש **רעיון מפותח**, כלומר טענה עם הסבר ודוגמה.'
				},
				{
					type: 'summary',
					title: 'פסקת סיבה ב-3 צעדים',
					lines: [
						'1 · משפט נושא - הסיבה עצמה (First, ... / Second, ...)',
						'2 · הסבר - למה זה נכון? (This is because ... / As a result, ...)',
						'3 · דוגמה - מקרה מוחשי (For example, ...)'
					]
				},
				{
					type: 'summary',
					title: 'טיעון נגדי בשני משפטים',
					lines: [
						'{d:ltr}Some people argue that ... However, ...',
						'מציגים את הצד השני במשפט אחד ועונים לו מיד. זה מחזק את העמדה, לא מחליש אותה.',
						'המקום: סוף פסקה 3, לפני הסיכום. לא פסקה נפרדת, כך שנשארות 4 פסקאות.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'{p:text}First, phones distract students during lessons. Phones are really bad for school.\n\n{d:rtl}מה חסר בפסקה?',
							options: [
								'הסבר ודוגמה: למה ואיך זה קורה',
								'משפט נושא עם הסיבה',
								'מילת פתיחה כמו First'
							],
							correctIndex: 0,
							explanation:
								'משפט הנושא קיים (First, phones distract...). "Phones are really bad" לא מסביר כלום, רק חוזר על העמדה. חסרים This is because... ו-For example...'
						},
						{
							type: 'order',
							prompt: '{d:rtl}סדרו את הפסקה: משפט נושא, הסבר, דוגמה.',
							tiles: [
								'First, phones distract students during lessons.',
								'This is because every new message pulls their attention away from the teacher.',
								'For example, a student who checks one notification can miss a whole explanation.'
							],
							explanation: 'קודם הטענה, אחר כך למה היא נכונה, ובסוף מקרה מוחשי שמראה אותה.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}Some people argue that students need phones in case of an emergency.\n\n{d:rtl}איזה משפט עונה לטיעון הנגדי הכי טוב?',
							options: [
								[
									'However, parents can always reach their children through the school office.',
									'נכון. However מסמן שעונים לצד השני, והתשובה מראה שאפשר להסתדר גם בלי טלפון.'
								],
								[
									'However, phones are very bad.',
									'However במקום, אבל very bad לא עונה לטענה על מקרי חירום.'
								],
								[
									'For example, many students have phones.',
									'זו לא תשובה לטיעון. For example מדגים, הוא לא עונה.'
								],
								[
									'In conclusion, phones should be banned.',
									'זה משפט סיכום. לטיעון נגדי עונים מיד, בתוך הפסקה.'
								]
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}איפה מקומו של הטיעון הנגדי בחיבור של 4 פסקאות?',
							options: [
								'בסוף פסקה 3, לפני הסיכום',
								'בפסקה חמישית נפרדת',
								'בפסקת הסיכום, כרעיון חדש'
							],
							correctIndex: 0,
							explanation: 'כך המבנה נשאר 4 פסקאות, והסיכום רק חוזר על העמדה בלי רעיון חדש.'
						}
					]
				},
				{
					screens: [
						{
							type: 'writing-task',
							prompt:
								'Write the second reason paragraph for: "Should schools ban phones during the school day?" Reason: phones hurt concentration. Write a topic sentence, an explanation, an example, a counter-argument and your answer to it (5 sentences).',
							wordBank: [
								'Second,',
								'This is because',
								'For example,',
								'Some people argue that',
								'However,'
							],
							modelAnswer:
								"Second, phones make it hard for students to concentrate in class. This is because every notification pulls their attention away from the lesson. For example, a student who checks one message can miss the teacher's whole explanation of a new topic. Some people argue that students need phones in case of an emergency. However, parents can always reach their children through the school office.",
							checklist: [
								'משפט נושא שאומר את הסיבה',
								'הסבר: למה זה קורה',
								'דוגמה מוחשית אחרי For example',
								'טיעון נגדי, ותשובה שמתחילה ב-However'
							],
							requiredMoves: ['in-addition', 'because', 'for-example'],
							wordCounter: true,
							minSentences: 5,
							minWordsUsed: 4
						}
					]
				}
			]
		}
	},
	{
		id: 'g-w-ai-essay',
		section: 'g-2',
		titleEn: 'Full Essay: AI at School',
		required: ['g-w-body'],
		requiredRounds: 2,
		position: {
			x: -100,
			y: 3130
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}השאלה:\n{p:text}It has been suggested that the use of AI for school purposes should be banned among high school students. What do you think?\n{d:rtl}הוצע לאסור על תלמידי תיכון להשתמש בבינה מלאכותית לצורכי לימודים. מה דעתכם?'
				},
				{
					type: 'summary',
					title: 'מילים שימושיות',
					lines: [
						'{d:ltr}ban - לאסור · regulate - להסדיר, לפקח',
						'{d:ltr}responsibly - באחריות · cheating - רמאות, העתקה',
						'{d:ltr}independent thinking - חשיבה עצמאית · feedback - משוב',
						'{d:ltr}set clear rules - לקבוע כללים ברורים'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt:
								'{p:text}First, AI can help students understand difficult material and improve their writing. Many students have used AI to receive explanations, vocabulary support, and feedback. However, they must still think independently and produce original work.\n\n{d:rtl}איזה מבנה מתקדם יש בפסקה?',
							options: ['Present Perfect: have used', 'תנאי: If', 'היפוך: Never should'],
							correctIndex: 0,
							explanation: 'Many students have used AI = have + V3.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}Second, schools should teach students how to use AI correctly. If teachers set clear rules, students will learn when AI is helpful and when using it becomes cheating. Never should students submit AI-generated work as their own.\n\n{d:rtl}אילו שני מבנים יש בפסקה? סמנו שניים.',
							options: [
								'תנאי: If teachers set clear rules, students will learn',
								'היפוך: Never should students submit',
								'Present Perfect',
								'Not only... but also'
							],
							correctIndices: [0, 1],
							explanation: 'If + הווה, will + פועל. Never should + נושא = היפוך.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}In conclusion, schools should regulate AI rather than ban it. Responsible use can strengthen learning while protecting honesty and independent thinking.\n\n{d:rtl}למה הסיכום טוב?',
							options: [
								'חוזר על העמדה במילים אחרות, בלי סיבה חדשה',
								'מוסיף סיבה שלישית',
								'מעתיק את התזה מילה במילה'
							],
							correctIndex: 0,
							explanation: 'ban → regulate rather than ban: אותה עמדה, ניסוח חדש.'
						}
					]
				},
				{
					screens: [
						{
							type: 'self-check',
							prompt:
								'Plan your essay in English: your position, your thesis, Reason 1, Reason 2 (one line each).',
							modelAnswer:
								'Position: NO, do not ban AI.\nThesis: I believe that a ban is not the right solution because AI can support learning.\nReason 1: AI helps students understand difficult material.\nReason 2: Schools should teach how to use AI correctly.'
						},
						{
							type: 'writing-task',
							prompt:
								'It has been suggested that the use of AI for school purposes should be banned among high school students. What do you think? Write a 4-paragraph opinion essay (120-140 words). Use the Present Perfect, one If-sentence and one inversion.',
							wordBank: [
								'I believe that',
								'First,',
								'Second,',
								'In conclusion,',
								'have',
								'If',
								'Not only'
							],
							modelAnswer:
								"Artificial intelligence is part of students' lives, and schools are debating whether it should be banned for schoolwork. I believe that a ban is not the right solution because AI can support learning when it is used responsibly.\n\nFirst, AI can help students understand difficult material and improve their writing. Many students have used AI to receive explanations, vocabulary support, and feedback. However, they must still think independently and produce original work.\n\nSecond, schools should teach students how to use AI correctly. If teachers set clear rules, students will learn when AI is helpful and when using it becomes cheating. Never should students submit AI-generated work as their own.\n\nIn conclusion, schools should regulate AI rather than ban it. Responsible use can strengthen learning while protecting honesty and independent thinking.",
							checklist: [
								'עמדה ברורה בפסקה 1',
								'שתי סיבות שונות, לכל אחת משפט נושא',
								'Present Perfect, תנאי והיפוך - כל אחד פעם אחת',
								'בסיכום אין סיבה חדשה',
								'120-140 מילים'
							],
							requiredMoves: ['stance', 'in-conclusion'],
							timeLimitMinutes: 40,
							minSentences: 1,
							minWordsUsed: 4,
							minWords: 120,
							maxWords: 140
						}
					]
				}
			]
		}
	},
	{
		id: 'g-w-timed-essay',
		section: 'g-2',
		titleEn: 'Timed Essay: A New Topic',
		required: ['g-w-ai-essay'],
		requiredRounds: 2,
		position: {
			x: -70,
			y: 3250
		},
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: '{d:rtl}עד עכשיו כתבתם על נושאים שראיתם קודם. בבחינה הנושא **חדש**. כאן מתרגלים בדיוק את זה: שאלה שלא ראיתם, בלי חיבור לדוגמה, 40 דקות.'
				},
				{
					type: 'summary',
					title: 'איך בודקים את החיבור (40 נק׳)',
					lines: [
						'📋 תוכן וארגון - 8: עונים על השאלה, רעיונות מפותחים, מבנה ברור',
						'🔤 אוצר מילים - 10: מילים מגוונות ומדויקות',
						'🧩 שימוש בשפה - 16: דקדוק ומבנים. החלק הגדול ביותר',
						'✏️ מכניקה - 6: כתיב, פיסוק ואותיות גדולות'
					]
				},
				{
					type: 'summary',
					title: 'אורך: 120-140 מילים',
					lines: [
						'110-119 מילים ← 2 נקודות פחות',
						'100-109 ← 4 · 90-99 ← 8 · 80-89 ← 12',
						'פחות מ-50 מילים ← 0 על כל החיבור'
					]
				},
				{
					type: 'summary',
					title: 'סדר העבודה ב-40 דקות',
					lines: [
						'5 דק׳ - מבינים את השאלה, בוחרים עמדה ושתי סיבות שונות',
						'30 דק׳ - כותבים 4 פסקאות',
						'5 דק׳ - בודקים: מספר מילים, עמדה ברורה, אין רעיון חדש בסיכום, כתיב'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'mcq',
							prompt: '{d:rtl}איזה חלק שווה הכי הרבה נקודות בחיבור?',
							options: ['שימוש בשפה: דקדוק ומבנים', 'מכניקה: כתיב ופיסוק', 'אוצר מילים'],
							correctIndex: 0,
							explanation:
								'16 מתוך 40. לכן מבנים כמו Present Perfect, תנאי והיפוך שווים את המאמץ, כשהם נכונים.'
						},
						{
							type: 'mcq',
							prompt: '{d:rtl}כתבתם חיבור של 112 מילים. מה יקרה?',
							options: ['יורדות 2 נקודות', 'החיבור מקבל 0', 'אין הורדה'],
							correctIndex: 0,
							explanation: '110-119 מילים = 2 נקודות פחות. רק מתחת ל-50 מילים החיבור מקבל 0.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}Some people believe that high school students should be allowed to choose some of their subjects. Do you agree?\n\n{d:rtl}איזה משפט פתיחה עונה על השאלה?',
							options: [
								[
									'I believe that students should be allowed to choose some of their subjects because it makes them more motivated.',
									'נכון. עמדה ברורה (should be allowed) וסיבה אחרי because.'
								],
								[
									'School subjects are an interesting topic for many teenagers.',
									'אין כאן עמדה. המשפט מציג נושא, אבל לא עונה: כן או לא?'
								],
								[
									'I believe that students should study hard in every subject.',
									'יש עמדה, אבל על שאלה אחרת. שואלים על בחירת מקצועות, לא על השקעה.'
								]
							],
							correctIndex: 0
						}
					]
				},
				{
					screens: [
						{
							type: 'self-check',
							prompt:
								'Plan your essay in English (5 minutes): your position, your thesis, Reason 1, Reason 2 and a counter-argument, one line each.\n{p:text}Some people believe that high school students should be allowed to choose some of their subjects. Do you agree?',
							modelAnswer:
								'Position: YES or NO, one word.\nThesis: I believe that ... because ...\nReason 1: one idea + an example you can explain.\nReason 2: a different idea, not Reason 1 in other words.\nCounter-argument: Some people argue that ... However, ...'
						},
						{
							type: 'writing-task',
							prompt:
								'Some people believe that high school students should be allowed to choose some of their subjects. Do you agree? Give reasons to explain your opinion. Write a 4-paragraph opinion essay (120-140 words).',
							modelAnswer:
								'In recent years, many schools have started to offer students more choice. I believe that high school students should be allowed to choose some of their subjects because it makes learning more meaningful.\n\nFirst, students work harder when they study what interests them. A student who loves biology will spend extra hours on it without being asked. For example, my cousin chose an advanced science track and raised her grades within one year.\n\nSecond, choosing subjects prepares teenagers for adult life. If students make these decisions at school, they will be ready for bigger decisions later. Some people argue that teenagers are too young to choose. However, teachers and counselors can help them make wise choices.\n\nIn conclusion, not only does choice motivate students, but it also teaches them to take responsibility for their own learning.',
							gradingNotes:
								'A clear YES or NO on letting high school students choose some of their subjects, two different reasons, each explained or supported. Off-topic: writing only about which subjects the student likes.',
							checklist: [
								'עמדה ברורה בפסקה הראשונה',
								'שתי סיבות שונות, לכל אחת הסבר או דוגמה',
								'טיעון נגדי עם However בסוף פסקה 3',
								'בסיכום אין רעיון חדש',
								'120-140 מילים'
							],
							requiredMoves: ['stance', 'in-conclusion'],
							timeLimitMinutes: 40,
							minSentences: 1,
							minWordsUsed: 0,
							minWords: 120,
							maxWords: 140
						}
					]
				}
			]
		}
	}
];
