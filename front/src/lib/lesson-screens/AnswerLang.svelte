<script lang="ts">
	// Tells the student which language to answer in, right above an open or voice input.
	import { Languages, Mic } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	let { lang = 'en', speak = false }: { lang?: 'en' | 'he'; speak?: boolean } = $props();
	let t = $derived(i18n.dict.answerLang);
</script>

<p
	class="mt-3 flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold {lang ===
	'en'
		? 'bg-brand-soft text-brand-dark'
		: 'bg-accent-soft text-ink/80'}"
>
	{#if speak}
		<Mic size={16} aria-hidden="true" />
		{t.speak}
	{:else}
		<Languages size={16} aria-hidden="true" />
		{lang === 'en' ? t.en : t.he}
	{/if}
</p>
