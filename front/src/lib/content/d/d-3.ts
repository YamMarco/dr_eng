// Module D, unit 3: Introduction to Poetry - Billy Collins (1988).
// Source: EngUp_Literature_Developer_Package (04_Data/module_D/unit3_introduction_to_poetry.json).
import type { LessonNode } from '../types';

export const d3Lessons: LessonNode[] = [
	{
		id: 'd-intro-poetry-before',
		section: 'd-3',
		titleEn: 'Before Reading',
		required: [],
		position: {
			x: 0,
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
							text: '## מה אתם מרגישים כשנותנים לכם שיר?\n{d:rtl}המורה מחלק שיר בכיתה ושואל: ״מה המשורר רוצה להגיד?״ הרבה תלמידים מרגישים לחץ - כאילו יש תשובה אחת נכונה, והיא מוסתרת איפשהו.\n\n{d:rtl}השיר שנלמד עכשיו מדבר בדיוק על זה - אבל מהצד של המורה! המורה בשיר מציע דרכים מיוחדות ומהנות לקרוא שיר, והתלמידים שלו... עושים משהו אחר לגמרי.\n\n{p:text}In this poem, a poetry teacher tells us how he wants his students to read a poem - and what they really do.'
						},
						{
							type: 'preface',
							text: '{p:text}**When you get a new poem in class, you usually feel…**\n{d:rtl}כשאתם מקבלים שיר חדש, אתם בדרך כלל מרגישים…\n{p:ul}curious\n{p:ul}bored\n{p:ul}confused - what does it mean?\n{p:ul}excited\n{p:callout}כל תחושה לגיטימית! הרבה תלמידים מרגישים ״מה הוא רוצה ממני?״. בסוף היחידה תראו שיש דרכים אחרות - ומהנות יותר - לפגוש שיר.'
						},
						{
							type: 'preface',
							text: '## המשורר ומילות המפתח\n### ✍️ Billy Collins (born 1941)\n{p:text}An American poet. He was the Poet Laureate of the United States (2001-2003). His poems are clear, simple and often funny.\n{d:rtl}משורר אמריקאי. בשנים 2001-2003 הוא היה ״המשורר הלאומי״ של ארצות הברית. השירים שלו כתובים בשפה פשוטה וברורה, ולעיתים קרובות הם מצחיקים - אבל תמיד יש בהם רעיון רציני.'
						},
						{
							type: 'preface',
							text: '### 📖 A poem about poems\n{p:text}Collins was also a teacher. This poem (1988) is about something he knew well: how students read poems in class.\n{d:rtl}קולינס לימד ספרות אנגלית בקולג׳ שנים רבות. השיר (1988) מדבר על משהו שהוא הכיר היטב: איך תלמידים קוראים שירים בכיתה. זה ״שיר על שירים״!'
						},
						{
							type: 'preface',
							text: '{d:rtl}לפני שקוראים - הכירו את המילים החשובות. כרטיס אחרי כרטיס, ואחר כך תרגול קצר.'
						},
						{
							type: 'word-card',
							word: 'color slide',
							translationHe: 'שקופית צבעונית (תמונה שמסתכלים בה מול האור)',
							exampleEn: 'You hold a **color slide** up to the light to see the picture.'
						},
						{
							type: 'word-card',
							word: 'hive',
							translationHe: 'כוורת (הבית של הדבורים)',
							exampleEn: 'Bees live in a **hive**. It is full of buzzing.'
						},
						{
							type: 'word-card',
							word: 'probe',
							translationHe: 'לחקור, לגשש בזהירות',
							exampleEn: 'The mouse probes = it carefully searches for a way.'
						},
						{
							type: 'word-card',
							word: 'light switch',
							translationHe: 'מתג אור',
							exampleEn: 'In a dark room, you look for the **light switch**.'
						},
						{
							type: 'word-card',
							word: 'waterski',
							translationHe: 'לעשות סקי מים',
							exampleEn: 'to move fast on top of the water, pulled by a boat'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'color slide',
									he: 'שקופית צבעונית (תמונה שמסתכלים בה מול האור)'
								},
								{
									en: 'hive',
									he: 'כוורת (הבית של הדבורים)'
								},
								{
									en: 'probe',
									he: 'לחקור, לגשש בזהירות'
								},
								{
									en: 'light switch',
									he: 'מתג אור'
								},
								{
									en: 'waterski',
									he: 'לעשות סקי מים'
								}
							]
						},
						{
							type: 'word-card',
							word: 'surface',
							translationHe: 'פני השטח, החלק העליון',
							exampleEn: 'the **surface** of the water = the top of the water'
						},
						{
							type: 'word-card',
							word: 'shore',
							translationHe: 'חוף',
							exampleEn: 'People stand on the **shore** and wave.'
						},
						{
							type: 'word-card',
							word: 'rope',
							translationHe: 'חבל',
							exampleEn: "The police tied the thief's hands with a **rope**."
						},
						{
							type: 'word-card',
							word: 'confession',
							translationHe: 'הודאה (כמו בחקירה)',
							exampleEn: 'The police want a **confession**: "Yes, I did it."'
						},
						{
							type: 'word-card',
							word: 'hose',
							translationHe: 'צינור (מים)',
							exampleEn: 'a long rubber tube for water in the garden'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'surface',
									he: 'פני השטח, החלק העליון'
								},
								{
									en: 'shore',
									he: 'חוף'
								},
								{
									en: 'rope',
									he: 'חבל'
								},
								{
									en: 'confession',
									he: 'הודאה (כמו בחקירה)'
								},
								{
									en: 'hose',
									he: 'צינור (מים)'
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'In line 4, the teacher talks about a "hive". What is a hive?',
							options: [
								['a tall tree', 'עץ הוא tree.'],
								['a radio', 'רדיו לא מופיע בשיר - אבל גם מכוורת שומעים ״זמזום״!'],
								'the home of bees',
								['a library', 'ספרייה היא library.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}hive = כוורת, הבית של הדבורים. כשמצמידים אוזן לכוורת, שומעים ״זמזום״ - המון חיים בפנים. כך גם שיר: יש בו ״קולות״ שאפשר להקשיב להם.\n{d:rtl}📜 שורות 4\n{p:callout}**טיפ לבגרות:** לפעמים מילה אחת היא תמונה שלמה. נסו לדמיין אותה!',
							hint: '{d:rtl}זז… זז… איזה בעל חיים גר שם?'
						},
						{
							type: 'mcq',
							prompt: 'In lines 5-6, a mouse "probes" its way out of the poem. "Probe" means…',
							options: [
								'to search carefully',
								['to sleep', 'העכבר לא ישן - הוא פעיל.'],
								['to eat', 'השורה לא מדברת על אוכל.'],
								['to run away very fast', 'probe זה דווקא לאט ובזהירות, לא בריצה מהירה.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}probe = לחקור, לגשש בזהירות. העכבר בודק כל פינה עד שהוא מוצא את הדרך - כמו קורא סקרן שחוקר שיר.\n{d:rtl}📜 שורות 5, 6\n{p:callout}**טיפ לבגרות:** מילים כמו probe, explore, search - כולן קשורות לחקירה וגילוי.',
							hint: '{d:rtl}איך עכבר מתנהג במקום חדש? מהר או בזהירות?'
						},
						{
							type: 'mcq',
							prompt:
								'In lines 9-11, the reader moves across the "surface" of a poem. "Surface" means…',
							options: [
								['the bottom', 'זה ההפך - surface זה למעלה.'],
								['the middle', 'surface זה לא האמצע.'],
								['the inside', 'surface זה דווקא החוץ, לא הפנים.'],
								'the top or outside part'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}surface = פני השטח. בסקי מים מחליקים על פני המים. כך המורה רוצה שהתלמידים ״יחליקו״ על השיר וייהנו ממנו.\n{d:rtl}📜 שורות 9, 10\n{p:callout}**טיפ לבגרות:** surface מופיעה גם במבחני הבנת הנקרא - כדאי לזכור אותה.',
							hint: '{d:rtl}חשבו על סקי מים: נוסעים מתחת למים או מעליהם?'
						},
						{
							type: 'mcq',
							prompt:
								'In lines 12-14, the students want a "confession" from the poem. A confession is…',
							options: [
								['a gift', 'מתנה היא gift.'],
								'when someone admits something',
								['a question', 'שאלה היא question.'],
								['a song', 'שיר ששרים הוא song.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}confession = הודאה. בחקירה רוצים שהחשוד יגיד ״כן, אני עשיתי את זה״. התלמידים מתנהגים כאילו השיר הוא חשוד שצריך ״להודות״ מה הוא אומר.\n{d:rtl}📜 שורות 13, 14\n{p:callout}**טיפ לבגרות:** מילים מעולם המשטרה (confession, tie, rope) יוצרות כאן תמונה של חקירה.',
							hint: '{d:rtl}מה המשטרה רוצה לשמוע בחקירה?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-intro-poetry-read',
		section: 'd-3',
		titleEn: 'Understand the Poem',
		required: ['d-intro-poetry-before'],
		position: {
			x: 0,
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
							text: '## קוראים את השיר\n{d:rtl}קראו את השיר כולו. מתחת לכל בית יש הסבר קצר בעברית ובאנגלית פשוטה. אל תדאגו אם לא הבנתם הכול - בשלב הבא נעבור על השיר חלק אחרי חלק.\n\n{p:callout}לשיר יש 7 בתים קצרים ו־16 שורות. אין בו חריזה - זה ״שיר חופשי״ (free verse). שימו לב: חמשת הבתים הראשונים מדברים על המורה, ושני האחרונים - על התלמידים.'
						},
						{
							type: 'poem',
							title: 'Introduction to Poetry - Billy Collins',
							stanzas: [
								{
									label: 'Lines 1-3',
									lines: [
										{
											n: 1,
											en: ''
										},
										{
											n: 2,
											en: ''
										},
										{
											n: 3,
											en: ''
										}
									],
									note: '{p:text}Look at the poem against the light, like a color slide. (sight)\n{d:rtl}המורה מבקש מהתלמידים להחזיק את השיר מול האור ולהסתכל בו, כמו בשקופית צבעונית - לגלות את הצבעים והפרטים. (חוש הראייה)'
								},
								{
									label: 'Line 4',
									lines: [
										{
											n: 4,
											en: ''
										}
									],
									note: '{p:text}Put your ear on the poem, like on a beehive, and listen. (hearing)\n{d:rtl}או להצמיד אוזן לשיר, כמו לכוורת, ולהקשיב ל״זמזום״ שבתוכו. (חוש השמיעה)'
								},
								{
									label: 'Lines 5-6',
									lines: [
										{
											n: 5,
											en: ''
										},
										{
											n: 6,
											en: ''
										}
									],
									note: '{p:text}Drop a mouse into the poem and watch it slowly find its way out. (exploring)\n{d:rtl}הוא מציע ״להכניס עכבר״ לתוך השיר ולצפות איך הוא מוצא לאט־לאט את הדרך החוצה. (סקרנות וחקירה)'
								},
								{
									label: 'Lines 7-8',
									lines: [
										{
											n: 7,
											en: ''
										},
										{
											n: 8,
											en: ''
										}
									],
									note: '{p:text}Walk into the poem like into a dark room and look for the light switch. (searching for understanding)\n{d:rtl}או להיכנס לשיר כמו לחדר חשוך ולמשש את הקירות עד שמוצאים את מתג האור - את הרגע שבו ״נדלקת״ ההבנה. (חוש המישוש)'
								},
								{
									label: 'Lines 9-11',
									lines: [
										{
											n: 9,
											en: ''
										},
										{
											n: 10,
											en: ''
										},
										{
											n: 11,
											en: ''
										}
									],
									note: '{p:text}Waterski across the poem for fun and wave hello to the poet on the shore. (enjoying)\n{d:rtl}הוא רוצה שיחליקו על פני השיר בסקי מים, בכיף, ויגידו שלום לשם של המשורר שעומד על החוף. (הנאה)'
								},
								{
									label: 'Lines 12-14',
									lines: [
										{
											n: 12,
											en: ''
										},
										{
											n: 13,
											en: ''
										},
										{
											n: 14,
											en: ''
										}
									],
									note: '{p:text}BUT the students tie the poem to a chair and try to force it to "confess". (forcing)\n{d:rtl}אבל! כל מה שהתלמידים רוצים זה לקשור את השיר לכיסא ולהכריח אותו ״להודות״, כמו אסיר בחקירה. (כפייה)'
								},
								{
									label: 'Lines 15-16',
									lines: [
										{
											n: 15,
											en: ''
										},
										{
											n: 16,
											en: ''
										}
									],
									note: '{p:text}They even beat it with a hose - only to find out what it "really means". (violence)\n{d:rtl}הם אפילו מכים אותו בצינור, רק כדי לגלות ״מה הוא באמת אומר״. (אלימות - בשביל תשובה אחת)'
								}
							]
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Lines 1-3',
									lines: [
										{
											n: 1,
											en: ''
										},
										{
											n: 2,
											en: ''
										},
										{
											n: 3,
											en: ''
										}
									],
									note: '{p:text}Look at the poem against the light, like a color slide. (sight)\n{d:rtl}המורה מבקש מהתלמידים להחזיק את השיר מול האור ולהסתכל בו, כמו בשקופית צבעונית - לגלות את הצבעים והפרטים. (חוש הראייה)'
								},
								{
									label: 'Line 4',
									lines: [
										{
											n: 4,
											en: ''
										}
									],
									note: '{p:text}Put your ear on the poem, like on a beehive, and listen. (hearing)\n{d:rtl}או להצמיד אוזן לשיר, כמו לכוורת, ולהקשיב ל״זמזום״ שבתוכו. (חוש השמיעה)'
								},
								{
									label: 'Lines 5-6',
									lines: [
										{
											n: 5,
											en: ''
										},
										{
											n: 6,
											en: ''
										}
									],
									note: '{p:text}Drop a mouse into the poem and watch it slowly find its way out. (exploring)\n{d:rtl}הוא מציע ״להכניס עכבר״ לתוך השיר ולצפות איך הוא מוצא לאט־לאט את הדרך החוצה. (סקרנות וחקירה)'
								},
								{
									label: 'Lines 7-8',
									lines: [
										{
											n: 7,
											en: ''
										},
										{
											n: 8,
											en: ''
										}
									],
									note: '{p:text}Walk into the poem like into a dark room and look for the light switch. (searching for understanding)\n{d:rtl}או להיכנס לשיר כמו לחדר חשוך ולמשש את הקירות עד שמוצאים את מתג האור - את הרגע שבו ״נדלקת״ ההבנה. (חוש המישוש)'
								}
							],
							title: 'שורות 1-8: הרעיונות של המורה'
						},
						{
							type: 'preface',
							text: '### 🧑‍🏫 Stanzas 1-4\n{p:text}The teacher ("I") gives his students ("them") four ideas: look at the poem against the light, listen to it, explore it like a mouse, and walk inside it like a dark room until you find the light switch.\n{d:rtl}המורה (״I״) נותן לתלמידים שלו (״them״) ארבעה רעיונות: להסתכל בשיר מול האור, להקשיב לו, לחקור אותו כמו עכבר, ולהיכנס לתוכו כמו לחדר חשוך עד שמוצאים את מתג האור. שימו לב: כל רעיון משתמש בחוש אחר - ראייה, שמיעה, מישוש.'
						},
						{
							type: 'mcq',
							prompt: 'Who is the "I" in the poem?',
							options: [
								['a student', 'התלמידים הם ״them״ ו״they״ - לא ״I״.'],
								'a poetry teacher',
								['a scientist', 'אין מדען בשיר, למרות העכבר!'],
								['a police officer', 'יש תמונה של חקירה בסוף, אבל ה״I״ הוא לא שוטר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הדובר הוא מורה לשירה. הוא מדבר על ״them״ - התלמידים שלו - ועל מה שהוא מבקש מהם לעשות עם שיר.\n{d:rtl}📜 שורות 1, 5\n{p:callout}**טיפ לבגרות:** בשיר שיש בו I ו־they, שאלו: מי מדבר, ועל מי?',
							hint: '{p:ul}**Who** - מי\n{d:rtl}מי ״מבקש מהם״ ו״אומר להם״ מה לעשות עם שיר?'
						},
						{
							type: 'mcq',
							prompt: 'In lines 1-3, what does the teacher ask students to do with a poem?',
							options: [
								['throw it away', 'ההפך - הוא רוצה שיסתכלו בו מקרוב.'],
								['learn it by heart', 'השיר לא מדבר על שינון.'],
								['translate it into Hebrew', 'השיר לא מדבר על תרגום.'],
								'look at it against the light, like a color slide'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}הוא מבקש להחזיק את השיר מול האור ולהסתכל בו כמו בשקופית צבעונית - לראות את כל הצבעים והפרטים שבו.\n{d:rtl}📜 שורות 1, 2, 3\n{p:callout}**טיפ לבגרות:** like = כמו. כשרואים like, יש השוואה - וזה כלי חשוב בשירה.',
							hint: '{p:ul}**ask** - מבקש\n{d:rtl}מה עושים עם שקופית צבעונית?'
						},
						{
							type: 'mcq',
							prompt: 'Which sense is used in line 4 (the hive)?',
							options: [
								'hearing',
								['taste', 'לא טועמים כוורת!'],
								['smell', 'השורה לא מדברת על ריח.'],
								['sight', 'ראייה מופיעה בבית הראשון (האור והשקופית).']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}בשורה 4 מצמידים אוזן לשיר כמו לכוורת - זה חוש השמיעה. המורה רוצה שנשמע את ״המוזיקה״ של השיר.\n{d:rtl}📜 שורות 4\n{p:callout}**טיפ לבגרות:** תמונות בשיר שמפעילות את החושים נקראות imagery.',
							hint: '{p:ul}**sense** - חוש\n{d:rtl}מה עושים עם האוזן?'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Lines 9-11',
									lines: [
										{
											n: 9,
											en: ''
										},
										{
											n: 10,
											en: ''
										},
										{
											n: 11,
											en: ''
										}
									],
									note: '{p:text}Waterski across the poem for fun and wave hello to the poet on the shore. (enjoying)\n{d:rtl}הוא רוצה שיחליקו על פני השיר בסקי מים, בכיף, ויגידו שלום לשם של המשורר שעומד על החוף. (הנאה)'
								},
								{
									label: 'Lines 12-14',
									lines: [
										{
											n: 12,
											en: ''
										},
										{
											n: 13,
											en: ''
										},
										{
											n: 14,
											en: ''
										}
									],
									note: '{p:text}BUT the students tie the poem to a chair and try to force it to "confess". (forcing)\n{d:rtl}אבל! כל מה שהתלמידים רוצים זה לקשור את השיר לכיסא ולהכריח אותו ״להודות״, כמו אסיר בחקירה. (כפייה)'
								},
								{
									label: 'Lines 15-16',
									lines: [
										{
											n: 15,
											en: ''
										},
										{
											n: 16,
											en: ''
										}
									],
									note: '{p:text}They even beat it with a hose - only to find out what it "really means". (violence)\n{d:rtl}הם אפילו מכים אותו בצינור, רק כדי לגלות ״מה הוא באמת אומר״. (אלימות - בשביל תשובה אחת)'
								}
							],
							title: 'שורות 9-16: כיף… ואז ״אבל״'
						},
						{
							type: 'preface',
							text: "### 🎿 Stanza 5\n{p:text}The teacher's last idea: waterski across the poem - move on top of it, have fun, and wave hello to the poet on the shore.\n{d:rtl}הרעיון האחרון של המורה: לעשות ״סקי מים״ על השיר - להחליק עליו בכיף ולנופף לשלום לשם של המשורר שעומד על החוף. קריאה של שיר יכולה להיות כמו יום כיף בים!"
						},
						{
							type: 'preface',
							text: '### ⛓️ Stanzas 6-7\n{p:text}BUT the students want something else. They tie the poem to a chair, try to force it to "confess", and even beat it with a hose - only to find out what it "really means".\n{d:rtl}אבל התלמידים רוצים משהו אחר לגמרי. הם קושרים את השיר לכיסא, מנסים להכריח אותו ״להודות״, ואפילו מכים אותו בצינור - רק כדי לגלות ״מה הוא באמת אומר״. זו תמונה של חקירה אלימה!'
						},
						{
							type: 'mcq',
							prompt: 'In lines 9-11, the teacher wants his students to…',
							options: [
								['swim to the bottom of the sea', 'ההפך - בסקי מים נשארים על פני המים.'],
								['go fishing', 'אין דייג בשיר.'],
								'enjoy the poem lightly, like waterskiing',
								['build a boat', 'אין בניית סירה בשיר.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}המורה רוצה שהתלמידים ״יחליקו״ על השיר בכיף, כמו בסקי מים, ואפילו ינופפו לשלום למשורר. קריאה של שיר = חוויה מהנה.\n{d:rtl}📜 שורות 9, 10, 11\n{p:callout}**טיפ לבגרות:** בשאלות על ״מה הדמות רוצה״ - חפשו את המילה want בטקסט.',
							hint: '{p:ul}**wants** - רוצה\n{d:rtl}איזה ספורט מופיע בשורה 9?'
						},
						{
							type: 'mcq',
							prompt: 'Which word in line 12 starts the big change in the poem?',
							options: [
								['And', 'And מוסיפה - היא לא משנה כיוון.'],
								['So', 'So מסמנת תוצאה, וגם לא מופיעה שם.'],
								'But',
								['Or', 'Or מופיעה בבתים הקודמים, כשהמורה מציע עוד רעיון.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}המילה But (אבל) פותחת את שורה 12 ומשנה את כל השיר: עד עכשיו - הרעיונות היפים של המורה; מעכשיו - מה שהתלמידים באמת עושים.\n{d:rtl}📜 שורות 12\n{p:callout}**טיפ לבגרות:** מילות ניגוד (But, However, Yet) הן ״תמרורים״. מה שבא אחריהן הוא בדרך כלל החשוב.',
							hint: '{p:ul}**change** - שינוי\n{d:rtl}איזו מילה מסמנת ניגוד - ״אבל״?'
						},
						{
							type: 'mcq',
							prompt: 'What do the students want to do with the poem?',
							options: [
								'force it to tell them its meaning, like a prisoner',
								['read it for fun', 'זה מה שהמורה רוצה - לא מה שהתלמידים עושים.'],
								['write their own poem', 'השיר לא מדבר על כתיבה.'],
								['sing it', 'אין שירה בקול בשיר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}התלמידים מתייחסים לשיר כמו לאסיר: קושרים אותו ומנסים להוציא ממנו בכוח ״הודאה״ - את המשמעות האחת ״הנכונה״.\n{d:rtl}📜 שורות 12, 13, 14\n{p:callout}**טיפ לבגרות:** שימו לב להבדל בין מה שהמורה רוצה (want) למה שהתלמידים רוצים. זה לב השיר!',
							hint: '{p:ul}**students** - תלמידים\n{p:ul}**want** - רוצים\n{d:rtl}מה עושים לאסיר בחקירה?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-intro-poetry-meaning',
		section: 'd-3',
		titleEn: 'Speaker & Meaning',
		required: ['d-intro-poetry-read'],
		position: {
			x: 0,
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
							text: '## הדובר והרגשות שלו\n### 🗣️ Who is the speaker?\n{p:text}The speaker is a poetry teacher. He talks about "them" / "they" - his students.\n{d:rtl}הדובר הוא מורה לשירה. הוא מדבר על ״them״ ו־״they״ - התלמידים שלו. אפשר לחשוב שזה קולינס עצמו (הוא היה מרצה), אבל בתשובות כותבים: The speaker…'
						},
						{
							type: 'preface',
							text: '{d:rtl}הרגשות של המורה משתנים לאורך השיר. עקבו אחריהם:'
						},
						{
							type: 'steps',
							steps: [
								'**"light, hive, mouse, room"** (line 1-8): hopeful, creative\n{d:rtl}מלא תקווה ויצירתי - מציע עוד ועוד רעיונות',
								'**"waterski"** (line 9-11): playful, happy\n{d:rtl}שובב ושמח - קריאה כמו יום כיף בים',
								'**"But…"** (line 12): disappointed\n{d:rtl}מאוכזב - התלמידים לא מקשיבים לו',
								'**"chair, rope, hose"** (line 13-16): frustrated (and a little funny)\n{d:rtl}מתוסכל - אבל מתאר את זה בהגזמה מצחיקה'
							]
						},
						{
							type: 'mcq',
							prompt: 'How does the teacher feel in lines 1-11?',
							options: [
								['angry', 'הכעס/תסכול מגיע רק בסוף.'],
								['bored', 'מי שמשועמם לא ממציא חמישה רעיונות שונים!'],
								['afraid', 'אין בשורות האלה פחד.'],
								'hopeful and creative'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}המורה מציע רעיון אחרי רעיון - אור, כוורת, עכבר, חדר, סקי מים. הוא יצירתי ומלא תקווה שהתלמידים ייהנו מהשיר.\n{d:rtl}📜 שורות 1, 5, 9\n{p:callout}**טיפ לבגרות:** לפעמים אין מילת רגש בטקסט. אז מסיקים את הרגש ממה שהדמות עושה.',
							hint: '{d:rtl}כמה רעיונות שונים הוא מציע? מה זה אומר עליו?'
						},
						{
							type: 'mcq',
							prompt: 'How does the teacher feel at the end of the poem?',
							options: [
								['proud of the students', 'הוא לא גאה - הם עושים ההפך ממה שביקש.'],
								'frustrated and disappointed with the students',
								['very happy', 'ה־But בשורה 12 מראה שמשהו לא בסדר.'],
								['afraid of the students', 'הוא לא מפחד מהם - הוא מתוסכל מהם.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}המורה מאוכזב ומתוסכל: הוא הציע דרכים יפות, והתלמידים בוחרים ״לחקור״ את השיר באלימות. הוא מתאר את זה בהגזמה, ולכן זה גם קצת מצחיק.\n{d:rtl}📜 שורות 12, 15, 16\n{p:callout}**טיפ לבגרות:** ביטויים טובים: frustrated (מתוסכל), disappointed (מאוכזב).',
							hint: '{p:ul}**at the end** - בסוף\n{d:rtl}מה הוא מרגיש כשהתלמידים עושים ההפך ממה שביקש?'
						},
						{
							type: 'preface',
							text: '## התמונות בשיר: מה הן אומרות?\n### 🔑 What is a metaphor?\n{p:text}A metaphor compares two things without "like". A simile compares with "like" or "as".\n{d:rtl}מטאפורה (metaphor) משווה בין שני דברים בלי המילה ״כמו״: ״השיר הוא חדר חשוך״. השוואה עם like או as נקראת simile: ״כמו שקופית צבעונית״. כל השיר הזה בנוי מהשוואות כאלה!'
						},
						{
							type: 'preface',
							text: '{d:rtl}הנה התמונות בשיר, ומה כל אחת אומרת על קריאת שירה:'
						},
						{
							type: 'steps',
							steps: [
								'**🖼️ A color slide (lines 1-3)**\n{p:text}Look closely and see all the colors and details.\n{d:rtl}להסתכל מקרוב ולגלות את כל הצבעים והפרטים.',
								'**🐝 A hive (line 4)**\n{p:text}Listen - a poem is full of sounds and life.\n{d:rtl}להקשיב - שיר מלא ״זמזום״, צלילים וחיים.',
								'**🐭 A mouse (lines 5-6)**\n{p:text}Explore slowly and find your own way.\n{d:rtl}לחקור לאט ולמצוא את הדרך שלך.',
								'**💡 A dark room (lines 7-8)**\n{p:text}Search until the light goes on - until you understand.\n{d:rtl}לחפש עד ש״נדלק האור״ - עד שמבינים.',
								'**🎿 Waterskiing (lines 9-11)**\n{p:text}Enjoy the poem and be friends with the poet.\n{d:rtl}ליהנות מהשיר ולהיות ״חברים״ של המשורר.',
								'**⛓️ A chair, a rope, a hose (lines 12-16)**\n{p:text}Forcing one "correct" answer out of the poem.\n{d:rtl}לנסות להוציא מהשיר בכוח תשובה אחת ״נכונה״.'
							]
						},
						{
							type: 'mcq',
							prompt: 'Dropping a mouse into a poem (lines 5-6) is an image of…',
							options: [
								['a pet in the classroom', 'זו לא חיית מחמד אמיתית - זו תמונה.'],
								'exploring the poem slowly and finding your own way',
								['a scary animal', 'העכבר לא מפחיד כאן - הוא סקרן.'],
								['a mistake in the poem', 'אין טעות בשיר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}העכבר מגשש, בודק כל פינה ומוצא לבד את הדרך. כך המורה רוצה שהתלמידים יחקרו את השיר - בסקרנות, בסבלנות, בדרך שלהם.\n{d:rtl}📜 שורות 5, 6\n{p:callout}**טיפ לבגרות:** כשכותבים על תמונה בשיר: The image of ___ shows that ___.',
							hint: '{p:ul}**image** - תמונה\n{d:rtl}מה עושה עכבר במבוך?'
						},
						{
							type: 'mcq',
							prompt: 'Tying the poem to a chair and beating it (lines 12-16) is an image of…',
							options: [
								['a crime story', 'זה נראה כמו סיפור פשע, אבל זו תמונה של קריאה.'],
								['a game', 'זה לא משחק - זו כפייה.'],
								['a sports activity', 'הספורט (סקי מים) הוא בדרך של המורה.'],
								'forcing one "correct" meaning out of the poem'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}התמונה של חקירה אלימה מראה איך התלמידים ״לוחצים״ על השיר כדי שייתן להם תשובה אחת - במקום ליהנות ממנו.\n{d:rtl}📜 שורות 13, 15, 16\n{p:callout}**טיפ לבגרות:** שימו לב לניגוד בין תמונות עדינות (אור, עכבר) לתמונות אלימות (חבל, צינור).',
							hint: '{p:ul}**image** - תמונה\n{d:rtl}מה התלמידים רוצים לגלות בשורה 16?'
						},
						{
							type: 'preface',
							text: '## הנושא והמסר\n### 📌 Theme · נושא\n{p:text}How to read and enjoy poetry.\n{d:rtl}הנושא (theme) הוא ״על מה השיר״: איך קוראים שירה - ואיך נהנים ממנה.'
						},
						{
							type: 'preface',
							text: '### 💬 Message · מסר\n{p:text}We should explore a poem with curiosity and enjoy it, and not force it to give us one "right" answer.\n{d:rtl}המסר (message): צריך לחקור שיר בסקרנות וליהנות ממנו, ולא ״לסחוט״ ממנו בכוח תשובה אחת ״נכונה״. לשיר יכולות להיות כמה משמעויות.'
						},
						{
							type: 'preface',
							text: '### ⚠️ A common mistake\n{p:text}Some students think the message is "Poems have no meaning" or "The teacher hates his students". No! Poems do have meaning - but we find it by exploring, not by force.\n{d:rtl}טעות נפוצה: לחשוב שהמסר הוא ״לשירים אין משמעות״ או ״המורה שונא את התלמידים״. לא! לשיר יש משמעות - אבל מגלים אותה בחקירה ובהנאה, לא בכוח. והמורה לא שונא אותם - הוא מתוסכל כי אכפת לו.'
						},
						{
							type: 'preface',
							text: '{p:callout}רגע של אירוניה 😉: גם באפליקציה הזאת שואלים אתכם ״מה השיר אומר״. המטרה שלנו היא בדיוק מה שהמורה בשיר רוצה - לחקור ולגלות, לא ״לענות״ את השיר!'
						},
						{
							type: 'mcq',
							prompt: 'What is the main theme of the poem?',
							options: [
								'how to read and enjoy poetry',
								['sports and the sea', 'סקי מים הוא רק אחת התמונות.'],
								['animals', 'העכבר והדבורים הם תמונות, לא הנושא.'],
								['crime and the police', 'החקירה היא תמונה - לא סיפור פשע אמיתי.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הנושא הוא קריאת שירה: שתי דרכים לפגוש שיר - הדרך של המורה (חקירה והנאה) והדרך של התלמידים (כפייה).\n{d:rtl}📜 שורות 1, 12, 16\n{p:callout}**טיפ לבגרות:** נושא (theme) = מילה או כמה מילים. מסר (message) = משפט שלם.',
							hint: '{p:ul}**theme** - נושא\n{d:rtl}על מה המורה והתלמידים ״רבים״ לאורך כל השיר?'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence best describes the message of the poem?',
							options: [
								['Poems have no meaning.', 'למשורר חשוב דווקא שנגלה את המשמעות - בדרך הנכונה.'],
								['Students should never study poems.', 'המורה רוצה שילמדו שירים - בדרך אחרת.'],
								'Poems should be explored and enjoyed, not forced to give one answer.',
								['Only teachers can understand poems.', 'המורה רוצה שהתלמידים יבינו בעצמם.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}המורה מציע לחקור וליהנות (שורות 1-11). התלמידים מנסים ״לסחוט״ משמעות אחת (שורות 12-16). המשורר מעדיף בבירור את הדרך הראשונה.\n{d:rtl}📜 שורות 9, 12, 16\n{p:callout}**טיפ לבגרות:** כשיש ״best״ בשאלה - בחרו את התשובה המלאה והמדויקת ביותר.',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{p:ul}**message** - מסר\n{d:rtl}מה ההבדל בין הדרך של המורה לדרך של התלמידים?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-intro-poetry-think',
		section: 'd-3',
		titleEn: 'Think About It',
		required: ['d-intro-poetry-meaning'],
		position: {
			x: 0,
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
							title: 'Introduction to Poetry - Billy Collins',
							stanzas: [
								{
									label: 'Lines 1-3',
									lines: [
										{
											n: 1,
											en: ''
										},
										{
											n: 2,
											en: ''
										},
										{
											n: 3,
											en: ''
										}
									],
									note: '{p:text}Look at the poem against the light, like a color slide. (sight)\n{d:rtl}המורה מבקש מהתלמידים להחזיק את השיר מול האור ולהסתכל בו, כמו בשקופית צבעונית - לגלות את הצבעים והפרטים. (חוש הראייה)'
								},
								{
									label: 'Line 4',
									lines: [
										{
											n: 4,
											en: ''
										}
									],
									note: '{p:text}Put your ear on the poem, like on a beehive, and listen. (hearing)\n{d:rtl}או להצמיד אוזן לשיר, כמו לכוורת, ולהקשיב ל״זמזום״ שבתוכו. (חוש השמיעה)'
								},
								{
									label: 'Lines 5-6',
									lines: [
										{
											n: 5,
											en: ''
										},
										{
											n: 6,
											en: ''
										}
									],
									note: '{p:text}Drop a mouse into the poem and watch it slowly find its way out. (exploring)\n{d:rtl}הוא מציע ״להכניס עכבר״ לתוך השיר ולצפות איך הוא מוצא לאט־לאט את הדרך החוצה. (סקרנות וחקירה)'
								},
								{
									label: 'Lines 7-8',
									lines: [
										{
											n: 7,
											en: ''
										},
										{
											n: 8,
											en: ''
										}
									],
									note: '{p:text}Walk into the poem like into a dark room and look for the light switch. (searching for understanding)\n{d:rtl}או להיכנס לשיר כמו לחדר חשוך ולמשש את הקירות עד שמוצאים את מתג האור - את הרגע שבו ״נדלקת״ ההבנה. (חוש המישוש)'
								},
								{
									label: 'Lines 9-11',
									lines: [
										{
											n: 9,
											en: ''
										},
										{
											n: 10,
											en: ''
										},
										{
											n: 11,
											en: ''
										}
									],
									note: '{p:text}Waterski across the poem for fun and wave hello to the poet on the shore. (enjoying)\n{d:rtl}הוא רוצה שיחליקו על פני השיר בסקי מים, בכיף, ויגידו שלום לשם של המשורר שעומד על החוף. (הנאה)'
								},
								{
									label: 'Lines 12-14',
									lines: [
										{
											n: 12,
											en: ''
										},
										{
											n: 13,
											en: ''
										},
										{
											n: 14,
											en: ''
										}
									],
									note: '{p:text}BUT the students tie the poem to a chair and try to force it to "confess". (forcing)\n{d:rtl}אבל! כל מה שהתלמידים רוצים זה לקשור את השיר לכיסא ולהכריח אותו ״להודות״, כמו אסיר בחקירה. (כפייה)'
								},
								{
									label: 'Lines 15-16',
									lines: [
										{
											n: 15,
											en: ''
										},
										{
											n: 16,
											en: ''
										}
									],
									note: '{p:text}They even beat it with a hose - only to find out what it "really means". (violence)\n{d:rtl}הם אפילו מכים אותו בצינור, רק כדי לגלות ״מה הוא באמת אומר״. (אלימות - בשביל תשובה אחת)'
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'How many stanzas are in the poem?',
							options: [
								['4', 'יש יותר.'],
								['5', '5 הבתים הראשונים הם של המורה - יש עוד שניים.'],
								'7',
								['16', '16 זה מספר השורות.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}לשיר 7 בתים ו־16 שורות. יש בית של שורה אחת בלבד (שורה 4) - קצר, כמו רגע של הקשבה.\n{p:callout}**טיפ לבגרות:** line = שורה, stanza = בית. אל תתבלבלו!',
							hint: '{p:ul}**stanza** - בית\n{d:rtl}stanza = בית. חלק מהבתים קצרים מאוד - אפילו שורה אחת!'
						},
						{
							type: 'mcq',
							prompt: "Which of these is NOT one of the teacher's ideas?",
							options: [
								['looking at the poem against the light', 'זה מופיע - שורות 1-3.'],
								['listening to the poem', 'זה מופיע - שורה 4.'],
								'reading the poem ten times',
								['walking in the poem like in a dark room', 'זה מופיע - שורות 7-8.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}המורה לא מבקש לקרוא שוב ושוב - הוא מציע חוויות: להסתכל, להקשיב, לחקור, למשש, ליהנות.\n{d:rtl}📜 שורות 1, 4, 7\n{p:callout}**טיפ לבגרות:** שימו לב למילה NOT! מסמנים אותה בעיגול לפני שעונים.',
							hint: '{p:ul}**NOT** - לא\n{d:rtl}NOT = לא מופיע. בדקו כל אפשרות בשורות 1-11.'
						},
						{
							type: 'mcq',
							prompt: 'In lines 9-11, whose name is on the shore?',
							options: [
								"the author's (the poet's)",
								["the teacher's", 'המורה הוא הדובר - השם על החוף שייך למישהו אחר.'],
								["a student's", 'התלמידים הם אלה שעושים סקי.'],
								["nobody's", 'יש שם - ומנופפים לו!']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}על החוף עומד ״השם של הכותב״ - המשורר. מי שעושה סקי על השיר מנופף לו לשלום, כמו לחבר.\n{d:rtl}📜 שורות 11\n{p:callout}**טיפ לבגרות:** author = הכותב. במבחנים: the author / the poet / the writer.',
							hint: '{p:ul}**whose** - של מי\n{d:rtl}author = מי שכתב את השיר.'
						},
						{
							type: 'mcq',
							prompt: 'In the last stanza, what do the students want to find out?',
							options: [
								['who wrote the poem', 'השם של המשורר כבר על ״החוף״ - זה לא מה שהם מחפשים.'],
								['how long the poem is', 'השיר לא מדבר על אורך.'],
								['when the poem was written', 'השיר לא מדבר על תאריך.'],
								'what the poem really means'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}בשורה 16 התלמידים מנסים לגלות ״מה השיר באמת אומר״ - כאילו יש לו משמעות אחת סודית, שצריך להוציא בכוח.\n{d:rtl}📜 שורות 16\n{p:callout}**טיפ לבגרות:** השורה האחרונה בשיר היא בדרך כלל חשובה מאוד - כדאי לזכור אותה.',
							hint: '{p:ul}**find out** - לגלות\n{d:rtl}השורה האחרונה.'
						},
						{
							type: 'preface',
							text: '## מה מסתתר בין השורות?\n{d:rtl}עכשיו התשובה לא כתובה במפורש. צריך להבין ממה שכתוב - כמו בלש שמחפש רמזים 🔍 (אבל בלי לקשור את השיר לכיסא!).'
						},
						{
							type: 'mcq',
							prompt:
								'Why does the teacher use so many different images (light, hive, mouse, room, waterski)?',
							options: [
								['because he cannot decide', 'הוא לא מתלבט - הוא מציע אפשרויות בכוונה.'],
								'to show that there are many ways to experience a poem',
								['to make the poem longer', 'התמונות נועדו להעביר רעיון, לא להאריך.'],
								['because he likes animals', 'חלק מהתמונות בכלל לא קשורות לבעלי חיים.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}חמש תמונות שונות = חמש דרכים לפגוש שיר. זה כבר חלק מהמסר: אין רק דרך אחת לקרוא שיר, ואין רק תשובה אחת.\n{d:rtl}📜 שורות 1, 4, 5, 7, 9\n{p:callout}**טיפ לבגרות:** כשמשורר חוזר על רעיון בצורות שונות - שאלו: ״מה הוא רוצה להדגיש?״',
							hint: '{p:ul}**Why** - למה\n{p:ul}**images** - תמונות\n{d:rtl}אם יש חמש דרכים - כמה ״תשובות נכונות״ יש?'
						},
						{
							type: 'mcq',
							prompt: 'Waving hello to the author on the shore (line 11) suggests…',
							options: [
								['that the author is drowning', 'אף אחד לא טובע - זה יום כיף.'],
								'a friendly, relaxed relationship with the poet',
								['that the students are lost at sea', 'הם לא אבודים - הם נהנים.'],
								['that the poet is angry', 'אין בשורה כעס.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}מנופפים לחברים. המורה רוצה שהקורא ירגיש קרוב למשורר - לא מפחד ממנו, לא ״נבחן״ על ידו.\n{d:rtl}📜 שורות 11\n{p:callout}**טיפ לבגרות:** suggests = מבקשים משהו שמשתמע, לא משהו שכתוב במפורש.',
							hint: '{p:ul}**suggests** - מרמז\n{d:rtl}למי מנופפים לשלום?'
						},
						{
							type: 'mcq',
							prompt: 'The images in lines 12-16 are violent. Why?',
							options: [
								['because the poem is a crime story', 'זה לא סיפור פשע - זו מטאפורה.'],
								['because the students are really violent people', 'הם לא באמת אלימים - זו הגזמה.'],
								['because the teacher wants to punish them', 'המורה לא מעניש - הוא מתאר.'],
								"to show how harsh and wrong the students' way of reading is"
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}הניגוד חד: אחרי תמונות עדינות ומהנות מגיעות תמונות של חקירה אלימה. כך המשורר מראה כמה הדרך של התלמידים ״אכזרית״ לשיר - ומיותרת.\n{d:rtl}📜 שורות 13, 14, 15\n{p:callout}**טיפ לבגרות:** ניגוד (contrast) הוא כלי חזק. בתשובה: In lines… but in lines…',
							hint: '{p:ul}**Why** - למה\n{p:ul}**violent** - אלים\n{d:rtl}מה ההבדל בין סקי מים לחבל ולצינור?'
						},
						{
							type: 'mcq',
							prompt: 'Is the end of the poem serious, funny, or both?',
							options: [
								'both - it is funny because it is exaggerated, but it has a serious point',
								['only sad', 'יש בו גם הומור.'],
								['only scary', 'ההגזמה הופכת אותו למצחיק, לא למפחיד.'],
								['only happy', 'יש בו גם ביקורת רצינית.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}אף אחד לא באמת מכה שיר בצינור - זו הגזמה מצחיקה. אבל מאחורי ההומור יש ביקורת רצינית על איך קוראים שירים בכיתה.\n{d:rtl}📜 שורות 15, 16\n{p:callout}**טיפ לבגרות:** מונח שימושי: exaggeration = הגזמה. משוררים מגזימים כדי להדגיש.',
							hint: '{p:ul}**serious** - רציני\n{p:ul}**funny** - מצחיק\n{d:rtl}האם באמת מכים שירים בצינור? 😄'
						},
						{
							type: 'preface',
							text: '## מה אתם חושבים?\n{d:rtl}עכשיו נחבר בין חלקים שונים בשיר ובין השיר לחיים. תשובות כאלה מרשימות מאוד את המורים!'
						},
						{
							type: 'preface',
							text: '### ⚖️ Teacher vs. students\n{p:text}Lines 1-11 (the teacher): light, listening, exploring, fun. Lines 12-16 (the students): rope, force, a hose.\n{d:rtl}השוו: שורות 1-11 (המורה) - אור, הקשבה, חקירה, הנאה. שורות 12-16 (התלמידים) - חבל, כפייה, צינור.'
						},
						{
							type: 'mcq',
							prompt: 'What is the main difference between lines 1-11 and lines 12-16?',
							options: [
								[
									'Lines 1-11 are about the sea, and lines 12-16 are about a school.',
									'הים הוא רק תמונה אחת.'
								],
								[
									'Each part has a different speaker.',
									'יש דובר אחד - המורה - שמתאר את שני הצדדים.'
								],
								'The teacher wants to explore and enjoy the poem; the students want to force one meaning out of it.',
								['There is no difference.', 'יש הבדל גדול - זה ניגוד!']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}החלק הראשון מתאר קריאה עדינה, סקרנית ומהנה. החלק השני מתאר קריאה אלימה וחסרת סבלנות. זה ניגוד (contrast) - והוא לב השיר.\n{d:rtl}📜 שורות 9, 13\n{p:callout}**טיפ לבגרות:** תשובה מצוינת להשוואה: On the one hand, the teacher… On the other hand, the students…',
							hint: '{p:ul}**difference** - הבדל\n{d:rtl}השוו את הפעלים: look, listen, walk, waterski מול tie, beat.'
						},
						{
							type: 'mcq',
							prompt: 'Why do you think the poem is called "Introduction to Poetry"?',
							options: [
								['It is the first page of a book.', 'הכותרת לא מדברת על עמוד בספר.'],
								["It introduces the poet's family.", 'אין בשיר משפחה.'],
								'It is like a first lesson about how to read poems.',
								[
									'It is about introducing two friends.',
									'introduction כאן = מבוא, לא היכרות בין חברים.'
								]
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״Introduction to…״ הוא שם של קורס מבוא. השיר הוא כמו ״שיעור ראשון״ בשירה: הוא מלמד איך כדאי לקרוא שיר - ואיך לא.\n{d:rtl}📜 שורות 1\n{p:callout}**טיפ לבגרות:** שאלה על הכותרת? חשבו על המשמעות שלה ועל הקשר לרעיון המרכזי.',
							hint: '{p:ul}**Why do you think** - למה לדעתך\n{d:rtl}באוניברסיטה, ״Introduction to…״ הוא שם של קורס ראשון.'
						},
						{
							type: 'mcq',
							prompt:
								'This poem is often taught in school, and students answer questions about what it "really means". Why is this a little funny?',
							options: [
								'Because the poem itself warns against reading poems only to find "the answer".',
								['Because the poem is short.', 'האורך לא קשור לאירוניה.'],
								['Because the poem rhymes.', 'השיר בכלל לא מתחרז.'],
								['It is not funny at all.', 'זה דווקא מצחיק - ונקרא ״אירוני״!']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}אירוניה (irony) = פער מצחיק בין מה שמצופה למה שקורה. השיר מבקר את מי שמחפש ״מה השיר באמת אומר״ - ובכיתה שואלים עליו בדיוק את השאלה הזאת!\n{d:rtl}📜 שורות 16\n{p:callout}**טיפ לבגרות:** אם אתם כותבים על אירוניה, הסבירו את שני הצדדים: מה מצופה, ומה קורה בפועל.',
							hint: '{p:ul}**funny** - מצחיק\n{d:rtl}מה התלמידים בשיר רוצים לגלות בשורה 16?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-intro-poetry-answer',
		section: 'd-3',
		titleEn: 'Answer Like a Pro',
		required: ['d-intro-poetry-think'],
		position: {
			x: 0,
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
								'**ANSWER** - עונים על השאלה במשפט אחד ברור.\n{p:text}The teacher wants his students to…',
								'**PROVE** - מביאים ראיה מהשיר, עם מספר שורה.\n{p:text}For example, in lines 5-6 he…',
								'**EXPLAIN** - מסבירים מה הראיה מראה.\n{p:text}This shows that…'
							]
						},
						{
							type: 'preface',
							text: '{p:callout}בתשובה אמיתית במבחן - הוסיפו ציטוט קצר מהשורות שאתם מזכירים, במירכאות.\n\n{d:rtl}תרגול: סדרו את שלושת המשפטים לתשובה טובה. לחצו על המשפטים לפי הסדר הנכון.'
						},
						{
							type: 'order',
							prompt:
								'{p:text}**How does the teacher want his students to read poems? Explain.**\n{d:rtl}סדרו את המשפטים לתשובה מלאה: ANSWER → PROVE → EXPLAIN',
							tiles: [
								'The teacher wants his students to explore poems with curiosity and to enjoy them.',
								'For example, in lines 5-6 he asks his students to watch a mouse as it slowly finds its way out of a poem.',
								'This shows that reading a poem is like a small adventure: there is no quick answer, and every reader can find his own way.'
							],
							explanation: '{d:rtl}מצוין! זו תשובה מלאה: תשובה ← ראיה ← הסבר.'
						},
						{
							type: 'mcq',
							prompt: 'In the answer you built, which sentence is the ANSWER part?',
							options: [
								'The teacher wants his students to explore poems…',
								['For example, in lines 5-6 he asks…', 'זו הראיה - PROVE.'],
								['This shows that reading a poem is like…', 'זה ההסבר - EXPLAIN.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}משפט התשובה עונה ישר על השאלה, ומשתמש במילים שלה: How does the teacher want… ← The teacher wants…\n{d:rtl}📜 שורות 5, 6\n{p:callout}**טיפ לבגרות:** טריק: התחילו את התשובה במילים מהשאלה. כך תמיד תענו על מה ששאלו.',
							hint: '{p:ul}**ANSWER** - תשובה\n{d:rtl}איזה משפט עונה ישר על השאלה?'
						},
						{
							type: 'preface',
							text: '## בונים תשובה בעצמנו\n{d:rtl}השאלה: How do the students treat the poem? Explain. בחרו בכל שלב את המשפט הטוב ביותר.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How do the students treat the poem? Explain.**\n{d:rtl}שלב 1: בחרו את משפט ה־ANSWER הטוב ביותר.',
							options: [
								['The poem has seven stanzas.', 'זו עובדה על המבנה, לא תשובה לשאלה.'],
								'The students treat the poem in a violent way: they try to force it to give them one meaning.',
								['The students like poems very much.', 'השיר מראה דווקא שהם לא נהנים מהשיר.']
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How do the students treat the poem? Explain.**\n{d:rtl}שלב 2: בחרו את משפט ה־PROVE הטוב ביותר.',
							options: [
								[
									'For example, in lines 9-11 the reader waterskis across the poem.',
									'זו הדרך של המורה, לא של התלמידים.'
								],
								'For example, in lines 13-14 they tie the poem to a chair and try to make it confess, like a prisoner.',
								['For example, in line 4 there is a hive.', 'הכוורת שייכת לרעיונות של המורה.']
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How do the students treat the poem? Explain.**\n{d:rtl}שלב 3: בחרו את משפט ה־EXPLAIN הטוב ביותר.',
							options: [
								['This shows that the students like sports.', 'אין קשר לספורט.'],
								['Billy Collins was born in 1941.', 'זה מידע על המשורר, לא הסבר.'],
								'This shows that they do not enjoy the poem; they only want the "right answer" quickly.'
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}התשובה המלאה:\n{p:text}The students treat the poem in a violent way: they try to force it to give them one meaning.\n{p:text}For example, in lines 13-14 they tie the poem to a chair and try to make it confess, like a prisoner.\n{p:text}This shows that they do not enjoy the poem; they only want the "right answer" quickly.'
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
								'{p:text}**Now you! Which image in the poem do you like most? Explain why.**\n{d:rtl}עכשיו תורכם! איזו תמונה בשיר אהבתם הכי הרבה? הסבירו למה. (40-60 מילים)',
							wordBank: [
								'The image I like most is in lines __:',
								'In my opinion,',
								'This shows that',
								'That is why'
							],
							minWords: 40,
							maxWords: 60,
							checklist: [
								'עניתי על השאלה',
								'כתבתי מספרי שורות',
								'הסברתי למה',
								'כתבתי לפחות 40 מילים'
							],
							modelAnswer:
								'The image I like most is the mouse in lines 5-6. In my opinion, it is a funny and clever image. The mouse is curious and slowly finds its way out. This shows that a reader can also explore a poem slowly and find his own way. That is why I like this image.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "Introduction to Poetry" by Billy Collins (Bagrut Module D, B1 level). A good answer has three parts: ANSWER (one clear sentence), PROVE (a quote or detail from the poem, with a line number), EXPLAIN ("This shows that..." / "because"). Judge structure and relevance, not literary depth. Model answer: The image I like most is the mouse in lines 5-6. In my opinion, it is a funny and clever image. The mouse is curious and slowly finds its way out. This shows that a reader can also explore a poem slowly and find his own way. That is why I like this image.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-intro-poetry-challenge',
		section: 'd-3',
		titleEn: 'Literature Challenge',
		required: ['d-intro-poetry-answer'],
		position: {
			x: 0,
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
							prompt: 'Does the poem rhyme?',
							options: [
								['Yes, every line rhymes.', 'אין בשיר חריזה קבועה.'],
								['Only the first stanza rhymes.', 'גם בבית הראשון אין חריזה.'],
								['Only the last stanza rhymes.', 'גם בבית האחרון אין חריזה.'],
								'No - it is free verse.'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}השיר כתוב ב־free verse - שיר חופשי, בלי חריזה ובלי קצב קבוע. הוא נשמע כמו דיבור רגיל של מורה.\n{p:callout}**טיפ לבגרות:** free verse = שיר חופשי. מונח טוב לתשובה על מבנה השיר.',
							hint: '{p:ul}**rhyme** - חריזה\n{d:rtl}קראו בקול את סופי השורות. האם הם נשמעים אותו דבר?'
						},
						{
							type: 'mcq',
							prompt:
								'In lines 1-3, the poem is compared to a color slide with the word "like". This is a…',
							options: [
								['question', 'אין כאן שאלה.'],
								'simile',
								['rhyme', 'אין כאן חריזה.'],
								['title', 'זה לא שם השיר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}simile = השוואה עם like או as. בשורות 1-3 השיר מושווה לשקופית צבעונית בעזרת המילה like.\n{d:rtl}📜 שורות 3\n{p:callout}**טיפ לבגרות:** simile = עם like/as. metaphor = בלי like/as.',
							hint: '{p:ul}**like** - כמו\n{d:rtl}השוואה עם like או as נקראת…?'
						},
						{
							type: 'mcq',
							prompt: 'Who are "they" in lines 12-16?',
							options: [
								['the poets', 'המשורר הוא אחד - ״the author״.'],
								'the students',
								['the bees', 'הדבורים הן רק תמונה בשורה 4.'],
								['the mice', 'העכבר הוא רק תמונה בשורות 5-6.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}״they״ = התלמידים. בתחילת השיר הם ״them״ (המורה מבקש מהם), ובסוף הם ״they״ (מה שהם עושים).\n{d:rtl}📜 שורות 1, 12, 15\n{p:callout}**טיפ לבגרות:** מילות גוף (he, she, they) מחליפות שמות. תמיד בדקו למי הן מתייחסות.',
							hint: '{p:ul}**they** - הם\n{d:rtl}למי המורה ״מבקש״ ו״אומר״ בתחילת השיר?'
						},
						{
							type: 'mcq',
							prompt: "Which word best describes the students' way of reading?",
							options: [
								['curious', 'הסקרנות היא הדרך של המורה.'],
								['relaxed', 'הם ממש לא רגועים - הם ״חוקרים״ בכוח.'],
								['creative', 'היצירתיות שייכת למורה.'],
								'forceful'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}התלמידים קוראים בכוח ובחוסר סבלנות (forceful, impatient) - בדיוק ההפך מהמורה הסקרן והיצירתי.\n{d:rtl}📜 שורות 13, 15\n{p:callout}**טיפ לבגרות:** מילים לתיאור דמויות: curious, creative, forceful, impatient, frustrated.',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{d:rtl}forceful = בכוח.'
						},
						{
							type: 'mcq',
							prompt: 'A "hose" (line 15) is…',
							options: [
								'a long tube for water',
								['a house', 'מלכודת! house נשמעת דומה.'],
								['a horse', 'מלכודת! horse נכתבת דומה.'],
								['a rose', 'מלכודת! rose מתחרזת, אבל זה פרח.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}hose = צינור מים. בשיר זה חלק מתמונת ה״חקירה״ האלימה.\n{d:rtl}📜 שורות 15\n{p:callout}**טיפ לבגרות:** מילים שנראות דומות (hose / house / horse) - קראו לאט!',
							hint: '{d:rtl}במה משקים את הגינה?'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is NOT true according to the poem?',
							options: [
								['The teacher wants the students to explore the poem.', 'זה נכון - שורות 1-11.'],
								['The students want to find one meaning.', 'זה נכון - שורה 16.'],
								'The teacher is happy with how the students read.',
								['The poem has seven stanzas.', 'זה נכון.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}המורה לא מרוצה - ה־But בשורה 12 והתמונות האלימות מראות שהוא מאוכזב מהדרך של התלמידים.\n{d:rtl}📜 שורות 12\n{p:callout}**טיפ לבגרות:** שימו לב למילה NOT! מסמנים אותה בעיגול לפני שעונים.',
							hint: '{p:ul}**NOT true** - לא נכון\n{d:rtl}NOT = לא נכון. מה מסמנת המילה But בשורה 12?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-intro-poetry-mastery',
		section: 'd-3',
		titleEn: 'Mastery Check',
		required: ['d-intro-poetry-challenge'],
		position: {
			x: 0,
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
							prompt: 'Who is the speaker of the poem?',
							options: [
								['a student', 'התלמידים הם them/they.'],
								['a police officer', 'החקירה היא רק תמונה.'],
								'a poetry teacher',
								['a fisherman', 'הים הוא רק תמונה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הדובר הוא מורה לשירה שמדבר על התלמידים שלו.\n{d:rtl}📜 שורות 1\n{p:callout}**טיפ לבגרות:** I = הדובר. them/they = התלמידים.'
						},
						{
							type: 'mcq',
							prompt: '"hive" means…',
							options: [
								'the home of bees',
								['a dark room', 'החדר החשוך מופיע בשורות 7-8.'],
								['a light', 'האור מופיע בשורה 2.'],
								['a boat', 'סירה לא מופיעה בשיר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}hive = כוורת, הבית של הדבורים.\n{d:rtl}📜 שורות 4\n{p:callout}**טיפ לבגרות:** דמיינו את התמונה - זה עוזר לזכור.'
						},
						{
							type: 'mcq',
							prompt: 'The poem is mostly about…',
							options: [
								['a day at the beach', 'הים הוא רק תמונה אחת.'],
								['a crime in a school', 'החקירה היא מטאפורה.'],
								['the life of Billy Collins', 'השיר לא ביוגרפיה.'],
								'two different ways of reading a poem'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}השיר משווה בין הדרך של המורה (חקירה והנאה) לדרך של התלמידים (כפייה).\n{d:rtl}📜 שורות 1, 12\n{p:callout}**טיפ לבגרות:** theme = על מה השיר.'
						},
						{
							type: 'mcq',
							prompt: 'In which line does the big change begin?',
							options: [
								['line 1', 'שורה 1 - תחילת הרעיונות של המורה.'],
								['line 9', 'שורה 9 - סקי מים, עדיין המורה.'],
								'line 12',
								['line 16', 'שורה 16 - סוף השיר.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}שורה 12 מתחילה במילה But - ומשם השיר עובר לתלמידים.\n{d:rtl}📜 שורות 12\n{p:callout}**טיפ לבגרות:** נקודת מפנה = turning point.'
						},
						{
							type: 'mcq',
							prompt: 'The waterskiing image (lines 9-11) shows that…',
							options: [
								['poems are dangerous', 'אין סכנה - יש כיף.'],
								'we can enjoy a poem freely and lightly',
								['the teacher loves the sea', 'הים הוא רק תמונה.'],
								['the students are good at sports', 'התמונה היא על קריאה, לא על ספורט.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}סקי מים = הנאה, תנועה וחופש. כך אפשר לפגוש שיר.\n{d:rtl}📜 שורות 9, 10, 11\n{p:callout}**טיפ לבגרות:** The image of ___ shows that ___.'
						},
						{
							type: 'mcq',
							prompt: 'Which lines are the best evidence for: "The students are forceful"?',
							options: [
								['lines 1-3 (the color slide)', 'זה רעיון עדין של המורה.'],
								['line 4 (the hive)', 'זה רעיון של הקשבה.'],
								['lines 9-11 (waterskiing)', 'זה רעיון של הנאה.'],
								'lines 12-14 (the chair and the rope)'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}שורות 12-14 מתארות קשירה לכיסא והוצאת ״הודאה״ - הוכחה ישירה לכך שהתלמידים קוראים בכוח.\n{d:rtl}📜 שורות 12, 13, 14\n{p:callout}**טיפ לבגרות:** ראיה טובה מוכיחה בדיוק את הטענה.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is a good EXPLANATION (not just a fact)?',
							options: [
								['In line 15 they use a hose.', 'זו עובדה מהשיר, לא הסבר.'],
								'This shows that the students care only about finding one answer.',
								['The poem has 16 lines.', 'עובדה על המבנה.'],
								['Billy Collins is American.', 'עובדה על המשורר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הסבר מתחיל לרוב ב־This shows that… ואומר מה הראיה מלמדת.\n{d:rtl}📜 שורות 15, 16\n{p:callout}**טיפ לבגרות:** ANSWER → PROVE → EXPLAIN.'
						},
						{
							type: 'mcq',
							prompt: 'Why does the poet make the end of the poem funny?',
							options: [
								['because the poem is not serious at all', 'יש מאחורי ההומור ביקורת רצינית.'],
								['to make fun of poets', 'הוא לא צוחק על משוררים - הוא מגן על שירה.'],
								['because he forgot the message', 'המסר ברור מאוד.'],
								'to make his point clearly and in an enjoyable way'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}ההגזמה המצחיקה (צינור, חבל) עוזרת לנו לזכור את המסר. וגם: השיר עצמו כיף לקריאה - בדיוק כמו ששירה צריכה להיות!\n{d:rtl}📜 שורות 15, 16\n{p:callout}**טיפ לבגרות:** הומור + רעיון רציני = שילוב שכדאי להזכיר בתשובה.'
						}
					]
				}
			]
		}
	},
	{
		id: 'd-intro-poetry-samples',
		section: 'd-3',
		titleEn: 'Sample Answers',
		required: ['d-intro-poetry-mastery'],
		position: {
			x: 0,
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
							text: '## שאלות ותשובות לדוגמה\n{d:rtl}אלו שאלות בסגנון המשימות והמבחנים בבית הספר. התשובות כתובות באנגלית פשוטה. הביטויים המודגשים הם ״ביטויי זהב״ - אפשר להשתמש בהם בכל תשובה, על כל שיר וסיפור!\n\n{p:callout}בתשובות כאן מופיעים מספרי שורות. בתשובה שלכם במבחן - הוסיפו גם ציטוט קצר מהשורות, במירכאות.'
						},
						{
							type: 'preface',
							text: '### שאלה 1\n{p:text}**How does the teacher want his students to read a poem? Explain.**\n---\n{p:text}**The teacher wants his students to** explore a poem with curiosity and enjoy it. **For example, in lines 5-6** he asks them to watch a mouse as it slowly finds its way out of a poem. **In addition, in lines 9-11** he wants them to waterski across it, like a fun sport. **This shows that** reading a poem should be an adventure, not hard work.'
						},
						{
							type: 'preface',
							text: '### שאלה 2\n{p:text}**How do the students read the poem? How do you know?**\n---\n{p:text}**The students** read the poem in a violent and impatient way. **In lines 13-14**, they tie the poem to a chair and try to make it confess, like a prisoner. **In line 15**, they even beat it with a hose. **This shows that** they only want to find one "right answer" quickly. **I think** they miss the beauty of the poem.'
						},
						{
							type: 'preface',
							text: '### שאלה 3\n{p:text}**What is the turning point of the poem? Explain.**\n---\n{p:text}**In my opinion, the turning point is** line 12, which begins with the word "But." Before this line, the teacher describes gentle and creative ways to read a poem. After it, he describes the students\' violent way. **This shows that** there is a big contrast between what the teacher hopes for and what really happens in class.'
						},
						{
							type: 'preface',
							text: '### שאלה 4\n{p:text}**What is the message of the poem? Do you agree with it? Explain.**\n---\n{p:text}**The message of the poem is that** we should explore and enjoy poems, and not force them to give us one answer. **For example**, the teacher offers many fun ways to read a poem (lines 1-11), but the students only want to find out what it "really means" (line 16). **I agree with this message because** a poem can mean different things to different readers.'
						},
						{
							type: 'preface',
							text: "### שאלה 5\n{p:text}**Why do you think the poet uses violent images at the end of the poem?**\n---\n{p:text}**I think** the poet uses violent images **because** he wants to show how wrong the students' way is. **For example, in lines 13-15** the poem is treated like a prisoner: it is tied to a chair and beaten with a hose. **This shows that** forcing a poem is cruel and silly. **In addition**, the images are a little funny, so we remember the point."
						},
						{
							type: 'preface',
							text: '### שאלה 6\n{p:text}**Which image in the poem do you like most? Explain why.**\n---\n{p:text}**The image I like most is** the waterskiing image in lines 9-11. **In my opinion**, it is fun and full of energy. The reader moves fast across the poem and even says hello to the poet, who stands on the beach. **This shows that** a poem can be a friendly experience, like a day at the sea. **That is why** this image makes me want to read more poems.'
						},
						{
							type: 'summary',
							title: 'ביטויי זהב',
							lines: [
								'**The teacher wants his students to …** - המורה רוצה שהתלמידים שלו …',
								'**In my opinion, …** - לדעתי, …',
								'**I think that … because …** - אני חושב/ת ש… כי …',
								'**For example, in lines __ the speaker …** - למשל, בשורות __ הדובר …',
								'**The image of … shows that …** - התמונה של … מראה ש…',
								'**This shows that …** - זה מראה ש…',
								'**The message of the poem is that …** - המסר של השיר הוא ש…',
								'**On the one hand … On the other hand …** - מצד אחד … מצד שני …',
								'**Before this line, … After it, …** - לפני השורה הזאת … אחריה …',
								'**In addition, …** - בנוסף, …',
								'**I agree with this message because …** - אני מסכים/ה עם המסר כי …',
								'**That is why …** - זו הסיבה ש…'
							]
						},
						{
							type: 'summary',
							title: 'מושגים',
							lines: [
								'**speaker** - הדובר - הקול שמדבר בשיר (כאן: מורה)',
								'**stanza** - בית בשיר',
								'**free verse** - שיר חופשי - בלי חריזה וקצב קבוע',
								'**image / imagery** - תמונה - תיאור שמפעיל את החושים',
								'**simile** - השוואה עם like או as',
								'**metaphor** - מטאפורה - השוואה בלי like או as',
								'**contrast** - ניגוד - השוואה בין שני דברים הפוכים',
								'**turning point** - נקודת מפנה - הרגע שבו הכול משתנה',
								'**exaggeration** - הגזמה - כדי להדגיש רעיון (למתקדמים)',
								'**irony** - אירוניה - פער בין מה שמצפים לו לבין מה שקורה באמת (למתקדמים)'
							]
						}
					]
				}
			]
		}
	}
];
