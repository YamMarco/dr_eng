<script lang="ts">
	import { untrack } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import MarkdownInput from './MarkdownInput.svelte';
	import StringListEditor from './fields/StringListEditor.svelte';
	import OptionsEditor from './fields/OptionsEditor.svelte';
	import TokenPicker from './fields/TokenPicker.svelte';
	import McqQuestionsEditor from './fields/McqQuestionsEditor.svelte';
	import KeywordQuestionsEditor from './fields/KeywordQuestionsEditor.svelte';
	import { SCREEN_TYPE_GROUPS, blankScreen } from './screenSkeletons';
	import { formatScreenLocation } from './screenPath';
	import { copyText } from './clipboard';
	import type { LessonScreen } from '$lib/lesson-screens/types';

	let {
		screen,
		lessonId,
		bucket,
		index,
		onApply,
		onDelete
	}: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		screen: any;
		/** Shown as this screen's location; purely informational (copy for authoring notes/URLs). */
		lessonId?: string;
		bucket: 'preface' | number;
		index: number;
		/** Writes this screen into the shared lesson-wide draft — purely local,
		    no network. The big "save the lesson" button is what actually persists. */
		onApply: (screen: LessonScreen) => void;
		onDelete: () => void;
	} = $props();

	let location = $derived(formatScreenLocation(lessonId, { bucket, index }));
	let locationCopied = $state(false);

	async function copyLocation() {
		const ok = await copyText(location);
		if (!ok) return;
		locationCopied = true;
		setTimeout(() => (locationCopied = false), 1200);
	}

	// A couple of fields are optional in the type but the form always wants a
	// real array to push into.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function normalize(s: any) {
		if (s.type === 'mark-all' && s.wordBank === undefined) s.wordBank = [];
		return s;
	}

	// A plain, mutable clone — never touch the live content object. The parent
	// remounts every form on any structural change, so `screen` is fixed for
	// this instance's lifetime; only its initial value matters here.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let draft = $state<any>(untrack(() => normalize(JSON.parse(JSON.stringify(screen)))));

	let status = $state<'idle' | 'applied' | 'error'>('idle');

	// Every screen type has a real form (below). Raw JSON is only an escape
	// hatch — for a brand-new type this editor hasn't caught up to yet, or
	// for power users who just want to paste JSON directly.
	let rawMode = $state(false);
	let raw = $state('');
	let jsonError = $state('');

	function enterRawMode() {
		raw = JSON.stringify(draft, null, 2);
		jsonError = '';
		rawMode = true;
	}

	function exitRawMode() {
		try {
			draft = normalize(JSON.parse(raw));
			jsonError = '';
			rawMode = false;
		} catch (e) {
			jsonError = e instanceof Error ? e.message : String(e);
		}
	}

	function changeType(type: LessonScreen['type']) {
		draft = normalize(blankScreen(type));
		jsonError = '';
	}

	// --- steps drag-to-reorder ---
	let dragIndex = $state<number | null>(null);
	let dropIndex = $state<number | null>(null);

	function moveStep(from: number, to: number) {
		if (from === to) return;
		const [item] = draft.steps.splice(from, 1);
		draft.steps.splice(to, 0, item);
	}

	function apply() {
		let payload: LessonScreen = draft;
		if (rawMode) {
			try {
				payload = JSON.parse(raw);
				jsonError = '';
			} catch (e) {
				jsonError = e instanceof Error ? e.message : String(e);
				status = 'error';
				return;
			}
			draft = payload;
			rawMode = false;
		}
		onApply(payload);
		status = 'applied';
		setTimeout(() => (status = 'idle'), 2000);
	}

	function remove() {
		if (!confirm(`למחוק את המסך "${draft.type}" [${index}]?`)) return;
		onDelete();
	}
</script>

