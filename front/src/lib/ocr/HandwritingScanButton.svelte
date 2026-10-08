<script lang="ts">
	import { Camera, LoaderCircle } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { scanHandwriting } from './scan';

	let { onText, disabled = false }: { onText: (text: string) => void; disabled?: boolean } =
		$props();

	let input: HTMLInputElement;
	let busy = $state(false);
	let failed = $state(false);
	let empty = $state(false);

	async function onPick() {
		const file = input.files?.[0];
		input.value = ''; // picking the same photo again still fires `change`
		if (!file) return;
		busy = true;
		failed = false;
		empty = false;
		try {
			const text = await scanHandwriting(file);
			if (text) onText(text);
			else empty = true;
		} catch {
			failed = true;
		} finally {
			busy = false;
		}
	}
</script>

<div class="mt-3">
	<input
		bind:this={input}
		type="file"
		accept="image/*"
		capture="environment"
		class="hidden"
		onchange={onPick}
	/>
	<button
		type="button"
		disabled={disabled || busy}
		onclick={() => input.click()}
		class="flex items-center gap-2 rounded-xl border-2 border-line bg-surface px-3 py-2 text-sm font-semibold text-ink/80 transition hover:border-brand disabled:opacity-50"
	>
		{#if busy}
			<LoaderCircle class="size-4 animate-spin" />
			{i18n.dict.ocr.scanning}
		{:else}
			<Camera class="size-4" />
			{i18n.dict.ocr.button}
		{/if}
	</button>
	{#if failed}
		<p class="mt-1 text-xs font-semibold text-danger">{i18n.dict.ocr.failed}</p>
	{:else if empty}
		<p class="mt-1 text-xs font-semibold text-danger">{i18n.dict.ocr.empty}</p>
	{:else if !busy}
		<p class="mt-1 text-xs text-muted">{i18n.dict.ocr.hint}</p>
	{/if}
</div>
