<script lang="ts">
	// The /edit workspace shell: one save + a switch between the whole-module
	// map and the single-lesson editor. Loads every section of the module at
	// once. Detachable — part of src/lib/content-edit/.
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { editModel } from './editModel.svelte';
	import { saveSection } from './api';
	import { validateSection, issuesByNode } from './validate';
	import GraphEditor from './GraphEditor.svelte';
	import LessonEditorView from './LessonEditorView.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';

	let {
		lesson = '',
		round = 0,
		screen = -1
	} = $props<{ section?: string; lesson?: string; round?: number; screen?: number }>();

	let mode = $state<'graph' | 'lesson'>('graph');

	onMount(() => {
		editModel.load();
		if (lesson && editModel.node(lesson)) {
			editModel.select(
				lesson,
				screen >= 0 ? { bucket: round === 0 ? 'preface' : round, index: screen } : null
			);
			mode = 'lesson';
		}
	});

	let issues = $derived(validateSection(editModel.nodes));
	let issuesFor = $derived(issuesByNode(issues));
	let showIssues = $state(false);
	let errorCount = $derived(issues.filter((i) => i.severity === 'error').length);

	let saveState = $state<'idle' | 'saving' | 'saved' | 'error'>('idle');
	let saveMsg = $state('');
	async function save() {
		const changed = editModel.changedSections;
		if (!changed.length) return;
		saveState = 'saving';
		saveMsg = '';
		try {
			let committed = false;
			for (const sid of changed) {
				const { upserts, deletes } = editModel.changesForSection(sid);
				const res = await saveSection(sid, upserts, deletes);
				committed ||= res.committed;
			}
			editModel.markClean();
			saveState = 'saved';
			saveMsg = committed
				? 'נשלח. המתן כדקה ורענן את הדף.'
				: `נשמר (${changed.join(', ')}). הדף ייטען מחדש.`;
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

	function exit() {
		if (editModel.dirty && !confirm('יש שינויים שלא נשמרו. לצאת ולאבד אותם?')) return;
		if (history.length > 1) history.back();
		else goto('/');
	}

	let play = $state<{ nodeId: string; round: number; index: number } | null>(null);
	let playNode = $derived(play ? editModel.node(play.nodeId) : undefined);

	const hint = $derived(
		mode === 'graph'
			? 'זו מפת כל השיעורים. גררו עיגול = הזזה · דאבל־קליק = פתיחה לעריכה · העיגול הקטן שמתחת לצומת = חיבור בין שיעורים.'
			: 'זהו השיעור. גללו בין הכרטיסים, לחצו על כרטיס כדי לערוך אותו. הטקסט נערך ישירות על הכרטיס.'
	);
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
		<button
			type="button"
			class="rounded-lg border border-line px-2.5 py-1.5 text-sm font-semibold text-muted hover:bg-line/60"
			onclick={exit}
		>
			← יציאה
		</button>

		<div class="flex overflow-hidden rounded-lg border-2 border-brand text-sm font-bold">
			<button
				type="button"
				class="px-3 py-1.5 {mode === 'graph' ? 'bg-brand text-white' : 'bg-canvas text-brand'}"
				onclick={() => (mode = 'graph')}>🗺️ מפת השיעורים</button
			>
			<button
				type="button"
				class="px-3 py-1.5 {mode === 'lesson'
					? 'bg-brand text-white'
					: 'bg-canvas text-brand'} disabled:opacity-40"
				disabled={!editModel.selectedNodeId}
				onclick={() => (mode = 'lesson')}>✏️ עריכת שיעור</button
			>
		</div>

		{#if issues.length}
			<button
				type="button"
				class="rounded-lg px-2.5 py-1.5 text-xs font-bold {errorCount
					? 'bg-rose-100 text-rose-700'
					: 'bg-amber-100 text-amber-800'}"
				onclick={() => (showIssues = !showIssues)}
			>
				{errorCount ? `⛔ ${errorCount} שגיאות` : `⚠️ ${issues.length} אזהרות`}
			</button>
		{/if}

		<span class="flex-1"></span>

		{#if saveMsg}
			<span
				class="text-xs {saveState === 'error' ? 'font-bold text-rose-600' : 'text-emerald-700'}"
				dir={saveState === 'error' ? 'ltr' : 'rtl'}
			>
				{saveMsg}
			</span>
		{/if}
		<button
			type="button"
			class="rounded-lg px-4 py-1.5 text-sm font-bold text-white shadow-sm disabled:cursor-not-allowed {editModel.dirty
				? 'bg-emerald-600 hover:bg-emerald-700'
				: 'bg-line/70 text-muted'}"
			disabled={!editModel.dirty || saveState === 'saving'}
			onclick={save}
		>
			{saveState === 'saving' ? 'שומר…' : editModel.dirty ? '💾 שמירת שינויים' : 'הכול שמור'}
		</button>
	</header>

	<div class="border-b border-line/70 bg-surface/60 px-3 py-1 text-xs text-muted">{hint}</div>

	{#if showIssues && issues.length}
		<ul class="max-h-40 overflow-y-auto border-b border-line bg-amber-50 px-3 py-2 text-xs">
			{#each issues as iss (iss.nodeId + iss.message)}
				<li>
					<button
						type="button"
						class="text-start hover:underline"
						onclick={() => {
							editModel.select(iss.nodeId, iss.path ?? null);
							mode = iss.path ? 'lesson' : mode;
							showIssues = false;
						}}
					>
						<span>{iss.severity === 'error' ? '⛔' : '⚠️'}</span>
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
