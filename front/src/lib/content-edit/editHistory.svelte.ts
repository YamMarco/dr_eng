// Snapshot undo/redo shared by editModel and examEditModel. Each model calls
// `commit()` after a mutation; bursts closer together than COALESCE_MS (typing,
// dragging) collapse into one undo step.
//
// Detachable — part of src/lib/content-edit/. See README.md.

const COALESCE_MS = 600;
const MAX_STEPS = 100;

export class EditHistory {
	canUndo = $state(false);
	canRedo = $state(false);

	#undo: string[] = [];
	#redo: string[] = [];
	#current = '';
	#lastAt = 0;
	#serialize: () => string;
	#restore: (snapshot: string) => void;

	constructor(serialize: () => string, restore: (snapshot: string) => void) {
		this.#serialize = serialize;
		this.#restore = restore;
	}

	/** Forget all history and treat the current state as the starting point. */
	reset() {
		this.#undo = [];
		this.#redo = [];
		this.#current = this.#serialize();
		this.#lastAt = 0;
		this.#sync();
	}

	/** Record the current state as a new step. Returns false if nothing changed. */
	commit(): boolean {
		const next = this.#serialize();
		if (next === this.#current) return false;
		const now = Date.now();
		if (this.#undo.length === 0 || now - this.#lastAt > COALESCE_MS) {
			this.#undo.push(this.#current);
			if (this.#undo.length > MAX_STEPS) this.#undo.shift();
		}
		this.#lastAt = now;
		this.#current = next;
		this.#redo = [];
		this.#sync();
		return true;
	}

	undo() {
		const prev = this.#undo.pop();
		if (prev === undefined) return;
		this.#redo.push(this.#current);
		this.#jump(prev);
	}

	redo() {
		const next = this.#redo.pop();
		if (next === undefined) return;
		this.#undo.push(this.#current);
		this.#jump(next);
	}

	#jump(snapshot: string) {
		this.#current = snapshot;
		this.#lastAt = 0;
		this.#restore(snapshot);
		this.#sync();
	}

	#sync() {
		this.canUndo = this.#undo.length > 0;
		this.canRedo = this.#redo.length > 0;
	}
}
