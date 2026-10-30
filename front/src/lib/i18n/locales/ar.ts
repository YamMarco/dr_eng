import type { DictionaryOverride } from './he';
import { titlesAr } from './titles.ar';

// Arabic UI, in light Modern Standard Arabic: short sentences, common words,
// students addressed in the plural (like the Hebrew). Hebrew stays the source
// of truth - a key missing here falls back to Hebrew (see mergeDictionary in
// ../index.svelte.ts). "موديول" = a Bagrut module, "وحدات" = units (4 / 5).
export const ar: DictionaryOverride = {
	common: {
		back: 'رجوع',
		close: 'إغلاق',
		comingSoon: 'قريبًا',
		minutes: 'دقائق'
	},
	nav: {
		mainNav: 'التنقل الرئيسي',
		home: 'الرئيسية',
		book: 'حجز درس',
		settings: 'الإعدادات',
		vocabImages: 'صور الكلمات',
		toSite: 'إلى الصفحة الرئيسية'
	},
	appTitle: 'EngUp',
	login: {
		title: 'تسجيل الدخول',
		subtitle: 'ادخلوا لمتابعة التدريب'
	},
	home: {
		greeting: (part: 'morning' | 'noon' | 'evening' | 'night') =>
			`${part === 'morning' ? 'صباح الخير' : 'مساء الخير'}!`,
		daysToExam: (n: number) => `${n} يومًا حتى البجروت`,
		daysShort: (n: number) => `${n} يومًا`,
		weekly: (days: number, goal: number) => `${days} من ${goal} أيام تدريب هذا الأسبوع`,
		skills: {
			vocab: 'المفردات',
			reading: 'فهم المقروء',
			writing: 'الكتابة',
			speaking: 'المحادثة',
			literature: 'الأدب'
		},
		hookResume: 'لديكم امتحان لم تنهوه',
		hookReady: 'أنتم جاهزون للامتحان!',
		hookWords: (n: number) => `${n} كلمات للمراجعة اليوم`,
		meterLessons: 'الدروس',
		hookToExam: (n: number) =>
			n === 1
				? 'درس واحد آخر حتى تكونوا جاهزين للامتحان'
				: `${n} دروس أخرى حتى تكونوا جاهزين للامتحان`,
		hookLessonsLeft: (n: number) => (n === 1 ? 'درس واحد آخر' : `${n} دروس أخرى`),
		hookOpen: 'افتحوا الموديول',
		tileExam: 'أعلى علامة',
		tileUntested: 'ليس بعد',
		examSoon: 'قريبًا',
		todayStart: 'لنبدأ',
		lessonNext: 'الدرس التالي',
		examMidway: 'لديكم امتحان لم تنهوه',
		continueCta: 'تابعوا',
		lessonMidway: 'في منتصف الدرس',
		desktopNote: 'درس كتابة - الأفضل من الحاسوب',
		examReason: {
			resume: 'لديكم امتحان لم تنهوه. لا يمكن متابعته، لذا نبدأ من جديد.',
			ready: 'أنهيتم معظم المسار. حان وقت اختبار أنفسكم في امتحان بشروط البجروت.',
			'path-done': 'أنهيتم المسار. الآن تتدربون على الامتحان الحقيقي.'
		},
		examsTitle: 'امتحانات تدريبية',
		examsSoonDesc: 'ستُضاف امتحانات الموديول قريبًا',
		examsOpen: (total: number) => `${total} امتحانات متاحة`,
		examsSummary: (taken: number, total: number, best: number) =>
			`${taken} من ${total} · الأعلى ${best}`,
		examsFirst: 'إلى الامتحان الأول',
		examsNext: 'إلى الامتحان التالي',
		wordsDone: 'أنهيتم لهذا اليوم',
		toPath: 'إلى المسار الكامل'
	},
	streak: {
		title: 'سلسلتي',
		thisWeek: (days: number, goal: number) => `${days} من ${goal} أيام تدريب هذا الأسبوع`,
		goalMet: 'حققتم الهدف الأسبوعي!',
		toGoal: (n: number) =>
			n === 1 ? 'يوم واحد آخر للهدف الأسبوعي' : `${n} أيام أخرى للهدف الأسبوعي`,
		weekDays: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
		dayStreak: 'أيام متتالية',
		weekStreak: 'أسابيع بالهدف',
		totalDays: 'أيام تدريب',
		history: 'آخر 12 أسبوعًا',
		rule: 'يوم تدريب = أنهيتم جولة في درس أو سلّمتم امتحانًا.'
	},
	onboarding: {
		step: (current: number, total: number) => `خطوة ${current} من ${total}`,
		nameTitle: 'ما اسمكم؟',
		nameDesc: 'فقط لنعرف كيف نناديكم. يمكن التخطي.',
		namePlaceholder: 'الاسم الأول',
		goalTitle: 'ما هو هدفكم؟',
		goalDesc: 'سنبني لكم مسارًا حسب عدد الوحدات.',
		units4: '4 وحدات',
		units5: '5 وحدات',
		undecided: 'لم أقرر بعد',
		examTitle: 'متى البجروت؟',
		examDesc: 'سنعدّ معًا الأيام حتى الامتحان.',
		examUnknown: 'غير معروف بعد',
		seasonWinter: 'شتاء',
		seasonSummer: 'صيف',
		next: 'متابعة',
		finish: 'هيا نبدأ'
	},
	quiz: {
		startButton: 'بدء الامتحان',
		exitLabel: 'الخروج من الامتحان',
		nextButton: 'التالي',
		submitButton: 'تسليم الامتحان',
		partProgress: (current: number, total: number) => `جزء ${current} من ${total}`,
		questionProgress: (current: number, total: number) => `سؤال ${current} من ${total}`,
		exitPromptTitle: 'الخروج من الامتحان؟',
		exitPromptDesc: 'الخروج سيلغي التقدم في المحاولة الحالية.',
		exitConfirm: 'الخروج من الامتحان',
		exitCancel: 'متابعة الامتحان',
		passedTitle: 'نجحتم!',
		failedTitle: 'لم تنجحوا هذه المرة',
		autoScoreLabel: 'علامة تلقائية',
		byPartTitle: 'التفاصيل حسب الجزء',
		manualTitle: 'بانتظار الفحص',
		manualDesc: 'هذه المهام يفحصها معلم، ولا تدخل في العلامة التلقائية.',
		manualItem: (points: number) => `${points} نقاط`,
		backToQuizzes: 'العودة إلى الامتحانات',
		totalScoreLabel: 'العلامة',
		grading: 'نفحص الإجابات المفتوحة...',
		openAnswersTitle: 'إجابات مفتوحة',
		closedAnswersTitle: 'أسئلة الاختيار',
		gradedInReport: 'ستظهر علامة هذه الإجابة في التقرير في النهاية.',
		retryButton: 'حاولوا مرة أخرى',
		modelAnswerLabel: 'إجابة نموذجية',
		unanswered: 'لم تُختر إجابة.',
		notGraded: 'لم تُفحص - الفحص غير متاح الآن. حاليًا تُحسب 0.',
		retryGrading: 'إعادة الفحص',
		essayLabel: 'مهمة كتابة',
		criterion: {
			content: 'المضمون والتنظيم',
			vocabulary: 'المفردات',
			language: 'استعمال اللغة',
			mechanics: 'الإملاء وعلامات الترقيم'
		} as Record<string, string>,
		lengthDeduction: (points: number, words: number) =>
			`خصم بسبب الطول (${words} كلمة): -${points} نقاط`,
		gateZero: {
			empty: 'لم تُكتب إجابة.',
			'not-english': 'الإجابة ليست بالإنجليزية.',
			'too-short': 'أقل من الحد الأدنى للكلمات - المهمة كلها تحصل على 0.'
		} as Record<string, string>,
		lastAttemptLabel: 'آخر محاولة',
		timeLeftLabel: 'الوقت المتبقي',
		viewSolutionButton: 'عرض الحلول',
		viewSolutionLocked: 'حلّوا الامتحان مرة واحدة لفتح الحلول',
		solutionTitle: 'الحل',
		correctAnswerLabel: 'الإجابة الصحيحة',
		showPassage: 'عرض النص',
		hidePassage: 'إخفاء النص',
		passageLabel: 'نص القراءة',
		questionLabel: (label: string | number) => `سؤال ${label}`,
		pointsShort: (points: number) => `${points} نقاط`
	},
	quizzes: {
		assortedTitle: 'امتحانات متنوعة',
		takenLabel: 'امتحانات أُنجزت',
		avgMinutesLabel: 'دقائق بالمعدل',
		avgGradeLabel: 'معدل العلامات',
		rulesTitle: 'مبنى الامتحان',
		readingTextsRule: (n: number) => (n === 1 ? 'نص قراءة واحد' : `${n} نصوص قراءة`),
		questionsRule: (n: number) => `${n} أسئلة`,
		timeRule: (minutes: number) => `${minutes} دقيقة`,
		writingRule: (min: number, max: number) => `مهمة كتابة: ${min} إلى ${max} كلمة`,
		scoreboardTitle: 'نتائجكم',
		bestScoreLabel: 'أعلى علامة لكم',
		lastScoreLabel: 'آخر محاولة',
		triesLabel: 'محاولات',
		statusNew: 'لم تجربوا بعد',
		statusInProgress: 'في المنتصف',
		statusBest: (best: number) => `الأعلى: ${best}`,
		prepTitle: 'قبل أن تبدأوا',
		prepDesc:
			'امتحان بشروط البجروت: الوقت يجري، ولا ملاحظات حتى التسليم. القليل من الضغط هو التدريب بالضبط - كل امتحان هنا يجعل البجروت شيئًا جربتموه من قبل.',
		prepAgainTitle: 'جولة أخرى',
		prepAgainDesc: 'نفس الامتحان، وأنتم الآن أكثر استعدادًا. حاولوا تحطيم الرقم.',
		tipsTitle: 'كيف تبدأون',
		tips: [
			'اقرأوا الأسئلة قبل النص - هكذا تعرفون عمّا تبحثون.',
			'علقتم؟ تجاوزوا السؤال وارجعوا إليه في النهاية. يمكن التنقل بين الأجزاء.',
			'العلامة هنا لا تُحسب لأي شيء - هي فقط تريكم على ماذا تعملون.'
		],
		tipsC: [
			'اقرأوا العنوان ثم الفقرة الأولى، لتفهموا عمّ يدور النص.',
			'علّموا ما يلفت النظر: الأرقام والأسماء وكلمات النفي والحصر والتناقض.',
			'قيّموا كل سؤال بطريقة إشارة المرور، ثم علّموا الكلمة المفتاحية وابحثوا عنها في النص. الجواب يقع بجانبها.',
			'علقتم؟ تجاوزوا وارجعوا في النهاية. يمكن التنقل بين الأسئلة.',
			'NOT أو EXCEPT؟ تبحثون عن الجواب غير الصحيح. THE MOST أو ONLY؟ تختارون الأنسب.',
			'أربعة خيارات: اقرأوها كلها، اشطبوا الواضح خطؤه، وأثبتوا الخيار المختار من النص.',
			'اتركوا 20 دقيقة على الأقل للكتابة: موقف، سبب، مثال وخلاصة، من سبعين إلى تسعين كلمة. أقل من سبعين تخسرون علامات، وأكثر من تسعين لا.'
		],
		resumeButton: 'البدء',
		retakeButton: 'محاولة أخرى',
		practiceButton: 'تدريب مع ملاحظات',
		practiceHint:
			'في التدريب ترون ملاحظات بعد كل سؤال ويمكن المحاولة مرة أخرى. بلا مؤقت، والعلامة لا تُحفظ.'
	},
	unit: {
		modulePrefix: 'موديول'
	},
	module: {
		examTitle: 'امتحانات'
	},
	deck: {
		title: 'المفردات',
		intro: 'كل يوم قليلًا: كلمات جديدة، وكلمات من المفيد مراجعتها قبل أن تُنسى.',
		statDue: 'للمراجعة اليوم',
		statLearning: 'قيد التعلم',
		statKnown: 'معروفة',
		wordsWon: (n: number) => (n === 1 ? 'أتقنتم كلمة واحدة' : `أتقنتم ${n} كلمة`),
		wordsWonShort: (n: number) => `أتقنتم ${n}`,
		wordsWonNone: 'نبدأ!',
		start: 'بدء التدريب',
		newOnly: (n: number) => `${n} كلمات جديدة`,
		sessionSize: (reviews: number, fresh: number) =>
			[reviews ? `${reviews} للمراجعة` : '', fresh ? `${fresh} جديدة` : '']
				.filter(Boolean)
				.join(' · '),
		allDoneTitle: 'أنهيتم لهذا اليوم!',
		extra: 'تدريب إضافي',
		sessionLabel: 'تدريب الكلمات',
		promptMeaning: 'ما معنى الكلمة؟',
		promptContext: 'أكملوا الجملة:',
		promptDefinition: 'أي كلمة تناسب التعريف؟',
		gatewayDue: (n: number) => (n ? `${n} للمراجعة` : 'مفتوح للتدريب'),
		howTitle: 'كيف يعمل هذا؟',
		how: [
			'كلمة جديدة: بطاقة، سؤال قصير ونسخ، كما في دروس الكلمات في موديول C.',
			'أجبتم بشكل صحيح؟ ستعود الكلمة بعد بضعة أيام، وفي كل مرة بعد مدة أطول.',
			'أخطأتم؟ تعود غدًا.',
			'الكلمة التي أصبحت شبه معروفة تعود بصيغة البجروت: 6 كلمات و3 تعريفات.'
		]
	},
	lessons: {
		titlePrefix: 'دروس - موديول',
		emptyTitle: (letter: string) => `ستُضاف دروس موديول ${letter} قريبًا`,
		startHere: 'ابدأوا هنا'
	},
	lesson: {
		lessonLocked: 'سيُفتح هذا الدرس قريبًا',
		progressLabel: 'التقدم في الدرس',
		start: 'لنبدأ',
		startRound: (round: number) => `بدء الجولة ${round}`,
		roundLabel: (current: number, total: number) => `جولة ${current} من ${total}`,
		roundsRequiredHint: (n: number) => `يجب اجتياز ${n} جولات لفتح المرحلة التالية`,
		exitLabel: 'الخروج من الدرس',
		prefaceButton: 'شرح',
		prefaceTitle: 'تذكير: شرح الدرس',
		prefaceHint: 'هذه مجرد نظرة سريعة - تقدمكم محفوظ والتمرين يستمر من نفس المكان.',
		prefaceBack: 'العودة إلى التمرين',
		prefacePrev: 'السابق',
		prefaceNext: 'التالي',
		continueButton: 'متابعة',
		doneButton: 'إنهاء',
		completeTitle: 'أحسنتم!',
		completeDesc: 'أنهيتم هذا الدرس.',
		toGold: (n: number) =>
			n === 1 ? 'جولة واحدة أخرى ويصبح الدرس ذهبيًا' : `${n} جولات أخرى للذهب`,
		goldDone: 'درس ذهبي!',
		backToPath: 'العودة إلى المسار',
		scoreLabel: 'إجابات صحيحة',
		questionProgress: (current: number, total: number) => `سؤال ${current} من ${total}`,
		nextQuestionButton: 'التالي',
		feedbackRight: ['صحيح!', 'ممتاز!', 'بالضبط!', 'أحسنتم!'],
		feedbackWrong: 'تقريبًا',
		feedbackRetryLater: 'سنعود إلى هذا السؤال في نهاية الجولة.',
		feedbackLook: 'انظروا إلى الإجابة الصحيحة قبل المتابعة.',
		continueNextLesson: 'متابعة إلى الدرس التالي',
		continueNextRound: 'متابعة إلى الجولة التالية',
		retryButton: 'محاولة أخرى',
		failTitle: 'تقريبًا!',
		failDesc: (percent: number) =>
			`للمتابعة تحتاجون على الأقل ${percent}% إجابات صحيحة. يمكنكم المحاولة مرة أخرى.`
	},
	exerciseKind: {
		listenHint: 'استمعوا. سيظهر النص بعد الفحص',
		mcq: 'تمرين: سؤال متعدد الخيارات',
		pickN: (n: number) => `اختاروا ${n} إجابات صحيحة`,
		markAll: 'تمرين: التحديد في النص',
		clozePick: 'تمرين: أكملوا الجملة',
		order: 'تمرين: رتّبوا بالترتيب الصحيح',
		wordBankLabel: 'كلمات للبحث',
		timedReading: 'تمرين بوقت محدد: قراءة',
		writingTask: 'مهمة كتابة',
		spellWordCopy: 'تمرين: تهجئة',
		spellWordListen: 'تمرين: إملاء',
		selfCheck: 'تمرين: إجابة حرة',
		speak: 'تمرين: تحدث',
		video: 'مشاهدة المقطع',
		passageQuiz: 'تمرين: إجابة قصيرة',
		sentenceCompletion: 'تمرين: إكمال جملة',
		matchPairs: 'تمرين: صِلوا الأزواج',
		matchDefinitions: 'تمرين: صِلوا الكلمة بالتعريف',
		matchDefinitionsHint: 'اختاروا تعريفًا، ثم الكلمة المناسبة له',
		answerKeyLabel: 'مفتاح الإجابة',
		hintButton: 'لم تفهموا السؤال؟ مساعدة',
		answerLabel: 'الإجابة:',
		noColor: 'بدون لون',
		submitButton: 'فحص',
		passedFeedback: 'ممتاز!',
		notPassedFeedback: 'تقريبًا - اللون يريكم ما فاتكم'
	},
	poem: {
		tapHint: 'اضغطوا على سطر لرؤية معناه'
	},
	answerLang: {
		en: 'الإجابة بالإنجليزية',
		he: 'الإجابة بالعربية',
		speak: 'تحدّثوا بالإنجليزية',
		placeholderEn: 'اكتبوا هنا بالإنجليزية...',
		placeholderHe: 'اكتبوا هنا بالعربية...'
	},
	selfCheck: {
		placeholder: 'اكتبوا هنا...',
		revealButton: 'عرض الإجابة',
		modelAnswerLabel: 'إجابة نموذجية',
		compareNote: 'لا علامة في هذه الشاشة - قارنوا ما كتبتم بالإجابة أعلاه.',
		wordCount: (n: number) => `${n} كلمة`,
		wordTarget: (min: number, max: number) => `الهدف: ${min}-${max} كلمة`
	},
	video: {
		placeholderTitle: 'هنا سيظهر المقطع',
		placeholderNote: 'لم يُرفع المقطع بعد. حتى ذلك الحين يمكن الإجابة عن الأسئلة كتمرين.'
	},
	speak: {
		start: 'بدء التسجيل',
		stop: 'إنهاء',
		again: 'تسجيل جديد',
		recording: 'نسجّل - تسجيل واحد، بلا توقف',
		target: (time: string) => `الهدف: ${time}`,
		reached: (time: string) => `أحسنتم! تحدثتم ${time} - وصلتم إلى الهدف`,
		short: (time: string) => `تحدثتم ${time}، أقل قليلًا من الهدف. يمكن التسجيل من جديد`,
		listenBack: 'استمعوا إلى أنفسكم',
		listenQuestion: 'استمعوا إلى السؤال. سيظهر بعد التسجيل',
		noMic: 'لا وصول إلى الميكروفون، لذلك نقيس الوقت فقط. تحدثوا بصوت عالٍ واضغطوا إنهاء.',
		privacy: 'يبقى التسجيل على هذا الجهاز فقط'
	},
	wordCard: {
		listenLabel: 'استماع',
		listenSlowLabel: 'استماع ببطء',
		hookLabel: 'نصيحة للحفظ',
		exampleLabel: 'في النص',
		sentenceLabel: 'في جملة',
		examLabel: 'هكذا تظهر في الامتحان',
		spellCopyPrompt: 'اكتبوا الكلمة التي في الأعلى',
		spellListenPrompt: 'استمعوا إلى الكلمة واكتبوها',
		inputPlaceholder: 'اكتبوا هنا...',
		correctFeedback: 'صحيح!',
		incorrectFeedback: (word: string) => `تقريبًا. التهجئة الصحيحة: ${word}`
	},
	writingTask: {
		wordBankLabel: 'كلمات للاستعمال',
		linePlaceholder: (n: number) => `جملة ${n}...`,
		checkSentences: (n: number) => `تمت تعبئة الجمل الـ${n} كلها`,
		checkMinSentences: (n: number) => `${n} جمل على الأقل`,
		checkMoves: (list: string) => `كل الخطوات التي طلبتها المهمة: ${list}`,
		movesMissing: (list: string) =>
			`ينقص: ${list}. المهمة تبني على ما تعلمتموه سابقًا - يجب أن تظهر كل خطوة.`,
		move: {
			stance: 'موقف (I think...)',
			because: 'because',
			'in-addition': 'In addition',
			'for-example': 'For example',
			'for-instance': 'For instance',
			'as-a-result': 'As a result',
			'in-conclusion': 'In conclusion'
		} as Record<string, string>,
		timeUp: 'انتهى الوقت. في الامتحان كنتم ستسلّمون الآن - أنهوا الجملة وافحصوا.',
		timeTaken: (time: string, limit: number) => `وقت الكتابة: ${time} (الهدف: حتى ${limit} دقيقة)`,
		reviewToggle: 'إجابة نموذجية وفحص ذاتي',
		checklistTitle: 'قارنوا بالإجابة النموذجية، وحددوا فقط ما هو موجود فعلًا عندكم:',
		checklistDone: 'ممتاز - هذا بالضبط ما يبحث عنه الفاحص.',
		checkLength: (min: number, words: number) =>
			`${min} كلمة على الأقل (عُدّت ${words}؛ السؤال المنسوخ لا يُحسب)`,
		sentencesPhrase: (n: number) => (n === 1 ? 'جملة واحدة' : n === 2 ? 'جملتان' : `${n} جمل`),
		wordsPhrase: (n: number) => (n === 1 ? 'كلمة واحدة' : n === 2 ? 'كلمتان' : `${n} كلمات`),
		checkPunctuation: (capitalIsError: boolean, maxTypos: number) =>
			`${capitalIsError ? 'حرف كبير ونقطة في النهاية' : 'نقطة في النهاية'} - ${
				maxTypos === 0
					? 'بدون أخطاء'
					: maxTypos === 1
						? 'مسموح خطأ صغير واحد'
						: `مسموح حتى ${maxTypos} أخطاء صغيرة`
			}`,
		checkWordBank: (n: number) => `استعمال ${n} من الكلمات على الأقل`,
		checkContent: 'المضمون: أسباب محددة، بدون تكرار',
		checkAccepted: 'الجملة تناسب إحدى الإجابات المقبولة',
		acceptedExamples: 'مثلًا:',
		lintVague: (n: number, word: string) =>
			`جملة ${n}: "${word}" عامة جدًا - ماذا بالضبط؟ أضيفوا تفصيلًا أو شرحًا.`,
		lintRepeat: (n: number, of: number) => `جملة ${n} تكرر جملة ${of} - أضيفوا فكرة جديدة.`,
		lintShort: (n: number) => `جملة ${n} قصيرة جدًا - اكتبوا جملة كاملة مع سبب أو تفصيل.`,
		lintNoDetail: (n: number) => `جملة ${n}: المثال ينقصه تفصيل - رقم، اسم، مكان أو حادثة حقيقية.`
	},
	ocr: {
		button: 'مسح خط اليد',
		albumTitle: 'ألبوم المسح',
		takePhoto: 'التصوير الآن',
		pickPhotos: 'الاختيار من المعرض',
		addPhoto: 'تصوير صفحة',
		addFromGallery: 'من المعرض',
		pageLabel: (n: number) => `صفحة ${n}`,
		moveEarlier: 'تحريك للأمام',
		moveLater: 'تحريك للخلف',
		replace: 'استبدال الصورة',
		remove: 'حذف',
		rotate: 'تدوير',
		view: 'عرض بملء الشاشة',
		closeView: 'إغلاق',
		deleteMode: 'وضع الحذف',
		selectAll: 'الكل',
		deleteSelected: (n: number) => `حذف (${n})`,
		read: (n: number) => (n === 1 ? 'قراءة الصفحة' : `قراءة ${n} صفحات`),
		scanning: 'نقرأ الخط...',
		hint: 'كتبتم على ورقة؟ صوّروها (يمكن عدة صفحات)، افحصوا وصححوا، وسيدخل النص إلى الإجابة.',
		failed: 'لم ننجح في قراءة الصورة. حاولوا مرة أخرى أو اكتبوا بأنفسكم.',
		empty: 'لم نجد نصًا بالإنجليزية في الصورة. صوّروا عن قرب وفي ضوء جيد.',
		pageProgress: (i: number, n: number) => `نقرأ صفحة ${i} من ${n}...`,
		reviewTitle: 'فحص النص المقروء',
		reviewHint:
			'قارنوا بالورقة التي كتبتموها وصححوا فقط ما قُرئ بشكل خاطئ. [?] = كلمة لم ننجح في قراءتها.',
		addPage: 'إضافة صفحة',
		insert: 'إدخال إلى الإجابة',
		cancel: 'إلغاء'
	},
	writingCheck: {
		title: 'فحص تلقائي',
		loading: 'نفحص...',
		allClear: 'لم نجد أخطاء إملاء أو ترقيم.',
		notEnglish: 'يجب أن يكون النص بالإنجليزية.',
		lengthOk: (min: number, max: number) => `الطول مناسب (${min}-${max} كلمة)`,
		lengthShort: (valid: number, deduction: number, min: number, max: number) =>
			deduction > 0
				? `قصير جدًا: ${valid} كلمة. في الامتحان تُخصم ${deduction} نقاط من المضمون.`
				: `قصير جدًا: ${valid} كلمة. الهدف هو ${min}-${max}.`,
		lengthZero: 'أقل من 25 كلمة - في الامتحان تحصل المهمة كلها على 0.',
		lengthLong: (valid: number, max: number) =>
			`${valid} كلمة - أكثر من الهدف (${max}). لا يوجد خصم، لكن اختصروا إن أمكن.`,
		maybe: 'ربما',
		more: (n: number) => `و${n} أخرى...`,
		area: {
			mechanics: 'الإملاء وعلامات الترقيم',
			language: 'استعمال اللغة',
			vocabulary: 'المفردات'
		},
		rule: {
			typo: 'خطأ إملائي',
			'capital-start': 'الجملة تبدأ بحرف كبير',
			'capital-i': 'الحرف I دائمًا كبير',
			'capital-name': 'الأيام والأشهر واللغات والأماكن تُكتب بحرف كبير',
			'end-mark': 'تنقص علامة ترقيم في نهاية الجملة',
			'space-before-mark': 'لا مسافة قبل علامة الترقيم',
			'space-after-mark': 'يجب وضع مسافة بعد علامة الترقيم',
			'repeat-word': 'كلمة مكررة',
			'run-on': 'جملتان موصولتان بفاصلة - الأفضل إنهاء الجملة بنقطة',
			agreement: 'التوافق بين الفاعل والفعل (he/she/it + s)',
			'be-agreement': 'التوافق بين الفاعل وis/are',
			'verb-form': 'صيغة الفعل بعد فعل مساعد أو to',
			'past-tense': 'الحديث عن الماضي - يجب زمن الماضي',
			plural: 'صيغة الجمع أو العدّ للكلمة',
			article: 'a أو an - حسب الصوت الأول للكلمة التالية',
			preposition: 'حرف الجر',
			'word-order': 'ترتيب الكلمات',
			'double-comparative': 'لا نستعمل more/most مع صيغة المقارنة',
			'hebrew-ism': 'ترجمة حرفية - بالإنجليزية يقال ذلك بشكل آخر',
			'pronoun-repeat': 'الفاعل يظهر مرتين - تكفي مرة واحدة'
		} as Record<string, string>
	},
	feedback: {
		pass: 'عمل جيد - الإجابة مناسبة للسؤال',
		fail: 'الإجابة لا تناسب السؤال بعد',
		checking: 'نفحص الإجابة...',
		partial: 'الفحص الكامل غير متاح الآن. هذه هي الأخطاء التي وجدناها حتى الآن.',
		replayNote: 'سيعود السؤال في نهاية الدرس.',
		tapHint: 'الأخطاء محددة في إجابتكم - اضغطوا على التحديد لرؤية ما يجب تصحيحه.',
		gate: {
			empty: 'لم تكتبوا إجابة بعد.',
			'not-english': 'يجب أن تكون الإجابة بالإنجليزية.',
			'too-short': 'الإجابة قصيرة جدًا - وسّعوها قبل الفحص.',
			unreadable: 'في النص [?] - كلمة لم تُقرأ. صححوها وأرسلوا مرة أخرى.',
			typos: 'هناك أخطاء إملاء أو ترقيم كثيرة - صححوها وأرسلوا مرة أخرى.',
			'accepted-miss': 'الإجابة لا تطابق أيًّا من الإجابات المقبولة.',
			'word-bank': 'تنقص كلمات من بنك الكلمات.'
		} as Record<string, string>,
		tag: {
			'off-topic': 'لا تجيب عن السؤال',
			incomplete: 'تجيب عن جزء من السؤال فقط',
			unclear: 'المقصود غير واضح',
			repeats: 'تكرر فكرة قيلت سابقًا',
			'off-point': 'جملة لا تساعد في الإجابة عن السؤال',
			'wrong-word': 'كلمة غير التي قصدتموها',
			'word-choice': 'كلمة غير مناسبة هنا',
			tense: 'زمن الفعل',
			agreement: 'التوافق بين الفاعل والفعل',
			'word-form': 'صيغة الكلمة (جمع، ing، صفة/حال)',
			preposition: 'حرف الجر',
			'word-order': 'ترتيب الكلمات',
			'missing-word': 'تنقص كلمة',
			'extra-word': 'كلمة زائدة'
		} as Record<string, string>
	},
	settings: {
		title: 'الإعدادات',
		languageSection: 'اللغة',
		interfaceLanguage: 'لغة الواجهة',
		interfaceLanguageEn: 'Interface language',
		appearanceSection: 'المظهر',
		theme: 'السمة',
		themeSystem: 'تلقائي',
		themeLight: 'فاتح',
		themeDark: 'داكن',
		goalSection: 'ملفي',
		nameLabel: 'اسمي',
		unitsLabel: 'عدد الوحدات',
		examLabel: 'موعد البجروت',
		practiceSection: 'تجربة التدريب',
		soundEffects: 'المؤثرات الصوتية',
		soundEffectsDesc: 'صوت عند الإجابة الصحيحة أو الخاطئة',
		dailyReminders: 'تذكيرات يومية',
		dailyRemindersDesc: 'إشعار للتدريب اليومي',
		developerSection: 'المطورون',
		debugTools: 'أدوات التصحيح',
		debugToolsDesc: 'إظهار زر تصحيح عائم في كل التطبيق',
		aboutSection: 'حول التطبيق',
		version: 'الإصدار',
		versionValue: '0.1.0 (نسخة تجريبية محلية)',
		demoModeTitle: 'وضع تجريبي',
		demoModeDesc: 'هذه نسخة تجريبية محلية بدون اتصال بالإنترنت. التغييرات في هذه الشاشة لا تُحفظ.'
	},
	book: {
		title: 'حجز درس مع معلم',
		intro:
			'اختاروا تاريخًا وساعة، وأخبرونا على ماذا تريدون العمل. شاشة تجريبية - الطلب لا يُحفظ فعلًا.',
		weekdays: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
		monthNames: [
			'يناير',
			'فبراير',
			'مارس',
			'أبريل',
			'مايو',
			'يونيو',
			'يوليو',
			'أغسطس',
			'سبتمبر',
			'أكتوبر',
			'نوفمبر',
			'ديسمبر'
		],
		dateSection: 'اختاروا تاريخًا',
		prevMonth: 'الشهر السابق',
		nextMonth: 'الشهر التالي',
		timeSection: 'اختاروا ساعة',
		pickDateFirst: 'اختاروا تاريخًا أولًا',
		noSlots: 'لا توجد ساعات متاحة في هذا اليوم',
		topicSection: 'على ماذا تريدون العمل؟',
		topicHint: 'يمكن اختيار عدة مواضيع',
		topics: [
			'فهم المقروء',
			'المفردات',
			'كتابة مقال',
			'كتابة رسالة',
			'القواعد',
			'التحضير للامتحان الشفهي',
			'استراتيجيات للامتحان'
		],
		levelSection: 'كيف علاقتكم بالإنجليزية الآن؟',
		levels: ['أواجه صعوبة كبيرة', 'أحتاج إلى تقوية', 'جيد، أريد التحسن', 'قوي، أصقل نفسي للبجروت'],
		noteSection: 'هل هناك شيء آخر من المفيد أن يعرفه المعلم؟',
		noteOptional: 'غير إلزامي',
		notePlaceholder: 'مثلًا: عندي امتحان بعد أسبوعين...',
		submit: 'إرسال طلب الحجز',
		missing: 'اختاروا تاريخًا وساعة وموضوعًا واحدًا على الأقل',
		confirmedTitle: 'تم إرسال الطلب!',
		confirmedDesc: (date: string, time: string) =>
			`حجزنا لكم مكانًا في ${date} الساعة ${time}. سيؤكد المعلم اللقاء بالبريد الإلكتروني. (تجريبي - لا يُحفظ فعلًا.)`,
		reset: 'حجز آخر'
	},
	error: {
		defaultMessage: 'حدث خطأ ما',
		notFound: 'الصفحة المطلوبة غير موجودة',
		unitNotFound: 'عدد الوحدات المطلوب غير موجود',
		moduleNotFound: 'الموديول المطلوب غير موجود',
		examNotFound: 'الامتحان المطلوب غير موجود',
		noDeck: 'لا توجد مفردات لهذا الموديول',
		subtitle: 'يمكنكم العودة إلى الصفحة الرئيسية والمتابعة من هناك.',
		backButton: 'العودة إلى الصفحة الرئيسية'
	},
	titles: titlesAr
};
