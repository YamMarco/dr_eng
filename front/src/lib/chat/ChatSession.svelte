<script lang="ts">
	// One spoken chat with the AI: it speaks (text hidden - listening first),
	// the student answers in one take, the AI hears it and replies, until the
	// last turn brings the summary. Nothing is saved but the chat count.
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { AudioLines, Mic, RotateCcw, ScrollText, Square } from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import ChatSummary from './ChatSummary.svelte';
	import { Recorder } from '$lib/recorder.svelte';
	import { chatVoice } from '$lib/chatVoice';
	import { chatOpener } from '$lib/content/cobe/chatTopics';
	import {
		MAX_TURNS,
		TURN_TARGET_SECONDS,
		turnNumber,
		type ChatLine,
		type ChatMode,
		type ChatSummary as Summary
	} from '$lib/feedback/chat';
	import { ChatTurnError, addChat, sendChatTurn } from '$lib/feedback/chatAi';
	import { activity } from '$lib/activity.svelte';
	import { profile } from '$lib/profile.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	let {
		mode,
		topics,
		back,
		onagain
	}: { mode: ChatMode; topics: string[]; back: string; onagain: () => void } = $props();

	const t = $derived(i18n.dict.chat);
	const level = profile.value?.units === '5' ? '5' : '4';
	const max = $derived(MAX_TURNS[mode]);
	/** Shorter takes are a slip of the finger, not an answer. */
	const MIN_SECONDS = 2;
	const RING = 2 * Math.PI * 46;

	type Phase = 'speaking' | 'ready' | 'recording' | 'thinking' | 'failed' | 'done';
	let phase = $state<Phase>('speaking');
	// svelte-ignore state_referenced_locally
	let lines = $state<ChatLine[]>([{ who: 'ai', text: chatOpener(mode, topics) }]);
	let notice = $state<'tooShort' | 'limit' | 'noMic' | null>(null);
	let summary = $state<Summary | undefined>();
	let spokenSeconds = $state(0);
	let transcriptOpen = $state(false);

	const recorder = new Recorder();
	let alive = true;
	onDestroy(() => {
		alive = false;
		chatVoice.stop();
		recorder.destroy();
	});

	let turn = $derived(Math.min(turnNumber(lines), max));
	let seconds = $derived(recorder.elapsedMs / 1000);
	let share = $derived(Math.min(seconds / TURN_TARGET_SECONDS, 1));
	let lastAi = $derived(lines.findLast((l) => l.who === 'ai')?.text ?? '');

	/** Speaks the AI's line; the student may cut in by recording. */
	async function speak(text: string) {
		phase = 'speaking';
		await chatVoice.say(text);
		if (alive && phase === 'speaking') phase = 'ready';
	}

	onMount(() => void speak(lastAi));

	async function record() {
		chatVoice.stop();
		notice = null;
		phase = 'recording';
		await recorder.start();
		// No microphone: the recorder would only time the take.
		if (!recorder.micAvailable && phase === 'recording') {
			await recorder.stop();
			notice = 'noMic';
			phase = 'ready';
		}
	}

	async function stop() {
		await recorder.stop();
		if (!recorder.audioUrl) {
			notice = 'noMic';
			phase = 'ready';
			return;
		}
		if (recorder.elapsedMs / 1000 < MIN_SECONDS) {
			notice = 'tooShort';
			phase = 'ready';
			return;
		}
		await send();
	}

	async function send() {
		phase = 'thinking';
		notice = null;
		const took = recorder.elapsedMs / 1000;
		try {
			const res = await sendChatTurn({
				mode,
				level,
				topics,
				history: lines,
				seconds: took,
				audioUrl: recorder.audioUrl!
			});
			if (!alive) return;
			spokenSeconds += took;
			lines = [...lines, { who: 'me', text: res.heard || '...' }, { who: 'ai', text: res.reply }];
			if (res.done) {
				summary = res.summary;
				addChat();
				activity.recordToday();
				// The goodbye plays over the summary.
				phase = 'done';
				void chatVoice.say(res.reply);
			} else await speak(res.reply);
		} catch (e) {
			if (!alive) return;
			notice = e instanceof ChatTurnError && e.limit ? 'limit' : null;
			phase = 'failed';
		}
	}

	function toggleMic() {
		if (phase === 'recording') void stop();
		else if (phase === 'ready' || phase === 'speaking') void record();
	}

	function clock(s: number) {
		const n = Math.floor(s);
		return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;
	}
</script>

