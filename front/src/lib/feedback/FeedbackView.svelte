<script lang="ts">
	// The answer with every flagged spot highlighted, the verdict, and one line per mark
	// (what the spot is, why it is wrong, the fix when we have one).
	import type { Feedback, Mark } from './types';
	import { i18n } from '$lib/i18n/index.svelte';

	let { text, feedback }: { text: string; feedback: Feedback } = $props();

	const t = $derived(i18n.dict.feedback);
	const label = (m: Mark) =>
		(m.source === 'l1' ? i18n.dict.writingCheck.rule[m.tag] : t.tag[m.tag]) ?? m.tag;

	// Overlapping marks collapse into the first one so the highlighted text stays readable.
	const pieces = $derived.by(() => {
		const out: { text: string; mark?: Mark }[] = [];
		let at = 0;
		for (const m of feedback.marks) {
			if (m.start < at) continue;
			if (m.start > at) out.push({ text: text.slice(at, m.start) });
			out.push({ text: text.slice(m.start, m.end), mark: m });
			at = m.end;
		}
		if (at < text.length) out.push({ text: text.slice(at) });
		return out;
	});
</script>

<div class="mt-3 rounded-2xl border border-line bg-surface p-3 text-sm">
	{#if feedback.stage === 'l1-gate'}
		<p class="font-semibold text-miss">✗ {t.gate[feedback.gate ?? 'empty']}</p>
	{:else if feedback.stage === 'partial'}
		<p class="font-semibold text-muted">{t.partial}</p>
	{:else}
		<p class="font-semibold {feedback.pass ? 'text-brand-dark' : 'text-miss'}">
			{feedback.pass ? '✓' : '✗'}
			{feedback.pass ? t.pass : t.fail}
		</p>
		{#each feedback.general ?? [] as tag (tag)}
			<p class="mt-1 text-xs font-semibold text-miss">• {t.tag[tag] ?? tag}</p>
		{/each}
	{/if}

	{#if feedback.marks.length > 0}
		<p class="mt-3 leading-relaxed whitespace-pre-wrap" dir="ltr">
			{#each pieces as piece, i (i)}
				{#if piece.mark}
					<mark
						class="rounded px-0.5 {piece.mark.maybe
							? 'bg-accent-soft text-ink'
							: 'bg-danger-soft text-danger'}">{piece.text}</mark
					>
				{:else}{piece.text}{/if}
			{/each}
		</p>
		<ul class="mt-3 flex flex-col gap-1.5">
			{#each feedback.marks as m (m.start + m.tag)}
				<li class="flex flex-wrap items-baseline gap-x-2">
					<span dir="ltr" class="rounded bg-danger-soft px-1.5 font-semibold text-danger"
						>{m.text}</span
					>
					{#if m.suggestions?.length}
						<span dir="ltr" class="font-semibold text-brand-dark"
							>→ {m.suggestions.join(' / ')}</span
						>
					{/if}
					<span class="text-xs text-muted">
						{m.maybe ? `${i18n.dict.writingCheck.maybe}: ` : ''}{label(m)}
					</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
