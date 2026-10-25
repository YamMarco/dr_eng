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
	// eslint-disable-next-line no-useless-assignment
	let { token = $bindable(null) }: { token?: string | null } = $props();

	let el: HTMLDivElement;
	let api: Turnstile | undefined;
	let id: string | undefined;

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
					callback: (value: string) => (token = value),
					'expired-callback': () => (token = null),
					'error-callback': () => (token = null)
				});
			})
			.catch(() => {});
		return () => {
			gone = true;
			if (api && id) api.remove(id);
			id = undefined;
		};
	});
</script>

<div bind:this={el} class="flex justify-center empty:hidden"></div>
