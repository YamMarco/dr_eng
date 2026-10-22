<script lang="ts">
	import { slide } from 'svelte/transition';
	import AppBar from '$lib/components/AppBar.svelte';
	import { eGlossAr } from '$lib/content/e/words.ar';
	import { saveWordGlossesAr, saveWords } from '$lib/content-edit/api';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	type Row = { id: string; word: string; he: string; ar: string; defEn: string; exampleEn: string };
	const toRow = (w: (typeof data.deck.words)[number]): Row => ({
		id: w.id,
		word: w.word,
		he: w.he,
		ar: eGlossAr[w.id] ?? '',
		defEn: w.defEn,
		exampleEn: w.exampleEn
	});

	// `saved` is the file as last loaded or saved; `rows` is the working copy.
	// svelte-ignore state_referenced_locally
	let saved = $state(data.deck.words.map(toRow));
	// svelte-ignore state_referenced_locally
	let rows = $state(data.deck.words.map(toRow));
	let open = $state<string | null>(null);

	const wordChanged = (r: Row, s: Row) =>
		r.he !== s.he || r.defEn !== s.defEn || r.exampleEn !== s.exampleEn;
	let changed = $derived(
		rows.filter((r, i) => wordChanged(r, saved[i]) || r.ar.trim() !== saved[i].ar.trim())
	);
	const invalid = (r: Row) => !r.he.trim() || !r.defEn.trim() || !r.exampleEn.includes('**');
	let invalidCount = $derived(changed.filter(invalid).length);

	let saving = $state(false);
	let msg = $state<{ text: string; error?: boolean } | null>(null);

	async function save() {
		saving = true;
		msg = null;
		try {
			const words = rows.filter((r, i) => wordChanged(r, saved[i]));
			const ar = Object.fromEntries(
				rows.filter((r, i) => r.ar.trim() !== saved[i].ar.trim()).map((r) => [r.id, r.ar])
			);
			let committed = false;
			if (words.length)
				committed = (
					await saveWords(
						data.deck.id,
						words.map(({ id, he, defEn, exampleEn }) => ({ id, he, defEn, exampleEn }))
					)
				).committed;
			if (Object.keys(ar).length) committed ||= (await saveWordGlossesAr(ar)).committed;
			saved = rows.map((r) => ({ ...r }));
			msg = { text: committed ? 'נשלח. השינויים יופיעו באתר בעוד כמה דקות.' : 'נשמר.' };
		} catch (e) {
			msg = { text: e instanceof Error ? e.message : String(e), error: true };
		} finally {
			saving = false;
		}
	}

	// `**word**` -> bold, as on the word card.
	const parts = (s: string) => s.split('**').map((text, i) => ({ text, bold: i % 2 === 1 }));
</script>

<svelte:head><title>עריכת מילים · רשימה {data.deck.letter}</title></svelte:head>

<svelte:window
	onbeforeunload={(e) => {
		if (changed.length) e.preventDefault();
	}}
/>

<AppBar title="עריכת מילים · רשימה {data.deck.letter}" back={data.back} />

<main class="mx-auto w-full max-w-3xl flex-1 px-4 pt-4 pb-28">
	<div
		class="sticky top-16 z-10 mb-4 flex flex-wrap items-center gap-3 rounded-2xl bg-surface p-3 shadow-md ring-1 ring-line/70"
	>
		<p class="text-sm text-muted">
			{rows.length} מילים · {changed.length ? `${changed.length} שונו` : 'אין שינויים'}
		</p>
		{#if msg}
			<p class="text-sm {msg.error ? 'font-bold text-danger' : 'text-brand-dark'}" role="status">
				{msg.text}
			</p>
		{/if}
		<button
			type="button"
			class="ms-auto min-h-11 rounded-full bg-brand px-5 text-sm font-bold text-white transition active:scale-95 disabled:bg-line disabled:text-muted"
			disabled={!changed.length || invalidCount > 0 || saving}
			onclick={save}
		>
			{saving ? 'שומר…' : invalidCount ? `${invalidCount} לא תקינות` : 'שמירה'}
		</button>
	</div>

	<div class="overflow-hidden rounded-2xl ring-1 ring-line/70">
		<div class="grid grid-cols-3 gap-3 bg-canvas px-4 py-2 text-xs font-bold text-muted">
			<span>אנגלית</span>
			<span>עברית</span>
			<span>ערבית</span>
		</div>
		{#each rows as row, i (row.id)}
			{@const isOpen = open === row.id}
			{@const dirty = changed.includes(row)}
			<div class="border-t border-line/70 bg-surface">
				<button
					type="button"
					aria-expanded={isOpen}
					onclick={() => (open = isOpen ? null : row.id)}
					class="grid w-full grid-cols-3 items-baseline gap-3 px-4 py-3 text-start transition hover:bg-canvas active:scale-[0.99]"
				>
					<span class="truncate [text-align:match-parent] font-bold" dir="ltr">
						{#if dirty}<span class="text-brand" aria-label="שונה">● </span>{/if}{row.word}
					</span>
					<span class="truncate">{row.he}</span>
					<span class="truncate {row.ar ? '' : 'text-muted'}" lang="ar">
						{row.ar || '—'}
					</span>
				</button>

				{#if isOpen}
					<div transition:slide={{ duration: 150 }} class="flex flex-col gap-3 px-4 pb-4">
						<div class="grid gap-3 sm:grid-cols-2">
							<label class="flex flex-col gap-1 text-xs font-bold text-muted">
								תרגום לעברית
								<input
									bind:value={row.he}
									class="min-h-11 rounded-xl border border-line bg-canvas px-3 text-base font-normal text-ink"
								/>
							</label>
							<label class="flex flex-col gap-1 text-xs font-bold text-muted">
								תרגום לערבית
								<input
									bind:value={row.ar}
									lang="ar"
									dir="rtl"
									placeholder="ריק = מוצג בעברית"
									class="min-h-11 rounded-xl border border-line bg-canvas px-3 text-base font-normal text-ink"
								/>
							</label>
						</div>
						<label class="flex flex-col gap-1 text-xs font-bold text-muted">
							הגדרה (אנגלית)
							<textarea
								bind:value={row.defEn}
								dir="ltr"
								rows="2"
								class="rounded-xl border border-line bg-canvas px-3 py-2 text-base font-normal text-ink"
							></textarea>
						</label>
						<label class="flex flex-col gap-1 text-xs font-bold text-muted">
							משפט לדוגמה (המילה בין **כוכביות**)
							<textarea
								bind:value={row.exampleEn}
								dir="ltr"
								rows="2"
								class="rounded-xl border border-line bg-canvas px-3 py-2 text-base font-normal text-ink"
							></textarea>
						</label>
						<p class="text-sm" dir="ltr">
							{#each parts(row.exampleEn) as part, j (j)}
								{#if part.bold}<strong>{part.text}</strong>{:else}{part.text}{/if}
							{/each}
						</p>
						{#if invalid(row)}
							<p class="text-sm font-bold text-danger">
								צריך תרגום לעברית, הגדרה ומשפט עם המילה בין **כוכביות**.
							</p>
						{/if}
						{#if dirty}
							<button
								type="button"
								class="self-start rounded-full px-3 py-1.5 text-sm font-bold text-muted hover:bg-canvas active:scale-95"
								onclick={() => (rows[i] = { ...saved[i] })}
							>
								ביטול השינויים במילה
							</button>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</main>
