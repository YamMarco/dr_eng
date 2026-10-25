<script lang="ts">
	import { Check, Minus, Mic, Sparkles } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Segmented from '$lib/components/Segmented.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import OfferPrice from '$lib/site/OfferPrice.svelte';
	import { reveal } from '$lib/site/reveal';
	import {
		COBE_ADDON,
		FEATURED_OFFER,
		OFFERS,
		TUTOR_HOUR,
		formatPrice,
		monthlyShekels,
		planById,
		withCobe,
		yearSavingPercent,
		type Cycle,
		type OfferId
	} from '$lib/plans';

	let t = $derived(i18n.dict.plans);
	let cycle = $state<Cycle>('month');
	// COBE added per tier; the card switch and the table row share it.
	let cobeOn = $state<Partial<Record<OfferId, boolean>>>({});

	const tiers = OFFERS.filter((offer) => offer.id !== 'cobe');
	const cobeOffer = OFFERS.find((offer) => offer.id === 'cobe')!;
	type Offer = (typeof OFFERS)[number];

	/** The plan a card sells right now, and its yearly saving. */
	function pick(offer: Offer) {
		const on = !!cobeOn[offer.id];
		const month = planById(withCobe(offer.month, on))!;
		const year = planById(withCobe(offer.year, on))!;
		return { plan: cycle === 'month' ? month : year, saving: yearSavingPercent(month, year) };
	}

	const maxSaving = Math.max(
		...OFFERS.map((offer) => yearSavingPercent(planById(offer.month)!, planById(offer.year)!))
	);
	let addonPrice = $derived(
		formatPrice(Math.round(COBE_ADDON[cycle] / (cycle === 'month' ? 1 : 12) / 100) * 100)
	);

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

