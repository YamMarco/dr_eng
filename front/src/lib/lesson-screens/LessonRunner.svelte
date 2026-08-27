<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { screenComponents } from './registry';
	import { createLessonSession } from './session.svelte';
	import type { LessonPart } from '$lib/lessonContent';

	type Props = {
		part: LessonPart;
		partLabel: string;
		onExit: () => void;
		/** Called once the student finishes every screen in this part. */
		onFinish: () => void;
	};

	let { part, partLabel, onExit, onFinish }: Props = $props();

	createLessonSession();

	let screenIndex = $state(0);
	// Bound down into whichever screen component is active — it decides when
	// "continue" is allowed (e.g. an unanswered mcq keeps this true).
	let footerDisabled = $state(false);
	let justFinished = $state(false);

	let currentScreen = $derived(part.screens[screenIndex]);
	let isLastScreen = $derived(screenIndex === part.screens.length - 1);
	let ScreenComponent = $derived(currentScreen ? screenComponents[currentScreen.type] : undefined);

	function advance() {
		if (isLastScreen) {
			justFinished = true;
		} else {
			screenIndex += 1;
		}
	}
</script>

<div class="fixed inset-0 z-50 flex flex-col bg-canvas">
	<AppBar title={partLabel} onback={onExit} backLabel={i18n.dict.lesson.exitLabel} />

	<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto px-4 pt-6 pb-28">
		{#if justFinished}
			<div class="flex flex-col items-center pt-10 text-center">
				<span
					class="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-8 w-8"
						aria-hidden="true"
					>
						<path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z" />
						<path d="m9 12 2 2 4-4" />
					</svg>
				</span>
				<h2 class="mt-4 text-2xl font-extrabold">{i18n.dict.lesson.completeTitle}</h2>
				<p class="mt-2 leading-relaxed text-muted">{i18n.dict.lesson.completeDesc}</p>
			</div>
		{:else if currentScreen && ScreenComponent}
			<!-- Force a full remount per screen so each component's own local
			     state (selected answer, timers, ...) starts fresh every time. -->
			{#key screenIndex}
				<ScreenComponent screen={currentScreen} bind:disabled={footerDisabled} />
			{/key}
		{/if}
	</main>

	<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
		<div class="mx-auto max-w-lg">
			{#if justFinished}
				<Button onclick={onFinish}>{i18n.dict.lesson.backToPath}</Button>
			{:else}
				<Button onclick={advance} disabled={footerDisabled}>
					{isLastScreen ? i18n.dict.lesson.doneButton : i18n.dict.lesson.continueButton}
				</Button>
			{/if}
		</div>
	</div>
</div>
