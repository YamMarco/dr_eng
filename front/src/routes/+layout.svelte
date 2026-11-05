<script lang="ts">
	import '@fontsource-variable/heebo';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import DebugTooltip from '$lib/components/DebugTooltip.svelte';
	import { onNavigate } from '$app/navigation';
	import { navigating } from '$app/state';
	import Loader from '$lib/components/Loader.svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { debugStore } from '$lib/debug.svelte';
	import { themeStore } from '$lib/theme.svelte';
	// Catches the browser's one-time install prompt, whichever page it fires on.
	import '$lib/install.svelte';

	let { children } = $props();

	// Native cross-fade between every route (home <-> unit <-> module <->
	// lessons/settings/book/...) via the View Transitions API — a no-op where
	// unsupported (startViewTransition just won't exist) or reduced-motion is
	// requested (guarded in layout.css instead of here, since the transition
	// still needs to resolve either way).
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				// Aborted by a faster tap: expected, not an error.
				await navigation.complete.catch(() => {});
			});
			// A newer navigation skips this transition; its promises then reject.
			for (const p of [transition.ready, transition.finished, transition.updateCallbackDone])
				p.catch(() => {});
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
	<!-- A render crash (e.g. a malformed stored value) shows this, never a blank page. -->
	<svelte:boundary onerror={(e) => console.error(e)}>
		{@render children()}
		{#snippet failed()}
			<main
				class="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-4 py-16 text-center"
			>
				<h1 class="text-2xl font-bold">{i18n.dict.error.defaultMessage}</h1>
				<p class="mt-2 text-muted">{i18n.dict.error.crashSubtitle}</p>
				<div class="mt-8 w-full max-w-xs">
					<Button onclick={() => location.reload()}>{i18n.dict.error.reload}</Button>
				</div>
			</main>
		{/snippet}
	</svelte:boundary>
</div>

{#if navigating.to}
	<!-- A page chunk still on its way: shows only if it takes more than a beat. -->
	<Loader
		size="sm"
		class="fixed inset-x-0 top-3 z-50 mx-auto w-fit rounded-full bg-surface px-4 py-2.5 shadow-lg ring-1 ring-line/70"
	/>
{/if}

{#if debugStore.enabled}
	<DebugTooltip />
{/if}
