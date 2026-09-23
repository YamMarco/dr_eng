<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import PassageBody from '$lib/lesson-screens/PassageBody.svelte';
	import type { PassageScreen } from '$lib/lesson-screens/types';
	import { i18n } from '$lib/i18n/index.svelte';
	import { lockScroll } from '$lib/scrollLock';

	let { passage, open, onClose }: { passage: PassageScreen; open: boolean; onClose: () => void } =
		$props();

	$effect(() => {
		if (open) return lockScroll();
	});
</script>

<svelte:window
	onkeydown={(e) => {
		if (open && e.key === 'Escape') onClose();
	}}
/>

{#if open}
	<div class="fixed inset-0 z-60 flex flex-col bg-canvas" transition:fade={{ duration: 120 }}>
		<div
			in:fly={{ y: 12, duration: 160 }}
			class="flex h-14 shrink-0 items-center justify-between border-b border-line/70 px-4"
		>
			<h1 class="text-base font-bold">{i18n.dict.quiz.backToPassage}</h1>
			<button
				type="button"
				aria-label={i18n.dict.common.close}
				onclick={onClose}
				class="-me-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-line/70 active:scale-95"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
					aria-hidden="true"
				>
					<path d="M18 6 6 18M6 6l12 12" />
				</svg>
			</button>
		</div>
		<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto px-4 py-6">
			<PassageBody {passage} />
		</main>
	</div>
{/if}
