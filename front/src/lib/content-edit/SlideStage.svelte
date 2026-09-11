<script lang="ts">
	// The big central editor (PowerPoint's "current slide" pane): the selected
	// screen rendered large and directly editable, with every control for it —
	// type, structural fields, delete — in this one place. No popup, no
	// separate panel. Detachable — part of src/lib/content-edit/.
	import { editModel } from './editModel.svelte';
	import { SCREEN_TYPE_GROUPS } from './screenSkeletons';
	import { typeHe } from './screenTypeNames';
	import {
		formatBold,
		formatItalic,
		formatStrike,
		formatCode,
		formatLink
	} from './activeField.svelte';
	import EditableScreen from './EditableScreen.svelte';
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

	let {
		nodeId,
		path
	}: {
		nodeId: string;
		path: ScreenPath | null;
	} = $props();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screen = $derived.by<any>(() => {
		if (!path) return null;
		const n = editModel.node(nodeId);
		if (!n) return null;
		const list =
			path.bucket === 'preface' ? n.content.preface : n.content.rounds[path.bucket]?.screens;
		return list?.[path.index] ?? null;
	});

	// Any in-place field mutation flips dirty (skip the initial run per screen).
	let sig = $derived(screen ? JSON.stringify(screen) : '');
	let lastSig = '';
	$effect(() => {
		if (sig && sig !== lastSig) {
			if (lastSig !== '') editModel.touch();
			lastSig = sig;
		}
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
		if (!path) return;
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

{#if !path || !screen}
	<div class="flex h-full items-center justify-center p-10 text-center text-sm text-muted">
		בחרו מסך מהרשימה מימין, או הוסיפו מסך חדש כדי להתחיל לערוך.
	</div>
{:else}
	<div class="flex h-full min-h-0 flex-col">
		<div class="flex flex-wrap items-center gap-2 border-b border-line/70 bg-surface/60 px-4 py-2">
			<!-- One shared formatting toolbar for every text field on this screen
			     (whichever field is focused). mousedown preventDefault keeps that
			     field's focus/selection alive through the click, so execCommand
			     still lands on it. -->
			<div
				class="flex overflow-hidden rounded-lg border border-line"
				role="toolbar"
				aria-label="עיצוב טקסט"
			>
				<button
					type="button"
					class="px-2 py-1 text-xs font-bold hover:bg-line/60"
					title="הדגשה"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatBold}>B</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs italic hover:bg-line/60"
					title="נטוי"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatItalic}>I</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs line-through hover:bg-line/60"
					title="קו חוצה"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatStrike}>S</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 font-mono text-xs hover:bg-line/60"
					title="קוד"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatCode}>{'<>'}</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs hover:bg-line/60"
					title="קישור"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatLink}>🔗</button
				>
			</div>
			<span class="h-4 w-px bg-line"></span>
			<span class="text-xs font-bold text-muted">סוג המסך:</span>
			<select
				class="rounded-lg border-2 border-brand bg-canvas px-2 py-1 text-xs font-bold"
				value={screen.type}
				onchange={(e) =>
					path &&
					editModel.setScreenType(nodeId, path, e.currentTarget.value as LessonScreen['type'])}
			>
				{#each SCREEN_TYPE_GROUPS as g (g.label)}
					<optgroup label={g.label}>
						{#each g.types as t (t)}<option value={t}>{typeHe(t)}</option>{/each}
					</optgroup>
				{/each}
			</select>
			<button
				type="button"
				class="rounded border border-line px-1.5 py-0.5 text-[10px] font-bold text-muted hover:bg-line/60"
				onclick={openRaw}
			>
				JSON
			</button>
			<span class="flex-1"></span>
			<button
				type="button"
				class="rounded-lg px-2 py-1 text-xs font-bold text-rose-600 hover:bg-rose-50"
				onclick={() => {
					if (path && confirm('למחוק את המסך?')) editModel.deleteScreen(nodeId, path);
				}}
			>
				🗑 מחיקת המסך
			</button>
		</div>

		<div class="min-h-0 flex-1 overflow-y-auto">
			<div class="mx-auto flex max-w-2xl flex-col items-center gap-6 p-6">
				<!-- the "slide": a fixed phone-sized frame, same box every time.
				     Prose is click-to-type, styled like the player. Content that
				     doesn't fit scrolls inside the frame instead of growing it. -->
				<div
					class="w-full max-w-lg shrink-0 overflow-hidden rounded-2xl border-2 border-line bg-canvas shadow-md"
				>
					<div class="h-[min(68vh,700px)] overflow-y-auto p-6">
						<EditableScreen {nodeId} {path} />
					</div>
				</div>

				{#if rawOpen}
					<div class="rounded-2xl border-2 border-line bg-surface p-4">
						<p class="mb-2 text-xs font-bold text-muted">JSON מתקדם</p>
						<textarea
							bind:value={raw}
							rows="10"
							dir="ltr"
							spellcheck="false"
							class="w-full rounded-xl border-2 border-line bg-canvas p-2 font-mono text-xs"
						></textarea>
						{#if rawErr}<p class="mt-1 text-xs text-danger" dir="ltr">{rawErr}</p>{/if}
						<div class="mt-2 flex gap-2">
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
					</div>
				{:else if screen.type === 'mcq'}
					<div class="rounded-2xl border-2 border-line bg-surface p-4">
						<p class="mb-2 text-xs font-bold text-muted">התשובה הנכונה</p>
						<OptionsEditor
							bind:options={screen.options}
							bind:correctIndex={screen.correctIndex}
							name={`c-${String(path.bucket)}-${path.index}`}
						/>
					</div>
				{:else if screen.type === 'mark-word'}
					<div class="rounded-2xl border-2 border-line bg-surface p-4">
						<p class="mb-2 text-xs font-bold text-muted">איזו מילה נכונה?</p>
						<TokenPicker
							text={screen.sentence}
							splitPattern={/ /}
							selected={[screen.correctWordIndex]}
							onToggle={(i) => (screen.correctWordIndex = i)}
						/>
					</div>
				{:else if screen.type === 'mark-all'}
					<div class="space-y-3 rounded-2xl border-2 border-line bg-surface p-4">
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
						<p class="text-xs text-muted">
							גררו לבחירת ביטוי, ואז שייכו. לחיצה על מילה מסומנת מבטלת.
						</p>
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
					</div>
				{:else if screen.type === 'timed-passage'}
					<div class="space-y-3 rounded-2xl border-2 border-line bg-surface p-4">
						<label class="flex items-center gap-2 text-xs text-muted">
							מזהה טיימר
							<input
								bind:value={screen.timerKey}
								dir="ltr"
								class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
							/>
						</label>
						<McqQuestionsEditor bind:questions={screen.questions} />
					</div>
				{:else if screen.type === 'passage-mcq'}
					<div class="rounded-2xl border-2 border-line bg-surface p-4">
						<McqQuestionsEditor bind:questions={screen.questions} />
					</div>
				{:else if screen.type === 'passage-quiz'}
					<div class="rounded-2xl border-2 border-line bg-surface p-4">
						<KeywordQuestionsEditor bind:questions={screen.questions} />
					</div>
				{:else if screen.type === 'timed-reading'}
					<label
						class="flex items-center gap-2 rounded-2xl border-2 border-line bg-surface p-4 text-xs text-muted"
					>
						מזהה טיימר
						<input
							bind:value={screen.timerKey}
							dir="ltr"
							class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
						/>
					</label>
				{:else if screen.type === 'time-result'}
					<label
						class="flex items-center gap-2 rounded-2xl border-2 border-line bg-surface p-4 text-xs text-muted"
					>
						מזהה טיימר
						<input
							bind:value={screen.timerKey}
							dir="ltr"
							class="w-28 rounded-lg border-2 border-line bg-canvas p-1"
						/>
					</label>
				{:else if screen.type === 'time-comparison'}
					<div class="flex flex-wrap gap-4 rounded-2xl border-2 border-line bg-surface p-4">
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
					</div>
				{:else if screen.type === 'writing-task'}
					<div class="space-y-3 rounded-2xl border-2 border-line bg-surface p-4">
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
					</div>
				{:else if screen.type === 'spell-word'}
					<div class="flex gap-4 rounded-2xl border-2 border-line bg-surface p-4 text-sm">
						<label class="flex items-center gap-1.5">
							<input
								type="radio"
								name={`m-${String(path.bucket)}-${path.index}`}
								checked={screen.mode === 'copy'}
								onchange={() => (screen.mode = 'copy')}
							/>
							העתקה (המילה מוצגת)
						</label>
						<label class="flex items-center gap-1.5">
							<input
								type="radio"
								name={`m-${String(path.bucket)}-${path.index}`}
								checked={screen.mode === 'listen'}
								onchange={() => (screen.mode = 'listen')}
							/>
							הכתבה (לפי שמיעה)
						</label>
					</div>
				{:else if screen.type === 'word-card'}
					<label
						class="flex flex-col gap-1 rounded-2xl border-2 border-line bg-surface p-4 text-xs text-muted"
					>
						תיאור תמונה (אופציונלי)
						<input
							bind:value={screen.imageAlt}
							dir="auto"
							class="rounded-lg border-2 border-line bg-canvas p-1"
						/>
					</label>
				{/if}
			</div>
		</div>
	</div>
{/if}
