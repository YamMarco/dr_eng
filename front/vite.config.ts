import tailwindcss from '@tailwindcss/vite';
import adapterStatic from '@sveltejs/adapter-static';
import adapterAuto from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// The Svelte inspector's "open in editor" action shells out via the
// `launch-editor` package, which picks an editor from EDITOR/VISUAL — set
// here (rather than relying on shell env) so it opens VS Code regardless of
// how `npm run dev` was launched, instead of falling back to Notepad.
process.env.EDITOR ??= 'code';

// Two targets from one codebase:
// - web (default): the whole site - public pages, /app, admin tools, /api.
// - mobile (`vite build --mode mobile`): a static SPA for the Capacitor shell.
//   Server routes drop out; the app calls the web deployment's /api instead
//   (VITE_API_BASE in .env.mobile).
export default defineConfig(({ mode }) => ({
	// Pre-bundle up front: deps discovered mid-load trigger a re-optimize that leaves open tabs
	// holding stale hashes (504 Outdated Optimize Dep -> 500 page).
	optimizeDeps: { include: ['@lucide/svelte', 'zod', 'nspell'] },
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			adapter:
				mode === 'mobile'
					? adapterStatic({ pages: 'build-mobile', fallback: 'index.html' })
					: // Host-agnostic: picks the Vercel/Netlify/Cloudflare adapter at build time.
						adapterAuto(),

			// Svelte inspector: hold Alt (Option on Mac) and click any element in
			// the dev server to jump straight to its source in your editor.
			vitePlugin: {
				inspector: true
			}
		})
	]
}));
