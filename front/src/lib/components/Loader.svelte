<script lang="ts">
	// Three bouncing brand dots. Appears after a short delay, so a wait that ends
	// at once never flashes it. `screen` centers it in the whole viewport.
	type Props = {
		size?: 'sm' | 'md' | 'lg';
		/** Fill the page and center, for a route-level wait. */
		screen?: boolean;
		/** Spoken to screen readers; shown under the dots when `showLabel`. */
		label?: string;
		showLabel?: boolean;
		class?: string;
	};

	let {
		size = 'md',
		screen = false,
		label = 'טוען',
		showLabel = false,
		class: extra = ''
	}: Props = $props();

	const dot = { sm: 'h-1.5 w-1.5', md: 'h-2.5 w-2.5', lg: 'h-3.5 w-3.5' };
</script>

<span
	role="status"
	class="loader inline-flex flex-col items-center justify-center gap-3 {screen
		? 'min-h-dvh w-full flex-1'
		: ''} {extra}"
>
	<span class="inline-flex items-center gap-1.5" dir="ltr" aria-hidden="true">
		{#each [0, 1, 2] as i (i)}
			<span class="dot rounded-full bg-brand {dot[size]}" style="animation-delay: {i * 0.15}s"
			></span>
		{/each}
	</span>
	{#if showLabel}
		<span class="text-sm font-semibold text-muted">{label}</span>
	{:else}
		<span class="sr-only">{label}</span>
	{/if}
</span>

<style>
	.loader {
		animation: appear 0.2s 0.25s backwards;
	}
	.dot {
		animation: bounce 0.9s ease-in-out infinite;
	}
	@keyframes appear {
		from {
			opacity: 0;
		}
	}
	@keyframes bounce {
		0%,
		70%,
		100% {
			transform: translateY(0);
			opacity: 0.45;
		}
		35% {
			transform: translateY(-60%);
			opacity: 1;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.dot {
			animation: pulse 1.2s ease-in-out infinite;
		}
		@keyframes pulse {
			50% {
				opacity: 0.3;
			}
		}
	}
</style>
