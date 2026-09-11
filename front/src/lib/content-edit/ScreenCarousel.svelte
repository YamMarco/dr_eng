<script lang="ts">
	// Flat horizontal strip of every screen in the selected lesson — preface
	// then each round, with divider chips carrying the round controls. Click a
	// slide to select + open the toaster; drag a slide to move it (within or
	// across buckets). Detachable — part of src/lib/content-edit/.
	import { tick, onMount } from 'svelte';
	import { editModel } from './editModel.svelte';
	import { countQuestions } from '$lib/lesson-screens/types';
	import EditableScreen from './EditableScreen.svelte';
	import { typeHe } from './screenTypeNames';
	import type { LessonScreen } from '$lib/lesson-screens/types';
	import type { ScreenPath } from './screenPath';
	import type { Issue } from './validate';

	let {
		nodeId,
		issues = [],
		onSelect
	}: { nodeId: string; issues?: Issue[]; onSelect: (p: ScreenPath) => void } = $props();

	let node = $derived(editModel.node(nodeId));
	let sel = $derived(editModel.selectedPath);

	type Item =
		| { kind: 'divider'; bucket: ScreenPath['bucket']; title: string; note: string }
		| { kind: 'screen'; bucket: ScreenPath['bucket']; index: number; screen: LessonScreen }
		/** Insert a new screen at `at` in this bucket (0 = make it the first). */
		| { kind: 'add-screen'; bucket: ScreenPath['bucket']; at: number; big?: boolean }
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
			// insert-point before the first screen (unshift) + between every pair
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
		out.push({ kind: 'add-round' });
		return out;
	});

	function issueFor(b: ScreenPath['bucket'], i: number): Issue | undefined {
		return issues.find((x) => x.path && x.path.bucket === b && x.path.index === i);
	}
	const isSel = (b: ScreenPath['bucket'], i: number) => sel?.bucket === b && sel?.index === i;

	let track = $state<HTMLDivElement>();
	async function selectAndScroll(b: ScreenPath['bucket'], i: number) {
		editModel.select(nodeId, { bucket: b, index: i });
		onSelect({ bucket: b, index: i });
		await tick();
		track?.querySelector<HTMLElement>(`[data-slide="${String(b)}:${i}"]`)?.scrollIntoView({
			behavior: 'smooth',
			inline: 'center',
			block: 'nearest'
		});
	}

	onMount(() => {
		if (sel) selectAndScroll(sel.bucket, sel.index);
	});

	// step to the prev/next screen slide relative to the selection
	function step(dir: -1 | 1) {
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

	// ---- round actions menu ----
	// Rendered fixed-positioned OUTSIDE the scrolling track: the track clips
	// overflow (overflow-x-auto forces overflow-y to clip too), which was
	// swallowing any popup anchored to a button in the middle of the strip.
	// A menu anchored via getBoundingClientRect() + position:fixed can't be
	// clipped by an ancestor.
	let roundMenu = $state<number | null>(null);
	let menuPos = $state({ top: 0, left: 0 });

	function toggleRoundMenu(e: MouseEvent, ri: number) {
		if (roundMenu === ri) {
			roundMenu = null;
			return;
		}
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		menuPos = { top: rect.bottom + 6, left: Math.min(rect.left, window.innerWidth - 168) };
		roundMenu = ri;
	}
	function closeMenu() {
		roundMenu = null;
	}

	// A blank card lands with no content and its type picked in the toaster —
	// no "choose a type first" dropdown to reason about.
	function addScreen(bucket: ScreenPath['bucket'], at: number) {
		editModel.addScreen(nodeId, bucket, at, 'preface');
		if (editModel.selectedPath) {
			onSelect(editModel.selectedPath);
			selectAndScroll(editModel.selectedPath.bucket, editModel.selectedPath.index);
		}
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.target instanceof HTMLElement && e.target.isContentEditable) return;
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}}
/>

