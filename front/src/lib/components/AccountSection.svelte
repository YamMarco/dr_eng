<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import HoldToConfirm from '$lib/components/HoldToConfirm.svelte';
	import { auth } from '$lib/auth.svelte';
	import { apiFetch } from '$lib/api';
	import { reminders } from '$lib/reminders.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';

	// Settings > account: who's signed in, sign out, and delete (the app stores
	// require deletion in-app). Deleting also wipes this device's progress.

	let { index }: { index: number } = $props();

	let t = $derived(i18n.dict.settings);
	let deleting = $state(false);
	let failed = $state(false);

	const row =
		'flex min-h-14 w-full items-center px-5 py-4 text-start font-semibold transition hover:bg-line/40 active:scale-[0.99]';

	async function signOut() {
		// Push calls can hang on some phones: never let them hold the sign-out.
		await Promise.race([
			reminders.disable().catch(() => {}),
			new Promise((resolve) => setTimeout(resolve, 3000))
		]);
		await auth.signOut();
	}

	async function deleteAccount() {
		deleting = true;
		failed = false;
		const res = await apiFetch('/api/account', { method: 'DELETE' }).catch(() => null);
		if (!res?.ok) {
			failed = true;
			deleting = false;
			return;
		}
		localStorage.clear();
		await signOut();
		location.reload();
	}
</script>

<section
	in:fly={{ y: 12, duration: 300, delay: staggerDelay(index), easing: cubicOut }}
	class="mt-6 overflow-hidden rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
>
	<h2 class="px-5 pt-5 text-sm font-bold text-muted">{t.accountSection}</h2>
	<ul class="mt-2 flex flex-col divide-y divide-line/70">
		<li class="px-5 py-4">
			<span class="block text-sm text-muted">{t.signedInAs}</span>
			<span class="block font-semibold" dir="ltr">{auth.email}</span>
		</li>
		<li>
			<button type="button" class={row} onclick={signOut}>{t.signOut}</button>
		</li>
		<li>
			<HoldToConfirm onconfirm={deleteAccount} disabled={deleting} class="{row} text-miss">
				{#snippet children({ armed })}
					{deleting ? t.deleting : t.deleteAccount}
					<span class="text-sm font-semibold">{armed ? t.deleteConfirm : t.deleteHold}</span>
					<span class="text-sm font-normal text-muted">{t.deleteAccountDesc}</span>
				{/snippet}
			</HoldToConfirm>
			{#if failed}
				<p class="px-5 pb-4 text-sm font-semibold text-miss" role="alert">{t.deleteFailed}</p>
			{/if}
		</li>
	</ul>
</section>
