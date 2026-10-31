<script lang="ts">
	// One answered exam question with its feedback: in practice mode right after
	// the answer, and in the report's closed-questions section. Multiple choice
	// marks the picks and the right answer; matching replays the screen read-only;
	// an open answer shows the model answer (its score comes in the report).
	import AnswerMark from '$lib/lesson-screens/AnswerMark.svelte';
	import Md from '$lib/components/Md.svelte';
	import McqFeedback from '$lib/lesson-screens/McqFeedback.svelte';
	import { optText } from '$lib/lesson-screens/option';
	import MatchDefinitions from '$lib/lesson-screens/MatchDefinitions.svelte';
	import { textDir, textLang } from '$lib/lesson-screens/miniMarkdown';
	import { mcqCorrect, type LessonScreen } from '$lib/lesson-screens/types';
	import { i18n } from '$lib/i18n/index.svelte';
	import ModelAnswer from './ModelAnswer.svelte';

	let {
		screen,
		answer,
		label,
		earned,
		max
	}: {
		screen: LessonScreen;
		answer: unknown;
		/** Report only: the question number and score line. */
		label?: string;
		earned?: number;
		max?: number;
	} = $props();

	const picks = $derived(
		answer === undefined || answer === null ? [] : [answer as number | number[]].flat()
	);
</script>

<div class="flex flex-col gap-2">
	{#if label !== undefined && earned !== undefined && max !== undefined}
		<div class="flex items-baseline justify-between gap-3">
			<span class="text-sm font-bold">{label}</span>
			<span
				class="font-bold tabular {earned === max
					? 'text-brand-dark'
					: earned === 0
						? 'text-miss'
						: 'text-ink'}"
				dir="ltr">{Math.round(earned * 10) / 10}/{max}</span
			>
		</div>
	{/if}

	{#if screen.type === 'mcq'}
		{@const right = mcqCorrect(screen)}
		<div class="text-sm text-muted"><Md block text={screen.prompt} /></div>
		<ul class="flex flex-col gap-1.5">
			{#each screen.options as opt, i (i)}
				{@const option = optText(opt)}
				{@const ok = right.includes(i)}
				{@const picked = picks.includes(i)}
				<li
					class="flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-sm {ok
						? 'border-brand bg-brand-soft/50 text-brand-dark'
						: picked
							? 'border-miss bg-miss-soft/50 text-miss'
							: 'border-line text-muted'}"
					dir={textDir(option)}
					lang={textLang(option)}
				>
					<span class="min-w-0 flex-1"><Md text={option} /></span>
					{#if ok || picked}<AnswerMark right={ok} size={16} />{/if}
				</li>
			{/each}
		</ul>
		{#if picks.length === 0}
			<p class="text-xs font-semibold text-miss">{i18n.dict.quiz.unanswered}</p>
		{/if}
		<McqFeedback {screen} {picks} />
		{#if screen.explanation}
			<div class="rounded-2xl bg-accent-soft p-3 text-sm leading-relaxed">
				<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.answerKeyLabel}</p>
				<Md block text={screen.explanation} />
			</div>
		{/if}
	{:else if screen.type === 'match-definitions'}
		<MatchDefinitions
			{screen}
			review={Array.isArray(answer)
				? (answer as (number | null)[])
				: screen.definitions.map(() => null)}
		/>
	{:else if screen.type === 'writing-task'}
		<div class="text-sm text-muted" dir="ltr"><Md block text={screen.prompt} /></div>
		{#if typeof answer === 'string' && answer.trim()}
			<div
				class="rounded-2xl border border-line bg-canvas p-3 text-sm whitespace-pre-line"
				dir="ltr"
				lang="en"
			>
				{answer}
			</div>
		{/if}
		<p class="text-xs font-semibold text-muted">{i18n.dict.quiz.gradedInReport}</p>
		<ModelAnswer modelAnswer={screen.modelAnswer} explanation={screen.explanation} />
	{/if}
</div>
