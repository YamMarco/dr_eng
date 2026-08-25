<script lang="ts">
	import { goto } from '$app/navigation';
	import AppBar from '$lib/components/AppBar.svelte';
	import WordBank from '$lib/components/WordBank.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let section = $derived(data.section);
	let base = $derived(`/unit/${group.id}/module/${mod.id}/section/${section.id}`);
</script>

<AppBar title={data.set.title} back="{base}/questions/words" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	{#key data.set.id}
		<WordBank
			set={data.set}
			nextLabel={data.next ? 'לסט הבא' : 'חזרה לרשימת הסטים'}
			onnext={() =>
				goto(data.next ? `${base}/questions/words/${data.next.id}` : `${base}/questions/words`)}
		/>
	{/key}
</main>
