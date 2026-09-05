<script lang="ts">
	import type { TimedReadingScreen } from './types';
	import { getLessonSession } from './session.svelte';

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: TimedReadingScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	const session = getLessonSession();
	const startedAt = performance.now();
	let now = $state(startedAt);
	let stopped = $state(false);

	// Keeps ticking — and keeps writing the running total into the shared
	// session — for as long as this screen stays mounted.
	$effect(() => {
		if (stopped) return;
		const interval = setInterval(() => {
			now = performance.now();
			session[screen.timerKey] = now - startedAt;
		}, 100);
		return () => clearInterval(interval);
	});

	export function primaryAction() {
		stopped = true;
		session[screen.timerKey] = performance.now() - startedAt;
		onAdvance();
	}
</script>

<div class="flex items-center justify-between">
	<span class="font-semibold text-muted">{screen.label}</span>
	<span
		class="rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-dark tabular"
		dir="ltr"
	>
		{((now - startedAt) / 1000).toFixed(1)}s
	</span>
</div>
<p class="mt-4 leading-relaxed whitespace-pre-line">{screen.text}</p>
