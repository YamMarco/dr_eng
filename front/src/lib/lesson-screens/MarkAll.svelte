<script lang="ts">
	import { scale } from 'svelte/transition';
	import Md from '$lib/components/Md.svelte';
	import { backOut } from 'svelte/easing';
	import type { MarkAllScreen } from './types';
	import { isMarkAllPass } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getLessonSession } from './session.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';
	import { markAllSwatch } from './markAllColors';
	import { markAllSegments } from './markAllTokens';

	const mode = getScreenMode();
	const score = mode === 'lesson' ? getLessonScore() : undefined;
	const answerSlot = mode === 'quiz' ? getQuizAnswerSlot() : undefined;
	const session = getLessonSession();

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: MarkAllScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// Revisiting via the quiz navigator restores whatever was picked before.
	const restoredAnswer = mode === 'quiz' ? (answerSlot!.get() as number[] | undefined) : undefined;
	let picked = $state<number[]>(restoredAnswer ?? []);
	let checked = $state(false);
	let segments = $derived(markAllSegments(screen.text));

	// All target token positions — the flat `correctIndices` plus every
	// category's indices.
	let targets = $derived(
		new Set([...screen.correctIndices, ...(screen.categories ?? []).flatMap((c) => c.indices)])
	);
	// token index -> palette key, for colour-coding the reveal.
	let categoryColorByIndex = $derived.by(() => {
		const m = new Map<number, string>();
		for (const c of screen.categories ?? []) for (const i of c.indices) m.set(i, c.color);
		return m;
	});

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;
	// eslint-disable-next-line no-useless-assignment
	if (mode === 'quiz') disabled = !restoredAnswer?.length;

	// Optional stopwatch (screen.timerKey) — ticks until the answer is checked,
	// then freezes and leaves the elapsed ms in the session for a later
	// time-result screen. Same contract as PassageMcq.
	const startedAt = performance.now();
	let now = $state(startedAt);

	$effect(() => {
		const key = screen.timerKey;
		if (!key || checked) return;
		const interval = setInterval(() => {
			now = performance.now();
			session[key] = now - startedAt;
		}, 100);
		return () => clearInterval(interval);
	});

	function toggle(i: number) {
		if (checked) return;
		picked = picked.includes(i) ? picked.filter((x) => x !== i) : [...picked, i];
		disabled = picked.length === 0;
	}

	let passed = $derived(checked ? isMarkAllPass(screen, picked) : false);

	export function primaryAction() {
		if (mode === 'quiz') {
			if (picked.length === 0) return;
			if (screen.timerKey) session[screen.timerKey] = performance.now() - startedAt;
			answerSlot!.set(picked);
			onAdvance();
			return;
		}
		if (!checked) {
			if (picked.length === 0) return;
			checked = true;
			if (screen.timerKey) session[screen.timerKey] = performance.now() - startedAt;
			recordAnswer(score!, isMarkAllPass(screen, picked));
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

{#if mode === 'lesson'}
	<ExerciseKindBadge label={i18n.dict.exerciseKind.markAll} />
{/if}
{#if score}
	<ScoreBadge {score} />
{/if}
<div class="mb-3 flex items-center justify-between gap-3">
	<div class="font-semibold"><Md block text={screen.instruction} /></div>
	{#if screen.timerKey}
		<span
			class="shrink-0 rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-dark tabular"
			dir="ltr"
		>
			{((now - startedAt) / 1000).toFixed(1)}s
		</span>
	{/if}
</div>

{#if screen.categories?.length}
	<div class="mb-3 flex flex-wrap gap-2">
		{#each screen.categories as cat (cat.name)}
			{@const sw = markAllSwatch(cat.color)}
			<span
				class="rounded-full px-2.5 py-0.5 text-xs font-bold"
				style="background:{sw.bg};color:{sw.fg}"
			>
				{cat.name}
			</span>
		{/each}
	</div>
{/if}

{#if screen.wordBank?.length}
	<div class="mb-4 rounded-2xl bg-accent-soft p-3">
		<p class="mb-2 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.wordBankLabel}</p>
		<div class="flex flex-wrap gap-2" dir="ltr">
			{#each screen.wordBank as bankWord (bankWord)}
				<span class="rounded-lg bg-surface px-2 py-1 text-sm font-semibold ring-1 ring-line/70">
					{bankWord}
				</span>
			{/each}
		</div>
	</div>
{/if}

<p class="text-lg leading-loose whitespace-pre-wrap select-none" dir={screen.dir ?? 'ltr'}>
	{#each segments as seg (seg.token ? `t${seg.index}` : `w${seg.index}`)}{#if seg.token}{@const isTarget =
				targets.has(seg.index)}{@const isPicked = picked.includes(seg.index)}{@const revealSwatch =
				checked && isTarget && categoryColorByIndex.has(seg.index)
					? markAllSwatch(categoryColorByIndex.get(seg.index))
					: null}<button
				type="button"
				disabled={checked}
				onclick={() => toggle(seg.index)}
				style={revealSwatch ? `background:${revealSwatch.bg};color:${revealSwatch.fg}` : undefined}
				class="rounded-sm px-0.5 font-semibold transition active:scale-95 {revealSwatch
					? ''
					: checked
						? isTarget
							? 'bg-brand-soft text-brand-dark'
							: isPicked
								? 'bg-danger-soft text-danger line-through'
								: 'opacity-60'
						: isPicked
							? 'bg-brand-soft ring-1 ring-brand/40'
							: 'hover:bg-line/50'}">{seg.text}</button
			>{:else}{seg.text}{/if}{/each}
</p>

{#if checked}
	<p
		in:scale={{ start: 0.7, duration: 220, easing: backOut }}
		class="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold {passed
			? 'bg-brand-soft text-brand-dark'
			: 'bg-danger-soft text-danger'}"
	>
		{passed ? '✓' : '✗'}
		{passed ? i18n.dict.exerciseKind.passedFeedback : i18n.dict.exerciseKind.notPassedFeedback}
	</p>
{/if}
