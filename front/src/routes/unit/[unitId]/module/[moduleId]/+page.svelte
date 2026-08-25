<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let mod = $derived(data.mod);
	let group = $derived(data.group);
</script>

<AppBar title="מודול {mod.letter}" back="/unit/{group.id}" backLabel="חזרה לרשימת המודולים" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	{#if mod.sections.length === 0}
		<div
			class="flex flex-col items-center rounded-3xl border-2 border-dashed border-line bg-surface/60 px-6 py-14 text-center"
		>
			<span
				class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-ink/60"
			>
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
					<circle cx="12" cy="12" r="9" />
					<path d="M12 8v4l2.5 2.5" />
				</svg>
			</span>
			<p class="mt-4 font-semibold">תוכן מודול {mod.letter} יתווסף בקרוב</p>
		</div>
	{:else}
		<p class="mb-6 leading-relaxed text-muted">בחרו חלק כדי להתחיל לתרגל.</p>
		<ul class="flex flex-col gap-4">
			{#each mod.sections as section, i (section.id)}
				<li>
					<a
						href="/unit/{group.id}/module/{mod.id}/section/{section.id}"
						class="flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
					>
						<span
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-lg font-extrabold text-brand-dark"
						>
							{i + 1}
						</span>
						<span class="min-w-0 flex-1" dir="ltr">
							<span class="block text-lg font-bold">{section.label}</span>
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
	{/if}
</main>
