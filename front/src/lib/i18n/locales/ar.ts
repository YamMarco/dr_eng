import type { DictionaryOverride } from './he';

// Partial on purpose: Hebrew is the source of truth. New keys only need to be
// added here when someone asks for Arabic copy — until then they fall back
// to the Hebrew string (see mergeDictionary in ../index.svelte.ts).
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
		examTitle: 'اختبارات',
		examSubtitle: 'مجموعة اختبارات للتدريب، وأيضًا اختبارات بجروت رسمية بحسب السنة'
	},
	lessons: {
		titlePrefix: 'دروس — وحدة',
		emptyTitle: (letter: string) => `ستُضاف دروس وحدة ${letter} قريبًا`
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
