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
</script>

<div class="flex flex-wrap items-center gap-1.5" dir="rtl">
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each Array.from({ length: total }) as _, i (i)}
		{@const isAnswered = answered.has(i)}
		{@const isCurrent = i === currentIndex}
		{@const isPassage = passageIndices?.has(i)}
		{#if i > 0 && partBreaks?.has(i)}
			<span class="mx-0.5 h-5 w-px shrink-0 bg-line" aria-hidden="true"></span>
		{/if}
		<button
			type="button"
			aria-current={isCurrent ? 'step' : undefined}
			aria-label={isPassage ? `קטע קריאה, שאלה ${i + 1}` : `שאלה ${i + 1}`}
			onclick={() => onJump(i)}
			class="flex h-6 shrink-0 items-center justify-center gap-1 rounded-full px-2 text-xs font-bold transition active:scale-90 {isCurrent
				? 'ring-2 ring-brand ring-offset-1 ring-offset-canvas'
				: ''} {isAnswered
				? 'bg-brand-soft text-brand-dark'
				: 'border-2 border-line bg-surface text-muted'}"
		>
			{#if style === 'dots'}
				<span class="h-1.5 w-1.5 rounded-full {isAnswered ? 'bg-brand-dark' : 'bg-line'}"></span>
			{:else}
				{i + 1}
			{/if}
			{#if isPassage}
				<span class="font-semibold">קטע קריאה</span>
			{/if}
		</button>
	{/each}
</div>
