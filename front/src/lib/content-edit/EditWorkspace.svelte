<script lang="ts">
	// The /edit workspace shell: section picker + one save, graph editor on
	// the left, lesson pane on the right, play-from-here overlay.
	// Detachable — part of src/lib/content-edit/.
	import { onMount } from 'svelte';
	import { sectionMeta } from '$lib/content';
	import { editModel } from './editModel.svelte';
	import { saveSection } from './api';
	import { validateSection, issuesByNode } from './validate';
	import GraphEditor from './GraphEditor.svelte';
	import LessonPane from './LessonPane.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';

	let {
		section = 'c-1',
		lesson = '',
		round = 0,
		screen = -1
	} = $props<{
		section?: string;
		lesson?: string;
		round?: number;
		screen?: number;
	}>();

	onMount(() => {
		editModel.load(section);
		if (lesson && editModel.node(lesson)) {
			editModel.select(
				lesson,
				screen >= 0 ? { bucket: round === 0 ? 'preface' : round, index: screen } : null
			);
		}
	});

	function switchSection(id: string) {
		if (editModel.dirty && !confirm('יש שינויים שלא נשמרו. להחליף חלק?')) return;
		editModel.load(id);
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

	// ---- play-from-here overlay ----
	let play = $state<{ nodeId: string; round: number; index: number } | null>(null);
	let playNode = $derived(play ? editModel.node(play.nodeId) : undefined);
	let graphOpen = $state(true);
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
		<strong class="text-sm">עריכת תוכן</strong>
		<select
			class="rounded-lg border-2 border-line bg-surface px-2 py-1 text-sm"
			value={editModel.sectionId}
			onchange={(e) => switchSection(e.currentTarget.value)}
		>
			{#each sectionMeta as s (s.id)}
				<option value={s.id}>{s.id} · {s.titleHe}</option>
			{/each}
		</select>

		<button
			type="button"
			class="rounded-lg px-2 py-1 text-xs font-semibold {graphOpen
				? 'bg-ink text-white'
				: 'bg-line/50'}"
			onclick={() => (graphOpen = !graphOpen)}>גרף</button
		>

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
						onclick={() => editModel.select(iss.nodeId, iss.path ?? null)}
					>
						<span class="font-mono" dir="ltr">{iss.nodeId}</span> — {iss.message}
					</button>
				</li>
			{/each}
		</ul>
	{/if}

	<div class="grid min-h-0 flex-1 {graphOpen ? 'lg:grid-cols-[minmax(320px,40%)_1fr]' : ''}">
		{#if graphOpen}
			<div class="min-h-0 border-e border-line">
				<GraphEditor />
			</div>
		{/if}
		<div class="min-h-0 overflow-hidden">
			<LessonPane
				issues={editModel.selectedNodeId ? (issuesFor.get(editModel.selectedNodeId) ?? []) : []}
				onPlay={(nodeId, r, i) => (play = { nodeId, round: r, index: i })}
			/>
		</div>
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
