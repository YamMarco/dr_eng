<script lang="ts">
	import Sheet from '$lib/components/Sheet.svelte';
	import PassageBody from '$lib/lesson-screens/PassageBody.svelte';
	import type { PassageScreen } from '$lib/lesson-screens/types';
	import { i18n } from '$lib/i18n/index.svelte';

	let { passage, open, onClose }: { passage: PassageScreen; open: boolean; onClose: () => void } =
		$props();
</script>

<Sheet {open} title={passage.title ?? i18n.dict.quiz.backToPassage} onclose={onClose}>
	<PassageBody {passage} />
</Sheet>
