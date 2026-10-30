<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import ExamAnswerReview from './ExamAnswerReview.svelte';
	import SpeakingReview from './SpeakingReview.svelte';
	import type { Take } from '$lib/recorder.svelte';
	import { profile } from '$lib/profile.svelte';
	import { screensWithIds } from './screenIds';
	import type { QuizNode } from './types';
	import AnswerReview from './AnswerReview.svelte';
	import { scoreScreen, type QuizScore } from './scoring';
	import type { ExamGrade } from '$lib/feedback/types';

	let {
		quiz,
		score,
		grades = {},
		grading = false,
		answers = {},
		onGrade,
		onRetry,
		onBack
	}: {
		quiz: QuizNode;
		score: QuizScore;
		/** LLM grades of the open answers, by screen id. */
		grades?: Record<string, ExamGrade>;
		/** Open answers are being graded right now. */
		grading?: boolean;
		/** The submitted answers (COBE recordings are played back from here). */
		answers?: Record<string, unknown>;
		/** A recording judged in the report (COBE self-assessment). */
		onGrade?: (screenId: string, grade: ExamGrade) => void;
		/** Re-grade the answers whose grading failed. */
		onRetry?: () => void;
		onBack: () => void;
	} = $props();

	const screens = $derived(
		new Map(quiz.parts.flatMap((part) => screensWithIds(part).map((e) => [e.id, e.screen])))
	);
	// Question numbers as the student saw them in the navigator.
	const numbers = $derived(
		new Map(quiz.parts.flatMap((part) => screensWithIds(part)).map((e, i) => [e.id, i + 1]))
	);
	const headline = $derived(score.total ?? score.auto);
	// COBE: the student's level picks the rubric's weights.
	const level = $derived(profile.value?.units === '5' ? '5' : '4');
	const hasSpeaking = $derived(
		score.manual.items.some((i) => screens.get(i.screenId)?.type === 'speak')
	);
	// COBE before every recording is judged: no pass / fail yet.
	const pending = $derived(hasSpeaking && !score.total);
	const anyFailed = $derived(Object.values(grades).some((g) => g.status === 'failed'));
	const closed = $derived(
		quiz.parts.flatMap((part) =>
			screensWithIds(part).flatMap(({ id, screen }) =>
				screen.type === 'mcq' || screen.type === 'match-definitions'
					? [{ id, screen, scored: scoreScreen(screen, answers[id]) }]
					: []
			)
		)
	);
</script>

<main class="app-col flex-1 overflow-y-auto px-4 pt-10 pb-12">
	<div class="flex flex-col items-center text-center">
		<span
			class="flex h-16 w-16 items-center justify-center rounded-2xl {pending
				? 'bg-line/60 text-ink/60'
				: score.passed
					? 'bg-brand-soft text-brand'
					: 'bg-miss-soft text-miss'}"
		>
			{#if score.passed && !pending}
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-8 w-8"
					aria-hidden="true"
				>
					<path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z" />
					<path d="m9 12 2 2 4-4" />
				</svg>
			{:else}
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-8 w-8"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="9" />
					<path d="M12 8v5M12 16v.01" />
				</svg>
			{/if}
		</span>
		<h1 class="mt-4 text-2xl font-extrabold">
			{pending
				? i18n.dict.cobeReview.pendingTitle
				: score.passed
					? i18n.dict.quiz.passedTitle
					: i18n.dict.quiz.failedTitle}
		</h1>
		{#if headline.max > 0}
			<p class="mt-4 text-lg font-bold text-brand-dark tabular" dir="ltr">
				{headline.earned}/{headline.max}
			</p>
			<p class="mt-1 text-sm text-muted">
				{score.total ? i18n.dict.quiz.totalScoreLabel : i18n.dict.quiz.autoScoreLabel}
			</p>
		{/if}
		{#if grading}
			<p class="mt-2 text-sm font-semibold text-muted">{i18n.dict.quiz.grading}</p>
		{/if}
	</div>

	<section class="mt-8 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
		<h2 class="mb-3 text-base font-bold">{i18n.dict.quiz.byPartTitle}</h2>
		<ul class="flex flex-col divide-y divide-line/70">
			{#each quiz.parts as part (part.id)}
				{@const partScore = score.byPart[part.id]}
				<li class="flex items-center justify-between py-2 text-sm first:pt-0 last:pb-0">
					<span class="font-semibold">{i18n.title(`${quiz.id}.${part.id}`)}</span>
					{#if partScore && partScore.max > 0}
						<span class="tabular" dir="ltr"
							>{pending && !partScore.auto ? '-' : partScore.earned}/{partScore.max}</span
						>
					{:else}
						<span class="text-muted">{i18n.dict.quiz.manualTitle}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</section>

	{#if closed.length > 0}
		<section class="mt-6 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
			<h2 class="mb-3 text-base font-bold">{i18n.dict.quiz.closedAnswersTitle}</h2>
			<ul class="flex flex-col divide-y divide-line/70">
				{#each closed as c (c.id)}
					<li class="py-4 first:pt-0 last:pb-0">
						<AnswerReview
							label={i18n.dict.quiz.questionProgress(numbers.get(c.id) ?? 0, numbers.size)}
							screen={c.screen}
							answer={answers[c.id]}
							earned={c.scored.earned}
							max={c.scored.max}
						/>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if score.manual.items.length > 0}
		<section class="mt-6 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
			<div class="mb-3 flex items-center justify-between gap-3">
				<h2 class="text-base font-bold">
					{hasSpeaking ? i18n.dict.cobeReview.title : i18n.dict.quiz.openAnswersTitle}
				</h2>
				{#if anyFailed && !grading && onRetry}
					<button
						type="button"
						class="rounded-lg border-2 border-brand px-3 py-1 text-xs font-bold text-brand"
						onclick={onRetry}>{i18n.dict.quiz.retryGrading}</button
					>
				{/if}
			</div>
			{#if hasSpeaking}
				<p class="mb-3 text-sm leading-relaxed text-muted">{i18n.dict.cobeReview.intro}</p>
			{/if}
			<ul class="flex flex-col divide-y divide-line/70">
				{#each score.manual.items as item (item.screenId)}
					{@const screen = screens.get(item.screenId)}
					{@const grade = grades[item.screenId]}
					{#if screen?.type === 'speak' && onGrade}
						<SpeakingReview
							label={i18n.dict.quiz.questionProgress(numbers.get(item.screenId) ?? 0, numbers.size)}
							prompt={screen.prompt}
							part={screen.part ?? 'A'}
							points={item.points}
							{level}
							take={answers[item.screenId] as Take | undefined}
							{grade}
							onGrade={(g) => onGrade(item.screenId, g)}
						/>
					{:else}
						<ExamAnswerReview
							label={grade?.kind === 'essay'
								? i18n.dict.quiz.essayLabel
								: i18n.dict.quiz.questionProgress(numbers.get(item.screenId) ?? 0, numbers.size)}
							prompt={screen && 'prompt' in screen ? String(screen.prompt) : ''}
							points={item.points}
							{grade}
							modelAnswer={screen?.type === 'writing-task' ? screen.modelAnswer : undefined}
							explanation={screen?.type === 'writing-task' ? screen.explanation : undefined}
						/>
					{/if}
				{/each}
			</ul>
		</section>
	{/if}

	<div class="mt-8">
		<Button onclick={onBack}>{i18n.dict.quiz.backToQuizzes}</Button>
	</div>
</main>
