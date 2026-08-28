<script lang="ts">
	import type { TimeResultScreen } from './types';
	import { getLessonSession } from './session.svelte';

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: TimeResultScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	const session = getLessonSession();
	let seconds = $derived(((session[screen.timerKey] ?? 0) / 1000).toFixed(1));

	export function primaryAction() {
		onAdvance();
	}
</script>

<div class="flex flex-col items-center pt-6 text-center">
	<p class="text-lg font-semibold">{screen.label}</p>
	<p class="mt-2 text-3xl font-extrabold text-brand-dark tabular" dir="ltr">{seconds}s</p>
</div>
