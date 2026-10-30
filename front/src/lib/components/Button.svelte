<script lang="ts">
	import type { Snippet } from 'svelte';
	import Loader from './Loader.svelte';

	type Variant = 'primary' | 'secondary' | 'ghost';

	type Props = {
		variant?: Variant;
		href?: string;
		type?: 'button' | 'submit';
		disabled?: boolean;
		/** Waiting on the server: disables the button and shows the loader before the label. */
		busy?: boolean;
		/** For a button that opens a panel (aria-expanded). */
		expanded?: boolean;
		onclick?: (event: MouseEvent) => void;
		class?: string;
		children: Snippet;
	};

	let {
		variant = 'primary',
		href,
		type = 'button',
		disabled = false,
		busy = false,
		expanded,
		onclick,
		class: extra = '',
		children
	}: Props = $props();

	const base =
		'inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-lg font-semibold transition duration-100 disabled:pointer-events-none disabled:opacity-50';

	// Primary gets the full layered "puck" treatment (see .puck-3d in
	// layout.css, shared with lesson-path nodes) — a ring + bottom lip the
	// button visually presses into on tap, instead of just shrinking.
	// Secondary/ghost stay flat (outline/text actions read better subdued)
	// with the plain scale-press they always had.
	const variants: Record<Variant, string> = {
		primary: 'puck-3d bg-brand text-white',
		secondary:
			'border-2 border-brand bg-surface text-brand hover:bg-brand-soft active:scale-[0.98]',
		ghost: 'text-muted hover:bg-line/60 hover:text-ink active:scale-[0.98]'
	};

	let classes = $derived(`${base} ${variants[variant]} ${extra}`);
	const puckStyle = '--puck-border: var(--color-brand-dark); --puck-lip: var(--color-brand);';
</script>

{#if href}
	<a
		{href}
		class={classes}
		style={variant === 'primary' ? puckStyle : undefined}
		aria-disabled={disabled}>{@render children()}</a
	>
{:else}
	<button
		{type}
		class={classes}
		style={variant === 'primary' ? puckStyle : undefined}
		disabled={disabled || busy}
		aria-busy={busy}
		aria-expanded={expanded}
		{onclick}
		>{#if busy}<Loader size="sm" class="[&_.dot]:bg-current" />{/if}{@render children()}</button
	>
{/if}
