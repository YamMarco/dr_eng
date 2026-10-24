// Staff kanban board: change some of a task's fields (PATCH) or delete it (DELETE).
import { error, json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { kanbanTasks } from '$lib/server/db/schema';
import { kanbanDb, taskColumns, taskFields } from '$lib/server/kanban';
import { jsonBody } from '$lib/server/llmRoute';
import type { RequestHandler } from './$types';

const patchBody = taskFields.partial().refine((patch) => Object.keys(patch).length > 0);

function taskId(raw: string): string {
	const parsed = z.uuid().safeParse(raw);
	if (!parsed.success) error(404, 'no such task');
	return parsed.data;
}

export const PATCH: RequestHandler = async ({ params, request, locals }) => {
	const db = kanbanDb(locals);
	const id = taskId(params.id);
	const patch = await jsonBody(request, patchBody);
	const [task] = await db
		.update(kanbanTasks)
		.set({ ...patch, updatedAt: new Date() })
		.where(eq(kanbanTasks.id, id))
		.returning(taskColumns);
	if (!task) error(404, 'no such task');
	return json(task);
};

export const DELETE: RequestHandler = async ({ params, locals }) => {
	const db = kanbanDb(locals);
	await db.delete(kanbanTasks).where(eq(kanbanTasks.id, taskId(params.id)));
	return new Response(null, { status: 204 });
};
