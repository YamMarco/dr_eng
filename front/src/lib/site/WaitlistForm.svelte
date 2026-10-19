<script lang="ts">
	import { CircleCheck } from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Email in, a spot on the waitlist out (/api/waitlist). Used in the hero and the closing band.
	let { id }: { id: string } = $props();
	let t = $derived(i18n.dict.site.home.waitlist);

	type Error = keyof typeof t.errors;
	let email = $state('');
	let website = $state('');
	let status = $state<'idle' | 'sending' | 'done'>('idle');
	let error = $state<Error | null>(null);

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		status = 'sending';
		error = null;
		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, website })
			});
			if (res.ok) {
				status = 'done';
				return;
			}
			const code = (await res.json().catch(() => ({}))).error;
			error = code in t.errors ? code : 'unavailable';
		} catch {
			error = 'network';
		}
		status = 'idle';
	}
</script>

{#if status === 'done'}
	<div
		class="relative flex items-center gap-3 rounded-2xl bg-brand-soft p-4 motion-safe:animate-rise"
		role="status"
	>
		<Confetti />
		<CircleCheck
			size={32}
			class="shrink-0 text-brand motion-safe:animate-pop-correct"
			aria-hidden="true"
		/>
		<span class="flex flex-col">
			<span class="text-lg font-bold">{t.doneTitle}</span>
			<span class="text-muted">{t.doneBody}</span>
		</span>
	</div>
{:else}
	<form {id} onsubmit={submit} class="flex w-full scroll-mt-28 flex-col gap-2">
		<div class="flex w-full flex-col gap-3 sm:flex-row">
			<label class="flex-1">
				<span class="sr-only">{t.label}</span>
				<input
					type="email"
					dir="ltr"
					required
					maxlength="254"
					autocomplete="email"
					placeholder={t.placeholder}
					bind:value={email}
					class="min-h-[56px] w-full rounded-2xl border-2 border-line bg-surface px-4 text-lg transition-colors placeholder:text-muted/70 focus:border-brand focus:outline-none"
				/>
			</label>
			<!-- Honeypot: hidden from people, filled by bots. -->
			<input
				type="text"
				name="website"
				tabindex="-1"
				autocomplete="off"
				bind:value={website}
				class="hidden"
				aria-hidden="true"
			/>
			<Button type="submit" disabled={status === 'sending'} class="sm:w-auto sm:px-7">
				{status === 'sending' ? t.sending : t.submit}
			</Button>
		</div>
		{#if error}
			<p class="text-sm font-semibold text-miss" role="alert">{t.errors[error]}</p>
		{/if}
	</form>
{/if}
