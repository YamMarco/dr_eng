<script lang="ts">
	import {
		BookOpen,
		Check,
		GraduationCap,
		Lightbulb,
		Mail,
		PenLine,
		Target,
		Timer
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import JoinCtas from '$lib/site/JoinCtas.svelte';
	import { reveal } from '$lib/site/reveal';
	import { emailHref } from '$lib/support';

	let t = $derived(i18n.dict.about);

	// Same order as about.sections[].features.
	const featureIcons = [Lightbulb, Target, BookOpen, PenLine, Timer];
</script>

<svelte:head>
	<title>{t.title} | {i18n.dict.site.brand}</title>
	<meta name="description" content={t.metaDescription} />
</svelte:head>

<main class="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-4 py-12">
	<header class="flex flex-col gap-3 motion-safe:animate-rise">
		<span class="text-sm font-bold text-brand-dark">{t.title}</span>
		<h1 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{t.lead}</h1>
		<p class="text-lg leading-relaxed">{t.intro}</p>
	</header>

	<figure
		class="flex flex-col gap-4 rounded-[2rem] bg-surface p-5 shadow-sm ring-1 ring-line/70 motion-safe:animate-rise sm:p-6"
		style="animation-delay: {staggerDelay(1)}ms"
	>
		<div class="flex items-center gap-4">
			<span
				class="grid size-16 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark"
				aria-hidden="true"
			>
				<GraduationCap size={30} />
			</span>
			<div class="flex flex-col">
				<span class="text-xl font-extrabold">{t.teacher.name}</span>
				<span class="text-muted">{t.teacher.role}</span>
			</div>
		</div>
		<ul class="flex flex-col gap-2">
			{#each t.teacher.credentials as credential (credential)}
				<li class="flex items-start gap-2">
					<Check size={18} class="mt-1 shrink-0 text-brand" aria-hidden="true" />
					{credential}
				</li>
			{/each}
		</ul>
		<figcaption class="border-t border-line/70 pt-4">
			<p lang="en" dir="ltr" class="text-end text-lg font-bold italic">{t.teacher.motto}</p>
			<p class="text-sm text-muted">{t.teacher.mottoGloss}</p>
		</figcaption>
	</figure>

	{#each t.sections as section, i (section.title)}
		<section {@attach reveal} class="flex flex-col gap-2" style="--reveal-delay: {i * 60}ms">
			<h2 class="text-xl font-bold text-balance">{section.title}</h2>
			{#each section.body as paragraph (paragraph)}
				<p class="leading-relaxed">{paragraph}</p>
			{/each}
			{#if section.features}
				<ul class="mt-2 flex flex-wrap gap-2">
					{#each section.features as feature, f (feature)}
						{@const Icon = featureIcons[f]}
						<li
							class="flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 text-sm font-semibold text-brand-dark"
						>
							<Icon size={16} aria-hidden="true" />
							{feature}
						</li>
					{/each}
				</ul>
			{/if}
			{#if section.feedback}
				<!-- mailto, not a route -->
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					href={emailHref(t.feedbackSubject)}
					class="mt-1 flex min-h-11 w-fit items-center gap-2 font-semibold text-brand-dark transition duration-100 hover:underline active:scale-[0.98]"
				>
					<Mail size={18} aria-hidden="true" />
					{section.feedback}
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			{/if}
		</section>
	{/each}

	<section {@attach reveal} class="flex flex-col items-center gap-4 pt-4 text-center">
		<h2 class="text-2xl font-extrabold">{t.finalTitle}</h2>
		<div class="flex w-full justify-center text-start"><JoinCtas id="join" /></div>
		<a
			href={resolve('/plans')}
			class="min-h-11 content-center font-semibold text-muted transition duration-100 hover:text-ink active:scale-[0.98]"
		>
			{i18n.dict.site.seePlans}
		</a>
	</section>
</main>
