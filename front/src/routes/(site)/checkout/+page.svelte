<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import CodeField from '$lib/components/CodeField.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import LoginScreen from '$lib/components/LoginScreen.svelte';
	import { auth } from '$lib/auth.svelte';
	import {
		access,
		fetchQuote,
		placeOrder,
		type CheckoutError,
		type Quote
	} from '$lib/access.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import {
		COBE_ADDON,
		DEFAULT_PLAN,
		baseId,
		cycleOf,
		formatPrice,
		isBundle,
		isPurchasable,
		planById,
		withCobe
	} from '$lib/plans';

	// /checkout?plan=<id>&coupon=<code>: plan -> account -> code -> activate or pay.
	// A tester link carries the code; sign-up's confirmation email returns here
	// with the same query, so nothing is lost on the way.

	let t = $derived(i18n.dict.checkout);
	const requested = planById(page.url.searchParams.get('plan'));
	let plan = $state(isPurchasable(requested) ? requested : planById(DEFAULT_PLAN)!);
	// Order bump: COBE can be added to any plan without it built in.
	let canAddCobe = $derived(!!planById(withCobe(baseId(plan), true)));
	let code = $state(page.url.searchParams.get('coupon') ?? '');

	let quote = $state<Quote | null>(null);
	let busy = $state(false);
	let codeError = $state<string | null>(null);
	let orderError = $state<string | null>(null);
	let doneUntil = $state<string | null>(null);

	let signedIn = $derived(auth.loggedIn && !!auth.session);
	$effect(() => access.sync(auth.session?.user.id));

	const errorText = (error: unknown) => t.errors[error as CheckoutError] ?? t.errors.network;

	async function loadQuote(coupon: string | null) {
		busy = true;
		codeError = null;
		orderError = null;
		try {
			quote = await fetchQuote(plan.id, coupon);
			if (quote.couponProblem) codeError = errorText(quote.couponProblem);
		} catch (error) {
			orderError = errorText(error);
		} finally {
			busy = false;
		}
	}

	// First quote once signed in, with the link's code if it had one.
	let quoted = false;
	$effect(() => {
		if (!signedIn || quoted) return;
		quoted = true;
		loadQuote(code.trim() || null);
	});

	async function submit() {
		busy = true;
		orderError = null;
		try {
			const result = await placeOrder(plan.id, quote?.coupon?.code ?? null);
			if (result.status === 'redirect') location.href = result.url;
			else doneUntil = result.accessUntil;
		} catch (error) {
			orderError = errorText(error);
		} finally {
			busy = false;
		}
	}

	function setCobe(on: boolean) {
		plan = planById(withCobe(baseId(plan), on))!;
		loadQuote(quote?.coupon?.code ?? (code.trim() || null));
	}

	let name = $derived(
		i18n.dict.plans.items[baseId(plan)].name + (isBundle(plan) ? i18n.dict.plans.withCobe : '')
	);
	const money = (agorot: number) => `${formatPrice(agorot)} ${i18n.dict.plans.currency}`;
	const date = (iso: string) => new Date(iso).toLocaleDateString('he-IL');
	const row = 'flex justify-between gap-4';
</script>

<svelte:head>
	<title>{t.title} | {i18n.dict.site.brand}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

