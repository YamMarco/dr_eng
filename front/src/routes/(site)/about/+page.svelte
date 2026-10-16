<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';

	let t = $derived(i18n.dict.about);
</script>

<svelte:head>
	<title>{t.title} | {i18n.dict.site.brand}</title>
	<meta name="description" content={t.lead} />
</svelte:head>

<main class="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-4 py-12">
	<header class="motion-safe:animate-rise">
		<h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.title}</h1>
		<p class="mt-4 text-lg leading-relaxed text-muted">{t.lead}</p>
	</header>

	{#each t.sections as section, i (section.title)}
		<section class="motion-safe:animate-rise" style="animation-delay: {staggerDelay(i + 1)}ms">
			<h2 class="text-xl font-bold">{section.title}</h2>
			<p class="mt-2 leading-relaxed text-muted">{section.body}</p>
		</section>
	{/each}

	<div class="w-full max-w-xs">
		<Button href={resolve('/plans')}>{i18n.dict.site.seePlans}</Button>
	</div>
</main>
