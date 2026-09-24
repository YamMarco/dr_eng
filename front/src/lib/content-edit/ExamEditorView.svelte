<script lang="ts">
	// Exam-editing view, mirrors LessonEditorView.svelte: a big central "slide"
	// for the selected screen (SlideStage) with a filmstrip of every screen in
	// every part on the side (SlideFilmstrip) - a part plays the role a lesson
	// node plays there. Detachable — part of src/lib/content-edit/.
	import { examEditModel } from './examEditModel.svelte';
	import SlideFilmstrip from './SlideFilmstrip.svelte';
	import SlideStage from './SlideStage.svelte';
	import type { Issue } from './validate';

	let {
		onBack,
		onPlay,
		issues = []
	}: {
		onBack: () => void;
		onPlay: (quizId: string, partIndex: number, screenIndex: number) => void;
		issues?: Issue[];
	} = $props();

	let quiz = $derived(examEditModel.selectedQuiz);
	let path = $derived(examEditModel.selectedPath);
	let meta = $derived(quiz ? examEditModel.meta[quiz.id] : undefined);
	let metaOpen = $state(false);

	function playFromHere() {
		if (!quiz || !path) return;
		const partIndex = quiz.parts.findIndex((p) => p.id === path.bucket);
		if (partIndex < 0) return;
		onPlay(quiz.id, partIndex, path.index);
	}

	let filmstripWidth = $state(288);
	let splitWrap = $state<HTMLDivElement>();
	let dragging = $state(false);

	function startDrag(e: PointerEvent) {
		e.preventDefault();
		dragging = true;
		const startX = e.clientX;
		const startWidth = filmstripWidth;
		const containerW = splitWrap?.getBoundingClientRect().width ?? 900;

		function onMove(ev: PointerEvent) {
			const next = startWidth - (ev.clientX - startX);
			filmstripWidth = Math.max(180, Math.min(next, containerW - 320));
		}
		function onUp() {
			dragging = false;
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerup', onUp);
		}
		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerup', onUp);
	}
</script>

{#if quiz}
	<div class="flex h-full min-h-0 flex-col">
		<div class="flex flex-wrap items-center gap-2 border-b border-line/70 px-3 py-2 text-sm">
			<button
				type="button"
				class="rounded-lg border border-line bg-canvas px-2.5 py-1.5 text-xs font-bold hover:bg-line/60"
				onclick={onBack}
			>
				← רשימת המבחנים
			</button>
			<strong class="text-sm">{quiz.titleHe}</strong>
			<span class="rounded bg-line/60 px-1.5 text-xs" dir="ltr">{quiz.id}</span>
			<button
				type="button"
				class="rounded-lg border border-line px-2 py-1 text-xs font-bold hover:bg-line/60"
				onclick={() => (metaOpen = !metaOpen)}
			>
				⚙️ {metaOpen ? 'סגירת פרטים' : 'פרטי המבחן'}
			</button>
			<span class="flex-1"></span>
			<button
				type="button"
				class="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-40"
				disabled={!path}
				title={path ? 'נסיון מהמסך הנבחר' : 'בחרו קודם מסך'}
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
						value={quiz.titleHe}
						oninput={(e) => examEditModel.setExamMeta(quiz.id, { titleHe: e.currentTarget.value })}
					/>
				</label>
				<label class="flex flex-col gap-0.5">
					<span class="text-xs text-muted">תיאור (עברית)</span>
					<input
						class="fld"
						value={quiz.descriptionHe ?? ''}
						oninput={(e) =>
							examEditModel.setExamMeta(quiz.id, { descriptionHe: e.currentTarget.value })}
					/>
				</label>
				<label class="flex flex-col gap-0.5">
					<span class="text-xs text-muted">מזהה</span>
					<input class="fld opacity-60" dir="ltr" value={quiz.id} readonly />
				</label>
				<label class="flex flex-col gap-0.5">
					<span class="text-xs text-muted">סוג</span>
					<select
						class="fld"
						value={meta?.kind ?? 'assorted'}
						onchange={(e) =>
							examEditModel.setExamKind(quiz.id, e.currentTarget.value as 'assorted' | 'ministry')}
					>
						<option value="assorted">מבחן מגוון</option>
						<option value="ministry">מבחן משרד החינוך</option>
					</select>
				</label>
				{#if meta?.kind === 'ministry'}
					<label class="flex flex-col gap-0.5">
						<span class="text-xs text-muted">שנה</span>
						<input
							type="number"
							class="fld"
							value={meta.year ?? new Date().getFullYear()}
							oninput={(e) =>
								examEditModel.setExamKind(quiz.id, 'ministry', e.currentTarget.valueAsNumber)}
						/>
					</label>
				{/if}
				<label class="flex flex-col gap-0.5">
					<span class="text-xs text-muted">משך (דקות, ריק = בלי טיימר)</span>
					<input
						type="number"
						class="fld"
						value={quiz.options.durationMinutes ?? ''}
						oninput={(e) =>
							examEditModel.setExamOptions(quiz.id, {
								durationMinutes: e.currentTarget.value ? e.currentTarget.valueAsNumber : undefined
							})}
					/>
				</label>
				<label class="flex flex-col gap-0.5">
					<span class="text-xs text-muted">סף מעבר (%)</span>
					<input
						type="number"
						step="5"
						min="0"
						max="100"
						class="fld"
						value={Math.round((quiz.options.passThreshold ?? 0.6) * 100)}
						oninput={(e) =>
							examEditModel.setExamOptions(quiz.id, {
								passThreshold: e.currentTarget.valueAsNumber / 100
							})}
					/>
				</label>
				<label class="flex items-center gap-2 pt-4">
					<input
						type="checkbox"
						checked={quiz.options.navigatorStyle === 'dots'}
						onchange={(e) =>
							examEditModel.setExamOptions(quiz.id, {
								navigatorStyle: e.currentTarget.checked ? 'dots' : 'numbers'
							})}
					/>
					<span class="text-xs text-muted">ניווט כנקודות (במקום מספרים)</span>
				</label>
			</div>
		{/if}

		<div class="flex min-h-0 flex-1" bind:this={splitWrap}>
			<div class="shrink-0 overflow-hidden" style="width: {filmstripWidth}px">
				<SlideFilmstrip
					model={examEditModel}
					nodeId={quiz.id}
					{issues}
					onSelect={() => {}}
					width={filmstripWidth}
				/>
			</div>
			<div
				role="separator"
				aria-orientation="vertical"
				aria-label="גרירה לשינוי הרוחב בין רשימת המסכים לעריכה"
				title="גררו לשינוי הרוחב"
				class="w-1.5 shrink-0 cursor-col-resize bg-line/50 transition hover:bg-brand/60 {dragging
					? 'bg-brand'
					: ''}"
				onpointerdown={startDrag}
			></div>
			<div class="min-h-0 flex-1">
				<SlideStage model={examEditModel} nodeId={quiz.id} {path} />
			</div>
		</div>
	</div>
{:else}
	<p class="p-6 text-center text-sm text-muted">בחרו מבחן מהרשימה.</p>
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
