// COBE Part B - the project. `content` is the 4-point path, `content5` the
// 5-point one. Source: the partner course (COBE_4/5_Point_Path_App_Course),
// official sample questions kept verbatim.
import type { LessonNode } from '../types';

export const cobe2Lessons: LessonNode[] = [
	{
		id: 'cobe-b-basics',
		section: 'cobe-2',
		required: ['cobe-a-stories'],
		position: {
			x: 0,
			y: 700
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מה זה חלק ב׳?\n\nחלק ב׳ שווה **25 נקודות**. עונים על **2-3 שאלות על הפרויקט שלכם** בהקלטה אחת.\n\nהמספר הקסום: **דקה אחת** ⏱️ (דקה עד שתיים זה הכי טוב).'
						},
						{
							type: 'preface',
							text: '{p:text}1:00-2:00 → no points lost ✓\n{p:text}0:40-0:59 → -20%\n{p:text}0:20-0:39 → -50%\n{p:text}under 0:20 → -100%\n\nמסיימים עד 2:00 עם סוף ברור. **בלי פרויקט אין בחינה:** הפרויקט חייב להיות גמור לפני ה-COBE.'
						},
						{
							type: 'mcq',
							prompt: 'Dana spoke for 45 seconds. What happens?',
							options: ['Nothing', 'She loses 20%', 'She loses everything'],
							correctIndex: 1,
							explanation: 'נכון: 40-59 שניות = מינוס 20%. עוד 15 שניות היו מצילות לה את הנקודות!'
						},
						{
							type: 'preface',
							text: '### נזכרים בפרויקט\n\nבונים **כרטיס פרויקט**: ראשי פרקים, כאן מותר גם בעברית (זה רק לתרגול).\n\n{p:callout}טיפ ממורים: מתכוננים בבית - על מה היה הפרויקט, 2-3 עובדות מעניינות ורפלקציה אחת. מתרגלים להגיד אותם בקצרה (מתרגלים, לא קוראים).'
						},
						{
							type: 'self-check',
							prompt:
								'כתבו את כרטיס הפרויקט שלכם: מה היה הנושא? עבדתם לבד, בזוג או בקבוצה? מה עשיתם (סקר, ראיון, חיפוש באינטרנט, מצגת, סרטון)? מה למדתם? מה היה קשה ואיך פתרתם? מה היה טוב בפרויקט? ☀️',
							modelAnswer:
								'נושא: שינה אצל בני נוער. עבדתי בזוג עם נועה. עשינו סקר בכיתה (30 תלמידים) וחיפשנו באינטרנט. למדנו שבני נוער צריכים 8-10 שעות שינה. היה קשה למצוא מקורות באנגלית - המורה עזרה. הטוב: עכשיו אנחנו מניחים את הטלפון בצד באחת עשרה.',
							answerLang: 'he',
							placeholder: 'נושא: ...'
						},
						{
							type: 'preface',
							text: '{p:callout}לא זוכרים את הפרויקט? בקשו מהמורה את קובץ הפרויקט או המצגת. בשיעור 4 יש גם משפטי הצלה.'
						},
						{
							type: 'preface',
							text: '### מילים על פרויקט\n\nהמילים האלה יעזרו לכם לדבר על כל פרויקט.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'topic',
									he: 'נושא'
								},
								{
									en: 'research',
									he: 'מחקר'
								},
								{
									en: 'sources',
									he: 'מקורות מידע'
								},
								{
									en: 'survey',
									he: 'סקר'
								},
								{
									en: 'interview',
									he: 'ראיון'
								},
								{
									en: 'results',
									he: 'תוצאות'
								}
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'challenge',
									he: 'אתגר'
								},
								{
									en: 'to solve',
									he: 'לפתור'
								},
								{
									en: 'partner',
									he: 'שותף'
								},
								{
									en: 'teamwork',
									he: 'עבודת צוות'
								},
								{
									en: 'presentation',
									he: 'מצגת'
								},
								{
									en: 'deadline',
									he: 'מועד הגשה'
								}
							]
						},
						{
							type: 'order',
							prompt: 'איך אומרים: "עשינו סקר בכיתה"?',
							tiles: ['We', 'made', 'a survey', 'in our class.']
						},
						{
							type: 'spell-word',
							word: 'survey',
							mode: 'listen',
							hintHe: 'סקר'
						},
						{
							type: 'preface',
							text: '### על מה ישאלו?\n\nשאלות על הפרויקט מתחלקות ל**שש משפחות**: ① הנושא ולמה ② מה למדתי ③ מקורות ④ אתגרים ⑤ עבודת צוות ומיומנויות ⑥ מה הייתי עושה אחרת.\n\n{p:callout}רעיון קצר אחד לכל משפחה - ואתם מוכנים כמעט לכל שאלה.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"Explain what the topic of your project was and why you chose it."**\n\nלאיזו משפחה שייכת השאלה?',
							options: ['① Topic & why', '② What I learned', '④ Challenges'],
							correctIndex: 0,
							explanation: 'נושא + למה בחרתם = משפחה 1.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"What different resources did you use?"**\n\nלאיזו משפחה שייכת השאלה?',
							options: ['② What I learned', '③ Sources', '⑤ Teamwork & skills'],
							correctIndex: 1,
							explanation: 'resources = מקורות מידע.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"What skills did you learn or improve?"**\n\nלאיזו משפחה שייכת השאלה?',
							options: ['① Topic & why', '④ Challenges', '⑤ Teamwork & skills'],
							correctIndex: 2,
							explanation: 'skills = מיומנויות.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"If you were writing a research project now, what would you do differently?"**\n\nלאיזו משפחה שייכת השאלה?',
							options: ['④ Challenges', '⑥ If I did it again', '② What I learned'],
							correctIndex: 1,
							explanation: '"what would you do differently" = מה הייתם עושים אחרת.'
						}
					],
					retryMissed: true
				}
			]
		},
		content5: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מה זה חלק ב׳?\n\nחלק ב׳ שווה **25 נקודות**. עונים על **2-3 שאלות על הפרויקט שלכם** בהקלטה אחת.\n\nחובה לדבר **לפחות דקה**. ברמת 5 יחידות מכוונים ל**כדקה וחצי**, עם עומק ודוגמאות מהפרויקט.'
						},
						{
							type: 'preface',
							text: '{p:text}1:00-2:00 → no points lost ✓\n{p:text}0:40-0:59 → -20%\n{p:text}0:20-0:39 → -50%\n{p:text}under 0:20 → -100%\n\nמסיימים עד 2:00 עם סוף ברור. **בלי פרויקט אין בחינה:** הפרויקט חייב להיות גמור לפני ה-COBE.'
						},
						{
							type: 'mcq',
							prompt: 'Which answer is best for 5 points?',
							options: [
								'1:05 with only the topic',
								'1:30 with topic, finding, example and reflection',
								'2:30 repeating the same idea'
							],
							correctIndex: 1,
							explanation: 'אורך + עומק. חזרה על אותו רעיון לא מוסיפה נקודות.'
						},
						{
							type: 'preface',
							text: '### נזכרים בפרויקט\n\nבונים **כרטיס פרויקט**: ראשי פרקים, מותר גם בעברית. **רק דברים שבאמת עשיתם.**\n\n{p:callout}טיפ ממורים: מתכוננים בבית - על מה היה הפרויקט, 2-3 עובדות מעניינות ורפלקציה אחת. מתרגלים להגיד אותם (לא קוראים).'
						},
						{
							type: 'self-check',
							prompt:
								'כתבו את כרטיס הפרויקט: נושא, שאלת המחקר, למה זה חשוב, מה עשיתם, הממצא המרכזי, מה הפתיע, התרומה האישית שלכם, קושי ופתרון, מה הייתם עושים אחרת, והקשר לחיים האמיתיים.',
							modelAnswer:
								'נושא: בזבוז מזון בקפטריה. שאלת מחקר: כמה אוכל נזרק ולמה? חשוב: משפיע על הסביבה ועל התקציב. עשינו: סקר של 120 תלמידים וניסוי של שבוע. ממצא: כ-40% זורקים חצי ארוחה, כי המנות גדולות מדי. הפתעה: חשבתי שזה בעיקר במסעדות. התרומה שלי: ניתחתי את הנתונים. קושי: מעט תשובות לסקר - שלחנו תזכורות. אחרת: הייתי מראיין מומחה. חיים אמיתיים: בית הספר המשיך את הניסוי.',
							answerLang: 'he',
							placeholder: 'נושא: ...'
						},
						{
							type: 'preface',
							text: '### מילים על פרויקט\n\nמילים מדויקות לדיבור על מחקר ברמת 5 יחידות.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'research question',
									he: 'שאלת מחקר'
								},
								{
									en: 'findings',
									he: 'ממצאים'
								},
								{
									en: 'data',
									he: 'נתונים'
								},
								{
									en: 'analyze',
									he: 'לנתח'
								},
								{
									en: 'conclusion',
									he: 'מסקנה'
								}
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'reliable source',
									he: 'מקור אמין'
								},
								{
									en: 'collaborate',
									he: 'לשתף פעולה'
								},
								{
									en: 'contribution',
									he: 'תרומה'
								},
								{
									en: 'relevant',
									he: 'רלוונטי'
								},
								{
									en: 'perspective',
									he: 'נקודת מבט'
								}
							]
						},
						{
							type: 'order',
							prompt: 'איך אומרים: "הממצא המרכזי שלנו היה ש..."?',
							tiles: ['Our', 'main', 'finding', 'was that...']
						},
						{
							type: 'spell-word',
							word: 'conclusion',
							mode: 'listen',
							hintHe: 'מסקנה'
						},
						{
							type: 'preface',
							text: '### על מה ישאלו?\n\nשאלות על הפרויקט מתחלקות ל**שמונה משפחות**: ① הנושא ולמה ② ממצאים והפתעות ③ מקורות ④ אתגרים ⑤ עבודת צוות ותרומה ⑥ מיומנויות ואנגלית ⑦ השפעה עליי ⑧ מה הייתי עושה אחרת.\n\n{p:callout}רעיון מפותח אחד לכל משפחה = מוכנים לכל שאלה.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**"What surprised you the most?"**\n\nלאיזו משפחה שייכת השאלה?',
							options: ['① Topic & why', '② Findings & surprises', '⑦ Influence on me'],
							correctIndex: 1,
							explanation: 'surprised = הפתיע. משפחה 2.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"Is project work a good way to improve your English?"**\n\nלאיזו משפחה שייכת השאלה?',
							options: ['⑥ Skills & English', '③ Sources', '⑧ If I did it again'],
							correctIndex: 0,
							explanation: 'שאלה על האנגלית = משפחה 6.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"In what way has the project influenced you since you did it?"**\n\nלאיזו משפחה שייכת השאלה?',
							options: ['② Findings & surprises', '⑦ Influence on me', '④ Challenges'],
							correctIndex: 1,
							explanation: 'influenced you = השפיע עליכם. משפחה 7.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"What are the pros and cons of working as a pair or team?"**\n\nלאיזו משפחה שייכת השאלה?',
							options: ['⑤ Teamwork & contribution', '④ Challenges', '⑥ Skills & English'],
							correctIndex: 0,
							explanation: 'pair or team = עבודת צוות. משפחה 5.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-b-topic',
		section: 'cobe-2',
		required: ['cobe-b-basics'],
		position: {
			x: 70,
			y: 820
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מפרקים את השאלה הרשמית\n\nסט מדוגמה רשמית:\n\n{p:text}"What was your project about and what were you hoping to learn from it? What did you already know about the topic you chose and what did you discover? Explain through examples from your project."'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}"What was your project about and what were you hoping to learn from it? What did you already know about the topic you chose and what did you discover? Explain through examples from your project."\n\nכמה משימות יש בסט?',
							options: ['2', '3', '5'],
							correctIndex: 2,
							explanation:
								'5 משימות: הנושא, מה קיוויתם ללמוד, מה כבר ידעתם, מה גיליתם, ודוגמאות. 5 חלקים קטנים = בערך דקה. קל!',
							layout: 'honeycomb'
						},
						{
							type: 'preface',
							text: '### משפחה 1: הנושא והסיבה\n\nמשפטים מוכנים לשאלה על מה היה הפרויקט ולמה בחרתם בו.\n\n{p:callout}רק מילות מפתח: *sleep, tired mornings, phones*. לא משפטים שלמים בעל פה.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'My project was about...',
									he: 'הפרויקט שלי היה על...'
								},
								{
									en: 'I chose this topic because...',
									he: 'בחרתי בנושא הזה כי...'
								},
								{
									en: 'It is important to me because...',
									he: 'זה חשוב לי כי...'
								},
								{
									en: 'I wanted to learn how to help...',
									he: 'רציתי ללמוד איך לעזור ל...'
								},
								{
									en: 'I was hoping to learn...',
									he: 'קיוויתי ללמוד...'
								}
							]
						},
						{
							type: 'speak',
							prompt: 'What was your project about, and why did you choose it?',
							tip: 'שני משפטים: My project was about... I chose this topic because...',
							targetSeconds: 20,
							modelAnswer:
								'My project was about teenagers and sleep. I chose this topic because I always feel tired in the morning.',
							part: 'B'
						},
						{
							type: 'preface',
							text: "### מקשיבים לתשובה לדוגמה\n\nתשובה לסט הרשמי (בערך דקה ועשר):\n\n{p:text}My project was about teenagers and sleep. I chose this topic because I always feel tired in the morning, and I wanted to help myself and my friends. I was hoping to learn how many hours teenagers really need. Before the project, I already knew that phones are bad for sleep, but I didn't know how bad. I discovered that teenagers need eight to ten hours of sleep, but most students in my class sleep only six hours. For example, in our survey, twenty out of thirty students said they use their phone in bed after midnight. Now my friends and I have a deal: phones away at eleven o'clock. We all feel better in the morning."
						},
						{
							type: 'mark-all',
							instruction: 'סמנו בתשובה: מה ידעתי לפני, מה גיליתי, והדוגמה.',
							text: 'Before the project, I already knew that phones are bad for sleep. I discovered that teenagers need eight to ten hours of sleep. For example, in our survey, twenty out of thirty students use their phone in bed after midnight.',
							correctIndices: [],
							categories: [
								{
									name: 'ALREADY KNEW',
									color: 'violet',
									indices: [4, 5]
								},
								{
									name: 'DISCOVERED',
									color: 'emerald',
									indices: [13]
								},
								{
									name: 'EXAMPLE',
									color: 'sky',
									indices: [23, 24]
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'What makes the ending good?',
							options: [
								"It's long",
								'It shows a positive change with friends',
								'It has difficult words'
							],
							correctIndex: 1,
							explanation: 'סיום חיובי מראה מה למדתם - וקל להגיד אותו.'
						},
						{
							type: 'preface',
							text: '### משפחה 2: מה למדתי\n\n{p:text}Before the project, I knew that... I discovered that... The most interesting thing I learned was... It surprised me because... Now I...\n\nבסוף - ספרו מה השתנה אצלכם בזכות הפרויקט.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'Before the project, I knew that...',
									he: 'לפני הפרויקט ידעתי ש...'
								},
								{
									en: 'I discovered that...',
									he: 'גיליתי ש...'
								},
								{
									en: 'The most interesting thing I learned was...',
									he: 'הדבר הכי מעניין שלמדתי היה...'
								},
								{
									en: 'It surprised me because...',
									he: 'זה הפתיע אותי כי...'
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'I ___ that teenagers need eight hours of sleep.',
							options: ['discovered', 'discover', 'discovering'],
							correctIndex: 0,
							explanation: 'מדברים על הפרויקט שהסתיים, אז עבר: discovered.',
							layout: 'honeycomb'
						},
						{
							type: 'speak',
							prompt:
								"What is the most interesting thing you learned about your topic that you didn't know before you did the project?",
							tip: 'I discovered that... It surprised me because... Now I...',
							targetSeconds: 25,
							modelAnswer:
								'The most interesting thing I learned was that teenagers need eight to ten hours of sleep. It surprised me because most of my friends sleep only six. Now I put my phone away at eleven.',
							checklist: ['learned / discovered / surprised', 'because', 'מה השתנה אצלי'],
							part: 'B'
						}
					],
					retryMissed: true
				}
			]
		},
		content5: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מפרקים את השאלה הרשמית\n\nסט מדוגמה רשמית:\n\n{p:text}"What was your project about and what were you hoping to learn from it? What did you already know about the topic you chose and what did you discover? Explain through examples from your project."\n\nחמש משימות: הנושא, מה קיוויתם ללמוד, מה כבר ידעתם, מה גיליתם, ודוגמאות.'
						},
						{
							type: 'mcq',
							prompt: "**'Explain through examples'** means...",
							options: [
								'Give a definition',
								'Use specific details from your project',
								'Repeat the question'
							],
							correctIndex: 1,
							explanation: 'פרטים ספציפיים = עומק: מספרים, שמות, רגע אמיתי.'
						},
						{
							type: 'preface',
							text: '### משפחה 1: הנושא ולמה הוא חשוב\n\nמשפטים לפתיחת התשובה.\n\n{p:callout}"Why it matters" = על מי זה משפיע ואיך. זה מה שמעלה נושא פשוט לרמת 5 יחידות.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'My project focused on...',
									he: 'הפרויקט שלי התמקד ב...'
								},
								{
									en: 'Our research question was...',
									he: 'שאלת המחקר שלנו הייתה...'
								},
								{
									en: 'I chose this topic because it affects...',
									he: 'בחרתי בנושא כי הוא משפיע על...'
								},
								{
									en: 'This topic matters because...',
									he: 'הנושא חשוב כי...'
								},
								{
									en: 'I was hoping to find out...',
									he: 'קיוויתי לגלות...'
								}
							]
						},
						{
							type: 'speak',
							prompt: 'What was your project about, and why does the topic matter?',
							tip: 'My project focused on... This topic matters because it affects...',
							targetSeconds: 20,
							modelAnswer:
								'My project focused on food waste in school cafeterias. This topic matters because it affects both the environment and the school budget.',
							part: 'B'
						},
						{
							type: 'preface',
							text: '### מקשיבים לתשובה לדוגמה\n\nתשובה לסט הרשמי (כדקה וחצי). זו דוגמה, לא תסריט לשינון.\n\n{p:text}My project focused on food waste in school cafeterias. I chose this topic because every day I saw full trays going into the bin. I was hoping to find out how much food is wasted and what could reduce it. Before the project, I already knew that food waste is a global problem, but I assumed it was mostly about restaurants. What I discovered surprised me: in our survey of 120 students, almost 40 percent said they throw away at least half of their lunch, mainly because the portions are too big. For example, when we tried offering two portion sizes for one week, the waste dropped noticeably. As a result, the school decided to continue the pilot. The project taught me that small, practical changes can make a real difference.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו בתשובה: מה הנחתי, מה גיליתי, והתוצאה.',
							text: 'I assumed it was mostly about restaurants. What I discovered surprised me: almost 40 percent throw away half of their lunch. As a result, the school decided to continue the pilot.',
							correctIndices: [],
							categories: [
								{
									name: 'ASSUMED',
									color: 'violet',
									indices: [1]
								},
								{
									name: 'DISCOVERED',
									color: 'emerald',
									indices: [9]
								},
								{
									name: 'RESULT',
									color: 'amber',
									indices: [21, 22, 23]
								}
							]
						},
						{
							type: 'mcq',
							prompt: "Which part makes this answer 'in depth'?",
							options: [
								'The opening',
								'The data, the experiment and the result',
								'The length only'
							],
							correctIndex: 1,
							explanation: 'ראיות ספציפיות ותוצאה = עומק.'
						},
						{
							type: 'preface',
							text: '### משפחה 2: ממצאים והפתעות\n\n{p:text}Our main finding was that... I had assumed that..., but I discovered that... What surprised me most was... because... This changed the way I...\n\n{p:callout}הכי חזק: "חשבתי ש..., אבל גיליתי ש..." - הניגוד מראה עומק.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'Our main finding was that...',
									he: 'הממצא המרכזי שלנו היה ש...'
								},
								{
									en: 'I had assumed that...',
									he: 'הנחתי ש...'
								},
								{
									en: 'What surprised me most was...',
									he: 'מה שהכי הפתיע אותי היה...'
								},
								{
									en: 'This changed the way I...',
									he: 'זה שינה את הדרך שבה אני...'
								}
							]
						},
						{
							type: 'mcq',
							prompt:
								'I had ___ that most students sleep enough, but I discovered that most sleep only six hours.',
							options: ['assumed', 'discovered', 'analyzed'],
							correctIndex: 0,
							explanation: 'assumed = הנחתי (לפני). discovered בא אחרי ה-but: מה שגיליתי בפועל.',
							layout: 'honeycomb'
						},
						{
							type: 'speak',
							prompt:
								"What is the most interesting thing you learned about your topic that you didn't know before you did the project?",
							tip: 'I had assumed that..., but I discovered that... This changed the way I...',
							targetSeconds: 30,
							modelAnswer:
								'I had assumed that food waste was mostly a restaurant problem, but I discovered that almost 40 percent of the students in my school throw away half of their lunch. This changed the way I think about portion sizes at home too.',
							checklist: ['ניגוד (but / however)', 'because', 'שינוי (now I... / this changed...)'],
							part: 'B'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-b-sources-team',
		section: 'cobe-2',
		required: ['cobe-b-topic'],
		position: {
			x: 100,
			y: 940
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### משפחה 3: מקורות מידע\n\n{p:text}I found information on the internet / in articles / on YouTube / in books. I interviewed... We made a survey. The most helpful source was... because...\n\n{p:callout}בשאלה "Which resources were especially helpful? Why?" - תמיד מוסיפים **למה**.'
						},
						{
							type: 'mcq',
							prompt: '**Which resources were especially helpful? Why?**\n\nאיזו תשובה הכי טובה?',
							options: [
								'The internet.',
								'The most helpful source was an interview with a nurse, because she explained everything in simple words.',
								'Many sources.'
							],
							correctIndex: 1,
							explanation:
								'מקור + סיבה = מצוין. "The internet" - שתי מילים ובלי למה. "Many sources" - אילו? למה הם עזרו?'
						},
						{
							type: 'preface',
							text: '### משפחה 4: מאתגר לפתרון ☀️\n\nגם לשאלה על קשיים יש תשובה חיובית: **בעיה ← פתרון ← מה למדתי.**\n\n{p:text}The hardest part was... but we solved it by... In the end, I learned that...'
						},
						{
							type: 'mcq',
							prompt: "**Problem:** We didn't have time.\n\nמה הפתרון המתאים?",
							options: [
								'We made a schedule.',
								'I used a dictionary.',
								'We divided the work again.'
							],
							correctIndex: 0,
							explanation:
								'בעיית זמן ← לוח זמנים. מילון פותר מילים קשות, וחלוקה מחדש פותרת שותף שחלה.'
						},
						{
							type: 'mcq',
							prompt: '**Problem:** The English words were hard.\n\nמה הפתרון המתאים?',
							options: [
								'I asked my partner to do it.',
								'I used a dictionary.',
								'We made a schedule.'
							],
							correctIndex: 1,
							explanation: 'מילים קשות ← מילון.'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: ['The hardest part was', 'the survey,', 'but', 'my friends', 'helped me.']
						},
						{
							type: 'preface',
							text: '{p:callout}אתגר + פתרון + מה למדתי = תשובה מצוינת.'
						},
						{
							type: 'preface',
							text: '### משפחה 5: עבודת צוות ומיומנויות\n\n{p:text}I improved my research skills / my typing in English / my presentation skills. My partner and I helped each other. It was good because... but...'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**we shared the work**\n\nיתרון או חיסרון של עבודה בזוג?',
							options: ['👍 יתרון', '👎 חיסרון'],
							correctIndex: 0,
							explanation: 'חלוקת עבודה היא יתרון.'
						},
						{
							type: 'mcq',
							prompt: "{p:text}**we didn't always agree**\n\nיתרון או חיסרון של עבודה בזוג?",
							options: ['👍 יתרון', '👎 חיסרון'],
							correctIndex: 1,
							explanation: 'חוסר הסכמה הוא חיסרון. מסיימים תמיד בצד הטוב.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**I learned from my partner**\n\nיתרון או חיסרון של עבודה בזוג?',
							options: ['👍 יתרון', '👎 חיסרון'],
							correctIndex: 0,
							explanation: 'ללמוד מהשותף הוא יתרון.'
						},
						{
							type: 'speak',
							prompt: "It was good because we shared the work, but sometimes we didn't agree.",
							tip: 'משתמשים ב-BUT כדי להראות שני צדדים, ומסיימים בצד הטוב.',
							targetSeconds: 10,
							part: 'B'
						},
						{
							type: 'preface',
							text: '### משפחה 6: אילו עשיתי את זה שוב\n\n{p:text}If I did the project again, I would... If I had more time, I would...\n\nרעיונות: להתחיל מוקדם יותר, לראיין עוד אנשים, להכין סרטון, לשתף את התוצאות עם תלמידים צעירים ☀️'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: [
								'If I had',
								'more time,',
								'I would',
								'interview',
								'more people',
								'because',
								'I want',
								'to hear different ideas.'
							]
						},
						{
							type: 'speak',
							prompt: 'If you had more time to do the project, how would you use it? Explain.',
							tip: 'If I had more time, I would... because... תמיד מוסיפים BECAUSE.',
							targetSeconds: 20,
							modelAnswer:
								'If I had more time, I would interview more people, because I want to hear different ideas about sleep.',
							part: 'B'
						}
					],
					retryMissed: true
				}
			]
		},
		content5: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### משפחה 3: מקורות ואמינות\n\n{p:text}We relied on academic articles / official websites / interviews / a survey. The most useful source was... because... To check if a source was reliable, we...'
						},
						{
							type: 'mcq',
							prompt:
								'**How did you find the information on the topic? What different resources did you use?**\n\nאיזו תשובה הכי טובה?',
							options: [
								'Google.',
								'We used official health websites and interviewed a school nurse. The interview was the most useful because she gave us real examples. We checked every website by looking for the author and the date.',
								'Lots of sites, they were good.'
							],
							correctIndex: 1,
							explanation: 'מקורות + למה הם עזרו + איך בדקתם אמינות = מצוין.'
						},
						{
							type: 'speak',
							prompt:
								'What different resources did you use? Which resources were especially helpful? Why?',
							tip: 'We relied on... The most useful source was... because... To check if it was reliable, we...',
							targetSeconds: 30,
							checklist: ['אילו מקורות', 'מה הכי עזר ולמה', 'איך בדקנו אמינות'],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### משפחה 4: מאתגר לפתרון ☀️\n\n{p:text}At first, ... was difficult because... To deal with this, we decided to... In the end, ... Looking back, I learned that...\n\n{p:callout}קושי + פתרון + לקח: בכנות ובאופן בונה.'
						},
						{
							type: 'mcq',
							prompt: '**Problem:** too much information\n\nמה הפתרון המתאים?',
							options: [
								'We narrowed our research question.',
								'We sent reminders through class groups.',
								'We voted and divided roles.'
							],
							correctIndex: 0,
							explanation: 'יותר מדי מידע ← מצמצמים את שאלת המחקר.'
						},
						{
							type: 'mcq',
							prompt: '**Problem:** low survey response\n\nמה הפתרון המתאים?',
							options: [
								'We made a shared timeline.',
								'We sent reminders through class groups.',
								'We narrowed our research question.'
							],
							correctIndex: 1,
							explanation: 'מעט תשובות לסקר ← שולחים תזכורות.'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: [
								'Looking back,',
								'I learned',
								'that',
								'planning ahead',
								'saves',
								'a lot of stress.'
							]
						},
						{
							type: 'preface',
							text: '### משפחה 5: עבודת צוות והתרומה שלי\n\n{p:text}My main contribution was... We divided the work: I was responsible for... Working as a team helped us... although...\n\n{p:callout}מאזנים בין שני הצדדים, ומסיימים בחיובי.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**more perspectives**\n\nיתרון או חיסרון של עבודה בצוות?',
							options: ['👍 יתרון', '👎 חיסרון'],
							correctIndex: 0,
							explanation: 'יותר נקודות מבט הן יתרון.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**uneven effort**\n\nיתרון או חיסרון של עבודה בצוות?',
							options: ['👍 יתרון', '👎 חיסרון'],
							correctIndex: 1,
							explanation: 'כשלא כולם עובדים באותה מידה - זה חיסרון.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**scheduling meetings**\n\nיתרון או חיסרון של עבודה בצוות?',
							options: ['👍 יתרון', '👎 חיסרון'],
							correctIndex: 1,
							explanation: 'קשה לתאם פגישות - חיסרון.'
						},
						{
							type: 'speak',
							prompt:
								'Working as a team gave us more perspectives, although scheduling meetings was not always easy.',
							tip: 'שני הצדדים במשפט אחד, עם although.',
							targetSeconds: 10,
							part: 'B'
						},
						{
							type: 'preface',
							text: '### השפעה, מיומנויות ופעם הבאה\n\n{p:text}Since the project, I have... It improved my... If I did it again, I would... because... This connects to real life because...'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: [
								'If I did',
								'the project again,',
								'I would interview',
								'experts',
								'because',
								'they could',
								'add',
								'a professional perspective.'
							]
						},
						{
							type: 'speak',
							prompt: 'In what way has the project influenced you since you did it?',
							tip: 'Since the project, I have... (הווה מושלם) + because.',
							targetSeconds: 30,
							modelAnswer:
								'Since the project, I have become much more aware of food waste. I have started taking smaller portions at home, because I saw how much food goes into the bin.',
							checklist: ['Since the project, I have...', 'because'],
							part: 'B'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-b-full-minute',
		section: 'cobe-2',
		required: ['cobe-b-sources-team'],
		position: {
			x: 70,
			y: 1060
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מותחים את התשובה לדקה ⏱️\n\nתשובה קצרה: *"My project was about dogs."* (3 שניות 😬)\n\nמוסיפים **מותחנים**. כל תוספת = בערך 10 שניות.'
						},
						{
							type: 'steps',
							steps: [
								'**+ WHY?** *I chose it because I love my dog.*',
								'**+ EXAMPLE** *For example, I interviewed a dog trainer.*',
								'**+ FACT** *I found out that dogs can help sick children feel better.*',
								'**+ FEELING ☀️** *I enjoyed it because...*',
								'**+ NOW / FUTURE** *Now I volunteer at a dog shelter once a month.*'
							]
						},
						{
							type: 'speak',
							prompt: 'Tell me about your project.',
							tip: 'מותחים: למה, דוגמה, עובדה, רגש, ומה עכשיו. 5 מותחנים ≈ דקה. (העובדות - מהפרויקט שלכם.)',
							targetSeconds: 60,
							checklist: ['למה', 'דוגמה', 'עובדה מהפרויקט', 'רגש', 'עכשיו או בעתיד', 'דקה לפחות'],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### מילות קישור\n\nמילות קישור מחברות בין המשפטים ועוזרות להמשיך לדבר בלי לעצור.\n\n{p:text}first, also, because, but, so, for example, in the end'
						},
						{
							type: 'mcq',
							prompt: '___, I chose this topic because I love animals.',
							options: ['First', 'But', 'In the end'],
							correctIndex: 0,
							explanation: 'First פותח את התשובה.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: 'It was hard to find sources, ___ my teacher helped me.',
							options: ['because', 'but', 'also'],
							correctIndex: 1,
							explanation: 'but מחבר ניגוד: היה קשה, אבל המורה עזרה.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: '___, I learned a lot.',
							options: ['First', 'Also', 'In the end'],
							correctIndex: 2,
							explanation: 'In the end סוגר את התשובה.',
							layout: 'honeycomb'
						},
						{
							type: 'speak',
							prompt:
								'First, I chose this topic because I love animals. Also, I interviewed a vet. It was hard to find sources, but my teacher helped me. In the end, I learned a lot.',
							tip: 'הקשיבו, ואז קראו את הפסקה בקול פעם אחת. (בתרגול מותר לקרוא - בבחינה אסור!)',
							targetSeconds: 15,
							part: 'B'
						},
						{
							type: 'preface',
							text: '### מילות מפתח - לא תסריט ⚠️\n\nבבחינה אסור לקרוא מדף - **קריאה = פסילה.** לכן מתרגלים לדבר רק מתוך מילות מפתח.\n\n{p:text}sleep • tired • survey 20/30 • phone midnight • 8-10 hours • deal with friends\n\nבחרו 6 מילות מפתח מהפרויקט שלכם, הסתכלו עליהן 10 שניות - ואז דברו בלי להסתכל.'
						},
						{
							type: 'speak',
							prompt: 'Tell me about your project: what was it about, and what did you learn?',
							tip: 'דברו מתוך 6 מילות מפתח בלבד. בפעם הבאה - 3 מילים, ואז בלי כלום.',
							targetSeconds: 60,
							checklist: ['דיברתי בלי לקרוא', 'דקה לפחות'],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### עזרה! שכחתי את הפרויקט 🛟\n\nקורה לכולם! **תבנית הפרויקט הכללית** מתאימה כמעט לכל פרויקט.\n\n{p:callout}{i:warn}משתמשים רק בחלקים שנכונים לפרויקט שלכם. אף פעם לא ממציאים תוצאות.'
						},
						{
							type: 'steps',
							steps: [
								'*My project was about ___. I chose this topic because it is important for teenagers.*',
								'*The main thing I remember is that ___.*',
								'*I learned a lot about ___, and I also improved my English and my computer skills.*',
								'*The hardest part was finding information, but my teacher helped me.*',
								"*I enjoyed working with my friends, and I'm proud of the result.* ☀️"
							],
							ordered: true
						},
						{
							type: 'mcq',
							prompt: 'שכחתם את המספר מהסקר. מה אומרים?',
							options: [
								"I don't remember the exact number, but I know that most students...",
								'I made up a number: 73 percent.',
								"Sorry, I forgot. That's all."
							],
							correctIndex: 0,
							explanation: 'בכנות, ועם הרעיון המרכזי. לא ממציאים מספרים ולא עוצרים.'
						},
						{
							type: 'mcq',
							prompt: 'שכחתם מה הייתה השאלה השנייה. מה עושים?',
							options: [
								'If I can, I listen to the question again. If not, I start with "My project was about..." and talk about what I learned.',
								'I stop and wait.',
								'I answer in Hebrew.'
							],
							correctIndex: 0,
							explanation:
								'אם אפשר, מקשיבים לשאלה שוב. אם לא, מתחילים מהנושא וממשיכים לדבר. שתיקה ועברית מקבלות אפס.'
						},
						{
							type: 'speak',
							prompt: 'Tell me about your project.',
							tip: 'השתמשו בתבנית הכללית + פרט אחד מהפרויקט שלכם. ככה אף פעם לא נתקעים!',
							targetSeconds: 50,
							checklist: ['השתמשתי בתבנית', 'פרט אמיתי אחד מהפרויקט', 'בלי להמציא'],
							part: 'B'
						}
					],
					retryMissed: true
				}
			]
		},
		content5: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מאריכים עם עומק ⏱️\n\nתשובה קצרה: *"My project was about recycling."* (3 שניות)\n\nמאריכים עם **עומק**, לא עם חזרות. כל משפט מוסיף רעיון.'
						},
						{
							type: 'steps',
							steps: [
								'**+ WHY IT MATTERS** *...because our school produces a lot of plastic waste.*',
								'**+ EVIDENCE** *Our survey showed that only a third of students recycle.*',
								'**+ CONTRAST** *I expected more, but many said the bins were too far away.*',
								'**+ CONSEQUENCE** *As a result, we suggested moving the bins next to the cafeteria.*',
								"**+ PERSONAL CHANGE ☀️** *Since then, I've started recycling at home too.*"
							]
						},
						{
							type: 'speak',
							prompt: 'Tell me about your project.',
							tip: '5 מותחני עומק ≈ דקה וחצי: למה זה חשוב, ראיה, ניגוד, תוצאה, שינוי אישי.',
							targetSeconds: 90,
							checklist: ['למה זה חשוב', 'ראיה (נתון / דוגמה)', 'ניגוד', 'תוצאה', 'שינוי אישי'],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### מילות קישור לדיבור רציף\n\n{p:text}moreover, however, as a result, therefore, although, in addition, eventually'
						},
						{
							type: 'mcq',
							prompt:
								'I chose this topic because it affects teenagers. ___, it is rarely discussed at school.',
							options: ['Moreover', 'Although', 'Therefore'],
							correctIndex: 0,
							explanation: 'Moreover מוסיף נקודה באותו כיוון.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: '___ finding sources was hard, we eventually interviewed two experts.',
							options: ['Moreover', 'Although', 'As a result'],
							correctIndex: 1,
							explanation: 'Although = למרות ש: ניגוד בתוך המשפט.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: 'We interviewed two experts. ___, we reached a clear conclusion.',
							options: ['Although', 'However', 'As a result'],
							correctIndex: 2,
							explanation: 'As a result = כתוצאה מכך.',
							layout: 'honeycomb'
						},
						{
							type: 'speak',
							prompt:
								'I chose this topic because it affects teenagers. Moreover, it is rarely discussed at school. Although finding sources was hard, we eventually interviewed two experts. As a result, we reached a clear conclusion.',
							tip: 'הקשיבו, ואז קראו את הפסקה בקול פעם אחת. (בתרגול מותר לקרוא - בבחינה אסור!)',
							targetSeconds: 15,
							part: 'B'
						},
						{
							type: 'preface',
							text: '### מילות מפתח - לא תסריט ⚠️\n\nקריאה מדף = פסילה. ונאום משונן נשמע לא טבעי, ולפעמים לא עונה על השאלה.\n\n{p:text}food waste • trays • survey 120 • 40% • two portion sizes • pilot continued\n\nבחרו 6 מילות מפתח מהפרויקט שלכם, הסתכלו עליהן 10 שניות - ודברו בלי להסתכל.'
						},
						{
							type: 'speak',
							prompt: 'Tell me about your project: what was it about, and what did you discover?',
							tip: '6 מילות מפתח, ואז 3, ואז בלי כלום. פחות הפסקות בכל סבב = שטף טוב יותר (15% מהציון).',
							targetSeconds: 90,
							checklist: ['דיברתי בלי לקרוא', 'כמעט בלי הפסקות ארוכות', 'כדקה וחצי'],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### עזרה! שכחתי חלק מהפרויקט 🛟\n\n**לא ממציאים תוצאות.** משתמשים במשפטי הצלה כנים.'
						},
						{
							type: 'steps',
							steps: [
								"*I can't remember every detail, but the main point of my project was...*",
								"*I don't remember the exact figure, but most of the students we asked...*",
								"*We didn't cover that aspect in our project, but our research showed that...*",
								'*What I remember most clearly is...*'
							]
						},
						{
							type: 'mcq',
							prompt: 'שואלים על משהו שלא חקרתם. מה אומרים?',
							options: [
								"We didn't cover that aspect in our project, but our research showed that...",
								"I don't remember the exact figure, but...",
								'I invent an answer that sounds good.'
							],
							correctIndex: 0,
							explanation: 'אומרים בכנות שלא עסקתם בזה, ועוברים למה שכן מצאתם.'
						},
						{
							type: 'mcq',
							prompt: 'שכחתם את הנתון המדויק. מה אומרים?',
							options: [
								"I don't remember the exact figure, but most of the students we asked...",
								"We didn't cover that aspect in our project.",
								"Sorry, I forgot. That's all."
							],
							correctIndex: 0,
							explanation: 'כנות + הרעיון המרכזי. לא עוצרים.'
						},
						{
							type: 'mcq',
							prompt: 'שכחתם מה הייתה השאלה השנייה. מה עושים?',
							options: [
								'If I can, I listen to the question again. If not, I start with "My project was about..." and talk about what I learned.',
								'I stop and wait.',
								'I answer in Hebrew.'
							],
							correctIndex: 0,
							explanation:
								'אם אפשר, מקשיבים לשאלה שוב. אם לא, מתחילים מהנושא וממשיכים לדבר. שתיקה ועברית מקבלות אפס.'
						},
						{
							type: 'speak',
							prompt: 'Would you recommend your project topic to other students? Why or why not?',
							tip: 'שאלה לא צפויה! פתחו במשפט הצלה והמשיכו 40 שניות.',
							targetSeconds: 40,
							checklist: ['פתחתי במשפט הצלה', 'רעיון מרכזי + פרט אמיתי', 'בלי להמציא'],
							part: 'B'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-b-practice',
		section: 'cobe-2',
		required: ['cobe-b-full-minute'],
		position: {
			x: 0,
			y: 1180
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### תרגול: הסט הרשמי\n\nמקליטים תשובה אחת, **לפחות דקה**. נשארים באזור הירוק: 1:00-2:00.'
						},
						{
							type: 'speak',
							prompt:
								'What was your project about and what were you hoping to learn from it? What did you already know about the topic you chose and what did you discover? Explain through examples from your project.',
							tip: 'פחות מדקה? הוסיפו מותחן (למה, דוגמה, עובדה, רגש, עכשיו) ונסו שוב.',
							targetSeconds: 75,
							modelAnswer:
								'My project was about teenagers and sleep. I chose this topic because I always feel tired in the morning. I was hoping to learn how many hours teenagers really need. Before the project, I already knew that phones are bad for sleep. I discovered that teenagers need eight to ten hours, but most students in my class sleep only six. For example, in our survey, twenty out of thirty students said they use their phone in bed after midnight. Now my friends and I put our phones away at eleven.',
							checklist: [
								'הנושא',
								'מה קיוויתי ללמוד',
								'מה כבר ידעתי',
								'מה גיליתי',
								'דוגמה',
								'סיום חיובי'
							],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### תרגול: הפתעות ואתגרים\n\nתזכורת: **אתגר ← למה היה קשה ← פתרון ← מה למדתי ☀️**'
						},
						{
							type: 'speak',
							prompt:
								'What was the topic of your project? What surprised you the most while doing the project and why? What were the most challenging moments while working on your project? Explain.',
							tip: 'הקשיבו לעצמכם, בחרו דבר אחד לשפר, והקליטו שוב.',
							targetSeconds: 75,
							checklist: ['כל השאלות', 'מה הפתיע ולמה', 'אתגר + פתרון', 'דקה לפחות'],
							part: 'B'
						},
						{
							type: 'speak',
							prompt:
								'What was the topic of your project? What resources did you use? Which resources were especially helpful? Why? If you had more time to do the project, how would you use it? Explain.',
							tip: 'If I had more time, I would... because...',
							targetSeconds: 75,
							checklist: ['דקה לפחות', 'כל השאלות', 'דוגמה מהפרויקט', 'רק אנגלית', 'מילות קישור'],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### תחנת סיום - חלק ב׳ 🏆\n\nמצב בחינה: סט שאלות על הפרויקט. **בלי דפים, בלי רמזים ובלי עברית.**\n\nמדברים דקה עד שתיים. מותר למחוק ולהקליט שוב.'
						},
						{
							type: 'speak',
							prompt:
								'Explain what the topic of your project was and why you chose it. What was the most challenging part of doing the project? Explain how you overcame those challenges.',
							targetSeconds: 75,
							checklist: [
								'כל השאלות',
								'למה בחרתי',
								'אתגר + איך התגברתי',
								'דוגמה מהפרויקט',
								'דקה עד שתיים'
							],
							part: 'B'
						}
					],
					retryMissed: true
				}
			]
		},
		content5: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### תרגול: הסט הרשמי\n\nמכוונים ל**כדקה וחצי**: כל המשימות, עם דוגמאות ספציפיות.'
						},
						{
							type: 'speak',
							prompt:
								'What was your project about and what were you hoping to learn from it? What did you already know about the topic you chose and what did you discover? Explain through examples from your project.',
							tip: 'פחות מדקה? הוסיפו מותחן עומק: ראיה, ניגוד, תוצאה.',
							targetSeconds: 90,
							modelAnswer:
								'My project focused on food waste in school cafeterias. I chose this topic because every day I saw full trays going into the bin. I was hoping to find out how much food is wasted and what could reduce it. Before the project, I already knew that food waste is a global problem, but I assumed it was mostly about restaurants. In our survey of 120 students, almost 40 percent said they throw away at least half of their lunch. When we tried offering two portion sizes, the waste dropped. As a result, the school decided to continue the pilot.',
							checklist: [
								'הנושא',
								'מה קיוויתי לגלות',
								'מה ידעתי',
								'מה גיליתי',
								'דוגמה ספציפית',
								'תוצאה / לקח'
							],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### תרגול: השפעה ואנגלית\n\n{p:text}Since the project, I have... On the one hand, project work... On the other hand,... Overall, I believe...'
						},
						{
							type: 'speak',
							prompt:
								'In what way has the project influenced you, since you did it? Is project work a good way to improve your English? Why, or why not?',
							tip: 'הקשיבו לעצמכם, בחרו שיפור אחד (עומק, שטף או אוצר מילים), והקליטו שוב.',
							targetSeconds: 90,
							checklist: ['שתי השאלות', 'שני צדדים', 'מסקנה (overall)'],
							part: 'B'
						},
						{
							type: 'speak',
							prompt:
								'How did you find the information on the topic? What different resources did you use? What challenges did you face? If you were writing a research project now, what would you do differently? Explain.',
							tip: 'If I were writing it now, I would... because...',
							targetSeconds: 90,
							checklist: [
								'מקורות',
								'אמינות',
								'אתגר + פתרון',
								'would + סיבה',
								'כמעט בלי הפסקות ארוכות'
							],
							part: 'B'
						},
						{
							type: 'preface',
							text: '### תחנת סיום - חלק ב׳ 🏆\n\nמצב בחינה: סט שאלות על הפרויקט. **בלי דפים, רמזים או עברית.** מכוונים לכדקה וחצי.'
						},
						{
							type: 'speak',
							prompt:
								'What surprised you the most while doing the project and why? In what way has the project influenced you since you did it?',
							targetSeconds: 90,
							checklist: [
								'שתי השאלות',
								'ממצא ספציפי',
								'ניגוד (I had assumed..., but...)',
								'השפעה (Since then, I have...)',
								'כדקה וחצי'
							],
							part: 'B'
						}
					],
					retryMissed: true
				}
			]
		}
	}
];
