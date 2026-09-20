// Tiny inline-markdown -> safe HTML for teaching text (preface / steps /
// summary / question-preview). HTML is escaped first, then a small fixed set
// of inline replacements is applied. No block syntax here — see `mdBlock`
// below for the line-level layer (headers / align / direction / `{p:text}`
// paragraph type).
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

	return s;
}

/** `{p:text}` lines: English study text, visibly set apart from the app's
 *  Hebrew instructions (tinted card with an accent edge, left-to-right).
 *  Also applied by the editor's toolbar toggle, hence exported. */
export const TEXT_BLOCK_CLASS =
	'my-1 rounded-xl border-s-4 border-brand/60 bg-brand-soft/60 px-3 py-2 font-medium';

const HEADER_CLASS: Record<number, string> = {
	1: 'text-2xl font-bold',
	2: 'text-xl font-bold',
	3: 'text-lg font-semibold'
};

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
	if (isText && !dir) dir = 'ltr';

	let level = 0;
	const headerMatch = rest.match(/^(#{1,3})\s+(.*)$/);
	if (headerMatch) {
		level = headerMatch[1].length;
		rest = headerMatch[2];
	}

	const styles: string[] = [];
	if (align === 'center' || align === 'right' || align === 'left')
		styles.push(`text-align:${align}`);
	if (dir === 'rtl' || dir === 'ltr') styles.push(`direction:${dir}`);

	return {
		tag: level ? `h${level}` : 'div',
		classes: [level ? HEADER_CLASS[level] : '', isText ? TEXT_BLOCK_CLASS : '']
			.filter(Boolean)
			.join(' '),
		style: styles.join(';'),
		attrs: isText ? ' data-p="text"' : '',
		rest
	};
}

/** Line-level markdown -> HTML: splits on `\n`, each line becomes its own
 *  block element carrying header size / text-align / direction, with
 *  `mdInline` applied to its content. Use in place of `mdInline` +
 *  `whitespace-pre-line` wherever a field should support per-line
 *  formatting. */
export function mdBlock(src: string): string {
	if (!src) return '';
	return src
		.split('\n')
		.map((raw) => {
			const { tag, classes, style, attrs, rest } = parseLine(raw);
			const classAttr = classes ? ` class="${classes}"` : '';
			const styleAttr = style ? ` style="${style}"` : '';
			const inner = mdInline(rest) || '<br>';
			return `<${tag}${classAttr}${styleAttr}${attrs}>${inner}</${tag}>`;
		})
		.join('');
}
