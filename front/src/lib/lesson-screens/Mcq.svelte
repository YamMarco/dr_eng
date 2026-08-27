<script lang="ts">
	import type { McqScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// disabled is written but never read locally — the runner reads it
	// through the bindable prop.
	// eslint-disable-next-line no-useless-assignment
	let { screen, disabled = $bindable(true) }: { screen: McqScreen; disabled?: boolean } = $props();

	let selected = $state<number | null>(null);

	function pick(i: number) {
		if (selected !== null) return;
		selected = i;
		disabled = false;
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.mcq} />
<p class="text-lg leading-relaxed font-semibold">{screen.prompt}</p>
<div class="mt-5 flex flex-col gap-3">
	{#each screen.options as option, i (i)}
		{@const isCorrect = i === screen.correctIndex}
		{@const isSelected = selected === i}
		<button
			type="button"
			disabled={selected !== null}
			onclick={() => pick(i)}
			class="rounded-2xl border-2 px-4 py-3 text-start font-semibold transition {selected === null
				? 'border-line bg-surface hover:border-brand'
				: isCorrect
					? 'border-brand bg-brand-soft text-brand-dark'
					: isSelected
						? 'border-danger bg-danger-soft text-danger'
						: 'border-line bg-surface opacity-50'}"
		>
			{option}
		</button>
	{/each}
</div>
