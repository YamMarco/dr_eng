<script lang="ts">
	import { ArrowDown, ArrowUp, Camera, ImageUp, RefreshCw, Trash2 } from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { lockScroll } from '$lib/scrollLock';

	// Full-screen "album" for a scan: build the set of page photos (camera or
	// gallery), reorder, retake or drop single pages, then read them all at once.
	// Phones give one photo per camera tap, so the set is built tap by tap.
	type Source = 'camera' | 'gallery';
	type Page = { id: number; file: File; url: string; source: Source };

	let { onRead, onCancel }: { onRead: (files: File[]) => void; onCancel: () => void } = $props();

	let pages = $state<Page[]>([]);
	let nextId = 0;
	let replacing: number | null = null; // id of the page the next pick replaces
	let cameraInput: HTMLInputElement;
	let galleryInput: HTMLInputElement;

	$effect(() => lockScroll());
	$effect(() => () => pages.forEach((p) => URL.revokeObjectURL(p.url)));

	function open(source: Source, replaceId: number | null = null) {
		replacing = replaceId;
		(source === 'camera' ? cameraInput : galleryInput).click();
	}

	function onPick(input: HTMLInputElement, source: Source) {
		const files = [...(input.files ?? [])];
		input.value = ''; // picking the same photo again still fires `change`
		const make = (file: File): Page => ({
			id: nextId++,
			file,
			url: URL.createObjectURL(file),
			source
		});
		const at = pages.findIndex((p) => p.id === replacing);
		if (at >= 0 && files[0]) {
			URL.revokeObjectURL(pages[at].url);
			pages[at] = make(files[0]);
		} else pages.push(...files.map(make));
		replacing = null;
	}

	function move(i: number, by: number) {
		const j = i + by;
		if (j < 0 || j >= pages.length) return;
		[pages[i], pages[j]] = [pages[j], pages[i]];
	}

	function remove(i: number) {
		URL.revokeObjectURL(pages[i].url);
		pages.splice(i, 1);
	}

	const btn =
		'flex items-center justify-center gap-2 rounded-xl border-2 border-line bg-surface px-3 py-2 text-sm font-semibold text-ink/80 transition hover:border-brand';
	const iconBtn =
		'rounded-lg p-1.5 text-ink/70 hover:bg-line/60 disabled:opacity-30 disabled:hover:bg-transparent';
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && onCancel()} />

<!-- `capture` opens the camera directly on phones; desktop falls back to a file dialog. -->
<input
	bind:this={cameraInput}
	type="file"
	accept="image/*"
	capture="environment"
	class="hidden"
	onchange={() => onPick(cameraInput, 'camera')}
/>
<input
	bind:this={galleryInput}
	type="file"
	accept="image/*"
	multiple
	class="hidden"
	onchange={() => onPick(galleryInput, 'gallery')}
/>

<div
	role="dialog"
	aria-modal="true"
	aria-label={i18n.dict.ocr.albumTitle}
	class="fixed inset-0 z-50 flex flex-col bg-surface p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
>
	<h2 class="text-xl font-bold">{i18n.dict.ocr.albumTitle}</h2>
	<p class="mt-1 text-sm leading-relaxed text-muted">
		{pages.length ? i18n.dict.ocr.albumHint : i18n.dict.ocr.albumAsk}
	</p>

	<div class="mt-3 min-h-0 flex-1 overflow-y-auto">
		{#if pages.length === 0}
			<div class="grid gap-3">
				<button type="button" onclick={() => open('camera')} class="{btn} py-6 text-base">
					<Camera class="size-5" />{i18n.dict.ocr.takePhoto}
				</button>
				<button type="button" onclick={() => open('gallery')} class="{btn} py-6 text-base">
					<ImageUp class="size-5" />{i18n.dict.ocr.pickPhotos}
				</button>
			</div>
		{:else}
			<ol class="grid gap-2">
				{#each pages as page, i (page.id)}
					<li class="flex items-center gap-3 rounded-xl border-2 border-line p-2">
						<div class="relative shrink-0">
							<img src={page.url} alt="" class="size-20 rounded-lg object-cover" />
							<span
								class="absolute start-1 top-1 flex size-7 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow tabular"
								>{i + 1}</span
							>
						</div>
						<span class="font-semibold tabular">{i18n.dict.ocr.pageLabel(i + 1)}</span>
						<span class="ms-auto flex items-center">
							<button
								type="button"
								class={iconBtn}
								disabled={i === 0}
								aria-label={i18n.dict.ocr.moveUp}
								onclick={() => move(i, -1)}><ArrowUp class="size-4" /></button
							>
							<button
								type="button"
								class={iconBtn}
								disabled={i === pages.length - 1}
								aria-label={i18n.dict.ocr.moveDown}
								onclick={() => move(i, 1)}><ArrowDown class="size-4" /></button
							>
							<button
								type="button"
								class={iconBtn}
								aria-label={i18n.dict.ocr.replace}
								onclick={() => open(page.source, page.id)}><RefreshCw class="size-4" /></button
							>
							<button
								type="button"
								class="{iconBtn} text-danger"
								aria-label={i18n.dict.ocr.remove}
								onclick={() => remove(i)}><Trash2 class="size-4" /></button
							>
						</span>
					</li>
				{/each}
			</ol>
			<div class="mt-3 grid grid-cols-2 gap-2">
				<button type="button" onclick={() => open('camera')} class={btn}>
					<Camera class="size-4" />{i18n.dict.ocr.addPhoto}
				</button>
				<button type="button" onclick={() => open('gallery')} class={btn}>
					<ImageUp class="size-4" />{i18n.dict.ocr.addFromGallery}
				</button>
			</div>
		{/if}
	</div>

	<div class="mt-3 flex gap-3">
		<Button variant="ghost" onclick={onCancel}>{i18n.dict.ocr.cancel}</Button>
		<Button disabled={pages.length === 0} onclick={() => onRead(pages.map((p) => p.file))}>
			{i18n.dict.ocr.read(pages.length)}
		</Button>
	</div>
</div>
