<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'ghost';

	type Props = {
		variant?: Variant;
		href?: string;
		disabled?: boolean;
		onclick?: (event: MouseEvent) => void;
		class?: string;
		children: Snippet;
	};

	let {
		variant = 'primary',
		href,
		disabled = false,
		onclick,
		class: extra = '',
		children
	}: Props = $props();

	const base =
		'inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-lg font-semibold transition duration-150 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50';

	const variants: Record<Variant, string> = {
		primary: 'bg-brand text-white shadow-md shadow-brand/25 hover:bg-brand-dark',
		secondary: 'border-2 border-brand bg-surface text-brand hover:bg-brand-soft',
		ghost: 'text-muted hover:bg-line/60 hover:text-ink'
	};

	let classes = $derived(`${base} ${variants[variant]} ${extra}`);
</script>

{#if href}
	<a {href} class={classes} aria-disabled={disabled}>{@render children()}</a>
{:else}
	<button type="button" class={classes} {disabled} {onclick}>{@render children()}</button>
{/if}
