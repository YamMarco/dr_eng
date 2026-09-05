// Thin wrapper around the content-edit endpoints: attaches the unlocked
// session's password (see editStore.svelte.ts) to every write, since the
// production backend requires it on each request (dev doesn't check it).
const KEY_STORAGE = 'content-edit-key';

function storedKey(): string | null {
	try {
		return sessionStorage.getItem(KEY_STORAGE);
	} catch {
		return null;
	}
}

export async function checkContentEditPassword(password: string): Promise<boolean> {
	const res = await fetch('/api/content-edit/login', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ password })
	});
	return res.ok;
}

export function rememberContentEditPassword(password: string) {
	try {
		sessionStorage.setItem(KEY_STORAGE, password);
	} catch {
		// sessionStorage unavailable (private mode, etc.) — password will just
		// need re-entering; writes will 401 with a clear message either way.
	}
}

export async function saveContentEdit(body: {
	lessonId: string;
	bucket: 'preface' | number;
	index: number;
	op?: 'set' | 'insert' | 'delete';
	screen?: unknown;
}): Promise<{ ok: true; committed: boolean }> {
	const key = storedKey();
	const res = await fetch('/api/content-edit', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			...(key ? { 'x-content-edit-key': key } : {})
		},
		body: JSON.stringify(body)
	});
	if (!res.ok) throw new Error(await res.text());
	return res.json();
}
