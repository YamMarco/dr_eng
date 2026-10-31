<script lang="ts">
	import { Flag } from '@lucide/svelte';
	import type { OpenerScreen } from './types';
	import { mdBlock, mdInline, textDir, textLang } from './miniMarkdown';
	import { openerLevel } from './openerLevels';

	// disabled/label are write-only here (never overridden): the runner reads
	// them through the bindable props to size and gate its single button.
	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: OpenerScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	let motion = $derived(screen.motion ?? 'full');
	let preset = $derived(openerLevel(screen.level));

	export function primaryAction() {
		onAdvance();
	}
</script>

<div
	class="flex flex-1 flex-col items-center justify-center gap-5 py-4 text-center"
	class:motion-full={motion === 'full'}
	class:motion-soft={motion === 'soft'}
>
	<div
		class="badge"
		aria-hidden="true"
		style={preset ? `--from: ${preset.from}; --to: ${preset.to}` : undefined}
	>
		<span class="disc">
			{#if screen.badge || preset}
				<span class="glyph text-5xl font-extrabold tabular-nums"
					>{screen.badge || preset?.emoji}</span
				>
			{:else}
				<Flag size={44} strokeWidth={2.25} />
			{/if}
		</span>
	</div>
	{#if screen.kicker}
		<span
			class="rise rounded-full bg-brand-soft px-4 py-1.5 text-base font-semibold text-brand-dark"
			style="--delay: 120ms"
			dir={textDir(screen.kicker)}
			lang={textLang(screen.kicker)}>{screen.kicker}</span
		>
	{/if}
	<!-- eslint-disable svelte/no-at-html-tags -->
	<h2
		class="rise max-w-lg text-3xl/snug font-bold text-balance text-ink"
		style="--delay: 200ms"
		dir={textDir(screen.title)}
		lang={textLang(screen.title)}
	>
		{@html mdInline(screen.title)}
	</h2>
	{#if screen.subtitle}
		<div class="rise flex max-w-lg flex-col gap-1 text-xl text-muted" style="--delay: 300ms">
			{@html mdBlock(screen.subtitle)}
		</div>
	{/if}
	<!-- eslint-enable svelte/no-at-html-tags -->
</div>

<style>
	.badge {
		position: relative;
		display: grid;
		place-items: center;
		width: 7.5rem;
		height: 7.5rem;
		border-radius: 9999px;
		/* A level preset sets --from/--to inline; otherwise the brand colors.
		   The color is a thick ring; the glyph sits on a plain disc inside it,
		   so no emoji ever melts into a same-hue background. */
		background: linear-gradient(
			145deg,
			var(--from, var(--color-brand)),
			var(--to, var(--color-brand-dark))
		);
		box-shadow: 0 12px 28px -8px color-mix(in oklab, var(--to, var(--color-brand)), transparent 30%);
	}
	.disc {
		display: grid;
		place-items: center;
		width: calc(100% - 1rem);
		height: calc(100% - 1rem);
		border-radius: inherit;
		background: var(--color-surface);
		color: var(--to, var(--color-brand-dark));
	}

	/* full: the badge pops in, its glyph wiggles, two rings ripple out a few
	   times, lines rise in. */
	.motion-full .badge {
		animation: badge-pop 520ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
	}
	.motion-full .glyph {
		display: inline-block;
		animation: wiggle 700ms ease-in-out 520ms;
	}
	.motion-full .badge::before,
	.motion-full .badge::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		border: 2px solid var(--to, var(--color-brand));
		opacity: 0;
		animation: ripple 2.4s ease-out 500ms 3;
	}
	.motion-full .badge::after {
		animation-delay: 1.7s;
	}
	/* soft: only the lines rise in. none: everything static. */
	.motion-full .rise,
	.motion-soft .rise {
		animation: rise 420ms cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0ms) both;
	}

	@keyframes badge-pop {
		from {
			transform: scale(0.4) rotate(-12deg);
			opacity: 0;
		}
	}
	@keyframes wiggle {
		25% {
			transform: rotate(-12deg) scale(1.1);
		}
		50% {
			transform: rotate(10deg) scale(1.1);
		}
		75% {
			transform: rotate(-6deg);
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
		.badge,
		.glyph,
		.rise {
			animation: none !important;
		}
		.badge::before,
		.badge::after {
			display: none;
		}
	}
</style>
