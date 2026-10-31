<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';

	// /privacy, /terms and /accessibility: one layout, copy in i18n `legal`. No reveal motion: a document reads at once.
	let { doc }: { doc: 'privacy' | 'terms' | 'accessibility' } = $props();

	let t = $derived(i18n.dict.legal);
	let page = $derived(t[doc]);
	let title = $derived(i18n.dict.site[doc]);
</script>

<svelte:head>
	<title>{title} | {i18n.dict.site.brand}</title>
</svelte:head>

<main class="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-4 py-12">
	<header class="flex flex-col gap-3">
		<h1 class="text-3xl font-extrabold tracking-tight">{title}</h1>
		<p class="text-sm text-muted">{t.updated}</p>
		<p class="text-lg leading-relaxed">{page.intro}</p>
	</header>

	{#each page.sections as section (section.title)}
		<section class="flex flex-col gap-2">
			<h2 class="text-xl font-bold text-balance">{section.title}</h2>
			{#each section.body ?? [] as paragraph (paragraph)}
				<p class="leading-relaxed">{paragraph}</p>
			{/each}
			{#if section.items}
				<ul class="flex list-disc flex-col gap-1.5 ps-5 leading-relaxed marker:text-brand">
					{#each section.items as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}
		</section>
	{/each}
</main>
