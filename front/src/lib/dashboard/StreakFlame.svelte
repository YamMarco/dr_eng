<script lang="ts">
	import { Flame } from '@lucide/svelte';

	// The weekly-streak flame. Lit = practiced this week: a living two-layer
	// flame (pure SVG + CSS) that ignites once per session, then keeps burning.
	// Unlit = the plain outline icon.
	type Props = { days: number; goal: number };
	let { days, goal }: Props = $props();

	const SESSION_KEY = 'flame-lit';

	let lit = $derived(days > 0);
	let full = $derived(days >= goal);
	// Read once: ignite only on the session's first view.
	const ignite = (() => {
		try {
			if (sessionStorage.getItem(SESSION_KEY)) return false;
			sessionStorage.setItem(SESSION_KEY, '1');
			return true;
		} catch {
			return false;
		}
	})();
</script>

{#if lit}
	<svg
		viewBox="0 0 24 24"
		width="18"
		height="18"
		class="flame"
		class:ignite
		class:full
		aria-hidden="true"
	>
		<path
			class="outer"
			d="M12 1.5c.9 3.6 5.6 6.2 5.6 11.8a5.6 5.6 0 0 1-11.2 0c0-2.6 1.1-4.4 2.3-5.7.3 1.8 1.1 2.9 2.2 3.4-.2-3.9.4-7.1 1.1-9.5z"
		/>
		<path
			class="inner"
			d="M12 10.6c.7 1.8 2.9 3 2.9 5.5a2.9 2.9 0 0 1-5.8 0c0-1.7 1-2.9 1.8-3.8.2.9.6 1.5 1.1 1.7-.1-1.3-.1-2.3 0-3.4z"
		/>
	</svg>
{:else}
	<Flame size={16} class="text-muted" aria-hidden="true" />
{/if}

<style>
	.flame {
		overflow: visible;
		filter: drop-shadow(0 0 2px rgb(251 146 60 / 0.55));
	}
	.flame.full {
		filter: drop-shadow(0 0 4px rgb(249 115 22 / 0.8));
	}
	.outer,
	.inner {
		transform-box: fill-box;
		transform-origin: 50% 100%;
	}
	.outer {
		fill: #fb923c;
		animation: sway 1.1s ease-in-out infinite;
	}
	.full .outer {
		fill: #f97316;
	}
	.inner {
		fill: #fde047;
		animation: lick 0.6s ease-in-out infinite;
	}

	/* First view of the session: grows from a spark, flares, settles. */
	.ignite {
		transform-origin: 50% 90%;
		animation: ignite 1s cubic-bezier(0.3, 1.5, 0.5, 1) both;
	}

	@keyframes sway {
		0%,
		100% {
			transform: scale(1, 1) skewX(0);
		}
		25% {
			transform: scale(0.9, 1.14) skewX(-10deg) rotate(-4deg);
		}
		50% {
			transform: scale(1.08, 0.88) skewX(4deg);
		}
		75% {
			transform: scale(0.94, 1.1) skewX(10deg) rotate(4deg);
		}
	}
	@keyframes lick {
		0%,
		100% {
			transform: scale(1, 1) translateY(0);
		}
		35% {
			transform: scale(0.7, 1.35) translateY(-10%);
		}
		70% {
			transform: scale(1.15, 0.8) translateY(4%);
		}
	}
	@keyframes ignite {
		0% {
			transform: scale(0.2);
			opacity: 0;
		}
		35% {
			opacity: 1;
		}
		60% {
			transform: scale(1.45);
			filter: drop-shadow(0 0 8px rgb(251 146 60 / 1));
		}
		100% {
			transform: scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.flame,
		.outer,
		.inner {
			animation: none !important;
		}
	}
</style>
