<script lang="ts">
	// Live render of one screen using the real runtime component, inside a
	// phone-sized frame. Re-mounts on every edit so timers/selection reset.
	// Provides the score/session contexts the screen components expect.
	// Detachable — part of src/lib/content-edit/.
	import { untrack } from 'svelte';
	import { screenComponents } from '$lib/lesson-screens/registry';
	import { createLessonSession } from '$lib/lesson-screens/session.svelte';
	import { createLessonScore } from '$lib/lesson-screens/score.svelte';
	import { countQuestions, isScreenEmpty } from '$lib/lesson-screens/types';
	import type { LessonScreen } from '$lib/lesson-screens/types';

	let { screen }: { screen: LessonScreen } = $props();

	// Contexts must exist before the child mounts — screen components call
	// getLessonScore()/getLessonSession() at the top of their script.
	createLessonSession();
	const score = createLessonScore(untrack(() => countQuestions(screen)));

	// A stable string that changes whenever any field changes -> forces remount.
	let sig = $derived(JSON.stringify(screen));

	// Reset the shared score each remount so the footer counter isn't cumulative.
	$effect(() => {
		sig;
		score.correct = 0;
		score.total = countQuestions(screen);
	});

	// eslint-disable-next-line no-useless-assignment
	let disabled = $state(true);
	// eslint-disable-next-line no-useless-assignment
	let label = $state('');
	const noop = () => {};

	let Comp = $derived(screenComponents[screen.type]);
</script>

<div class="flex flex-col items-center gap-2">
	<div
		class="w-full max-w-[390px] overflow-hidden rounded-[2rem] border-8 border-ink/80 bg-canvas shadow-xl"
	>
		<div class="h-[560px] overflow-y-auto px-4 py-5">
			{#if isScreenEmpty(screen)}
				<p class="pt-20 text-center text-sm text-muted">
					מסך ריק - ידולג בנגן.<br />מלאו את השדות כדי לראות תצוגה.
				</p>
			{:else}
				{#key sig}
					<Comp {screen} onAdvance={noop} bind:disabled bind:label />
				{/key}
			{/if}
		</div>
		<div
			class="flex items-center justify-between border-t border-line/70 px-4 py-2 text-xs text-muted"
		>
			<span>ציון: {score.correct}/{score.total}</span>
			<span dir="ltr">{label || (disabled ? 'primary disabled' : 'primary ready')}</span>
		</div>
	</div>
	<p class="text-center text-xs text-muted">תצוגה חיה - לחיצות כאן לא נשמרות</p>
</div>
