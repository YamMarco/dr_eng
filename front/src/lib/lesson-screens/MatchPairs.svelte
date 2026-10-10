<script lang="ts">
	import { untrack } from 'svelte';
	import type { MatchPairsScreen } from './types';
	import { MATCH_PAIRS_MAX_MISTAKES } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';
	import { shuffle } from './shuffle';

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
		screen: MatchPairsScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// Right column shows the same pairs in a shuffled order (indices into `pairs`).
	const rightOrder = untrack(() => shuffleNotIdentity(screen.pairs.map((_, i) => i)));
	type Side = 'left' | 'right';
	// Revisiting via the quiz navigator can't replay the matching game, so it
	// just restores the completed state (every pair shown matched) with the
	// mistake count it finished with.
	const restoredMistakes = mode === 'quiz' ? (answerSlot!.get() as number | undefined) : undefined;
	let selected = $state<{ side: Side; i: number } | null>(null);
	let matched = $state<number[]>(
		untrack(() => (restoredMistakes !== undefined ? screen.pairs.map((_, i) => i) : []))
	);
	let wrong = $state<{ left: number; right: number } | null>(null);
	let mistakes = $state(restoredMistakes ?? 0);
	// eslint-disable-next-line no-useless-assignment
	if (mode === 'quiz') disabled = restoredMistakes === undefined;

	function shuffleNotIdentity(items: number[]): number[] {
		const a = shuffle(items);
		// Never hand back the authored order — it would be a free answer key.
		return a.length > 1 && a.every((v, i) => v === i) ? [...a.slice(1), a[0]] : a;
	}

	// A pair can be started from either column: the first tap selects, a tap on
	// the other column resolves it, a tap on the same column just moves the pick.
	function pick(side: Side, i: number) {
		if (matched.includes(i)) return;
		if (!selected || selected.side === side) {
			selected = { side, i };
			wrong = null;
			return;
		}
		const pair = side === 'left' ? { left: i, right: selected.i } : { left: selected.i, right: i };
		selected = null;
		if (pair.left === pair.right) {
			matched = [...matched, i];
			wrong = null;
			if (matched.length === screen.pairs.length) {
				if (mode === 'quiz') answerSlot!.set(mistakes);
				else recordAnswer(score!, mistakes <= MATCH_PAIRS_MAX_MISTAKES);
				disabled = false;
			}
		} else {
			mistakes += 1;
			wrong = pair;
		}
	}

	export function primaryAction() {
		onAdvance();
	}
</script>

{#if mode === 'lesson'}
	<ExerciseKindBadge label={i18n.dict.exerciseKind.matchPairs} />
{/if}

<!-- No `grid-auto-rows: 1fr` here on purpose: that would size EVERY row to
     the tallest cell in the whole grid, so one two-line phrase (English or
     Hebrew) would inflate all rows and push a 5-pair screen into an
     unnecessary scroll on a phone. Grid's default `auto` row-sizing already
     matches each row's own left/right cells to each other, no more. -->
<div class="mt-3 grid grid-cols-2 gap-3" dir="ltr">
	{#each screen.pairs as pair, row (row)}
		{@const i = row}
		{@const j = rightOrder[row]}
		{@const done = matched.includes(i)}
		{@const isWrong = wrong?.left === i}
		<button
			type="button"
			disabled={done}
			onclick={() => pick('left', i)}
			class="h-full rounded-2xl border-2 px-3 py-3 font-semibold transition active:scale-[0.97] {isWrong
				? 'border-danger bg-danger-soft text-danger motion-safe:animate-shake-wrong'
				: done
					? 'border-brand bg-brand-soft text-brand-dark opacity-60'
					: selected?.side === 'left' && selected.i === i
						? 'border-brand bg-brand-soft/60'
						: 'border-line bg-surface hover:border-brand'}"
		>
			{pair.en}
		</button>
		{@const doneR = matched.includes(j)}
		{@const isWrongR = wrong?.right === j}
		<button
			type="button"
			dir="rtl"
			disabled={doneR}
			onclick={() => pick('right', j)}
			class="h-full rounded-2xl border-2 px-3 py-3 font-semibold transition active:scale-[0.97] {isWrongR
				? 'border-danger bg-danger-soft text-danger motion-safe:animate-shake-wrong'
				: doneR
					? 'border-brand bg-brand-soft text-brand-dark opacity-60'
					: selected?.side === 'right' && selected.i === j
						? 'border-brand bg-brand-soft/60'
						: 'border-line bg-surface hover:border-brand'}"
		>
			{screen.pairs[j].he}
		</button>
	{/each}
</div>
