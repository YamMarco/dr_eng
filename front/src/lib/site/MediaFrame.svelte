<script lang="ts">
	import type { Component } from 'svelte';
	import type { Media } from './media';

	// A human photo or looping video; until one is set, gradient art in its place.
	type Props = {
		media: Media;
		alt: string;
		tone: 'teal' | 'gold' | 'navy' | 'sunset';
		icon?: Component<{ size?: number; class?: string; 'aria-hidden'?: 'true' }>;
		eager?: boolean;
		class?: string;
	};

	let { media, alt, tone, icon: Icon, eager = false, class: extra = '' }: Props = $props();
</script>

<div class="isolate overflow-hidden {extra}">
	{#if media.video}
		<video
			class="absolute inset-0 h-full w-full object-cover"
			src={media.video}
			poster={media.image}
			autoplay
			muted
			loop
			playsinline
			aria-label={alt}
		></video>
	{:else if media.image}
		<img
			class="absolute inset-0 h-full w-full object-cover"
			src={media.image}
			{alt}
			loading={eager ? 'eager' : 'lazy'}
			fetchpriority={eager ? 'high' : undefined}
			decoding="async"
		/>
	{:else}
		<div class="art art-{tone} absolute inset-0" aria-hidden="true">
			<span class="art-orb art-orb-a"></span>
			<span class="art-orb art-orb-b"></span>
			{#if Icon}<Icon size={140} class="art-icon" aria-hidden="true" />{/if}
		</div>
	{/if}
	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0"
		aria-hidden="true"
	></div>
</div>
