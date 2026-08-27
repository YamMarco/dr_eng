import type { Dictionary } from './he';

export const ar: Dictionary = {
	common: {
		back: 'رجوع',
		close: 'إغلاق',
		comingSoon: 'قريبًا',
		minutes: 'دقائق'
	},
	nav: {
		mainNav: 'التنقل الرئيسي',
		home: 'الرئيسية',
		settings: 'الإعدادات'
	},
	appTitle: 'بجروت في اللغة الإنجليزية — تدريب',
	home: {
		badge: 'بجروت في اللغة الإنجليزية',
		title: 'اختاروا وحدات التعلّم',
		subtitle: 'كل مستوى وحدات يشمل عدة وحدات تدريب.',
		unitsSuffix: 'وحدة'
	},
	unit: {
		backLabel: 'رجوع لاختيار الوحدات',
		subtitle: 'اختاروا وحدة تعليمية لبدء التدريب.',
		emptyTitle: 'ستُضاف وحدات هذا المستوى قريبًا',
		modulePrefix: 'وحدة'
	},
	module: {
		backLabel: 'رجوع لقائمة الوحدات',
		lessonsTitle: 'دروس',
		lessonsDesc: 'مسار تعلّم تدريجي حسب المواضيع',
		examTitle: 'فهم للامتحان',
		examSubtitle: (minutes: number) => `تدريب بظروف الامتحان · ${minutes} دقيقة`
	},
	lessons: {
		titlePrefix: 'دروس — وحدة',
		subtitle: 'اختاروا درسًا للبدء.',
		emptyTitle: (letter: string) => `ستُضاف دروس وحدة ${letter} قريبًا`,
		lessonPrefix: 'درس'
	},
	lesson: {
		titlePrefix: 'درس',
		placeholderTitle: 'سيُضاف محتوى الدرس قريبًا',
		placeholderDesc: 'هذه نسخة تجريبية من قائمة الدروس.'
	},
	examStart: {
		titlePrefix: 'فهم للامتحان — وحدة',
		durationLabel: 'مدة التدريب',
		description: (minutes: number) =>
			`يستمر التدريب ${minutes} دقيقة. يبدأ العداد بمجرد الضغط على "بدء" ويتوقف تلقائيًا عند انتهاء الوقت.`,
		structureTitle: 'هيكل التدريب',
		startButton: 'بدء',
		backButton: 'رجوع'
	},
	examRun: {
		exitLabel: 'الخروج من التدريب',
		tabsAriaLabel: 'أقسام التدريب',
		generalTab: 'تدريب',
		placeholderTitle: (label: string) => `ستُحمَّل هنا أسئلة ${label}`,
		placeholderDesc: 'هذه نسخة تجريبية — سيُضاف المحتوى لاحقًا. العداد يعمل كالمعتاد.',
		continueButton: 'متابعة',
		restartButton: 'العودة للبداية',
		finishButton: 'إنهاء التدريب',
		exitPromptTitle: 'الخروج من التدريب؟',
		exitPromptDesc: 'الخروج سيوقف العداد ولن يُحفظ التقدّم.',
		exitConfirm: 'الخروج من التدريب',
		exitCancel: 'متابعة التدريب',
		timeUpTitle: 'انتهى الوقت',
		finishedTitle: 'انتهى التدريب',
		timeUpDesc: (minutes: number) => `أُغلق التدريب تلقائيًا بعد ${minutes} دقيقة.`,
		finishedDescBefore: 'أنهيتم التدريب وتبقّى',
		finishedDescAfter: 'دقيقة.',
		backToModule: 'رجوع للوحدة'
	},
	settings: {
		title: 'الإعدادات',
		languageSection: 'اللغة',
		interfaceLanguage: 'لغة الواجهة',
		interfaceLanguageEn: 'Interface language',
		practiceSection: 'تجربة التدريب',
		soundEffects: 'المؤثرات الصوتية',
		soundEffectsDesc: 'صوت عند الإجابة الصحيحة أو الخاطئة',
		dailyReminders: 'تذكيرات يومية',
		dailyRemindersDesc: 'إشعار للتدريب اليومي',
		showHints: 'تلميحات في التمارين',
		showHintsDesc: 'عرض تلميح قبل التحقق من الإجابة',
		aboutSection: 'حول التطبيق',
		version: 'الإصدار',
		versionValue: '0.1.0 (نسخة تجريبية محلية)',
		demoModeTitle: 'وضع تجريبي',
		demoModeDesc: 'هذه نسخة تجريبية محلية بدون اتصال بالإنترنت. التغييرات في هذه الشاشة لا تُحفظ.'
	},
	error: {
		defaultMessage: 'حدث خطأ ما',
		subtitle: 'يمكنكم العودة واختيار وحدة من جديد.',
		backButton: 'رجوع لاختيار وحدة'
	}
};
