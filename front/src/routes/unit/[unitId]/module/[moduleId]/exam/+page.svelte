<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import StatTile from '$lib/components/StatTile.svelte';
	import { examRows, examStats, formatExamStats } from '$lib/quiz/stats';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);
	let rows = $derived(examRows(mod.id));
	let t = $derived(i18n.dict.quizzes);

	const chip = 'shrink-0 rounded-full px-2.5 py-1 text-xs font-bold';
</script>

<!-- Always visible, not gated by editStore.available — /edit-exam itself is
     password-gated on the deployed site, and that gate is the only way to
     ever unlock it there (see the equivalent bootstrap link on the lessons
     page). Gating this link too would mean nothing on the deployed site
     could ever reach the password screen. -->
<AppBar title="{i18n.dict.module.examTitle} — {mod.letter}" back={base}>
	{#snippet trailing()}
		<a
			href="/edit-exam?module={mod.id}"
			title="עריכת מבחנים"
			class="inline-flex min-h-11 items-center rounded-lg border border-line px-3 text-xs font-bold hover:bg-line/60"
		>
			✎ ערוך
		</a>
	{/snippet}
</AppBar>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
		class="mb-6 grid grid-cols-3 gap-3"
	>
		{#each formatExamStats(examStats(mod.id)) as tile (tile.label)}
			<StatTile value={tile.value} label={tile.label} />
		{/each}
	</section>

	<section in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}>
		<h2 class="mb-3 text-base font-bold">{t.assortedTitle}</h2>
		{#if rows.length}
			<ul class="flex flex-col gap-3">
				{#each rows as row (row.quiz.id)}
					<li>
						<a
							href="{base}/exam/{row.quiz.id}"
							class="flex items-center gap-3 rounded-2xl bg-surface p-3 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
						>
							<span class="min-w-0 flex-1 text-sm font-bold">{i18n.title(row.quiz.id)}</span>
							{#if row.inProgress}
								<span class="{chip} bg-amber-100 text-amber-800">{t.statusInProgress}</span>
							{:else if row.best !== undefined}
								<span class="{chip} bg-brand-soft text-brand-dark">{t.statusBest(row.best)}</span>
							{:else}
								<span class="{chip} bg-line/60 font-semibold text-muted">{t.statusNew}</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="text-sm text-muted">{i18n.dict.common.comingSoon}</p>
		{/if}
	</section>
</main>
