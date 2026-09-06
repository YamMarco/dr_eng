<script lang="ts">
	// Editable version of the lessons-path canvas: drag nodes, draw/cut
	// prerequisite links, add / duplicate / delete / merge / split.
	// Writes the shared editModel. Detachable — src/lib/content-edit/.
	import { editModel } from './editModel.svelte';

	const CANVAS_WIDTH = 480;
	const CENTER = CANVAS_WIDTH / 2;
	const GRID = 10;

	let wrap = $state<HTMLDivElement>();

	let nodes = $derived(editModel.nodes);
	let byId = $derived(new Map(nodes.map((n) => [n.id, n])));
	let selectedId = $derived(editModel.selectedNodeId);

	let canvasHeight = $derived(nodes.reduce((m, n) => Math.max(m, n.position.y), 0) + 160);

	// multi-select for merge (Ctrl/Cmd-click accumulates)
	let picked = $state<Set<string>>(new Set());

	function pick(id: string, additive: boolean) {
		editModel.select(id);
		if (additive) {
			const next = new Set(picked);
			next.has(id) ? next.delete(id) : next.add(id);
			picked = next;
		} else {
			picked = new Set([id]);
		}
	}

	// ---- node dragging ----
	let dragId = $state<string | null>(null);
	let moved = false;

	function nodePointerDown(e: PointerEvent, id: string) {
		if ((e.target as HTMLElement).dataset.handle) return; // link handle
		e.preventDefault();
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		dragId = id;
		moved = false;
	}
	function nodePointerMove(e: PointerEvent) {
		if (!dragId || !wrap) return;
		const r = wrap.getBoundingClientRect();
		let x = e.clientX - r.left - CENTER;
		let y = e.clientY - r.top;
		if (!e.shiftKey) {
			x = Math.round(x / GRID) * GRID;
			y = Math.round(y / GRID) * GRID;
		}
		editModel.setPosition(dragId, x, Math.max(20, y));
		moved = true;
	}
	function nodePointerUp(e: PointerEvent, id: string) {
		(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
		if (!moved) pick(id, e.ctrlKey || e.metaKey);
		dragId = null;
	}

	// ---- linking ----
	let linkFrom = $state<string | null>(null);
	let linkXY = $state<{ x: number; y: number } | null>(null);

	function handleDown(e: PointerEvent, id: string) {
		e.preventDefault();
		e.stopPropagation();
		linkFrom = id;
	}
	function wrapPointerMove(e: PointerEvent) {
		nodePointerMove(e);
		if (linkFrom && wrap) {
			const r = wrap.getBoundingClientRect();
			linkXY = { x: e.clientX - r.left, y: e.clientY - r.top };
		}
	}
	function nodePointerEnterUp(id: string) {
		if (linkFrom && linkFrom !== id) editModel.togglePrereq(linkFrom, id);
		linkFrom = null;
		linkXY = null;
	}
	function wrapPointerUp() {
		linkFrom = null;
		linkXY = null;
	}

	const cx = (n: { position: { x: number } }) => CENTER + n.position.x;
	const cy = (n: { position: { y: number } }) => n.position.y + 26;

	// ---- toolbar actions ----
	function addNode() {
		const n = editModel.addNode(editModel.selectedNode);
		editModel.select(n.id);
		picked = new Set([n.id]);
	}
	function duplicate() {
		if (!selectedId) return;
		const n = editModel.duplicateNode(selectedId);
		if (n) {
			editModel.select(n.id);
			picked = new Set([n.id]);
		}
	}
	function del() {
		if (!selectedId) return;
		const inbound = nodes.filter((n) => n.required.includes(selectedId!)).map((n) => n.id);
		const msg = inbound.length
			? `למחוק ${selectedId}? הקישור יוסר מ- ${inbound.join(', ')}.`
			: `למחוק ${selectedId}?`;
		if (confirm(msg)) editModel.deleteNode(selectedId);
	}
	function merge() {
		if (picked.size < 2) return;
		if (confirm(`למזג ${[...picked].join(' + ')} לתוך הראשון?`)) {
			editModel.mergeNodes([...picked]);
			picked = new Set();
		}
	}
	function split() {
		const n = editModel.selectedNode;
		if (!n || n.content.rounds.length < 2) return alert('צריך לפחות 2 סבבים לפיצול.');
		const ans = prompt(`לפצל אחרי איזה סבב? (1..${n.content.rounds.length - 1})`, '1');
		const after = Number(ans) - 1;
		if (Number.isInteger(after)) editModel.splitNode(n.id, after);
	}
	function rename() {
		if (!selectedId) return;
		const next = prompt('מזהה חדש (מפתח ההתקדמות - שינוי מאפס התקדמות מקומית):', selectedId);
		if (next && !editModel.renameNode(selectedId, next.trim())) alert('מזהה תפוס או לא תקין.');
	}
</script>

<div class="flex h-full min-h-0 flex-col">
	<div class="flex flex-wrap items-center gap-1.5 border-b border-line/70 p-2 text-xs">
		<button type="button" class="tb" onclick={addNode}>+ צומת</button>
		<button type="button" class="tb" onclick={duplicate} disabled={!selectedId}>שכפל</button>
		<button type="button" class="tb text-danger" onclick={del} disabled={!selectedId}>מחק</button>
		<button type="button" class="tb" onclick={merge} disabled={picked.size < 2}
			>מזג ({picked.size})</button
		>
		<button type="button" class="tb" onclick={split} disabled={!selectedId}>פצל</button>
		<button type="button" class="tb" onclick={rename} disabled={!selectedId}>שנה מזהה</button>
		<span class="ms-2 text-muted"
			>גרירה = מיקום · העיגול הקטן = קישור · לחיצה על קו = ניתוק · Ctrl+לחיצה = בחירה מרובה</span
		>
	</div>

	<div class="min-h-0 flex-1 overflow-auto bg-surface/40 p-4">
		<div
			bind:this={wrap}
			role="presentation"
			class="relative mx-auto"
			style="width:{CANVAS_WIDTH}px; height:{canvasHeight}px"
			onpointermove={wrapPointerMove}
			onpointerup={wrapPointerUp}
		>
			<svg class="pointer-events-none absolute inset-0" width={CANVAS_WIDTH} height={canvasHeight}>
				{#each nodes as n (n.id)}
					{#each n.required as reqId (reqId)}
						{@const from = byId.get(reqId)}
						{#if from}
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<line
								x1={cx(from)}
								y1={cy(from)}
								x2={cx(n)}
								y2={cy(n)}
								class="pointer-events-auto cursor-pointer stroke-line hover:stroke-danger"
								stroke-width="3"
								aria-label="נתק דרישה קדם"
								onpointerdown={() => editModel.togglePrereq(reqId, n.id)}
							/>
						{/if}
					{/each}
				{/each}
				{#if linkFrom && linkXY}
					{@const f = byId.get(linkFrom)}
					{#if f}<line
							x1={cx(f)}
							y1={cy(f)}
							x2={linkXY.x}
							y2={linkXY.y}
							class="stroke-brand"
							stroke-width="2"
							stroke-dasharray="4"
						/>{/if}
				{/if}
			</svg>

			{#each nodes as n (n.id)}
				<div
					role="button"
					tabindex="0"
					class="absolute -translate-x-1/2 rounded-2xl border-2 px-2 py-1 text-center shadow-sm select-none {n.id ===
					selectedId
						? 'border-brand bg-brand-soft'
						: picked.has(n.id)
							? 'border-brand/60 bg-surface'
							: 'border-line bg-surface'}"
					style="left:{cx(n)}px; top:{n.position.y}px; width:{n.big ? 96 : 84}px"
					onpointerdown={(e) => nodePointerDown(e, n.id)}
					onpointermove={nodePointerMove}
					onpointerup={(e) => nodePointerUp(e, n.id)}
					onpointerenter={() => linkFrom && nodePointerEnterUp(n.id)}
					onkeydown={(e) => e.key === 'Enter' && editModel.select(n.id)}
				>
					<div class="truncate text-[11px] leading-tight font-bold">{n.titleHe}</div>
					<div class="truncate font-mono text-[9px] text-muted" dir="ltr">{n.code || n.id}</div>
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<span
						data-handle="1"
						aria-label="קשר לצומת אחר"
						title="גרור לצומת אחר כדי לקשר"
						class="absolute inset-s-1/2 -bottom-1.5 h-3 w-3 -translate-x-1/2 cursor-crosshair rounded-full border-2 border-brand bg-canvas"
						onpointerdown={(e) => handleDown(e, n.id)}
					></span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.tb {
		border: 1px solid var(--color-line, #e5e7eb);
		border-radius: 0.5rem;
		padding: 0.2rem 0.55rem;
		font-weight: 600;
	}
	.tb:hover:not(:disabled) {
		background: rgb(0 0 0 / 0.05);
	}
	.tb:disabled {
		opacity: 0.4;
	}
</style>
