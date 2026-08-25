<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import { wordSets } from '$lib/wordSets';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let mod = $derived(data.module);
</script>

<AppBar title="מילים — {mod.title}" back="/module/{mod.id}/questions" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<p class="mb-6 leading-relaxed text-muted">בחרו סט תרגילים להשלמת מילים.</p>

	<ul class="flex flex-col gap-4">
		{#each wordSets as set, i (set.id)}
			<li>
				<a
					href="/module/{mod.id}/questions/words/{set.id}"
					class="flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
				>
					<span
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-lg font-extrabold text-ink/70"
					>
						{i + 1}
					</span>
					<span class="min-w-0 flex-1">
						<span class="block text-lg font-bold">{set.title}</span>
						<span class="mt-1 block text-sm leading-relaxed text-muted">
							{set.sentences.length} משפטים · {set.words.length} מילים בבנק
						</span>
					</span>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5 shrink-0 text-muted rtl:rotate-180"
						aria-hidden="true"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</a>
			</li>
		{/each}
	</ul>
</main>
