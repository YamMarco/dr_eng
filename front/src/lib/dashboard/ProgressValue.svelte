<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import type { Progress } from './data';

	// A progress number: "done/total", or for a word count just what was won - the
	// list size stays hidden, the bar chases the next milestone.
	let { p }: { p: Progress } = $props();
</script>

{#if p.milestone}
	{p.done ? i18n.dict.deck.wordsWonShort(p.done) : i18n.dict.deck.wordsWonNone}
{:else}
	<span dir="ltr">{p.done}/{p.total}</span>
{/if}
