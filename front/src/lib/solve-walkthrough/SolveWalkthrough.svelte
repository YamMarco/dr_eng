<script lang="ts">
	// Slides over a canvas: the exam page scrolls underneath, and a floating
	// card holds the current step's caption and drives the canvas.
	import Md from '$lib/components/Md.svelte';
	import Button from '$lib/components/Button.svelte';
	import SolveCanvas from './SolveCanvas.svelte';
	import type { Walkthrough } from './model';

	let { walkthrough, onDone }: { walkthrough: Walkthrough; onDone?: () => void } = $props();

	let step = $state(0);
	let last = $derived(step === walkthrough.steps.length - 1);

	function next() {
		if (last) onDone?.();
		else step++;
	}
</script>

<div class="relative flex min-h-0 flex-1 flex-col">
	<!-- Bottom padding leaves room to scroll the last lines above the card. -->
	<div class="min-h-0 flex-1 overflow-y-auto px-4 pt-10 pb-72">
		<div class="mx-auto max-w-lg">
			<SolveCanvas {walkthrough} {step} />
		</div>
	</div>

	<div class="pointer-events-none absolute inset-x-0 bottom-0 px-3 pb-3">
		<div
			class="pointer-events-auto mx-auto max-w-lg rounded-3xl border border-line bg-surface/95 p-4 shadow-xl backdrop-blur"
		>
			<div class="mb-3 flex gap-1" aria-hidden="true">
				{#each walkthrough.steps, i (i)}
					<span
						class="h-1.5 flex-1 rounded-full transition-colors {i <= step ? 'bg-brand' : 'bg-line'}"
					></span>
				{/each}
			</div>

			{#key step}
				<p class="caption min-h-18 text-lg leading-relaxed">
					<Md text={walkthrough.steps[step].caption} />
				</p>
			{/key}

			<div class="mt-3 flex gap-2">
				<Button variant="secondary" class="w-auto!" disabled={step === 0} onclick={() => step--}>
					הקודם
				</Button>
				<Button onclick={next}>{last ? 'סיום' : 'הבא'}</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.caption {
		animation: fade-in 0.3s ease-out;
	}
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
	}
</style>
