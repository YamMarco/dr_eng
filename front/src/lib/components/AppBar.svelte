<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title?: string;
		back?: string;
		onback?: () => void;
		backLabel?: string;
		trailing?: Snippet;
	};

	let { title = '', back, onback, backLabel = 'חזרה', trailing }: Props = $props();

	const backClasses =
		'-ms-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink transition hover:bg-line/70 active:scale-95';
</script>

<header
	class="sticky top-0 z-20 border-b border-line/70 bg-canvas/85 backdrop-blur supports-[backdrop-filter]:bg-canvas/70"
>
	<div class="mx-auto flex h-16 max-w-lg items-center gap-2 px-4">
		{#snippet chevron()}
			<!-- chevron pointing to the start edge (right, in RTL) -->
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-6 w-6 rtl:rotate-180"
				aria-hidden="true"
			>
				<path d="m15 18-6-6 6-6" />
			</svg>
		{/snippet}

		{#if onback}
			<button type="button" aria-label={backLabel} class={backClasses} onclick={onback}>
				{@render chevron()}
			</button>
		{:else if back}
			<a href={back} aria-label={backLabel} class={backClasses}>
				{@render chevron()}
			</a>
		{/if}

		<h1 class="min-w-0 flex-1 truncate text-lg font-bold">{title}</h1>

		{#if trailing}
			<div class="shrink-0">{@render trailing()}</div>
		{/if}
	</div>
</header>
