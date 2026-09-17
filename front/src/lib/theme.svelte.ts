// Persisted light/dark/system preference. Applied to <html data-theme> by
// the root layout's effect; a blocking inline script in app.html sets the
// same attribute before first paint so there's no light-mode flash while JS
// boots. Lives outside the settings page since NavBar/anything chrome-level
// may want to read `resolved` later.

const STORAGE_KEY = 'theme-mode';

export type ThemeMode = 'system' | 'light' | 'dark';

function loadMode(): ThemeMode {
	if (typeof localStorage === 'undefined') return 'system';
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
}

class ThemeStore {
	mode = $state<ThemeMode>(loadMode());
	private systemDark = $state(
		typeof window !== 'undefined'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
			: false
	);

	resolved = $derived<'light' | 'dark'>(
		this.mode === 'system' ? (this.systemDark ? 'dark' : 'light') : this.mode
	);

	constructor() {
		if (typeof window === 'undefined') return;
		const query = window.matchMedia('(prefers-color-scheme: dark)');
		query.addEventListener('change', (e) => {
			this.systemDark = e.matches;
		});
	}

	setMode(mode: ThemeMode) {
		this.mode = mode;
		if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, mode);
	}
}

export const themeStore = new ThemeStore();
