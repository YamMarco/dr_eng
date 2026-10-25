<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { reducedMotion } from '$lib/motion';

	// A whole-shekel price that counts to its new value when the billing cycle flips.
	let { value }: { value: number } = $props();

	const shown = Tween.of(() => value, { duration: reducedMotion ? 0 : 300, easing: cubicOut });
</script>

<span class="tabular-nums">{Math.round(shown.current)}</span>
