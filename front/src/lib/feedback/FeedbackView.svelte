<script lang="ts">
	// The verdict under a checked answer. The errors themselves are highlighted on the
	// answer (MarkedText); only whole-answer problems, which have no spot, are listed here.
	import type { Feedback } from './types';
	import { i18n } from '$lib/i18n/index.svelte';

	let { feedback }: { feedback: Feedback } = $props();

	const t = $derived(i18n.dict.feedback);
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
		<p class="mt-1 text-xs text-muted">{t.tapHint}</p>
	{/if}
</div>
