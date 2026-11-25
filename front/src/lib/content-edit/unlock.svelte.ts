// Production editing lock, client side. A content save on the live site gets
// 423 until staff enter CONTENT_EDIT_PASSWORD (server: content-edit/auth.ts).
// The password is kept for this tab only and sent as a header on each save.
import { apiFetch } from '$lib/api';

const KEY = 'edit-unlock';
const HEADER = 'x-edit-password';

function stored(): string {
	try {
		return sessionStorage.getItem(KEY) ?? '';
	} catch {
		return '';
	}
}

class Unlock {
	/** Open while the dialog waits for a password; resolve(null) = cancelled. */
	pending = $state<{ wrong: boolean; resolve: (pw: string | null) => void } | null>(null);
	#asking: Promise<string | null> | null = null;

	/** Saves that hit the lock together share one dialog. */
	ask(wrong: boolean): Promise<string | null> {
		this.#asking ??= new Promise((resolve) => (this.pending = { wrong, resolve }));
		return this.#asking;
	}

	answer(pw: string | null) {
		this.pending?.resolve(pw);
		this.pending = null;
		this.#asking = null;
	}
}

export const unlock = new Unlock();

/** apiFetch for content writes: on 423 asks for the password and retries. */
export async function editFetch(path: string, init: RequestInit): Promise<Response> {
	let pw = stored();
	for (;;) {
		const headers = new Headers(init.headers);
		if (pw) headers.set(HEADER, pw);
		const res = await apiFetch(path, { ...init, headers });
		if (res.status !== 423) return res;
		const next = await unlock.ask(pw !== '');
		if (next === null) return res;
		pw = next;
		try {
			sessionStorage.setItem(KEY, pw);
		} catch {
			// private mode: ask again next save
		}
	}
}
