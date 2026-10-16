<script lang="ts">
	import { BookOpen, Languages, Timer } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';

	// Public front door: what this is, and one way in. Everything else lives in /app.

	let t = $derived(i18n.dict.site);
	const icons = [BookOpen, Languages, Timer];
</script>

<main class="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-10 px-4 py-12">
	<header class="flex flex-col items-center gap-4 text-center motion-safe:animate-rise">
		<h1 class="text-3xl font-extrabold tracking-tight sm:text-5xl">{t.tagline}</h1>
		<p class="max-w-xl text-lg leading-relaxed text-muted">{t.intro}</p>
		<div class="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
			<Button href={resolve('/app')}>{t.enter}</Button>
			<Button variant="secondary" href={resolve('/plans')}>{t.seePlans}</Button>
		</div>
	</header>

	<ul class="grid gap-3 sm:grid-cols-3">
		{#each t.features as feature, i (feature.title)}
			{@const Icon = icons[i]}
			<li
				class="flex flex-col gap-2 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-line/70 motion-safe:animate-rise"
				style="animation-delay: {staggerDelay(i + 1)}ms"
			>
				<Icon size={24} class="text-brand" aria-hidden="true" />
				<h2 class="text-lg font-bold">{feature.title}</h2>
				<p class="leading-relaxed text-muted">{feature.body}</p>
			</li>
		{/each}
	</ul>

	<a
		href={resolve('/checkout')}
		class="flex flex-col gap-1 rounded-3xl bg-accent-soft p-5 transition duration-100 hover:shadow-sm active:scale-[0.99] motion-safe:animate-rise sm:flex-row sm:items-center sm:justify-between"
		style="animation-delay: {staggerDelay(4)}ms"
	>
		<span>
			<span class="block text-lg font-bold">{t.testerTitle}</span>
			<span class="text-muted">{t.testerBody}</span>
		</span>
		<span class="font-semibold text-brand-dark">{t.testerCta}</span>
	</a>
</main>
