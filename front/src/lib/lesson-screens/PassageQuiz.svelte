<script lang="ts">
	import { untrack } from 'svelte';
	import type { PassageQuizScreen } from './types';
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
		screen: PassageQuizScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// One-time read: the runner remounts this component fresh per screen, so
	// `screen` is fixed for this instance's lifetime.
	let answers = $state<string[]>(untrack(() => screen.questions.map(() => '')));
	let checked = $state(false);
	let results = $state<boolean[]>([]);

	let allAnswered = $derived(answers.every((answer) => answer.trim().length > 0));

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	$effect(() => {
		if (!checked) disabled = !allAnswered;
	});

	function normalize(value: string) {
		return value
			.toLowerCase()
			.replace(/[^a-z0-9\s]/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
	}

	export function primaryAction() {
		if (!checked) {
			if (!allAnswered) return;
			results = screen.questions.map((question, i) => {
				const given = normalize(answers[i]);
				return question.keywords.every((keyword) => given.includes(keyword.toLowerCase()));
			});
			results.forEach((correct) => recordAnswer(score, correct));
			checked = true;
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.mcq} />
<ScoreBadge {score} />
<p class="leading-relaxed" dir="ltr">{screen.text}</p>

<div class="mt-6 flex flex-col gap-5">
	{#each screen.questions as question, i (i)}
		{@const correct = results[i]}
		<div>
			<p class="leading-relaxed font-semibold">
				{question.prompt}
				{#if question.points}
					<span class="text-sm font-normal text-muted">({question.points} נק')</span>
				{/if}
			</p>
			<input
				type="text"
				dir="ltr"
				disabled={checked}
				bind:value={answers[i]}
				class="mt-2 w-full rounded-xl border-2 px-3 py-2 font-semibold transition {checked
					? correct
						? 'border-brand bg-brand-soft text-brand-dark'
						: 'border-danger bg-danger-soft text-danger'
					: 'border-line bg-surface focus:border-brand'}"
			/>
			{#if checked && !correct}
				<p class="mt-1 text-sm text-muted">התשובה: {question.answerHint}</p>
			{/if}
		</div>
	{/each}
</div>
