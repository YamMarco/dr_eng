<script lang="ts">
	import type { PassageMcqScreen } from './types';
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
		screen: PassageMcqScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// One question at a time: pick -> check (reveals right/wrong) -> next,
	// regardless of whether the answer was correct. Same flow as
	// timed-passage, minus the stopwatch.
	let qi = $state(0);
	let picked = $state<number | null>(null);
	let checked = $state(false);

	let question = $derived(screen.questions[qi]);
	let isLastQuestion = $derived(qi === screen.questions.length - 1);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	function pick(optionIndex: number) {
		if (checked) return;
		picked = optionIndex;
		disabled = false;
	}

	export function primaryAction() {
		if (!checked) {
			if (picked === null) return;
			checked = true;
			recordAnswer(score, picked === question.correctIndex);
			label = isLastQuestion ? '' : i18n.dict.lesson.nextQuestionButton;
		} else if (!isLastQuestion) {
			qi += 1;
			picked = null;
			checked = false;
			label = i18n.dict.exerciseKind.submitButton;
			disabled = true;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.mcq} />
<ScoreBadge {score} />
<p class="leading-relaxed whitespace-pre-line" dir="ltr">{screen.text}</p>

<div class="mt-6">
	{#if screen.questions.length > 1}
		<p class="mb-2 text-sm font-semibold text-muted">
			{i18n.dict.lesson.questionProgress(qi + 1, screen.questions.length)}
		</p>
	{/if}
	<p class="text-lg leading-relaxed font-semibold">{question.prompt}</p>
	<div class="mt-3 flex flex-col gap-3">
		{#each question.options as option, oi (oi)}
			{@const isCorrect = oi === question.correctIndex}
			{@const isSelected = picked === oi}
			<button
				type="button"
				disabled={checked}
				onclick={() => pick(oi)}
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
</div>
