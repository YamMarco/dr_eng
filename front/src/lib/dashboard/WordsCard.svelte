<script lang="ts">
	import { Languages } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { CurriculumModule } from '$lib/curriculum';
	import { deckToday } from '$lib/deck';
	import { i18n } from '$lib/i18n/index.svelte';

	// A module's word deck on the home page: today's quick session, a phone-sized win.
	type Props = { mod: CurriculumModule; groupId: string };

	let { mod, groupId }: Props = $props();

	let t = $derived(i18n.dict.home);
	let today = $derived(deckToday(mod.id));
	let hasSession = $derived(today.reviews + today.fresh > 0);
	let href = $derived(
		resolve('/unit/[unitId]/module/[moduleId]/words', { unitId: groupId, moduleId: mod.id })
	);
</script>

<a
	{href}
	class="flex items-center gap-3 rounded-3xl bg-surface p-4 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition hover:shadow-lg active:scale-[0.99]"
>
	<span
		class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand"
	>
		<Languages size={22} aria-hidden="true" />
	</span>
	<span class="flex min-w-0 flex-1 flex-col">
		<span class="font-bold">{t.wordsTitle(mod.letter)}</span>
		<span class="text-sm text-muted">
			{hasSession ? i18n.dict.deck.sessionSize(today.reviews, today.fresh) : t.wordsDone}
		</span>
	</span>
	<span
		class="shrink-0 rounded-full px-4 py-2 text-sm font-bold {hasSession
			? 'bg-brand text-white'
			: 'bg-brand-soft text-brand'}"
	>
		{hasSession ? t.wordsCta : t.wordsExtra}
	</span>
</a>
