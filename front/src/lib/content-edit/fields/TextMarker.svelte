<script lang="ts">
	// Flowing-text marker for mark-all: shows the passage as normal text, the
	// author drags to select a phrase, then picks a category (in ScreenForm,
	// above/below). Clicking an existing highlight unmarks that word.
	// Token indices match the runtime's `text.split(/\s+/)`.
	import type { MarkAllSwatch } from '$lib/lesson-screens/markAllColors';

	let {
		text,
		dir = 'auto',
		/** token index -> swatch, for the tokens currently marked */
		colors,
		onSelect,
		onTokenClick
	}: {
		text: string;
		dir?: 'rtl' | 'ltr' | 'auto';
		colors: Record<number, MarkAllSwatch>;
		/** the token indices covered by the author's latest text selection */
		onSelect: (tokenIndices: number[]) => void;
		onTokenClick: (index: number) => void;
	} = $props();

	let container = $state<HTMLDivElement>();

	// Split keeping whitespace: even parts are tokens (part index / 2 == the
	// index in text.split(/\s+/)), odd parts are the separators.
	let segments = $derived.by(() => {
		const parts = text.split(/(\s+)/);
		const out: { token: boolean; index: number; text: string }[] = [];
		for (let p = 0; p < parts.length; p++) {
			if (parts[p] === '') continue;
			out.push({ token: p % 2 === 0, index: p / 2, text: parts[p] });
		}
		return out;
	});

	// token index -> [start, end) char offsets in `text`
	function tokenCharSpans(): Map<number, [number, number]> {
		const parts = text.split(/(\s+)/);
		const m = new Map<number, [number, number]>();
		let offset = 0;
		for (let p = 0; p < parts.length; p++) {
			if (p % 2 === 0 && parts[p] !== '') m.set(p / 2, [offset, offset + parts[p].length]);
			offset += parts[p].length;
		}
		return m;
	}

	function charOffset(node: Node | null, nodeOffset: number): number {
		if (!node || !container) return 0;
		const r = document.createRange();
		r.selectNodeContents(container);
		try {
			r.setEnd(node, nodeOffset);
		} catch {
			return 0;
		}
		return r.toString().length;
	}

	function readSelection() {
		const sel = window.getSelection();
		if (!sel || sel.rangeCount === 0 || sel.isCollapsed || !container) {
			onSelect([]);
			return;
		}
		const range = sel.getRangeAt(0);
		if (!container.contains(range.commonAncestorContainer)) return;
		const a = charOffset(sel.anchorNode, sel.anchorOffset);
		const b = charOffset(sel.focusNode, sel.focusOffset);
		const [s, e] = a <= b ? [a, b] : [b, a];
		if (e - s === 0) {
			onSelect([]);
			return;
		}
		const hit: number[] = [];
		for (const [idx, [ts, te]] of tokenCharSpans()) {
			if (ts < e && te > s) hit.push(idx);
		}
		hit.sort((x, y) => x - y);
		onSelect(hit);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	bind:this={container}
	{dir}
	onmouseup={readSelection}
	ontouchend={readSelection}
	class="w-full rounded-xl border-2 border-line bg-canvas p-3 text-sm leading-loose whitespace-pre-wrap select-text"
>{#each segments as seg (seg.token ? `t${seg.index}` : `w${seg.index}`)}{#if seg.token && colors[seg.index]}<button
				type="button"
				onclick={() => onTokenClick(seg.index)}
				title="בטל סימון"
				style="background:{colors[seg.index].bg};color:{colors[
					seg.index
				].fg};user-select:text;-webkit-user-select:text"
				class="rounded-[3px] px-px"
			>{seg.text}</button>{:else}{seg.text}{/if}{/each}</div>
