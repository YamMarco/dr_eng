<script lang="ts">
	import { Flag } from '@lucide/svelte';
	import type { PrefaceScreen } from './types';
	import { mdBlock, mdInline, textDir } from './miniMarkdown';
	import { openerParts } from './opener';

	// disabled/label are write-only here (never overridden): the runner reads
	// them through the bindable props to size and gate its single button.
	let {
		screen,
		onAdvance,
		opener = false,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: PrefaceScreen;
		onAdvance: () => void;
		/** First screen of a round (or of the lesson): shown as an animated title card. */
		opener?: boolean;
		disabled?: boolean;
		label?: string;
	} = $props();

	let parts = $derived(opener ? openerParts(screen.text) : undefined);
	let badgeNumber = $derived(parts?.kicker.match(/\d+/)?.[0] ?? '');

	export function primaryAction() {
		onAdvance();
	}
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
{#if parts}
	<div class="flex flex-1 flex-col items-center justify-center gap-4 py-4 text-center">
		<div class="opener-badge" aria-hidden="true">
			{#if parts.emoji}
				<span class="text-4xl">{parts.emoji}</span>
			{:else if badgeNumber}
				<span class="text-4xl font-extrabold tabular-nums">{badgeNumber}</span>
			{:else}
				<Flag size={34} strokeWidth={2.25} />
			{/if}
		</div>
		{#if parts.kicker}
			<span
				class="rise rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-dark"
				style="--delay: 120ms"
				dir={textDir(parts.kicker)}>{parts.kicker}</span
			>
		{/if}
		<h2
			class="rise max-w-md text-2xl/snug font-bold text-balance text-ink"
			style="--delay: 200ms"
			dir={parts.dir ?? textDir(parts.title)}
		>
			{@html mdInline(parts.title)}
		</h2>
		{#if parts.body && !parts.body.includes('\n') && parts.body.length <= 140}
			<div
				class="rise max-w-md text-lg text-muted"
				style="--delay: 300ms"
				dir={screen.dir ?? undefined}
			>
				{@html mdBlock(parts.body)}
			</div>
		{:else if parts.body}
			<div
				class="rise mt-2 flex w-full max-w-lg flex-col gap-1 rounded-2xl border border-line bg-surface p-4 text-start text-lg leading-relaxed"
				style="--delay: 320ms"
				dir={screen.dir ?? undefined}
			>
				{@html mdBlock(parts.body)}
			</div>
		{/if}
	</div>
{:else}
	<div class="flex flex-col gap-1 text-lg leading-relaxed" dir={screen.dir ?? undefined}>
		{@html mdBlock(screen.text)}
	</div>
{/if}

<!-- eslint-enable svelte/no-at-html-tags -->

<style>
	.opener-badge {
		position: relative;
		display: grid;
		place-items: center;
		width: 5.5rem;
		height: 5.5rem;
		border-radius: 9999px;
		color: var(--color-surface);
		background: linear-gradient(145deg, var(--color-brand), var(--color-brand-dark));
		box-shadow: 0 10px 24px -8px color-mix(in oklab, var(--color-brand), transparent 30%);
		animation: badge-pop 520ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
	}
	/* Two soft rings ripple out of the badge a few times, then settle. */
	.opener-badge::before,
	.opener-badge::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		border: 2px solid var(--color-brand);
		opacity: 0;
		animation: ripple 2.4s ease-out 500ms 3;
	}
	.opener-badge::after {
		animation-delay: 1.7s;
	}
	.rise {
		animation: rise 420ms cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0ms) both;
	}
	@keyframes badge-pop {
		from {
			transform: scale(0.4) rotate(-12deg);
			opacity: 0;
		}
	}
	@keyframes ripple {
		0% {
			transform: scale(1);
			opacity: 0.5;
		}
		100% {
			transform: scale(1.7);
			opacity: 0;
		}
	}
	@keyframes rise {
		from {
			transform: translateY(12px);
			opacity: 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.opener-badge,
		.rise {
			animation: none;
		}
		.opener-badge::before,
		.opener-badge::after {
			display: none;
		}
	}
</style>
