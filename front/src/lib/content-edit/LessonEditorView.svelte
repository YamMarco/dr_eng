<script lang="ts">
	// Lesson-editing view: a screen carousel + a bottom editing toaster for the
	// selected screen. Shown instead of the graph, not beside it.
	// Detachable — part of src/lib/content-edit/.
	import { editModel } from './editModel.svelte';
	import ScreenCarousel from './ScreenCarousel.svelte';
	import ScreenToaster from './ScreenToaster.svelte';
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
	// Deep-linked with a screen -> land with the toaster already open.
	let toasterOpen = $state(!!editModel.selectedPath);
	let metaOpen = $state(false);

	function playFromHere() {
		if (!node || !path) return;
		const round = path.bucket === 'preface' ? 0 : path.bucket;
		const idx = path.bucket === 0 ? node.content.preface.length + path.index : path.index;
		onPlay(node.id, round, idx);
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

		<div class="min-h-0 flex-1 overflow-hidden pt-2">
			<ScreenCarousel nodeId={node.id} {issues} onSelect={() => (toasterOpen = true)} />
		</div>

		{#if toasterOpen && path}
			<ScreenToaster nodeId={node.id} {path} onClose={() => (toasterOpen = false)} />
		{/if}
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
