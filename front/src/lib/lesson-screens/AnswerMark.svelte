<script lang="ts">
	// Right / wrong on an answered option, so it's never told by color alone:
	// an icon for the eye, words for screen readers.
	import { Check, X } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	let { right, size = 18 }: { right: boolean; size?: number } = $props();
</script>

<span class="inline-flex shrink-0 items-center">
	{#if right}
		<Check {size} strokeWidth={3} aria-hidden="true" />
	{:else}
		<X {size} strokeWidth={3} aria-hidden="true" />
	{/if}
	<span class="sr-only">{right ? i18n.dict.a11y.right : i18n.dict.a11y.wrong}</span>
</span>
