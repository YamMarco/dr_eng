// Module D, unit 4: Thank You, Ma'am - Langston Hughes (1958).
// Source: EngUp_Literature_Developer_Package (04_Data/module_D/unit4_thank_you_maam.json).
import type { LessonNode } from '../types';

export const d4Lessons: LessonNode[] = [
	{
		id: 'd-thank-you-before',
		section: 'd-4',
		titleEn: 'Before Reading',
		required: [],
		position: {
			x: 0,
			y: 3490
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: "## מה הייתם עושים?\n{d:rtl}תדמיינו: אתם הולכים ברחוב בלילה, ונער מנסה לחטוף לכם את התיק. מה הייתם עושים?\n\n{d:rtl}בסיפור שנלמד עכשיו, האישה עושה משהו שאף אחד לא מצפה לו. בסוף הסיפור תוכלו להשוות בין מה שאתם הייתם עושים לבין מה שהיא עשתה.\n\n{p:text}In this story, a boy tries to steal a woman's purse. Her reaction is a big surprise."
						},
						{
							type: 'preface',
							text: '{p:text}**Someone tries to steal your bag. What would you do?**\n{d:rtl}מישהו מנסה לגנוב לכם את התיק. מה הייתם עושים?\n{p:ul}Call the police\n{p:ul}Shout and run after him\n{p:ul}Try to understand why he did it\n{p:ul}Let him go\n{p:callout}אין כאן תשובה נכונה. זכרו את הבחירה שלכם - בסוף היחידה תשוו אותה לתגובה המפתיעה של גברת ג׳ונס.'
						},
						{
							type: 'preface',
							text: '## הסופר ומילות המפתח\n### ✍️ Langston Hughes (1901-1967)\n{p:text}A famous African-American poet and writer from Harlem, New York. He wrote about the lives of ordinary Black people in American cities.\n{d:rtl}משורר וסופר אפרו־אמריקאי מפורסם מהארלם שבניו יורק. הוא כתב על החיים של אנשים פשוטים בערים בארצות הברית - על הקשיים שלהם, אבל גם על החום והכבוד שלהם.'
						},
						{
							type: 'preface',
							text: '### 🌃 The story (1958)\n{p:text}A big city at night. A poor boy. A hard-working woman who lives in one rented room. And one evening that changes the boy.\n{d:rtl}עיר גדולה בלילה. נער עני. אישה עובדת שגרה בחדר שכור אחד. וערב אחד שמשנה את הנער.'
						},
						{
							type: 'preface',
							text: '{p:callout}שימו לב: הסיפור מוגן בזכויות יוצרים, ולכן באפליקציה מוצגת ״מפת סיפור״ של 12 אירועים במילים שלנו. את הסיפור המלא קוראים בכיתה או בספר.\n\n{d:rtl}לפני שקוראים - הכירו את המילים החשובות. כרטיס אחרי כרטיס, ואחר כך תרגול קצר.'
						},
						{
							type: 'word-card',
							word: 'purse / pocketbook',
							translationHe: 'תיק יד של אישה',
							exampleEn: 'She carries a large purse with everything inside.'
						},
						{
							type: 'word-card',
							word: 'snatch',
							translationHe: 'לחטוף',
							exampleEn: 'He tried to **snatch** her purse and run.'
						},
						{
							type: 'word-card',
							word: 'strap',
							translationHe: 'רצועה (של תיק)',
							exampleEn: 'The **strap** broke, and the purse fell.'
						},
						{
							type: 'word-card',
							word: 'let go',
							translationHe: 'לשחרר',
							exampleEn: 'If I let you go, will you run?'
						},
						{
							type: 'word-card',
							word: 'sink',
							translationHe: 'כיור',
							exampleEn: 'Wash your face at the **sink**.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'purse / pocketbook',
									he: 'תיק יד של אישה'
								},
								{
									en: 'snatch',
									he: 'לחטוף'
								},
								{
									en: 'strap',
									he: 'רצועה (של תיק)'
								},
								{
									en: 'let go',
									he: 'לשחרר'
								},
								{
									en: 'sink',
									he: 'כיור'
								}
							]
						},
						{
							type: 'word-card',
							word: 'blue suede shoes',
							translationHe: 'נעלי זמש כחולות',
							exampleEn: 'Suede is soft leather. The shoes were fashionable.'
						},
						{
							type: 'word-card',
							word: 'trust / mistrust',
							translationHe: 'לסמוך / לחשוד',
							exampleEn: 'He did not want her to mistrust him.'
						},
						{
							type: 'word-card',
							word: 'embarrass',
							translationHe: 'להביך',
							exampleEn: 'She did not ask questions that could **embarrass** him.'
						},
						{
							type: 'word-card',
							word: 'beauty shop',
							translationHe: 'מספרה, מכון יופי',
							exampleEn: 'She works at a hotel **beauty shop**.'
						},
						{
							type: 'word-card',
							word: 'behave',
							translationHe: 'להתנהג (יפה)',
							exampleEn: '"**Behave** yourself!" = be good!'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'blue suede shoes',
									he: 'נעלי זמש כחולות'
								},
								{
									en: 'trust / mistrust',
									he: 'לסמוך / לחשוד'
								},
								{
									en: 'embarrass',
									he: 'להביך'
								},
								{
									en: 'beauty shop',
									he: 'מספרה, מכון יופי'
								},
								{
									en: 'behave',
									he: 'להתנהג (יפה)'
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'Roger tries to "snatch" the purse. What does "snatch" mean?',
							options: [
								'to take something quickly, by force',
								['to buy something', 'לקנות זה buy - הוא לא משלם.'],
								['to find something', 'למצוא זה find.'],
								['to give something back', 'להחזיר זה give back - ההפך.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}snatch = לחטוף - לקחת משהו מהר ובכוח, בלי רשות.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Late at night, Roger, a thin boy of about fourteen, tries to grab the large purse of a big woman who is walking home alone. (event 1)\n{p:callout}**טיפ לבגרות:** פעלים של גניבה: steal, snatch, take without permission.',
							hint: '{d:rtl}חושבים על גנב שרץ ברחוב…'
						},
						{
							type: 'mcq',
							prompt: '"The strap breaks." What is a strap?',
							options: [
								['a shoe', 'נעל היא shoe.'],
								'the long part of a bag that you hold',
								['a kind of food', 'אין כאן אוכל.'],
								['a door', 'דלת היא door.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}strap = רצועה של תיק. הרצועה נקרעת, ולכן רוג׳ר נופל והתוכנית שלו נכשלת.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The purse is too heavy. The strap breaks, and Roger falls on his back. The woman kicks him, picks him up and shakes him. (event 2)\n{p:callout}**טיפ לבגרות:** פרטים קטנים כאלה מסבירים איך העלילה מתקדמת.',
							hint: '{d:rtl}במה מחזיקים תיק על הכתף?'
						},
						{
							type: 'mcq',
							prompt: 'Roger does not want Mrs. Jones to "mistrust" him. "Mistrust" means…',
							options: [
								['to love someone', 'לאהוב זה love.'],
								['to forget someone', 'לשכוח זה forget.'],
								'to think someone may do something bad',
								['to pay someone', 'לשלם זה pay.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}mistrust = לא לסמוך, לחשוד. רוג׳ר רוצה שהיא תסמוך עליו - וזה סימן חשוב לשינוי שלו.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:callout}**טיפ לבגרות:** התחילית mis- הופכת משמעות: understand → misunderstand.',
							hint: '{d:rtl}mis = לא, הפוך. trust = לסמוך.'
						},
						{
							type: 'mcq',
							prompt:
								'Mrs. Jones does not ask questions that could "embarrass" Roger. "Embarrass" means…',
							options: [
								['to make someone happy', 'זה ההפך.'],
								['to make someone hungry', 'אין קשר לרעב.'],
								['to make someone strong', 'אין קשר לכוח.'],
								'to make someone feel ashamed or uncomfortable'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}embarrass = להביך. היא לא שואלת על הבית והמשפחה שלו, כדי לא לגרום לו להרגיש רע.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him. (event 9)\n{p:callout}**טיפ לבגרות:** מילים קרובות: ashamed (מתבייש), uncomfortable (לא בנוח).',
							hint: '{d:rtl}מה מרגישים כשכולם מסתכלים עליכם אחרי טעות?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-thank-you-read',
		section: 'd-4',
		titleEn: 'Understand the Story',
		required: ['d-thank-you-before'],
		position: {
			x: 70,
			y: 3610
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## מפת הסיפור\n{d:rtl}הסיפור מחולק ל־3 חלקים ו־12 אירועים. לחצו על כל אירוע כדי לראות אותו בעברית. אל תדאגו אם לא זכרתם הכול - בשלב הבא נעבור על כל חלק.\n\n{p:callout}בתשובות על סיפור לא כותבים מספרי שורות - מתארים את האירוע במילים. למשל: At the end of the story…'
						},
						{
							type: 'poem',
							title: "Thank You, Ma'am - Langston Hughes",
							stanzas: [
								{
									label: 'Part 1 - On the street',
									lines: [
										{
											n: 1,
											en: 'Late at night, Roger, a thin boy of about fourteen, tries to grab the large purse of a big woman who is walking home alone.',
											he: 'מאוחר בלילה רוג׳ר, נער רזה בן 14 בערך, מנסה לחטוף את התיק הגדול של אישה גדולה שהולכת לבד הביתה.'
										},
										{
											n: 2,
											en: 'The purse is too heavy. The strap breaks, and Roger falls on his back. The woman kicks him, picks him up and shakes him.',
											he: 'התיק כבד מדי. הרצועה נקרעת ורוג׳ר נופל על הגב. האישה בועטת בו, מרימה אותו ומטלטלת אותו.'
										},
										{
											n: 3,
											en: 'She sees that his face is dirty and asks if there is anyone at home to tell him to wash it. He says no. So she drags him to her home.',
											he: 'היא רואה שהפנים שלו מלוכלכות ושואלת אם יש מישהו בבית שאומר לו לשטוף פנים. הוא עונה שלא. אז היא גוררת אותו אליה הביתה.'
										}
									]
								},
								{
									label: "Part 2 - In Mrs. Jones's room",
									lines: [
										{
											n: 4,
											en: 'In her small rented room, Mrs. Luella Bates Washington Jones lets him go and tells him to wash his face at the sink. He thinks about running, but he washes.',
											he: 'בחדר השכור הקטן שלה, גברת לואלה בייטס וושינגטון ג׳ונס משחררת אותו ואומרת לו לשטוף פנים בכיור. הוא חושב לברוח - אבל שוטף.'
										},
										{
											n: 5,
											en: 'Roger says he wanted money to buy blue suede shoes. Mrs. Jones answers that he could have asked her.',
											he: 'רוג׳ר מספר שהוא רצה כסף כדי לקנות נעלי זמש כחולות. גברת ג׳ונס עונה שהוא יכול היה פשוט לבקש ממנה.'
										},
										{
											n: 6,
											en: 'The door is open. Roger could run away, but he decides to stay.',
											he: 'הדלת פתוחה. רוג׳ר יכול לברוח, אבל הוא מחליט להישאר.'
										},
										{
											n: 7,
											en: 'Mrs. Jones tells him that she was young once, that she also wanted things she could not get, and that she too did things she is not proud of.',
											he: 'גברת ג׳ונס מספרת לו שגם היא הייתה צעירה, שגם היא רצתה דברים שלא יכלה להשיג, ושגם היא עשתה דברים שהיא לא גאה בהם.'
										},
										{
											n: 8,
											en: 'Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her.',
											he: 'התיק שלה מונח על המיטה. רוג׳ר יושב במקום שבו היא יכולה לראות אותו, כי הוא לא רוצה שהיא תחשוד בו עכשיו. הוא אפילו מציע ללכת בשבילה למכולת.'
										}
									]
								},
								{
									label: 'Part 3 - Dinner and goodbye',
									lines: [
										{
											n: 9,
											en: 'She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him.',
											he: 'היא מבשלת ארוחה פשוטה והם אוכלים יחד. היא מספרת לו על העבודה שלה במספרה של מלון. היא לא שואלת אותו שאלות שעלולות להביך אותו.'
										},
										{
											n: 10,
											en: 'After dinner, she gives Roger ten dollars to buy the blue suede shoes.',
											he: 'אחרי הארוחה היא נותנת לרוג׳ר עשרה דולרים כדי שיקנה את נעלי הזמש הכחולות.'
										},
										{
											n: 11,
											en: 'She warns him never to steal again: shoes bought with stolen money will "burn your feet".',
											he: 'היא מזהירה אותו לא לגנוב יותר לעולם: נעליים שקונים בכסף גנוב ״ישרפו לך את הרגליים״.'
										},
										{
											n: 12,
											en: 'At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again.',
											he: 'ליד הדלת רוג׳ר רוצה להגיד יותר מ״תודה, גברתי״, אבל לא מצליח. היא סוגרת את הדלת, והוא לא רואה אותה יותר לעולם.'
										}
									]
								}
							]
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Part 1 - On the street',
									lines: [
										{
											n: 1,
											en: 'Late at night, Roger, a thin boy of about fourteen, tries to grab the large purse of a big woman who is walking home alone.',
											he: 'מאוחר בלילה רוג׳ר, נער רזה בן 14 בערך, מנסה לחטוף את התיק הגדול של אישה גדולה שהולכת לבד הביתה.'
										},
										{
											n: 2,
											en: 'The purse is too heavy. The strap breaks, and Roger falls on his back. The woman kicks him, picks him up and shakes him.',
											he: 'התיק כבד מדי. הרצועה נקרעת ורוג׳ר נופל על הגב. האישה בועטת בו, מרימה אותו ומטלטלת אותו.'
										},
										{
											n: 3,
											en: 'She sees that his face is dirty and asks if there is anyone at home to tell him to wash it. He says no. So she drags him to her home.',
											he: 'היא רואה שהפנים שלו מלוכלכות ושואלת אם יש מישהו בבית שאומר לו לשטוף פנים. הוא עונה שלא. אז היא גוררת אותו אליה הביתה.'
										}
									]
								}
							],
							title: 'חלק 1: ברחוב'
						},
						{
							type: 'preface',
							text: "### 1️⃣ Part 1\n{p:text}Roger tries to steal Mrs. Jones's purse, but he falls. She is big and strong: she catches him, shakes him, and - instead of calling the police - takes him home.\n{d:rtl}רוג׳ר מנסה לגנוב את התיק של גברת ג׳ונס, אבל נופל. היא גדולה וחזקה: היא תופסת אותו, מטלטלת אותו, ובמקום להזמין משטרה - לוקחת אותו אליה הביתה."
						},
						{
							type: 'mcq',
							prompt: "Why does Roger's plan fail?",
							options: [
								['A police officer stops him.', 'אין שוטר בסיפור.'],
								['Mrs. Jones runs faster than him.', 'היא לא רודפת אחריו - הוא נופל לידה.'],
								'The purse is too heavy, and he falls.',
								['He changes his mind.', 'הוא לא מתחרט ברגע הזה - הוא פשוט נכשל.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}התיק כבד מדי, הרצועה נקרעת ורוג׳ר נופל על הגב. זה רגע כמעט מצחיק - והתחלה של מפגש לא צפוי.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The purse is too heavy. The strap breaks, and Roger falls on his back. The woman kicks him, picks him up and shakes him. (event 2)\n{p:callout}**טיפ לבגרות:** שאלת Why? צריכה תשובה עם because.',
							hint: '{p:ul}**Why** - למה ← מחפשים סיבה\n{p:ul}**fail** - להיכשל\n{d:rtl}מה קורה לרצועה?'
						},
						{
							type: 'mcq',
							prompt: 'What does Mrs. Jones do right after Roger falls?',
							options: [
								['She calls the police.', 'היא דווקא לא מזמינה משטרה - זו ההפתעה של הסיפור.'],
								'She kicks him, picks him up and shakes him.',
								['She runs away.', 'היא לא בורחת - הוא זה שרצה לברוח.'],
								['She gives him money.', 'הכסף מגיע רק בסוף.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}היא מגיבה בתקיפות: בועטת, מרימה ומטלטלת אותו. כבר בהתחלה רואים שהיא חזקה ולא מפחדת.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The purse is too heavy. The strap breaks, and Roger falls on his back. The woman kicks him, picks him up and shakes him. (event 2)\n{p:callout}**טיפ לבגרות:** שימו לב לסדר האירועים: right after = מיד אחרי.',
							hint: '{p:ul}**right after** - מיד אחרי\n{d:rtl}היא אישה גדולה וחזקה…'
						},
						{
							type: 'mcq',
							prompt: 'Why does Mrs. Jones take Roger to her home?',
							options: [
								['to call his parents', 'היא לא מתקשרת להורים שלו.'],
								['to show him her new shoes', 'אין נעליים חדשות שלה בסיפור.'],
								['because she is afraid of him', 'היא לא מפחדת ממנו - ההפך!'],
								'because his face is dirty and no one at home takes care of him'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}היא רואה שהפנים שלו מלוכלכות, ושואלת אם יש מישהו בבית שדואג לו. הוא עונה שלא - והיא מחליטה לטפל בו בעצמה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She sees that his face is dirty and asks if there is anyone at home to tell him to wash it. He says no. So she drags him to her home. (event 3)\n{p:callout}**טיפ לבגרות:** לפעמים הסיבה נמצאת בדיאלוג - במה שהדמויות אומרות.',
							hint: '{p:ul}**Why** - למה\n{d:rtl}מה היא שואלת אותו על הפנים שלו?'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: "Part 2 - In Mrs. Jones's room",
									lines: [
										{
											n: 4,
											en: 'In her small rented room, Mrs. Luella Bates Washington Jones lets him go and tells him to wash his face at the sink. He thinks about running, but he washes.',
											he: 'בחדר השכור הקטן שלה, גברת לואלה בייטס וושינגטון ג׳ונס משחררת אותו ואומרת לו לשטוף פנים בכיור. הוא חושב לברוח - אבל שוטף.'
										},
										{
											n: 5,
											en: 'Roger says he wanted money to buy blue suede shoes. Mrs. Jones answers that he could have asked her.',
											he: 'רוג׳ר מספר שהוא רצה כסף כדי לקנות נעלי זמש כחולות. גברת ג׳ונס עונה שהוא יכול היה פשוט לבקש ממנה.'
										},
										{
											n: 6,
											en: 'The door is open. Roger could run away, but he decides to stay.',
											he: 'הדלת פתוחה. רוג׳ר יכול לברוח, אבל הוא מחליט להישאר.'
										},
										{
											n: 7,
											en: 'Mrs. Jones tells him that she was young once, that she also wanted things she could not get, and that she too did things she is not proud of.',
											he: 'גברת ג׳ונס מספרת לו שגם היא הייתה צעירה, שגם היא רצתה דברים שלא יכלה להשיג, ושגם היא עשתה דברים שהיא לא גאה בהם.'
										},
										{
											n: 8,
											en: 'Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her.',
											he: 'התיק שלה מונח על המיטה. רוג׳ר יושב במקום שבו היא יכולה לראות אותו, כי הוא לא רוצה שהיא תחשוד בו עכשיו. הוא אפילו מציע ללכת בשבילה למכולת.'
										}
									]
								}
							],
							title: 'חלק 2: בחדר של גברת ג׳ונס'
						},
						{
							type: 'preface',
							text: '### 2️⃣ Part 2\n{p:text}At home, Mrs. Jones lets Roger go. He could run, but he stays. He tells her he wanted blue suede shoes. She says he could have asked. She tells him she also made mistakes. Roger now wants her to trust him.\n{d:rtl}בבית גברת ג׳ונס משחררת את רוג׳ר. הוא יכול לברוח - אבל נשאר. הוא מספר שרצה נעלי זמש כחולות, והיא עונה שהיה יכול לבקש. היא מספרת שגם היא טעתה בחייה. עכשיו רוג׳ר רוצה שהיא תסמוך עליו.'
						},
						{
							type: 'mcq',
							prompt: 'Why did Roger try to steal the purse?',
							options: [
								'He wanted money for blue suede shoes.',
								[
									'He was very hungry.',
									'מלכודת! גברת ג׳ונס חושבת שהוא רעב, אבל רוג׳ר עצמו אומר משהו אחר.'
								],
								['His mother was sick.', 'אין בסיפור אמא חולה.'],
								['He wanted to buy food for his family.', 'הוא לא מזכיר משפחה.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}רוג׳ר אומר שרצה כסף לנעלי זמש כחולות - משהו שהוא רצה, לא משהו שהיה חייב.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Roger says he wanted money to buy blue suede shoes. Mrs. Jones answers that he could have asked her. (event 5)\n{p:callout}**טיפ לבגרות:** הבדילו בין מה שדמות אומרת לבין מה שדמות אחרת חושבת עליה.',
							hint: '{p:ul}**Why** - למה\n{d:rtl}מה רוג׳ר עצמו אומר באירוע 5?'
						},
						{
							type: 'mcq',
							prompt: 'What does Roger do when he sees that the door is open?',
							options: [
								['He runs away.', 'זה מה שהיינו מצפים - אבל הוא לא בורח.'],
								['He takes the purse.', 'הוא דווקא לא נוגע בתיק.'],
								'He stays.',
								['He calls a friend.', 'אין בסיפור חבר.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הדלת פתוחה והוא יכול לברוח - אבל הוא בוחר להישאר. זו הבחירה הראשונה שמראה שמשהו בו משתנה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The door is open. Roger could run away, but he decides to stay. (event 6)\n{p:callout}**טיפ לבגרות:** בחירה של דמות (choice) היא ראיה חזקה לאופי שלה.',
							hint: '{d:rtl}אירוע 6.'
						},
						{
							type: 'mcq',
							prompt: 'What does Mrs. Jones tell Roger about her own past?',
							options: [
								['She was a famous singer.', 'אין בסיפור זמרת.'],
								['She never made a mistake.', 'ההפך - היא מודה שטעתה.'],
								['She grew up in a rich family.', 'היא לא מספרת שגדלה בעושר.'],
								'She also wanted things she could not get, and she did things she is not proud of.'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}היא מספרת שגם היא הייתה צעירה, רצתה דברים שלא יכלה להשיג, ועשתה דברים שהיא לא גאה בהם. היא לא מפרטת מה עשתה - ואין להמציא.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Mrs. Jones tells him that she was young once, that she also wanted things she could not get, and that she too did things she is not proud of. (event 7)\n{p:callout}**טיפ לבגרות:** אל תוסיפו פרטים שהסיפור לא מספר. כתבו רק מה שכתוב.',
							hint: '{p:ul}**past** - עבר\n{d:rtl}אירוע 7.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-thank-you-meaning',
		section: 'd-4',
		titleEn: 'Characters & Meaning',
		required: ['d-thank-you-read'],
		position: {
			x: 100,
			y: 3730
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## שתי הדמויות\n### 👩🏾 Mrs. Luella Bates Washington Jones\n{p:text}Strong, firm and brave - but also warm, wise and generous. She works hard and lives in one small room.\n{d:rtl}חזקה, תקיפה ואמיצה - אבל גם חמה, חכמה ונדיבה. היא עובדת קשה וגרה בחדר קטן אחד. היא מחנכת את רוג׳ר בעזרת מעשים, לא בעזרת עונש.'
						},
						{
							type: 'preface',
							text: '### 👦🏾 Roger\n{p:text}A thin, poor boy of about fourteen. No one at home takes care of him. He makes a bad choice, but he is not a bad person.\n{d:rtl}נער רזה ועני, בן 14 בערך. אין מי שדואג לו בבית. הוא עושה בחירה רעה - אבל הוא לא אדם רע.'
						},
						{
							type: 'preface',
							text: '{d:rtl}הרגשות של רוג׳ר משתנים לאורך הערב. עקבו אחריהם:'
						},
						{
							type: 'steps',
							steps: [
								'**"the fall"** (event 2): frightened\n{d:rtl}מפוחד - נתפס ונגרר',
								'**"the sink"** (event 4): confused\n{d:rtl}מבולבל - למה היא לא מזמינה משטרה?',
								'**"the purse on the bed"** (event 8): wants to be trusted\n{d:rtl}רוצה שיסמכו עליו - יושב במקום שהיא רואה אותו',
								'**"Thank you, ma\'am"** (event 12): grateful\n{d:rtl}אסיר תודה - אבל לא מוצא מילים'
							]
						},
						{
							type: 'mcq',
							prompt: 'Which words best describe Mrs. Jones?',
							options: [
								['weak and afraid', 'היא תופסת גנב לבד - היא ממש לא חלשה ומפוחדת.'],
								['cruel and angry', 'היא תקיפה, אבל לא אכזרית - היא מאכילה אותו ונותנת לו כסף.'],
								'strong and kind',
								['rich and proud', 'היא לא עשירה - היא גרה בחדר שכור אחד.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}היא חזקה (תופסת את רוג׳ר ומטלטלת אותו) וגם טובת לב (מאכילה אותו ונותנת לו עשרה דולרים). השילוב הזה הוא סוד הדמות שלה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The purse is too heavy. The strap breaks, and Roger falls on his back. The woman kicks him, picks him up and shakes him. (event 2)\n{p:text}She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him. (event 9)\n{p:text}After dinner, she gives Roger ten dollars to buy the blue suede shoes. (event 10)\n{p:callout}**טיפ לבגרות:** תיאור דמות טוב = שתי תכונות + מעשה שמוכיח כל אחת.',
							hint: '{p:ul}**best describe** - מתארות הכי טוב\n{d:rtl}חשבו על מה שהיא עושה ברחוב, ומה שהיא עושה בבית.'
						},
						{
							type: 'mcq',
							prompt: 'How does Roger feel at the end of the story?',
							options: [
								'grateful, but he cannot find the words',
								['angry with Mrs. Jones', 'אין סימן לכעס - ההפך.'],
								['proud of the theft', 'הוא לא גאה בגניבה.'],
								['bored', 'הוא מתרגש, לא משועמם.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}רוג׳ר רוצה להגיד יותר מ״תודה, גברתי״, אבל לא מצליח. הוא אסיר תודה ומתרגש - והמילים לא מספיקות.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again. (event 12)\n{p:callout}**טיפ לבגרות:** ביטוי שימושי: grateful (אסיר תודה).',
							hint: '{d:rtl}מה הוא רוצה להגיד ליד הדלת?'
						},
						{
							type: 'preface',
							text: '## פרטים חשובים\n{d:rtl}בסיפור הזה פרטים קטנים אומרים הרבה. הנה הפרטים, ומה כל אחד מהם מראה:'
						},
						{
							type: 'steps',
							steps: [
								'**🧼 The dirty face (event 3)**\n{p:text}No one at home takes care of Roger.\n{d:rtl}אין מי שדואג לרוג׳ר בבית.',
								'**🚪 The open door (event 6)**\n{p:text}Roger is free to go - his staying is his own choice.\n{d:rtl}רוג׳ר חופשי ללכת - ההישארות היא הבחירה שלו.',
								'**👜 The purse on the bed (event 8)**\n{p:text}A test of trust: he does not touch it.\n{d:rtl}מבחן של אמון: הוא לא נוגע בו.',
								'**🛒 "Can I go to the store?" (event 8)**\n{p:text}Roger wants to help and to be trusted.\n{d:rtl}רוג׳ר רוצה לעזור ושיסמכו עליו.',
								'**💵 Ten dollars (event 10)**\n{p:text}Generosity - and a way to get the shoes without stealing.\n{d:rtl}נדיבות - ודרך להשיג את הנעליים בלי לגנוב.',
								'**🔥 "Burn your feet" (event 11)**\n{p:text}Things we get in a bad way will not make us happy.\n{d:rtl}דברים שמשיגים בדרך רעה לא יביאו אושר.'
							]
						},
						{
							type: 'mcq',
							prompt: 'Why is the open door (event 6) important?',
							options: [
								['It shows the room is hot.', 'הסיפור לא מדבר על חום.'],
								'It shows that Roger stays by his own choice.',
								['It shows that a neighbor is coming.', 'אין שכן שנכנס.'],
								['It shows that Mrs. Jones is careless.', 'היא לא רשלנית - היא נותנת לו בחירה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הדלת הפתוחה הופכת את ההישארות לבחירה: אף אחד לא מחזיק אותו. לכן זה סימן חזק לשינוי שמתחיל אצלו.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The door is open. Roger could run away, but he decides to stay. (event 6)\n{p:callout}**טיפ לבגרות:** Why is … important? = לא רק מה קרה, אלא מה זה מראה.',
							hint: '{p:ul}**important** - חשוב\n{d:rtl}מה רוג׳ר יכול לעשות כשהדלת פתוחה?'
						},
						{
							type: 'mcq',
							prompt:
								'Roger offers to go to the store for Mrs. Jones (event 8). What does this show?',
							options: [
								['He wants to run away.', 'הוא כבר יכול לברוח מהדלת הפתוחה - והוא לא עושה את זה.'],
								['He is hungry.', 'הוא לא מבקש אוכל לעצמו.'],
								'He wants to help her and to be trusted.',
								['He wants to buy shoes.', 'הנעליים לא קשורות להצעה הזאת.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}ההצעה ללכת למכולת מראה שרוג׳ר רוצה לעזור, ושחשוב לו שהיא תסמוך עליו - אחרי שעה קודם ניסה לגנוב ממנה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:callout}**טיפ לבגרות:** ראיה חזקה = מעשה. ״הוא מציע עזרה״ חזק יותר מ״הוא נחמד״.',
							hint: '{p:ul}**What does this show** - מה זה מראה\n{d:rtl}מי שרוצה לברוח לא מציע עזרה…'
						},
						{
							type: 'preface',
							text: '## הנושא והמסר\n### 📌 Themes · נושאים\n{p:text}Trust, kindness, respect, and second chances.\n{d:rtl}הנושאים (themes): אמון, טוב לב, כבוד והזדמנות שנייה.'
						},
						{
							type: 'preface',
							text: '### 💬 Message · מסר\n{p:text}Kindness and trust can change a person more than punishment can.\n{d:rtl}המסר (message): טוב לב ואמון יכולים לשנות אדם יותר מעונש.'
						},
						{
							type: 'preface',
							text: '### ⚠️ Common mistakes\n{p:text}1. "Mrs. Jones rewards stealing." No - she warns him clearly not to steal again. 2. "Roger never steals again." We don\'t know - the story does not tell us his future.\n{d:rtl}טעות 1: ״גברת ג׳ונס נותנת פרס על גניבה״. לא! היא מזהירה אותו בבירור לא לגנוב שוב. טעות 2: ״רוג׳ר לא גנב יותר לעולם״. אנחנו לא יודעים - הסיפור לא מספר על העתיד שלו.'
						},
						{
							type: 'mcq',
							prompt: 'What is the main theme of the story?',
							options: [
								['shoes and fashion', 'הנעליים הן פרט בעלילה, לא הנושא.'],
								['life in a hotel', 'המספרה במלון היא רק פרט על העבודה שלה.'],
								'kindness and trust',
								['crime and the police', 'אין משטרה בסיפור - וזו בדיוק הנקודה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הנושא המרכזי הוא טוב לב ואמון: גברת ג׳ונס סומכת על רוג׳ר, ורוג׳ר מתחיל להתנהג כמו מי שראוי לאמון.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The door is open. Roger could run away, but he decides to stay. (event 6)\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:text}After dinner, she gives Roger ten dollars to buy the blue suede shoes. (event 10)\n{p:callout}**טיפ לבגרות:** נושא (theme) = מילה או שתיים. מסר (message) = משפט שלם.',
							hint: '{p:ul}**theme** - נושא\n{d:rtl}מה גברת ג׳ונס נותנת לרוג׳ר - חוץ מכסף?'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence best describes the message of the story?',
							options: [
								['Stealing is a good way to get what you want.', 'היא מזהירה אותו בדיוק מזה.'],
								'Kindness and trust can change a person more than punishment.',
								['Never talk to strangers.', 'הסיפור מראה דווקא מפגש טוב בין זרים.'],
								[
									'Rich people should give money to everyone.',
									'היא לא עשירה, והסיפור לא מדבר על כולם.'
								]
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}גברת ג׳ונס לא מענישה - היא מאכילה, מקשיבה וסומכת. ורוג׳ר מתחיל להשתנות (אירועים 6, 8, 12).\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The door is open. Roger could run away, but he decides to stay. (event 6)\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:text}At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again. (event 12)\n{p:callout}**טיפ לבגרות:** כשיש ״best״ בשאלה - בחרו את התשובה המלאה והמדויקת ביותר.',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{p:ul}**message** - מסר\n{d:rtl}מה משנה את רוג׳ר - העונש או היחס?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-thank-you-think',
		section: 'd-4',
		titleEn: 'Think About It',
		required: ['d-thank-you-meaning'],
		position: {
			x: 70,
			y: 3850
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## מה כתוב בסיפור?\n{d:rtl}בשאלות האלה התשובה כתובה בסיפור. מפת הסיפור מופיעה במסך הבא - קראו אותה שוב לפני השאלות.'
						},
						{
							type: 'poem',
							title: "Thank You, Ma'am - Langston Hughes",
							stanzas: [
								{
									label: 'Part 1 - On the street',
									lines: [
										{
											n: 1,
											en: 'Late at night, Roger, a thin boy of about fourteen, tries to grab the large purse of a big woman who is walking home alone.',
											he: 'מאוחר בלילה רוג׳ר, נער רזה בן 14 בערך, מנסה לחטוף את התיק הגדול של אישה גדולה שהולכת לבד הביתה.'
										},
										{
											n: 2,
											en: 'The purse is too heavy. The strap breaks, and Roger falls on his back. The woman kicks him, picks him up and shakes him.',
											he: 'התיק כבד מדי. הרצועה נקרעת ורוג׳ר נופל על הגב. האישה בועטת בו, מרימה אותו ומטלטלת אותו.'
										},
										{
											n: 3,
											en: 'She sees that his face is dirty and asks if there is anyone at home to tell him to wash it. He says no. So she drags him to her home.',
											he: 'היא רואה שהפנים שלו מלוכלכות ושואלת אם יש מישהו בבית שאומר לו לשטוף פנים. הוא עונה שלא. אז היא גוררת אותו אליה הביתה.'
										}
									]
								},
								{
									label: "Part 2 - In Mrs. Jones's room",
									lines: [
										{
											n: 4,
											en: 'In her small rented room, Mrs. Luella Bates Washington Jones lets him go and tells him to wash his face at the sink. He thinks about running, but he washes.',
											he: 'בחדר השכור הקטן שלה, גברת לואלה בייטס וושינגטון ג׳ונס משחררת אותו ואומרת לו לשטוף פנים בכיור. הוא חושב לברוח - אבל שוטף.'
										},
										{
											n: 5,
											en: 'Roger says he wanted money to buy blue suede shoes. Mrs. Jones answers that he could have asked her.',
											he: 'רוג׳ר מספר שהוא רצה כסף כדי לקנות נעלי זמש כחולות. גברת ג׳ונס עונה שהוא יכול היה פשוט לבקש ממנה.'
										},
										{
											n: 6,
											en: 'The door is open. Roger could run away, but he decides to stay.',
											he: 'הדלת פתוחה. רוג׳ר יכול לברוח, אבל הוא מחליט להישאר.'
										},
										{
											n: 7,
											en: 'Mrs. Jones tells him that she was young once, that she also wanted things she could not get, and that she too did things she is not proud of.',
											he: 'גברת ג׳ונס מספרת לו שגם היא הייתה צעירה, שגם היא רצתה דברים שלא יכלה להשיג, ושגם היא עשתה דברים שהיא לא גאה בהם.'
										},
										{
											n: 8,
											en: 'Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her.',
											he: 'התיק שלה מונח על המיטה. רוג׳ר יושב במקום שבו היא יכולה לראות אותו, כי הוא לא רוצה שהיא תחשוד בו עכשיו. הוא אפילו מציע ללכת בשבילה למכולת.'
										}
									]
								},
								{
									label: 'Part 3 - Dinner and goodbye',
									lines: [
										{
											n: 9,
											en: 'She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him.',
											he: 'היא מבשלת ארוחה פשוטה והם אוכלים יחד. היא מספרת לו על העבודה שלה במספרה של מלון. היא לא שואלת אותו שאלות שעלולות להביך אותו.'
										},
										{
											n: 10,
											en: 'After dinner, she gives Roger ten dollars to buy the blue suede shoes.',
											he: 'אחרי הארוחה היא נותנת לרוג׳ר עשרה דולרים כדי שיקנה את נעלי הזמש הכחולות.'
										},
										{
											n: 11,
											en: 'She warns him never to steal again: shoes bought with stolen money will "burn your feet".',
											he: 'היא מזהירה אותו לא לגנוב יותר לעולם: נעליים שקונים בכסף גנוב ״ישרפו לך את הרגליים״.'
										},
										{
											n: 12,
											en: 'At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again.',
											he: 'ליד הדלת רוג׳ר רוצה להגיד יותר מ״תודה, גברתי״, אבל לא מצליח. היא סוגרת את הדלת, והוא לא רואה אותה יותר לעולם.'
										}
									]
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'Where does Mrs. Jones live?',
							options: [
								['in a big house', 'היא לא עשירה.'],
								'in a small rented room',
								['in a hotel', 'במלון היא עובדת - לא גרה.'],
								['on a farm', 'הסיפור מתרחש בעיר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}היא גרה בחדר שכור קטן. כלומר - היא לא עשירה, ובכל זאת נותנת לרוג׳ר עשרה דולרים. זה מראה כמה היא נדיבה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}In her small rented room, Mrs. Luella Bates Washington Jones lets him go and tells him to wash his face at the sink. He thinks about running, but he washes. (event 4)\n{p:callout}**טיפ לבגרות:** פרט על מקום יכול ללמד על דמות (כאן: היא לא עשירה).',
							hint: '{p:ul}**Where** - איפה\n{d:rtl}אירוע 4.'
						},
						{
							type: 'mcq',
							prompt: 'What does Mrs. Jones say when Roger tells her about the shoes?',
							options: [
								'that he could have asked her',
								['that shoes are not important', 'היא לא מזלזלת ברצון שלו.'],
								['that she will call the police', 'היא לא מזמינה משטרה.'],
								['that she has shoes for him', 'אין לה נעליים בשבילו - היא נותנת כסף בסוף.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}היא אומרת שהוא יכול היה לבקש. זה חלק חשוב מהשיעור שלה: יש דרך טובה לקבל עזרה - לבקש, לא לגנוב.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Roger says he wanted money to buy blue suede shoes. Mrs. Jones answers that he could have asked her. (event 5)\n{p:callout}**טיפ לבגרות:** דיאלוג קצר יכול להכיל את המסר של כל הסיפור.',
							hint: '{p:ul}**say** - אומרת\n{d:rtl}אירוע 5.'
						},
						{
							type: 'mcq',
							prompt: 'Where does Mrs. Jones work?',
							options: [
								['at a shoe store', 'היא לא עובדת בחנות נעליים.'],
								['at a school', 'היא לא מורה.'],
								['at a police station', 'אין משטרה בסיפור.'],
								'at a hotel beauty shop'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}היא עובדת במספרה של מלון. היא אישה עובדת ופשוטה - לא עשירה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him. (event 9)\n{p:callout}**טיפ לבגרות:** שאלה פשוטה? התשובה באירוע אחד. אל תחפשו רחוק.',
							hint: '{p:ul}**work** - עובדת\n{d:rtl}אירוע 9.'
						},
						{
							type: 'mcq',
							prompt: 'Which of these does Mrs. Jones NOT do?',
							options: [
								['She gives Roger dinner.', 'היא כן עושה את זה - אירוע 9.'],
								['She gives Roger ten dollars.', 'היא כן עושה את זה - אירוע 10.'],
								'She takes Roger to the police.',
								['She tells Roger to wash his face.', 'היא כן עושה את זה - אירוע 4.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}גברת ג׳ונס לא לוקחת את רוג׳ר למשטרה. במקום עונש היא נותנת לו יחס, אוכל וכסף.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She sees that his face is dirty and asks if there is anyone at home to tell him to wash it. He says no. So she drags him to her home. (event 3)\n{p:text}She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him. (event 9)\n{p:text}After dinner, she gives Roger ten dollars to buy the blue suede shoes. (event 10)\n{p:callout}**טיפ לבגרות:** שימו לב למילה NOT! מסמנים אותה בעיגול לפני שעונים.',
							hint: '{p:ul}**NOT** - לא\n{d:rtl}NOT = לא עשתה.'
						},
						{
							type: 'preface',
							text: '## מה מסתתר בין השורות?\n{d:rtl}עכשיו התשובה לא כתובה במפורש. צריך להבין ממה שכתוב - כמו בלש שמחפש רמזים 🔍.'
						},
						{
							type: 'mcq',
							prompt:
								'Roger says no one at home tells him to wash his face (event 3). What can we understand from this?',
							options: [
								['He does not like water.', 'זה פירוש מילולי מדי.'],
								'No one at home really takes care of him.',
								['He lives in a hotel.', 'הוא לא גר במלון.'],
								['He has a big family.', 'הוא אומר דווקא שאין מי שדואג לו.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}כנראה שאין בבית מבוגר שדואג לו. זה עוזר להבין את רוג׳ר - ואת הרצון של גברת ג׳ונס לטפל בו.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She sees that his face is dirty and asks if there is anyone at home to tell him to wash it. He says no. So she drags him to her home. (event 3)\n{p:callout}**טיפ לבגרות:** כשמסיקים, כתבו: We can understand that… / It seems that…',
							hint: '{p:ul}**understand** - להבין (הסקה)\n{d:rtl}מה זה אומר על הבית שלו?'
						},
						{
							type: 'mcq',
							prompt: 'Why does Mrs. Jones tell Roger about her own mistakes?',
							options: [
								'to show that she understands him and that people can change',
								['to make him laugh', 'זה לא סיפור מצחיק - זה רגע כן.'],
								['to scare him', 'היא לא מפחידה אותו - היא מתקרבת אליו.'],
								['to get money from him', 'אין לו כסף, והיא בכלל נותנת לו.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}כשהיא מספרת שגם היא טעתה, היא מראה לרוג׳ר שהיא מבינה אותו, ושטעות אחת לא קובעת מי האדם.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Mrs. Jones tells him that she was young once, that she also wanted things she could not get, and that she too did things she is not proud of. (event 7)\n{p:callout}**טיפ לבגרות:** Why does she…? = מבקשים את הכוונה של הדמות.',
							hint: '{p:ul}**Why** - למה\n{d:rtl}איך מרגיש מי שמספרים לו ״גם אני טעיתי״?'
						},
						{
							type: 'mcq',
							prompt: 'Why does Mrs. Jones NOT ask Roger about his home and family at dinner?',
							options: [
								[
									'She is not interested in him.',
									'היא מאוד מתעניינת בו - היא מאכילה אותו ומדברת איתו.'
								],
								['She is too tired.', 'הסיפור לא אומר את זה.'],
								['She already knows everything.', 'היא לא יודעת הרבה עליו.'],
								'She does not want to embarrass him.'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}היא שומרת על הכבוד שלו: היא יודעת שהשאלות האלה יכולות להביך אותו. כבוד הוא חלק מהטוב שלה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him. (event 9)\n{p:callout}**טיפ לבגרות:** שימו לב: ברחוב היא כן שאלה אם יש מישהו בבית (אירוע 3). בארוחה - כבר לא.',
							hint: '{p:ul}**NOT** - לא\n{d:rtl}אירוע 9.'
						},
						{
							type: 'mcq',
							prompt: 'What does Mrs. Jones mean when she says stolen shoes will "burn your feet"?',
							options: [
								['The shoes are too hot.', 'זה הפירוש המילולי - אבל הכוונה עמוקה יותר.'],
								['The shoes are too small.', 'אין קשר למידה.'],
								'Things we get in a bad way will not make us happy.',
								['Roger should walk barefoot.', 'זה לא הכוונה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}זה ביטוי ציורי: מה שמשיגים בגניבה ״ישרוף״ - ירגיש רע ולא ישמח. היא מלמדת אותו מוסר בשפה פשוטה וחזקה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She warns him never to steal again: shoes bought with stolen money will "burn your feet". (event 11)\n{p:callout}**טיפ לבגרות:** ביטוי ציורי (figurative language) לא מתפרש מילה במילה.',
							hint: '{p:ul}**mean** - מתכוונת\n{d:rtl}האם נעליים באמת שורפות? מה היא רוצה להגיד?'
						},
						{
							type: 'preface',
							text: '## מה אתם חושבים?\n{d:rtl}עכשיו נחבר בין חלקים שונים בסיפור ובין הסיפור לחיים. תשובות כאלה מרשימות מאוד את המורים!'
						},
						{
							type: 'preface',
							text: '### ⚖️ Beginning vs. end\n{p:text}Beginning: Roger tries to steal her purse. End: her purse is next to him, and he does not touch it - he offers to help.\n{d:rtl}השוו: בהתחלה רוג׳ר מנסה לגנוב את התיק שלה. בהמשך התיק מונח לידו - והוא לא נוגע בו, ואפילו מציע עזרה.'
						},
						{
							type: 'mcq',
							prompt: 'How does Roger change between the beginning and the end of the evening?',
							options: [
								'At first he tries to steal; later he wants to be trusted and to help.',
								['At first he is kind; later he is cruel.', 'זה ההפך.'],
								['He does not change at all.', 'יש שינוי ברור במעשים שלו.'],
								['At first he is rich; later he is poor.', 'הסיפור לא מדבר על כסף שלו.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}בהתחלה רוג׳ר מנסה לחטוף את התיק (אירוע 1). בהמשך התיק לידו והוא לא נוגע בו, ואף מציע ללכת למכולת (אירוע 8). זה שינוי ברור - לפחות באותו ערב.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Late at night, Roger, a thin boy of about fourteen, tries to grab the large purse of a big woman who is walking home alone. (event 1)\n{p:text}The door is open. Roger could run away, but he decides to stay. (event 6)\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:callout}**טיפ לבגרות:** תשובה מצוינת לשינוי: At first… However, later… This shows that…',
							hint: '{p:ul}**change** - להשתנות\n{d:rtl}השוו את התיק באירוע 1 ובאירוע 8.'
						},
						{
							type: 'mcq',
							prompt: 'Why do you think the story is called "Thank You, Ma\'am"?',
							options: [
								'These are the only words Roger can say to show how grateful he is.',
								['It is the name of a hotel.', 'זה לא שם של מלון.'],
								['Mrs. Jones says it to Roger.', 'רוג׳ר אומר את זה - לא היא.'],
								['It is the name of the shoes.', 'הנעליים הן נעלי זמש כחולות.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}בסוף רוג׳ר רוצה להגיד הרבה יותר, אבל מצליח להגיד רק ״תודה, גברתי״. הכותרת מדגישה את הרגע הזה - את ההכרת התודה ואת ההשפעה שלה עליו.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again. (event 12)\n{p:callout}**טיפ לבגרות:** שאלה על כותרת? חפשו איפה המילים מופיעות בסיפור, ומה הן מדגישות.',
							hint: '{p:ul}**Why do you think** - למה לדעתך\n{p:ul}**called** - נקרא\n{d:rtl}אירוע 12.'
						},
						{
							type: 'mcq',
							prompt: 'Does the story prove that Roger never steals again?',
							options: [
								['Yes - he becomes a police officer.', 'זה לא כתוב בסיפור - זו המצאה.'],
								['Yes - Mrs. Jones adopts him.', 'זה לא כתוב בסיפור.'],
								'No - the story does not tell us what happens to him later.',
								['Yes - he buys the shoes the next day.', 'הסיפור לא מספר מה קרה למחרת.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הסיפור מראה שינוי באותו ערב, אבל לא מספר מה קרה אחר כך - הוא אפילו אומר שרוג׳ר לא ראה אותה שוב. אסור להמציא את העתיד.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again. (event 12)\n{p:callout}**טיפ לבגרות:** הבדילו בין מה שהסיפור מראה לבין מה שאנחנו רק מקווים.',
							hint: '{p:ul}**prove** - להוכיח\n{d:rtl}מה כתוב באירוע האחרון על העתיד?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-thank-you-answer',
		section: 'd-4',
		titleEn: 'Answer Like a Pro',
		required: ['d-thank-you-think'],
		position: {
			x: 0,
			y: 3970
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## תשובה בשלושה צעדים\n{d:rtl}במשימות ובמבחנים לא מספיק לדעת את התשובה - צריך לכתוב אותה נכון. זוכרים את שלושת הצעדים?'
						},
						{
							type: 'steps',
							ordered: true,
							steps: [
								'**ANSWER** - עונים על השאלה במשפט אחד ברור.\n{p:text}Roger stays because…',
								'**PROVE** - מביאים ראיה - אירוע מהסיפור.\n{p:text}For example, when the door is open, he…',
								'**EXPLAIN** - מסבירים מה הראיה מראה.\n{p:text}This shows that…'
							]
						},
						{
							type: 'preface',
							text: '{d:rtl}תרגול: סדרו את שלושת המשפטים לתשובה טובה. לחצו על המשפטים לפי הסדר הנכון.'
						},
						{
							type: 'order',
							prompt:
								"{p:text}**Why does Roger stay in Mrs. Jones's room, even when he can run away? Explain.**\n{d:rtl}סדרו את המשפטים לתשובה מלאה: ANSWER → PROVE → EXPLAIN",
							tiles: [
								'Roger stays because he wants Mrs. Jones to trust him.',
								'For example, the door is open, but he does not run, and later he sits where she can see him, near her purse.',
								'This shows that her kindness has started to change him: now her trust is more important to him than escaping.'
							],
							explanation: '{d:rtl}מצוין! זו תשובה מלאה: תשובה ← ראיה ← הסבר.'
						},
						{
							type: 'mcq',
							prompt: 'In the answer you built, which sentence is the PROVE part?',
							options: [
								[
									'Roger stays because he wants Mrs. Jones to trust him.',
									'זה ה־ANSWER - התשובה עצמה.'
								],
								'For example, the door is open, but he does not run…',
								['This shows that her kindness has started to change him…', 'זה ה־EXPLAIN - ההסבר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}משפט הראיה מתאר אירוע מדויק מהסיפור - הדלת הפתוחה, והמקום שבו רוג׳ר יושב.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The door is open. Roger could run away, but he decides to stay. (event 6)\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:callout}**טיפ לבגרות:** בסיפור, ראיה = אירוע מדויק. ״הוא נחמד״ זו לא ראיה.',
							hint: '{p:ul}**PROVE** - ראיה\n{d:rtl}באיזה משפט מתואר אירוע מהסיפור?'
						},
						{
							type: 'preface',
							text: '## בונים תשובה בעצמנו\n{d:rtl}השאלה: How does Mrs. Jones show kindness to Roger? בחרו בכל שלב את המשפט הטוב ביותר.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How does Mrs. Jones show kindness to Roger? Explain.**\n{d:rtl}שלב 1: בחרו את משפט ה־ANSWER הטוב ביותר.',
							options: [
								['Mrs. Jones is a big woman.', 'זה תיאור חיצוני, לא תשובה על טוב לב.'],
								'Mrs. Jones shows kindness by taking care of Roger instead of punishing him.',
								['Roger wants blue suede shoes.', 'זה לא עונה על השאלה על גברת ג׳ונס.']
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How does Mrs. Jones show kindness to Roger? Explain.**\n{d:rtl}שלב 2: בחרו את משפט ה־PROVE הטוב ביותר.',
							options: [
								'For example, she cooks dinner for him and gives him ten dollars for the shoes.',
								['For example, she kicks him on the street.', 'זה דווקא מראה תקיפות, לא טוב לב.'],
								['For example, she works at a hotel.', 'זה מידע על העבודה שלה, לא ראיה לטוב לב.']
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How does Mrs. Jones show kindness to Roger? Explain.**\n{d:rtl}שלב 3: בחרו את משפט ה־EXPLAIN הטוב ביותר.',
							options: [
								['This shows that she likes cooking.', 'ההסבר לא קשור לשאלה.'],
								['Langston Hughes was a famous writer.', 'זה מידע על הסופר, לא הסבר.'],
								'This shows that she sees Roger as a person who deserves a second chance.'
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}התשובה המלאה:\n{p:text}Mrs. Jones shows kindness by taking care of Roger instead of punishing him.\n{p:text}For example, she cooks dinner for him and gives him ten dollars for the shoes.\n{p:text}This shows that she sees Roger as a person who deserves a second chance.'
						}
					],
					retryMissed: true
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2 (רשות)',
							title: 'כותבים לבד',
							subtitle: 'למי שרוצה לתרגל תשובה מלאה בכתיבה: ANSWER → PROVE → EXPLAIN.',
							level: 2
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Now you! Which moment in the story interested you most? Explain why.**\n{d:rtl}עכשיו תורכם! איזה רגע בסיפור עניין אתכם הכי הרבה? הסבירו למה. (40-60 מילים)',
							wordBank: [
								'The moment that interested me most is when',
								'I expected',
								'However,',
								'This shows that'
							],
							minWords: 40,
							maxWords: 60,
							checklist: [
								'עניתי על השאלה',
								'תיארתי את האירוע',
								'הסברתי למה',
								'כתבתי לפחות 40 מילים'
							],
							modelAnswer:
								'The moment that interested me most is when the door is open and Roger decides to stay. I expected him to run away, because he was afraid. However, he stays and even sits where Mrs. Jones can see him. This shows that her kindness has started to change him.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Thank You, Ma\'am" by Langston Hughes (Bagrut Module D, B1 level). A good answer has three parts: ANSWER (one clear sentence), PROVE (a quote or detail from the story, with a event number), EXPLAIN ("This shows that..." / "because"). Judge structure and relevance, not literary depth. Model answer: The moment that interested me most is when the door is open and Roger decides to stay. I expected him to run away, because he was afraid. However, he stays and even sits where Mrs. Jones can see him. This shows that her kindness has started to change him.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-thank-you-challenge',
		section: 'd-4',
		titleEn: 'Literature Challenge',
		required: ['d-thank-you-answer'],
		position: {
			x: -70,
			y: 4090
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## אתגר: הכול ביחד\n{d:rtl}6 שאלות מעורבות. נסו לענות בלי לפתוח את מפת הסיפור.'
						},
						{
							type: 'mcq',
							prompt: 'When does the story begin?',
							options: [
								['early in the morning', 'זה לא בבוקר.'],
								['at lunchtime', 'זה לא בצהריים.'],
								'late at night',
								['on a Sunday afternoon', 'לא כתוב אחר צהריים.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הסיפור מתחיל מאוחר בלילה, כשגברת ג׳ונס הולכת לבד הביתה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Late at night, Roger, a thin boy of about fourteen, tries to grab the large purse of a big woman who is walking home alone. (event 1)\n{p:callout}**טיפ לבגרות:** זמן ומקום (setting) הם חלק חשוב מכל סיפור.',
							hint: '{p:ul}**When** - מתי\n{d:rtl}אירוע 1.'
						},
						{
							type: 'mcq',
							prompt: 'What does Mrs. Jones give Roger at the end?',
							options: [
								['a pair of shoes', 'מלכודת! היא נותנת כסף לנעליים - לא את הנעליים עצמן.'],
								'ten dollars',
								['a job', 'אין עבודה בסיפור בשבילו.'],
								['a book', 'אין ספר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}היא נותנת לו עשרה דולרים, כדי שיקנה את הנעליים בעצמו - בלי לגנוב.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}After dinner, she gives Roger ten dollars to buy the blue suede shoes. (event 10)\n{p:callout}**טיפ לבגרות:** קראו בדיוק: ״כסף לנעליים״ ≠ ״נעליים״.',
							hint: '{p:ul}**give** - נותנת\n{d:rtl}אירוע 10.'
						},
						{
							type: 'mcq',
							prompt: '"Behave yourself!" means…',
							options: [
								'Be good.',
								['Be fast.', 'מהירות לא קשורה.'],
								['Be quiet.', 'שקט לא בדיוק - זה ״תתנהג יפה״.'],
								['Be careful on the street.', 'קרוב, אבל המשמעות היא ״תתנהג כמו שצריך״.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}Behave yourself = תתנהג יפה. אלה המילים האחרונות שלה אליו - עוד תזכורת לשיעור שלה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She warns him never to steal again: shoes bought with stolen money will "burn your feet". (event 11)\n{p:text}At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again. (event 12)\n{p:callout}**טיפ לבגרות:** ביטויים מהדיאלוג חוזרים הרבה בשאלות. כדאי להכיר אותם.',
							hint: '{d:rtl}behave = להתנהג.'
						},
						{
							type: 'mcq',
							prompt: 'Which word best describes Roger at the end?',
							options: [
								['dangerous', 'הוא כבר לא מתנהג כמו גנב.'],
								['rude', 'הוא מנסה להודות - הוא לא חצוף.'],
								['lazy', 'הסיפור לא מראה אותו עצלן.'],
								'grateful'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}grateful = אסיר תודה. הוא רוצה להגיד יותר מ״תודה, גברתי״ - אבל לא מוצא מילים.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again. (event 12)\n{p:callout}**טיפ לבגרות:** מילים לתיאור דמויות: grateful, confused, frightened, generous, firm.',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{d:rtl}מה הוא רוצה להגיד ליד הדלת?'
						},
						{
							type: 'mcq',
							prompt: 'Mrs. Jones is both firm and kind. Which pair of actions shows this?',
							options: [
								['She cooks and she sleeps.', 'שינה לא מראה אופי.'],
								['She works and she walks.', 'הליכה לא מראה תקיפות או טוב לב.'],
								'She shakes him on the street, and later she feeds him.',
								['She laughs and she sings.', 'אין שירה בסיפור.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}ברחוב היא תקיפה (מטלטלת אותו, גוררת אותו). בבית היא טובת לב (מבשלת לו ונותנת לו כסף). השילוב הזה הוא מה שמשנה את רוג׳ר.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The purse is too heavy. The strap breaks, and Roger falls on his back. The woman kicks him, picks him up and shakes him. (event 2)\n{p:text}She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him. (event 9)\n{p:callout}**טיפ לבגרות:** שאלה על שתי תכונות = שני מעשים, אחד לכל תכונה.',
							hint: '{p:ul}**both** - גם וגם\n{d:rtl}firm = תקיפה. kind = טובת לב. חפשו מעשה אחד לכל תכונה.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is NOT true according to the story?',
							options: [
								['Roger falls when the strap breaks.', 'זה נכון - אירוע 2.'],
								'Mrs. Jones takes Roger to the police.',
								['The door is open, but Roger stays.', 'זה נכון - אירוע 6.'],
								['Roger never sees Mrs. Jones again.', 'זה נכון - אירוע 12.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}גברת ג׳ונס לא לוקחת אותו למשטרה - היא לוקחת אותו הביתה. זו ההפתעה הגדולה של הסיפור.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She sees that his face is dirty and asks if there is anyone at home to tell him to wash it. He says no. So she drags him to her home. (event 3)\n{p:callout}**טיפ לבגרות:** שימו לב למילה NOT! מסמנים אותה בעיגול לפני שעונים.',
							hint: '{p:ul}**NOT true** - לא נכון\n{d:rtl}NOT = לא נכון.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-thank-you-mastery',
		section: 'd-4',
		titleEn: 'Mastery Check',
		required: ['d-thank-you-challenge'],
		position: {
			x: -100,
			y: 4210
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## בדיקת שליטה\n{d:rtl}8 שאלות אחרונות. כאן אין רמזים - רק משוב בסוף כל שאלה. בסוף תקבלו ציון והמלצה על מה לחזור.'
						},
						{
							type: 'mcq',
							prompt: 'Who tries to steal the purse?',
							options: [
								['Mrs. Jones', 'היא הבעלים של התיק.'],
								['a neighbor', 'אין שכן בסיפור.'],
								'Roger',
								['a police officer', 'אין שוטר בסיפור.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}רוג׳ר - נער בן 14 בערך - מנסה לחטוף את התיק.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Late at night, Roger, a thin boy of about fourteen, tries to grab the large purse of a big woman who is walking home alone. (event 1)\n{p:callout}**טיפ לבגרות:** Who = מחפשים דמות.'
						},
						{
							type: 'mcq',
							prompt: '"mistrust" means…',
							options: [
								['to believe someone', 'זה ההפך - trust.'],
								'to think someone may do something bad',
								['to forgive someone', 'לסלוח זה forgive.'],
								['to thank someone', 'להודות זה thank.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}mistrust = לחשוד, לא לסמוך.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:callout}**טיפ לבגרות:** mis- הופכת את המשמעות.'
						},
						{
							type: 'mcq',
							prompt: 'The story is mostly about…',
							options: [
								'how kindness and trust can change a boy',
								['how to buy shoes', 'הנעליים הן רק פרט.'],
								['life in a hotel', 'המלון הוא רק מקום העבודה שלה.'],
								['a police chase', 'אין מרדף משטרתי.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הסיפור עוסק באיך טוב לב ואמון משנים את רוג׳ר.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}The door is open. Roger could run away, but he decides to stay. (event 6)\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:text}At the door, Roger wants to say more than "Thank you, ma\'am," but he cannot. She closes the door, and he never sees her again. (event 12)\n{p:callout}**טיפ לבגרות:** theme = על מה הסיפור.'
						},
						{
							type: 'mcq',
							prompt: 'In which event does Roger offer to go to the store?',
							options: [
								['event 2', 'באירוע 2 הוא נופל.'],
								['event 5', 'באירוע 5 הוא מספר על הנעליים.'],
								'event 8',
								['event 12', 'באירוע 12 הם נפרדים.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}באירוע 8: התיק על המיטה, רוג׳ר יושב במקום שהיא רואה אותו ומציע ללכת למכולת.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:callout}**טיפ לבגרות:** ציון אירוע מדויק מחזק כל תשובה.'
						},
						{
							type: 'mcq',
							prompt: 'Mrs. Jones\'s words about shoes that "burn your feet" show that…',
							options: [
								['the shoes are dangerous', 'זה פירוש מילולי.'],
								'she wants Roger to understand that stealing will not make him happy',
								['she does not like shoes', 'זה לא העניין.'],
								["Roger's feet are hurt", 'זה פירוש מילולי.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}זה ביטוי ציורי: מה שמשיגים בגניבה לא יביא שמחה.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She warns him never to steal again: shoes bought with stolen money will "burn your feet". (event 11)\n{p:callout}**טיפ לבגרות:** ביטוי ציורי = לא מילה במילה.'
						},
						{
							type: 'mcq',
							prompt: 'Which is the best evidence for: "Roger wants Mrs. Jones to trust him"?',
							options: [
								['He tries to grab her purse.', 'זה ההפך - זה מעשה של גניבה.'],
								['He falls on his back.', 'זה מה שקרה לו, לא בחירה שלו.'],
								['He wants blue suede shoes.', 'זו הסיבה לגניבה, לא ראיה לאמון.'],
								'He sits where she can see him and offers to go to the store.'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}הישיבה במקום גלוי וההצעה לעזור הן מעשים שמראים בדיוק שהוא רוצה שתסמוך עליו.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}Her purse is on the bed. Roger sits where she can see him, because he does not want her to mistrust him now. He even offers to go to the store for her. (event 8)\n{p:callout}**טיפ לבגרות:** ראיה טובה מוכיחה בדיוק את הטענה.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is a good EXPLANATION (not just a fact)?',
							options: [
								['Mrs. Jones gives Roger ten dollars.', 'זו עובדה מהסיפור, לא הסבר.'],
								'This shows that she believes Roger deserves a second chance.',
								['The story happens at night.', 'עובדה על הזמן.'],
								['Langston Hughes was a poet.', 'עובדה על הסופר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הסבר מתחיל לרוב ב־This shows that… ואומר מה הראיה מלמדת.\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}After dinner, she gives Roger ten dollars to buy the blue suede shoes. (event 10)\n{p:callout}**טיפ לבגרות:** ANSWER → PROVE → EXPLAIN.'
						},
						{
							type: 'mcq',
							prompt: "Why doesn't Mrs. Jones call the police?",
							options: [
								['She is afraid of Roger.', 'היא לא מפחדת ממנו - היא תפסה אותו לבד.'],
								['She has no phone.', 'הסיפור לא מדבר על טלפון.'],
								'She believes that care and trust will teach him more than punishment.',
								['She wants to keep the purse.', 'התיק ממילא שלה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}לפי מה שהיא עושה, היא מאמינה שטיפול, כבוד ואמון ילמדו את רוג׳ר יותר מעונש. זו הסקה - ולכן כותבים It seems that…\n{d:rtl}📜 ראיה מהסיפור:\n{p:text}She sees that his face is dirty and asks if there is anyone at home to tell him to wash it. He says no. So she drags him to her home. (event 3)\n{p:text}She cooks a simple dinner, and they eat together. She tells him about her job at a hotel beauty shop. She does not ask him questions that could embarrass him. (event 9)\n{p:text}After dinner, she gives Roger ten dollars to buy the blue suede shoes. (event 10)\n{p:callout}**טיפ לבגרות:** כשהתשובה היא הסקה - סמנו אותה: It seems that…'
						}
					]
				}
			]
		}
	},
	{
		id: 'd-thank-you-samples',
		section: 'd-4',
		titleEn: 'Sample Answers',
		required: ['d-thank-you-mastery'],
		position: {
			x: -70,
			y: 4330
		},
		big: true,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## שאלות ותשובות לדוגמה\n{d:rtl}אלו שאלות בסגנון המשימות והמבחנים בבית הספר. התשובות כתובות באנגלית פשוטה. הביטויים המודגשים הם ״ביטויי זהב״ - אפשר להשתמש בהם בכל תשובה, על כל סיפור ושיר!\n\n{p:callout}בסיפור לא מציינים מספרי שורות - מתארים את האירוע במדויק. בתשובה במבחן אפשר להוסיף ציטוט קצר מהסיפור, אם אתם זוכרים אותו.'
						},
						{
							type: 'preface',
							text: '### שאלה 1\n{p:text}**How does Roger feel when Mrs. Jones takes him to her home? Explain why.**\n---\n{p:text}**At first, Roger feels** frightened and confused. Mrs. Jones caught him on the street, and now she is dragging him to her home. **He expects** her to punish him or call the police. **However**, she tells him to wash his face and leaves the door open. **This shows that** he does not understand her at first, **because** she does the opposite of what he expects.'
						},
						{
							type: 'preface',
							text: '### שאלה 2\n{p:text}**Describe Mrs. Jones. Give two examples.**\n---\n{p:text}**Mrs. Jones is** both strong and kind. **For example**, when Roger tries to steal her purse, she kicks him, picks him up and drags him home. **In addition**, at home she cooks dinner for him and gives him ten dollars for the shoes. **This shows that** she is firm about right and wrong, **but** she also believes Roger deserves a second chance.'
						},
						{
							type: 'preface',
							text: '### שאלה 3\n{p:text}**What is the most important moment in the story? Explain why.**\n---\n{p:text}**In my opinion, the most important moment is** when the door is open and Roger decides to stay. **Before this moment**, he only wanted to run away. **After it**, he sits where Mrs. Jones can see him and even offers to go to the store for her. **This shows that** her kindness has started to change him. **That is why** this is the turning point of the story.'
						},
						{
							type: 'preface',
							text: '### שאלה 4\n{p:text}**What is the message of the story? Do you agree with it? Explain.**\n---\n{p:text}**The message of the story is that** kindness and trust can change a person more than punishment. **For example**, Mrs. Jones does not call the police; she feeds Roger and trusts him with her purse, and he does not take it. **I agree with this message because** people who feel respected want to deserve that respect. **However**, she also warns him clearly not to steal again.'
						},
						{
							type: 'preface',
							text: '### שאלה 5\n{p:text}**Why do you think the story is called "Thank You, Ma\'am"?**\n---\n{p:text}**I think the story is called** "Thank You, Ma\'am" **because** these are the only words Roger can say at the end. **He wants to** say much more to Mrs. Jones, **but** he cannot find the words. **This shows that** he is very grateful and moved by her kindness. **In addition**, the title reminds us that one evening of kindness can mean a lot.'
						},
						{
							type: 'preface',
							text: '### שאלה 6\n{p:text}**Relate the story to your life or to someone you know.**\n---\n{p:text}**The story reminds me of** a teacher I had in seventh grade. A boy in my class broke a window, and everyone expected her to punish him. **Instead**, she talked to him quietly and asked him to help her fix the class garden. **Like Mrs. Jones**, she showed him trust, and **after that** he behaved much better. **This shows that** kindness can sometimes teach more than punishment.'
						},
						{
							type: 'summary',
							title: 'ביטויי זהב',
							lines: [
								'**At first, … However, later …** - בהתחלה … אבל בהמשך …',
								'**In my opinion, …** - לדעתי, …',
								'**I think that … because …** - אני חושב/ת ש… כי …',
								'**For example, when …, he/she …** - למשל, כאשר … הוא/היא …',
								'**This shows that …** - זה מראה ש…',
								'**It seems that … / We can understand that …** - נראה ש… / אפשר להבין ש…',
								'**The message of the story is that …** - המסר של הסיפור הוא ש…',
								'**In addition, …** - בנוסף, …',
								'**Before this moment, … After it, …** - לפני הרגע הזה … אחריו …',
								'**I agree with this message because …** - אני מסכים/ה עם המסר כי …',
								'**The story reminds me of …** - הסיפור מזכיר לי את …',
								'**That is why …** - זו הסיבה ש…'
							]
						},
						{
							type: 'summary',
							title: 'מושגים',
							lines: [
								'**character** - דמות',
								'**setting** - זמן ומקום ההתרחשות',
								'**plot** - עלילה - רצף האירועים',
								'**conflict** - קונפליקט - הבעיה או המאבק בסיפור',
								'**turning point** - נקודת מפנה - הרגע שבו הכול משתנה',
								'**dialogue** - דיאלוג - שיחה בין דמויות',
								'**theme** - נושא - על מה הסיפור',
								'**message** - מסר - מה הסיפור מלמד אותנו',
								'**figurative language** - שפה ציורית - לא מילה במילה (״burn your feet״)',
								'**open ending** - סוף פתוח - לא יודעים מה יקרה אחר כך'
							]
						}
					]
				}
			]
		}
	}
];
