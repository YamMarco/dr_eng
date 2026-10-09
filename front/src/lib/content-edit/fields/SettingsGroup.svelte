<script lang="ts">
	// One titled block of settings under a screen's content. Every screen's
	// settings are stacked below its content in groups like this one, in the
	// order: type-specific groups, then general ones (score, auto-check).
	// Plain flow only - nothing sticky - so groups never cover each other.
	// The parent lays groups out as grid cells.
	import type { Snippet } from 'svelte';

	let { title, hint, children }: { title: string; hint?: string; children: Snippet } = $props();
</script>

<section>
	<h3 class="text-xs font-bold text-muted">{title}</h3>
	{#if hint}<p class="mt-0.5 text-xs text-muted/80">{hint}</p>{/if}
	<div class="mt-2 flex flex-col gap-3">{@render children()}</div>
</section>
