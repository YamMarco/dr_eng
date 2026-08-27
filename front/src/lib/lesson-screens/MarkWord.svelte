<script lang="ts">
	import type { MarkWordScreen } from './types';

	// disabled is written but never read locally — the runner reads it
	// through the bindable prop.
	// eslint-disable-next-line no-useless-assignment
	let { screen, disabled = $bindable(true) }: { screen: MarkWordScreen; disabled?: boolean } =
		$props();

	let selected = $state<number | null>(null);
	let words = $derived(screen.sentence.split(' '));

	function pick(i: number) {
		if (selected !== null) return;
		selected = i;
		disabled = false;
	}
</script>

<div class="flex flex-wrap gap-2" dir={screen.dir ?? 'ltr'}>
	{#each words as word, i (i)}
		{@const isCorrect = i === screen.correctWordIndex}
		{@const isSelected = selected === i}
		<button
			type="button"
			disabled={selected !== null}
			onclick={() => pick(i)}
			class="rounded-xl border-2 px-3 py-2 text-lg font-semibold transition {selected === null
				? 'border-line bg-surface hover:border-brand'
				: isCorrect
					? 'border-brand bg-brand-soft text-brand-dark'
					: isSelected
						? 'border-danger bg-danger-soft text-danger'
						: 'border-line bg-surface opacity-50'}"
		>
			{word}
		</button>
	{/each}
</div>
