<script lang="ts" module>
	// A paragraph authored as "I  Every year, ..." (exam-printout style, same
	// convention as the standalone Passage screen's `paragraphs`) - the roman
	// numeral renders as its own gutter marker instead of running into the
	// paragraph's first word as plain text.
	const ROMAN_PREFIX = /^(VIII|VII|VI|IV|IX|III|II|I|V|X)  +/;

	/** True when any paragraph of `text` starts with a roman marker. */
	export function hasParagraphMarkers(text: string) {
		return text.split('\n').some((line) => ROMAN_PREFIX.test(line));
	}
</script>

<script lang="ts">
	import PassageMark from './PassageMark.svelte';
	import { stripLineAttrs } from './miniMarkdown';

	// Markable passage text (select-and-highlight, see PassageMark) with a
	// roman-numeral gutter. Shared by passage-mcq and self-check. `stripLineAttrs`
	// drops any authored `{a:center}`-style block token, since these lines only
	// run through inline markdown.
	let { text }: { text: string } = $props();

	let lines = $derived.by(() => {
		const result: { key: number; text: string; roman: string | null; rowClass?: string }[] = [];
		let n = 0;
		text.split('\n\n').forEach((paragraph) => {
			paragraph.split('\n').forEach((raw, li) => {
				let line = stripLineAttrs(raw);
				if (!line.trim()) return;
				let roman: string | null = null;
				if (li === 0) {
					const m = line.match(ROMAN_PREFIX);
					if (m) {
						roman = m[1];
						line = line.slice(m[0].length);
					}
				}
				n += 1;
				result.push({ key: n, text: line, roman, rowClass: li === 0 && n > 1 ? 'mt-3' : '' });
			});
		});
		return result;
	});
</script>

<PassageMark {lines}>
	{#snippet leading(line)}
		<span
			class="mt-0.5 flex h-6 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold {line.roman
				? 'bg-accent-soft text-ink/70'
				: ''}"
		>
			{line.roman ?? ''}
		</span>
	{/snippet}
</PassageMark>
