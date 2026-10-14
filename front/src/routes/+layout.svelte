<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import DebugTooltip from '$lib/components/DebugTooltip.svelte';
	import { onNavigate } from '$app/navigation';
	import { i18n } from '$lib/i18n/index.svelte';
	import { debugStore } from '$lib/debug.svelte';
	import { themeStore } from '$lib/theme.svelte';

	let { children } = $props();

	// Native cross-fade between every route (home <-> unit <-> module <->
	// lessons/settings/book/...) via the View Transitions API — a no-op where
	// unsupported (startViewTransition just won't exist) or reduced-motion is
	// requested (guarded in layout.css instead of here, since the transition
	// still needs to resolve either way).
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const THEME_COLOR = { light: '#f9f7f4', dark: '#14181b' };

	$effect(() => {
		document.documentElement.lang = i18n.language;
	});

	$effect(() => {
		document.documentElement.dataset.theme = themeStore.resolved;
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute('content', THEME_COLOR[themeStore.resolved]);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{i18n.dict.appTitle}</title>
</svelte:head>

<div class="flex min-h-dvh flex-col bg-canvas">
	{@render children()}
</div>

{#if debugStore.enabled}
	<DebugTooltip />
{/if}
