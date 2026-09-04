// Dev-only endpoint: overwrite one screen inside a content file.
// Part of the detachable in-app editor (see src/lib/content-edit/README.md).
import { dev } from '$app/environment';
import { error, json } from '@sveltejs/kit';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { getLesson } from '$lib/content';
import type { RequestHandler } from './$types';

// One loader per content file. Going through Vite (rather than a regex on the
// raw text) means we read the array with real module semantics — comments,
// trailing commas, single quotes all fine.
const contentModules = import.meta.glob('/src/lib/content/c/*.ts');

type Body = {
	lessonId: string;
	/** 'preface' or a round index. */
	bucket: 'preface' | number;
	index: number;
	screen: unknown;
};

export const POST: RequestHandler = async ({ request }) => {
	if (!dev) throw error(403, 'content-edit is dev-only');

	const { lessonId, bucket, index, screen } = (await request.json()) as Body;

	const meta = getLesson(lessonId);
	if (!meta) throw error(404, `unknown lesson: ${lessonId}`);

	const fileNum = meta.section.replace(/^c-/, ''); // 'c-3' -> '3'
	const key = `/src/lib/content/c/c-${fileNum}.ts`;
	const loader = contentModules[key];
	if (!loader) throw error(404, `no content file for ${key}`);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const mod = (await loader()) as Record<string, any>;
	const lessons = mod[`c${fileNum}Lessons`];
	if (!Array.isArray(lessons)) throw error(500, `c${fileNum}Lessons export missing`);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const lesson = lessons.find((l: any) => l.id === lessonId);
	if (!lesson) throw error(404, `lesson ${lessonId} not in ${key}`);

	const list =
		bucket === 'preface' ? lesson.content.preface : lesson.content.rounds?.[bucket]?.screens;
	if (!Array.isArray(list) || index < 0 || index >= list.length)
		throw error(400, `no screen at ${String(bucket)}[${index}]`);

	list[index] = screen;

	// Rewrite the file, preserving its header verbatim (everything up to the
	// opening `[` of the array literal). Body is re-emitted as 2-space JSON to
	// match the existing snapshot formatting.
	const abs = join(process.cwd(), 'src/lib/content/c', `c-${fileNum}.ts`);
	const raw = readFileSync(abs, 'utf8');
	const head = raw.match(/^([\s\S]*?=\s*)\[/)?.[1];
	if (!head) throw error(500, `could not locate array literal in ${key}`);

	writeFileSync(abs, `${head}${JSON.stringify(lessons, null, 2)};\n`);

	return json({ ok: true, file: `c-${fileNum}.ts` });
};
