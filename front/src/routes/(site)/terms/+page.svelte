<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';

	let t = $derived(i18n.dict.site);
</script>

<svelte:head>
	<title>{t.terms}</title>
</svelte:head>

<main class="mx-auto w-full max-w-2xl flex-1 px-4 py-12">
	<h1 class="text-3xl font-extrabold tracking-tight">{t.terms}</h1>
	<p class="mt-4 leading-relaxed text-muted">{t.draft}</p>
</main>
