<script lang="ts">
	// A short, self-contained confetti burst — no library, just a handful of
	// absolutely-positioned pieces falling with the CSS animation in
	// layout.css. Mounts once and never re-triggers (the parent conditionally
	// renders this component when it wants a burst).
	const COLORS = ['#2a9d8f', '#e9c46a', '#e76f51', '#8b5cf6', '#38bdf8'];
	const COUNT = 18;

	const reducedMotion =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const pieces = reducedMotion
		? []
		: Array.from({ length: COUNT }, (_, i) => ({
				id: i,
				left: Math.random() * 100,
				delay: Math.random() * 150,
				duration: 700 + Math.random() * 500,
				distance: 160 + Math.random() * 120,
				spin: (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 360),
				size: 6 + Math.random() * 5,
				color: COLORS[i % COLORS.length]
			}));
</script>

<div
	class="pointer-events-none absolute inset-x-0 top-0 z-20 h-0 overflow-visible"
	aria-hidden="true"
>
	{#each pieces as piece (piece.id)}
		<span
			class="absolute block animate-confetti-fall rounded-sm"
			style="
				left: {piece.left}%;
				width: {piece.size}px;
				height: {piece.size * 0.4}px;
				background: {piece.color};
				animation-delay: {piece.delay}ms;
				--confetti-duration: {piece.duration}ms;
				--confetti-fall-distance: {piece.distance}px;
				--confetti-spin: {piece.spin}deg;
			"
		></span>
	{/each}
</div>