{#snippet priceLine(offer: Offer, big: boolean)}
	{@const { plan, saving } = pick(offer)}
	<div class="flex flex-col gap-1">
		<p class="flex items-baseline gap-1">
			<span class="{big ? 'text-5xl' : 'text-4xl'} font-extrabold">
				<OfferPrice value={monthlyShekels(plan)} />
			</span>
			<span class="text-lg font-bold">{t.currency}</span>
			<span class="text-sm text-muted">{t.perMonth}</span>
			{#if plan.cobe}
				<span
					class="ms-1 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-bold motion-safe:animate-rise"
				>
					{t.cobeIncluded}
				</span>
			{/if}
		</p>
		<p class="flex min-h-11 flex-col items-start gap-1 text-sm text-muted">
			{#if cycle === 'year'}
				{t.paidOnce(formatPrice(plan.price), plan.months)}
				<span
					class="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-bold text-brand motion-safe:animate-rise"
				>
					{t.save(saving)}
				</span>
			{:else}
				{t.paidMonthly}
			{/if}
		</p>
	</div>
{/snippet}

{#snippet cobeSwitch(offer: Offer)}
	{@const on = !!cobeOn[offer.id]}
	<div
		class="flex items-center gap-3 rounded-2xl px-3 py-1 transition-colors duration-200 {on
			? 'bg-accent-soft'
			: 'bg-canvas'}"
	>
		<Toggle
			checked={on}
			label="{t.addCobe} - {t.offers[offer.id].name}"
			onchange={(checked) => (cobeOn[offer.id] = checked)}
		/>
		<div class="flex min-w-0 flex-1 flex-col py-1 leading-tight">
			<span class="flex items-center gap-1 text-sm font-bold">
				<Mic size={14} aria-hidden="true" />
				{t.addCobe}
			</span>
			<span class="text-xs text-muted">{t.addCobeHint}</span>
		</div>
		<span class="text-sm font-bold tabular-nums" dir="ltr">{t.addCobePrice(addonPrice)}</span>
	</div>
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
		<Segmented
			label={t.cycleLabel}
			value={cycle}
			options={[
				{ value: 'month', label: t.cycleMonth },
				{ value: 'year', label: t.cycleYear }
			]}
			onchange={(value) => (cycle = value)}
		/>
		<p
			class="rounded-full bg-accent-soft px-3 py-0.5 text-xs font-bold transition-transform duration-200 {cycle ===
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
				{@render priceLine(offer, featured)}
				<ul class="flex flex-1 flex-col gap-2">
					{#each item.features as feature (feature)}
						<li class="flex items-start gap-2 leading-snug">
							<Check size={18} class="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
							{feature}
						</li>
					{/each}
				</ul>
				{@render cobeSwitch(offer)}
				<Button
					variant={featured ? 'primary' : 'secondary'}
					href={checkoutHref(pick(offer).plan.id)}
				>
					{featured ? t.chooseFeatured : t.choose}
				</Button>
			</li>
		{/each}
	</ul>

	<!-- Full comparison: the same choices as the cards, row by row. -->
	<section
		{@attach reveal}
		class="mx-auto flex w-full max-w-3xl flex-col gap-4"
		aria-labelledby="compare-title"
	>
		<h2 id="compare-title" class="text-center text-2xl font-extrabold">{t.compareTitle}</h2>
		<table class="w-full table-fixed border-separate border-spacing-0 text-sm sm:text-base">
			<colgroup>
				<col class="w-[34%] sm:w-[40%]" />
				{#each tiers as offer (offer.id)}<col />{/each}
			</colgroup>
			<thead>
				<tr>
					<th class="sticky top-16 z-10 bg-canvas py-3 text-start align-bottom text-muted">
						<span class="text-xs font-semibold sm:text-sm">{t.compareFeature}</span>
					</th>
					{#each tiers as offer (offer.id)}
						{@const featured = offer.id === FEATURED_OFFER}
						<th
							class="sticky top-16 z-10 px-1 py-3 align-bottom {featured
								? 'rounded-t-2xl bg-brand-soft'
								: 'bg-canvas'}"
						>
							<span class="block font-bold">{t.offers[offer.id].name}</span>
							<span class="block text-lg font-extrabold sm:text-2xl">
								<OfferPrice value={monthlyShekels(pick(offer).plan)} />
								<span class="text-sm">{t.currency}</span>
							</span>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each t.compareRows as row (row.label)}
					<tr>
						<th scope="row" class="border-t border-line py-3 pe-2 text-start font-normal">
							{row.label}
						</th>
						{#each row.values as value, i (i)}
							<td
								class="border-t border-line px-1 py-3 text-center {tiers[i].id === FEATURED_OFFER
									? 'bg-brand-soft'
									: ''}"
							>
								{#if value === true}
									<Check size={20} class="mx-auto text-brand" aria-label="✓" />
								{:else if value === false}
									<Minus size={18} class="mx-auto text-line" aria-label="-" />
								{:else}
									<span class="text-xs font-bold sm:text-sm">{value}</span>
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
				<tr>
					<th scope="row" class="border-t border-line py-3 pe-2 text-start font-normal">
						<span class="flex items-center gap-1 font-bold">
							<Mic size={14} aria-hidden="true" />
							COBE
						</span>
						<span class="text-xs text-muted">{t.addCobeHint}</span>
					</th>
					{#each tiers as offer (offer.id)}
						<td
							class="border-t border-line px-1 py-2 text-center {offer.id === FEATURED_OFFER
								? 'bg-brand-soft'
								: ''}"
						>
							<div class="flex flex-col items-center">
								<Toggle
									checked={!!cobeOn[offer.id]}
									label="{t.addCobe} - {t.offers[offer.id].name}"
									onchange={(checked) => (cobeOn[offer.id] = checked)}
								/>
								<span class="text-xs font-bold tabular-nums" dir="ltr"
									>{t.addCobePrice(addonPrice)}</span
								>
							</div>
						</td>
					{/each}
				</tr>
				<tr>
					<td class="pt-3"></td>
					{#each tiers as offer (offer.id)}
						{@const featured = offer.id === FEATURED_OFFER}
						<td class="px-1 pt-3 pb-3 {featured ? 'rounded-b-2xl bg-brand-soft' : ''}">
							<a
								href="{resolve('/checkout')}?plan={pick(offer).plan.id}"
								class="flex min-h-11 items-center justify-center rounded-xl px-1 text-sm font-bold transition duration-100 active:scale-[0.97] {featured
									? 'bg-brand text-white hover:bg-brand-dark'
									: 'border-2 border-brand text-brand hover:bg-brand-soft'}"
							>
								{t.choose}
							</a>
						</td>
					{/each}
				</tr>
			</tbody>
		</table>
	</section>

	<!-- COBE alone -->
	<section
		{@attach reveal}
		class="flex flex-col gap-4 rounded-3xl bg-accent-soft p-6 ring-1 ring-accent/40 sm:flex-row sm:items-center sm:gap-8"
		aria-labelledby="cobe-title"
	>
		<div class="flex flex-1 flex-col gap-2">
			<h2 id="cobe-title" class="flex items-center gap-2 text-xl font-extrabold">
				<Mic size={20} aria-hidden="true" />
				{t.cobeOnlyTitle}
			</h2>
			<p class="text-pretty text-muted">{t.cobeOnlyBody}</p>
		</div>
		<div class="flex flex-col gap-2 sm:w-56 sm:shrink-0">
			<p class="flex items-baseline gap-1">
				<span class="text-3xl font-extrabold">
					<OfferPrice value={monthlyShekels(pick(cobeOffer).plan)} />
				</span>
				<span class="font-bold">{t.currency}</span>
				<span class="text-sm text-muted">{t.perMonth}</span>
			</p>
			<Button variant="secondary" href={checkoutHref(pick(cobeOffer).plan.id)}>
				{t.cobeOnlyChoose}
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
