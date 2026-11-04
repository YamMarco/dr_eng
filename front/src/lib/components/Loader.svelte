<script lang="ts">
	// The logo's two "level up" chevrons climbing in a loop. Appears after a short
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
		{#each [0, 1, 2] as i (i)}
			<path
				class="chev"
				style="animation-delay: {i * 0.4}s"
				d="M7 20 16 11l9 9"
				fill="none"
				stroke="currentColor"
				stroke-width="4"
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
	/* Each chevron rises from below, brightens at the logo's spot and fades out
	   above: a staggered conveyor of "level ups". */
	.chev {
		opacity: 0;
		animation: climb 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
	@keyframes appear {
		from {
			opacity: 0;
		}
	}
	@keyframes climb {
		0% {
			transform: translateY(9px);
			opacity: 0;
		}
		35% {
			opacity: 0.55;
		}
		60% {
			transform: translateY(-1px);
			opacity: 1;
		}
		100% {
			transform: translateY(-10px);
			opacity: 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.chev {
			animation: pulse 1.2s ease-in-out infinite;
		}
		.chev:nth-child(1) {
			transform: translateY(4px);
		}
		.chev:nth-child(2) {
			transform: translateY(-4px);
		}
		.chev:nth-child(3) {
			display: none;
		}
		@keyframes pulse {
			0%,
			100% {
				opacity: 0.4;
			}
			50% {
				opacity: 1;
			}
		}
	}
</style>
