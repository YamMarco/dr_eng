<script lang="ts">
	import { Camera } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { scanHandwriting } from './scan';
	import ScanAlbum from './ScanAlbum.svelte';
	import ScanReview from './ScanReview.svelte';

	let { onText, disabled = false }: { onText: (text: string) => void; disabled?: boolean } =
		$props();

	let albumOpen = $state(false);
	let reviewing = $state(false);
	let text = $state('');
	let progress = $state('');
	let error = $state('');

	// An essay can run to two pages: the album collects the photos in order,
	// each is read on its own and appended; "add page" in the review opens
	// the album again for more.
	async function read(files: File[]) {
		albumOpen = false;
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
		albumOpen = false;
		reviewing = false;
		text = '';
		error = '';
	}
</script>

<div class="mt-3">
	<button
		type="button"
		{disabled}
		onclick={() => (albumOpen = true)}
		class="flex items-center gap-2 rounded-xl border-2 border-line bg-surface px-3 py-2 text-sm font-semibold text-ink/80 transition hover:border-brand disabled:opacity-50"
	>
		<Camera class="size-4" />
		{i18n.dict.ocr.button}
	</button>
	<p class="mt-1 text-xs text-muted">{i18n.dict.ocr.hint}</p>
</div>

{#if albumOpen}
	<ScanAlbum onRead={read} onCancel={() => (reviewing ? (albumOpen = false) : close())} />
{/if}

{#if reviewing}
	<ScanReview
		bind:text
		{progress}
		{error}
		onAddPage={() => (albumOpen = true)}
		onInsert={() => {
			onText(text.trim());
			close();
		}}
		onCancel={close}
	/>
{/if}
