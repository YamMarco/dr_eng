<script lang="ts">
	// The whole module's lesson map, editable: drag to move, link/unlink
	// prerequisites, add / duplicate / delete / merge / split nodes. Every
	// section is shown at once, colour-coded. Detachable — src/lib/content-edit/.
	import { onMount } from 'svelte';
	import { editModel } from './editModel.svelte';
	import { reviewNotes } from './reviewNotes.svelte';
	import ReviewFloat from './ReviewFloat.svelte';
	import { sectionMeta } from '$lib/content';

	let { onOpenLesson }: { onOpenLesson: (id: string) => void } = $props();

	onMount(() => {
		reviewNotes.load();
	});

	const CANVAS_WIDTH = 480;
	const CENTER = CANVAS_WIDTH / 2;
	const GRID = 10;
	const FLOAT_WIDTH = 240; // ReviewFloat's w-60
	const NODE_HEIGHT = 56;
	const PAD = 16; // the scroll area's p-4

	// Fit-to-width: on a phone the fixed-width canvas is shrunk so the whole map
	// fits without horizontal scroll (never enlarged past 1:1).
	let viewWidth = $state(0);
	let scale = $derived(viewWidth ? Math.min(1, (viewWidth - PAD * 2) / CANVAS_WIDTH) : 1);

	// Section id -> soft card colours (order matches sectionMeta).
	const SECTION_STYLE: Record<string, { card: string; band: string }> = {
		'c-1': { card: 'border-sky-400 bg-sky-50', band: 'bg-sky-100 text-sky-900' },
		'c-2': { card: 'border-violet-400 bg-violet-50', band: 'bg-violet-100 text-violet-900' },
		'c-3': { card: 'border-amber-400 bg-amber-50', band: 'bg-amber-100 text-amber-900' }
	};
	const styleFor = (sid: string) =>
		SECTION_STYLE[sid] ?? { card: 'border-line bg-surface', band: 'bg-line/60 text-ink' };

	let wrap = $state<HTMLDivElement>();

	// Pointer position in canvas coordinates (undoes the fit-to-width scale).
	function local(e: PointerEvent) {
		const r = wrap!.getBoundingClientRect();
		return { x: (e.clientX - r.left) / scale, y: (e.clientY - r.top) / scale };
	}

	let nodes = $derived(editModel.nodes);
	let byId = $derived(new Map(nodes.map((n) => [n.id, n])));
	let selectedId = $derived(editModel.selectedNodeId);
	let selectedIsRoot = $derived(editModel.selectedNode?.required.length === 0);

	let canvasHeight = $derived(nodes.reduce((m, n) => Math.max(m, n.position.y), 0) + 160);

	// section header bands (title placed above that section's topmost node)
	let bands = $derived(
		sectionMeta
			.map((s) => {
				const ys = nodes.filter((n) => n.section === s.id).map((n) => n.position.y);
				return ys.length ? { id: s.id, title: s.titleHe, top: Math.min(...ys) - 40 } : null;
			})
			.filter((b): b is { id: string; title: string; top: number } => b !== null)
	);

	// multi-select for merge (Ctrl/Cmd-click accumulates)
	let picked = $state<Set<string>>(new Set());

	// A fully-reviewed node's float is replaced by the green ✓ badge; clicking
	// that badge force-opens it for this one id. Any ordinary node click
	// clears the override, so leaving and reselecting the node hides it again.
	let forceOpenId = $state<string | null>(null);

	function openReviewFloat(e: PointerEvent, id: string) {
		e.stopPropagation();
		editModel.select(id);
		forceOpenId = id;
	}

	function pick(id: string, additive: boolean) {
		forceOpenId = null;
		editModel.select(id);
		if (additive) {
			const next = new Set(picked);
			next.has(id) ? next.delete(id) : next.add(id);
			picked = next;
		} else {
			picked = new Set([id]);
		}
	}

	// ---- node dragging (single or, when the pressed node is part of the
	// current multi-selection, the whole group moves together by the same
	// delta) ----
	let dragId = $state<string | null>(null);
	let dragIds: string[] = [];
	let dragStartPositions = new Map<string, { x: number; y: number }>();
	let dragStartPointer: { x: number; y: number } | null = null;
	let moved = false;

	function nodePointerDown(e: PointerEvent, id: string) {
		if ((e.target as HTMLElement).dataset.handle) return; // link handle
		e.preventDefault();
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		dragId = id;
		moved = false;
		dragIds = picked.has(id) && picked.size > 1 ? [...picked] : [id];
		dragStartPositions = new Map(
			dragIds.map((nid) => {
				const n = editModel.node(nid);
				return [nid, { x: n?.position.x ?? 0, y: n?.position.y ?? 0 }];
			})
		);
		dragStartPointer = null;
	}
	function nodePointerMove(e: PointerEvent) {
		if (!dragId || !wrap) return;
		const p = local(e);
		let x = p.x - CENTER;
		let y = p.y;
		if (!e.shiftKey) {
			x = Math.round(x / GRID) * GRID;
			y = Math.round(y / GRID) * GRID;
		}
		if (!dragStartPointer) dragStartPointer = { x, y };
		const dx = x - dragStartPointer.x;
		const dy = y - dragStartPointer.y;
		for (const nid of dragIds) {
			const start = dragStartPositions.get(nid);
			if (!start) continue;
			editModel.setPosition(nid, start.x + dx, Math.max(20, start.y + dy));
		}
		if (dx || dy) moved = true;
	}
	function nodePointerUp(e: PointerEvent, id: string) {
		(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
		if (!moved) pick(id, e.ctrlKey || e.metaKey);
		dragId = null;
		dragIds = [];
		dragStartPointer = null;
	}

	// ---- marquee (box) select: drag on empty canvas to multi-select, then
	// drag any selected node to move the whole group ----
	let marquee = $state<{ x0: number; y0: number; x1: number; y1: number } | null>(null);

	function nodeHitbox(n: { position: { x: number; y: number }; big: boolean }) {
		const w = n.big ? 104 : 92;
		const left = cx(n) - w / 2;
		return { left, right: left + w, top: n.position.y, bottom: n.position.y + NODE_HEIGHT };
	}

	function wrapPointerDown(e: PointerEvent) {
		if (e.target !== wrap || !wrap || linkFrom) return;
		e.preventDefault();
		const { x, y } = local(e);
		marquee = { x0: x, y0: y, x1: x, y1: y };
		wrap.setPointerCapture(e.pointerId);
		if (!(e.ctrlKey || e.metaKey || e.shiftKey)) picked = new Set();
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
			linkXY = local(e);
		}
		if (marquee && wrap) {
			const { x, y } = local(e);
			marquee = { ...marquee, x1: x, y1: y };
		}
	}
	function nodePointerEnterUp(id: string) {
		if (linkFrom && linkFrom !== id) editModel.togglePrereq(linkFrom, id);
		linkFrom = null;
		linkXY = null;
	}
	function wrapPointerUp(e: PointerEvent) {
		linkFrom = null;
		linkXY = null;
		if (marquee) {
			const x0 = Math.min(marquee.x0, marquee.x1);
			const x1 = Math.max(marquee.x0, marquee.x1);
			const y0 = Math.min(marquee.y0, marquee.y1);
			const y1 = Math.max(marquee.y0, marquee.y1);
			const hit = nodes.filter((n) => {
				const box = nodeHitbox(n);
				return box.left < x1 && box.right > x0 && box.top < y1 && box.bottom > y0;
			});
			if (hit.length) {
				const next = new Set(picked);
				for (const n of hit) next.add(n.id);
				picked = next;
				editModel.select(hit[hit.length - 1].id, editModel.selectedPath);
			}
			wrap?.releasePointerCapture?.(e.pointerId);
			marquee = null;
		}
	}

	const cx = (n: { position: { x: number } }) => CENTER + n.position.x;
	const cy = (n: { position: { y: number } }) => n.position.y + 26;

	// ReviewFloat goes beside the node (right, else left) and drops below it
	// when neither side fits inside the canvas, so it never widens the scroll area.
	function floatPos(n: { position: { x: number; y: number }; big: boolean }) {
		const half = (n.big ? 104 : 92) / 2;
		const right = cx(n) + half + 8;
		if (right + FLOAT_WIDTH <= CANVAS_WIDTH) return { left: right, top: n.position.y };
		const left = cx(n) - half - 8 - FLOAT_WIDTH;
		if (left >= 0) return { left, top: n.position.y };
		const centred = Math.min(Math.max(0, cx(n) - FLOAT_WIDTH / 2), CANVAS_WIDTH - FLOAT_WIDTH);
		return { left: centred, top: n.position.y + NODE_HEIGHT + 12 };
	}

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
			? `למחוק את "${selectedId}"? החיבור יוסר גם מ- ${inbound.join(', ')}.`
			: `למחוק את השיעור "${selectedId}"?`;
		if (confirm(msg)) editModel.deleteNode(selectedId);
	}
	function merge() {
		if (picked.size < 2) return;
		if (confirm(`למזג את ${[...picked].join(' + ')} לשיעור אחד (הראשון)?`)) {
			editModel.mergeNodes([...picked]);
			picked = new Set();
		}
	}
	function split() {
		const n = editModel.selectedNode;
		if (!n || n.content.rounds.length < 2) return alert('צריך לפחות 2 סבבים כדי לפצל שיעור.');
		const ans = prompt(`אחרי איזה סבב לפצל? (1 עד ${n.content.rounds.length - 1})`, '1');
		const after = Number(ans) - 1;
		if (Number.isInteger(after)) editModel.splitNode(n.id, after);
	}
	function makeModuleStart() {
		if (!selectedId) return;
		editModel.makeModuleStart(selectedId);
	}
	function rename() {
		if (!selectedId) return;
		const next = prompt(
			'מזהה חדש לשיעור (זהו מפתח ההתקדמות - שינוי מאפס התקדמות מקומית):',
			selectedId
		);
		if (next && !editModel.renameNode(selectedId, next.trim())) alert('המזהה תפוס או לא תקין.');
	}
