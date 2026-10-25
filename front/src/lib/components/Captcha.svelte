<script lang="ts" module>
	// Cloudflare Turnstile, enforced by Supabase Auth (Attack Protection > CAPTCHA):
	// sign in / up, reset and resend need a fresh token. Off without a site key.
	export const CAPTCHA_KEY: string | undefined = import.meta.env.VITE_TURNSTILE_SITE_KEY;

	type Turnstile = {
		render(el: HTMLElement, options: Record<string, unknown>): string;
		reset(id: string): void;
		remove(id: string): void;
	};
	declare global {
		interface Window {
			turnstile?: Turnstile;
		}
	}

	let loading: Promise<Turnstile> | undefined;
	function load(): Promise<Turnstile> {
		loading ??= new Promise((ok, fail) => {
			const script = document.createElement('script');
			script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
			script.async = true;
			script.onload = () => ok(window.turnstile!);
			script.onerror = () => ((loading = undefined), fail(new Error('turnstile load failed')));
			document.head.append(script);
		});
		return loading;
	}
</script>

<script lang="ts">
	import { themeStore } from '$lib/theme.svelte';

	// Invisible unless Cloudflare wants a click. Tokens are single-use: call reset()
	// after every request that spent one.

	let el: HTMLDivElement;
	let api: Turnstile | undefined;
	let id: string | undefined;
	let token: string | null = null;
	let broken = false;
	let waiting: ((value?: string) => void)[] = [];

	function settle(value?: string) {
		for (const done of waiting) done(value);
		waiting = [];
	}

	/** The token once Cloudflare issues it; undefined if the widget failed or took too
	 * long (blocked script, hostname not allowed): callers go on and Supabase decides. */
	export function getToken(timeout = 8000): Promise<string | undefined> {
		if (token || broken) return Promise.resolve(token ?? undefined);
		return new Promise((done) => {
			waiting.push(done);
			setTimeout(() => {
				if (!token) console.warn('turnstile: no token after', timeout, 'ms');
				done(token ?? undefined);
			}, timeout);
		});
	}

	export function reset() {
		token = null;
		if (api && id) api.reset(id);
	}

	$effect(() => {
		let gone = false;
		load()
			.then((ts) => {
				if (gone) return;
				api = ts;
				id = ts.render(el, {
					sitekey: CAPTCHA_KEY,
					language: 'he',
					theme: themeStore.resolved,
					appearance: 'interaction-only',
					callback: (value: string) => {
						token = value;
						broken = false;
						settle(value);
					},
					'expired-callback': () => (token = null),
					'error-callback': (code: string) => {
						console.warn('turnstile error', code);
						token = null;
						broken = true;
						settle();
					}
				});
			})
			.catch(() => {
				broken = true;
				settle();
			});
		return () => {
			gone = true;
			if (api && id) api.remove(id);
			id = undefined;
		};
	});
</script>

<!-- Never display:none - Turnstile stalls in a hidden container. -->
<div bind:this={el} class="flex justify-center"></div>
