<script lang="ts">
	import { Flame } from '@lucide/svelte';

	// The weekly-streak flame. Lit = practiced this week: a living three-layer
	// flame (pure SVG + CSS) that ignites once per session, then keeps burning.
	// Unlit = the plain outline icon.
	type Props = { days: number; goal: number; size?: number };
	let { days, goal, size = 20 }: Props = $props();

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
		width={size}
		height={size}
		class="flame"
		class:ignite
		class:full
		aria-hidden="true"
	>
		<path
			class="back"
			d="M12 1c1.2 3.8 7.5 6.6 7.5 12.6A7.5 7.5 0 0 1 4.5 13.6c0-3 1.4-5.1 3-6.6.3 2 1.3 3.2 2.6 3.8C9.8 6.6 10.8 3.6 12 1z"
		/>
		<path
			class="mid"
			d="M12.5 6c1 2.6 5 4.6 5 8.8a5.5 5.5 0 0 1-11 0c0-2.2 1-3.6 2.2-4.6.3 1.3.9 2.1 1.8 2.5-.2-2.6.6-4.9 2-6.7z"
		/>
		<path
			class="core"
			d="M12 11.5c.8 1.9 3.3 3.2 3.3 5.8a3.3 3.3 0 0 1-6.6 0c0-1.6.9-2.8 1.8-3.6.2.8.6 1.3 1.1 1.6-.1-1.4 0-2.6.4-3.8z"
		/>
	</svg>
{:else}
	<Flame size={size * 0.8} class="text-muted" aria-hidden="true" />
{/if}

<style>
	.flame {
		overflow: visible;
		filter: drop-shadow(0 0 2px rgb(251 146 60 / 0.55));
	}
	.flame.full {
		filter: drop-shadow(0 0 4px rgb(249 115 22 / 0.8));
	}
	/* Each layer stretches up from its base at its own pace - flicker, not bounce. */
	.back,
	.mid,
	.core {
		transform-box: fill-box;
		transform-origin: 50% 100%;
	}
	.back {
		fill: #f97316;
		animation: flick-back 1.3s ease-in-out infinite;
	}
	.full .back {
		fill: #ea580c;
	}
	.mid {
		fill: #fb923c;
		animation: flick-mid 0.85s ease-in-out -0.3s infinite;
	}
	.core {
		fill: #fde047;
		animation: flick-core 0.55s ease-in-out -0.1s infinite;
	}

	/* First view of the session: grows from a spark, flares, settles. */
	.ignite {
		transform-origin: 50% 90%;
		animation: ignite 1s cubic-bezier(0.3, 1.5, 0.5, 1) both;
	}

	@keyframes flick-back {
		0%,
		100% {
			transform: scale(1, 1) skewX(0);
		}
		30% {
			transform: scale(0.97, 1.07) skewX(-3deg);
		}
		65% {
			transform: scale(1.02, 0.96) skewX(3deg);
		}
	}
	@keyframes flick-mid {
		0%,
		100% {
			transform: scale(1, 1) skewX(0);
		}
		40% {
			transform: scale(0.94, 1.13) skewX(5deg);
		}
		75% {
			transform: scale(1.04, 0.93) skewX(-4deg);
		}
	}
	@keyframes flick-core {
		0%,
		100% {
			transform: scale(1, 1);
		}
		50% {
			transform: scale(0.9, 1.2);
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
		.back,
		.mid,
		.core {
			animation: none !important;
		}
	}
</style>
