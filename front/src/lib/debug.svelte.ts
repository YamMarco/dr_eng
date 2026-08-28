// App-wide toggle for developer tooling (e.g. the floating debug tooltip).
// Lives outside the settings page since it has to be readable from the root
// layout, not just the settings screen — same pattern as i18n's language.

const ENABLED_KEY = 'debug-tools-enabled';
const UNLOCK_ALL_KEY = 'debug-unlock-all';

function loadBool(key: string, defaultValue: boolean): boolean {
	if (typeof localStorage === 'undefined') return defaultValue;
	const stored = localStorage.getItem(key);
	return stored === null ? defaultValue : stored === 'true';
}

class DebugStore {
	// Defaults to open during this build phase — flip off in settings once
	// the app is closer to shipping.
	enabled = $state(loadBool(ENABLED_KEY, true));
	/** Bypasses the sequential lock on lesson sub-lessons, for QA. */
	unlockAll = $state(loadBool(UNLOCK_ALL_KEY, false));

	setEnabled(value: boolean) {
		this.enabled = value;
		if (typeof localStorage !== 'undefined') localStorage.setItem(ENABLED_KEY, String(value));
	}

	setUnlockAll(value: boolean) {
		this.unlockAll = value;
		if (typeof localStorage !== 'undefined') localStorage.setItem(UNLOCK_ALL_KEY, String(value));
	}
}

export const debugStore = new DebugStore();
