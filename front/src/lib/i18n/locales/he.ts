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
		subtitle: 'בחרו שיעור כדי להתחיל.',
		emptyTitle: (letter: string) => `השיעורים של מודול ${letter} יתווספו בקרוב`,
		lessonPrefix: 'שיעור'
	},
	lesson: {
		titlePrefix: 'שיעור',
		placeholderTitle: 'תוכן השיעור יתווסף בקרוב',
		placeholderDesc: 'זוהי גרסת הדגמה של רשימת השיעורים.'
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
