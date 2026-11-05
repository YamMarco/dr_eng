// Stored values (localStorage, synced across devices) can be malformed: an older app
// version, a bad sync, a hand edit. Readers check the shape and fall back, so one bad
// value never blanks the app.
export const isRecord = (v: unknown): v is Record<string, unknown> =>
	!!v && typeof v === 'object' && !Array.isArray(v);

/** localStorage.setItem that survives a full or blocked store: this session keeps working from memory. */
export function storeItem(key: string, value: string) {
	try {
		localStorage.setItem(key, value);
	} catch {
		// quota exceeded or storage blocked
	}
}
