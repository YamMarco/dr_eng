<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let lesson = $derived(data.lesson);
</script>

<AppBar
	title="{i18n.dict.lesson.titlePrefix} {lesson.id}"
	back="/unit/{group.id}/module/{mod.id}/lessons"
/>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<h1 class="text-2xl font-extrabold">
		{#if lesson.titleEn}
			<span dir="ltr">{lesson.titleEn}</span> ({lesson.titleHe})
		{:else}
			{lesson.titleHe}
		{/if}
	</h1>

	<div
		class="mt-6 flex flex-col items-center rounded-3xl border-2 border-dashed border-line bg-surface/60 px-6 py-14 text-center"
	>
		<span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-ink/60">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-7 w-7"
				aria-hidden="true"
			>
				<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
				<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
			</svg>
		</span>
		<p class="mt-4 font-semibold">{i18n.dict.lesson.placeholderTitle}</p>
		<p class="mt-1 text-sm leading-relaxed text-muted">{i18n.dict.lesson.placeholderDesc}</p>
	</div>
</main>
