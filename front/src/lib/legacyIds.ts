// One-time move of saved progress from the pre-2026-10-11 lesson / exam ids
// to their `c-` prefixed ids. Imported for its side effect by every store
// that reads progress, so it runs before any of them loads. Safe to delete
// once progress lives in Supabase.

const DONE_KEY = 'ids-migrated-c-prefix';

const PREFIXED = [
	'l00',
	'l01',
	'l02',
	'l03',
	'l04',
	'l06',
	'l07',
	'l08',
	'l09',
	'l10',
	'l11',
	'l12',
	'numbers-names-q',
	'not-q',
	'limiters-q',
	'q-words-1',
	'q-words-2',
	'nav-words-1',
	'nav-words-2',
	'content-1a',
	'content-1b',
	'content-1c',
	'content-2a',
	'content-2b',
	'content-2c',
	'vocab-test',
	'yes-no',
	'because',
	'in-addition',
	'for-example',
	'in-conclusion',
	'subject-verb',
	'word-count',
	'topic-volunteer',
	'topic-vacation',
	'topic-school',
	'topic-cellphone'
];

/** Old id -> new id, for lessons and exams. */
export const LEGACY_IDS: Record<string, string> = {
	...Object.fromEntries(PREFIXED.map((id) => [id, `c-${id}`])),
	...Object.fromEntries(
		['649ed18f', 'b46b7e2b', '7c5330b8', '221188d1', '5cd02dfa'].map((hex) => [
			`n-${hex}`,
			`c-${hex}`
		])
	),
	'module-c-exam-2': 'c-exam-2',
	'module-c-exam-3': 'c-exam-3',
	'module-c-exam-4': 'c-exam-4'
};

const renamed = (id: string) => LEGACY_IDS[id] ?? id;

function rewriteJson(key: string, fn: (value: Record<string, unknown>) => unknown) {
	const raw = localStorage.getItem(key);
	if (raw) localStorage.setItem(key, JSON.stringify(fn(JSON.parse(raw))));
}

function migrate() {
	// lesson-progress: { [moduleId]: { [lessonId]: rounds } }
	rewriteJson('lesson-progress', (byModule) =>
		Object.fromEntries(
			Object.entries(byModule).map(([moduleId, lessons]) => [
				moduleId,
				Object.fromEntries(
					Object.entries(lessons as Record<string, number>).map(([id, n]) => [renamed(id), n])
				)
			])
		)
	);
	// module-location: { [moduleId]: { lessonId, ts } }
	rewriteJson('module-location', (byModule) =>
		Object.fromEntries(
			Object.entries(byModule).map(([moduleId, entry]) => {
				const e = entry as { lessonId: string; ts: number };
				return [moduleId, { ...e, lessonId: renamed(e.lessonId) }];
			})
		)
	);
	// quiz:attempt:<id> / quiz:progress:<id>, whose values also carry quizId
	for (const [oldId, newId] of Object.entries(LEGACY_IDS)) {
		for (const prefix of ['quiz:attempt:', 'quiz:progress:']) {
			const raw = localStorage.getItem(prefix + oldId);
			if (!raw) continue;
			localStorage.setItem(prefix + newId, JSON.stringify({ ...JSON.parse(raw), quizId: newId }));
			localStorage.removeItem(prefix + oldId);
		}
	}
}

if (typeof localStorage !== 'undefined' && !localStorage.getItem(DONE_KEY)) {
	try {
		migrate();
	} catch {
		// Corrupt storage: the stores already fall back to empty progress.
	}
	localStorage.setItem(DONE_KEY, '1');
}
