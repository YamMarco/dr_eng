<script lang="ts">
	import Md from '$lib/components/Md.svelte';
	import type { PassageScreen } from './types';

	// Pure display, shared by the `passage` screen and QuizRunner's
	// "read the passage again" overlay - no advance/disabled contract here.
	let { passage }: { passage: PassageScreen } = $props();

	const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

	// Authors write each paragraph's original exam-printout line breaks as
	// `\n` in `text`, so line numbers here match "see line 12" the way a
	// printed passage would - continuous across the whole passage, marked
	// every 5th line, same convention as a real exam sheet's margin.
	type Line = { text: string; roman: string | null; lineNumber: number };
	let lines = $derived.by(() => {
		const result: Line[] = [];
		let n = 0;
		passage.paragraphs.forEach((paragraph, pi) => {
			paragraph.text.split('\n').forEach((text, li) => {
				n += 1;
				result.push({
					text,
					roman: li === 0 ? (ROMAN[pi] ?? String(pi + 1)) : null,
					lineNumber: n
				});
			});
		});
		return result;
	});
</script>

{#if passage.title}
	<h2 class="mb-3 text-lg font-bold" dir="ltr"><Md text={passage.title} /></h2>
{/if}

<div class="flex flex-col" dir="ltr">
	{#each lines as line (line.lineNumber)}
		<div class="flex items-start gap-2 {line.roman ? 'mt-3' : ''}">
			<span
				class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold {line.roman
					? 'bg-accent-soft text-ink/70'
					: ''}"
			>
				{line.roman ?? ''}
			</span>
			<p class="flex-1 leading-relaxed"><Md text={line.text} /></p>
			<span class="w-5 shrink-0 text-end text-xs text-muted tabular">
				{line.lineNumber % 5 === 0 ? line.lineNumber : ''}
			</span>
		</div>
	{/each}
</div>
