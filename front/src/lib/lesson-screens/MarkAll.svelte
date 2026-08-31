<script lang="ts">
	import type { MarkAllScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';

	const score = getLessonScore();

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
	let targets = $derived(new Set(screen.correctIndices));

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

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
			recordAnswer(score, isPass());
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.markAll} />
<ScoreBadge {score} />
<p class="mb-3 font-semibold">{screen.instruction}</p>
<div class="flex flex-wrap gap-x-2 gap-y-3 leading-loose" dir={screen.dir ?? 'ltr'}>
	{#each words as word, i (i)}
		{@const isTarget = targets.has(i)}
		{@const isPicked = picked.includes(i)}
		<button
			type="button"
			disabled={checked}
			onclick={() => toggle(i)}
			class="rounded-lg border-2 px-2 py-1 font-semibold transition {checked
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
