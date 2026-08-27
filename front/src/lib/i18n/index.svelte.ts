import { he } from './locales/he';
import { ar } from './locales/ar';

export type Language = 'he' | 'ar';

const dictionaries = { he, ar };
const STORAGE_KEY = 'language';

function loadInitialLanguage(): Language {
	if (typeof localStorage === 'undefined') return 'he';
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === 'ar' ? 'ar' : 'he';
}

class I18n {
	language = $state<Language>(loadInitialLanguage());

	get dict() {
		return dictionaries[this.language];
	}

	setLanguage(lang: Language) {
		this.language = lang;
		if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang);
	}
}

export const i18n = new I18n();
