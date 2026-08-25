<script lang="ts">
	import { goto } from '$app/navigation';
	import AppBar from '$lib/components/AppBar.svelte';
	import WordBank from '$lib/components/WordBank.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let mod = $derived(data.module);
</script>

<AppBar title={data.set.title} back="/module/{mod.id}/questions/words" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	{#key data.set.id}
		<WordBank
			set={data.set}
			nextLabel={data.next ? 'לסט הבא' : 'חזרה לרשימת הסטים'}
			onnext={() =>
				goto(
					data.next
						? `/module/${mod.id}/questions/words/${data.next.id}`
						: `/module/${mod.id}/questions/words`
				)}
		/>
	{/key}
</main>
