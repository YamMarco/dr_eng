// Module F, story 1: A Summer's Reading - Bernard Malamud (1956).
// Source: docs/material/module-f/module_F_two_stories.json (scripts/module-f-import.py).
import type { LessonNode } from '../types';

export const f1Lessons: LessonNode[] = [
	{
		id: 'f-summer-words',
		section: 'f-1',
		titleEn: 'Key words',
		required: [],
		position: {
			x: -130,
			y: 130
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: "## A Summer's Reading\n{p:text}Bernard Malamud (1956)\n{d:rtl}**זמן ומקום:**\n{p:text}A poor immigrant neighborhood in New York, during a very hot summer in the 1930s (the Great Depression)."
						},
						{
							type: 'word-card',
							word: 'drop out (of school)',
							translationHe: 'לעזוב את הלימודים'
						},
						{
							type: 'word-card',
							word: 'ashamed',
							translationHe: 'מתבייש'
						},
						{
							type: 'word-card',
							word: 'neighbor / neighborhood',
							translationHe: 'שכן / שכונה'
						},
						{
							type: 'word-card',
							word: 'respect / self-respect',
							translationHe: 'כבוד / כבוד עצמי'
						},
						{
							type: 'word-card',
							word: 'rumor',
							translationHe: 'שמועה'
						},
						{
							type: 'word-card',
							word: 'pretend',
							translationHe: 'להעמיד פנים'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'drop out (of school)',
									he: 'לעזוב את הלימודים'
								},
								{
									en: 'ashamed',
									he: 'מתבייש'
								},
								{
									en: 'neighbor / neighborhood',
									he: 'שכן / שכונה'
								},
								{
									en: 'respect / self-respect',
									he: 'כבוד / כבוד עצמי'
								},
								{
									en: 'rumor',
									he: 'שמועה'
								},
								{
									en: 'pretend',
									he: 'להעמיד פנים'
								}
							]
						},
						{
							type: 'word-card',
							word: 'avoid',
							translationHe: 'להימנע, להתחמק'
						},
						{
							type: 'word-card',
							word: 'mentor',
							translationHe: 'מורה דרך, מדריך'
						},
						{
							type: 'word-card',
							word: 'heat',
							translationHe: 'חום כבד'
						},
						{
							type: 'word-card',
							word: 'improve',
							translationHe: 'לשפר'
						},
						{
							type: 'word-card',
							word: 'hopeful',
							translationHe: 'מלא תקווה / אופטימי'
						},
						{
							type: 'word-card',
							word: 'open ending',
							translationHe: 'סוף פתוח'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'avoid',
									he: 'להימנע, להתחמק'
								},
								{
									en: 'mentor',
									he: 'מורה דרך, מדריך'
								},
								{
									en: 'heat',
									he: 'חום כבד'
								},
								{
									en: 'improve',
									he: 'לשפר'
								},
								{
									en: 'hopeful',
									he: 'מלא תקווה / אופטימי'
								},
								{
									en: 'open ending',
									he: 'סוף פתוח'
								}
							]
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-summer-understand-1',
		section: 'f-1',
		titleEn: 'Understand 1',
		required: ['f-summer-words'],
		position: {
			x: -130,
			y: 250
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### Meet George\n{p:text}George Stoyonovich is almost twenty. He left high school at sixteen, about four years ago. He has no job, and he is ashamed to tell people that he never finished school.\n{d:rtl}ג׳ורג׳ כמעט בן 20. הוא עזב את התיכון בגיל 16, לפני כמעט ארבע שנים. אין לו עבודה, והוא מתבייש לספר שלא סיים את הלימודים.'
						},
						{
							type: 'mcq',
							prompt: 'How old is George?',
							options: ['almost twenty', 'sixteen', 'twenty-five'],
							correctIndex: 0,
							explanation: 'Almost twenty. Sixteen is the age when he left school.'
						},
						{
							type: 'preface',
							text: '### Family and home\n{p:text}George lives with his father and his older sister, Sophie. His mother is dead. His father works in a fish market, and Sophie works in a cafeteria. They live in a small, hot apartment.\n{d:rtl}ג׳ורג׳ גר עם אבא שלו ועם אחותו הגדולה, סופי. אמא שלו נפטרה. האבא עובד בשוק דגים, וסופי עובדת בקפטריה. הם גרים בדירה קטנה וחמה.'
						},
						{
							type: 'mcq',
							prompt: 'Who sometimes gives George money?',
							options: ['Sophie', 'his father', 'a neighbor'],
							correctIndex: 0,
							explanation: 'Sophie works, takes care of the home and sometimes gives George money.'
						},
						{
							type: 'preface',
							text: '### Time and place\n{p:text}The story takes place in a poor neighborhood in New York in the 1930s, during the Great Depression. Many families are immigrants, and good jobs are hard to find. The summer is very hot.\n{d:rtl}הסיפור מתרחש בשכונה ענייה בניו יורק בשנות ה־30, בתקופת ״השפל הגדול״ - משבר כלכלי קשה. רוב המשפחות הן משפחות מהגרים, וקשה למצוא עבודה טובה. הקיץ חם מאוד.'
						},
						{
							type: 'mcq',
							prompt: 'Why is it hard for George to find a good job?',
							options: [
								'He has no education, and times are hard.',
								'He lives far from the city.',
								'He is too young to work.'
							],
							correctIndex: 0,
							explanation: "Connect the time (the Depression) to George's situation (no education)."
						},
						{
							type: 'preface',
							text: "### George's days and dreams\n{p:text}During the day, George stays home, listens to the radio and reads magazines. At night he walks to a quiet park and dreams about a good job, a house and people's respect. But he does nothing to make his dreams come true.\n{d:rtl}ביום ג׳ורג׳ נשאר בבית, מקשיב לרדיו וקורא מגזינים. בלילה הוא הולך לפארק שקט וחולם על עבודה טובה, על בית ועל כבוד. אבל הוא לא עושה שום דבר כדי להגשים את החלומות."
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Complete: George dreams about ____, but he ____.**\n{p:callout}Separate his dreams from his actions.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: During the day, George stays home, listens to the radio and reads magazines. At night he walks to a quiet park and dreams about a good job, a house and people\'s respect. But he does nothing to make his dreams come true. Task: Complete: George dreams about ____, but he ____ Notes: Separate his dreams from his actions.'
						},
						{
							type: 'preface',
							text: '### Meet Mr. Cattanzara\n{p:text}Mr. Cattanzara lives on the next block. He works in a subway booth, giving people change, but every night he reads The New York Times from beginning to end. He is kind to George. Sometimes he comes home drunk.\n{d:rtl}מר קטנזרה גר ברחוב הסמוך. הוא עובד בתא בתחנת הרכבת התחתית ופורט כסף לנוסעים, אבל בכל ערב הוא קורא את ״הניו יורק טיימס״ - עיתון של אנשים משכילים - מההתחלה עד הסוף. הוא נחמד לג׳ורג׳. לפעמים הוא חוזר הביתה שיכור.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Why does George care what Mr. Cattanzara thinks?**',
							modelAnswer:
								'He is the only adult who shows real interest in George, and George sees him as a smart man.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Mr. Cattanzara lives on the next block. He works in a subway booth, giving people change, but every night he reads The New York Times from beginning to end. He is kind to George. Sometimes he comes home drunk. Task: Why does George care what Mr. Cattanzara thinks? Notes: He is the only adult who shows real interest in George, and George sees him as a smart man.'
						},
						{
							type: 'preface',
							text: '### The first meeting\n{p:text}Mr. Cattanzara asks George what he is doing this summer. George is ashamed, so he lies twice: he says he is waiting for a job, and he says he is reading about a hundred books from a library list. Mr. Cattanzara says they can talk about the books later.\n{d:rtl}מר קטנזרה שואל את ג׳ורג׳ מה הוא עושה בקיץ. ג׳ורג׳ מתבייש, ולכן הוא משקר פעמיים: הוא אומר שהוא מחכה לעבודה, ושהוא קורא כמאה ספרים מרשימה של הספרייה. מר קטנזרה אומר שהם יוכלו לדבר על הספרים בהמשך.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Was George telling the truth? Explain in one sentence.**',
							modelAnswer: "No. He lies because he wants Mr. Cattanzara's respect.",
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Mr. Cattanzara asks George what he is doing this summer. George is ashamed, so he lies twice: he says he is waiting for a job, and he says he is reading about a hundred books from a library list. Mr. Cattanzara says they can talk about the books later. Task: Was George telling the truth? Explain in one sentence Notes: No. He lies because he wants Mr. Cattanzara\'s respect.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-summer-understand-2',
		section: 'f-1',
		titleEn: 'Understand 2',
		required: ['f-summer-understand-1'],
		position: {
			x: -130,
			y: 370
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### The first rumor\n{p:text}Soon, people in the neighborhood smile at George and say he is a good boy. His father and Sophie also hear about the books, and Sophie gives him a dollar a week. George thinks Mr. Cattanzara told them. He even buys some books, but he does not read them.\n{d:rtl}מהר מאוד אנשים בשכונה מחייכים אל ג׳ורג׳ ואומרים שהוא ״בחור טוב״. גם אבא וסופי שומעים על הספרים, וסופי נותנת לו דולר בשבוע. ג׳ורג׳ חושב שמר קטנזרה סיפר להם. הוא אפילו קונה כמה ספרים, אבל לא קורא אותם.'
						},
						{
							type: 'mcq',
							prompt: 'Why do people treat George differently?',
							options: [
								'They believe he is reading the books.',
								'He found a job.',
								'He went back to school.'
							],
							correctIndex: 0,
							explanation: 'They believe the story about his reading.'
						},
						{
							type: 'preface',
							text: '### The lie grows\n{p:text}George enjoys the respect, but he feels uncomfortable. He tries to read, but he gives up. He avoids Mr. Cattanzara and even crosses the street when he sees him.\n{d:rtl}ג׳ורג׳ נהנה מהכבוד, אבל לא מרגיש בנוח. הוא מנסה לקרוא - ומוותר. הוא מתחמק ממר קטנזרה ואפילו עובר לצד השני של הרחוב כשהוא רואה אותו.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**What is the conflict inside George?**',
							modelAnswer:
								'He wants respect, but he is not ready to work for it, and he is afraid of the truth.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: George enjoys the respect, but he feels uncomfortable. He tries to read, but he gives up. He avoids Mr. Cattanzara and even crosses the street when he sees him. Task: What is the conflict inside George? Notes: He wants respect, but he is not ready to work for it, and he is afraid of the truth.'
						},
						{
							type: 'preface',
							text: '### The second meeting\n{p:text}One night Mr. Cattanzara, a little drunk, stops George. He gives him a nickel for a lemon ice, as if George were a small child. Then he asks George to name just one book he has read. George cannot answer. Mr. Cattanzara warns him not to waste his life as he did, and walks away.\n{d:rtl}ערב אחד מר קטנזרה, קצת שיכור, עוצר את ג׳ורג׳. הוא נותן לו מטבע כדי לקנות ״ארטיק לימון״ - כאילו ג׳ורג׳ ילד קטן. אחר כך הוא מבקש ממנו לציין שם של ספר אחד בלבד שקרא. ג׳ורג׳ לא מצליח לענות. מר קטנזרה מזהיר אותו לא לבזבז את החיים כמו שהוא עצמו עשה, והולך.'
						},
						{
							type: 'mcq',
							prompt: 'Why does Mr. Cattanzara give George a nickel?',
							options: [
								'to show that George is behaving like a child',
								'because George is hungry',
								"because he forgot George's age"
							],
							correctIndex: 0,
							explanation: 'Treating George like a child is a message, not a mistake.'
						},
						{
							type: 'preface',
							text: '### Hiding\n{p:text}George is so ashamed that he stays in his room for a week. Sophie finds out that he has not read the books. She stops giving him money and calls him lazy. His father cries. This is the lowest point of the story.\n{d:rtl}ג׳ורג׳ מתבייש כל כך שהוא נשאר בחדר שלו שבוע שלם. סופי מגלה שהוא לא קרא את הספרים. היא מפסיקה לתת לו כסף וקוראת לו עצלן. אבא שלו בוכה. זו הנקודה הנמוכה ביותר בסיפור.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**How do Sophie and the father react? Write two sentences.**',
							modelAnswer:
								'Sophie is angry and stops the money; the father cries because he is worried.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: George is so ashamed that he stays in his room for a week. Sophie finds out that he has not read the books. She stops giving him money and calls him lazy. His father cries. This is the lowest point of the story. Task: How do Sophie and the father react? Write two sentences Notes: Sophie is angry and stops the money; the father cries because he is worried.'
						},
						{
							type: 'preface',
							text: '### The second rumor\n{p:text}One hot night George goes out. To his surprise, people still respect him. Someone asks if it is true that he finished all the books, and George says yes - another lie. He understands that Mr. Cattanzara has told people that he finished the books.\n{d:rtl}בלילה חם אחד ג׳ורג׳ יוצא החוצה. להפתעתו, אנשים עדיין מכבדים אותו. מישהו שואל אם זה נכון שסיים את כל הספרים, וג׳ורג׳ עונה ״כן״ - עוד שקר. הוא מבין שמר קטנזרה סיפר לאנשים שהוא סיים את הספרים.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Who probably spread the new rumor, and why?**',
							modelAnswer:
								"Mr. Cattanzara - to protect George's dignity and to push him to act. Mark this as an inference.",
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: One hot night George goes out. To his surprise, people still respect him. Someone asks if it is true that he finished all the books, and George says yes - another lie. He understands that Mr. Cattanzara has told people that he finished the books. Task: Who probably spread the new rumor, and why? Notes: Mr. Cattanzara - to protect George\'s dignity and to push him to act. Mark this as an inference.'
						},
						{
							type: 'preface',
							text: '### The ending\n{p:text}One evening in the fall, George goes to the library. He counts a hundred books and sits down at a table to read. He is trembling.\n{d:rtl}ערב אחד בסתיו ג׳ורג׳ הולך לספרייה. הוא סופר מאה ספרים ומתיישב ליד שולחן כדי לקרוא. הוא רועד - אולי מהתרגשות, אולי מפחד. הסיפור לא אומר אם יסיים את הספרים.'
						},
						{
							type: 'mcq',
							prompt: 'What exactly does George do at the end?',
							options: [
								'He begins to read.',
								'He finishes all the books.',
								'He goes back to school.'
							],
							correctIndex: 0,
							explanation: 'He begins reading; the story does not say he finishes.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-summer-think',
		section: 'f-1',
		titleEn: 'Think',
		required: ['f-summer-understand-2'],
		position: {
			x: -130,
			y: 490
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### Dream versus action\n{p:text}At the beginning, George only dreams and lies. At the end, he finally acts. The story shows the gap between wanting something and working for it.\n{d:rtl}בהתחלה ג׳ורג׳ רק חולם ומשקר. בסוף הוא סוף־סוף עושה משהו. הסיפור מראה את הפער בין לרצות משהו לבין לעבוד בשבילו.'
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Give one contrast between the beginning and the end.**\n{p:callout}The answer needs evidence from the beginning and from the end.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: At the beginning, George only dreams and lies. At the end, he finally acts. The story shows the gap between wanting something and working for it. Task: Give one contrast between the beginning and the end Notes: The answer needs evidence from the beginning and from the end.'
						},
						{
							type: 'preface',
							text: "### Mr. Cattanzara's role\n{p:text}Mr. Cattanzara is like a mentor. He shows George respect, he challenges him at the second meeting, and it seems that he spreads the second rumor. He wants George to avoid his own mistakes.\n{d:rtl}מר קטנזרה הוא כמו מורה דרך: הוא מכבד את ג׳ורג׳, מאתגר אותו בפגישה השנייה, וכנראה גם מפיץ את השמועה השנייה. הוא רוצה שג׳ורג׳ לא יחזור על הטעויות שלו."
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**How does Mr. Cattanzara influence George? Give two actions.**',
							llmGrade: true,
							gradingNotes:
								"A short literature answer about \"A Summer's Reading\" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Mr. Cattanzara is like a mentor. He shows George respect, he challenges him at the second meeting, and it seems that he spreads the second rumor. He wants George to avoid his own mistakes. Task: How does Mr. Cattanzara influence George? Give two actions Notes: Accept careful interpretations: 'it seems that he spread the rumor'."
						},
						{
							type: 'preface',
							text: "### Symbols and setting\n{p:text}The heat in George's small room is like the pressure of his lie. The quiet park stands for his dream. The library is the place of real change. The fall is a new season - maybe a new start.\n{d:rtl}החום בחדר הקטן הוא כמו הלחץ של השקר. הפארק השקט מסמל את החלום. הספרייה היא המקום של שינוי אמיתי. הסתיו הוא עונה חדשה - אולי התחלה חדשה."
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Choose one symbol and explain it in two sentences.**\n{p:callout}Name the symbol, then explain what it stands for, with an event.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: The heat in George\'s small room is like the pressure of his lie. The quiet park stands for his dream. The library is the place of real change. The fall is a new season - maybe a new start. Task: Choose one symbol and explain it in two sentences Notes: Name the symbol, then explain what it stands for, with an event.'
						},
						{
							type: 'preface',
							text: '### Themes and the open ending\n{p:text}Important ideas: education, respect and self-respect, responsibility, and the chance to change. The ending is hopeful but open: we do not know if George will continue.\n{d:rtl}רעיונות מרכזיים: השכלה, כבוד וכבוד עצמי, אחריות והאפשרות להשתנות. הסוף אופטימי אבל פתוח: אנחנו לא יודעים אם ג׳ורג׳ ימשיך.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Does the ending prove that George will succeed?**',
							modelAnswer: 'No. It shows a first step; future success is not certain.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Important ideas: education, respect and self-respect, responsibility, and the chance to change. The ending is hopeful but open: we do not know if George will continue. Task: Does the ending prove that George will succeed? Notes: No. It shows a first step; future success is not certain.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-summer-answer',
		section: 'f-1',
		titleEn: 'Answer',
		required: ['f-summer-think'],
		position: {
			x: -130,
			y: 610
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### Answer builder: three steps\n{p:text}Question: Why does George lie to Mr. Cattanzara? Build your answer in three steps: ANSWER - PROVE (an event from the story) - EXPLAIN.\n{d:rtl}שאלת Why דורשת סיבה. בונים תשובה בשלושה צעדים: תשובה ← ראיה מהסיפור ← הסבר.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Write three sentences.**',
							wordBank: ['George lies because', 'For example,', 'This shows that'],
							modelAnswer:
								"George lies because he is ashamed and wants Mr. Cattanzara's respect. For example, he says he is reading about a hundred books, although he is not reading at all. This shows that he cares more about how people see him than about real change.",
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Question: Why does George lie to Mr. Cattanzara? Build your answer in three steps: ANSWER - PROVE (an event from the story) - EXPLAIN. Task: Write three sentences Notes: Model: George lies because he is ashamed and wants Mr. Cattanzara\'s respect. For example, he says he is reading about a hundred books, although he is not reading at all. This shows that he cares more about how people see him than about real change.'
						},
						{
							type: 'preface',
							text: "### Fact or inference?\n{p:text}Fact: George tells people that he finished the books. Inference: Mr. Cattanzara spread the second rumor. In your answers, show the difference: 'We can infer that…' / 'It seems that…'.\n{d:rtl}עובדה = כתוב בסיפור. הסקה = מבינים מהרמזים. בתשובה מסמנים הסקה במילים: We can infer that… / It seems that…"
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is an inference, not a fact written in the story?',
							options: [
								'Mr. Cattanzara spread the second rumor.',
								'George tells people that he finished the books.',
								'Sophie stops giving George money.'
							],
							correctIndex: 0,
							explanation: 'Separate what the story says from what we understand.'
						},
						{
							type: 'preface',
							text: '### From a sentence to a paragraph\n{p:text}A 5-point answer is a short paragraph (about 60-100 words): answer, two pieces of evidence, explanation and a short ending. Use linking words: however, as a result, in addition, in other words. Write about the story in the present simple.\n{d:rtl}בחמש יחידות התשובה היא פסקה קצרה (כ־60-100 מילים): תשובה, שתי ראיות, הסבר וסיום. שפה היא 50% מהציון - השתמשו במילות קישור וכתבו על הסיפור בזמן הווה.'
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Improve this one-sentence answer into a paragraph (60-100 words).**\n{p:text}Question: Does George change at the end of the story?\n{p:text}Answer: George changes because he goes to the library.',
							wordBank: ['At first,', 'However,', 'As a result,', 'In other words,'],
							minWords: 60,
							maxWords: 100,
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: A 5-point answer is a short paragraph (about 60-100 words): answer, two pieces of evidence, explanation and a short ending. Use linking words: however, as a result, in addition, in other words. Write about the story in the present simple. Task: Improve a one-sentence answer into a paragraph Notes: Feedback on content (answer, understanding, evidence) and on language (vocabulary, grammar, linking words).'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-summer-mastery',
		section: 'f-1',
		titleEn: 'Mastery',
		required: ['f-summer-answer'],
		position: {
			x: -130,
			y: 730
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: "### Mastery challenge\n{p:text}Explain how the ending connects to George's main conflict. Write 80-100 words and use two events as evidence.\n{d:rtl}עכשיו כותבים לבד. נבדוק: תשובה לשאלה, הבנה נכונה, שתי ראיות, הסבר - וגם שפה: אוצר מילים, דקדוק וסימני פיסוק."
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Write the paragraph; then improve it after feedback.**',
							wordBank: [
								'At the end of the story,',
								'This connects to his conflict because',
								'For example,',
								'However,'
							],
							minWords: 80,
							maxWords: 100,
							llmGrade: true,
							gradingNotes:
								"A short literature answer about \"A Summer's Reading\" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Explain how the ending connects to George's main conflict. Write 80-100 words and use two events as evidence. Task: Write the paragraph; then improve it after feedback Notes: Do not give full marks for 'George reads 100 books'; he only begins."
						}
					]
				}
			]
		}
	},
	{
		id: 'f-summer-review',
		section: 'f-1',
		titleEn: 'Review',
		required: ['f-summer-mastery'],
		position: {
			x: -130,
			y: 850
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## תרשים העלילה\n{d:rtl}כל הסיפור בתשעה שלבים או פחות. שווה לחזור לפני מבחן.'
						},
						{
							type: 'steps',
							ordered: true,
							steps: [
								'George, almost 20, left school at 16. He has no job and feels ashamed.',
								'He dreams of a better life, but he does nothing to change it.',
								"First meeting: he lies to Mr. Cattanzara - he is 'reading about 100 books'.",
								'First rumor: the neighbors respect him; Sophie gives him a dollar a week.',
								'He does not read. He avoids Mr. Cattanzara.',
								'Second meeting: Mr. Cattanzara (a little drunk) asks him to name one book. George cannot.',
								'George hides in his room for a week. Sophie finds out and stops the money.',
								"Second rumor: people still respect him. He lies again ('Yes, I finished') and realizes Mr. Cattanzara spread the story.",
								'In the fall, George goes to the library, counts 100 books and sits down to read.'
							]
						},
						{
							type: 'preface',
							text: '## טעויות נפוצות\n{d:rtl}משפטים שתלמידים כותבים, ומה נכון באמת:'
						},
						{
							type: 'steps',
							steps: [
								'❌ George is 19 / George is 16.\n✅ He is almost twenty; he left school at sixteen.',
								'❌ George finished the 100 books.\n✅ He only begins reading at the end.',
								'❌ Mr. Cattanzara hates George / is cruel.\n✅ He challenges George because he cares, and he seems to protect him with the second rumor.',
								'❌ George stops lying after the second meeting.\n✅ He lies again when someone asks if he finished the books.',
								'❌ George changes completely.\n✅ The ending shows a possible first step; the future is open.'
							]
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 1\n{p:text}**Describe George's personality at the beginning of the story. Give two examples.**\n{d:rtl}Describe = מתארים תכונה + שתי דוגמאות.\n{d:rtl}📜 ראיה: His days at home; the lie at the first meeting.\n---\n{p:text}At the beginning of the story, George is passive and insecure. He left school at sixteen, and now, almost four years later, he still has no job and no plan. For example, he spends most of the day in his room, and at night he walks to the park and dreams about a better life. In addition, he lies to Mr. Cattanzara because he is ashamed. This shows that George wants respect, but he is not ready to work for it."
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 2\n{p:text}**What happens after the first meeting with Mr. Cattanzara? Explain why this event is important.**\n{d:rtl}What happens + Why important = אירוע + משמעות.\n{d:rtl}📜 ראיה: The first rumor; Sophie's dollar; George avoids Mr. Cattanzara.\n---\n{p:text}After the first meeting, people in the neighborhood start to treat George with respect. They believe he is reading a hundred books, and even Sophie gives him a dollar a week. This event is important because George now enjoys respect that he has not earned. As a result, the lie becomes bigger and harder to escape, so he starts avoiding Mr. Cattanzara. In other words, the respect he wanted becomes a source of pressure."
						},
						{
							type: 'preface',
							text: '### תשובה לדוגמה 3\n{p:text}**How does George feel during and after the second meeting? Explain why.**\n{d:rtl}How does … feel = רגש + סיבה + ראיה.\n{d:rtl}📜 ראיה: The nickel and the question about one book; the week in his room.\n---\n{p:text}During the second meeting, George feels ashamed and trapped. Mr. Cattanzara treats him like a small child and asks him to name just one book, but George cannot answer. After the meeting, he hides in his room for a week, because he is afraid that everyone will discover the truth. Even when Sophie shouts at him and begs him, he does not come out. This shows how deeply the lie has hurt his self-respect.'
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 4\n{p:text}**What role does Mr. Cattanzara play in George's life?**\n{d:rtl}Role = מה הדמות עושה ואיך היא משפיעה.\n{d:rtl}📜 ראיה: Both meetings; the second rumor (inference).\n---\n{p:text}Mr. Cattanzara acts like a mentor for George. First, he shows interest in George and treats him with respect, which no one else does. Later, he challenges George and warns him not to waste his life as he did. Most importantly, it seems that he spreads the rumor that George has finished the books. In this way, he protects George's dignity and gives him a reason to start reading. Without him, George would probably not change."
						},
						{
							type: 'preface',
							text: '### תשובה לדוגמה 5\n{p:text}**Explain the ending of the story. Does George change?**\n{d:rtl}Explain the ending = מה קורה + מה השתנה + מה לא ידוע.\n{d:rtl}📜 ראיה: The library scene in the fall.\n---\n{p:text}At the end, on an evening in the fall, George goes to the library, counts a hundred books and sits down to read. This is the first time he acts instead of only dreaming. However, the ending is open: the story does not tell us whether he will finish the books. In my opinion, George starts to change, because for the first time he works for the respect he already has. Still, it is only a first step.'
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 6\n{p:text}**How does the setting (the hot summer, the poor neighborhood) add to the meaning of the story?**\n{d:rtl}Setting = זמן ומקום. מסבירים איך הם משקפים את הדמות.\n{d:rtl}📜 ראיה: The hot room during the week of hiding; the park; the fall.\n---\n{p:text}The setting reflects George's feelings. The story takes place during a very hot summer in a poor immigrant neighborhood in New York. When George hides in his small room, the heat makes it feel like a prison, just like his lie. On the other hand, the quiet park represents his dream of a better life. Finally, the story ends in the fall, a new season, which suggests that a new stage in his life may begin. I appreciated this, because the place helps us feel George's situation."
						},
						{
							type: 'preface',
							text: '### תשובה לדוגמה 7\n{p:text}**Which character did you identify with most? Explain why.**\n{d:rtl}Identify with = להזדהות. בוחרים דמות, מסבירים למה, ומביאים אירוע.\n{d:rtl}📜 ראיה: Any accurate event connected to the chosen character.\n---\n{p:text}I identified most with George. Like him, I have sometimes said I would do something just to make people proud of me, and then I felt pressure because I had not done it yet. For example, George tells Mr. Cattanzara that he is reading a hundred books, and then he avoids him. I understand his fear of being caught. However, unlike George, I learned that it is better to tell the truth early. That is why his story feels real to me.'
						},
						{
							type: 'preface',
							text: '### תשובה לדוגמה 8\n{p:text}**Relate the story to your own life or to someone you know.**\n{d:rtl}Relate = מחברים בין הסיפור לחיים. הזכירו אירוע מהסיפור וגם מהחיים.\n{d:rtl}📜 ראיה: One event from the story that matches the personal example.\n---\n{p:text}The story reminds me of my cousin, who wanted to become a programmer but never practiced. Everyone told him he was talented, and he enjoyed the compliments, just like George enjoys the respect of his neighbors. However, when a friend asked him to build a simple website, he could not do it, and he felt ashamed. After that, he finally signed up for a course. Like George at the library, he took the first step only after he felt the pressure.'
						}
					]
				},
				{
					screens: [
						{
							type: 'opener',
							kicker: 'סיבוב 2 (רשות)',
							title: 'גשר להקשר',
							subtitle: 'מחברים את הסיפור לתקופה שלו. 80-100 מילים.',
							level: 4
						},
						{
							type: 'writing-task',
							prompt:
								"{p:text}**read the Ministry's background page on the Great Depression. Write 80-100 words: How does life in the 1930s help us understand George's situation and Mr. Cattanzara's warning? (CD7, CD8)**",
							minWords: 80,
							maxWords: 100,
							llmGrade: true,
							gradingNotes:
								"A short literature answer about \"A Summer's Reading\" by Bernard Malamud (1956) (Bagrut Module F, B2 level; content and language count equally). A bridging-text-and-context task: read the Ministry's background page on the Great Depression. Write 80-100 words: How does life in the 1930s help us understand George's situation and Mr. Cattanzara's warning? (CD7, CD8)"
						}
					]
				}
			]
		}
	}
];
