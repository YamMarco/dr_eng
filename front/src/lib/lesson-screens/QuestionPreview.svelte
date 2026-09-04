<script lang="ts">
	import type { QuestionPreviewScreen } from './types';
	import { mdInline } from './miniMarkdown';

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: QuestionPreviewScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	export function primaryAction() {
		onAdvance();
	}
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<p class="font-semibold whitespace-pre-line">{@html mdInline(screen.intro)}</p>
<ol class="mt-4 flex flex-col gap-3">
	{#each screen.prompts as prompt (prompt)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<li class="rounded-2xl bg-surface p-4 ring-1 shadow-ink/5 ring-line/70">{@html mdInline(prompt)}</li>
	{/each}
</ol>
