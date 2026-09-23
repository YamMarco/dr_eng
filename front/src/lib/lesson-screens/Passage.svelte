<script lang="ts">
	import PassageBody from './PassageBody.svelte';
	import type { PassageScreen } from './types';

	// Teaching content, like preface/summary — never scored, always advances
	// immediately. disabled/label are write-only (never overridden).
	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: PassageScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	export function primaryAction() {
		onAdvance();
	}
</script>

<PassageBody passage={screen} />
