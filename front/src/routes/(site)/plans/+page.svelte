<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { PLANS, formatPrice } from '$lib/plans';

	let t = $derived(i18n.dict.plans);
</script>

<svelte:head>
	<title>{t.title} | {i18n.dict.site.brand}</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

<main class="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-4 py-12">
	<header class="text-center motion-safe:animate-rise">
		<h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.title}</h1>
		<p class="mt-3 text-lg text-muted">{t.subtitle}</p>
	</header>

	<ul class="grid gap-4 sm:grid-cols-3">
		{#each PLANS as plan, i (plan.id)}
			{@const item = t.items[plan.id]}
			<li
				class="relative flex flex-col gap-4 rounded-3xl bg-surface p-6 shadow-sm ring-1 motion-safe:animate-rise {plan.highlight
					? 'ring-2 ring-brand'
					: 'ring-line/70'}"
				style="animation-delay: {staggerDelay(i + 1)}ms"
			>
				{#if plan.highlight}
					<span
						class="absolute start-6 -top-3 rounded-full bg-brand px-3 py-0.5 text-xs font-bold text-white"
					>
						{t.popular}
					</span>
				{/if}
				<h2 class="text-lg font-bold">{item.name}</h2>
				<p class="flex items-baseline gap-1">
					{#if plan.price === 0}
						<span class="text-4xl font-extrabold">{t.free}</span>
					{:else}
						<span class="text-4xl font-extrabold tabular-nums">{formatPrice(plan.price)}</span>
						<span class="text-lg font-bold">{t.currency}</span>
						<span class="text-sm text-muted">{plan.months === 1 ? t.perMonth : t.forYear}</span>
					{/if}
				</p>
				<ul class="flex flex-1 flex-col gap-2">
					{#each item.features as feature (feature)}
						<li class="flex items-start gap-2 leading-snug">
							<Check size={18} class="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
							{feature}
						</li>
					{/each}
				</ul>
				{#if plan.soon}
					<Button variant="ghost" disabled>{t.soon}</Button>
				{:else}
					<Button
						variant={plan.highlight ? 'primary' : 'secondary'}
						href="{resolve('/checkout')}?plan={plan.id}"
					>
						{t.choose}
					</Button>
				{/if}
			</li>
		{/each}
	</ul>

	<div class="flex flex-col items-center gap-1 text-center text-sm text-muted">
		<p>{t.haveCode}</p>
		<p>{t.placeholder}</p>
	</div>
</main>
