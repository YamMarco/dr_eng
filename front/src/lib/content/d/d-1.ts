// Module D, unit 1: The Road Not Taken - Robert Frost (1916).
// Source: EngUp_Literature_Developer_Package (04_Data/module_D/unit1_the_road_not_taken.json).
import type { LessonNode } from '../types';

export const d1Lessons: LessonNode[] = [
	{
		id: 'd-road-before',
		section: 'd-1',
		titleEn: 'Before Reading',
		required: [],
		position: {
			x: -240,
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
							text: '## גם לכם קרה שהייתם צריכים לבחור?\n{d:rtl}כולנו עומדים לפעמים מול בחירה: איזו מגמה ללמוד, עם מי להיות חברים, האם לנסוע או להישאר. כשבוחרים דבר אחד - מוותרים על דבר אחר.\n\n{d:rtl}השיר שנלמד עכשיו מדבר בדיוק על זה. אדם עומד ביער, מול שתי דרכים, וחייב לבחור באחת מהן.\n\n{p:text}In this poem, a man stands in a forest. The road in front of him splits into two roads. He must choose one.'
						},
						{
							type: 'preface',
							text: '{p:text}**Which choice was hard for you?**\n{d:rtl}איזו בחירה הייתה קשה לכם?\n{p:ul}Which subjects to study\n{p:ul}Which friends to spend time with\n{p:ul}Where to live or travel\n{p:ul}What to do after school\n{p:callout}אין כאן תשובה נכונה או לא נכונה. שמרו את הבחירה הזאת בראש - בסוף היחידה תוכלו להשתמש בה בתשובה בסגנון הבגרות!'
						},
						{
							type: 'preface',
							text: '## המשורר ומילות המפתח\n### ✍️ Robert Frost (1874-1963)\n{p:text}An American poet. He wrote about nature and about simple people in the countryside of New England.\n{d:rtl}משורר אמריקאי מפורסם מאוד. הוא כתב על הטבע ועל החיים בכפר, אבל מאחורי התיאורים הפשוטים בדרך כלל מסתתר רעיון גדול על החיים.'
						},
						{
							type: 'preface',
							text: '### 🌲 A story behind the poem\n{p:text}Frost often walked in the woods with his friend, the poet Edward Thomas. Thomas often could not decide which path to take, and later he was sorry he had not taken the other one.\n{d:rtl}פרוסט נהג לטייל ביער עם חבר, המשורר אדוארד תומס. תומס התלבט לא פעם באיזה שביל ללכת, ואחר כך הצטער שלא הלך בשביל השני. השיר נכתב בעקבות הטיולים האלה ב־1915, ופורסם בספר ב־1916.'
						},
						{
							type: 'preface',
							text: '{d:rtl}לפני שקוראים - הכירו את המילים החשובות. כרטיס אחרי כרטיס, ואחר כך תרגול קצר.'
						},
						{
							type: 'word-card',
							word: 'diverge',
							translationHe: 'להתפצל',
							exampleEn: 'Two roads diverged = the road split into two.'
						},
						{
							type: 'word-card',
							word: 'traveler',
							translationHe: 'הולך / נוסע בדרך',
							exampleEn: 'He is one **traveler**, so he can walk on only one road.'
						},
						{
							type: 'word-card',
							word: 'undergrowth',
							translationHe: 'סבך שיחים מתחת לעצים',
							exampleEn: 'The road bent and disappeared in the **undergrowth**.'
						},
						{
							type: 'word-card',
							word: 'fair',
							translationHe: 'יפה (כאן: טוב באותה מידה)',
							exampleEn: 'as just as **fair** = just as good / beautiful'
						},
						{
							type: 'word-card',
							word: 'claim',
							translationHe: 'סיבה / זכות',
							exampleEn: 'the better **claim** = a better reason to be chosen'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'diverge',
									he: 'להתפצל'
								},
								{
									en: 'traveler',
									he: 'הולך / נוסע בדרך'
								},
								{
									en: 'undergrowth',
									he: 'סבך שיחים מתחת לעצים'
								},
								{
									en: 'fair',
									he: 'יפה (כאן: טוב באותה מידה)'
								},
								{
									en: 'claim',
									he: 'סיבה / זכות'
								}
							]
						},
						{
							type: 'word-card',
							word: 'wear',
							translationHe: 'שחיקה (מהליכה)',
							exampleEn: 'wanted **wear** = needed people to walk on it'
						},
						{
							type: 'word-card',
							word: 'trodden',
							translationHe: 'שדרכו עליו',
							exampleEn: 'no step had **trodden** = nobody had walked there'
						},
						{
							type: 'word-card',
							word: 'doubt',
							translationHe: 'להטיל ספק, לא להיות בטוח',
							exampleEn: 'I doubted = I was not sure'
						},
						{
							type: 'word-card',
							word: 'sigh',
							translationHe: 'אנחה',
							exampleEn: 'a long breath that shows sadness or mixed feelings'
						},
						{
							type: 'word-card',
							word: 'ages hence',
							translationHe: 'בעוד הרבה שנים',
							exampleEn: 'ages and **ages hence** = many, many years from now'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'wear',
									he: 'שחיקה (מהליכה)'
								},
								{
									en: 'trodden',
									he: 'שדרכו עליו'
								},
								{
									en: 'doubt',
									he: 'להטיל ספק, לא להיות בטוח'
								},
								{
									en: 'sigh',
									he: 'אנחה'
								},
								{
									en: 'ages hence',
									he: 'בעוד הרבה שנים'
								}
							]
						},
						{
							type: 'mcq',
							prompt: '"Two roads diverged" - what does "diverged" mean?',
							options: [
								['came together', 'זה בדיוק ההפך: ״להתפצל״ זה להיפרד, לא להתחבר.'],
								['disappeared', 'הדרכים לא נעלמו - הן ממשיכות, כל אחת לכיוון אחר.'],
								'split into two directions',
								['were closed', 'אין שום מילה בשורה שמדברת על דרך סגורה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}diverge = להתפצל. דרך אחת נפרדת לשתי דרכים, ולכן ההולך חייב לבחור.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Two roads diverged in a yellow wood," (line 1)\n{p:callout}**טיפ לבגרות:** diverge היא מילה חשובה בשיר: היא מופיעה גם בשורה 1 וגם בשורה 18. כדאי לזכור אותה!',
							hint: '{d:rtl}חשבו על צומת שבו הכביש נפרד לשני כיוונים.'
						},
						{
							type: 'mcq',
							prompt: '"I doubted if I should ever come back." - "I doubted" means…',
							options: [
								'I was not sure',
								['I was sure', 'זה ההפך: doubt = לא להיות בטוח.'],
								['I was happy', 'המילה לא מתארת שמחה.'],
								['I was angry', 'המילה לא מתארת כעס.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}doubt = להטיל ספק. הדובר לא בטוח שיחזור אי־פעם לדרך הראשונה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I doubted if I should ever come back." (line 15)\n{p:callout}**טיפ לבגרות:** במבחן, אם אתם לא בטוחים במילה - קראו את כל השורה ואת השורה שלפניה. ההקשר עוזר!',
							hint: '{d:rtl}doubt קרוב למילה ״ספק״.'
						},
						{
							type: 'mcq',
							prompt: '"I shall be telling this with a sigh" - what is a sigh?',
							options: [
								['a loud laugh', 'צחוק הוא laugh, לא sigh.'],
								['a happy song', 'song הוא שיר ששרים, לא אנחה.'],
								['a shout', 'צעקה היא shout.'],
								'a long breath that shows feelings'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}sigh = אנחה. נושמים עמוק ומוציאים אוויר, כשמרגישים עצב, הקלה או רגשות מעורבים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I shall be telling this with a sigh" (line 16)\n{p:callout}**טיפ לבגרות:** המילה sigh חשובה מאוד להבנת הרגשות של הדובר בסוף השיר.',
							hint: '{d:rtl}מה אתם עושים כשאתם נזכרים במשהו ואומרים ״אוף...״ או ״אח...״?'
						},
						{
							type: 'mcq',
							prompt:
								'"Because it was grassy and wanted wear" - what does "wanted wear" mean here?',
							options: [
								['People wanted new clothes.', 'כאן wear לא קשור לבגדים - זה ״שחיקה״ מהליכה.'],
								'The road needed people to walk on it.',
								['The road was broken.', 'הדרך לא שבורה - היא מכוסה דשא.'],
								['The speaker was tired.', 'השורה מתארת את הדרך, לא את הדובר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הדרך הייתה מכוסה דשא, כלומר כמעט לא הלכו בה. היא כאילו ״רצתה״ שידרכו עליה. כאן want = need (להיות צריך).\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Because it was grassy and wanted wear;" (line 8)\n{p:callout}**טיפ לבגרות:** בשירה, מילים מוכרות מקבלות לפעמים משמעות אחרת. תמיד בדקו את ההקשר.',
							hint: '{d:rtl}הדרך הייתה מכוסה דשא. מה זה אומר על כמה אנשים הלכו בה?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-road-read',
		section: 'd-1',
		titleEn: 'Understand the Poem',
		required: ['d-road-before'],
		position: {
			x: -240,
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
							text: '## קוראים את השיר\n{d:rtl}קראו את השיר כולו. לחצו על כל שורה כדי לראות מה היא אומרת בעברית פשוטה. אל תדאגו אם לא הבנתם הכול - בשלב הבא נעבור על כל בית בנפרד.\n\n{p:callout}לשיר יש 4 בתים (stanzas), ובכל בית 5 שורות. בכל תשובה כדאי לציין מספר שורה, למשל: (line 3).'
						},
						{
							type: 'poem',
							title: 'The Road Not Taken - Robert Frost',
							stanzas: [
								{
									label: 'Stanza 1',
									lines: [
										{
											n: 1,
											en: 'Two roads diverged in a yellow wood,',
											he: 'עמדתי ביער בסתיו, והדרך שלי התפצלה לשתי דרכים.'
										},
										{
											n: 2,
											en: 'And sorry I could not travel both',
											he: 'הצטערתי שאני לא יכול ללכת בשתיהן,'
										},
										{
											n: 3,
											en: 'And be one traveler, long I stood',
											he: 'כי אני רק אדם אחד. עמדתי שם הרבה זמן והתלבטתי,'
										},
										{
											n: 4,
											en: 'And looked down one as far as I could',
											he: 'וניסיתי לראות כמה שיותר רחוק לאן הדרך הראשונה מובילה -'
										},
										{
											n: 5,
											en: 'To where it bent in the undergrowth;',
											he: 'עד המקום שבו היא פונה ונעלמת בין השיחים.'
										}
									]
								},
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 6,
											en: 'Then took the other, as just as fair,',
											he: 'בסוף בחרתי בדרך השנייה, שהייתה יפה וטובה בדיוק כמו הראשונה,'
										},
										{
											n: 7,
											en: 'And having perhaps the better claim,',
											he: 'ואולי אפילו הייתה לי סיבה קצת יותר טובה לבחור בה,'
										},
										{
											n: 8,
											en: 'Because it was grassy and wanted wear;',
											he: 'כי היה בה דשא - נראה שפחות אנשים הלכו בה.'
										},
										{
											n: 9,
											en: 'Though as for that the passing there',
											he: 'אבל האמת היא שאם בודקים כמה אנשים עברו שם,'
										},
										{
											n: 10,
											en: 'Had worn them really about the same,',
											he: 'בשתי הדרכים הלכו בערך אותו דבר.'
										}
									]
								},
								{
									label: 'Stanza 3',
									lines: [
										{
											n: 11,
											en: 'And both that morning equally lay',
											he: 'ובאותו בוקר שתי הדרכים נראו אותו דבר:'
										},
										{
											n: 12,
											en: 'In leaves no step had trodden black.',
											he: 'מכוסות בעלים שאף אחד עוד לא דרך עליהם.'
										},
										{
											n: 13,
											en: 'Oh, I kept the first for another day!',
											he: 'אמרתי לעצמי: לדרך הראשונה אחזור בפעם אחרת!'
										},
										{
											n: 14,
											en: 'Yet knowing how way leads on to way,',
											he: 'אבל ידעתי שבחיים דרך אחת מובילה לעוד דרך, ועוד דרך,'
										},
										{
											n: 15,
											en: 'I doubted if I should ever come back.',
											he: 'ולכן לא באמת האמנתי שאחזור לשם אי־פעם.'
										}
									]
								},
								{
									label: 'Stanza 4',
									lines: [
										{
											n: 16,
											en: 'I shall be telling this with a sigh',
											he: 'אני אספר את הסיפור הזה באנחה (עם רגשות מעורבים),'
										},
										{
											n: 17,
											en: 'Somewhere ages and ages hence:',
											he: 'בעוד הרבה מאוד שנים, ואגיד:'
										},
										{
											n: 18,
											en: 'Two roads diverged in a wood, and I—',
											he: 'שתי דרכים התפצלו ביער, ואני -'
										},
										{
											n: 19,
											en: 'I took the one less traveled by,',
											he: 'אני בחרתי בדרך שפחות אנשים הלכו בה,'
										},
										{
											n: 20,
											en: 'And that has made all the difference.',
											he: 'וזה מה ששינה את כל החיים שלי.'
										}
									]
								}
							]
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Stanza 1',
									lines: [
										{
											n: 1,
											en: 'Two roads diverged in a yellow wood,',
											he: 'עמדתי ביער בסתיו, והדרך שלי התפצלה לשתי דרכים.'
										},
										{
											n: 2,
											en: 'And sorry I could not travel both',
											he: 'הצטערתי שאני לא יכול ללכת בשתיהן,'
										},
										{
											n: 3,
											en: 'And be one traveler, long I stood',
											he: 'כי אני רק אדם אחד. עמדתי שם הרבה זמן והתלבטתי,'
										},
										{
											n: 4,
											en: 'And looked down one as far as I could',
											he: 'וניסיתי לראות כמה שיותר רחוק לאן הדרך הראשונה מובילה -'
										},
										{
											n: 5,
											en: 'To where it bent in the undergrowth;',
											he: 'עד המקום שבו היא פונה ונעלמת בין השיחים.'
										}
									]
								}
							],
							title: 'בתים 1-2: עומדים בפיצול הדרכים'
						},
						{
							type: 'preface',
							text: '### 1️⃣ Stanza 1\n{p:text}The speaker is in a yellow wood. The road splits into two. He is sorry that he cannot walk on both roads. He stands for a long time and looks down one road as far as he can.\n{d:rtl}הדובר ביער בסתיו. הדרך מתפצלת. הוא מצטער שהוא לא יכול ללכת בשתי הדרכים, ולכן עומד הרבה זמן ומנסה לראות לאן הדרך הראשונה מובילה. אבל הוא לא יכול לראות את הסוף - הדרך נעלמת בין השיחים.'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 6,
											en: 'Then took the other, as just as fair,',
											he: 'בסוף בחרתי בדרך השנייה, שהייתה יפה וטובה בדיוק כמו הראשונה,'
										},
										{
											n: 7,
											en: 'And having perhaps the better claim,',
											he: 'ואולי אפילו הייתה לי סיבה קצת יותר טובה לבחור בה,'
										},
										{
											n: 8,
											en: 'Because it was grassy and wanted wear;',
											he: 'כי היה בה דשא - נראה שפחות אנשים הלכו בה.'
										},
										{
											n: 9,
											en: 'Though as for that the passing there',
											he: 'אבל האמת היא שאם בודקים כמה אנשים עברו שם,'
										},
										{
											n: 10,
											en: 'Had worn them really about the same,',
											he: 'בשתי הדרכים הלכו בערך אותו דבר.'
										}
									]
								}
							]
						},
						{
							type: 'preface',
							text: '### 2️⃣ Stanza 2\n{p:text}He takes the other road. Maybe it is a little better, because it is grassy. But then he says that, really, both roads are about the same.\n{d:rtl}הוא בוחר בדרך השנייה. בהתחלה הוא אומר שאולי היא קצת יותר טובה, כי פחות הלכו בה. אבל מיד הוא מתקן את עצמו: האמת היא ששתי הדרכים כמעט זהות. שימו לב לזה - זה יהיה חשוב בהמשך!'
						},
						{
							type: 'mcq',
							prompt: 'Where is the speaker?',
							options: [
								['in a city', 'אין בשיר בניינים או רחובות.'],
								'in a forest in autumn',
								['at school', 'אין בשיר שום רמז לבית ספר.'],
								['on a beach', 'wood זה יער, לא חוף.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}wood = יער. ״yellow wood״ - העלים צהובים, כלומר זה סתיו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Two roads diverged in a yellow wood," (line 1)\n{p:callout}**טיפ לבגרות:** שאלת Where? = מחפשים מילת מקום בטקסט.',
							hint: '{p:ul}**Where** - איפה ← מחפשים מקום\n{d:rtl}מצאו בשורה 1 את מילת המקום.'
						},
						{
							type: 'mcq',
							prompt: 'Why is the speaker "sorry"?',
							options: [
								[
									'He is lost in the forest.',
									'הוא לא אבוד - הוא יודע איפה הוא, הוא רק צריך לבחור.'
								],
								['He is very tired.', 'השיר לא מדבר על עייפות.'],
								['He lost his friend.', 'אין בשיר חבר שהלך לאיבוד.'],
								'He cannot travel on both roads.'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}הוא מצטער כי הוא אדם אחד - ״one traveler״ - ולכן יכול ללכת רק בדרך אחת. הוא היה רוצה לנסות את שתיהן.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And sorry I could not travel both" (line 2)\n{p:text}"And be one traveler, long I stood" (line 3)\n{p:callout}**טיפ לבגרות:** שאלת Why? צריכה תשובה עם because (כי).',
							hint: '{p:ul}**Why** - למה ← מחפשים סיבה\n{p:ul}**sorry** - מצטער\n{d:rtl}קראו את שורות 2-3 עד הסוף: sorry I could not…'
						},
						{
							type: 'mcq',
							prompt: 'In stanza 2, what does the speaker say about the two roads?',
							options: [
								'They are almost the same.',
								['One road is much longer.', 'השיר לא אומר שאחת ארוכה יותר.'],
								['One road is dangerous.', 'אין בשיר שום סכנה.'],
								['One road goes home.', 'השיר לא מזכיר בית.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הוא אומר שאולי לדרך השנייה יש יתרון קטן (יש בה דשא), אבל ״really about the same״ - באמת, שתיהן כמעט אותו דבר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Then took the other, as just as fair," (line 6)\n{p:text}"Though as for that the passing there" (line 9)\n{p:text}"Had worn them really about the same," (line 10)\n{p:callout}**טיפ לבגרות:** אל תמציאו הבדל שלא כתוב בטקסט! כאן הדובר אומר במפורש שהדרכים כמעט זהות.',
							hint: '{p:ul}**say about** - מה הוא אומר על\n{d:rtl}שימו לב לביטוי really about the same בשורה 10.'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Stanza 3',
									lines: [
										{
											n: 11,
											en: 'And both that morning equally lay',
											he: 'ובאותו בוקר שתי הדרכים נראו אותו דבר:'
										},
										{
											n: 12,
											en: 'In leaves no step had trodden black.',
											he: 'מכוסות בעלים שאף אחד עוד לא דרך עליהם.'
										},
										{
											n: 13,
											en: 'Oh, I kept the first for another day!',
											he: 'אמרתי לעצמי: לדרך הראשונה אחזור בפעם אחרת!'
										},
										{
											n: 14,
											en: 'Yet knowing how way leads on to way,',
											he: 'אבל ידעתי שבחיים דרך אחת מובילה לעוד דרך, ועוד דרך,'
										},
										{
											n: 15,
											en: 'I doubted if I should ever come back.',
											he: 'ולכן לא באמת האמנתי שאחזור לשם אי־פעם.'
										}
									]
								}
							],
							title: 'בתים 3-4: מסתכלים אחורה'
						},
						{
							type: 'preface',
							text: '### 3️⃣ Stanza 3\n{p:text}Both roads are covered with fresh leaves. Nobody has walked there this morning. He tells himself he will come back to the first road another day. But he knows that one road leads to another road, so he will probably never come back.\n{d:rtl}שתי הדרכים מכוסות עלים טריים - אף אחד עוד לא הלך בהן הבוקר. הוא מנחם את עצמו: ״אחזור לדרך הראשונה ביום אחר!״ אבל הוא יודע שבחיים דרך אחת מובילה לעוד דרך, ולכן כנראה שלא יחזור לעולם.'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Stanza 4',
									lines: [
										{
											n: 16,
											en: 'I shall be telling this with a sigh',
											he: 'אני אספר את הסיפור הזה באנחה (עם רגשות מעורבים),'
										},
										{
											n: 17,
											en: 'Somewhere ages and ages hence:',
											he: 'בעוד הרבה מאוד שנים, ואגיד:'
										},
										{
											n: 18,
											en: 'Two roads diverged in a wood, and I—',
											he: 'שתי דרכים התפצלו ביער, ואני -'
										},
										{
											n: 19,
											en: 'I took the one less traveled by,',
											he: 'אני בחרתי בדרך שפחות אנשים הלכו בה,'
										},
										{
											n: 20,
											en: 'And that has made all the difference.',
											he: 'וזה מה ששינה את כל החיים שלי.'
										}
									]
								}
							]
						},
						{
							type: 'preface',
							text: '### 4️⃣ Stanza 4\n{p:text}Now the speaker imagines the future. Many years from now, he will tell this story with a sigh. He will say: "I took the road less traveled, and that made all the difference."\n{d:rtl}עכשיו הדובר מדמיין את העתיד. בעוד הרבה שנים הוא יספר את הסיפור באנחה ויגיד: ״בחרתי בדרך שפחות הלכו בה, וזה שינה את חיי.״ רגע! בבית 2 הוא אמר שהדרכים כמעט זהות... נחזור לזה בהמשך.'
						},
						{
							type: 'mcq',
							prompt: 'What does the speaker plan to do with the first road?',
							options: [
								['never think about it again', 'הוא דווקא חושב עליה - הוא רוצה לחזור אליה.'],
								['tell a friend about it', 'השיר לא מזכיר חבר.'],
								'keep it for another day',
								['close it', 'אי אפשר ״לסגור״ דרך ביער, וזה גם לא כתוב.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״I kept the first for another day!״ - הוא אומר לעצמו שישמור את הדרך הראשונה ליום אחר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Oh, I kept the first for another day!" (line 13)\n{p:callout}**טיפ לבגרות:** כשהשאלה מזכירה ״the first road״, חפשו בשיר את המילה first.',
							hint: '{p:ul}**plan** - תוכנית\n{p:ul}**first road** - הדרך הראשונה\n{d:rtl}חפשו את שורה 13 - עם סימן הקריאה.'
						},
						{
							type: 'mcq',
							prompt: 'Why does the speaker doubt that he will come back?',
							options: [
								['The road is dangerous.', 'אין בשיר שום סכנה.'],
								['He forgot the way.', 'הוא לא שכח - הוא יודע שהחיים ממשיכים קדימה.'],
								'One way leads to another way, so life keeps moving forward.',
								['He does not like the forest.', 'השיר לא אומר שהוא לא אוהב את היער.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״way leads on to way״ - כל דרך מובילה לעוד דרך. כך גם בחיים: כל בחירה מובילה לבחירות חדשות, ולכן קשה מאוד לחזור לנקודת ההתחלה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Yet knowing how way leads on to way," (line 14)\n{p:text}"I doubted if I should ever come back." (line 15)\n{p:callout}**טיפ לבגרות:** המילה Yet (אבל) מסמנת שינוי כיוון. מה שבא אחריה הוא בדרך כלל החשוב!',
							hint: '{p:ul}**Why** - למה ← סיבה\n{p:ul}**doubt** - לא בטוח\n{d:rtl}קראו את שורה 14, שמתחילה ב־Yet knowing…'
						},
						{
							type: 'mcq',
							prompt: 'When will the speaker tell this story?',
							options: [
								'many years in the future',
								['tomorrow', 'tomorrow זה מחר - לא כתוב בשיר.'],
								['right now', 'הוא משתמש ב־I shall be telling - זה עתיד.'],
								['never', 'הוא אומר שהוא כן יספר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}״ages and ages hence״ = בעוד הרבה הרבה שנים. הדובר מדמיין את עצמו בעתיד, כשהוא כבר מבוגר, מספר את הסיפור.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I shall be telling this with a sigh" (line 16)\n{p:text}"Somewhere ages and ages hence:" (line 17)\n{p:callout}**טיפ לבגרות:** שאלת When? = מחפשים ביטוי של זמן.',
							hint: '{p:ul}**When** - מתי ← מחפשים זמן\n{d:rtl}מה הפירוש של ages and ages hence?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-road-meaning',
		section: 'd-1',
		titleEn: 'Speaker & Meaning',
		required: ['d-road-read'],
		position: {
			x: -240,
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
							text: '## הדובר והרגשות שלו\n### 🗣️ Who is the speaker?\n{p:text}The speaker is the voice that talks in the poem ("I"). In this poem, he is a traveler who must choose a road.\n{d:rtl}הדובר (the speaker) הוא ה״אני״ שמדבר בשיר. הוא לא בהכרח המשורר עצמו! בתשובות כותבים: The speaker…'
						},
						{
							type: 'preface',
							text: '{d:rtl}הרגשות של הדובר משתנים לאורך השיר. עקבו אחריהם:'
						},
						{
							type: 'steps',
							steps: [
								'**"sorry"** (line 2): sorry / sad\n{d:rtl}מצטער - כי אי אפשר ללכת בשתי הדרכים',
								'**"long I stood"** (line 3): unsure / hesitant\n{d:rtl}מהסס - עומד הרבה זמן ולא מחליט',
								'**"Oh … another day!"** (line 13): hopeful\n{d:rtl}מקווה - אולי יחזור יום אחד',
								'**"I doubted"** (line 15): doubtful\n{d:rtl}מפקפק - יודע שכנראה לא יחזור',
								'**"with a sigh"** (line 16): mixed feelings\n{d:rtl}רגשות מעורבים - גם גאווה וגם געגוע'
							]
						},
						{
							type: 'mcq',
							prompt: 'How does the speaker feel in line 2?',
							options: [
								['proud', 'גאווה לא מופיעה בשורה 2.'],
								['bored', 'מי שמשועמם לא עומד ומתלבט הרבה זמן.'],
								['angry', 'אין בשורה שום מילה של כעס.'],
								'sorry'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}בשורה 2 כתוב ״sorry״ - הוא מצטער שאינו יכול ללכת בשתי הדרכים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And sorry I could not travel both" (line 2)\n{p:callout}**טיפ לבגרות:** בשאלות על רגשות - חפשו קודם מילת רגש בטקסט (sorry, happy, afraid…), ורק אחר כך הסבירו.',
							hint: '{d:rtl}המילה כתובה ממש בשורה!'
						},
						{
							type: 'mcq',
							prompt: 'Why might the speaker "sigh" in the future?',
							options: [
								[
									'He is sure he made a terrible mistake.',
									'זה חזק מדי. השיר לא אומר שזו טעות - הוא גם אומר שהבחירה ״made all the difference״.'
								],
								'He has mixed feelings: he still wonders about the road he did not take.',
								['He is tired from walking.', 'האנחה תהיה בעוד שנים רבות - לא בגלל ההליכה.'],
								['He hates the forest.', 'השיר לא מבטא שנאה ליער.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}אנחה יכולה להביע כמה רגשות יחד. הבחירה שינתה את חייו, אבל הוא תמיד יחשוב מה היה קורה בדרך השנייה. לכן - רגשות מעורבים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I shall be telling this with a sigh" (line 16)\n{p:text}"And that has made all the difference." (line 20)\n{p:callout}**טיפ לבגרות:** ביטוי מצוין לתשובות: mixed feelings (רגשות מעורבים).',
							hint: '{p:ul}**might** - אולי (מבקשים השערה)\n{p:ul}**sigh** - אנחה\n{d:rtl}האם האנחה היא רק עצב? חשבו על השורה האחרונה.'
						},
						{
							type: 'preface',
							text: '## סמלים: יותר מסתם יער\n### 🔑 What is a symbol?\n{p:text}A symbol is a thing that stands for a bigger idea.\n{d:rtl}סמל (symbol) הוא דבר מוחשי שמייצג רעיון גדול יותר. למשל: יונה = שלום, לב = אהבה. בשיר הזה, הטיול ביער הוא בעצם סיפור על החיים.'
						},
						{
							type: 'preface',
							text: '{d:rtl}הנה הסמלים בשיר, ומה כל אחד מהם מסמל:'
						},
						{
							type: 'steps',
							steps: [
								'**🛤️ The two roads**\n{p:text}Two choices in life.\n{d:rtl}שתי אפשרויות בחיים - למשל שני מקצועות, שני מקומות מגורים.',
								'**🍂 The yellow wood**\n{p:text}Autumn - a time of change.\n{d:rtl}סתיו הוא עונה של שינוי - בדיוק כמו רגע של בחירה בחיים.',
								'**🍃 Leaves no step had trodden**\n{p:text}Both choices are new; nobody can tell him which is better.\n{d:rtl}שתי האפשרויות חדשות ולא ידועות - אין מי שיגיד לו מה נכון.',
								"**↪️ Way leads on to way**\n{p:text}One choice leads to more choices; you can't easily go back.\n{d:rtl}בחירה אחת מובילה לעוד בחירות, וקשה לחזור להתחלה.",
								'**😮‍💨 The sigh**\n{p:text}Mixed feelings when we remember our choices.\n{d:rtl}רגשות מעורבים כשנזכרים בבחירות שעשינו.'
							]
						},
						{
							type: 'mcq',
							prompt: 'The two roads are a symbol of…',
							options: [
								['a map', 'מפה היא לא רעיון גדול על החיים.'],
								'two choices in life',
								['two friends', 'בשיר אין שני חברים.'],
								['two seasons', 'יש בשיר רק עונה אחת - סתיו.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}שתי הדרכים מסמלות שתי אפשרויות בחיים. כמו בצומת, צריך לבחור באחת ולוותר על השנייה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Two roads diverged in a yellow wood," (line 1)\n{p:text}"Two roads diverged in a wood, and I—" (line 18)\n{p:callout}**טיפ לבגרות:** כשכותבים על סמל: The ___ is a symbol of ___. This shows that ___.',
							hint: '{p:ul}**symbol** - סמל\n{d:rtl}מה עושים כשעומדים מול שתי דרכים?'
						},
						{
							type: 'mcq',
							prompt: '"Way leads on to way" (line 14) shows that…',
							options: [
								[
									'roads in the forest are long',
									'זה פירוש מילולי בלבד. השאלה היא מה זה מראה על החיים.'
								],
								['the speaker is lost', 'הדובר לא אבוד.'],
								['the forest is very big', 'זה פירוש מילולי בלבד.'],
								'one choice leads to more choices, so it is hard to go back'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}כמו בחיים: בחרתם מגמה ← היא הובילה לחברים חדשים ← הם הובילו לתוכניות חדשות... ולכן קשה לחזור לנקודת ההתחלה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Yet knowing how way leads on to way," (line 14)\n{p:text}"I doubted if I should ever come back." (line 15)\n{p:callout}**טיפ לבגרות:** כשהשאלה אומרת shows that, היא מבקשת את המשמעות העמוקה, לא רק את מה שכתוב.',
							hint: '{p:ul}**shows that** - מראה ש… ← מבקשים משמעות\n{d:rtl}חשבו על החיים, לא רק על היער.'
						},
						{
							type: 'preface',
							text: '## הנושא והמסר\n### 📌 Theme · נושא\n{p:text}Making choices in life.\n{d:rtl}הנושא (theme) הוא ״על מה השיר״: בחירות בחיים.'
						},
						{
							type: 'preface',
							text: '### 💬 Message · מסר\n{p:text}In life we must choose, and every choice means giving something up. Later, we tell a story about our choices to give them meaning.\n{d:rtl}המסר (message) הוא ״מה השיר רוצה ללמד אותנו״: בחיים חייבים לבחור, וכל בחירה היא גם ויתור. ואחר כך, כשאנחנו מספרים על הבחירות שלנו, אנחנו נותנים להן משמעות.'
						},
						{
							type: 'preface',
							text: '### ⚠️ A common mistake\n{p:text}Many people think the message is only "Be different! Take the road nobody takes." But in stanza 2 the roads were almost the same!\n{d:rtl}טעות נפוצה: לחשוב שהמסר הוא רק ״תהיו שונים! לכו בדרך שאף אחד לא הולך בה.״ אבל בבית 2 הדובר אומר שהדרכים היו כמעט זהות. כלומר, השיר מדבר גם על האופן שבו אנחנו מספרים לעצמנו את הסיפור של חיינו. אפשר לכתוב שהמסר הוא ״להעז להיות שונה״ - זה לא שגוי. אבל תשובה חזקה מזכירה גם שהדרכים היו כמעט זהות, ושהדובר ״מייפה״ את הסיפור כשהוא מספר אותו.'
						},
						{
							type: 'mcq',
							prompt: 'What is the main theme of the poem?',
							options: [
								'making choices in life',
								[
									'nature in winter',
									'זה לא חורף - העלים צהובים, כלומר סתיו. וחוץ מזה, הטבע הוא רק הרקע.'
								],
								['friendship', 'אין בשיר חברים.'],
								['travel and holidays', 'זה לא טיול נופש - זו בחירה.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הנושא המרכזי הוא בחירות בחיים. היער והדרכים הם רק הדרך להציג את הרעיון.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Two roads diverged in a yellow wood," (line 1)\n{p:text}"Then took the other, as just as fair," (line 6)\n{p:text}"I took the one less traveled by," (line 19)\n{p:callout}**טיפ לבגרות:** נושא (theme) = מילה או שתיים. מסר (message) = משפט שלם.',
							hint: '{p:ul}**theme** - נושא\n{d:rtl}מה הדובר עושה כמעט בכל השיר?'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence best describes the message of the poem?',
							options: [
								[
									'Always choose the most popular road.',
									'השיר לא אומר ללכת אחרי כולם, וגם לא אומר שיש דרך פופולרית יותר.'
								],
								['It is better never to choose.', 'הדובר כן בוחר - אי אפשר לא לבחור.'],
								'Every choice means giving something up, and later we see our choices as very important.',
								['Forests are dangerous places.', 'אין בשיר סכנה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הדובר בוחר דרך אחת ומוותר על השנייה (שורות 13-15), ובסוף מספר את הסיפור כך שלבחירה יש משמעות גדולה (שורות 19-20).\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Oh, I kept the first for another day!" (line 13)\n{p:text}"Yet knowing how way leads on to way," (line 14)\n{p:text}"I doubted if I should ever come back." (line 15)\n{p:text}"I took the one less traveled by," (line 19)\n{p:text}"And that has made all the difference." (line 20)\n{p:callout}**טיפ לבגרות:** כשיש ״best״ בשאלה - ייתכן שיותר מתשובה אחת נשמעת נכון. בחרו את המלאה ביותר.',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{p:ul}**message** - מסר\n{d:rtl}מסר = מה השיר רוצה ללמד אותנו על החיים.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-road-think',
		section: 'd-1',
		titleEn: 'Think About It',
		required: ['d-road-meaning'],
		position: {
			x: -240,
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
							text: '## מה כתוב בשיר?\n{d:rtl}בשאלות האלה התשובה כתובה בשיר. התפקיד שלכם: למצוא את השורה הנכונה. השיר מופיע במסך הבא - קראו אותו שוב לפני השאלות.'
						},
						{
							type: 'poem',
							title: 'The Road Not Taken - Robert Frost',
							stanzas: [
								{
									label: 'Stanza 1',
									lines: [
										{
											n: 1,
											en: 'Two roads diverged in a yellow wood,',
											he: 'עמדתי ביער בסתיו, והדרך שלי התפצלה לשתי דרכים.'
										},
										{
											n: 2,
											en: 'And sorry I could not travel both',
											he: 'הצטערתי שאני לא יכול ללכת בשתיהן,'
										},
										{
											n: 3,
											en: 'And be one traveler, long I stood',
											he: 'כי אני רק אדם אחד. עמדתי שם הרבה זמן והתלבטתי,'
										},
										{
											n: 4,
											en: 'And looked down one as far as I could',
											he: 'וניסיתי לראות כמה שיותר רחוק לאן הדרך הראשונה מובילה -'
										},
										{
											n: 5,
											en: 'To where it bent in the undergrowth;',
											he: 'עד המקום שבו היא פונה ונעלמת בין השיחים.'
										}
									]
								},
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 6,
											en: 'Then took the other, as just as fair,',
											he: 'בסוף בחרתי בדרך השנייה, שהייתה יפה וטובה בדיוק כמו הראשונה,'
										},
										{
											n: 7,
											en: 'And having perhaps the better claim,',
											he: 'ואולי אפילו הייתה לי סיבה קצת יותר טובה לבחור בה,'
										},
										{
											n: 8,
											en: 'Because it was grassy and wanted wear;',
											he: 'כי היה בה דשא - נראה שפחות אנשים הלכו בה.'
										},
										{
											n: 9,
											en: 'Though as for that the passing there',
											he: 'אבל האמת היא שאם בודקים כמה אנשים עברו שם,'
										},
										{
											n: 10,
											en: 'Had worn them really about the same,',
											he: 'בשתי הדרכים הלכו בערך אותו דבר.'
										}
									]
								},
								{
									label: 'Stanza 3',
									lines: [
										{
											n: 11,
											en: 'And both that morning equally lay',
											he: 'ובאותו בוקר שתי הדרכים נראו אותו דבר:'
										},
										{
											n: 12,
											en: 'In leaves no step had trodden black.',
											he: 'מכוסות בעלים שאף אחד עוד לא דרך עליהם.'
										},
										{
											n: 13,
											en: 'Oh, I kept the first for another day!',
											he: 'אמרתי לעצמי: לדרך הראשונה אחזור בפעם אחרת!'
										},
										{
											n: 14,
											en: 'Yet knowing how way leads on to way,',
											he: 'אבל ידעתי שבחיים דרך אחת מובילה לעוד דרך, ועוד דרך,'
										},
										{
											n: 15,
											en: 'I doubted if I should ever come back.',
											he: 'ולכן לא באמת האמנתי שאחזור לשם אי־פעם.'
										}
									]
								},
								{
									label: 'Stanza 4',
									lines: [
										{
											n: 16,
											en: 'I shall be telling this with a sigh',
											he: 'אני אספר את הסיפור הזה באנחה (עם רגשות מעורבים),'
										},
										{
											n: 17,
											en: 'Somewhere ages and ages hence:',
											he: 'בעוד הרבה מאוד שנים, ואגיד:'
										},
										{
											n: 18,
											en: 'Two roads diverged in a wood, and I—',
											he: 'שתי דרכים התפצלו ביער, ואני -'
										},
										{
											n: 19,
											en: 'I took the one less traveled by,',
											he: 'אני בחרתי בדרך שפחות אנשים הלכו בה,'
										},
										{
											n: 20,
											en: 'And that has made all the difference.',
											he: 'וזה מה ששינה את כל החיים שלי.'
										}
									]
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'How long did the speaker stand before choosing?',
							options: [
								['a short moment', 'הוא אומר ההפך: long I stood.'],
								['all night', 'השיר מתרחש בבוקר, וכתוב רק שעמד הרבה זמן.'],
								'a long time',
								['The poem does not say.', 'השיר כן אומר: long I stood.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״long I stood״ = I stood (for a) long (time). בשירה סדר המילים משתנה לפעמים כדי ליצור קצב וחריזה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And be one traveler, long I stood" (line 3)\n{p:callout}**טיפ לבגרות:** אם משפט בשיר נשמע מוזר - נסו לסדר את המילים מחדש בסדר רגיל.',
							hint: '{p:ul}**How long** - כמה זמן\n{d:rtl}שורה 3. בשירה סדר המילים לפעמים הפוך.'
						},
						{
							type: 'mcq',
							prompt: 'How far could he see down the first road?',
							options: [
								'until it bent into the bushes',
								['to the very end', 'הוא לא יכול לראות את הסוף - הדרך מתעקלת.'],
								['to the next city', 'אין בשיר עיר.'],
								['not at all', 'הוא כן הסתכל: as far as I could.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הוא ראה רק עד המקום שבו הדרך מתעקלת ונעלמת בשיחים. כמו בחיים: אי אפשר לראות לאן בחירה תוביל.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And looked down one as far as I could" (line 4)\n{p:text}"To where it bent in the undergrowth;" (line 5)\n{p:callout}**טיפ לבגרות:** תשובה טובה לא רק מצטטת - היא גם מסבירה מה זה אומר.',
							hint: '{p:ul}**How far** - עד כמה רחוק\n{d:rtl}שורות 4-5: To where it bent…'
						},
						{
							type: 'mcq',
							prompt: 'What covered both roads that morning?',
							options: [
								['snow', 'זה סתיו, לא חורף.'],
								['water', 'אין מים בשיר.'],
								['stones', 'אין אבנים בשיר.'],
								'leaves'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}״In leaves no step had trodden black״ - הדרכים היו מכוסות עלים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And both that morning equally lay" (line 11)\n{p:text}"In leaves no step had trodden black." (line 12)\n{p:callout}**טיפ לבגרות:** שאלה פשוטה? אל תחפשו תשובה מסובכת. התשובה בשורה.',
							hint: '{p:ul}**What** - מה\n{p:ul}**covered** - כיסה\n{d:rtl}שורה 12.'
						},
						{
							type: 'mcq',
							prompt: 'Which line repeats line 1 almost exactly?',
							options: [
								['line 6', 'שורה 6 מתחילה ב־Then took the other.'],
								['line 13', 'שורה 13 מדברת על ״another day״.'],
								'line 18',
								['line 20', 'שורה 20 היא המשפט האחרון.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}שורה 18: ״Two roads diverged in a wood, and I-״. החזרה (repetition) מחברת את ההתחלה לסוף - הדובר חוזר לרגע הבחירה בזיכרון שלו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Two roads diverged in a yellow wood," (line 1)\n{p:text}"Two roads diverged in a wood, and I—" (line 18)\n{p:callout}**טיפ לבגרות:** מונח שימושי: repetition = חזרה. משוררים חוזרים על מילים כדי להדגיש רעיון חשוב.',
							hint: '{p:ul}**repeats** - חוזר על\n{d:rtl}חפשו את Two roads diverged.'
						},
						{
							type: 'preface',
							text: '## מה מסתתר בין השורות?\n{d:rtl}עכשיו התשובה לא כתובה במפורש. צריך להבין ממה שכתוב - כמו בלש שמחפש רמזים 🔍.'
						},
						{
							type: 'mcq',
							prompt: 'Why do you think the speaker stood for a long time?',
							options: [
								['He was waiting for a friend.', 'אין בשיר חבר.'],
								'The choice was difficult and important to him.',
								['He was lost.', 'הוא לא אבוד - הוא יודע שיש שתי דרכים.'],
								['He wanted to rest.', 'השיר לא מדבר על מנוחה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}אדם שעומד זמן רב ומסתכל רחוק ככל שאפשר - מתלבט. זה מראה שהבחירה הייתה קשה וחשובה לו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And be one traveler, long I stood" (line 3)\n{p:text}"And looked down one as far as I could" (line 4)\n{p:callout}**טיפ לבגרות:** Why do you think…? → התחילו ב־I think that… והוסיפו ראיה מהשיר.',
							hint: '{p:ul}**Why do you think** - למה לדעתך ← צריך הסבר שלכם, מבוסס על הטקסט\n{d:rtl}מה עושים כשמחליטים החלטה חשובה?'
						},
						{
							type: 'mcq',
							prompt: '"In leaves no step had trodden black" - what does this tell us?',
							options: [
								['The leaves were burned.', 'black כאן הוא סימן לצעדים, לא לשריפה.'],
								'Nobody had walked on either road that morning.',
								['It was night.', 'כתוב that morning - בבוקר.'],
								['The roads were dirty.', 'ההפך: העלים נקיים, לא דרכו עליהם.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}אף אחד עוד לא דרך על העלים, ולכן לא היה סימן שמראה איזו דרך ״טובה יותר״. הדובר היה צריך לבחור לבד.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And both that morning equally lay" (line 11)\n{p:text}"In leaves no step had trodden black." (line 12)\n{p:callout}**טיפ לבגרות:** כשמסבירים שורה קשה: קודם מה כתוב, ואחר כך מה זה אומר.',
							hint: '{p:ul}**tell us** - מה זה אומר לנו ← משמעות\n{d:rtl}עלים שדורכים עליהם נהיים כהים. מה קורה אם אף אחד לא דרך?'
						},
						{
							type: 'mcq',
							prompt:
								'"Oh, I kept the first for another day!" But in line 15 he doubts he will come back. What does this show?',
							options: [
								['He is very angry.', 'אין כאן כעס.'],
								['He is laughing at the reader.', 'אין סימן לצחוק.'],
								['He is afraid of the forest.', 'אין פחד בשיר.'],
								"He tries to comfort himself, but deep inside he knows he probably won't return."
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}בשורה 13 הוא מקווה (״אחזור ביום אחר!״), אבל בשורה 15 הוא מודה שכנראה לא יחזור. הוא מנחם את עצמו - אבל יודע את האמת.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Oh, I kept the first for another day!" (line 13)\n{p:text}"Yet knowing how way leads on to way," (line 14)\n{p:text}"I doubted if I should ever come back." (line 15)\n{p:callout}**טיפ לבגרות:** כשהשאלה משווה שתי שורות - הזכירו את שתיהן בתשובה.',
							hint: '{p:ul}**But** - אבל ← השוואה בין שני דברים\n{d:rtl}השוו בין שורה 13 לשורה 15. מה משתנה?'
						},
						{
							type: 'mcq',
							prompt: 'What is the tone of the last stanza?',
							options: [
								'thoughtful, with mixed feelings',
								['only happy and excited', 'ה־sigh מראה שזה לא רק שמח.'],
								['angry', 'אין כעס בבית האחרון.'],
								['funny', 'זה לא בית מצחיק.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הבית האחרון מהורהר: הדובר מסתכל אחורה על חייו באנחה. יש בו גם גאווה (״all the difference״) וגם געגוע.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I shall be telling this with a sigh" (line 16)\n{p:text}"Somewhere ages and ages hence:" (line 17)\n{p:text}"And that has made all the difference." (line 20)\n{p:callout}**טיפ לבגרות:** מילים טובות לתיאור טון: thoughtful, sad, hopeful, calm, mixed.',
							hint: '{p:ul}**tone** - טון, אווירה\n{d:rtl}טון = ההרגשה הכללית. מה מסמלת האנחה?'
						},
						{
							type: 'preface',
							text: '## מה אתם חושבים?\n{d:rtl}עכשיו נחבר בין חלקים שונים בשיר ובין השיר לחיים. תשובות כאלה מרשימות מאוד את המורים!'
						},
						{
							type: 'preface',
							text: '{p:text}**Stanza 2 (now)**\n{p:text}"Though as for that the passing there" (line 9)\n{p:text}"Had worn them really about the same," (line 10)\n---\n{p:text}**Stanza 4 (the future)**\n{p:text}"I took the one less traveled by," (line 19)\n{d:rtl}השוו: עכשיו הוא אומר שהדרכים ״כמעט זהות״. בעתיד הוא יספר שבחר בדרך ״שפחות הלכו בה״.'
						},
						{
							type: 'mcq',
							prompt:
								'In stanza 2 the roads are "about the same". In line 19 he says he took the one "less traveled by". What does this show?',
							options: [
								['The speaker forgot the facts.', 'הוא לא שכח - הוא בוחר איך לספר את הסיפור.'],
								['The roads changed.', 'הדרכים לא השתנו - הסיפור משתנה.'],
								'In the future, he will tell the story in a more special way than it really happened.',
								['He took the wrong road.', 'השיר לא אומר שזו הדרך הלא נכונה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}זו אירוניה (irony) - פער בין מה שקרה באמת למה שהוא יספר. כשאנחנו מספרים על הבחירות שלנו, אנחנו רוצים שיהיו להן משמעות מיוחדת.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Though as for that the passing there" (line 9)\n{p:text}"Had worn them really about the same," (line 10)\n{p:text}"I took the one less traveled by," (line 19)\n{p:callout}**טיפ לבגרות:** תשובה מצוינת: In stanza 2… but in line 19… This shows that…',
							hint: '{p:ul}**What does this show** - מה זה מראה ← משמעות\n{d:rtl}למה אנשים מספרים את הסיפור של חייהם בצורה דרמטית?'
						},
						{
							type: 'mcq',
							prompt: 'This poem is often read at graduation ceremonies. Why do you think so?',
							options: [
								['Because it is about school.', 'השיר לא מדבר על בית ספר.'],
								['Because it is short.', 'אורך השיר הוא לא הסיבה.'],
								'Because graduates are at a "fork in the road" and must choose their future.',
								['Because it rhymes.', 'חריזה היא לא הסיבה - הנושא הוא הסיבה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}בוגרים עומדים בדיוק במקום של הדובר: לפניהם כמה ״דרכים״ (צבא או שירות, לימודים, עבודה), והם חייבים לבחור.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Two roads diverged in a yellow wood," (line 1)\n{p:text}"And sorry I could not travel both" (line 2)\n{p:text}"And be one traveler, long I stood" (line 3)\n{p:callout}**טיפ לבגרות:** קישור בין השיר לחיים (connecting to life) הוא דרישה נפוצה במשימות ספרות.',
							hint: '{p:ul}**Why do you think** - למה לדעתך\n{d:rtl}מה בוגרי תיכון צריכים לעשות אחרי הטקס?'
						},
						{
							type: 'mcq',
							prompt: 'Which statement is supported by the poem?',
							options: [
								'The speaker cannot know what would have happened on the other road.',
								[
									'The speaker is sure he chose the better road.',
									'בבית 2 הוא אומר שהדרכים כמעט זהות - אז הוא לא בטוח.'
								],
								[
									'The speaker went back to the first road.',
									'השיר לא אומר שחזר - הוא רק מטיל ספק שיחזור אי־פעם.'
								],
								['The speaker hates making choices.', 'השיר לא אומר שהוא שונא לבחור.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הוא לא ראה את סוף הדרך הראשונה (שורה 5) וגם לא חזר אליה (שורה 15), ולכן לא יכול לדעת מה היה שם.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"To where it bent in the undergrowth;" (line 5)\n{p:text}"Oh, I kept the first for another day!" (line 13)\n{p:text}"I doubted if I should ever come back." (line 15)\n{p:callout}**טיפ לבגרות:** תמיד שאלו את עצמכם: ״איפה זה כתוב בשיר?״ אם אין ראיה - זו לא התשובה.',
							hint: '{p:ul}**supported by** - נתמך על ידי ← צריך ראיה\n{d:rtl}supported = יש לזה ראיה בשיר. איזו טענה אפשר להוכיח?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-road-answer',
		section: 'd-1',
		titleEn: 'Answer Like a Pro',
		required: ['d-road-think'],
		position: {
			x: -240,
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
							text: '## תשובה בשלושה צעדים\n{d:rtl}במשימות ובמבחנים לא מספיק לדעת את התשובה - צריך לכתוב אותה נכון. כל תשובה טובה בנויה משלושה חלקים:'
						},
						{
							type: 'steps',
							ordered: true,
							steps: [
								'**ANSWER** - עונים על השאלה במשפט אחד ברור.\n{p:text}The speaker feels…',
								'**PROVE** - מביאים ראיה מהשיר, עם מספר שורה.\n{p:text}For example, in line 3 he says, "…"',
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
								'{p:text}**How does the speaker feel when he has to choose? Explain.**\n{d:rtl}סדרו את המשפטים לתשובה מלאה: ANSWER → PROVE → EXPLAIN',
							tiles: [
								'The speaker feels sorry and unsure when he has to choose.',
								'For example, in line 2 he says, "sorry I could not travel both," and in line 3 he says, "long I stood."',
								'This shows that the choice is hard for him, because he wants both roads, but he can choose only one.'
							],
							explanation: '{d:rtl}מצוין! זו תשובה מלאה: תשובה ← ראיה ← הסבר.'
						},
						{
							type: 'mcq',
							prompt: 'In the answer you built, which sentence is the EXPLAIN part?',
							options: [
								['The speaker feels sorry and unsure…', 'זה ה־ANSWER - התשובה עצמה.'],
								['For example, in line 2 he says…', 'זו הראיה - PROVE.'],
								'This shows that the choice is hard for him…'
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}משפט ההסבר מחבר בין הראיה לתשובה. הוא מתחיל בדרך כלל ב־This shows that… או ב־This means that…\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And sorry I could not travel both" (line 2)\n{p:text}"And be one traveler, long I stood" (line 3)\n{p:callout}**טיפ לבגרות:** הטעות הנפוצה ביותר: לצטט ולעצור. בלי הסבר - מאבדים נקודות!',
							hint: '{p:ul}**EXPLAIN** - הסבר\n{d:rtl}איזה משפט מתחיל ב־This shows that?'
						},
						{
							type: 'preface',
							text: '## בונים תשובה בעצמנו\n{d:rtl}השאלה: What is the message of the poem? Explain. בחרו בכל שלב את המשפט הטוב ביותר.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**What is the message of the poem? Explain.**\n{d:rtl}שלב 1: בחרו את משפט ה־ANSWER הטוב ביותר.',
							options: [
								['The poem is about a forest.', 'זה תיאור של המקום, לא מסר.'],
								'The message of the poem is that in life we must make choices, and every choice means giving something up.',
								['I like this poem very much.', 'זו דעה אישית, לא תשובה לשאלה.']
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**What is the message of the poem? Explain.**\n{d:rtl}שלב 2: בחרו את משפט ה־PROVE הטוב ביותר.',
							options: [
								['For example, the poem has four stanzas.', 'זו עובדה על המבנה, לא ראיה למסר.'],
								['For example, in line 1 the wood is yellow.', 'צבע היער לא מוכיח את המסר.'],
								'For example, the speaker keeps the first road "for another day" (line 13), but he doubts he will "ever come back" (line 15).'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**What is the message of the poem? Explain.**\n{d:rtl}שלב 3: בחרו את משפט ה־EXPLAIN הטוב ביותר.',
							options: [
								'This shows that once we choose, we usually cannot go back and try the other choice.',
								['This shows that the speaker likes nature.', 'זה לא קשור לראיה שבחרתם.'],
								['Robert Frost was an American poet.', 'זה מידע על המשורר, לא הסבר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}התשובה המלאה:\n{p:text}The message of the poem is that in life we must make choices, and every choice means giving something up.\n{p:text}For example, the speaker keeps the first road "for another day" (line 13), but he doubts he will "ever come back" (line 15).\n{p:text}This shows that once we choose, we usually cannot go back and try the other choice.'
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
								'{p:text}**Now you! Which line in the poem do you like most? Explain why.**\n{d:rtl}עכשיו תורכם! איזו שורה בשיר אהבתם הכי הרבה? הסבירו למה. (40-60 מילים)',
							wordBank: [
								'The line I like most is line __:',
								'In my opinion,',
								'For example,',
								'This shows that'
							],
							minWords: 40,
							maxWords: 60,
							checklist: [
								'עניתי על השאלה',
								'ציטטתי וכתבתי מספר שורה',
								'הסברתי למה',
								'כתבתי לפחות 40 מילים'
							],
							modelAnswer:
								'The line I like most is line 14: "Yet knowing how way leads on to way." In my opinion, this line is true about life. For example, when I chose my major in high school, I met new friends, and they changed my plans. This shows that one choice leads to another choice, so it is hard to go back.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "The Road Not Taken" by Robert Frost (Bagrut Module D, B1 level). A good answer has three parts: ANSWER (one clear sentence), PROVE (a quote or detail from the poem, with a line number), EXPLAIN ("This shows that..." / "because"). Judge structure and relevance, not literary depth. Model answer: The line I like most is line 14: "Yet knowing how way leads on to way." In my opinion, this line is true about life. For example, when I chose my major in high school, I met new friends, and they changed my plans. This shows that one choice leads to another choice, so it is hard to go back.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-road-challenge',
		section: 'd-1',
		titleEn: 'Literature Challenge',
		required: ['d-road-answer'],
		position: {
			x: -240,
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
							text: '## אתגר: הכול ביחד\n{d:rtl}6 שאלות מעורבות. נסו לענות בלי לפתוח את השיר.'
						},
						{
							type: 'mcq',
							prompt: 'How many stanzas are in the poem?',
							options: [
								['2', 'יש יותר.'],
								'4',
								['5', '5 זה מספר השורות בכל בית.'],
								['20', '20 זה מספר השורות בכל השיר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}לשיר 4 בתים, ובכל בית 5 שורות - בסך הכול 20 שורות.\n{p:callout}**טיפ לבגרות:** line = שורה, stanza = בית. אל תתבלבלו!',
							hint: '{p:ul}**stanza** - בית בשיר\n{d:rtl}stanza = בית.'
						},
						{
							type: 'mcq',
							prompt: 'In a literature answer, "the speaker" means…',
							options: [
								['the poet in real life', 'הדובר לא תמיד המשורר.'],
								['the reader', 'הקורא הוא מי שקורא את השיר - אנחנו.'],
								['the teacher', 'אין קשר למורה.'],
								'the voice that speaks in the poem'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}the speaker = הדובר - ה״אני״ שמדבר בשיר. עדיף לכתוב The speaker… ולא Frost…\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And be one traveler, long I stood" (line 3)\n{p:callout}**טיפ לבגרות:** בתשובות כותבים: The speaker feels… The speaker says… (לא The poet feels).',
							hint: '{p:ul}**the speaker** - הדובר\n{d:rtl}מי ה״I״ בשיר?'
						},
						{
							type: 'mcq',
							prompt: 'Which word best describes the speaker at the beginning of the poem?',
							options: [
								['careless', 'מי שלא אכפת לו לא עומד ומתלבט.'],
								'hesitant',
								['angry', 'אין כעס.'],
								['silly', 'אין בשיר משהו טיפשי.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הוא עומד זמן רב ומסתכל רחוק - הוא מהסס (hesitant), כי הבחירה חשובה לו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And be one traveler, long I stood" (line 3)\n{p:text}"And looked down one as far as I could" (line 4)\n{p:callout}**טיפ לבגרות:** מילים לתיאור דמות: hesitant, confident, sad, hopeful, worried.',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{d:rtl}hesitant = מהסס.'
						},
						{
							type: 'mcq',
							prompt: '"And that has made all the difference." What does the speaker mean?',
							options: [
								['The roads are different colors.', 'אין בשיר צבעים שונים לדרכים.'],
								'His choice changed his life.',
								['He made a mistake in math.', 'difference כאן הוא ״הבדל״ בחיים, לא חשבון.'],
								['Nothing changed.', 'ההפך - הכול השתנה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הבחירה בדרך הזאת שינתה את כל מהלך חייו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And that has made all the difference." (line 20)\n{p:callout}**טיפ לבגרות:** השורה האחרונה בשיר היא בדרך כלל חשובה מאוד - כדאי לזכור אותה.',
							hint: '{p:ul}**mean** - מתכוון\n{d:rtl}difference = הבדל.'
						},
						{
							type: 'mcq',
							prompt: 'What does the "yellow wood" (line 1) most likely show?',
							options: [
								['that the speaker likes yellow', 'השיר לא אומר את זה.'],
								['that it is night', 'השיר מתרחש בבוקר - כתוב that morning.'],
								['that it is a desert', 'wood זה יער, לא מדבר.'],
								'autumn - a time of change'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}עלים צהובים = סתיו. סתיו הוא זמן של שינוי, וזה מתאים לרגע של בחירה בחיים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Two roads diverged in a yellow wood," (line 1)\n{p:callout}**טיפ לבגרות:** פרטים קטנים בשיר (צבע, עונה) הם לפעמים סמלים.',
							hint: '{d:rtl}באיזו עונה העלים צהובים?'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is NOT true according to the poem?',
							options: [
								'The roads looked very different from each other.',
								['The speaker could not take both roads.', 'זה נכון - שורה 2.'],
								['The speaker thought about coming back.', 'זה נכון - שורה 13.'],
								['The speaker will tell the story in the future.', 'זה נכון - שורות 16-17.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}בשורה 10 כתוב שהדרכים היו ״really about the same״ - כמעט זהות. לכן המשפט הזה לא נכון.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Though as for that the passing there" (line 9)\n{p:text}"Had worn them really about the same," (line 10)\n{p:callout}**טיפ לבגרות:** שימו לב למילה NOT! מסמנים אותה בעיגול לפני שעונים.',
							hint: '{p:ul}**NOT true** - לא נכון\n{d:rtl}NOT = לא נכון. חפשו את המשפט שהשיר סותר.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-road-mastery',
		section: 'd-1',
		titleEn: 'Mastery Check',
		required: ['d-road-challenge'],
		position: {
			x: -240,
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
							text: '## בדיקת שליטה\n{d:rtl}8 שאלות אחרונות. כאן אין רמזים - רק משוב בסוף כל שאלה. בסוף תקבלו ציון והמלצה על מה לחזור.'
						},
						{
							type: 'mcq',
							prompt: 'Which road does the speaker choose?',
							options: [
								['the first road', 'את הראשונה הוא ״שומר ליום אחר״.'],
								['both roads', 'הוא לא יכול ללכת בשתיהן.'],
								'the other (second) road',
								['He goes home.', 'לא כתוב בשיר.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״Then took the other״ - הוא בחר בדרך השנייה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Then took the other, as just as fair," (line 6)\n{p:callout}**טיפ לבגרות:** the other = השנייה.'
						},
						{
							type: 'mcq',
							prompt: '"undergrowth" means…',
							options: [
								['a tall tree', 'עץ גבוה זה tall tree.'],
								['a river', 'נהר זה river.'],
								'bushes and small plants under the trees',
								['a road sign', 'שלט זה sign.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}undergrowth = סבך שיחים וצמחים נמוכים מתחת לעצים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"To where it bent in the undergrowth;" (line 5)\n{p:callout}**טיפ לבגרות:** under + growth = מה שגדל מתחת.'
						},
						{
							type: 'mcq',
							prompt: 'The poem is mostly about…',
							options: [
								'a choice in life and how we remember it',
								['a nice walk in nature', 'הטבע הוא רק הרקע.'],
								['the life of Robert Frost', 'השיר לא ביוגרפיה.'],
								['autumn leaves', 'העלים הם פרט, לא הנושא.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}השיר עוסק בבחירה בחיים ובדרך שבה נספר עליה בעתיד.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Two roads diverged in a yellow wood," (line 1)\n{p:text}"I shall be telling this with a sigh" (line 16)\n{p:text}"I took the one less traveled by," (line 19)\n{p:callout}**טיפ לבגרות:** theme = על מה השיר.'
						},
						{
							type: 'mcq',
							prompt: '"I doubted if I should ever come back" shows that…',
							options: [
								['the speaker is lost', 'הוא לא אבוד.'],
								['the forest is closed', 'היער לא נסגר.'],
								['the speaker is happy', 'זה לא ביטוי של שמחה.'],
								'we often cannot go back and change our choices'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}כשבוחרים, החיים ממשיכים קדימה, וקשה לחזור ״לנקודת ההתחלה״.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Yet knowing how way leads on to way," (line 14)\n{p:text}"I doubted if I should ever come back." (line 15)\n{p:callout}**טיפ לבגרות:** shows that = מבקשים משמעות.'
						},
						{
							type: 'mcq',
							prompt:
								'In which line does the speaker say the roads were worn "really about the same"?',
							options: [
								['line 1', 'שורה 1 - הדרכים מתפצלות.'],
								'line 10',
								['line 15', 'שורה 15 - הספק.'],
								['line 20', 'שורה 20 - ״all the difference״.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}שורה 10: ״Had worn them really about the same״.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Had worn them really about the same," (line 10)\n{p:callout}**טיפ לבגרות:** ציון מספר שורה מחזק כל תשובה.'
						},
						{
							type: 'mcq',
							prompt: 'Which is the best evidence for: "The speaker finds the choice difficult"?',
							options: [
								['"Two roads diverged in a yellow wood"', 'השורה מתארת את המצב, לא את הקושי.'],
								'"long I stood / And looked down one as far as I could"',
								['"In leaves no step had trodden black"', 'השורה מתארת את העלים.'],
								['"And that has made all the difference"', 'השורה מתארת את התוצאה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}עמידה ארוכה והסתכלות רחוקה מראות שהוא מתלבט - כלומר הבחירה קשה לו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And be one traveler, long I stood" (line 3)\n{p:text}"And looked down one as far as I could" (line 4)\n{p:callout}**טיפ לבגרות:** ראיה טובה מוכיחה בדיוק את הטענה - לא רק קשורה לשיר.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is a good EXPLANATION (not just a quote)?',
							options: [
								['In line 16 he says "with a sigh."', 'זה ציטוט, לא הסבר.'],
								'This shows that he has mixed feelings about his choice.',
								['The poem has four stanzas.', 'עובדה על המבנה.'],
								['Robert Frost is American.', 'עובדה על המשורר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הסבר מתחיל לרוב ב־This shows that… ואומר מה הראיה מלמדת.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I shall be telling this with a sigh" (line 16)\n{p:callout}**טיפ לבגרות:** ANSWER → PROVE → EXPLAIN.'
						},
						{
							type: 'mcq',
							prompt:
								'What is the most likely reason the speaker will say he took the road "less traveled by"?',
							options: [
								['Because that is exactly what happened.', 'בבית 2 הוא אמר שהדרכים כמעט זהות.'],
								'Because people like to make their choices sound special and meaningful.',
								['Because he forgot which road he took.', 'הוא זוכר שבחר ב״other״.'],
								['Because his friend told him to say it.', 'אין בשיר חבר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}כשאנחנו מספרים את סיפור חיינו, אנחנו רוצים שלבחירות שלנו תהיה משמעות. זו האירוניה של השיר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Had worn them really about the same," (line 10)\n{p:text}"I took the one less traveled by," (line 19)\n{p:callout}**טיפ לבגרות:** השוואה בין בית 2 לבית 4 = תשובה ברמה גבוהה.'
						}
					]
				}
			]
		}
	},
	{
		id: 'd-road-samples',
		section: 'd-1',
		titleEn: 'Sample Answers',
		required: ['d-road-mastery'],
		position: {
			x: -240,
			y: 970
		},
		big: true,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## שאלות ותשובות לדוגמה\n{d:rtl}אלו שאלות בסגנון המשימות והמבחנים בבית הספר. התשובות כתובות באנגלית פשוטה. הביטויים המודגשים הם ״ביטויי זהב״ - אפשר להשתמש בהם בכל תשובה, על כל שיר וסיפור!'
						},
						{
							type: 'preface',
							text: '### שאלה 1\n{p:text}**Describe how the speaker feels when he stands between the two roads. Explain why he feels this way.**\n---\n{p:text}The speaker feels **sorry** and **unsure**. **In line 2** he says, "sorry I could not travel both," and **in line 3** he says, "long I stood." **This shows that** the choice is hard for him. He wants to try both roads, **but** he can choose only one. **I think** many people feel the same when they make an important decision.'
						},
						{
							type: 'preface',
							text: '### שאלה 2\n{p:text}**Which line in the poem interested you most? Explain why.**\n---\n{p:text}**The line that interested me most is** line 14: "Yet knowing how way leads on to way." **In my opinion**, this line is true about life. **For example**, when I chose my major in high school, I met new friends, and they changed my plans. **This shows that** one choice leads to another choice, **so** it is hard to go back.'
						},
						{
							type: 'preface',
							text: '### שאלה 3\n{p:text}**What is the most important moment in the poem? Explain its importance.**\n---\n{p:text}**In my opinion**, the most important moment is when the speaker chooses the other road (line 6). Before this moment, he stands for a long time and cannot decide. After it, he knows he will probably not come back (line 15). **This shows that** one choice can change our whole life. **That is why** this moment is the turning point of the poem.'
						},
						{
							type: 'preface',
							text: '### שאלה 4\n{p:text}**What is the message of the poem? Do you agree with it? Explain.**\n---\n{p:text}**The message of the poem is that** in life we must make choices, and every choice means giving something up. **For example**, the speaker keeps the first road "for another day" (line 13), but he knows he will probably not come back. **I agree with this message because** we cannot do everything in life. **However**, I think we should not be afraid to choose.'
						},
						{
							type: 'preface',
							text: '### שאלה 5\n{p:text}**Why do you think the speaker will tell his story "with a sigh" (line 16)?**\n---\n{p:text}**I think** the speaker will sigh because he has **mixed feelings**. **On the one hand**, his choice "has made all the difference" (line 20). **On the other hand**, he will always wonder what happened on the other road. **In addition**, in stanza 2 the roads were "really about the same," so he is not sure he made the better choice. **This shows that** our choices stay with us for a long time.'
						},
						{
							type: 'preface',
							text: '### שאלה 6\n{p:text}**Connect the poem to your life or to the life of someone you know.**\n---\n{p:text}**The poem reminds me of** my cousin. After high school, he had to choose between working in his father\'s shop and studying at university. **Like the speaker**, he could not "travel both" roads (line 2). He chose to study, and that "has made all the difference" (line 20): today he is an engineer. **This shows that** one choice can change a person\'s whole life.'
						},
						{
							type: 'summary',
							title: 'ביטויי זהב',
							lines: [
								'**In my opinion, …** - לדעתי, …',
								'**I think that …** - אני חושב/ת ש…',
								'**The speaker feels … because …** - הדובר מרגיש … כי …',
								'**For example, in line __ the speaker says, "…"** - למשל, בשורה __ הדובר אומר…',
								'**This shows that …** - זה מראה ש…',
								'**The message of the poem is that …** - המסר של השיר הוא ש…',
								'**In addition, …** - בנוסף, …',
								'**However, …** - עם זאת / אולם, …',
								'**On the one hand … On the other hand …** - מצד אחד … מצד שני …',
								'**I agree / I disagree because …** - אני מסכים/ה / לא מסכים/ה כי …',
								'**The poem reminds me of …** - השיר מזכיר לי את …',
								'**That is why …** - זו הסיבה ש…'
							]
						},
						{
							type: 'summary',
							title: 'מושגים',
							lines: [
								'**speaker** - הדובר - ה״אני״ שמדבר בשיר',
								'**stanza** - בית בשיר',
								'**line** - שורה',
								'**symbol** - סמל - דבר שמייצג רעיון גדול',
								'**theme** - נושא - על מה השיר',
								'**message** - מסר - מה השיר מלמד אותנו',
								'**repetition** - חזרה על מילים או שורות',
								'**tone** - טון - האווירה וההרגשה בשיר',
								'**irony** - אירוניה - פער בין מה שמצפים לו לבין מה שקורה באמת (למתקדמים)',
								'**turning point** - נקודת מפנה - הרגע שבו הכול משתנה'
							]
						}
					]
				}
			]
		}
	}
];
