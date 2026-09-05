// In-app content editor. Toggle edit mode from the lessons path, tweak a
// screen, hit save. In dev that writes straight to the local content file;
// on the deployed site it commits through GitHub instead (see api.ts) and
// requires unlocking with a password first (see the lock button in
// lessons/+page.svelte and login/+server.ts).
//
// Deliberately detachable — see ./README.md for how to rip it out.
import { dev } from '$app/environment';

const AUTHED_KEY = 'content-edit-authed';

function loadAuthed(): boolean {
	try {
		return sessionStorage.getItem(AUTHED_KEY) === 'true';
	} catch {
		return false;
	}
}

class EditStore {
	/** Unlocked this browser session (password check passed). Always false in dev — irrelevant there. */
	authed = $state(dev ? false : loadAuthed());
	enabled = $state(false);

	/** dev: always on. Elsewhere: only after a successful password unlock. */
	get available() {
		return dev || this.authed;
	}

	toggle() {
		this.enabled = !this.enabled;
	}

	setAuthed(value: boolean) {
		this.authed = value;
		try {
			sessionStorage.setItem(AUTHED_KEY, String(value));
		} catch {
			// sessionStorage unavailable — session just won't survive a reload
		}
	}
}

export const editStore = new EditStore();
