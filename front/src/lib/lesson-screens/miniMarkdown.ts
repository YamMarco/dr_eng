// Tiny inline-markdown -> safe HTML for teaching text (preface / steps /
// summary / question-preview). HTML is escaped first, then a small fixed set
// of inline replacements is applied. No block syntax — newlines are left to
// the container's `whitespace-pre-line`.
//
// Supported: **bold**, *italic* / _italic_, `code`, [text](https://url).

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

	// `code` first, so ** / * inside a span aren't reinterpreted
	s = s.replace(/`([^`]+)`/g, '<code class="rounded bg-line/60 px-1 text-[0.9em]">$1</code>');
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
