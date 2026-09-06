<script lang="ts">
	// The /edit workspace shell: section picker + one save + a mode switch
	// between the graph editor and the lesson editor (never both at once).
	// Detachable — part of src/lib/content-edit/.
	import { onMount } from 'svelte';
	import { sectionMeta } from '$lib/content';
	import { editModel } from './editModel.svelte';
	import { saveSection } from './api';
	import { validateSection, issuesByNode } from './validate';
	import GraphEditor from './GraphEditor.svelte';
	import LessonEditorView from './LessonEditorView.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';

	let {
		section = 'c-1',
		lesson = '',
		round = 0,
		screen = -1
	} = $props<{ section?: string; lesson?: string; round?: number; screen?: number }>();

	let mode = $state<'graph' | 'lesson'>('graph');

	onMount(() => {
		editModel.load(section);
		if (lesson && editModel.node(lesson)) {
			editModel.select(
				lesson,
				screen >= 0 ? { bucket: round === 0 ? 'preface' : round, index: screen } : null
			);
			mode = 'lesson';
		}
	});

	function switchSection(id: string) {
		if (editModel.dirty && !confirm('יש שינויים שלא נשמרו. להחליף חלק?')) return;
		editModel.load(id);
		mode = 'graph';
	}

	let issues = $derived(validateSection(editModel.nodes));
	let issuesFor = $derived(issuesByNode(issues));
	let showIssues = $state(false);

	let saveState = $state<'idle' | 'saving' | 'saved' | 'error'>('idle');
	let saveMsg = $state('');
	async function save() {
		saveState = 'saving';
		saveMsg = '';
		try {
			const res = await saveSection(editModel.sectionId, $state.snapshot(editModel.nodes));
			editModel.markClean();
			saveState = 'saved';
			saveMsg = res.committed ? 'נשלח כ-commit. המתן כדקה ורענן.' : 'נשמר לקובץ. Vite יטען מחדש.';
		} catch (e) {
			saveState = 'error';
			saveMsg = e instanceof Error ? e.message : String(e);
		}
	}

	function onKey(e: KeyboardEvent) {
		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
			e.preventDefault();
			save();
		}
	}

	function openLesson(id: string) {
		editModel.select(id, null);
		mode = 'lesson';
	}

	// ---- play-from-here overlay ----
	let play = $state<{ nodeId: string; round: number; index: number } | null>(null);
	let playNode = $derived(play ? editModel.node(play.nodeId) : undefined);
</script>

<svelte:window
	onkeydown={onKey}
	onbeforeunload={(e) => {
		if (editModel.dirty) {
			e.preventDefault();
			e.returnValue = '';
		}
	}}
/>

<div class="flex h-dvh flex-col bg-canvas">
	<header class="flex flex-wrap items-center gap-2 border-b border-line px-3 py-2">
		<div class="flex overflow-hidden rounded-lg border border-line text-xs font-bold">
			<button
				type="button"
				class="px-3 py-1 {mode === 'graph' ? 'bg-ink text-white' : 'bg-surface'}"
				onclick={() => (mode = 'graph')}>גרף</button
			>
			<button
				type="button"
				class="px-3 py-1 {mode === 'lesson'
					? 'bg-ink text-white'
					: 'bg-surface'} disabled:opacity-40"
				disabled={!editModel.selectedNodeId}
				onclick={() => (mode = 'lesson')}>שיעור</button
			>
		</div>

		<select
			class="rounded-lg border-2 border-line bg-surface px-2 py-1 text-sm"
			value={editModel.sectionId}
			onchange={(e) => switchSection(e.currentTarget.value)}
		>
			{#each sectionMeta as s (s.id)}
				<option value={s.id}>{s.id} · {s.titleHe}</option>
			{/each}
		</select>

		{#if issues.length}
			<button
				type="button"
				class="rounded-lg bg-danger-soft px-2 py-1 text-xs font-bold text-danger"
				onclick={() => (showIssues = !showIssues)}
			>
				בעיות: {issues.length}
			</button>
		{/if}

		<span class="flex-1"></span>

		{#if saveMsg}
			<span
				class="text-xs {saveState === 'error' ? 'text-danger' : 'text-brand-dark'}"
				dir={saveState === 'error' ? 'ltr' : 'rtl'}
			>
				{saveMsg}
			</span>
		{/if}
		<button
			type="button"
			class="rounded-lg bg-brand px-3 py-1.5 text-sm font-bold text-white disabled:opacity-40"
			disabled={!editModel.dirty || saveState === 'saving'}
			onclick={save}
		>
			{saveState === 'saving' ? 'שומר…' : editModel.dirty ? '💾 שמור' : 'אין שינויים'}
		</button>
	</header>

	{#if showIssues && issues.length}
		<ul class="max-h-40 overflow-y-auto border-b border-line bg-danger-soft/40 px-3 py-2 text-xs">
			{#each issues as iss (iss.nodeId + iss.message)}
				<li>
					<button
						type="button"
						class="text-start hover:underline"
						onclick={() => {
							editModel.select(iss.nodeId, iss.path ?? null);
							mode = iss.path ? 'lesson' : mode;
						}}
					>
						<span class="font-mono" dir="ltr">{iss.nodeId}</span> — {iss.message}
					</button>
				</li>
			{/each}
		</ul>
	{/if}

	<div class="min-h-0 flex-1 overflow-hidden">
		{#if mode === 'graph'}
			<GraphEditor onOpenLesson={openLesson} />
		{:else}
			<LessonEditorView
				onBack={() => (mode = 'graph')}
				onPlay={(nodeId, r, i) => (play = { nodeId, round: r, index: i })}
				issues={editModel.selectedNodeId ? (issuesFor.get(editModel.selectedNodeId) ?? []) : []}
			/>
		{/if}
	</div>
</div>

{#if play && playNode}
	<LessonRunner
		lesson={playNode}
		roundIndex={play.round}
		startScreenIndex={play.index}
		lessonLabel={playNode.titleHe}
		hasNextLesson={false}
		onExit={() => (play = null)}
		onFinish={() => (play = null)}
		onFinishAndContinue={() => (play = null)}
	/>
{/if}
