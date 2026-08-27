<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/NavBar.svelte';
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n/index.svelte';

	let { children } = $props();

	// The exam-run screen has its own fixed bottom action bar,
	// so the global nav would double up and eat into the content.
	const noNavPatterns = [/\/exam\/run$/];

	let showNav = $derived(!noNavPatterns.some((re) => re.test(page.url.pathname)));

	$effect(() => {
		document.documentElement.lang = i18n.language;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{i18n.dict.appTitle}</title>
</svelte:head>

<div class="flex min-h-dvh flex-col bg-canvas">
	<div class="flex flex-1 flex-col {showNav ? 'pb-16' : ''}">
		{@render children()}
	</div>

	{#if showNav}
		<NavBar />
	{/if}
</div>
