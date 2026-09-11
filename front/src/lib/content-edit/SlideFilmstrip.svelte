<script lang="ts">
	// PowerPoint-style vertical filmstrip: every screen of the selected lesson,
	// in order, as a small clickable card. Click selects it for the big editor
	// (SlideStage). Drag to reorder, within or across round buckets.
	// Detachable — part of src/lib/content-edit/.
	import { tick, onMount } from 'svelte';
	import { editModel } from './editModel.svelte';
	import { countQuestions } from '$lib/lesson-screens/types';
	import EditableScreen from './EditableScreen.svelte';
	import type { LessonScreen } from '$lib/lesson-screens/types';
	import type { ScreenPath } from './screenPath';
	import type { Issue } from './validate';

	let {
		nodeId,
		issues = [],
		onSelect,
		/** Current column width (px) — the divider in LessonEditorView is
		    draggable, and the thumbnails scale to fill whatever width that
		    leaves instead of staying a fixed size. */
		width = 288
	}: {
		nodeId: string;
		issues?: Issue[];
		onSelect: (p: ScreenPath) => void;
		width?: number;
	} = $props();

	// Thumbnail frame stays the same 224:400 (portrait) ratio at any width.
	let thumbW = $derived(Math.max(110, Math.min(340, width - 64)));
	let thumbH = $derived(Math.round(thumbW * (400 / 224)));
	let thumbScale = $derived(thumbW / 448);

	let node = $derived(editModel.node(nodeId));
	let sel = $derived(editModel.selectedPath);

	type Item =
		| { kind: 'divider'; bucket: ScreenPath['bucket']; title: string; note: string }
		| { kind: 'screen'; bucket: ScreenPath['bucket']; index: number; screen: LessonScreen }
		/** Insert a blank screen at `at` in this bucket (0 = make it the first). */
		| { kind: 'add-screen'; bucket: ScreenPath['bucket']; at: number }
		| { kind: 'add-round' };

	let items = $derived.by<Item[]>(() => {
		if (!node) return [];
		const out: Item[] = [];
		const buckets: { key: ScreenPath['bucket']; screens: LessonScreen[] }[] = [
			{ key: 'preface', screens: node.content.preface },
			...node.content.rounds.map((r, i) => ({ key: i as ScreenPath['bucket'], screens: r.screens }))
		];
		for (const b of buckets) {
			out.push({
				kind: 'divider',
				bucket: b.key,
				title: b.key === 'preface' ? 'פתיח' : `סבב ${b.key + 1}`,
				note: b.key === 'preface' ? 'לפני סבב 1' : b.key === 0 ? 'חובה' : 'רשות'
			});
			b.screens.forEach((screen, index) => {
				out.push({ kind: 'screen', bucket: b.key, index, screen });
			});
			out.push({ kind: 'add-screen', bucket: b.key, at: b.screens.length });
		}
		out.push({ kind: 'add-round' });
		return out;
	});

	function issueFor(b: ScreenPath['bucket'], i: number): Issue | undefined {
		return issues.find((x) => x.path && x.path.bucket === b && x.path.index === i);
	}
	const isSel = (b: ScreenPath['bucket'], i: number) => sel?.bucket === b && sel?.index === i;

	let list = $state<HTMLDivElement>();
	async function selectAndScroll(b: ScreenPath['bucket'], i: number) {
		editModel.select(nodeId, { bucket: b, index: i });
		onSelect({ bucket: b, index: i });
		await tick();
		list?.querySelector<HTMLElement>(`[data-slide="${String(b)}:${i}"]`)?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		});
	}

	onMount(() => {
		if (sel) selectAndScroll(sel.bucket, sel.index);
	});

	// step to the prev/next screen slide relative to the selection
	export function step(dir: -1 | 1) {
		const screens = items.filter((it) => it.kind === 'screen') as Extract<
			Item,
			{ kind: 'screen' }
		>[];
		const cur = screens.findIndex((s) => isSel(s.bucket, s.index));
		const next = screens[Math.max(0, Math.min(screens.length - 1, (cur < 0 ? 0 : cur) + dir))];
		if (next) selectAndScroll(next.bucket, next.index);
	}

	// ---- drag to move ----
	let drag = $state<ScreenPath | null>(null);
	let over = $state<string | null>(null);
	function drop(bucket: ScreenPath['bucket'], index: number) {
		if (drag) editModel.moveScreen(nodeId, drag, { bucket, index });
		drag = null;
		over = null;
	}

	// A blank card lands with no content and its type picked in the stage —
	// no "choose a type first" step.
	function addScreen(bucket: ScreenPath['bucket'], at: number) {
		editModel.addScreen(nodeId, bucket, at, 'preface');
		if (editModel.selectedPath) {
			onSelect(editModel.selectedPath);
			selectAndScroll(editModel.selectedPath.bucket, editModel.selectedPath.index);
		}
	}

	// ---- round actions menu — fixed-positioned so the list's overflow-y-auto
	// (which clips absolutely-positioned descendants) can't swallow it. ----
	let roundMenu = $state<number | null>(null);
	let menuPos = $state({ top: 0, left: 0 });
	function toggleRoundMenu(e: MouseEvent, ri: number) {
		if (roundMenu === ri) {
			roundMenu = null;
			return;
		}
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		menuPos = { top: rect.bottom + 4, left: Math.min(rect.left, window.innerWidth - 176) };
		roundMenu = ri;
	}
	function closeMenu() {
		roundMenu = null;
	}
