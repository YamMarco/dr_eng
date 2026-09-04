// Dev-only in-app content editor. Toggle edit mode from the lessons path,
// tweak a screen, hit save -> the change is written straight back into the
// `src/lib/content/c/c-<N>.ts` file it came from (Vite HMR then reloads it).
//
// Deliberately detachable — see ./README.md for how to rip it out.
import { dev } from '$app/environment';

class EditStore {
	/** Only ever true in `vite dev`; the whole feature is a no-op in a build. */
	readonly available = dev;
	enabled = $state(false);

	toggle() {
		this.enabled = !this.enabled;
	}
}

export const editStore = new EditStore();
