<script lang="ts">
	// The student's submitted text with every flagged spot highlighted in place.
	// Tapping a highlight shows what is wrong there (and the fix, when we have one).
	import type { Mark } from './types';
	import { i18n } from '$lib/i18n/index.svelte';

	let { text, marks, class: cls = '' }: { text: string; marks: Mark[]; class?: string } = $props();

	let open = $state<Mark | null>(null);

	const label = (m: Mark) =>
		(m.source === 'l1' ? i18n.dict.writingCheck.rule[m.tag] : i18n.dict.feedback.tag[m.tag]) ??
		m.tag;

	// Overlapping marks collapse into the first one so the text stays readable.
	const pieces = $derived.by(() => {
		const out: { text: string; mark?: Mark }[] = [];
		let at = 0;
		for (const m of marks) {
			if (m.start < at) continue;
			if (m.start > at) out.push({ text: text.slice(at, m.start) });
			out.push({ text: text.slice(m.start, m.end), mark: m });
			at = m.end;
		}
		if (at < text.length) out.push({ text: text.slice(at) });
		return out;
	});
</script>

<div class={cls}>
	<p class="leading-relaxed whitespace-pre-wrap" dir="ltr">
		{#each pieces as piece, i (i)}{#if piece.mark}{@const m = piece.mark}<button
					type="button"
					class="rounded px-0.5 underline decoration-dotted underline-offset-4 {m.maybe
						? 'bg-accent-soft text-ink'
						: 'bg-danger-soft text-danger'} {open === m ? 'ring-2 ring-danger/40' : ''}"
					onclick={() => (open = open === m ? null : m)}
					>{#if m.source === 'l2' && m.tag === 'missing-word' && m.suggestions?.[0]}<span
							class="text-brand-dark/70 italic">{m.suggestions[0]}{' '}</span
						>{piece.text}{:else if m.source === 'l2' && (m.tag === 'wrong-word' || m.tag === 'word-choice') && m.suggestions?.[0]}<span class="line-through">{piece.text}</span><span
							class="font-semibold text-brand-dark"
							>{' '}{m.suggestions[0]}</span
						>{:else}{piece.text}{/if}</button
				>{:else}{piece.text}{/if}{/each}
	</p>
	{#if open}
		<p class="mt-2 flex flex-wrap items-baseline gap-x-2 text-xs font-semibold">
			<span class="text-danger">
				{open.maybe ? `${i18n.dict.writingCheck.maybe}: ` : ''}{label(open)}
			</span>
			{#if open.source === 'l1' && open.suggestions?.length}
				<span dir="ltr" class="text-brand-dark">{open.text} → {open.suggestions.join(' / ')}</span>
			{/if}
		</p>
	{/if}
</div>
