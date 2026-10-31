<script lang="ts">
	import { onMount } from 'svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import { apiFetch } from '$lib/api';
	import { cycleLabel, monthly, type Currency, type Expense } from '$lib/finance';

	// Staff list of our running costs, from $lib/server/finance (/api/finance).

	let expenses = $state<Expense[]>([]);
	let loading = $state(true);
	let failed = $state(false);

	const currencies: Currency[] = ['USD', 'ILS'];

	/** Per currency: recurring cost per month, and one-time charges. */
	let totals = $derived(
		currencies
			.map((currency) => {
				const items = expenses.filter((e) => e.currency === currency);
				return {
					currency,
					monthly: items.reduce((sum, e) => sum + monthly(e), 0),
					once: items.filter((e) => e.cycle === 'once').reduce((sum, e) => sum + e.amount, 0)
				};
			})
			.filter((t) => t.monthly || t.once)
	);

	function money(amount: number, currency: Currency) {
		return new Intl.NumberFormat('he-IL', {
			style: 'currency',
			currency,
			maximumFractionDigits: 2
		}).format(amount);
	}

	onMount(async () => {
		const res = await apiFetch('/api/finance').catch(() => null);
		if (res?.ok) expenses = await res.json();
		else failed = true;
		loading = false;
	});
</script>

<svelte:head><title>כספים</title></svelte:head>

<AppBar title="כספים" back="/app/settings" />

<main class="mx-auto w-full max-w-3xl flex-1 px-4 pt-6 pb-28">
	{#if loading}
		<p role="status" class="flex items-center justify-center gap-2 py-16 font-semibold text-muted">
			<LoaderCircle size={18} class="motion-safe:animate-spin" aria-hidden="true" />
			טוען...
		</p>
	{:else if failed}
		<p class="rounded-xl bg-danger-soft px-4 py-3 text-sm font-semibold text-danger">
			הטעינה נכשלה.
		</p>
	{:else}
		<section class="mb-6 grid gap-3 sm:grid-cols-2">
			{#each totals as total (total.currency)}
				<div class="rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
					<p class="text-sm font-bold text-muted">סה"כ לחודש</p>
					<p class="mt-1 text-2xl font-bold tabular-nums">
						{money(total.monthly, total.currency)}
					</p>
					<p class="mt-1 text-sm text-muted tabular-nums">
						לשנה: {money(total.monthly * 12, total.currency)}
						{#if total.once}· חד-פעמי: {money(total.once, total.currency)}{/if}
					</p>
				</div>
			{:else}
				<p class="text-muted">עדיין אין סכומים.</p>
			{/each}
		</section>

		<ul
			class="flex flex-col divide-y divide-line/70 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
		>
			{#each expenses as expense (expense.name)}
				<li class="flex items-start justify-between gap-4 px-5 py-4">
					<span class="min-w-0">
						{#if expense.url}
							<!-- eslint-disable svelte/no-navigation-without-resolve -->
							<a
								href={expense.url}
								target="_blank"
								rel="noopener noreferrer"
								class="block font-semibold hover:text-brand">{expense.name}</a
							>
							<!-- eslint-enable svelte/no-navigation-without-resolve -->
						{:else}
							<span class="block font-semibold">{expense.name}</span>
						{/if}
						<span class="block text-sm text-muted">
							{cycleLabel[expense.cycle]}{#if expense.since}
								· מ-{expense.since}{/if}{#if expense.note}
								· {expense.note}{/if}
						</span>
					</span>
					<span class="shrink-0 font-semibold tabular-nums" class:text-muted={!expense.amount}>
						{money(expense.amount, expense.currency)}
					</span>
				</li>
			{/each}
		</ul>
	{/if}
</main>
