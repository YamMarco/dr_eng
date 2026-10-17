<script lang="ts" generics="T extends { key: string | number; text: string; rowClass?: string }">
	import { i18n } from '$lib/i18n/index.svelte';
	import Md from '$lib/components/Md.svelte';
	import { untrack, type Snippet } from 'svelte';
	import type { Highlight, MarkColor } from './passageMarks';

	// Reusable "select text, pick a highlight color" tool for reading
	// passages - shared by the standalone Passage screen (with its
	// line-number/roman-numeral gutter via `leading`) and exam passage-mcq
	// screens (no gutter). Segments are computed from plain-text offsets, so
	// highlighting only lines up correctly on lines with no inline markdown
	// (the norm for reading passages).
	// `marks` seeds the highlights and `onMarks` reports each change, so a parent
	// can carry them over to another instance of the same passage.
	let {
		lines,
		leading,
		marks,
		onMarks
	}: {
		lines: T[];
		leading?: Snippet<[T]>;
		marks?: Highlight[];
		onMarks?: (highlights: Highlight[]) => void;
	} = $props();

	let highlights = $state<Highlight[]>(untrack(() => marks ?? []));
	let pendingSelection = $state<{ lineKey: string; start: number; end: number } | null>(null);
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
			.filter((h) => h.lineKey === String(line.key))
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

	// `selectionchange` (debounced until the selection settles) instead of
	// `mouseup`: phones never fire mouseup after a long-press text selection,
	// so the color toolbar used to appear on desktop only.
	let settle: ReturnType<typeof setTimeout> | undefined;
	function onSelectionChange() {
		clearTimeout(settle);
		settle = setTimeout(readSelection, 250);
	}

	function readSelection() {
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
		toolbarPos = toolbarAt(rect);
	}

	function toolbarAt(rect: DOMRect) {
		return { top: Math.max(8, rect.top - 44), left: rect.left + rect.width / 2 };
	}

	// Trackpad scrolling fires tiny/inertial scroll events: follow the selection
	// instead of closing the toolbar on the first one.
	function onScroll() {
		const sel = window.getSelection();
		if (!pendingSelection || !sel || sel.rangeCount === 0 || sel.isCollapsed) return;
		toolbarPos = toolbarAt(sel.getRangeAt(0).getBoundingClientRect());
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
		onMarks?.(highlights);
		window.getSelection()?.removeAllRanges();
		pendingSelection = null;
		toolbarPos = null;
	}

	function closeToolbar() {
		pendingSelection = null;
		toolbarPos = null;
	}

	// Closes on any click outside the toolbar itself. A click that starts a
	// new selection inside the passage also lands here first (pointerdown fires
	// before the selection that would reopen it), so it
	// just closes then immediately reopens - no special-casing needed.
	function onWindowPointerDown(e: PointerEvent) {
		if (pendingSelection && !toolbarEl?.contains(e.target as Node)) closeToolbar();
	}
</script>

<svelte:window onscroll={onScroll} onpointerdown={onWindowPointerDown} />
<svelte:document onselectionchange={onSelectionChange} />

<div class="flex flex-col" dir="ltr">
	{#each lines as line (line.key)}
		<div class="flex items-start gap-2 {line.rowClass ?? ''}">
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
			aria-label={i18n.dict.exerciseKind.noColor}
			title={i18n.dict.exerciseKind.noColor}
			onclick={() => applyColor(null)}
			class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-[10px] leading-none text-muted transition active:scale-90"
		>
			✕
		</button>
	</div>
{/if}