<div class="mb-3 rounded-2xl bg-surface p-4 ring-1 ring-line/70">
	<div class="mb-1 flex items-center justify-between gap-2">
		<button
			type="button"
			onclick={copyLocation}
			title="העתק מזהה מסך"
			class="truncate text-start font-mono text-sm font-semibold text-muted hover:text-ink"
			dir="ltr"
		>
			{locationCopied ? 'הועתק ✓' : location}
		</button>
	</div>
	<div class="mb-2 flex items-center justify-between gap-2">
		<select
			value={draft.type}
			onchange={(e) => changeType(e.currentTarget.value as LessonScreen['type'])}
			aria-label="סוג מסך"
			class="rounded-lg border-2 border-line bg-canvas px-2 py-1 text-xs font-bold"
			dir="ltr"
		>
			{#each SCREEN_TYPE_GROUPS as g (g.label)}
				<optgroup label={g.label}>
					{#each g.types as t (t)}
						<option value={t}>{t}</option>
					{/each}
				</optgroup>
			{/each}
		</select>
		<div class="flex items-center gap-2">
			{#if status === 'applied'}
				<span class="text-xs font-bold text-brand">✓ עודכן</span>
			{/if}
			<button type="button" onclick={remove} class="px-1 text-xs font-semibold text-danger">מחק</button>
		</div>
	</div>

	{#if rawMode}
		<textarea
			bind:value={raw}
			rows="10"
			dir="ltr"
			spellcheck="false"
			class="w-full rounded-xl border-2 border-line bg-canvas p-3 font-mono text-xs"
		></textarea>
		{#if jsonError}
			<p class="mt-1 text-xs text-danger" dir="ltr">{jsonError}</p>
		{/if}
		<button type="button" class="mt-2 text-xs font-semibold text-brand" onclick={exitRawMode}>
			חזרה לטופס
		</button>
	{:else if draft.type === 'preface'}
		<MarkdownInput bind:value={draft.text} dir={draft.dir ?? 'auto'} minRows={5} />
		<label class="mt-2 flex items-center gap-2 text-xs text-muted">
			כיוון
			<select bind:value={draft.dir} class="rounded-lg border-2 border-line bg-canvas px-2 py-1">
				<option value={undefined}>אוטומטי</option>
				<option value="rtl">rtl</option>
				<option value="ltr">ltr</option>
			</select>
		</label>
	{:else if draft.type === 'mcq'}
		<textarea
			bind:value={draft.prompt}
			rows="2"
			dir="auto"
			placeholder="השאלה"
			class="mb-2 w-full rounded-xl border-2 border-line bg-canvas p-2 text-sm"
		></textarea>
		<OptionsEditor bind:options={draft.options} bind:correctIndex={draft.correctIndex} name={`correct-${String(bucket)}-${index}`} />
	{:else if draft.type === 'steps'}
		{#each draft.steps as _step, si (si)}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="mb-1 flex items-start gap-2 rounded-lg {dropIndex === si && dragIndex !== si
					? 'ring-2 ring-brand'
					: ''} {dragIndex === si ? 'opacity-40' : ''}"
				ondragover={(e) => {
					e.preventDefault();
					dropIndex = si;
				}}
				ondrop={(e) => {
					e.preventDefault();
					if (dragIndex !== null) moveStep(dragIndex, si);
					dragIndex = null;
					dropIndex = null;
				}}
			>
				<button
					type="button"
					draggable="true"
					aria-label="גרור לשינוי סדר"
					class="mt-1 cursor-grab px-1 text-muted select-none active:cursor-grabbing"
					ondragstart={() => (dragIndex = si)}
					ondragend={() => {
						dragIndex = null;
						dropIndex = null;
					}}
				>
					⠿
				</button>
				<span class="mt-2 text-xs font-bold text-muted">{si + 1}.</span>
				<div class="w-full">
					<MarkdownInput bind:value={draft.steps[si]} minRows={2} />
				</div>
				<button
					type="button"
					class="mt-2 px-1 text-xs text-danger"
					onclick={() => draft.steps.splice(si, 1)}
				>
					✕
				</button>
			</div>
		{/each}
		<button type="button" class="text-xs font-semibold text-brand" onclick={() => draft.steps.push('')}>
			+ הוסף שלב
		</button>
	{:else if draft.type === 'summary'}
		<input
			bind:value={draft.title}
			dir="auto"
			placeholder="כותרת"
			class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm font-bold"
		/>
		<StringListEditor bind:items={draft.lines} addLabel="+ הוסף שורה" markdown />
	{:else if draft.type === 'mark-word'}
		<textarea
			bind:value={draft.sentence}
			rows="2"
			dir={draft.dir ?? 'auto'}
			placeholder="המשפט (המילים ייבחרו בלחיצה למטה)"
			class="mb-2 w-full rounded-xl border-2 border-line bg-canvas p-2 text-sm"
		></textarea>
		<label class="mb-2 flex items-center gap-2 text-xs text-muted">
			כיוון
			<select bind:value={draft.dir} class="rounded-lg border-2 border-line bg-canvas px-2 py-1">
				<option value={undefined}>אוטומטי</option>
				<option value="rtl">rtl</option>
				<option value="ltr">ltr</option>
			</select>
		</label>
		<p class="mb-1 text-xs font-bold text-muted">איזו מילה נכונה?</p>
		<TokenPicker
			text={draft.sentence}
			splitPattern={/ /}
			selected={[draft.correctWordIndex]}
			onToggle={(i) => (draft.correctWordIndex = i)}
		/>
	{:else if draft.type === 'mark-all'}
		<input
			bind:value={draft.instruction}
			dir="auto"
			placeholder="הוראה לתלמיד"
			class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm"
		/>
		<textarea
			bind:value={draft.text}
			rows="3"
			dir={draft.dir ?? 'auto'}
			placeholder="הטקסט לסימון"
			class="mb-2 w-full rounded-xl border-2 border-line bg-canvas p-2 text-sm"
		></textarea>
		<label class="mb-2 flex items-center gap-2 text-xs text-muted">
			כיוון
			<select bind:value={draft.dir} class="rounded-lg border-2 border-line bg-canvas px-2 py-1">
				<option value={undefined}>אוטומטי</option>
				<option value="rtl">rtl</option>
				<option value="ltr">ltr</option>
			</select>
		</label>
		<p class="mb-1 text-xs font-bold text-muted">אילו מילים נכונות? (אפשר כמה)</p>
		<TokenPicker
			text={draft.text}
			splitPattern={/\s+/}
			selected={draft.correctIndices}
			onToggle={(i) => {
				const set = new Set<number>(draft.correctIndices);
				if (set.has(i)) set.delete(i);
				else set.add(i);
				draft.correctIndices = [...set].sort((a: number, b: number) => a - b);
			}}
		/>
		<p class="mt-3 mb-1 text-xs font-bold text-muted">בנק מילים לרמז (אופציונלי)</p>
		<StringListEditor bind:items={draft.wordBank} addLabel="+ הוסף מילה" dir="ltr" />
		<label class="mt-2 flex items-center gap-2 text-xs text-muted">
			מזהה טיימר (אופציונלי — להצגה במסך תוצאת זמן מאוחר יותר)
			<input
				bind:value={draft.timerKey}
				dir="ltr"
				class="w-28 rounded-lg border-2 border-line bg-canvas p-1 text-sm"
			/>
		</label>
	{:else if draft.type === 'timed-reading'}
		<input
			bind:value={draft.label}
			dir="auto"
			placeholder="כותרת הקטע"
			class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm font-bold"
		/>
		<MarkdownInput bind:value={draft.text} dir="ltr" minRows={6} />
		<label class="mt-2 flex items-center gap-2 text-xs text-muted">
			מזהה טיימר — חייב להתאים למסך time-result / time-comparison שמציג את הזמן
			<input
				bind:value={draft.timerKey}
				dir="ltr"
				class="w-28 rounded-lg border-2 border-line bg-canvas p-1 text-sm"
			/>
		</label>
	{:else if draft.type === 'question-preview'}
		<MarkdownInput bind:value={draft.intro} dir="auto" minRows={2} />
		<p class="mt-3 mb-1 text-xs font-bold text-muted">השאלות שיוצגו</p>
		<StringListEditor bind:items={draft.prompts} addLabel="+ הוסף שאלה" />
	{:else if draft.type === 'time-result'}
		<input
			bind:value={draft.label}
			dir="auto"
			placeholder="תווית (למשל: הזמן שלך)"
			class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm"
		/>
		<label class="flex items-center gap-2 text-xs text-muted">
			מזהה טיימר — כמו במסך התזמון שמדד את הזמן
			<input
				bind:value={draft.timerKey}
				dir="ltr"
				class="w-28 rounded-lg border-2 border-line bg-canvas p-1 text-sm"
			/>
		</label>
	{:else if draft.type === 'time-comparison'}
		<div class="mb-2 rounded-xl border border-line/70 p-2">
			<p class="mb-1 text-xs font-bold text-muted">זמן א׳</p>
			<input bind:value={draft.aLabel} dir="auto" placeholder="תווית" class="mb-1 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm" />
			<input bind:value={draft.aKey} dir="ltr" placeholder="מזהה טיימר" class="w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm" />
		</div>
		<div class="mb-2 rounded-xl border border-line/70 p-2">
			<p class="mb-1 text-xs font-bold text-muted">זמן ב׳</p>
			<input bind:value={draft.bLabel} dir="auto" placeholder="תווית" class="mb-1 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm" />
			<input bind:value={draft.bKey} dir="ltr" placeholder="מזהה טיימר" class="w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm" />
		</div>
		<input bind:value={draft.fasterMessage} dir="auto" placeholder="הודעה כשיש מנצח" class="mb-1 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm" />
		<input bind:value={draft.tieMessage} dir="auto" placeholder="הודעה בתיקו" class="w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm" />
	{:else if draft.type === 'timed-passage'}
		<input
			bind:value={draft.label}
			dir="auto"
			placeholder="כותרת הקטע"
			class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm font-bold"
		/>
		<MarkdownInput bind:value={draft.text} dir="ltr" minRows={6} />
		<label class="mt-2 mb-3 flex items-center gap-2 text-xs text-muted">
			מזהה טיימר
			<input bind:value={draft.timerKey} dir="ltr" class="w-28 rounded-lg border-2 border-line bg-canvas p-1 text-sm" />
		</label>
		<McqQuestionsEditor bind:questions={draft.questions} />
	{:else if draft.type === 'passage-quiz'}
		<MarkdownInput bind:value={draft.text} dir="ltr" minRows={6} />
		<div class="mt-3">
			<KeywordQuestionsEditor bind:questions={draft.questions} />
		</div>
	{:else if draft.type === 'passage-mcq'}
		<MarkdownInput bind:value={draft.text} dir="ltr" minRows={6} />
		<div class="mt-3">
			<McqQuestionsEditor bind:questions={draft.questions} />
		</div>
	{:else if draft.type === 'writing-task'}
		<MarkdownInput bind:value={draft.prompt} dir="auto" minRows={3} />
		<p class="mt-3 mb-1 text-xs font-bold text-muted">בנק מילים לשימוש</p>
		<StringListEditor bind:items={draft.wordBank} addLabel="+ הוסף מילה" dir="ltr" />
		<div class="mt-3 flex gap-4">
			<label class="flex items-center gap-2 text-xs text-muted">
				מינימום משפטים
				<input
					type="number"
					min="1"
					bind:value={draft.minSentences}
					class="w-16 rounded-lg border-2 border-line bg-canvas p-1 text-sm"
				/>
			</label>
			<label class="flex items-center gap-2 text-xs text-muted">
				מינימום מילים מהבנק
				<input
					type="number"
					min="0"
					bind:value={draft.minWordsUsed}
					class="w-16 rounded-lg border-2 border-line bg-canvas p-1 text-sm"
				/>
			</label>
		</div>
	{:else if draft.type === 'word-card'}
		<input bind:value={draft.word} dir="ltr" placeholder="המילה" class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-lg font-bold" />
		<input bind:value={draft.translationHe} dir="rtl" placeholder="תרגום (אופציונלי)" class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm" />
		<input bind:value={draft.imageAlt} dir="auto" placeholder="תיאור תמונה (אופציונלי, לעתיד)" class="w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm" />
	{:else if draft.type === 'spell-word'}
		<input bind:value={draft.word} dir="ltr" placeholder="המילה" class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-lg font-bold" />
		<div class="flex gap-4 text-sm">
			<label class="flex items-center gap-1.5">
				<input type="radio" name={`mode-${String(bucket)}-${index}`} checked={draft.mode === 'copy'} onchange={() => (draft.mode = 'copy')} />
				העתקה (המילה מוצגת)
			</label>
			<label class="flex items-center gap-1.5">
				<input type="radio" name={`mode-${String(bucket)}-${index}`} checked={draft.mode === 'listen'} onchange={() => (draft.mode = 'listen')} />
				הכתבה (לפי שמיעה)
			</label>
		</div>
	{/if}

	{#if !rawMode}
		<div class="mt-3 flex items-center justify-between">
			<Button onclick={apply}>עדכן טיוטה</Button>
			<button type="button" class="text-xs text-muted hover:text-ink" onclick={enterRawMode}>
				JSON מתקדם
			</button>
		</div>
	{:else}
		<div class="mt-3">
			<Button onclick={apply}>עדכן טיוטה</Button>
		</div>
	{/if}
</div>
