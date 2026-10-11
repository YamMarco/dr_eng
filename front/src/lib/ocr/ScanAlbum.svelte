<script lang="ts">
	import {
		ArrowDown,
		ArrowUp,
		Camera,
		ImageUp,
		RefreshCw,
		RotateCw,
		Trash2,
		X
	} from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { lockScroll } from '$lib/scrollLock';

	// Bottom sheet for a scan: build the set of page photos (camera or gallery),
	// then view, reorder, rotate, retake or drop single pages (or clear all),
	// and read them all at once.
	// Phones give one photo per camera tap, so the set is built tap by tap.
	type Source = 'camera' | 'gallery';
	export type ScanPage = { file: File; rotation: number };
	type Page = ScanPage & { id: number; url: string; source: Source };

	let { onRead, onCancel }: { onRead: (pages: ScanPage[]) => void; onCancel: () => void } = $props();

	let pages = $state<Page[]>([]);
	let nextId = 0;
	let viewing = $state<number | null>(null); // id of the page shown full size
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
			rotation: 0,
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

	function rotate(i: number) {
		pages[i].rotation = (pages[i].rotation + 90) % 360;
	}

	function clear() {
		pages.forEach((p) => URL.revokeObjectURL(p.url));
		pages = [];
	}

	let viewed = $derived(pages.find((p) => p.id === viewing));

	const sourceBtn =
		'flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-line bg-surface px-3 py-4 text-sm font-semibold text-ink/80 transition hover:border-brand active:scale-[0.98]';
	const iconBtn =
		'rounded-lg p-1.5 text-ink/70 hover:bg-line/60 disabled:opacity-30 disabled:hover:bg-transparent';
</script>

<svelte:window
	onkeydown={(e) => e.key === 'Escape' && (viewed ? (viewing = null) : onCancel())}
/>

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

<!-- Bottom sheet over a dimmed page, like Android's "open with" chooser. -->
<div class="fixed inset-0 z-50 flex items-end bg-black/50" role="presentation" onclick={onCancel}>
	<div
		role="dialog"
		aria-modal="true"
		aria-label={i18n.dict.ocr.albumTitle}
		tabindex="-1"
		onclick={(e) => e.stopPropagation()}
		onkeydown={() => {}}
		class="flex max-h-[85dvh] w-full flex-col rounded-t-3xl bg-surface p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-2xl"
	>
		<div class="flex items-center justify-between gap-2">
			<h2 class="text-lg font-bold">{i18n.dict.ocr.albumTitle}</h2>
			{#if pages.length > 1}
				<button type="button" onclick={clear} class="text-sm font-semibold text-danger">
					{i18n.dict.ocr.clearAll}
				</button>
			{/if}
		</div>
		<p class="mt-1 text-sm leading-relaxed text-muted">
			{pages.length ? i18n.dict.ocr.albumHint : i18n.dict.ocr.albumAsk}
		</p>

		{#if pages.length}
			<ol class="mt-3 grid min-h-0 gap-2 overflow-y-auto">
				{#each pages as page, i (page.id)}
					<li class="flex items-center gap-3 rounded-xl border-2 border-line p-2">
						<button
							type="button"
							class="relative size-20 shrink-0 overflow-hidden rounded-lg"
							aria-label={i18n.dict.ocr.view}
							onclick={() => (viewing = page.id)}
						>
							<img
								src={page.url}
								alt=""
								style:transform="rotate({page.rotation}deg)"
								class="size-full object-cover transition-transform"
							/>
							<span
								class="absolute start-1 top-1 flex size-7 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow tabular"
								>{i + 1}</span
							>
						</button>
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
								aria-label={i18n.dict.ocr.rotate}
								onclick={() => rotate(i)}><RotateCw class="size-4" /></button
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
		{/if}

		<div class="mt-3 grid shrink-0 grid-cols-2 gap-3">
			<button type="button" onclick={() => open('camera')} class={sourceBtn}>
				<Camera class="size-7 text-brand" />{pages.length ? i18n.dict.ocr.addPhoto : i18n.dict.ocr.takePhoto}
			</button>
			<button type="button" onclick={() => open('gallery')} class={sourceBtn}>
				<ImageUp class="size-7 text-brand" />{pages.length ? i18n.dict.ocr.addFromGallery : i18n.dict.ocr.pickPhotos}
			</button>
		</div>

		{#if pages.length}
			<div class="mt-3 flex shrink-0 gap-3">
				<Button variant="ghost" onclick={onCancel}>{i18n.dict.ocr.cancel}</Button>
				<Button onclick={() => onRead(pages.map(({ file, rotation }) => ({ file, rotation })))}>
					{i18n.dict.ocr.read(pages.length)}
				</Button>
			</div>
		{/if}
	</div>
</div>

{#if viewed}
	<div
		role="presentation"
		class="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
		onclick={() => (viewing = null)}
	>
		<img
			src={viewed.url}
			alt={i18n.dict.ocr.pageLabel(pages.indexOf(viewed) + 1)}
			style:transform="rotate({viewed.rotation}deg)"
			class="max-h-[80dvh] max-w-full object-contain transition-transform"
		/>
		<button
			type="button"
			aria-label={i18n.dict.ocr.closeView}
			class="absolute end-4 top-4 rounded-full bg-black/60 p-2 text-white"
			onclick={() => (viewing = null)}><X class="size-5" /></button
		>
	</div>
{/if}
