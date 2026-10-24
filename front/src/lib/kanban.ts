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
};

export const statusLabel: Record<Status, string> = {
	todo: 'לביצוע',
	doing: 'בעבודה',
	done: 'הושלם'
};

export const personLabel: Record<Person, string> = { yam: 'ים', emil: 'אמיל' };

export const priorityLabel: Record<Priority, string> = { 3: 'גבוהה', 2: 'בינונית', 1: 'נמוכה' };
