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
		settings: 'הגדרות'
	},
	appTitle: 'בגרות באנגלית — תרגול',
	home: {
		badge: 'בגרות באנגלית',
		title: 'בחרו יחידות לימוד',
		subtitle: 'כל רמת יחידות כוללת מספר מודולים לתרגול.',
		unitsSuffix: 'יח"ל'
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
		examTitle: 'הבנה למבחן',
		examSubtitle: (minutes: number) => `תרגול בתנאי בחינה · ${minutes} דקות`
	},
	lessons: {
		titlePrefix: 'שיעורים — מודול',
		emptyTitle: (letter: string) => `השיעורים של מודול ${letter} יתווספו בקרוב`
	},
	lesson: {
		lessonLabel: (n: number) => `שיעור ${n}`,
		lessonLocked: 'השיעור הזה ייפתח בקרוב',
		exitLabel: 'יציאה מהשיעור',
		continueButton: 'המשך',
		doneButton: 'סיום',
		completeTitle: 'כל הכבוד!',
		completeDesc: 'סיימת את השיעור הזה.',
		backToPath: 'חזרה למסלול',
		scoreLabel: 'תשובות נכונות',
		questionProgress: (current: number, total: number) => `שאלה ${current} מתוך ${total}`,
		nextQuestionButton: 'הבא',
		continueNextLesson: 'המשך לשיעור הבא',
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
		timedReading: 'תרגיל מתוזמן: קריאה',
		writingTask: 'משימת כתיבה',
		submitButton: 'בדיקה'
	},
	writingTask: {
		wordBankLabel: 'מילים לשימוש',
		linePlaceholder: (n: number) => `משפט ${n}...`,
		checkSentences: (n: number) => `כל ${n} המשפטים מולאו`,
		checkPunctuation: 'אות גדולה בהתחלה ונקודה בסוף בכל משפט',
		checkWordBank: (n: number) => `שימוש בלפחות ${n} מהמילים`
	},
	examStart: {
		titlePrefix: 'הבנה למבחן — מודול',
		durationLabel: 'משך התרגול',
		description: (minutes: number) =>
			`התרגול נמשך ${minutes} דקות. הטיימר מתחיל לרוץ ברגע הלחיצה על "התחלה" ונעצר אוטומטית בסיום הזמן.`,
		structureTitle: 'מבנה התרגול',
		startButton: 'התחלה',
		backButton: 'חזרה'
	},
	examRun: {
		exitLabel: 'יציאה מהתרגול',
		tabsAriaLabel: 'חלקי התרגול',
		generalTab: 'תרגול',
		placeholderTitle: (label: string) => `השאלות של ${label} ייטענו כאן`,
		placeholderDesc: 'זוהי גרסת הדגמה — התוכן יתווסף בשלב הבא. הטיימר פועל כרגיל.',
		continueButton: 'המשך',
		restartButton: 'חזרה להתחלה',
		finishButton: 'סיום התרגול',
		exitPromptTitle: 'לצאת מהתרגול?',
		exitPromptDesc: 'היציאה תעצור את הטיימר וההתקדמות לא תישמר.',
		exitConfirm: 'יציאה מהתרגול',
		exitCancel: 'המשך בתרגול',
		timeUpTitle: 'הזמן נגמר',
		finishedTitle: 'התרגול הסתיים',
		timeUpDesc: (minutes: number) => `התרגול נסגר אוטומטית בתום ${minutes} הדקות.`,
		finishedDescBefore: 'סיימתם את התרגול עם',
		finishedDescAfter: 'דקות שנותרו.',
		backToModule: 'חזרה למודול'
	},
	settings: {
		title: 'הגדרות',
		languageSection: 'שפה',
		interfaceLanguage: 'שפת הממשק',
		interfaceLanguageEn: 'Interface language',
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
