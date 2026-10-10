<script lang="ts">
	import type { SpellWordScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import SpeakButtons from './SpeakButtons.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';
	import { onMount } from 'svelte';
	import { RATE, speak, speechSupported } from '$lib/speech';

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
		screen: SpellWordScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// Revisiting via the quiz navigator restores whatever was typed before.
	const restoredAnswer = mode === 'quiz' ? (answerSlot!.get() as string | undefined) : undefined;
	let input = $state(restoredAnswer ?? '');
	let checked = $state(false);
	let correct = $derived(input.trim().toLowerCase() === screen.word.trim().toLowerCase());

	// Listen needs browser speech; without it, fall back to showing the word.
	let canSpeak = $state(false);
	let listen = $derived(screen.mode === 'listen' && canSpeak);
	onMount(() => {
		canSpeak = speechSupported();
		// Play once on arrival; the buttons replay it.
		if (screen.mode === 'listen' && canSpeak) speak(screen.word, RATE.normal);
	});

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	$effect(() => {
		if (!checked) disabled = !input.trim();
	});

	export function primaryAction() {
		if (mode === 'quiz') {
			if (!input.trim()) return;
			answerSlot!.set(input);
			onAdvance();
			return;
		}
		if (!checked) {
			if (!input.trim()) return;
			checked = true;
			recordAnswer(score!, correct);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

{#if mode === 'lesson'}
	<ExerciseKindBadge
		label={listen ? i18n.dict.exerciseKind.spellWordListen : i18n.dict.exerciseKind.spellWordCopy}
	/>
{/if}

{#if !listen}
	<p class="mb-2 text-sm font-semibold text-muted">{i18n.dict.wordCard.spellCopyPrompt}</p>
	<!-- Not selectable, so the word has to be typed out rather than copy-pasted. -->
	<p
		class="mb-4 text-3xl font-extrabold select-none"
		dir="ltr"
		oncopy={(e) => e.preventDefault()}
		ondragstart={(e) => e.preventDefault()}
	>
		{screen.word}
	</p>
{:else}
	<p class="mb-2 text-sm font-semibold text-muted">{i18n.dict.wordCard.spellListenPrompt}</p>
	<div class="mb-4"><SpeakButtons text={screen.word} size="lg" disabled={checked} /></div>
	{#if screen.hintHe}
		<p class="-mt-2 mb-4 text-sm text-muted" dir="rtl">{screen.hintHe}</p>
	{/if}
{/if}

<input
	type="text"
	dir="ltr"
	disabled={checked}
	value={input}
	oninput={(e) => (input = e.currentTarget.value)}
	onpaste={(e) => e.preventDefault()}
	ondrop={(e) => e.preventDefault()}
	placeholder={i18n.dict.wordCard.inputPlaceholder}
	class="w-full rounded-xl border-2 px-3 py-2 text-lg leading-relaxed transition {checked
		? correct
			? 'border-brand bg-brand-soft/40 motion-safe:animate-pop-correct'
			: 'border-miss bg-miss-soft/40 motion-safe:animate-shake-wrong'
		: 'border-line bg-surface focus:border-brand'}"
/>

{#if checked}
	<p class="mt-3 text-sm font-semibold {correct ? 'text-brand-dark' : 'text-miss'}">
		{correct
			? i18n.dict.wordCard.correctFeedback
			: i18n.dict.wordCard.incorrectFeedback(screen.word)}
	</p>
{/if}
