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
	import PassageLines, { type PassageLine } from './PassageLines.svelte';
	import { stripLineAttrs } from './miniMarkdown';

	// Markable passage text (select-and-highlight, see PassageMark) with a
	// roman-numeral gutter. Shared by passage-mcq, passage-quiz and self-check.
	// `stripLineAttrs` drops any authored `{a:center}`-style block token, since
	// these lines only run through inline markdown. With `lineNumbers`, every
	// line of a roman-marked paragraph counts (the author writes the printed line
	// breaks as single `\n`); the title and glossary don't.
	let { text, lineNumbers = false }: { text: string; lineNumbers?: boolean } = $props();

	// No gutter at all when the passage has no paragraph markers.
	let gutter = $derived(hasParagraphMarkers(text));

	let lines = $derived.by(() => {
		const result: PassageLine[] = [];
		let n = 0;
		let printed = 0;
		text.split('\n\n').forEach((paragraph) => {
			let counted = false;
			paragraph.split('\n').forEach((raw, li) => {
				let line = stripLineAttrs(raw);
				if (!line.trim()) return;
				let roman: string | null = null;
				if (li === 0) {
					const m = line.match(ROMAN_PREFIX);
					if (m) {
						roman = m[1];
						line = line.slice(m[0].length);
						counted = true;
					}
				}
				n += 1;
				result.push({
					key: n,
					text: line,
					roman,
					lineNumber: lineNumbers && counted ? ++printed : null,
					rowClass: li === 0 && n > 1 ? 'mt-3' : ''
				});
			});
		});
		return result;
	});
</script>

<PassageLines {lines} {gutter} numbered={lineNumbers} />
