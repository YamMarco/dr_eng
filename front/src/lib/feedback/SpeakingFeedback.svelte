<script lang="ts">
	// "AI feedback" on one recording: sends the take to /api/speak, then shows
	// what worked, what to improve and what the AI heard. Used after a lesson
	// take and in the exam report (where the bands also fill the rubric).
	import { fly } from 'svelte/transition';
	import { LoaderCircle, Sparkles } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { requestSpeakingFeedback } from './speakingAi';
	import { myPhrases, quotedPhrases } from '$lib/phraseBank.svelte';
	import type { CobeLevel, CobePart } from './speaking';
	import type { SpeakingVerdict } from './types';

	let {
		level,
		part,
		question,
		seconds,
		audioUrl,
		verdict,
		showBands = false,
		onVerdict
	}: {
		level: CobeLevel;
		part?: CobePart;
		question: string;
		seconds: number;
		audioUrl: string;
		/** A verdict already received (shown without asking again). */
		verdict?: Omit<SpeakingVerdict, 'judgement'> & Partial<Pick<SpeakingVerdict, 'judgement'>>;
		/** Lessons: list the band per criterion (the exam report shows them on its own chips). */
		showBands?: boolean;
		onVerdict?: (verdict: SpeakingVerdict) => void;
	} = $props();

	const t = $derived(i18n.dict.speakAi);
	let status = $state<'idle' | 'listening' | 'failed'>('idle');
	// svelte-ignore state_referenced_locally
	let shown = $state(verdict);

	async function ask() {
		status = 'listening';
		try {
			const v = await requestSpeakingFeedback({ level, part, question, seconds, audioUrl });
			shown = v;
			status = 'idle';
			onVerdict?.(v);
		} catch {
			status = 'failed';
		}
	}
</script>

{#if shown}
	<div
		class="flex flex-col gap-3 rounded-2xl bg-accent-soft p-3 text-sm"
		in:fly={{ y: 8, duration: 250 }}
	>
		<p class="flex items-center gap-1.5 text-xs font-bold text-ink/60">
			<Sparkles size={14} aria-hidden="true" />{t.title}
		</p>
		{#if showBands && shown.judgement}
			<ul class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
				{#each Object.entries(shown.judgement.bands) as [string, string][] as [criterion, band] (criterion)}
					<li class="flex justify-between gap-2">
						<span class="text-muted">{i18n.dict.cobeReview.criterion[criterion]}</span>
						<span class="font-semibold">{i18n.dict.cobeReview.band[band]}</span>
					</li>
				{/each}
			</ul>
		{/if}
		{#if shown.strengths.length}
			<div>
				<p class="mb-1 text-xs font-bold text-brand-dark">{t.strengths}</p>
				<ul class="flex flex-col gap-1 leading-relaxed">
					{#each shown.strengths as line (line)}<li>✓ {line}</li>{/each}
				</ul>
			</div>
		{/if}
		{#if shown.tips.length}
			<div>
				<p class="mb-1 text-xs font-bold text-ink/70">{t.tips}</p>
				<ol class="flex list-decimal flex-col gap-1 ps-5 leading-relaxed">
					{#each shown.tips as line (line)}
						<li>
							{line}
							{#each quotedPhrases(line) as phrase (phrase)}
								<button
									type="button"
									onclick={() => myPhrases.toggle(phrase)}
									class="ms-1 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold transition active:scale-95 {myPhrases.has(
										phrase
									)
										? 'bg-amber-100 text-amber-700'
										: 'bg-surface text-brand ring-1 ring-brand/40'}"
								>
									{myPhrases.has(phrase) ? i18n.dict.phraseBank.added : i18n.dict.phraseBank.save}
								</button>
							{/each}
						</li>
					{/each}
				</ol>
			</div>
		{/if}
		<details class="text-xs">
			<summary class="cursor-pointer font-semibold text-muted">{t.transcript}</summary>
			<p class="mt-1 leading-relaxed whitespace-pre-line" dir="ltr">{shown.transcript}</p>
		</details>
	</div>
{:else}
	<div class="flex flex-col items-start gap-1">
		<button
			type="button"
			onclick={ask}
			disabled={status === 'listening'}
			class="flex items-center gap-1.5 rounded-full border-2 border-brand px-3 py-1.5 text-sm font-bold text-brand transition hover:bg-brand-soft active:scale-[0.98] disabled:opacity-70"
		>
			{#if status === 'listening'}
				<LoaderCircle size={16} class="motion-safe:animate-spin" aria-hidden="true" />{t.listening}
			{:else}
				<Sparkles size={16} aria-hidden="true" />{t.button}
			{/if}
		</button>
		{#if status === 'failed'}
			<p class="text-xs font-semibold text-miss">{t.failed}</p>
		{/if}
	</div>
{/if}
