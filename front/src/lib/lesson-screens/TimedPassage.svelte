<script lang="ts">
	import type { TimedPassageScreen } from './types';
	import { getLessonSession } from './session.svelte';
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
		screen: TimedPassageScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	const session = getLessonSession();
	const startedAt = performance.now();
	let now = $state(startedAt);

	// One question at a time: pick -> check (reveals right/wrong) -> next,
	// regardless of whether the answer was correct.
	let qi = $state(0);
	let picked = $state<number | null>(null);
	let checked = $state(false);
	let finished = $state(false);

	let question = $derived(screen.questions[qi]);
	let isLastQuestion = $derived(qi === screen.questions.length - 1);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	// Ticks (and keeps the session's running total updated) until the last
	// question is checked.
	$effect(() => {
		if (finished) return;
		const interval = setInterval(() => {
			now = performance.now();
			session[screen.timerKey] = now - startedAt;
		}, 100);
		return () => clearInterval(interval);
	});

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
			if (isLastQuestion) {
				finished = true;
				session[screen.timerKey] = performance.now() - startedAt;
				label = '';
			} else {
				label = i18n.dict.lesson.nextQuestionButton;
			}
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

<ExerciseKindBadge label={i18n.dict.exerciseKind.timedReading} />
<ScoreBadge {score} />
<div class="flex items-center justify-between">
	<span class="font-semibold text-muted">{screen.label}</span>
	<span
		class="rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-dark tabular"
		dir="ltr"
	>
		{((now - startedAt) / 1000).toFixed(1)}s
	</span>
</div>
<p class="mt-4 leading-relaxed">{screen.text}</p>

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
