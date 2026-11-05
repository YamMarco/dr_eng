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
	import { i18n } from '$lib/i18n/index.svelte';

	// Invisible unless Cloudflare wants a click (or always shown, `visible`). Tokens are
	// single-use: call reset() after every request that spent one. `status` lets a form
	// hold its button until solved; 'failed' (blocked script) unlocks, Supabase decides.

	type Props = { visible?: boolean; status?: 'pending' | 'solved' | 'failed' };
	let { visible = false, status = $bindable() }: Props = $props();

	let el: HTMLDivElement;
	/** Cloudflare's script has arrived and the widget is drawn; until then the form says so. */
	let rendered = $state(false);
	let slow = $state(false);
	let t = $derived(i18n.dict.login);
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
		status = 'pending';
		if (api && id) api.reset(id);
	}

	// A slow or blocked script (a slow connection, an ad blocker) leaves nothing to see: say what is going on.
	$effect(() => {
		if (rendered) return void (slow = false);
		const timer = setTimeout(() => (slow = true), 8000);
		return () => clearTimeout(timer);
	});

	$effect(() => {
		let gone = false;
		load()
			.then((ts) => {
				if (gone) return;
				api = ts;
				rendered = true;
				id = ts.render(el, {
					sitekey: CAPTCHA_KEY,
					language: 'he',
					theme: themeStore.resolved,
					size: window.innerWidth < 340 ? 'compact' : 'normal',
					appearance: visible ? 'always' : 'interaction-only',
					callback: (value: string) => {
						token = value;
						broken = false;
						status = 'solved';
						settle(value);
					},
					'expired-callback': () => ((token = null), (status = 'pending')),
					'error-callback': (code: string) => {
						console.warn('turnstile error', code);
						token = null;
						broken = true;
						status = 'failed';
						settle();
					}
				});
			})
			.catch(() => {
				broken = true;
				status = 'failed';
				settle();
			});
		return () => {
			gone = true;
			if (api && id) api.remove(id);
			id = undefined;
		};
	});
</script>

{#if !rendered && status !== 'failed'}
	<p
		role="status"
		class="rounded-2xl border border-line bg-canvas px-4 py-3 text-center text-sm font-semibold text-muted"
	>
		{slow ? t.captchaSlow : t.captchaLoading}
	</p>
{/if}
<!-- Never display:none - Turnstile stalls in a hidden container. -->
<div bind:this={el} data-status={status} class="flex justify-center"></div>
