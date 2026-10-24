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

type Sort = {
	label: string;
	/** The value cards are ordered by; empty = always last. */
	value: (task: Task) => string | number | null | undefined;
	/** The direction a fresh pick starts in. */
	desc: boolean;
};

/** How cards are ordered inside each column. */
export const SORTS = {
	priority: { label: 'עדיפות', value: (t) => t.priority, desc: true },
	title: { label: 'שם', value: (t) => t.title, desc: false },
	assignee: { label: 'אחראי', value: (t) => t.assignee && personLabel[t.assignee], desc: false },
	tags: { label: 'תגית', value: (t) => t.tags[0], desc: false },
	updated: { label: 'תאריך עריכה', value: (t) => t.updatedAt, desc: true },
	created: { label: 'תאריך יצירה', value: (t) => t.createdAt, desc: true }
} satisfies Record<string, Sort>;

export type SortKey = keyof typeof SORTS;

export function sortTasks(tasks: Task[], key: SortKey, desc: boolean): Task[] {
	const { value } = SORTS[key] as Sort;
	return tasks.toSorted((a, b) => {
		const x = value(a);
		const y = value(b);
		if (!x || !y) return Number(!x) - Number(!y);
		const order = typeof x === 'number' ? x - (y as number) : x.localeCompare(String(y), 'he');
		return desc ? -order : order;
	});
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
