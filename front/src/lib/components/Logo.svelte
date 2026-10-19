<script lang="ts">
	// Placeholder brand mark (two "level up" chevrons) and the EngUp wordmark.
	// Same drawing as $lib/assets/favicon.svg.
	let { wordmark = true, class: extra = '' }: { wordmark?: boolean; class?: string } = $props();
</script>

<span class="flex items-center gap-2 {extra}">
	<svg viewBox="0 0 32 32" class="h-8 w-8 shrink-0" aria-hidden="true">
		<rect width="32" height="32" rx="9" class="fill-brand" />
		<path
			d="M9.5 24.5 16 18l6.5 6.5"
			fill="none"
			stroke="white"
			stroke-opacity="0.55"
			stroke-width="3.4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9.5 16.5 16 10l6.5 6.5"
			fill="none"
			stroke="white"
			stroke-width="3.4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
	{#if wordmark}
		<span dir="ltr" class="font-black tracking-tight">Eng<span class="text-brand">Up</span></span>
	{/if}
</span>
