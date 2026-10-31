<script lang="ts">
	// The feedback of an answered mcq: the tick-N "almost" line, then each
	// picked option's own feedback. Options without one show nothing here (the
	// option itself is already marked right or wrong). Used after the check in
	// a lesson and in the exam report.
	import { fly } from 'svelte/transition';
	import Md from '$lib/components/Md.svelte';
	import { staggerDelay } from '$lib/motion';
	import { textDir, textLang } from './miniMarkdown';
	import { optFeedback, optText } from './option';
	import { mcqCorrect, type McqScreen } from './types';
	import AnswerMark from './AnswerMark.svelte';

	let { screen, picks }: { screen: McqScreen; picks: number[] } = $props();

	const right = $derived(mcqCorrect(screen));
	const hits = $derived(picks.filter((p) => right.includes(p)).length);
	const partial = $derived(
		right.length > 1 && hits > 0 && hits < right.length ? screen.partialFeedback : undefined
	);
	const items = $derived(
		picks.flatMap((p) => {
			const text = optFeedback(screen.options[p]);
			return text ? [{ p, text, ok: right.includes(p) }] : [];
		})
	);
</script>

{#if partial || items.length}
	<div class="mt-4 flex flex-col gap-2">
		{#if partial}
			<div
				in:fly={{ y: 8, duration: 240, delay: staggerDelay(0) }}
				class="rounded-2xl bg-accent-soft p-3 leading-relaxed"
			>
				<Md block text={partial} />
			</div>
		{/if}
		{#each items as item, i (item.p)}
			<div
				in:fly={{ y: 8, duration: 240, delay: staggerDelay(i + (partial ? 1 : 0)) }}
				class="rounded-2xl border-s-4 p-3 {item.ok
					? 'border-brand bg-brand-soft/60'
					: 'border-miss bg-miss-soft/60'}"
			>
				<p
					class="mb-1 flex items-center gap-1 text-xs font-bold {item.ok
						? 'text-brand-dark'
						: 'text-miss'}"
					dir={textDir(optText(screen.options[item.p]))}
					lang={textLang(optText(screen.options[item.p]))}
				>
					<AnswerMark right={item.ok} size={14} />
					<Md text={optText(screen.options[item.p])} />
				</p>
				<div class="leading-relaxed"><Md block text={item.text} /></div>
			</div>
		{/each}
	</div>
{/if}
