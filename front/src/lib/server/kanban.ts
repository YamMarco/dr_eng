// Server side of the staff kanban board: the gate and the input schemas.
import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { checkAuth } from '$lib/content-edit/auth';
import { db } from '$lib/server/db';
import { kanbanTasks } from '$lib/server/db/schema';
import { PEOPLE, STATUSES, TAGS_MAX, TAG_MAX, TITLE_MAX } from '$lib/kanban';

/** Staff only (second check after hooks.server.ts), and the board needs the database. */
export function kanbanDb(locals: App.Locals) {
	if (!checkAuth(locals)) error(403, 'staff only');
	if (!db) error(503, 'database is not configured');
	return db;
}

const tags = z
	.array(z.string().trim().min(1).max(TAG_MAX))
	.max(TAGS_MAX)
	.transform((list) => [...new Set(list)]);

/** Every editable field; zod strips anything else from the body. */
export const taskFields = z.object({
	title: z.string().trim().min(1).max(TITLE_MAX),
	status: z.enum(STATUSES),
	priority: z.union([z.literal(1), z.literal(2), z.literal(3)]),
	assignee: z.enum(PEOPLE).nullable(),
	tags
});

/** Only the fields the page needs. */
export const taskColumns = {
	id: kanbanTasks.id,
	title: kanbanTasks.title,
	status: kanbanTasks.status,
	priority: kanbanTasks.priority,
	assignee: kanbanTasks.assignee,
	tags: kanbanTasks.tags,
	createdAt: kanbanTasks.createdAt,
	updatedAt: kanbanTasks.updatedAt
};
