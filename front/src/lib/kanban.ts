// Staff kanban board (/kanban): values shared by the page and /api/kanban.

export const STATUSES = ['todo', 'doing', 'done'] as const;
export const PEOPLE = ['yam', 'emil'] as const;
export type Status = (typeof STATUSES)[number];
export type Person = (typeof PEOPLE)[number];
/** 1 = low, 2 = medium, 3 = high. */
export type Priority = 1 | 2 | 3;

export const TITLE_MAX = 300;
export const TAG_MAX = 30;
export const TAGS_MAX = 10;

export type Task = {
	id: string;
	title: string;
	status: Status;
	priority: Priority;
	assignee: Person | null;
	tags: string[];
	/** ISO times. */
	createdAt: string;
	updatedAt: string;
};

/** Editable fields (what a card saves). */
export type TaskPatch = Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>;

/** How cards are ordered inside each column. */
export const SORTS = {
	priority: { label: 'עדיפות', compare: (a: Task, b: Task) => b.priority - a.priority },
	title: { label: 'שם', compare: (a: Task, b: Task) => a.title.localeCompare(b.title, 'he') },
	assignee: {
		label: 'אחראי',
		compare: (a: Task, b: Task) =>
			byText(a.assignee && personLabel[a.assignee], b.assignee && personLabel[b.assignee])
	},
	tags: { label: 'תגית', compare: (a: Task, b: Task) => byText(a.tags[0], b.tags[0]) },
	updated: {
		label: 'עריכה אחרונה',
		compare: (a: Task, b: Task) => b.updatedAt.localeCompare(a.updatedAt)
	},
	created: {
		label: 'נוצרה לאחרונה',
		compare: (a: Task, b: Task) => b.createdAt.localeCompare(a.createdAt)
	}
};

export type SortKey = keyof typeof SORTS;

/** Alphabetical; empty values last. */
function byText(a: string | null | undefined, b: string | null | undefined): number {
	if (!a || !b) return Number(!a) - Number(!b);
	return a.localeCompare(b, 'he');
}

/** A tag's color: a hue picked from its name, so it's the same everywhere with nothing stored. */
export function tagColor(tag: string, alpha: number): string {
	let hash = 0;
	for (const char of tag) hash = (hash * 31 + char.codePointAt(0)!) | 0;
	return `hsl(${Math.abs(hash) % 360} 70% 50% / ${alpha})`;
}

export const statusLabel: Record<Status, string> = {
	todo: 'לביצוע',
	doing: 'בעבודה',
	done: 'הושלם'
};

export const personLabel: Record<Person, string> = { yam: 'ים', emil: 'אמיל' };

export const priorityLabel: Record<Priority, string> = { 3: 'גבוהה', 2: 'בינונית', 1: 'נמוכה' };
