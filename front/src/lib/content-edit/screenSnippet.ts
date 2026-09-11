// A one-line, markdown-stripped preview of a screen's main text — for the
// filmstrip thumbnails, where a full render would be too small to read and
// too heavy to mount many times over. Detachable — part of src/lib/content-edit/.
import type { LessonScreen } from '$lib/lesson-screens/types';

function plain(md: string | undefined): string {
	if (!md) return '';
	return md
		.replace(/\*\*(.*?)\*\*/g, '$1')
		.replace(/\*(.*?)\*/g, '$1')
		.replace(/`(.*?)`/g, '$1')
		.replace(/\[(.*?)\]\(.*?\)/g, '$1')
		.replace(/\s+/g, ' ')
		.trim();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function screenSnippet(
	screen: LessonScreen | (Record<string, any> & { type: string })
): string {
	const s = screen as Record<string, unknown>;
	const raw =
		(typeof s.text === 'string' && s.text) ||
		(typeof s.prompt === 'string' && s.prompt) ||
		(typeof s.instruction === 'string' && s.instruction) ||
		(typeof s.title === 'string' && s.title) ||
		(typeof s.label === 'string' && s.label) ||
		(typeof s.word === 'string' && s.word) ||
		(typeof s.sentence === 'string' && s.sentence) ||
		(typeof s.intro === 'string' && s.intro) ||
		'';
	const text = plain(raw);
	return text.length > 46 ? text.slice(0, 46) + '…' : text;
}
