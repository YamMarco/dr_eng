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
	import { getLastAttempt, retakeLockedUntil } from '$lib/quiz/progress';
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
	// A submitted exam waits 24h before it can be solved again; an unfinished one can be resumed.
	let lockedUntil = $derived(
		quizNode && !running && !row?.inProgress ? retakeLockedUntil(quizNode.id) : null
	);
	let lockedWhen = $derived.by(() => {
		if (!lockedUntil) return '';
		const at = new Date(lockedUntil);
		const time = at.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
		return t.lockedWhen(time, at.toDateString() === new Date().toDateString());
	});

	// The exam's structure, read from the quiz itself: questions (and their
	// points), the writing task when there is one, the time, and how feedback works.
	let rules = $derived.by(() => {
		const parts = quizNode?.parts ?? [];
		const writingPart = parts.find((part) => part.id === 'writing');
		const questionParts = parts.filter((part) => part !== writingPart);
		const withPoints = (text: string, points: number | undefined) =>
			points ? `${text} · ${i18n.dict.quiz.pointsShort(points)}` : text;
		const questionPoints = questionParts.reduce((sum, part) => sum + (part.points ?? 0), 0);
		const list = [
			withPoints(
				t.questionsRule(
					questionParts.flatMap((part) => part.screens).filter((s) => s.type !== 'passage').length
				),
				questionPoints
			)
		];
		const writing = writingPart?.screens[0];
		if (writing?.type === 'writing-task' && writing.minWords && writing.maxWords)
			list.push(withPoints(t.writingRule(writing.minWords, writing.maxWords), writingPart?.points));
		list.push(t.timeRule(quizNode?.options.durationMinutes ?? 90), t.feedbackRule);
		return list;
	});
	// "Title – body" tips show the title bold.
	let tips = $derived(
		(data.mod.id === 'c' ? t.tipsC : t.tips).map((tip) => {
			const [title, ...body] = tip.split(' – ');
			return body.length ? { title, body: body.join(' – ') } : { title: '', body: tip };
		})
	);

	function start() {
		running = true;
		lastEngagement.record({ kind: 'exam', moduleId: data.mod.id, id: quiz.id });
	}

	const card = 'rounded-3xl bg-surface p-5 lg:p-4 shadow-md ring-1 shadow-overlay/5 ring-line/70';
</script>

{#if running && quizNode}
	<QuizRunner quiz={quizNode} onExit={() => (running = false)} />
{:else if viewingSolution && quizNode}
	<QuizSolution quiz={quizNode} onBack={() => (viewingSolution = false)} />
{:else}
	<!-- Fits the screen above the nav (4rem below on phones, 3.5rem above on desktop):
	     only the tips scroll, so the exam's facts and the start button stay in view. -->
	<div class="flex h-[calc(100dvh-4rem)] flex-col lg:h-[calc(100dvh-3.5rem)]">
		<AppBar title={i18n.title(quiz.id)} back={examBase} />

		<main class="app-col flex min-h-0 w-full flex-1 flex-col gap-4 px-4 pt-4 pb-4 lg:gap-3 lg:pt-3">
			{#if taken && row}
				<section
					in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
					class="shrink-0"
				>
					<h2 class="mb-3 text-base font-bold lg:sr-only">{t.scoreboardTitle}</h2>
					<div class="grid grid-cols-3 gap-3">
						<StatTile value={String(row.best)} label={t.bestScoreLabel} />
						<StatTile value={String(row.last)} label={t.lastScoreLabel} />
						<StatTile value={String(row.percents.length)} label={t.triesLabel} />
					</div>
				</section>
			{/if}

			<section
				in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
				class="{card} flex min-h-0 flex-col"
			>
				<ul class="flex shrink-0 flex-wrap gap-1.5" aria-label={t.rulesTitle}>
					{#each rules as rule (rule)}
						<li
							class="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand-dark"
						>
							{rule}
						</li>
					{/each}
				</ul>
				<h2 class="mt-3 shrink-0 text-base font-bold">{taken ? t.prepAgainTitle : t.prepTitle}</h2>
				{#if !lockedUntil}
					<p class="mt-1 shrink-0 text-sm leading-relaxed text-muted">
						{taken ? t.prepAgainDesc : t.prepDesc}
					</p>
				{/if}
				<h3 class="mt-4 shrink-0 text-sm font-bold lg:mt-3">{t.tipsTitle}</h3>
				<!-- Only the tips scroll. On short screens (an iPhone SE) the closing line
				     scrolls with them, so the tips keep room. -->
				<!-- svelte-ignore a11y_no_noninteractive_tabindex (scrollable region: keyboard users scroll it) -->
				<div tabindex="0" class="mt-2 min-h-0 overflow-y-auto overscroll-contain">
					<ol class="flex list-decimal flex-col gap-1.5 ps-5 text-sm leading-relaxed lg:gap-1">
						{#each tips as tip (tip.body)}
							<li>
								{#if tip.title}<strong>{tip.title}</strong> –{/if}
								{tip.body}
							</li>
						{/each}
					</ol>
					{#if !lockedUntil}
						<p class="mt-3 hidden text-sm font-bold [@media(max-height:600px)]:block">
							{t.prepClosing}
						</p>
					{/if}
				</div>
				{#if !lockedUntil}
					<p class="mt-3 shrink-0 text-sm font-bold [@media(max-height:600px)]:hidden">
						{t.prepClosing}
					</p>
				{/if}
			</section>

			<div
				in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}
				class="flex shrink-0 flex-col gap-3 lg:flex-row lg:*:flex-1"
			>
				{#if quizNode}
					{#if !lockedUntil}
						<Button onclick={start}>
							{row?.inProgress
								? t.resumeButton
								: taken
									? t.retakeButton
									: i18n.dict.quiz.startButton}
						</Button>
					{/if}
					{#if lastAttempt}
						<Button
							variant={lockedUntil ? 'primary' : 'secondary'}
							onclick={() => (viewingSolution = true)}
						>
							{i18n.dict.quiz.viewSolutionButton}
						</Button>
					{/if}
				{:else}
					<Button disabled>{i18n.dict.common.comingSoon}</Button>
				{/if}
			</div>
			{#if lockedUntil}
				<p class="-mt-1 shrink-0 text-center text-sm leading-relaxed font-semibold text-muted">
					{t.lockedNote(lockedWhen)}
				</p>
			{/if}
		</main>
	</div>
{/if}
