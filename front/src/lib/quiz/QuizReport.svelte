<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { QuizNode } from './types';
	import type { QuizScore } from './scoring';

	let { quiz, score, onBack }: { quiz: QuizNode; score: QuizScore; onBack: () => void } = $props();
</script>

<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto px-4 pt-10 pb-12">
	<div class="flex flex-col items-center text-center">
		<span
			class="flex h-16 w-16 items-center justify-center rounded-2xl {score.passed
				? 'bg-brand-soft text-brand'
				: 'bg-danger-soft text-danger'}"
		>
			{#if score.passed}
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
			{score.passed ? i18n.dict.quiz.passedTitle : i18n.dict.quiz.failedTitle}
		</h1>
		{#if score.auto.max > 0}
			<p class="mt-4 text-lg font-bold text-brand-dark tabular" dir="ltr">
				{score.auto.earned}/{score.auto.max}
			</p>
			<p class="mt-1 text-sm text-muted">{i18n.dict.quiz.autoScoreLabel}</p>
		{/if}
	</div>

	<section class="mt-8 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
		<h2 class="mb-3 text-base font-bold">{i18n.dict.quiz.byPartTitle}</h2>
		<ul class="flex flex-col divide-y divide-line/70">
			{#each quiz.parts as part (part.id)}
				{@const partScore = score.byPart[part.id]}
				<li class="flex items-center justify-between py-2 text-sm first:pt-0 last:pb-0">
					<span class="font-semibold">{part.titleHe}</span>
					{#if partScore && partScore.max > 0}
						<span class="tabular" dir="ltr">{partScore.earned}/{partScore.max}</span>
					{:else}
						<span class="text-muted">{i18n.dict.quiz.manualTitle}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</section>

	{#if score.manual.items.length > 0}
		<section class="mt-6 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
			<h2 class="mb-1 text-base font-bold">{i18n.dict.quiz.manualTitle}</h2>
			<p class="mb-3 text-sm text-muted">{i18n.dict.quiz.manualDesc}</p>
			<ul class="flex flex-col divide-y divide-line/70">
				{#each score.manual.items as item, i (item.screenId)}
					<li class="flex items-center justify-between py-2 text-sm first:pt-0 last:pb-0">
						<span>{i18n.dict.quiz.questionProgress(i + 1, score.manual.items.length)}</span>
						<span class="text-muted tabular" dir="ltr"
							>{i18n.dict.quiz.manualItem(item.points)}</span
						>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<div class="mt-8">
		<Button onclick={onBack}>{i18n.dict.quiz.backToQuizzes}</Button>
	</div>
</main>
