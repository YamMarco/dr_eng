<script lang="ts" module>
	export type PassageLine = {
		key: number;
		text: string;
		/** Paragraph marker (I, II...) on a paragraph's first line. */
		roman: string | null;
		/** Printed line number; null = not a counted line (title, glossary). */
		lineNumber: number | null;
		rowClass?: string;
	};
</script>

<script lang="ts">
	import PassageMark from './PassageMark.svelte';
	import type { Highlight } from './passageMarks';

	// The exam-sheet look shared by the exam `passage` (PassageBody) and lesson
	// passages (PassageText): a roman-numeral gutter and, when `numbered`, the
	// margin line number on every 5th line. Numbered text keeps its printed line
	// breaks: the font shrinks just enough for the longest line to fit (CSS below),
	// so "lines 14-16" stays true on a phone.
	let {
		lines,
		gutter,
		numbered,
		marks,
		onMarks
	}: {
		lines: PassageLine[];
		gutter: boolean;
		numbered: boolean;
		marks?: Highlight[];
		onMarks?: (highlights: Highlight[]) => void;
	} = $props();

	let longest = $derived(
		Math.max(1, ...lines.map((line) => line.text.replace(/[*_~`+]/g, '').length))
	);
</script>

<div class={numbered ? 'passage-fit' : ''} style={numbered ? `--chars: ${longest}` : undefined}>
	<PassageMark {lines} {marks} {onMarks}>
		{#snippet leading(line)}
			{#if gutter}<span
					class="mt-0.5 flex h-6 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold {line.roman
						? 'bg-accent-soft text-ink/70'
						: ''}"
				>
					{line.roman ?? ''}
				</span>{/if}
			{#if numbered}<span class="mt-0.5 w-5 shrink-0 text-start text-xs leading-6 text-muted tabular">
					{line.lineNumber && line.lineNumber % 5 === 0 ? line.lineNumber : ''}
				</span>{/if}
		{/snippet}
	</PassageMark>
</div>

<style>
	.passage-fit {
		container-type: inline-size;
	}
	/* 4rem: the roman numeral and line-number gutter. 0.49em: the widest exam lines (~25em for 52 characters).
	   Never below 12px: past that a line may still wrap. */
	.passage-fit :global(p[data-line-key]) {
		font-size: clamp(0.75rem, calc((100cqi - 4rem) / (var(--chars) * 0.49)), 1rem);
	}
</style>
