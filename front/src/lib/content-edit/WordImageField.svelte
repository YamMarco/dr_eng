<script lang="ts">
	// The word-card picture on the /edit canvas: the player's frame plus
	// add / replace / delete controls (top-right). Picking a file opens the
	// cropper; accepting uploads the crop and reports its URL. Detachable —
	// content-edit/.
	import { ImagePlus, Replace, Trash2 } from '@lucide/svelte';
	import WordImage from '$lib/lesson-screens/WordImage.svelte';
	import { uploadImage } from './api';
	import ImageCropper from './ImageCropper.svelte';

	let {
		src,
		alt,
		onChange
	}: { src?: string; alt: string; onChange: (url: string | undefined) => void } = $props();

	let picked = $state<File | null>(null);
	let input = $state<HTMLInputElement>();
	// A just-uploaded file isn't served until the next deploy in production, so
	// show the local crop for it meanwhile.
	let local = $state<{ url: string; objectUrl: string } | null>(null);
	let shown = $derived(local && local.url === src ? local.objectUrl : src);

	function onPick(e: Event & { currentTarget: HTMLInputElement }) {
		picked = e.currentTarget.files?.[0] ?? null;
		e.currentTarget.value = ''; // let the same file be picked again
	}

	async function accept(jpeg: Blob) {
		const url = await uploadImage(jpeg);
		if (local) URL.revokeObjectURL(local.objectUrl);
		local = { url, objectUrl: URL.createObjectURL(jpeg) };
		onChange(url);
		picked = null;
	}

	const btn =
		'flex h-8 items-center gap-1 rounded-full bg-surface/90 px-2.5 text-xs font-semibold text-ink shadow';
</script>

<WordImage src={shown} {alt}>
	<div class="absolute top-2 right-2 flex gap-1.5">
		{#if src}
			<button
				type="button"
				class={btn}
				title="החלפת תמונה"
				aria-label="החלפת תמונה"
				onclick={() => input?.click()}
			>
				<Replace size={14} aria-hidden="true" />
			</button>
			<button
				type="button"
				class="{btn} text-danger"
				title="מחיקת תמונה"
				aria-label="מחיקת תמונה"
				onclick={() => onChange(undefined)}
			>
				<Trash2 size={14} aria-hidden="true" />
			</button>
		{:else}
			<button type="button" class={btn} onclick={() => input?.click()}>
				<ImagePlus size={14} aria-hidden="true" /> הוספת תמונה
			</button>
		{/if}
	</div>
</WordImage>

<input bind:this={input} type="file" accept="image/*" class="hidden" onchange={onPick} />

{#if picked}
	<ImageCropper file={picked} onAccept={accept} onCancel={() => (picked = null)} />
{/if}
