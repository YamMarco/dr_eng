<script lang="ts">
	// PowerPoint-style vertical filmstrip: every screen of the selected lesson,
	// in order, as a small clickable card. Click selects it for the big editor
	// (SlideStage). Drag to reorder, within or across round buckets.
	// Detachable — part of src/lib/content-edit/.
	import { tick, onMount } from 'svelte';
	import { countQuestions } from '$lib/lesson-screens/types';
	import EditableScreen from './EditableScreen.svelte';
	import type { LessonScreen } from '$lib/lesson-screens/types';
	import type { ScreenPath } from './screenPath';
	import type { EditModelLike } from './editModelTypes';
	import type { Issue } from './validate';

	let {
		model,
		nodeId,
		issues = [],
		onSelect,
		/** Current column width (px) — the divider in LessonEditorView is
		    draggable, and the thumbnails scale to fill whatever width that
		    leaves instead of staying a fixed size. */
		width = 288
	}: {
		model: EditModelLike;
		nodeId: string;
		issues?: Issue[];
		onSelect: (p: ScreenPath) => void;
		width?: number;
	} = $props();

	// Thumbnail frame keeps the same 224:400 (portrait) ratio at any width —
	// only sized down from the column, so more cards fit in view at once.
	const THUMB_RATIO = 400 / 224;
	let thumbW = $derived(Math.max(84, Math.min(210, (width - 56) * 0.62)));
	let thumbH = $derived(Math.round(thumbW * THUMB_RATIO));
	let thumbScale = $derived(thumbW / 448);

	let buckets = $derived(model.bucketsOf(nodeId));
	let sel = $derived(model.selectedPath);

	type Item =
		| {
				kind: 'divider';
				bucket: ScreenPath['bucket'];
				/** Position among non-preface buckets - what addBucket/moveBucket/etc
				    address (a round index for lessons, a part index for exams). */
				bucketIndex: number;
				title: string;
				note?: string;
		  }
		| { kind: 'screen'; bucket: ScreenPath['bucket']; index: number; screen: LessonScreen }
		/** Insert a blank screen at `at` in this bucket (0 = make it the first).
		    `big` = the prominent labeled button; the rest are slim "+" rows so
		    you can add a screen between any two, not just at the end. */
		| { kind: 'add-screen'; bucket: ScreenPath['bucket']; at: number; big?: boolean }
		| { kind: 'add-bucket' };

	let bucketCount = $derived(buckets.filter((b) => b.key !== 'preface').length);

	let items = $derived.by<Item[]>(() => {
		const out: Item[] = [];
		let bucketIndex = -1;
		for (const b of buckets) {
			if (b.key !== 'preface') bucketIndex += 1;
			out.push({ kind: 'divider', bucket: b.key, bucketIndex, title: b.label, note: b.note });
			out.push({ kind: 'add-screen', bucket: b.key, at: 0, big: b.screens.length === 0 });
			b.screens.forEach((screen, index) => {
				out.push({ kind: 'screen', bucket: b.key, index, screen });
				out.push({
					kind: 'add-screen',
					bucket: b.key,
					at: index + 1,
					big: index === b.screens.length - 1
				});
			});
		}
		out.push({ kind: 'add-bucket' });
		return out;
	});

	function issueFor(b: ScreenPath['bucket'], i: number): Issue | undefined {
		return issues.find((x) => x.path && x.path.bucket === b && x.path.index === i);
	}
	const isSel = (b: ScreenPath['bucket'], i: number) => sel?.bucket === b && sel?.index === i;

	let list = $state<HTMLDivElement>();
	async function selectAndScroll(b: ScreenPath['bucket'], i: number) {
		model.select(nodeId, { bucket: b, index: i });
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
		if (drag) model.moveScreen(nodeId, drag, { bucket, index });
		drag = null;
		over = null;
	}

	// A blank card lands with no content and its type picked in the stage —
	// no "choose a type first" step.
	function addScreen(bucket: ScreenPath['bucket'], at: number) {
		model.addScreen(nodeId, bucket, at, 'preface');
		if (model.selectedPath) {
			onSelect(model.selectedPath);
			selectAndScroll(model.selectedPath.bucket, model.selectedPath.index);
		}
	}

	// ---- bucket ("round"/"part") actions menu — fixed-positioned so the
	// list's overflow-y-auto (which clips absolutely-positioned descendants)
	// can't swallow it. ----
	let bucketMenu = $state<number | null>(null);
	let menuPos = $state({ top: 0, left: 0 });
	function toggleBucketMenu(e: MouseEvent, bi: number) {
		if (bucketMenu === bi) {
			bucketMenu = null;
			return;
		}
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		menuPos = { top: rect.bottom + 4, left: Math.min(rect.left, window.innerWidth - 176) };
		bucketMenu = bi;
	}
	function closeMenu() {
		bucketMenu = null;
	}
</script>

