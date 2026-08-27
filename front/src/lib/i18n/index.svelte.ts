import { he, type Dictionary } from './locales/he';
import { ar } from './locales/ar';

export type Language = 'he' | 'ar';

const STORAGE_KEY = 'language';

// Hebrew is the source of truth; other languages only override what's been
// translated so far, section by section — an untranslated key just reads
// as Hebrew instead of breaking the build.
function mergeDictionary(
	overrides: Partial<Record<keyof Dictionary, object | string>>
): Dictionary {
	const merged: Record<string, unknown> = {};
	for (const key of Object.keys(he) as (keyof Dictionary)[]) {
		const base: unknown = he[key];
		const override = overrides[key];
		merged[key] =
			typeof base === 'object' && base !== null && typeof override === 'object'
				? { ...base, ...override }
				: (override ?? base);
	}
	return merged as Dictionary;
}

const dictionaries: Record<Language, Dictionary> = { he, ar: mergeDictionary(ar) };

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
