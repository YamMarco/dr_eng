<script lang="ts">
	import { resolve } from '$app/paths';
	import { i18n } from '$lib/i18n/index.svelte';

	let { children } = $props();
	let t = $derived(i18n.dict.site);
</script>

{@render children()}

<footer
	class="mx-auto flex w-full max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 px-4 py-6 text-sm text-muted"
>
	<a href={resolve('/privacy')} class="hover:text-ink">{t.privacy}</a>
	<a href={resolve('/terms')} class="hover:text-ink">{t.terms}</a>
</footer>
