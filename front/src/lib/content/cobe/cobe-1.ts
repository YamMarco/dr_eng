// COBE Part A - personal response. `content` is the 4-point path, `content5` the
// 5-point one (same lessons, deeper answers). Source: the partner course
// (COBE_4/5_Point_Path_App_Course), official sample questions kept verbatim.
import type { LessonNode } from '../types';

export const cobe1Lessons: LessonNode[] = [
	{
		id: 'cobe-a-meet-exam',
		section: 'cobe-1',
		required: [],
		position: {
			x: 0,
			y: 0
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### ברוכים הבאים ל-COBE\n\nה-COBE הוא מבחן דיבור במחשב: **שומעים שאלה, עונים בקול, והמחשב מקליט.**\n\n**חלק א׳** - עליכם (25 נקודות)\n**חלק ב׳** - הפרויקט שלכם (25 נקודות)\n**חלק ג׳** - קליפ קצר (50 נקודות)'
						},
						{
							type: 'preface',
							text: 'בבחינה האמיתית תפגשו את **אלפי (Alfie)**: דמות ממוחשבת וידידותית שמדברת אליכם, מסבירה כל שלב ושואלת את השאלות.\n\n{p:callout}השאלות **לא כתובות על המסך**. מקשיבים היטב וזוכרים אותן.'
						},
						{
							type: 'mcq',
							prompt: 'Which part is worth the most points?',
							options: ['Part A - about you', 'Part B - your project', 'Part C - the clip'],
							correctIndex: 2,
							explanation:
								'נכון! חלק ג׳ שווה 50 נקודות - חצי מהציון. חלקים א׳ ו-ב׳ שווים 25 כל אחד.'
						},
						{
							type: 'steps',
							steps: [
								'**אלפי** - שואל את השאלות. שומעים אותן, הן לא כתובות.',
								'**השעון** (למעלה משמאל) - כמה זמן נשאר. 30 דקות זה מספיק זמן.',
								'**● Record** מתחילים להקליט. **■ Stop** מסיימים את ההקלטה - זה **לא** כפתור השהיה!',
								'**▶ Play** שומעים את עצמכם. **🗑 Delete** לא מרוצים? מוחקים ומקליטים שוב. **✉ Send** שולחים.'
							]
						},
						{
							type: 'preface',
							text: '{p:callout}{i:warn}לא לוחצים על **Stop** באמצע תשובה: זה יוצר הקלטה קטנה נוספת ועלול לפגוע בציון. מסיימים את כל התשובה, ורק אז עוצרים.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'Record',
									he: 'להקליט'
								},
								{
									en: 'Stop',
									he: 'לעצור'
								},
								{
									en: 'Play',
									he: 'להשמיע'
								},
								{
									en: 'Delete',
									he: 'למחוק'
								},
								{
									en: 'Send',
									he: 'לשלוח'
								}
							]
						},
						{
							type: 'speak',
							prompt: 'Tell me your first name, how old you are and how you are feeling today.',
							tip: 'אלפי תמיד פותח בשאלת חימום. עונים בקצרה וברוגע.',
							targetSeconds: 15,
							modelAnswer:
								"My name is Noa. I'm seventeen years old, and I'm feeling a little nervous, but I'm ready.",
							part: 'A'
						},
						{
							type: 'preface',
							text: '### חוקי הבחינה\n\nנכון או לא נכון? בואו נבדוק מה מותר ומה אסור.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**I can bring notes to the exam.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation: 'אסור להביא דפים או טלפון. קריאה מדף = פסילה.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**Stop is the same as Pause.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation: 'Stop מסיים את ההקלטה. אין כפתור השהיה.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**I can be quiet for a few seconds to think.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 0,
							explanation: 'שקט של כמה שניות זה בסדר. נושמים וממשיכים.'
						},
						{
							type: 'mcq',
							prompt:
								"{p:text}**If I don't know a word, I can say it in Hebrew.**\n\nנכון או לא נכון?",
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation:
								'רק אנגלית (שמות של חגים, כמו Hanukkah, מותרים). מסבירים את המילה במילים אחרות באנגלית.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**I must answer ALL the questions in the set.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 0,
							explanation: 'מי שעונה רק על חלק מהסט מפסיד חצי מהנקודות על פיתוח הנושא.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**I can delete my answer and record again.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 0,
							explanation: 'מותר למחוק ולהקליט שוב לפני השליחה.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**A very short answer (under 20 seconds) still gets some points.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation:
								'תשובה של פחות מ-20 שניות מקבלת **אפס** על החלק הזה. תמיד מדברים יותר מ-20 שניות.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**If Part C is too hard, I can skip it and still pass with Parts A and B.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation:
								'מי שלא עונה בכלל על חלק ג׳ **נכשל בכל ה-COBE** (כלל חדש). תמיד עונים - גם תשובה קצרה עדיפה בהרבה על כלום.'
						},
						{
							type: 'preface',
							text: '### איך עובד חלק א׳\n\nאלפי אומר *"Today I\'d like you to talk about..."* ומשמיע **שני סטים** של שאלות. **בוחרים אחד** ועונים רק עליו.\n\nעונים על **כל** השאלות בסט **בהקלטה אחת**. פספסתם משהו? אפשר להקשיב לשאלות שוב.'
						},
						{
							type: 'preface',
							text: '{p:callout}טיפ: בחרו את הנושא שיש לכם **יותר מה להגיד** עליו, ושיש לכם עליו סיפור טוב: חברים, עזרה לאחרים, משהו שאתם אוהבים.'
						},
						{
							type: 'mcq',
							prompt: 'In Part A, I answer...',
							options: [
								'only the first question',
								'all the questions in one recording',
								'one question in each recording'
							],
							correctIndex: 1,
							explanation: 'בדיוק! כל השאלות, בהקלטה אחת.'
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
							text: '### ברוכים הבאים ל-COBE\n\nה-COBE הוא מבחן דיבור במחשב: **שומעים שאלה, עונים בקול, והמחשב מקליט.**\n\n**חלק א׳** - עליכם (25 נקודות)\n**חלק ב׳** - הפרויקט שלכם (25 נקודות)\n**חלק ג׳** - קליפ קצר (50 נקודות)'
						},
						{
							type: 'preface',
							text: 'ברמת 5 יחידות מצפים לתשובות **מפותחות ומעמיקות**, לא רק נכונות.'
						},
						{
							type: 'mcq',
							prompt: "What does 'in depth' mean?",
							options: [
								'Long, difficult words',
								'Reasons, examples and explanation',
								'Speaking fast'
							],
							correctIndex: 1,
							explanation:
								'עומק = סיבות, דוגמאות והסבר. זה עניין של רעיונות, לא של מילים קשות או מהירות.'
						},
						{
							type: 'preface',
							text: 'בבחינה האמיתית תפגשו את **אלפי (Alfie)**: דמות ממוחשבת וידידותית שמדברת אליכם, מסבירה כל שלב ושואלת את השאלות.\n\n{p:callout}השאלות **לא כתובות על המסך**. מקשיבים היטב וזוכרים אותן.'
						},
						{
							type: 'steps',
							steps: [
								'**אלפי** - שואל את השאלות. שומעים אותן, הן לא כתובות.',
								'**השעון** (למעלה משמאל) - כמה זמן נשאר. 30 דקות זה מספיק זמן.',
								'**● Record** מתחילים להקליט. **■ Stop** מסיימים את ההקלטה - זה **לא** כפתור השהיה!',
								'**▶ Play** שומעים את עצמכם. **🗑 Delete** לא מרוצים? מוחקים ומקליטים שוב. **✉ Send** שולחים.'
							]
						},
						{
							type: 'preface',
							text: '{p:callout}{i:warn}לא לוחצים על **Stop** באמצע תשובה: זה יוצר הקלטה קטנה נוספת ועלול לפגוע בציון. מסיימים את כל התשובה, ורק אז עוצרים.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'Record',
									he: 'להקליט'
								},
								{
									en: 'Stop',
									he: 'לעצור'
								},
								{
									en: 'Play',
									he: 'להשמיע'
								},
								{
									en: 'Delete',
									he: 'למחוק'
								},
								{
									en: 'Send',
									he: 'לשלוח'
								}
							]
						},
						{
							type: 'speak',
							prompt: 'Tell me your first name, how old you are and how you are feeling today.',
							tip: 'אלפי תמיד פותח בשאלת חימום. עונים בקצרה וברוגע.',
							targetSeconds: 15,
							modelAnswer:
								"My name is Noa. I'm seventeen years old, and I'm feeling a little nervous, but I'm ready.",
							part: 'A'
						},
						{
							type: 'preface',
							text: '### חוקי הבחינה\n\nנכון או לא נכון? בואו נבדוק מה מותר ומה אסור.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**I can bring notes to the exam.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation: 'אסור להביא דפים או טלפון. קריאה מדף = פסילה.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**Stop is the same as Pause.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation: 'Stop מסיים את ההקלטה. אין כפתור השהיה.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**A short pause to think is fine.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 0,
							explanation: 'נכון, אבל ברמת 5 יחידות שואפים כמעט בלי היסוסים ארוכים.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**One short sentence per question is enough at 5 points.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation: 'ברמת 5 יחידות צריך תשובות מפותחות: סיבות, דוגמאות והסבר.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**I must answer ALL the questions in the set.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 0,
							explanation: 'מי שעונה רק על חלק מהסט מפסיד חצי מהנקודות על פיתוח הנושא.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**I can delete my answer and record again.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 0,
							explanation: 'מותר למחוק ולהקליט שוב לפני השליחה.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**A very short answer (under 20 seconds) still gets some points.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation:
								'תשובה של פחות מ-20 שניות מקבלת **אפס** על החלק הזה. תמיד מדברים יותר מ-20 שניות.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**If Part C is too hard, I can skip it and still pass with Parts A and B.**\n\nנכון או לא נכון?',
							options: ['נכון', 'לא נכון'],
							correctIndex: 1,
							explanation:
								'מי שלא עונה בכלל על חלק ג׳ **נכשל בכל ה-COBE** (כלל חדש). תמיד עונים - גם תשובה קצרה עדיפה בהרבה על כלום.'
						},
						{
							type: 'preface',
							text: '### איך עובד חלק א׳\n\nאלפי אומר *"Today I\'d like you to talk about..."* ומשמיע **שני סטים** של שאלות. **בוחרים אחד** ועונים רק עליו.\n\nעונים על **כל** השאלות בסט **בהקלטה אחת**. פספסתם משהו? אפשר להקשיב לשאלות שוב.'
						},
						{
							type: 'preface',
							text: '{p:callout}בחירה חכמה = הנושא שבו יש לכם **שתי סיבות** ו**דוגמה אמיתית** מהחיים.'
						},
						{
							type: 'mcq',
							prompt: 'Which answer length fits 5 points?',
							options: ['about 15 seconds', 'about 1-1.5 minutes', 'about 5 minutes'],
							correctIndex: 1,
							explanation: 'נכון: דקה עד דקה וחצי, עם עומק. (המלצה שלנו, לא כלל רשמי.)'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-a-answer-tools',
		section: 'cobe-1',
		required: ['cobe-a-meet-exam'],
		position: {
			x: 70,
			y: 120
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מילות שאלה\n\nהמילים האלה מופיעות כמעט בכל שאלה. מי שמכיר אותן - מבין את השאלה.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'Where',
									he: 'איפה'
								},
								{
									en: 'What',
									he: 'מה'
								},
								{
									en: 'Why',
									he: 'למה'
								},
								{
									en: 'How',
									he: 'איך'
								},
								{
									en: 'When',
									he: 'מתי'
								},
								{
									en: 'Who',
									he: 'מי'
								}
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'Describe',
									he: 'תארו'
								},
								{
									en: 'Explain',
									he: 'הסבירו'
								},
								{
									en: 'Tell me about',
									he: 'ספרו לי על'
								},
								{
									en: 'Would you...?',
									he: 'האם הייתם...?'
								},
								{
									en: 'If so',
									he: 'אם כן'
								},
								{
									en: 'If not, why not?',
									he: 'אם לא, למה לא?'
								}
							]
						},
						{
							type: 'spell-word',
							word: 'explain',
							mode: 'listen',
							hintHe: 'הסבירו'
						},
						{
							type: 'preface',
							text: '{p:callout}כששומעים **EXPLAIN** - אומרים **BECAUSE**.'
						},
						{
							type: 'preface',
							text: '### מפרקים שאלה אמיתית\n\nשאלה מדוגמה רשמית:\n\n{p:text}"Tell me where you live and a little bit about the place. What is your favorite place in your hometown? Explain why."'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}"Tell me where you live and a little bit about the place. What is your favorite place in your hometown? Explain why."\n\nעל כמה דברים צריך לדבר?',
							options: ['1', '2', '4'],
							correctIndex: 2,
							explanation:
								'4 משימות בשאלה אחת: איפה אתם גרים, קצת על המקום, המקום האהוב עליכם, ולמה. תמיד סופרים את המשימות לפני שמדברים.',
							layout: 'honeycomb'
						},
						{
							type: 'preface',
							text: '### סולם התשובה 🪜\n\nלכל שאלה עולים ארבע מדרגות. כך תשובה של משפט אחד הופכת לתשובה מלאה.'
						},
						{
							type: 'steps',
							steps: [
								'**ANSWER** - תשובה: *I live in Afula.*',
								"**REASON** - סיבה: *I like it because it's quiet and my friends live near me.*",
								'**EXAMPLE** - דוגמה: *For example, on Fridays we meet in the park.*',
								'**EXTRA ☀️** - רגש טוב או העתיד: *It makes me happy. / In the future, I want to...*'
							],
							ordered: true
						},
						{
							type: 'order',
							prompt: 'סדרו את התשובה לפי הסולם: תשובה ← סיבה ← דוגמה ← תוספת חיובית.',
							tiles: [
								'I live in Afula.',
								"I like it because it's quiet and my friends live near me.",
								'For example, on Fridays we meet in the park.',
								'It makes me happy.'
							],
							explanation:
								'משפט שפותח ב-For example הוא תמיד הדוגמה. ככה מקבלים נקודות על פיתוח הנושא - 60% מהציון!'
						},
						{
							type: 'order',
							prompt: 'בנו את משפט הדוגמה.',
							tiles: ['For example,', 'on Fridays', 'we meet', 'in the park.']
						},
						{
							type: 'speak',
							prompt:
								"I live in Afula. I like it because it's quiet and my friends live near me. For example, on Fridays we meet in the park. It makes me happy.",
							tip: 'הקשיבו, ואז אמרו את ארבעת המשפטים בקול. אפשר להאט עם הכפתור הקטן.',
							targetSeconds: 20,
							part: 'A'
						},
						{
							type: 'preface',
							text: '{p:callout}טריק לזיכרון (בבחינה אין מילות מפתח!): חוזרים על מילות השאלה במשפט הראשון. *"I live in... My favourite place is... because..."*'
						},
						{
							type: 'preface',
							text: '### תשובה קצרה מול תשובה טובה\n\nשאלה: *"Where do you live? Do you like it?"*\n\nאיזו תשובה תקבל יותר נקודות?'
						},
						{
							type: 'mcq',
							prompt: '**Where do you live? Do you like it?**\n\nאיזו תשובה טובה יותר?',
							options: [
								"I live in Afula. It's OK.",
								"I live in Afula. It's a small city in the north of Israel. I like it because it's quiet and my friends live near me. For example, on Fridays we meet in the park and play football. In the future, I want to study in Haifa, but I will always come back to visit."
							],
							correctIndex: 1,
							explanation:
								'התשובה הקצרה: שני משפטים, בלי סיבה ובלי דוגמה. התשובה הטובה: מילים פשוטות, אבל תשובה מלאה.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו בתשובה את מילת הסיבה, את הפתיחה של הדוגמה ואת הפתיחה של העתיד.',
							text: "I live in Afula. I like it because it's quiet. For example, on Fridays we meet in the park. In the future, I want to study in Haifa.",
							correctIndices: [],
							categories: [
								{
									name: 'REASON',
									color: 'amber',
									indices: [7]
								},
								{
									name: 'EXAMPLE',
									color: 'sky',
									indices: [10, 11]
								},
								{
									name: 'FUTURE',
									color: 'emerald',
									indices: [19, 20, 21]
								}
							]
						},
						{
							type: 'preface',
							text: '{p:callout}לא צריך אנגלית קשה - צריך **יותר משפטים**.'
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
							text: '### מילות שאלה\n\nמילות השאלה האלה מבקשות **עומק**: לתאר, להסביר, להשוות, לשקול יתרונות וחסרונות, ולהביע עמדה.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'In what way',
									he: 'באיזה אופן'
								},
								{
									en: 'To what extent',
									he: 'עד כמה'
								},
								{
									en: 'Compare',
									he: 'השוו'
								},
								{
									en: 'advantages',
									he: 'יתרונות'
								},
								{
									en: 'disadvantages',
									he: 'חסרונות'
								},
								{
									en: 'Do you agree',
									he: 'האם אתם מסכימים'
								}
							]
						},
						{
							type: 'spell-word',
							word: 'compare',
							mode: 'listen',
							hintHe: 'השוו'
						},
						{
							type: 'preface',
							text: '{p:callout}**Advantages AND disadvantages** = מדברים על **שני** הצדדים.'
						},
						{
							type: 'preface',
							text: '### מפרקים שאלה אמיתית\n\nשאלה מדוגמה רשמית:\n\n{p:text}"Describe your volunteering experience in high school. Do you think you will continue volunteering in the future as a result of your volunteer work in high school? Explain."'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}"Describe your volunteering experience in high school. Do you think you will continue volunteering in the future as a result of your volunteer work in high school? Explain."\n\nכמה משימות יש בשאלה?',
							options: ['1', '2', '3'],
							correctIndex: 2,
							explanation:
								'3 משימות: לתאר את ההתנדבות, האם תמשיכו, ולהסביר למה - בקשר לחוויה שלכם.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: "What does **'as a result of'** ask you to do?",
							options: [
								'Connect the future to your experience',
								'Give a number',
								'Describe a result in a lab'
							],
							correctIndex: 0,
							explanation: 'להראות איך החוויה שינתה אתכם - זה עומק!'
						},
						{
							type: 'preface',
							text: '### סולם התשובה המורחב 🪜\n\nחמש מדרגות לתשובה של 5 יחידות.'
						},
						{
							type: 'steps',
							steps: [
								'**ANSWER** - *I really enjoy volunteering at a youth centre.*',
								'**REASON + EXPLAIN** - *The main reason is that I can see the difference I make.*',
								'**EXAMPLE** - *For instance, last month a boy I tutor got 85 on his test.*',
								'**OTHER SIDE** - *On the other hand, it takes a lot of time, especially before exams.*',
								'**TAKEAWAY ☀️** - *Still, this experience taught me that giving is also receiving.*'
							],
							ordered: true
						},
						{
							type: 'order',
							prompt: 'סדרו את התשובה לפי חמש המדרגות.',
							tiles: [
								'I really enjoy volunteering at a youth centre.',
								'The main reason is that I can see the difference I make.',
								'For instance, last month a boy I tutor got 85 on his test.',
								'On the other hand, it takes a lot of time, especially before exams.',
								'Still, this experience taught me that giving is also receiving, so I will definitely continue.'
							],
							explanation:
								'הצד השני (On the other hand) מראה חשיבה בוגרת, והמסקנה (Still, ...) מחזירה לנקודה חיובית.'
						},
						{
							type: 'order',
							prompt: 'בנו את משפט "הצד השני".',
							tiles: [
								'On the other hand,',
								'it takes',
								'a lot of time,',
								'especially',
								'before exams.'
							]
						},
						{
							type: 'speak',
							prompt:
								'On the other hand, it takes a lot of time, especially before exams. Still, this experience taught me that giving is also receiving, so I will definitely continue.',
							tip: 'הקשיבו, ואז אמרו את מדרגות 4 ו-5 בקול, בלי לעצור.',
							targetSeconds: 15,
							part: 'A'
						},
						{
							type: 'preface',
							text: '{p:callout}טריק לזיכרון (בבחינה אין מילות מפתח!): חוזרים על מילות השאלה במשפט הראשון.'
						},
						{
							type: 'preface',
							text: '### טובה מול מצוינת\n\nשאלה: *"What do you like best about your school? What would you change?"*\n\nשתי התשובות נכונות, אבל רק אחת מפותחת לעומק.'
						},
						{
							type: 'mcq',
							prompt:
								'**What do you like best about your school? What would you change?**\n\nאיזו תשובה מצוינת?',
							options: [
								'I like my school because the teachers are nice. I would change the food in the cafeteria because it is not tasty.',
								"What I appreciate most about my school is the atmosphere. The teachers are approachable - for example, my history teacher runs a lunchtime club where we discuss current events. If I could change one thing, I would add a quiet study room, because many students don't have a calm place to study at home. That would give everyone a fairer chance to succeed."
							],
							correctIndex: 1,
							explanation: 'השנייה: דוגמה ספציפית, סיבה מוסברת ותוצאה.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו בתשובה המצוינת את פתיחת הדוגמה, את מילת הסיבה ואת פתיחת התוצאה.',
							text: "The teachers are approachable - for example, my history teacher runs a lunchtime club. I would add a quiet study room, because many students don't have a calm place to study at home. That would give everyone a fairer chance to succeed.",
							correctIndices: [],
							categories: [
								{
									name: 'EXAMPLE',
									color: 'sky',
									indices: [5, 6]
								},
								{
									name: 'REASON',
									color: 'amber',
									indices: [21]
								},
								{
									name: 'RESULT',
									color: 'emerald',
									indices: [33, 34, 35]
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'What makes the second answer stronger?',
							options: [
								"It's louder",
								'A specific example, an explained reason and a result',
								"It has more 'very'"
							],
							correctIndex: 1,
							explanation: 'עומק = דוגמה ספציפית + סיבה + התוצאה שלה.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-a-positive-rescue',
		section: 'cobe-1',
		required: ['cobe-a-answer-tools'],
		position: {
			x: 100,
			y: 240
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### כוח חיובי ☀️\n\nתשובות חיוביות **קל יותר לפתח**: יש יותר מה להגיד, והמילים פשוטות.\n\nדברו על: עזרה לאחרים 🤝 חברים 👫 אנשים שתומכים בכם ❤️ למידה 📚 תקווה לעתיד 🌱'
						},
						{
							type: 'preface',
							text: 'גם לשאלה "שלילית" אפשר לתת תשובה חיובית: **בעיה ← מה אני עושה ← מה למדתי.**\n\n{p:callout}זאת אסטרטגיה, לא כלל: הבחינה בודקת אנגלית, לא דעות. פשוט קל יותר לפתח סיפור חיובי.'
						},
						{
							type: 'mcq',
							prompt: '**What would you change in your school?**\n\nאיזו תשובה קל יותר לפתח?',
							options: [
								'Everything is bad. I hate it.',
								'I would add more clubs, because students could meet new friends and help each other.'
							],
							correctIndex: 1,
							explanation:
								'רעיון חיובי נותן לכם גם סיבה וגם דוגמה. "Everything is bad" נגמר אחרי משפט אחד.'
						},
						{
							type: 'order',
							prompt: '"My weakness is that I\'m shy..."\n\nהמשיכו את התשובה בדרך חיובית.',
							tiles: [
								'but',
								"I'm working on it.",
								'In 10th grade',
								'I joined a youth group,',
								'and now',
								'I have many friends.'
							],
							explanation:
								'בעיה ← מה עשיתי ← מה השתנה. לא צריך להעמיד פנים, פשוט מחפשים את הצד הטוב.'
						},
						{
							type: 'speak',
							prompt: 'It helped me... I learned that... It made me proud. My friends and I...',
							tip: 'הקשיבו ואמרו את הפתיחות החיוביות בקול.',
							targetSeconds: 15,
							part: 'A'
						},
						{
							type: 'preface',
							text: '### עזרה! נתקעתי 🛟\n\nנתקעתם? **לא עוצרים ולא עוברים לעברית.** משתמשים במשפט הצלה.'
						},
						{
							type: 'steps',
							steps: [
								'😶 ראש ריק: *"Let me think for a second..."*',
								'❓ לא הבנתי: *"I\'m not sure I understood, but I think you\'re asking about..."*',
								'🔤 שכחתי מילה: *"It\'s a place where... / It\'s something you use to..."*',
								'🌀 איבדתי את הרעיון: *"What I mean is..."*',
								'🤷 אין לי ניסיון: *"I\'ve never..., but I would like to... because..."*',
								'❌ טעיתי: *"Sorry, I mean..."* - וממשיכים.'
							]
						},
						{
							type: 'mcq',
							prompt: 'שכחתם את המילה **pharmacy**. מה אומרים?',
							options: [
								"It's a place where you buy medicine.",
								'Sorry, I mean...',
								"I'm not sure I understood the question."
							],
							correctIndex: 0,
							explanation:
								'מתארים את המילה: It\'s a place where... "Sorry, I mean" מתקן טעות, ו-"not sure I understood" מתאים כשלא הבנתם את השאלה.'
						},
						{
							type: 'mcq',
							prompt: 'לא הבנתם את השאלה. מה אומרים?',
							options: [
								"I'm not sure I understood, but I think you're asking about my town, so I'll talk about it.",
								"It's a place where you buy medicine.",
								'What I mean is...'
							],
							correctIndex: 0,
							explanation: 'אומרים מה הבנתם, ומדברים על זה. זה הרבה יותר טוב משתיקה.'
						},
						{
							type: 'mcq',
							prompt: 'שואלים על עבודה, ואין לכם עבודה. מה אומרים?',
							options: [
								"I don't have a job because I study a lot, but in the summer I want to work in a café.",
								'No.',
								'Let me think for a second...'
							],
							correctIndex: 0,
							explanation:
								'אף פעם לא עונים רק "No". אומרים בכנות שאין, ומדברים על מה שהייתם רוצים. הבחינה בודקת אנגלית.'
						},
						{
							type: 'order',
							prompt: 'בנו את משפט ההצלה: "זה מקום שבו קונים תרופות".',
							tiles: ["It's a place", 'where you', 'buy medicine.']
						},
						{
							type: 'speak',
							prompt:
								"Let me think for a second... It's a place where you buy medicine. Sorry, I mean...",
							tip: 'אמרו את שלושת משפטי ההצלה בקול, עד שהם יוצאים לבד.',
							targetSeconds: 15,
							part: 'A'
						},
						{
							type: 'speak',
							prompt: 'What is your favourite food?',
							tip: 'התחילו במשפט הצלה ("That\'s a good question...") והמשיכו לדבר חצי דקה.',
							targetSeconds: 30,
							modelAnswer:
								"That's a good question. Let me think for a second... My favourite food is pizza, because I eat it with my friends. For example, every Friday we order pizza together. It makes me happy.",
							checklist: ['התחלתי במשפט הצלה', 'לא עברתי לעברית', 'אמרתי למה'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '{p:callout}כמה שניות של שקט - זה בסדר. עברית - לא.'
						},
						{
							type: 'preface',
							text: '### בנק המשפטים שלי 🏦\n\nמשפטים מוכנים שמתאימים כמעט לכל שאלה. הם לא תשובות בעל פה: הם עוזרים להתחיל ולחבר רעיונות.'
						},
						{
							type: 'steps',
							steps: [
								"**START** - *That's a good question. / Let me tell you about...*",
								'**ANSWER** - *I think... / In my opinion...*',
								'**REASON** - *because... / The main reason is that...*',
								'**EXAMPLE** - *For example, last year...*',
								'**FEELING ☀️** - *It makes me feel happy / proud.*',
								'**FUTURE 🌱** - *In the future, I hope to...*',
								"**END** - *That's why... is important to me.*"
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'In my opinion',
									he: 'לדעתי'
								},
								{
									en: 'The main reason is',
									he: 'הסיבה העיקרית היא'
								},
								{
									en: 'For example',
									he: 'לדוגמה'
								},
								{
									en: 'It makes me feel',
									he: 'זה גורם לי להרגיש'
								},
								{
									en: 'In the future',
									he: 'בעתיד'
								},
								{
									en: "That's why",
									he: 'בגלל זה'
								}
							]
						},
						{
							type: 'order',
							prompt: 'איך אומרים: "זה גורם לי להרגיש גאה"?',
							tiles: ['It', 'makes', 'me', 'feel', 'proud.']
						},
						{
							type: 'speak',
							prompt:
								"In my opinion... The main reason is that... For example, last year... It makes me feel proud. That's why it is important to me.",
							tip: 'אמרו את משפטי הבנק בקול. מתרגלים כל יום, 2 דקות.',
							targetSeconds: 20,
							part: 'A'
						},
						{
							type: 'preface',
							text: '{p:callout}{i:star}את המשפטים האהובים שמרו ב**בנק הביטויים**: הכפתור "ביטויים" בכל מסך דיבור.'
						},
						{
							type: 'preface',
							text: '### מילים: העיר ובית הספר\n\nמילים כדי לדבר על המקום שבו אתם גרים, על בית הספר ועל החברים.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'city',
									he: 'עיר'
								},
								{
									en: 'village',
									he: 'כפר'
								},
								{
									en: 'neighbourhood',
									he: 'שכונה'
								},
								{
									en: 'quiet',
									he: 'שקט'
								},
								{
									en: 'safe',
									he: 'בטוח'
								},
								{
									en: 'close to',
									he: 'קרוב ל...'
								}
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'major subject',
									he: 'מגמה'
								},
								{
									en: 'break',
									he: 'הפסקה'
								},
								{
									en: 'activities',
									he: 'פעילויות'
								},
								{
									en: 'class trip',
									he: 'טיול כיתתי'
								},
								{
									en: 'hang out with friends',
									he: 'לבלות עם חברים'
								},
								{
									en: 'help each other',
									he: 'לעזור זה לזה'
								},
								{
									en: 'volunteer',
									he: 'להתנדב'
								}
							]
						},
						{
							type: 'spell-word',
							word: 'quiet',
							mode: 'listen',
							hintHe: 'שקט'
						},
						{
							type: 'spell-word',
							word: 'neighbourhood',
							mode: 'listen',
							hintHe: 'שכונה'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: ['In my neighbourhood,', 'people', 'help', 'each other.']
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
							text: '### כוח חיובי ☀️\n\nתשובות בונות **קל יותר לפתח**, והן נשמעות בוגרות.\n\nנושאים: עזרה לאחרים 🤝 חברות 👫 שיתוף פעולה, צמיחה אישית 🌱 פתרונות, אחריות'
						},
						{
							type: 'preface',
							text: 'לשאלה "שלילית": **הבעיה בכנות ← מה עשיתי ← מה למדתי.**\n\n{p:callout}חיובי לא אומר להמציא: מותר לתאר קושי אמיתי, רק מראים איך המצב השתפר. (אסטרטגיה, לא כלל: הבחינה בודקת אנגלית.)'
						},
						{
							type: 'mcq',
							prompt: '**What is your greatest weakness?**\n\nאיזו תשובה מפותחת יותר?',
							options: [
								"I'm lazy.",
								'I used to leave everything to the last minute. In 11th grade I started using a weekly planner, and my grades improved. I learned that small habits make a big difference.'
							],
							correctIndex: 1,
							explanation: 'כנות + פתרון + לקח = מצוין.'
						},
						{
							type: 'order',
							prompt: '"Social media wastes my time."\n\nהפכו את זה למשפט בונה.',
							tiles: [
								'Although',
								'social media',
								'can be',
								'distracting,',
								'I now use it',
								'to share',
								'study notes',
								'with friends.'
							]
						},
						{
							type: 'preface',
							text: '### עזרה! נתקעתי 🛟\n\nנתקעתם? ממשיכים באנגלית עם משפט הצלה. ברמת 5 יחידות **שטף הדיבור שווה 15%**, ומשפט הצלה שומר על הרצף בזמן שחושבים.'
						},
						{
							type: 'steps',
							steps: [
								'😶 ראש ריק: *"That\'s an interesting question. Let me think for a moment..."*',
								'❓ לא הבנתי: *"If I understand correctly, you\'re asking about..."*',
								'🔤 שכחתי מילה: *"I can\'t remember the exact word, but it\'s something that..."*',
								'🌀 איבדתי את החוט: *"Let me put it another way..."*',
								'🤷 אין לי ניסיון: *"I don\'t have personal experience with this, but I think..."*',
								'❌ טעיתי: *"Sorry, what I meant was..."*'
							]
						},
						{
							type: 'mcq',
							prompt: 'שכחתם את המילה **recycling**. מה אומרים?',
							options: [
								"I can't remember the exact word, but it's something that we do with old bottles so we can use them again.",
								'Sorry, what I meant was...',
								"If I understand correctly, you're asking about..."
							],
							correctIndex: 0,
							explanation: 'מתארים את המילה במילים אחרות וממשיכים.'
						},
						{
							type: 'mcq',
							prompt: 'שאלו על משהו שלא עשיתם אף פעם. מה אומרים?',
							options: [
								"I don't have personal experience with this, but I think it could be very useful, because...",
								"That's an interesting question.",
								'Let me put it another way...'
							],
							correctIndex: 0,
							explanation: 'אומרים בכנות שאין ניסיון ונותנים דעה. זה עדיין מקבל נקודות.'
						},
						{
							type: 'mcq',
							prompt: 'התחלתם משפט והלכתם לאיבוד. מה אומרים?',
							options: [
								'Let me put it another way...',
								"I don't have personal experience with this.",
								"If I understand correctly, you're asking about..."
							],
							correctIndex: 0,
							explanation: 'Let me put it another way מחזיר אתכם לרעיון בלי לעצור.'
						},
						{
							type: 'speak',
							prompt:
								"That's an interesting question. Let me think for a moment... If I understand correctly, you're asking about... Let me put it another way...",
							tip: 'אמרו את משפטי ההצלה ברצף, בלי הפסקות ארוכות.',
							targetSeconds: 15,
							part: 'A'
						},
						{
							type: 'speak',
							prompt: 'What would you change about public transport?',
							tip: 'התחילו במשפט הצלה והמשיכו לדבר חצי דקה.',
							targetSeconds: 30,
							modelAnswer:
								"That's an interesting question. Let me think for a moment... I would add more buses at night, because many teenagers work late and have no way to get home. As a result, they would be safer.",
							checklist: ['התחלתי במשפט הצלה', 'דיברתי בלי הפסקות ארוכות', 'נתתי סיבה ותוצאה'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### בנק המשפטים שלי 🏦\n\nצירופים מוכנים, לא נאומים בעל פה: הם עוזרים להתחיל, לחבר ולסיים.'
						},
						{
							type: 'steps',
							steps: [
								"**START** - *That's an interesting question.*",
								'**ANSWER** - *I strongly believe that... / What I appreciate most is...*',
								'**REASON** - *The main reason is that... / This is mainly because...*',
								'**EXAMPLE** - *For instance, last year... / A good example of this is...*',
								'**OTHER SIDE** - *On the other hand,... / Although..., ...*',
								'**RESULT** - *As a result,... / This means that...*',
								'**TAKEAWAY ☀️** - *This experience taught me that...*  **END** - *All in all,...*'
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'I strongly believe',
									he: 'אני מאמין מאוד'
								},
								{
									en: 'This is mainly because',
									he: 'זה בעיקר כי'
								},
								{
									en: 'A good example of this is',
									he: 'דוגמה טובה לכך היא'
								},
								{
									en: 'Although',
									he: 'למרות ש'
								},
								{
									en: 'As a result',
									he: 'כתוצאה מכך'
								},
								{
									en: 'All in all',
									he: 'בסך הכול'
								}
							]
						},
						{
							type: 'order',
							prompt: 'איך אומרים: "החוויה הזאת לימדה אותי שעזרה לאחרים חשובה"?',
							tiles: ['This experience', 'taught me', 'that helping others', 'is important.']
						},
						{
							type: 'preface',
							text: '{p:callout}{i:star}את הצירופים האהובים שמרו ב**בנק הביטויים**: הכפתור "ביטויים" בכל מסך דיבור.'
						},
						{
							type: 'preface',
							text: '### מילים: אנשים, מקומות וערכים\n\nמילים מדויקות שמשדרגות תשובה של 5 יחידות.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'community',
									he: 'קהילה'
								},
								{
									en: 'meaningful',
									he: 'משמעותי'
								},
								{
									en: 'contribute',
									he: 'לתרום'
								},
								{
									en: 'opportunity',
									he: 'הזדמנות'
								},
								{
									en: 'supportive',
									he: 'תומך'
								},
								{
									en: 'reliable',
									he: 'אמין'
								},
								{
									en: 'trustworthy',
									he: 'שאפשר לסמוך עליו'
								}
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'facilities',
									he: 'מתקנים'
								},
								{
									en: 'atmosphere',
									he: 'אווירה'
								},
								{
									en: 'environment',
									he: 'סביבה'
								},
								{
									en: 'neighbourhood',
									he: 'שכונה'
								},
								{
									en: 'attraction',
									he: 'אטרקציה'
								}
							]
						},
						{
							type: 'spell-word',
							word: 'reliable',
							mode: 'listen',
							hintHe: 'אמין'
						},
						{
							type: 'mcq',
							prompt: 'Volunteering gave me the ___ to contribute to my community.',
							options: ['opportunity', 'atmosphere', 'facilities', 'attraction'],
							correctIndex: 0,
							explanation:
								'opportunity = הזדמנות. atmosphere היא אווירה, facilities הם מתקנים, ו-attraction היא אטרקציה.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: 'A good friend is supportive and ___: you can always count on them.',
							options: ['reliable', 'meaningful', 'environment', 'community'],
							correctIndex: 0,
							explanation: 'reliable = אמין, אפשר לסמוך עליו. meaningful מתאר דבר, לא אדם.',
							layout: 'honeycomb'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-a-talk-about-me',
		section: 'cobe-1',
		required: ['cobe-a-positive-rescue'],
		position: {
			x: 70,
			y: 360
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### תרגול: העיר שלי\n\nשאלות תרגול:\n\n{p:text}"Where do you live? Do you like your hometown? What would you like to change in your hometown? Explain."\n\nבשאלה על שינוי - בחרו משהו שיעזור לאנשים: פארק, מועדון נוער, עוד אוטובוסים.'
						},
						{
							type: 'speak',
							prompt:
								'Where do you live? Do you like your hometown? What would you like to change in your hometown? Explain.',
							tip: 'I live in... I like it because... For example... I would like to change... because it would help...',
							targetSeconds: 60,
							modelAnswer:
								"I live in Afula. It's a small city in the north. I like it because it's quiet and my friends live near me. For example, on Fridays we meet in the park. I would like to change one thing: I would build a youth club, because teenagers need a place to meet. It would help a lot of people.",
							checklist: [
								'עניתי על 3 השאלות',
								'אמרתי because',
								'נתתי דוגמה',
								'הצעתי שינוי שעוזר לאנשים'
							],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### תרגול: בית הספר שלי\n\nמשפטי פתיחה מוכנים:\n\n{p:text}The best thing about my school is... The teachers help us when... I would change... because... My school is special because...'
						},
						{
							type: 'speak',
							prompt:
								'What do you like best about your school? What would you change about your school? In what way is your school different from other schools? Explain.',
							tip: 'השתמשו במשפטי הפתיחה. ענו על כל שלוש השאלות.',
							targetSeconds: 60,
							modelAnswer:
								'The best thing about my school is the people. The teachers really help us. For example, my English teacher stays after class to help students before tests. I would change the schedule, because we finish very late. My school is special because we have a big music program.',
							checklist: ['שאלה 1', 'שאלה 2', 'שאלה 3', 'אמרתי because פעמיים', 'דוגמה חיובית אחת'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### בחרו אחד: התנדבות או עבודה\n\nכמו בבחינה: שומעים **שני סטים** ובוחרים **אחד**.\n\n{p:callout}אף פעם לא עונים רק "No". השאלה "If not, why not?" היא מתנה: מדברים על בית הספר, ספורט או התוכניות שלכם.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'help children',
									he: 'לעזור לילדים'
								},
								{
									en: 'elderly people',
									he: 'קשישים'
								},
								{
									en: 'once a week',
									he: 'פעם בשבוע'
								},
								{
									en: 'it gives me',
									he: 'זה נותן לי'
								},
								{
									en: 'meaningful',
									he: 'משמעותי'
								}
							]
						},
						{
							type: 'speak',
							prompt:
								'Set 1: Describe your volunteering experience in high school. Do you think you will continue volunteering in the future as a result of your volunteer work in high school? Explain.\n\nSet 2: Do you have a job in your free time? If so, explain why and describe it. If not, why not?',
							tip: 'בחרו סט אחד וענו רק עליו. בלי עבודה? "I don\'t have a job because I study a lot, but in the summer I want to work in a café."',
							targetSeconds: 60,
							modelAnswer:
								'I volunteer with elderly people once a week. I help them use their phones and we talk a lot. It gives me a good feeling, because I see that I help someone. I think I will continue in the future, because it is meaningful to me.',
							checklist: ['עניתי רק על סט אחד', 'עניתי על כל השאלות בסט', 'אמרתי למה'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### מדברים על העבר\n\nשאלות על טיול, ספר, סרט או רגע של גאווה צריכות **עבר פשוט**.\n\n{p:text}go → went  see → saw  feel → felt  have → had  take → took  meet → met  is → was\n\nפתיחות: *Last year... In 10th grade... One day...*'
						},
						{
							type: 'mcq',
							prompt: 'go → ?',
							options: ['goed', 'went', 'gone'],
							correctIndex: 1,
							explanation: 'פועל יוצא דופן: go → went.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: 'see → ?',
							options: ['saw', 'seed', 'seen'],
							correctIndex: 0,
							explanation: 'see → saw. seen בא אחרי have.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: 'feel → ?',
							options: ['feeled', 'felt', 'fell'],
							correctIndex: 1,
							explanation: 'feel → felt. fell הוא עבר של fall (ליפול).',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: 'take → ?',
							options: ['taked', 'took', 'taken'],
							correctIndex: 1,
							explanation: 'take → took. taken בא אחרי have.',
							layout: 'honeycomb'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: ['Last year,', 'I went', 'to Eilat', 'with my class.']
						},
						{
							type: 'speak',
							prompt: 'It was amazing because we helped each other on the long hike.',
							tip: 'לא בטוחים בפועל? השתמשו באלה שאתם מכירים: went, was, had, saw.',
							targetSeconds: 10,
							part: 'A'
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
							text: '### תרגול: חברות\n\nשאלות תרגול:\n\n{p:text}"What makes someone a good friend? Describe a time when a friend helped you. What did you learn?"\n\nמילים: *trustworthy, supportive, reliable, be there for someone* (להיות שם בשביל מישהו)'
						},
						{
							type: 'speak',
							prompt:
								'What makes someone a good friend? Describe a time when a friend helped you. What did you learn?',
							tip: 'תכננו לפי הסולם המורחב. פתיחה: "A good friend is someone who..."',
							targetSeconds: 80,
							modelAnswer:
								"A good friend is someone who is there for you when things are hard. Last year, when I broke my leg, my friend Tal brought me notes from every lesson for a month. Thanks to her, I didn't fall behind. I learned that real friendship shows in difficult moments, not only in fun ones.",
							checklist: [
								'עניתי על 3 השאלות',
								'נתתי דוגמה עם זמן ומקום',
								'אמרתי מה למדתי (learned / taught me)'
							],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### תרגול: לשפר את בית הספר\n\nפתיחות:\n\n{p:text}What I appreciate most is... One improvement I would suggest is... because... This would benefit students by... Unlike other schools, mine...\n\n{p:callout}בשאלת שינוי: הצעה + למה + למי זה עוזר.'
						},
						{
							type: 'speak',
							prompt:
								'What do you like best about your school? What would you change about your school? In what way is your school different from other schools? Explain.',
							tip: 'ענו על שלוש השאלות, עם סיבה ותוצאה, והשוואה (unlike / compared to).',
							targetSeconds: 80,
							modelAnswer:
								'What I appreciate most is the supportive atmosphere. One improvement I would suggest is a quiet study room, because many students have no calm place to study at home. This would benefit students by giving everyone a fairer chance. Unlike other schools, mine has a strong volunteering program.',
							checklist: [
								'שאלה 1',
								'שאלה 2',
								'שאלה 3',
								'סיבה + תוצאה',
								'השוואה (unlike / compared to)'
							],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### בחרו אחד: התנדבות או טכנולוגיה\n\nשומעים שני סטים ובוחרים אחד.\n\nלסט 2: *On the one hand,... On the other hand,... Overall, I believe...*'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'convenient',
									he: 'נוח'
								},
								{
									en: 'distraction',
									he: 'הסחת דעת'
								},
								{
									en: 'access',
									he: 'גישה'
								},
								{
									en: 'meaningful',
									he: 'משמעותי'
								},
								{
									en: 'make a difference',
									he: 'לחולל שינוי'
								}
							]
						},
						{
							type: 'speak',
							prompt:
								'Set 1: Describe your volunteering experience in high school. Do you think you will continue volunteering in the future as a result of your volunteer work in high school? Explain.\n\nSet 2: How has technology changed the way teenagers learn? Describe an advantage and a disadvantage.',
							tip: 'בחרו סט אחד. בסט 2: גם יתרון וגם חיסרון, ומסקנה עם overall.',
							targetSeconds: 80,
							modelAnswer:
								'On the one hand, technology gives teenagers access to information everywhere. For instance, I learned to code from free online videos. On the other hand, phones are a big distraction, and it is hard to focus. Overall, I believe technology helps us, but only if we learn to control it.',
							checklist: ['עניתי רק על סט אחד', 'כל השאלות בסט', 'סיבות מוסברות ודוגמה ספציפית'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### מדברים על ניסיון\n\n**עבר פשוט** לאירוע שהסתיים: *Last year I volunteered...*\n\n**הווה מושלם** לניסיון עד עכשיו: *I have volunteered for two years.*\n\n**used to** להרגל שהיה ונגמר: *I used to be shy, but now...*'
						},
						{
							type: 'mcq',
							prompt: 'I ___ at the youth centre since 10th grade.',
							options: ['volunteer', 'volunteered', 'have volunteered'],
							correctIndex: 2,
							explanation: 'since + הווה מושלם: have volunteered. התחיל בעבר ונמשך עד היום.'
						},
						{
							type: 'mcq',
							prompt: 'I ___ be afraid of public speaking, but now I enjoy it.',
							options: ['use to', 'used to', 'was used'],
							correctIndex: 1,
							explanation: 'used to = הרגל שהיה ונגמר. מעולה לסיפורי צמיחה!'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: [
								'I used to',
								'be shy,',
								'but',
								'volunteering',
								'has made me',
								'more confident.'
							]
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-a-stories',
		section: 'cobe-1',
		required: ['cobe-a-talk-about-me'],
		position: {
			x: 0,
			y: 480
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### תרגול: טיול שנתי\n\n{p:text}"Tell me about a school trip that you enjoyed. Where did you go? Who did you go with? What was so special about the trip?"\n\nתכננו לפי שאלות ה-WH: מתי? איפה? מי? מה קרה? איך הרגשתם? ☀️'
						},
						{
							type: 'speak',
							prompt:
								'Tell me about a school trip that you enjoyed. Where did you go? Who did you go with? What was so special about the trip?',
							tip: 'לא זוכרים טיול? מדברים על כל יציאה עם חברים או משפחה - טיול זה טיול!',
							targetSeconds: 60,
							modelAnswer:
								'Last year I went to the Golan with my class. We hiked for two days and slept in tents. It was special because we helped each other on the long hike. I got closer to my classmates, and I saw a beautiful view from the mountain.',
							checklist: [
								'איפה ועם מי',
								'מה היה מיוחד',
								'פעלים בעבר (went, was, saw)',
								'משהו חיובי'
							],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### תרגול: אדם שאני מעריך\n\nסולם: מי זה? ← איך הוא? ← דוגמה למשהו שעשה ← מה למדתי ממנו ☀️'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'kind',
									he: 'טוב לב'
								},
								{
									en: 'brave',
									he: 'אמיץ'
								},
								{
									en: 'hard-working',
									he: 'חרוץ'
								},
								{
									en: 'helpful',
									he: 'עוזר לאחרים'
								},
								{
									en: 'patient',
									he: 'סבלני'
								},
								{
									en: 'honest',
									he: 'ישר'
								}
							]
						},
						{
							type: 'speak',
							prompt: 'Describe a person whom you admire. What makes this person so special?',
							tip: 'בחרו שתי תכונות, תנו דוגמה, וסיימו במה שלמדתם.',
							targetSeconds: 60,
							modelAnswer:
								"I admire my basketball coach, Dani. He is hard-working and very kind. For example, he stays after practice to help players who need more help. He always says 'Don't give up.' I learned from him that helping others is more important than winning.",
							checklist: ['מי זה', 'שתי תכונות', 'דוגמה', 'מה למדתי'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### שאלות דמיון: If I..., I would...\n\n{p:text}"You have just been given $40,000 to change the community in which you live. What would you do with the money, and why?"\n\n{p:text}"Where do you see yourself 10 years from now? Explain."\n\nמבנה: *If I had $40,000, I would... because it would help...*'
						},
						{
							type: 'mcq',
							prompt: 'Which is correct?',
							options: [
								'If I have money, I would build a park.',
								'If I had money, I would build a park.',
								'If I had money, I will build a park.'
							],
							correctIndex: 1,
							explanation:
								'If I had..., I would... עם would משתמשים ב-had, ועם had משתמשים ב-would (לא will).'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: [
								'If I had',
								'$40,000,',
								'I would build',
								'a youth club',
								'because',
								'teenagers need',
								'a safe place',
								'to meet friends.'
							]
						},
						{
							type: 'speak',
							prompt:
								'Choose one:\n\nYou have just been given $40,000 to change the community in which you live. What would you do with the money, and why?\n\nWhere do you see yourself 10 years from now? Explain.',
							tip: 'בחרו שאלה אחת. דקדוק הוא רק 10% מהציון - טעיתם? ממשיכים לדבר!',
							targetSeconds: 60,
							modelAnswer:
								'If I had $40,000, I would build a youth club, because teenagers need a safe place to meet friends. It would have games, music and a quiet room for homework. It would help a lot of families in my town.',
							checklist: ['If I had..., I would...', 'אמרתי למה', 'רעיון שעוזר לאנשים'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### תחנת סיום - חלק א׳ 🏆\n\nמצב בחינה: **שני נושאים**, בוחרים **אחד** ועונים על כל השאלות **בהקלטה אחת**.\n\nבלי עברית ובלי רמזים. אחר כך מקשיבים ובודקים.'
						},
						{
							type: 'speak',
							prompt:
								'Topic 1: Tell me something about the place where you live. Where would you like to live when you are older? Explain why.\n\nTopic 2: What do you usually do in your free time? Describe an activity which you enjoy.',
							targetSeconds: 60,
							checklist: [
								'עניתי על כל השאלות',
								'אמרתי למה (because)',
								'נתתי דוגמה',
								'אמרתי משהו חיובי',
								'רק אנגלית',
								'בערך דקה'
							],
							part: 'A'
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
							text: '### תרגול: נקודת מפנה\n\nמפת הסיפור: **לפני ← הרגע ← אחרי ← מה למדתי ☀️**'
						},
						{
							type: 'speak',
							prompt:
								"Choose one:\n\nDescribe a moment in your life when you were especially proud of something that you did.\n\nTell me about an event in your life which you could describe as a 'turning point'. When was it? Why do you consider this event as a turning point?",
							tip: 'לפני (used to) ← הרגע ← אחרי (since then) ← מה למדתי.',
							targetSeconds: 80,
							modelAnswer:
								'I used to be very shy and never spoke in class. In 10th grade, my teacher asked me to present our class project at a school event. I was terrified, but I practised every evening. Since then, I have felt much more confident. I learned that fear gets smaller when you face it.',
							checklist: ['פעלים בעבר', 'לפני ואחרי (used to / since then)', 'מה למדתי'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### תרגול: דמות לחיקוי\n\nמבנה: *I admire... because... A quality I would like to develop is...*'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'inspiring',
									he: 'מעורר השראה'
								},
								{
									en: 'determined',
									he: 'נחוש'
								},
								{
									en: 'generous',
									he: 'נדיב'
								},
								{
									en: 'patient',
									he: 'סבלני'
								},
								{
									en: 'achievement',
									he: 'הישג'
								}
							]
						},
						{
							type: 'speak',
							prompt:
								'Describe a person whom you admire. What makes this person so special? What do you believe you have to do in life to be just like him/her?',
							tip: 'ענו על שלוש השאלות. סיימו באיכות שהייתם רוצים לפתח.',
							targetSeconds: 80,
							modelAnswer:
								'The person I admire most is my grandmother. She came to Israel at 20 without speaking Hebrew, and she still became a nurse. What makes her special is that she is both determined and generous - she still volunteers at a clinic twice a week. To be like her, I need to be more patient and keep going when things get hard.',
							checklist: ['מי ולמה', 'דוגמה ספציפית', 'מה אני צריך לעשות כדי להיות כמוה'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### שאלות דמיון\n\nמבנים: *If I had..., I would... This would allow... to... Not only would it..., but it would also... As an individual, I could...*\n\n{p:callout}מי מרוויח, ואיך - זה עומק.'
						},
						{
							type: 'mcq',
							prompt: 'Which is correct?',
							options: [
								'If I would have money, I build a youth centre.',
								'If I had the money, I would open a youth centre.',
								'If I have the money, I would open a youth centre.'
							],
							correctIndex: 1,
							explanation: 'If + עבר, would + פועל: If I had..., I would... בדקו את החלק של if.'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: [
								'This would allow',
								'teenagers',
								'to meet',
								'in a safe place',
								'instead of',
								'hanging out',
								'in the street.'
							]
						},
						{
							type: 'speak',
							prompt:
								'Choose one:\n\nYou have just been given $40,000 to change the community in which you live. What would you do with the money, and why?\n\nWhat do you think needs to be done to make our country a better place in which to live? What do you need to do as an individual?',
							tip: 'בחרו שאלה אחת. אמרו מי מרוויח ואיך.',
							targetSeconds: 80,
							modelAnswer:
								'If I had the money, I would open a youth centre in my neighbourhood. This would allow teenagers to meet in a safe place instead of hanging out in the street. Not only would it keep them safe, but it would also give them a quiet place to study.',
							checklist: ['If I had..., I would...', 'מי מרוויח ואיך', 'תוצאה'],
							part: 'A'
						},
						{
							type: 'preface',
							text: '### תחנת סיום - חלק א׳ 🏆\n\nמצב בחינה: **שני נושאים**, בוחרים **אחד** ועונים על כל השאלות **בהקלטה אחת**. בלי עברית ובלי רמזים.'
						},
						{
							type: 'speak',
							prompt:
								'Topic 1: What do you do to stay healthy? Which healthy habit should teenagers develop, and why?\n\nTopic 2: Tell me about a book you read this year. Would you recommend it to a friend? Why or why not?',
							targetSeconds: 80,
							checklist: [
								'כל השאלות',
								'סיבות מוסברות',
								'דוגמה ספציפית',
								'הצד השני או השוואה',
								'מסקנה חיובית',
								'כמעט בלי הפסקות ארוכות',
								'דקה עד דקה וחצי'
							],
							part: 'A'
						}
					],
					retryMissed: true
				}
			]
		}
	}
];
