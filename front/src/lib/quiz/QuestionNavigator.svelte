<script lang="ts">
	// Pure display + tap-to-jump grid. Knows nothing about scoring, parts, or
	// skip/back rules - QuizRunner decides whether to honor a jump.
	let {
		total,
		currentIndex,
		answered,
		onJump,
		style = 'numbers',
		passageIndices,
		partBreaks
	}: {
		total: number;
		currentIndex: number;
		answered: Set<number>;
		onJump: (index: number) => void;
		style?: 'dots' | 'numbers';
		passageIndices?: Set<number>;
		/** Indices where a new part starts (a small divider is drawn just before them). */
		partBreaks?: Set<number>;
	} = $props();

	let buttonEls: (HTMLButtonElement | undefined)[] = [];

	// Keeps the current question in view as the student advances (or jumps)
	// past the edge of the scrollable row.
	$effect(() => {
		buttonEls[currentIndex]?.scrollIntoView({
			behavior: 'smooth',
			inline: 'nearest',
			block: 'nearest'
		});
	});
</script>

<!-- Edge fade, not a hard cutoff - hints there are more questions to scroll to
     without needing to know which side actually overflows (numbers vs. the
     wider "קטע קריאה" pill make that vary). -->
<div
	class="scrollbar-none flex min-w-0 flex-nowrap items-center gap-1.5 overflow-x-auto mask-[linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]"
	dir="rtl"
>
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each Array.from({ length: total }) as _, i (i)}
		{@const isAnswered = answered.has(i)}
		{@const isCurrent = i === currentIndex}
		{@const isPassage = passageIndices?.has(i)}
		{#if i > 0 && partBreaks?.has(i)}
			<span class="mx-0.5 h-5 w-px shrink-0 bg-line" aria-hidden="true"></span>
		{/if}
		<button
			bind:this={buttonEls[i]}
			type="button"
			aria-current={isCurrent ? 'step' : undefined}
			aria-label={isPassage ? `קטע קריאה, שאלה ${i + 1}` : `שאלה ${i + 1}`}
			onclick={() => onJump(i)}
			class="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border-2 px-2 text-sm font-bold transition active:scale-90 {isCurrent
				? 'border-brand'
				: isAnswered
					? 'border-transparent'
					: 'border-line'} {isAnswered ? 'bg-brand-soft text-brand-dark' : 'bg-surface text-muted'}"
		>
			{#if style === 'dots'}
				<span class="h-2 w-2 rounded-full {isAnswered ? 'bg-brand-dark' : 'bg-line'}"></span>
			{:else}
				{i + 1}
			{/if}
			{#if isPassage}
				<span class="font-semibold">קטע קריאה</span>
			{/if}
		</button>
	{/each}
</div>
