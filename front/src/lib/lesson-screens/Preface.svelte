<script lang="ts">
	import type { PrefaceScreen } from './types';
	import { mdInline } from './miniMarkdown';

	// disabled/label are write-only here (never overridden): the runner reads
	// them through the bindable props to size and gate its single button.
	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: PrefaceScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	export function primaryAction() {
		onAdvance();
	}
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<p class="text-lg leading-relaxed whitespace-pre-line" dir={screen.dir ?? undefined}>
	{@html mdInline(screen.text)}
</p>
