<script lang="ts">
	import { FilePlus, LoaderCircle } from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { lockScroll } from '$lib/scrollLock';

	// Full-screen check of what OCR read, before it goes into the answer.
	// Nothing is graded here: `onInsert` just pastes the edited text.
	let {
		text = $bindable(),
		progress,
		error,
		onAddPage,
		onInsert,
		onCancel
	}: {
		text: string;
		/** "Reading page i of n" while a scan runs, else empty. */
		progress: string;
		error: string;
		onAddPage: () => void;
		onInsert: () => void;
		onCancel: () => void;
	} = $props();

	$effect(() => lockScroll());

	let words = $derived(text.trim() ? text.trim().split(/\s+/).length : 0);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && onCancel()} />

<div
	role="dialog"
	aria-modal="true"
	aria-label={i18n.dict.ocr.reviewTitle}
	class="fixed inset-0 z-50 flex flex-col bg-surface p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
>
	<h2 class="text-xl font-bold">{i18n.dict.ocr.reviewTitle}</h2>
	<p class="mt-1 text-sm leading-relaxed text-muted">{i18n.dict.ocr.reviewHint}</p>

	<textarea
		dir="ltr"
		bind:value={text}
		disabled={!!progress}
		class="mt-3 min-h-0 w-full flex-1 resize-none rounded-xl border-2 border-line bg-surface p-3 leading-relaxed focus:border-brand"
	></textarea>

	<div class="mt-2 flex items-center justify-between gap-2 text-sm">
		<span class="font-semibold text-muted tabular">{i18n.dict.selfCheck.wordCount(words)}</span>
		{#if progress}
			<span class="flex items-center gap-1.5 font-semibold text-muted">
				<LoaderCircle class="size-4 animate-spin" />{progress}
			</span>
		{:else if error}
			<span class="font-semibold text-danger">{error}</span>
		{/if}
		<button
			type="button"
			disabled={!!progress}
			onclick={onAddPage}
			class="flex items-center gap-1.5 rounded-xl border-2 border-line px-3 py-1.5 font-semibold text-ink/80 hover:border-brand disabled:opacity-50"
		>
			<FilePlus class="size-4" />{i18n.dict.ocr.addPage}
		</button>
	</div>

	<div class="mt-3 flex gap-3">
		<Button variant="ghost" onclick={onCancel}>{i18n.dict.ocr.cancel}</Button>
		<Button disabled={!!progress || !text.trim()} onclick={onInsert}>
			{i18n.dict.ocr.insert}
		</Button>
	</div>
</div>
