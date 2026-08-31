<script lang="ts">
	import { Volume2 } from 'lucide-svelte';
	import type { SpellWordScreen } from './types';
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
		screen: SpellWordScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	let input = $state('');
	let checked = $state(false);
	let correct = $derived(input.trim().toLowerCase() === screen.word.trim().toLowerCase());

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	$effect(() => {
		if (!checked) disabled = !input.trim();
	});

	export function primaryAction() {
		if (!checked) {
			if (!input.trim()) return;
			checked = true;
			recordAnswer(score, correct);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge
	label={screen.mode === 'copy'
		? i18n.dict.exerciseKind.spellWordCopy
		: i18n.dict.exerciseKind.spellWordListen}
/>
<ScoreBadge {score} />

{#if screen.mode === 'copy'}
	<p class="mb-2 text-sm font-semibold text-muted">{i18n.dict.wordCard.spellCopyPrompt}</p>
	<p class="mb-4 text-3xl font-extrabold" dir="ltr">{screen.word}</p>
{:else}
	<p class="mb-2 text-sm font-semibold text-muted">{i18n.dict.wordCard.spellListenPrompt}</p>
	<button
		type="button"
		disabled={checked}
		title={i18n.dict.wordCard.listenLabel}
		aria-label={i18n.dict.wordCard.listenLabel}
		class="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-ink/60 transition active:scale-95"
	>
		<!-- Placeholder — no audio wired up yet. -->
		<Volume2 size={22} aria-hidden="true" />
	</button>
	<p class="mb-4 text-xs text-muted">{i18n.dict.wordCard.spellListenNote}</p>
{/if}

<input
	type="text"
	dir="ltr"
	disabled={checked}
	value={input}
	oninput={(e) => (input = e.currentTarget.value)}
	placeholder={i18n.dict.wordCard.inputPlaceholder}
	class="w-full rounded-xl border-2 px-3 py-2 text-lg leading-relaxed transition {checked
		? correct
			? 'border-brand bg-brand-soft/40'
			: 'border-danger bg-danger-soft/40'
		: 'border-line bg-surface focus:border-brand'}"
/>

{#if checked}
	<p class="mt-3 text-sm font-semibold {correct ? 'text-brand-dark' : 'text-danger'}">
		{correct
			? i18n.dict.wordCard.correctFeedback
			: i18n.dict.wordCard.incorrectFeedback(screen.word)}
	</p>
{/if}
