<script lang="ts">
	import { untrack } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import type { LessonNode } from '$lib/content';

	let {
		lesson,
		bucket,
		index,
		screen
	}: {
		lesson: LessonNode;
		bucket: 'preface' | number;
		index: number;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		screen: any;
	} = $props();

	// A plain, mutable clone — never touch the live content module object.
	// The parent keys each form by (bucket, index), so `screen` is fixed for
	// this instance's lifetime; only its initial value matters here.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let draft = $state<any>(untrack(() => JSON.parse(JSON.stringify(screen))));
	// Raw JSON is the fallback editor for every type without a nice form.
	let raw = $state(untrack(() => JSON.stringify(screen, null, 2)));
	let jsonError = $state('');

	let status = $state<'idle' | 'saving' | 'saved' | 'error'>('idle');
	let errorMsg = $state('');

	let hasForm = $derived(draft.type === 'preface' || draft.type === 'mcq');

	async function save() {
		let payload: unknown = draft;
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
			const res = await fetch('/api/content-edit', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ lessonId: lesson.id, bucket, index, screen: payload })
			});
			if (!res.ok) throw new Error(await res.text());
			status = 'saved';
			setTimeout(() => (status = 'idle'), 2500);
		} catch (e) {
			status = 'error';
			errorMsg = e instanceof Error ? e.message : String(e);
		}
	}
</script>

<div class="mb-3 rounded-2xl bg-surface p-4 ring-1 ring-line/70">
	<div class="mb-2 flex items-center justify-between gap-2">
		<span class="text-xs font-bold text-muted" dir="ltr">{draft.type} · [{index}]</span>
		{#if status === 'saved'}
			<span class="text-xs font-bold text-brand">נשמר ✓</span>
		{:else if status === 'error'}
			<span class="text-xs font-bold text-danger">שגיאה</span>
		{/if}
	</div>

	{#if draft.type === 'preface'}
		<textarea
			bind:value={draft.text}
			rows="6"
			dir="auto"
			class="w-full rounded-xl border-2 border-line bg-canvas p-3 text-sm leading-relaxed"
		></textarea>
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
		<button type="button" class="text-xs font-semibold text-brand" onclick={() => draft.options.push('')}>
			+ הוסף אופציה
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
