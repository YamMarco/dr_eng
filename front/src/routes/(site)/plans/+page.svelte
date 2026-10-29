<script lang="ts">
	import { Check, Minus, Mic, ShieldCheck, Sparkles, Video } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
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
		CYCLES,
		FEATURED_OFFER,
		GUARANTEE,
		INSTALLMENTS,
		TIERS,
		TUTOR_HOUR,
		formatPrice,
		isLaunch,
		launchDaysLeft,
		monthlyShekels,
		savingPercent,
		planById,
		planId,
		type Cycle,
		type OfferId,
		type Plan
	} from '$lib/plans';

	let t = $derived(i18n.dict.plans);

	// Prices depend on the date. The page is pre-rendered, so the real date is set once
	// it runs in the browser. The debug panel (dev, or ?debug) picks another date and the
	// pending promises, to preview each version; checkout always prices on the server's date.
	let mounted = $state(false);
	onMount(() => (mounted = true));
	let debug = $derived(mounted && (dev || new URLSearchParams(location.search).has('debug')));
	let debugDate = $state('');
	let showGuarantee = $state(GUARANTEE);
	let showInstallments = $state(INSTALLMENTS);
	let now = $derived.by(() => {
		if (!mounted) return new Date(); // pre-rendered: the build date, replaced in the browser
		return debugDate ? new Date(`${debugDate}T12:00:00+02:00`) : new Date();
	});

	let passOn = $derived(!!planById('premium-pass', now));
	// Longest first; the pass only while it's sold.
	let cycles = $derived(CYCLES.filter((c) => c !== 'pass' || passOn).reverse());
	let chosen = $state<Cycle>('pass');
	let cycle = $derived<Cycle>(cycles.includes(chosen) ? chosen : cycles[0]);
	/** The longest cycle on sale: what a monthly price nudges toward. */
	let best = $derived(cycles[0]);
	let saving = $derived(
		Math.max(...TIERS.map((offer) => savingPercent(offer, cycle === 'month' ? best : cycle)))
	);
	let launch = $derived(isLaunch(now));
	let daysLeft = $derived(launchDaysLeft(now));
	// COBE added per plan, off by default; the card switch and the table row share it.
	let cobeOn = $state<Partial<Record<OfferId, boolean>>>({});

	const plan = (offer: OfferId, c: Cycle = cycle, cobe = !!cobeOn[offer]): Plan =>
		planById(planId(offer, c, cobe), now)!;
	const perMonth = (p: Plan) => monthlyShekels(p.price, p.months);

	let addonPrice = $derived(formatPrice(COBE_ADDON[cycle]));
	let lesson = $derived(planById('lesson', now)!);

	// The anchor: a month of weekly private lessons against the featured plan's month.
	const tutorMonth = (TUTOR_HOUR * 4) / 100;
	let featuredMonth = $derived(perMonth(plan(FEATURED_OFFER, cycle, false)));
	let barsIn = $state(false);
	$effect(() => {
		requestAnimationFrame(() => (barsIn = true));
	});

	let faq = $derived(
		t.faq.filter(
			(entry) =>
				!entry.needs ||
				(entry.needs === 'launch' && launch) ||
				(entry.needs === 'guarantee' && showGuarantee) ||
				(entry.needs === 'installments' && showInstallments)
		)
	);

	const checkoutHref = (id: string) => `${resolve('/checkout')}?plan=${id}`;
</script>

<svelte:head>
	<title>{t.title} | {i18n.dict.site.brand}</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

