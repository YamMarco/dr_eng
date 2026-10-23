// COBE Part C - the clip. `content` is the 4-point path ("The Lost Wallet"),
// `content5` the 5-point one ("The New Student"). The clips are not made yet:
// `video` screens without `src` hold their place. Source: the partner course.
import type { LessonNode } from '../types';

export const cobe3Lessons: LessonNode[] = [
	{
		id: 'cobe-c-how-it-works',
		section: 'cobe-3',
		required: ['cobe-b-practice'],
		position: {
			x: 0,
			y: 1400
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מה זה חלק ג׳?\n\nחלק ג׳ שווה **50 נקודות - חצי מהציון!**\n\nצופים בקליפ קצר אחד (סרט קצר, אנימציה, שיחה או ראיון) ועונים על **שני סטים**:\n\n**סט 1** - מה קרה? 🎬 (25 נקודות)\n**סט 2** - מה אתם חושבים? 💭 (25 נקודות)\n\nכל סט = הקלטה אחת.'
						},
						{
							type: 'mcq',
							prompt: 'What must you NEVER do in Part C?',
							options: ['Answer in simple English', 'Leave it empty', "Say 'I think'"],
							correctIndex: 1,
							explanation:
								'אסור להשאיר את חלק ג׳ ריק. מי שלא עונה בכלל על חלק ג׳ **נכשל בכל ה-COBE** (כלל חדש מהשנה). גם תשובה קצרה מקבלת נקודות!'
						},
						{
							type: 'preface',
							text: '### שני סוגי שאלות\n\n{p:callout}סט 1 = **מתארים**. סט 2 = **מסבירים מה חושבים**.\n\nמיינו את השאלות האמיתיות (מדוגמאות רשמיות).'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"Describe the events in the clip you just watched."**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 0,
							explanation: 'לתאר אירועים = סט 1.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"How do you think the boy feels at the end of the clip? Explain."**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 1,
							explanation: 'רגשות + הסבר = סט 2.'
						},
						{
							type: 'mcq',
							prompt: '{p:text}**"What is the outcome of these events?"**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 0,
							explanation: 'התוצאה של האירועים = סט 1.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"If you were the boy, what would you do with the money? Explain."**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 1,
							explanation: '"If you were..." = מה אתם הייתם עושים, סט 2.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"What do you think the message of the clip is? Explain."**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 1,
							explanation: 'המסר = סט 2.'
						},
						{
							type: 'preface',
							text: '### צופים כמו בלש 🔍\n\nבזמן הצפייה שואלים בראש חמש שאלות. בבחינה אי אפשר לכתוב, אז מתרגלים לזכור.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'WHO?',
									he: 'מי?'
								},
								{
									en: 'WHERE?',
									he: 'איפה?'
								},
								{
									en: 'WHAT happens?',
									he: 'מה קורה?'
								},
								{
									en: 'HOW does it end?',
									he: 'איך זה נגמר?'
								},
								{
									en: 'HOW do they feel?',
									he: 'מה הם מרגישים?'
								}
							]
						},
						{
							type: 'preface',
							text: '### צופים בקליפ התרגול\n\nצפו ב-"The Lost Wallet". בכל פעם שקורה משהו חדש - שימו לב.'
						},
						{
							type: 'video',
							caption: 'צפו בקליפ ושימו לב: מי, איפה, מה קורה, איך זה נגמר, ומה הם מרגישים.'
						},
						{
							type: 'order',
							prompt: 'סדרו את האירועים לפי הסדר.',
							tiles: [
								"An old man's wallet falls at the bus stop.",
								'A girl picks it up and runs after the bus.',
								'She finds his address in the wallet.',
								'She returns the wallet, and he thanks her.'
							],
							explanation: 'מצאתם 4 אירועים - זאת תשובה מלאה לסט 1!'
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
							text: '### מה זה חלק ג׳?\n\nחלק ג׳ שווה **חצי מהציון**. צופים בקליפ אחד (שיחה, ראיון, סרט קצר או מצגת) ועונים על **שני סטים**:\n\n**רמה 1** - הבנה: מה קרה? 🎬 (25 נקודות)\n**רמה 2** - פרשנות: מה זה אומר? 💭 (25 נקודות)'
						},
						{
							type: 'mcq',
							prompt: 'Level 2 asks you to...',
							options: [
								'repeat the events',
								'interpret and explain with evidence',
								'describe the colours'
							],
							correctIndex: 1,
							explanation: 'פרשנות + ראיה מהסרטון.'
						},
						{
							type: 'preface',
							text: '{p:callout}{i:warn}מי שלא עונה בכלל על חלק ג׳ **נכשל בכל ה-COBE** (כלל חדש מהשנה). גם תשובה קצרה מקבלת נקודות!'
						},
						{
							type: 'preface',
							text: '### שני סוגי שאלות\n\n{p:callout}רמה 1 = מה **ראיתם**. רמה 2 = מה אתם **חושבים** שזה אומר, ו**למה**.\n\nמיינו את שאלות הדוגמה הרשמיות.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"Describe the major events in the clip you have just watched."**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 0,
							explanation: 'אירועים = רמה 1.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"How does the boy\'s mother feel that day?"**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 0,
							explanation: 'שימו לב: גם זה רמה 1 - הבנה של מה שרואים בסרטון.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"What do you think (other) parents can learn from it? Explain."**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 1,
							explanation: 'מה אפשר ללמוד = פרשנות, רמה 2.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**"If you were the boy, what would you do with the money? Explain."**\n\nלאיזה סט שייכת השאלה?',
							options: ['🎬 Set 1 - What happened', '💭 Set 2 - What I think'],
							correctIndex: 1,
							explanation: '"If you were..." = רמה 2.'
						},
						{
							type: 'preface',
							text: '### צופים כמו בלש 🔍\n\nעוקבים אחרי שישה דברים: **מי, איפה, מה קורה** (התחלה ← נקודת מפנה ← סוף), **איך זה נגמר, רגשות** ואיך הם משתנים, ו**רמזים**: הבעות פנים, שפת גוף ומילים.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'turning point',
									he: 'נקודת מפנה'
								},
								{
									en: 'body language',
									he: 'שפת גוף'
								},
								{
									en: 'facial expression',
									he: 'הבעת פנים'
								},
								{
									en: 'clue',
									he: 'רמז'
								}
							]
						},
						{
							type: 'preface',
							text: '### צופים בקליפ התרגול\n\nצפו ב-"The New Student". שימו לב לכל אירוע חדש, ובמיוחד ל**נקודת המפנה**.'
						},
						{
							type: 'video',
							caption: 'צפו בקליפ ושימו לב: מה קורה, מתי הכול משתנה, ואיך הרגשות משתנים.'
						},
						{
							type: 'order',
							prompt: 'סדרו את האירועים לפי הסדר.',
							tiles: [
								'Maya sits alone.',
								'Noa hesitates while her friends whisper.',
								'Noa joins Maya and notices the guitar.',
								'Noa invites her to the band.',
								'They perform together.'
							],
							explanation:
								'נקודת המפנה: נועה מחליטה לשבת עם מאיה. לזהות את נקודת המפנה - זה המפתח לרמה 2!'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-c-describe',
		section: 'cobe-3',
		required: ['cobe-c-how-it-works'],
		position: {
			x: 70,
			y: 1520
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### אנשים ומקומות\n\nמילים לתיאור הדמויות והמקומות בקליפ.\n\n{p:text}a boy, a girl, an old man, an old woman, a mother, a neighbour, a stranger, a crowd\n{p:text}the street, a bus stop, a shop, a park, a classroom, a hospital, at home\n\n{p:callout}לא יודעים שם? אומרים *a man, a woman, a boy* - וזה מספיק!'
						},
						{
							type: 'spell-word',
							word: 'stranger',
							mode: 'listen',
							hintHe: 'אדם זר'
						},
						{
							type: 'order',
							prompt: 'הקשיבו ובנו את המשפט ששמעתם.',
							tiles: ['An old man', 'is waiting', 'at the bus stop.'],
							listen: true
						},
						{
							type: 'preface',
							text: '### פעלי פעולה\n\nפעלים שמתארים מה קורה בקליפ, בהווה ובעבר.\n\n{p:text}help → helped  give → gave  find → found  run → ran  see → saw  fall → fell\n{p:text}smile → smiled  hug → hugged  thank → thanked  share → shared  cry → cried'
						},
						{
							type: 'mcq',
							prompt: 'find → ?',
							options: ['finded', 'found', 'founded'],
							correctIndex: 1,
							explanation: 'The girl finds → the girl found.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: 'fall → ?',
							options: ['fell', 'falled', 'felt'],
							correctIndex: 0,
							explanation: 'fall → fell. felt הוא עבר של feel.',
							layout: 'honeycomb'
						},
						{
							type: 'mcq',
							prompt: 'run → ?',
							options: ['runned', 'ran', 'run'],
							correctIndex: 1,
							explanation: 'run → ran.',
							layout: 'honeycomb'
						},
						{
							type: 'preface',
							text: '### מספרים לפי הסדר\n\n{p:text}At the beginning... Then... After that... Suddenly... In the end...\n\nאפשר לספר בהווה או בעבר - העיקר לבחור אחד ולהישאר בו.'
						},
						{
							type: 'order',
							prompt: 'סדרו את הסיפור.',
							tiles: [
								'At the beginning, a man drops his wallet at a bus stop.',
								'Then a girl picks it up and runs after the bus.',
								'After that, she finds his address in the wallet.',
								'In the end, the man smiles and thanks her.'
							],
							explanation:
								'At the beginning ← Then ← After that ← In the end: זה השלד של כל תשובה בסט 1.'
						},
						{
							type: 'speak',
							prompt:
								'At the beginning, a man drops his wallet at a bus stop. Then a girl picks it up and runs after the bus. After that, she finds his address in the wallet. In the end, the man smiles and thanks her.',
							tip: 'ספרו את ארבעת המשפטים לפי הסדר. ערבבתם הווה ועבר? לא עוצרים - דקדוק הוא רק 10%.',
							targetSeconds: 20,
							part: 'C'
						},
						{
							type: 'preface',
							text: '### סט 1: תשובה לדוגמה\n\nשאלה בנוסח הרשמי:\n\n{p:text}"Many things happened in the clip. Describe the events in the clip you just watched. What is the outcome of these events?"\n\n{p:callout}יש **שתי שאלות** בסט (אירועים + תוצאה), והתשובה עונה על שתיהן.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו בתשובה לדוגמה את מילות הסדר: התחלה, אמצע, סוף ותוצאה.',
							text: 'At the beginning of the clip, a girl is waiting at a bus stop. The girl picks up the wallet and runs after the bus. Then she finds his address. In the end, the old man is very happy. The outcome is that the man gets his wallet back.',
							correctIndices: [],
							categories: [
								{
									name: 'BEGINNING',
									color: 'sky',
									indices: [0, 1, 2]
								},
								{
									name: 'MIDDLE',
									color: 'violet',
									indices: [25]
								},
								{
									name: 'END',
									color: 'amber',
									indices: [30, 31, 32]
								},
								{
									name: 'OUTCOME',
									color: 'emerald',
									indices: [39, 40]
								}
							]
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
							text: '### מקומות ושפת גוף\n\nשפת גוף = **הראיה שלכם ברמה 2**.\n\n{p:text}the school cafeteria, a corridor, a rehearsal room, the stage'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'looks away',
									he: 'מסיט את המבט'
								},
								{
									en: 'hesitates',
									he: 'מהסס'
								},
								{
									en: 'whispers',
									he: 'לוחש'
								},
								{
									en: 'smiles shyly',
									he: 'מחייך בביישנות'
								},
								{
									en: 'nods',
									he: 'מהנהן'
								},
								{
									en: 'frowns',
									he: 'מקמט את המצח'
								}
							]
						},
						{
							type: 'spell-word',
							word: 'hesitates',
							mode: 'listen',
							hintHe: 'מהסס'
						},
						{
							type: 'order',
							prompt: 'הקשיבו ובנו את המשפט ששמעתם.',
							tiles: ['Noa hesitates,', 'then walks over', "to Maya's table."],
							listen: true
						},
						{
							type: 'preface',
							text: '### פעלי פעולה\n\nפעלים מדויקים מקבלים יותר נקודות מ-*do* ו-*go*.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'ignore',
									he: 'להתעלם'
								},
								{
									en: 'hesitate',
									he: 'להסס'
								},
								{
									en: 'approach',
									he: 'לגשת אל'
								},
								{
									en: 'invite',
									he: 'להזמין'
								},
								{
									en: 'encourage',
									he: 'לעודד'
								},
								{
									en: 'realize',
									he: 'להבין'
								},
								{
									en: 'include',
									he: 'לצרף, לשתף'
								},
								{
									en: 'perform',
									he: 'להופיע'
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'At first, the other girls ___ Maya.',
							options: ['ignored', 'ignore', 'ignoring'],
							correctIndex: 0,
							explanation: 'מספרים בעבר: ignored.',
							layout: 'honeycomb'
						},
						{
							type: 'preface',
							text: '### מספרים לפי הסדר\n\n{p:text}At first... Meanwhile... Later on... Eventually... As a result...\n\nבוחרים זמן אחד - הווה או עבר - ונשארים בו.'
						},
						{
							type: 'order',
							prompt: 'סדרו את הסיפור.',
							tiles: [
								'At first, Maya sits alone in the cafeteria.',
								"Meanwhile, Noa's friends whisper and laugh.",
								'Later on, Noa invites Maya to join her band.',
								'Eventually, they perform together at the talent show.'
							],
							explanation: 'At first ← Meanwhile ← Later on ← Eventually: השלד של רמה 1.'
						},
						{
							type: 'speak',
							prompt:
								"At first, Maya sits alone in the cafeteria. Meanwhile, Noa's friends whisper and laugh. Later on, Noa invites Maya to join her band. Eventually, they perform together at the talent show.",
							tip: 'ספרו את ארבעת המשפטים, עם מילות קישור משלכם.',
							targetSeconds: 20,
							part: 'C'
						},
						{
							type: 'preface',
							text: '### רמה 1: תשובה לדוגמה\n\nשאלה בנוסח הרשמי:\n\n{p:text}"Describe the major events in the clip you have just watched. What is the outcome of these events?"\n\n{p:callout}רק עובדות שרואים. הפרשנות - ברמה 2.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו בתשובה לדוגמה: ההתחלה, נקודת המפנה, הסוף והתוצאה.',
							text: 'At first, Maya sits alone and looks at her phone. Meanwhile, the girls whisper and laugh. Noa hesitates, and then she walks over and sits with Maya. Eventually, the band performs together on stage. The outcome is that Maya is no longer alone.',
							correctIndices: [],
							categories: [
								{
									name: 'BEGINNING',
									color: 'sky',
									indices: [0, 1]
								},
								{
									name: 'TURNING POINT',
									color: 'rose',
									indices: [16, 17]
								},
								{
									name: 'END',
									color: 'amber',
									indices: [27]
								},
								{
									name: 'OUTCOME',
									color: 'emerald',
									indices: [34, 35]
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
		id: 'cobe-c-outcome-feelings',
		section: 'cobe-3',
		required: ['cobe-c-describe'],
		position: {
			x: 100,
			y: 1640
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### מה התוצאה?\n\n**Outcome** = התוצאה, איך הסיפור נגמר.\n\n{p:text}The outcome is that...\n\n{p:callout}טיפ לסט 1: מזכירים את **הבעיה**, את **השיא או האכזבה**, ואת **הפתרון** - ואז את התוצאה.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence describes the OUTCOME of "The Lost Wallet"?',
							options: [
								'A girl is waiting at a bus stop.',
								'The man gets his wallet back and the girl feels proud.',
								'Buses are often late.'
							],
							correctIndex: 1,
							explanation:
								'התוצאה של כל האירועים. "waiting at a bus stop" היא ההתחלה, ו-"Buses are often late" לא מופיע בקליפ.'
						},
						{
							type: 'speak',
							prompt: 'The outcome is that the man gets his wallet back.',
							tip: 'אמרו את המשפט בקול.',
							targetSeconds: 10,
							part: 'C'
						},
						{
							type: 'preface',
							text: '### סט 1: תורכם\n\nצפו שוב בקליפ (אם תרצו) והקליטו תשובה לסט 1: האירועים והתוצאה. מכוונים ל-40-90 שניות.'
						},
						{
							type: 'video',
							caption: 'צפו שוב (רשות): bus stop, wallet, address, thank.'
						},
						{
							type: 'speak',
							prompt:
								'Describe the events in the clip you just watched. What is the outcome of these events?',
							tip: 'At the beginning... Then... After that... In the end... The outcome is that...',
							targetSeconds: 60,
							modelAnswer:
								'At the beginning of the clip, a girl is waiting at a bus stop. An old man gets on the bus, and his wallet falls on the ground. The girl picks it up and runs after the bus, but the bus leaves. Then she opens the wallet and finds his address. The next day, she goes to his house and gives him the wallet. In the end, the old man is very happy. He thanks her and gives her cookies. The outcome is that the man gets his wallet back, and the girl feels proud because she helped someone.',
							checklist: ['התחלה', 'אמצע', 'סוף', 'תוצאה', 'מילות סדר'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### מילים של רגשות 😊\n\n{p:callout}יכול להיות יותר מרגש נכון אחד - רק מסבירים למה.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'happy',
									he: 'שמח'
								},
								{
									en: 'proud',
									he: 'גאה'
								},
								{
									en: 'grateful',
									he: 'אסיר תודה'
								},
								{
									en: 'relieved',
									he: 'מרגיש הקלה'
								},
								{
									en: 'excited',
									he: 'נרגש'
								},
								{
									en: 'surprised',
									he: 'מופתע'
								}
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'sad',
									he: 'עצוב'
								},
								{
									en: 'worried',
									he: 'מודאג'
								},
								{
									en: 'embarrassed',
									he: 'נבוך'
								},
								{
									en: 'lonely',
									he: 'בודד'
								},
								{
									en: 'scared',
									he: 'מפוחד'
								},
								{
									en: 'angry',
									he: 'כועס'
								}
							]
						},
						{
							type: 'preface',
							text: '### רגש + כי + הוכחה\n\nנוסחה: **רגש + כי + הוכחה מהקליפ** - מה ראיתי שמראה את הרגש.\n\n{p:text}"I think the man feels grateful because the girl brought back his wallet. I can see this because he smiles and gives her cookies."'
						},
						{
							type: 'mcq',
							prompt: '**How does the girl feel at the end? Explain.**\n\nאיזו תשובה הכי טובה?',
							options: [
								'Happy.',
								'I think she feels proud because she helped someone. I can see it because she smiles all the way home.',
								'She feels good and nice and happy.'
							],
							correctIndex: 1,
							explanation:
								'רגש + כי + הוכחה. "Happy" - מילה אחת בלי הסבר. "good and nice and happy" - רגשות, אבל בלי סיבה ובלי הוכחה.'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: ['I think', 'he feels', 'relieved', 'because', 'he got', 'his wallet', 'back.']
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
							text: '### תוצאה ונקודת מפנה\n\n**Outcome** - התוצאה: איך הדברים נגמרים.\n**Turning point** - נקודת המפנה: הרגע שבו הכול משתנה.\n\n{p:callout}טיפ לרמה 1: מזכירים את **הבעיה**, את **השיא או האכזבה**, ואת **הפתרון** - ואז את התוצאה.'
						},
						{
							type: 'mcq',
							prompt: 'Which is the outcome?',
							options: [
								'Maya has a guitar.',
								'Maya becomes part of a group of friends.',
								'The cafeteria is crowded.'
							],
							correctIndex: 1,
							explanation: 'התוצאה = איך הסיפור נגמר. הגיטרה וחדר האוכל הם פרטים.'
						},
						{
							type: 'mcq',
							prompt: 'Which is the turning point?',
							options: [
								'Maya looks at her phone.',
								'Noa decides to sit with Maya.',
								'The talent show poster.'
							],
							correctIndex: 1,
							explanation: 'אחרי הרגע הזה הכול משתנה בשביל מאיה.'
						},
						{
							type: 'speak',
							prompt:
								'The turning point is when Noa decides to sit with Maya. As a result, Maya finds friends.',
							tip: 'אמרו את המשפט בקול.',
							targetSeconds: 10,
							part: 'C'
						},
						{
							type: 'preface',
							text: '### רמה 1: תורכם\n\nהקליטו תשובה לרמה 1: האירועים העיקריים והתוצאה. מכוונים ל-60-90 שניות.'
						},
						{
							type: 'video',
							caption: 'צפו שוב (רשות): cafeteria, alone, hesitates, band, talent show.'
						},
						{
							type: 'speak',
							prompt:
								'Describe the major events in the clip you have just watched. What is the outcome of these events?',
							tip: 'At first... Meanwhile... Later on... Eventually... The outcome is that...',
							targetSeconds: 75,
							modelAnswer:
								'At first, a new student, Maya, enters the school cafeteria with a guitar case. All the tables are full, so she sits alone and looks at her phone. Meanwhile, a group of girls at another table whisper and laugh. One of them, Noa, hesitates, and then she walks over and sits with Maya. Later on, Noa notices the guitar and invites Maya to play in her band for the school talent show. Eventually, the band performs together on stage. The outcome is that Maya is no longer alone - she has found friends and a place in the school.',
							checklist: ['התחלה', 'נקודת מפנה', 'סוף', 'תוצאה', 'מילות קישור', 'זמן אחד'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### רגשות - מילים מדויקות\n\nברמת 5 יחידות משדרגים: *sad* ← **isolated**, *happy* ← **relieved / welcomed**.'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'isolated',
									he: 'מבודד'
								},
								{
									en: 'uncomfortable',
									he: 'לא בנוח'
								},
								{
									en: 'hesitant',
									he: 'מהסס'
								},
								{
									en: 'nervous',
									he: 'לחוץ'
								},
								{
									en: 'ashamed',
									he: 'מתבייש'
								}
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'welcomed',
									he: 'מרגיש רצוי'
								},
								{
									en: 'relieved',
									he: 'מרגיש הקלה'
								},
								{
									en: 'grateful',
									he: 'אסיר תודה'
								},
								{
									en: 'confident',
									he: 'בטוח בעצמו'
								},
								{
									en: 'proud',
									he: 'גאה'
								}
							]
						},
						{
							type: 'preface',
							text: '### רגש + ראיה + שינוי\n\nנוסחה: **רגש + ראיה מהקליפ + איך הרגש משתנה**.\n\n{p:text}"At the beginning, Maya seems isolated - she sits alone and avoids eye contact. By the end, she looks confident: she smiles on stage and stands close to her new friends."'
						},
						{
							type: 'mcq',
							prompt: '**How does Maya feel at the end? Explain.**\n\nאיזו תשובה הכי טובה?',
							options: [
								'Happy.',
								'She feels welcomed and confident. We can see this because she smiles on stage, and earlier she was sitting alone, so her feelings have completely changed.',
								"Good, because it's the end."
							],
							correctIndex: 1,
							explanation: 'רגש + ראיה + שינוי = עומק של רמה 2.'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: ['Her body language', 'shows', 'that', 'she feels', 'much more', 'confident.']
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-c-interpret',
		section: 'cobe-3',
		required: ['cobe-c-outcome-feelings'],
		position: {
			x: 70,
			y: 1760
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### המסר ☀️\n\n**מסר** = מה הקליפ מלמד אותנו. לרוב הקליפים יש מסר חיובי.\n\nבנק מסרים: לעזור לאחרים 🤝 להיות ישרים, להיות טובים לזרים, לא לוותר, חברים ומשפחה חשובים, מעשה קטן יכול לשנות הרבה.\n\n{p:text}The message of the clip is that... The clip teaches us that...'
						},
						{
							type: 'mcq',
							prompt: 'Which is the best message for "The Lost Wallet"?',
							options: [
								'Wallets are important.',
								'Small acts of kindness can make people happy.',
								"Don't take the bus."
							],
							correctIndex: 1,
							explanation:
								'מסר הוא לקח לכולם. "Wallets are important" הוא פרט, ו-"Don\'t take the bus" לא מה שהקליפ מלמד.'
						},
						{
							type: 'speak',
							prompt: 'What do you think the message of the clip is? Explain.',
							tip: 'לא בטוחים? בוחרים מסר מהבנק - כמעט תמיד אחד מהם מתאים. מוסיפים דוגמה מהקליפ.',
							targetSeconds: 15,
							modelAnswer:
								'The message of the clip is that small acts of kindness can make people happy. For example, the girl returns the wallet, and the old man is very happy.',
							part: 'C'
						},
						{
							type: 'preface',
							text: '### שאלות "אילו הייתם..."\n\nשאלה מדוגמה רשמית:\n\n{p:text}"If you were the boy, what would you do with the money? Explain."\n\n{p:text}If I were the girl, I would... because...\n\nאין תשובה נכונה אחת - העיקר להסביר. בחירה חיובית קל להסביר.'
						},
						{
							type: 'mcq',
							prompt:
								"**If you were the girl, would you go to the man's house? Why or why not?**\n\nאיזו תשובה מסבירה הכי טוב?",
							options: [
								"Yes. If I were the girl, I would go, because it's the right thing to do. I would ask my mother to come with me.",
								'Yes.',
								'I would give it.'
							],
							correctIndex: 0,
							explanation: '"If I were..., I would..." + סיבה. "Yes" ו-"I would give it" בלי למה.'
						},
						{
							type: 'speak',
							prompt: "If you were the girl, would you go to the man's house? Why or why not?",
							tip: 'If I were the girl, I would... because...',
							targetSeconds: 20,
							checklist: ['If I were..., I would...', 'סיבה (because)'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### מה אפשר ללמוד? מחברים לחיים שלי\n\nשאלה מדוגמה רשמית:\n\n{p:text}"What do you think (other) parents can learn from it? Explain."\n\n{p:text}I think people can learn that... This reminds me of a time when... In my life, I try to...\n\n{p:callout}חיבור לחיים שלכם = יותר מה להגיד ויותר נקודות.'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: ['This clip', 'reminds me of', 'a time', 'when', 'my friend', 'helped me.']
						},
						{
							type: 'speak',
							prompt: "What can teenagers learn from 'The Lost Wallet'? Explain.",
							tip: 'I think people can learn that... This reminds me of a time when...',
							targetSeconds: 25,
							checklist: ['מה לומדים', 'חיבור לחיים שלי'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### בנק המשפטים לסט 2 🏦\n\nתבנית מוכנה לכל שאלה בסט 2. איתה תמיד יש מה להגיד - גם על קליפ שהבנתם רק חצי ממנו.'
						},
						{
							type: 'steps',
							steps: [
								'**FEELING** - *I think he / she feels ___ because ___.*',
								'**PROOF** - *I can see this because in the clip ___.*',
								'**IF** - *If I were ___, I would ___ because ___.*',
								'**MESSAGE** - *The message of the clip is that ___.*',
								'**MY LIFE** - *This reminds me of ___. / I think people can learn that ___.*'
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'I can see this because',
									he: 'אני רואה את זה כי'
								},
								{
									en: 'If I were',
									he: 'אילו הייתי'
								},
								{
									en: 'The message is that',
									he: 'המסר הוא ש...'
								},
								{
									en: 'It reminds me of',
									he: 'זה מזכיר לי'
								},
								{
									en: 'People can learn that',
									he: 'אנשים יכולים ללמוד ש...'
								}
							]
						},
						{
							type: 'order',
							prompt: 'איך אומרים: "המסר הוא שצריך לעזור לאחרים"?',
							tiles: ['The message', 'is that', 'we should', 'help', 'others.']
						},
						{
							type: 'preface',
							text: '{p:callout}{i:star}את המשפטים האהובים שמרו ב**בנק הביטויים**: הכפתור "ביטויים" בכל מסך דיבור.'
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
							text: '### המסר ☀️\n\n{p:text}The message of the clip is that... The clip suggests that... The creators want to show that...\n\nתשובה חזקה: **המסר + ראיה מהקליפ + חיבור לחיים**.\n\nבנק מסרים: מעשה טוב קטן משנה חיים, כולם צריכים להשתייך, לא לשפוט מהר מדי, אומץ הוא לעשות את הנכון כשאחרים לא.'
						},
						{
							type: 'mcq',
							prompt: 'Which is the best message?',
							options: [
								'Guitars are popular.',
								'One small act of kindness can help someone belong.',
								'Cafeterias should be bigger.'
							],
							correctIndex: 1,
							explanation: 'מסר הוא לקח לחיים, שהסיפור תומך בו.'
						},
						{
							type: 'speak',
							prompt: 'What do you think the message of the clip is? Explain.',
							tip: 'מסר + ראיה + חיים אמיתיים. שני מסרים אפשריים? הזכירו את שניהם - זה עומק.',
							targetSeconds: 30,
							checklist: ['המסר', 'ראיה מהקליפ', 'חיבור לחיים'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### שאלות "אילו הייתם..."\n\nשאלה מדוגמה רשמית:\n\n{p:text}"If you were the boy, what would you do with the money? Explain."\n\n{p:text}If I were Noa, I would... because... I would probably also... although... It would take courage to... but...\n\nאין תשובה אחת נכונה. מותר להודות שזה לא קל.'
						},
						{
							type: 'mcq',
							prompt:
								"**If you were one of Noa's friends, how would you react when she went to sit with Maya?**\n\nאיזו תשובה הכי בוגרת?",
							options: [
								'If I were one of her friends, I would probably join them, although it would feel a little uncomfortable at first, because Maya looked lonely.',
								'I would join them.',
								'I would laugh, because it is funny.'
							],
							correctIndex: 0,
							explanation: 'כנות + סיבה + הכרה בכך שזה לא קל = תשובה בוגרת.'
						},
						{
							type: 'speak',
							prompt:
								"If you were one of Noa's friends, how would you react when she went to sit with Maya? Explain.",
							tip: 'שלבו although או but.',
							targetSeconds: 30,
							checklist: ['If I were..., I would...', 'סיבה', 'although / but'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### מה אפשר ללמוד? חיבור לחברה\n\nשאלה מדוגמה רשמית:\n\n{p:text}"What do you think (other) parents can learn from it? Explain."\n\n{p:text}I think students / schools / parents can learn that... This is relevant to teenagers because... In my school, for example,...'
						},
						{
							type: 'order',
							prompt: 'בנו את המשפט.',
							tiles: [
								'Schools',
								'could',
								'create',
								'buddy programmes',
								'so that',
								'new students',
								'never',
								'sit alone.'
							]
						},
						{
							type: 'speak',
							prompt: 'What can schools learn from this clip? Explain.',
							tip: 'learn that... + דוגמה מהחיים האמיתיים.',
							targetSeconds: 30,
							checklist: ['learn that...', 'דוגמה מהחיים'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### בנק המשפטים לרמה 2 🏦\n\nאיתו אפשר לענות לעומק על כל שאלה של רמה 2.'
						},
						{
							type: 'steps',
							steps: [
								'**FEELING** - *I think he / she feels... because...*',
								'**EVIDENCE** - *We can see this when... / Her body language shows...*',
								'**CHANGE** - *At first..., but by the end...*',
								'**MEANING** - *This suggests that... / The clip shows that...*',
								'**IF** - *If I were..., I would... although...*',
								'**MESSAGE** - *The message of the clip is that...*',
								'**SOCIETY** - *This is relevant to teenagers because...*'
							]
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'This suggests that',
									he: 'זה מרמז ש...'
								},
								{
									en: 'We can see this when',
									he: 'אפשר לראות את זה כש...'
								},
								{
									en: 'by the end',
									he: 'עד הסוף'
								},
								{
									en: 'relevant to',
									he: 'רלוונטי ל...'
								}
							]
						},
						{
							type: 'order',
							prompt: 'איך אומרים: "זה מרמז שאפילו מעשה קטן יכול לשנות הרבה"?',
							tiles: ['This suggests', 'that', 'even', 'a small act', 'can change', 'a lot.']
						},
						{
							type: 'preface',
							text: '{p:callout}{i:star}את המשפטים האהובים שמרו ב**בנק הביטויים**: הכפתור "ביטויים" בכל מסך דיבור.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'cobe-c-practice',
		section: 'cobe-3',
		required: ['cobe-c-interpret'],
		position: {
			x: 0,
			y: 1880
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '### סט 2: תשובה לדוגמה\n\nשאלות (לפי הדוגמה הרשמית):\n\n{p:text}"How do you think the girl feels at the end of the clip? Explain. If you were the girl, what would you do? Explain."\n\n{p:callout}שתי שאלות ← שתיהן נענות, כל אחת עם סיבה, וסיום חיובי.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו בתשובה לדוגמה: הרגש, ההוכחה, "אילו הייתי" והמסר.',
							text: "I think the girl feels proud because she helped an old man. I can see this because she smiles. If I were the girl, I would also return the wallet, because it's the right thing to do. I think the message is that small acts of kindness are important.",
							correctIndices: [],
							categories: [
								{
									name: 'FEELING',
									color: 'amber',
									indices: [5]
								},
								{
									name: 'PROOF',
									color: 'sky',
									indices: [12, 13, 14]
								},
								{
									name: 'IF I WERE',
									color: 'violet',
									indices: [19, 20, 21]
								},
								{
									name: 'MESSAGE',
									color: 'emerald',
									indices: [39, 40]
								}
							]
						},
						{
							type: 'preface',
							text: '### סט 2: תורכם\n\nמכוונים ל-40-90 שניות.'
						},
						{
							type: 'speak',
							prompt:
								'How do you think the old man feels at the end of the clip? Explain. If you were the old man, what would you do to thank the girl? Explain.',
							tip: 'I think he feels... because... I can see this because... If I were the old man, I would...',
							targetSeconds: 60,
							modelAnswer:
								'I think the old man feels grateful and relieved at the end of the clip, because he got his wallet back. I can see this because he smiles and gives the girl cookies. If I were the old man, I would invite her family for coffee, because she did something very kind.',
							checklist: ['רגש', 'because', 'הוכחה', 'If I were..., I would...', 'סיבה גם לזה'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### עזרה! לא הבנתי את הקליפ 🛟\n\nלא נבהלים - **תמיד אפשר להגיד משהו.**'
						},
						{
							type: 'steps',
							steps: [
								'😕 הבנתי רק חלק ← מתארים מה ראיתם: *"From what I saw, there is a man and a girl in the street..."*',
								'🤔 לא בטוחים מה קרה ← *"I think... / It seems that... / Maybe..."*',
								'❓ לא יודעים מה המסר ← בוחרים מהבנק: *"I think the message is that we should help each other."*',
								'🔤 אין מילה ← מתארים: *"a thing for carrying money"* (= wallet)',
								'🧠 שכחתם את הסוף ← *"I don\'t remember exactly how it ends, but I think..."*',
								'⏳ נשאר מעט זמן ← משפט קצר לכל שאלה (לענות רק על אחת = מינוס 50%)'
							]
						},
						{
							type: 'mcq',
							prompt: 'הבנתם רק חלק מהקליפ. מה אומרים?',
							options: [
								'From what I saw, there is a man and a girl in the street...',
								'I did not understand, sorry.',
								'Nothing - I skip Part C.'
							],
							correctIndex: 0,
							explanation:
								'מתארים מה שראיתם. שתיקה מקבלת אפס - ומי שלא עונה בכלל על חלק ג׳ נכשל בכל ה-COBE.'
						},
						{
							type: 'mcq',
							prompt: 'אתם לא יודעים מה המסר. מה אומרים?',
							options: [
								'I think the message is that we should help each other.',
								"I don't know the message.",
								'The message is the wallet.'
							],
							correctIndex: 0,
							explanation: 'בוחרים מסר מהבנק. ניחוש עם סיבה מקבל נקודות.'
						},
						{
							type: 'mcq',
							prompt: 'שכחתם איך הקליפ נגמר. מה אומרים?',
							options: [
								"I don't remember exactly how it ends, but I think the man gets his wallet back.",
								'From what I saw, there is a man and a girl in the street.',
								'It seems that the bus is late.'
							],
							correctIndex: 0,
							explanation: 'אומרים בכנות שלא זוכרים, ונותנים ניחוש הגיוני.'
						},
						{
							type: 'speak',
							prompt:
								"From what I saw... It seems that... I think the message is that we should help each other. I don't remember exactly how it ends, but I think...",
							tip: 'אמרו את ארבעת משפטי ההצלה בקול.',
							targetSeconds: 15,
							part: 'C'
						},
						{
							type: 'preface',
							text: '### תחנת סיום - חלק ג׳ 🏆\n\nמצב בחינה: צופים בקליפ ← מקליטים את **סט 1** ← מקליטים את **סט 2** ← מקשיבים ובודקים.\n\n{p:callout}{i:warn}מקליטים את **שני** הסטים. מי שלא עונה בכלל על חלק ג׳ **נכשל בכל ה-COBE** (כלל חדש מהשנה). גם תשובה קצרה מקבלת נקודות!'
						},
						{
							type: 'video',
							caption: 'הקליפ של תחנת הסיום.'
						},
						{
							type: 'speak',
							prompt:
								'Many things happened in the clip. Describe the events in the clip you just watched. What is the outcome of these events?',
							targetSeconds: 60,
							checklist: ['התחלה, אמצע וסוף', 'תוצאה'],
							part: 'C',
							listen: true
						},
						{
							type: 'speak',
							prompt:
								'How do you think the main character feels at the end of the clip? Explain. What do you think the message of the clip is? Explain.',
							targetSeconds: 60,
							checklist: ['רגש + because', 'הוכחה', 'המסר', 'עניתי על כל השאלות'],
							part: 'C',
							listen: true
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
							text: '### רמה 2: תשובה לדוגמה\n\nשאלות (לפי הדוגמה הרשמית):\n\n{p:text}"What do you think the message of the clip is? Explain. What do you think students can learn from it? Explain."\n\n{p:callout}כל טענה נתמכת במשהו שראינו.'
						},
						{
							type: 'mark-all',
							instruction: 'סמנו בתשובה לדוגמה: המסר, נקודת המפנה, השינוי והלקח.',
							text: 'I think the message of the clip is that one small act of kindness can help someone belong. At first, Maya is completely isolated. The turning point is when Noa decides to sit with her. By the end, Maya is performing on stage with friends. I think students can learn that it takes courage to include someone new.',
							correctIndices: [],
							categories: [
								{
									name: 'MESSAGE',
									color: 'emerald',
									indices: [2, 3]
								},
								{
									name: 'TURNING POINT',
									color: 'rose',
									indices: [24, 25, 26]
								},
								{
									name: 'CHANGE',
									color: 'sky',
									indices: [35, 36, 37]
								},
								{
									name: 'LESSON',
									color: 'amber',
									indices: [48, 49]
								}
							]
						},
						{
							type: 'preface',
							text: '### רמה 2: תורכם\n\nמכוונים ל-60-90 שניות.'
						},
						{
							type: 'speak',
							prompt:
								'How do you think Noa feels when she decides to sit with Maya? Explain. If you were Noa, would you have done the same? Explain.',
							tip: 'hesitant, courage, although, If I were...',
							targetSeconds: 75,
							modelAnswer:
								'I think Noa feels hesitant when she decides to sit with Maya, because her friends are whispering and laughing. We can see this because she stops for a moment before she walks over. If I were Noa, I would like to think I would do the same, although it would take courage. Being kind is more important than what other people think.',
							checklist: ['רגש', 'ראיה', 'If I were..., I would...', 'סיבה', 'although בכנות'],
							part: 'C'
						},
						{
							type: 'preface',
							text: '### עזרה! לא הבנתי הכול 🛟\n\nתשובה זהירה (*"it seems that..."*) היא כנה **ומקבלת נקודות**.'
						},
						{
							type: 'steps',
							steps: [
								'😕 הבנתי חלק ← *"From what I could see, ..."*',
								'🤔 לא בטוחים ← *"Based on the clip, it seems that... / It appears that..."*',
								'🙈 הקליפ לא מראה את זה ← *"The clip doesn\'t show this clearly, but I think..."*',
								'❓ לא בטוחים במסר ← *"One possible message is... Another could be..."*',
								'🔤 חסרה מילה ← *"It\'s a kind of..."*',
								'⏳ מעט זמן ← משפט מפותח אחד לכל שאלה (חלקי = מינוס 50%)'
							]
						},
						{
							type: 'mcq',
							prompt: 'הקליפ לא מראה בבירור מה הדמות מרגישה. מה אומרים?',
							options: [
								"The clip doesn't show this clearly, but I think she feels nervous, because she looks away.",
								"I don't know.",
								'One possible message is...'
							],
							correctIndex: 0,
							explanation: 'אומרים בזהירות, ותומכים בראיה (שפת גוף).'
						},
						{
							type: 'mcq',
							prompt: 'אתם מתלבטים בין שני מסרים. מה אומרים?',
							options: [
								'One possible message is that kindness matters. Another could be that we should not judge people too quickly.',
								'The message is the guitar.',
								'From what I could see, ...'
							],
							correctIndex: 0,
							explanation: 'שני מסרים אפשריים = עומק.'
						},
						{
							type: 'mcq',
							prompt: 'נשאר מעט זמן ויש עוד שאלה. מה עושים?',
							options: [
								'I give one developed sentence for every question.',
								'I answer only the first question in detail.',
								'I stop recording.'
							],
							correctIndex: 0,
							explanation: 'עונים על כל שאלה, גם בקצרה. תשובה חלקית = מינוס 50%.'
						},
						{
							type: 'speak',
							prompt:
								"From what I could see... Based on the clip, it seems that... The clip doesn't show this clearly, but I think... One possible message is... Another could be...",
							tip: 'אמרו את משפטי ההצלה בקול, ברצף.',
							targetSeconds: 15,
							part: 'C'
						},
						{
							type: 'preface',
							text: '### תחנת סיום - חלק ג׳ 🏆\n\nמצב בחינה: צופים ← מקליטים את **רמה 1** ← מקליטים את **רמה 2** ← בודקים.\n\n{p:callout}{i:warn}מקליטים את **שני** הסטים. מי שלא עונה בכלל על חלק ג׳ **נכשל בכל ה-COBE** (כלל חדש מהשנה). גם תשובה קצרה מקבלת נקודות!'
						},
						{
							type: 'video',
							caption: 'הקליפ של תחנת הסיום.'
						},
						{
							type: 'speak',
							prompt:
								'Describe the major events in the clip you have just watched. What is the outcome of these events?',
							targetSeconds: 75,
							checklist: ['האירועים העיקריים לפי הסדר', 'נקודת מפנה', 'תוצאה'],
							part: 'C',
							listen: true
						},
						{
							type: 'speak',
							prompt:
								'What do you think the message of the clip is? Explain. What do you think students can learn from it? Explain.',
							targetSeconds: 75,
							checklist: ['פרשנות', 'ראיה', 'עניתי על כל השאלות', 'כמעט בלי הפסקות ארוכות'],
							part: 'C',
							listen: true
						}
					],
					retryMissed: true
				}
			]
		}
	}
];
