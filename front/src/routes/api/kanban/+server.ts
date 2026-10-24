// Staff kanban board: list every task (GET) or add one (POST).
import { json } from '@sveltejs/kit';
import { asc, desc } from 'drizzle-orm';
import { kanbanTasks } from '$lib/server/db/schema';
import { kanbanDb, taskColumns, taskFields } from '$lib/server/kanban';
import { jsonBody } from '$lib/server/llmRoute';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	const db = kanbanDb(locals);
	const tasks = await db
		.select(taskColumns)
		.from(kanbanTasks)
		.orderBy(desc(kanbanTasks.priority), asc(kanbanTasks.createdAt));
	return json(tasks);
};

export const POST: RequestHandler = async ({ request, locals }) => {
	const db = kanbanDb(locals);
	const fields = await jsonBody(request, taskFields);
	const [task] = await db.insert(kanbanTasks).values(fields).returning(taskColumns);
	return json(task, { status: 201 });
};
