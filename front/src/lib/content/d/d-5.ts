// Module D, unit 5: As I Grew Older - Langston Hughes (1926).
// Source: EngUp_Literature_Developer_Package (04_Data/module_D/unit5_as_i_grew_older.json).
import type { LessonNode } from '../types';

export const d5Lessons: LessonNode[] = [
	{
		id: 'd-grew-older-before',
		section: 'd-5',
		titleEn: 'Before Reading',
		required: [],
		position: {
			x: 0,
			y: 4610
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## חלום מהילדות\n{d:rtl}לכל ילד יש חלום: להיות רופא, כדורגלן, זמר. כשגדלים, לפעמים מגלים שיש מכשולים בדרך - וחלק מהם לא תלויים בנו בכלל.\n\n{d:rtl}השיר שנלמד עכשיו מדבר על חלום כזה - ועל ״חומה״ שעלתה בינו לבין החלום ככל שגדל.\n\n{p:text}In this poem, the speaker remembers a bright dream. As he grew older, a wall rose between him and his dream.'
						},
						{
							type: 'preface',
							text: "{p:text}**What can stop a person from reaching a dream?**\n{d:rtl}מה יכול לעצור אדם מלהגשים חלום?\n{p:ul}not enough money\n{p:ul}other people's opinions\n{p:ul}unfair laws or racism\n{p:ul}fear\n{p:callout}כל אלה יכולים להיות ״חומות״. בשיר הזה נגלה איזו חומה עמדה בפני הדובר - ואיך הוא מגיב אליה."
						},
						{
							type: 'preface',
							text: '## המשורר ומילות המפתח\n### ✍️ Langston Hughes (1901-1967)\n{p:text}A famous African-American poet from Harlem, New York. He wrote about the lives, the music and the dreams of Black Americans.\n{d:rtl}משורר אפרו־אמריקאי מפורסם מהארלם שבניו יורק. הוא כתב על החיים, המוזיקה והחלומות של אמריקאים שחורים.'
						},
						{
							type: 'preface',
							text: '### 🧱 The time (1926)\n{p:text}In the 1920s, Black Americans faced racism and unfair laws. In many places they could not study, work or live where they wanted.\n{d:rtl}השיר פורסם ב־1926. באותה תקופה אמריקאים שחורים סבלו מגזענות ומחוקים לא הוגנים (הפרדה גזעית). במקומות רבים הם לא יכלו ללמוד, לעבוד או לגור איפה שרצו. זה הרקע לחומה שבשיר.'
						},
						{
							type: 'preface',
							text: '{d:rtl}לפני שקוראים - הכירו את המילים החשובות. כרטיס אחרי כרטיס, ואחר כך תרגול קצר.'
						},
						{
							type: 'word-card',
							word: 'bright',
							translationHe: 'זוהר, מואר',
							exampleEn: '**Bright** like a sun = full of light'
						},
						{
							type: 'word-card',
							word: 'rise / rose',
							translationHe: 'לעלות / עלה',
							exampleEn: 'The wall rose = the wall went up'
						},
						{
							type: 'word-card',
							word: 'slowly',
							translationHe: 'לאט',
							exampleEn: 'Rose **slowly**, slowly = little by little'
						},
						{
							type: 'word-card',
							word: 'shadow',
							translationHe: 'צל',
							exampleEn: 'The wall makes a **shadow** - no light.'
						},
						{
							type: 'word-card',
							word: 'lie down',
							translationHe: 'לשכב',
							exampleEn: 'I **lie down** = I stop and give up'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'bright',
									he: 'זוהר, מואר'
								},
								{
									en: 'rise / rose',
									he: 'לעלות / עלה'
								},
								{
									en: 'slowly',
									he: 'לאט'
								},
								{
									en: 'shadow',
									he: 'צל'
								},
								{
									en: 'lie down',
									he: 'לשכב'
								}
							]
						},
						{
							type: 'word-card',
							word: 'thick',
							translationHe: 'עבה',
							exampleEn: 'a **thick** wall = a very strong wall'
						},
						{
							type: 'word-card',
							word: 'dark',
							translationHe: 'כהה',
							exampleEn: 'my **dark** hands = my Black hands'
						},
						{
							type: 'word-card',
							word: 'shatter',
							translationHe: 'לנפץ',
							exampleEn: 'to break into many small pieces'
						},
						{
							type: 'word-card',
							word: 'smash',
							translationHe: 'לרסק',
							exampleEn: 'to break with great force'
						},
						{
							type: 'word-card',
							word: 'whirling',
							translationHe: 'מסתחרר, מסתובב מהר',
							exampleEn: '**whirling** dreams = dreams that dance and turn'
						},
						{
							type: 'match-pairs',
							pairs: [
								{
									en: 'thick',
									he: 'עבה'
								},
								{
									en: 'dark',
									he: 'כהה'
								},
								{
									en: 'shatter',
									he: 'לנפץ'
								},
								{
									en: 'smash',
									he: 'לרסק'
								},
								{
									en: 'whirling',
									he: 'מסתחרר, מסתובב מהר'
								}
							]
						},
						{
							type: 'mcq',
							prompt: '"And then the wall rose" (line 7). What does "rose" mean here?',
							options: [
								['a red flower', 'מלכודת! rose היא גם ורד - אבל כאן זה פועל.'],
								['fell down', 'זה ההפך.'],
								'went up',
								['broke', 'החומה לא נשברת כאן - היא גדלה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}rose = עלה (עבר של rise). החומה עלתה וגדלה בין הדובר לחלום שלו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And then the wall rose," (line 7)\n{p:text}"Rose slowly," (line 8)\n{p:callout}**טיפ לבגרות:** למילה אחת יכולות להיות כמה משמעויות. ההקשר בשורה מחליט.',
							hint: '{d:rtl}rise - rose - risen. ״השמש עולה״ = the sun rises.'
						},
						{
							type: 'mcq',
							prompt: '"I lie down in the shadow" (line 15). What is a shadow?',
							options: [
								'a dark area where the light is blocked',
								['a bright light', 'זה ההפך - בצל אין אור.'],
								['a high wall', 'החומה יוצרת את הצל, אבל היא לא הצל.'],
								['a small house', 'אין בית בשיר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}shadow = צל: מקום חשוך שהאור לא מגיע אליו. החומה הגבוהה מסתירה את ״השמש״ של החלום.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Shadow." (line 13)\n{p:text}"I lie down in the shadow." (line 15)\n{p:callout}**טיפ לבגרות:** בשירה, אור וחושך הם לעיתים קרובות סמלים: אור = תקווה, חושך = ייאוש.',
							hint: '{d:rtl}מה קורה כשמשהו גבוה עומד בין השמש לביניכם?'
						},
						{
							type: 'mcq',
							prompt: '"Help me to shatter this darkness" (line 24). "Shatter" means…',
							options: [
								['to build', 'זה ההפך - הוא רוצה להרוס, לא לבנות.'],
								['to paint', 'אין צביעה בשיר.'],
								['to hide', 'הוא רוצה לנפץ את החושך, לא להתחבא בו.'],
								'to break into many pieces'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}shatter = לנפץ לרסיסים. יחד עם smash ו־break, אלה פעלים חזקים שמראים כוח ונחישות.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Help me to shatter this darkness," (line 24)\n{p:text}"To smash this night," (line 25)\n{p:text}"To break this shadow" (line 26)\n{p:callout}**טיפ לבגרות:** שימו לב לפעלים חזקים - הם מגלים את הרגש של הדובר.',
							hint: '{d:rtl}מה קורה לכוס זכוכית שנופלת?'
						},
						{
							type: 'mcq',
							prompt: '"Into a thousand whirling dreams" (line 28). "Whirling" means…',
							options: [
								['sleeping', 'החלומות לא ישנים - הם בתנועה.'],
								'turning around fast',
								['crying', 'אין כאן בכי.'],
								['falling down', 'הם לא נופלים - הם רוקדים.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}whirling = מסתחרר, מסתובב מהר. החלומות בסוף מלאים חיים ותנועה - לא קפואים כמו בצל.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Into a thousand whirling dreams" (line 28)\n{p:text}"Of sun!" (line 29)\n{p:callout}**טיפ לבגרות:** מילים של תנועה בסוף שיר מראות לעיתים קרובות חיים ותקווה.',
							hint: '{d:rtl}חשבו על רקדן שמסתובב שוב ושוב.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-grew-older-read',
		section: 'd-5',
		titleEn: 'Understand the Poem',
		required: ['d-grew-older-before'],
		position: {
			x: 70,
			y: 4730
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## קוראים את השיר\n{d:rtl}קראו את השיר כולו. לחצו על כל שורה כדי לראות מה היא אומרת בעברית. אל תדאגו אם לא הבנתם הכול - בשלב הבא נעבור על השיר חלק אחרי חלק.\n\n{p:callout}לשיר יש 4 בתים ו־29 שורות קצרות. אין בו חריזה קבועה (free verse). שימו לב לשינוי הגדול בבית האחרון - מלא סימני קריאה!'
						},
						{
							type: 'poem',
							title: 'As I Grew Older - Langston Hughes',
							stanzas: [
								{
									label: 'Stanza 1',
									lines: [
										{
											n: 1,
											en: 'It was a long time ago.',
											he: 'זה היה לפני הרבה זמן.'
										},
										{
											n: 2,
											en: 'I have almost forgotten my dream.',
											he: 'כמעט שכחתי את החלום שלי.'
										},
										{
											n: 3,
											en: 'But it was there then,',
											he: 'אבל אז הוא היה שם,'
										},
										{
											n: 4,
											en: 'In front of me,',
											he: 'ממש לפניי,'
										},
										{
											n: 5,
											en: 'Bright like a sun—',
											he: 'זוהר כמו שמש -'
										},
										{
											n: 6,
											en: 'My dream.',
											he: 'החלום שלי.'
										}
									]
								},
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 7,
											en: 'And then the wall rose,',
											he: 'ואז החומה התחילה לעלות,'
										},
										{
											n: 8,
											en: 'Rose slowly,',
											he: 'עלתה לאט,'
										},
										{
											n: 9,
											en: 'Slowly,',
											he: 'לאט,'
										},
										{
											n: 10,
											en: 'Between me and my dream.',
											he: 'ביני לבין החלום שלי.'
										},
										{
											n: 11,
											en: 'Rose until it touched the sky—',
											he: 'עלתה עד שנגעה בשמיים -'
										},
										{
											n: 12,
											en: 'The wall.',
											he: 'החומה.'
										}
									]
								},
								{
									label: 'Stanza 3',
									lines: [
										{
											n: 13,
											en: 'Shadow.',
											he: 'צל.'
										},
										{
											n: 14,
											en: 'I am black.',
											he: 'אני שחור.'
										},
										{
											n: 15,
											en: 'I lie down in the shadow.',
											he: 'אני שוכב בצל (ומוותר).'
										},
										{
											n: 16,
											en: 'No longer the light of my dream before me,',
											he: 'האור של החלום כבר לא נמצא לפניי,'
										},
										{
											n: 17,
											en: 'Above me.',
											he: 'מעליי.'
										},
										{
											n: 18,
											en: 'Only the thick wall.',
											he: 'רק החומה העבה.'
										},
										{
											n: 19,
											en: 'Only the shadow.',
											he: 'רק הצל.'
										}
									]
								},
								{
									label: 'Stanza 4',
									lines: [
										{
											n: 20,
											en: 'My hands!',
											he: 'הידיים שלי!'
										},
										{
											n: 21,
											en: 'My dark hands!',
											he: 'הידיים הכהות שלי!'
										},
										{
											n: 22,
											en: 'Break through the wall!',
											he: 'פרצו את החומה!'
										},
										{
											n: 23,
											en: 'Find my dream!',
											he: 'מצאו את החלום שלי!'
										},
										{
											n: 24,
											en: 'Help me to shatter this darkness,',
											he: 'עזרו לי לנפץ את החושך הזה,'
										},
										{
											n: 25,
											en: 'To smash this night,',
											he: 'לרסק את הלילה הזה,'
										},
										{
											n: 26,
											en: 'To break this shadow',
											he: 'לשבור את הצל הזה'
										},
										{
											n: 27,
											en: 'Into a thousand lights of sun,',
											he: 'לאלף קרני שמש,'
										},
										{
											n: 28,
											en: 'Into a thousand whirling dreams',
											he: 'לאלף חלומות שמסתחררים'
										},
										{
											n: 29,
											en: 'Of sun!',
											he: 'של שמש!'
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
											en: 'It was a long time ago.',
											he: 'זה היה לפני הרבה זמן.'
										},
										{
											n: 2,
											en: 'I have almost forgotten my dream.',
											he: 'כמעט שכחתי את החלום שלי.'
										},
										{
											n: 3,
											en: 'But it was there then,',
											he: 'אבל אז הוא היה שם,'
										},
										{
											n: 4,
											en: 'In front of me,',
											he: 'ממש לפניי,'
										},
										{
											n: 5,
											en: 'Bright like a sun—',
											he: 'זוהר כמו שמש -'
										},
										{
											n: 6,
											en: 'My dream.',
											he: 'החלום שלי.'
										}
									]
								}
							],
							title: 'בתים 1-2: החלום והחומה'
						},
						{
							type: 'preface',
							text: '### ☀️ Stanza 1\n{p:text}The speaker remembers a dream from long ago. Then, the dream was right in front of him, bright like a sun. Now he has almost forgotten it.\n{d:rtl}הדובר נזכר בחלום מלפני הרבה זמן. אז החלום היה ממש לפניו, זוהר כמו שמש. היום הוא כמעט שכח אותו.'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 7,
											en: 'And then the wall rose,',
											he: 'ואז החומה התחילה לעלות,'
										},
										{
											n: 8,
											en: 'Rose slowly,',
											he: 'עלתה לאט,'
										},
										{
											n: 9,
											en: 'Slowly,',
											he: 'לאט,'
										},
										{
											n: 10,
											en: 'Between me and my dream.',
											he: 'ביני לבין החלום שלי.'
										},
										{
											n: 11,
											en: 'Rose until it touched the sky—',
											he: 'עלתה עד שנגעה בשמיים -'
										},
										{
											n: 12,
											en: 'The wall.',
											he: 'החומה.'
										}
									]
								}
							]
						},
						{
							type: 'preface',
							text: '### 🧱 Stanza 2\n{p:text}A wall rose between the speaker and his dream. It rose slowly, little by little, until it touched the sky.\n{d:rtl}חומה עלתה בין הדובר לבין החלום שלו. היא עלתה לאט, לאט, עד שנגעה בשמיים - כלומר, הפכה לענקית.'
						},
						{
							type: 'mcq',
							prompt: 'When did the speaker have his dream?',
							options: [
								['yesterday', 'השורה הראשונה אומרת אחרת.'],
								'a long time ago',
								['last week', 'השורה הראשונה אומרת אחרת.'],
								['in the future', 'החלום שייך לעבר, לא לעתיד.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}״It was a long time ago״ - לפני הרבה זמן. הדובר מסתכל אחורה על הילדות שלו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"It was a long time ago." (line 1)\n{p:text}"I have almost forgotten my dream." (line 2)\n{p:callout}**טיפ לבגרות:** שאלת When? = מחפשים ביטוי של זמן.',
							hint: '{p:ul}**When** - מתי\n{d:rtl}שורה 1.'
						},
						{
							type: 'mcq',
							prompt: 'In stanza 1, what is the dream compared to?',
							options: [
								['a wall', 'החומה מופיעה רק בבית 2.'],
								['the night', 'הלילה מופיע רק בסוף.'],
								['a shadow', 'הצל מופיע רק בבית 3.'],
								'a sun'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}״Bright like a sun״ - החלום זוהר כמו שמש. זו השוואה עם like (simile): החלום היה מלא אור ותקווה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Bright like a sun—" (line 5)\n{p:callout}**טיפ לבגרות:** like = כמו. השוואה עם like או as נקראת simile.',
							hint: '{p:ul}**compared to** - מושווה ל…\n{d:rtl}שורה 5: Bright like a…'
						},
						{
							type: 'mcq',
							prompt: 'How does the wall rise?',
							options: [
								'slowly, until it touches the sky',
								['suddenly, in one second', 'ההפך - כתוב slowly, slowly.'],
								['only a little', 'היא עולה עד השמיים - לא מעט.'],
								['it does not rise', 'כתוב שהיא עולה.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}החומה עולה לאט, לאט (שורות 8-9), עד שהיא נוגעת בשמיים (שורה 11). היא גדלה בהדרגה - והופכת לענקית.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Rose slowly," (line 8)\n{p:text}"Slowly," (line 9)\n{p:text}"Rose until it touched the sky—" (line 11)\n{p:callout}**טיפ לבגרות:** How? = מחפשים את האופן: מהר/לאט, הרבה/מעט.',
							hint: '{p:ul}**How** - איך\n{d:rtl}שורות 8-11.'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Stanza 3',
									lines: [
										{
											n: 13,
											en: 'Shadow.',
											he: 'צל.'
										},
										{
											n: 14,
											en: 'I am black.',
											he: 'אני שחור.'
										},
										{
											n: 15,
											en: 'I lie down in the shadow.',
											he: 'אני שוכב בצל (ומוותר).'
										},
										{
											n: 16,
											en: 'No longer the light of my dream before me,',
											he: 'האור של החלום כבר לא נמצא לפניי,'
										},
										{
											n: 17,
											en: 'Above me.',
											he: 'מעליי.'
										},
										{
											n: 18,
											en: 'Only the thick wall.',
											he: 'רק החומה העבה.'
										},
										{
											n: 19,
											en: 'Only the shadow.',
											he: 'רק הצל.'
										}
									]
								}
							],
							title: 'בתים 3-4: צל… וידיים'
						},
						{
							type: 'preface',
							text: '### 🌑 Stanza 3\n{p:text}Now the speaker is in the shadow of the wall. He says, "I am black." He lies down. He cannot see the light of his dream - only the thick wall and the shadow.\n{d:rtl}עכשיו הדובר נמצא בצל של החומה. הוא אומר: ״אני שחור.״ הוא נשכב - כאילו ויתר. הוא כבר לא רואה את אור החלום - רק את החומה העבה ואת הצל.'
						},
						{
							type: 'poem',
							stanzas: [
								{
									label: 'Stanza 4',
									lines: [
										{
											n: 20,
											en: 'My hands!',
											he: 'הידיים שלי!'
										},
										{
											n: 21,
											en: 'My dark hands!',
											he: 'הידיים הכהות שלי!'
										},
										{
											n: 22,
											en: 'Break through the wall!',
											he: 'פרצו את החומה!'
										},
										{
											n: 23,
											en: 'Find my dream!',
											he: 'מצאו את החלום שלי!'
										},
										{
											n: 24,
											en: 'Help me to shatter this darkness,',
											he: 'עזרו לי לנפץ את החושך הזה,'
										},
										{
											n: 25,
											en: 'To smash this night,',
											he: 'לרסק את הלילה הזה,'
										},
										{
											n: 26,
											en: 'To break this shadow',
											he: 'לשבור את הצל הזה'
										},
										{
											n: 27,
											en: 'Into a thousand lights of sun,',
											he: 'לאלף קרני שמש,'
										},
										{
											n: 28,
											en: 'Into a thousand whirling dreams',
											he: 'לאלף חלומות שמסתחררים'
										},
										{
											n: 29,
											en: 'Of sun!',
											he: 'של שמש!'
										}
									]
								}
							]
						},
						{
							type: 'preface',
							text: '### ✊🏾 Stanza 4\n{p:text}Suddenly, everything changes. The speaker calls to his own dark hands: break the wall, find my dream! He wants to break the darkness into a thousand lights of sun.\n{d:rtl}פתאום הכול משתנה. הדובר קורא לידיים הכהות שלו: פרצו את החומה! מצאו את החלום! הוא רוצה לנפץ את החושך לאלף קרני שמש.'
						},
						{
							type: 'mcq',
							prompt: 'What does the speaker do in the shadow (line 15)?',
							options: [
								['He runs away.', 'הוא לא בורח - הוא נשאר בצל.'],
								['He climbs the wall.', 'הוא לא מטפס - הוא נשכב.'],
								'He lies down.',
								['He sings.', 'אין שירה בבית הזה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״I lie down in the shadow״ - הוא נשכב בצל. זה רגע של ייאוש וויתור.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I lie down in the shadow." (line 15)\n{p:callout}**טיפ לבגרות:** זכרו את השורה הזאת - היא הניגוד הגדול לבית האחרון.',
							hint: '{d:rtl}lie down = לשכב.'
						},
						{
							type: 'mcq',
							prompt: 'Who does the speaker call to for help in stanza 4?',
							options: [
								['his friends', 'אין חברים בשיר.'],
								['God', 'הוא לא פונה לאלוהים.'],
								'his own hands',
								['the sun', 'השמש היא מה שהוא רוצה למצוא - לא מי שהוא קורא לו.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}הוא קורא לידיים שלו: ״My hands! / My dark hands!״. הוא לא מחכה שמישהו אחר יציל אותו - הוא פונה לכוח שלו עצמו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"My hands!" (line 20)\n{p:text}"My dark hands!" (line 21)\n{p:text}"Break through the wall!" (line 22)\n{p:callout}**טיפ לבגרות:** כשדובר פונה ישירות למישהו (או למשהו) בשיר, שאלו: למה דווקא אליו?',
							hint: '{p:ul}**Who** - מי\n{p:ul}**call to** - קורא אל\n{d:rtl}שורות 20-21.'
						},
						{
							type: 'mcq',
							prompt: 'What does the speaker want to turn the darkness into?',
							options: [
								'a thousand lights of sun',
								['a thicker wall', 'הוא רוצה להרוס את החומה, לא לחזק אותה.'],
								['a quiet night', 'הוא רוצה לרסק את הלילה.'],
								['a long sleep', 'הוא רוצה לפעול, לא לישון.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הוא רוצה לשבור את הצל ״לאלף קרני שמש״. בהתחלה הייתה שמש אחת - בסוף הוא חולם על אלף.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"To break this shadow" (line 26)\n{p:text}"Into a thousand lights of sun," (line 27)\n{p:text}"Into a thousand whirling dreams" (line 28)\n{p:text}"Of sun!" (line 29)\n{p:callout}**טיפ לבגרות:** שימו לב למספרים בשיר: a sun (אחת) → a thousand (אלף).',
							hint: '{d:rtl}שורה 27.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-grew-older-meaning',
		section: 'd-5',
		titleEn: 'Speaker & Meaning',
		required: ['d-grew-older-read'],
		position: {
			x: 100,
			y: 4850
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## הדובר והרגשות שלו\n### 🗣️ Who is the speaker?\n{p:text}The speaker is a Black man who looks back at his life. As he grew older, racism blocked his dream.\n{d:rtl}הדובר הוא אדם שחור שמסתכל אחורה על חייו. ככל שגדל, הגזענות חסמה את החלום שלו. בתשובות כותבים: The speaker…'
						},
						{
							type: 'preface',
							text: '{d:rtl}הרגשות של הדובר משתנים לאורך השיר. עקבו אחריהם:'
						},
						{
							type: 'steps',
							steps: [
								'**"Bright like a sun"** (line 1-6): hopeful (in the past)\n{d:rtl}מלא תקווה - אבל זה זיכרון מהעבר',
								'**"the wall rose"** (line 7-12): helpless\n{d:rtl}חסר אונים - החומה עולה והוא לא עוצר אותה',
								'**"I lie down"** (line 13-19): hopeless, gives up\n{d:rtl}מיואש - נשכב בצל ומוותר',
								'**"My dark hands!"** (line 20-29): determined, urgent\n{d:rtl}נחוש - קורא לפעולה, מלא כוח'
							]
						},
						{
							type: 'mcq',
							prompt: 'How does the speaker feel in line 15 ("I lie down in the shadow")?',
							options: [
								['excited', 'אין כאן התרגשות - הכול חשוך.'],
								['proud', 'הגאווה מגיעה רק בבית האחרון.'],
								['relaxed', 'הוא לא נח - הוא מוותר.'],
								'hopeless'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}הוא מרגיש ייאוש וחוסר תקווה. הוא כבר לא רואה את אור החלום - ״Only the thick wall. Only the shadow.״\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I lie down in the shadow." (line 15)\n{p:text}"Only the thick wall." (line 18)\n{p:text}"Only the shadow." (line 19)\n{p:callout}**טיפ לבגרות:** לפעמים אין מילת רגש בשורה - מסיקים את הרגש מהפעולה (lie down).',
							hint: '{d:rtl}מה אומר על אדם שהוא ״נשכב בצל״?'
						},
						{
							type: 'mcq',
							prompt: 'What is the tone of the last stanza?',
							options: [
								['calm and sleepy', 'ההפך - יש בו המון אנרגיה.'],
								'determined and urgent',
								['sad and quiet', 'העצב היה בבית 3. כאן הכול משתנה.'],
								['funny', 'אין בו הומור.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הבית האחרון נחוש ודחוף: סימני קריאה, פקודות (Break! Find!) ופעלים חזקים (shatter, smash).\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Break through the wall!" (line 22)\n{p:text}"Find my dream!" (line 23)\n{p:text}"Help me to shatter this darkness," (line 24)\n{p:text}"To smash this night," (line 25)\n{p:callout}**טיפ לבגרות:** סימני קריאה ופקודות (imperatives) יוצרים טון דחוף ונחוש.',
							hint: '{p:ul}**tone** - טון, אווירה\n{d:rtl}כמה סימני קריאה יש בבית האחרון?'
						},
						{
							type: 'preface',
							text: '## סמלים: אור וחושך\n### 🔑 What is a symbol?\n{p:text}A symbol is a thing that stands for a bigger idea.\n{d:rtl}סמל (symbol) הוא דבר מוחשי שמייצג רעיון גדול. החומה בשיר היא לא חומה של אבנים - היא מייצגת משהו אחר לגמרי.'
						},
						{
							type: 'preface',
							text: '{d:rtl}הנה הסמלים בשיר, ומה כל אחד מהם מסמל:'
						},
						{
							type: 'steps',
							steps: [
								'**☀️ The sun (line 5)**\n{p:text}The dream: hope and a bright future.\n{d:rtl}החלום: תקווה ועתיד מואר.',
								"**🧱 The wall (lines 7-12)**\n{p:text}Racism and unfair laws that block Black people's dreams.\n{d:rtl}גזענות וחוקים לא הוגנים שחוסמים את החלומות של אנשים שחורים.",
								'**🌑 Shadow, darkness, night**\n{p:text}Hopelessness - life without the dream.\n{d:rtl}ייאוש - חיים בלי החלום.',
								"**✊🏾 My dark hands (line 21)**\n{p:text}The speaker's own strength. The same blackness the wall stands against becomes his power.\n{d:rtl}הכוח של הדובר עצמו. דווקא הצבע הכהה, שבגללו עלתה החומה, הופך למקור הכוח שלו.",
								'**✨ A thousand lights of sun (line 27)**\n{p:text}A dream that grows bigger - maybe for many people, not only one.\n{d:rtl}חלום שגדל - אולי של אנשים רבים, לא רק של אחד.'
							]
						},
						{
							type: 'mcq',
							prompt: 'In the poem, the wall is a symbol of…',
							options: [
								["a real wall near the speaker's house", 'החומה לא עשויה מאבנים - היא סמל.'],
								'racism and unfair barriers',
								["the speaker's school", 'אין בית ספר בשיר.'],
								['bad weather', 'מזג האוויר לא קשור.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}החומה מסמלת גזענות וחסמים חברתיים. מיד אחרי ״Shadow״ הדובר אומר ״I am black״ (שורה 14) - וכך מחבר בין החומה לבין הצבע שלו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Between me and my dream." (line 10)\n{p:text}"Shadow." (line 13)\n{p:text}"I am black." (line 14)\n{p:callout}**טיפ לבגרות:** כשכותבים על סמל: The ___ is a symbol of ___. This shows that ___.',
							hint: '{p:ul}**symbol** - סמל\n{d:rtl}מה הדובר אומר מיד אחרי שהוא מגיע לצל (שורה 14)?'
						},
						{
							type: 'mcq',
							prompt: 'Why does the speaker say "My dark hands!" and not only "My hands!"?',
							options: [
								['because his hands are dirty', 'dark כאן הוא צבע העור - לא לכלוך.'],
								['because it is night', 'הלילה הוא סמל אחר - כאן מדובר בידיים.'],
								['because his hands are cold', 'אין כאן קור.'],
								'because his blackness becomes a source of strength, not only a reason for the wall'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}בשורה 14 הצבע השחור שלו קשור לצל ולחומה. בשורה 21 אותו צבע - ״dark hands״ - הוא מקור הכוח. זה המהפך הגדול של השיר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I am black." (line 14)\n{p:text}"My hands!" (line 20)\n{p:text}"My dark hands!" (line 21)\n{p:callout}**טיפ לבגרות:** כשמשורר חוזר על רעיון (black → dark) בהקשר חדש - שאלו מה השתנה.',
							hint: '{p:ul}**Why** - למה\n{d:rtl}השוו לשורה 14: I am black.'
						},
						{
							type: 'preface',
							text: '## הנושא והמסר\n### 📌 Theme · נושא\n{p:text}Dreams, and the racism that blocks them.\n{d:rtl}הנושא (theme): חלומות - והגזענות שחוסמת אותם.'
						},
						{
							type: 'preface',
							text: "### 💬 Message · מסר\n{p:text}Racism can block people's dreams, but people can find the strength in themselves to fight it and hope again.\n{d:rtl}המסר (message): גזענות יכולה לחסום חלומות, אבל אנשים יכולים למצוא כוח בתוך עצמם כדי להיאבק בה ולחזור לקוות."
						},
						{
							type: 'preface',
							text: '### ⚠️ Common mistakes\n{p:text}1. "The message is only: never give up." Too general - mention racism. 2. "The wall is a real wall." No - it is a symbol. 3. "At the end he breaks the wall." We don\'t know - he only calls for action.\n{d:rtl}טעות 1: ״המסר הוא רק: אל תוותרו״. זה כללי מדי - חובה להזכיר גזענות. טעות 2: ״החומה היא חומה אמיתית״. לא - זה סמל. טעות 3: ״בסוף הוא שובר את החומה״. אנחנו לא יודעים - הוא רק קורא לפעולה.'
						},
						{
							type: 'mcq',
							prompt: 'What is the main theme of the poem?',
							options: [
								'dreams and the racism that blocks them',
								['building a house', 'החומה היא סמל, לא בנייה אמיתית.'],
								['the beauty of nature', 'השמש והצל הם סמלים, לא תיאור טבע.'],
								['a trip to the sea', 'אין בשיר טיול.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}הנושא הוא חלומות והגזענות שחוסמת אותם. השורה ״I am black״ מבהירה על איזו חומה מדובר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"My dream." (line 6)\n{p:text}"The wall." (line 12)\n{p:text}"I am black." (line 14)\n{p:callout}**טיפ לבגרות:** נושא (theme) = מילה או כמה מילים. מסר (message) = משפט שלם.',
							hint: '{p:ul}**theme** - נושא\n{d:rtl}מה עומד בין הדובר לבין החלום?'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence best describes the message of the poem?',
							options: [
								['Walls protect people.', 'בשיר החומה חוסמת - היא לא מגינה.'],
								['Dreams are not important.', 'החלום הוא הדבר הכי חשוב לדובר.'],
								'Racism can block dreams, but people can find the strength to fight it and hope again.',
								[
									'It is better to forget your dreams.',
									'הוא כמעט שכח - אבל בסוף הוא נלחם כדי למצוא אותו.'
								]
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}בבית 3 הגזענות כמעט מכבה את החלום. בבית 4 הדובר מוצא כוח בידיים שלו ונלחם. המסר כולל את שני החלקים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I am black." (line 14)\n{p:text}"I lie down in the shadow." (line 15)\n{p:text}"My dark hands!" (line 21)\n{p:text}"Break through the wall!" (line 22)\n{p:callout}**טיפ לבגרות:** מסר טוב בשיר הזה מזכיר גם את הבעיה (גזענות) וגם את התגובה (מאבק ותקווה).',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{p:ul}**message** - מסר\n{d:rtl}השוו בין הבית השלישי לבית הרביעי.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-grew-older-think',
		section: 'd-5',
		titleEn: 'Think About It',
		required: ['d-grew-older-meaning'],
		position: {
			x: 70,
			y: 4970
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
							title: 'As I Grew Older - Langston Hughes',
							stanzas: [
								{
									label: 'Stanza 1',
									lines: [
										{
											n: 1,
											en: 'It was a long time ago.',
											he: 'זה היה לפני הרבה זמן.'
										},
										{
											n: 2,
											en: 'I have almost forgotten my dream.',
											he: 'כמעט שכחתי את החלום שלי.'
										},
										{
											n: 3,
											en: 'But it was there then,',
											he: 'אבל אז הוא היה שם,'
										},
										{
											n: 4,
											en: 'In front of me,',
											he: 'ממש לפניי,'
										},
										{
											n: 5,
											en: 'Bright like a sun—',
											he: 'זוהר כמו שמש -'
										},
										{
											n: 6,
											en: 'My dream.',
											he: 'החלום שלי.'
										}
									]
								},
								{
									label: 'Stanza 2',
									lines: [
										{
											n: 7,
											en: 'And then the wall rose,',
											he: 'ואז החומה התחילה לעלות,'
										},
										{
											n: 8,
											en: 'Rose slowly,',
											he: 'עלתה לאט,'
										},
										{
											n: 9,
											en: 'Slowly,',
											he: 'לאט,'
										},
										{
											n: 10,
											en: 'Between me and my dream.',
											he: 'ביני לבין החלום שלי.'
										},
										{
											n: 11,
											en: 'Rose until it touched the sky—',
											he: 'עלתה עד שנגעה בשמיים -'
										},
										{
											n: 12,
											en: 'The wall.',
											he: 'החומה.'
										}
									]
								},
								{
									label: 'Stanza 3',
									lines: [
										{
											n: 13,
											en: 'Shadow.',
											he: 'צל.'
										},
										{
											n: 14,
											en: 'I am black.',
											he: 'אני שחור.'
										},
										{
											n: 15,
											en: 'I lie down in the shadow.',
											he: 'אני שוכב בצל (ומוותר).'
										},
										{
											n: 16,
											en: 'No longer the light of my dream before me,',
											he: 'האור של החלום כבר לא נמצא לפניי,'
										},
										{
											n: 17,
											en: 'Above me.',
											he: 'מעליי.'
										},
										{
											n: 18,
											en: 'Only the thick wall.',
											he: 'רק החומה העבה.'
										},
										{
											n: 19,
											en: 'Only the shadow.',
											he: 'רק הצל.'
										}
									]
								},
								{
									label: 'Stanza 4',
									lines: [
										{
											n: 20,
											en: 'My hands!',
											he: 'הידיים שלי!'
										},
										{
											n: 21,
											en: 'My dark hands!',
											he: 'הידיים הכהות שלי!'
										},
										{
											n: 22,
											en: 'Break through the wall!',
											he: 'פרצו את החומה!'
										},
										{
											n: 23,
											en: 'Find my dream!',
											he: 'מצאו את החלום שלי!'
										},
										{
											n: 24,
											en: 'Help me to shatter this darkness,',
											he: 'עזרו לי לנפץ את החושך הזה,'
										},
										{
											n: 25,
											en: 'To smash this night,',
											he: 'לרסק את הלילה הזה,'
										},
										{
											n: 26,
											en: 'To break this shadow',
											he: 'לשבור את הצל הזה'
										},
										{
											n: 27,
											en: 'Into a thousand lights of sun,',
											he: 'לאלף קרני שמש,'
										},
										{
											n: 28,
											en: 'Into a thousand whirling dreams',
											he: 'לאלף חלומות שמסתחררים'
										},
										{
											n: 29,
											en: 'Of sun!',
											he: 'של שמש!'
										}
									]
								}
							]
						},
						{
							type: 'mcq',
							prompt: 'In which line does the speaker say "I am black"?',
							options: [
								['line 1', 'שורה 1 - ״It was a long time ago.״'],
								['line 7', 'שורה 7 - החומה מתחילה לעלות.'],
								'line 14',
								['line 29', 'שורה 29 - ״Of sun!״']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}שורה 14. המשפט הקצר הזה מגיע מיד אחרי ״Shadow״ - וכך מסביר מהי החומה ומהו הצל.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Shadow." (line 13)\n{p:text}"I am black." (line 14)\n{p:callout}**טיפ לבגרות:** משפט קצר מאוד בשיר הוא בדרך כלל משפט חשוב מאוד.',
							hint: '{p:ul}**which line** - איזו שורה\n{d:rtl}מיד אחרי המילה Shadow.'
						},
						{
							type: 'mcq',
							prompt: 'Which word is repeated in lines 8-9?',
							options: [
								['dream', 'dream חוזרת בשיר, אבל לא בשורות 8-9.'],
								['wall', 'wall מופיעה בשורות 7 ו־12.'],
								'slowly',
								['sun', 'sun מופיעה בשורה 5.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}״Rose slowly, / Slowly״ - החזרה על slowly מראה שהחומה עלתה בהדרגה, כמעט בלי שהדובר שם לב.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Rose slowly," (line 8)\n{p:text}"Slowly," (line 9)\n{p:callout}**טיפ לבגרות:** מונח שימושי: repetition = חזרה. היא מדגישה רעיון.',
							hint: '{p:ul}**repeated** - חוזר\n{d:rtl}Rose ___, / ___,'
						},
						{
							type: 'mcq',
							prompt: 'In lines 18-19, what is the only thing the speaker can see?',
							options: [
								'the thick wall and the shadow',
								['the light of his dream', 'ההפך - האור כבר לא לפניו (שורה 16).'],
								['his friends', 'אין חברים בשיר.'],
								['the sky', 'החומה מגיעה עד השמיים ומסתירה אותם.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}״Only the thick wall. / Only the shadow.״ - החזרה על Only מראה שלא נשאר לו שום דבר אחר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Only the thick wall." (line 18)\n{p:text}"Only the shadow." (line 19)\n{p:callout}**טיפ לבגרות:** שימו לב למילים כמו only, never, no longer - הן מראות מה חסר.',
							hint: '{p:ul}**only** - רק\n{d:rtl}Only the… Only the…'
						},
						{
							type: 'mcq',
							prompt: 'How many stanzas are in the poem?',
							options: [['2', 'יש יותר.'], '4', ['6', 'יש פחות.'], ['29', '29 זה מספר השורות.']],
							correctIndex: 1,
							explanation:
								'{d:rtl}לשיר 4 בתים ו־29 שורות קצרות.\n{p:callout}**טיפ לבגרות:** line = שורה, stanza = בית. אל תתבלבלו!',
							hint: '{p:ul}**stanza** - בית\n{d:rtl}stanza = בית.'
						},
						{
							type: 'preface',
							text: '## מה מסתתר בין השורות?\n{d:rtl}עכשיו התשובה לא כתובה במפורש. צריך להבין ממה שכתוב - כמו בלש שמחפש רמזים 🔍.'
						},
						{
							type: 'mcq',
							prompt: 'Why has the speaker "almost forgotten" his dream (line 2)?',
							options: [
								['because he is very old and sick', 'השיר לא מדבר על מחלה.'],
								[
									'because the dream was not important',
									'החלום היה ״זוהר כמו שמש״ - הוא היה חשוב מאוד.'
								],
								['because he found a new dream', 'אין בשיר חלום חדש.'],
								'because the wall hid it from him for a long time'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}החומה הסתירה את החלום כל כך הרבה זמן, שהדובר כמעט שכח אותו. כך גזענות יכולה ״למחוק״ חלומות לאט־לאט.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I have almost forgotten my dream." (line 2)\n{p:text}"Between me and my dream." (line 10)\n{p:text}"No longer the light of my dream before me," (line 16)\n{p:callout}**טיפ לבגרות:** Why…? → התחילו ב־because, והוסיפו ראיה מהשיר.',
							hint: '{p:ul}**Why** - למה\n{d:rtl}מה עמד בינו לבין החלום הרבה זמן?'
						},
						{
							type: 'mcq',
							prompt: 'Why does the wall rise "slowly, / Slowly" and not suddenly?',
							options: [
								['because walls are heavy', 'זה פירוש מילולי - החומה היא סמל.'],
								'because racism grew little by little as the speaker grew older',
								['because the builders were lazy', 'אין בונים בשיר.'],
								['because it was night', 'הלילה לא קשור לקצב של החומה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}כמו שהדובר גדל לאט, כך גם החומה עלתה לאט. ילד קטן לא מרגיש את הגזענות מיד - הוא מגלה אותה בהדרגה, ככל שהוא מתבגר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Rose slowly," (line 8)\n{p:text}"Slowly," (line 9)\n{p:callout}**טיפ לבגרות:** חברו בין פרטים בשיר לבין הכותרת - זה מראה הבנה עמוקה.',
							hint: '{p:ul}**Why** - למה\n{p:ul}**slowly** - לאט\n{d:rtl}חשבו על הכותרת: As I Grew Older.'
						},
						{
							type: 'mcq',
							prompt: '"No longer the light of my dream before me, / Above me." What has changed?',
							options: [
								['The dream is closer now.', 'ההפך - הוא רחוק יותר.'],
								'The dream is now out of reach - he cannot see it.',
								['The dream is now in his hands.', 'הידיים מופיעות רק בבית הבא.'],
								['Nothing has changed.', 'יש שינוי גדול - מ״לפניי״ ל״כבר לא לפניי״.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}בבית 1 החלום היה ״In front of me״ - קרוב. עכשיו הוא ״No longer… before me, / Above me״ - רחוק, מעבר לחומה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"In front of me," (line 4)\n{p:text}"No longer the light of my dream before me," (line 16)\n{p:text}"Above me." (line 17)\n{p:callout}**טיפ לבגרות:** השוו בין מילות מקום (in front of, above) בחלקים שונים של השיר.',
							hint: '{p:ul}**changed** - השתנה\n{d:rtl}השוו לשורה 4: In front of me.'
						},
						{
							type: 'mcq',
							prompt: 'Why does the last stanza have so many exclamation marks?',
							options: [
								['to show that the speaker is laughing', 'הוא לא צוחק - הוא נלחם.'],
								['because the poem is a song', 'זו לא הסיבה.'],
								['by mistake', 'משוררים בוחרים סימני פיסוק בכוונה.'],
								'to show strong feeling and a call to act now'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}סימני הקריאה מראים רגש חזק ודחיפות: הדובר כבר לא שוכב בצל - הוא קורא לפעולה עכשיו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"My hands!" (line 20)\n{p:text}"Break through the wall!" (line 22)\n{p:text}"Find my dream!" (line 23)\n{p:callout}**טיפ לבגרות:** גם סימני פיסוק הם חלק מהמשמעות של שיר.',
							hint: '{p:ul}**Why** - למה\n{d:rtl}איך נשמע מישהו שצועק ״Break through the wall!״?'
						},
						{
							type: 'preface',
							text: '## מה אתם חושבים?\n{d:rtl}עכשיו נחבר בין חלקים שונים בשיר ובין השיר לחיים. תשובות כאלה מרשימות מאוד את המורים!'
						},
						{
							type: 'preface',
							text: '{p:text}**Stanza 3 (giving up)**\n{p:text}"I lie down in the shadow." (line 15)\n{p:text}"Only the shadow." (line 19)\n---\n{p:text}**Stanza 4 (fighting)**\n{p:text}"My dark hands!" (line 21)\n{p:text}"Break through the wall!" (line 22)\n{d:rtl}השוו: בבית 3 הדובר נשכב בצל. בבית 4 הוא קורא לידיים שלו לפרוץ את החומה.'
						},
						{
							type: 'mcq',
							prompt: 'What is the main difference between stanza 3 and stanza 4?',
							options: [
								'In stanza 3 the speaker gives up; in stanza 4 he decides to fight.',
								['Stanza 3 is happy, and stanza 4 is sad.', 'זה ההפך.'],
								['Each stanza has a different speaker.', 'יש דובר אחד בכל השיר.'],
								['There is no difference.', 'יש הבדל גדול - זו נקודת המפנה.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}בבית 3 הוא שוכב בצל ומוותר. בבית 4 הוא קורא לפעולה ומלא כוח. זו נקודת המפנה (turning point) של השיר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I lie down in the shadow." (line 15)\n{p:text}"My hands!" (line 20)\n{p:text}"Break through the wall!" (line 22)\n{p:callout}**טיפ לבגרות:** תשובה מצוינת להשוואה: In stanza 3… However, in stanza 4…',
							hint: '{p:ul}**difference** - הבדל\n{d:rtl}השוו: I lie down ↔ Break through the wall!'
						},
						{
							type: 'mcq',
							prompt: 'Why do you think the poem is called "As I Grew Older"?',
							options: [
								['It is about a birthday party.', 'אין מסיבה בשיר.'],
								['The speaker is very old and tired.', 'הוא לא חלש - בסוף הוא מלא כוח.'],
								'As the speaker grew up, he discovered the racism that blocked his dream.',
								['It is about a growing tree.', 'אין עץ בשיר.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}כילד, החלום היה ״זוהר כמו שמש״. ככל שגדל, החומה עלתה - הוא גילה את הגזענות. הכותרת מחברת בין ההתבגרות לבין הגילוי הכואב הזה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"It was a long time ago." (line 1)\n{p:text}"Bright like a sun—" (line 5)\n{p:text}"And then the wall rose," (line 7)\n{p:callout}**טיפ לבגרות:** שאלה על כותרת? חשבו מה היא מוסיפה למשמעות השיר.',
							hint: '{p:ul}**Why do you think** - למה לדעתך\n{p:ul}**called** - נקרא\n{d:rtl}מתי הייתה לו חלום? ומתי עלתה החומה?'
						},
						{
							type: 'mcq',
							prompt:
								'At the beginning there is "a sun". At the end there are "a thousand lights of sun". What can this show?',
							options: [
								['The weather is getting hotter.', 'זה לא על מזג אוויר.'],
								['The speaker forgot his dream.', 'ההפך - הוא חוזר לחלום.'],
								'The dream has become bigger - maybe a dream for many people.',
								['The poem is about the solar system.', 'השמש היא סמל, לא אסטרונומיה.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}שמש אחת הפכה לאלף. אפשר להבין שהחלום גדל - אולי הוא כבר לא חלום של אדם אחד, אלא של רבים. זו פרשנות - כותבים It may show that…\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Bright like a sun—" (line 5)\n{p:text}"Into a thousand lights of sun," (line 27)\n{p:text}"Into a thousand whirling dreams" (line 28)\n{p:callout}**טיפ לבגרות:** כשהתשובה היא פרשנות, כתבו: It may show that… / Perhaps…',
							hint: '{p:ul}**show** - להראות\n{d:rtl}אחת → אלף. מה גדל?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-grew-older-answer',
		section: 'd-5',
		titleEn: 'Answer Like a Pro',
		required: ['d-grew-older-think'],
		position: {
			x: 0,
			y: 5090
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
								'**ANSWER** - עונים על השאלה במשפט אחד ברור.\n{p:text}The wall is a symbol of…',
								'**PROVE** - מביאים ראיה מהשיר, עם מספר שורה.\n{p:text}For example, in line 14 the speaker says, "…"',
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
								'{p:text}**What does the wall symbolize? Explain.**\n{d:rtl}סדרו את המשפטים לתשובה מלאה: ANSWER → PROVE → EXPLAIN',
							tiles: [
								"The wall is a symbol of racism and the unfair barriers that block the speaker's dream.",
								'For example, right after the wall makes a "Shadow" (line 13), the speaker says, "I am black" (line 14).',
								'This shows that the wall is not a real wall: it rose because of the color of his skin.'
							],
							explanation: '{d:rtl}מצוין! זו תשובה מלאה: תשובה ← ראיה ← הסבר.'
						},
						{
							type: 'mcq',
							prompt: 'In the answer you built, which sentence is the EXPLAIN part?',
							options: [
								['The wall is a symbol of racism…', 'זה ה־ANSWER - התשובה עצמה.'],
								['For example, right after the wall makes a "Shadow"…', 'זו הראיה - PROVE.'],
								'This shows that the wall is not a real wall…'
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}משפט ההסבר מחבר בין הראיה לתשובה ומסביר מה היא מלמדת.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Shadow." (line 13)\n{p:text}"I am black." (line 14)\n{p:callout}**טיפ לבגרות:** הטעות הנפוצה ביותר: לצטט ולעצור. בלי הסבר - מאבדים נקודות!',
							hint: '{p:ul}**EXPLAIN** - הסבר\n{d:rtl}איזה משפט מתחיל ב־This shows that?'
						},
						{
							type: 'preface',
							text: '## בונים תשובה בעצמנו\n{d:rtl}השאלה: How does the speaker change from stanza 3 to stanza 4? בחרו בכל שלב את המשפט הטוב ביותר.'
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How does the speaker change from stanza 3 to stanza 4? Explain.**\n{d:rtl}שלב 1: בחרו את משפט ה־ANSWER הטוב ביותר.',
							options: [
								['The poem has four stanzas.', 'זו עובדה על המבנה, לא תשובה.'],
								'The speaker changes from giving up to fighting for his dream.',
								['The speaker likes the sun.', 'זה לא עונה על השאלה על שינוי.']
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How does the speaker change from stanza 3 to stanza 4? Explain.**\n{d:rtl}שלב 2: בחרו את משפט ה־PROVE הטוב ביותר.',
							options: [
								[
									'For example, in line 5 the dream is "Bright like a sun."',
									'השורה הזאת מבית 1 - היא לא מראה את השינוי בין בית 3 לבית 4.'
								],
								'For example, in line 15 he says, "I lie down in the shadow," but in line 22 he calls, "Break through the wall!"',
								['For example, the wall is thick.', 'זה פרט אחד - הוא לא מראה שינוי.']
							],
							correctIndex: 1
						},
						{
							type: 'mcq',
							prompt:
								'{p:text}**How does the speaker change from stanza 3 to stanza 4? Explain.**\n{d:rtl}שלב 3: בחרו את משפט ה־EXPLAIN הטוב ביותר.',
							options: [
								'This shows that he finds new strength in himself and refuses to accept the wall.',
								['This shows that he likes walls.', 'ההסבר לא נכון.'],
								['Langston Hughes was born in 1901.', 'זה מידע על המשורר, לא הסבר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}התשובה המלאה:\n{p:text}The speaker changes from giving up to fighting for his dream.\n{p:text}For example, in line 15 he says, "I lie down in the shadow," but in line 22 he calls, "Break through the wall!"\n{p:text}This shows that he finds new strength in himself and refuses to accept the wall.'
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
								'{p:text}**Now you! Which line in the poem do you find most powerful? Explain why.**\n{d:rtl}עכשיו תורכם! איזו שורה בשיר הכי חזקה בעיניכם? הסבירו למה. (40-60 מילים)',
							wordBank: [
								'The line I find most powerful is',
								'In my opinion,',
								'Before this line,',
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
								'The line I find most powerful is "My dark hands!" (line 21). In my opinion, it is the most important moment in the poem. Before this line, the speaker lies down in the shadow. Now he calls to his own dark hands for help. This shows that he finds strength in himself.',
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "As I Grew Older" by Langston Hughes (Bagrut Module D, B1 level). A good answer has three parts: ANSWER (one clear sentence), PROVE (a quote or detail from the poem, with a line number), EXPLAIN ("This shows that..." / "because"). Judge structure and relevance, not literary depth. Model answer: The line I find most powerful is "My dark hands!" (line 21). In my opinion, it is the most important moment in the poem. Before this line, the speaker lies down in the shadow. Now he calls to his own dark hands for help. This shows that he finds strength in himself.'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-grew-older-challenge',
		section: 'd-5',
		titleEn: 'Literature Challenge',
		required: ['d-grew-older-answer'],
		position: {
			x: -70,
			y: 5210
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
							prompt: '"Bright like a sun" (line 5) is a…',
							options: [
								'simile - a comparison with "like"',
								['question', 'אין כאן שאלה.'],
								['rhyme', 'אין כאן חריזה.'],
								['title', 'זה לא שם השיר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}simile = השוואה עם like או as. החלום מושווה לשמש.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Bright like a sun—" (line 5)\n{p:callout}**טיפ לבגרות:** simile = עם like/as. metaphor = בלי like/as (למשל: החומה).',
							hint: '{p:ul}**like** - כמו\n{d:rtl}השוואה עם like או as נקראת…?'
						},
						{
							type: 'mcq',
							prompt: '"Break through the wall! / Find my dream!" These sentences are…',
							options: [
								['questions', 'אין בהן סימן שאלה.'],
								['descriptions of nature', 'אין כאן תיאור טבע.'],
								['memories', 'הזיכרונות היו בבית 1.'],
								'commands (imperatives)'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}אלה פקודות (imperatives): הדובר מצווה על הידיים שלו לפעול. זה יוצר טון נחוש ודחוף.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Break through the wall!" (line 22)\n{p:text}"Find my dream!" (line 23)\n{p:callout}**טיפ לבגרות:** imperative = משפט ציווי. הוא מראה כוח והחלטה.',
							hint: '{d:rtl}איך נשמעת הוראה? ״שבו!״ ״קראו!״'
						},
						{
							type: 'mcq',
							prompt: '"Only the thick wall." What does "thick" tell us about the wall?',
							options: [
								['It is very beautiful.', 'אין כאן יופי - יש כאן מכשול.'],
								'It is very strong and hard to break.',
								['It is very thin.', 'זה ההפך - thick = עבה.'],
								['It is made of glass.', 'אין זכוכית בשיר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}חומה עבה = חומה חזקה שקשה מאוד לשבור. כך הגזענות נראית לדובר בבית 3: כמעט בלתי אפשרי לעבור אותה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Only the thick wall." (line 18)\n{p:callout}**טיפ לבגרות:** שמות תואר (thick, bright, dark) מוסיפים הרבה משמעות לשיר.',
							hint: '{d:rtl}thick = עבה.'
						},
						{
							type: 'mcq',
							prompt: 'Which word best describes the speaker at the end of the poem?',
							options: [
								['tired', 'הוא מלא אנרגיה בסוף.'],
								'determined',
								['confused', 'הוא יודע בדיוק מה הוא רוצה.'],
								['bored', 'אין כאן שעמום.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}בסוף הדובר נחוש: הוא קורא לידיים שלו לפרוץ את החומה ולמצוא את החלום.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Break through the wall!" (line 22)\n{p:text}"Find my dream!" (line 23)\n{p:text}"Help me to shatter this darkness," (line 24)\n{p:callout}**טיפ לבגרות:** מילים לתיאור דובר: hopeful, hopeless, determined, helpless.',
							hint: '{p:ul}**best describes** - מתאר הכי טוב\n{d:rtl}determined = נחוש.'
						},
						{
							type: 'mcq',
							prompt: 'Which three verbs in stanza 4 show force?',
							options: [
								['rose, touched, lie', 'אלה פעלים מבתים 2-3, והם לא מראים כוח של הדובר.'],
								['forgot, was, am', 'אלה פעלים חלשים, של מצב.'],
								['find, help, whirl', 'find ו־help לא מראים כוח.'],
								'shatter, smash, break'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}shatter (לנפץ), smash (לרסק), break (לשבור) - שלושה פעלים חזקים שמראים את הכוח והנחישות של הדובר.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Help me to shatter this darkness," (line 24)\n{p:text}"To smash this night," (line 25)\n{p:text}"To break this shadow" (line 26)\n{p:callout}**טיפ לבגרות:** פעלים חזקים = רגש חזק. כדאי לציין אותם בתשובה על טון.',
							hint: '{p:ul}**verbs** - פעלים\n{d:rtl}שורות 24-26.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is NOT true according to the poem?',
							options: [
								'At the end, the speaker has already broken the wall.',
								['The dream was once bright like a sun.', 'זה נכון - שורה 5.'],
								['The wall rose slowly.', 'זה נכון - שורות 8-9.'],
								['The speaker calls to his hands for help.', 'זה נכון - שורות 20-21.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}השיר לא אומר שהחומה נשברה. הדובר רק קורא לידיים שלו לשבור אותה - זה רצון וקריאה לפעולה, לא ניצחון שכבר קרה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Break through the wall!" (line 22)\n{p:text}"Help me to shatter this darkness," (line 24)\n{p:callout}**טיפ לבגרות:** הבדילו בין מה שהדובר רוצה לבין מה שקרה באמת.',
							hint: '{p:ul}**NOT true** - לא נכון\n{d:rtl}NOT = לא נכון. האם השיר מספר שהחומה נשברה?'
						}
					],
					retryMissed: true
				}
			]
		}
	},
	{
		id: 'd-grew-older-mastery',
		section: 'd-5',
		titleEn: 'Mastery Check',
		required: ['d-grew-older-challenge'],
		position: {
			x: -100,
			y: 5330
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
							prompt: 'What rises between the speaker and his dream?',
							options: [
								['a tree', 'אין עץ בשיר.'],
								['the sun', 'השמש היא החלום עצמו.'],
								'a wall',
								['the sea', 'אין ים בשיר.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}חומה עולה בין הדובר לחלום שלו (שורות 7-10).\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"And then the wall rose," (line 7)\n{p:text}"Between me and my dream." (line 10)\n{p:callout}**טיפ לבגרות:** What = מחפשים דבר.'
						},
						{
							type: 'mcq',
							prompt: '"shatter" means…',
							options: [
								['to build', 'זה ההפך.'],
								['to sleep', 'אין קשר לשינה.'],
								'to break into many pieces',
								['to forget', 'לשכוח זה forget.']
							],
							correctIndex: 2,
							explanation:
								'{d:rtl}shatter = לנפץ לרסיסים.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Help me to shatter this darkness," (line 24)\n{p:callout}**טיפ לבגרות:** פעלים חזקים: shatter, smash, break.'
						},
						{
							type: 'mcq',
							prompt: 'The poem is mostly about…',
							options: [
								'a dream blocked by racism, and the fight to reach it',
								['building a wall', 'החומה היא סמל.'],
								['a sunny day', 'השמש היא סמל.'],
								['the life of a child at school', 'אין בית ספר בשיר.']
							],
							correctIndex: 0,
							explanation:
								'{d:rtl}השיר עוסק בחלום שהגזענות חסמה - ובמאבק לחזור אליו.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"My dream." (line 6)\n{p:text}"I am black." (line 14)\n{p:text}"Break through the wall!" (line 22)\n{p:callout}**טיפ לבגרות:** theme = על מה השיר.'
						},
						{
							type: 'mcq',
							prompt: 'In which line does the big change (the turning point) begin?',
							options: [
								['line 1', 'שורה 1 - תחילת הזיכרון.'],
								['line 7', 'שורה 7 - החומה מתחילה לעלות.'],
								['line 13', 'שורה 13 - הצל, עוד לפני השינוי.'],
								'line 20'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}שורה 20 - ״My hands!״. מכאן הדובר מפסיק לוותר ומתחיל להיאבק.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"My hands!" (line 20)\n{p:callout}**טיפ לבגרות:** נקודת מפנה = turning point.'
						},
						{
							type: 'mcq',
							prompt: '"My dark hands!" (line 21) shows that…',
							options: [
								['his hands are dirty', 'dark הוא צבע העור, לא לכלוך.'],
								['he is afraid of the dark', 'הוא לא מפחד - הוא נלחם.'],
								['he wants to sleep', 'ההפך - הוא רוצה לפעול.'],
								'his strength comes from himself and from his identity'
							],
							correctIndex: 3,
							explanation:
								'{d:rtl}הכוח שלו בא מתוכו - ודווקא מהזהות שבגללה עלתה החומה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I am black." (line 14)\n{p:text}"My dark hands!" (line 21)\n{p:callout}**טיפ לבגרות:** השוו בין black (שורה 14) לבין dark (שורה 21).'
						},
						{
							type: 'mcq',
							prompt: 'Which is the best evidence for: "The speaker gives up"?',
							options: [
								['"Bright like a sun"', 'השורה מתארת את החלום.'],
								'"I lie down in the shadow."',
								['"Break through the wall!"', 'השורה מראה דווקא מאבק.'],
								['"Of sun!"', 'השורה מסיימת בתקווה.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}״I lie down in the shadow״ - הוא נשכב בצל: ראיה ישירה לוויתור.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I lie down in the shadow." (line 15)\n{p:callout}**טיפ לבגרות:** ראיה טובה מוכיחה בדיוק את הטענה.'
						},
						{
							type: 'mcq',
							prompt: 'Which sentence is a good EXPLANATION (not just a quote)?',
							options: [
								['In line 14 he says "I am black."', 'זה ציטוט, לא הסבר.'],
								'This shows that the wall rose because of the color of his skin.',
								['The poem has 29 lines.', 'עובדה על המבנה.'],
								['Langston Hughes lived in Harlem.', 'עובדה על המשורר.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}הסבר מתחיל לרוב ב־This shows that… ואומר מה הראיה מלמדת.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"I am black." (line 14)\n{p:callout}**טיפ לבגרות:** ANSWER → PROVE → EXPLAIN.'
						},
						{
							type: 'mcq',
							prompt: 'Does the poem say that the speaker has broken the wall?',
							options: [
								['Yes - in line 22.', 'בשורה 22 הוא קורא לפרוץ - זו לא תוצאה.'],
								'No - he only calls for action and hopes.',
								['Yes - in the last line.', 'השורה האחרונה היא חזון של תקווה.'],
								['Yes - the wall falls in stanza 2.', 'בבית 2 החומה עולה, לא נופלת.']
							],
							correctIndex: 1,
							explanation:
								'{d:rtl}השיר מסתיים בקריאה לפעולה ובחזון של תקווה - לא בניצחון שכבר קרה.\n{d:rtl}📜 ראיה מהשיר:\n{p:text}"Break through the wall!" (line 22)\n{p:text}"Into a thousand lights of sun," (line 27)\n{p:callout}**טיפ לבגרות:** הבדילו בין רצון לבין מה שקרה.'
						}
					]
				}
			]
		}
	},
	{
		id: 'd-grew-older-samples',
		section: 'd-5',
		titleEn: 'Sample Answers',
		required: ['d-grew-older-mastery'],
		position: {
			x: -70,
			y: 5450
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
							text: '### שאלה 1\n{p:text}**What does the wall symbolize? Explain.**\n---\n{p:text}**The wall is a symbol of** racism and the unfair barriers that block the speaker\'s dream. **For example**, right after the wall makes a "Shadow" (line 13), the speaker says, "I am black" (line 14). **This shows that** the wall rose because of the color of his skin. **In addition**, the wall rises "until it touched the sky" (line 11), so it seems impossible to cross.'
						},
						{
							type: 'preface',
							text: '### שאלה 2\n{p:text}**How does the speaker feel in stanza 3? Explain why.**\n---\n{p:text}**In stanza 3, the speaker feels** hopeless. **He says**, "I lie down in the shadow" (line 15), as if he has given up. **In addition**, he can see "Only the thick wall. / Only the shadow" (lines 18-19). **This shows that** racism has blocked his dream for so long that he no longer sees any light. **That is why** he feels so helpless.'
						},
						{
							type: 'preface',
							text: '### שאלה 3\n{p:text}**What is the turning point of the poem? Explain.**\n---\n{p:text}**In my opinion, the turning point is** line 20, "My hands!" **Before this line**, the speaker lies down in the shadow and gives up. **After it**, he calls to his own hands: "Break through the wall! / Find my dream!" (lines 22-23). **This shows that** he finds new strength in himself. **That is why** the tone changes from hopeless to determined.'
						},
						{
							type: 'preface',
							text: '### שאלה 4\n{p:text}**What is the message of the poem? Do you agree with it? Explain.**\n---\n{p:text}**The message of the poem is that** racism can block people\'s dreams, but people can find the strength to fight it. **For example**, the speaker lies down in the shadow, but then he calls to his "dark hands" to break the wall (lines 21-22). **I agree with this message because** change starts when people believe in their own power. **However**, the poem does not say that the fight is easy.'
						},
						{
							type: 'preface',
							text: '### שאלה 5\n{p:text}**Which line in the poem interested you most? Explain why.**\n---\n{p:text}**The line that interested me most is** "My dark hands!" (line 21). **In my opinion**, it is very powerful, **because** the speaker uses the same color that the wall stands against as a source of strength. **Before this**, he says, "I am black" (line 14), and lies down in the shadow. **This shows that** his identity is not his weakness. It is his power.'
						},
						{
							type: 'preface',
							text: '### שאלה 6\n{p:text}**Why do you think the poem is called "As I Grew Older"?**\n---\n{p:text}**I think the poem is called** "As I Grew Older" **because** the wall rose while the speaker was growing up. **As a child**, his dream was "Bright like a sun" (line 5). **As he grew older**, the wall rose "slowly, / Slowly" (lines 8-9), and he discovered racism. **This shows that** growing up meant learning a painful truth. **However**, at the end he still fights for his dream.'
						},
						{
							type: 'summary',
							title: 'ביטויי זהב',
							lines: [
								'**The ___ is a symbol of …** - ה־___ הוא סמל של …',
								'**In my opinion, …** - לדעתי, …',
								'**I think that … because …** - אני חושב/ת ש… כי …',
								'**For example, in line __ the speaker says, "…"** - למשל, בשורה __ הדובר אומר…',
								'**This shows that …** - זה מראה ש…',
								'**Before this line, … After it, …** - לפני השורה הזאת … אחריה …',
								'**The message of the poem is that …** - המסר של השיר הוא ש…',
								'**In addition, …** - בנוסף, …',
								'**However, …** - עם זאת, …',
								'**It may show that … / Perhaps …** - ייתכן שזה מראה ש… / אולי …',
								'**I agree with this message because …** - אני מסכים/ה עם המסר כי …',
								'**That is why …** - זו הסיבה ש…'
							]
						},
						{
							type: 'summary',
							title: 'מושגים',
							lines: [
								'**speaker** - הדובר - הקול שמדבר בשיר',
								'**stanza** - בית בשיר',
								'**free verse** - שיר חופשי - בלי חריזה קבועה',
								'**simile** - השוואה עם like או as (Bright like a sun)',
								'**symbol / metaphor** - סמל / מטאפורה - החומה מייצגת גזענות',
								'**repetition** - חזרה על מילים (slowly, only, thousand)',
								'**imperative** - משפט ציווי (Break through the wall!)',
								'**tone** - טון - האווירה וההרגשה בשיר',
								'**contrast** - ניגוד - אור וחושך, ייאוש ומאבק',
								'**turning point** - נקודת מפנה - הרגע שבו הכול משתנה'
							]
						}
					]
				}
			]
		}
	}
];
