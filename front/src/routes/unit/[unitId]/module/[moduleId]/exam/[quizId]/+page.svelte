<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { getQuizNode } from '$lib/quiz';
	import { getLastAttempt } from '$lib/quiz/progress';
	import QuizRunner from '$lib/quiz/QuizRunner.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let quiz = $derived(data.quiz);
	let examBase = $derived(`/unit/${data.group.id}/module/${data.mod.id}/exam`);
	let quizNode = $derived(getQuizNode(quiz.id));
	let running = $state(false);
	// Re-reads on return from the runner (running flips back to false), so a
	// just-finished attempt shows up without needing a full page reload.
	let lastAttempt = $derived(quizNode && !running ? getLastAttempt(quizNode.id) : null);

	// Ministry quizzes run to the real exam length; assorted ones stay short.
	let questionCount = $derived(quiz.kind === 'ministry' ? 25 : 12);
	let minutes = $derived(quiz.kind === 'ministry' ? 90 : 20);

	let showTimer = $state(true);
</script>

{#if running && quizNode}
	<QuizRunner quiz={quizNode} onExit={() => (running = false)} {showTimer} />
{:else}
	<AppBar title={quiz.titleHe} back={examBase} />

	<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
		<section
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
			class="rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70"
		>
			<h2 class="mb-3 text-base font-bold">{i18n.dict.quizzes.rulesTitle}</h2>
			<ul class="flex flex-col divide-y divide-line/70">
				<li class="py-2 text-sm first:pt-0 last:pb-0">
					{i18n.dict.quizzes.questionsRule(questionCount)}
				</li>
				<li class="py-2 text-sm first:pt-0 last:pb-0">{i18n.dict.quizzes.timeRule(minutes)}</li>
			</ul>
		</section>

		<section
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
			class="mt-6 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70"
		>
			<h2 class="mb-3 text-base font-bold">{i18n.dict.quizzes.controlsTitle}</h2>
			<div class="flex items-center justify-between">
				<span class="text-sm font-semibold">{i18n.dict.quizzes.showTimerLabel}</span>
				<Toggle bind:checked={showTimer} label={i18n.dict.quizzes.showTimerLabel} />
			</div>
		</section>

		<!-- Mock scoreboard - real numbers land once quiz attempts are tracked -->
		<section
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}
			class="mt-6"
		>
			<h2 class="mb-3 text-base font-bold">{i18n.dict.quizzes.scoreboardTitle}</h2>
			<div class="grid grid-cols-3 gap-3">
				<div
					class="rounded-2xl bg-surface p-3 text-center shadow-md ring-1 shadow-overlay/5 ring-line/70"
				>
					<p class="text-xl font-extrabold tabular">92</p>
					<p class="mt-1 text-xs text-muted">{i18n.dict.quizzes.bestScoreLabel}</p>
				</div>
				<div
					class="rounded-2xl bg-surface p-3 text-center shadow-md ring-1 shadow-overlay/5 ring-line/70"
				>
					<p class="text-xl font-extrabold tabular">
						{lastAttempt && lastAttempt.score.auto.max > 0
							? `${lastAttempt.score.auto.earned}/${lastAttempt.score.auto.max}`
							: '81'}
					</p>
					<p class="mt-1 text-xs text-muted">{i18n.dict.quizzes.lastScoreLabel}</p>
				</div>
				<div
					class="rounded-2xl bg-surface p-3 text-center shadow-md ring-1 shadow-overlay/5 ring-line/70"
				>
					<p class="text-xl font-extrabold tabular">85</p>
					<p class="mt-1 text-xs text-muted">{i18n.dict.quizzes.avgScoreLabel}</p>
				</div>
			</div>
		</section>

		<div
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(3), easing: cubicOut }}
			class="mt-8 flex flex-col gap-3"
		>
			{#if quizNode}
				<Button onclick={() => (running = true)}>{i18n.dict.quiz.startButton}</Button>
			{:else}
				<Button disabled>{i18n.dict.common.comingSoon}</Button>
			{/if}
			<Button variant="secondary" href={examBase}>{i18n.dict.common.back}</Button>
		</div>
	</main>
{/if}
