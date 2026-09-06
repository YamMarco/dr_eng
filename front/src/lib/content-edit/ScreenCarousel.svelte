<script lang="ts">
	// Flat horizontal strip of every screen in the selected lesson — preface
	// then each round, with divider chips carrying the round controls. Click a
	// slide to select + open the toaster; drag a slide to move it (within or
	// across buckets). Detachable — part of src/lib/content-edit/.
	import { tick, onMount } from 'svelte';
	import { editModel } from './editModel.svelte';
	import { SCREEN_TYPE_GROUPS } from './screenSkeletons';
	import { countQuestions } from '$lib/lesson-screens/types';
	import EditableScreen from './EditableScreen.svelte';
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
		| { kind: 'add-screen'; bucket: ScreenPath['bucket'] }
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
			b.screens.forEach((screen, index) =>
				out.push({ kind: 'screen', bucket: b.key, index, screen })
			);
			out.push({ kind: 'add-screen', bucket: b.key });
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

	// ---- add-screen menu ----
	let addFor = $state<string | null>(null);
	function addScreen(bucket: ScreenPath['bucket'], type: LessonScreen['type']) {
		editModel.addScreen(nodeId, bucket, -1, type);
		addFor = null;
		if (editModel.selectedPath) onSelect(editModel.selectedPath);
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
		class="flex min-h-0 flex-1 snap-x snap-mandatory items-stretch gap-6 overflow-x-auto overflow-y-hidden px-4 pt-4 pb-2"
	>
		{#each items as it, ii (ii)}
			{#if it.kind === 'divider'}
				<div class="flex w-12 shrink-0 flex-col items-center justify-center gap-1.5 text-center">
					<div class="rotate-180 text-sm font-extrabold text-muted [writing-mode:vertical-lr]">
						{it.title}
					</div>
					<div class="text-[10px] text-muted">{it.note}</div>
					{#if it.bucket !== 'preface'}
						{@const ri = it.bucket as number}
						<button
							type="button"
							class="dv"
							title="הזז את הסבב אחורה בסדר"
							disabled={ri === 0}
							onclick={() => editModel.moveRound(nodeId, ri, ri - 1)}>▲</button
						>
						<button
							type="button"
							class="dv"
							title="הזז את הסבב קדימה בסדר"
							disabled={!node || ri === node.content.rounds.length - 1}
							onclick={() => editModel.moveRound(nodeId, ri, ri + 1)}>▼</button
						>
						<button
							type="button"
							class="dv"
							title="שכפל סבב"
							onclick={() => editModel.duplicateRound(nodeId, ri)}>⎘</button
						>
						<button
							type="button"
							class="dv text-danger"
							title="מחק סבב"
							disabled={!node || node.content.rounds.length <= 1}
							onclick={() => confirm(`למחוק סבב ${ri + 1}?`) && editModel.deleteRound(nodeId, ri)}
							>🗑</button
						>
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
					<div class="flex items-center gap-2 border-b border-line/70 px-3 py-1.5 text-xs">
						<span class="cursor-grab text-muted">⠿</span>
						<span class="font-mono" dir="ltr">{it.screen.type}</span>
						{#if countQuestions(it.screen) > 0}
							<span class="rounded bg-brand/15 px-1 font-bold text-brand-dark"
								>{countQuestions(it.screen)}?</span
							>
						{/if}
						{#if iss}<span title={iss.message}>{iss.severity === 'error' ? '🔴' : '🟠'}</span>{/if}
						<span class="flex-1"></span>
						<span class="text-muted">#{it.index + 1}</span>
						<button
							type="button"
							class="text-danger"
							title="מחק"
							onclick={(e) => {
								e.stopPropagation();
								editModel.deleteScreen(nodeId, { bucket: it.bucket, index: it.index });
							}}>✕</button
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
				<div class="relative flex w-32 shrink-0 flex-col items-center justify-center">
					<button
						type="button"
						class="rounded-xl border-2 border-dashed border-brand/50 px-3 py-6 text-xs font-bold text-brand"
						onclick={() => (addFor = addFor === String(it.bucket) ? null : String(it.bucket))}
					>
						+ מסך
					</button>
					{#if addFor === String(it.bucket)}
						<div
							class="absolute top-full z-20 mt-1 max-h-64 w-52 overflow-y-auto rounded-xl border border-line bg-canvas p-1 shadow-lg"
						>
							{#each SCREEN_TYPE_GROUPS as g (g.label)}
								<p class="px-2 pt-1 text-[10px] font-bold text-muted">{g.label}</p>
								{#each g.types as t (t)}
									<button
										type="button"
										class="block w-full rounded px-2 py-1 text-start font-mono text-xs hover:bg-line/50"
										dir="ltr"
										onclick={() => addScreen(it.bucket, t)}>{t}</button
									>
								{/each}
							{/each}
						</div>
					{/if}
				</div>
			{:else}
				<div class="flex w-32 shrink-0 items-center justify-center">
					<button
						type="button"
						class="rounded-xl border-2 border-dashed border-line px-3 py-6 text-xs font-bold text-muted hover:border-brand hover:text-brand"
						onclick={() => editModel.addRound(nodeId)}
					>
						+ סבב
					</button>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.dv {
		border-radius: 0.375rem;
		padding: 0 0.25rem;
		font-size: 0.7rem;
	}
	.dv:hover:not(:disabled) {
		background: rgb(0 0 0 / 0.06);
	}
	.dv:disabled {
		opacity: 0.3;
	}
</style>
