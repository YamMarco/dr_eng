<script lang="ts">
	// The deck's entry on a module's lessons path: one big square above the
	// lessons, always open - the deck runs on its own schedule, not on the path.
	import { Layers } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { i18n } from '$lib/i18n/index.svelte';

	type Props = { unitId: string; moduleId: string; due: number };
	let { unitId, moduleId, due }: Props = $props();
</script>

<a
	href={resolve('/unit/[unitId]/module/[moduleId]/words', { unitId, moduleId })}
	class="group flex flex-col items-center gap-1.5 rounded-3xl bg-brand-soft px-5 py-4 text-brand-dark shadow-md ring-1 ring-brand/30 transition active:scale-95"
>
	<span
		class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-sm"
	>
		<Layers size={32} aria-hidden="true" />
		{#if due}
			<span
				class="absolute -end-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-500 px-1.5 text-xs font-extrabold text-white tabular"
			>
				{due}
			</span>
		{/if}
	</span>
	<span class="font-extrabold">{i18n.dict.deck.title}</span>
	<span class="text-xs font-semibold opacity-80">{i18n.dict.deck.gatewayDue(due)}</span>
</a>
