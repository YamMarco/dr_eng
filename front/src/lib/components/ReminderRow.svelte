<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import Toggle from '$lib/components/Toggle.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { reminders } from '$lib/reminders.svelte';

	// The daily-reminder switch, as a row in a settings-style list (settings, install screen).

	let t = $derived(i18n.dict.settings);

	// Reads the browser's push state once (async, not derivable).
	onMount(() => {
		reminders.load();
	});

	let note = $derived(
		reminders.busy
			? t.remindersBusy
			: reminders.failed
				? t.remindersFailed
				: reminders.status === 'denied'
					? t.remindersDenied
					: reminders.status === 'needs-install'
						? t.remindersNeedInstall
						: reminders.status === 'unsupported'
							? t.remindersUnsupported
							: t.dailyRemindersDesc
	);
	let switchable = $derived(reminders.status === 'on' || reminders.status === 'off');
</script>

<li class="flex items-center justify-between gap-4 px-5 py-4">
	<span>
		<span class="block font-semibold">{t.dailyReminders}</span>
		<span class="block text-sm text-muted" aria-live="polite">{note}</span>
		{#if reminders.status === 'needs-install'}
			<a
				href={resolve('/app/install')}
				class="mt-1 inline-block text-sm font-semibold text-brand transition hover:underline active:scale-[0.98]"
			>
				{t.remindersHowTo}
			</a>
		{/if}
	</span>
	{#if switchable}
		<span class="transition-opacity {reminders.busy ? 'pointer-events-none opacity-50' : ''}">
			<Toggle
				checked={reminders.status === 'on'}
				onchange={(on) => (on ? reminders.enable() : reminders.disable())}
				label={t.dailyReminders}
			/>
		</span>
	{/if}
</li>