{#if !auth.ready}
	<main class="flex-1"></main>
{:else if !auth.enabled}
	<main class="mx-auto w-full max-w-sm flex-1 px-4 py-12">
		<p class="leading-relaxed text-muted">{t.errors.unavailable}</p>
	</main>
{:else if !signedIn}
	<LoginScreen startWith="signup" returnTo={page.url.href} note={t.signInFirst} />
{:else if doneUntil}
	<main
		class="relative mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-4 px-4 py-12 text-center"
	>
		<Confetti />
		<div class="flex flex-col gap-3" in:fly={{ y: 16, duration: 300, easing: cubicOut }}>
			<h1 class="text-3xl font-extrabold tracking-tight">{t.doneTitle}</h1>
			<p class="text-lg text-muted">{t.doneBody}</p>
			<p class="text-sm text-muted">{t.until} {date(doneUntil)}</p>
			<Button href={resolve('/app')} class="mt-4">{t.toApp}</Button>
		</div>
	</main>
{:else}
	<main class="mx-auto flex w-full max-w-md flex-1 flex-col gap-4 px-4 py-12">
		<h1 class="text-3xl font-extrabold tracking-tight motion-safe:animate-rise">{t.title}</h1>

		<section
			class="flex flex-col gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 ring-line/70 motion-safe:animate-rise"
		>
			<div class={row}>
				<div>
					<p class="text-sm text-muted">{t.yourPlan}</p>
					<p class="text-lg font-bold">{name}</p>
				</div>
				<a
					href={resolve('/plans')}
					class="min-h-11 content-center text-sm font-semibold text-brand-dark hover:underline"
				>
					{t.change}
				</a>
			</div>

			<div class="{row} border-t border-line pt-4 text-sm">
				<p class="min-w-0 truncate">
					<span class="text-muted">{t.signedInAs}</span>
					<span class="font-semibold" dir="ltr">{auth.email}</span>
				</p>
				<button
					type="button"
					class="shrink-0 font-semibold text-muted hover:text-ink"
					onclick={() => auth.signOut()}
				>
					{t.notYou}
				</button>
			</div>

			{#if canAddCobe}
				<div
					class="flex items-center gap-3 rounded-2xl px-4 py-2 transition-colors duration-200 {isBundle(
						plan
					)
						? 'bg-accent-soft'
						: 'bg-canvas'}"
				>
					<div class="flex min-w-0 flex-1 flex-col leading-snug">
						<span class="font-bold">{t.bumpTitle}</span>
						<span class="text-sm text-muted">
							{t.bumpBody(formatPrice(COBE_ADDON[cycleOf(plan)]))}
						</span>
					</div>
					<Toggle checked={isBundle(plan)} label={t.bumpTitle} onchange={setCobe} />
				</div>
			{/if}

			{#if access.active && access.until}
				<p class="rounded-2xl bg-brand-soft px-4 py-3 text-sm">{t.alreadyActive}</p>
			{/if}

			<div class="border-t border-line pt-4">
				<CodeField
					bind:value={code}
					label={t.couponLabel}
					action={t.apply}
					{busy}
					error={codeError}
					onsubmit={(value) => loadQuote(value)}
				/>
			</div>

			{#if quote}
				<dl
					class="flex flex-col gap-1.5 border-t border-line pt-4"
					in:fly={{ y: 6, duration: 200 }}
				>
					<div class={row}>
						<dt class="text-muted">{t.price}</dt>
						<dd class="tabular-nums">{money(quote.price)}</dd>
					</div>
					{#if quote.discount}
						<div class="{row} text-brand-dark" in:fly={{ y: 6, duration: 200 }}>
							<dt>{t.discount} ({quote.coupon?.code})</dt>
							<dd class="tabular-nums">-{money(quote.discount)}</dd>
						</div>
					{/if}
					<div class="{row} text-lg font-bold">
						<dt>{t.total}</dt>
						<dd class="tabular-nums">{money(quote.total)}</dd>
					</div>
				</dl>
			{/if}

			<Button disabled={busy || !quote} onclick={submit}>
				{busy ? t.checking : quote?.total === 0 ? t.activate : t.pay}
			</Button>
			{#if quote?.total}
				<p class="-mt-2 text-center text-sm text-muted">{i18n.dict.plans.guarantee}</p>
			{/if}

			{#if orderError}
				<p
					class="rounded-2xl bg-miss-soft px-4 py-3 text-sm font-semibold text-miss"
					role="alert"
					in:fly={{ y: 6, duration: 200 }}
				>
					{orderError}
				</p>
			{/if}
		</section>
	</main>
{/if}
