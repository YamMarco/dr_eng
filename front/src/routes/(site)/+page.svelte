<script lang="ts">
	import {
		ArrowLeft,
		BookOpen,
		Bus,
		Coffee,
		Flame,
		Heart,
		KeyRound,
		Layers,
		Mic,
		PenLine,
		Plus,
		RefreshCw,
		Sparkles,
		Timer,
		Trophy
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import MediaFrame from '$lib/site/MediaFrame.svelte';
	import PhoneMock from '$lib/site/PhoneMock.svelte';
	import StepVignette from '$lib/site/StepVignette.svelte';
	import { homeMedia } from '$lib/site/media';
	import { reveal } from '$lib/site/reveal';

	// Public front door, for testers now and strangers later: what this is, why it
	// works, one way in (a tester code). Everything else lives in /app.

	let t = $derived(i18n.dict.site.home);

	const momentArt = {
		break: { icon: Coffee, tone: 'gold' },
		bus: { icon: Bus, tone: 'teal' },
		evening: { icon: PenLine, tone: 'navy' },
		exam: { icon: Timer, tone: 'sunset' },
		oral: { icon: Mic, tone: 'teal' }
	} as const;
	const momentChipIcons = {
		break: Layers,
		bus: BookOpen,
		evening: Sparkles,
		exam: Timer,
		oral: Mic
	};
	const perkIcons = [KeyRound, Heart, RefreshCw];
	const moduleTones = [
		'bg-brand-soft text-brand-dark',
		'bg-accent-soft text-ink',
		'bg-miss-soft text-miss'
	];
</script>

<svelte:head>
	<title>{t.metaTitle}</title>
	<meta name="description" content={t.metaDescription} />
	<meta property="og:title" content={t.metaTitle} />
	<meta property="og:description" content={t.metaDescription} />
	<meta property="og:type" content="website" />
</svelte:head>

{#snippet kicker(text: string, dark = false)}
	<span class="text-sm font-bold tracking-wide {dark ? 'text-brand' : 'text-brand-dark'} uppercase"
		>{text}</span
	>
{/snippet}

{#snippet ctas()}
	<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
		<Button href={resolve('/checkout')} class="sm:w-auto sm:px-8">
			<KeyRound size={20} aria-hidden="true" />
			{t.ctaCode}
		</Button>
		<Button variant="secondary" href={resolve('/app')} class="sm:w-auto sm:px-8">
			{t.ctaPeek}
		</Button>
	</div>
{/snippet}

<main class="flex flex-1 flex-col overflow-x-clip">
	<!-- Hero -->
	<section
		class="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-16 lg:pb-24"
	>
		<div class="flex flex-col items-start gap-6">
			<span
				class="flex items-center gap-2 rounded-full bg-surface py-1.5 ps-2.5 pe-3.5 text-sm font-semibold shadow-sm ring-1 ring-line motion-safe:animate-rise"
			>
				<span class="live-dot h-2 w-2 rounded-full bg-brand"></span>
				{t.badge}
				<span class="text-muted">· {t.badgeUnits}</span>
			</span>
			<h1
				class="text-[2.6rem] leading-[1.08] font-black tracking-tight text-balance motion-safe:animate-rise sm:text-6xl lg:text-7xl"
				style="animation-delay: {staggerDelay(1)}ms"
			>
				{t.titleLead}
				<span class="mark-stroke">{t.titleMark}</span>
				{t.titleTail}
			</h1>
			<p
				class="max-w-xl text-lg leading-relaxed text-muted motion-safe:animate-rise sm:text-xl"
				style="animation-delay: {staggerDelay(2)}ms"
			>
				{t.intro}
			</p>
			<div
				class="flex w-full flex-col gap-3 motion-safe:animate-rise"
				style="animation-delay: {staggerDelay(3)}ms"
			>
				{@render ctas()}
				<p class="text-sm text-muted">{t.ctaNote}</p>
			</div>
		</div>

		<div class="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
			<MediaFrame
				media={homeMedia.hero}
				alt={t.heroAlt}
				tone="teal"
				eager
				class="absolute inset-x-0 inset-y-6 rounded-[2.5rem] motion-safe:animate-rise sm:inset-x-6"
			/>
			<div
				class="float-slow relative z-10 py-12 motion-safe:animate-rise"
				style="animation-delay: 150ms"
			>
				<PhoneMock />
			</div>
			<span
				class="float-chip absolute end-0 top-16 z-20 flex items-center gap-2 rounded-2xl bg-surface px-3 py-2 text-sm font-bold shadow-xl ring-1 ring-line sm:-end-2"
				style="--chip-delay: 700ms"
			>
				<span class="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft">
					<Trophy size={16} class="text-accent" aria-hidden="true" />
				</span>
				<span class="flex flex-col leading-tight">
					<span class="text-base tabular" dir="ltr">86</span>
					<span class="text-xs font-semibold text-muted">{t.mock.chipScore}</span>
				</span>
			</span>
			<span
				class="float-chip absolute start-0 bottom-24 z-20 flex items-center gap-2 rounded-2xl bg-surface px-3 py-2 text-sm font-bold shadow-xl ring-1 ring-line sm:-start-2"
				style="--chip-delay: 900ms"
			>
				<span class="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-soft">
					<Layers size={16} class="text-brand-dark" aria-hidden="true" />
				</span>
				<span class="flex flex-col leading-tight">
					<span class="text-base tabular" dir="ltr">{t.mock.chipWordsCount}</span>
					<span class="text-xs font-semibold text-muted">{t.mock.chipWords}</span>
				</span>
			</span>
			<span
				class="float-chip absolute end-4 bottom-6 z-20 flex items-center gap-1.5 rounded-full bg-overlay px-3 py-1.5 text-xs font-bold text-white shadow-xl"
				style="--chip-delay: 1100ms"
			>
				<Flame size={14} class="text-accent" aria-hidden="true" />
				<span dir="ltr" class="tabular">3/4</span>
				{t.mock.chipStreak}
			</span>
		</div>
	</section>

	<!-- Moments -->
	<section class="flex flex-col gap-8 pb-20 lg:pb-28">
		<header {@attach reveal} class="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 sm:px-6">
			{@render kicker(t.momentsKicker)}
			<h2 class="text-3xl font-black tracking-tight text-balance sm:text-5xl">{t.momentsTitle}</h2>
			<p class="text-lg text-muted">{t.momentsBody}</p>
		</header>
		<div
			class="marquee-wrap overflow-hidden motion-reduce:scrollbar-none motion-reduce:overflow-x-auto"
		>
			<div class="marquee flex w-max">
				{#each [0, 1] as copy (copy)}
					<ul
						class="flex gap-4 pe-4 {copy ? 'motion-reduce:hidden' : ''}"
						aria-hidden={copy ? 'true' : undefined}
					>
						{#each t.moments as moment (moment.id)}
							{@const art = momentArt[moment.id as keyof typeof momentArt]}
							{@const ChipIcon = momentChipIcons[moment.id as keyof typeof momentChipIcons]}
							<li class="relative h-[22rem] w-64 shrink-0 sm:h-[26rem] sm:w-72">
								<MediaFrame
									media={homeMedia[moment.id]}
									alt={moment.alt}
									tone={art.tone}
									icon={art.icon}
									class="relative h-full w-full rounded-[2rem]"
								/>
								<span
									class="absolute inset-x-4 top-4 text-xl font-extrabold text-white drop-shadow-sm"
									>{moment.when}</span
								>
								<span
									class="absolute start-4 bottom-4 flex items-center gap-2 rounded-2xl bg-surface/95 px-3 py-2 text-sm font-bold shadow-lg backdrop-blur"
								>
									<ChipIcon size={16} class="text-brand-dark" aria-hidden="true" />
									{moment.chip}
								</span>
							</li>
						{/each}
					</ul>
				{/each}
			</div>
		</div>
	</section>

	<!-- How it works -->
	<section class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-20 sm:px-6 lg:pb-28">
		<header {@attach reveal} class="flex max-w-2xl flex-col gap-2">
			{@render kicker(t.loopKicker)}
			<h2 class="text-3xl font-black tracking-tight text-balance sm:text-5xl">{t.loopTitle}</h2>
		</header>
		<ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each t.steps as step, i (step.title)}
				<li
					{@attach reveal}
					style="--reveal-delay: {i * 90}ms"
					class="group flex flex-col gap-4 rounded-[2rem] bg-surface p-4 shadow-sm ring-1 ring-line/70 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
				>
					<StepVignette step={i} />
					<div class="flex flex-col gap-1 px-1 pb-1">
						<span class="flex items-center gap-2 text-lg font-extrabold">
							<span
								class="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-white tabular"
								>{i + 1}</span
							>
							{step.title}
						</span>
						<p class="leading-relaxed text-muted">{step.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<!-- Pressure is training -->
	<section class="px-3 pb-20 sm:px-6 lg:pb-28">
		<div
			{@attach reveal}
			class="relative mx-auto flex max-w-6xl flex-col gap-12 overflow-hidden rounded-[2.5rem] bg-overlay px-6 py-14 text-white ring-1 ring-white/10 sm:px-12 lg:py-20"
		>
			<div
				class="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl"
				aria-hidden="true"
			></div>
			<div
				class="pointer-events-none absolute -start-20 -bottom-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
				aria-hidden="true"
			></div>
			<div class="relative flex max-w-2xl flex-col gap-4">
				{@render kicker(t.pressureKicker, true)}
				<h2 class="text-5xl font-black tracking-tight sm:text-7xl">{t.pressureTitle}</h2>
				<p class="text-lg leading-relaxed text-white/75 sm:text-xl">{t.pressureBody}</p>
			</div>
			<dl class="relative grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-3">
				{#each t.facts as fact (fact.label)}
					<div class="flex flex-col gap-1">
						<dt class="order-2 text-white/70">{fact.label}</dt>
						<dd class="flex items-baseline gap-2">
							<span dir="ltr" class="text-5xl font-black tracking-tight tabular sm:text-6xl"
								>{fact.value}</span
							>
							<span class="text-lg font-bold text-brand">{fact.unit}</span>
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- Modules -->
	<section class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-20 sm:px-6 lg:pb-28">
		<header {@attach reveal} class="flex max-w-2xl flex-col gap-2">
			{@render kicker(t.modulesKicker)}
			<h2 class="text-3xl font-black tracking-tight text-balance sm:text-5xl">{t.modulesTitle}</h2>
		</header>
		<ul class="grid gap-4 md:grid-cols-3">
			{#each t.modules as mod, i (mod.name)}
				<li
					{@attach reveal}
					style="--reveal-delay: {i * 90}ms"
					class="flex flex-col gap-4 rounded-[2rem] bg-surface p-6 shadow-sm ring-1 ring-line/70"
				>
					<span class="text-2xl font-black">{mod.name}</span>
					<p class="flex-1 leading-relaxed text-muted">{mod.body}</p>
					<span class="flex flex-wrap gap-2">
						{#each mod.tags as tag (tag)}
							<span class="rounded-full px-3 py-1 text-sm font-semibold {moduleTones[i]}"
								>{tag}</span
							>
						{/each}
					</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Testers -->
	<section class="px-3 pb-20 sm:px-6 lg:pb-28">
		<div
			{@attach reveal}
			class="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] bg-brand-soft px-6 py-12 sm:px-12 lg:grid-cols-[1fr_1.2fr] lg:py-16"
		>
			<div class="flex flex-col items-start gap-4">
				{@render kicker(t.testersKicker)}
				<h2 class="text-3xl font-black tracking-tight text-balance sm:text-5xl">
					{t.testersTitle}
				</h2>
				<p class="text-lg leading-relaxed text-muted">{t.testersBody}</p>
				<div class="mt-2 flex w-full flex-col gap-3">
					<Button href={resolve('/checkout')} class="sm:w-auto sm:self-start sm:px-8">
						<KeyRound size={20} aria-hidden="true" />
						{t.ctaCode}
					</Button>
					<a
						href={resolve('/plans')}
						class="flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline"
					>
						{t.noCode}
						<ArrowLeft size={14} aria-hidden="true" />
					</a>
				</div>
			</div>
			<ul class="flex flex-col gap-3">
				{#each t.perks as perk, i (perk.title)}
					{@const Icon = perkIcons[i]}
					<li class="flex items-start gap-4 rounded-3xl bg-surface p-5 shadow-sm">
						<span
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white"
						>
							<Icon size={20} aria-hidden="true" />
						</span>
						<span class="flex flex-col gap-0.5">
							<span class="text-lg font-bold">{perk.title}</span>
							<span class="leading-relaxed text-muted">{perk.body}</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- FAQ -->
	<section class="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 pb-20 sm:px-6 lg:pb-28">
		<h2 {@attach reveal} class="text-3xl font-black tracking-tight sm:text-4xl">{t.faqTitle}</h2>
		<div {@attach reveal} class="flex flex-col divide-y divide-line border-y border-line">
			{#each t.faq as item (item.q)}
				<details class="group">
					<summary
						class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold transition-colors hover:text-brand-dark [&::-webkit-details-marker]:hidden"
					>
						{item.q}
						<Plus
							size={20}
							class="shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
							aria-hidden="true"
						/>
					</summary>
					<p class="pb-5 leading-relaxed text-muted">{item.a}</p>
				</details>
			{/each}
		</div>
	</section>

	<!-- Final call -->
	<section
		class="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 pb-16 text-center sm:px-6"
	>
		<div {@attach reveal} class="flex flex-col items-center gap-4">
			<h2 class="text-4xl font-black tracking-tight text-balance sm:text-6xl">{t.finalTitle}</h2>
			<p class="max-w-xl text-lg text-muted">{t.finalBody}</p>
			<div class="mt-2">{@render ctas()}</div>
		</div>
	</section>
</main>
