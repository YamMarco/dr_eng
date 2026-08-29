import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// The Svelte inspector's "open in editor" action shells out via the
// `launch-editor` package, which picks an editor from EDITOR/VISUAL — set
// here (rather than relying on shell env) so it opens VS Code regardless of
// how `npm run dev` was launched, instead of falling back to Notepad.
process.env.EDITOR ??= 'code';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),

			// Svelte inspector: hold Alt (Option on Mac) and click any element in
			// the dev server to jump straight to its source in your editor.
			vitePlugin: {
				inspector: true
			}
		})
	]
});
