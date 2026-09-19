<script lang="ts">
	/** Segmented, animated progress bar for a lesson run. Each entry in `segments`
	 *  is the screen count of one bucket (preface, round N, ...) played in order;
	 *  a visible gap between bars marks the boundary between them. */
	type Props = {
		segments: number[];
		/** 0-based index of the screen currently on screen; pass segments-total to show full. */
		current: number;
		/** Slim, padding-free variant for embedding inside a card; fills up from empty each time it mounts. */
		compact?: boolean;
	};

	let { segments, current, compact = false }: Props = $props();

	let total = $derived(segments.reduce((sum, n) => sum + n, 0));

	let fractions = $derived.by(() => {
		let start = 0;
		return segments.map((length) => {
			const fraction = length === 0 ? 1 : Math.min(1, Math.max(0, (current - start) / length));
			start += length;
			return fraction;
		});
	});
</script>

<div
	class="flex w-full items-center gap-1.5 {compact ? '' : 'mx-auto max-w-lg px-4 py-3'}"
	role="progressbar"
	aria-label="התקדמות בשיעור"
	aria-valuenow={Math.min(current, total)}
	aria-valuemin={0}
	aria-valuemax={total}
>
	{#each segments as length, i (i)}
		<div
			class="overflow-hidden rounded-full bg-line {compact ? 'h-1.5' : 'h-2.5'}"
			style="flex-grow: {Math.max(length, 1)}; flex-basis: 0;"
		>
			<div
				class="h-full rounded-full bg-brand transition-[width] duration-300 ease-out {compact
					? 'motion-safe:animate-bar-fill'
					: ''}"
				style="width: {fractions[i] * 100}%{compact ? `; animation-delay: ${i * 45}ms` : ''}"
			></div>
		</div>
	{/each}
</div>
