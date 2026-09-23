<script lang="ts">
	// Pure display + tap-to-jump grid. Knows nothing about scoring, parts, or
	// skip/back rules - QuizRunner decides whether to honor a jump.
	let {
		total,
		currentIndex,
		answered,
		onJump,
		style = 'numbers'
	}: {
		total: number;
		currentIndex: number;
		answered: Set<number>;
		onJump: (index: number) => void;
		style?: 'dots' | 'numbers';
	} = $props();
</script>

<div class="flex flex-wrap gap-2" dir="rtl">
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each Array.from({ length: total }) as _, i (i)}
		{@const isAnswered = answered.has(i)}
		{@const isCurrent = i === currentIndex}
		<button
			type="button"
			aria-current={isCurrent ? 'step' : undefined}
			aria-label={`שאלה ${i + 1}`}
			onclick={() => onJump(i)}
			class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition active:scale-90 {isCurrent
				? 'ring-2 ring-brand ring-offset-2 ring-offset-canvas'
				: ''} {isAnswered
				? 'bg-brand-soft text-brand-dark'
				: 'border-2 border-line bg-surface text-muted'}"
		>
			{#if style === 'dots'}
				<span class="h-2 w-2 rounded-full {isAnswered ? 'bg-brand-dark' : 'bg-line'}"></span>
			{:else}
				{i + 1}
			{/if}
		</button>
	{/each}
</div>
