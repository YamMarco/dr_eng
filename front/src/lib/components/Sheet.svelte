<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { i18n } from '$lib/i18n/index.svelte';

	type Props = {
		open: boolean;
		title: string;
		description?: string;
		onclose?: () => void;
		children: Snippet;
	};

	let { open = $bindable(), title, description = '', onclose, children }: Props = $props();

	function close() {
		open = false;
		onclose?.();
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (open && e.key === 'Escape') close();
	}}
/>

{#if open}
	<div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
		<button
			type="button"
			aria-label={i18n.dict.common.close}
			class="absolute inset-0 bg-ink/40"
			onclick={close}
			transition:fade={{ duration: 150 }}
		></button>

		<div
			role="dialog"
			aria-modal="true"
			aria-label={title}
			class="relative w-full max-w-lg rounded-t-3xl bg-surface p-6 pb-8 shadow-xl sm:rounded-3xl sm:pb-6"
			transition:fly={{ y: 240, duration: 220 }}
		>
			<div class="mx-auto mb-5 h-1.5 w-10 rounded-full bg-line sm:hidden"></div>
			<h2 class="text-xl font-bold">{title}</h2>
			{#if description}
				<p class="mt-2 leading-relaxed text-muted">{description}</p>
			{/if}
			<div class="mt-6 flex flex-col gap-3">{@render children()}</div>
		</div>
	</div>
{/if}
