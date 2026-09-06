<script lang="ts">
	// Right-hand pane of the /edit workspace for one lesson node: structure
	// outline + the selected screen's form + a live preview.
	// Detachable — part of src/lib/content-edit/.
	import { editModel } from './editModel.svelte';
	import { screensForRound } from './screenPath';
	import OutlineTree from './OutlineTree.svelte';
	import ScreenForm from './ScreenForm.svelte';
	import ScreenPreview from './ScreenPreview.svelte';
	import type { Issue } from './validate';

	let {
		issues = [],
		onPlay
	}: {
		issues?: Issue[];
		/** Open the real runner at this node / round / screen-within-the-played-list. */
		onPlay: (nodeId: string, round: number, screenIndex: number) => void;
	} = $props();

	let node = $derived(editModel.selectedNode);
	let path = $derived(editModel.selectedPath);
	let screen = $derived(editModel.selectedScreen);

	let view = $state<'form' | 'preview' | 'both'>('both');

	// Where the selected screen lands in the *played* list (preface + round 0
	// play together), so "play from here" starts on the right screen.
	function playFromHere() {
		if (!node || !path) return;
		const round = path.bucket === 'preface' ? 0 : path.bucket;
		let idx = path.index;
		if (path.bucket === 'preface') idx = path.index;
		else if (path.bucket === 0) idx = node.content.preface.length + path.index;
		onPlay(node.id, round, idx);
	}

	let metaEdit = $state(false);
</script>

{#if node}
	<div class="flex h-full min-h-0 flex-col">
		<!-- node meta -->
		<div class="flex flex-wrap items-center gap-2 border-b border-line/70 px-3 py-2">
			<span class="font-mono text-xs text-muted" dir="ltr">{node.id}</span>
			<strong class="text-sm">{node.titleHe}</strong>
			{#if node.code}<span class="rounded bg-line/60 px-1.5 text-xs" dir="ltr">{node.code}</span
				>{/if}
			<button
				type="button"
				class="text-xs text-brand hover:underline"
				onclick={() => (metaEdit = !metaEdit)}
			>
				{metaEdit ? 'סגור' : 'ערוך פרטים'}
			</button>
			<span class="flex-1"></span>
			<button
				type="button"
				class="rounded-lg bg-ink px-2.5 py-1 text-xs font-bold text-white disabled:opacity-40"
				disabled={!path}
				onclick={playFromHere}
			>
				▶ נגן מכאן
			</button>
		</div>

		{#if metaEdit}
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

		<div class="grid min-h-0 flex-1 gap-3 p-3 lg:grid-cols-[20rem_1fr]">
			<!-- outline -->
			<div class="min-h-0 overflow-y-auto lg:border-e lg:border-line/70 lg:pe-3">
				<OutlineTree {issues} />
			</div>

			<!-- form + preview -->
			<div class="flex min-h-0 flex-col">
				<div class="mb-2 flex items-center gap-1 text-xs">
					{#each [['form', 'טופס'], ['preview', 'תצוגה'], ['both', 'שניהם']] as [v, lbl] (v)}
						<button
							type="button"
							class="rounded-md px-2 py-1 font-semibold {view === v
								? 'bg-ink text-white'
								: 'bg-line/50 text-muted'}"
							onclick={() => (view = v as typeof view)}>{lbl}</button
						>
					{/each}
					{#if path}
						<span class="ms-2 text-muted" dir="ltr">
							{path.bucket === 'preface' ? 'preface' : `round${path.bucket}`}[{path.index}]
						</span>
					{/if}
				</div>

				{#if !screen || !path}
					<p class="pt-10 text-center text-sm text-muted">בחרו מסך מהמבנה משמאל.</p>
				{:else}
					<div
						class="grid min-h-0 flex-1 gap-3 {view === 'both'
							? 'xl:grid-cols-2'
							: ''} overflow-y-auto"
					>
						{#if view !== 'preview'}
							{#key `${node.id}:${path.bucket}:${path.index}`}
								<ScreenForm
									{screen}
									lessonId={node.id}
									bucket={path.bucket}
									index={path.index}
									onApply={(next) => editModel.applyScreen(node.id, path, next)}
									onDelete={() => editModel.deleteScreen(node.id, path)}
								/>
							{/key}
						{/if}
						{#if view !== 'form'}
							<div class="pt-2">
								<ScreenPreview {screen} />
							</div>
						{/if}
					</div>
				{/if}
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
