import { titlesHe } from './titles.he';

/** A /privacy, /terms or /accessibility page: sections of paragraphs, then an optional list. */
type LegalDoc = {
	intro: string;
	sections: { title: string; body?: string[]; items?: string[] }[];
};

export const he = {
	common: {
		back: 'חזרה',
		close: 'סגירה',
		comingSoon: 'בקרוב',
		minutes: 'דקות'
	},
	nav: {
		mainNav: 'ניווט ראשי',
		home: 'בית',
		book: 'תיאום שיעור',
		settings: 'הגדרות',
		vocabImages: 'תמונות מילים',
		kanban: 'לוח משימות',
		finance: 'כספים',
		toSite: 'לדף הראשי'
	},
	appTitle: 'EngUp',
	site: {
		privacy: 'מדיניות פרטיות',
		terms: 'תנאי שימוש',
		accessibility: 'הצהרת נגישות',
		brand: 'EngUp',
		siteNav: 'ניווט באתר',
		navAbout: 'אודות',
		navPlans: 'מסלולים',
		navEnter: 'כניסה',
		navApp: 'לאפליקציה',
		navSignOut: 'יציאה',
		themeToggle: 'מעבר בין מצב בהיר לכהה',
		seePlans: 'למסלולים',
		home: {
			metaTitle: 'EngUp - מורה פרטי לאנגלית משלכם',
			metaDescription:
				'הכנה לבגרות באנגלית ב־4 או 5 יחידות: טכניקה למינימום סטרס ומקסימום ציון, מבחנים בתנאי אמת ופידבק מיידי ואישי.',
			badge: 'גישה מוקדמת',
			badgeUnits: '4 ו־5 יחידות',
			titleLead: 'מגיעים לבגרות אחרי שכבר',
			titleMark: 'עברתם',
			titleTail: 'אותה.',
			intro:
				'לא סתם פותרים: מקבלים טכניקה למינימום סטרס ומקסימום ציון במבחן, כל זאת עם פידבק מיידי ואישי.',
			ctaJoin: 'הצטרפו לרשימת ההמתנה',
			ctaCode: 'יש לי קוד',
			waitlist: {
				label: 'כתובת מייל',
				placeholder: 'name@example.com',
				submit: 'שליחה',
				sending: 'שולחים...',
				doneTitle: 'אתם ברשימה!',
				errors: {
					invalid: 'נראה שהמייל לא תקין. בדקו ונסו שוב.',
					unavailable: 'הרשימה עוד לא פתוחה. נסו שוב בקרוב.',
					busy: 'הרבה נרשמו היום. נסו שוב מחר.',
					network: 'אין חיבור כרגע. נסו שוב.'
				}
			},
			heroAlt: 'תלמידה לומדת אנגלית בטלפון',
			mock: {
				label: 'תצוגה של מסך הבית באפליקציה',
				greeting: 'בוקר טוב!',
				week: 'השבוע: 3 מתוך 4 ימים',
				continueTitle: 'The Lost Village',
				continueSub: 'מודול C · קריאה',
				modules: [
					{ name: 'מודול C', hook: 'מבחן שכדאי לעשות עכשיו', score: '86', bar: 82 },
					{ name: 'מודול E', hook: '12 מילים לחזרה היום', score: '72', bar: 56 },
					{ name: 'בעל פה', hook: 'עוד 3 שיעורים עד המבחן', score: '', bar: 24 }
				],
				untested: 'טרם',
				chipScore: 'שיא חדש במבחן',
				chipWords: 'מילים לחזרה',
				chipWordsCount: '12',
				chipStreak: 'ימים השבוע'
			},
			momentsKicker: 'רגעים קטנים, התקדמות גדולה',
			momentsTitle: 'חמש דקות פה, עשר דקות שם.',
			momentsBody: 'הלמידה מתאימה את עצמה ליום שלכם, לא להפך.',
			moments: [
				{ id: 'break', when: 'בהפסקה', chip: '8 מילים לחזרה', alt: 'תלמידים צוחקים בהפסקה בחוץ' },
				{
					id: 'bus',
					when: 'באוטובוס',
					chip: 'שיעור של 4 דקות',
					alt: 'תלמיד עם אוזניות ברכבת, טלפון ביד'
				},
				{
					id: 'evening',
					when: 'בערב, ליד המחשב',
					chip: 'משוב על החיבור',
					alt: 'תלמידה עם אוזניות כותבת לאור מנורה'
				},
				{
					id: 'exam',
					when: 'שבוע לפני הבגרות',
					chip: 'מבחן מלא · 75 דקות',
					alt: 'תלמידות מתרגלות מבחן בכיתה'
				},
				{
					id: 'oral',
					when: 'לפני הבגרות בעל פה',
					chip: 'הקלטה ומשוב',
					alt: 'תלמידה מדברת בטלפון ומחייכת'
				}
			],
			loopKicker: 'המסלול',
			loopTitle: 'שלוש שנות אנגלית. מיומנות קטנה אחת בכל פעם.',
			steps: [
				{
					title: 'שיעורים קצרים, בקצב שלכם',
					body: 'הסבר קצר ותרגול מיד אחריו, עד שזה יושב. בלי לחכות לכיתה.'
				},
				{
					title: 'מילים שלא נשכחות',
					body: '856 המילים של משרד החינוך חוזרות בדיוק לפני שאתם שוכחים אותן.'
				},
				{
					title: 'מבחנים בתנאי אמת',
					body: 'טיימר, ציון ושאלות במבנה של הבגרות. ביום עצמו אין הפתעות.'
				},
				{
					title: 'משוב, לא רק ציון',
					body: 'כל תשובה, גם פתוחה, מקבלת הסבר מה חסר ואיך לתקן. מיד.'
				}
			],
			vignette: {
				question: 'The plan _____ worked.',
				options: ['eventually', 'weird', 'attach'],
				cardWord: 'to get rid of',
				cardMeaning: 'להיפטר מ־',
				cardDue: 'חוזרת בעוד 3 ימים',
				timerLabel: 'מבחן מודול E',
				timerQuestion: 'שאלה 6 מתוך 9',
				feedbackAnswer: 'They moved to the city.',
				feedbackScore: '5/8',
				feedbackNote: 'כמעט. חסרה הסיבה: הוסיפו because ואת מה שכתוב בשורה 12.'
			},
			pressureKicker: 'הגישה שלנו',
			pressureTitle: 'קשה באימון.\nקל בבגרות.',
			pressureBody:
				'כל שיעור, כל מבחן וכל משוב מכוילים על ידי ד״ר לאנגלית ומורה לבגרות, כך שהאימון תמיד קצת יותר קשה מהדבר האמיתי. הלב דופק מהר לפני מבחן? זה הגוף שמתכונן.',
			methodKicker: 'השיטה',
			methodTitle: 'ככה עוברים את הבגרות.',
			methods: [
				{
					tag: 'קריאה',
					title: 'מילת העוגן',
					body: 'מוצאים בטקסט את המילים מהשאלה. התשובה כמעט תמיד יושבת לידן.'
				},
				{
					tag: 'שאלות פתוחות',
					title: 'מפענחים את ההוראה',
					body: 'ההוראה כבר אומרת כמה לכתוב ואיפה לחפש. לא מפספסים נקודות על ניסוח.'
				},
				{
					tag: 'בעל פה',
					title: 'משפט ההצלה',
					body: 'שכחתם עובדה באמצע ההקלטה? יש משפט מוכן שממשיך הלאה, בלי לקפוא.'
				}
			],
			methodDemo: {
				question: ['Why did the', 'last family', 'leave?'],
				passage: ['In 1998, the', 'last family', 'moved out,', 'because the school closed.'],
				instruction: ['Give', 'TWO', 'reasons.'],
				slots: ['the school closed', 'no jobs'],
				stuck: 'In my project I found that... um...',
				pivot: "I don't remember the exact number, but what matters is..."
			},
			testersKicker: 'כניסה עם קוד',
			testersTitle: 'קיבלתם קוד? אתם בפנים.',
			testersBody: 'אנחנו פותחים את האפליקציה בהדרגה, ומי שקיבל קוד נכנס ראשון.',
			perks: [
				{
					title: 'גישה מלאה בחינם',
					body: 'כל השיעורים, המילים והמבחנים, עד ההשקה.'
				},
				{ title: 'הקול שלכם משנה', body: 'כל הערה שלכם מגיעה אלינו ומשפיעה על מה שנבנה.' },
				{ title: 'ההתקדמות נשמרת', body: 'הכול שמור בחשבון ועובר איתכם בין הטלפון למחשב.' }
			],
			noCode: 'אין לכם קוד? הצטרפו לרשימת ההמתנה',
			finalTitle: 'הבגרות שלכם מתחילה כאן.',
			finalBody: 'שיעור אחד, כמה מילים, ואתם כבר יודעים יותר מאתמול.'
		}
	},
	about: {
		title: 'אודות',
		metaDescription:
			'EngUp נבנתה מתוך 20 שנות הכנה לבגרות באנגלית: אסטרטגיות קריאה, תרגול ממוקד ומבחנים בתנאי אמת ל־4 ו־5 יחידות.',
		lead: '20 שנות הוראת אנגלית. עכשיו גם באפליקציה.',
		intro:
			'EngUp נולדה בכיתה, מתוך שנים של הכנת תלמידים לבגרות ב־4 ו־5 יחידות. אנחנו מכירים את דרישות הבחינה, אבל חשוב מכך, אנחנו מכירים אתכם: את הקשיים, את הטעויות שחוזרות, ואת מה שבאמת עוזר להבין, להשתפר ולהצליח.',
		motto: 'We Learn What We Teach.',
		mottoGloss: 'מלמדים, וממשיכים ללמוד.',
		sections: [
			{
				title: 'לא צריך להבין כל מילה כדי להצליח',
				body: [
					'הצלחה בבגרות לא תלויה רק באוצר מילים. היא דורשת גם אסטרטגיות קריאה, הבנת הוראות, איתור מידע וניהול זמן.',
					'לכן לא נסתפק בתשובה הנכונה. נלמד אתכם איך להגיע אליה: איך לגשת לשאלה, ומה עושים מול מילה לא מוכרת או טקסט מאתגר.'
				]
			},
			{
				title: 'ללמוד נכון. לתרגל נכון. להגיע מוכנים.',
				body: [
					'מקום אחד שבו מתכוננים לבגרות באנגלית, בקצב שלכם ובלי מורה פרטי. כל שלב נבנה מתוך היכרות עם דרישות הבחינה ועם הקשיים שפוגשים בדרך.'
				],
				features: [
					'הסברים קצרים',
					'תרגול ממוקד',
					'אוצר מילים',
					'משימות כתיבה',
					'מבחנים בתנאי בגרות'
				]
			},
			{
				title: 'להתאמן גם על תנאי הבחינה',
				body: [
					'הזמן בבגרות מוגבל, ולחץ הוא לא אויב: זה הגוף שמתכונן. אצלנו מתאמנים עליו עם טיימר, ציון ומשוב, עד שתנאי המבחן מרגישים מוכרים.',
					'בדרך תראו איפה אתם עומדים ועל מה כדאי לעבוד, ותגיעו לבחינה עם ביטחון.'
				]
			},
			{
				title: 'ממשיכים ללמוד ולהשתפר',
				body: [
					'EngUp נפתחת בהדרגה, ואנחנו משפרים את התכנים כל הזמן לפי מה שאתם צריכים ומה שאתם מספרים לנו. כי הוראה טובה מחייבת למידה מתמדת והקשבה לתלמידים.'
				]
			}
		],
		finalTitle: 'מוכנים להתחיל?'
	},
	plans: {
		title: 'מסלולים',
		headline: 'הכנה לבגרות עם מורה, בפחות משליש ממחיר של מורה פרטי',
		subtitle:
			'תרגול יומי באפליקציה, מבחנים בתנאי אמת ומורה אמיתי בזום. משלמים פעם אחת, בלי חיוב מתחדש.',
		launchTitle: 'מחיר השקה עד 31.12',
		launchBody: (price: number) =>
			`מצטרפים למסלול הקבוצתי ב-${price} ₪ לחודש, והמחיר נשאר נעול עד סוף שנת הלימודים.`,
		launchCountdown: (days: number) =>
			days === 1 ? 'היום אחרון למחיר ההשקה' : `נשארו ${days} ימים למחיר ההשקה`,
		launchLine: (price: number) => `מחיר השקה עד 31.12. אחרי ההשקה: ${price} ₪`,
		anchorTitle: 'כמה עולה להתכונן לבגרות?',
		anchorTutor: 'מורה פרטי, שיעור בשבוע',
		anchorUs: 'מסלול קבוצתי, שיעור בשבוע ואפליקציה',
		perMonth: 'לחודש',
		currency: '₪',
		cycleLabel: 'תקופת תשלום',
		cycles: {
			month: 'חודשי',
			pack3: '3 חודשים',
			pack6: '6 חודשים',
			pass: 'שנת לימודים'
		} as Record<string, string>,
		passTotal: (months: number, total: string) => `עד 30.6, ${months} חודשים, ${total} ₪ בסך הכול`,
		installments: (months: number, price: number) => `אפשר ב-${months} תשלומים של ${price} ₪`,
		paidMonthly: 'משלמים חודש בחודש, בלי התחייבות',
		packTotal: (months: number, total: string) => `תשלום אחד של ${total} ₪ ל-${months} חודשים`,
		popular: 'הכי פופולרי',
		choose: 'בחירה',
		chooseFeatured: 'מתחילים עכשיו',
		addCobe: 'הוספת COBE',
		addCobeHint: 'תרגול לבחינה בעל פה עם שיחת AI',
		addCobePrice: (price: string) => `+₪${price}`,
		cobeIncluded: 'כולל COBE',
		extension: 'צריכים עוד זמן? מאריכים בכל רגע בעוד חודש.',
		guarantee: 'לא מתאים לכם? מבטלים תוך 14 יום ומקבלים את כל הכסף בחזרה.',
		compareTitle: 'השוואה מלאה',
		compareFeature: 'מה מקבלים',
		compareRows: [
			{ label: 'כל היחידות והמודולים', values: [true, true] },
			{ label: 'מבחני בגרות בתנאי אמת', values: [true, true] },
			{ label: 'משוב מיידי על כתיבה', values: [true, true] },
			{ label: 'אוצר מילים עם חזרות חכמות', values: [true, true] },
			{ label: 'שיעור זום קבוצתי עם מורה', values: [false, 'כל שבוע'] }
		] as { label: string; values: (boolean | string)[] }[],
		lessonTitle: 'רוצים רק שיעור פרטי?',
		lessonBody:
			'שיעור זום פרטי של שעה עם מורה, ממוקד במה שקשה לכם. בחודש של השיעור מקבלים גם את האפליקציה במתנה.',
		perLesson: 'לשיעור',
		lessonChoose: 'קביעת שיעור',
		cobeOnlyTitle: 'צריכים רק את הבחינה בעל פה?',
		cobeOnlyBody:
			'COBE הוא שיחה חיה באנגלית עם בינה מלאכותית, עם משוב אחרי כל תשובה. אפשר להוסיף אותו לכל מסלול, או לקנות רק אותו.',
		cobeOnlyChoose: 'רק COBE',
		faqTitle: 'שאלות נפוצות',
		/** `needs`: shown only on the launch version, or once that promise is on (plans.ts GUARANTEE / INSTALLMENTS). */
		faq: [
			{
				q: 'יש חיוב מתחדש?',
				a: 'לא. משלמים פעם אחת על התקופה שבחרתם. כשהיא נגמרת, מחליטים אם להמשיך.'
			},
			{
				q: 'מה זה שנת לימודים?',
				a: 'גישה עד 30 ביוני. משלמים רק על החודשים שנשארו, אז מצטרפים בכל שלב בשנה.'
			},
			{
				q: 'מה ההבדל בין 3 או 6 חודשים לשנת לימודים?',
				a: '3 או 6 חודשים מתחילים ביום הרכישה. שנת לימודים נגמרת ב-30.6.'
			},
			{
				q: 'מה זה מחיר השקה?',
				a: 'מי שמצטרף עד 31.12 משלם פחות על השיעורים הקבוצתיים, והמחיר נשאר לכל התקופה שבחר.',
				needs: 'launch'
			},
			{
				q: 'כמה זה יוצא לעומת מורה פרטי?',
				a: 'שיעור פרטי בשבוע עולה בערך 600 ₪ בחודש. במסלול הקבוצתי מקבלים 4 שיעורים עם מורה ותרגול יומי באפליקציה, בפחות משליש מהמחיר.'
			},
			{
				q: 'אפשר לשלם בתשלומים?',
				a: 'כן. בשנת לימודים אפשר לפרוס לתשלומים, כמספר החודשים שנשארו.',
				needs: 'installments'
			},
			{
				q: 'ומה אם זה לא מתאים לנו?',
				a: 'מבטלים תוך 14 יום מהרכישה ומקבלים את כל הכסף בחזרה.',
				needs: 'guarantee'
			},
			{
				q: 'איך עובדים השיעורים בזום?',
				a: 'שיעור שבועי עם מורה בקבוצה קטנה. שואלים, מתרגלים ומתכוננים יחד למבחן.'
			},
			{
				q: 'למה COBE בנפרד?',
				a: 'COBE מבוסס על שיחה חיה עם בינה מלאכותית, וזה שימוש כבד יותר. מי שצריך אותו מוסיף אותו.'
			},
			{
				q: 'מה מתאים לי, 4 או 5 יחידות?',
				a: 'כל המסלולים כוללים את שתי הרמות. בוחרים רמה באפליקציה ואפשר להחליף בכל רגע.'
			},
			{
				q: 'צריכים עוד זמן אחרי יוני?',
				a: 'מאריכים בעוד חודש בכל רגע, והזמן מתווסף לזמן שנשאר לכם.'
			}
		] as { q: string; a: string; needs?: 'launch' | 'guarantee' | 'installments' }[],
		offers: {
			premium: {
				name: 'עצמאי',
				tagline: 'למי שמתאמן לבד, בקצב שלו',
				features: [
					'כל היחידות והמודולים, 4 ו-5 יחידות',
					'מבחני בגרות בתנאי אמת',
					'משוב מיידי על כתיבה',
					'אוצר מילים עם חזרות חכמות'
				]
			},
			group: {
				name: 'קבוצתי',
				tagline: 'למי שרוצה מורה שמלווה אותו כל שבוע',
				features: [
					'כל מה שבמסלול העצמאי',
					'שיעור זום שבועי עם מורה',
					'קבוצה קטנה, שואלים כל מה שלא ברור',
					'4 שיעורים בחודש, בפחות משליש ממחיר של מורה פרטי'
				]
			},
			personal: {
				name: 'אישי',
				tagline: 'למי שצריך קפיצה גדולה בציון',
				features: [
					'כל מה שבמסלול הקבוצתי',
					'2 שיעורים פרטיים בזום בחודש',
					'תוכנית אישית מול הנקודות החלשות',
					'תיאום שיעורים ישר מהאפליקציה'
				]
			},
			cobe: { name: 'COBE', tagline: '', features: [] },
			lesson: { name: 'שיעור פרטי בזום', tagline: '', features: [] }
		} as Record<string, { name: string; tagline: string; features: string[] }>,
		withCobe: ' + COBE',
		debug: {
			title: 'תצוגות (דיבאג)',
			date: 'תאריך מדומה',
			presets: [
				{ label: 'היום', date: '' },
				{ label: 'פברואר', date: '2027-02-10' },
				{ label: 'מאי, בלי שנת לימודים', date: '2027-05-10' },
				{ label: 'קיץ, השנה הבאה', date: '2027-07-10' }
			],
			guarantee: 'הבטחת החזר',
			installments: 'תשלומים',
			version: 'גרסה',
			pricings: { regular: 'רגילה', launch: 'השקה' } as Record<string, string>,
			diffTitle: 'רגיל / השקה, ₪ לחודש',
			note: 'רק התצוגה משתנה. המחיר בתשלום נקבע בשרת לפי התאריך האמיתי.'
		}
	},
	checkout: {
		title: 'הצטרפות',
		yourPlan: 'המסלול שלכם',
		change: 'שינוי',
		account: 'החשבון',
		signedInAs: 'מחוברים בתור',
		notYou: 'לא אתם?',
		couponLabel: 'קוד הטבה',
		apply: 'החלה',
		price: 'מחיר',
		discount: 'הנחה',
		total: 'לתשלום',
		activate: 'הפעלת הגישה',
		pay: 'מעבר לתשלום',
		checking: 'בודקים...',
		bumpTitle: 'להוסיף את COBE?',
		bumpBody: (price: string) => `תרגול לבחינה בעל פה עם שיחת AI, רק ${price} ₪ לחודש.`,
		passLine: (months: number) => `גישה עד 30.6 (${months} חודשים)`,
		packLine: (months: number) => `גישה ל-${months} חודשים מיום הרכישה`,
		installments: (months: number) => `עד ${months} תשלומים ללא ריבית`,
		guarantee: 'לא מתאים? החזר מלא תוך 3 ימים.',
		lessonDone: 'נחזור אליכם במייל לתיאום מועד השיעור.',
		doneTitle: 'הגישה פעילה!',
		doneBody: 'אפשר להתחיל ללמוד.',
		until: 'בתוקף עד',
		toApp: 'כניסה לאפליקציה',
		alreadyActive: 'כבר יש לכם גישה פעילה. רכישה נוספת תאריך אותה.',
		signInFirst: 'כדי להמשיך, היכנסו או צרו חשבון. אחרי אישור המייל תחזרו לכאן.',
		errors: {
			unavailable: 'ההרשמה עדיין לא פתוחה. נסו שוב בקרוב.',
			unknown: 'הקוד לא נמצא. בדקו שהוקלד נכון.',
			expired: 'תוקף הקוד הסתיים.',
			'used-up': 'הקוד כבר נוצל עד הסוף.',
			'wrong-plan': 'הקוד לא מתאים למסלול הזה.',
			'already-used': 'כבר השתמשתם בקוד הזה.',
			'unknown-plan': 'המסלול לא זמין כרגע.',
			'payments-unavailable': 'התשלום באתר עוד לא פתוח. אם קיבלתם קוד, הזינו אותו למעלה.',
			network: 'אין חיבור לשרת. נסו שוב בעוד רגע.'
		} as Record<string, string>
	},
	paywall: {
		title: 'עוד צעד אחד',
		body: 'כדי להתחיל לתרגל צריך מסלול פעיל. קיבלתם קוד? הזינו אותו כאן.',
		redeem: 'הפעלה',
		plans: 'לצפייה במסלולים',
		locks: {
			cobe: {
				title: 'COBE לא כלול במסלול שלכם',
				body: 'הוסיפו את COBE כדי לתרגל לבחינה בעל פה עם שיחת AI. קיבלתם קוד? הזינו אותו כאן.'
			},
			app: {
				title: 'החלק הזה לא כלול במסלול שלכם',
				body: 'המסלול שלכם כולל את COBE. כדי לתרגל את שאר החומר, בחרו מסלול. קיבלתם קוד? הזינו אותו כאן.'
			}
		},
		signOut: 'יציאה מהחשבון'
	},
	login: {
		title: 'התחברות',
		subtitle: 'היכנסו כדי להמשיך לתרגל',
		emailLabel: 'כתובת מייל',
		passwordLabel: 'סיסמה',
		passwordHint: 'לפחות 8 תווים',
		busy: 'רגע...',
		signIn: 'כניסה',
		forgot: 'שכחתי סיסמה',
		toSignUp: 'אין לכם חשבון? יצירת חשבון',
		signUpTitle: 'יצירת חשבון',
		signUpSubtitle: 'נשלח לכם מייל לאישור הכתובת.',
		consentLead: 'קראתם ומאשרים את ',
		consentTerms: 'תנאי השימוש',
		consentAnd: ' ואת ',
		consentPrivacy: 'מדיניות הפרטיות',
		consentAge: '. אתם בני 18 ומעלה, או שהורה או אפוטרופוס מסכים.',
		signUp: 'יצירת חשבון',
		toSignIn: 'יש לכם חשבון? כניסה',
		forgotTitle: 'איפוס סיסמה',
		forgotSubtitle: 'נשלח לכם קישור לבחירת סיסמה חדשה.',
		sendLink: 'שליחת קישור',
		recoveryTitle: 'סיסמה חדשה',
		recoverySubtitle: 'בחרו סיסמה חדשה כדי להמשיך.',
		newPasswordLabel: 'סיסמה חדשה',
		savePassword: 'שמירה והמשך',
		checkEmailTitle: 'בדקו את המייל',
		confirmSent: 'שלחנו קישור אישור אל',
		confirmThenSignIn: 'אחרי האישור חוזרים לכאן ונכנסים עם הסיסמה.',
		resetSent: 'אם יש חשבון עם הכתובת הזאת, שלחנו אליה קישור לבחירת סיסמה חדשה.',
		resendConfirm: 'שליחה מחדש של מייל האישור',
		backToSignIn: 'חזרה לכניסה',
		backToSite: 'חזרה לאתר',
		otpOption: 'כניסה עם קוד בהודעה',
		otpSoon: 'בקרוב',
		otpTitle: 'כניסה עם קוד',
		otpSubtitle: 'נשלח לכם קוד חד-פעמי בהודעה.',
		phoneLabel: 'מספר טלפון',
		sendOtp: 'שליחת קוד',
		otpLabel: 'הקוד מההודעה',
		verifyOtp: 'כניסה',
		errors: {
			badCredentials: 'המייל או הסיסמה לא נכונים.',
			notConfirmed: 'המייל עוד לא אושר. אשרו אותו דרך הקישור שנשלח אליכם.',
			weakPassword: 'הסיסמה חלשה מדי. נסו לפחות 8 תווים.',
			rateLimit: 'נשלחו הרבה בקשות. נסו שוב בעוד כמה דקות.',
			alreadyRegistered: 'כבר יש חשבון עם המייל הזה. התחברו, או אפסו את הסיסמה אם שכחתם אותה.',
			invalidEmail: 'כתובת המייל לא תקינה. בדקו שאין בה טעות.',
			offline: 'אין חיבור לאינטרנט. בדקו את החיבור ונסו שוב.',
			banned: 'החשבון הזה חסום. כתבו לנו דרך התמיכה.',
			samePassword: 'זו הסיסמה הקיימת. בחרו סיסמה חדשה.',
			linkExpired: 'הקישור פג תוקף או שכבר השתמשו בו. התחברו, או בקשו קישור חדש.',
			signupClosed: 'ההרשמה סגורה כרגע.',
			captcha: 'לא הצלחנו לוודא שאתם לא רובוט. נסו שוב.',
			generic: 'משהו השתבש. נסו שוב בעוד רגע.'
		},
		resent: 'שלחנו שוב. בדקו גם בתיקיית הספאם.'
	},
	home: {
		greeting: (part: 'morning' | 'noon' | 'evening' | 'night') =>
			`${{ morning: 'בוקר טוב', noon: 'צהריים טובים', evening: 'ערב טוב', night: 'לילה טוב' }[part]}!`,
		daysToExam: (n: number) => `${n} ימים לבגרות`,
		daysShort: (n: number) => `${n} ימים`,
		weekly: (days: number, goal: number) => `${days} מתוך ${goal} ימי תרגול השבוע`,
		skills: {
			vocab: 'אוצר מילים',
			reading: 'הבנת הנקרא',
			writing: 'כתיבה',
			speaking: 'דיבור',
			literature: 'ספרות'
		},
		hookResume: 'יש לכם מבחן שלא סיימתם',
		hookReady: 'מוכנים למבחן!',
		hookWords: (n: number) => `${n} מילים לחזרה היום`,
		meterLessons: 'שיעורים',
		hookToExam: (n: number) =>
			n === 1 ? 'עוד שיעור אחד עד שמוכנים למבחן' : `עוד ${n} שיעורים עד שמוכנים למבחן`,
		hookLessonsLeft: (n: number) => (n === 1 ? 'עוד שיעור אחד' : `עוד ${n} שיעורים`),
		hookOpen: 'פותחים את המודול',
		tileExam: 'שיא במבחן',
		tileUntested: 'טרם',
		examSoon: 'בקרוב',
		todayStart: 'מתחילים',
		lessonNext: 'השיעור הבא',
		examMidway: 'יש לכם מבחן שלא סיימתם',
		continueCta: 'המשיכו',
		lessonMidway: 'באמצע השיעור',
		desktopNote: 'שיעור כתיבה - הכי נוח מהמחשב',
		examReason: {
			resume: 'יש לכם מבחן שלא סיימתם. אי אפשר להמשיך אותו, אז מתחילים מחדש.',
			ready: 'סיימתם את רוב המסלול. זמן לבדוק את עצמכם במבחן בתנאי בגרות.',
			'path-done': 'סיימתם את המסלול. עכשיו מתאמנים על הדבר האמיתי.'
		},
		examsTitle: 'מבחני תרגול',
		examsSoonDesc: 'מבחני המודול יתווספו בקרוב',
		examsOpen: (total: number) => `${total} מבחנים זמינים`,
		examsSummary: (taken: number, total: number, best: number) =>
			`${taken} מתוך ${total} · שיא ${best}`,
		examsFirst: 'למבחן הראשון',
		examsNext: 'למבחן הבא',
		wordsDone: 'סיימתם להיום',
		toPath: 'למסלול המלא'
	},
	streak: {
		title: 'הרצף שלי',
		thisWeek: (days: number, goal: number) => `${days} מתוך ${goal} ימי תרגול השבוע`,
		goalMet: 'עמדתם ביעד השבועי!',
		toGoal: (n: number) => (n === 1 ? 'עוד יום אחד ליעד השבועי' : `עוד ${n} ימים ליעד השבועי`),
		weekDays: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
		dayStreak: 'ימים ברצף',
		weekStreak: 'שבועות ביעד',
		totalDays: 'ימי תרגול',
		history: '12 השבועות האחרונים',
		rule: 'יום תרגול = סיימתם סבב בשיעור או הגשתם מבחן.'
	},
	streakModal: {
		started: 'התחלתם רצף!',
		continued: 'הרצף ממשיך!',
		days: (n: number) => (n === 1 ? 'יום ברצף' : 'ימים ברצף'),
		startedSub: 'תרגלו גם מחר והרצף יגדל.',
		continuedSub: 'עוד יום של תרגול - ככה מתקדמים.',
		cta: 'המשיכו'
	},
	onboarding: {
		step: (current: number, total: number) => `שלב ${current} מתוך ${total}`,
		nameTitle: 'איך קוראים לכם?',
		nameDesc: 'אפשר לדלג ולהוסיף אחר כך בהגדרות.',
		nameOptional: 'לא חובה',
		skip: 'דילוג',
		namePlaceholder: 'השם הפרטי',
		goalTitle: 'מה המטרה שלכם?',
		goalDesc: 'נבנה לכם מסלול לפי רמת היחידות.',
		units4: '4 יחידות',
		units5: '5 יחידות',
		undecided: 'עוד לא החלטתי',
		examTitle: 'מתי הבגרות?',
		examDesc: 'נספור יחד את הימים עד הבחינה.',
		examUnknown: 'עוד לא ידוע',
		seasonWinter: 'חורף',
		seasonSummer: 'קיץ',
		next: 'המשך',
		finish: 'יאללה, מתחילים'
	},
	quiz: {
		startButton: 'התחלת מבחן',
		exitLabel: 'יציאה מהמבחן',
		nextButton: 'הבא',
		submitButton: 'הגש מבחן',
		partProgress: (current: number, total: number) => `חלק ${current} מתוך ${total}`,
		questionProgress: (current: number, total: number) => `שאלה ${current} מתוך ${total}`,
		exitPromptTitle: 'לצאת מהמבחן?',
		exitPromptDesc: 'אם תצאו עכשיו, כל מה שעשיתם במבחן יימחק ולא יישמר.',
		exitConfirm: 'יציאה מהמבחן',
		exitCancel: 'המשך במבחן',
		passedTitle: 'עברתם בהצלחה!',
		failedTitle: 'לא עברתם הפעם',
		autoScoreLabel: 'ציון אוטומטי',
		byPartTitle: 'פירוט לפי חלק',
		manualTitle: 'ממתין לבדיקה',
		manualDesc: 'המשימות האלה נבדקות ע"י מורה ולא נכללות בציון האוטומטי.',
		manualItem: (points: number) => `${points} נק'`,
		backToQuizzes: 'חזרה למבחנים',
		totalScoreLabel: 'ציון',
		grading: 'בודקים את התשובות הפתוחות...',
		openAnswersTitle: 'תשובות פתוחות',
		closedAnswersTitle: 'שאלות סגורות',
		gradedInReport: 'הציון על התשובה הזו יופיע בדוח בסוף.',
		retryButton: 'נסו שוב',
		modelAnswerLabel: 'תשובה לדוגמה',
		unanswered: 'לא נבחרה תשובה.',
		notGraded: 'לא נבדקה - הבדיקה לא זמינה כרגע. בינתיים נספרת כ-0.',
		retryGrading: 'בדיקה חוזרת',
		essayLabel: 'משימת כתיבה',
		criterion: {
			content: 'תוכן וארגון',
			vocabulary: 'אוצר מילים',
			language: 'שימוש בשפה',
			mechanics: 'כתיב ופיסוק'
		} as Record<string, string>,
		lengthDeduction: (points: number, words: number) =>
			`הורדה על אורך (${words} מילים): ${points}- נק'`,
		gateZero: {
			empty: 'לא נכתבה תשובה.',
			'not-english': 'התשובה לא באנגלית.',
			'too-short': 'פחות מהמינימום של המילים - המשימה כולה מקבלת 0.'
		} as Record<string, string>,
		lastAttemptLabel: 'ניסיון אחרון',
		timeLeftLabel: 'זמן שנותר',
		viewSolutionButton: 'צפייה בפתרונות',
		viewSolutionLocked: 'פתרו את המבחן פעם אחת כדי לפתוח',
		solutionTitle: 'פתרון',
		correctAnswerLabel: 'תשובה נכונה',
		showPassage: 'הצגת הקטע',
		hidePassage: 'הסתרת הקטע',
		passageLabel: 'קטע קריאה',
		questionLabel: (label: string | number) => `שאלה ${label}`,
		pointsShort: (points: number) => `${points} נק'`
	},
	quizzes: {
		assortedTitle: 'מגוון מבחנים',
		takenLabel: 'מבחנים שנעשו',
		avgMinutesLabel: 'דקות בממוצע',
		avgGradeLabel: 'ציון ממוצע',
		rulesTitle: 'מבנה המבחן',
		readingTextsRule: (n: number) => (n === 1 ? 'טקסט קריאה אחד' : `${n} טקסטי קריאה`),
		questionsRule: (n: number) => `${n} שאלות`,
		timeRule: (minutes: number) => `${minutes} דקות`,
		writingRule: (min: number, max: number) => `משימת כתיבה: ${min} עד ${max} מילים`,
		scoreboardTitle: 'התוצאות שלכם',
		bestScoreLabel: 'השיא שלכם',
		lastScoreLabel: 'ניסיון אחרון',
		triesLabel: 'ניסיונות',
		statusNew: 'עוד לא ניסיתם',
		statusInProgress: 'באמצע',
		statusBest: (best: number) => `שיא: ${best}`,
		prepTitle: 'לפני שמתחילים',
		prepDesc:
			'מבחן בתנאי בגרות: שעון רץ, ואין משוב עד ההגשה. קצת לחץ זה בדיוק האימון - כל מבחן כאן הופך את הבגרות למשהו שכבר עשיתם.',
		prepAgainTitle: 'עוד סיבוב',
		prepAgainDesc: 'אותו מבחן, אתם כבר יותר מוכנים. נסו לשבור את השיא.',
		tipsTitle: 'איך ניגשים',
		tips: [
			'קראו את השאלות לפני הקטע - ככה יודעים מה לחפש.',
			'נתקעתם? דלגו וחזרו בסוף. אפשר לעבור בין החלקים.',
			'הציון כאן לא נחשב לשום דבר - רק מראה לכם על מה לעבוד.'
		],
		// Module C: what its lessons teach (reading method, then the writing paragraph).
		tipsC: [
			'קראו את הכותרת ואחריה את הפסקה הראשונה, כדי להבין על מה הטקסט.',
			'סמנו את מה שבולט לעין: מספרים, שמות, מילות שלילה, הגבלה וניגוד.',
			'דרגו כל שאלה לפי שיטת הרמזור, ואז סמנו את מילת המפתח וחפשו אותה בקטע. התשובה יושבת ליד המילה הזאת.',
			'נתקעתם? דלגו וחזרו בסוף. אפשר לעבור בין השאלות.',
			'NOT או EXCEPT? מחפשים את התשובה שאינה נכונה. THE MOST או ONLY? בוחרים את המתאימה ביותר.',
			'ארבע אפשרויות: קראו את כולן, מחקו את הברור, והוכיחו את הנבחרת מהקטע.',
			'השאירו לפחות 20 דקות לכתיבה: עמדה, סיבה, דוגמה וסיכום, שבעים עד תשעים מילים. פחות משבעים מורידים נקודות, יותר מתשעים לא.'
		],
		resumeButton: 'התחלה',
		retakeButton: 'ניסיון נוסף',
		practiceButton: 'תרגול עם משוב',
		practiceHint: 'בתרגול רואים משוב אחרי כל שאלה ואפשר לנסות שוב. בלי שעון, והציון לא נשמר.'
	},
	unit: {
		modulePrefix: 'מודול'
	},
	module: {
		examTitle: 'מבחנים'
	},
	deck: {
		title: 'אוצר מילים',
		intro: 'כל יום קצת: מילים חדשות, ומילים שכדאי לחזור עליהן לפני שהן נשכחות.',
		statDue: 'לחזרה היום',
		statLearning: 'בלמידה',
		statKnown: 'ידועות',
		wordsWon: (n: number) => (n === 1 ? 'שלטתם במילה אחת' : `שלטתם ב-${n} מילים`),
		wordsWonShort: (n: number) => `שלטתם ב-${n}`,
		wordsWonNone: 'מתחילים!',
		start: 'מתחילים תרגול',
		newOnly: (n: number) => `${n} מילים חדשות`,
		sessionSize: (reviews: number, fresh: number) =>
			[reviews ? `${reviews} לחזרה` : '', fresh ? `${fresh} חדשות` : '']
				.filter(Boolean)
				.join(' · '),
		allDoneTitle: 'סיימתם להיום!',
		extra: 'תרגול נוסף',
		sessionLabel: 'תרגול מילים',
		listsTitle: 'הרשימות',
		listsNote:
			'ארבע הרשימות הרשמיות יחד הן אוצר המילים של הבגרות, וכולן נבחנות. כל רשימה מתקדמת בקצב שלה.',
		listTitle: (letter: string) => `רשימה ${letter}`,
		promptMeaning: 'מה הפירוש?',
		promptContext: 'השלימו את המשפט:',
		promptDefinition: 'איזו מילה מתאימה להגדרה?',
		gatewayDue: (n: number) => (n ? `${n} לחזרה` : 'פתוח לתרגול'),
		howTitle: 'איך זה עובד?',
		how: [
			'מילה חדשה: כרטיס, שאלה קצרה והעתקה, כמו בשיעורי המילים במודול C.',
			'עניתם נכון? המילה תחזור בעוד כמה ימים, וכל פעם בעוד יותר.',
			'טעיתם? היא חוזרת מחר.',
			'מילה שכבר כמעט ידועה חוזרת בפורמט של הבגרות: 6 מילים, 3 הגדרות.'
		]
	},
	lessons: {
		titlePrefix: 'שיעורים — מודול',
		emptyTitle: (letter: string) => `השיעורים של מודול ${letter} יתווספו בקרוב`,
		startHere: 'התחילו כאן'
	},
	lesson: {
		lessonLocked: 'השיעור הזה ייפתח בקרוב',
		progressLabel: 'התקדמות בשיעור',
		/** The node label's start button: always names the round about to be played. */
		start: 'מתחילים',
		startRound: (round: number) => `מתחילים סבב ${round}`,
		roundLabel: (current: number, total: number) => `סבב ${current} מתוך ${total}`,
		/** Shown on a not-yet-fully-passed node whose requiredRounds > 1, so it's
		 *  clear before starting that one pass isn't enough to open what's next. */
		roundsRequiredHint: (n: number) => `צריך לעבור ${n} סבבים כדי לפתוח את השלב הבא`,
		exitLabel: 'יציאה מהשיעור',
		prefaceButton: 'הסבר',
		prefaceTitle: 'תזכורת: הסבר השיעור',
		prefaceHint: 'זו רק הצצה - ההתקדמות שלכם נשמרת והתרגיל ממשיך מאותו מקום.',
		prefaceBack: 'חזרה לתרגיל',
		prefacePrev: 'הקודם',
		prefaceNext: 'הבא',
		continueButton: 'המשך',
		doneButton: 'סיום',
		completeTitle: 'כל הכבוד!',
		completeDesc: 'סיימתם את השיעור הזה.',
		toGold: (n: number) => (n === 1 ? 'עוד סבב אחד והשיעור הופך לזהב' : `עוד ${n} סבבים לזהב`),
		goldDone: 'שיעור זהב!',
		backToPath: 'חזרה למסלול',
		scoreLabel: 'תשובות נכונות',
		questionProgress: (current: number, total: number) => `שאלה ${current} מתוך ${total}`,
		nextQuestionButton: 'הבא',
		feedbackRight: ['נכון!', 'מעולה!', 'בדיוק!', 'יפה מאוד!'],
		feedbackWrong: 'כמעט',
		feedbackRetryLater: 'נחזור לשאלה הזאת בסוף הסבב.',
		feedbackLook: 'שווה להציץ בתשובה הנכונה לפני שממשיכים.',
		continueNextLesson: 'המשך לשיעור הבא',
		continueNextRound: 'המשך לסבב הבא',
		retryButton: 'עוד ניסיון',
		failTitle: 'כמעט!',
		failDesc: (percent: number) =>
			`כדי להמשיך צריך לפחות ${percent}% תשובות נכונות. אפשר לנסות שוב.`
	},
	// Shown as a small badge before each exercise screen, so the student
	// knows what they're about to do before it starts.
	exerciseKind: {
		listenHint: 'הקשיבו. הטקסט יופיע אחרי הבדיקה',
		mcq: 'תרגיל: שאלה אמריקאית',
		pickN: (n: number) => `סמנו ${n} תשובות נכונות`,
		markAll: 'תרגיל: סימון בטקסט',
		clozePick: 'תרגיל: השלימו את המשפט',
		order: 'תרגיל: סדרו לפי הסדר',
		wordBankLabel: 'מילים לחיפוש',
		timedReading: 'תרגיל מתוזמן: קריאה',
		writingTask: 'משימת כתיבה',
		spellWordCopy: 'תרגיל: איות',
		spellWordListen: 'תרגיל: הכתבה',
		selfCheck: 'תרגיל: תשובה חופשית',
		speak: 'תרגיל: דיבור',
		video: 'צפייה בקליפ',
		passageQuiz: 'תרגיל: תשובה קצרה',
		sentenceCompletion: 'תרגיל: השלמת משפט',
		matchPairs: 'תרגיל: התאימו זוגות',
		matchDefinitions: 'תרגיל: התאימו מילה להגדרה',
		matchDefinitionsHint: 'בחרו הגדרה, ואז את המילה שמתאימה לה',
		answerKeyLabel: 'מפתח התשובה',
		hintButton: 'לא מבינים את השאלה? עזרה',
		tryAgain: (left: number) =>
			left === 1
				? 'לא בדיוק. נסו שוב - נשאר ניסיון אחד'
				: `לא בדיוק. נסו שוב - נשארו ${left} ניסיונות`,
		answerLabel: 'התשובה:',
		noColor: 'ללא צבע',
		submitButton: 'בדיקה',
		passedFeedback: 'יפה מאוד!',
		notPassedFeedback: 'כמעט — הצבע מראה מה פספסתם'
	},
	poem: {
		tapHint: 'לחצו על שורה כדי לראות אותה בעברית'
	},
	answerLang: {
		en: 'עונים באנגלית',
		he: 'עונים בעברית',
		speak: 'מדברים באנגלית',
		placeholderEn: 'כתבו כאן באנגלית...',
		placeholderHe: 'כתבו כאן בעברית...'
	},
	selfCheck: {
		placeholder: 'כתבו כאן...',
		revealButton: 'הצגת התשובה',
		modelAnswerLabel: 'תשובה לדוגמה',
		compareNote: 'אין ציון על המסך הזה — השוו את מה שכתבתם לתשובה שלמעלה.',
		wordCount: (n: number) => `${n} מילים`,
		wordTarget: (min: number, max: number) => `היעד: ${min}-${max} מילים`
	},
	phraseBank: {
		chip: 'ביטויים',
		title: 'בנק ביטויים',
		description:
			'משפטים מוכנים שעוזרים לדבר ברצף ומעשירים את אוצר המילים. הקשיבו, אמרו בקול, וסמנו בכוכב את אלה שתרצו לזכור.',
		mine: 'הביטויים שלי',
		fits: 'מתאים לשאלה הזאת',
		save: '+ לבנק',
		remove: 'הסרה מהבנק',
		added: '✓ בבנק'
	},
	chat: {
		title: 'שיחה עם AI',
		rowSub: 'שיחות קצרות באנגלית, לביטחון ושטף',
		rowCount: (n: number) => (n === 1 ? 'שיחה אחת עד עכשיו' : `${n} שיחות עד עכשיו`),
		intro: 'שיחות קצרות באנגלית. לא צריך להיות מושלמים - רק לדבר. כל משפט בקול מחזק את הביטחון.',
		tabBanter: 'שיחה חופשית',
		tabCobe: 'COBE קצר',
		surprise: 'הפתעה',
		surpriseSub: 'נושא אקראי',
		partA: 'חלק א׳ - שאלה אישית',
		partADesc: 'בוחרים אחד משני נושאים, עונים על 2 שאלות ושאלת המשך',
		partB: 'חלק ב׳ - הפרויקט',
		partBDesc: 'מספרים על הפרויקט שלכם: 2 שאלות ושאלת המשך',
		turn: (n: number, max: number) => `תור ${n} מתוך ${max}`,
		aiSpeaking: 'מקשיבים...',
		yourTurn: 'תורכם לדבר',
		recording: 'מדברים... לחצו לסיום',
		thinking: 'חושבים...',
		keepGoing: 'מעולה! עברתם 20 שניות, אפשר להמשיך',
		tooShort: 'קצר מדי - נסו לענות במשפט או שניים',
		replay: 'שמיעה שוב',
		showTranscript: 'תמליל השיחה',
		failed: 'לא הצלחנו לשמוע את התשובה.',
		retry: 'שליחה שוב',
		recordAgain: 'הקלטה חדשה',
		limit: 'נגמרה מכסת ה-AI להיום. נתראה מחר!',
		noMic: 'השיחה צריכה מיקרופון. אפשרו גישה למיקרופון בדפדפן ונסו שוב.',
		doneTitle: 'סיימתם שיחה באנגלית!',
		spoke: 'דיברתם',
		turns: 'תשובות',
		strengths: 'מה עבד טוב',
		phrases: 'ביטויים לפעם הבאה',
		closingFallback: 'כל שיחה כזאת מקרבת אתכם לדיבור חופשי. נתראה בשיחה הבאה!',
		again: 'שיחה נוספת',
		back: 'חזרה למודול',
		privacy: 'ההקלטה נשלחת ל-AI רק כדי לענות, ולא נשמרת אצלנו'
	},
	speakAi: {
		button: 'משוב AI על ההקלטה',
		listening: 'מקשיבים להקלטה...',
		failed: 'לא הצלחנו לבדוק עכשיו. נסו שוב בעוד רגע.',
		title: 'משוב AI',
		strengths: 'מה עבד',
		tips: 'מה לשפר',
		transcript: 'מה שמענו'
	},
	takeCompare: {
		firstTry: 'ההקלטה נשמרה כנקודת ההתחלה שלכם. בפעם הבאה תשמעו כמה התקדמתם.',
		title: 'ההתקדמות שלכם בשאלה הזאת',
		then: (s: number) => `בפעם הראשונה: ${s} שניות`,
		now: (s: number) => `עכשיו: ${s} שניות`,
		reachedNow: 'הגעתם ליעד - בפעם הראשונה לא!',
		listenFirst: 'האזינו לניסיון הראשון שלכם'
	},
	cobeReview: {
		title: 'בדיקת ההקלטות',
		pendingTitle: 'בדקו את ההקלטות כדי לקבל ציון',
		intro:
			'הקשיבו לכל הקלטה ובחרו לכל קריטריון את הרמה שמתאימה לה לפי המחוון הרשמי. הציון מחושב לפי המשקלות וההורדות של משרד החינוך.',
		criterion: {
			topic: 'פיתוח התוכן',
			delivery: 'בהירות ושטף',
			vocabulary: 'אוצר מילים',
			language: 'מבנים ודקדוק'
		} as Record<string, string>,
		band: { high: 'גבוה', mid: 'בינוני', low: 'נמוך', none: 'חלש' } as Record<string, string>,
		answeredAll: 'עניתי על כל השאלות בסט',
		pickAll: 'בחרו רמה לכל קריטריון כדי לקבל ציון.',
		notRecorded: 'לא הוקלטה תשובה.',
		audioGone: 'ההקלטה נשמרת רק עד שסוגרים את הדף.',
		seconds: (s: number) => `${s} שניות`,
		tooShort: (min: number) => `פחות מ-${min} שניות - לפי המחוון החלק מקבל 0.`,
		lengthOff: (p: number) => `הורדה של ${p}% מכל הקריטריונים על אורך ההקלטה (פחות מדקה)`,
		setOff: 'עניתם רק על חלק מהשאלות: חצי מהניקוד על פיתוח התוכן',
		aiFilled: 'ה-AI בחר את הרמות. אפשר לשנות אם אתם לא מסכימים.',
		practiced: (questions: number, percent: number) =>
			`${questions === 1 ? 'שאלה אחת תורגלה' : `${questions} שאלות תורגלו`} · ${percent}% מההקלטות הגיעו ליעד`
	},
	video: {
		placeholderTitle: 'כאן יופיע הקליפ',
		placeholderNote: 'הקליפ עוד לא הועלה. בינתיים אפשר לענות על השאלות כתרגול.'
	},
	speak: {
		start: 'התחלת הקלטה',
		stop: 'סיום',
		again: 'הקלטה חדשה',
		recording: 'מקליטים - הקלטה אחת, בלי עצירות',
		target: (time: string) => `יעד: ${time}`,
		reached: (time: string) => `יפה! דיברתם ${time} - עמדתם ביעד`,
		short: (time: string) => `דיברתם ${time}, קצת פחות מהיעד. אפשר להקליט שוב`,
		listenBack: 'האזינו לעצמכם',
		listenQuestion: 'הקשיבו לשאלה. היא תופיע אחרי ההקלטה',
		noMic: 'אין גישה למיקרופון, אז מודדים רק זמן. דברו בקול ולחצו סיום.',
		privacy: 'ההקלטה נשארת רק במכשיר הזה'
	},
	wordCard: {
		listenLabel: 'השמעה',
		listenSlowLabel: 'השמעה לאט',
		hookLabel: 'טיפ לזיכרון',
		exampleLabel: 'בטקסט',
		sentenceLabel: 'במשפט',
		examLabel: 'כך זה נראה בבחינה',
		spellCopyPrompt: 'הקלידו את המילה שלמעלה',
		spellListenPrompt: 'הקשיבו למילה והקלידו אותה',
		inputPlaceholder: 'הקלידו כאן...',
		correctFeedback: 'נכון!',
		incorrectFeedback: (word: string) => `כמעט. האיות הנכון: ${word}`
	},
	writingTask: {
		wordBankLabel: 'מילים לשימוש',
		linePlaceholder: (n: number) => `משפט ${n}...`,
		checkSentences: (n: number) => `כל ${n} המשפטים מולאו`,
		checkMinSentences: (n: number) => `לפחות ${n} משפטים`,
		checkMoves: (list: string) => `כל המהלכים שהמשימה ביקשה: ${list}`,
		movesMissing: (list: string) =>
			`חסר: ${list}. המשימה בונה על מה שלמדתם קודם - כל מהלך צריך להופיע.`,
		move: {
			stance: 'עמדה (I think...)',
			because: 'because',
			'in-addition': 'In addition',
			'for-example': 'For example',
			'for-instance': 'For instance',
			'as-a-result': 'As a result',
			'in-conclusion': 'In conclusion'
		} as Record<string, string>,
		timeUp: 'הזמן נגמר. בבחינה הייתם מגישים עכשיו - סיימו את המשפט ובדקו.',
		timeTaken: (time: string, limit: number) => `זמן כתיבה: ${time} (יעד: עד ${limit} דקות)`,
		reviewToggle: 'תשובה לדוגמה ובדיקה עצמית',
		checklistTitle: 'השוו לתשובה לדוגמה, וסמנו רק מה שבאמת יש אצלכם:',
		checklistDone: 'מעולה - זה בדיוק מה שהבודק מחפש.',
		checkLength: (min: number, words: number) =>
			`לפחות ${min} מילים (נספרו ${words}; שאלה שהועתקה לא נספרת)`,
		sentencesPhrase: (n: number) => (n === 1 ? 'משפט אחד' : n === 2 ? 'שני משפטים' : `${n} משפטים`),
		wordsPhrase: (n: number) => (n === 1 ? 'מילה אחת' : n === 2 ? 'שתי מילים' : `${n} מילים`),
		checkPunctuation: (capitalIsError: boolean, maxTypos: number) =>
			`${capitalIsError ? 'אות גדולה ונקודה בסוף' : 'נקודה בסוף'} - ${
				maxTypos === 0
					? 'ללא טעויות'
					: maxTypos === 1
						? 'טעות קטנה אחת מותרת'
						: `עד ${maxTypos} טעויות קטנות מותרות`
			}`,
		checkWordBank: (n: number) => `שימוש בלפחות ${n} מהמילים`,
		checkContent: 'תוכן: סיבות ספציפיות, בלי חזרות',
		checkAccepted: 'המשפט מתאים לאחת התשובות המתקבלות',
		acceptedExamples: 'למשל:',
		lintVague: (n: number, word: string) =>
			`משפט ${n}: "${word}" כללי מדי - מה בדיוק? הוסיפו פרט או הסבר.`,
		lintRepeat: (n: number, of: number) => `משפט ${n} חוזר על משפט ${of} - הוסיפו רעיון חדש.`,
		lintShort: (n: number) => `משפט ${n} קצר מדי - כתבו משפט מלא עם סיבה או פרט.`,
		lintNoDetail: (n: number) => `משפט ${n}: בדוגמה חסר פרט - מספר, שם, מקום או מקרה אמיתי.`
	},
	ocr: {
		button: 'סריקת כתב יד',
		albumTitle: 'אלבום הסריקה',
		takePhoto: 'צילום עכשיו',
		pickPhotos: 'בחירה מהגלריה',
		addPhoto: 'צילום עמוד',
		addFromGallery: 'מהגלריה',
		pageLabel: (n: number) => `עמוד ${n}`,
		moveEarlier: 'הזזה קדימה',
		moveLater: 'הזזה אחורה',
		replace: 'החלפת התמונה',
		remove: 'מחיקה',
		rotate: 'סיבוב',
		view: 'הצגה במסך מלא',
		closeView: 'סגירה',
		deleteMode: 'מצב מחיקה',
		selectAll: 'הכול',
		deleteSelected: (n: number) => `מחיקה (${n})`,
		read: (n: number) => (n === 1 ? 'קריאת העמוד' : `קריאת ${n} עמודים`),
		scanning: 'קוראים את הכתב...',
		hint: 'כתבתם על דף? צלמו אותו (אפשר כמה עמודים), בדקו ותקנו, והטקסט ייכנס לתשובה.',
		failed: 'לא הצלחנו לקרוא את התמונה. נסו שוב או הקלידו.',
		empty: 'לא מצאנו טקסט באנגלית בתמונה. צלמו מקרוב ובאור טוב.',
		pageProgress: (i: number, n: number) => `קוראים עמוד ${i} מתוך ${n}...`,
		reviewTitle: 'בדיקת הטקסט שנקרא',
		reviewHint: 'השוו לדף שכתבתם ותקנו רק מה שנקרא לא נכון. [?] = מילה שלא הצלחנו לקרוא.',
		addPage: 'הוספת עמוד',
		insert: 'הכנסה לתשובה',
		cancel: 'ביטול'
	},
	writingCheck: {
		title: 'בדיקה אוטומטית',
		loading: 'בודקים...',
		allClear: 'לא נמצאו טעויות כתיב או פיסוק.',
		notEnglish: 'הטקסט צריך להיות באנגלית.',
		lengthOk: (min: number, max: number) => `אורך תקין (${min}-${max} מילים)`,
		lengthShort: (valid: number, deduction: number, min: number, max: number) =>
			deduction > 0
				? `קצר מדי: ${valid} מילים. בבחינה יורדות ${deduction} נקודות מהתוכן.`
				: `קצר מדי: ${valid} מילים. היעד הוא ${min}-${max}.`,
		lengthZero: 'מתחת ל-25 מילים - בבחינה המטלה כולה מקבלת 0.',
		lengthLong: (valid: number, max: number) =>
			`${valid} מילים - יותר מהיעד (${max}). אין הורדת נקודות, אבל קצרו אם אפשר.`,
		maybe: 'אולי',
		more: (n: number) => `ועוד ${n}...`,

		area: {
			mechanics: 'כתיב ופיסוק',
			language: 'שימוש בשפה',
			vocabulary: 'אוצר מילים'
		},
		rule: {
			typo: 'שגיאת כתיב',
			'capital-start': 'משפט מתחיל באות גדולה',
			'capital-i': 'האות I תמיד גדולה',
			'capital-name': 'ימים, חודשים, שפות ומקומות נכתבים באות גדולה',
			'end-mark': 'חסר סימן פיסוק בסוף המשפט',
			'space-before-mark': 'אין רווח לפני סימן פיסוק',
			'space-after-mark': 'צריך רווח אחרי סימן פיסוק',
			'repeat-word': 'מילה כפולה',
			'run-on': 'שני משפטים מחוברים בפסיק - עדיף לסיים משפט בנקודה',
			agreement: 'התאמה בין הנושא לפועל (he/she/it + s)',
			'be-agreement': 'התאמה בין הנושא ל-is/are',
			'verb-form': 'צורת הפועל אחרי מודאלי/to',
			'past-tense': 'מדובר בעבר - צריך זמן עבר',
			plural: 'צורת הרבים/ספירות של המילה',
			article: 'a או an - לפי הצליל הראשון של המילה הבאה',
			preposition: 'מילת יחס',
			'word-order': 'סדר המילים',
			'double-comparative': 'לא משתמשים ב-more/most יחד עם צורת השוואה',
			'hebrew-ism': 'תרגום מילולי מעברית - באנגלית אומרים אחרת',
			'pronoun-repeat': 'הנושא מופיע פעמיים - מספיק אחד'
		} as Record<string, string>
	},
	feedback: {
		pass: 'עבודה טובה - התשובה מתאימה לשאלה',
		fail: 'התשובה עדיין לא מתאימה',
		checking: 'בודקים את התשובה...',
		partial: 'הבדיקה המלאה לא זמינה כרגע. אלה הטעויות שמצאנו בינתיים.',
		replayNote: 'השאלה תחזור בסוף השיעור.',
		tapHint: 'הטעויות מסומנות בתשובה שלכם - לחצו על סימון כדי לראות מה לתקן.',
		gate: {
			empty: 'עוד לא כתבתם תשובה.',
			'not-english': 'התשובה צריכה להיות באנגלית.',
			'too-short': 'התשובה קצרה מדי - הרחיבו אותה לפני הבדיקה.',
			unreadable: 'יש בטקסט [?] - מילה שלא נקראה. תקנו אותה ושלחו שוב.',
			typos: 'יש יותר מדי טעויות כתיב או פיסוק - תקנו אותן ושלחו שוב.',
			'accepted-miss': 'התשובה לא תואמת לאף אחת מהתשובות המתאימות.',
			'word-bank': 'חסרות מילים מבנק המילים.'
		} as Record<string, string>,
		tag: {
			'off-topic': 'לא עונה על השאלה',
			incomplete: 'עונה רק על חלק מהשאלה',
			unclear: 'לא ברור מה הכוונה',
			repeats: 'חוזר על רעיון שכבר נאמר',
			'off-point': 'משפט שלא עוזר לענות על השאלה',
			'wrong-word': 'מילה אחרת מהמילה שהתכוונתם אליה',
			'word-choice': 'מילה לא מתאימה כאן',
			tense: 'זמן הפועל',
			agreement: 'התאמה בין הנושא לפועל',
			'word-form': 'צורת המילה (רבים, ing, שם תואר/תואר פועל)',
			preposition: 'מילת יחס',
			'word-order': 'סדר המילים',
			'missing-word': 'חסרה מילה',
			'extra-word': 'מילה מיותרת'
		} as Record<string, string>
	},
	install: {
		title: 'התקנה על הטלפון',
		heading: 'EngUp על מסך הבית',
		perks: ['נפתח במסך מלא, בלי שורת כתובת', 'תזכורת יומית לתרגול', 'אותו חשבון ואותה התקדמות'],
		installNow: 'התקנה',
		platforms: { ios: 'אייפון', android: 'אנדרואיד', desktop: 'מחשב' },
		steps: {
			ios: [
				'פותחים את האתר בספארי',
				'מקישים על כפתור השיתוף בתחתית המסך',
				'גוללים ובוחרים "הוספה למסך הבית" (Add to Home Screen)',
				'מקישים "הוספה" ופותחים את EngUp מהאייקון החדש'
			],
			android: [
				'פותחים את האתר בכרום',
				'מקישים על שלוש הנקודות בפינה העליונה',
				'בוחרים "התקנת אפליקציה" או "הוספה למסך הבית"',
				'מאשרים ופותחים את EngUp מהאייקון החדש'
			],
			desktop: [
				"פותחים את האתר בכרום או באדג'",
				'לוחצים על סמל ההתקנה בקצה שורת הכתובת',
				'מאשרים "התקנה"'
			]
		},
		iosNote: 'באייפון התזכורת היומית מגיעה רק לאפליקציה המותקנת, אז שווה להתקין.',
		inAppNote:
			'פתחתם את האתר מתוך אפליקציה אחרת. כדי להתקין, פתחו אותו בדפדפן: בתפריט בוחרים "פתיחה בדפדפן".',
		installedTitle: 'האפליקציה מותקנת',
		installedBody: 'נשאר צעד אחד: תזכורת יומית, כדי שהתרגול יהיה הרגל.',
		toPractice: 'חזרה לתרגול'
	},
	settings: {
		title: 'הגדרות',
		languageSection: 'שפה',
		interfaceLanguage: 'שפת הממשק',
		interfaceLanguageEn: 'Interface language',
		appearanceSection: 'מראה',
		theme: 'ערכת נושא',
		themeSystem: 'אוטומטי',
		themeLight: 'בהיר',
		themeDark: 'כהה',
		goalSection: 'הפרופיל שלי',
		nameLabel: 'השם שלי',
		unitsLabel: 'רמת יחידות',
		examLabel: 'מועד הבגרות',
		practiceSection: 'חוויית תרגול',
		soundEffects: 'אפקטי קול',
		soundEffectsDesc: 'צליל בתשובה נכונה או שגויה',
		dailyReminders: 'תזכורת יומית',
		dailyRemindersDesc: 'התראה אחת בשעה שתבחרו, רק בימים שעוד לא תרגלתם',
		remindersHour: 'שעת התזכורת',
		remindersBusy: 'רגע...',
		remindersDenied: 'ההתראות חסומות בדפדפן. אפשרו אותן בהגדרות האתר ונסו שוב.',
		remindersNeedInstall: 'במכשיר הזה התזכורות עובדות אחרי התקנה למסך הבית.',
		remindersInstall: 'להתקנה',
		remindersIosUpdate: 'תזכורות באייפון דורשות iOS 16.4 ומעלה. עדכנו את המכשיר ונסו שוב.',
		remindersInApp: 'כדי לקבל תזכורות, פתחו את האתר בדפדפן (ספארי או כרום) ולא מתוך אפליקציה.',
		remindersUnsupported: 'הדפדפן הזה לא תומך בהתראות. נסו בכרום או בספארי.',
		remindersFailed: 'לא הצלחנו לשמור. נסו שוב בעוד רגע.',
		installRow: 'התקנה על הטלפון',
		installRowDesc: 'אייקון במסך הבית, נפתח כמו אפליקציה',
		developerSection: 'מפתחים',
		debugTools: 'כלי דיבוג',
		debugToolsDesc: 'הצגת כפתור דיבוג צף בכל האפליקציה',
		accountSection: 'חשבון',
		signedInAs: 'מחוברים בתור',
		signOut: 'יציאה',
		deleteAccount: 'מחיקת חשבון',
		deleteAccountDesc: 'מוחק את החשבון ואת ההתקדמות השמורה במכשיר הזה.',
		deleteConfirm: 'למחוק לצמיתות? הקישו שוב לאישור',
		deleting: 'מוחקים...',
		deleteFailed: 'המחיקה לא הצליחה. נסו שוב בעוד רגע.',
		supportSection: 'עזרה ותמיכה',
		supportHint: 'נתקעתם, מצאתם טעות או שיש לכם רעיון? כתבו לנו, אנחנו עונים בדרך כלל תוך יום.',
		supportWhatsapp: 'וואטסאפ',
		supportWhatsappDesc: 'הדרך הכי מהירה',
		supportEmail: 'אימייל',
		supportMessage: 'היי, יש לי שאלה על האפליקציה:',
		supportSubject: 'פנייה מהאפליקציה',
		aboutSection: 'אודות',
		version: 'גרסה',
		versionValue: '0.1.0 (הדגמה מקומית)',
		demoModeTitle: 'מצב הדגמה',
		demoModeDesc: 'זהו דמו מקומי ללא חיבור לאינטרנט. שינויים במסך זה אינם נשמרים.'
	},
	book: {
		title: 'תיאום שיעור עם מורה',
		intro: 'בחרו תאריך ושעה, וספרו לנו על מה תרצו לעבוד. מסך הדגמה — הבקשה לא נשמרת באמת.',
		weekdays: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
		monthNames: [
			'ינואר',
			'פברואר',
			'מרץ',
			'אפריל',
			'מאי',
			'יוני',
			'יולי',
			'אוגוסט',
			'ספטמבר',
			'אוקטובר',
			'נובמבר',
			'דצמבר'
		],
		dateSection: 'בחרו תאריך',
		prevMonth: 'חודש קודם',
		nextMonth: 'חודש הבא',
		timeSection: 'בחרו שעה',
		pickDateFirst: 'בחרו קודם תאריך',
		noSlots: 'אין שעות פנויות ביום זה',
		topicSection: 'על מה תרצו לעבוד?',
		topicHint: 'אפשר לבחור כמה נושאים',
		topics: [
			'הבנת הנקרא',
			'אוצר מילים',
			'כתיבת חיבור',
			'כתיבת מכתב',
			'דקדוק',
			'הכנה לבחינה בעל פה',
			'אסטרטגיות למבחן'
		],
		levelSection: 'איך היחס שלכם לאנגלית כרגע?',
		levels: ['מתקשה מאוד', 'זקוק לחיזוק', 'בסדר, רוצה לשפר', 'חזק, מלטש לקראת הבגרות'],
		noteSection: 'משהו נוסף שכדאי למורה לדעת?',
		noteOptional: 'לא חובה',
		notePlaceholder: 'לדוגמה: יש לי מבחן בעוד שבועיים...',
		submit: 'שליחת בקשת תיאום',
		missing: 'בחרו תאריך, שעה ולפחות נושא אחד',
		confirmedTitle: 'הבקשה נשלחה!',
		confirmedDesc: (date: string, time: string) =>
			`שמרנו לכם מקום ל-${date} בשעה ${time}. מורה יאשר את הפגישה במייל. (הדגמה — לא נשמר באמת.)`,
		reset: 'תיאום נוסף'
	},
	error: {
		defaultMessage: 'משהו השתבש',
		notFound: 'העמוד המבוקש לא נמצא',
		unitNotFound: 'רמת היחידות המבוקשת לא נמצאה',
		moduleNotFound: 'המודול המבוקש לא נמצא',
		examNotFound: 'המבחן המבוקש לא נמצא',
		noDeck: 'אין אוצר מילים למודול הזה',
		subtitle: 'אפשר לחזור לדף הבית ולהמשיך משם.',
		backButton: 'חזרה לדף הבית'
	},
	testerFeedback: {
		button: 'משוב',
		title: 'דיווח ומשוב',
		description: 'ראיתם באג, משהו לא ברור או יש לכם רעיון? ספרו לנו, כל דיווח עוזר.',
		messageLabel: 'מה תרצו לספר לנו?',
		messagePlaceholder: 'מה קרה? מה ציפיתם שיקרה?',
		screenshot: 'צילום של המסך',
		screenshotDesc: 'המסך שמאחורי החלון הזה',
		noScreenshot: 'לא הצלחנו לצלם את המסך',
		contextNote: 'נצרף גם את כתובת העמוד ואת המסך בשיעור שבו אתם נמצאים.',
		send: 'שליחה',
		sending: 'שולחים...',
		sent: 'תודה! הדיווח הגיע אלינו.',
		failed: 'השליחה לא הצליחה. נסו שוב בעוד רגע.',
		limit: 'שלחתם הרבה דיווחים בשעה האחרונה. נסו שוב מאוחר יותר, או כתבו לנו בקבוצה.',
		group: 'הצטרפו לקבוצת הבודקים',
		groupDesc: 'קבוצת וואטסאפ סגורה, שם שולחים משוב וצילומי מסך',
		email: 'שלחו לנו מייל',
		emailSubject: 'משוב על EngUp'
	},
	/** Screen-reader-only words (the eye gets an icon or a color). */
	a11y: {
		right: 'תשובה נכונה',
		wrong: 'לא נכונה',
		pairMatched: (en: string, he: string) => `זוג נכון: ${en}, ${he}`,
		pairWrong: 'לא זוג. נסו שוב',
		missed: 'היה צריך לסמן',
		yourAnswer: 'התשובה שלכם'
	},
	/** Shown once, on a tester's first visit to the app (TESTER_PHASE in $lib/support). */
	testerWelcome: {
		title: 'ברוכים הבאים לגרסת הניסיון!',
		intro: 'אתם בין הראשונים שמתרגלים ב-EngUp. כמה דברים שחשוב לדעת:',
		points: [
			{
				title: 'זו גרסה מוקדמת',
				body: 'ייתכנו באגים, והתוכן ממשיך להשתנות. במקרים נדירים נצטרך לאפס נתונים.'
			},
			{
				title: 'ראיתם משהו מוזר? ספרו לנו',
				body: 'כפתור המשוב נמצא בפינת כל מסך. הוא שולח לנו את מה שכתבתם יחד עם צילום של המסך.'
			},
			{
				title: 'ה-AI עוד לומד',
				body: 'את המשוב על תשובות כתובות ועל COBE נותן AI, והוא עלול לטעות. נראה לכם שטעה? דווחו לנו.'
			},
			{
				title: 'קבוצת הבודקים בוואטסאפ',
				body: 'שם שולחים משוב ומקבלים עדכונים. שימו לב: חברי הקבוצה רואים את מספר הטלפון שלכם.'
			}
		],
		joinGroup: 'הצטרפות לקבוצה',
		legalLead: 'פרטים נוספים ב',
		terms: 'תנאי השימוש',
		and: ' וב',
		privacy: 'מדיניות הפרטיות',
		start: 'הבנתי, מתחילים!'
	},
	/** /privacy, /terms and /accessibility. Plain Hebrew a student can read; facts in docs/handoffs/policies.md. */
	legal: {
		updated: 'עודכן לאחרונה: 31.10.2026',
		contact: 'support@engup.co.il',
		privacy: {
			intro:
				'אנחנו ב-EngUp שומרים על הפרטיות שלכם. כאן מוסבר בפשטות איזה מידע אנחנו שומרים, למה, עם מי הוא משותף ומה הזכויות שלכם. אנחנו פועלים בתום לב, ועושים כל מאמץ לשמור על המידע שלכם ולעמוד בכל דרישות החוק.',
			sections: [
				{
					title: 'בקצרה',
					items: [
						'הפרטים האישיים שאנחנו שומרים: כתובת מייל, שם (לא חובה), סיסמה מוצפנת, פרטי רכישות (בלי פרטי אשראי) וההתקדמות שלכם בלימוד.',
						'תשובות כתובות, הקלטות וצילומי כתב יד נשלחים ל-AI רק כדי לבדוק אותם, בלי פרטים מזהים.',
						'אנחנו לא מוכרים מידע, אין פרסומות ואין עוגיות מעקב.',
						'אפשר למחוק את החשבון בכל רגע, בהגדרות.',
						'מתחת לגיל 18? הראו את הדף הזה להורה. בהרשמה תאשרו שהוא מסכים.',
						'EngUp נמצאת בשלב פיתוח והרצה. כשנפתח שירות חדש, נעדכן את המדיניות.'
					]
				},
				{
					title: 'מי אנחנו',
					body: [
						'EngUp היא אפליקציה להכנה לבגרות באנגלית. צוות EngUp אחראי על המידע שנשמר בה.',
						'לכל שאלה או בקשה בנושא פרטיות: support@engup.co.il.'
					]
				},
				{
					title: 'האם חובה למסור לנו מידע',
					body: [
						'אין חובה בחוק למסור לנו מידע. אתם מוסרים אותו מרצונכם ובהסכמתכם. עם זאת, בלי כתובת מייל אי אפשר לפתוח חשבון, ובלי לשלוח תשובות לבדיקה לא נוכל לתת עליהן משוב.'
					]
				},
				{
					title: 'הפרטים האישיים שלכם',
					body: ['מה אנחנו שומרים, למה, וכמה זמן:'],
					items: [
						'מייל וסיסמה, ומתי אישרתם את התנאים: כדי לפתוח חשבון, להתחבר, לשלוח מייל אישור ואיפוס סיסמה, ולתעד את ההסכמה. הסיסמה נשמרת מוצפנת, וגם אנחנו לא יכולים לראות אותה. נשמר עד שתמחקו את החשבון.',
						'שם (לא חובה), יחידות לימוד ומועד הבחינה: כדי לפנות אליכם בשם, להתאים את התוכן ולהראות כמה זמן נשאר לבחינה. נשמר עד שתמחקו את החשבון.',
						'רכישות (המסלול, קוד ההטבה, הסכום והתאריכים): כדי לתת לכם גישה ולנהל חשבונות כפי שהחוק דורש. פרטי אשראי לא נשמרים אצלנו. נשמר 7 שנים, כפי שחוקי המס דורשים, גם אחרי מחיקת החשבון.',
						'התקדמות: שיעורים שסיימתם, מילים שתרגלתם, ימי תרגול, ביטויים ששמרתם, מספר התרגולים בדיבור והמקום שבו עצרתם. במבחנים: הניסיון האחרון בכל מבחן, כולל התשובות שכתבתם (גם חיבורים) והמשוב שקיבלתם, והציונים של כל הניסיונות. כדי שתוכלו להמשיך מכל מכשיר ולראות את ההתקדמות לאורך זמן. נשמר עד שתמחקו את החשבון.'
					]
				},
				{
					title: 'מידע שנדרש כדי שהשירות יעבוד',
					items: [
						'מונה בדיקות AI (כמה בדיקות עשיתם בכל יום): למכסה הוגנת לכולם ולמניעת שימוש לרעה. נשמר עד שתמחקו את החשבון.',
						'תזכורות: אם הפעלתם תזכורת יומית, כתובת ההתראות של הדפדפן והשעה שבחרתם. נשמר עד שתכבו אותה, או שהדפדפן יבטל אותה.',
						'דיווחי משוב: מה שכתבתם, כתובת העמוד, המסך בשיעור או במבחן, גודל המסך, שפת הממשק, כתובת המייל שלכם, וצילום מסך אם בחרתם לצרף (הוא יכול להראות את התשובות שלכם). כדי לטפל בדיווח ולענות לכם. נשמר בתיבת המייל של הצוות עד 6 חודשים, או עד שתבקשו למחוק.',
						'רשימת המתנה (כתובת מייל בלבד): כדי לעדכן אתכם כשנפתח. נשמר עד ההשקה, או עד שתבקשו להסיר.',
						'נתונים טכניים (כתובת IP, סוג דפדפן ומכשיר, זמני כניסה): לאבטחה, להגנה מפני רובוטים ולתיקון תקלות. נשמר עד 90 יום.'
					]
				},
				{
					title: 'מה לא נשמר אצלנו',
					items: [
						'הקלטות COBE ושיחות עם בן השיח ב-AI: נשלחות לבדיקה ולא נשמרות אצלנו. נשמר רק מספר התרגולים.',
						'צילומי כתב יד: נשלחים לזיהוי הטקסט ולא נשמרים אצלנו.',
						'הקלטות בתרגול השיעורים: נשמרות רק במכשיר שלכם, כדי שתוכלו לשמוע איך השתפרתם.',
						'הגדרות תצוגה ושפה: נשמרות רק במכשיר שלכם.'
					]
				},
				{
					title: 'בדיקה בעזרת AI',
					body: [
						'כדי לתת לכם משוב, תשובות כתובות, חיבורים, הקלטות COBE, שיחות עם בן השיח וצילומי כתב יד נשלחים למודל Gemini של Google, דרך שירות AI Gateway של Vercel.'
					],
					items: [
						'נשלחת רק התשובה עצמה, יחד עם השאלה. בלי שם, בלי מייל ובלי שום פרט שמזהה אתכם.',
						'המידע נשלח רק כדי לבדוק ולענות, ולא משמש לאימון מודלים.',
						'Vercel לא שומרת אותו. Google שומרת עותק עד 14 יום, כדי שנוכל לבדוק ולשפר את איכות המשוב ולזהות שימוש לרעה, ואז הוא נמחק.',
						'הציון והמשוב של ה-AI הם הערכה לתרגול בלבד. הם עלולים לטעות, ואינם משפיעים על שום דבר מחוץ לאפליקציה.',
						'אל תכתבו בתשובות פרטים אישיים שלא צריך.'
					]
				},
				{
					title: 'עם מי המידע משותף',
					body: [
						'אנחנו לא מוכרים מידע ולא מעבירים אותו למפרסמים. בתוך EngUp, רק אנשי צוות שצריכים את המידע לעבודתם יכולים לגשת אליו. נמסור מידע לרשויות רק אם החוק מחייב אותנו.',
						'המידע משותף רק עם ספקי שירות שעובדים בשבילנו, ורק במה שהם צריכים כדי לתת את השירות:'
					],
					items: [
						'Supabase: מסד הנתונים והחשבונות (אירלנד).',
						'Vercel: אחסון האתר, השרתים ושירות AI Gateway (ארה״ב ואירופה).',
						'Google: מודל Gemini לבדיקת תשובות, ותיבת המייל של הצוות ב-Gmail (ארה״ב ועולמי).',
						'Resend: שליחת מיילים, כמו אישור חשבון, איפוס סיסמה ודיווחי משוב (ארה״ב).',
						'ImprovMX: העברת מיילים שנשלחים אלינו לתיבת הצוות. תוכן המיילים לא נשמר אצלו (צרפת וארה״ב).',
						'Cloudflare Turnstile: הגנה מפני רובוטים בהרשמה ובכניסה (ארה״ב ועולמי).'
					]
				},
				{
					title: 'מידע שעובר לחו״ל',
					body: [
						'חלק מהספקים מעבדים מידע מחוץ לישראל, באירופה ובארה״ב. אנחנו עובדים רק עם ספקים מוכרים, שמתחייבים לשמור על המידע ולהשתמש בו רק כדי לתת לנו שירות.'
					]
				},
				{
					title: 'מתחת לגיל 18',
					body: [
						'רוב המשתמשים שלנו בני 16 עד 18. אם אתם מתחת לגיל 18, הראו את המדיניות הזו להורה או לאפוטרופוס. בהרשמה תסמנו שאתם בני 18 ומעלה, או שהורה או אפוטרופוס מסכים.',
						'הורה או אפוטרופוס יכולים לפנות אלינו כדי לעיין במידע של הילד או לבקש למחוק אותו. נבקש לוודא שהם אכן ההורה או האפוטרופוס של בעל החשבון.'
					]
				},
				{
					title: 'הזכויות שלכם',
					body: [
						'לכל בקשה כתבו ל-support@engup.co.il מכתובת המייל של החשבון, ונענה תוך 30 יום. אם לא קיבלתם מענה, תוכלו לפנות לרשות להגנת הפרטיות.'
					],
					items: [
						'לעיין: לקבל עותק של המידע שלכם.',
						'לתקן: לבקש לתקן מידע לא נכון.',
						'למחוק: את החשבון אפשר למחוק בעצמכם, בהגדרות, בחלק "חשבון". המחיקה מוחקת את החשבון, ההתקדמות, המבחנים, מונה השימוש והתזכורות. רכישות נשארות 7 שנים, כפי שחוקי המס דורשים.',
						'להפסיק: לכבות תזכורות בכל רגע, ולבקש הסרה מרשימת ההמתנה.',
						'לבטל הסכמה לעדכונים: בקישור ההסרה שבכל מייל, או בפנייה אלינו.'
					]
				},
				{
					title: 'מיילים',
					items: [
						'מיילים הכרחיים נשלחים לכולם: אישור חשבון, איפוס סיסמה, ושינוי מהותי במדיניות או בתנאים.',
						'עדכונים והצעות (חדשות, טיפים, מבצעים) נשלחים רק למי שהסכים לקבל אותם, בנפרד מאישור התנאים. בכל מייל כזה יש קישור להסרה בלחיצה אחת.',
						'מי שנרשם לרשימת ההמתנה יקבל מייל אחד כשנפתח, ועדכונים נוספים רק אם יסכים.'
					]
				},
				{
					title: 'אבטחה',
					items: [
						'כל המידע עובר בחיבור מוצפן (HTTPS) ונשמר מוצפן.',
						'רק השרת שלנו יכול לגשת למסד הנתונים. הדפדפן של משתמש אחר לא יכול לקרוא את המידע שלכם.',
						'רק אנשי צוות מורשים יכולים לגשת למידע, ואנחנו בודקים את האבטחה באופן קבוע.',
						'אף מערכת אינה חסינה לגמרי. אם יקרה אירוע אבטחה שנוגע למידע שלכם, נעדכן אתכם ואת הרשויות כפי שהחוק דורש.'
					]
				},
				{
					title: 'אחסון בדפדפן',
					body: [
						'האפליקציה שומרת בדפדפן את פרטי הכניסה, עותק של ההתקדמות וההגדרות, כדי שתעבוד מהר. אין עוגיות פרסום או מעקב. שירות ההגנה מפני רובוטים (Cloudflare Turnstile) בודק נתונים טכניים של הדפדפן כדי לוודא שאתם לא רובוט.'
					]
				},
				{
					title: 'שירות בפיתוח ובהרצה',
					body: [
						'EngUp נמצאת בשלב פיתוח והרצה. אנחנו בונים ובודקים אותה תוך כדי שימוש, ופותחים חלקים ממנה בהדרגה.'
					],
					items: [
						'לפני שנפתח שירות חדש (כמו תשלום או שיעורים עם מורה), נוסיף ספק חדש או נתחיל לשמור מידע חדש, נעדכן את המדיניות הזו.',
						'במקרים נדירים נצטרך לאפס נתונים. כשאפשר, נודיע מראש.',
						'דיווחי משוב (כולל צילומי מסך) משמשים רק לשיפור השירות. אם נרצה לצטט משוב שלכם, נעשה זאת בלי שם, או רק באישורכם.',
						'קבוצת הבודקים בוואטסאפ היא שירות חיצוני, ולא חלק מהאפליקציה. מי שמצטרף אליה חושף את מספר הטלפון שלו לשאר חברי הקבוצה. ההצטרפות היא לבחירתכם, ועליה חלה מדיניות הפרטיות של WhatsApp.'
					]
				},
				{
					title: 'שיעורים ב-Zoom',
					body: [
						'במסלולים עם מורה, המורה לא מקבל מאיתנו מידע מהחשבון שלכם. הוא רואה רק את מה שמופיע ב-Zoom, כמו השם או הכינוי שבחרתם, ואת מה שתבחרו לשתף בשיעור.',
						'לא נקליט שיעור בלי להודיע מראש ולבקש את הסכמתכם. על Zoom חלה מדיניות הפרטיות שלה.'
					]
				},
				{
					title: 'שינויים במדיניות',
					body: [
						'אם נשנה את המדיניות, נעדכן את התאריך בראש הדף. על שינוי מהותי נודיע באפליקציה או במייל, לפני שייכנס לתוקף.'
					]
				},
				{
					title: 'יצירת קשר',
					body: ['support@engup.co.il']
				}
			]
		} as LegalDoc,
		terms: {
			intro:
				'ברוכים הבאים ל-EngUp. השימוש באתר ובאפליקציה כפוף לתנאים האלה. כתבנו אותם בפשטות, וכדאי לקרוא. אנחנו פועלים בתום לב, ועושים כל מאמץ שהשירות יעבוד היטב, יהיה הוגן לכולם ויעמוד בכל דרישות החוק.',
			sections: [
				{
					title: 'בקצרה',
					items: [
						'EngUp היא אפליקציה לתרגול והכנה לבגרות באנגלית. היא לא גוף רשמי, ולא מבטיחה ציון.',
						'משוב של AI עוזר ללמוד, אבל הוא עלול לטעות.',
						'אין חיוב מתחדש: משלמים פעם אחת על התקופה שבחרתם.',
						'התוכן שלנו לשימוש אישי בלבד. מה שאתם כותבים שייך לכם.',
						'מתחת לגיל 18? הירשמו ורכשו בהסכמת הורה או אפוטרופוס.',
						'EngUp נמצאת בשלב פיתוח והרצה: חלק מהשירותים ייפתחו בהמשך, ותכונות יכולות להשתנות.'
					]
				},
				{
					title: 'מי אנחנו והסכמה לתנאים',
					body: [
						'השירות מופעל על ידי צוות EngUp ("EngUp", "אנחנו"). התנאים חלים על האתר engup.co.il ועל האפליקציה.',
						'ביצירת חשבון או בשימוש בשירות אתם מסכימים להם, וגם למדיניות הפרטיות, שמסבירה איך אנחנו שומרים על המידע שלכם.'
					]
				},
				{
					title: 'השירות',
					body: [
						'EngUp נותנת שיעורים, תרגול אוצר מילים, מבחנים בתנאי אמת, משוב, תרגול COBE, ובחלק מהמסלולים גם שיעורים עם מורה ב-Zoom.'
					],
					items: [
						'EngUp אינה קשורה למשרד החינוך. היא כלי תרגול, ולא תחליף לבית הספר.',
						'הציון בבגרות תלוי בכם. אנחנו עושים כל מאמץ שתגיעו מוכנים, אבל לא מתחייבים לציון מסוים.',
						'אנחנו משפרים את השירות כל הזמן, ולכן תוכן ותכונות יכולים להשתנות.'
					]
				},
				{
					title: 'שירות בפיתוח ובהרצה',
					body: [
						'EngUp נמצאת בשלב פיתוח והרצה. אנחנו בונים ובודקים אותה תוך כדי שימוש, ופותחים חלקים ממנה בהדרגה.'
					],
					items: [
						'השירות ניתן כמו שהוא. ייתכנו תקלות, ותוכן, תכונות ומסלולים יכולים להשתנות, להתווסף או להיעלם.',
						'חלק מהשירותים, כמו תשלום ושיעורים עם מורה ב-Zoom, ייפתחו בהדרגה. לפני שייפתחו, נפרסם כאן את הפרטים שלהם.',
						'בינתיים הגישה ניתנת בקוד, ללא תשלום. גישה שניתנה בקוד תקפה עד התאריך של הקוד. כשהיא נגמרת, ההתקדמות שלכם נשמרת.',
						'במקרים נדירים נצטרך לאפס נתונים. כשאפשר, נודיע מראש.',
						'משוב שתשלחו ישמש לשיפור השירות. נצטט אותו רק בלי שם, או באישורכם.',
						'קבוצת הבודקים בוואטסאפ היא שירות חיצוני. מי שמצטרף חושף את מספר הטלפון שלו לשאר החברים, ומתחייב לשמור על כבוד ועל פרטיותם.'
					]
				},
				{
					title: 'משוב של AI',
					body: ['חלק מהמשוב והציונים ניתנים על ידי AI.'],
					items: [
						'הם נועדו לעזור לכם ללמוד, והם הערכה בלבד. הם לא ציון רשמי ולא מנבאים בוודאות את הציון בבחינה.',
						'ה-AI עלול לטעות. נראה לכם שטעה? דווחו לנו דרך כפתור המשוב.',
						'לבדיקות ה-AI יש מכסה יומית לכל משתמש, כדי שהשירות יישאר זמין לכולם.'
					]
				},
				{
					title: 'החשבון שלכם',
					items: [
						'מתחת לגיל 18: הירשמו בהסכמת הורה או אפוטרופוס. בהרשמה תסמנו שאתם בני 18 ומעלה, או שהם מסכימים.',
						'חשבון אחד לכל תלמיד. אל תשתפו את החשבון או את הסיסמה.',
						'שמרו על הסיסמה. אתם אחראים על מה שנעשה בחשבון שלכם. חשבתם שמישהו נכנס אליו? כתבו לנו מיד.',
						'אפשר למחוק את החשבון בכל עת, בהגדרות.'
					]
				},
				{
					title: 'שימוש הוגן',
					body: [
						'בהפרת הכללים האלה נוכל להגביל או להשעות את החשבון. בהפרה קלה נזהיר קודם.',
						'אסור:'
					],
					items: [
						'לנסות לפרוץ למערכת, לעקוף את המגבלות או את המכסות שלה, או לפגוע בפעולתה.',
						'להעתיק, להפיץ, למכור או לפרסם את התוכן, כולל צילומי מסך של שאלות ותשובות לשימוש מסחרי.',
						'להשתמש ברובוטים, בכלים אוטומטיים או בכמה חשבונות כדי לעקוף מכסות.',
						'לשלוח ל-AI או לצוות תוכן פוגעני, מאיים או לא חוקי, או מידע אישי של אחרים.',
						'להתחזות למישהו אחר.'
					]
				},
				{
					title: 'התוכן',
					items: [
						'התוכן שלנו: השיעורים, המבחנים, ההסברים, התרגילים, העיצוב והקוד שייכים ל-EngUp, ומותרים לשימוש אישי ללימוד בלבד.',
						'טקסטים חיצוניים: חלק מקטעי הקריאה עובדו ממקורות אחרים לצורכי תרגול, והזכויות במקור שייכות לבעליהן. טקסטים ספרותיים מתוכנית הבגרות אינם כלולים, בגלל זכויות יוצרים.',
						'התוכן שלכם: מה שאתם כותבים ומקליטים שייך לכם. אתם מרשים לנו לעבד אותו כדי לתת לכם משוב ולשמור את ההתקדמות שלכם, כפי שמוסבר במדיניות הפרטיות.',
						'רעיונות ומשוב: אם תשלחו לנו הצעות לשיפור, נוכל להשתמש בהן בלי תמורה ובלי חובה כלפיכם.'
					]
				},
				{
					title: 'מסלולים ותשלום',
					items: [
						'הגישה ניתנת לפי המסלול או הקוד שהפעלתם. מה כלול בכל מסלול מופיע בדף המסלולים.',
						'אין חיוב מתחדש. משלמים פעם אחת על התקופה שבחרתם. כשהיא נגמרת, מחליטים אם להמשיך.',
						'תקופות: חודש, 3 או 6 חודשים מתחילים ביום הרכישה. "שנת לימודים" נגמרת ב-30 ביוני, ומשלמים רק על החודשים שנשארו. רכישה נוספת מוסיפה זמן לגישה הקיימת.',
						'מחירים: המחיר שמופיע בדף בזמן הרכישה הוא המחיר שתשלמו. מחיר השקה נשאר לכל התקופה שבחרתם.',
						'קודי הטבה: לשימוש אישי, עד מספר השימושים ותאריך התפוגה של הקוד. אי אפשר להמיר אותם בכסף.',
						'תשלום: מתבצע דרך ספק תשלומים חיצוני. פרטי האשראי לא נשמרים אצלנו.',
						'מתחת לגיל 18: רכישה נעשית בהסכמת הורה או אפוטרופוס.'
					]
				},
				{
					title: 'ביטול והחזר כספי',
					items: [
						'תוך 3 ימים מהרכישה: מבטלים ומקבלים את כל הכסף בחזרה, בלי שאלות.',
						'מהיום הרביעי ועד 14 יום מהרכישה: אפשר לבטל ולקבל החזר, בניכוי דמי ביטול של 5% מהמחיר או 100 ש״ח, הנמוך מביניהם.',
						'שיעורים עם מורה שכבר התקיימו מנוכים מההחזר, לפי מחירם במסלול.',
						'אחרי 14 יום: אין החזר. הגישה נשארת פתוחה עד סוף התקופה שרכשתם.',
						'לביטול כתבו ל-support@engup.co.il מכתובת המייל של החשבון. ההחזר יינתן באמצעי התשלום שבו שילמתם, תוך 14 יום.'
					]
				},
				{
					title: 'שיעורים עם מורה ב-Zoom',
					body: ['במסלולים שכוללים שיעורים עם מורה:'],
					items: [
						'שיבוץ, ביטול שיעור ושיעורים שלא נוצלו: הכללים יפורסמו כאן לפני שהשיעורים ייפתחו.',
						'התנהגות: מתנהגים בכבוד, למורה ולתלמידים האחרים. אסור להקליט או לצלם את השיעור בלי הסכמת כל המשתתפים.',
						'הקלטה: לא נקליט שיעור בלי להודיע מראש ולבקש את הסכמתכם.',
						'המורה לא מקבל מאיתנו מידע מהחשבון שלכם. הוא רואה רק את מה שמופיע ב-Zoom, ואת מה שתבחרו לשתף.',
						'על Zoom חלים התנאים ומדיניות הפרטיות שלה.'
					]
				},
				{
					title: 'זמינות השירות',
					body: [
						'אנחנו עושים כל מאמץ שהשירות יעבוד כל הזמן, אבל ייתכנו הפסקות לתחזוקה או תקלות. אם תקלה ארוכה מונעת מכם להשתמש בשירות ששילמתם עליו, כתבו לנו ונמצא פתרון הוגן, כמו הארכת התקופה.'
					]
				},
				{
					title: 'אחריות',
					body: [
						'השירות ניתן כמו שהוא. בכל מקרה, האחריות שלנו מוגבלת לסכום ששילמתם לנו ב-12 החודשים שלפני האירוע. שום דבר בתנאים האלה לא גורע מזכויות שהחוק נותן לכם כצרכנים.',
						'ככל שהחוק מתיר, איננו אחראים:'
					],
					items: [
						'לתוצאה בבחינה או בכל מבחן אחר.',
						'לנזק עקיף, או לנזק שנגרם משימוש לא נכון בשירות.',
						'לאובדן נתונים, מעבר למה שהחוק מחייב.'
					]
				},
				{
					title: 'הפסקת שימוש',
					items: [
						'אתם יכולים להפסיק להשתמש ולמחוק את החשבון בכל עת.',
						'אנחנו רשאים להשעות או לסגור חשבון שמפר את התנאים. אם הסגירה לא נובעת מהפרה, נחזיר את החלק היחסי של מה ששילמתם.',
						'אם נפסיק את השירות כולו, נודיע לפחות 30 יום מראש ונחזיר את החלק היחסי של מה ששילמתם על תקופה שלא נוצלה.'
					]
				},
				{
					title: 'שינויים בתנאים',
					body: [
						'אם נשנה את התנאים, נעדכן את התאריך בראש הדף. על שינוי מהותי נודיע באפליקציה או במייל, לפני שייכנס לתוקף.',
						'המשך שימוש אחרי שהשינוי נכנס לתוקף הוא הסכמה לו. שינוי לא יפגע ברכישה שכבר עשיתם.'
					]
				},
				{
					title: 'דין ושיפוט',
					body: [
						'על התנאים חל הדין הישראלי. סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים במחוז חיפה.'
					]
				},
				{
					title: 'נגישות',
					body: [
						'אנחנו פועלים להנגיש את השירות. נתקלתם בקושי? כתבו לנו, ונעזור. פרטים נוספים בהצהרת הנגישות שלנו.'
					]
				},
				{
					title: 'יצירת קשר',
					body: ['support@engup.co.il']
				}
			]
		} as LegalDoc,
		/** "מה עוד לא נגיש": update after every accessibility fix (docs/ux-principles.md). */
		accessibility: {
			intro:
				'אנחנו רוצים ש-EngUp תתאים לכל תלמיד ותלמידה, גם לאנשים עם מוגבלות. כאן מוסבר מה כבר נגיש, מה עוד לא, ואיך לפנות אלינו.',
			sections: [
				{
					title: 'המחויבות שלנו',
					body: [
						'אנחנו פועלים בתום לב, ועובדים מהר וקשה ככל האפשר כדי לעמוד בכל הדרישות, ושכל אחד ואחת יוכלו ליהנות מהשירות שלנו במלואו.',
						'אנחנו פועלים להנגיש את האתר לפי תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ולפי התקן הישראלי ת"י 5568, ברמה AA. התקן מבוסס על ההנחיות הבינלאומיות WCAG 2.0.'
					]
				},
				{
					title: 'מה כבר נגיש',
					items: [
						'האתר מוגדר בעברית ומימין לשמאל, כך שתוכנות הקראה קוראות אותו נכון.',
						'אפשר להגדיל את הטקסט ואת התצוגה בדפדפן ובטלפון, והעמוד מתאים את עצמו לכל גודל מסך.',
						'מצב בהיר ומצב כהה, לבחירתכם.',
						'מי שהגדיר במכשיר "הפחתת תנועה" יקבל אפליקציה בלי אנימציות.',
						'לכפתורים, לחלונות ולתפריטים יש תיאורים שתוכנות הקראה משמיעות, ולכל שדה תשובה יש תווית.',
						'חלון שנפתח (גם שיעור או מבחן) מודיע על עצמו, והמקלדת נשארת בתוכו עד שסוגרים אותו.',
						'תשובה נכונה או שגויה מסומנת בסמל ובמילים, ולא רק בצבע.',
						'טקסט באנגלית מסומן כאנגלית, כך שתוכנת הקראה מקריאה אותו בהגייה אנגלית.',
						'לתמונות של מילים יש תיאור טקסט.'
					]
				},
				{
					title: 'מה עוד לא נגיש',
					body: ['EngUp נמצאת בשלב פיתוח והרצה, ואנחנו משפרים את הנגישות שלה בכל עדכון. ידוע לנו על:'],
					items: [
						'ניווט במקלדת בלבד: לא בכל המסכים אפשר לראות איפה נמצאים.',
						'תרגילי האזנה ודיבור (COBE): עדיין אין להם חלופה כתובה מלאה.',
						'בדיקת ניגודיות הצבעים בכל המסכים עדיין לא הושלמה.',
						'משפט שמשלב עברית ואנגלית מוקרא בשפה אחת.',
						'לסרטונים עדיין אין כתוביות.'
					]
				},
				{
					title: 'איך בדקנו',
					body: [
						'את רוב התאמות הנגישות בנינו בעזרת AI, ואנשי הצוות שלנו החליטו בכל מקום שהיה ספק. האתר נבדק על ידי בודקים ועל ידי המפתחים.'
					]
				},
				{
					title: 'פנייה בנושא נגישות',
					body: [
						'נתקלתם במסך או בתרגיל שלא הצלחתם להשתמש בו? ספרו לנו, ונעזור לכם בדרך אחרת עד שנתקן.',
						'אחראי הנגישות ב-EngUp: support@engup.co.il',
						'כדאי לפרט באיזה עמוד או תרגיל, מה ניסיתם לעשות, ובאיזה מכשיר ודפדפן. נענה תוך 30 יום.'
					]
				}
			]
		} as LegalDoc
	},
	/** Content titles by id (section / lesson / exam / exam part) - see titles.he.ts. */
	titles: titlesHe
};

export type Dictionary = typeof he;

/** Same shape as Dictionary, but every section's keys are optional. */
export type DictionaryOverride = {
	[K in keyof Dictionary]?: Dictionary[K] extends object ? Partial<Dictionary[K]> : Dictionary[K];
};
