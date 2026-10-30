// Module F, story 2: Mr. Know-All - W. Somerset Maugham (1925).
// Source: the EngUp literature package (module_F_two_stories.json), imported once.
import type { LessonNode } from '../types';

export const f2Lessons: LessonNode[] = [
	{
		id: 'f-know-all-words',
		section: 'f-2',
		titleEn: 'Key words',
		required: [],
		position: {
			x: 130,
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
							text: '## Mr. Know-All\n{p:text}W. Somerset Maugham (1925)\n{d:rtl}**זמן ומקום:**\n{p:text}A crowded passenger ship from San Francisco to Japan, soon after World War I.'
						},
						{
							type: 'word-card',
							word: 'narrator',
							translationHe: 'המספר'
						},
						{
							type: 'word-card',
							word: 'cabin',
							translationHe: 'תא באונייה'
						},
						{
							type: 'word-card',
							word: 'prejudice',
							translationHe: 'דעה קדומה'
						},
						{
							type: 'word-card',
							word: 'first impression',
							translationHe: 'רושם ראשוני'
						},
						{
							type: 'word-card',
							word: 'arrogant',
							translationHe: 'יהיר'
						},
						{
							type: 'word-card',
							word: 'genuine / real',
							translationHe: 'אמיתי'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'narrator',
									he: 'המספר'
								},
								{
									en: 'cabin',
									he: 'תא באונייה'
								},
								{
									en: 'prejudice',
									he: 'דעה קדומה'
								},
								{
									en: 'first impression',
									he: 'רושם ראשוני'
								},
								{
									en: 'arrogant',
									he: 'יהיר'
								},
								{
									en: 'genuine / real',
									he: 'אמיתי'
								}
							]
						},
						{
							type: 'word-card',
							word: 'imitation',
							translationHe: 'חיקוי, מזויף'
						},
						{
							type: 'word-card',
							word: 'bet',
							translationHe: 'התערבות'
						},
						{
							type: 'word-card',
							word: 'magnifying glass',
							translationHe: 'זכוכית מגדלת'
						},
						{
							type: 'word-card',
							word: 'reputation',
							translationHe: 'מוניטין, שם טוב'
						},
						{
							type: 'word-card',
							word: 'sacrifice',
							translationHe: 'הקרבה'
						},
						{
							type: 'word-card',
							word: 'generous',
							translationHe: 'נדיב'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'imitation',
									he: 'חיקוי, מזויף'
								},
								{
									en: 'bet',
									he: 'התערבות'
								},
								{
									en: 'magnifying glass',
									he: 'זכוכית מגדלת'
								},
								{
									en: 'reputation',
									he: 'מוניטין, שם טוב'
								},
								{
									en: 'sacrifice',
									he: 'הקרבה'
								},
								{
									en: 'generous',
									he: 'נדיב'
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
		id: 'f-know-all-understand-1',
		section: 'f-2',
		titleEn: 'Understand 1',
		required: ['f-know-all-words'],
		position: {
			x: 130,
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
							text: '### The ship\n{p:text}The story takes place soon after World War I, on a crowded ship from San Francisco to Japan. There are not enough rooms, so the narrator must share a small cabin with a stranger, Mr. Kelada.\n{d:rtl}הסיפור מתרחש זמן קצר אחרי מלחמת העולם הראשונה, באונייה צפופה מסן פרנסיסקו ליפן. אין מספיק חדרים, ולכן המספר חייב לחלוק תא קטן עם אדם זר - מר קלדה.'
						},
						{
							type: 'mcq',
							prompt: 'Where does most of the story happen?',
							options: ['on a ship', 'in a hotel', 'in Japan'],
							correctIndex: 0,
							explanation:
								'On the ship - a small, closed place where people cannot avoid each other.'
						},
						{
							type: 'preface',
							text: "### The narrator\n{p:text}The story is told by a first-person narrator ('I'). We see everything through his eyes, and his opinions are not always fair.\n{d:rtl}את הסיפור מספר ״אני״ - מספר בגוף ראשון. אנחנו רואים הכול דרך העיניים שלו, והדעות שלו לא תמיד הוגנות."
						},
						{
							type: 'mcq',
							prompt: 'Who tells the story?',
							options: ['a passenger - the narrator', 'Mr. Kelada', 'Mrs. Ramsay'],
							correctIndex: 0,
							explanation: 'The narrator; remember that his view is personal.'
						},
						{
							type: 'preface',
							text: "### Prejudice\n{p:text}The narrator decides to dislike Mr. Kelada before he even meets him, because of his name and his Eastern origin. He is also annoyed by Mr. Kelada's behavior: he is too friendly, too loud and too sure of himself.\n{d:rtl}המספר מחליט לא לאהוב את מר קלדה עוד לפני שפגש אותו - בגלל השם שלו והמוצא המזרחי שלו. הוא גם מתעצבן מההתנהגות של מר קלדה: הוא חברותי מדי, רעשן ובטוח בעצמו מדי."
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**What is prejudice?**',
							modelAnswer: 'Judging a person before you know him, often because of his origin.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: The narrator decides to dislike Mr. Kelada before he even meets him, because of his name and his Eastern origin. He is also annoyed by Mr. Kelada\'s behavior: he is too friendly, too loud and too sure of himself. Task: What is prejudice? Notes: Judging a person before you know him, often because of his origin.'
						},
						{
							type: 'preface',
							text: "### Meet Mr. Kelada\n{p:text}Mr. Kelada is very talkative and sure of himself. He has an opinion about everything, and he organizes games on the ship. The passengers call him 'Mr. Know-All', even to his face.\n{d:rtl}מר קלדה מדבר הרבה ובטוח בעצמו מאוד. יש לו דעה על כל דבר, והוא מארגן משחקים באונייה. הנוסעים קוראים לו ״מר יודע־הכול״ - אפילו בפניו."
						},
						{
							type: 'mcq',
							prompt: "Why do the passengers call him 'Mr. Know-All'?",
							options: [
								'He always acts as if he knows everything.',
								'He is a teacher.',
								'He is very quiet.'
							],
							correctIndex: 0,
							explanation: 'The nickname makes fun of his confidence.'
						},
						{
							type: 'preface',
							text: '### The Ramsays\n{p:text}Mr. Ramsay works for the American consulate in Kobe, Japan. His young wife is quiet and modest. She spent a year in New York while her husband stayed in Japan.\n{d:rtl}מר רמזי עובד בקונסוליה האמריקאית בעיר קובה ביפן. אשתו הצעירה שקטה וצנועה. היא בילתה שנה בניו יורק, בזמן שבעלה נשאר ביפן.'
						},
						{
							type: 'mcq',
							prompt: 'Where did Mrs. Ramsay spend the last year?',
							options: ['in New York', 'in Japan with her husband', 'on the ship'],
							correctIndex: 0,
							explanation: 'Remember this detail - it becomes important at the end.'
						},
						{
							type: 'preface',
							text: "### The pearls\n{p:text}At dinner, the passengers talk about pearls. Mr. Kelada is an expert - pearls are his business. He says Mrs. Ramsay's necklace is real and very valuable. Mr. Ramsay laughs: he says it is a cheap imitation.\n{d:rtl}בארוחת הערב הנוסעים מדברים על פנינים. מר קלדה מומחה - הוא עוסק בפנינים. הוא אומר שהשרשרת של גברת רמזי אמיתית ויקרה מאוד. מר רמזי צוחק ואומר שזו שרשרת זולה ומזויפת."
						},
						{
							type: 'mcq',
							prompt: 'Who thinks the pearls are real?',
							options: ['Mr. Kelada', 'Mr. Ramsay', 'the narrator'],
							correctIndex: 0,
							explanation: 'Mr. Kelada - and he is the expert.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-know-all-understand-2',
		section: 'f-2',
		titleEn: 'Understand 2',
		required: ['f-know-all-understand-1'],
		position: {
			x: 130,
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
							text: '### The bet\n{p:text}The two men bet a hundred dollars. Mr. Kelada takes out a magnifying glass and examines the necklace. He is about to win.\n{d:rtl}שני הגברים מתערבים על מאה דולר. מר קלדה מוציא זכוכית מגדלת ובודק את השרשרת. הוא עומד לנצח.'
						},
						{
							type: 'mcq',
							prompt: 'What is the bet about?',
							options: [
								'whether the pearls are real',
								'who is the best card player',
								'the price of the ship tickets'
							],
							correctIndex: 0,
							explanation: 'Whether the pearls are real or an imitation.'
						},
						{
							type: 'preface',
							text: "### Mrs. Ramsay's face\n{p:text}Suddenly Mr. Kelada looks at Mrs. Ramsay. Her face is very pale, and her eyes beg him for help. Mr. Kelada understands.\n{d:rtl}פתאום מר קלדה מסתכל על גברת רמזי. הפנים שלה חיוורות מאוד, והעיניים שלה מתחננות לעזרה. מר קלדה מבין."
						},
						{
							type: 'mcq',
							prompt: 'What clue does Mr. Kelada notice?',
							options: ['her frightened face', 'a broken pearl', 'a price tag'],
							correctIndex: 0,
							explanation: 'Her fear is the turning point of the story.'
						},
						{
							type: 'preface',
							text: '### The decision\n{p:text}Mr. Kelada says that he was wrong and that the pearls are an imitation. He pays the hundred dollars. He does this on purpose, although he knows the truth.\n{d:rtl}מר קלדה אומר שטעה ושהפנינים מזויפות. הוא משלם מאה דולר. הוא עושה את זה בכוונה, למרות שהוא יודע את האמת.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Why does he say he was wrong?**',
							modelAnswer: 'To protect Mrs. Ramsay - not because he does not know pearls.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Mr. Kelada says that he was wrong and that the pearls are an imitation. He pays the hundred dollars. He does this on purpose, although he knows the truth. Task: Why does he say he was wrong? Notes: To protect Mrs. Ramsay - not because he does not know pearls.'
						},
						{
							type: 'preface',
							text: '### The price of kindness\n{p:text}The story spreads around the ship. The passengers laugh at Mr. Kelada, the man who always knows everything. He loses his money and his pride.\n{d:rtl}הסיפור מתפשט באונייה, והנוסעים צוחקים על מר קלדה - ״זה שיודע הכול״. הוא מפסיד גם כסף וגם את הכבוד שלו.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**What does Mr. Kelada lose? Name two things.**',
							modelAnswer: 'Money and his reputation - this makes it a real sacrifice.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: The story spreads around the ship. The passengers laugh at Mr. Kelada, the man who always knows everything. He loses his money and his pride. Task: What does Mr. Kelada lose? Name two things Notes: Money and his reputation - this makes it a real sacrifice.'
						},
						{
							type: 'preface',
							text: '### The next morning\n{p:text}The next morning, someone pushes an envelope under the cabin door. Inside is a hundred-dollar note. Mr. Kelada hints that a young wife should not spend a year alone in New York while her husband works far away.\n{d:rtl}למחרת בבוקר מישהו דוחף מעטפה מתחת לדלת התא, ובתוכה שטר של מאה דולר. מר קלדה רומז שאישה צעירה לא צריכה לבלות שנה לבד בניו יורק כשבעלה עובד רחוק.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**What can we infer from the envelope and the hint?**',
							modelAnswer:
								'Mrs. Ramsay probably returned the money to thank him. The hint suggests that the pearls were a gift from another man - but this is an inference, not a fact. Do not invent who delivered the envelope.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: The next morning, someone pushes an envelope under the cabin door. Inside is a hundred-dollar note. Mr. Kelada hints that a young wife should not spend a year alone in New York while her husband works far away. Task: What can we infer from the envelope and the hint? Notes: Mrs. Ramsay probably returned the money to thank him. The hint suggests that the pearls were a gift from another man - but this is an inference, not a fact. Do not invent who delivered the envelope.'
						},
						{
							type: 'preface',
							text: "### The narrator's last words\n{p:text}At the end, the narrator says that at that moment he did not entirely dislike Mr. Kelada.\n{d:rtl}בסוף המספר אומר שבאותו רגע הוא כבר לא סלד ממר קלדה לגמרי."
						},
						{
							type: 'mcq',
							prompt: "How does the narrator's opinion change?",
							options: [
								'from dislike to a little respect',
								'from dislike to love',
								'it does not change'
							],
							correctIndex: 0,
							explanation: 'A small but important change - do not exaggerate it.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-know-all-think',
		section: 'f-2',
		titleEn: 'Think',
		required: ['f-know-all-understand-2'],
		position: {
			x: 130,
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
							text: '### Appearance versus reality\n{p:text}On the outside, Mr. Kelada seems loud and arrogant. On the inside, he is kind and generous. The narrator sees the outside; the reader discovers the inside.\n{d:rtl}מבחוץ מר קלדה נראה רעשן ויהיר. מבפנים הוא אדיב ונדיב. המספר רואה את החוץ - והקורא מגלה את הפנים.'
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Complete: At first Mr. Kelada seems ____, but later we see ____.**',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: On the outside, Mr. Kelada seems loud and arrogant. On the inside, he is kind and generous. The narrator sees the outside; the reader discovers the inside. Task: Complete: At first Mr. Kelada seems ____, but later we see ____ Notes: Use a specific action as evidence.'
						},
						{
							type: 'preface',
							text: "### Irony\n{p:text}The man everyone calls 'Mr. Know-All' chooses to look as if he knows nothing. And the narrator, who thinks he knows people, is wrong about Mr. Kelada.\n{d:rtl}אירוניה = פער בין מה שמצפים לו לבין מה שקורה באמת. האיש ש״יודע הכול״ בוחר להיראות כמי שלא יודע - והמספר, שבטוח שהוא מבין אנשים, טועה."
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Identify one irony in the story.**\n{p:callout}Irony is a gap between what we expect and what happens - not just a surprise.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: The man everyone calls \'Mr. Know-All\' chooses to look as if he knows nothing. And the narrator, who thinks he knows people, is wrong about Mr. Kelada. Task: Identify one irony in the story Notes: Irony is a gap between what we expect and what happens - not just a surprise.'
						},
						{
							type: 'preface',
							text: '### Fact or inference?\n{p:text}Fact: Mr. Kelada says the pearls are an imitation. Inference: the pearls are real, and someone else gave them to Mrs. Ramsay. The story hints, but it never says this directly.\n{d:rtl}עובדה = כתוב בסיפור. הסקה = מבינים מהרמזים. הסיפור רק רומז מאיפה הגיעה השרשרת - הוא לא אומר את זה במפורש.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is an inference, not a fact written in the story?',
							options: [
								'The pearls are real, and someone else gave them to Mrs. Ramsay.',
								'Mr. Kelada says the pearls are an imitation.',
								'Mr. Kelada pays a hundred dollars.'
							],
							correctIndex: 0,
							explanation: 'Separate what the story says from what we understand.'
						},
						{
							type: 'preface',
							text: '### Point of view and style\n{p:text}Because the narrator tells the story, we first see Mr. Kelada as he does. The surprise at the end is our surprise too. Maugham writes in simple, clear language. The ending is short and quiet - and full of surprise.\n{d:rtl}בגלל שהמספר מספר את הסיפור, גם אנחנו רואים קודם את מר קלדה כמו שהוא רואה אותו. ההפתעה בסוף היא גם ההפתעה שלנו. מוהם כותב בשפה פשוטה וברורה. הסוף קצר ושקט - ומלא הפתעה.'
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**How does the first-person narrator affect the way we see Mr. Kelada?**',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Because the narrator tells the story, we first see Mr. Kelada as he does. The surprise at the end is our surprise too. Maugham writes in simple, clear language. The ending is short and quiet - and full of surprise. Task: How does the first-person narrator affect the way we see Mr. Kelada? Notes: Mention both: we share his prejudice, and we share his surprise.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-know-all-answer',
		section: 'f-2',
		titleEn: 'Answer',
		required: ['f-know-all-think'],
		position: {
			x: 130,
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
							text: '### Answer builder: three steps\n{p:text}Question: Why does Mr. Kelada lose the bet on purpose? Build your answer: ANSWER - PROVE - EXPLAIN.\n{d:rtl}שאלת Why דורשת מניע - לא רק תיאור של ההתערבות.'
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Write three sentences.**',
							wordBank: [
								'Mr. Kelada loses the bet on purpose because',
								'For example,',
								'This shows that'
							],
							modelAnswer:
								'Mr. Kelada loses the bet on purpose because he wants to protect Mrs. Ramsay. For example, he changes his answer only after he sees her pale, frightened face. This shows that her safety is more important to him than money or pride.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Question: Why does Mr. Kelada lose the bet on purpose? Build your answer: ANSWER - PROVE - EXPLAIN. Task: Write three sentences Notes: Model: Mr. Kelada loses the bet on purpose because he wants to protect Mrs. Ramsay. For example, he changes his answer only after he sees her pale, frightened face. This shows that her safety is more important to him than money or pride.'
						},
						{
							type: 'preface',
							text: "### Evidence practice\n{p:text}A strong answer uses an event, not a general sentence like 'he is a good man'.\n{d:rtl}ראיה טובה היא מעשה מדויק מהסיפור, לא משפט כללי כמו ״הוא אדם טוב״."
						},
						{
							type: 'mcq',
							prompt: "Which event supports 'Mr. Kelada is generous'?",
							options: [
								'He pays $100 and accepts the laughter.',
								'He talks a lot at dinner.',
								'He shares a cabin with the narrator.'
							],
							correctIndex: 0,
							explanation: 'Explain how the event proves the claim.'
						},
						{
							type: 'preface',
							text: '### From a sentence to a paragraph\n{p:text}A 5-point answer is a short paragraph (about 60-100 words). Language focus: contrast words (at first, however, by the end) and character adjectives (arrogant, prejudiced, considerate, generous).\n{d:rtl}בחמש יחידות שפה היא 50% מהציון. השתמשו במילות ניגוד ובשמות תואר לתיאור דמויות.'
						},
						{
							type: 'writing-task',
							prompt: "{p:text}**Write a paragraph: How does the narrator's opinion change?**",
							wordBank: [
								'At first, the narrator',
								'However, after the bet,',
								'By the end,',
								'This shows that'
							],
							minWords: 60,
							maxWords: 100,
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: A 5-point answer is a short paragraph (about 60-100 words). Language focus: contrast words (at first, however, by the end) and character adjectives (arrogant, prejudiced, considerate, generous). Task: Write a paragraph: How does the narrator\'s opinion change? Notes: Feedback on content and on language (vocabulary, grammar, linking words).'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'f-know-all-mastery',
		section: 'f-2',
		titleEn: 'Mastery',
		required: ['f-know-all-answer'],
		position: {
			x: 130,
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
							text: "### Mastery challenge\n{p:text}Explain how the pearl incident changes the narrator's opinion of Mr. Kelada. Write 80-100 words and use two events as evidence.\n{d:rtl}עכשיו כותבים לבד, עם שתי ראיות. נבדוק תוכן (הבנה, ראיות, הסבר) ושפה (אוצר מילים, דקדוק, פיסוק)."
						},
						{
							type: 'writing-task',
							prompt: '{p:text}**Write the paragraph; then improve it after feedback.**',
							wordBank: ['The pearl incident changes', 'First,', 'Then,', 'This shows that'],
							minWords: 80,
							maxWords: 100,
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). What the student learned on this screen: Explain how the pearl incident changes the narrator\'s opinion of Mr. Kelada. Write 80-100 words and use two events as evidence. Task: Write the paragraph; then improve it after feedback Notes: Do not state the affair as a fact. Do not say the narrator loves Mr. Kelada.'
						}
					]
				}
			]
		}
	},
	{
		id: 'f-know-all-review',
		section: 'f-2',
		titleEn: 'Review',
		required: ['f-know-all-mastery'],
		position: {
			x: 130,
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
								'After World War I, the ship is crowded; the narrator must share a cabin with Mr. Kelada.',
								'The narrator dislikes Mr. Kelada before he even meets him (his name, his origin).',
								"Mr. Kelada is talkative and confident; the passengers call him 'Mr. Know-All'.",
								"At dinner, Mr. Kelada says Mrs. Ramsay's pearls are real; Mr. Ramsay says they are cheap.",
								"They bet $100. Mr. Kelada examines the pearls and sees Mrs. Ramsay's frightened face.",
								'He says he was wrong and pays. The passengers laugh at him.',
								"Next morning: an envelope with $100 under the door; Mr. Kelada hints about the wife's year alone in New York.",
								'The narrator: at that moment he did not entirely dislike Mr. Kelada.'
							]
						},
						{
							type: 'preface',
							text: '## טעויות נפוצות\n{d:rtl}משפטים שתלמידים כותבים, ומה נכון באמת:'
						},
						{
							type: 'steps',
							steps: [
								"❌ Mr. Kelada lost because he did not know pearls.\n✅ He gives the wrong answer on purpose after he sees Mrs. Ramsay's fear.",
								'❌ The story proves that Mrs. Ramsay had an affair.\n✅ This is an inference from a hint, not a fact.',
								'❌ The narrator loves Mr. Kelada at the end.\n✅ He only says that at that moment he did not entirely dislike him.',
								'❌ Mr. Kelada lost only $100.\n✅ He also lost his pride: the passengers laugh at him.'
							]
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 1\n{p:text}**Why does the narrator dislike Mr. Kelada at the beginning? Is his opinion fair?**\n{d:rtl}Why + Is it fair = סיבה + עמדה מנומקת.\n{d:rtl}📜 ראיה: The narrator's feelings before they meet; his reaction to Mr. Kelada's behavior.\n---\n{p:text}The narrator dislikes Mr. Kelada even before he meets him. He judges him by his name and his foreign origin, and later he is annoyed by his talking and his confidence. For example, he is upset that he must share a cabin with him, and almost everything Mr. Kelada does annoys him. In my opinion, this opinion is not fair, because it is based on prejudice and first impressions, not on Mr. Kelada's actions. As the story shows, the narrator does not really know him."
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 2\n{p:text}**What is the bet about, and why is it important?**\n{d:rtl}What + Why important = אירוע + משמעות.\n{d:rtl}📜 ראיה: The dinner conversation and the bet.\n---\n{p:text}At dinner, Mr. Kelada says that Mrs. Ramsay's pearl necklace is real and very valuable, but Mr. Ramsay says it is a cheap imitation. They bet a hundred dollars. The bet is important because it puts Mr. Kelada in a difficult situation: if he tells the truth, he wins the money but may hurt Mrs. Ramsay. As a result, the bet becomes a test of his character, not of his knowledge."
						},
						{
							type: 'preface',
							text: '### תשובה לדוגמה 3\n{p:text}**How does Mrs. Ramsay feel when Mr. Kelada examines the pearls? How do we know?**\n{d:rtl}How does … feel = רגש + ראיה + הסקה זהירה.\n{d:rtl}📜 ראיה: Her pale face and pleading eyes.\n---\n{p:text}Mrs. Ramsay feels terrified. When Mr. Kelada examines the necklace, her face becomes very pale, and she looks at him as if she is begging for help. We can infer that she is afraid the truth about the pearls will come out, because her husband believes they are cheap. This moment is the turning point of the story, because Mr. Kelada sees her fear and changes his answer.'
						},
						{
							type: 'preface',
							text: '### תשובה לדוגמה 4\n{p:text}**Why does Mr. Kelada lose the bet on purpose? What does this show about him?**\n{d:rtl}Why = מניע. What does it show = תכונה.\n{d:rtl}📜 ראיה: He changes his answer after seeing her face; he pays and is laughed at.\n---\n{p:text}Mr. Kelada loses the bet on purpose to protect Mrs. Ramsay. He sees how frightened she is, so he says the pearls are only an imitation, even though he is an expert. He pays a hundred dollars, and the passengers laugh at him. This shows that he is kind and generous: he is ready to lose money and his reputation to save another person from trouble. In other words, he is much better than the narrator believed.'
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 5\n{p:text}**What happens the next morning, and what can we infer from it?**\n{d:rtl}What happens + infer = עובדה + הסקה מסומנת.\n{d:rtl}📜 ראיה: The envelope with $100; Mr. Kelada's hint about New York.\n---\n{p:text}The next morning, someone pushes an envelope under the cabin door with a hundred-dollar note inside. We can infer that Mrs. Ramsay sent it to thank Mr. Kelada and to return his money. In addition, Mr. Kelada hints that a young wife should not spend a year alone in New York while her husband works in Japan. This suggests that someone else may have given her the pearls, but the story never says so directly."
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 6\n{p:text}**How does the narrator's opinion of Mr. Kelada change?**\n{d:rtl}How change = לפני לעומת אחרי.\n{d:rtl}📜 ראיה: His first feelings; his last sentence.\n---\n{p:text}At the beginning, the narrator dislikes Mr. Kelada and finds him annoying and arrogant. At the end, after he sees Mr. Kelada's sacrifice, he admits that at that moment he did not entirely dislike him. This change is small but important. It shows that Mr. Kelada's actions made the narrator question his first impression. However, the narrator does not say that he likes him, so we should not exaggerate the change."
						},
						{
							type: 'preface',
							text: "### תשובה לדוגמה 7\n{p:text}**The story is told by a first-person narrator. How does this affect the way we see Mr. Kelada?**\n{d:rtl}Form/style = איך הסיפור מסופר ומה זה עושה לקורא.\n{d:rtl}📜 ראיה: The narrator's early descriptions; the surprise at the end.\n---\n{p:text}Because the story is told by the narrator, we see Mr. Kelada through his prejudiced eyes. At first, we also find Mr. Kelada annoying, because the narrator describes mainly his loud talking and his confidence. Later, we discover, together with the narrator, that Mr. Kelada is generous. I appreciated this technique, because it makes the reader feel the same surprise, and it shows how easily we judge people. It also makes us ask whether we can trust the narrator."
						},
						{
							type: 'preface',
							text: '### תשובה לדוגמה 8\n{p:text}**Explain the irony of the title "Mr. Know-All."**\n{d:rtl}Irony = פער בין הציפייה למציאות.\n{d:rtl}📜 ראיה: The nickname; the false admission at the bet.\n---\n{p:text}The title is ironic. The passengers call Mr. Kelada "Mr. Know-All" to make fun of him, because he always has an answer. However, in the most important moment, he chooses to look as if he knows nothing about pearls. He knows the truth, but he hides it to protect Mrs. Ramsay. In addition, it is the narrator, not Mr. Kelada, who thinks he knows everything about people - and he is wrong. That is why the title gets a new meaning at the end.'
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
								"{p:text}**after World War I, many people judged others by their nationality and origin. Write 80-100 words: How does the narrator's prejudice reflect the attitudes of his time, and is it still relevant today? (CD4, CD7)**",
							minWords: 80,
							maxWords: 100,
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Mr. Know-All" by W. Somerset Maugham (1925) (Bagrut Module F, B2 level; content and language count equally). A bridging-text-and-context task: after World War I, many people judged others by their nationality and origin. Write 80-100 words: How does the narrator\'s prejudice reflect the attitudes of his time, and is it still relevant today? (CD4, CD7)'
						}
					]
				}
			]
		}
	}
];
