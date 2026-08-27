<script lang="ts">
	import type { QuestionPreviewScreen } from './types';

	// disabled is write-only here: always allowed, we just need it declared
	// bindable so the runner's footer resets correctly on every screen.
	let {
		screen,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false)
	}: { screen: QuestionPreviewScreen; disabled?: boolean } = $props();
</script>

<p class="font-semibold">{screen.intro}</p>
<ol class="mt-4 flex flex-col gap-3">
	{#each screen.prompts as prompt (prompt)}
		<li class="rounded-2xl bg-surface p-4 ring-1 shadow-ink/5 ring-line/70">{prompt}</li>
	{/each}
</ol>
