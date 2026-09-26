// "Watch me solve": a real exam question + passage, with pen marks drawn over
// it step by step. Content targets text by phrase (not word indices) so a
// walkthrough stays readable and survives small text edits.

/** A block is the question (`q`) or a paragraph (`p1`, `p2`, ...). Without
 *  `text` the whole block is targeted. */
export type Target = { in: string; text?: string };

export type Mark =
	| { kind: 'highlight' | 'circle' | 'underline' | 'strike'; target: Target; note?: string }
	| { kind: 'link'; from: Target; to: Target };

export type Step = {
	caption: string;
	/** What stays lit; everything else dims. Persists until a later step sets it. */
	focus?: Target[];
	marks?: Mark[];
};

export type Walkthrough = {
	question: string;
	paragraphs: { label: string; text: string }[];
	steps: Step[];
};

export type Block = { id: string; label?: string; words: string[] };

export function toBlocks(w: Walkthrough): Block[] {
	return [
		{ id: 'q', words: split(w.question) },
		...w.paragraphs.map((p, i) => ({ id: `p${i + 1}`, label: p.label, words: split(p.text) }))
	];
}

const split = (text: string) => text.trim().split(/\s+/);
const norm = (word: string) => word.toLowerCase().replace(/[^\p{L}\p{N}%]/gu, '');

/** Keys (`block:index`) of the target's words; empty if the phrase isn't found. */
export function resolve(blocks: Block[], target: Target): string[] {
	const block = blocks.find((b) => b.id === target.in);
	if (!block) return [];
	const all = block.words.map((_, i) => `${block.id}:${i}`);
	if (!target.text) return all;
	const phrase = split(target.text).map(norm);
	const words = block.words.map(norm);
	for (let start = 0; start + phrase.length <= words.length; start++) {
		if (phrase.every((p, j) => words[start + j] === p)) {
			return all.slice(start, start + phrase.length);
		}
	}
	console.warn(`solve-walkthrough: "${target.text}" not found in ${target.in}`);
	return [];
}

export type Rect = { x: number; y: number; w: number; h: number };

/** One rect per visual line the words sit on, relative to `origin`. */
export function lineRects(els: HTMLElement[], origin: DOMRect): Rect[] {
	const lines: Rect[] = [];
	for (const el of els) {
		const r = el.getBoundingClientRect();
		const x = r.left - origin.left;
		const y = r.top - origin.top;
		const line = lines.find((l) => Math.abs(l.y - y) < r.height / 2);
		if (!line) {
			lines.push({ x, y, w: r.width, h: r.height });
			continue;
		}
		const right = Math.max(line.x + line.w, x + r.width);
		line.x = Math.min(line.x, x);
		line.w = right - line.x;
	}
	return lines;
}

// Hand-drawn feel: small deterministic wobble so strokes don't look like CSS borders.
const wobble = (i: number, amp: number, freq = 2.3) => Math.sin(i * freq) * amp;

export function circlePath(r: Rect): string {
	const cx = r.x + r.w / 2;
	const cy = r.y + r.h / 2;
	const rx = r.w / 2 + 10;
	const ry = r.h / 2 + 6;
	const pts: string[] = [];
	// A bit more than a full turn, starting top-right, so the ends overlap like a pen loop.
	for (let i = 0; i <= 40; i++) {
		const a = -0.6 + (i / 40) * (Math.PI * 2 + 0.5);
		const k = 1 + wobble(i, 0.025, 0.45) + (i / 40) * 0.06;
		pts.push(`${(cx + Math.cos(a) * rx * k).toFixed(1)},${(cy + Math.sin(a) * ry * k).toFixed(1)}`);
	}
	return `M${pts.join(' L')}`;
}

export function underlinePath(r: Rect): string {
	const y = r.y + r.h + 1;
	const steps = Math.max(2, Math.round(r.w / 24));
	const pts: string[] = [];
	for (let i = 0; i <= steps; i++) {
		pts.push(`${(r.x + (r.w * i) / steps).toFixed(1)},${(y + wobble(i, 1.2)).toFixed(1)}`);
	}
	return `M${pts.join(' L')}`;
}

export function strikePath(r: Rect): string {
	const y = r.y + r.h / 2 + 1;
	return `M${r.x - 2},${y + 1} L${r.x + r.w + 2},${y - 1}`;
}

/** Curved arrow from the bottom of `a` to the top of `b`. */
export function linkPath(a: Rect, b: Rect): string {
	const x1 = a.x + a.w / 2;
	const y1 = a.y + a.h + 4;
	const x2 = b.x + b.w / 2;
	const y2 = b.y - 4;
	const bend = Math.max(40, (y2 - y1) / 2);
	return `M${x1},${y1} C${x1},${y1 + bend} ${x2},${y2 - bend} ${x2},${y2}`;
}
