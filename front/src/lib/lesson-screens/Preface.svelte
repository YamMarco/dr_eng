<script lang="ts">
	import type { PrefaceScreen } from './types';

	// disabled is write-only here: always allowed, we just need it declared
	// bindable so the runner's footer resets correctly on every screen.
	// eslint-disable-next-line no-useless-assignment
	let { screen, disabled = $bindable(false) }: { screen: PrefaceScreen; disabled?: boolean } =
		$props();
</script>

<p class="text-lg leading-relaxed">{screen.text}</p>
