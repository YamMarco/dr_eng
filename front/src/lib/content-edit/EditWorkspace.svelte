<script lang="ts">
	// The /edit workspace shell: one save + a switch between the whole-module
	// map and the single-lesson editor. Loads every section on the module's
	// path at once. Detachable — part of src/lib/content-edit/.
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import UndoRedoButtons from './UndoRedoButtons.svelte';
	import { editModel } from './editModel.svelte';
	import { saveRules, saveSection, saveTitles } from './api';
	import { rulesStore } from './rulesStore.svelte';
	import RulesPanel from './RulesPanel.svelte';
	import { validateSection, issuesByNode } from './validate';
	import GraphEditor from './GraphEditor.svelte';
	import LessonEditorView from './LessonEditorView.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';
	import { getModule } from '$lib/curriculum';

	let {
		module: moduleId = 'c',
		lesson = '',
		round = 0,
		screen = -1
	} = $props<{ module?: string; lesson?: string; round?: number; screen?: number }>();

	let mode = $state<'graph' | 'lesson'>('graph');

	let rulesOpen = $state(false);
	// Unsaved lesson edits or rule settings.
	let dirty = $derived(editModel.dirty || rulesStore.dirty);

	onMount(() => {
		editModel.load(moduleId);
		rulesStore.load();
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
		if (!editModel.hasChanges && !rulesStore.dirty) return;
		saveState = 'saving';
		saveMsg = '';
		try {
			let committed = false;
			for (const sid of changed) {
				const { upserts, deletes } = editModel.changesForSection(sid);
				const res = await saveSection(sid, upserts, deletes);
				committed ||= res.committed;
			}
			const titles = editModel.titles.changes();
			if (Object.keys(titles.upserts).length || titles.deletes.length)
				committed ||= (await saveTitles(titles.upserts, titles.deletes)).committed;
			if (rulesStore.dirty) {
				committed ||= (await saveRules($state.snapshot(rulesStore.file))).committed;
				rulesStore.markClean();
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
		if (dirty && !confirm('יש שינויים שלא נשמרו. לצאת ולאבד אותם?')) return;
		if (history.length > 1) history.back();
		else goto('/app');
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
		if (dirty) {
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

		<span class="rounded-lg bg-line/60 px-2.5 py-1.5 text-sm font-bold" dir="ltr"
			>{getModule(moduleId)?.letter ?? moduleId}</span
		>

		<UndoRedoButtons model={editModel} />

		<button
			type="button"
			class="rounded-lg border border-line px-2.5 py-1.5 text-sm font-semibold text-muted hover:bg-line/60"
			onclick={() => (rulesOpen = true)}>⚙️ כללי בדיקה</button
		>

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
			class="rounded-lg px-4 py-1.5 text-sm font-bold text-white shadow-sm disabled:cursor-not-allowed {dirty
				? 'bg-emerald-600 hover:bg-emerald-700'
				: 'bg-line/70 text-muted'}"
			disabled={!dirty || saveState === 'saving'}
			onclick={save}
		>
			{saveState === 'saving' ? 'שומר…' : dirty ? '💾 שמירת שינויים' : 'הכול שמור'}
		</button>
	</header>

	<div class="border-b border-line/70 bg-surface/60 px-3 py-1 text-xs text-muted">{hint}</div>

	{#if showIssues && issues.length}
		<ul
			class="max-h-40 overflow-y-auto border-b border-line bg-amber-50 px-3 py-2 text-xs text-mark-ink"
		>
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
		rules={rulesStore.file}
		lessonLabel={editModel.titles.get(playNode.id)}
		hasNextLesson={false}
		onExit={() => (play = null)}
		onFinish={() => (play = null)}
		onFinishAndContinue={() => (play = null)}
		onNextRound={() => (play = null)}
	/>
{/if}

<RulesPanel bind:open={rulesOpen} />
