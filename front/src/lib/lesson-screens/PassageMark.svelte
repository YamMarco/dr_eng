<script lang="ts" generics="T extends { key: string | number; text: string; rowClass?: string }">
	import Md from '$lib/components/Md.svelte';
	import type { Snippet } from 'svelte';

	// Reusable "select text, pick a highlight color" tool for reading
	// passages - shared by the standalone Passage screen (with its
	// line-number/roman-numeral gutter via `leading`) and exam passage-mcq
	// screens (no gutter). Segments are computed from plain-text offsets, so
	// highlighting only lines up correctly on lines with no inline markdown
	// (the norm for reading passages).
	let { lines, leading }: { lines: T[]; leading?: Snippet<[T]> } = $props();

	type MarkColor = 'yellow' | 'green' | 'pink' | 'blue';
	type Highlight = { lineKey: string | number; start: number; end: number; color: MarkColor };
	let highlights = $state<Highlight[]>([]);
	let pendingSelection = $state<{ lineKey: string | number; start: number; end: number } | null>(
		null
	);
	let toolbarPos = $state<{ top: number; left: number } | null>(null);
	let toolbarEl = $state<HTMLElement | null>(null);

	// Static class names (not built from `color` at runtime) so Tailwind's
	// scanner picks them up - see --color-mark-* in layout.css for the actual
	// per-theme values.
	const MARK_BG: Record<MarkColor, string> = {
		yellow: 'bg-mark-yellow',
		green: 'bg-mark-green',
		pink: 'bg-mark-pink',
		blue: 'bg-mark-blue'
	};
	const MARK_NAMES = Object.keys(MARK_BG) as MarkColor[];

	function segmentsFor(line: T): { text: string; color: MarkColor | null }[] {
		const spans = highlights
			.filter((h) => h.lineKey === line.key)
			.sort((a, b) => a.start - b.start);
		if (spans.length === 0) return [{ text: line.text, color: null }];
		const segs: { text: string; color: MarkColor | null }[] = [];
		let pos = 0;
		for (const h of spans) {
			if (h.start > pos) segs.push({ text: line.text.slice(pos, h.start), color: null });
			segs.push({ text: line.text.slice(h.start, h.end), color: h.color });
			pos = h.end;
		}
		if (pos < line.text.length) segs.push({ text: line.text.slice(pos), color: null });
		return segs;
	}

	// Character offset of (node, offset) within container's flattened text -
	// works across inline tags without needing a plain text node reference.
	function textOffset(container: Node, node: Node, offset: number): number {
		const range = document.createRange();
		range.selectNodeContents(container);
		range.setEnd(node, offset);
		return range.toString().length;
	}

	function onMouseUp() {
		const sel = window.getSelection();
		if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
		const range = sel.getRangeAt(0);
		const startEl =
			range.startContainer.nodeType === Node.TEXT_NODE
				? range.startContainer.parentElement
				: (range.startContainer as Element);
		const endEl =
			range.endContainer.nodeType === Node.TEXT_NODE
				? range.endContainer.parentElement
				: (range.endContainer as Element);
		const startP = startEl?.closest('p[data-line-key]');
		const endP = endEl?.closest('p[data-line-key]');
		if (!startP || !endP || startP !== endP) return;

		const lineKey = startP.getAttribute('data-line-key') as string;
		const a = textOffset(startP, range.startContainer, range.startOffset);
		const b = textOffset(startP, range.endContainer, range.endOffset);
		const start = Math.min(a, b);
		const end = Math.max(a, b);
		if (start === end) return;

		const rect = range.getBoundingClientRect();
		pendingSelection = { lineKey, start, end };
		toolbarPos = { top: rect.top - 44, left: rect.left + rect.width / 2 };
	}

	function applyColor(color: MarkColor | null) {
		if (!pendingSelection) return;
		const { lineKey, start, end } = pendingSelection;
		const otherLines = highlights.filter((h) => h.lineKey !== lineKey);
		const kept: Highlight[] = [];
		for (const h of highlights.filter((h) => h.lineKey === lineKey)) {
			if (h.end <= start || h.start >= end) {
				kept.push(h);
				continue;
			}
			if (h.start < start) kept.push({ ...h, end: start });
			if (h.end > end) kept.push({ ...h, start: end });
		}
		highlights = color
			? [...otherLines, ...kept, { lineKey, start, end, color }]
			: [...otherLines, ...kept];
		window.getSelection()?.removeAllRanges();
		pendingSelection = null;
		toolbarPos = null;
	}

	function closeToolbar() {
		pendingSelection = null;
		toolbarPos = null;
	}

	// Closes on any click outside the toolbar itself. A click that starts a
	// new selection inside the passage also lands here first (mousedown fires
	// before the mouseup that would reopen it with the new selection), so it
	// just closes then immediately reopens - no special-casing needed.
	function onWindowMouseDown(e: MouseEvent) {
		if (pendingSelection && !toolbarEl?.contains(e.target as Node)) closeToolbar();
	}
</script>

<svelte:window onscroll={closeToolbar} onmousedown={onWindowMouseDown} />

<div class="flex flex-col" dir="ltr" role="presentation" onmouseup={onMouseUp}>
	{#each lines as line (line.key)}
		<div class="flex items-center gap-2 {line.rowClass ?? ''}">
			{#if leading}{@render leading(line)}{/if}
			<p data-line-key={line.key} class="flex-1 leading-relaxed [-webkit-touch-callout:none]">
				{#each segmentsFor(line) as seg, i (i)}
					{#if seg.color}
						<span class="{MARK_BG[seg.color]} rounded-xs text-mark-ink"><Md text={seg.text} /></span
						>
					{:else}
						<Md text={seg.text} />
					{/if}
				{/each}
			</p>
		</div>
	{/each}
</div>

{#if pendingSelection && toolbarPos}
	<div
		bind:this={toolbarEl}
		class="fixed z-60 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-line bg-surface px-2 py-1.5 shadow-lg"
		style="top:{toolbarPos.top}px; left:{toolbarPos.left}px"
	>
		{#each MARK_NAMES as name (name)}
			<button
				type="button"
				aria-label={name}
				onclick={() => applyColor(name)}
				class="{MARK_BG[
					name
				]} h-5 w-5 shrink-0 rounded-full ring-1 ring-line/50 transition active:scale-90"
			></button>
		{/each}
		<button
			type="button"
			aria-label="ללא צבע"
			title="ללא צבע"
			onclick={() => applyColor(null)}
			class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-[10px] leading-none text-muted transition active:scale-90"
		>
			✕
		</button>
	</div>
{/if}
