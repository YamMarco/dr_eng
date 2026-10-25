<script lang="ts">
	import { Check, Mic, Sparkles } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import OfferPrice from '$lib/site/OfferPrice.svelte';
	import { reveal } from '$lib/site/reveal';
	import {
		FEATURED_OFFER,
		OFFERS,
		TUTOR_HOUR,
		formatPrice,
		monthlyShekels,
		planById,
		yearSavingPercent,
		type Cycle
	} from '$lib/plans';

	let t = $derived(i18n.dict.plans);
	let cycle = $state<Cycle>('month');

	const offers = OFFERS.map((offer) => {
		const month = planById(offer.month)!;
		const year = planById(offer.year)!;
		return { ...offer, plans: { month, year }, saving: yearSavingPercent(month, year) };
	});
	const tiers = offers.filter((offer) => offer.id !== 'cobe');
	const cobe = offers.find((offer) => offer.id === 'cobe')!;
	const maxSaving = Math.max(...offers.map((offer) => offer.saving));

	// The anchor: a month of weekly private lessons against the featured offer's month.
	const tutorMonth = (TUTOR_HOUR * 4) / 100;
	const featuredMonth = monthlyShekels(planById(`${FEATURED_OFFER}-month`)!);
	let barsIn = $state(false);
	$effect(() => {
		requestAnimationFrame(() => (barsIn = true));
	});

	const checkoutHref = (id: string) => `${resolve('/checkout')}?plan=${id}`;
</script>

<svelte:head>
	<title>{t.title} | {i18n.dict.site.brand}</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

