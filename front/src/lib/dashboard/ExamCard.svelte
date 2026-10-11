<script lang="ts">
	import { ClipboardCheck } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Recommends a full mock exam - early on it says when it'll be worth it.
	type Props = { href: string; routeProgress: number; lastPercent: number | undefined };

	let { href, routeProgress, lastPercent }: Props = $props();

	let t = $derived(i18n.dict.home);
	let subtitle = $derived(
		lastPercent !== undefined
			? t.examLast(lastPercent)
			: routeProgress < 0.5
				? t.examEarly
				: t.examReady
	);
</script>

<!-- href is built by the dashboard from runtime ids, not a typed route -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class="flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
>
	<span
		class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand"
	>
		<ClipboardCheck size={22} aria-hidden="true" />
	</span>
	<span class="min-w-0 flex-1">
		<span class="block font-bold">{t.examTitle}</span>
		<span class="block text-sm text-muted">{subtitle}</span>
	</span>
	<span class="shrink-0 rounded-full bg-brand-soft px-4 py-2 text-sm font-bold text-brand">
		{t.examStart}
	</span>
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
