<script lang="ts">
	import { getContext } from 'svelte';
	import Md from '$lib/components/Md.svelte';
	import PassageLines, { type PassageLine } from './PassageLines.svelte';
	import { PASSAGE_MARKS, type PassageMarksStore } from './passageMarks';
	import { stripLineAttrs } from './miniMarkdown';
	import type { PassageScreen } from './types';

	// Pure display, shared by the `passage` screen and QuizRunner's
	// "read the passage again" overlay - no advance/disabled contract here.
	let { passage }: { passage: PassageScreen } = $props();

	const marksStore = getContext<PassageMarksStore | undefined>(PASSAGE_MARKS);

	const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

	// Authors write each paragraph's original exam-printout line breaks as
	// `\n` in `text`, so line numbers here match "see line 12" the way a
	// printed passage would - continuous across the whole passage, marked
	// every 5th line, same convention as a real exam sheet's margin (which
	// sits on the left, the same side the LTR text starts from).
	let lines = $derived.by(() => {
		const result: PassageLine[] = [];
		let n = 0;
		passage.paragraphs.forEach((paragraph, pi) => {
			paragraph.text.split('\n').forEach((raw, li) => {
				n += 1;
				result.push({
					key: n,
					text: stripLineAttrs(raw),
					roman: li === 0 ? (ROMAN[pi] ?? String(pi + 1)) : null,
					lineNumber: n,
					rowClass: li === 0 ? 'mt-3' : ''
				});
			});
		});
		return result;
	});
</script>

{#if passage.title}
	<h2 class="mb-3 text-lg font-bold" dir="ltr"><Md text={stripLineAttrs(passage.title)} /></h2>
{/if}

<PassageLines
	{lines}
	gutter
	numbered
	marks={marksStore?.get(passage)}
	onMarks={(h) => marksStore?.set(passage, h)}
/>

<!-- The exam's glossary, printed under the text like the paper. -->
{#if passage.glossary?.length}
	<dl class="mt-4 border-t border-line/70 pt-3 text-sm">
		<dt class="mb-1 text-xs font-bold text-muted">GLOSSARY</dt>
		{#each passage.glossary as entry (entry.term)}
			<dd class="flex gap-2">
				<span class="font-semibold">{entry.term}</span>
				<span>-</span>
				<span dir="rtl">{entry.he}</span>
			</dd>
		{/each}
	</dl>
{/if}
