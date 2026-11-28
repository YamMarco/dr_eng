<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import HoldToConfirm from '$lib/components/HoldToConfirm.svelte';
	import { apiFetch } from '$lib/api';
	import { i18n } from '$lib/i18n/index.svelte';
	import { formatPrice, planById, type Product } from '$lib/plans';
	import { staggerDelay } from '$lib/motion';

	// Settings > manage subscriptions: one row per product with a running paid plan. Each
	// cancels on its own; "cancel all" shows when 2+ renew. Cancelling stops the renewal;
	// access stays to the end of the paid period.

	type Sub = {
		product: Product;
		planId: string;
		from: string;
		until: string;
		renews: boolean;
		renewPrice: number;
	};
	type Target = Product | 'all';

	let { index }: { index: number } = $props();

	let t = $derived(i18n.dict.settings);
	let subs = $state<Sub[]>([]);
	let cancelling = $state<Target | null>(null);
	let failed = $state<Target | null>(null);
	let renewing = $derived(subs.filter((sub) => sub.renews).length);

	const day = (iso: string) =>
		new Intl.DateTimeFormat('en-GB', {
			timeZone: 'Asia/Jerusalem',
			day: 'numeric',
			month: 'numeric',
			year: 'numeric'
		}).format(new Date(iso));

	function name(planId: string) {
		const plan = planById(planId);
		const p = i18n.dict.plans;
		return plan ? `${p.offers[plan.offer].name}, ${p.cycles[plan.cycle]}` : '';
	}

	onMount(async () => {
		const res = await apiFetch('/api/subscription').catch(() => null);
		if (res?.ok) subs = await res.json();
	});

	async function cancel(product: Target) {
		cancelling = product;
		failed = null;
		const res = await apiFetch('/api/subscription', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ product })
		}).catch(() => null);
		if (res?.ok) subs = await res.json();
		else failed = product;
		cancelling = null;
	}
</script>

{#snippet cancelButton(target: Target, label: string, context = '')}
	<HoldToConfirm
		onconfirm={() => cancel(target)}
		disabled={!!cancelling}
		class="flex min-h-14 w-full flex-col items-start px-5 py-4 text-start font-semibold text-miss transition hover:bg-line/40 active:scale-[0.99]"
	>
		{#snippet children({ armed })}
			<span>
				{cancelling === target ? t.cancelling : label}
				{#if context}<span class="sr-only">{context}</span>{/if}
			</span>
			<span class="text-sm font-semibold">
				{armed ? t.cancelRenewalConfirm : t.cancelRenewalHold}
			</span>
		{/snippet}
	</HoldToConfirm>
	{#if failed === target}
		<p class="px-5 pb-4 text-sm font-semibold text-miss" role="alert">{t.cancelFailed}</p>
	{/if}
{/snippet}

{#if subs.length}
	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(index), easing: cubicOut }}
		class="mt-6 overflow-hidden rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">{t.subscriptionSection}</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			{#each subs as sub (sub.product)}
				<li>
					<div class="px-5 py-4" aria-live="polite">
						<span class="block font-semibold">{name(sub.planId)}</span>
						<span class="block text-sm text-muted tabular-nums">
							{t.subscriptionPeriod(day(sub.from), day(sub.until))}
						</span>
						<span class="block text-sm text-muted">
							{sub.renews
								? t.subscriptionRenews(day(sub.until), formatPrice(sub.renewPrice))
								: t.subscriptionCancelled(day(sub.until))}
						</span>
					</div>
					{#if sub.renews}
						{@render cancelButton(sub.product, t.cancelRenewal, name(sub.planId))}
					{/if}
				</li>
			{/each}
			{#if renewing > 1}
				<li>{@render cancelButton('all', t.cancelAll)}</li>
			{/if}
		</ul>
		{#if renewing}
			<p class="border-t border-line/70 px-5 py-3 text-sm text-muted">{t.subscriptionReminder}</p>
		{/if}
	</section>
{/if}
