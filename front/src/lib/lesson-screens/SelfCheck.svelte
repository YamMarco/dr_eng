<script lang="ts">
	import type { SelfCheckScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Not scored — the student compares their own answer to the model one — so
	// disabled/label are write-only, like the teaching screens.
	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: SelfCheckScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	let answer = $state('');
	let revealed = $state(false);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.selfCheck.revealButton;

	let words = $derived(answer.trim() ? answer.trim().split(/\s+/).length : 0);
	let hasCounter = $derived(screen.minWords !== undefined || screen.maxWords !== undefined);
	// Traffic light on the word count: green inside the range, amber just
	// outside it, red when far off — the counter is itself part of the lesson.
	let countTone = $derived.by(() => {
		const min = screen.minWords ?? 0;
		const max = screen.maxWords ?? Infinity;
		if (words >= min && words <= max) return 'bg-brand-soft text-brand-dark';
		const nearMin = min > 0 && words >= min - 10;
		const nearMax = max < Infinity && words <= max + 10;
		return nearMin || nearMax ? 'bg-accent-soft text-ink/70' : 'bg-danger-soft text-danger';
	});

	$effect(() => {
		if (!revealed) disabled = answer.trim().length === 0;
	});

	export function primaryAction() {
		if (!revealed) {
			if (!answer.trim()) return;
			revealed = true;
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.selfCheck} />

{#if screen.text}
	<p class="mb-3 rounded-2xl bg-accent-soft p-3 leading-relaxed" dir="ltr">{screen.text}</p>
{/if}

<p class="leading-relaxed font-semibold">{screen.prompt}</p>

<textarea
	dir="auto"
	rows="4"
	disabled={revealed}
	bind:value={answer}
	placeholder={screen.placeholder ?? i18n.dict.selfCheck.placeholder}
	class="mt-3 w-full rounded-xl border-2 border-line bg-surface p-3 leading-relaxed focus:border-brand"
></textarea>

{#if hasCounter}
	<div class="mt-2 flex items-center gap-2">
		<span class="rounded-full px-3 py-1 text-sm font-bold tabular {countTone}">
			{i18n.dict.selfCheck.wordCount(words)}
		</span>
		<span class="text-xs text-muted">
			{i18n.dict.selfCheck.wordTarget(screen.minWords ?? 0, screen.maxWords ?? 0)}
		</span>
	</div>
{/if}

{#if revealed}
	<div class="mt-4 rounded-2xl bg-brand-soft/50 p-3">
		<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.selfCheck.modelAnswerLabel}</p>
		<p class="leading-relaxed" dir="auto">{screen.modelAnswer}</p>
	</div>
	<p class="mt-2 text-sm text-muted">{i18n.dict.selfCheck.compareNote}</p>
{/if}
