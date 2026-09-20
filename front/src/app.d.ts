// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			/** A lesson runner is open on the module's path page (its own history entry, so Back closes it). */
			runner?: boolean;
		}
		// interface Platform {}
	}
}

export {};
