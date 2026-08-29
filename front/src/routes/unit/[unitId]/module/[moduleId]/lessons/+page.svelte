<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import { getLesson } from '$lib/lessons';
	import { getZones } from '$lib/zones';
	import { getLessonContent } from '$lib/lessonContent';
	import { lessonProgress } from '$lib/lessonProgress.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);
	let zones = $derived(getZones(mod.id));

	// A lesson counts as done once every one of its (non-placeholder) sub-lesson
	// parts has been completed.
	function isLessonDone(lessonId: number): boolean {
		const content = getLessonContent(mod.id, lessonId);
		if (!content) return false;
		const parts = content.parts.filter((part) => part.screens.length > 0);
		if (parts.length === 0) return false;
		const key = `${mod.id}-${lessonId}`;
		return parts.every((_, i) => lessonProgress.isCompleted(key, i));
	}

	// A repeating left/right wave so the whole module reads as one continuous
	// winding path, with zone banners just breaking it up visually.
	const WAVE = [0, 64, 96, 64, 0, -64, -96, -64];
	function waveOffset(globalIndex: number): number {
		return WAVE[globalIndex % WAVE.length];
	}

	let globalIndexByLessonId = $derived.by(() => {
		const indices: Record<number, number> = {};
		let i = 0;
		for (const zone of zones) {
			for (const lessonId of zone.lessonIds) {
				indices[lessonId] = i;
				i += 1;
			}
		}
		return indices;
	});
</script>

<AppBar title="{i18n.dict.lessons.titlePrefix} {mod.letter}" back={base} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	{#if zones.length === 0}
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
		<p class="mb-2 leading-relaxed text-muted">{i18n.dict.lessons.subtitle}</p>

		<div class="flex flex-col items-center">
			{#each zones as zone (zone.id)}
				<div
					class="sticky top-16 z-10 mt-8 w-full max-w-xs rounded-2xl px-4 py-3 text-center shadow-md {zone
						.theme.banner}"
				>
					<span class="text-sm font-bold">{zone.titleHe}</span>
				</div>

				<ol class="mt-8 flex flex-col items-center gap-6">
					{#each zone.lessonIds as lessonId (lessonId)}
						{@const lesson = getLesson(mod.id, lessonId)}
						{@const done = isLessonDone(lessonId)}
						{@const offset = waveOffset(globalIndexByLessonId[lessonId] ?? 0)}
						<li class="flex flex-col items-center" style="margin-inline-start: {offset}px">
							<a
								href="{base}/lessons/{lessonId}"
								class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl font-extrabold shadow-md transition active:scale-95 {done
									? zone.theme.nodeDone
									: zone.theme.node}"
							>
								{#if done}
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="h-7 w-7"
										aria-hidden="true"
									>
										<path d="M20 6 9 17l-5-5" />
									</svg>
								{:else}
									{lessonId}
								{/if}
							</a>
							<span class="mt-2 max-w-32 text-center text-xs font-semibold">
								{lesson?.titleHe}
							</span>
						</li>
					{/each}
				</ol>
			{/each}
		</div>
	{/if}
</main>
