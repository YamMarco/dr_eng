<script lang="ts">
	import { BookOpen, Lightbulb, PenLine, Target, Timer } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import JoinCtas from '$lib/site/JoinCtas.svelte';
	import { reveal } from '$lib/site/reveal';

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
		</section>
	{/each}

	<section {@attach reveal} class="flex flex-col items-center gap-4 pt-4 text-center">
		<p lang="en" dir="ltr" class="text-lg font-bold italic">{t.motto}</p>
		<p class="-mt-3 text-sm text-muted">{t.mottoGloss}</p>
		<h2 class="mt-4 text-2xl font-extrabold">{t.finalTitle}</h2>
		<div class="flex w-full justify-center text-start"><JoinCtas id="join" /></div>
	</section>
</main>
