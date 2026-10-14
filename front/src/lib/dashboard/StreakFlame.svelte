<script lang="ts">
	import { Flame } from '@lucide/svelte';

	// The weekly-streak flame. Lit = practiced this week: it ignites once per
	// session (first time home is opened), then keeps a gentle flicker.
	type Props = { days: number; goal: number };
	let { days, goal }: Props = $props();

	const SESSION_KEY = 'flame-lit';

	let lit = $derived(days > 0);
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

<span class="flame inline-flex" class:lit class:ignite={lit && ignite}>
	<Flame
		size={16}
		class={days >= goal ? 'text-orange-500' : lit ? 'text-orange-400' : 'text-muted'}
		aria-hidden="true"
	/>
</span>

<style>
	.lit {
		transform-origin: 50% 90%;
		animation: flicker 2.4s ease-in-out infinite;
	}
	.lit.ignite {
		animation:
			ignite 900ms cubic-bezier(0.3, 1.4, 0.5, 1) both,
			flicker 2.4s ease-in-out 900ms infinite;
	}
	@keyframes ignite {
		0% {
			transform: scale(0.3);
			opacity: 0;
			filter: grayscale(1);
		}
		40% {
			opacity: 1;
		}
		60% {
			transform: scale(1.35);
			filter: grayscale(0) drop-shadow(0 0 6px rgb(251 146 60 / 0.9));
		}
		100% {
			transform: scale(1);
			filter: drop-shadow(0 0 0 transparent);
		}
	}
	@keyframes flicker {
		0%,
		100% {
			transform: scale(1) rotate(0);
		}
		30% {
			transform: scale(1.06, 0.96) rotate(-3deg);
		}
		60% {
			transform: scale(0.97, 1.05) rotate(2deg);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.flame {
			animation: none !important;
		}
	}
</style>