{#snippet priceLine(offer: OfferId, big: boolean)}
	{@const p = plan(offer)}
	<div class="flex flex-col gap-1">
		<p class="flex flex-wrap items-baseline gap-1">
			{#if cycle !== 'month'}
				{@const month = perMonth(plan(offer, 'month'))}
				<s
					class="me-1 text-xl font-bold text-muted decoration-2 motion-safe:animate-rise"
					aria-label={t.insteadOf(month)}
				>
					{month}
				</s>
			{/if}
			<span class="{big ? 'text-5xl' : 'text-4xl'} font-extrabold">
				<OfferPrice value={perMonth(p)} />
			</span>
			<span class="text-lg font-bold">{t.currency}</span>
			<span class="text-sm text-muted">{t.perMonth}</span>
			{#if p.cobe}
				<span
					class="ms-1 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-bold motion-safe:animate-rise"
				>
					{t.cobeIncluded}
				</span>
			{/if}
		</p>
		<div class="flex min-h-11 flex-col items-start gap-1 text-sm text-muted">
			{#if cycle !== 'month'}
				<p>
					{cycle === 'pass'
						? t.passTotal(p.months, formatPrice(p.price))
						: t.packTotal(p.months, formatPrice(p.price))}
				</p>
				{#if showInstallments}
					<p class="font-bold text-ink">{t.installments(p.months, perMonth(p))}</p>
				{/if}
			{:else}
				<p>{t.paidMonthly}</p>
				{#if best !== 'month'}
					<button
						type="button"
						onclick={() => (chosen = best)}
						class="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-bold text-brand transition duration-100 hover:bg-brand hover:text-white active:scale-[0.97]"
					>
						{t.longerNudge(t.cycles[best], perMonth(plan(offer, best)))}
					</button>
				{/if}
			{/if}
			{#if p.launch}
				<p class="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-bold text-ink">
					{t.launchLine(monthlyShekels(p.regular, p.months))}
				</p>
			{/if}
		</div>
	</div>
{/snippet}

{#snippet cobeSwitch(offer: OfferId)}
	{@const on = !!cobeOn[offer]}
	<div
		class="flex items-center gap-3 rounded-2xl px-3 py-1 transition-colors duration-200 {on
			? 'bg-accent-soft'
			: 'bg-canvas'}"
	>
		<Toggle
			checked={on}
			label="{t.addCobe} - {t.offers[offer].name}"
			onchange={(checked) => (cobeOn[offer] = checked)}
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

	{#if launch}
		<section
			class="mx-auto flex w-full max-w-xl flex-col items-center gap-1 rounded-3xl bg-accent-soft px-5 py-4 text-center ring-1 ring-accent/40 motion-safe:animate-rise"
			aria-labelledby="launch-title"
		>
			<h2 id="launch-title" class="flex items-center gap-1 font-extrabold">
				<Sparkles size={16} aria-hidden="true" />
				{t.launchTitle}
			</h2>
			<p class="text-pretty">
				{t.launchBody(perMonth(plan('group', best, false)))}
			</p>
			{#if daysLeft <= 31}
				<p class="text-sm font-bold text-brand-dark tabular-nums">{t.launchCountdown(daysLeft)}</p>
			{/if}
		</section>
	{/if}

	<!-- Price anchor: a private tutor vs. the featured plan. -->
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

	<!-- Billing cycle: the longest first. -->
	<div class="flex flex-col items-center gap-2">
		<Segmented
			label={t.cycleLabel}
			value={cycle}
			options={cycles.map((value) => ({ value, label: t.cycles[value] }))}
			onchange={(value) => (chosen = value)}
		/>
		<p
			class="rounded-full bg-accent-soft px-3 py-0.5 text-xs font-bold transition-transform duration-200 {cycle !==
			'month'
				? 'scale-105'
				: ''}"
		>
			{cycle === 'month' ? t.saveLonger(saving) : `${t.cycles[cycle]}: ${t.saveUpTo(saving)}`}
		</p>
	</div>

	<!-- Plans -->
	<ul class="grid items-stretch gap-4 md:grid-cols-3">
		{#each TIERS as offer, i (offer)}
			{@const item = t.offers[offer]}
			{@const featured = offer === FEATURED_OFFER}
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
				<Button variant={featured ? 'primary' : 'secondary'} href={checkoutHref(plan(offer).id)}>
					{featured ? t.chooseFeatured : t.choose}
				</Button>
			</li>
		{/each}
	</ul>

	<div class="-mt-4 flex flex-col items-center gap-1 text-center text-sm">
		{#if showGuarantee}
			<p class="flex items-center gap-1 font-bold">
				<ShieldCheck size={16} class="text-brand" aria-hidden="true" />
				{t.guarantee}
			</p>
		{/if}
		<p class="text-muted">{t.extension}</p>
	</div>

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
				{#each TIERS as offer (offer)}<col />{/each}
			</colgroup>
			<thead>
				<tr>
					<th class="sticky top-16 z-10 bg-canvas py-3 text-start align-bottom text-muted">
						<span class="text-xs font-semibold sm:text-sm">{t.compareFeature}</span>
					</th>
					{#each TIERS as offer (offer)}
						{@const featured = offer === FEATURED_OFFER}
						<th
							class="sticky top-16 z-10 px-1 py-3 align-bottom {featured
								? 'rounded-t-2xl bg-brand-soft'
								: 'bg-canvas'}"
						>
							<span class="block font-bold">{t.offers[offer].name}</span>
							<span class="block text-lg font-extrabold sm:text-2xl">
								<OfferPrice value={perMonth(plan(offer))} />
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
								class="border-t border-line px-1 py-3 text-center {TIERS[i] === FEATURED_OFFER
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
					{#each TIERS as offer (offer)}
						<td
							class="border-t border-line px-1 py-2 text-center {offer === FEATURED_OFFER
								? 'bg-brand-soft'
								: ''}"
						>
							<div class="flex flex-col items-center">
								<Toggle
									checked={!!cobeOn[offer]}
									label="{t.addCobe} - {t.offers[offer].name}"
									onchange={(checked) => (cobeOn[offer] = checked)}
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
					{#each TIERS as offer (offer)}
						{@const featured = offer === FEATURED_OFFER}
						<td class="px-1 pt-3 pb-3 {featured ? 'rounded-b-2xl bg-brand-soft' : ''}">
							<a
								href="{resolve('/checkout')}?plan={plan(offer).id}"
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

	<!-- Standalone: a private lesson, COBE alone -->
	{#snippet standalone(
		id: string,
		icon: typeof Mic,
		title: string,
		body: string,
		price: number,
		unit: string,
		cta: string,
		href: string
	)}
		{@const Icon = icon}
		<section
			{@attach reveal}
			class="flex flex-col gap-4 rounded-3xl bg-accent-soft p-6 ring-1 ring-accent/40 sm:flex-row sm:items-center sm:gap-8"
			aria-labelledby="{id}-title"
		>
			<div class="flex flex-1 flex-col gap-2">
				<h2 id="{id}-title" class="flex items-center gap-2 text-xl font-extrabold">
					<Icon size={20} aria-hidden="true" />
					{title}
				</h2>
				<p class="text-pretty text-muted">{body}</p>
			</div>
			<div class="flex flex-col gap-2 sm:w-56 sm:shrink-0">
				<p class="flex items-baseline gap-1">
					<span class="text-3xl font-extrabold"><OfferPrice value={price} /></span>
					<span class="font-bold">{t.currency}</span>
					<span class="text-sm text-muted">{unit}</span>
				</p>
				<Button variant="secondary" {href}>{cta}</Button>
			</div>
		</section>
	{/snippet}
	{@render standalone(
		'lesson',
		Video,
		t.lessonTitle,
		t.lessonBody,
		lesson.price / 100,
		t.perLesson,
		t.lessonChoose,
		checkoutHref(lesson.id)
	)}
	{@render standalone(
		'cobe',
		Mic,
		t.cobeOnlyTitle,
		t.cobeOnlyBody,
		perMonth(plan('cobe', cycle, false)),
		t.perMonth,
		t.cobeOnlyChoose,
		checkoutHref(plan('cobe', cycle, false).id)
	)}

	<!-- FAQ -->
	<section {@attach reveal} class="mx-auto flex w-full max-w-2xl flex-col gap-3">
		<h2 class="text-center text-2xl font-extrabold">{t.faqTitle}</h2>
		{#each faq as entry (entry.q)}
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

	<p class="text-center text-sm text-muted">{t.haveCode}</p>
</main>

{#if debug}
	<details
		class="fixed start-4 bottom-4 z-50 w-72 max-w-[calc(100vw-2rem)] rounded-2xl bg-surface p-3 text-sm shadow-lg ring-1 ring-line"
	>
		<summary class="cursor-pointer font-bold">{t.debug.title}</summary>
		<div class="mt-2 flex flex-col gap-2">
			<div class="flex flex-wrap gap-1">
				{#each t.debug.presets as preset (preset.label)}
					<button
						type="button"
						onclick={() => (debugDate = preset.date)}
						class="min-h-9 rounded-lg px-2 text-xs font-semibold {debugDate === preset.date
							? 'bg-brand text-white'
							: 'bg-canvas hover:bg-brand-soft'}"
					>
						{preset.label}
					</button>
				{/each}
			</div>
			<label class="flex items-center justify-between gap-2">
				{t.debug.date}
				<input type="date" bind:value={debugDate} class="rounded-lg bg-canvas px-2 py-1" />
			</label>
			<div class="flex items-center justify-between gap-2">
				{t.debug.guarantee}
				<Toggle
					checked={showGuarantee}
					label={t.debug.guarantee}
					onchange={(on) => (showGuarantee = on)}
				/>
			</div>
			<div class="flex items-center justify-between gap-2">
				{t.debug.installments}
				<Toggle
					checked={showInstallments}
					label={t.debug.installments}
					onchange={(on) => (showInstallments = on)}
				/>
			</div>
			<p class="text-xs text-muted">{t.debug.note}</p>
		</div>
	</details>
{/if}
