import tailwindcss from '@tailwindcss/vite';
import adapterStatic from '@sveltejs/adapter-static';
import adapterAuto from '@sveltejs/adapter-auto';
import type { KitConfig } from '@sveltejs/kit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

// The Svelte inspector's "open in editor" action shells out via
// `launch-editor`, which tries LAUNCH_EDITOR first, then guesses from the
// editors currently running, and only then reads EDITOR/VISUAL. Setting
// LAUNCH_EDITOR here makes it always open VS Code, whatever else is running.
process.env.LAUNCH_EDITOR = 'code';

// Two targets from one codebase:
// - web (default): the whole site - public pages, /app, admin tools, /api.
// - mobile (`vite build --mode mobile`): a static SPA for the Capacitor shell.
//   Server routes drop out; the app calls the web deployment's /api instead
//   (VITE_API_BASE in .env.mobile).
// CSP: the real defence for the Supabase session in localStorage (XSS = token theft).
// Built pages only (the dev server's HMR needs more). Kit adds nonces/hashes for its own
// scripts. Inline style attributes stay allowed (text colours, Svelte style bindings).
function csp(mode: string): KitConfig['csp'] {
	const env = loadEnv(mode, process.cwd(), 'VITE_');
	type Host = `https://${string}.${string}`;
	const origin = (url?: string): Host[] => (url ? [new URL(url).origin as Host] : []);
	const supabase = origin(env.VITE_SUPABASE_URL);
	const sentry: Host[] = env.VITE_SENTRY_DSN
		? ['https://*.ingest.sentry.io', 'https://*.ingest.de.sentry.io']
		: [];
	return {
		mode: 'auto',
		directives: {
			'default-src': ['self'],
			'script-src': ['self'],
			'style-src': ['self', 'unsafe-inline'],
			'img-src': ['self', 'data:', 'blob:', ...supabase],
			'media-src': ['self', 'blob:', ...supabase],
			'font-src': ['self', 'data:'],
			'connect-src': ['self', ...supabase, ...sentry, ...origin(env.VITE_API_BASE)],
			'object-src': ['none'],
			'base-uri': ['self'],
			'form-action': ['self'],
			'frame-ancestors': ['none']
		}
	};
}

export default defineConfig(({ mode, command }) => ({
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
			...(command === 'build' && { csp: csp(mode) }),
			// Install + push reminders are a web feature (src/service-worker.ts).
			serviceWorker: { register: mode !== 'mobile' },

			// Svelte inspector: hold Alt (Option on Mac) and click any element in
			// the dev server to jump straight to its source in your editor.
			vitePlugin: {
				inspector: true
			}
		})
	]
}));
