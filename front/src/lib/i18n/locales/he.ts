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
		quizzes: 'מבחנים',
		settings: 'הגדרות',
		anotherUnit: 'יחידה נוספת'
	},
	appTitle: 'בגרות באנגלית — תרגול',
	home: {
		badge: 'בגרות באנגלית',
		title: 'בחרו יחידות לימוד',
		subtitle: 'כל רמת יחידות כוללת מספר מודולים לתרגול.',
		unitsSuffix: 'יח"ל'
	},
	quiz: {
		startButton: 'התחלת מבחן',
		exitLabel: 'יציאה מהמבחן',
		nextButton: 'הבא',
		nextPartButton: (partTitle: string) => `המשך לחלק: ${partTitle}`,
		submitButton: 'הגש מבחן',
		partProgress: (current: number, total: number) => `חלק ${current} מתוך ${total}`,
		questionProgress: (current: number, total: number) => `שאלה ${current} מתוך ${total}`,
		exitPromptTitle: 'לצאת מהמבחן?',
		exitPromptDesc: 'היציאה תבטל את ההתקדמות בניסיון הנוכחי.',
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
		resumePromptTitle: 'להמשיך מאיפה שהפסקתם?',
		resumePromptDesc: 'יש ניסיון פתוח למבחן הזה.',
		resumeConfirm: 'המשך מאיפה שהפסקתי',
		resumeRestart: 'התחלה מהתחלה',
		lastAttemptLabel: 'ניסיון אחרון',
		backToPassage: 'חזרה לקטע'
	},
	quizzes: {
		assortedTitle: 'מגוון מבחנים',
		ministryTitle: 'מבחני משרד החינוך',
		yearPrefix: 'מבחן בגרות',
		avgTimeLabel: 'זמן ממוצע',
		avgGradeLabel: 'ציון ממוצע',
		rulesTitle: 'חוקי המבחן',
		questionsRule: (n: number) => `${n} שאלות`,
		timeRule: (minutes: number) => `${minutes} דקות`,
		controlsTitle: 'הגדרות למבחן',
		showTimerLabel: 'הצג טיימר',
		scoreboardTitle: 'לוח התוצאות שלך',
		bestScoreLabel: 'השיא שלך',
		lastScoreLabel: 'ניסיון אחרון',
		avgScoreLabel: 'ממוצע'
	},
	unit: {
		backLabel: 'חזרה לבחירת יחידות',
		subtitle: 'בחרו מודול כדי להתחיל לתרגל.',
		emptyTitle: 'המודולים ברמה זו יתווספו בקרוב',
		modulePrefix: 'מודול'
	},
	module: {
		backLabel: 'חזרה לרשימת המודולים',
		lessonsTitle: 'שיעורים',
		lessonsDesc: 'מסע לימוד שלב אחר שלב לפי נושאים',
		examTitle: 'מבחנים',
		examSubtitle: 'מגוון מבחנים לתרגול, וגם מבחני בגרות רשמיים לפי שנה'
	},
	lessons: {
		titlePrefix: 'שיעורים — מודול',
		emptyTitle: (letter: string) => `השיעורים של מודול ${letter} יתווספו בקרוב`
	},
	lesson: {
		lessonLocked: 'השיעור הזה ייפתח בקרוב',
		/** The node label's start button: always names the round about to be played. */
		startRound: (round: number) => `התחל סבב ${round}`,
		roundLabel: (current: number, total: number) => `סבב ${current} מתוך ${total}`,
		exitLabel: 'יציאה מהשיעור',
		prefaceButton: 'הסבר',
		prefaceTitle: 'תזכורת: הסבר השיעור',
		prefaceHint: 'זו רק הצצה - ההתקדמות שלך נשמרת והתרגיל ממשיך מאותו מקום.',
		prefaceBack: 'חזרה לתרגיל',
		prefacePrev: 'הקודם',
		prefaceNext: 'הבא',
		continueButton: 'המשך',
		doneButton: 'סיום',
		completeTitle: 'כל הכבוד!',
		completeDesc: 'סיימת את השיעור הזה.',
		backToPath: 'חזרה למסלול',
		scoreLabel: 'תשובות נכונות',
		questionProgress: (current: number, total: number) => `שאלה ${current} מתוך ${total}`,
		nextQuestionButton: 'הבא',
		continueNextLesson: 'המשך לשיעור הבא',
		continueNextRound: 'המשך לסבב הבא',
		retryButton: 'נסה שוב',
		failTitle: 'כמעט!',
		failDesc: (percent: number) =>
			`כדי להמשיך צריך לפחות ${percent}% תשובות נכונות. אפשר לנסות שוב.`
	},
	// Shown as a small badge before each exercise screen, so the student
	// knows what they're about to do before it starts.
	exerciseKind: {
		mcq: 'שאלה',
		markWord: 'תרגיל: סמנו מילה',
		markAll: 'תרגיל: סמנו את כל מגנטי העין',
		clozePick: 'תרגיל: השלימו את המשפט',
		wordBankLabel: 'מילים לחיפוש',
		timedReading: 'תרגיל מתוזמן: קריאה',
		writingTask: 'משימת כתיבה',
		spellWordCopy: 'תרגיל: איות',
		spellWordListen: 'תרגיל: הכתבה',
		selfCheck: 'תרגיל: תשובה חופשית',
		sentenceCompletion: 'תרגיל: השלמת משפט',
		matchPairs: 'תרגיל: התאימו זוגות',
		answerKeyLabel: 'מפתח התשובה',
		submitButton: 'בדיקה',
		passedFeedback: 'יפה מאוד!',
		notPassedFeedback: 'כמעט — הצבע מראה מה פספסתם'
	},
	selfCheck: {
		placeholder: 'כתבו כאן...',
		revealButton: 'הצגת התשובה',
		modelAnswerLabel: 'תשובה לדוגמה',
		compareNote: 'אין ציון על המסך הזה — השוו את מה שכתבתם לתשובה שלמעלה.',
		wordCount: (n: number) => `${n} מילים`,
		wordTarget: (min: number, max: number) => `היעד: ${min}-${max} מילים`
	},
	wordCard: {
		listenLabel: 'השמעה',
		listenSlowLabel: 'השמעה לאט',
		hookLabel: 'טיפ לזיכרון',
		exampleLabel: 'בטקסט',
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
		checkWordBank: (n: number) => `שימוש בלפחות ${n} מהמילים`
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
		practiceSection: 'חוויית תרגול',
		soundEffects: 'אפקטי קול',
		soundEffectsDesc: 'צליל בתשובה נכונה או שגויה',
		dailyReminders: 'תזכורות יומיות',
		dailyRemindersDesc: 'התראה לתרגול יומי',
		showHints: 'רמזים בתרגילים',
		showHintsDesc: 'הצגת רמז לפני בדיקת תשובה',
		developerSection: 'מפתחים',
		debugTools: 'כלי דיבוג',
		debugToolsDesc: 'הצגת כפתור דיבוג צף בכל האפליקציה',
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
		subtitle: 'אפשר לחזור ולבחור מודול מחדש.',
		backButton: 'חזרה לבחירת מודול'
	}
};

export type Dictionary = typeof he;

/** Same shape as Dictionary, but every section's keys are optional. */
export type DictionaryOverride = {
	[K in keyof Dictionary]?: Dictionary[K] extends object ? Partial<Dictionary[K]> : Dictionary[K];
};