{#if phase === 'done'}
	<ChatSummary
		{summary}
		seconds={spokenSeconds}
		turns={lines.filter((l) => l.who === 'me').length}
		{onagain}
		{back}
	/>
{:else}
	<div class="flex flex-1 flex-col items-center" in:fade={{ duration: 200 }}>
		<div class="flex w-full items-center justify-between text-xs font-bold text-muted">
			<span>{t.turn(turn, max)}</span>
			<div class="flex gap-1" aria-hidden="true">
				{#each { length: max }, i (i)}
					<span
						class="h-1.5 w-5 rounded-full transition-colors duration-300 {i < turn - 1
							? 'bg-brand'
							: i === turn - 1
								? 'bg-brand/50'
								: 'bg-line'}"
					></span>
				{/each}
			</div>
		</div>

		<!-- The AI: animated while it speaks or thinks. -->
		<div class="mt-10 flex flex-col items-center gap-3">
			<div class="relative flex h-28 w-28 items-center justify-center">
				{#if phase === 'speaking' || phase === 'thinking'}
					<span
						class="absolute inset-0 rounded-full bg-brand/20 motion-safe:animate-ping"
						transition:fade={{ duration: 200 }}
					></span>
				{/if}
				<span
					class="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand-soft text-brand shadow-md ring-1 ring-brand/30"
				>
					<AudioLines size={40} aria-hidden="true" />
				</span>
			</div>
			<p class="h-6 text-base font-bold" aria-live="polite">
				{#key phase}
					<span in:fly={{ y: 6, duration: 200 }}>
						{phase === 'speaking'
							? t.aiSpeaking
							: phase === 'thinking'
								? t.thinking
								: phase === 'recording'
									? t.recording
									: phase === 'ready'
										? t.yourTurn
										: t.failed}
					</span>
				{/key}
			</p>
			<button
				type="button"
				onclick={() => void speak(lastAi)}
				disabled={phase !== 'ready'}
				class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-brand transition hover:bg-brand-soft active:scale-[0.98] disabled:opacity-40"
			>
				<RotateCcw size={16} aria-hidden="true" />
				{t.replay}
			</button>
		</div>

		<div class="mt-auto flex w-full flex-col items-center gap-3 pt-8">
			{#if phase === 'failed'}
				<div class="flex flex-col items-center gap-2" in:fly={{ y: 8, duration: 200 }}>
					{#if notice === 'limit'}
						<p class="text-center text-sm font-semibold text-muted">{t.limit}</p>
						<Button variant="ghost" href={back}>{t.back}</Button>
					{:else}
						<div class="flex gap-2">
							<button
								type="button"
								onclick={send}
								class="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition active:scale-[0.98]"
							>
								{t.retry}
							</button>
							<button
								type="button"
								onclick={() => void record()}
								class="rounded-full px-4 py-2 text-sm font-bold text-brand ring-1 ring-brand/40 transition hover:bg-brand-soft active:scale-[0.98]"
							>
								{t.recordAgain}
							</button>
						</div>
					{/if}
				</div>
			{:else}
				<!-- Mic with a ring that fills toward the soft 20-second goal. -->
				<button
					type="button"
					onclick={toggleMic}
					disabled={phase === 'thinking'}
					aria-label={phase === 'recording' ? t.recording : t.yourTurn}
					class="relative flex h-24 w-24 items-center justify-center rounded-full transition duration-100 active:scale-95 disabled:opacity-40 disabled:active:scale-100"
				>
					<svg viewBox="0 0 100 100" class="absolute inset-0 -rotate-90" aria-hidden="true">
						<circle cx="50" cy="50" r="46" fill="none" stroke-width="6" class="stroke-line" />
						<circle
							cx="50"
							cy="50"
							r="46"
							fill="none"
							stroke-width="6"
							stroke-linecap="round"
							class="stroke-brand transition-[stroke-dashoffset] duration-200 ease-linear"
							stroke-dasharray={RING}
							stroke-dashoffset={phase === 'recording' ? RING * (1 - share) : RING}
						/>
					</svg>
					<span
						class="flex h-[76px] w-[76px] items-center justify-center rounded-full transition-colors duration-150 {phase ===
						'recording'
							? 'bg-brand text-white'
							: 'bg-surface text-brand shadow-md ring-1 ring-line'}"
					>
						{#if phase === 'recording'}
							<Square size={26} fill="currentColor" aria-hidden="true" />
						{:else}
							<Mic size={32} aria-hidden="true" />
						{/if}
					</span>
				</button>
				<p class="h-5 text-sm font-semibold tabular" dir="ltr">
					{#if phase === 'recording'}{clock(seconds)}{/if}
				</p>
				<p class="h-5 text-center text-sm font-semibold" aria-live="polite">
					{#if phase === 'recording' && share >= 1}
						<span class="text-brand-dark" in:fly={{ y: 6, duration: 200 }}>{t.keepGoing}</span>
					{:else if notice === 'tooShort'}
						<span class="text-muted" in:fly={{ y: 6, duration: 200 }}>{t.tooShort}</span>
					{:else if notice === 'noMic'}
						<span class="text-muted" in:fly={{ y: 6, duration: 200 }}>{t.noMic}</span>
					{/if}
				</p>
			{/if}

			<button
				type="button"
				onclick={() => (transcriptOpen = true)}
				class="mt-2 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-muted transition hover:bg-line/60 hover:text-ink active:scale-[0.98]"
			>
				<ScrollText size={16} aria-hidden="true" />
				{t.showTranscript}
			</button>
		</div>
	</div>
{/if}

<Sheet bind:open={transcriptOpen} title={t.showTranscript}>
	<ol class="flex flex-col gap-2" dir="ltr">
		{#each lines as line, i (i)}
			<li
				class="max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed {line.who === 'ai'
					? 'self-start bg-brand-soft'
					: 'self-end bg-canvas ring-1 ring-line'}"
			>
				{line.text}
			</li>
		{/each}
	</ol>
</Sheet>
