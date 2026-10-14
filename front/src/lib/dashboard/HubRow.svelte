<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	// One row of the module page: icon, title, a line of detail, optional progress
	// bar and a trailing bit (a score nugget, a count). A link, or muted when
	// there's nothing to open yet.
	type Props = {
		icon: Component;
		title: string;
		sub?: string;
		/** 0-1; draws a thin bar under the text. */
		progress?: number;
		/** No href = muted, not a link. */
		href?: string;
		trailing?: Snippet;
	};

	let { icon: Icon, title, sub, progress, href, trailing }: Props = $props();
</script>

{#snippet body()}
	<span
		class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl {href
			? 'bg-brand-soft text-brand'
			: 'border border-dashed border-line text-muted'}"
	>
		<Icon size={18} aria-hidden="true" />
	</span>
	<span class="flex min-w-0 flex-1 flex-col gap-1">
		<span class="truncate text-sm font-bold">{title}</span>
		{#if sub}<span class="truncate text-xs text-muted">{sub}</span>{/if}
		{#if progress !== undefined}
			<span class="h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
				<span
					class="block h-full rounded-full bg-brand transition-[width] duration-500"
					style="width: {progress * 100}%"
				></span>
			</span>
		{/if}
	</span>
	{@render trailing?.()}
{/snippet}

<!-- href is a runtime-built path or query string into a module page, not a typed route -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#if href}
	<a
		{href}
		class="flex min-h-14 items-center gap-3 rounded-2xl px-3 py-1.5 transition hover:bg-brand-soft/60 active:scale-[0.99]"
	>
		{@render body()}
	</a>
{:else}
	<div class="flex min-h-14 items-center gap-3 rounded-2xl px-3 py-1.5 opacity-60">
		{@render body()}
	</div>
{/if}
<!-- eslint-enable svelte/no-navigation-without-resolve -->
