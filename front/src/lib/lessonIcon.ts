// Stable per-lesson decorative icon for the path canvas (see
// routes/.../lessons/+page.svelte). Placeholder variety until lessons get
// curated icons — the same lesson id always maps to the same emoji, so it
// doesn't jitter between reloads.
const ICONS = [
	'📘',
	'🎯',
	'🧠',
	'⭐',
	'🚀',
	'🎨',
	'🔤',
	'📝',
	'🦉',
	'🌟',
	'🧩',
	'🔍',
	'💡',
	'🎓',
	'📚',
	'🏆',
	'🌈',
	'🔑'
];

function hashString(value: string): number {
	let hash = 0;
	for (let i = 0; i < value.length; i++) {
		hash = (hash * 31 + value.charCodeAt(i)) | 0;
	}
	return Math.abs(hash);
}

export function lessonIcon(lessonId: string): string {
	return ICONS[hashString(lessonId) % ICONS.length];
}
