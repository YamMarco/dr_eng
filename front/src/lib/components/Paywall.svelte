<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import CodeField from '$lib/components/CodeField.svelte';
	import { auth } from '$lib/auth.svelte';
	import { placeOrder, type CheckoutError } from '$lib/access.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { MOBILE_BUILD } from '$lib/platform';

	// Signed in, no active plan. Redeeming a code activates in place (the layout
	// then shows the app). The plans page is web-only: store apps can't link out
	// to an outside purchase. `lock`: a module the plan lacks (COBE, or the rest of
	// the app on a COBE-only plan), shown inside the app.

	let { lock }: { lock?: 'app' | 'cobe' } = $props();

	let t = $derived(i18n.dict.paywall);
	let title = $derived(lock ? t.locks[lock].title : t.title);
	let body = $derived(lock ? t.locks[lock].body : t.body);
	let errors = $derived(i18n.dict.checkout.errors);
	let code = $state('');
	let busy = $state(false);
	let failed = $state<string | null>(null);

	async function redeem(value: string) {
		busy = true;
		failed = null;
		try {
			const result = await placeOrder(null, value);
			if (result.status === 'redirect') failed = errors['payments-unavailable'];
		} catch (error) {
			failed = errors[error as CheckoutError] ?? errors.network;
		} finally {
			busy = false;
		}
	}
</script>

<main class="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-12">
	<div in:fly={{ y: 12, duration: 250, easing: cubicOut }}>
		{#if !MOBILE_BUILD && !lock}
			<a
				href={resolve('/')}
				class="-ms-2 mb-4 flex min-h-11 w-fit items-center rounded-lg px-2 text-sm font-semibold text-brand-dark hover:underline active:scale-[0.98]"
			>
				{i18n.dict.login.backToSite}
			</a>
		{/if}
		<h1 class="text-3xl font-extrabold tracking-tight">{title}</h1>
		<p class="mt-2 leading-relaxed text-muted">{body}</p>

		<div class="mt-8 flex flex-col gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 ring-line/70">
			<CodeField
				bind:value={code}
				label={i18n.dict.checkout.couponLabel}
				action={busy ? i18n.dict.checkout.checking : t.redeem}
				{busy}
				error={failed}
				onsubmit={redeem}
			/>
			{#if !MOBILE_BUILD}
				<Button variant="secondary" href={resolve('/plans')}>{t.plans}</Button>
			{/if}
		</div>

		{#if !lock}
			<button
				type="button"
				class="mx-auto mt-6 block min-h-11 rounded-lg px-2 text-sm font-semibold text-muted hover:text-ink active:scale-[0.98]"
				onclick={() => auth.signOut()}
			>
				{t.signOut}
			</button>
		{/if}
	</div>
</main>
