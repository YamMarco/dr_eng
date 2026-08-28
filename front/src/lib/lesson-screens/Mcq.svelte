<script lang="ts">
	import type { McqScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';

	const score = getLessonScore();

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: McqScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	let selected = $state<number | null>(null);
	let checked = $state(false);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	function pick(i: number) {
		if (checked) return;
		selected = i;
		disabled = false;
	}

	// The runner's single button drives both steps: first click checks the
	// answer (right or wrong, doesn't matter which), second click leaves.
	export function primaryAction() {
		if (!checked) {
			if (selected === null) return;
			checked = true;
			recordAnswer(score, selected === screen.correctIndex);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.mcq} />
<ScoreBadge {score} />
<p class="text-lg leading-relaxed font-semibold">{screen.prompt}</p>
<div class="mt-5 flex flex-col gap-3">
	{#each screen.options as option, i (i)}
		{@const isCorrect = i === screen.correctIndex}
		{@const isSelected = selected === i}
		<button
			type="button"
			disabled={checked}
			onclick={() => pick(i)}
			class="rounded-2xl border-2 px-4 py-3 text-start font-semibold transition {checked
				? isCorrect
					? 'border-brand bg-brand-soft text-brand-dark'
					: isSelected
						? 'border-danger bg-danger-soft text-danger'
						: 'border-line bg-surface opacity-50'
				: isSelected
					? 'border-brand bg-brand-soft/60'
					: 'border-line bg-surface hover:border-brand'}"
		>
			{option}
		</button>
	{/each}
</div>
