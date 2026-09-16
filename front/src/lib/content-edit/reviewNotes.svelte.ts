// QA review state for the /edit map's per-node float (ReviewFloat.svelte):
// preface/round-done ticks + a free comment, keyed by lesson id. Loaded once,
// mutated locally, autosaved (debounced, per id) to
// /api/content-edit/review — see that endpoint for the storage split
// (disk in dev, a GitHub commit in production). Kept out of editModel /
// the LessonNode schema on purpose: this is authoring scratch state, not
// curriculum content.
const KEY_STORAGE = 'content-edit-key'; // same session key as api.ts

export type ReviewNote = { preface: boolean; rounds: boolean[]; comment: string };

const BLANK: ReviewNote = { preface: false, rounds: [], comment: '' };

function authHeaders(): Record<string, string> {
	try {
		const key = sessionStorage.getItem(KEY_STORAGE);
		return key ? { 'x-content-edit-key': key } : {};
	} catch {
		return {};
	}
}

class ReviewNotesStore {
	notes = $state<Record<string, ReviewNote>>({});
	#loaded = false;
	#timers = new Map<string, ReturnType<typeof setTimeout>>();

	/** Fetches once; later calls are no-ops so an unrelated remount never
	 *  clobbers edits still waiting on their debounce timer. */
	async load() {
		if (this.#loaded) return;
		this.#loaded = true;
		const res = await fetch('/api/content-edit/review', { headers: authHeaders() });
		if (res.ok) this.notes = await res.json();
	}

	#entry(id: string): ReviewNote {
		return this.notes[id] ?? BLANK;
	}

	#update(id: string, patch: Partial<ReviewNote>) {
		this.notes = { ...this.notes, [id]: { ...this.#entry(id), ...patch } };
		const pending = this.#timers.get(id);
		if (pending) clearTimeout(pending);
		this.#timers.set(
			id,
			setTimeout(() => this.#save(id), 600)
		);
	}

	async #save(id: string) {
		this.#timers.delete(id);
		await fetch('/api/content-edit/review', {
			method: 'POST',
			headers: { 'content-type': 'application/json', ...authHeaders() },
			body: JSON.stringify({ id, patch: this.notes[id] })
		}).catch(() => {});
	}

	togglePreface(id: string) {
		this.#update(id, { preface: !this.#entry(id).preface });
	}

	toggleRound(id: string, index: number) {
		const rounds = [...this.#entry(id).rounds];
		rounds[index] = !rounds[index];
		this.#update(id, { rounds });
	}

	/** True once every one of `count` rounds is ticked. */
	allRoundsDone(id: string, count: number): boolean {
		if (count === 0) return false;
		const rounds = this.#entry(id).rounds;
		for (let i = 0; i < count; i++) if (!rounds[i]) return false;
		return true;
	}

	/** Ticks every one of `count` rounds at once (or clears them all if they
	 *  were already all ticked) — the "done all questions" master box. */
	toggleAllRounds(id: string, count: number) {
		const next = !this.allRoundsDone(id, count);
		this.#update(id, { rounds: Array.from({ length: count }, () => next) });
	}

	setComment(id: string, comment: string) {
		this.#update(id, { comment });
	}
}

export const reviewNotes = new ReviewNotesStore();
