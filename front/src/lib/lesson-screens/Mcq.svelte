<script lang="ts">
	import { scale } from 'svelte/transition';
	import Md from '$lib/components/Md.svelte';
	import { textDir } from './miniMarkdown';
	import { backOut } from 'svelte/easing';
	import { mcqCorrect, type McqScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import TryAgain from './TryAgain.svelte';
	import { optFeedback, optText } from './option';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';
	import { staggerDelay } from '$lib/motion';
	import { shuffle } from './shuffle';
	import { untrack } from 'svelte';
	import ListenCard from './ListenCard.svelte';
	import McqFeedback from './McqFeedback.svelte';
	import AnswerMark from './AnswerMark.svelte';
	import { getRuleChain } from '$lib/feedback/context';
	import { resolveRules } from '$lib/feedback/rules';

	const mode = getScreenMode();
	const score = mode === 'lesson' ? getLessonScore() : undefined;
	const answerSlot = mode === 'quiz' ? getQuizAnswerSlot() : undefined;

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

	// One right answer, or N for a tick-N question (pick exactly N).
	let right = $derived(mcqCorrect(screen));
	let needed = $derived(Math.max(1, right.length));

	// Revisiting via the quiz navigator restores whatever was picked before
	// (a number for a plain question, an array for tick-N).
	const restored =
		mode === 'quiz' ? (answerSlot!.get() as number | number[] | undefined) : undefined;
	let picks = $state<number[]>(restored === undefined ? [] : [restored].flat());
	let checked = $state(false);
	let hintShown = $state(false);

	// Tries before the verdict (lesson rules, then this screen). A miss with
	// tries left locks that option, shows its feedback and lets the student pick
	// again; one answer is recorded, at the verdict. Tick-N questions get one try.
	const ruleChain = getRuleChain();
	let tries = $derived(
		mode === 'lesson' ? resolveRules([...ruleChain, { tries: screen.tries }]).tries : 1
	);
	let missed = $state<number[]>([]);
	let lastMiss = $derived(missed.at(-1));

	// Lesson mode shows the options in a fresh order each time, so "the answer
	// is always the second one" can't be learned. `order[slot]` = the authored
	// index shown in that slot; `picks` / `right` stay authored indices.
	// Quiz mode keeps the authored order (an exam paper is fixed).
	const identity = (n: number) => Array.from({ length: n }, (_, i) => i);
	const shuffled = untrack(() =>
		mode === 'lesson' ? shuffle(identity(screen.options.length)) : identity(screen.options.length)
	);
	// The editor's live preview can add or remove options under a mounted screen.
	let order = $derived(
		shuffled.length === screen.options.length ? shuffled : identity(screen.options.length)
	);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;
	// Disabled until a pick in both modes - the runner's footer starts enabled.
	// eslint-disable-next-line no-useless-assignment
	disabled = restored === undefined;

	function pick(i: number) {
		if (checked || missed.includes(i)) return;
		if (needed === 1) picks = [i];
		else if (picks.includes(i)) picks = picks.filter((p) => p !== i);
		else if (picks.length < needed) picks = [...picks, i];
		disabled = picks.length !== needed;
	}

	// The runner's single button drives both steps: first click checks the
	// answer (right or wrong, doesn't matter which), second click leaves.
	// Quiz mode skips the check/feedback step entirely: the button just
	// records the pick and advances.
	export function primaryAction() {
		if (picks.length !== needed) return;
		if (mode === 'quiz') {
			answerSlot!.set(needed === 1 ? picks[0] : picks);
			onAdvance();
			return;
		}
		if (!checked) {
			const ok = picks.every((p) => right.includes(p));
			if (!ok && needed === 1 && missed.length + 1 < tries) {
				missed = [...missed, picks[0]];
				picks = [];
				disabled = true;
				hintShown = true;
				return;
			}
			checked = true;
			recordAnswer(score!, ok);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}

	// Honeycomb layout (screen.layout === 'honeycomb', for short vocab-pick
	// options): options read left to right in display order, and are
	// spread evenly across the width in at most two rows, with a gap between
	// cells. Hexagon width follows the column pitch, clamped so a long word
	// still fits and short ones don't balloon.
	const HEX_H = 68;
	const GAP = 14;
	const HEX_CLIP = 'polygon(14% 0%, 86% 0%, 100% 50%, 86% 100%, 14% 100%, 0% 50%)';

	let containerWidth = $state(320);
	let cols = $derived(
		screen.options.length <= 2 ? screen.options.length : Math.ceil(screen.options.length / 2)
	);
	let pitch = $derived(containerWidth / Math.max(1, cols));
	let hexW = $derived(Math.min(150, Math.max(100, pitch - GAP)));
	let rows = $derived(Math.ceil(screen.options.length / Math.max(1, cols)));
	let positions = $derived(
		screen.options.map((_, i) => ({
			x: (i % cols) * pitch + (pitch - hexW) / 2,
			y: Math.floor(i / cols) * (HEX_H + GAP)
		}))
	);
	let containerHeight = $derived(rows * HEX_H + (rows - 1) * GAP);
</script>

{#if mode === 'lesson'}
	<div class="flex flex-wrap items-center gap-2">
		<ExerciseKindBadge label={i18n.dict.exerciseKind.mcq} />
	</div>
{/if}
{#if screen.listen}
	<div class="mb-3">
		<ListenCard text={screen.listen} hint={i18n.dict.exerciseKind.listenHint} revealed={checked} />
	</div>
{/if}
<div class="text-lg leading-relaxed font-semibold">
	<!-- Block mode: each line gets its own direction (first letter) and may use
	     line-level syntax (headers, center, callout, divider). -->
	<Md block text={screen.prompt} />
</div>
{#if needed > 1}
	<p class="mt-1 text-sm font-semibold text-muted">{i18n.dict.exerciseKind.pickN(needed)}</p>
{/if}
{#if mode === 'lesson' && screen.hint && !checked}
	{#if hintShown}
		<div class="mt-3 rounded-2xl bg-accent-soft p-3 text-sm leading-relaxed">
			<Md block text={screen.hint} />
		</div>
	{:else}
		<button
			type="button"
			onclick={() => (hintShown = true)}
			class="mt-3 text-sm font-semibold text-brand-dark underline underline-offset-4"
		>
			🔑 {i18n.dict.exerciseKind.hintButton}
		</button>
	{/if}
{/if}

{#if screen.layout === 'honeycomb'}
	<div
		bind:clientWidth={containerWidth}
		class="relative mt-5"
		style="height: {containerHeight}px"
		dir="ltr"
	>
		{#each order as i, slot (i)}
			{@const option = optText(screen.options[i])}
			{@const isCorrect = right.includes(i)}
			{@const isSelected = picks.includes(i)}
			{@const feedback =
				checked && isSelected
					? isCorrect
						? 'motion-safe:animate-pop-correct'
						: 'motion-safe:animate-shake-wrong'
					: ''}
			{@const pos = positions[slot]}
			{@const isMissed = !checked && missed.includes(i)}
			<button
				type="button"
				disabled={checked || isMissed}
				aria-pressed={checked ? undefined : isSelected}
				onclick={() => pick(i)}
				in:scale={{
					start: 0.4,
					duration: 220,
					delay: staggerDelay(slot, 0, 20, 160),
					easing: backOut
				}}
				style="left: {pos.x}px; top: {pos.y}px; width: {hexW}px; height: {HEX_H}px; clip-path: {HEX_CLIP}"
				class="absolute flex items-center justify-center gap-1 px-2 text-center text-sm font-semibold whitespace-nowrap transition active:scale-90 {feedback} {checked
					? isCorrect
						? 'bg-brand-soft text-brand-dark'
						: isSelected
							? 'bg-miss-soft text-miss'
							: 'bg-line/40 text-muted'
					: isMissed
						? 'bg-miss-soft text-miss line-through opacity-70'
						: isSelected
							? 'bg-brand-soft text-brand-dark'
							: 'bg-surface text-ink drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)] hover:bg-brand-soft/50'}"
			>
				<Md text={option} />
				{#if (checked && (isCorrect || isSelected)) || isMissed}
					<AnswerMark right={checked && isCorrect} size={14} />
				{/if}
			</button>
		{/each}
	</div>
{:else}
	<div class="mt-5 flex flex-col gap-3">
		{#each order as i (i)}
			{@const option = optText(screen.options[i])}
			{@const isCorrect = right.includes(i)}
			{@const isSelected = picks.includes(i)}
			{@const feedback =
				checked && isSelected
					? isCorrect
						? 'motion-safe:animate-pop-correct'
						: 'motion-safe:animate-shake-wrong'
					: ''}
			{@const isMissed = !checked && missed.includes(i)}
			<button
				type="button"
				disabled={checked || isMissed}
				aria-pressed={checked ? undefined : isSelected}
				onclick={() => pick(i)}
				dir={textDir(option)}
				class="flex items-center gap-2 rounded-2xl border-2 px-4 py-3 text-start font-semibold transition active:scale-[0.97] {feedback} {checked
					? isCorrect
						? 'border-brand bg-brand-soft text-brand-dark'
						: isSelected
							? 'border-miss bg-miss-soft text-miss'
							: 'border-line bg-surface opacity-50'
					: isMissed
						? 'border-miss bg-miss-soft/60 text-miss line-through opacity-70'
						: isSelected
							? 'border-brand bg-brand-soft/60'
							: 'border-line bg-surface hover:border-brand'}"
			>
				<span class="min-w-0 flex-1"><Md text={option} /></span>
				{#if (checked && (isCorrect || isSelected)) || isMissed}
					<AnswerMark right={checked && isCorrect} />
				{/if}
			</button>
		{/each}
	</div>
{/if}

{#if !checked && lastMiss !== undefined}
	{#key lastMiss}
		<TryAgain feedback={optFeedback(screen.options[lastMiss])} left={tries - missed.length} />
	{/key}
{/if}

{#if checked}
	<McqFeedback {screen} picks={order.filter((i) => picks.includes(i))} />
{/if}

{#if checked && screen.explanation}
	<div class="mt-4 rounded-2xl bg-accent-soft p-3">
		<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.answerKeyLabel}</p>
		<div class="leading-relaxed"><Md block text={screen.explanation} /></div>
	</div>
{/if}
