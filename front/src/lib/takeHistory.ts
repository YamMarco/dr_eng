// The student's spoken takes per question, so they can hear how they've grown:
// the FIRST and the LATEST take's audio (IndexedDB - too big for localStorage)
// and small stats per question (localStorage) for the module page. Device only,
// never uploaded. Every read and write is best-effort: no storage, no history.

export type SavedTake = { blob?: Blob; seconds: number; at: number };
type Entry = { key: string; first: SavedTake; latest: SavedTake };
export type TakeStats = { count: number; reached: number };

const DB = 'speak-takes';
const STORE = 'takes';
const STATS_KEY = 'speak-stats';

/** A stable key for a question: its prompt text, hashed. */
export function takeKey(prompt: string): string {
	let h = 5381;
	for (let i = 0; i < prompt.length; i++) h = ((h << 5) + h + prompt.charCodeAt(i)) | 0;
	return `q${(h >>> 0).toString(36)}`;
}

function openDb(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB, 1);
		req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: 'key' });
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}

function readStats(): Record<string, TakeStats> {
	try {
		return JSON.parse(localStorage.getItem(STATS_KEY) ?? '{}');
	} catch {
		return {};
	}
}

/** Saves a finished take; returns the question's FIRST take from before (none on a first try). */
export async function recordTake(
	key: string,
	take: { blob?: Blob; seconds: number },
	targetSeconds: number
): Promise<SavedTake | undefined> {
	try {
		const stats = readStats();
		const row = stats[key] ?? { count: 0, reached: 0 };
		stats[key] = {
			count: row.count + 1,
			reached: row.reached + (take.seconds >= targetSeconds ? 1 : 0)
		};
		localStorage.setItem(STATS_KEY, JSON.stringify(stats));
	} catch {
		// stats are a nicety
	}
	try {
		const db = await openDb();
		const saved: SavedTake = { ...take, at: Date.now() };
		const previous = await new Promise<Entry | undefined>((resolve, reject) => {
			const req = db.transaction(STORE).objectStore(STORE).get(key);
			req.onsuccess = () => resolve(req.result);
			req.onerror = () => reject(req.error);
		});
		const entry: Entry = { key, first: previous?.first ?? saved, latest: saved };
		await new Promise<void>((resolve, reject) => {
			const tx = db.transaction(STORE, 'readwrite');
			tx.objectStore(STORE).put(entry);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
		db.close();
		return previous?.first;
	} catch {
		return undefined;
	}
}

/** For the module page: how many questions were practiced, and the share of takes that reached their target time. */
export function speakingSummary(): { questions: number; takes: number; reachedPercent: number } {
	const rows = Object.values(readStats());
	const takes = rows.reduce((s, r) => s + r.count, 0);
	const reached = rows.reduce((s, r) => s + r.reached, 0);
	return {
		questions: rows.length,
		takes,
		reachedPercent: takes ? Math.round((reached / takes) * 100) : 0
	};
}
