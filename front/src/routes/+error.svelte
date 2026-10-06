<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// No matched route means SvelteKit's own English "Not Found" - our loaders
	// throw Hebrew messages, so only that case needs a fallback.
	let title = $derived(
		page.route.id === null
			? i18n.dict.error.notFound
			: (page.error?.message ?? i18n.dict.error.defaultMessage)
	);
</script>

<main
	class="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-4 py-16 text-center"
>
	<span class="text-5xl font-extrabold text-brand" dir="ltr">{page.status}</span>
	<h1 class="mt-3 text-2xl font-bold">{title}</h1>
	<p class="mt-2 text-muted">{i18n.dict.error.subtitle}</p>
	<div class="mt-8 w-full max-w-xs">
		<Button href="/">{i18n.dict.error.backButton}</Button>
	</div>
</main>
