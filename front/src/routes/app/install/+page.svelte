<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { Bell, Maximize, RefreshCw } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import ReminderRow from '$lib/components/ReminderRow.svelte';
	import Segmented from '$lib/components/Segmented.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { install, type Platform } from '$lib/install.svelte';
	import { staggerDelay } from '$lib/motion';
	import { reminders } from '$lib/reminders.svelte';

	// How to add the site to the home screen: one tap where the browser offers it
	// (Chrome, Edge), else the steps for this device. Once installed: the reminder.

	let t = $derived(i18n.dict.install);
	let platform = $state<Platform>(install.platform);
	// Confetti only for an install that happens here, not for opening the installed app.
	const startedInstalled = install.installed;

	const perkIcons = [Maximize, Bell, RefreshCw];
	const card = 'rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70';
</script>

<AppBar title={t.title} back={resolve('/app/settings')} />

<main class="relative app-col flex-1 px-4 pt-6 pb-28">
	{#if install.installed}
		{#if !startedInstalled}<Confetti />{/if}
		<section in:fly={{ y: 12, duration: 300, easing: cubicOut }} class="{card} p-6 text-center">
			<Logo wordmark={false} class="justify-center [&_svg]:h-16 [&_svg]:w-16" />
			<h2 class="mt-4 text-xl font-bold">{t.installedTitle}</h2>
			<p class="mt-1 text-muted">{t.installedBody}</p>
		</section>
		{#if reminders.available}
			<ul
				in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
				class="{card} mt-4"
			>
				<ReminderRow />
			</ul>
		{/if}
		<div in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }} class="mt-6">
			<Button href={resolve('/app')}>{t.toPractice}</Button>
		</div>
	{:else}
		<section in:fly={{ y: 12, duration: 300, easing: cubicOut }} class="{card} p-6">
			<Logo wordmark={false} class="[&_svg]:h-14 [&_svg]:w-14" />
			<h2 class="mt-4 text-xl font-bold">{t.heading}</h2>
			<ul class="mt-3 flex flex-col gap-2">
				{#each t.perks as perk, i (perk)}
					{@const Icon = perkIcons[i]}
					<li
						in:fly={{ y: 8, duration: 250, delay: staggerDelay(i + 1), easing: cubicOut }}
						class="flex items-center gap-3"
					>
						<Icon size={18} class="shrink-0 text-brand" aria-hidden="true" />
						{perk}
					</li>
				{/each}
			</ul>
		</section>

		{#if install.canPrompt}
			<div in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }} class="mt-6">
				<Button onclick={() => install.prompt()}>{t.installNow}</Button>
			</div>
		{:else}
			<section
				in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}
				class="{card} mt-4 p-5"
			>
				<Segmented
					options={(['ios', 'android', 'desktop'] as const).map((p) => ({
						value: p,
						label: t.platforms[p]
					}))}
					value={platform}
					label={t.title}
					onchange={(p) => (platform = p)}
				/>
				{#key platform}
					<ol in:fade={{ duration: 200 }} class="mt-4 flex flex-col gap-3">
						{#each t.steps[platform] as step, i (step)}
							<li class="flex items-start gap-3">
								<span
									class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand"
								>
									{i + 1}
								</span>
								<span class="pt-0.5">{step}</span>
							</li>
						{/each}
					</ol>
				{/key}
			</section>
		{/if}
	{/if}
</main>
