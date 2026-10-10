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
		vocabImages: 'תמונות מילים'
	},
	appTitle: 'בגרות באנגלית — תרגול',
	login: {
		title: 'התחברות',
		subtitle: 'היכנסו כדי להמשיך לתרגל',
		phoneLabel: 'מספר טלפון',
		passwordLabel: 'סיסמה',
		submit: 'כניסה',
		mockup: 'הדגמה בלבד - אין צורך למלא'
	},
	home: {
		title: 'בחרו יחידות לימוד',
		subtitle: 'כל רמת יחידות כוללת מספר מודולים לתרגול.',
		unitsSuffix: 'יח"ל',
		continueTitle: 'המשך מהמקום שהפסקת',
		continueButton: 'המשך'
	},
	quiz: {
		startButton: 'התחלת מבחן',
		exitLabel: 'יציאה מהמבחן',
		nextButton: 'הבא',
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
		timeLeftLabel: 'זמן שנותר',
		viewSolutionButton: 'צפייה בפתרונות',
		viewSolutionLocked: 'פתרו את המבחן פעם אחת כדי לפתוח',
		solutionTitle: 'פתרון',
		correctAnswerLabel: 'תשובה נכונה',
		showPassage: 'הצגת הקטע',
		hidePassage: 'הסתרת הקטע',
		examModeNote: 'מצב מבחן: אין משוב והסברים עד ההגשה, בדיוק כמו בבגרות.'
	},
	quizzes: {
		assortedTitle: 'מגוון מבחנים',
		ministryTitle: 'בגרויות',
		yearPrefix: 'מבחן בגרות',
		avgTimeLabel: 'זמן ממוצע',
		avgGradeLabel: 'ציון ממוצע',
		rulesTitle: 'מבנה המבחן',
		readingTextsRule: (n: number) => (n === 1 ? 'טקסט קריאה אחד' : `${n} טקסטי קריאה`),
		questionsRule: (n: number) => `${n} שאלות`,
		timeRule: (minutes: number) => `${minutes} דקות`,
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
		emptyTitle: (letter: string) => `השיעורים של מודול ${letter} יתווספו בקרוב`,
		startHere: 'התחילו כאן'
	},
	lesson: {
		lessonLocked: 'השיעור הזה ייפתח בקרוב',
		/** The node label's start button: always names the round about to be played. */
		start: 'התחל',
		startRound: (round: number) => `התחל סבב ${round}`,
		roundLabel: (current: number, total: number) => `סבב ${current} מתוך ${total}`,
		/** Shown on a not-yet-fully-passed node whose requiredRounds > 1, so it's
		 *  clear before starting that one pass isn't enough to open what's next. */
		roundsRequiredHint: (n: number) => `צריך לעבור ${n} סבבים כדי לפתוח את השלב הבא`,
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
		mcq: 'תרגיל: שאלה אמריקאית',
		markAll: 'תרגיל: סימון בטקסט',
		clozePick: 'תרגיל: השלימו את המשפט',
		wordBankLabel: 'מילים לחיפוש',
		timedReading: 'תרגיל מתוזמן: קריאה',
		writingTask: 'משימת כתיבה',
		spellWordCopy: 'תרגיל: איות',
		spellWordListen: 'תרגיל: הכתבה',
		selfCheck: 'תרגיל: תשובה חופשית',
		passageQuiz: 'תרגיל: תשובה קצרה',
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
		button: 'צילום כתב יד',
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
		lengthOk: 'אורך תקין (70-90 מילים)',
		lengthShort: (valid: number, deduction: number) =>
			deduction > 0
				? `קצר מדי: ${valid} מילים. בבחינה יורדות ${deduction} נקודות מהתוכן.`
				: `קצר מדי: ${valid} מילים. היעד הוא 70-90.`,
		lengthZero: 'מתחת ל-25 מילים - בבחינה המטלה כולה מקבלת 0.',
		lengthLong: (valid: number) =>
			`${valid} מילים - יותר מהיעד (90). אין הורדת נקודות, אבל קצרו אם אפשר.`,
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
		notFound: 'העמוד המבוקש לא נמצא',
		subtitle: 'אפשר לחזור לדף הבית ולהמשיך משם.',
		backButton: 'חזרה לדף הבית'
	}
};

export type Dictionary = typeof he;

/** Same shape as Dictionary, but every section's keys are optional. */
export type DictionaryOverride = {
	[K in keyof Dictionary]?: Dictionary[K] extends object ? Partial<Dictionary[K]> : Dictionary[K];
};
