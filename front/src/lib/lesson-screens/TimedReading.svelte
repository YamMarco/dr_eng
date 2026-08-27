<script lang="ts">
	import type { TimedReadingScreen } from './types';
	import { getLessonSession } from './session.svelte';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// disabled is write-only here: always allowed, we just need it declared
	// bindable so the runner's footer resets correctly on every screen.
	// eslint-disable-next-line no-useless-assignment
	let { screen, disabled = $bindable(false) }: { screen: TimedReadingScreen; disabled?: boolean } =
		$props();

	const session = getLessonSession();
	const startedAt = performance.now();
	let now = $state(startedAt);

	// Keeps ticking — and keeps writing the running total into the shared
	// session — for as long as this screen stays mounted.
	$effect(() => {
		const interval = setInterval(() => {
			now = performance.now();
			session[screen.timerKey] = now - startedAt;
		}, 100);
		return () => clearInterval(interval);
	});
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.timedReading} />
<div class="flex items-center justify-between">
	<span class="font-semibold text-muted">{screen.label}</span>
	<span
		class="rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-dark tabular"
		dir="ltr"
	>
		{((now - startedAt) / 1000).toFixed(1)}s
	</span>
</div>
<p class="mt-4 leading-relaxed">{screen.text}</p>
