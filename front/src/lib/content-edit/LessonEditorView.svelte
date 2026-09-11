<script lang="ts">
	// Lesson-editing view, PowerPoint-style: a big central "slide" for the
	// selected screen (SlideStage) with a smaller vertical filmstrip of every
	// screen in order on the side (SlideFilmstrip). Shown instead of the
	// graph, not beside it. Detachable — part of src/lib/content-edit/.
	import { editModel } from './editModel.svelte';
	import SlideFilmstrip from './SlideFilmstrip.svelte';
	import SlideStage from './SlideStage.svelte';
	import type { Issue } from './validate';

	let {
		onBack,
		onPlay,
		issues = []
	}: {
		onBack: () => void;
		onPlay: (nodeId: string, round: number, screenIndex: number) => void;
		issues?: Issue[];
	} = $props();

	let node = $derived(editModel.selectedNode);
	let path = $derived(editModel.selectedPath);
	let metaOpen = $state(false);

	function playFromHere() {
		if (!node || !path) return;
		const round = path.bucket === 'preface' ? 0 : path.bucket;
		const idx = path.bucket === 0 ? node.content.preface.length + path.index : path.index;
		onPlay(node.id, round, idx);
	}

	// Draggable divider between the filmstrip and the stage — resizing it
	// actually resizes both panes' content (the filmstrip's thumbnails scale
	// with its new width; the stage's slide frame is width-bound so it grows
	// or shrinks with whatever room is left), not just the split line.
	let filmstripWidth = $state(288);
	let splitWrap = $state<HTMLDivElement>();
	let dragging = $state(false);

	function startDrag(e: PointerEvent) {
		e.preventDefault();
		dragging = true;
		const startX = e.clientX;
		const startWidth = filmstripWidth;
		const containerW = splitWrap?.getBoundingClientRect().width ?? 900;

		function onMove(ev: PointerEvent) {
			// Filmstrip sits at the inline-start (right, RTL) edge, flush to the
			// container; its resizable boundary is the LEFT edge, so moving the
			// pointer left widens it and moving right narrows it.
			const next = startWidth - (ev.clientX - startX);
			filmstripWidth = Math.max(180, Math.min(next, containerW - 320));
		}
		function onUp() {
			dragging = false;
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerup', onUp);
		}
		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerup', onUp);
	}
</script>

{#if node}
	<div class="flex h-full min-h-0 flex-col">
		<div class="flex flex-wrap items-center gap-2 border-b border-line/70 px-3 py-2 text-sm">
			<button
				type="button"
				class="rounded-lg border border-line bg-canvas px-2.5 py-1.5 text-xs font-bold hover:bg-line/60"
				onclick={onBack}
			>
				← חזרה למפה
			</button>
			<strong class="text-sm">{node.titleHe}</strong>
			{#if node.code}<span class="rounded bg-line/60 px-1.5 text-xs" dir="ltr">{node.code}</span
				>{/if}
			<button
				type="button"
				class="rounded-lg border border-line px-2 py-1 text-xs font-bold hover:bg-line/60"
				onclick={() => (metaOpen = !metaOpen)}
			>
				⚙️ {metaOpen ? 'סגירת פרטים' : 'שם וקוד'}
			</button>
			<span class="flex-1"></span>
			<button
				type="button"
				class="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-40"
				disabled={!path}
				title={path ? 'שחק את הסבב הזה מהמסך הנבחר' : 'בחרו קודם מסך'}
				onclick={playFromHere}
			>
				▶ נסיון מכאן
			</button>
		</div>

		{#if metaOpen}
			<div class="grid grid-cols-2 gap-2 border-b border-line/70 bg-surface/60 p-3 text-sm">
				<label class="flex flex-col gap-0.5">
					<span class="text-xs text-muted">כותרת (עברית)</span>
					<input
						class="fld"
						value={node.titleHe}
						oninput={(e) => editModel.setMeta(node.id, { titleHe: e.currentTarget.value })}
					/>
				</label>
				<label class="flex flex-col gap-0.5">
					<span class="text-xs text-muted">Title (English)</span>
					<input
						class="fld"
						dir="ltr"
						value={node.titleEn ?? ''}
						oninput={(e) => editModel.setMeta(node.id, { titleEn: e.currentTarget.value })}
					/>
				</label>
				<label class="flex flex-col gap-0.5">
					<span class="text-xs text-muted">קוד</span>
					<input
						class="fld"
						dir="ltr"
						value={node.code}
						oninput={(e) => editModel.setMeta(node.id, { code: e.currentTarget.value })}
					/>
				</label>
				<label class="flex items-center gap-2 pt-4">
					<input
						type="checkbox"
						checked={node.big}
						onchange={(e) => editModel.setMeta(node.id, { big: e.currentTarget.checked })}
					/>
					<span class="text-xs text-muted">צומת גדול (big)</span>
				</label>
			</div>
		{/if}

		<!-- PowerPoint layout: filmstrip on the side, the big stage fills the rest,
		     with a draggable divider between them. -->
		<div class="flex min-h-0 flex-1" bind:this={splitWrap}>
			<div class="shrink-0 overflow-hidden" style="width: {filmstripWidth}px">
				<SlideFilmstrip nodeId={node.id} {issues} onSelect={() => {}} width={filmstripWidth} />
			</div>
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				role="separator"
				aria-orientation="vertical"
				aria-label="גרירה לשינוי הרוחב בין רשימת המסכים לעריכה"
				title="גררו לשינוי הרוחב"
				class="w-1.5 shrink-0 cursor-col-resize bg-line/50 transition hover:bg-brand/60 {dragging
					? 'bg-brand'
					: ''}"
				onpointerdown={startDrag}
			></div>
			<div class="min-h-0 flex-1">
				<SlideStage nodeId={node.id} {path} />
			</div>
		</div>
	</div>
{:else}
	<p class="p-6 text-center text-sm text-muted">בחרו צומת מהגרף.</p>
{/if}

<style>
	.fld {
		border: 2px solid var(--color-line, #e5e7eb);
		border-radius: 0.5rem;
		background: var(--color-canvas, #fff);
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
	}
</style>
