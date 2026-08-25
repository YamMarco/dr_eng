<script lang="ts">
	import type { WordBankSet } from '$lib/wordSets';
	import Button from './Button.svelte';

	type Props = {
		set: WordBankSet;
		onnext?: () => void;
		nextLabel?: string;
	};

	let { set, onnext, nextLabel = 'לתרגיל הבא' }: Props = $props();

	// blank sentence id -> chosen word
	let assignments = $state<Record<number, string>>({});
	let activeBlank = $state<number | null>(null);
	let checked = $state(false);

	$effect(() => {
		// Reset local state whenever a different set is shown.
		set;
		assignments = {};
		activeBlank = null;
		checked = false;
	});

	let usedWords = $derived(new Set(Object.values(assignments)));
	let allFilled = $derived(set.sentences.every((s) => assignments[s.id]));
	let correctCount = $derived(set.sentences.filter((s) => assignments[s.id] === s.answer).length);

	function pickBlank(id: number) {
		if (checked) return;
		activeBlank = activeBlank === id ? null : id;
	}

	function pickWord(word: string) {
		if (checked || usedWords.has(word)) return;

		if (activeBlank !== null) {
			assignments = { ...assignments, [activeBlank]: word };
			activeBlank = null;
			return;
		}

		// No blank focused: fill the first empty one, for convenience.
		const nextEmpty = set.sentences.find((s) => !assignments[s.id]);
		if (nextEmpty) assignments = { ...assignments, [nextEmpty.id]: word };
	}

	function clearBlank(id: number) {
		if (checked) return;
		const { [id]: _removed, ...rest } = assignments;
		assignments = rest;
		activeBlank = id;
	}

	function check() {
		if (!allFilled) return;
		checked = true;
		activeBlank = null;
	}

	function retry() {
		assignments = {};
		activeBlank = null;
		checked = false;
	}
</script>

<div>
	<h2 class="text-xl font-bold">{set.title}</h2>
	<p class="mt-1 text-muted">{set.description}</p>

	<ol class="mt-5 flex flex-col gap-4">
		{#each set.sentences as sentence (sentence.id)}
			{@const word = assignments[sentence.id]}
			{@const isCorrect = checked && word === sentence.answer}
			{@const isWrong = checked && word && word !== sentence.answer}
			<li class="rounded-2xl bg-surface p-4 shadow-sm ring-1 shadow-ink/5 ring-line/70">
				<div class="flex items-start gap-2">
					<span
						class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand-dark"
					>
						{sentence.id}
					</span>
					<p dir="ltr" class="flex-1 text-start leading-relaxed">
						{sentence.before}
						<button
							type="button"
							onclick={() => (word ? clearBlank(sentence.id) : pickBlank(sentence.id))}
							disabled={checked}
							class="mx-1 inline-flex min-w-20 items-center justify-center rounded-lg border-2 px-2 py-0.5 align-middle font-semibold transition disabled:pointer-events-none
							{isCorrect
								? 'border-brand bg-brand-soft text-brand-dark'
								: isWrong
									? 'border-danger bg-danger-soft text-danger'
									: activeBlank === sentence.id
										? 'border-brand bg-brand-soft/60 text-brand-dark'
										: word
											? 'border-line bg-canvas text-ink'
											: 'border-dashed border-line text-muted'}"
						>
							{word ?? '_____'}
						</button>
						{sentence.after}
					</p>
					{#if isCorrect}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mt-0.5 h-5 w-5 shrink-0 text-brand"
							aria-hidden="true"
						>
							<path d="m5 13 4 4L19 7" />
						</svg>
					{:else if isWrong}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mt-0.5 h-5 w-5 shrink-0 text-danger"
							aria-hidden="true"
						>
							<path d="M18 6 6 18M6 6l12 12" />
						</svg>
					{/if}
				</div>
				{#if isWrong}
					<p class="mt-2 ps-8 text-sm text-danger">
						התשובה הנכונה: <span dir="ltr" class="font-semibold">{sentence.answer}</span>
					</p>
				{/if}
			</li>
		{/each}
	</ol>

	<div class="mt-6">
		<p class="mb-2 text-sm font-bold text-muted">בנק המילים</p>
		<div class="flex flex-wrap gap-2" dir="ltr">
			{#each set.words as word (word)}
				{@const used = usedWords.has(word)}
				<button
					type="button"
					onclick={() => pickWord(word)}
					disabled={checked || used}
					class="rounded-xl border-2 px-4 py-2 font-semibold transition active:scale-95 disabled:active:scale-100
					{used
						? 'border-line bg-line/40 text-muted/60'
						: 'border-brand/40 bg-brand-soft text-brand-dark hover:border-brand'}"
				>
					{word}
				</button>
			{/each}
		</div>
	</div>

	<div class="mt-8 flex flex-col gap-3">
		{#if !checked}
			<Button onclick={check} disabled={!allFilled}>בדיקת תשובות</Button>
		{:else}
			<p class="text-center font-semibold">
				{correctCount} מתוך {set.sentences.length} תשובות נכונות
			</p>
			<Button onclick={retry} variant="secondary">ניסיון נוסף</Button>
			{#if onnext}
				<Button onclick={onnext}>{nextLabel}</Button>
			{/if}
		{/if}
	</div>
</div>
