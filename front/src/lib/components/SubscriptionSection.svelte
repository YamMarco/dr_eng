<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import HoldToConfirm from '$lib/components/HoldToConfirm.svelte';
	import { apiFetch } from '$lib/api';
	import { i18n } from '$lib/i18n/index.svelte';
	import { formatPrice, planById } from '$lib/plans';
	import { staggerDelay } from '$lib/motion';

	// Settings > subscription: shown only while a paid plan runs. Cancelling stops the renewal;
	// access stays to the end of the paid period.

	type Sub = { planId: string; until: string; renews: boolean; renewPrice: number };

	let { index }: { index: number } = $props();

	let t = $derived(i18n.dict.settings);
	let sub = $state<Sub | null>(null);
	let cancelling = $state(false);
	let failed = $state(false);

	const day = (iso: string) =>
		new Intl.DateTimeFormat('en-GB', {
			timeZone: 'Asia/Jerusalem',
			day: 'numeric',
			month: 'numeric',
			year: 'numeric'
		}).format(new Date(iso));

	let name = $derived.by(() => {
		const plan = sub && planById(sub.planId);
		if (!plan) return '';
		const p = i18n.dict.plans;
		return `${p.offers[plan.offer].name}${plan.bundle ? p.withCobe : ''}, ${p.cycles[plan.cycle]}`;
	});

	onMount(async () => {
		const res = await apiFetch('/api/subscription').catch(() => null);
		if (res?.ok) sub = await res.json();
	});

	async function cancel() {
		cancelling = true;
		failed = false;
		const res = await apiFetch('/api/subscription', { method: 'DELETE' }).catch(() => null);
		if (res?.ok) sub = await res.json();
		else failed = true;
		cancelling = false;
	}
</script>

{#if sub}
	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(index), easing: cubicOut }}
		class="mt-6 overflow-hidden rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">{t.subscriptionSection}</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<li class="px-5 py-4" aria-live="polite">
				<span class="block font-semibold">{name}</span>
				<span class="block text-sm text-muted">
					{sub.renews
						? t.subscriptionRenews(day(sub.until), formatPrice(sub.renewPrice))
						: t.subscriptionCancelled(day(sub.until))}
				</span>
			</li>
			{#if sub.renews}
				<li>
					<HoldToConfirm
						onconfirm={cancel}
						disabled={cancelling}
						class="flex min-h-14 w-full flex-col items-start px-5 py-4 text-start font-semibold text-miss transition hover:bg-line/40 active:scale-[0.99]"
					>
						{#snippet children({ armed })}
							{cancelling ? t.cancelling : t.cancelRenewal}
							<span class="text-sm font-semibold">
								{armed ? t.cancelRenewalConfirm : t.cancelRenewalHold}
							</span>
						{/snippet}
					</HoldToConfirm>
					{#if failed}
						<p class="px-5 pb-4 text-sm font-semibold text-miss" role="alert">{t.cancelFailed}</p>
					{/if}
				</li>
			{/if}
		</ul>
	</section>
{/if}
