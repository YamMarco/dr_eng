// App-wide toggle for developer tooling (e.g. the floating debug tooltip).
// Lives outside the settings page since it has to be readable from the root
// layout, not just the settings screen — same pattern as i18n's language.

const STORAGE_KEY = 'debug-tools-enabled';

function loadInitial(): boolean {
	if (typeof localStorage === 'undefined') return false;
	return localStorage.getItem(STORAGE_KEY) === 'true';
}

class DebugStore {
	enabled = $state(loadInitial());

	setEnabled(value: boolean) {
		this.enabled = value;
		if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, String(value));
	}
}

export const debugStore = new DebugStore();