<div class="flex h-full flex-col">
	<div
		bind:this={track}
		onscroll={closeMenu}
		class="flex min-h-0 flex-1 snap-x snap-mandatory items-stretch gap-6 overflow-x-auto overflow-y-hidden py-4 ps-4"
		style="padding-inline-end: calc(var(--tw, 0px) + 1rem); scroll-padding-inline-end: calc(var(--tw, 0px) + 1rem)"
	>
		{#each items as it, ii (ii)}
			{#if it.kind === 'divider'}
				<div
					class="relative flex w-16 shrink-0 flex-col items-center justify-center gap-2 text-center"
				>
					<div
						class="rounded-lg px-2 py-3 text-sm font-extrabold {it.bucket === 'preface'
							? 'bg-line/50 text-ink'
							: it.bucket === 0
								? 'bg-emerald-100 text-emerald-800'
								: 'bg-brand-soft text-brand-dark'}"
					>
						<div class="rotate-180 [writing-mode:vertical-lr]">{it.title}</div>
					</div>
					<div class="text-[10px] leading-tight text-muted">{it.note}</div>
					{#if it.bucket !== 'preface'}
						{@const ri = it.bucket as number}
						<button
							type="button"
							class="rounded-lg border border-line bg-canvas px-1.5 py-1 text-xs font-bold hover:bg-line/60"
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
					class="flex h-full w-[min(74vw,330px)] shrink-0 snap-center flex-col self-stretch rounded-2xl border-2 bg-canvas transition {isSel(
						it.bucket,
						it.index
					)
						? 'border-brand shadow-lg ring-4 ring-brand/20'
						: 'border-line/70 shadow-sm'}"
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
					<div
						class="flex items-center gap-2 border-b border-line/70 bg-surface/50 px-3 py-2 text-xs"
					>
						<span class="cursor-grab text-muted" title="גררו כדי לשנות סדר">⠿</span>
						<span class="font-bold">{typeHe(it.screen.type)}</span>
						<span class="font-mono text-[10px] text-muted" dir="ltr">{it.screen.type}</span>
						{#if countQuestions(it.screen) > 0}
							<span
								class="rounded bg-brand/15 px-1 font-bold text-brand-dark"
								title="מספר שאלות מדורגות">{countQuestions(it.screen)} ✔</span
							>
						{/if}
						{#if iss}<span title={iss.message}>{iss.severity === 'error' ? '⛔' : '⚠️'}</span>{/if}
						<span class="flex-1"></span>
						<span class="text-muted">מסך {it.index + 1}</span>
						<button
							type="button"
							class="rounded px-1.5 py-0.5 font-bold text-rose-600 hover:bg-rose-50"
							title="מחיקת המסך"
							onclick={(e) => {
								e.stopPropagation();
								if (confirm('למחוק את המסך?'))
									editModel.deleteScreen(nodeId, { bucket: it.bucket, index: it.index });
							}}>🗑</button
						>
					</div>
					<div
						class="min-h-0 flex-1 overflow-y-auto {over === `${String(it.bucket)}:${it.index}`
							? 'bg-brand-soft/40'
							: ''}"
					>
						<EditableScreen {nodeId} path={{ bucket: it.bucket, index: it.index }} />
					</div>
				</div>
			{:else if it.kind === 'add-screen'}
				<div
					class="relative flex shrink-0 flex-col items-center justify-center {it.big
						? 'w-24'
						: 'w-7'}"
				>
					{#if it.big}
						<button
							type="button"
							class="rounded-xl border-2 border-dashed border-emerald-500 px-2 py-6 text-xs leading-tight font-bold text-emerald-700 hover:bg-emerald-50"
							title={it.at === 0 ? 'הוספת מסך בתחילת הסבב' : 'הוספת מסך כאן'}
							onclick={() => addScreen(it.bucket, it.at)}
						>
							➕<br />הוספת<br />מסך
						</button>
					{:else}
						<button
							type="button"
							title={it.at === 0 ? 'הוספת מסך בתחילת הסבב' : 'הוספת מסך כאן'}
							class="flex h-10 w-6 items-center justify-center rounded-full border border-dashed border-emerald-400 text-sm font-bold text-emerald-600 hover:bg-emerald-50"
							onclick={() => addScreen(it.bucket, it.at)}
						>
							＋
						</button>
					{/if}
				</div>
			{:else}
				<div class="flex w-28 shrink-0 items-center justify-center">
					<button
						type="button"
						class="rounded-xl border-2 border-dashed border-brand/60 px-3 py-6 text-xs leading-tight font-bold text-brand hover:bg-brand-soft/50"
						title="הוספת סבב תרגול חדש בסוף"
						onclick={() => editModel.addRound(nodeId)}
					>
						➕<br />הוספת<br />סבב
					</button>
				</div>
			{/if}
		{/each}
	</div>
</div>

{#if roundMenu !== null}
	{@const ri = roundMenu}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-40" onclick={closeMenu}></div>
	<div
		class="fixed z-50 w-40 overflow-y-auto rounded-xl border border-line bg-canvas p-1 text-start text-xs shadow-xl"
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
			◀ הזזה שמאלה (מוקדם יותר)
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
			▶ הזזה ימינה (מאוחר יותר)
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
