<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import StatTile from '$lib/components/StatTile.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { getQuizNode } from '$lib/quiz';
	import { localizeContent } from '$lib/content/localize.svelte';
	import { getLastAttempt } from '$lib/quiz/progress';
	import { examRow } from '$lib/quiz/stats';
	import { lastEngagement } from '$lib/lastEngagement.svelte';
	import QuizRunner from '$lib/quiz/QuizRunner.svelte';
	import QuizSolution from '$lib/quiz/QuizSolution.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let quiz = $derived(data.quiz);
	let examBase = $derived(`/app/unit/${data.group.id}/module/${data.mod.id}/exam`);
	// Played / shown in the UI language (the editor keeps the authored Hebrew).
	let quizNode = $derived.by(() => {
		const node = getQuizNode(quiz.id);
		return node && localizeContent(node, i18n.language);
	});
	let running = $state(false);
	let viewingSolution = $state(false);
	let t = $derived(i18n.dict.quizzes);
	// Re-read on return from the runner (running flips back to false), so a
	// just-finished attempt shows up without a full page reload.
	let lastAttempt = $derived(quizNode && !running ? getLastAttempt(quizNode.id) : null);
	let row = $derived(running ? undefined : examRow(quiz));
	let taken = $derived(!!row?.percents.length);

	// The exam's structure, read from the quiz itself: reading texts and
	// questions, the writing task when there is one, and the time.
	let rules = $derived.by(() => {
		const parts = quizNode?.parts ?? [];
		const screens = parts.flatMap((part) => part.screens);
		const writing = parts.find((part) => part.id === 'writing')?.screens[0];
		const list = [
			t.readingTextsRule(screens.filter((s) => s.type === 'passage').length || 1),
			t.questionsRule(
				parts
					.filter((part) => part.id !== 'writing')
					.flatMap((part) => part.screens)
					.filter((s) => s.type !== 'passage').length
			)
		];
		if (writing?.type === 'writing-task' && writing.minWords && writing.maxWords)
			list.push(t.writingRule(writing.minWords, writing.maxWords));
		list.push(t.timeRule(quizNode?.options.durationMinutes ?? 90));
		return list;
	});
	let tips = $derived(data.mod.id === 'c' ? t.tipsC : t.tips);

	function start() {
		running = true;
		lastEngagement.record({ kind: 'exam', moduleId: data.mod.id, id: quiz.id });
	}

	const card = 'rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70';
</script>

{#if running && quizNode}
	<QuizRunner quiz={quizNode} onExit={() => (running = false)} />
{:else if viewingSolution && quizNode}
	<QuizSolution quiz={quizNode} onBack={() => (viewingSolution = false)} />
{:else}
	<AppBar title={i18n.title(quiz.id)} back={examBase} />

	<main class="app-col flex flex-1 flex-col gap-4 px-4 pt-6 pb-12">
		{#if taken && row}
			<section in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}>
				<h2 class="mb-3 text-base font-bold">{t.scoreboardTitle}</h2>
				<div class="grid grid-cols-3 gap-3">
					<StatTile value={String(row.best)} label={t.bestScoreLabel} />
					<StatTile value={String(row.last)} label={t.lastScoreLabel} />
					<StatTile value={String(row.percents.length)} label={t.triesLabel} />
				</div>
			</section>
		{/if}

		<section
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
			class={card}
		>
			<h2 class="text-base font-bold">{taken ? t.prepAgainTitle : t.prepTitle}</h2>
			<p class="mt-1 text-sm leading-relaxed text-muted">
				{taken ? t.prepAgainDesc : t.prepDesc}
			</p>
			<ul class="mt-3 flex flex-wrap gap-2">
				{#each rules as rule (rule)}
					<li class="rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-dark">
						{rule}
					</li>
				{/each}
			</ul>
			<h3 class="mt-4 text-sm font-bold">{t.tipsTitle}</h3>
			<ul class="mt-2 flex list-disc flex-col gap-1.5 ps-5 text-sm leading-relaxed">
				{#each tips as tip (tip)}
					<li>{tip}</li>
				{/each}
			</ul>
		</section>

		<div
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}
			class="flex flex-col gap-3"
		>
			{#if quizNode}
				<Button onclick={start}>
					{row?.inProgress ? t.resumeButton : taken ? t.retakeButton : i18n.dict.quiz.startButton}
				</Button>
				{#if lastAttempt}
					<Button variant="secondary" onclick={() => (viewingSolution = true)}>
						{i18n.dict.quiz.viewSolutionButton}
					</Button>
				{/if}
			{:else}
				<Button disabled>{i18n.dict.common.comingSoon}</Button>
			{/if}
		</div>
	</main>
{/if}
