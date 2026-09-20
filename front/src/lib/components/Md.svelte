<script lang="ts">
	// Renders teaching/question text with the app's mini-markdown (**bold**,
	// {c:red}...{/c}, ...). Fragment-only, so it drops into any existing
	// <p>/<span>/<button>. `block` = per-line headers/alignment (see mdBlock).
	import { mdBlock, mdInline } from '$lib/lesson-screens/miniMarkdown';

	let { text, block = false }: { text: string; block?: boolean } = $props();
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
{#if block}{@html mdBlock(text)}{:else}{@html mdInline(text)}{/if}
