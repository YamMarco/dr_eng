// How two copies of one progress key combine (this device's and the account's),
// shared by the client sync ($lib/progressSync) and /api/progress. Merges never
// lose a finished lesson, a practice day or an exam result; keys with no natural
// merge (profile, last engagement) keep the newer copy. Values come from clients,
// so every merge tolerates any JSON shape.

/** One key's value plus when it last changed on the device that wrote it (ms). */
export type Item = {
	value: unknown;
	at: number;
	/** Overwrite instead of merging (resets). */
	replace?: boolean;
};

const SYNCED =
	/^(lesson-progress|deck-progress|activity-days|module-location|last-engagement|profile|my-phrases|speak-stats|chat-count|quiz:(attempt|results):[\w-]{1,80})$/;

/** The localStorage keys that follow the account. Everything else stays on the device. */
export const isSyncedKey = (key: string) => SYNCED.test(key);

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === 'object' && v !== null && !Array.isArray(v);
const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : 0);
const field = (v: unknown, name: string) => (isObj(v) ? v[name] : undefined);
const strings = (v: unknown) => (Array.isArray(v) ? v.filter((s) => typeof s === 'string') : []);

/** Union of two maps; `pick` settles keys present on both sides. */
function byKey(a: unknown, b: unknown, pick: (x: unknown, y: unknown) => unknown): Obj {
	const A = isObj(a) ? a : {};
	const B = isObj(b) ? b : {};
	const out: Obj = {};
	for (const k of new Set([...Object.keys(A), ...Object.keys(B)])) {
		if (k === '__proto__') continue;
		const inA = Object.hasOwn(A, k);
		const inB = Object.hasOwn(B, k);
		out[k] = inA && inB ? pick(A[k], B[k]) : inA ? A[k] : B[k];
	}
	return out;
}

/** The copy whose `name` field is larger (a's on a tie). */
const larger = (name: string) => (x: unknown, y: unknown) =>
	num(field(y, name)) > num(field(x, name)) ? y : x;

/** A word's later review: the later due day, then the higher box. */
function laterReview(x: unknown, y: unknown) {
	const due = (w: unknown) => String(field(w, 'due') ?? '');
	if (due(y) !== due(x)) return due(y) > due(x) ? y : x;
	return larger('box')(x, y);
}

function mergeFor(key: string): ((a: unknown, b: unknown) => unknown) | undefined {
	if (key === 'lesson-progress')
		return (a, b) => byKey(a, b, (x, y) => byKey(x, y, (m, n) => Math.max(num(m), num(n))));
	if (key === 'deck-progress') return (a, b) => byKey(a, b, (x, y) => byKey(x, y, laterReview));
	if (key === 'activity-days')
		return (a, b) => [...new Set([...strings(a), ...strings(b)])].sort().slice(-400);
	if (key === 'my-phrases') return (a, b) => [...new Set([...strings(a), ...strings(b)])];
	if (key === 'module-location') return (a, b) => byKey(a, b, larger('ts'));
	if (key === 'speak-stats') return (a, b) => byKey(a, b, larger('count'));
	if (key === 'chat-count') return (a, b) => Math.max(num(a), num(b));
	if (key.startsWith('quiz:attempt:')) return larger('submittedAt');
	if (key.startsWith('quiz:results:'))
		return (a, b) => {
			const all = [...(Array.isArray(a) ? a : []), ...(Array.isArray(b) ? b : [])];
			const byAt = new Map(all.map((r) => [num(field(r, 'at')), r]));
			return [...byAt.entries()].sort(([x], [y]) => x - y).map(([, r]) => r);
		};
	return undefined;
}

/** `a` is the copy already here (stored, or local), `b` the one arriving. */
export function mergeItems(key: string, a: Item | undefined, b: Item): Item {
	if (!a || b.replace) return { value: b.value, at: b.at };
	const merge = mergeFor(key);
	return {
		value: merge ? merge(a.value, b.value) : b.at > a.at ? b.value : a.value,
		at: Math.max(a.at, b.at)
	};
}
