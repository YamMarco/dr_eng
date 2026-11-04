<script lang="ts">
	// The logo's two "level up" chevrons leapfrogging upwards in a loop. Appears after a short
	// delay, so a wait that ends at once never flashes it. `screen` centers it in
	// the whole viewport. Color is currentColor (brand by default).
	type Props = {
		size?: 'sm' | 'md' | 'lg';
		/** Fill the page and center, for a route-level wait. */
		screen?: boolean;
		/** Spoken to screen readers; shown under the mark when `showLabel`. */
		label?: string;
		showLabel?: boolean;
		/** Take the parent's text color (e.g. inside a button) instead of brand. */
		inherit?: boolean;
		class?: string;
	};

	let {
		size = 'md',
		screen = false,
		label = 'טוען',
		showLabel = false,
		inherit = false,
		class: extra = ''
	}: Props = $props();

	const box = { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-14 w-14' };
</script>

<span
	role="status"
	class="loader inline-flex flex-col items-center justify-center gap-3 {inherit ? '' : 'text-brand'} {screen
		? 'min-h-dvh w-full flex-1'
		: ''} {extra}"
>
	<svg viewBox="0 0 32 32" class="overflow-visible {box[size]}" aria-hidden="true">
		{#each [0, 1] as i (i)}
			<path
				class="chev"
				style="animation-delay: {i * -1.2}s"
				d="M9.5 20.5 16 14l6.5 6.5"
				fill="none"
				stroke="currentColor"
				stroke-width="3.4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		{/each}
	</svg>
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
	/* The logo's two chevrons (top at -4, bottom at +4). Each step the top one
	   takes off and comes back from below into the bottom slot, while the bottom
	   one climbs into the top slot. The second runs half a cycle behind. */
	.chev {
		animation: climb 2.4s infinite;
	}
	@keyframes appear {
		from {
			opacity: 0;
		}
	}
	@keyframes climb {
		0%,
		29% {
			transform: translateY(-4px);
			opacity: 1;
			animation-timing-function: cubic-bezier(0.5, 0, 1, 0.6);
		}
		40% {
			transform: translateY(-15px);
			opacity: 0;
		}
		40.01% {
			transform: translateY(15px);
			opacity: 0;
			animation-timing-function: cubic-bezier(0, 0.4, 0.4, 1);
		}
		50%,
		79% {
			transform: translateY(4px);
			opacity: 0.55;
			animation-timing-function: cubic-bezier(0.5, 0, 0.3, 1);
		}
		100% {
			transform: translateY(-4px);
			opacity: 1;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.chev {
			animation: pulse 1.2s ease-in-out infinite;
			transform: translateY(-4px);
		}
		.chev:nth-child(2) {
			transform: translateY(4px);
			opacity: 0.55;
			animation: none;
		}
		@keyframes pulse {
			50% {
				opacity: 0.4;
			}
		}
	}
</style>
