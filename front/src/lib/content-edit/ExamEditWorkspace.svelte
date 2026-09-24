<script lang="ts">
	// The /edit-exam workspace shell: one save + a switch between the module's
	// exam list and the single-exam editor. Loads only that module's exams -
	// mirrors EditWorkspace.svelte, minus the graph view (exams aren't a DAG).
	// Detachable — part of src/lib/content-edit/.
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { examEditModel } from './examEditModel.svelte';
	import { saveExamChanges } from './api';
	import { validateExam, issuesByNode } from './validate';
	import ExamEditorView from './ExamEditorView.svelte';
	import QuizRunner from '$lib/quiz/QuizRunner.svelte';

	let { moduleId, exam = '' }: { moduleId: string; exam?: string } = $props();

	let mode = $state<'list' | 'exam'>('list');

	onMount(() => {
		examEditModel.load(moduleId);
		if (exam && examEditModel.node(exam)) {
			examEditModel.select(exam, null);
			mode = 'exam';
		}
	});

	let issues = $derived(validateExam(examEditModel.quizzes));
	let issuesFor = $derived(issuesByNode(issues));
	let showIssues = $state(false);
	let errorCount = $derived(issues.filter((i) => i.severity === 'error').length);

	let saveState = $state<'idle' | 'saving' | 'saved' | 'error'>('idle');
	let saveMsg = $state('');
	async function save() {
		if (!examEditModel.dirty) return;
		saveState = 'saving';
		saveMsg = '';
		try {
			const { upserts, deletes } = examEditModel.changes();
			const res = await saveExamChanges(moduleId, upserts, deletes);
			examEditModel.markClean();
			saveState = 'saved';
			saveMsg = res.committed ? 'נשלח. המתן כדקה ורענן את הדף.' : 'נשמר. הדף ייטען מחדש.';
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

	function openExam(id: string) {
		examEditModel.select(id, null);
		mode = 'exam';
	}

	function addExam() {
		const node = examEditModel.addExam();
		openExam(node.id);
	}

	function exit() {
		if (examEditModel.dirty && !confirm('יש שינויים שלא נשמרו. לצאת ולאבד אותם?')) return;
		if (history.length > 1) history.back();
		else goto('/');
	}

	let play = $state<{ quizId: string; partIndex: number; screenIndex: number } | null>(null);
	let playQuiz = $derived(play ? examEditModel.node(play.quizId) : undefined);
</script>

<svelte:window
	onkeydown={onKey}
	onbeforeunload={(e) => {
		if (examEditModel.dirty) {
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

		<strong class="text-sm">עריכת מבחנים · מודול {moduleId}</strong>

		{#if mode === 'exam'}
			<button
				type="button"
				class="rounded-lg border-2 border-brand px-3 py-1.5 text-sm font-bold text-brand hover:bg-brand-soft/40"
				onclick={() => (mode = 'list')}
			>
				🗒️ רשימת המבחנים
			</button>
		{/if}

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
			class="rounded-lg px-4 py-1.5 text-sm font-bold text-white shadow-sm disabled:cursor-not-allowed {examEditModel.dirty
				? 'bg-emerald-600 hover:bg-emerald-700'
				: 'bg-line/70 text-muted'}"
			disabled={!examEditModel.dirty || saveState === 'saving'}
			onclick={save}
		>
			{saveState === 'saving' ? 'שומר…' : examEditModel.dirty ? '💾 שמירת שינויים' : 'הכול שמור'}
		</button>
	</header>

	{#if showIssues && issues.length}
		<ul class="max-h-40 overflow-y-auto border-b border-line bg-amber-50 px-3 py-2 text-xs">
			{#each issues as iss (iss.nodeId + iss.message)}
				<li>
					<button
						type="button"
						class="text-start hover:underline"
						onclick={() => {
							examEditModel.select(iss.nodeId, iss.path ?? null);
							mode = 'exam';
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
		{#if mode === 'list'}
			<div class="mx-auto max-w-lg p-4">
				<button
					type="button"
					class="mb-4 flex w-full items-center justify-center gap-1 rounded-lg border-2 border-dashed border-brand/60 py-2 text-sm font-bold text-brand hover:bg-brand-soft/50"
					onclick={addExam}
				>
					➕ מבחן חדש
				</button>
				<ul class="flex flex-col gap-2">
					{#each examEditModel.quizzes as quiz (quiz.id)}
						{@const iss = issuesFor.get(quiz.id) ?? []}
						<li>
							<button
								type="button"
								class="flex w-full items-center gap-2 rounded-xl border-2 border-line bg-surface p-3 text-start hover:border-brand/50"
								onclick={() => openExam(quiz.id)}
							>
								<span class="flex-1">
									<span class="block text-sm font-bold">{quiz.titleHe}</span>
									<span class="block text-xs text-muted" dir="ltr">{quiz.id}</span>
								</span>
								{#if iss.length}
									<span class="text-xs"
										>{iss.some((i) => i.severity === 'error') ? '⛔' : '⚠️'}</span
									>
								{/if}
							</button>
						</li>
					{:else}
						<li class="text-center text-sm text-muted">אין עדיין מבחנים במודול הזה.</li>
					{/each}
				</ul>
			</div>
		{:else}
			<ExamEditorView
				onBack={() => (mode = 'list')}
				onPlay={(quizId, partIndex, screenIndex) => (play = { quizId, partIndex, screenIndex })}
				issues={examEditModel.selectedQuizId
					? (issuesFor.get(examEditModel.selectedQuizId) ?? [])
					: []}
			/>
		{/if}
	</div>
</div>

{#if play && playQuiz}
	<QuizRunner
		quiz={playQuiz}
		preview
		startPartIndex={play.partIndex}
		startScreenIndex={play.screenIndex}
		onExit={() => (play = null)}
	/>
{/if}
