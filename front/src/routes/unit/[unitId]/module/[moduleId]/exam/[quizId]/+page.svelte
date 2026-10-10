<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { getQuizNode } from '$lib/quiz';
	import { getLastAttempt } from '$lib/quiz/progress';
	import QuizRunner from '$lib/quiz/QuizRunner.svelte';
	import QuizSolution from '$lib/quiz/QuizSolution.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let quiz = $derived(data.quiz);
	let examBase = $derived(`/unit/${data.group.id}/module/${data.mod.id}/exam`);
	let quizNode = $derived(getQuizNode(quiz.id));
	let running = $state(false);
	let viewingSolution = $state(false);
	// Re-reads on return from the runner (running flips back to false), so a
	// just-finished attempt shows up without needing a full page reload.
	let lastAttempt = $derived(quizNode && !running ? getLastAttempt(quizNode.id) : null);
</script>

{#if running && quizNode}
	<QuizRunner quiz={quizNode} onExit={() => (running = false)} />
{:else if viewingSolution && quizNode}
	<QuizSolution quiz={quizNode} onBack={() => (viewingSolution = false)} />
{:else}
	<AppBar title={quiz.titleHe} back={examBase} />

	<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
		{#if lastAttempt && lastAttempt.score.auto.max > 0}
			<p
				in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
				class="text-sm text-muted"
			>
				{i18n.dict.quiz.lastAttemptLabel}:
				<span class="font-bold text-ink tabular" dir="ltr">
					{lastAttempt.score.auto.earned}/{lastAttempt.score.auto.max}
				</span>
			</p>
		{/if}

		<div
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
			class="mt-6 flex flex-col gap-3"
		>
			{#if quizNode}
				<Button onclick={() => (running = true)}>{i18n.dict.quiz.startButton}</Button>
				<Button
					variant="secondary"
					disabled={!lastAttempt}
					onclick={() => (viewingSolution = true)}
				>
					{i18n.dict.quiz.viewSolutionButton}
				</Button>
			{:else}
				<Button disabled>{i18n.dict.common.comingSoon}</Button>
			{/if}
			<Button variant="secondary" href={examBase}>{i18n.dict.common.back}</Button>
		</div>
	</main>
{/if}
