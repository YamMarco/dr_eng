<script lang="ts">
	import { onMount } from 'svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import { apiFetch } from '$lib/api';

	// Staff numbers from /api/dashboard. Fetched on entering the page only.

	let stats = $state<{ users: number; waitlist: number } | null>(null);
	let loading = $state(true);
	let failed = $state(false);

	const format = new Intl.NumberFormat('he-IL');

	onMount(async () => {
		const res = await apiFetch('/api/dashboard').catch(() => null);
		if (res?.ok) stats = await res.json();
		else failed = true;
		loading = false;
	});
</script>

<svelte:head><title>לוח בקרה</title></svelte:head>

<AppBar title="לוח בקרה" back="/app/settings" />

<main class="mx-auto w-full max-w-3xl flex-1 px-4 pt-6 pb-28">
	{#if loading}
		<p role="status" class="flex items-center justify-center gap-2 py-16 font-semibold text-muted">
			<LoaderCircle size={18} class="motion-safe:animate-spin" aria-hidden="true" />
			טוען...
		</p>
	{:else if failed || !stats}
		<p class="rounded-xl bg-danger-soft px-4 py-3 text-sm font-semibold text-danger">
			הטעינה נכשלה.
		</p>
	{:else}
		<section class="grid gap-3 sm:grid-cols-2">
			<div class="rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
				<p class="text-sm font-bold text-muted">משתמשים</p>
				<p class="mt-1 text-3xl font-extrabold">{format.format(stats.users)}</p>
			</div>
			<div class="rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
				<p class="text-sm font-bold text-muted">ברשימת ההמתנה</p>
				<p class="mt-1 text-3xl font-extrabold">{format.format(stats.waitlist)}</p>
			</div>
		</section>
	{/if}
</main>