</script>

<div class="flex h-full flex-col border-e border-line/70 bg-surface/40">
	<div class="shrink-0 border-b border-line/70 px-3 py-1.5 text-[11px] font-bold text-muted">
		מסכי השיעור, לפי סדר
	</div>
	<div bind:this={list} onscroll={closeMenu} class="min-h-0 flex-1 space-y-4 overflow-y-auto p-3">
		{#each items as it, ii (ii)}
			{#if it.kind === 'divider'}
				<div class="flex items-center gap-1 pt-1.5 pb-0.5 first:pt-0">
					<span
						class="rounded px-1.5 py-0.5 text-[10px] font-extrabold {it.bucket === 'preface'
							? 'bg-line/60 text-ink'
							: it.bucket === 0
								? 'bg-emerald-100 text-emerald-800'
								: 'bg-brand-soft text-brand-dark'}"
					>
						{it.title}
					</span>
					<span class="text-[9px] text-muted">{it.note}</span>
					<span class="flex-1"></span>
					{#if it.bucket !== 'preface'}
						{@const ri = it.bucket as number}
						<button
							type="button"
							class="rounded px-1 text-[10px] font-bold text-muted hover:bg-line/60"
							title="פעולות על הסבב"
							onclick={(e) => toggleRoundMenu(e, ri)}
						>
							⋯
						</button>
					{/if}
				</div>
			{:else if it.kind === 'screen'}
				{@const iss = issueFor(it.bucket, it.index)}
				<div
					data-slide={`${String(it.bucket)}:${it.index}`}
					role="button"
					tabindex="0"
					draggable="true"
					class="cursor-pointer rounded-xl border-2 p-2.5 transition {isSel(it.bucket, it.index)
						? 'border-brand bg-brand-soft/60 shadow-md'
						: 'border-line/70 bg-canvas shadow-sm hover:border-brand/40 hover:shadow-md'} {over ===
					`${String(it.bucket)}:${it.index}`
						? 'ring-2 ring-brand/40'
						: ''}"
					onclick={() => selectAndScroll(it.bucket, it.index)}
					onkeydown={(e) => e.key === 'Enter' && selectAndScroll(it.bucket, it.index)}
					ondragstart={() => (drag = { bucket: it.bucket, index: it.index })}
					ondragend={() => {
						drag = null;
						over = null;
					}}
					ondragover={(e) => {
						e.preventDefault();
						over = `${String(it.bucket)}:${it.index}`;
					}}
					ondrop={(e) => {
						e.preventDefault();
						drop(it.bucket, it.index);
					}}
				>
					<div class="mb-1 flex items-center gap-1">
						<span
							class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-line/60 text-[9px] font-bold"
							>{it.index + 1}</span
						>
						{#if countQuestions(it.screen) > 0}<span class="text-[10px]" title="שאלה מדורגת">✔</span
							>{/if}
						{#if iss}
							<span class="text-[10px]" title={iss.message}
								>{iss.severity === 'error' ? '⛔' : '⚠️'}</span
							>
						{/if}
					</div>
					<!-- true miniature of the actual screen (like a slide-deck thumbnail),
					     not just a label — same EditableScreen the stage renders, scaled
					     down and inert (pointer-events-none) so the click selects the
					     card instead of editing inline. Phone-shaped: portrait, same
					     box every time (content that doesn't fit is clipped, not
					     squeezed). -->
					<div
						class="relative mx-auto overflow-hidden rounded-xl border border-line/60 bg-canvas"
						style="width: {thumbW}px; height: {thumbH}px"
					>
						<div
							class="pointer-events-none absolute top-0 left-1/2 origin-top"
							style="width: 448px; transform: translateX(-50%) scale({thumbScale});"
						>
							<EditableScreen {nodeId} path={{ bucket: it.bucket, index: it.index }} />
						</div>
					</div>
				</div>
			{:else if it.kind === 'add-screen'}
				<button
					type="button"
					class="flex w-full items-center justify-center gap-1 rounded-lg border-2 border-dashed border-emerald-400 py-1 text-[10px] font-bold text-emerald-700 hover:bg-emerald-50"
					onclick={() => addScreen(it.bucket, it.at)}
				>
					➕ הוספת מסך
				</button>
			{:else}
				<button
					type="button"
					class="mt-1.5 flex w-full items-center justify-center gap-1 rounded-lg border-2 border-dashed border-brand/60 py-1.5 text-[10px] font-bold text-brand hover:bg-brand-soft/50"
					title="הוספת סבב תרגול חדש בסוף"
					onclick={() => editModel.addRound(nodeId)}
				>
					➕ הוספת סבב
				</button>
			{/if}
		{/each}
	</div>
</div>

{#if roundMenu !== null}
	{@const ri = roundMenu}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-40" onclick={closeMenu}></div>
	<div
		class="fixed z-50 w-44 overflow-y-auto rounded-xl border border-line bg-canvas p-1 text-start text-xs shadow-xl"
		style="top:{menuPos.top}px; left:{menuPos.left}px"
	>
		<button
			type="button"
			class="block w-full rounded px-2 py-1.5 hover:bg-line/50 disabled:opacity-40"
			disabled={ri === 0}
			onclick={() => {
				editModel.moveRound(nodeId, ri, ri - 1);
				closeMenu();
			}}
		>
			▲ הזזה למעלה (מוקדם יותר)
		</button>
		<button
			type="button"
			class="block w-full rounded px-2 py-1.5 hover:bg-line/50 disabled:opacity-40"
			disabled={!node || ri === node.content.rounds.length - 1}
			onclick={() => {
				editModel.moveRound(nodeId, ri, ri + 1);
				closeMenu();
			}}
		>
			▼ הזזה למטה (מאוחר יותר)
		</button>
		<button
			type="button"
			class="block w-full rounded px-2 py-1.5 hover:bg-line/50"
			onclick={() => {
				editModel.duplicateRound(nodeId, ri);
				closeMenu();
			}}
		>
			⧉ שכפול הסבב
		</button>
		<button
			type="button"
			class="block w-full rounded px-2 py-1.5 font-bold text-rose-600 hover:bg-rose-50 disabled:opacity-40"
			disabled={!node || node.content.rounds.length <= 1}
			onclick={() => {
				if (confirm(`למחוק את סבב ${ri + 1} על כל המסכים שבו?`)) editModel.deleteRound(nodeId, ri);
				closeMenu();
			}}
		>
			🗑 מחיקת הסבב
		</button>
	</div>
{/if}
