<script lang="ts">
	import Md from '$lib/components/Md.svelte';
	import PassageMark from './PassageMark.svelte';
	import { stripLineAttrs } from './miniMarkdown';
	import type { PassageScreen } from './types';

	// Pure display, shared by the `passage` screen and QuizRunner's
	// "read the passage again" overlay - no advance/disabled contract here.
	let { passage }: { passage: PassageScreen } = $props();

	const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

	// Authors write each paragraph's original exam-printout line breaks as
	// `\n` in `text`, so line numbers here match "see line 12" the way a
	// printed passage would - continuous across the whole passage, marked
	// every 5th line, same convention as a real exam sheet's margin (which
	// sits on the left, the same side the LTR text starts from).
	type Line = {
		key: number;
		text: string;
		roman: string | null;
		lineNumber: number;
		rowClass?: string;
	};
	let lines = $derived.by(() => {
		const result: Line[] = [];
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

<PassageMark {lines}>
	{#snippet leading(line)}
		<span class="w-5 shrink-0 text-start text-xs text-muted tabular">
			{line.lineNumber % 5 === 0 ? line.lineNumber : ''}
		</span>
		<span
			class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold {line.roman
				? 'bg-accent-soft text-ink/70'
				: ''}"
		>
			{line.roman ?? ''}
		</span>
	{/snippet}
</PassageMark>
