<script lang="ts">
	import { untrack } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import MarkdownInput from './MarkdownInput.svelte';
	import { SCREEN_TYPE_GROUPS, blankScreen } from './screenSkeletons';
	import { formatScreenLocation } from './screenPath';
	import { copyText } from './clipboard';
	import type { LessonScreen } from '$lib/lesson-screens/types';

	let {
		screen,
		lessonId,
		bucket,
		index,
		onSave,
		onDelete
	}: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		screen: any;
		/** Shown as this screen's location; purely informational (copy for authoring notes/URLs). */
		lessonId?: string;
		bucket: 'preface' | number;
		index: number;
		onSave: (screen: LessonScreen) => Promise<void>;
		onDelete: () => Promise<void>;
	} = $props();

	let location = $derived(formatScreenLocation(lessonId, { bucket, index }));
	let locationCopied = $state(false);

	async function copyLocation() {
		const ok = await copyText(location);
		if (!ok) return;
		locationCopied = true;
		setTimeout(() => (locationCopied = false), 1200);
	}

	// A plain, mutable clone — never touch the live content object. The parent
	// remounts every form on any structural change, so `screen` is fixed for
	// this instance's lifetime; only its initial value matters here.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let draft = $state<any>(untrack(() => JSON.parse(JSON.stringify(screen))));
	// Raw JSON is the fallback editor for every type without a nice form.
	let raw = $state(untrack(() => JSON.stringify(screen, null, 2)));
	let jsonError = $state('');

	let status = $state<'idle' | 'saving' | 'saved' | 'error'>('idle');
	let errorMsg = $state('');

	let hasForm = $derived(
		draft.type === 'preface' || draft.type === 'mcq' || draft.type === 'steps'
	);

	function changeType(type: LessonScreen['type']) {
		draft = blankScreen(type);
		raw = JSON.stringify(draft, null, 2);
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

	// styling hint under the raw-JSON editor for prose types that still use it
	let mdHint = $derived(draft.type === 'summary' || draft.type === 'question-preview');

	async function save() {
		let payload: LessonScreen = draft;
		if (!hasForm) {
			try {
				payload = JSON.parse(raw);
				jsonError = '';
			} catch (e) {
				jsonError = e instanceof Error ? e.message : String(e);
				return;
			}
		}

		status = 'saving';
		errorMsg = '';
		try {
			await onSave(payload);
			status = 'saved';
			setTimeout(() => (status = 'idle'), 2500);
		} catch (e) {
			status = 'error';
			errorMsg = e instanceof Error ? e.message : String(e);
		}
	}

	async function remove() {
		if (!confirm(`למחוק את המסך "${draft.type}" [${index}]?`)) return;
		status = 'saving';
		try {
			await onDelete();
		} catch (e) {
			status = 'error';
			errorMsg = e instanceof Error ? e.message : String(e);
		}
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
			{#if status === 'saved'}
				<span class="text-xs font-bold text-brand">נשמר ✓</span>
			{:else if status === 'error'}
				<span class="text-xs font-bold text-danger">שגיאה</span>
			{/if}
			<button type="button" onclick={remove} class="px-1 text-xs font-semibold text-danger">מחק</button>
		</div>
	</div>

	{#if draft.type === 'preface'}
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
			class="mb-2 w-full rounded-xl border-2 border-line bg-canvas p-2 text-sm"
		></textarea>
		{#each draft.options as _option, oi (oi)}
			<div class="mb-1 flex items-center gap-2">
				<input
					type="radio"
					name={`correct-${String(bucket)}-${index}`}
					checked={draft.correctIndex === oi}
					onchange={() => (draft.correctIndex = oi)}
					aria-label="תשובה נכונה"
				/>
				<input
					bind:value={draft.options[oi]}
					dir="auto"
					class="w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm"
				/>
				<button
					type="button"
					class="px-1 text-xs text-danger"
					onclick={() => {
						draft.options.splice(oi, 1);
						if (draft.correctIndex >= draft.options.length) draft.correctIndex = 0;
					}}
				>
					✕
				</button>
			</div>
		{/each}
		<button
			type="button"
			class="text-xs font-semibold text-brand"
			onclick={() => draft.options.push('')}
		>
			+ הוסף אופציה
		</button>
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
		<button
			type="button"
			class="text-xs font-semibold text-brand"
			onclick={() => draft.steps.push('')}
		>
			+ הוסף שלב
		</button>
	{:else}
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
		{#if mdHint}
			<p class="mt-2 text-xs text-muted" dir="ltr">
				text fields support **bold** · *italic* · `code` · [text](url)
			</p>
		{/if}
	{/if}

	<div class="mt-3">
		<Button onclick={save} disabled={status === 'saving'}>
			{status === 'saving' ? 'שומר…' : 'שמור מסך'}
		</Button>
	</div>
	{#if status === 'error'}
		<p class="mt-1 text-xs text-danger" dir="ltr">{errorMsg}</p>
	{/if}
</div>