{#snippet priceBlock(offer: (typeof offers)[number], big: boolean)}
	{@const plan = offer.plans[cycle]}
	<div class="flex flex-col gap-1">
		<p class="flex items-baseline gap-1">
			<span class="{big ? 'text-5xl' : 'text-4xl'} font-extrabold">
				<OfferPrice value={monthlyShekels(plan)} />
			</span>
			<span class="text-lg font-bold">{t.currency}</span>
			<span class="text-sm text-muted">{t.perMonth}</span>
		</p>
		<p class="flex min-h-11 flex-col items-start gap-1 text-sm text-muted">
			{#if cycle === 'year'}
				{t.paidOnce(formatPrice(plan.price), plan.months)}
				<span
					class="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-bold text-brand motion-safe:animate-rise"
				>
					{t.save(offer.saving)}
				</span>
			{:else}
				{t.paidMonthly}
			{/if}
		</p>
	</div>
{/snippet}

{#snippet features(list: string[])}
	<ul class="flex flex-1 flex-col gap-2">
		{#each list as feature (feature)}
			<li class="flex items-start gap-2 leading-snug">
				<Check size={18} class="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
				{feature}
			</li>
		{/each}
	</ul>
{/snippet}

<main class="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-12 sm:px-6">
	<header class="mx-auto flex max-w-2xl flex-col gap-3 text-center motion-safe:animate-rise">
		<p class="text-sm font-bold text-brand">{t.title}</p>
		<h1 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{t.headline}</h1>
		<p class="text-lg text-pretty text-muted">{t.subtitle}</p>
	</header>

	<!-- Price anchor: a private tutor vs. the featured offer. -->
	<section
		class="mx-auto flex w-full max-w-xl flex-col gap-3 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-line/70 motion-safe:animate-rise"
		style="animation-delay: {staggerDelay(1)}ms"
		aria-labelledby="anchor-title"
	>
		<h2 id="anchor-title" class="font-bold">{t.anchorTitle}</h2>
		{#each [{ label: t.anchorTutor, value: tutorMonth, us: false }, { label: t.anchorUs, value: featuredMonth, us: true }] as row (row.label)}
			<div class="flex flex-col gap-1">
				<div class="flex items-baseline justify-between gap-2 text-sm">
					<span class={row.us ? 'font-bold' : 'text-muted'}>{row.label}</span>
					<span
						class="font-extrabold tabular-nums {row.us ? 'text-brand' : 'text-muted line-through'}"
					>
						{row.value}
						{t.currency}
					</span>
				</div>
				<div class="h-3 overflow-hidden rounded-full bg-line/60">
					<div
						class="h-full rounded-full transition-[width] duration-700 ease-out {row.us
							? 'bg-brand'
							: 'bg-miss/40'}"
						style="width: {barsIn ? (row.value / tutorMonth) * 100 : 0}%"
					></div>
				</div>
			</div>
		{/each}
	</section>

	<!-- Billing cycle -->
	<div class="flex flex-col items-center gap-2">
		<div
			role="group"
			aria-label={t.cycleLabel}
			class="inline-flex rounded-2xl bg-line/60 p-1 text-sm font-semibold"
		>
			{#each [{ id: 'month', label: t.cycleMonth }, { id: 'year', label: t.cycleYear }] as option (option.id)}
				<button
					type="button"
					aria-pressed={cycle === option.id}
					onclick={() => (cycle = option.id as Cycle)}
					class="min-h-11 rounded-xl px-5 text-muted transition duration-100 hover:text-ink active:scale-[0.98] aria-pressed:bg-surface aria-pressed:text-ink aria-pressed:shadow-sm"
				>
					{option.label}
				</button>
			{/each}
		</div>
		<p
			class="rounded-full bg-accent-soft px-3 py-0.5 text-xs font-bold text-ink transition-transform duration-200 {cycle ===
			'year'
				? 'scale-105'
				: ''}"
		>
			{t.cycleYear}: {t.saveUpTo(maxSaving)}
		</p>
	</div>

	<!-- Tiers -->
	<ul class="grid items-stretch gap-4 md:grid-cols-3">
		{#each tiers as offer, i (offer.id)}
			{@const item = t.offers[offer.id]}
			{@const featured = offer.id === FEATURED_OFFER}
			<li
				class="relative flex flex-col gap-4 rounded-3xl bg-surface p-6 shadow-sm motion-safe:animate-rise {featured
					? 'order-first ring-2 ring-brand md:order-none md:-my-3 md:py-9 md:shadow-lg'
					: 'ring-1 ring-line/70'}"
				style="animation-delay: {staggerDelay(i + 2)}ms"
			>
				{#if featured}
					<span
						class="absolute inset-s-6 -top-3 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-0.5 text-xs font-bold text-white"
					>
						<Sparkles size={12} aria-hidden="true" />
						{t.popular}
					</span>
				{/if}
				<div>
					<h2 class="text-xl font-bold">{item.name}</h2>
					<p class="text-sm text-muted">{item.tagline}</p>
				</div>
				{@render priceBlock(offer, featured)}
				{@render features(item.features)}
				<Button
					variant={featured ? 'primary' : 'secondary'}
					href={checkoutHref(offer.plans[cycle].id)}
				>
					{featured ? t.chooseFeatured : t.choose}
				</Button>
			</li>
		{/each}
	</ul>

	<!-- COBE: a separate product -->
	<section
		{@attach reveal}
		class="flex flex-col gap-6 rounded-3xl bg-accent-soft p-6 ring-1 ring-accent/40 md:flex-row md:items-center md:gap-10 md:p-8"
		aria-labelledby="cobe-title"
	>
		<div class="flex flex-1 flex-col gap-3">
			<span
				class="inline-flex w-fit items-center gap-1 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-ink"
			>
				<Mic size={12} aria-hidden="true" />
				{t.separate}
			</span>
			<h2 id="cobe-title" class="text-2xl font-extrabold">{t.cobeTitle}</h2>
			<p class="text-pretty text-muted">{t.cobeWhy}</p>
			{@render features(t.offers.cobe.features)}
		</div>
		<div class="flex flex-col gap-4 rounded-2xl bg-surface p-5 shadow-sm md:w-72 md:shrink-0">
			<p class="font-bold">{t.offers.cobe.name}</p>
			{@render priceBlock(cobe, false)}
			<Button variant="secondary" href={checkoutHref(cobe.plans[cycle].id)}>
				{t.cobeChoose}
			</Button>
		</div>
	</section>

	<!-- FAQ -->
	<section {@attach reveal} class="mx-auto flex w-full max-w-2xl flex-col gap-3">
		<h2 class="text-center text-2xl font-extrabold">{t.faqTitle}</h2>
		{#each t.faq as entry (entry.q)}
			<details class="group rounded-2xl bg-surface ring-1 ring-line/70">
				<summary
					class="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 font-semibold transition duration-100 hover:text-brand active:scale-[0.99]"
				>
					{entry.q}
					<span
						class="text-xl leading-none text-muted transition-transform duration-200 group-open:rotate-45"
						aria-hidden="true">+</span
					>
				</summary>
				<p class="px-5 pb-4 text-pretty text-muted">{entry.a}</p>
			</details>
		{/each}
	</section>

	<div class="flex flex-col items-center gap-1 text-center text-sm text-muted">
		<p>{t.haveCode}</p>
		<p>{t.freeSoon}</p>
		<p>{t.placeholder}</p>
	</div>
</main>
