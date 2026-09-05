<script lang="ts">
	import type { MarkAllScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getLessonSession } from './session.svelte';
	import { markAllSwatch } from './markAllColors';

	const score = getLessonScore();
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

	let picked = $state<number[]>([]);
	let checked = $state(false);
	let words = $derived(screen.text.split(/\s+/));

	// All target token positions — the flat `correctIndices` plus every
	// category's indices.
	let targets = $derived(
		new Set([
			...screen.correctIndices,
			...(screen.categories ?? []).flatMap((c) => c.indices)
		])
	);
	// token index -> palette key, for colour-coding the reveal.
	let categoryColorByIndex = $derived.by(() => {
		const m = new Map<number, string>();
		for (const c of screen.categories ?? []) for (const i of c.indices) m.set(i, c.color);
		return m;
	});

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	// Optional stopwatch (screen.timerKey) — ticks until the answer is checked,
	// then freezes and leaves the elapsed ms in the session for a later
	// time-result screen. Same contract as TimedPassage.
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

	// Lenient: skimming is about spotting most eye catchers fast, not a perfect
	// sweep — pass on 70%+ of them found with at most one stray tap.
	function isPass(): boolean {
		let hits = 0;
		let wrong = 0;
		for (const i of picked) {
			if (targets.has(i)) hits += 1;
			else wrong += 1;
		}
		return wrong <= 1 && hits >= Math.ceil(targets.size * 0.7);
	}

	export function primaryAction() {
		if (!checked) {
			if (picked.length === 0) return;
			checked = true;
			if (screen.timerKey) session[screen.timerKey] = performance.now() - startedAt;
			recordAnswer(score, isPass());
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.markAll} />
<ScoreBadge {score} />
<div class="mb-3 flex items-center justify-between gap-3">
	<p class="font-semibold">{screen.instruction}</p>
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

<div class="flex flex-wrap gap-x-2 gap-y-3 leading-loose" dir={screen.dir ?? 'ltr'}>
	{#each words as word, i (i)}
		{@const isTarget = targets.has(i)}
		{@const isPicked = picked.includes(i)}
		{@const revealSwatch =
			checked && isTarget && categoryColorByIndex.has(i)
				? markAllSwatch(categoryColorByIndex.get(i))
				: null}
		<button
			type="button"
			disabled={checked}
			style={revealSwatch
				? `background:${revealSwatch.bg};color:${revealSwatch.fg};border-color:${revealSwatch.bg}`
				: undefined}
			class="rounded-lg border-2 px-2 py-1 font-semibold transition {revealSwatch
				? ''
				: checked
					? isTarget
						? 'border-brand bg-brand-soft text-brand-dark'
						: isPicked
							? 'border-danger bg-danger-soft text-danger'
							: 'border-transparent opacity-60'
					: isPicked
						? 'border-brand bg-brand-soft/60'
						: 'border-transparent hover:border-line'}"
		>
			{word}
		</button>
	{/each}
</div>
