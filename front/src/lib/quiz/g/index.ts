import type { QuizNode } from '../types';

// One array literal of every Module G exam (same shape as quiz/c/index.ts).
// Source: Module_G_App_Package (module_g_content.json), 5 units.
// Option feedback -> the option [text, feedback] / mcq.partialFeedback; model answers -> modelAnswer + gradingNotes.
export const gQuizzes: QuizNode[] = [
	{
		id: 'g-exam-1',
		module: 'g',
		uuid: 'g-t-3617',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 105,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הקטע וענו על השאלות שאחריו. ענו באנגלית.',
				points: 60,
				screens: [
					{
						type: 'passage',
						title: '{a:center}**MISSING OUT - AND LOVING IT**',
						paragraphs: [
							{
								id: 'p1',
								text: 'It is eleven o\'clock on a Thursday night. Maya, a\nseventeen-year-old from Haifa, is lying in bed,\nexhausted after a long day of school and basketball\npractice. She should be asleep, but instead she is\nscrolling through photos of a party she decided not\nto attend. With every picture, she feels a little\nworse. Her friends seem to be having the time of\ntheir lives, and she is convinced she has made a\nterrible mistake. What Maya is experiencing has a\nname: FOMO, the "fear of missing out."'
							},
							{
								id: 'p2',
								text: 'The term became popular in the early 2000s, and it\nspread quickly with the rise of social media.\nPsychologists define FOMO as the anxious feeling\nthat others are enjoying rewarding experiences\nwithout you. According to researchers, the feeling\nitself is not new; people have always compared\nthemselves to others. What has changed is the scale.\nIn the past, you might have heard about a party the\nnext day. Today, you can watch it happen in real\ntime, from dozens of angles, while it is still going\non.'
							},
							{
								id: 'p3',
								text: 'Researchers have found that teenagers are\nparticularly vulnerable to FOMO. During adolescence,\nthe need to belong to a group is especially strong,\nand being left out can feel like a genuine threat.\nTeens who report high levels of FOMO tend to check\ntheir phones more often, sleep less and find it\nharder to concentrate in class. Some even admit to\nattending events they do not enjoy, simply to avoid\nfeeling excluded. Ironically, many of them spend\nmuch of the evening on their phones, checking what\nis happening elsewhere.'
							},
							{
								id: 'p4',
								text: 'In recent years, however, a different idea has begun\nto gain popularity: JOMO, the "joy of missing out."\nThe concept encourages people to stop worrying about\nwhat they might be missing and to enjoy what they\nare actually doing. JOMO is not about avoiding\nfriends or rejecting fun. Rather, it is about making\nconscious choices. A person who practices JOMO might\nspend a Saturday evening reading, cooking or simply\nresting, and feel satisfied rather than guilty.\nSupporters claim that this approach reduces stress\nand helps people focus on the relationships and\nactivities that truly matter to them.'
							},
							{
								id: 'p5',
								text: 'Not everyone is convinced, though. Critics argue\nthat JOMO can easily become an excuse for isolation,\nespecially for young people who already struggle\nsocially. "Choosing to stay home is healthy when it\nis a real choice," explains one school counselor.\n"It is less healthy when it hides a fear of\nrejection." Most experts agree that the solution\nlies somewhere in the middle. Turning off\nnotifications, limiting time on social media and\nremembering that online photos show only the best\nmoments can all help. As for Maya, she has started\nleaving her phone in the kitchen at night. "I still\nmiss things sometimes," she admits. "But I\'ve\nstopped missing sleep."'
							}
						]
					},
					{
						type: 'writing-task',
						prompt:
							'Complete the sentence.\n\nWith every picture, Maya feels worse because she believes that ____________.',
						modelAnswer:
							'her friends are having a great time without her / she made a terrible mistake by not going to the party.',
						gradingNotes:
							'Model answer: her friends are having a great time without her / she made a terrible mistake by not going to the party. Key text: "she is convinced she has made a terrible mistake".',
						points: 7,
						paragraphRef: 'I'
					},
					{
						type: 'mcq',
						prompt:
							'According to paragraph II, what is the main difference between FOMO in the past and FOMO today?',
						options: [
							[
								'In the past, people did not compare themselves to others.',
								'לא בדיוק. הכותב אומר שאנשים תמיד השוו את עצמם לאחרים - כלומר, זה לא חדש. מה שהשתנה הוא ההיקף: היום רואים הרבה יותר. חפשו בפסקה II את המילה:\n"scale"'
							],
							[
								'Today, people can see events while they are taking place.',
								'בעבר שמעו על מסיבה רק למחרת, והיום אפשר לצפות בה בזמן שהיא מתרחשת:\n"in real time"'
							],
							[
								'Today, psychologists understand the feeling better.',
								'לא בדיוק. הטקסט לא אומר שפסיכולוגים מבינים היום את התחושה טוב יותר. זכרו: תשובה שנשמעת הגיונית אבל לא כתובה בטקסט - אינה התשובה הנכונה.'
							],
							[
								'In the past, people were invited to fewer parties.',
								'לא בדיוק. הטקסט לא משווה בין מספר המסיבות בעבר ובהווה. ההבדל הוא מתי שומעים עליהן: פעם למחרת, והיום ברגע שהן קורות.'
							]
						],
						correctIndex: 1,
						points: 6,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt: 'Why are teenagers especially affected by FOMO?',
						modelAnswer:
							'During adolescence the need to belong to a group is very strong, so being left out feels like a real threat.',
						gradingNotes:
							'Model answer: During adolescence the need to belong to a group is very strong, so being left out feels like a real threat. Key text: "the need to belong to a group is especially strong".',
						points: 7,
						paragraphRef: 'III'
					},
					{
						type: 'mcq',
						prompt: 'Which TWO effects of FOMO are mentioned in paragraph III?',
						options: [
							[
								'getting lower grades',
								'לא בדיוק. בפסקה כתוב שקשה להם להתרכז בכיתה, אבל לא כתוב שהציונים שלהם יורדים. אל תוסיפו מסקנות משלכם - בחרו רק במה שכתוב בטקסט.'
							],
							['sleeping less', 'זו אחת התוצאות שמופיעות בפסקה:\n"sleep less"'],
							[
								'losing close friends',
								'לא בדיוק. בני הנוער מפחדים להישאר מחוץ לקבוצה, אבל הטקסט לא אומר שהם מאבדים חברים.'
							],
							[
								'finding it difficult to concentrate',
								'זו אחת התוצאות שמופיעות בפסקה:\n"find it harder to concentrate in class"'
							],
							['spending more money on going out', 'לא בדיוק. כסף לא מוזכר בפסקה III בכלל.']
						],
						correctIndices: [1, 3],
						partialFeedback:
							'כמעט! אחת התשובות שבחרתם נכונה. התוצאות מופיעות יחד, ברשימה אחת, מיד אחרי המילים:\n"Teens who report high levels of FOMO tend to…"',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt: 'What is ironic about teenagers who go to events only to avoid FOMO?',
						modelAnswer:
							"They go so they won't miss out, but they spend the evening on their phones checking what is happening elsewhere, so they still miss what is in front of them.",
						gradingNotes:
							'Model answer: They go so they won\'t miss out, but they spend the evening on their phones checking what is happening elsewhere, so they still miss what is in front of them. Key text: "checking what is happening elsewhere".',
						points: 7,
						paragraphRef: 'III'
					},
					{
						type: 'mcq',
						prompt: 'Which TWO of the following describe JOMO, according to paragraph IV?',
						options: [
							[
								'avoiding friends who go out a lot',
								'לא בדיוק. הטקסט אומר במפורש שהרעיון אינו הימנעות מחברים:\n"JOMO is not about avoiding friends"'
							],
							[
								'making conscious choices about how to spend your time',
								'זה בדיוק מה שהרעיון הזה הוא, לפי הטקסט:\n"it is about making conscious choices"'
							],
							[
								'staying online for less than an hour a day',
								'לא בדיוק. בטקסט אין שום מגבלה של שעה ביום. התשובה נשמעת הגיונית, אבל היא לא כתובה בפסקה.'
							],
							[
								'feeling satisfied rather than guilty about staying in',
								'מי שבוחר להישאר בבית מרגיש סיפוק, ולא אשמה:\n"feel satisfied rather than guilty"'
							],
							[
								'rejecting all kinds of fun',
								'לא בדיוק. הטקסט אומר שהרעיון אינו ויתור על הנאה:\n"JOMO is not about … rejecting fun"'
							]
						],
						correctIndices: [1, 3],
						partialFeedback:
							'כמעט! אחת התשובות שבחרתם נכונה. רמז: מה שהרעיון כן מופיע במשפט שמתחיל במילה:\n"Rather, …"',
						points: 6,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt: 'What do the words "this approach" in paragraph IV refer to?',
						modelAnswer:
							'Making conscious choices about how to spend your time and enjoying what you are doing (JOMO).',
						gradingNotes:
							'Model answer: Making conscious choices about how to spend your time and enjoying what you are doing (JOMO). Key text: "this approach".',
						points: 5,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt:
							'Complete the sentence according to paragraph V.\n\nAccording to the school counselor, choosing to stay home is healthy when (i) ____________, but it is less healthy when (ii) ____________.',
						modelAnswer: '(i) it is a real choice (ii) it hides a fear of rejection',
						gradingNotes:
							'Model answer: (i) it is a real choice (ii) it hides a fear of rejection. 4 points per part.',
						points: 8,
						paragraphRef: 'V'
					},
					{
						type: 'writing-task',
						prompt:
							"How has Maya's behavior changed between paragraph I and paragraph V? Give ONE example from EACH paragraph.",
						modelAnswer:
							'Paragraph I: she stayed up late scrolling through party photos. Paragraph V: she leaves her phone in the kitchen at night / sleeps better.',
						gradingNotes:
							'Model answer: Paragraph I: she stayed up late scrolling through party photos. Paragraph V: she leaves her phone in the kitchen at night / sleeps better.',
						points: 6
					}
				]
			},
			{
				id: 'writing',
				instructionsHe: 'כתבו חיבור של בין 120 ל-140 מילים.',
				points: 40,
				screens: [
					{
						type: 'writing-task',
						prompt:
							'Some people believe that teenagers should take one full day off social media every week. Do you agree? Give reasons to explain your opinion.',
						minWords: 120,
						maxWords: 140,
						points: 40,
						modelAnswer:
							'These days, teenagers spend hours on social media every day. Never have young people spent so much time in front of screens. Some people suggest that teens should take one full day off every week, and I strongly agree with this idea.\n\nThe main reason is that a break helps us relax. Social media can be stressful because we compare ourselves to others. Many of my friends have told me that they feel worse about themselves after an hour of scrolling.\n\nAnother reason is that we would gain time for real life. If teenagers took one day off every week, they could meet friends, play sports or spend time with their families.\n\nTo sum up, one day off social media every week is healthy, because it reduces stress and brings us closer to the people around us.',
						gradingNotes:
							'Off-topic example (scores low on content): לכתוב על הסכנות של הרשתות החברתיות באופן כללי, בלי לענות אם צריך לקחת מהן יום חופש.'
					}
				]
			}
		]
	},
	{
		id: 'g-exam-2',
		module: 'g',
		uuid: 'g-t-8204',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 105,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הקטע וענו על השאלות שאחריו. ענו באנגלית.',
				points: 60,
				screens: [
					{
						type: 'passage',
						title: '{a:center}**IS YOUR PHONE LISTENING TO YOU?**',
						paragraphs: [
							{
								id: 'p1',
								text: 'Noa was chatting with a friend about running shoes\nover coffee. She had never searched for them online,\nand she did not even own a pair. Yet an hour later,\nwhen she opened Instagram, an advertisement for\nrunning shoes was waiting for her. "My phone must be\nlistening to me," she told her friend, half joking\nand half worried. Noa is far from alone. Surveys\nshow that a large number of smartphone users share\nthe same suspicion, and the belief has become one of\nthe most popular theories of the digital age.'
							},
							{
								id: 'p2',
								text: "Is there any truth to it? Technology companies have\nrepeatedly denied that they use phone microphones to\ntarget advertisements. Independent researchers have\nalso tried to find out. In 2018, a team from\nNortheastern University in Boston tested more than\n17,000 popular apps to see whether any of them were\nsecretly recording conversations. They found no\nevidence of this. However, they did discover\nsomething unexpected: some apps were recording\nusers' screens and sending the images to other\ncompanies, without the users being aware of it."
							},
							{
								id: 'p3',
								text: 'If phones are not listening, why do ads seem so\naccurate? Experts say the answer is simpler, and in\nsome ways more disturbing. Our phones do not need to\nhear us because they already know a great deal about\nus. Every search, "like", purchase and location is\ncollected and analyzed. Apps also gather information\nabout the people we spend time with. If Noa\'s friend\nhad recently searched for running shoes, and the two\nof them were sitting in the same café, connected to\nthe same Wi-Fi network, the system might conclude\nthat Noa could be interested too.'
							},
							{
								id: 'p4',
								text: 'Psychology also plays a role. Scientists describe a\nphenomenon called the "frequency illusion." Once\nsomething catches our attention, we suddenly seem to\nnotice it everywhere. We see hundreds of ads every\nday and forget almost all of them. But when an ad\nhappens to match a recent conversation, it stands\nout, and we remember it. As a result, we tend to\nrecall the "hits" and ignore the many "misses,"\nwhich makes the coincidence seem far more meaningful\nthan it really is.'
							},
							{
								id: 'p5',
								text: 'None of this means that users should stop caring\nabout privacy. In 2024, a marketing company boasted\nto clients that it could use "active listening" to\ntarget ads, and several major tech firms quickly\ndistanced themselves from it. Whether or not the\nclaim was true, the incident showed how valuable\npersonal data has become. Experts recommend checking\nwhich apps have permission to use the microphone,\ncamera and location, and removing any permissions\nthat are not necessary. As one privacy researcher\nput it, "The real question is not whether your phone\nis listening. It is how much it already knows."'
							}
						]
					},
					{
						type: 'writing-task',
						prompt: 'Why was Noa surprised by the advertisement? Give TWO reasons.',
						modelAnswer:
							"(i) She had never searched for running shoes online. (ii) The ad appeared only an hour after she talked about them. (Also accept: she didn't own a pair.)",
						gradingNotes:
							'Model answer: (i) She had never searched for running shoes online. (ii) The ad appeared only an hour after she talked about them. (Also accept: she didn\'t own a pair.). Key text: "She had never searched for them online". 4 points per part.',
						points: 8,
						paragraphRef: 'I'
					},
					{
						type: 'mcq',
						prompt: 'The writer mentions surveys in paragraph I in order to show that ____.',
						options: [
							[
								'most people are not worried about privacy',
								'לא בדיוק. הטקסט לא אומר שאנשים לא דואגים לפרטיות - להפך, נועה עצמה קצת מודאגת:\n"half joking and half worried"'
							],
							[
								"many people share Noa's belief about their phones",
								'הסקרים מראים שאנשים רבים חושדים בדיוק כמו נועה:\n"a large number of smartphone users share the same suspicion"'
							],
							[
								'the theory has been proven by scientists',
								'לא בדיוק. סקר מראה מה אנשים חושבים, לא מה הוכח. ובפסקה II תראו שהמחקר בכלל לא מצא ראיות לכך.'
							],
							[
								"Noa's friend agreed with her",
								'לא בדיוק. הסקרים לא עוסקים בחברה של נועה, אלא במספר גדול של משתמשים.'
							]
						],
						correctIndex: 1,
						points: 6,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt:
							'Complete the sentences according to paragraph II.\n\nThe researchers found no evidence that (i) ____________. However, they discovered that some apps (ii) ____________.',
						modelAnswer:
							"(i) apps were secretly recording (users') conversations (ii) recorded users' screens and sent the images to other companies (without users knowing)",
						gradingNotes:
							'Model answer: (i) apps were secretly recording (users\') conversations (ii) recorded users\' screens and sent the images to other companies (without users knowing). Key text: "However". 4 points per part.',
						points: 8,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt: 'Why does the writer say that the real explanation is "more disturbing"?',
						modelAnswer:
							"Because phones don't need to listen: they already know a lot about us from our searches, likes, purchases and locations.",
						gradingNotes:
							'Model answer: Because phones don\'t need to listen: they already know a lot about us from our searches, likes, purchases and locations. Key text: "they already know a great deal about us".',
						points: 7,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'Complete the sentence.\n\nAccording to the example in paragraph III, Noa may have seen the ad because her friend ____________ and the two of them ____________.',
						modelAnswer:
							'…had recently searched for running shoes … were in the same café / on the same Wi-Fi network.',
						gradingNotes:
							'Model answer: …had recently searched for running shoes … were in the same café / on the same Wi-Fi network.',
						points: 6,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'Complete the sentence according to paragraph IV.\n\nWe forget almost all the ads we see, but we remember an ad when ____________.',
						modelAnswer: '…it happens to match a recent conversation (so it stands out).',
						gradingNotes:
							'Model answer: …it happens to match a recent conversation (so it stands out). Key text: "when an ad happens to match a recent conversation".',
						points: 6,
						paragraphRef: 'IV'
					},
					{
						type: 'mcq',
						prompt: 'In paragraph IV, the words "hits" and "misses" refer to ____.',
						options: [
							[
								'ads we click on and ads we ignore',
								'לא בדיוק. בפסקה אין שום אזכור של לחיצה על פרסומות.'
							],
							[
								'ads that match our conversations and ads that do not',
								'המילה הראשונה מתארת פרסומות שהתאימו לשיחה ולכן נזכרות, והשנייה - את כל השאר, שאותן אנחנו שוכחים.\n"hits … misses"'
							],
							[
								'apps that listen to us and apps that do not',
								'לא בדיוק. המילים האלה מופיעות בפסקה שעוסקת בפסיכולוגיה ובאופן שבו אנחנו זוכרים פרסומות, ולא באפליקציות שמקשיבות.'
							],
							[
								'popular products and unpopular products',
								'לא בדיוק. הפסקה לא עוסקת בשאלה אילו מוצרים פופולריים.'
							]
						],
						correctIndex: 1,
						points: 6,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt: 'What did the 2024 incident show, according to the writer?',
						modelAnswer: 'That personal data has become very valuable.',
						gradingNotes:
							'Model answer: That personal data has become very valuable. Key text: "the incident showed…".',
						points: 6,
						paragraphRef: 'V'
					},
					{
						type: 'mcq',
						prompt: 'What is the main purpose of the article?',
						options: [
							[
								'to warn readers that their phones are secretly recording them',
								'לא בדיוק. המאמר מראה דווקא שאין ראיות לכך שהטלפון מקליט אותנו.'
							],
							[
								'to explain why ads seem accurate and how to protect privacy',
								'המאמר מסביר למה פרסומות נראות כל כך מדויקות (פסקאות III-IV), ובסוף ממליץ איך לשמור על הפרטיות (פסקה V).'
							],
							[
								'to describe how advertising companies earn money from apps',
								'לא בדיוק. המאמר לא מסביר איך חברות פרסום מרוויחות כסף.'
							],
							[
								'to compare the privacy rules of different tech companies',
								'לא בדיוק. המאמר לא משווה בין חברות טכנולוגיה שונות.'
							]
						],
						correctIndex: 1,
						points: 7
					}
				]
			},
			{
				id: 'writing',
				instructionsHe: 'כתבו חיבור של בין 120 ל-140 מילים.',
				points: 40,
				screens: [
					{
						type: 'writing-task',
						prompt:
							'Some people think that apps should not be allowed to collect personal information about users under the age of 18. What do you think? Give reasons to explain your opinion.',
						minWords: 120,
						maxWords: 140,
						points: 40,
						modelAnswer:
							'Every day, apps collect information about what we search, buy and watch. In my opinion, apps should not be allowed to collect personal information about users under 18.\n\nFirst of all, most teenagers do not understand what they agree to. Rarely do they read the long rules before they click "Accept".\n\nSecondly, personal data can be sold to other companies or even stolen. In recent years, hackers have stolen the details of millions of users. If a stranger learned where a young person lives, it could be dangerous.\n\nSome people argue that this information helps apps work better. However, an app can still be useful without knowing everything about its users.\n\nFor these reasons, I believe that the law should protect young people\'s privacy until they are old enough to make these decisions themselves.',
						gradingNotes:
							'Off-topic example (scores low on content): לכתוב כמה אתם אוהבים אפליקציות, בלי להתייחס לאיסוף מידע על בני נוער.'
					}
				]
			}
		]
	},
	{
		id: 'g-exam-3',
		module: 'g',
		uuid: 'g-t-5932',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 105,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הקטע וענו על השאלות שאחריו. ענו באנגלית.',
				points: 60,
				screens: [
					{
						type: 'passage',
						title: "{a:center}**WHY TEENAGERS CAN'T WAKE UP**",
						paragraphs: [
							{
								id: 'p1',
								text: 'Every morning, in homes around the world, the same\nscene takes place. An alarm rings at 6:30, then\nagain at 6:40, then at 6:50. A parent knocks on the\nbedroom door, then knocks louder. Finally, a\nteenager appears, half asleep and in a bad mood.\nMany adults are quick to blame laziness, late-night\nphone use or a lack of discipline. Scientists,\nhowever, say the real reason has more to do with\nbiology than with character.'
							},
							{
								id: 'p2',
								text: "The key lies in a hormone called melatonin, which\ntells the body when it is time to sleep. In children\nand adults, melatonin is usually released in the\nearly evening. During adolescence, though, this\nprocess shifts. A teenager's body may not begin\nproducing melatonin until around eleven at night,\nsometimes even later. As a result, many teens simply\ncannot fall asleep early, even when they try. Asking\na sixteen-year-old to be alert at seven in the\nmorning, one researcher explains, is like asking an\nadult to function at four or five a.m."
							},
							{
								id: 'p3',
								text: 'At the same time, teenagers need a great deal of\nsleep: between eight and ten hours a night,\naccording to sleep experts. When a body that cannot\nfall asleep before eleven has to wake up at six-\nthirty, the outcome is obvious. The consequences go\nfar beyond yawning in class. Lack of sleep has been\nlinked to poor concentration, weaker memory, mood\nswings and a higher risk of car accidents among\nyoung drivers. It can also affect physical health\nand weaken the immune system.'
							},
							{
								id: 'p4',
								text: 'Some places have decided to take action. In 2014,\nthe American Academy of Pediatrics recommended that\nmiddle and high schools start no earlier than 8:30\na.m. A few years later, California became the first\nUS state to pass a law requiring this. One of the\nbest-known experiments took place in Seattle, where\nhigh schools moved their start time from 7:50 to\n8:45. Researchers who followed the students\ndiscovered that they slept, on average, more than\nhalf an hour longer each night. Their grades\nimproved, and at one of the schools, fewer students\narrived late or missed class.'
							},
							{
								id: 'p5',
								text: "Despite these results, the idea remains\ncontroversial. Opponents point out that later start\ntimes create problems for parents who leave for work\nearly, for bus schedules and for after-school\nactivities and sports. Others worry that teens will\nsimply go to bed even later. Supporters reply that\nthe evidence is clear and that schools should be\norganized around students' needs rather than adults'\nconvenience. In the meantime, experts advise teens\nto keep a regular sleep schedule, avoid screens\nbefore bed and get some sunlight in the morning.\nThese steps will not change biology, but they can\nmake those early alarms a little less painful."
							}
						]
					},
					{
						type: 'mcq',
						prompt:
							"Which TWO explanations do many adults give for teenagers' behavior in the morning?",
						options: [
							['laziness', 'זה אחד ההסברים של המבוגרים:\n"blame laziness"'],
							['too much homework', 'לא בדיוק. שיעורי בית לא מוזכרים בטקסט.'],
							[
								'using their phones late at night',
								'זה עוד הסבר של המבוגרים:\n"late-night phone use"'
							],
							[
								'health problems',
								'לא בדיוק. בעיות בריאות מופיעות בפסקה III כתוצאה של חוסר שינה, ולא כהסבר שהמבוגרים נותנים.'
							],
							[
								'early bus times',
								'לא בדיוק. לוחות הזמנים של האוטובוסים מוזכרים רק בפסקה V, כטענה נגד שינוי שעת תחילת הלימודים.'
							]
						],
						correctIndices: [0, 2],
						partialFeedback:
							'כמעט! אחת התשובות שבחרתם נכונה. ההסברים של המבוגרים מופיעים יחד, ברשימה אחת אחרי המילה:\n"blame"',
						points: 6,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt:
							'Complete the sentence.\n\nAccording to scientists, teenagers find it hard to wake up because of ____________ and not because of ____________.',
						modelAnswer: 'biology … character (also accept: laziness / lack of discipline)',
						gradingNotes:
							'Model answer: biology … character (also accept: laziness / lack of discipline). Key text: "more to do with biology than with character".',
						points: 6,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt:
							"Complete the sentence according to paragraph II.\n\nIn children and adults, melatonin is usually released (i) ____________, but a teenager's body may not produce it until (ii) ____________.",
						modelAnswer: '(i) in the early evening (ii) around eleven at night (or even later)',
						gradingNotes:
							'Model answer: (i) in the early evening (ii) around eleven at night (or even later). 3 points per part.',
						points: 6,
						paragraphRef: 'II'
					},
					{
						type: 'mcq',
						prompt:
							'Why does the researcher compare a teenager at seven a.m. to an adult at four or five a.m.?',
						options: [
							[
								'to show that adults also suffer from a lack of sleep',
								'לא בדיוק. ההשוואה לא באה להראות שגם מבוגרים סובלים, אלא לעזור למבוגרים להבין איך מרגיש נער בשבע בבוקר.'
							],
							[
								'to show how difficult it is for teenagers to be alert so early',
								'החוקר רוצה שמבוגרים ירגישו כמה קשה לנער להיות ערני בשעה שמוקדמת מאוד בשבילו.'
							],
							[
								'to suggest that teenagers should go to bed earlier',
								'לא בדיוק. הטקסט אומר שבני נוער לא מצליחים להירדם מוקדם, גם כשהם מנסים:\n"even when they try"'
							],
							[
								'to explain why many adults start work early',
								'לא בדיוק. הטקסט לא עוסק בשאלה למה מבוגרים מתחילים לעבוד מוקדם.'
							]
						],
						correctIndex: 1,
						points: 7,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt:
							'Why is "the outcome obvious"? Explain using the information in paragraphs II and III.',
						modelAnswer:
							'Teens need 8-10 hours of sleep, but if they fall asleep at 11 and wake at 6:30 they get only about 7.5 hours, so they are always tired.',
						gradingNotes:
							'Model answer: Teens need 8-10 hours of sleep, but if they fall asleep at 11 and wake at 6:30 they get only about 7.5 hours, so they are always tired.',
						points: 7,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'Give TWO consequences of a lack of sleep, mentioned in paragraph III, that are NOT connected to school.',
						modelAnswer:
							'Any TWO: mood swings; a higher risk of car accidents; effects on physical health / a weaker immune system.',
						gradingNotes:
							'Model answer: Any TWO: mood swings; a higher risk of car accidents; effects on physical health / a weaker immune system. 4 points per part.',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'mcq',
						prompt: 'Which TWO results of the Seattle experiment are mentioned in paragraph IV?',
						options: [
							[
								'Students slept longer.',
								'התלמידים ישנו בממוצע יותר מחצי שעה נוספת בכל לילה:\n"they slept, on average, more than half an hour longer"'
							],
							["Students' grades improved.", 'זו התוצאה השנייה:\n"Their grades improved"'],
							['Teachers felt less tired.', 'לא בדיוק. מורים לא מוזכרים בפסקה.'],
							[
								'Students used their phones less at night.',
								'לא בדיוק. השימוש בטלפון לא מופיע בתוצאות הניסוי.'
							],
							[
								'Parents complained less about mornings.',
								'לא בדיוק. ההורים מוזכרים רק בפסקה V, כחלק מהביקורת על הרעיון.'
							]
						],
						correctIndices: [0, 1],
						partialFeedback:
							'כמעט! אחת התשובות שבחרתם נכונה. תוצאות הניסוי מופיעות בשני המשפטים האחרונים של פסקה IV - קראו אותם שוב.',
						points: 8,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt: 'How do supporters of later start times answer the opponents?',
						modelAnswer:
							"They say the evidence is clear and schools should be organized around students' needs, not adults' convenience.",
						gradingNotes:
							'Model answer: They say the evidence is clear and schools should be organized around students\' needs, not adults\' convenience. Key text: "Supporters reply that…".',
						points: 6,
						paragraphRef: 'V'
					},
					{
						type: 'mcq',
						prompt: 'Which of the following is the best title for the article?',
						options: [
							[
								'Lazy Teens: A Growing Problem',
								'לא בדיוק. המאמר טוען בדיוק את ההפך: הקושי לקום בבוקר אינו עצלות.'
							],
							[
								'The Body Clock Behind the Morning Struggle',
								'השעון הביולוגי של בני הנוער הוא הרעיון המרכזי של כל המאמר:\n"body clock"'
							],
							[
								'How Phones Are Ruining Our Sleep',
								'לא בדיוק. הטלפונים מוזכרים רק בקצרה; הם לא הנושא המרכזי.'
							],
							[
								'California Leads the Way in Education',
								'לא בדיוק. קליפורניה היא רק דוגמה אחת בפסקה IV. כותרת טובה צריכה להתאים לכל המאמר, ולא לפרט אחד ממנו.'
							]
						],
						correctIndex: 1,
						points: 6
					}
				]
			},
			{
				id: 'writing',
				instructionsHe: 'כתבו חיבור של בין 120 ל-140 מילים.',
				points: 40,
				screens: [
					{
						type: 'writing-task',
						prompt:
							'Some people believe that high schools in Israel should start at 9:00 a.m. instead of 8:00 a.m. Do you agree? Give reasons to explain your opinion.',
						minWords: 120,
						maxWords: 140,
						points: 40,
						modelAnswer:
							'Have you ever fallen asleep in a morning lesson? Some people believe that high schools in Israel should start at 9:00 instead of 8:00. I think this is an excellent idea.\n\nTo begin with, teenagers need more sleep. Research has shown that our body clock makes it hard to fall asleep early. When we wake up at six-thirty, we arrive at school tired and cannot concentrate.\n\nFurthermore, more sleep would improve our mood and health. If school started later, students would be calmer, and there would be fewer arguments at home in the morning.\n\nIn conclusion, not only would a later start help students learn better, but it would also help them feel better. I would suggest that the Ministry of Education try it in a few schools first.',
						gradingNotes:
							'Off-topic example (scores low on content): לכתוב על שיעורי בית או על מורים, במקום על שעת תחילת הלימודים.'
					}
				]
			}
		]
	},
	{
		id: 'g-exam-4',
		module: 'g',
		uuid: 'g-t-1478',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 105,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הקטע וענו על השאלות שאחריו. ענו באנגלית.',
				points: 60,
				screens: [
					{
						type: 'passage',
						title: '{a:center}**THE CALL THAT NOBODY ANSWERS**',
						paragraphs: [
							{
								id: 'p1',
								text: 'Daniel\'s phone lights up on the table. The screen\nshows a number he does not recognize. His heart\nbegins to race, and he watches the phone until it\nfinally stops ringing. Then he searches for the\nnumber online and sends a text: "Hi, did you just\ncall me?" For Daniel, a seventeen-year-old from\nRamat Gan, this is completely normal. "If someone\ncalls without warning," he says, "I assume something\nterrible has happened." He is not unusual. There is\neven a name for his feeling: "telephobia", the fear\nof making or receiving phone calls.'
							},
							{
								id: 'p2',
								text: 'The numbers suggest that this fear is widespread\namong young people. In 2024, a British survey of\n2,000 adults found that about a quarter of those\naged 18 to 34 never answer when their phone rings.\nMost people in this age group said they would rather\nget a text message than a call, and more than half\nadmitted that an unexpected call made them expect\nbad news. Many older people find this hard to\nunderstand. For them, picking up the phone was once\nthe most natural thing in the world.'
							},
							{
								id: 'p3',
								text: 'Experts point to several explanations. The most\nobvious is experience. Gen Z grew up with\nsmartphones that could do almost anything, and\nmaking calls became one of their least important\nfunctions. Texting also gives a sense of control:\nyou can think, write, delete and rewrite before you\nreply. A phone call offers no such protection.\nEverything happens in real time, and without facial\nexpressions, it is hard to know how the other person\nis reacting. Some experts add that the COVID-19\npandemic, when many teens spent months at home, made\nthe problem worse by reducing their contact with the\noutside world.'
							},
							{
								id: 'p4',
								text: 'Avoiding calls may seem harmless, but it can have\nreal consequences. At Nottingham College in England,\ncareers advisers noticed that many students were\nfailing at an early stage of job applications,\nbecause employers often conduct the first interview\nby phone. The college decided to take action and\nbegan offering "phone confidence" sessions. In one\nexercise, students sit back to back and practice\nconversations, so they cannot rely on body language.\nAccording to the college, even a single session can\nnoticeably increase students\' confidence.'
							},
							{
								id: 'p5',
								text: 'Not everyone thinks young people need fixing. Some\nargue that texting is simply more efficient and more\nrespectful of other people\'s time, since the person\nreceiving the message can answer when it suits them.\nIn their view, Gen Z has not lost a skill; it has\ndeveloped new rules. Still, most experts agree that\nthe ability to talk on the phone remains important,\nwhether you are calling a doctor, a landlord or a\nfuture boss. Daniel has started to practice by\ncalling his grandmother every Friday. "It\'s still a\nlittle scary," he admits. "But at least she always\nhas good news."'
							}
						]
					},
					{
						type: 'writing-task',
						prompt: 'What does Daniel do when an unknown number calls him? Mention TWO things.',
						modelAnswer:
							'Any TWO: he watches the phone until it stops ringing; he searches for the number online; he sends a text asking who called.',
						gradingNotes:
							'Model answer: Any TWO: he watches the phone until it stops ringing; he searches for the number online; he sends a text asking who called. 3 points per part.',
						points: 6,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt: 'Why does Daniel feel nervous when someone calls without warning?',
						modelAnswer: 'He assumes that something terrible has happened.',
						gradingNotes:
							'Model answer: He assumes that something terrible has happened. Key text: "I assume something terrible has happened".',
						points: 6,
						paragraphRef: 'I'
					},
					{
						type: 'mcq',
						prompt: 'Why does the writer mention the 2024 British survey?',
						options: [
							[
								'to show that telephobia is common among young people',
								'המספרים בסקר מראים שהפחד נפוץ בקרב צעירים:\n"this fear is widespread among young people"'
							],
							[
								'to prove that older people answer every call',
								'לא בדיוק. הסקר עוסק בצעירים. המבוגרים מוזכרים רק בסוף הפסקה, ואף אחד לא טוען שהם עונים לכל שיחה.'
							],
							[
								'to compare British and Israeli teenagers',
								'לא בדיוק. הסקר נערך בבריטניה, ואין בו שום השוואה לישראל.'
							],
							[
								'to show that phone calls are becoming more expensive',
								'לא בדיוק. מחיר השיחות לא מוזכר בכלל.'
							]
						],
						correctIndex: 0,
						points: 7,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt:
							"Complete the sentence.\n\nMany older people find young people's behavior hard to understand because for them, ____________.",
						modelAnswer: '…picking up the phone was (once) the most natural thing in the world.',
						gradingNotes:
							'Model answer: …picking up the phone was (once) the most natural thing in the world. Key text: "For them, picking up the phone was once…".',
						points: 6,
						paragraphRef: 'II'
					},
					{
						type: 'mcq',
						prompt: 'Which TWO explanations for telephobia are mentioned in paragraph III?',
						options: [
							[
								'Young people have had little practice making calls.',
								'ההסבר הראשון שהמומחים מציינים הוא חוסר ניסיון:\n"The most obvious is experience."'
							],
							[
								'Phone calls cost more than text messages.',
								'לא בדיוק. מחיר השיחות לא מוזכר בפסקה III.'
							],
							[
								'Texting lets people plan what they want to say.',
								'בהודעה אפשר לחשוב, לכתוב, למחוק ולכתוב מחדש לפני ששולחים:\n"you can think, write, delete and rewrite before you reply"'
							],
							['Smartphones have poor sound quality.', 'לא בדיוק. איכות הצליל לא מוזכרת.'],
							['Teenagers have too many friends to call.', 'לא בדיוק. מספר החברים לא מוזכר בכלל.']
						],
						correctIndices: [0, 2],
						partialFeedback:
							'כמעט! אחת התשובות שבחרתם נכונה. בפסקה III יש שלושה הסברים: חוסר ניסיון, תחושת השליטה שיש בהודעות, והקורונה. מצאו ברשימה את ההסבר הנוסף שמופיע בה.',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt: 'What do the words "no such protection" in paragraph III refer to?',
						modelAnswer:
							'The chance to think, write, delete and rewrite before you reply (the control that texting gives).',
						gradingNotes:
							'Model answer: The chance to think, write, delete and rewrite before you reply (the control that texting gives). Key text: "A phone call offers no such protection.".',
						points: 6,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt: 'Why did Nottingham College decide to offer "phone confidence" sessions?',
						modelAnswer:
							'Many students were failing at an early stage of job applications because employers often hold the first interview by phone.',
						gradingNotes:
							'Model answer: Many students were failing at an early stage of job applications because employers often hold the first interview by phone.',
						points: 7,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt:
							'Complete the sentence.\n\nAccording to people who defend texting, it is better than calling because it is (i) ____________ and (ii) ____________.',
						modelAnswer:
							"(i) more efficient (ii) more respectful of other people's time / lets the receiver answer when it suits them",
						gradingNotes:
							'Model answer: (i) more efficient (ii) more respectful of other people\'s time / lets the receiver answer when it suits them. Key text: "texting is simply more…". 4 points per part.',
						points: 8,
						paragraphRef: 'V'
					},
					{
						type: 'writing-task',
						prompt:
							'Why is Daniel\'s last sentence ("But at least she always has good news") funny? Base your answer on paragraphs I and V.',
						modelAnswer:
							'In paragraph I, Daniel thinks an unexpected call means bad news. In paragraph V he is the caller, and his grandmother always has good news, which shows he is getting over his fear.',
						gradingNotes:
							'Model answer: In paragraph I, Daniel thinks an unexpected call means bad news. In paragraph V he is the caller, and his grandmother always has good news, which shows he is getting over his fear.',
						points: 6
					}
				]
			},
			{
				id: 'writing',
				instructionsHe: 'כתבו חיבור של בין 120 ל-140 מילים.',
				points: 40,
				screens: [
					{
						type: 'writing-task',
						prompt:
							'Some people believe that schools should teach practical communication skills, such as making phone calls and writing formal emails. Do you agree? Give reasons to explain your opinion.',
						minWords: 120,
						maxWords: 140,
						points: 40,
						modelAnswer:
							"I still remember the first time I had to call a doctor's office by myself. I was so nervous that I almost hung up. Since then, I have made many calls, but I have never forgotten that feeling. That is why I agree that schools should teach practical communication skills.\n\nOne important reason is that these skills are necessary for adult life. If young people never practiced them, they would struggle in job interviews or when they needed help from a bank or a clinic.\n\nMoreover, practicing at school builds confidence. Only by practicing can students feel truly prepared. For example, they could act out phone calls or write a formal email and get feedback from their teacher.\n\nAll in all, communicating clearly is as important as math, so every school should make time for it.",
						gradingNotes:
							'Off-topic example (scores low on content): לכתוב רק על הפחד משיחות טלפון, בלי לענות אם בית הספר צריך ללמד את זה.'
					}
				]
			}
		]
	},
	{
		id: 'g-exam-5',
		module: 'g',
		uuid: 'g-t-6059',
		kind: 'assorted',
		options: {
			passThreshold: 0.6,
			durationMinutes: 105,
			warnAtMinutes: 10
		},
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הקטע וענו על השאלות שאחריו. ענו באנגלית.',
				points: 60,
				screens: [
					{
						type: 'passage',
						title: "{a:center}**FRIENDS YOU'VE NEVER MET**",
						paragraphs: [
							{
								id: 'p1',
								text: 'Every evening at nine, Shira, sixteen, puts on her\nheadphones and logs into a game. Within minutes, she\nis laughing with Lena from Berlin, Mateo from Buenos\nAires and Kai from Toronto. They have been playing\ntogether for almost two years. They know each\nother\'s favorite songs, the names of each other\'s\npets and even which exams are coming up. Yet Shira\nhas never seen any of them in person. When her\ngrandmother asked who she was talking to, Shira\nanswered without hesitating: "My best friends."'
							},
							{
								id: 'p2',
								text: "Shira's experience is far from unusual. An American\nstudy found that more than half of teenagers had\nmade at least one new friend online, but only about\na third of them had ever met that friend face to\nface. For earlier generations, a friend was usually\nsomeone from school, the neighborhood or a youth\nmovement. Today, friendships can be built around a\nshared interest rather than a shared address. A\nteenager who loves an unusual band or a rare hobby\nno longer has to feel alone. Somewhere in the world,\nthere is someone who loves it too."
							},
							{
								id: 'p3',
								text: 'Many parents find this worrying. Can a relationship\nreally be called a friendship if you have never\nshared a meal or a hug? Critics point out that\nonline friends can disappear simply by logging off,\nand that it is harder to know whether someone is\nbeing honest about who they are. Safety is another\nserious concern, since not everyone online is who\nthey claim to be. Some psychologists also warn that\ntime spent with online friends may come at the\nexpense of relationships with people nearby.'
							},
							{
								id: 'p4',
								text: 'Others disagree. Researchers have found that for\nmany young people, especially those who feel shy or\ndifferent, online friends offer real emotional\nsupport. It is sometimes easier to share a problem\nwith someone who is outside your daily life and will\nnot repeat it in the school corridor. In one survey,\nmany teens said that friends on social media had\nhelped them through difficult times. "A friendship\nisn\'t less real just because it happens on a\nscreen," explains one youth counselor. "What matters\nis trust, kindness and whether the friend is there\nwhen you need them."'
							},
							{
								id: 'p5',
								text: 'Most experts suggest that the healthiest approach is\nto combine both worlds. Online friends can widen our\nhorizons and introduce us to new cultures, while\nfriends nearby offer something a screen cannot: a\nhand to hold, a shared walk home, a birthday cake in\nperson. Basic safety rules are essential too, such\nas never sharing personal details and telling a\ntrusted adult before meeting an online friend. As\nfor Shira, she is saving money for a trip next\nsummer. The plan? To finally meet Lena in Berlin -\nwith her parents, of course.'
							}
						]
					},
					{
						type: 'writing-task',
						prompt: 'Mention TWO things that Shira knows about her online friends.',
						modelAnswer:
							'Any TWO: their favorite songs; the names of their pets; which exams they have coming up.',
						gradingNotes:
							'Model answer: Any TWO: their favorite songs; the names of their pets; which exams they have coming up. 3 points per part.',
						points: 6,
						paragraphRef: 'I'
					},
					{
						type: 'mcq',
						prompt:
							'Why does the writer mention that Shira answered her grandmother "without hesitating"?',
						options: [
							[
								'to show that Shira was sure they were her real friends',
								'שירה ענתה בלי להסס, כלומר היא בטוחה לגמרי שאלה החברים הכי טובים שלה.\n"without hesitating"'
							],
							[
								'to show that Shira was rude to her grandmother',
								'לא בדיוק. אין בטקסט שום רמז לכך ששירה הייתה לא מנומסת.'
							],
							[
								'to show that Shira did not understand the question',
								'לא בדיוק. שירה ענתה מיד ובבירור - היא הבינה את השאלה היטב.'
							],
							[
								'to show that her grandmother already knew her friends',
								'לא בדיוק. הסבתא שאלה עם מי שירה מדברת - סימן שהיא לא מכירה אותם.'
							]
						],
						correctIndex: 0,
						points: 6,
						paragraphRef: 'I'
					},
					{
						type: 'writing-task',
						prompt:
							'Complete the sentence.\n\nIn the past, friends usually came from ____________, but today friendships can be based on ____________.',
						modelAnswer:
							'…school, the neighborhood or a youth movement … a shared interest (not a shared address).',
						gradingNotes:
							'Model answer: …school, the neighborhood or a youth movement … a shared interest (not a shared address). Key text: "a shared interest rather than a shared address".',
						points: 7,
						paragraphRef: 'II'
					},
					{
						type: 'writing-task',
						prompt: 'Why does a teenager with a rare hobby "no longer have to feel alone"?',
						modelAnswer:
							'Because online they can find someone somewhere in the world who loves the same thing.',
						gradingNotes:
							'Model answer: Because online they can find someone somewhere in the world who loves the same thing.',
						points: 6,
						paragraphRef: 'II'
					},
					{
						type: 'mcq',
						prompt: 'Which TWO concerns about online friendship are mentioned in paragraph III?',
						options: [
							[
								'Online friends can easily disappear.',
								'חבר מהרשת יכול להיעלם פשוט כשהוא מתנתק:\n"online friends can disappear simply by logging off"'
							],
							['Online games are too expensive.', 'לא בדיוק. מחיר המשחקים לא מוזכר.'],
							[
								'People online may not be honest about who they are.',
								'קשה לדעת אם האדם שבצד השני דובר אמת:\n"it is harder to know whether someone is being honest"'
							],
							['Teenagers forget how to write properly.', 'לא בדיוק. כתיבה לא מוזכרת בפסקה.'],
							[
								'Online friends often live in different time zones.',
								'לא בדיוק. אזורי זמן לא מוזכרים.'
							]
						],
						correctIndices: [0, 2],
						partialFeedback:
							'כמעט! אחת התשובות שבחרתם נכונה. החששות מופיעים בפסקה III, מיד אחרי המילים:\n"Critics point out that…"',
						points: 8,
						paragraphRef: 'III'
					},
					{
						type: 'writing-task',
						prompt:
							'According to paragraph IV, why is it sometimes easier to share a problem with an online friend?',
						modelAnswer:
							"The online friend is outside your daily life, so they won't repeat your problem at school.",
						gradingNotes:
							'Model answer: The online friend is outside your daily life, so they won\'t repeat your problem at school. Key text: "will not repeat it in the school corridor".',
						points: 7,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt: 'According to the youth counselor, what makes a friendship real?',
						modelAnswer: 'Trust, kindness, and being there when you need them.',
						gradingNotes:
							'Model answer: Trust, kindness, and being there when you need them. Key text: "What matters is trust, kindness and…".',
						points: 6,
						paragraphRef: 'IV'
					},
					{
						type: 'writing-task',
						prompt:
							'What can friends nearby offer that online friends cannot? Give ONE example from paragraph V and explain it in your own words.',
						modelAnswer:
							'ONE of: a hand to hold / a shared walk home / a birthday cake in person, with a short explanation (being physically together in real life).',
						gradingNotes:
							'Model answer: ONE of: a hand to hold / a shared walk home / a birthday cake in person, with a short explanation (being physically together in real life).',
						points: 7,
						paragraphRef: 'V'
					},
					{
						type: 'mcq',
						prompt: "What is the writer's attitude towards online friendship?",
						options: [
							[
								'The writer is completely against it.',
								'לא בדיוק. הכותב מציג גם את היתרונות של חברות ברשת (פסקה IV), ולכן הוא לא מתנגד לה לגמרי.'
							],
							[
								'The writer thinks it works best alongside real-life friendships.',
								'בפסקה V הכותב ממליץ לשלב בין שני העולמות:\n"the healthiest approach is to combine both worlds"'
							],
							[
								'The writer believes it is better than face-to-face friendship.',
								'לא בדיוק. הכותב לא אומר שחברות ברשת עדיפה, אלא ממליץ לשלב אותה עם חברויות בחיים האמיתיים.'
							],
							[
								'The writer does not express any opinion about it.',
								'לא בדיוק. בפסקה V הכותב מביע עמדה ברורה: הכי בריא לשלב בין שני העולמות.'
							]
						],
						correctIndex: 1,
						points: 7
					}
				]
			},
			{
				id: 'writing',
				instructionsHe: 'כתבו חיבור של בין 120 ל-140 מילים.',
				points: 40,
				screens: [
					{
						type: 'writing-task',
						prompt:
							'Some people believe that friends you meet online can be just as close as friends you meet at school. Do you agree? Give reasons to explain your opinion.',
						minWords: 120,
						maxWords: 140,
						points: 40,
						modelAnswer:
							'Today, many teenagers have friends they have never met in person. Some people believe that these friends can be just as close as friends from school. Personally, I partly agree.\n\nIn my experience, online friends can be very close. For example, I know someone who has played games with the same group for three years. Not only do they share the same interests, but they also support each other when things are hard.\n\nOn the other hand, an online friend cannot hug you on a bad day. If I had a serious problem, I would want a friend who could sit next to me.\n\nTo conclude, online friends can be true friends, but they cannot completely replace the friends we see every day.',
						gradingNotes:
							'Off-topic example (scores low on content): לספר רק על משחק שאתם אוהבים, בלי להשוות בין חברים מהרשת לחברים מבית הספר.'
					}
				]
			}
		]
	}
];
