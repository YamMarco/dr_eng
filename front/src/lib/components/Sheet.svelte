<script lang="ts">
	import type { Snippet } from 'svelte';
	import { X } from '@lucide/svelte';
	import { fade, fly } from 'svelte/transition';
	import { i18n } from '$lib/i18n/index.svelte';
	import { lockScroll } from '$lib/scrollLock';

	type Props = {
		open: boolean;
		title: string;
		description?: string;
		onclose?: () => void;
		children: Snippet;
	};

	let { open = $bindable(), title, description = '', onclose, children }: Props = $props();

	$effect(() => {
		if (open) return lockScroll();
	});

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
			class="absolute inset-0 bg-overlay/40"
			onclick={close}
			transition:fade={{ duration: 100 }}
		></button>

		<div
			role="dialog"
			aria-modal="true"
			aria-label={title}
			class="relative max-h-[85dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-line bg-surface p-6 pb-8 shadow-xl sm:rounded-3xl sm:pb-6"
			transition:fly={{ y: 240, duration: 160 }}
		>
			<div class="mx-auto mb-5 h-1.5 w-10 rounded-full bg-line sm:hidden"></div>
			<button
				type="button"
				aria-label={i18n.dict.common.close}
				onclick={close}
				class="absolute inset-e-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-line/60 active:scale-95"
			>
				<X size={20} aria-hidden="true" />
			</button>
			<h2 class="pe-10 text-xl font-bold">{title}</h2>
			{#if description}
				<p class="mt-2 leading-relaxed text-muted">{description}</p>
			{/if}
			<div class="mt-6 flex flex-col gap-3">{@render children()}</div>
		</div>
	</div>
{/if}
