<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from '$lib/components/Button.svelte';

	// The "how it works" window shown before a writing-lab prototype starts:
	// a headline card, a list of steps (each with a short marker, e.g. "1" or
	// "10"), optional extra content, a small note and a start button.
	let {
		title,
		body,
		steps,
		note,
		startLabel,
		onstart,
		children
	}: {
		title: string;
		body: string;
		steps: { marker: string; title: string; detail: string }[];
		note: string;
		startLabel: string;
		onstart: () => void;
		children?: Snippet;
	} = $props();
</script>

<div class="space-y-4">
	<div class="rounded-2xl bg-brand-soft/60 p-4">
		<h3 class="font-extrabold">{title}</h3>
		<p class="mt-2 text-sm leading-relaxed text-ink/75">{body}</p>
	</div>

	<ol class="space-y-3">
		{#each steps as step (step.title)}
			<li class="flex gap-3 rounded-2xl border border-line p-3">
				<span
					class="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-brand px-1.5 text-sm font-extrabold text-white"
					dir="ltr">{step.marker}</span
				>
				<div>
					<p class="font-bold">{step.title}</p>
					<p class="mt-0.5 text-sm text-muted">{step.detail}</p>
				</div>
			</li>
		{/each}
	</ol>

	{@render children?.()}

	<p class="rounded-2xl border border-dashed border-line p-3 text-xs leading-relaxed text-muted">
		{note}
	</p>

	<Button onclick={onstart}>{startLabel}</Button>
</div>
