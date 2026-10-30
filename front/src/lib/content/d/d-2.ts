// Module D, unit 2: Count That Day Lost - Anonymous (often attributed to George Eliot) (None).
// Source: EngUp_Literature_Developer_Package (04_Data/module_D/unit2_count_that_day_lost.json).
import type { LessonNode } from '../types';

export const d2Lessons: LessonNode[] = [
	{
		id: 'd-count-day-before',
		section: 'd-2',
		titleEn: 'Before Reading',
		required: [],
		position: {
			x: -120,
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
							text: '## מה הופך יום ליום טוב?\n{d:rtl}תחשבו על אתמול בערב, לפני השינה. איך ידעתם אם היה לכם יום טוב? אולי נהניתם, אולי קיבלתם ציון טוב, אולי פשוט נחתם.\n\n{d:rtl}השיר שנלמד עכשיו נותן תשובה אחרת לשאלה הזאת: יום טוב הוא יום שבו עשינו משהו טוב בשביל מישהו אחר - אפילו משהו קטן מאוד.\n\n{p:text}This poem asks a simple question: at the end of the day, did you do something kind for another person?'
						},
						{
							type: 'preface',
							text: '{p:text}**For you, what makes a day good?**\n{d:rtl}מה הופך בשבילכם יום ליום טוב?\n{p:ul}I had fun with friends\n{p:ul}I got a good grade\n{p:ul}I helped someone\n{p:ul}I relaxed at home\n{p:callout}כל התשובות לגיטימיות! עכשיו נראה מה הדובר בשיר חושב. בסוף היחידה תוכלו להשוות בין הדעה שלכם לדעה שלו.'
						},
						{
							type: 'preface',
							text: '## המשורר ומילות המפתח\n### ✍️ Who wrote the poem?\n{p:text}We do not know for sure. Many books say that the writer is George Eliot, an English woman writer (1819-1880). The Ministry of Education lists the poem as "Anonymous" (the writer is unknown).\n{d:rtl}לא בטוח מי כתב את השיר. בהרבה ספרים ואתרים כתוב שהכותבת היא ג׳ורג׳ אליוט - סופרת אנגלייה מהמאה ה־19, שכתבה בשם של גבר. ברשימה של משרד החינוך השיר מופיע כ־Anonymous, כלומר כותב לא ידוע. בתשובות כדאי לכתוב פשוט: the poet או the speaker.'
						},
						{
							type: 'preface',
							text: '### 🌇 The idea of the poem\n{p:text}At the end of the day, the speaker asks us to stop and check ourselves: did I do something good for someone today?\n{d:rtl}בסוף היום הדובר מבקש מאיתנו לעצור ולעשות ״חשבון נפש״ קטן: האם עשיתי היום משהו טוב בשביל מישהו אחר? לפי התשובה, היום ״הצליח״ או ״הלך לאיבוד״.'
						},
						{
							type: 'preface',
							text: '{d:rtl}לפני שקוראים - הכירו את המילים החשובות. כרטיס אחרי כרטיס, ואחר כך תרגול קצר.'
						},
						{
							type: 'word-card',
							word: 'set of sun',
							translationHe: 'שקיעה - סוף היום',
							exampleEn: 'at **set of sun** = when the sun goes down'
						},
						{
							type: 'word-card',
							word: 'deed / act',
							translationHe: 'מעשה',
							exampleEn: 'a good deed = a good thing you do'
						},
						{
							type: 'word-card',
							word: 'self-denying',
							translationHe: 'מוותר על עצמו למען אחרים',
							exampleEn: 'a **self-denying** deed = you give up something to help someone'
						},
						{
							type: 'word-card',
							word: 'ease',
							translationHe: 'להקל, להרגיע',
							exampleEn: 'eased the heart = made someone feel better'
						},
						{
							type: 'word-card',
							word: 'glance',
							translationHe: 'מבט קצר',
							exampleEn: 'one **glance** most kind = one very kind look'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'set of sun',
									he: 'שקיעה - סוף היום'
								},
								{
									en: 'deed / act',
									he: 'מעשה'
								},
								{
									en: 'self-denying',
									he: 'מוותר על עצמו למען אחרים'
								},
								{
									en: 'ease',
									he: 'להקל, להרגיע'
								},
								{
									en: 'glance',
									he: 'מבט קצר'
								}
							]
						},
						{
							type: 'word-card',
							word: 'well spent',
							translationHe: 'מנוצל היטב',
							exampleEn: 'a day **well spent** = a good, useful day'
						},
						{
							type: 'word-card',
							word: 'livelong',
							translationHe: 'כל היום הארוך',
							exampleEn: 'all the **livelong** day = the whole long day'
						},
						{
							type: 'word-card',
							word: 'cheer',
							translationHe: 'לשמח, לעודד',
							exampleEn: 'cheered no heart = made nobody happy'
						},
						{
							type: 'word-card',
							word: 'trace',
							translationHe: 'למצוא, לאתר',
							exampleEn: 'nothing that you can **trace** = nothing you can find'
						},
						{
							type: 'word-card',
							word: 'soul',
							translationHe: 'נפש; כאן: אדם',
							exampleEn: 'helped some **soul** = helped some person'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'well spent',
									he: 'מנוצל היטב'
								},
								{
									en: 'livelong',
									he: 'כל היום הארוך'
								},
								{
									en: 'cheer',
									he: 'לשמח, לעודד'
								},
								{
									en: 'trace',
									he: 'למצוא, לאתר'
								},
								{
									en: 'soul',
									he: 'נפש; כאן: אדם'
								}
							]
						},
						{
							type: 'mcq',
							prompt: '"If you sit down at set of sun" - when is "set of sun"?',
							options: [
								['in the morning', 'בבוקר השמש זורחת, לא שוקעת.'],
								['at noon', 'בצהריים השמש גבוהה בשמיים.'],
								'at the end of the day, when the sun goes down',
								['at midnight', 'בחצות כבר חושך - השמש שקעה מזמן.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}set of sun = sunset = שקיעה. זה סוף היום - הזמן שבו עוצרים וחושבים על מה שעשינו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:callout}**טיפ לבגרות:** בשירים ישנים סדר המילים לפעמים שונה: set of sun = sunset.',
							hint: '{d:rtl}set = שוקעת. מתי השמש שוקעת?'
						},
						{
							type: 'mcq',
							prompt: '"One self-denying deed" - what is a self-denying deed?',
							options: [
								'a good act for others, even when you give up something',
								[
									'something you do only for yourself',
									'זה ההפך - self-denying זה לוותר על עצמך למען אחרים.'
								],
								['a bad act', 'בשיר זה מעשה טוב, לא רע.'],
								[
									'an act you say you did not do',
									'מלכודת! deny יכול להיות ״להכחיש״, אבל self-denying פירושו לוותר על משהו בשביל אחרים.'
								]
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}מעשה שבו מוותרים על משהו בשביל מישהו אחר. למשל: לתת לחבר את החטיף שלכם, או לוותר על משחק כדי לעזור לאמא.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:callout}**טיפ לבגרות:** מילה מורכבת? פרקו אותה לחלקים: self + deny + ing.',
							hint: '{d:rtl}self = עצמי. deny = כאן: לוותר, לא לתת לעצמי.'
						},
						{
							type: 'mcq',
							prompt: '"That eased the heart of him who heard" - what does "eased" mean here?',
							options: [
								["broke someone's heart", 'זה ההפך - המילה מתארת הקלה, לא כאב.'],
								['made someone angry', 'אין בשורה כעס.'],
								['surprised someone', 'המילה לא מתארת הפתעה.'],
								'made someone feel better'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}ease = להקל, להרגיע. המילה הטובה ״הקלה על הלב״ של מי ששמע אותה - הוא הרגיש טוב יותר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:text}"That eased the heart of him who heard," (line 5)\n{p:callout}**טיפ לבגרות:** חפשו מילים מוכרות בתוך מילים חדשות: ease ← easy.',
							hint: '{d:rtl}ease קשורה ל־easy (קל).'
						},
						{
							type: 'mcq',
							prompt: '"You\'ve cheered no heart" - what does this mean?',
							options: [
								[
									'You did not shout at a football game.',
									'מלכודת! cheer הוא גם ״לעודד במשחק״, אבל כאן cheer a heart = לשמח מישהו.'
								],
								'You did not make anyone happy.',
								['You did not eat anything.', 'אין קשר לאוכל.'],
								['You did not sing.', 'אין קשר לשירה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}cheer = לשמח, לעודד. ״cheered no heart״ - לא שימחתם אף אחד במשך היום.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"You\'ve cheered no heart, by yea or nay —" (line 10)\n{p:callout}**טיפ לבגרות:** למילה אחת יכולות להיות כמה משמעויות. ההקשר בשורה מחליט.',
							hint: '{d:rtl}cheer someone up = לשמח מישהו.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-count-day-read',
		section: 'd-2',
		titleEn: 'Understand the Poem',
		required: ['d-count-day-before'],
		position: {
			x: -120,
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
							text: '## קוראים את השיר\n{d:rtl}קראו את השיר כולו. לחצו על כל שורה כדי לראות מה היא אומרת בעברית פשוטה. אל תדאגו אם לא הבנתם הכול - בשלב הבא נעבור על כל בית בנפרד.\n\n{p:callout}לשיר יש 2 בתים (stanzas), ובכל בית 8 שורות. שני הבתים בנויים אותו דבר: ״אם...״ ← רשימת מעשים ← ״אז...״.'
						},
						{
							type: 'poem',
							title: 'Count That Day Lost - Anonymous (often attributed to George Eliot)',
							stanzas: [
								{
									label: 'Stanza 1',
									lines: [
										{
											n: 1,
											en: 'If you sit down at set of sun',
											he: 'אם בסוף היום, כשהשמש שוקעת, אתם יושבים'
										},
										{
											n: 2,
											en: 'And count the acts that you have done,',
											he: 'ועוברים בראש על כל מה שעשיתם היום,'
										},
										{
											n: 3,
											en: 'And, counting, find',
											he: 'ותוך כדי כך מגלים'
										},
										{
											n: 4,
											en: 'One self-denying deed, one word',
											he: 'מעשה אחד שבו ויתרתם על משהו בשביל מישהו אחר, או מילה אחת'
										},
										{
											n: 5,
											en: 'That eased the heart of him who heard,',
											he: 'שגרמה למי ששמע אותה להרגיש טוב יותר,'
										},
										{
											n: 6,
											en: 'One glance most kind',
											he: 'או מבט אחד חם ואדיב'
										},
										{
											n: 7,
											en: 'That fell like sunshine where it went —',
											he: 'ששימח את מי שקיבל אותו, כמו קרן שמש -'
										},
										{
											n: 8,
											en: 'Then you may count that day well spent.',
											he: 'אז אתם יכולים להגיד שהיום הזה היה יום טוב, שניצלתם אותו נכון.'
										}
									]
								},
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 9,
											en: 'But if, through all the livelong day,',
											he: 'אבל אם במשך כל היום הארוך'
										},
										{
											n: 10,
											en: "You've cheered no heart, by yea or nay —",
											he: 'לא שימחתם אף אחד - לא במילה ולא בשום דרך אחרת -'
										},
										{
											n: 11,
											en: 'If, through it all',
											he: 'אם במשך כל היום הזה'
										},
										{
											n: 12,
											en: "You've nothing done that you can trace",
											he: 'אתם לא מוצאים שום דבר שעשיתם'
										},
										{
											n: 13,
											en: 'That brought the sunshine to one face —',
											he: 'שגרם לאדם אחד לחייך,'
										},
										{
											n: 14,
											en: 'No act most small',
											he: 'אפילו לא מעשה קטן מאוד'
										},
										{
											n: 15,
											en: 'That helped some soul and nothing cost —',
											he: 'שעזר למישהו ולא עלה לכם כלום -'
										},
										{
											n: 16,
											en: 'Then count that day as worse than lost.',
											he: 'אז היום הזה גרוע אפילו יותר מיום מבוזבז.'
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
											en: 'If you sit down at set of sun',
											he: 'אם בסוף היום, כשהשמש שוקעת, אתם יושבים'
										},
										{
											n: 2,
											en: 'And count the acts that you have done,',
											he: 'ועוברים בראש על כל מה שעשיתם היום,'
										},
										{
											n: 3,
											en: 'And, counting, find',
											he: 'ותוך כדי כך מגלים'
										},
										{
											n: 4,
											en: 'One self-denying deed, one word',
											he: 'מעשה אחד שבו ויתרתם על משהו בשביל מישהו אחר, או מילה אחת'
										},
										{
											n: 5,
											en: 'That eased the heart of him who heard,',
											he: 'שגרמה למי ששמע אותה להרגיש טוב יותר,'
										},
										{
											n: 6,
											en: 'One glance most kind',
											he: 'או מבט אחד חם ואדיב'
										},
										{
											n: 7,
											en: 'That fell like sunshine where it went —',
											he: 'ששימח את מי שקיבל אותו, כמו קרן שמש -'
										},
										{
											n: 8,
											en: 'Then you may count that day well spent.',
											he: 'אז אתם יכולים להגיד שהיום הזה היה יום טוב, שניצלתם אותו נכון.'
										}
									]
								}
							],
							title: 'בית 1: יום שנוצל היטב'
						},
						{
							type: 'preface',
							text: '### 1️⃣ Stanza 1\n{p:text}At the end of the day, sit down and think about what you did. If you find one good act - one thing you gave up for someone, one kind word, or one kind look - then your day was "well spent".\n{d:rtl}בסוף היום, שבו וחשבו על מה שעשיתם. אם תמצאו מעשה טוב אחד - ויתור קטן בשביל מישהו, מילה טובה אחת או מבט חם אחד - אז היום שלכם היה יום טוב. שימו לב: מספיק דבר אחד!'
						},
						{
							type: 'mcq',
							prompt: 'When does the speaker tell us to count our acts?',
							options: [
								['in the morning', 'הבוקר הוא תחילת היום, לא הסוף.'],
								'at the end of the day',
								['every hour', 'השיר לא מדבר על כל שעה.'],
								['once a year', 'השיר מדבר על יום אחד, לא על שנה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}״at set of sun״ - בשקיעה, בסוף היום. זה הזמן להסתכל אחורה על היום שעבר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:text}"And count the acts that you have done," (line 2)\n{p:callout}**טיפ לבגרות:** שאלת When? = מחפשים ביטוי של זמן בטקסט.',
							hint: '{p:ul}**When** - מתי ← מחפשים זמן\n{d:rtl}שורה 1: at set of sun.'
						},
						{
							type: 'mcq',
							prompt: 'According to stanza 1, which of these makes a day "well spent"?',
							options: [
								['buying something new', 'השיר לא מדבר על קניות.'],
								['sleeping late', 'השיר לא מדבר על מנוחה.'],
								['winning a game', 'ניצחון הוא הצלחה אישית - השיר מדבר על עזרה לאחרים.'],
								'saying one kind word to someone'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}מילה אחת טובה ״שהקלה על הלב של מי ששמע״ - זה מספיק כדי שהיום ייחשב יום טוב.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:text}"That eased the heart of him who heard," (line 5)\n{p:text}"Then you may count that day well spent." (line 8)\n{p:callout}**טיפ לבגרות:** According to stanza 1 = התשובה נמצאת רק בבית הראשון. אל תחפשו בבית השני.',
							hint: '{p:ul}**According to** - לפי\n{p:ul}**well spent** - מנוצל היטב\n{d:rtl}קראו את שורות 4-5: one word / That eased the heart…'
						},
						{
							type: 'mcq',
							prompt: 'How many good acts do you need for a day "well spent"?',
							options: [
								'at least one',
								['many', 'הדובר לא דורש הרבה - רק אחד.'],
								['exactly ten', 'אין מספר כזה בשיר.'],
								['none', 'צריך לפחות מעשה אחד.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}המילה ״One״ חוזרת: one deed, one word, one glance. מספיק מעשה טוב אחד!\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:text}"One glance most kind" (line 6)\n{p:callout}**טיפ לבגרות:** כשמילה חוזרת כמה פעמים בשיר - היא כנראה חשובה.',
							hint: '{p:ul}**How many** - כמה\n{d:rtl}איזו מילה חוזרת בשורות 4 ו־6?'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 9,
											en: 'But if, through all the livelong day,',
											he: 'אבל אם במשך כל היום הארוך'
										},
										{
											n: 10,
											en: "You've cheered no heart, by yea or nay —",
											he: 'לא שימחתם אף אחד - לא במילה ולא בשום דרך אחרת -'
										},
										{
											n: 11,
											en: 'If, through it all',
											he: 'אם במשך כל היום הזה'
										},
										{
											n: 12,
											en: "You've nothing done that you can trace",
											he: 'אתם לא מוצאים שום דבר שעשיתם'
										},
										{
											n: 13,
											en: 'That brought the sunshine to one face —',
											he: 'שגרם לאדם אחד לחייך,'
										},
										{
											n: 14,
											en: 'No act most small',
											he: 'אפילו לא מעשה קטן מאוד'
										},
										{
											n: 15,
											en: 'That helped some soul and nothing cost —',
											he: 'שעזר למישהו ולא עלה לכם כלום -'
										},
										{
											n: 16,
											en: 'Then count that day as worse than lost.',
											he: 'אז היום הזה גרוע אפילו יותר מיום מבוזבז.'
										}
									]
								}
							],
							title: 'בית 2: יום גרוע מיום אבוד'
						},
						{
							type: 'preface',
							text: '### 2️⃣ Stanza 2\n{p:text}Now the opposite: what if, during the whole day, you made nobody happy? You did nothing - not even a very small thing that cost you nothing - to help someone. Then your day is "worse than lost".\n{d:rtl}עכשיו ההפך: מה אם במשך כל היום לא שימחתם אף אחד? לא עשיתם שום דבר - אפילו לא דבר קטן מאוד שלא עלה לכם כלום - כדי לעזור למישהו. אז היום שלכם גרוע אפילו יותר מיום שהלך לאיבוד.'
						},
						{
							type: 'mcq',
							prompt: 'Stanza 2 describes a day when…',
							options: [
								['you helped many people', 'זה ההפך - בבית 2 לא עזרתם לאף אחד.'],
								['you were sick', 'השיר לא מדבר על מחלה.'],
								'you did nothing good for anyone',
								['you worked very hard', 'השיר לא מדבר על עבודה קשה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}בבית 2 מתואר יום שבו לא שימחתם אף אחד (״cheered no heart״) ולא עשיתם שום דבר טוב (״nothing done״).\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"You\'ve cheered no heart, by yea or nay —" (line 10)\n{p:text}"You\'ve nothing done that you can trace" (line 12)\n{p:callout}**טיפ לבגרות:** שימו לב למילים השוללות: no, nothing. הן מראות מה חסר ביום הזה.',
							hint: '{p:ul}**describes** - מתאר\n{d:rtl}שורות 10 ו־12: cheered no heart / nothing done.'
						},
						{
							type: 'mcq',
							prompt: '"No act most small" - what does this mean?',
							options: [
								['a very big act', 'זה ההפך - small = קטן.'],
								['a small room', 'act זה מעשה, לא חדר.'],
								'not even a very small act',
								['no time at all', 'השורה לא מדברת על זמן.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״No act most small״ = אף לא מעשה אחד קטן מאוד. כלומר, לא עשיתם אפילו את הדבר הקטן ביותר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"No act most small" (line 14)\n{p:callout}**טיפ לבגרות:** בשירה ישנה כותבים לפעמים most small במקום smallest.',
							hint: '{p:ul}**act** - מעשה\n{p:ul}**most small** - קטן מאוד\n{d:rtl}most small = הכי קטן, קטן מאוד.'
						},
						{
							type: 'mcq',
							prompt: 'How does the speaker describe such a day?',
							options: [
								'worse than lost',
								['well spent', 'well spent מתאר את היום בבית 1.'],
								['a lucky day', 'השיר לא מדבר על מזל.'],
								['a quiet day', 'השיר לא מתאר את היום כשקט.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}״worse than lost״ - גרוע יותר מיום אבוד. זה משפט חזק מאוד!\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Then count that day as worse than lost." (line 16)\n{p:callout}**טיפ לבגרות:** השורה האחרונה בכל בית היא ״המסקנה״ שלו. כדאי לזכור את שתיהן: well spent / worse than lost.',
							hint: '{p:ul}**describe** - לתאר\n{d:rtl}השורה האחרונה בשיר.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-count-day-meaning',
		section: 'd-2',
		titleEn: 'Speaker & Meaning',
		required: ['d-count-day-read'],
		position: {
			x: -120,
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
							text: '## הקול של הדובר\n### 🗣️ Who is the speaker?\n{p:text}The speaker is like a wise teacher or parent. The speaker talks directly to "you" - the reader - and gives advice.\n{d:rtl}הדובר דומה למורה או להורה חכם. הוא פונה ישירות אלינו - ״you״ - ונותן לנו עצה איך לבדוק אם היום שלנו היה טוב. בתשובות כותבים: The speaker…'
						},
						{
							type: 'preface',
							text: '{d:rtl}הקול של הדובר משתנה לאורך השיר. עקבו אחריו:'
						},
						{
							type: 'steps',
							steps: [
								'**"If you sit down…"** (line 1): calm, giving advice\n{d:rtl}רגוע - מזמין אותנו לעצור ולחשוב',
								'**"well spent"** (line 8): positive, encouraging\n{d:rtl}מעודד - מספיק מעשה טוב אחד',
								'**"But if…"** (line 9): serious, a change\n{d:rtl}רציני - המילה But מסמנת שינוי',
								'**"worse than lost"** (line 16): strict, a warning\n{d:rtl}מזהיר - יום בלי טוב הוא בזבוז גדול'
							]
						},
						{
							type: 'mcq',
							prompt: 'Who does the speaker talk to?',
							options: [
								['a best friend', 'אין בשיר חבר.'],
								['a teacher', 'הדובר עצמו דומה למורה - הוא לא מדבר אל מורה.'],
								['George Eliot', 'ג׳ורג׳ אליוט אולי כתבה את השיר - היא לא זו שאליה הוא פונה.'],
								'"you" - the reader'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}הדובר פונה אל ״you״ - כלומר אל כל קורא. זה גורם לנו להרגיש שהשיר מדבר בדיוק אלינו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:text}"And count the acts that you have done," (line 2)\n{p:callout}**טיפ לבגרות:** כשבשיר יש you, הדובר פונה ישירות לקורא. זה הופך את השיר לעצה אישית.',
							hint: '{p:ul}**Who** - מי\n{p:ul}**talk to** - מדבר אל\n{d:rtl}איזו מילה חוזרת בשורות 1-2?'
						},
						{
							type: 'mcq',
							prompt: 'What is the tone of the last line?',
							options: [
								['funny', 'אין כאן בדיחה.'],
								'serious, like a warning',
								['sad and lonely', 'הדובר לא מדבר על עצמו או על בדידות.'],
								['excited', 'אין כאן התלהבות.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}״count that day as worse than lost״ - זה משפט חזק ורציני, כמו אזהרה: אל תבזבזו את היום שלכם!\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Then count that day as worse than lost." (line 16)\n{p:callout}**טיפ לבגרות:** מילים לתיאור טון: serious, calm, warning, encouraging, wise.',
							hint: '{p:ul}**tone** - טון, אווירה\n{d:rtl}איך מרגיש משפט כמו ״worse than lost״?'
						},
						{
							type: 'preface',
							text: '## סמלים ותמונות\n### 🔑 What is a symbol?\n{p:text}A symbol is a thing that stands for a bigger idea.\n{d:rtl}סמל (symbol) הוא דבר מוחשי שמייצג רעיון גדול יותר. בשיר הזה, השמש היא הרבה יותר ממזג אוויר.'
						},
						{
							type: 'preface',
							text: '{d:rtl}הנה הסמלים בשיר, ומה כל אחד מהם מסמל:'
						},
						{
							type: 'steps',
							steps: [
								'**☀️ Sunshine (lines 7, 13)**\n{p:text}Happiness and warmth that we give to others.\n{d:rtl}שמחה וחום שאנחנו נותנים לאחרים. מבט טוב ״נופל כמו קרן שמש״.',
								'**🌇 Set of sun (line 1)**\n{p:text}The end of the day - a time to stop and think.\n{d:rtl}סוף היום - זמן לעצור ולעשות חשבון נפש.',
								'**🧮 Counting (lines 2-3)**\n{p:text}Checking ourselves: what did I do today?\n{d:rtl}לבדוק את עצמנו: מה עשיתי היום, ובשביל מי?',
								'**🤏 A small act (line 14)**\n{p:text}Even a very small act of kindness matters.\n{d:rtl}גם טוב קטן מאוד חשוב.',
								'**🆓 Nothing cost (line 15)**\n{p:text}Kindness is free - everyone can give it.\n{d:rtl}טוב לב לא עולה כסף - כל אחד יכול לתת אותו.'
							]
						},
						{
							type: 'mcq',
							prompt: 'In the poem, "sunshine" is a symbol of…',
							options: [
								['hot weather', 'זה הפירוש המילולי. בשיר השמש מייצגת רעיון.'],
								'happiness and warmth that we give others',
								['the summer holiday', 'השיר לא מדבר על חופש.'],
								['the morning', 'השיר מתרחש דווקא בשקיעה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}השמש מביאה אור וחום. כך גם מעשה טוב: מבט חם ״נופל כמו קרן שמש״ (שורה 7), וחיוך הוא ״sunshine״ על הפנים (שורה 13).\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One glance most kind" (line 6)\n{p:text}"That fell like sunshine where it went —" (line 7)\n{p:text}"That brought the sunshine to one face —" (line 13)\n{p:callout}**טיפ לבגרות:** כשכותבים על סמל: The ___ is a symbol of ___. This shows that ___.',
							hint: '{p:ul}**symbol** - סמל\n{d:rtl}מה עושה מבט טוב, לפי שורה 7?'
						},
						{
							type: 'mcq',
							prompt: 'Why does the speaker ask us to "count" our acts at the end of the day?',
							options: [
								['to practice math', 'count כאן לא קשור לחשבון.'],
								['to remember what to buy', 'השיר לא מדבר על קניות.'],
								['to plan the next day', 'הספירה היא על היום שעבר, לא על מחר.'],
								'to check ourselves: did we do something good?'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}לספור את המעשים = לבדוק את עצמנו. בסוף היום שואלים: האם עשיתי משהו טוב בשביל מישהו? זה כמו ״חשבון נפש״.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:text}"And count the acts that you have done," (line 2)\n{p:text}"And, counting, find" (line 3)\n{p:callout}**טיפ לבגרות:** המילה count מופיעה בשיר בשני מובנים: לספור (שורה 2) ולהחשיב (שורות 8, 16: count that day…).',
							hint: '{p:ul}**Why** - למה ← מחפשים סיבה\n{p:ul}**count** - לספור, לבדוק\n{d:rtl}מה מחפשים כש״סופרים״ את מה שעשינו?'
						},
						{
							type: 'preface',
							text: '## הנושא והמסר\n### 📌 Theme · נושא\n{p:text}Kindness and helping others.\n{d:rtl}הנושא (theme) הוא ״על מה השיר״: טוב לב ועזרה לאחרים.'
						},
						{
							type: 'preface',
							text: '### 💬 Message · מסר\n{p:text}Even one small kind act can make our day meaningful. A day without kindness is a wasted day.\n{d:rtl}המסר (message) הוא ״מה השיר רוצה ללמד אותנו״: אפילו מעשה טוב אחד וקטן נותן משמעות ליום שלנו. יום בלי שום טוב לאחרים הוא יום מבוזבז - ואפילו גרוע מזה.'
						},
						{
							type: 'preface',
							text: '### ⚠️ A common mistake\n{p:text}Some students think the poem is about big heroic acts or about money ("cost"). No! The poem says that small acts are enough, and that kindness costs nothing.\n{d:rtl}טעות נפוצה: לחשוב שהשיר מדבר על מעשים גדולים והרואיים, או על כסף (בגלל המילה cost). לא! השיר אומר בדיוק ההפך: מספיק מעשה קטן - מילה, מבט, חיוך - וטוב לב לא עולה כלום.'
						},
						{
							type: 'mcq',
							prompt: 'What is the main theme of the poem?',
							options: [
								'kindness and helping others',
								['money', 'המילה cost מופיעה, אבל השיר אומר שטוב לב ״nothing cost״.'],
								['the weather', 'השמש היא סמל, לא הנושא.'],
								['sports', 'אין בשיר ספורט.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הנושא המרכזי הוא טוב לב ועזרה לאחרים. שני הבתים בודקים דבר אחד: האם עשינו טוב למישהו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:text}"That eased the heart of him who heard," (line 5)\n{p:text}"That helped some soul and nothing cost —" (line 15)\n{p:callout}**טיפ לבגרות:** נושא (theme) = מילה או שתיים. מסר (message) = משפט שלם.',
							hint: '{p:ul}**theme** - נושא\n{d:rtl}על מה הדובר מדבר בשני הבתים?'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence best describes the message of the poem?',
							options: [
								[
									'Only big heroic acts are important.',
									'השיר אומר ההפך: גם ״act most small״ חשוב.'
								],
								[
									'You should count your money every day.',
									'count כאן הוא בדיקה של מעשים, לא של כסף.'
								],
								'Even one small kind act can make a day meaningful.',
								['Never help strangers.', 'השיר מבקש לעזור ל״some soul״ - לכל אדם.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}לפי השיר, מספיק מעשה טוב אחד - מילה, מבט - כדי שהיום יהיה ״well spent״ (שורות 4-8).\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:text}"One glance most kind" (line 6)\n{p:text}"Then you may count that day well spent." (line 8)\n{p:text}"No act most small" (line 14)\n{p:callout}**טיפ לבגרות:** כשיש ״best״ בשאלה - בחרו את התשובה המלאה והמדויקת ביותר.',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{p:ul}**message** - מסר\n{d:rtl}מסר = מה השיר רוצה ללמד אותנו על החיים.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-count-day-think',
		section: 'd-2',
		titleEn: 'Think About It',
		required: ['d-count-day-meaning'],
		position: {
			x: -120,
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
							title: 'Count That Day Lost - Anonymous (often attributed to George Eliot)',
							stanzas: [
								{
									label: 'Stanza 1',
									lines: [
										{
											n: 1,
											en: 'If you sit down at set of sun',
											he: 'אם בסוף היום, כשהשמש שוקעת, אתם יושבים'
										},
										{
											n: 2,
											en: 'And count the acts that you have done,',
											he: 'ועוברים בראש על כל מה שעשיתם היום,'
										},
										{
											n: 3,
											en: 'And, counting, find',
											he: 'ותוך כדי כך מגלים'
										},
										{
											n: 4,
											en: 'One self-denying deed, one word',
											he: 'מעשה אחד שבו ויתרתם על משהו בשביל מישהו אחר, או מילה אחת'
										},
										{
											n: 5,
											en: 'That eased the heart of him who heard,',
											he: 'שגרמה למי ששמע אותה להרגיש טוב יותר,'
										},
										{
											n: 6,
											en: 'One glance most kind',
											he: 'או מבט אחד חם ואדיב'
										},
										{
											n: 7,
											en: 'That fell like sunshine where it went —',
											he: 'ששימח את מי שקיבל אותו, כמו קרן שמש -'
										},
										{
											n: 8,
											en: 'Then you may count that day well spent.',
											he: 'אז אתם יכולים להגיד שהיום הזה היה יום טוב, שניצלתם אותו נכון.'
										}
									]
								},
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 9,
											en: 'But if, through all the livelong day,',
											he: 'אבל אם במשך כל היום הארוך'
										},
										{
											n: 10,
											en: "You've cheered no heart, by yea or nay —",
											he: 'לא שימחתם אף אחד - לא במילה ולא בשום דרך אחרת -'
										},
										{
											n: 11,
											en: 'If, through it all',
											he: 'אם במשך כל היום הזה'
										},
										{
											n: 12,
											en: "You've nothing done that you can trace",
											he: 'אתם לא מוצאים שום דבר שעשיתם'
										},
										{
											n: 13,
											en: 'That brought the sunshine to one face —',
											he: 'שגרם לאדם אחד לחייך,'
										},
										{
											n: 14,
											en: 'No act most small',
											he: 'אפילו לא מעשה קטן מאוד'
										},
										{
											n: 15,
											en: 'That helped some soul and nothing cost —',
											he: 'שעזר למישהו ולא עלה לכם כלום -'
										},
										{
											n: 16,
											en: 'Then count that day as worse than lost.',
											he: 'אז היום הזה גרוע אפילו יותר מיום מבוזבז.'
										}
									]
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'Which of these is NOT mentioned in stanza 1 as a good act?',
							options: [
								['a self-denying deed', 'זה מופיע - שורה 4.'],
								['a kind word', 'זה מופיע - שורות 4-5.'],
								'a gift of money',
								['a kind look', 'זה מופיע - שורה 6 (glance = מבט).']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}בבית 1 מופיעים שלושה מעשים: ויתור (deed), מילה (word) ומבט (glance). מתנה של כסף לא מופיעה - השיר מדבר על טוב לב שלא עולה כסף.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:text}"That eased the heart of him who heard," (line 5)\n{p:text}"One glance most kind" (line 6)\n{p:callout}**טיפ לבגרות:** שימו לב למילה NOT! מסמנים אותה בעיגול לפני שעונים.',
							hint: '{p:ul}**NOT** - לא\n{p:ul}**mentioned** - מוזכר\n{d:rtl}NOT = לא מופיע. בדקו כל אפשרות בשורות 4-7.'
						},
						{
							type: 'mcq',
							prompt: '"That fell like sunshine where it went" (line 7) describes…',
							options: [
								'a kind glance',
								['the sun', 'השמש היא רק ההשוואה - השורה מתארת משהו אחר.'],
								['the rain', 'אין גשם בשיר.'],
								['a gift', 'אין מתנה בשיר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}שורות 6-7 הן משפט אחד: ״One glance most kind / That fell like sunshine…״ - המבט החם נפל כמו קרן שמש על מי שקיבל אותו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One glance most kind" (line 6)\n{p:text}"That fell like sunshine where it went —" (line 7)\n{p:callout}**טיפ לבגרות:** בשירה משפט אחד ממשיך לפעמים על פני כמה שורות. קראו גם את השורה שלפני!',
							hint: '{p:ul}**describes** - מתאר\n{p:ul}**like** - כמו (השוואה)\n{d:rtl}קראו את שורה 6 - מה ״נפל כמו קרן שמש״?'
						},
						{
							type: 'mcq',
							prompt: "According to line 13, what did you NOT bring to anyone's face?",
							options: [
								['food', 'אין אוכל בשיר.'],
								['money', 'אין כסף בשיר.'],
								['rain', 'אין גשם בשיר.'],
								'sunshine'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}״That brought the sunshine to one face״ - לא הבאתם ״שמש״ לאף פנים, כלומר לא גרמתם לאף אחד לחייך.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"You\'ve nothing done that you can trace" (line 12)\n{p:text}"That brought the sunshine to one face —" (line 13)\n{p:callout}**טיפ לבגרות:** שאלה פשוטה? אל תחפשו תשובה מסובכת. התשובה בשורה.',
							hint: '{p:ul}**face** - פנים\n{d:rtl}שורה 13.'
						},
						{
							type: 'mcq',
							prompt: 'How many lines are in each stanza?',
							options: [
								['4', 'יש יותר.'],
								['6', 'יש יותר.'],
								'8',
								['16', '16 זה מספר השורות בכל השיר.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}בכל בית 8 שורות, ובשיר כולו 16 שורות. שני הבתים בנויים בדיוק אותו דבר.\n{p:callout}**טיפ לבגרות:** line = שורה, stanza = בית. אל תתבלבלו!',
							hint: '{p:ul}**stanza** - בית\n{p:ul}**line** - שורה\n{d:rtl}stanza = בית. ספרו את השורות בבית הראשון.'
						},
						{
							type: 'preface',
							text: '## מה מסתתר בין השורות?\n{d:rtl}עכשיו התשובה לא כתובה במפורש. צריך להבין ממה שכתוב - כמו בלש שמחפש רמזים 🔍.'
						},
						{
							type: 'mcq',
							prompt:
								'Why does the speaker repeat the word "One" (one deed, one word, one glance)?',
							options: [
								['because the speaker cannot count', 'הדובר דווקא מבקש מאיתנו לספור.'],
								'to show that even one small act is enough',
								['to make the poem longer', 'החזרה נועדה להדגיש רעיון, לא להאריך.'],
								['because only one person can be helped', 'השיר מדבר על כל אדם - ״some soul״.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}החזרה (repetition) על ״One״ מדגישה שלא צריך הרבה. מעשה טוב אחד מספיק כדי שהיום יהיה טוב.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:text}"One glance most kind" (line 6)\n{p:callout}**טיפ לבגרות:** כשמשורר חוזר על מילה - שאלו: ״מה הוא רוצה להדגיש?״',
							hint: '{p:ul}**Why** - למה\n{p:ul}**repeat** - לחזור על\n{d:rtl}מה החזרה על ״one״ מדגישה?'
						},
						{
							type: 'mcq',
							prompt: '"That helped some soul and nothing cost" - what does "nothing cost" mean?',
							options: [
								['The shop was closed.', 'אין חנות בשיר.'],
								'The act did not cost money and was not hard to do.',
								['The act was very expensive.', 'זה ההפך - nothing cost = לא עלה כלום.'],
								['Nobody paid the speaker.', 'השיר לא מדבר על משכורת.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}המעשה לא עלה כסף ולא דרש מאמץ גדול - כמו חיוך או מילה טובה. כל אחד יכול לעשות את זה!\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"No act most small" (line 14)\n{p:text}"That helped some soul and nothing cost —" (line 15)\n{p:callout}**טיפ לבגרות:** שאלה כזאת הופיעה בעבר בבגרות! בתשובה הסבירו ״במילים שלכם״ - לא רק העתיקו מהשיר.',
							hint: '{p:ul}**nothing cost** - לא עלה כלום\n{d:rtl}nothing cost = cost nothing = לא עלה כלום.'
						},
						{
							type: 'mcq',
							prompt:
								'"You\'ve cheered no heart, by yea or nay" - what is the idea of "by yea or nay"?',
							options: [
								['by voting in an election', 'אין בחירות בשיר.'],
								['by shouting loudly', 'השורה לא מדברת על צעקות.'],
								['in a foreign language', 'yea ו־nay הן מילים באנגלית ישנה.'],
								'in any way at all - even with one word like "yes" or "no"'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}yea = כן, nay = לא. ״by yea or nay״ = בשום דרך, אפילו לא במילה אחת. לא שימחתם אף אחד - בכלל.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"You\'ve cheered no heart, by yea or nay —" (line 10)\n{p:callout}**טיפ לבגרות:** בשירים ישנים יש מילים ישנות. ההקשר עוזר להבין אותן גם בלי מילון.',
							hint: '{p:ul}**yea** - כן (ישן)\n{p:ul}**nay** - לא (ישן)\n{d:rtl}yea = yes, nay = no (אנגלית ישנה).'
						},
						{
							type: 'mcq',
							prompt: 'Why is a day without kindness "worse than lost"?',
							options: [
								"because you missed a chance to make someone's life better",
								['because you lost your keys', 'lost כאן לא קשור לאיבוד חפצים.'],
								['because the day was rainy', 'השיר לא מדבר על מזג האוויר.'],
								['because you were late', 'השיר לא מדבר על איחור.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}יום ״אבוד״ הוא יום שלא קרה בו כלום. אבל יום בלי טוב הוא ״גרוע מאבוד״, כי היה לנו סיכוי לשמח מישהו - ופספסנו אותו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"That helped some soul and nothing cost —" (line 15)\n{p:text}"Then count that day as worse than lost." (line 16)\n{p:callout}**טיפ לבגרות:** Why do you think…? → התחילו ב־I think that… והוסיפו because.',
							hint: '{p:ul}**Why** - למה\n{p:ul}**worse than** - גרוע יותר מ…\n{d:rtl}מה הייתם יכולים לעשות באותו יום - ולא עשיתם?'
						},
						{
							type: 'preface',
							text: '## מה אתם חושבים?\n{d:rtl}עכשיו נחבר בין חלקים שונים בשיר ובין השיר לחיים. תשובות כאלה מרשימות מאוד את המורים!'
						},
						{
							type: 'preface',
							text: '{p:text}**Stanza 1 (good day)**\n{p:text}"That fell like sunshine where it went —" (line 7)\n{p:text}"Then you may count that day well spent." (line 8)\n---\n{p:text}**Stanza 2 (wasted day)**\n{p:text}"That brought the sunshine to one face —" (line 13)\n{p:text}"Then count that day as worse than lost." (line 16)\n{d:rtl}השוו: בבית 1 נתתם ״sunshine״, והיום ״well spent״. בבית 2 לא הבאתם ״sunshine״ לאף אחד, והיום ״worse than lost״.'
						},
						{
							type: 'mcq',
							prompt: 'What is the main difference between the two stanzas?',
							options: [
								[
									'Stanza 1 is about the morning, and stanza 2 is about the night.',
									'שני הבתים מדברים על אותו יום שלם, שנבדק בשקיעה.'
								],
								['Each stanza has a different speaker.', 'יש דובר אחד שפונה ל״you״ בשני הבתים.'],
								'Stanza 1: a day with one kind act is well spent. Stanza 2: a day with no kind act is worse than lost.',
								['There is no difference.', 'יש הבדל גדול - התוצאה הפוכה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הבתים בנויים אותו דבר (If… Then…), אבל התוצאה הפוכה: מעשה טוב ← ״well spent״; שום מעשה טוב ← ״worse than lost״. זה ניגוד (contrast).\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Then you may count that day well spent." (line 8)\n{p:text}"Then count that day as worse than lost." (line 16)\n{p:callout}**טיפ לבגרות:** תשובה מצוינת להשוואה: On the one hand, stanza 1… On the other hand, stanza 2…',
							hint: '{p:ul}**difference** - הבדל\n{p:ul}**stanzas** - בתים\n{d:rtl}השוו את השורה האחרונה בכל בית.'
						},
						{
							type: 'mcq',
							prompt: 'Why do you think the poem is called "Count That Day Lost"?',
							options: [
								['It is about a page lost from a calendar.', 'אין בשיר לוח שנה.'],
								['It is about counting numbers.', 'count כאן = להחשיב, לא לספור מספרים.'],
								'It warns us not to waste our days without helping others.',
								['It is about a person who got lost.', 'אף אחד לא הולך לאיבוד בשיר.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הכותרת לקוחה מהשורה האחרונה. היא מזהירה אותנו: אם לא עשינו טוב לאף אחד - היום ״אבוד״. כך הכותרת גורמת לנו לחשוב איך אנחנו מבלים את הזמן.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Then count that day as worse than lost." (line 16)\n{p:callout}**טיפ לבגרות:** שאלה על הכותרת? בדקו אם היא מופיעה בתוך השיר, ומה היא מדגישה.',
							hint: '{p:ul}**Why do you think** - למה לדעתך\n{p:ul}**called** - נקרא\n{d:rtl}מאיפה לקוחה הכותרת? חפשו אותה בשורה האחרונה.'
						},
						{
							type: 'mcq',
							prompt: 'Which situation fits the message of the poem best?',
							options: [
								'Dana smiles and talks to a new student who sits alone.',
								['Tom buys a new phone.', 'קנייה לעצמך היא לא עזרה לאחר.'],
								['Noa sleeps all Saturday.', 'מנוחה זה בסדר - אבל זה לא מעשה טוב לאחרים.'],
								['Eli wins a computer game alone.', 'ניצחון אישי לא עוזר לאף אחד אחר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}דנה עשתה בדיוק מה שהשיר מתאר: מבט חם ומילה טובה, שלא עלו לה כלום - והביאו ״sunshine״ לפנים של מישהו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One glance most kind" (line 6)\n{p:text}"That fell like sunshine where it went —" (line 7)\n{p:text}"That brought the sunshine to one face —" (line 13)\n{p:text}"That helped some soul and nothing cost —" (line 15)\n{p:callout}**טיפ לבגרות:** קישור בין השיר לחיים הוא דרישה נפוצה במשימות ספרות. תמיד חזרו למילים מהשיר.',
							hint: '{p:ul}**fits** - מתאים\n{p:ul}**situation** - מצב\n{d:rtl}מי מהם עשה משהו קטן בשביל מישהו אחר?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-count-day-answer',
		section: 'd-2',
		titleEn: 'Answer Like a Pro',
		required: ['d-count-day-think'],
		position: {
			x: -120,
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
							text: '## תשובה בשלושה צעדים\n{d:rtl}במשימות ובמבחנים לא מספיק לדעת את התשובה - צריך לכתוב אותה נכון. זוכרים את שלושת הצעדים?'
						},
						{
							type: 'steps',
							ordered: true,
							steps: [
								'**ANSWER** - עונים על השאלה במשפט אחד ברור.\n{p:text}According to the poem, …',
								'**PROVE** - מביאים ראיה מהשיר, עם מספר שורה.\n{p:text}For example, in lines 4-5 the speaker says, "…"',
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
								'{p:text}**According to the poem, what makes a day "well spent"? Explain.**\n{d:rtl}סדרו את המשפטים לתשובה מלאה: ANSWER → PROVE → EXPLAIN',
							tiles: [
								'According to the poem, a day is "well spent" when we do at least one kind act for another person.',
								'For example, in lines 4-5 the speaker talks about "one word / That eased the heart of him who heard."',
								'This shows that even one kind word can make our day meaningful, because it helps someone feel better.'
							],
							explanation: '{d:rtl}מצוין! זו תשובה מלאה: תשובה ← ראיה ← הסבר.'
						},
						{
							type: 'mcq',
							prompt: 'In the answer you built, which sentence is the PROVE part?',
							options: [
								['According to the poem, a day is "well spent"…', 'זה ה־ANSWER - התשובה עצמה.'],
								'For example, in lines 4-5 the speaker talks about…',
								['This shows that even one kind word…', 'זה ה־EXPLAIN - ההסבר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}משפט הראיה מביא ציטוט מהשיר עם מספרי שורות. הוא מתחיל בדרך כלל ב־For example, in line…\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One self-denying deed, one word" (line 4)\n{p:text}"That eased the heart of him who heard," (line 5)\n{p:callout}**טיפ לבגרות:** כשמצטטים שתי שורות, מפרידים ביניהן בקו נטוי: "one word / That eased the heart…"',
							hint: '{p:ul}**PROVE** - ראיה\n{d:rtl}באיזה משפט יש ציטוט ומספרי שורות?'
						},
						{
							type: 'preface',
							text: '## בונים תשובה בעצמנו\n{d:rtl}השאלה: Why do you think the poet uses the word "sunshine"? בחרו בכל שלב את המשפט הטוב ביותר.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**Why do you think the poet uses the word "sunshine"? Explain.**\n{d:rtl}שלב 1: בחרו את משפט ה־ANSWER הטוב ביותר.',
							options: [
								['The poem is about the weather.', 'השיר לא עוסק במזג האוויר - השמש היא סמל.'],
								['Sunshine is yellow and hot.', 'זה תיאור של השמש, לא תשובה לשאלה ״למה״.'],
								'I think the poet uses the word "sunshine" to show that a kind act makes another person feel warm and happy.'
							],
							correctIndex: 2
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**Why do you think the poet uses the word "sunshine"? Explain.**\n{d:rtl}שלב 2: בחרו את משפט ה־PROVE הטוב ביותר.',
							options: [
								'For example, in line 7 a kind glance "fell like sunshine where it went."',
								['For example, the poem has two stanzas.', 'זו עובדה על המבנה, לא ראיה.'],
								['For example, in line 9 the day is "livelong."', 'השורה הזאת לא קשורה לשמש.']
							],
							correctIndex: 0
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**Why do you think the poet uses the word "sunshine"? Explain.**\n{d:rtl}שלב 3: בחרו את משפט ה־EXPLAIN הטוב ביותר.',
							options: [
								['This shows that the poet likes summer.', 'השיר לא מדבר על קיץ.'],
								"This shows that, like the sun, a small kind act can bring light and warmth into someone's day.",
								['George Eliot was an English writer.', 'זה מידע על הכותבת, לא הסבר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}התשובה המלאה:\n{p:text}I think the poet uses the word "sunshine" to show that a kind act makes another person feel warm and happy.\n{p:text}For example, in line 7 a kind glance "fell like sunshine where it went."\n{p:text}This shows that, like the sun, a small kind act can bring light and warmth into someone\'s day.'
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
								'{p:text}**Now you! Give two examples of how you can use the message of the poem in your own life.**\n{d:rtl}עכשיו תורכם! תנו שתי דוגמאות לאיך אתם יכולים ליישם את המסר של השיר בחיים שלכם. (40-60 מילים)',
							wordBank: [
								'The message of the poem is that',
								'First, I can',
								'Second, I can',
								'These acts are small, but'
							],
							minWords: 40,
							maxWords: 60,
							checklist: [
								'כתבתי את המסר',
								'נתתי שתי דוגמאות',
								'חיברתי למילים מהשיר',
								'כתבתי לפחות 40 מילים'
							],
							modelAnswer:
								'The message of the poem is that we should do at least one kind thing every day. First, I can help my little brother with his homework. Second, I can smile and say hello to a new student who sits alone. These acts are small and "nothing cost" (line 15), but they can make someone happy.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Count That Day Lost" by Anonymous (often attributed to George Eliot) (Bagrut Module D, B1 level). A good answer has three parts: ANSWER (one clear sentence), PROVE (a quote or detail from the poem, with a line number), EXPLAIN ("This shows that..." / "because"). Judge structure and relevance, not literary depth. Model answer: The message of the poem is that we should do at least one kind thing every day. First, I can help my little brother with his homework. Second, I can smile and say hello to a new student who sits alone. These acts are small and "nothing cost" (line 15), but they can make someone happy.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-count-day-challenge',
		section: 'd-2',
		titleEn: 'Literature Challenge',
		required: ['d-count-day-answer'],
		position: {
			x: -120,
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
							prompt: 'Which word rhymes with "sun" (line 1)?',
							options: [
								['find', 'find מתחרזת עם kind (שורות 3, 6).'],
								['word', 'word מתחרזת עם heard (שורות 4-5).'],
								['kind', 'kind מתחרזת עם find.'],
								'done'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}sun - done (שורות 1-2). לשיר יש חריזה קבועה, והיא עוזרת לזכור אותו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:text}"And count the acts that you have done," (line 2)\n{p:callout}**טיפ לבגרות:** מונח שימושי: rhyme = חריזה.',
							hint: '{p:ul}**rhymes** - מתחרז\n{d:rtl}חריזה = סוף מילה שנשמע אותו דבר. קראו בקול: sun…'
						},
						{
							type: 'mcq',
							prompt: 'Both stanzas are built on…',
							options: [
								['questions and answers', 'אין בשיר שאלות.'],
								'"If… then…" sentences',
								['a story with many characters', 'אין דמויות בשיר - רק ״you״.'],
								['a conversation between two people', 'רק הדובר מדבר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}כל בית מתחיל ב־If (אם…) ונגמר ב־Then (…אז). זה מבנה של תנאי ותוצאה: מה שתעשו - יקבע איך היה היום.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:text}"Then you may count that day well spent." (line 8)\n{p:text}"But if, through all the livelong day," (line 9)\n{p:text}"Then count that day as worse than lost." (line 16)\n{p:callout}**טיפ לבגרות:** לזהות מבנה של שיר = להבין אותו טוב יותר. If… then… = סיבה ותוצאה.',
							hint: '{p:ul}**built on** - בנוי על\n{d:rtl}במה מתחילים שני הבתים? ובמה הם נגמרים?'
						},
						{
							type: 'mcq',
							prompt: '"all the livelong day" means…',
							options: [
								['a short day', 'זה ההפך - long = ארוך.'],
								'the whole long day',
								['a lively party', 'מלכודת! live/lively לא קשורים כאן למסיבה.'],
								['yesterday', 'השורה לא מדברת על אתמול.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}livelong = כל היום הארוך. ״all the livelong day״ = במשך כל היום, מהבוקר עד הערב.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"But if, through all the livelong day," (line 9)\n{p:callout}**טיפ לבגרות:** מילים ישנות? חפשו בתוכן מילה שאתם מכירים: livelong ← long.',
							hint: '{d:rtl}long = ארוך.'
						},
						{
							type: 'mcq',
							prompt: 'Which words best describe the speaker?',
							options: [
								['angry and cruel', 'הוא רציני, אבל לא אכזרי - הוא רוצה שנהיה טובים.'],
								['confused', 'הדובר יודע בדיוק מה הוא חושב.'],
								['funny', 'אין בשיר הומור.'],
								'wise and caring - gives good advice'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}הדובר נותן לנו עצה חכמה, כמו מורה או הורה שאכפת לו: איך לבדוק אם היום שלנו היה טוב.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:text}"Then you may count that day well spent." (line 8)\n{p:callout}**טיפ לבגרות:** מילים לתיאור דובר: wise, caring, serious, kind, strict.',
							hint: '{p:ul}**best describe** - מתארים הכי טוב\n{d:rtl}מה הדובר עושה לאורך כל השיר?'
						},
						{
							type: 'mcq',
							prompt: '"That helped some soul" - what does "soul" mean here?',
							options: [
								'a person',
								['a type of music', 'מלכודת! soul music הוא סגנון מוזיקה, אבל לא כאן.'],
								['the bottom of a shoe', 'מלכודת! sole (סוליה) נשמעת אותו דבר, אבל נכתבת אחרת.'],
								['the sun', 'אין קשר לשמש.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}soul = נפש, וכאן: אדם. ״helped some soul״ = עזר לאדם כלשהו - לכל אדם שהוא.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"That helped some soul and nothing cost —" (line 15)\n{p:callout}**טיפ לבגרות:** כמו בעברית: ״לא הייתה שם נפש חיה״ = לא היה שם אף אדם.',
							hint: '{d:rtl}soul = נפש. ״עזר לנפש כלשהי״ = עזר ל…?'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is NOT true according to the poem?',
							options: [
								['The speaker wants us to check our day.', 'זה נכון - שורות 1-3.'],
								['Small acts are important.', 'זה נכון - שורה 14.'],
								'Only expensive gifts make a day good.',
								['A day without kindness is "worse than lost".', 'זה נכון - שורה 16.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}השיר אומר שמעשה טוב ״nothing cost״ (שורה 15) - לא צריך מתנות יקרות. לכן המשפט הזה לא נכון.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"No act most small" (line 14)\n{p:text}"That helped some soul and nothing cost —" (line 15)\n{p:callout}**טיפ לבגרות:** שימו לב למילה NOT! מסמנים אותה בעיגול לפני שעונים.',
							hint: '{p:ul}**NOT true** - לא נכון\n{d:rtl}NOT = לא נכון. חפשו את המשפט שהשיר סותר.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-count-day-mastery',
		section: 'd-2',
		titleEn: 'Mastery Check',
		required: ['d-count-day-challenge'],
		position: {
			x: -120,
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
							prompt: 'When should you "count the acts that you have done"?',
							options: [
								['in the morning', 'הבוקר הוא תחילת היום.'],
								['at lunch', 'לא כתוב בשיר.'],
								'at set of sun',
								['on your birthday', 'השיר מדבר על כל יום.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״at set of sun״ - בשקיעה, בסוף היום.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:text}"And count the acts that you have done," (line 2)\n{p:callout}**טיפ לבגרות:** set of sun = sunset.'
						},
						{
							type: 'mcq',
							prompt: '"glance" means…',
							options: [
								'a quick look',
								['a glass', 'glass = כוס, זכוכית.'],
								['a song', 'song = שיר ששרים.'],
								['a gift', 'gift = מתנה.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}glance = מבט קצר. ״One glance most kind״ = מבט אחד חם ואדיב.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One glance most kind" (line 6)\n{p:callout}**טיפ לבגרות:** מילים דומות במראה הן לא תמיד דומות במשמעות.'
						},
						{
							type: 'mcq',
							prompt: 'The poem is mostly about…',
							options: [
								['the beauty of the sunset', 'השקיעה היא רק הזמן שבו בודקים את היום.'],
								['how to save money', 'השיר אומר שטוב לב ״nothing cost״ - הוא לא עוסק בחיסכון.'],
								['the life of George Eliot', 'השיר לא ביוגרפיה.'],
								'how to know if our day was good - by our kindness to others'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}השיר עוסק בשאלה איך לדעת אם היום שלנו היה טוב - לפי הטוב שעשינו לאחרים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"If you sit down at set of sun" (line 1)\n{p:text}"Then you may count that day well spent." (line 8)\n{p:text}"Then count that day as worse than lost." (line 16)\n{p:callout}**טיפ לבגרות:** theme = על מה השיר.'
						},
						{
							type: 'mcq',
							prompt: 'In which line is the day "well spent"?',
							options: [
								['line 1', 'שורה 1 - ״at set of sun״.'],
								'line 8',
								['line 12', 'שורה 12 - ״nothing done״.'],
								['line 16', 'שורה 16 - ״worse than lost״.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}שורה 8: ״Then you may count that day well spent.״\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Then you may count that day well spent." (line 8)\n{p:callout}**טיפ לבגרות:** ציון מספר שורה מחזק כל תשובה.'
						},
						{
							type: 'mcq',
							prompt: '"worse than lost" shows that the speaker thinks…',
							options: [
								['losing things is bad', 'אין בשיר חפצים שאבדו.'],
								'a day without kindness is a terrible waste',
								['the day was too short', 'השיר מדבר על ״all the livelong day״ - יום ארוך.'],
								['someone got lost', 'הדובר לא הלך לאיבוד.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}לפי הדובר, יום בלי שום טוב לאחרים הוא בזבוז גדול - אפילו גרוע מיום אבוד.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Then count that day as worse than lost." (line 16)\n{p:callout}**טיפ לבגרות:** shows that = מבקשים משמעות.'
						},
						{
							type: 'mcq',
							prompt: 'Which is the best evidence for: "Even small acts are important"?',
							options: [
								['"If you sit down at set of sun"', 'השורה מתארת את הזמן, לא את המעשים.'],
								'"No act most small / That helped some soul and nothing cost"',
								['"But if, through all the livelong day"', 'השורה מתארת את משך היום.'],
								['"If, through it all"', 'השורה לא מדברת על מעשים קטנים.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}השורות 14-15 מדברות במפורש על ״act most small״ - מעשה קטן מאוד שעוזר למישהו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"No act most small" (line 14)\n{p:text}"That helped some soul and nothing cost —" (line 15)\n{p:callout}**טיפ לבגרות:** ראיה טובה מוכיחה בדיוק את הטענה - לא רק קשורה לשיר.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is a good EXPLANATION (not just a quote)?',
							options: [
								['In line 6 the speaker says "One glance most kind."', 'זה ציטוט, לא הסבר.'],
								"This shows that even a smile can make someone's day better.",
								['The poem has 16 lines.', 'עובדה על המבנה.'],
								['The poet is anonymous.', 'עובדה על הכותב.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הסבר מתחיל לרוב ב־This shows that… ואומר מה הראיה מלמדת.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"One glance most kind" (line 6)\n{p:text}"That fell like sunshine where it went —" (line 7)\n{p:callout}**טיפ לבגרות:** ANSWER → PROVE → EXPLAIN.'
						},
						{
							type: 'mcq',
							prompt: 'Why does the word "sunshine" appear in both stanzas?',
							options: [
								['because the poem is about summer', 'השיר לא מדבר על קיץ.'],
								['because the speaker likes the sun', 'זו לא הסיבה - לשמש יש משמעות סמלית.'],
								['by mistake', 'משוררים חוזרים על מילים בכוונה.'],
								'to connect the stanzas: in stanza 1 we give "sunshine" to others, in stanza 2 we don\'t'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}״sunshine״ מחברת בין הבתים: בבית 1 המבט החם ״נופל כמו קרן שמש״ (שורה 7), ובבית 2 לא הבאנו ״sunshine״ לאף פנים (שורה 13). זה מחזק את הניגוד.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"That fell like sunshine where it went —" (line 7)\n{p:text}"That brought the sunshine to one face —" (line 13)\n{p:callout}**טיפ לבגרות:** השוואה בין שני הבתים = תשובה ברמה גבוהה.'
						}
					]
				}
			]
		}
	},
	{
		id: 'd-count-day-samples',
		section: 'd-2',
		titleEn: 'Sample Answers',
		required: ['d-count-day-mastery'],
		position: {
			x: -120,
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
							text: '### שאלה 1\n{p:text}**According to the speaker, what makes a day "well spent"? Explain.**\n---\n{p:text}**According to the speaker**, a day is "well spent" when we do at least one kind thing for another person. **For example, in lines 4-5** the speaker talks about "one word / That eased the heart of him who heard." **This shows that** we do not need to do something big. **In my opinion**, even a small act, like a kind word, can make someone\'s day better.'
						},
						{
							type: 'preface',
							text: '### שאלה 2\n{p:text}**Why do you think the poet uses the word "sunshine"?**\n---\n{p:text}**I think** the poet uses the word "sunshine" **because** a kind act is like the sun: it brings light and warmth. **For example, in line 7**, a kind glance "fell like sunshine where it went." **This shows that** a kind look can make another person feel warm and happy. **In addition**, in line 13 "sunshine" means a smile on someone\'s face.'
						},
						{
							type: 'preface',
							text: '### שאלה 3\n{p:text}**Explain in your own words what the speaker means by "nothing cost" (line 15).**\n---\n{p:text}**The words "nothing cost" mean that** the kind act did not cost money and was not hard to do. **For example**, a smile or a kind word is free. **This shows that** everyone can help others, even people who do not have a lot of money. **In my opinion**, this is a very important idea, **because** it means that we have no excuse not to be kind.'
						},
						{
							type: 'preface',
							text: '### שאלה 4\n{p:text}**What is the difference between the two stanzas?**\n---\n{p:text}**On the one hand**, the first stanza talks about a day when we do at least one good thing for someone, and then the day is "well spent" (line 8). **On the other hand**, the second stanza talks about a day when we do nothing good for anyone, and then the day is "worse than lost" (line 16). **This shows that** our kindness decides the value of our day.'
						},
						{
							type: 'preface',
							text: '### שאלה 5\n{p:text}**Why do you think the poem is called "Count That Day Lost"?**\n---\n{p:text}**I think** the poem is called "Count That Day Lost" **because** it warns us. The speaker wants us to check our day and ask: "Did I help anyone today?" If not, the day is "worse than lost" (line 16). **This shows that** a day without kindness is a missed chance. **That is why** the title makes us think about how we spend our time.'
						},
						{
							type: 'preface',
							text: '### שאלה 6\n{p:text}**Give two examples of how you can use the message of the poem in your own life.**\n---\n{p:text}**The message of the poem is that** we should do at least one kind thing every day. **First**, I can help my little brother with his homework. **Second**, I can smile and say hello to a new student who sits alone in class. **Like the speaker says**, these acts are small and "nothing cost" (line 15), **but** they can bring "sunshine" to someone\'s face (line 13).'
						},
						{
							type: 'summary',
							title: 'ביטויי זהב',
							lines: [
								'**According to the speaker, …** - לפי הדובר, …',
								'**In my opinion, …** - לדעתי, …',
								'**I think that … because …** - אני חושב/ת ש… כי …',
								'**For example, in line __ the speaker says, "…"** - למשל, בשורה __ הדובר אומר…',
								'**This shows that …** - זה מראה ש…',
								'**The message of the poem is that …** - המסר של השיר הוא ש…',
								'**The words "…" mean that …** - המילים ״…״ אומרות ש…',
								'**On the one hand … On the other hand …** - מצד אחד … מצד שני …',
								'**First, … Second, …** - ראשית, … שנית, …',
								'**In addition, …** - בנוסף, …',
								'**Like the speaker says, …** - כמו שהדובר אומר, …',
								'**That is why …** - זו הסיבה ש…'
							]
						},
						{
							type: 'summary',
							title: 'מושגים',
							lines: [
								'**speaker** - הדובר - הקול שמדבר בשיר',
								'**stanza** - בית בשיר',
								'**line** - שורה',
								'**rhyme** - חריזה - סוף מילים שנשמע אותו דבר',
								'**repetition** - חזרה על מילים (one, sunshine, count)',
								'**symbol** - סמל - דבר שמייצג רעיון גדול',
								'**contrast** - ניגוד - השוואה בין שני דברים הפוכים',
								'**theme** - נושא - על מה השיר',
								'**message** - מסר - מה השיר מלמד אותנו',
								'**tone** - טון - האווירה וההרגשה בשיר'
							]
						}
					]
				}
			]
		}
	}
];
