<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import { modules } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let moduleList = $derived(group.moduleIds.map((id) => modules[id]));
</script>

<AppBar
	title={`${group.units} ${i18n.dict.home.unitsSuffix}`}
	back="/"
	backLabel={i18n.dict.unit.backLabel}
/>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<p class="mb-6 leading-relaxed text-muted">{i18n.dict.unit.subtitle}</p>

	{#if moduleList.length === 0}
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
			<p class="mt-4 font-semibold">{i18n.dict.unit.emptyTitle}</p>
		</div>
	{:else}
		<ul class="flex flex-col gap-4">
			{#each moduleList as mod (mod.id)}
				{@const placeholder = mod.sections.length === 0}
				<li>
					{#if placeholder}
						<div
							class="flex items-center gap-4 rounded-3xl bg-surface p-5 opacity-60 ring-1 ring-line/70"
						>
							<span
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-line/60 text-sm font-extrabold text-muted"
								dir="ltr"
							>
								{mod.letter}
							</span>
							<span class="min-w-0 flex-1">
								<span class="block text-lg font-bold"
									>{i18n.dict.unit.modulePrefix} {mod.letter}</span
								>
								<span class="mt-1 block text-sm text-muted">{i18n.dict.common.comingSoon}</span>
							</span>
						</div>
					{:else}
						<a
							href="/unit/{group.id}/module/{mod.id}"
							class="flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
						>
							<span
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-lg font-extrabold text-brand-dark"
								dir="ltr"
							>
								{mod.letter}
							</span>
							<span class="min-w-0 flex-1">
								<span class="block text-lg font-bold"
									>{i18n.dict.unit.modulePrefix} {mod.letter}</span
								>
								<span class="mt-1 block text-sm text-muted" dir="ltr">
									{mod.sections.map((s) => s.label).join(' · ')}
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
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</main>
