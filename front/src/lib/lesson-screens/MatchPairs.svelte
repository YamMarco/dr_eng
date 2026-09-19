<script lang="ts">
	import { untrack } from 'svelte';
	import type { MatchPairsScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';

	const score = getLessonScore();

	// Nothing to "check": the button opens once every pair is matched, and the
	// answer is recorded at that moment. Wrong taps only count against the
	// leniency below, so a hesitant match doesn't end the exercise.
	const MAX_MISTAKES = 1;

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
	const rightOrder = untrack(() => shuffle(screen.pairs.map((_, i) => i)));
	let left = $state<number | null>(null);
	let matched = $state<number[]>([]);
	let wrong = $state<{ left: number; right: number } | null>(null);
	let mistakes = $state(0);

	function shuffle(items: number[]): number[] {
		const a = [...items];
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		// Never hand back the authored order — it would be a free answer key.
		return a.length > 1 && a.every((v, i) => v === i) ? [...a.slice(1), a[0]] : a;
	}

	function pickLeft(i: number) {
		if (matched.includes(i)) return;
		left = i;
		wrong = null;
	}

	function pickRight(i: number) {
		if (left === null || matched.includes(i)) return;
		if (left === i) {
			matched = [...matched, i];
			left = null;
			wrong = null;
			if (matched.length === screen.pairs.length) {
				recordAnswer(score, mistakes <= MAX_MISTAKES);
				disabled = false;
			}
		} else {
			mistakes += 1;
			wrong = { left, right: i };
			left = null;
		}
	}

	export function primaryAction() {
		onAdvance();
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.matchPairs} />
<ScoreBadge {score} />

<div class="mt-3 grid grid-cols-2 gap-3" dir="ltr">
	<div class="flex flex-col gap-3">
		{#each screen.pairs as pair, i (i)}
			{@const done = matched.includes(i)}
			{@const isWrong = wrong?.left === i}
			<button
				type="button"
				disabled={done}
				onclick={() => pickLeft(i)}
				class="rounded-2xl border-2 px-3 py-3 font-semibold transition active:scale-[0.97] {isWrong
					? 'border-danger bg-danger-soft text-danger motion-safe:animate-shake-wrong'
					: done
						? 'border-brand bg-brand-soft text-brand-dark opacity-60'
						: left === i
							? 'border-brand bg-brand-soft/60'
							: 'border-line bg-surface hover:border-brand'}"
			>
				{pair.en}
			</button>
		{/each}
	</div>
	<div class="flex flex-col gap-3" dir="rtl">
		{#each rightOrder as i (i)}
			{@const done = matched.includes(i)}
			{@const isWrong = wrong?.right === i}
			<button
				type="button"
				disabled={done}
				onclick={() => pickRight(i)}
				class="rounded-2xl border-2 px-3 py-3 font-semibold transition active:scale-[0.97] {isWrong
					? 'border-danger bg-danger-soft text-danger motion-safe:animate-shake-wrong'
					: done
						? 'border-brand bg-brand-soft text-brand-dark opacity-60'
						: 'border-line bg-surface hover:border-brand'}"
			>
				{screen.pairs[i].he}
			</button>
		{/each}
	</div>
</div>
