<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { cobeVisible } from '$lib/alpha';
	import { auth } from '$lib/auth.svelte';
	import { getUnitGroup, modules } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { profile } from '$lib/profile.svelte';
	import { greeting } from '$lib/greeting';
	import { homeMeters, moduleHook, moduleRoute, resumeItem } from '$lib/dashboard/data';
	import { examStats } from '$lib/quiz/stats';
	import { getDecks } from '$lib/deck';
	import Onboarding from '$lib/dashboard/Onboarding.svelte';
	import ContinueBar from '$lib/dashboard/ContinueBar.svelte';
	import ModuleRow from '$lib/dashboard/ModuleRow.svelte';
	import StatusChips from '$lib/dashboard/StatusChips.svelte';

	// Home = where the student stands, and a reason to go in: a way back to the
	// latest thing done, and one concise row per Bagrut module. Every action lives
	// on the module's own page.

	let t = $derived(i18n.dict.home);
	let group = $derived(getUnitGroup(profile.unitGroupId)!);
	// Staff-only COBE (alpha): everyone else sees it as "coming soon".
	const locked = (id: string) => id === 'cobe' && !cobeVisible(auth.isAdmin);

	let rows = $derived(
		group.moduleIds.map((id) => {
			const route = moduleRoute(id);
			const exams = examStats(id);
			return {
				mod: modules[id],
				exams,
				meters: homeMeters(id, route),
				hook: moduleHook(id, route),
				href: `/app/unit/${group.id}/module/${id}`,
				comingSoon: locked(id) || (!route.length && !exams.total && !getDecks(id))
			};
		})
	);

	// All cards in one row on desktop, whatever the count; four wrap 2x2 below xl.
	const GRID_COLS = [
		'lg:grid-cols-1',
		'lg:grid-cols-1',
		'lg:grid-cols-2',
		'lg:grid-cols-3',
		'lg:grid-cols-2 xl:grid-cols-4'
	];
	let gridCols = $derived(GRID_COLS[Math.min(rows.length, 4)]);

	// Back into the latest thing done, in any module of this unit level.
	let resume = $derived(resumeItem(group.moduleIds.filter((id) => !locked(id))));
</script>

{#if !profile.value}
	<Onboarding />
{:else}
	<main
		class="app-wide flex flex-1 flex-col gap-3 px-4 pt-3 pb-3 sm:pt-10 sm:pb-6 lg:gap-5 lg:pt-12"
	>
		<header class="flex flex-wrap items-center gap-2">
			<h1 class="me-auto text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
				{greeting()}
			</h1>
			<StatusChips class="lg:hidden" />
		</header>

		{#if resume}
			<div class="mb-4"><ContinueBar item={resume} groupId={group.id} /></div>
		{/if}

		<div class="flex flex-col gap-3 lg:grid lg:gap-5 {gridCols}">
			{#each rows as row, i (row.mod.id)}
				<div
					class="lg:grid"
					in:fly={{ y: 12, duration: 300, delay: staggerDelay(i + 1), easing: cubicOut }}
				>
					<ModuleRow {...row} />
				</div>
			{/each}
		</div>
	</main>
{/if}
