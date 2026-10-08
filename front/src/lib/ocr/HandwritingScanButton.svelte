<script lang="ts">
	import { Camera } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { scanHandwriting } from './scan';
	import ScanReview from './ScanReview.svelte';

	let { onText, disabled = false }: { onText: (text: string) => void; disabled?: boolean } =
		$props();

	let input: HTMLInputElement;
	let reviewing = $state(false);
	let text = $state('');
	let progress = $state('');
	let error = $state('');

	// An essay can run to two pages: each photo is read on its own and
	// appended in order, from one multi-select or via "add page" in the review.
	async function onPick() {
		const files = [...(input.files ?? [])];
		input.value = ''; // picking the same photo again still fires `change`
		if (files.length === 0) return;
		reviewing = true;
		error = '';
		for (const [i, file] of files.entries()) {
			progress = i18n.dict.ocr.pageProgress(i + 1, files.length);
			try {
				const page = await scanHandwriting(file);
				if (page) text = text.trim() ? `${text.trimEnd()}\n\n${page}` : page;
				else error = i18n.dict.ocr.empty;
			} catch {
				error = i18n.dict.ocr.failed;
			}
		}
		progress = '';
	}

	function close() {
		reviewing = false;
		text = '';
		error = '';
	}
</script>

<div class="mt-3">
	<!-- No `capture`: phones then offer camera or gallery (two pages at once). -->
	<input bind:this={input} type="file" accept="image/*" multiple class="hidden" onchange={onPick} />
	<button
		type="button"
		{disabled}
		onclick={() => input.click()}
		class="flex items-center gap-2 rounded-xl border-2 border-line bg-surface px-3 py-2 text-sm font-semibold text-ink/80 transition hover:border-brand disabled:opacity-50"
	>
		<Camera class="size-4" />
		{i18n.dict.ocr.button}
	</button>
	<p class="mt-1 text-xs text-muted">{i18n.dict.ocr.hint}</p>
</div>

{#if reviewing}
	<ScanReview
		bind:text
		{progress}
		{error}
		onAddPage={() => input.click()}
		onInsert={() => {
			onText(text.trim());
			close();
		}}
		onCancel={close}
	/>
{/if}
