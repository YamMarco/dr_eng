<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let mod = $derived(data.module);
</script>

<AppBar title="שאלות — {mod.title}" back="/module/{mod.id}" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<p class="mb-6 leading-relaxed text-muted">בחרו סוג תרגיל כדי להתחיל לתרגל.</p>

	<a
		href="/module/{mod.id}/questions/words"
		class="flex w-full items-start gap-4 rounded-3xl bg-surface p-5 text-right shadow-md ring-1 shadow-ink/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
	>
		<span
			class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-dark"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-6 w-6"
				aria-hidden="true"
			>
				<path d="M4 6h16" />
				<path d="M4 12h6" />
				<path d="M4 18h10" />
				<path d="m16 15 3 3 3-3" />
				<path d="M19 6v12" />
			</svg>
		</span>
		<span class="min-w-0 flex-1">
			<span class="block text-xl font-bold">מילים</span>
			<span class="mt-1 block text-sm leading-relaxed text-muted">
				השלמת המילה המתאימה ביותר מתוך בנק מילים
			</span>
		</span>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="mt-3 h-5 w-5 shrink-0 self-start text-muted rtl:rotate-180"
			aria-hidden="true"
		>
			<path d="m9 18 6-6-6-6" />
		</svg>
	</a>
</main>
