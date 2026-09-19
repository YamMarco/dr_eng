<script lang="ts">
	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import type { McqScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { staggerDelay } from '$lib/motion';

	const score = getLessonScore();

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: McqScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	let selected = $state<number | null>(null);
	let checked = $state(false);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	function pick(i: number) {
		if (checked) return;
		selected = i;
		disabled = false;
	}

	// The runner's single button drives both steps: first click checks the
	// answer (right or wrong, doesn't matter which), second click leaves.
	export function primaryAction() {
		if (!checked) {
			if (selected === null) return;
			checked = true;
			recordAnswer(score, selected === screen.correctIndex);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}

	// Honeycomb layout (screen.layout === 'honeycomb', for short vocab-pick
	// options): options keep their authored order — still readable left to
	// right, row by row — but every other row is offset half a cell so the
	// hexagons interlock instead of sitting in stacked rows.
	const HEX_W = 100;
	const HEX_H = 68;
	const COL_STEP = HEX_W * 0.82;
	const ROW_STEP = HEX_H * 0.72;
	const HEX_CLIP = 'polygon(14% 0%, 86% 0%, 100% 50%, 86% 100%, 14% 100%, 0% 50%)';

	let containerWidth = $state(320);
	let cols = $derived(Math.max(1, Math.floor((containerWidth - COL_STEP / 2) / COL_STEP)));
	let positions = $derived(
		screen.options.map((_, i) => {
			const row = Math.floor(i / cols);
			const col = i % cols;
			const offset = row % 2 === 1 ? COL_STEP / 2 : 0;
			return { x: col * COL_STEP + offset, y: row * ROW_STEP };
		})
	);
	let containerHeight = $derived(
		positions.length ? Math.max(...positions.map((p) => p.y)) + HEX_H : HEX_H
	);
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.mcq} />
<ScoreBadge {score} />
<div class="text-lg leading-relaxed font-semibold">
	<!-- Each line gets its own bidi direction: a prompt that switches
	     language line-to-line (an English quote, then a Hebrew question)
	     would otherwise inherit one block direction and align the "wrong"
	     language's line to the wrong edge. -->
	{#each screen.prompt.split('\n') as line, i (i)}
		<p dir="auto">{line}</p>
	{/each}
</div>

{#if screen.layout === 'honeycomb'}
	<div
		bind:clientWidth={containerWidth}
		class="relative mt-5"
		style="height: {containerHeight}px"
		dir="ltr"
	>
		{#each screen.options as option, i (i)}
			{@const isCorrect = i === screen.correctIndex}
			{@const isSelected = selected === i}
			{@const feedback =
				checked && isSelected
					? isCorrect
						? 'motion-safe:animate-pop-correct'
						: 'motion-safe:animate-shake-wrong'
					: ''}
			{@const pos = positions[i]}
			<button
				type="button"
				disabled={checked}
				onclick={() => pick(i)}
				in:scale={{
					start: 0.4,
					duration: 220,
					delay: staggerDelay(i, 0, 20, 160),
					easing: backOut
				}}
				style="left: {pos.x}px; top: {pos.y}px; width: {HEX_W}px; height: {HEX_H}px; clip-path: {HEX_CLIP}"
				class="absolute flex items-center justify-center px-2 text-center text-sm font-semibold whitespace-nowrap transition active:scale-90 {feedback} {checked
					? isCorrect
						? 'bg-brand-soft text-brand-dark'
						: isSelected
							? 'bg-danger-soft text-danger'
							: 'bg-line/40 text-muted'
					: isSelected
						? 'bg-brand-soft text-brand-dark'
						: 'bg-surface text-ink drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)] hover:bg-brand-soft/50'}"
			>
				{option}
			</button>
		{/each}
	</div>
{:else}
	<div class="mt-5 flex flex-col gap-3">
		{#each screen.options as option, i (i)}
			{@const isCorrect = i === screen.correctIndex}
			{@const isSelected = selected === i}
			{@const feedback =
				checked && isSelected
					? isCorrect
						? 'motion-safe:animate-pop-correct'
						: 'motion-safe:animate-shake-wrong'
					: ''}
			<button
				type="button"
				disabled={checked}
				onclick={() => pick(i)}
				class="rounded-2xl border-2 px-4 py-3 text-start font-semibold transition active:scale-[0.97] {feedback} {checked
					? isCorrect
						? 'border-brand bg-brand-soft text-brand-dark'
						: isSelected
							? 'border-danger bg-danger-soft text-danger'
							: 'border-line bg-surface opacity-50'
					: isSelected
						? 'border-brand bg-brand-soft/60'
						: 'border-line bg-surface hover:border-brand'}"
			>
				{option}
			</button>
		{/each}
	</div>
{/if}

{#if checked && screen.explanation}
	<div class="mt-4 rounded-2xl bg-accent-soft p-3">
		<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.answerKeyLabel}</p>
		<p class="leading-relaxed" dir="auto">{screen.explanation}</p>
	</div>
{/if}
