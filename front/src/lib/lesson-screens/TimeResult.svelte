<script lang="ts">
	import type { TimeResultScreen } from './types';
	import { getLessonSession } from './session.svelte';

	// disabled is write-only here: always allowed, we just need it declared
	// bindable so the runner's footer resets correctly on every screen.
	// eslint-disable-next-line no-useless-assignment
	let { screen, disabled = $bindable(false) }: { screen: TimeResultScreen; disabled?: boolean } =
		$props();

	const session = getLessonSession();
	let seconds = $derived(((session[screen.timerKey] ?? 0) / 1000).toFixed(1));
</script>

<div class="flex flex-col items-center pt-6 text-center">
	<p class="text-lg font-semibold">{screen.label}</p>
	<p class="mt-2 text-3xl font-extrabold text-brand-dark tabular" dir="ltr">{seconds}s</p>
</div>
