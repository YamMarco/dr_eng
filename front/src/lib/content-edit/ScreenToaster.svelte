<script lang="ts">
	// Bottom sheet for the screen the carousel has selected: type selector +
	// the structural bits that can't be typed onto the canvas (correct answer,
	// token marks, question lists, numbers, modes, timer keys). Prose lives on
	// the canvas (EditableScreen). Detachable — part of src/lib/content-edit/.
	import { editModel } from './editModel.svelte';
	import { SCREEN_TYPE_GROUPS } from './screenSkeletons';
	import OptionsEditor from './fields/OptionsEditor.svelte';
	import TokenPicker from './fields/TokenPicker.svelte';
	import TextMarker from './fields/TextMarker.svelte';
	import McqQuestionsEditor from './fields/McqQuestionsEditor.svelte';
	import KeywordQuestionsEditor from './fields/KeywordQuestionsEditor.svelte';
	import StringListEditor from './fields/StringListEditor.svelte';
	import {
		MARK_ALL_PALETTE,
		markAllSwatch,
		type MarkAllSwatch
	} from '$lib/lesson-screens/markAllColors';
	import type { ScreenPath } from './screenPath';
	import type { LessonScreen } from '$lib/lesson-screens/types';

	let { nodeId, path, onClose }: { nodeId: string; path: ScreenPath; onClose: () => void } =
		$props();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screen = $derived.by<any>(() => {
		const n = editModel.node(nodeId);
		if (!n) return null;
		const list =
			path.bucket === 'preface' ? n.content.preface : n.content.rounds[path.bucket]?.screens;
		return list?.[path.index] ?? null;
	});

	// Any in-place field mutation flips dirty (skip the initial run).
	let sig = $derived(screen ? JSON.stringify(screen) : '');
	let first = true;
	$effect(() => {
		void sig;
		if (first) {
			first = false;
			return;
		}
		editModel.touch();
	});

	let raw = $state('');
	let rawOpen = $state(false);
	let rawErr = $state('');
	function openRaw() {
		raw = JSON.stringify(screen, null, 2);
		rawErr = '';
		rawOpen = true;
	}
	function applyRaw() {
		try {
			editModel.applyScreen(nodeId, path, JSON.parse(raw) as LessonScreen);
			rawOpen = false;
		} catch (e) {
			rawErr = e instanceof Error ? e.message : String(e);
		}
	}

	// ---- mark-all category marking ----
	let pending = $state<number[]>([]);
	let markColors = $derived.by(() => {
		const m: Record<number, MarkAllSwatch> = {};
		if (screen?.type !== 'mark-all') return m;
		for (const i of screen.correctIndices ?? []) m[i] = markAllSwatch(undefined);
		for (const c of screen.categories ?? [])
			for (const i of c.indices) m[i] = markAllSwatch(c.color);
		return m;
	});
	function markPending(cat: string | null) {
		for (const i of pending) {
			screen.correctIndices = (screen.correctIndices ?? []).filter((x: number) => x !== i);
			for (const c of screen.categories ?? []) c.indices = c.indices.filter((x: number) => x !== i);
			if (cat === null) screen.correctIndices.push(i);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			else screen.categories.find((c: any) => c.name === cat)?.indices.push(i);
		}
		screen.correctIndices.sort((a: number, b: number) => a - b);
		for (const c of screen.categories ?? []) c.indices.sort((a: number, b: number) => a - b);
		pending = [];
		window.getSelection()?.removeAllRanges();
	}
	function unmark(i: number) {
		screen.correctIndices = (screen.correctIndices ?? []).filter((x: number) => x !== i);
		for (const c of screen.categories ?? []) c.indices = c.indices.filter((x: number) => x !== i);
	}
	function addCategory() {
		const name = prompt('שם קטגוריה (שמות / שלילה / מספרים …)')?.trim();
		if (!name) return;
		screen.categories ??= [];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if (screen.categories.some((c: any) => c.name === name)) return;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const used = new Set(screen.categories.map((c: any) => c.color));
		const color = (MARK_ALL_PALETTE.find((p) => !used.has(p.key)) ?? MARK_ALL_PALETTE[0]).key;
		screen.categories.push({ name, color, indices: [] });
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function delCategory(cat: any) {
		screen.correctIndices.push(...cat.indices);
		screen.correctIndices = [...new Set<number>(screen.correctIndices)].sort((a, b) => a - b);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		screen.categories = screen.categories.filter((c: any) => c !== cat);
		if (screen.categories.length === 0) delete screen.categories;
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function cycleColor(cat: any) {
		const idx = MARK_ALL_PALETTE.findIndex((p) => p.key === cat.color);
		cat.color = MARK_ALL_PALETTE[(idx + 1) % MARK_ALL_PALETTE.length].key;
	}
</script>

{#if screen}
	<div
		class="pointer-events-auto max-h-[46vh] overflow-y-auto rounded-t-3xl border-t border-line bg-canvas shadow-[0_-8px_24px_rgb(0_0_0/0.12)]"
	>
		<div class="sticky top-0 flex items-center gap-2 border-b border-line/70 bg-canvas px-3 py-2">
			<select
				class="rounded-lg border-2 border-line bg-surface px-2 py-1 text-xs font-bold"
				dir="ltr"
				value={screen.type}
				onchange={(e) =>
					editModel.setScreenType(nodeId, path, e.currentTarget.value as LessonScreen['type'])}
			>
				{#each SCREEN_TYPE_GROUPS as g (g.label)}
					<optgroup label={g.label}>
						{#each g.types as t (t)}<option value={t}>{t}</option>{/each}
					</optgroup>
				{/each}
			</select>
			<button type="button" class="text-xs text-muted hover:text-ink" onclick={openRaw}>JSON</button
			>
			<span class="flex-1"></span>
			<button
				type="button"
				class="text-xs font-semibold text-danger"
				onclick={() => {
					if (confirm('למחוק את המסך?')) {
						editModel.deleteScreen(nodeId, path);
						onClose();
					}
				}}
			>
				מחק מסך
			</button>
			<button type="button" class="rounded-full px-2 text-muted hover:bg-line/60" onclick={onClose}
				>▼</button
			>
		</div>

		<div class="space-y-3 p-3 text-sm">
			{#if rawOpen}
				<textarea
					bind:value={raw}
					rows="10"
					dir="ltr"
					spellcheck="false"
					class="w-full rounded-xl border-2 border-line bg-canvas p-2 font-mono text-xs"></textarea>
				{#if rawErr}<p class="text-xs text-danger" dir="ltr">{rawErr}</p>{/if}
				<div class="flex gap-2">
					<button
						type="button"
						class="rounded-lg bg-brand px-3 py-1 text-xs font-bold text-white"
						onclick={applyRaw}
					>
						החל
					</button>
					<button type="button" class="text-xs text-muted" onclick={() => (rawOpen = false)}
						>ביטול</button
					>
				</div>
			{:else if screen.type === 'mcq'}
				<p class="text-xs font-bold text-muted">התשובה הנכונה</p>
				<OptionsEditor
					bind:options={screen.options}
					bind:correctIndex={screen.correctIndex}
					name={`c-${String(path.bucket)}-${path.index}`}
				/>
			{:else if screen.type === 'mark-word'}
				<p class="text-xs font-bold text-muted">איזו מילה נכונה?</p>
				<TokenPicker
					text={screen.sentence}
					splitPattern={/ /}
					selected={[screen.correctWordIndex]}
					onToggle={(i) => (screen.correctWordIndex = i)}
				/>
			{:else if screen.type === 'mark-all'}
				<div class="flex flex-wrap items-center gap-1.5">
					<span class="text-xs font-bold text-muted">קטגוריות:</span>
					{#each screen.categories ?? [] as cat (cat)}
						{@const sw = markAllSwatch(cat.color)}
						<span
							class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold"
							style="background:{sw.bg};color:{sw.fg}"
						>
							<button type="button" onclick={() => cycleColor(cat)}>🎨</button>
							<span>{cat.name}</span>
							<button type="button" onclick={() => delCategory(cat)}>✕</button>
						</span>
					{/each}
					<button type="button" class="text-xs font-semibold text-brand" onclick={addCategory}>
						+ קטגוריה
					</button>
				</div>
				<p class="text-xs text-muted">גררו לבחירת ביטוי, ואז שייכו. לחיצה על מילה מסומנת מבטלת.</p>
				<TextMarker
					text={screen.text}
					dir={screen.dir ?? 'auto'}
					colors={markColors}
					onSelect={(t) => (pending = t)}
					onTokenClick={unmark}
				/>
				{#if pending.length}
					<div class="flex flex-wrap items-center gap-1.5 rounded-xl bg-brand-soft/50 p-2">
						<span class="text-xs font-bold text-muted">סמן כ־</span>
						{#each screen.categories ?? [] as cat (cat)}
							{@const sw = markAllSwatch(cat.color)}
							<button
								type="button"
								class="rounded-full px-2 py-0.5 text-xs font-bold"
								style="background:{sw.bg};color:{sw.fg}"
								onclick={() => markPending(cat.name)}
							>
								{cat.name}
							</button>
						{/each}
						<button
							type="button"
							class="rounded-full bg-surface px-2 py-0.5 text-xs font-bold ring-1 ring-line"
							onclick={() => markPending(null)}
						>
							{screen.categories?.length ? 'ללא קטגוריה' : 'סמן'}
						</button>
						<button type="button" class="px-2 text-xs text-muted" onclick={() => (pending = [])}
							>בטל</button
						>
					</div>
				{/if}
				<label class="flex items-center gap-2 text-xs text-muted">
					מזהה טיימר (אופציונלי)
					<input
						bind:value={screen.timerKey}
						dir="ltr"
						class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
					/>
				</label>
			{:else if screen.type === 'timed-passage'}
				<label class="flex items-center gap-2 text-xs text-muted">
					מזהה טיימר
					<input
						bind:value={screen.timerKey}
						dir="ltr"
						class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
					/>
				</label>
				<McqQuestionsEditor bind:questions={screen.questions} />
			{:else if screen.type === 'passage-mcq'}
				<McqQuestionsEditor bind:questions={screen.questions} />
			{:else if screen.type === 'passage-quiz'}
				<KeywordQuestionsEditor bind:questions={screen.questions} />
			{:else if screen.type === 'timed-reading'}
				<label class="flex items-center gap-2 text-xs text-muted">
					מזהה טיימר
					<input
						bind:value={screen.timerKey}
						dir="ltr"
						class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
					/>
				</label>
			{:else if screen.type === 'time-result'}
				<label class="flex items-center gap-2 text-xs text-muted">
					מזהה טיימר
					<input
						bind:value={screen.timerKey}
						dir="ltr"
						class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
					/>
				</label>
			{:else if screen.type === 'time-comparison'}
				<label class="flex items-center gap-2 text-xs text-muted">
					מזהה א׳
					<input
						bind:value={screen.aKey}
						dir="ltr"
						class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
					/>
				</label>
				<label class="flex items-center gap-2 text-xs text-muted">
					מזהה ב׳
					<input
						bind:value={screen.bKey}
						dir="ltr"
						class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
					/>
				</label>
			{:else if screen.type === 'writing-task'}
				<p class="text-xs font-bold text-muted">בנק מילים</p>
				<StringListEditor bind:items={screen.wordBank} addLabel="+ מילה" dir="ltr" />
				<div class="flex gap-4">
					<label class="flex items-center gap-2 text-xs text-muted">
						מינ׳ משפטים
						<input
							type="number"
							min="1"
							bind:value={screen.minSentences}
							class="w-16 rounded-lg border-2 border-line bg-canvas p-1"
						/>
					</label>
					<label class="flex items-center gap-2 text-xs text-muted">
						מינ׳ מילים מהבנק
						<input
							type="number"
							min="0"
							bind:value={screen.minWordsUsed}
							class="w-16 rounded-lg border-2 border-line bg-canvas p-1"
						/>
					</label>
				</div>
			{:else if screen.type === 'spell-word'}
				<div class="flex gap-4 text-sm">
					<label class="flex items-center gap-1.5">
						<input
							type="radio"
							name={`m-${String(path.bucket)}-${path.index}`}
							checked={screen.mode === 'copy'}
							onchange={() => (screen.mode = 'copy')}
						/>
						העתקה
					</label>
					<label class="flex items-center gap-1.5">
						<input
							type="radio"
							name={`m-${String(path.bucket)}-${path.index}`}
							checked={screen.mode === 'listen'}
							onchange={() => (screen.mode = 'listen')}
						/>
						הכתבה
					</label>
				</div>
			{:else if screen.type === 'word-card'}
				<label class="flex flex-col gap-1 text-xs text-muted">
					תיאור תמונה (אופציונלי)
					<input
						bind:value={screen.imageAlt}
						dir="auto"
						class="rounded-lg border-2 border-line bg-canvas p-1"
					/>
				</label>
			{:else}
				<p class="text-xs text-muted">לסוג המסך הזה אין הגדרות מבניות - הכל נכתב על המסך.</p>
			{/if}
		</div>
	</div>
{/if}