<div class="flex h-full flex-col border-e border-line bg-line/45">
	<div
		class="shrink-0 border-b border-line bg-line/45 px-3 py-1.5 text-[11px] font-bold text-muted"
	>
		מסכי השיעור, לפי סדר
	</div>
	<div bind:this={list} onscroll={closeMenu} class="min-h-0 flex-1 space-y-3 overflow-y-auto p-3">
		{#each items as it, ii (ii)}
			{#if it.kind === 'divider'}
				<div class="flex items-center gap-2 pt-2 pb-0.5 first:pt-0">
					<span
						class="rounded-md px-2 py-1 text-sm font-extrabold {it.bucket === 'preface'
							? 'bg-surface text-ink shadow-sm'
							: it.bucketIndex === 0
								? 'bg-emerald-100 text-emerald-800'
								: 'bg-brand-soft text-brand-dark'}"
					>
						{it.title}
					</span>
					{#if it.note}<span class="text-xs font-semibold text-muted">{it.note}</span>{/if}
					<span class="flex-1"></span>
					{#if it.bucket !== 'preface'}
						<button
							type="button"
							class="rounded px-1.5 text-sm font-bold text-muted hover:bg-line/60"
							title="פעולות"
							onclick={(e) => toggleBucketMenu(e, it.bucketIndex)}
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
					class="cursor-pointer rounded-xl border-2 p-2 transition {isSel(it.bucket, it.index)
						? 'border-brand bg-brand-soft shadow-lg'
						: 'border-line bg-surface shadow-sm hover:border-brand/50 hover:shadow-md'} {over ===
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
						class="relative mx-auto overflow-hidden rounded-xl border border-line/60"
						style="width: {thumbW}px; height: {thumbH}px"
					>
						<div
							class="pointer-events-none absolute top-0 left-1/2 origin-top"
							style="width: 448px; transform: translateX(-50%) scale({thumbScale});"
						>
							<EditableScreen {model} {nodeId} path={{ bucket: it.bucket, index: it.index }} />
						</div>
					</div>
				</div>
			{:else if it.kind === 'add-screen'}
				<button
					type="button"
					title={it.at === 0 ? 'הוספת מסך בתחילת הסבב' : 'הוספת מסך כאן'}
					class="group relative flex h-4 w-full items-center justify-center"
					onclick={() => addScreen(it.bucket, it.at)}
				>
					<span class="h-px w-full bg-emerald-300 opacity-0 transition group-hover:opacity-100"
					></span>
					<span
						class="absolute flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-emerald-400 bg-line/45 text-sm font-bold text-emerald-600 opacity-70 transition group-hover:scale-125 group-hover:opacity-100"
					>
						＋
					</span>
				</button>
			{:else}
				<button
					type="button"
					class="mt-1.5 flex w-full items-center justify-center gap-1 rounded-lg border-2 border-dashed border-brand/60 py-1.5 text-[10px] font-bold text-brand hover:bg-brand-soft/50"
					title="הוספה בסוף"
					onclick={() => model.addBucket(nodeId)}
				>
					{model.addBucketLabel}
				</button>
			{/if}
		{/each}
	</div>
</div>

{#if bucketMenu !== null}
	{@const bi = bucketMenu}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-40" onclick={closeMenu}></div>
	<div
		class="fixed z-50 w-44 overflow-y-auto rounded-xl border border-line bg-canvas p-1 text-start text-xs shadow-xl"
		style="top:{menuPos.top}px; left:{menuPos.left}px"
	>
		<button
			type="button"
			class="block w-full rounded px-2 py-1.5 hover:bg-line/50 disabled:opacity-40"
			disabled={bi === 0}
			onclick={() => {
				model.moveBucket(nodeId, bi, bi - 1);
				closeMenu();
			}}
		>
			▲ הזזה למעלה (מוקדם יותר)
		</button>
		<button
			type="button"
			class="block w-full rounded px-2 py-1.5 hover:bg-line/50 disabled:opacity-40"
			disabled={bi === bucketCount - 1}
			onclick={() => {
				model.moveBucket(nodeId, bi, bi + 1);
				closeMenu();
			}}
		>
			▼ הזזה למטה (מאוחר יותר)
		</button>
		{#if model.setBucketLabel}
			<button
				type="button"
				class="block w-full rounded px-2 py-1.5 hover:bg-line/50"
				onclick={() => {
					const name = prompt('כותרת חדשה')?.trim();
					if (name) model.setBucketLabel?.(nodeId, bi, name);
					closeMenu();
				}}
			>
				✏️ שינוי כותרת
			</button>
		{/if}
		<button
			type="button"
			class="block w-full rounded px-2 py-1.5 hover:bg-line/50"
			onclick={() => {
				model.duplicateBucket(nodeId, bi);
				closeMenu();
			}}
		>
			⧉ שכפול
		</button>
		<button
			type="button"
			class="block w-full rounded px-2 py-1.5 font-bold text-rose-600 hover:bg-rose-50 disabled:opacity-40"
			disabled={bucketCount <= 1}
			onclick={() => {
				if (confirm('למחוק לצמיתות?')) model.deleteBucket(nodeId, bi);
				closeMenu();
			}}
		>
			🗑 מחיקה
		</button>
	</div>
{/if}
