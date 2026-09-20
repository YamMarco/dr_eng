<script lang="ts">
	// The word-card picture frame, shared by the player and the /edit canvas
	// (which overlays its add/replace/delete controls through `children`).
	import { Image } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	let { src, alt = '', children }: { src?: string; alt?: string; children?: Snippet } = $props();
</script>

<div
	class="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl bg-accent-soft text-ink/40"
>
	{#if src}
		<img {src} {alt} class="h-full w-full object-cover" />
	{:else}
		<Image size={48} aria-hidden="true" />
	{/if}
	{@render children?.()}
</div>
