<script lang="ts">
	// The end of a chat: a celebration, how much they spoke, what went well,
	// phrases to take into the next chat. No score - this is about confidence.
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { Check, Volume2 } from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import StatTile from '$lib/components/StatTile.svelte';
	import { myPhrases } from '$lib/phraseBank.svelte';
	import { RATE, speak } from '$lib/speech';
	import { staggerDelay } from '$lib/motion';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ChatSummary } from '$lib/feedback/chat';

	let {
		summary,
		seconds,
		turns,
		back,
		onagain
	}: {
		summary?: ChatSummary;
		seconds: number;
		turns: number;
		back: string;
		onagain: () => void;
	} = $props();

	const t = $derived(i18n.dict.chat);
	const enter = (i: number) => ({ y: 12, duration: 300, delay: staggerDelay(i), easing: cubicOut });

	function clock(s: number) {
		const n = Math.round(s);
		return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;
	}
</script>

<div class="relative flex flex-1 flex-col gap-4">
	<Confetti />
	<h2 in:fly={enter(0)} class="text-center text-2xl font-extrabold motion-safe:animate-pop-correct">
		{t.doneTitle}
	</h2>

	<div class="grid grid-cols-2 gap-2.5" in:fly={enter(1)}>
		<StatTile value={clock(seconds)} label={t.spoke} />
		<StatTile value={String(turns)} label={t.turns} />
	</div>

	{#if summary?.strengths.length}
		<section in:fly={enter(2)} class="rounded-2xl bg-brand-soft p-4">
			<h3 class="mb-2 text-sm font-bold text-brand-dark">{t.strengths}</h3>
			<ul class="flex flex-col gap-2">
				{#each summary.strengths as strength, i (i)}
					<li class="flex gap-2 text-sm leading-relaxed">
						<Check size={18} class="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
						<span>{strength}</span>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if summary?.phrases.length}
		<section in:fly={enter(3)} class="rounded-2xl bg-surface p-4 shadow-sm ring-1 ring-line/70">
			<h3 class="mb-2 text-sm font-bold">{t.phrases}</h3>
			<ul class="flex flex-col gap-2">
				{#each summary.phrases as phrase (phrase)}
					<li class="flex items-center gap-2">
						<button
							type="button"
							onclick={() => speak(phrase, RATE.normal)}
							aria-label={i18n.dict.wordCard.listenLabel}
							class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand transition hover:bg-brand-soft active:scale-95"
						>
							<Volume2 size={18} aria-hidden="true" />
						</button>
						<span class="flex-1 text-sm font-semibold" dir="ltr">{phrase}</span>
						<button
							type="button"
							onclick={() => myPhrases.toggle(phrase)}
							class="shrink-0 rounded-full px-2.5 py-1 text-xs font-bold transition active:scale-95 {myPhrases.has(
								phrase
							)
								? 'bg-amber-100 text-amber-700'
								: 'bg-surface text-brand ring-1 ring-brand/40'}"
						>
							{myPhrases.has(phrase) ? i18n.dict.phraseBank.added : i18n.dict.phraseBank.save}
						</button>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<p in:fly={enter(4)} class="text-center leading-relaxed font-semibold text-ink/80">
		{summary?.closing || t.closingFallback}
	</p>

	<div class="mt-auto flex flex-col gap-2 pt-4" in:fly={enter(5)}>
		<Button onclick={onagain}>{t.again}</Button>
		<Button variant="ghost" href={back}>{t.back}</Button>
	</div>
</div>
