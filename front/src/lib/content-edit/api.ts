// Thin wrapper around the content-edit endpoints. apiFetch attaches the
// signed-in staff session; the server checks the role.
import { apiFetch } from '$lib/api';
import type { LessonContent, LessonNode } from '$lib/content';
import type { QuizNode } from '$lib/quiz';
import type { RulesFile } from '$lib/content/rules';
import type { WordPatch } from './wordsFile';

/** Stores a cropped JPEG and returns the site path to reference from a screen. */
export async function uploadImage(jpeg: Blob): Promise<string> {
	const res = await apiFetch('/api/content-edit/image', {
		method: 'POST',
		headers: { 'content-type': 'image/jpeg' },
		body: jpeg
	});
	if (!res.ok) throw new Error(await res.text());
	return (await res.json()).url;
}

async function post(
	body: unknown,
	url = '/api/content-edit'
): Promise<{ ok: true; committed: boolean }> {
	const res = await apiFetch(url, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(body)
	});
	if (!res.ok) throw new Error(await res.text());
	return res.json();
}

/** Replaces a lesson's whole content (preface + all rounds) in one write/commit. */
export function saveLessonContent(lessonId: string, content: LessonContent) {
	return post({ lessonId, content });
}

/** Merges only the changed/removed nodes into a section file in one
 *  write/commit — the /edit workspace's save (graph + content edits
 *  together). The server merges this patch into the file's current
 *  content, so nodes nobody in this session touched are left exactly as
 *  they are on disk/GitHub, not overwritten from this session's copy. */
export function saveSection(sectionId: string, upserts: LessonNode[], deletes: string[]) {
	return post({ sectionId, upserts, deletes });
}

/** Merges changed/removed Hebrew titles (by key) into i18n/locales/titles.he.ts. */
export function saveTitles(upserts: Record<string, string>, deletes: string[]) {
	return post({ titles: { upserts, deletes } });
}

/** Merges only the changed/removed exams into a module's quiz-content file in
 *  one write/commit - the exam-editor's equivalent of saveSection. */
export function saveExamChanges(moduleId: string, upserts: QuizNode[], deletes: string[]) {
	return post({ examModuleId: moduleId, upserts, deletes });
}

/** Replaces the module / section / lesson rule settings (content/rules.json). */
export function saveRules(file: RulesFile) {
	return post(file, '/api/content-edit/rules');
}

/** Replaces the given words' definition, Hebrew and example in one deck's list file. */
export function saveWords(deckId: string, words: WordPatch[]) {
	return post({ wordDeckId: deckId, words });
}

/** Merges Module E Arabic meanings by word id; an empty one is removed. */
export function saveWordGlossesAr(upserts: Record<string, string>) {
	return post({ wordGlossesAr: upserts });
}
