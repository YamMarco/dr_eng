<script lang="ts">
	import {
		BookOpen,
		Check,
		Compass,
		Lightbulb,
		Mail,
		MessageSquareText,
		PenLine,
		Target,
		Timer
	} from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { reveal } from '$lib/site/reveal';
	import { emailHref } from '$lib/support';

	let t = $derived(i18n.dict.about);

	// Same order as about.sections[].features.
	const featureIcons = [Compass, Lightbulb, Target, BookOpen, PenLine, Timer, MessageSquareText];
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
			<!-- Until a photo: swap for <img src=… alt={t.teacher.name} class="size-20 rounded-full object-cover" /> -->
			<span
				class="grid size-20 shrink-0 place-items-center rounded-full bg-brand-dark text-2xl font-extrabold text-white"
				aria-hidden="true"
			>
				{t.teacher.initials}
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
		<blockquote class="border-s-4 border-brand ps-4 leading-relaxed">״{t.teacher.quote}״</blockquote>
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
		<p lang="en" dir="ltr" class="text-lg font-bold italic">{t.motto}</p>
		<p class="-mt-3 text-sm text-muted">{t.mottoGloss}</p>
		<h2 class="mt-4 text-2xl font-extrabold">{t.finalTitle}</h2>
		<div class="w-full max-w-xs"><Button href={resolve('/plans')}>{t.cta}</Button></div>
	</section>
</main>
