<script lang="ts">
	import {
		Camera,
		ChevronLeft,
		ChevronRight,
		ImageUp,
		RefreshCw,
		RotateCw,
		Check,
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
	let selecting = $state(false); // delete mode: tiles toggle instead of opening
	let selected = $state<number[]>([]); // ids marked for deletion
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

	function rotate(i: number) {
		pages[i].rotation = (pages[i].rotation + 90) % 360;
	}

	function toggle(id: number) {
		selected = selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id];
	}

	function endSelecting() {
		selecting = false;
		selected = [];
	}

	function deleteSelected() {
		pages.filter((p) => selected.includes(p.id)).forEach((p) => URL.revokeObjectURL(p.url));
		pages = pages.filter((p) => !selected.includes(p.id));
		endSelecting();
	}

	let viewed = $derived(pages.find((p) => p.id === viewing));

	const sourceBtn =
		'flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-line bg-surface px-3 py-4 text-sm font-semibold text-ink/80 transition hover:border-brand active:scale-[0.98]';
	const tileBtn =
		'flex size-6 items-center justify-center rounded-full bg-black/55 text-white transition active:scale-90';
	const viewBtn =
		'flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white';
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
			{#if pages.length}
				<span class="flex items-center gap-3 text-sm font-semibold">
					{#if selecting}
						<button type="button" class="text-muted" onclick={() => (selected = pages.map((p) => p.id))}>
							{i18n.dict.ocr.selectAll}
						</button>
						<button
							type="button"
							class="text-danger disabled:opacity-40"
							disabled={selected.length === 0}
							onclick={deleteSelected}>{i18n.dict.ocr.deleteSelected(selected.length)}</button
						>
					{/if}
					<button
						type="button"
						aria-pressed={selecting}
						aria-label={i18n.dict.ocr.deleteMode}
						title={i18n.dict.ocr.deleteMode}
						class="rounded-lg p-1.5 transition {selecting
							? 'bg-danger text-white'
							: 'text-ink/70 hover:bg-line/60'}"
						onclick={() => (selecting ? endSelecting() : (selecting = true))}
						><Trash2 class="size-4" /></button
					>
				</span>
			{/if}
		</div>
		<p class="mt-1 text-sm leading-relaxed text-muted">
			{pages.length ? i18n.dict.ocr.albumHint : i18n.dict.ocr.albumAsk}
		</p>

		{#if pages.length}
			<ol class="mt-3 grid min-h-0 grid-cols-3 gap-2 overflow-y-auto">
				{#each pages as page, i (page.id)}
					<li
						class="relative aspect-square overflow-hidden rounded-xl border-2 bg-line/40 {selected.includes(page.id)
							? 'border-danger'
							: 'border-line'}"
					>
						<button
							type="button"
							class="size-full"
							aria-label={i18n.dict.ocr.view}
							onclick={() => (selecting ? toggle(page.id) : (viewing = page.id))}
						>
							<img
								src={page.url}
								alt=""
								style:transform="rotate({page.rotation}deg)"
								class="size-full object-cover transition-transform"
							/>
						</button>
						<span
							class="absolute start-1 top-1 flex size-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white shadow tabular"
							>{i + 1}</span
						>
						{#if selecting}
							<span
								class="absolute end-1 top-1 flex size-6 items-center justify-center rounded-full border-2 border-white shadow {selected.includes(page.id)
									? 'bg-danger text-white'
									: 'bg-black/30'}"
							>
								{#if selected.includes(page.id)}<Check class="size-3.5" />{/if}
							</span>
						{:else}
							<!-- RTL: the page before is to the right. -->
							<button
								type="button"
								class="{tileBtn} absolute start-1 bottom-1 disabled:opacity-0"
								disabled={i === pages.length - 1}
								aria-label={i18n.dict.ocr.moveLater}
								onclick={() => move(i, 1)}><ChevronLeft class="size-3.5" /></button
							>
							<button
								type="button"
								class="{tileBtn} absolute end-1 bottom-1 disabled:opacity-0"
								disabled={i === 0}
								aria-label={i18n.dict.ocr.moveEarlier}
								onclick={() => move(i, -1)}><ChevronRight class="size-3.5" /></button
							>
						{/if}
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
		<div class="absolute inset-x-0 bottom-6 flex justify-center gap-3">
			<button
				type="button"
				class={viewBtn}
				onclick={(e) => {
					e.stopPropagation();
					rotate(pages.indexOf(viewed!));
				}}><RotateCw class="size-4" />{i18n.dict.ocr.rotate}</button
			>
			<button
				type="button"
				class={viewBtn}
				onclick={(e) => {
					e.stopPropagation();
					const { id, source } = viewed!;
					viewing = null;
					open(source, id);
				}}><RefreshCw class="size-4" />{i18n.dict.ocr.replace}</button
			>
		</div>
		<button
			type="button"
			aria-label={i18n.dict.ocr.closeView}
			class="absolute end-4 top-4 rounded-full bg-black/60 p-2 text-white"
			onclick={() => (viewing = null)}><X class="size-5" /></button
		>
	</div>
{/if}
