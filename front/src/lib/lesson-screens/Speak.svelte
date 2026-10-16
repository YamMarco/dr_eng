<script lang="ts">
	// COBE: one spoken answer in a single take, like the exam. The primary
	// button starts, stops, then moves on; "record again" replaces the take.
	// Lessons: not scored, the student listens back and ticks the checklist.
	// Exams: the take is the answer (graded in the report), no feedback here.
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { Mic, RotateCcw } from '@lucide/svelte';
	import type { SpeakScreen } from './types';
	import Md from '$lib/components/Md.svelte';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import SpeakButtons from './SpeakButtons.svelte';
	import SelfReview from './SelfReview.svelte';
	import { Recorder, type Take } from '$lib/recorder.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';

	const mode = getScreenMode();
	const answerSlot = mode === 'quiz' ? getQuizAnswerSlot() : undefined;

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		 
		label = $bindable('')
	}: {
		screen: SpeakScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	const t = i18n.dict.speak;
	// Exams keep the take (and its audio) when the student moves between questions.
	const recorder =
		mode === 'quiz'
			? new Recorder({ keepAudio: true, take: answerSlot!.get() as Take | undefined })
			: new Recorder();
	onDestroy(() => recorder.destroy());

	let seconds = $derived(Math.floor(recorder.elapsedMs / 1000));
	let reached = $derived(seconds >= screen.targetSeconds);
	let share = $derived(Math.min(recorder.elapsedMs / (screen.targetSeconds * 1000), 1));

	$effect(() => {
		disabled = recorder.state === 'starting';
		label =
			recorder.state === 'recording'
				? t.stop
				: recorder.state === 'done'
					? i18n.dict.lesson.nextQuestionButton
					: t.start;
	});

	function clock(s: number) {
		return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
	}

	/** Stops the take; in an exam it becomes this question's answer. */
	async function stop() {
		await recorder.stop();
		answerSlot?.set(recorder.take);
	}

	function toggle() {
		if (recorder.state === 'recording') void stop();
		else if (recorder.state === 'idle') void recorder.start();
	}

	export async function primaryAction() {
		if (mode === 'quiz') {
			if (recorder.state === 'recording') await stop();
			onAdvance();
			return;
		}
		if (recorder.state === 'done') onAdvance();
		else toggle();
	}
</script>

{#if mode === 'lesson'}
	<ExerciseKindBadge label={i18n.dict.exerciseKind.speak} />
{/if}

<div class="flex items-start gap-3 rounded-2xl bg-accent-soft p-3">
	<div class="min-w-0 flex-1 text-lg leading-relaxed font-semibold" dir="ltr">
		<Md block text={screen.prompt} />
	</div>
	<SpeakButtons text={screen.prompt} disabled={recorder.state === 'recording'} />
</div>

{#if screen.tip}
	<div class="mt-2 text-sm leading-relaxed text-muted"><Md block text={screen.tip} /></div>
{/if}

<div class="mt-5 flex flex-col items-center gap-3">
	<!-- Same action as the primary button: start, then stop. -->
	<button
		type="button"
		onclick={toggle}
		disabled={recorder.state === 'starting' || recorder.state === 'done'}
		aria-label={label}
		class="relative flex h-16 w-16 items-center justify-center rounded-full transition duration-200 active:scale-95 disabled:active:scale-100 {recorder.state ===
		'recording'
			? 'bg-brand text-white'
			: 'bg-surface text-ink/50 ring-2 ring-line enabled:hover:text-brand enabled:hover:ring-brand'}"
	>
		{#if recorder.state === 'recording'}
			<span class="absolute inset-0 rounded-full bg-brand/40 motion-safe:animate-ping"></span>
		{/if}
		<Mic size={28} aria-hidden="true" class="relative" />
	</button>

	<div class="w-full max-w-sm">
		<div class="h-3 overflow-hidden rounded-full bg-line/60">
			<div
				class="h-full rounded-full transition-[width] duration-200 ease-linear {reached
					? 'bg-brand'
					: 'bg-brand/50'}"
				style="width: {share * 100}%"
			></div>
		</div>
		<div class="mt-1 flex justify-between text-sm font-bold text-ink/70 tabular">
			<span dir="ltr">{clock(seconds)}</span>
			<span>{t.target(clock(screen.targetSeconds))}</span>
		</div>
	</div>

	{#if recorder.state === 'recording'}
		<p class="text-sm font-semibold text-brand-dark" in:fly={{ y: 6, duration: 200 }}>
			{recorder.micAvailable ? t.recording : t.noMic}
		</p>
	{/if}
</div>

{#if recorder.state === 'done'}
	<div in:fly={{ y: 10, duration: 250 }}>
		{#if mode === 'lesson'}
			<p
				class="mt-4 rounded-2xl px-4 py-3 text-sm font-semibold {reached
					? 'bg-brand-soft text-brand-dark motion-safe:animate-pop-correct'
					: 'bg-miss-soft text-miss'}"
			>
				{reached ? t.reached(clock(seconds)) : t.short(clock(seconds))}
			</p>
		{/if}

		{#if recorder.audioUrl}
			<p class="mt-4 mb-1 text-xs font-bold text-muted">{t.listenBack}</p>
			<audio controls src={recorder.audioUrl} class="w-full"></audio>
			<p class="mt-1 text-xs text-muted">{t.privacy}</p>
		{:else if !recorder.micAvailable}
			<p class="mt-3 text-xs text-muted">{t.noMic}</p>
		{/if}

		<button
			type="button"
			onclick={() => recorder.start()}
			class="mt-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-brand transition hover:bg-brand-soft active:scale-[0.98]"
		>
			<RotateCcw size={16} aria-hidden="true" />
			{t.again}
		</button>

		{#if mode === 'lesson'}
			<SelfReview modelAnswer={screen.modelAnswer} checklist={screen.checklist} />
		{/if}
	</div>
{/if}
