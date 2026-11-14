import type { QuizNode } from '../types';

// One array literal of every Module E exam (same shape as quiz/c/index.ts).
// Imported once from the practice papers; edit freely.
export const eQuizzes: QuizNode[] = [
	{
		id: 'e-exam-1',
		module: 'e',
		uuid: 'e-t-2741',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 75,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הכתבה וענו על כל 9 השאלות באנגלית, לפי הטקסט. בלי מילון.',
				points: 70,
				screens: [
					{
						type: 'passage',
						title: '{a:center}**CAN AI MAKE STUDENTS SMARTER?**',
						paragraphs: [
							{
								id: 'p1',
								text: 'For many teenagers, asking a chatbot for help with\nhomework is becoming as normal as opening a\ntextbook. A student who does not understand a\nscience question can ask the program to explain it\nin simpler words. Another student might use it to\npractise English. These tools can give answers\nwithin seconds, but teachers are asking an important\nquestion: does getting an answer quickly always mean\nthat learning has taken place?'
							},
							{
								id: 'p2',
								text: 'One advantage of AI tools is that students can\nreceive explanations whenever they need them. If the\nfirst explanation is confusing, they can ask the\nchatbot to try a different one. This may be\nespecially useful for students who feel\nuncomfortable asking questions in front of their\nclassmates. Some teachers also encourage students to\nuse AI to create practice questions and then check\nwhat they have learned.'
							},
							{
								id: 'p3',
								text: 'However, there is a problem when students allow the\ntechnology to complete all their work. They may hand\nin a well-written answer without understanding it.\nIn addition, chatbots sometimes provide information\nthat sounds correct but is actually wrong. For this\nreason, teachers advise students to compare\nimportant information with reliable sources, such as\ntheir course books.'
							},
							{
								id: 'p4',
								text: 'Some schools are now teaching students how to use AI\nresponsibly. In one classroom activity, students\nfirst solve a problem by themselves. They then ask a\nchatbot to solve the same problem and compare the\ntwo answers. When the answers are different,\nstudents must explain which one makes more sense.\nThe activity encourages them to examine the\nchatbot’s suggestions instead of accepting them\nimmediately.'
							},
							{
								id: 'p5',
								text: 'AI may therefore become a useful learning partner,\nbut it cannot replace the effort students make when\nthey think for themselves. Teachers say that the\nmost important skill is not learning how to get an\nanswer from a machine. It is learning how to decide\nwhether that answer is useful and correct.'
							}
						],
						glossary: [
							{
								term: 'chatbot',
								he: 'תוכנת שיחה מבוססת בינה מלאכותית'
							},
							{
								term: 'reliable',
								he: 'מהימן'
							},
							{
								term: 'responsibly',
								he: 'באחריות'
							},
							{
								term: 'examine',
								he: 'לבחון'
							}
						]
					},
					{
						type: 'mcq',
						prompt: 'What are we told in paragraph I?',
						options: [
							[
								'How students use chatbots and a question this raises.',
								'נכון. הפסקה מתארת שימושים בצ’אטבוט לשיעורי בית, ומסתיימת בשאלה של המורים.\n"teachers are asking an important question: does getting an answer quickly always mean that learning has taken place?"'
							],
							['Why some students have stopped using textbooks.', 'הפסקה משווה צ’אטבוט לספר לימוד, אבל לא אומרת שתלמידים הפסיקו להשתמש בספרים.'],
							['That chatbots can give answers within seconds.', 'פרט נכון מהפסקה, אבל משפט אחד ממנה, לא הנושא שלה.'],
							['Why chatbots sometimes give wrong answers.', 'זה הנושא של פסקה III (information that sounds correct but is actually wrong), לא של פסקה I.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What are we told; paragraph I\nמילות מפתח בטקסט: asking a chatbot for help; an important question\n\nטיפ: תנו לפסקה שם ב-3-4 מילים לפני שאתם קוראים את האפשרויות. פרט נכון הוא עדיין לא הנושא.',
						points: 7,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt:
							'According to paragraph II, how can AI tools help students learn? Give ONE answer. COMPLETE THE ANSWER.\n\nBy ____________.',
						modelAnswer: 'asking the chatbot for a different explanation',
						explanation:
							'בפסקה כמה תשובות נכונות, ומספיקה אחת: הסבר אחר, הסבר בכל זמן, או שאלות תרגול.\n"If the first explanation is confusing, they can ask the chatbot to try a different one."\n\nמילות מפתח בשאלה: help students learn; Give ONE answer\nמילות מפתח בטקסט: explanations whenever they need them; a different one; practice questions\n\nטיפ: Give ONE answer = כותבים תשובה אחת בלבד. אחרי By בא פועל + ing.',
						gradingNotes:
							'Several answers are correct; the student gives ONE. Accept any one of: By asking the chatbot for a different explanation | By getting explanations whenever they need them | By creating practice questions and checking what they have learned. The answer continues "By", so the verb takes -ing; a wrong verb form (By ask, By asked) is a grammar error, spelling is not.',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'mcq',
						prompt: 'What can we understand about some students from lines 13-16?',
						options: [
							[
								'They do not like asking questions in front of their classmates.',
								'נכון. "uncomfortable asking questions in front of their classmates" = לא נוח להם לשאול מול הכיתה.\n"This may be especially useful for students who feel uncomfortable asking questions in front of their classmates."'
							],
							['They learn better when they study with classmates.', 'השורות אומרות ההפך: מול חברים לכיתה לא נוח להם.'],
							['They think chatbots explain better than teachers.', 'השורות לא משוות בין צ’אטבוט למורה.'],
							['They never ask their teachers questions.', 'never חזק מדי. כתוב שלא נוח להם לשאול, לא שהם אף פעם לא שואלים.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What can we understand; lines 13-16\nמילות מפתח בטקסט: uncomfortable asking questions\n\nטיפ: בשאלת What can we understand התשובה לא מצוטטת. מחפשים את האפשרות שאומרת אותו דבר במילים אחרות, ופוסלים מילים מוחלטות כמו never.',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt:
							'What might happen if students let AI do all their work? COMPLETE THE SENTENCE.\n\nThey might ____________.',
						modelAnswer: 'hand in a well-written answer without understanding it',
						explanation:
							'הטקסט מזהיר מפני הגשת תשובה שנכתבה היטב בלי שהתלמיד מבין אותה.\n"They may hand in a well-written answer without understanding it."\n\nמילות מפתח בשאלה: if students let AI do all their work\nמילות מפתח בטקסט: complete all their work; without understanding it\n\nטיפ: אחרי might בא פועל בסיס: hand in, לא handing.',
						gradingNotes:
							'Expected: hand in a well-written answer without understanding it | hand in an answer they do not understand. Evidence: "They may hand in a well-written answer without understanding it." The answer continues "They might", so a base verb follows.',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'Base your answer on lines 22-26. Why do teachers advise students to compare information with reliable sources? COMPLETE THE ANSWER.\n\nBecause chatbots ____________.',
						modelAnswer: 'sometimes give information that sounds correct but is wrong',
						explanation:
							'For this reason מחבר את העצה לסיבה שבמשפט שלפניה.\n"chatbots sometimes provide information that sounds correct but is actually wrong. For this reason, teachers advise students to compare..."\n\nמילות מפתח בשאלה: lines 22-26; Why; compare\nמילות מפתח בטקסט: For this reason; actually wrong\n\nטיפ: Base your answer on lines... = קוראים רק את השורות האלה. מילה כמו For this reason מצביעה על הסיבה שלפניה.',
						gradingNotes:
							'Expected: sometimes give information that sounds correct but is (actually) wrong | can give wrong information. Evidence (lines 22-26): "chatbots sometimes provide information that sounds correct but is actually wrong. For this reason, teachers advise students to compare important information with reliable sources". An answer about students not understanding their work (lines 19-21) is outside the given lines and does not answer the question.',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'In the classroom activity, what do students do before they ask the chatbot? COMPLETE THE SENTENCE.\n\nThey ____________.',
						modelAnswer: 'solve the problem by themselves',
						explanation:
							'הפעולה הראשונה בפעילות היא פתרון עצמאי, לפני הפנייה לצ’אטבוט.\n"students first solve a problem by themselves. They then ask a chatbot..."\n\nמילות מפתח בשאלה: before they ask the chatbot\nמילות מפתח בטקסט: first; then\n\nטיפ: מילות רצף כמו first ו-then מראות את סדר הפעולות.',
						gradingNotes:
							'Expected: solve the problem by themselves | (first) solve a problem on their own. Evidence: "students first solve a problem by themselves."',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'mcq',
						prompt: 'In line 30, the writer refers to "the same problem." What is that problem?',
						options: [
							[
								'The problem the students first solved by themselves.',
								'נכון. the same מפנה לבעיה שהוזכרה בשורה הקודמת.\n"students first solve a problem by themselves. They then ask a chatbot to solve the same problem"'
							],
							['The problem of students who do not understand their own answers.', 'זו בעיה מפסקה III, לא הבעיה שהתלמידים פותרים בפעילות.'],
							['The problem of chatbots that give wrong information.', 'גם זו בעיה מפסקה III. the same מפנה למשהו שהוזכר ממש לפני כן.'],
							['The difference between the two answers.', 'ההבדל בין התשובות מוזכר אחרי the same problem, ולא הוא הבעיה שפותרים.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: line 30; the same problem\nמילות מפתח בטקסט: first solve a problem\n\nטיפ: בשאלת refers to קוראים את המשפט שלפני השורה. the same, this, it ו-they מפנים כמעט תמיד למשהו שכבר הוזכר.',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'mcq',
						prompt:
							'What do the teachers’ advice in paragraph III and the classroom activity in paragraph IV have in common?',
						options: [
							[
								'Both teach students to check what a chatbot tells them.',
								'נכון. בפסקה III משווים מידע למקורות מהימנים, ובפסקה IV בוחנים את תשובת הצ’אטבוט במקום לקבל אותה.\n"The activity encourages them to examine the chatbot’s suggestions instead of accepting them immediately."'
							],
							['Both tell students to stop using chatbots.', 'אף אחת מהפסקאות לא אומרת להפסיק. שתיהן מלמדות להשתמש בזהירות.'],
							['Both take place in a classroom.', 'רק הפעילות בפסקה IV מתוארת בכיתה. העצה בפסקה III כללית.'],
							['Both help students finish their homework faster.', 'בפעילות התלמידים פותרים פעמיים. המטרה היא בדיקה, לא מהירות.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: have in common; paragraph III; paragraph IV\nמילות מפתח בטקסט: compare important information; examine the chatbot’s suggestions\n\nטיפ: בשאלת have in common מנסחים במילה אחת מה כל צד עושה, ובוחרים את האפשרות שנכונה לשניהם, לא רק לאחד.',
						points: 7,
						paragraphRef: 'III-IV'
					},
					{
						type: 'writing-task',
						prompt:
							'According to paragraph V, what is the most important skill students should develop? COMPLETE THE SENTENCE.\n\nThey should learn how to ____________.',
						modelAnswer: 'decide whether an answer is useful and correct',
						explanation:
							'המבנה not ... It is מציג קודם את מה שלא חשוב ואז את מה שחשוב.\n"It is learning how to decide whether that answer is useful and correct."\n\nמילות מפתח בשאלה: most important skill\nמילות מפתח בטקסט: most important skill is not; It is\n\nטיפ: בפסקת סיכום, not X ... It is Y = התשובה היא Y.',
						gradingNotes:
							'Expected: decide whether an answer is useful and correct | judge if the answer is correct and useful. Evidence: "It is learning how to decide whether that answer is useful and correct." "get an answer from a machine" is what the writer says is NOT the most important skill.',
						points: 8,
						paragraphRef: 'V'
					}
				]
			},
			{
				id: 'vocabulary',
				instructionsHe:
					'בכל קבוצה שש מילים ושלוש הגדרות. התאימו לכל הגדרה את המילה שלה (2 נק׳ לכל התאמה).',
				points: 30,
				screens: [
					{
						type: 'match-definitions',
						items: [
							'to prevent',
							'to recommend',
							'to react',
							'to distinguish',
							'to participate',
							'to deserve'
						],
						definitions: [
							{
								text: 'to take part in an activity',
								itemIndex: 4,
								feedback:
									'ההגדרה באנגלית משמעה: לקחת חלק בפעילות. הביטוי to participate פירושו להשתתף, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to stop something from happening',
								itemIndex: 0,
								feedback:
									'ההגדרה באנגלית משמעה: לעצור דבר מה לפני שהוא קורה. הביטוי to prevent פירושו למנוע, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to see or understand the difference between things',
								itemIndex: 3,
								feedback:
									'ההגדרה באנגלית משמעה: להבחין בהבדל בין דברים. הביטוי to distinguish פירושו להבחין, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['למנוע', 'להמליץ', 'להגיב', 'להבחין', 'להשתתף', 'להיות ראוי'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: [
							'a consequence',
							'a discovery',
							'a priority',
							'a disaster',
							'a dispute',
							'an objective'
						],
						definitions: [
							{
								text: 'a disagreement between people',
								itemIndex: 4,
								feedback:
									'ההגדרה באנגלית משמעה: חילוקי דעות בין אנשים. הביטוי a dispute פירושו סכסוך, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'something that is more important than other things',
								itemIndex: 2,
								feedback:
									'ההגדרה באנגלית משמעה: דבר שחשוב יותר מדברים אחרים. הביטוי a priority פירושו עדיפות, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'something that is found or learned for the first time',
								itemIndex: 1,
								feedback:
									'ההגדרה באנגלית משמעה: דבר שמוצאים או לומדים בפעם הראשונה. הביטוי a discovery פירושו תגלית, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['תוצאה, השלכה', 'תגלית', 'עדיפות', 'אסון', 'סכסוך', 'מטרה, יעד'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['reliable', 'generous', 'frequent', 'hidden', 'appropriate', 'occasional'],
						definitions: [
							{
								text: 'suitable for a particular situation',
								itemIndex: 4,
								feedback:
									'ההגדרה באנגלית משמעה: מתאים למצב מסוים. הביטוי appropriate פירושו מתאים, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'not easily seen or found',
								itemIndex: 3,
								feedback:
									'ההגדרה באנגלית משמעה: נסתר, לא קל לראות או למצוא. הביטוי hidden פירושו נסתר, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'able to be trusted',
								itemIndex: 0,
								feedback:
									'ההגדרה באנגלית משמעה: אפשר לסמוך עליו. הביטוי reliable פירושו מהימן, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['מהימן', 'נדיב', 'תכוף', 'נסתר', 'מתאים', 'מזדמן'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['deliberately', 'seldom', 'otherwise', 'besides', 'unfortunately', 'underneath'],
						definitions: [
							{
								text: 'not often',
								itemIndex: 1,
								feedback:
									'ההגדרה באנגלית משמעה: לא הרבה פעמים. הביטוי seldom פירושו לעתים רחוקות, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'on purpose; not by accident',
								itemIndex: 0,
								feedback:
									'ההגדרה באנגלית משמעה: בכוונה, לא במקרה. הביטוי deliberately פירושו בכוונה, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'below something else',
								itemIndex: 5,
								feedback:
									'ההגדרה באנגלית משמעה: מתחת לדבר אחר. הביטוי underneath פירושו מתחת, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['בכוונה', 'לעתים רחוקות', 'אחרת', 'חוץ מזה, בנוסף', 'לצערנו', 'מתחת'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: [
							'to keep on',
							'to mix up',
							'to cut down',
							'to focus on',
							'to get rid of',
							'to make up your mind'
						],
						definitions: [
							{
								text: 'to continue doing something',
								itemIndex: 0,
								feedback:
									'ההגדרה באנגלית משמעה: להמשיך לעשות דבר מה. הביטוי to keep on פירושו להמשיך (לעשות), ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to make the amount of something smaller',
								itemIndex: 2,
								feedback:
									'ההגדרה באנגלית משמעה: להקטין את הכמות של דבר מה. הביטוי to cut down פירושו לצמצם, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to give special attention to something',
								itemIndex: 3,
								feedback:
									'ההגדרה באנגלית משמעה: להקדיש תשומת לב מיוחדת לדבר מה. הביטוי to focus on פירושו להתמקד ב־, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'להמשיך (לעשות)',
							'לבלבל',
							'לצמצם',
							'להתמקד ב־',
							'להיפטר מ־',
							'להחליט'
						],
						points: 6
					}
				]
			}
		]
	},
	{
		id: 'e-exam-2',
		module: 'e',
		uuid: 'e-t-5386',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 75,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הכתבה וענו על כל 9 השאלות באנגלית, לפי הטקסט. בלי מילון.',
				points: 70,
				screens: [
					{
						type: 'passage',
						title: '{a:center}**WHY IS GEN Z BRINGING BACK OLD TRENDS?**',
						paragraphs: [
							{
								id: 'p1',
								text: 'When sixteen-year-old Maya wanted a camera, she did\nnot choose the latest model. Instead, she bought a\nsecond-hand film camera. Her friends were surprised\nthat she wanted to wait several days to see her\nphotographs. Yet Maya is part of a growing interest\namong young people in objects that were popular long\nbefore they were born. Vinyl records, old clothes\nand film cameras are finding new audiences.'
							},
							{
								id: 'p2',
								text: 'One reason for this interest is the experience these\nobjects offer. Listening to a record, for example,\nmeans choosing an album and turning it over halfway\nthrough. Using a film camera also requires patience\nbecause people cannot immediately delete an\nunsuccessful photograph. For some teenagers, these\nextra steps make an ordinary activity feel more\nspecial.'
							},
							{
								id: 'p3',
								text: 'Another attraction is the chance to express a\npersonal style. In second-hand shops, young\ncustomers may discover clothes that are no longer\nproduced. They can create an outfit that looks\ndifferent from the ones advertised on popular\nshopping websites. Buying used items can also cost\nless, although rare vintage products sometimes\nbecome surprisingly expensive.'
							},
							{
								id: 'p4',
								text: 'Businesses have noticed the trend. Some clothing\ncompanies have begun selling new products that look\nas if they were made decades ago. Music shops are\noffering a wider selection of records, while camera\nmakers have introduced products with a traditional\nappearance. However, not every young customer wants\nto replace modern technology. Many use older objects\nalongside their smartphones and streaming services.'
							},
							{
								id: 'p5',
								text: 'The return of old trends does not necessarily mean\nthat Gen Z wants to live in the past. Instead, it\nsuggests that young people enjoy combining ideas\nfrom different periods. What matters to them is not\nsimply how old an object is, but what they can do\nwith it and how it makes them feel.'
							}
						],
						glossary: [
							{
								term: 'vinyl record',
								he: 'תקליט'
							},
							{
								term: 'second-hand',
								he: 'יד שנייה'
							},
							{
								term: 'patience',
								he: 'סבלנות'
							},
							{
								term: 'alongside',
								he: 'לצד'
							}
						]
					},
					{
						type: 'mcq',
						prompt: 'What are we told in paragraph I?',
						options: [
							[
								'Young people’s growing interest in old objects.',
								'נכון. מאיה היא דוגמה, והפסקה מרחיבה לכל הצעירים.\n"Maya is part of a growing interest among young people in objects that were popular long before they were born."'
							],
							['That Maya’s friends were surprised by her choice.', 'פרט נכון מהפסקה, אבל משפט אחד ממנה, לא הנושא שלה.'],
							['Why Maya decided to become a photographer.', 'הפסקה לא מדברת על בחירת מקצוע.'],
							['How listening to a record is different from streaming.', 'החוויה של האזנה לתקליט מתוארת בפסקה II, לא בפסקה I.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What are we told; paragraph I\nמילות מפתח בטקסט: a growing interest among young people\n\nטיפ: כשפסקה פותחת בסיפור על אדם אחד, הנושא הוא בדרך כלל הרעיון הכללי שהסיפור מדגים.',
						points: 7,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt:
							'Give ONE example from paragraph II of an extra step that older objects require. COMPLETE THE SENTENCE.\n\nPeople have to ____________.',
						modelAnswer: 'turn a record over halfway through',
						explanation:
							'בפסקה כמה צעדים נוספים, ומספיק אחד: לבחור אלבום, להפוך את התקליט באמצע, או לחכות לתמונות בלי למחוק.\n"Listening to a record, for example, means choosing an album and turning it over halfway through."\n\nמילות מפתח בשאלה: Give ONE example; extra step\nמילות מפתח בטקסט: for example; requires patience\n\nטיפ: Give ONE = תשובה אחת. אחרי have to בא פועל בסיס: turn, לא turning.',
						gradingNotes:
							'Several answers are correct; the student gives ONE. Accept any one of: choose an album | turn a record over (halfway through) | be patient / wait to see their photographs | not delete a bad photograph immediately. The answer continues "People have to", so a base verb follows.',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'mcq',
						prompt: 'What can we understand from paragraph II about teenagers who use older objects?',
						options: [
							[
								'They do not mind spending more time on an activity.',
								'נכון. הצעדים הנוספים לוקחים זמן, ובכל זאת הם הופכים את הפעילות למיוחדת בעיניהם.\n"For some teenagers, these extra steps make an ordinary activity feel more special."'
							],
							['They find modern technology too difficult to use.', 'הפסקה לא אומרת שטכנולוגיה מודרנית קשה להם.'],
							['They often delete unsuccessful photographs.', 'ההפך: במצלמת פילם אי אפשר למחוק מיד.'],
							['They listen to whole albums every day.', 'כתוב שבוחרים אלבום והופכים אותו. every day לא כתוב.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What can we understand; teenagers\nמילות מפתח בטקסט: requires patience; extra steps; more special\n\nטיפ: בשאלת What can we understand מחברים שני פרטים מהפסקה למסקנה אחת, ופוסלים אפשרות שהטקסט לא אומר.',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt:
							'Why might teenagers choose second-hand clothes, according to paragraph III? COMPLETE THE ANSWER.\n\nBecause they want to ____________.',
						modelAnswer: 'express their personal style',
						explanation:
							'משפט הפתיחה של הפסקה נותן את הסיבה, והמשפטים אחריו מסבירים אותה.\n"Another attraction is the chance to express a personal style."\n\nמילות מפתח בשאלה: Why; second-hand clothes\nמילות מפתח בטקסט: attraction; express a personal style\n\nטיפ: אחרי want to בא פועל בסיס: express, לא expressing.',
						gradingNotes:
							'Expected: express their (personal) style | look different from others | create an outfit that looks different | save money / pay less (also supported: "Buying used items can also cost less"). Evidence: "Another attraction is the chance to express a personal style." The answer continues "Because they want to", so a base verb follows.',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'mcq',
						prompt: 'What do we learn about prices from paragraph III?',
						options: [
							[
								'Used items often cost less, but some rare ones are expensive.',
								'נכון. although מחבר את שני החלקים.\n"Buying used items can also cost less, although rare vintage products sometimes become surprisingly expensive."'
							],
							['Vintage products are always cheaper than new ones.', 'always סותר את המשפט: מוצרי וינטג׳ נדירים יכולים להיות יקרים.'],
							['Popular shopping websites have the lowest prices.', 'אתרי הקניות מוזכרים רק בהקשר של סגנון, לא של מחיר.'],
							['Teenagers buy second-hand clothes only because they are cheap.', 'only סותר את הפסקה: הסיבה הראשונה היא סגנון אישי.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What do we learn about prices\nמילות מפתח בטקסט: cost less; although; expensive\n\nטיפ: בשאלת What do we learn about X מחפשים את המשפט על X (כאן מחיר), וקוראים אותו עד הסוף: although משנה את המשמעות.',
						points: 7,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'Base your answer on lines 25-30. How have businesses reacted to the trend? Give ONE answer. COMPLETE THE ANSWER.\n\nBy ____________.',
						modelAnswer: 'selling new products that look old',
						explanation:
							'בשורות 25-30 שלוש תגובות של עסקים, ומספיקה אחת.\n"Some clothing companies have begun selling new products that look as if they were made decades ago."\n\nמילות מפתח בשאלה: lines 25-30; businesses; Give ONE\nמילות מפתח בטקסט: Businesses have noticed the trend\n\nטיפ: אחרי By בא פועל + ing: selling, offering, introducing.',
						gradingNotes:
							'Several answers are correct; the student gives ONE. Accept any one of: By selling new products that look old | By offering more records | By making / introducing cameras that look traditional. The answer continues "By", so the verb takes -ing.',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt:
							'Base your answer on lines 30-32. What do many young people do with older objects? COMPLETE THE SENTENCE.\n\nThey use them ____________.',
						modelAnswer: 'alongside their smartphones and streaming services',
						explanation:
							'However מסמן את המעבר מהעסקים אל הלקוחות.\n"Many use older objects alongside their smartphones and streaming services."\n\nמילות מפתח בשאלה: lines 30-32; older objects\nמילות מפתח בטקסט: However; alongside\n\nטיפ: alongside מופיעה ב-Glossary: "לצד". מילה עם קו? מציצים למטה וממשיכים.',
						gradingNotes:
							'Expected: alongside / together with their smartphones and streaming services | with modern technology. Evidence: "Many use older objects alongside their smartphones and streaming services." "instead of their smartphones" contradicts the text.',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'mcq',
						prompt: 'What are we told in paragraph V?',
						options: [
							[
								'What old objects really mean to Gen Z.',
								'נכון. הפסקה מסבירה מה חשוב לצעירים: שילוב תקופות, מה אפשר לעשות עם החפץ ואיך הוא גורם להם להרגיש.\n"What matters to them is not simply how old an object is, but what they can do with it and how it makes them feel."'
							],
							['That Gen Z wants to live in the past.', 'הפסקה אומרת את ההפך: does not necessarily mean that Gen Z wants to live in the past.'],
							['Why companies sell products that look old.', 'זה הנושא של פסקה IV.'],
							['How old an object must be to become popular.', 'הפסקה אומרת שהגיל של החפץ הוא לא העיקר.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What are we told; paragraph V\nמילות מפתח בטקסט: does not necessarily mean; Instead; What matters to them\n\nטיפ: בפסקת סיכום Instead ו-not ... but מובילים לרעיון המרכזי.',
						points: 8,
						paragraphRef: 'V'
					},
					{
						type: 'writing-task',
						prompt:
							'According to paragraph V, what do young people enjoy? COMPLETE THE SENTENCE.\n\nYoung people enjoy ____________.',
						modelAnswer: 'combining ideas from different periods',
						explanation:
							'המסר הסופי הוא שילוב רעיונות מתקופות שונות, לא רצון לחיות בעבר.\n"young people enjoy combining ideas from different periods."\n\nמילות מפתח בשאלה: enjoy\nמילות מפתח בטקסט: enjoy combining\n\nטיפ: אחרי enjoy בא פועל + ing: combining, לא to combine.',
						gradingNotes:
							'Expected: combining ideas from different periods | mixing old and new things. Evidence: "young people enjoy combining ideas from different periods." The answer continues "enjoy", so the verb takes -ing.',
						points: 8,
						paragraphRef: 'V'
					}
				]
			},
			{
				id: 'vocabulary',
				instructionsHe:
					'בכל קבוצה שש מילים ושלוש הגדרות. התאימו לכל הגדרה את המילה שלה (2 נק׳ לכל התאמה).',
				points: 30,
				screens: [
					{
						type: 'match-definitions',
						items: [
							'to squeeze',
							'to challenge',
							'to decrease',
							'to hunt',
							'to present',
							'to sign'
						],
						definitions: [
							{
								text: 'to become smaller or less',
								itemIndex: 2,
								feedback: 'הביטוי **to decrease** פירושו לפחות, לרדת, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to write your name on a document',
								itemIndex: 5,
								feedback: 'הביטוי **to sign** פירושו לחתום, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to press something firmly',
								itemIndex: 0,
								feedback: 'הביטוי **to squeeze** פירושו לסחוט, ללחוץ, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['לסחוט, ללחוץ', 'לערער על', 'לפחות, לרדת', 'לצוד', 'להעניק', 'לחתום'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: [
							'atmosphere',
							'material',
							'a departure',
							'a design',
							'an instruction',
							'wealth'
						],
						definitions: [
							{
								text: 'a pattern or decoration',
								itemIndex: 3,
								feedback: 'הביטוי **a design** פירושו עיטור, דוגמה, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'teaching in a subject or skill',
								itemIndex: 4,
								feedback: 'הביטוי **an instruction** פירושו הוראה, הדרכה, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'information used for writing or study',
								itemIndex: 1,
								feedback: 'הביטוי **material** פירושו חומר (לימודי), ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'אווירה',
							'חומר (לימודי)',
							'יציאה, עזיבה',
							'עיטור, דוגמה',
							'הוראה, הדרכה',
							'עושר'
						],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['loose', 'limited', 'immoral', 'peculiar', 'popular', 'particular'],
						definitions: [
							{
								text: 'strange; unusual',
								itemIndex: 3,
								feedback: 'הביטוי **peculiar** פירושו מוזר, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'believed or done by many people',
								itemIndex: 4,
								feedback: 'הביטוי **popular** פירושו רווח, נפוץ, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'morally wrong',
								itemIndex: 2,
								feedback: 'הביטוי **immoral** פירושו לא מוסרי, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['רפוי, רחב', 'מוגבל', 'לא מוסרי', 'מוזר', 'רווח, נפוץ', 'מסוים'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['barely', 'altogether', 'exactly', 'hopefully', 'lightly', 'aside'],
						definitions: [
							{
								text: 'completely or in total',
								itemIndex: 1,
								feedback: 'הביטוי **altogether** פירושו בסך הכול; לגמרי, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to one side',
								itemIndex: 5,
								feedback: 'הביטוי **aside** פירושו הצידה, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'only just; almost not',
								itemIndex: 0,
								feedback: 'הביטוי **barely** פירושו בקושי, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'בקושי',
							'בסך הכול; לגמרי',
							'בדיוק!',
							'בתקווה ש-',
							'בעדינות, קלות',
							'הצידה'
						],
						points: 6
					},
					{
						type: 'match-definitions',
						items: [
							'to be responsible for',
							'to turn into',
							'to step back',
							'to do a good job',
							'to run out of',
							'to sit up straight'
						],
						definitions: [
							{
								text: 'to change into something else',
								itemIndex: 1,
								feedback: 'הביטוי **to turn into** פירושו להפוך ל-, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to do something well',
								itemIndex: 3,
								feedback:
									'הביטוי **to do a good job** פירושו לעשות עבודה טובה, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to have the duty of taking care of something',
								itemIndex: 0,
								feedback:
									'הביטוי **to be responsible for** פירושו להיות אחראי ל-, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'להיות אחראי ל-',
							'להפוך ל-',
							'לצעוד אחורה',
							'לעשות עבודה טובה',
							'שנגמר ל-',
							'לשבת זקוף'
						],
						points: 6
					}
				]
			}
		]
	},
	{
		id: 'e-exam-3',
		module: 'e',
		uuid: 'e-t-9014',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 75,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הכתבה וענו על כל 9 השאלות באנגלית, לפי הטקסט. בלי מילון.',
				points: 70,
				screens: [
					{
						type: 'passage',
						title: '{a:center}**THE RISE OF TIKTOK LEARNING**',
						paragraphs: [
							{
								id: 'p1',
								text: 'When Daniel had trouble remembering a rule in\nmathematics, he searched for a short video on his\nphone. In less than a minute, a teacher showed the\nrule using a simple drawing. Daniel watched it twice\nand then tried a similar problem. Short educational\nvideos have become a common way for teenagers to\nreview school subjects, especially when they need a\nquick explanation.'
							},
							{
								id: 'p2',
								text: 'One advantage of these videos is that students can\nchoose exactly what they want to learn. Instead of\nwatching a whole lesson, they can look for a single\nidea that is confusing them. The combination of\npictures, spoken explanations and examples can also\nmake information easier to understand. Students can\npause a video or replay a difficult part as often as\nthey like.'
							},
							{
								id: 'p3',
								text: 'However, a video that is easy to watch is not always\na good learning tool. Some creators simplify a\nsubject so much that they leave out important\ndetails. Others may share incorrect information.\nStudents who see an attractive video may remember\nits music or images without really understanding the\nidea it presents. That is why teachers encourage\nstudents to check who made a video and compare its\nexplanation with a reliable source.'
							},
							{
								id: 'p4',
								text: 'In some classrooms, teachers are experimenting with\na different approach. After students watch a short\nexplanation, they must solve a new problem or\nexplain the idea in their own words. These\nactivities help teachers find out whether students\nhave actually learned something. A student who can\nrepeat a sentence from a video may still have\ndifficulty using the information independently.'
							},
							{
								id: 'p5',
								text: 'Short videos therefore work best as one part of\nlearning, rather than as a complete replacement for\nlessons and practice. They can provide a useful\nstarting point, but students still need time to ask\nquestions, make mistakes and apply what they have\nlearned.'
							}
						],
						glossary: [
							{
								term: 'creator',
								he: 'יוצר תוכן'
							},
							{
								term: 'reliable',
								he: 'מהימן'
							},
							{
								term: 'independently',
								he: 'באופן עצמאי'
							},
							{
								term: 'apply',
								he: 'ליישם'
							}
						]
					},
					{
						type: 'mcq',
						prompt: 'What are we told in paragraph I?',
						options: [
							[
								'How teenagers use short videos to review school subjects.',
								'נכון. דניאל הוא דוגמה, והמשפט האחרון מרחיב לכל בני הנוער.\n"Short educational videos have become a common way for teenagers to review school subjects"'
							],
							['Which school subject Daniel was reviewing.', 'פרט נכון (mathematics), אבל מילה אחת מהפסקה, לא הנושא שלה.'],
							['Why some short videos give wrong information.', 'זה הנושא של פסקה III (Others may share incorrect information).'],
							['How teachers make short educational videos.', 'מוזכר מורה שמסביר בציור, אבל לא איך מכינים סרטונים.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What are we told; paragraph I\nמילות מפתח בטקסט: a common way for teenagers to review school subjects\n\nטיפ: כשפסקה פותחת בסיפור על אדם אחד, הנושא הוא בדרך כלל הרעיון הכללי שהסיפור מדגים.',
						points: 7,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt:
							'According to paragraph II, what is an advantage of short educational videos? Give ONE answer. COMPLETE THE SENTENCE.\n\nStudents can ____________.',
						modelAnswer: 'choose exactly what they want to learn',
						explanation:
							'בפסקה כמה יתרונות, ומספיק אחד.\n"students can choose exactly what they want to learn." / "Students can pause a video or replay a difficult part"\n\nמילות מפתח בשאלה: advantage; Give ONE answer\nמילות מפתח בטקסט: One advantage; can also; Students can\n\nטיפ: Give ONE = תשובה אחת. אחרי can בא פועל בסיס.',
						gradingNotes:
							'Several answers are correct; the student gives ONE. Accept any one of: choose exactly what they want to learn | look for a single idea that confuses them | understand information more easily (pictures, explanations and examples) | pause a video or replay a difficult part. The answer continues "Students can", so a base verb follows.',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'mcq',
						prompt: 'In line 12, the writer refers to "The combination." What is combined?',
						options: [
							[
								'Pictures, spoken explanations and examples.',
								'נכון. המילים שאחרי combination of אומרות מה משולב.\n"The combination of pictures, spoken explanations and examples can also make information easier to understand."'
							],
							['A whole lesson and a single idea.', 'השורה הקודמת משווה בין שיעור שלם לרעיון אחד. זה לא שילוב.'],
							['Pausing and replaying a video.', 'אלה שתי פעולות מסוף הפסקה, לא מה שמשולב.'],
							['Music and images.', 'מוזיקה ותמונות מוזכרות בפסקה III, בהקשר אחר.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: line 12; The combination\nמילות מפתח בטקסט: The combination of\n\nטיפ: בשאלת refers to מחפשים את המילה בשורה, וקוראים מה בא מיד לפניה או אחריה.',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt:
							'Base your answer on lines 18-20. What can happen when creators simplify a subject too much? COMPLETE THE SENTENCE.\n\nImportant details may be ____________.',
						modelAnswer: 'left out',
						explanation:
							'פישוט יתר עלול להשמיט מידע חשוב.\n"Some creators simplify a subject so much that they leave out important details."\n\nמילות מפתח בשאלה: lines 18-20; simplify\nמילות מפתח בטקסט: so much that; leave out\n\nטיפ: may be + צורת עבר שלישית: left out, לא leave out.',
						gradingNotes:
							'Expected: left out | missing | lost. Evidence: "Some creators simplify a subject so much that they leave out important details." The sentence is passive ("may be ..."), so "leave out" is a grammar error, the meaning is right.',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'mcq',
						prompt: 'What can we understand from lines 21-23?',
						options: [
							[
								'Enjoying a video does not mean learning from it.',
								'נכון. אפשר לזכור את המוזיקה והתמונות בלי להבין את הרעיון.\n"Students who see an attractive video may remember its music or images without really understanding the idea it presents."'
							],
							['Videos with music are easier to understand.', 'השורות אומרות שזוכרים את המוזיקה בלי להבין, לא שמבינים יותר.'],
							['Students should not watch videos with music.', 'אין בשורות האלה עצה כזאת.'],
							['Most short videos give incorrect information.', 'most חזק מדי, ומידע שגוי מוזכר בשורה 20, לא בשורות 21-23.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What can we understand; lines 21-23\nמילות מפתח בטקסט: attractive video; without really understanding\n\nטיפ: בשאלת What can we understand התשובה לא מצוטטת. בוחרים את האפשרות שאומרת אותו דבר במילים אחרות.',
						points: 7,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'Why do teachers encourage students to check who made a video? COMPLETE THE ANSWER.\n\nBecause some videos ____________.',
						modelAnswer: 'share incorrect information',
						explanation:
							'That is why מפנה לבעיות שבפסקה: מידע שגוי ופרטים חסרים.\n"Others may share incorrect information." ... "That is why teachers encourage students to check who made a video"\n\nמילות מפתח בשאלה: Why; check who made a video\nמילות מפתח בטקסט: That is why\n\nטיפ: That is why = "בגלל זה". הסיבה כתובה לפני הביטוי, לא אחריו.',
						gradingNotes:
							'Expected: share / give incorrect information | leave out important details | are not reliable. Evidence: "Others may share incorrect information." ... "That is why teachers encourage students to check who made a video". The answer continues "Because some videos", so a verb in the present follows.',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'In some classrooms, what must students do after they watch a short explanation? Give ONE answer. COMPLETE THE SENTENCE.\n\nThey must ____________.',
						modelAnswer: 'solve a new problem',
						explanation:
							'שתי תשובות נכונות מחוברות ב-or, ומספיקה אחת.\n"they must solve a new problem or explain the idea in their own words."\n\nמילות מפתח בשאלה: after they watch; Give ONE\nמילות מפתח בטקסט: After students watch; must\n\nטיפ: or במשפט = שתי תשובות נכונות. Give ONE = כותבים אחת.',
						gradingNotes:
							'Several answers are correct; the student gives ONE. Accept either: solve a new problem | explain the idea in their own words. Evidence: "they must solve a new problem or explain the idea in their own words." The answer continues "They must", so a base verb follows.',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'mcq',
						prompt: 'What does the approach in paragraph IV help teachers find out?',
						options: [
							[
								'Whether students have really learned the idea.',
								'נכון. המשימה אחרי הצפייה בודקת הבנה, לא רק זכירה.\n"These activities help teachers find out whether students have actually learned something."'
							],
							['Whether students can repeat sentences from a video.', 'הפסקה אומרת שחזרה על משפט מהסרטון לא מוכיחה למידה.'],
							['Which videos are the most popular with students.', 'הפעילות לא בודקת אילו סרטונים פופולריים.'],
							['How quickly students can solve a problem.', 'הפעילות בודקת אם התלמידים למדו, לא כמה מהר הם פותרים.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: help teachers find out\nמילות מפתח בטקסט: find out whether; actually learned\n\nטיפ: לפעמים מילות השאלה מופיעות בטקסט כמעט כמו שהן (find out). אז קוראים את ההמשך שלהן.',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt:
							'According to paragraph V, why are videos not enough on their own? COMPLETE THE SENTENCE.\n\nStudents still need time to ____________.',
						modelAnswer: 'ask questions, make mistakes and apply what they have learned',
						explanation:
							'סרטונים הם נקודת התחלה בלבד. למידה צריכה גם שאלות, טעויות ויישום.\n"students still need time to ask questions, make mistakes and apply what they have learned."\n\nמילות מפתח בשאלה: not enough on their own\nמילות מפתח בטקסט: rather than; but students still need\n\nטיפ: אחרי to בא פועל בסיס: ask, make, apply.',
						gradingNotes:
							'Expected: ask questions, make mistakes and apply what they have learned (one or more of these is enough) | practise what they learned. Evidence: "students still need time to ask questions, make mistakes and apply what they have learned."',
						points: 8,
						paragraphRef: 'V'
					}
				]
			},
			{
				id: 'vocabulary',
				instructionsHe:
					'בכל קבוצה שש מילים ושלוש הגדרות. התאימו לכל הגדרה את המילה שלה (2 נק׳ לכל התאמה).',
				points: 30,
				screens: [
					{
						type: 'match-definitions',
						items: [
							'to dislike',
							'to cheat',
							'to calculate',
							'to investigate',
							'to chase',
							'to defeat'
						],
						definitions: [
							{
								text: 'not to like someone or something',
								itemIndex: 0,
								feedback: 'הביטוי **to dislike** פירושו לא לאהוב, לסלוד, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to follow someone quickly in order to catch them',
								itemIndex: 4,
								feedback: 'הביטוי **to chase** פירושו לרדוף אחרי, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to work out an amount using numbers',
								itemIndex: 2,
								feedback: 'הביטוי **to calculate** פירושו לחשב, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['לא לאהוב, לסלוד', 'לרמות', 'לחשב', 'לחקור', 'לרדוף אחרי', 'להביס'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['pressure', 'a planet', 'a jury', 'a bargain', 'a loaf', 'a vowel'],
						definitions: [
							{
								text: 'one of the letters a, e, i, o, u',
								itemIndex: 5,
								feedback: 'הביטוי **a vowel** פירושו תנועה (אות), ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'stress caused by having too much to do',
								itemIndex: 0,
								feedback: 'הביטוי **pressure** פירושו לחץ, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'something bought for less than its usual price',
								itemIndex: 3,
								feedback: 'הביטוי **a bargain** פירושו מציאה, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['לחץ', 'כוכב לכת', 'חבר מושבעים', 'מציאה', 'כיכר לחם', 'תנועה (אות)'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['undressed', 'raw', 'initial', 'specific', 'former', 'fresh'],
						definitions: [
							{
								text: 'first; at the beginning',
								itemIndex: 2,
								feedback: 'הביטוי **initial** פירושו ראשוני, התחלתי, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'exact and clear; a particular one',
								itemIndex: 3,
								feedback: 'הביטוי **specific** פירושו ספציפי, מסוים, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'from an earlier time',
								itemIndex: 4,
								feedback: 'הביטוי **former** פירושו לשעבר, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'לא לבוש',
							'נא, לא מבושל',
							'ראשוני, התחלתי',
							'ספציפי, מסוים',
							'לשעבר',
							'חדש, רענן'
						],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['indoors', 'behind', 'essentially', 'naturally', 'wherever', 'nevertheless'],
						definitions: [
							{
								text: 'in spite of that; still',
								itemIndex: 5,
								feedback: 'הביטוי **nevertheless** פירושו למרות זאת, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'inside a building',
								itemIndex: 0,
								feedback: 'הביטוי **indoors** פירושו בפנים, בבית, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'basically; in the most important ways',
								itemIndex: 2,
								feedback: 'הביטוי **essentially** פירושו ביסודו, בעיקרון, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'בפנים, בבית',
							'מפגר, מאחור',
							'ביסודו, בעיקרון',
							'כמובן, באופן טבעי',
							'בכל מקום ש-',
							'למרות זאת'
						],
						points: 6
					},
					{
						type: 'match-definitions',
						items: [
							'to log out',
							'to get away with',
							'to start with',
							'to let out',
							'to shut up',
							'to take it seriously'
						],
						definitions: [
							{
								text: 'to allow someone or something to leave',
								itemIndex: 3,
								feedback: 'הביטוי **to let out** פירושו לשחרר, להוציא, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'at the beginning; first',
								itemIndex: 2,
								feedback: 'הביטוי **to start with** פירושו קודם כול, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to do something wrong without being punished',
								itemIndex: 1,
								feedback:
									'הביטוי **to get away with** פירושו לצאת מזה בלי עונש, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'להתנתק',
							'לצאת מזה בלי עונש',
							'קודם כול',
							'לשחרר, להוציא',
							'לשתוק',
							'להתייחס ברצינות'
						],
						points: 6
					}
				]
			}
		]
	},
	{
		id: 'e-exam-4',
		module: 'e',
		uuid: 'e-t-6627',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 75,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הכתבה וענו על כל 9 השאלות באנגלית, לפי הטקסט. בלי מילון.',
				points: 70,
				screens: [
					{
						type: 'passage',
						title: '{a:center}**CAN VIDEO GAMES TEACH REAL-LIFE SKILLS?**',
						paragraphs: [
							{
								id: 'p1',
								text: 'On a Saturday afternoon, four friends are trying to\ncomplete a difficult mission in an online game. One\nplayer studies a map, another collects useful\nobjects and the others protect the team. They will\nsucceed only if they communicate and cooperate.\nSituations like this have led some educators to ask\nwhether certain video games can help young people\npractise skills they also need outside the screen.'
							},
							{
								id: 'p2',
								text: 'Cooperative games can give players experience in\nworking towards a shared goal. A team may need to\ndivide tasks, listen to different suggestions and\nchange its plan when something goes wrong. Strategy\ngames, meanwhile, often require players to compare\npossible actions before making a decision. These\nactivities can involve planning and problem-solving,\nalthough success in a game does not automatically\nmean success in everyday life.'
							},
							{
								id: 'p3',
								text: 'Some teachers are beginning to use carefully\nselected games in their lessons. For example,\nstudents might play a game in which they must design\na small town with limited money and resources.\nAfterwards, the teacher asks them to explain their\nchoices. The discussion is important: it helps\nstudents connect decisions made in the game with\nideas such as budgeting, cooperation and\nresponsibility.'
							},
							{
								id: 'p4',
								text: 'Not all games offer the same opportunities to learn.\nA game that rewards quick reactions may not require\nmuch teamwork, and players can spend hours repeating\nactions without thinking about them. In addition,\nstudents who become frustrated may stop listening to\ntheir teammates. Educators therefore say that the\ntype of game, the tasks and the guidance students\nreceive all make a difference.'
							},
							{
								id: 'p5',
								text: 'Video games should not be treated as a magic\nsolution for education. Still, when people choose\nthem thoughtfully and discuss what happens during\nplay, games can provide situations in which students\npractise useful habits. The important question is\nnot simply whether students enjoy playing, but what\nthey learn from the experience.'
							}
						],
						glossary: [
							{
								term: 'cooperate',
								he: 'לשתף פעולה'
							},
							{
								term: 'resources',
								he: 'משאבים'
							},
							{
								term: 'frustrated',
								he: 'מתוסכל'
							},
							{
								term: 'guidance',
								he: 'הדרכה'
							}
						]
					},
					{
						type: 'mcq',
						prompt: 'What are we told in paragraph I?',
						options: [
							[
								'Why some educators are interested in video games.',
								'נכון. הסיפור על ארבעת החברים מוביל לשאלה של אנשי החינוך.\n"Situations like this have led some educators to ask whether certain video games can help young people practise skills they also need outside the screen."'
							],
							['That the four friends must cooperate to succeed.', 'פרט נכון מהפסקה, אבל הוא רק הדוגמה, לא הנושא.'],
							['Why online games are replacing school lessons.', 'הפסקה לא אומרת שמשחקים מחליפים שיעורים.'],
							['How teachers use games in their lessons.', 'זה הנושא של פסקה III.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: What are we told; paragraph I\nמילות מפתח בטקסט: Situations like this have led some educators to ask\n\nטיפ: Situations like this מחבר את הדוגמה לרעיון. הנושא נמצא אחרי החיבור.',
						points: 7,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt:
							'Base your answer on lines 9-12. What may a team need to do in a cooperative game? Give ONE answer. COMPLETE THE SENTENCE.\n\nThe team may need to ____________.',
						modelAnswer: 'divide tasks',
						explanation:
							'בשורות 10-12 רשימה של שלוש פעולות, ומספיקה אחת.\n"A team may need to divide tasks, listen to different suggestions and change its plan when something goes wrong."\n\nמילות מפתח בשאלה: lines 9-12; team; Give ONE\nמילות מפתח בטקסט: A team may need to\n\nטיפ: רשימה עם פסיקים ו-and = כמה תשובות נכונות. Give ONE = בוחרים אחת.',
						gradingNotes:
							'Several answers are correct; the student gives ONE. Accept any one of: divide tasks | listen to different suggestions | change its plan when something goes wrong | work towards a shared goal. The answer continues "may need to", so a base verb follows.',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'mcq',
						prompt: 'What do the game activities described in paragraph II have in common?',
						options: [
							[
								'They can all involve planning and problem-solving.',
								'נכון. These activities מסכם את מה שתואר לפניו.\n"These activities can involve planning and problem-solving"'
							],
							['They all lead to success in everyday life.', 'הפסקה אומרת את ההפך: success in a game does not automatically mean success in everyday life.'],
							['They all require quick reactions.', 'תגובות מהירות מוזכרות בפסקה IV, כמשחק שלא מלמד הרבה.'],
							['They are all played alone.', 'משחקים שיתופיים משוחקים בצוות.']
						],
						correctIndex: 0,
						explanation:
							'מילות מפתח בשאלה: have in common; paragraph II\nמילות מפתח בטקסט: These activities can involve\n\nטיפ: בשאלת have in common מחפשים משפט שמסכם כמה דברים יחד (These..., All of them..., Both...).',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt:
							'What does paragraph II say about success in games? COMPLETE THE SENTENCE.\n\nIt does not automatically mean ____________.',
						modelAnswer: 'success in everyday life',
						explanation:
							'הצלחה במשחק לא מבטיחה הצלחה בחיים מחוץ למסך.\n"success in a game does not automatically mean success in everyday life."\n\nמילות מפתח בשאלה: success in games\nמילות מפתח בטקסט: although; does not automatically mean\n\nטיפ: although מסייג את מה שנאמר לפניו. ההסתייגות היא בדיוק מה ששואלים.',
						gradingNotes:
							'Expected: success in everyday life | success in real life. Evidence: "success in a game does not automatically mean success in everyday life."',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'mcq',
						prompt:
							'Why does the teacher ask students to explain their choices after the town-building game?',
						options: [
							['To find out who built the best town.', 'הדיון לא נועד לדרג. הוא מחבר החלטות במשחק לרעיונות מהחיים.'],
							[
								'To help them connect the game to real-life ideas.',
								'נכון. הדיון מחבר החלטות במשחק למושגים כמו תקציב ואחריות.\n"it helps students connect decisions made in the game with ideas such as budgeting, cooperation and responsibility."'
							],
							['To check that students did not spend too much money.', 'הכסף המוגבל הוא חלק מהמשחק. הדיון נועד לחבר את ההחלטות לרעיונות כמו budgeting.'],
							['To help them design a real town.', 'התלמידים מתכננים עיר קטנה בתוך המשחק, לא עיר אמיתית.']
						],
						correctIndex: 1,
						explanation:
							'מילות מפתח בשאלה: Why; explain their choices\nמילות מפתח בטקסט: The discussion is important: it helps\n\nטיפ: נקודתיים (:) אחרי משפט מובילות להסבר שלו.',
						points: 7,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'In line 21, the writer mentions "limited money and resources." What must students do with them in the game? COMPLETE THE SENTENCE.\n\nThey must ____________.',
						modelAnswer: 'design a small town',
						explanation:
							'השורה ממשיכה משפט שהתחיל בשורה 20.\n"students might play a game in which they must design a small town with limited money and resources."\n\nמילות מפתח בשאלה: line 21; limited money and resources\nמילות מפתח בטקסט: they must design\n\nטיפ: שאלה על שורה אחת? קוראים את כל המשפט שהשורה שייכת לו, גם אם הוא מתחיל בשורה הקודמת.',
						gradingNotes:
							'Expected: design / build a small town (with them). Evidence (lines 20-21): "they must design a small town with limited money and resources." The answer continues "They must", so a base verb follows.',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'Base your answer on lines 27-32. Why may some games not teach much? Give ONE answer. COMPLETE THE ANSWER.\n\nBecause players may ____________.',
						modelAnswer: 'repeat actions without thinking about them',
						explanation:
							'בשורות כמה סיבות, ומספיקה אחת: חזרה בלי מחשבה, הפסקת הקשבה לחברי הצוות, או מעט עבודת צוות.\n"players can spend hours repeating actions without thinking about them."\n\nמילות מפתח בשאלה: lines 27-32; not teach much; Give ONE\nמילות מפתח בטקסט: Not all games; In addition\n\nטיפ: In addition מוסיף סיבה שנייה. Give ONE = כותבים רק אחת. אחרי may בא פועל בסיס.',
						gradingNotes:
							'Several answers are correct; the student gives ONE. Accept any one of: repeat actions without thinking (about them) | stop listening to their teammates (when they become frustrated) | not need much teamwork / only need quick reactions. The answer continues "Because players may", so a base verb follows.',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'mcq',
						prompt: 'According to paragraph IV, what makes a difference to how much students learn from a game?',
						options: [
							['The number of hours students play.', 'שעות משחק מוזכרות כבעיה (repeating actions without thinking), לא כגורם שקובע אם המשחק מלמד.'],
							['How much the game costs.', 'מחיר המשחק לא מוזכר.'],
							[
								'The guidance students receive.',
								'נכון. הדרכה היא אחד משלושת הגורמים שמשפיעים.\n"the type of game, the tasks and the guidance students receive all make a difference."'
							],
							['Whether students enjoy the game.', 'פסקה V אומרת שהנאה היא לא העיקר. פסקה IV מונה סוג משחק, משימות והדרכה.']
						],
						correctIndex: 2,
						explanation:
							'מילות מפתח בשאלה: makes a difference\nמילות מפתח בטקסט: therefore; make a difference\n\nטיפ: therefore מסכם את הפסקה. המשפט שאחריו הוא בדרך כלל התשובה.',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt:
							'According to paragraph V, what is the important question about video games? COMPLETE THE ANSWER.\n\nWhat students ____________.',
						modelAnswer: 'learn from the experience',
						explanation:
							'המבנה not simply ... but מציג קודם את מה שפחות חשוב, ואז את העיקר.\n"The important question is not simply whether students enjoy playing, but what they learn from the experience."\n\nמילות מפתח בשאלה: the important question\nמילות מפתח בטקסט: not simply; but\n\nטיפ: not simply X, but Y = התשובה היא Y.',
						gradingNotes:
							'Expected: learn from the experience | learn from playing. Evidence: "The important question is not simply whether students enjoy playing, but what they learn from the experience." "enjoy playing" is what the writer says is NOT the main question.',
						points: 8,
						paragraphRef: 'V'
					}
				]
			},
			{
				id: 'vocabulary',
				instructionsHe:
					'בכל קבוצה שש מילים ושלוש הגדרות. התאימו לכל הגדרה את המילה שלה (2 נק׳ לכל התאמה).',
				points: 30,
				screens: [
					{
						type: 'match-definitions',
						items: ['to swear', 'to bury', 'to survive', 'to question', 'to appear', 'to occupy'],
						definitions: [
							{
								text: 'to put something in the ground and cover it',
								itemIndex: 1,
								feedback: 'הביטוי **to bury** פירושו לקבור, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to use rude words',
								itemIndex: 0,
								feedback: 'הביטוי **to swear** פירושו לקלל, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to ask someone questions, often officially',
								itemIndex: 3,
								feedback: 'הביטוי **to question** פירושו לחקור, לתשאל, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'לקלל',
							'לקבור',
							'לשרוד',
							'לחקור, לתשאל',
							'להיראות (כאילו)',
							'לתפוס, למלא'
						],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['a certificate', 'a tap', 'an arrow', 'a lecture', 'a moral', 'a ghost'],
						definitions: [
							{
								text: 'the spirit of a dead person',
								itemIndex: 5,
								feedback: 'הביטוי **a ghost** פירושו רוח רפאים, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'a sign that shows a direction',
								itemIndex: 2,
								feedback: 'הביטוי **an arrow** פירושו חץ, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'a device that controls the flow of water',
								itemIndex: 1,
								feedback: 'הביטוי **a tap** פירושו ברז, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['תעודה', 'ברז', 'חץ', 'הרצאה', 'מוסר השכל', 'רוח רפאים'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['deaf', 'painful', 'drunk', 'steep', 'smooth', 'delayed'],
						definitions: [
							{
								text: 'causing pain',
								itemIndex: 1,
								feedback: 'הביטוי **painful** פירושו כואב, מכאיב, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'unable to hear',
								itemIndex: 0,
								feedback: 'הביטוי **deaf** פירושו חירש, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'later than planned',
								itemIndex: 5,
								feedback: 'הביטוי **delayed** פירושו מעוכב, מאחר, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['חירש', 'כואב, מכאיב', 'שיכור', 'תלול', 'חלק', 'מעוכב, מאחר'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: ['inside', 'low', 'shortly', 'automatically', 'necessarily', 'personally'],
						definitions: [
							{
								text: 'in every case; always',
								itemIndex: 4,
								feedback: 'הביטוי **necessarily** פירושו בהכרח, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'soon',
								itemIndex: 2,
								feedback: 'הביטוי **shortly** פירושו בקרוב, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'at or to a small height or level',
								itemIndex: 1,
								feedback: 'הביטוי **low** פירושו נמוך, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: ['בפנים, בלב', 'נמוך', 'בקרוב', 'אוטומטית', 'בהכרח', 'באופן אישי'],
						points: 6
					},
					{
						type: 'match-definitions',
						items: [
							'to burst into tears',
							'to grow tired',
							'to take place',
							'to stay over',
							'to set up',
							'to rely on'
						],
						definitions: [
							{
								text: 'to suddenly begin crying',
								itemIndex: 0,
								feedback: 'הביטוי **to burst into tears** פירושו לפרוץ בבכי, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to start a business or organization',
								itemIndex: 4,
								feedback: 'הביטוי **to set up** פירושו להקים, ולכן הוא מתאים להגדרה.'
							},
							{
								text: 'to need or trust someone or something',
								itemIndex: 5,
								feedback: 'הביטוי **to rely on** פירושו לסמוך על, ולכן הוא מתאים להגדרה.'
							}
						],
						itemGlosses: [
							'לפרוץ בבכי',
							'להתעייף, להימאס',
							'להתקיים',
							'לישון אצל מישהו',
							'להקים',
							'לסמוך על'
						],
						points: 6
					}
				]
			}
		]
	}
];