</script>

<div class="flex h-full min-h-0 flex-col">
	<div class="flex flex-wrap items-center gap-2 border-b border-line/70 bg-canvas p-2 text-xs">
		<button type="button" class="tb tb-add" onclick={addNode}>➕ שיעור חדש</button>
		<button type="button" class="tb" onclick={duplicate} disabled={!selectedId}>⧉ שכפול</button>
		<button type="button" class="tb tb-del" onclick={del} disabled={!selectedId}>🗑 מחיקה</button>
		<span class="mx-1 h-4 w-px bg-line"></span>
		{#if picked.size >= 2}
			<button type="button" class="tb" onclick={merge}>🔗 מיזוג {picked.size} שיעורים</button>
		{/if}
		<button type="button" class="tb" onclick={split} disabled={!selectedId}>✂️ פיצול</button>
		<button type="button" class="tb" onclick={rename} disabled={!selectedId}>🏷 שינוי מזהה</button>
		<button
			type="button"
			class="tb"
			onclick={makeModuleStart}
			disabled={!selectedId || selectedIsRoot}
		>
			{selectedIsRoot ? '✅ זו כבר תחילת המודול' : '🏁 קבע כתחילת המודול'}
		</button>
		<span class="flex-1"></span>
		<button
			type="button"
			class="tb tb-primary"
			onclick={() => selectedId && onOpenLesson(selectedId)}
			disabled={!selectedId}
		>
			✏️ פתיחה לעריכת תוכן
		</button>
	</div>

	<div class="border-b border-line/70 bg-surface/60 px-3 py-1 text-[11px] text-muted">
		גררו עיגול כדי להזיז · גררו על שטח ריק לבחירת כמה שיעורים ואז גררו אחד מהם כדי להזיז את כולם
		ביחד · דאבל־קליק לפתיחה · מ<b>העיגול הקטן שמתחת</b> לשיעור גררו לשיעור אחר כדי לחבר · לחיצה על קו
		מחברת מבטלת אותו · Ctrl+לחיצה לבחירת כמה שיעורים למיזוג
	</div>

	<div class="min-h-0 flex-1 overflow-auto bg-surface/30 p-4" bind:clientWidth={viewWidth}>
		<!-- Sized to the scaled canvas so the scroll area matches what's drawn. -->
		<div class="mx-auto" style="width:{CANVAS_WIDTH * scale}px; height:{canvasHeight * scale}px">
			<div
				bind:this={wrap}
				role="presentation"
				class="relative origin-top-left touch-pan-y select-none"
				style="width:{CANVAS_WIDTH}px; height:{canvasHeight}px; transform:scale({scale})"
				onpointerdown={wrapPointerDown}
				onpointermove={wrapPointerMove}
				onpointerup={wrapPointerUp}
				onpointercancel={wrapPointerUp}
			>
				{#each bands as b (b.id)}
					<div
						class="pointer-events-none absolute inset-x-0 rounded-md px-2 py-0.5 text-center text-xs font-extrabold {styleFor(
							b.id
						).band}"
						style="top:{b.top}px"
					>
						{b.title}
					</div>
				{/each}

				<svg
					class="pointer-events-none absolute inset-0"
					width={CANVAS_WIDTH}
					height={canvasHeight}
				>
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
									class="pointer-events-auto cursor-pointer stroke-muted hover:stroke-rose-500"
									stroke-width="3"
									aria-label="נתק חיבור"
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
								stroke-width="2.5"
								stroke-dasharray="5"
							/>{/if}
					{/if}
				</svg>

				{#each nodes as n (n.id)}
					{@const sel = n.id === selectedId}
					{@const reviewDone = reviewNotes.isFullyDone(n.id, n.content.rounds.length)}
					{@const hasComment = !!reviewNotes.notes[n.id]?.comment?.trim()}
					<div
						role="button"
						tabindex="0"
						title="דאבל־קליק לעריכת התוכן"
						class="absolute -translate-x-1/2 touch-none rounded-2xl border-2 px-2 py-1.5 text-center shadow-sm transition select-none {sel
							? 'border-brand bg-brand-soft ring-4 ring-brand/25'
							: picked.has(n.id)
								? 'border-dashed border-brand bg-canvas'
								: styleFor(n.section).card} {dragId === n.id ? 'opacity-70' : ''}"
						style="left:{cx(n)}px; top:{n.position.y}px; width:{n.big ? 104 : 92}px"
						onpointerdown={(e) => nodePointerDown(e, n.id)}
						onpointermove={nodePointerMove}
						onpointerup={(e) => nodePointerUp(e, n.id)}
						onpointerenter={() => linkFrom && nodePointerEnterUp(n.id)}
						ondblclick={() => onOpenLesson(n.id)}
						onkeydown={(e) => e.key === 'Enter' && onOpenLesson(n.id)}
					>
						<div class="truncate text-[11px] leading-tight font-bold">{n.titleHe}</div>
						<div class="truncate font-mono text-[9px] text-ink/50" dir="ltr" title="מזהה: {n.id}">
							{n.id}
						</div>
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<span
							data-handle="1"
							aria-label="גרור כדי לחבר לשיעור אחר"
							title="גרור מכאן לשיעור אחר כדי לחבר"
							class="absolute inset-s-1/2 -bottom-2 flex h-4 w-4 -translate-x-1/2 cursor-crosshair items-center justify-center rounded-full border-2 border-brand bg-canvas text-[10px] leading-none font-bold text-brand"
							onpointerdown={(e) => handleDown(e, n.id)}
						>
							+
						</span>
					</div>

					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="absolute z-20 flex gap-0.5"
						style="left:{cx(n) + (n.big ? 104 : 92) / 2 - 14}px; top:{n.position.y - 6}px"
						onpointerdown={(e) => e.stopPropagation()}
					>
						{#if hasComment}
							<span
								class="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-400 text-[8px] leading-none text-white shadow"
								title="יש הערה"
							>
								💬
							</span>
						{/if}
						{#if reviewDone}
							<button
								type="button"
								class="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[9px] leading-none font-bold text-white shadow"
								title="נבדק במלואו - לחצו לפתיחה"
								onpointerdown={(e) => openReviewFloat(e, n.id)}
							>
								✓
							</button>
						{/if}
					</div>

					{#if sel && (!reviewDone || forceOpenId === n.id)}
						{@const pos = floatPos(n)}
						<div class="absolute z-50" style="left:{pos.left}px; top:{pos.top}px">
							<ReviewFloat nodeId={n.id} roundCount={n.content.rounds.length} />
						</div>
					{/if}
				{/each}

				{#if marquee}
					<div
						class="pointer-events-none absolute rounded border-2 border-dashed border-brand bg-brand/10"
						style="left:{Math.min(marquee.x0, marquee.x1)}px; top:{Math.min(
							marquee.y0,
							marquee.y1
						)}px; width:{Math.abs(marquee.x1 - marquee.x0)}px; height:{Math.abs(
							marquee.y1 - marquee.y0
						)}px"
					></div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.tb {
		border: 1px solid var(--color-line, #e5e7eb);
		border-radius: 0.5rem;
		padding: 0.3rem 0.6rem;
		font-weight: 700;
		background: var(--color-canvas, #fff);
	}
	.tb:hover:not(:disabled) {
		background: rgb(0 0 0 / 0.05);
	}
	.tb:disabled {
		opacity: 0.35;
		cursor: not-allowed;
	}
	.tb-add {
		border-color: #059669;
		color: #047857;
	}
	.tb-add:hover:not(:disabled) {
		background: #ecfdf5;
	}
	.tb-del {
		border-color: #e11d48;
		color: #be123c;
	}
	.tb-del:hover:not(:disabled) {
		background: #fff1f2;
	}
	.tb-primary {
		background: var(--color-brand, #6366f1);
		border-color: var(--color-brand, #6366f1);
		color: #fff;
	}
	.tb-primary:hover:not(:disabled) {
		filter: brightness(0.94);
	}
</style>
