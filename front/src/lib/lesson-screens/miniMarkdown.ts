// Tiny inline-markdown -> safe HTML for teaching text (preface / steps /
// summary / question-preview). HTML is escaped first, then a small fixed set
// of inline replacements is applied. No block syntax here — see `mdBlock`
// below for the line-level layer (headers / align / direction / `{p:text}` and
// `{p:callout}` paragraph types, and a lone `---` line as a divider).
//
// Inline: **bold**, *italic* / _italic_, ++underline++, ~~strikethrough~~,
// `code`, [text](https://url), {c:name}colored text{/c} (name = a key in
// TEXT_COLOR_PALETTE).

import { TEXT_COLOR_PALETTE } from './textColors';

const ESCAPE: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;'
};

/** Direction for a piece of text. Plain `dir="auto"` follows the first strong
 *  letter, which flips a mostly-Hebrew line that opens with an English term
 *  ("however = פנייה...") or a mostly-English line that opens with a Hebrew
 *  label ("השאלה: What do we learn...?") the wrong way. Returns "auto" when the
 *  first letter and the dominant language agree (or there are no letters),
 *  else the dominant language's direction. Tags, entities and `{..}` tokens
 *  are ignored. */
export function textDir(text: string): 'auto' | 'rtl' | 'ltr' {
	const t = text
		.replace(/<[^>]*>/g, '')
		.replace(/&[#\w]+;/g, ' ')
		.replace(/\{[a-z]:[^}]*\}|\{\/c\}/g, '');
	const first = t.match(/[A-Za-z֐-׿]/);
	if (!first) return 'auto';
	const he = (t.match(/[֐-׿]/g) ?? []).length;
	const en = (t.match(/[A-Za-z]/g) ?? []).length;
	const dominant = he >= en ? 'rtl' : 'ltr';
	const firstDir = /[֐-׿]/.test(first[0]) ? 'rtl' : 'ltr';
	return firstDir === dominant ? 'auto' : dominant;
}

/** Wraps each sentence in its own direction isolate (see `textDir`), so a sentence in a
 *  different language than its neighbours takes its own direction from its
 *  first strong character (word order + punctuation) while the text keeps
 *  flowing inline. Splits only outside inline tags, only on plain spaces, and
 *  leaves single-sentence text untouched. Runs on already-escaped HTML. */
function isolateSentences(html: string): string {
	const sentences: string[] = [];
	let start = 0;
	let depth = 0;
	for (let i = 0; i < html.length; i++) {
		const ch = html[i];
		if (ch === '<') {
			const end = html.indexOf('>', i);
			if (end < 0) break;
			const tag = html.slice(i, end + 1);
			if (tag.startsWith('</')) depth--;
			else if (!tag.endsWith('/>') && !/^<br/i.test(tag)) depth++;
			i = end;
		} else if (
			ch === ' ' &&
			depth === 0 &&
			i + 1 < html.length &&
			/[.!?…](?:&quot;|&#39;|\))*$/.test(html.slice(start, i))
		) {
			sentences.push(html.slice(start, i));
			start = i + 1;
		}
	}
	if (sentences.length === 0) return html;
	sentences.push(html.slice(start));
	return sentences.map((s) => `<span dir="${textDir(s)}">${s}</span>`).join(' ');
}

/** Wraps each `"quoted phrase"` in its own `dir="auto"` isolate. A quote is
 *  very often the OTHER language from its surrounding sentence (an English
 *  term inside a Hebrew instruction, or vice versa) - lots of older content
 *  was authored before this existed, with the quote sitting bare in the
 *  sentence, which flips the *whole* sentence's `dir="auto"` guess to
 *  whichever language the quote happens to start with. Isolating the quote
 *  removes its characters from the surrounding text's own first-strong-char
 *  scan (that's what a nested `dir` attribute does per the HTML auto-
 *  directionality algorithm), so the sentence around it resolves from its
 *  OWN first strong character again, and the quote resolves independently
 *  from its own. Only `"..."` is treated as a quote (not `'...'`, which is
 *  also an apostrophe in English contractions like "don't"). Never crosses a
 *  tag boundary, so it can't reach across an `isolateSentences` split. */
function isolateQuotes(html: string): string {
	return html.replace(
		/&quot;([^<]*?)&quot;/g,
		(_, inner) => `<span dir="${textDir(inner)}">&quot;${inner}&quot;</span>`
	);
}

export function mdInline(src: string): string {
	if (!src) return '';

	let s = src.replace(/[&<>"']/g, (c) => ESCAPE[c]);

	// ****word**** (bold typed inside an italic run gets serialized this way) -> **word**
	s = s.replace(/\*{4}([^*\n]+)\*{4}/g, '**$1**');

	// `code` first, so ** / * inside a span aren't reinterpreted
	s = s.replace(/`([^`]+)`/g, '<code class="rounded bg-line/60 px-1 text-[0.9em]">$1</code>');
	// {c:name}...{/c}
	s = s.replace(/\{c:(\w+)\}([\s\S]*?)\{\/c\}/g, (m, name, inner) => {
		const hex = TEXT_COLOR_PALETTE[name as string];
		return hex ? `<span style="color:${hex}">${inner}</span>` : inner;
	});
	// ~~strikethrough~~
	s = s.replace(/~~([^~\n]+)~~/g, '<s>$1</s>');
	// ++underline++
	s = s.replace(/\+\+([^+\n]+)\+\+/g, '<u>$1</u>');
	// [text](url) — http(s)/mailto only
	s = s.replace(
		/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g,
		'<a href="$2" target="_blank" rel="noopener noreferrer" class="underline">$1</a>'
	);
	// **bold**
	s = s.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
	// *italic*
	s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
	// _italic_ (only when not glued to word chars, so file_names survive)
	s = s.replace(/(^|[^_\w])_([^_\n]+)_(?=$|[^_\w])/g, '$1<em>$2</em>');

	return isolateQuotes(isolateSentences(s));
}

/** `{p:text}` lines: English study text, visibly set apart from the app's
 *  Hebrew instructions (tinted card with an accent edge; direction follows its first letter).
 *  Also applied by the editor's toolbar toggle, hence exported. */
export const TEXT_BLOCK_CLASS =
	'my-1 rounded-xl border-s-4 border-brand/60 bg-brand-soft/60 px-3 py-2 font-medium';

/** `{p:callout}` lines: a tip / note, set apart with a lightbulb icon (a CSS
 *  pseudo-element, so it never ends up in the editable text). */
export const CALLOUT_BLOCK_CLASS =
	"my-1 rounded-xl border-s-4 border-accent bg-accent-soft px-3 py-2 before:me-2 before:content-['💡']";

/** `{p:ul}` / `{p:ol}` lines: bullet / numbered list items. Each line stays
 *  its own top-level block (no wrapping `<ul>`/`<ol>`, matching every other
 *  paragraph kind here) - `list-item` + Tailwind's list utilities render a
 *  native browser marker without one. Numbering resets at the first item of
 *  each consecutive run (see `mdBlock`), so it starts fresh after any
 *  non-list line breaks the run. */
export const UL_BLOCK_CLASS = 'list-item list-disc list-inside my-0.5';
export const OL_BLOCK_CLASS = 'list-item list-decimal list-inside my-0.5';

const HEADER_CLASS: Record<number, string> = {
	1: 'text-2xl font-bold',
	2: 'text-xl font-bold',
	3: 'text-lg font-semibold'
};

/** Strips a line's leading `{a:center}` / `{d:rtl}` / `{p:text}` attribute
 *  tokens without applying their styling - for contexts (like exam reading
 *  passages) that render each line with plain `mdInline`, so an authored
 *  attribute token doesn't leak into the text as literal `{a:center}`. */
export function stripLineAttrs(raw: string): string {
	return raw.replace(/^(\{(?:a|d|p):\w+\})+/, '');
}

/** One line's leading `{a:center}` / `{d:rtl}` / `{p:text}` attribute tokens + optional
 *  `#`/`##`/`###` header marker, stripped off before the rest is run through
 *  `mdInline`. Attribute tokens can appear in any order, before the header
 *  marker (if any). */
function parseLine(raw: string): {
	tag: string;
	classes: string;
	style: string;
	attrs: string;
	rest: string;
	/** The `{p:..}` token, if any - so `mdBlock` can spot where a list run starts. */
	kind: string;
} {
	let rest = raw;
	let align = '';
	let dir = '';
	let paragraph = '';

	const attrRe = /^\{(a|d|p):(\w+)\}/;
	let m: RegExpMatchArray | null;
	while ((m = rest.match(attrRe))) {
		if (m[1] === 'a') align = m[2];
		else if (m[1] === 'd') dir = m[2];
		else paragraph = m[2];
		rest = rest.slice(m[0].length);
	}
	const isText = paragraph === 'text';
	const isCallout = paragraph === 'callout';
	const isUl = paragraph === 'ul';
	const isOl = paragraph === 'ol';

	let level = 0;
	const headerMatch = rest.match(/^(#{1,3})\s+(.*)$/);
	if (headerMatch) {
		level = headerMatch[1].length;
		rest = headerMatch[2];
	}

	const styles: string[] = [];
	if (align === 'center' || align === 'right' || align === 'left')
		styles.push(`text-align:${align}`);
	const explicitDir = dir === 'rtl' || dir === 'ltr';
	if (explicitDir) styles.push(`direction:${dir}`);

	return {
		tag: level ? `h${level}` : 'div',
		classes: [
			level ? HEADER_CLASS[level] : '',
			isText ? TEXT_BLOCK_CLASS : '',
			isCallout ? CALLOUT_BLOCK_CLASS : '',
			isUl ? UL_BLOCK_CLASS : '',
			isOl ? OL_BLOCK_CLASS : ''
		]
			.filter(Boolean)
			.join(' '),
		style: styles.join(';'),
		// No explicit {d:..}: each line takes its direction from its first strong
		// character, unless the line's dominant language disagrees (see textDir).
		attrs: `${isText ? ' data-p="text"' : isCallout ? ' data-p="callout"' : isUl ? ' data-p="ul"' : isOl ? ' data-p="ol"' : ''}${explicitDir ? '' : ` dir="${textDir(rest)}"`}`,
		rest,
		kind: paragraph
	};
}

/** Line-level markdown -> HTML: splits on `\n`, each line becomes its own
 *  block element carrying header size / text-align / direction, with
 *  `mdInline` applied to its content. Use in place of `mdInline` +
 *  `whitespace-pre-line` wherever a field should support per-line
 *  formatting. */
export function mdBlock(src: string): string {
	if (!src) return '';
	let prevKind = '';
	return src
		.split('\n')
		.map((raw) => {
			if (raw.trim() === '---') {
				prevKind = '';
				return '<hr class="my-3 border-line">';
			}
			const { tag, classes, style, attrs, rest, kind } = parseLine(raw);
			// A fresh `{p:ul}`/`{p:ol}` run gets its own list-item counter scope,
			// so numbering restarts after any line that isn't part of the run.
			const startsListRun = (kind === 'ul' || kind === 'ol') && kind !== prevKind;
			prevKind = kind;
			const styleParts = [style, startsListRun ? 'counter-reset:list-item' : '']
				.filter(Boolean)
				.join(';');
			const classAttr = classes ? ` class="${classes}"` : '';
			const styleAttr = styleParts ? ` style="${styleParts}"` : '';
			const inner = mdInline(rest) || '<br>';
			return `<${tag}${classAttr}${styleAttr}${attrs}>${inner}</${tag}>`;
		})
		.join('');
}
