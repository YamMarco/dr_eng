<script lang="ts">
	import type { MarkWordScreen } from './types';
	import Md from '$lib/components/Md.svelte';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
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
		screen: MarkWordScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	let selected = $state<number | null>(null);
	let checked = $state(false);
	let words = $derived(screen.sentence.split(' '));

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	function pick(i: number) {
		if (checked) return;
		selected = i;
		disabled = false;
	}

	export function primaryAction() {
		if (!checked) {
			if (selected === null) return;
			checked = true;
			recordAnswer(score, selected === screen.correctWordIndex);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.markWord} />
{#if screen.prompt}
	<div class="mb-4 text-lg leading-relaxed font-semibold"><Md block text={screen.prompt} /></div>
{/if}
<div class="flex flex-wrap gap-2" dir={screen.dir ?? 'ltr'}>
	{#each words as word, i (i)}
		{@const isCorrect = i === screen.correctWordIndex}
		{@const isSelected = selected === i}
		{@const feedback =
			checked && isSelected
				? isCorrect
					? 'motion-safe:animate-pop-correct'
					: 'motion-safe:animate-shake-wrong'
				: ''}
		<button
			type="button"
			disabled={checked}
			onclick={() => pick(i)}
			class="rounded-xl border-2 px-3 py-2 text-lg font-semibold transition active:scale-[0.97] {feedback} {checked
				? isCorrect
					? 'border-brand bg-brand-soft text-brand-dark'
					: isSelected
						? 'border-danger bg-danger-soft text-danger'
						: 'border-line bg-surface opacity-50'
				: isSelected
					? 'border-brand bg-brand-soft/60'
					: 'border-line bg-surface hover:border-brand'}"
		>
			{word}
		</button>
	{/each}
</div>
