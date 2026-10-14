// App-wide toggle for developer tooling (e.g. the floating debug tooltip).
// Lives outside the settings page since it has to be readable from the root
// layout, not just the settings screen — same pattern as i18n's language.

import { auth } from './auth.svelte';

const ENABLED_KEY = 'debug-tools-enabled';
const UNLOCK_ALL_KEY = 'debug-unlock-all';

function loadBool(key: string, defaultValue: boolean): boolean {
	if (typeof localStorage === 'undefined') return defaultValue;
	const stored = localStorage.getItem(key);
	return stored === null ? defaultValue : stored === 'true';
}

class DebugStore {
	// Developer tooling is staff-only: students never see it, whatever is stored.
	// The stored switch defaults to on, so admins get the tools without opting in.
	private enabledFlag = $state(loadBool(ENABLED_KEY, true));
	private unlockAllFlag = $state(loadBool(UNLOCK_ALL_KEY, false));

	get enabled() {
		return this.enabledFlag && auth.isAdmin;
	}

	/** Bypasses the sequential lock on lesson sub-lessons, for QA. */
	get unlockAll() {
		return this.unlockAllFlag && auth.isAdmin;
	}

	setEnabled(value: boolean) {
		this.enabledFlag = value;
		if (typeof localStorage !== 'undefined') localStorage.setItem(ENABLED_KEY, String(value));
	}

	setUnlockAll(value: boolean) {
		this.unlockAllFlag = value;
		if (typeof localStorage !== 'undefined') localStorage.setItem(UNLOCK_ALL_KEY, String(value));
	}
}

export const debugStore = new DebugStore();
