<script lang="ts">
	import type { ClozePickScreen } from './types';
	import Md from '$lib/components/Md.svelte';
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
		screen: ClozePickScreen;
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

	export function primaryAction() {
		if (!checked) {
			if (selected === null) return;
			checked = true;
			recordAnswer(score, screen.correctIndices.includes(selected));
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.clozePick} />
<ScoreBadge {score} />

<p class="leading-relaxed font-semibold" dir="ltr">
	{#if selected !== null}<Md text={screen.options[selected]} />{:else}___{/if}
	<Md text={screen.clause} />
</p>

<div class="mt-5 flex flex-wrap gap-2" dir="ltr">
	{#each screen.options as option, i (i)}
		{@const isCorrect = screen.correctIndices.includes(i)}
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
			class="rounded-xl border-2 px-3 py-2 text-base font-semibold transition active:scale-[0.97] {feedback} {checked
				? isCorrect
					? 'border-brand bg-brand-soft text-brand-dark'
					: isSelected
						? 'border-danger bg-danger-soft text-danger'
						: 'border-line bg-surface opacity-50'
				: isSelected
					? 'border-brand bg-brand-soft/60'
					: 'border-line bg-surface hover:border-brand'}"
		>
			<Md text={option} />
		</button>
	{/each}
</div>

{#if checked && screen.explanation}
	<div class="mt-4 rounded-2xl bg-accent-soft p-3">
		<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.answerKeyLabel}</p>
		<p class="leading-relaxed" dir="auto"><Md text={screen.explanation} /></p>
	</div>
{/if}
