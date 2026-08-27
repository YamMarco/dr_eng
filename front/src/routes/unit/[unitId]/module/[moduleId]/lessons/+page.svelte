<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import { getLessons } from '$lib/lessons';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);
	let lessons = $derived(getLessons(mod.id));
</script>

<AppBar title="{i18n.dict.lessons.titlePrefix} {mod.letter}" back={base} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	{#if lessons.length === 0}
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
			<p class="mt-4 font-semibold">{i18n.dict.lessons.emptyTitle(mod.letter)}</p>
		</div>
	{:else}
		<p class="mb-6 leading-relaxed text-muted">{i18n.dict.lessons.subtitle}</p>
		<ol class="flex flex-col gap-3">
			{#each lessons as lesson (lesson.id)}
				<li>
					<a
						href="{base}/lessons/{lesson.id}"
						class="flex items-center gap-4 rounded-2xl bg-surface p-4 shadow-sm ring-1 shadow-ink/5 ring-line/70 transition duration-150 hover:shadow-md active:scale-[0.99]"
					>
						<span
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-sm font-bold text-brand-dark"
						>
							{lesson.id}
						</span>
						<span class="min-w-0 flex-1">
							<span class="block font-semibold">
								{i18n.dict.lessons.lessonPrefix}
								{lesson.id}
								{#if lesson.titleEn}
									— <span dir="ltr">{lesson.titleEn}</span> ({lesson.titleHe})
								{:else}
									— {lesson.titleHe}
								{/if}
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
		</ol>
	{/if}
</main>
