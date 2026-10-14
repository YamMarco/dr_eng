// In-app content editor. Toggle edit mode from the lessons path, tweak a
// screen, hit save. In dev that writes straight to the local content file;
// on the deployed site it commits through GitHub instead (see api.ts).
// Staff only (app_metadata.role admin).
//
// Deliberately detachable - see ./README.md for how to rip it out.
import { auth } from '$lib/auth.svelte';

class EditStore {
	get available() {
		return auth.isAdmin;
	}
}

export const editStore = new EditStore();
