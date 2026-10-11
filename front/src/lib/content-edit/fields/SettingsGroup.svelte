<script lang="ts">
	// One titled block of settings under a screen's content. Every screen's
	// settings are stacked below its content in groups like this one, ordered
	// from fundamental to specific: general (score, auto-check, timer), then
	// shape, pass conditions, and content helpers.
	// Plain flow only - nothing sticky - so groups never cover each other.
	// The parent lays groups out as grid cells. The hint hides behind an ⓘ
	// toggle so it costs no height until asked for.
	import type { Snippet } from 'svelte';

	let { title, hint, children }: { title: string; hint?: string; children: Snippet } = $props();
	let hintOpen = $state(false);
</script>

<section>
	<h3 class="flex items-center gap-1 text-xs font-bold text-muted">
		{title}
		{#if hint}
			<button
				type="button"
				class="font-normal text-brand"
				aria-label="הסבר"
				aria-expanded={hintOpen}
				onclick={() => (hintOpen = !hintOpen)}>ⓘ</button
			>
		{/if}
	</h3>
	{#if hint && hintOpen}<p class="mt-0.5 text-xs text-muted/80">{hint}</p>{/if}
	<div class="mt-1.5 flex flex-col gap-2">{@render children()}</div>
</section>
