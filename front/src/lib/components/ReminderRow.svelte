<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Toggle from '$lib/components/Toggle.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { install } from '$lib/install.svelte';
	import { REMINDER_HOURS, reminders, type ReminderStatus } from '$lib/reminders.svelte';

	// The daily-reminder switch and its hour, as a row in a settings-style list
	// (settings, streak, install screen).

	let t = $derived(i18n.dict.settings);

	// Reads the browser's push state once (async, not derivable).
	onMount(() => {
		reminders.load();
	});

	// Why it can't be switched on here, per device (see ReminderStatus).
	let blocked = $derived<Partial<Record<ReminderStatus, string>>>({
		denied: t.remindersDenied,
		'needs-install': t.remindersNeedInstall,
		'ios-update': t.remindersIosUpdate,
		'in-app': t.remindersInApp,
		unsupported: t.remindersUnsupported
	});
	let note = $derived(
		reminders.busy
			? t.remindersBusy
			: reminders.failed
				? t.remindersFailed
				: (blocked[reminders.status] ?? t.dailyRemindersDesc)
	);
	let switchable = $derived(reminders.status === 'on' || reminders.status === 'off');

	// The browser's own install dialog where it has one, else the steps for this device.
	function installApp() {
		if (install.canPrompt) install.prompt();
		else goto(resolve('/app/install'));
	}
</script>

<li class="px-5 py-4">
	<div class="flex items-center justify-between gap-4">
		<span>
			<span class="block font-semibold">{t.dailyReminders}</span>
			<span class="block text-sm text-muted" aria-live="polite">{note}</span>
		</span>
		{#if switchable}
			<span class="transition-opacity {reminders.busy ? 'pointer-events-none opacity-50' : ''}">
				<Toggle
					checked={reminders.status === 'on'}
					onchange={(on) => (on ? reminders.enable() : reminders.disable())}
					label={t.dailyReminders}
				/>
			</span>
		{:else if reminders.status === 'needs-install'}
			<button
				type="button"
				onclick={installApp}
				class="min-h-11 shrink-0 rounded-xl bg-brand px-4 font-semibold text-white transition active:scale-[0.98]"
			>
				{t.remindersInstall}
			</button>
		{/if}
	</div>
	{#if reminders.status === 'on'}
		<label
			transition:slide={{ duration: 200 }}
			class="flex items-center justify-between gap-4 pt-3"
		>
			<span class="font-semibold">{t.remindersHour}</span>
			<select
				value={reminders.hour}
				onchange={(e) => reminders.setHour(Number(e.currentTarget.value))}
				disabled={reminders.busy}
				class="min-h-11 rounded-xl border-2 border-line bg-canvas px-3 py-2 font-semibold text-ink transition focus:border-brand disabled:opacity-50"
			>
				{#each REMINDER_HOURS as hour (hour)}
					<option value={hour}>{String(hour).padStart(2, '0')}:00</option>
				{/each}
			</select>
		</label>
	{/if}
</li>
