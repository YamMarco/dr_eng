<script lang="ts">
	import { goto } from '$app/navigation';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { EXAM_SECONDS, exam } from '$lib/exam.svelte';
	import { EXAM_MINUTES } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);

	function startExam() {
		exam.start(mod.id);
		goto(`${base}/exam/run`);
	}
</script>

<AppBar title="{i18n.dict.examStart.titlePrefix} {mod.letter}" back={base} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<div class="rounded-3xl bg-surface p-6 text-center shadow-md ring-1 shadow-ink/5 ring-line/70">
		<p class="text-sm font-semibold text-muted">{i18n.dict.examStart.durationLabel}</p>
		<div class="mt-3 flex justify-center">
			<Timer seconds={EXAM_SECONDS} size="lg" />
		</div>
		<p class="mt-4 leading-relaxed text-muted">
			{i18n.dict.examStart.description(EXAM_MINUTES)}
		</p>
	</div>

	{#if mod.sections.length}
		<div class="mt-6 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70">
			<h2 class="mb-3 text-base font-bold">{i18n.dict.examStart.structureTitle}</h2>
			<ul class="flex flex-col divide-y divide-line/70">
				{#each mod.sections as section, i (section.id)}
					<li class="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
						<span
							class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-sm font-bold text-brand-dark"
						>
							{i + 1}
						</span>
						<span class="block font-semibold" dir="ltr">{section.label}</span>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="mt-8 flex flex-col gap-3">
		<Button onclick={startExam}>{i18n.dict.examStart.startButton}</Button>
		<Button variant="secondary" href={base}>{i18n.dict.examStart.backButton}</Button>
	</div>
</main>
