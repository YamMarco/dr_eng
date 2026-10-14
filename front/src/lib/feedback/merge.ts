// Pure helpers that join Layer 1 and Layer 2: build the text the LLM sees,
// find its quoted spans in the student's own text, and merge the marks.
import type { LlmMark, Mark } from './types';

/** LLM tags that carry a `fix`: the UI shows it in the text (see MarkedText). */
const FIX_TAGS = new Set(['wrong-word', 'missing-word']);

type Fix = { start: number; end: number; with: string };

export type Corrected = { text: string; fixes: Fix[] };

/** The text with every Layer-1 typo replaced by its top suggestion (the LLM judges content, not spelling). */
export function applyFixes(text: string, marks: Mark[]): Corrected {
	const fixes = marks
		.filter((m) => m.tag === 'typo' && m.suggestions?.[0])
		.sort((a, b) => a.start - b.start)
		.map((m) => ({ start: m.start, end: m.end, with: m.suggestions![0] }));
	let out = '';
	let at = 0;
	for (const f of fixes) {
		out += text.slice(at, f.start) + f.with;
		at = f.end;
	}
	return { text: out + text.slice(at), fixes };
}

/** An offset in the corrected text -> the same spot in the original. A spot inside a fixed word snaps to that word's edge. */
function toOriginal(pos: number, fixes: Fix[], edge: 'start' | 'end'): number {
	let delta = 0;
	for (const f of fixes) {
		const newStart = f.start + delta;
		const newEnd = newStart + f.with.length;
		if (pos < newStart) break;
		if (pos < newEnd) return edge === 'start' ? f.start : f.end;
		if (pos === newEnd && edge === 'end') return f.end;
		delta += f.with.length - (f.end - f.start);
	}
	return pos - delta;
}

/** Turns the LLM's quoted spans into marks with offsets in the ORIGINAL text. Spans it can't find are dropped. */
export function locateMarks(original: string, corrected: Corrected, llm: LlmMark[]): Mark[] {
	const out: Mark[] = [];
	const lower = corrected.text.toLowerCase();
	for (const m of llm) {
		const span = m.span.trim();
		if (!span) continue;
		let from = -1;
		for (let i = 0; i < Math.max(1, m.nth ?? 1); i++) {
			from = corrected.text.indexOf(span, from + 1);
			if (from < 0) break;
		}
		if (from < 0) from = lower.indexOf(span.toLowerCase());
		if (from < 0) continue;
		const start = toOriginal(from, corrected.fixes, 'start');
		const end = toOriginal(from + span.length, corrected.fixes, 'end');
		if (end <= start) continue;
		const fix = FIX_TAGS.has(m.tag) ? m.fix?.trim() : undefined;
		out.push({
			tag: m.tag,
			source: 'l2',
			start,
			end,
			text: original.slice(start, end),
			...(fix && { suggestions: [fix] })
		});
	}
	return out;
}

/** One sorted list. Where an L1 and an L2 mark cover the same spot, L1 (exact, free) stays. */
export function mergeMarks(l1: Mark[], l2: Mark[]): Mark[] {
	const keep = l2.filter((b) => !l1.some((a) => a.start < b.end && b.start < a.end));
	return [...l1, ...keep].sort((a, b) => a.start - b.start || a.end - b.end);
}
