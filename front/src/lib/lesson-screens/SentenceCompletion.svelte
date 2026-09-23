<script lang="ts">
	import Md from '$lib/components/Md.svelte';
	import type { SentenceCompletionScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';

	const mode = getScreenMode();
	const score = mode === 'lesson' ? getLessonScore() : undefined;
	const answerSlot = mode === 'quiz' ? getQuizAnswerSlot() : undefined;

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: SentenceCompletionScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	let answer = $state('');
	let checked = $state(false);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	function normalize(value: string) {
		return value
			.toLowerCase()
			.replace(/[^a-z0-9\s]/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
	}

	let correct = $state(false);

	$effect(() => {
		if (!checked) disabled = !answer.trim();
	});

	export function primaryAction() {
		if (mode === 'quiz') {
			if (!answer.trim()) return;
			answerSlot!.set(answer);
			onAdvance();
			return;
		}
		if (!checked) {
			if (!answer.trim()) return;
			const given = normalize(answer);
			correct = screen.modelAnswers.some((model) => normalize(model) === given);
			recordAnswer(score!, correct);
			checked = true;
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<div class="flex flex-wrap items-center gap-2">
	<ExerciseKindBadge label={i18n.dict.exerciseKind.sentenceCompletion} />
	{#if screen.paragraphRef}
		<span
			class="mb-3 inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-ink/70"
			dir="ltr"
		>
			{screen.paragraphRef}
		</span>
	{/if}
</div>
{#if mode === 'lesson'}
	<ScoreBadge score={score!} />
{/if}

<div class="text-lg leading-relaxed font-semibold" dir="ltr">
	<Md text={screen.before} />
	<input
		type="text"
		dir="ltr"
		disabled={checked}
		bind:value={answer}
		class="mx-1 inline-block w-40 rounded-lg border-2 px-2 py-1 align-middle text-base font-semibold transition {checked
			? correct
				? 'border-brand bg-brand-soft text-brand-dark motion-safe:animate-pop-correct'
				: 'border-danger bg-danger-soft text-danger motion-safe:animate-shake-wrong'
			: 'border-line bg-surface focus:border-brand'}"
	/>
	<Md text={screen.after} />
</div>

{#if checked && !correct}
	<div class="mt-4 rounded-2xl bg-accent-soft p-3">
		<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.answerKeyLabel}</p>
		<p class="leading-relaxed" dir="ltr">{screen.modelAnswers[0]}</p>
	</div>
{/if}
