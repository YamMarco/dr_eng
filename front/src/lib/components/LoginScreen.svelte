<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
	import { auth } from '$lib/auth.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Two steps: email -> the one-time code from that email. The session that
	// verifyCode starts flips auth.loggedIn, and the app layout takes over.

	const RESEND_AFTER = 60; // Supabase allows one code per address per minute.

	let t = $derived(i18n.dict.login);
	let step = $state<'email' | 'code'>('email');
	let email = $state('');
	let code = $state('');
	let busy = $state(false);
	let failed = $state<string | null>(null);
	let wait = $state(0);

	const input =
		'w-full rounded-2xl border-2 border-line bg-canvas px-4 py-3 text-lg focus:border-brand focus:outline-none';

	function startCooldown() {
		wait = RESEND_AFTER;
		const timer = setInterval(() => {
			wait -= 1;
			if (wait <= 0) clearInterval(timer);
		}, 1000);
	}

	async function sendCode(event?: SubmitEvent) {
		event?.preventDefault();
		busy = true;
		failed = null;
		try {
			await auth.sendCode(email.trim());
			step = 'code';
			code = '';
			startCooldown();
		} catch {
			failed = t.sendFailed;
		} finally {
			busy = false;
		}
	}

	async function verify(event: SubmitEvent) {
		event.preventDefault();
		busy = true;
		failed = null;
		try {
			await auth.verifyCode(email.trim(), code.trim());
		} catch {
			failed = t.codeFailed;
			busy = false;
		}
	}
</script>

<main class="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-12">
	<h1 class="text-3xl font-extrabold tracking-tight">{t.title}</h1>
	<p class="mt-2 leading-relaxed text-muted">{t.subtitle}</p>

	<div class="mt-8 rounded-3xl bg-surface p-5 shadow-md ring-1 ring-line/70">
		{#key step}
			<div in:fly={{ y: 12, duration: 250, easing: cubicOut }}>
				{#if step === 'email'}
					<form class="flex flex-col gap-4" onsubmit={sendCode}>
						<label class="flex flex-col gap-1.5 text-sm font-semibold">
							{t.emailLabel}
							<input
								type="email"
								dir="ltr"
								required
								autocomplete="email"
								bind:value={email}
								class={input}
							/>
						</label>
						<p class="text-sm leading-relaxed text-muted">{t.noPassword}</p>
						<Button type="submit" disabled={busy}>{busy ? t.sending : t.sendCode}</Button>
					</form>
				{:else}
					<form class="flex flex-col gap-4" onsubmit={verify}>
						<p class="text-sm leading-relaxed text-muted">
							{t.codeSentTo} <span class="font-semibold text-ink" dir="ltr">{email}</span>
						</p>
						<label class="flex flex-col gap-1.5 text-sm font-semibold">
							{t.codeLabel}
							<input
								type="text"
								dir="ltr"
								required
								inputmode="numeric"
								autocomplete="one-time-code"
								pattern="[0-9]{'{'}6,10{'}'}"
								maxlength="10"
								bind:value={code}
								class="{input} text-center text-2xl tracking-[0.4em]"
							/>
						</label>
						<Button type="submit" disabled={busy}>{busy ? t.verifying : t.submit}</Button>
						<div class="flex justify-between gap-2 text-sm font-semibold">
							<button
								type="button"
								class="min-h-11 rounded-lg px-2 text-muted hover:text-ink active:scale-[0.98]"
								onclick={() => ((step = 'email'), (failed = null))}
							>
								{t.changeEmail}
							</button>
							<button
								type="button"
								disabled={busy || wait > 0}
								class="min-h-11 rounded-lg px-2 text-brand-dark hover:underline active:scale-[0.98] disabled:text-muted disabled:no-underline"
								onclick={() => sendCode()}
							>
								{wait > 0 ? t.resendIn(wait) : t.resend}
							</button>
						</div>
					</form>
				{/if}
			</div>
		{/key}

		{#if failed}
			<p
				class="mt-4 rounded-2xl bg-miss-soft px-4 py-3 text-sm leading-relaxed font-semibold text-miss"
				role="alert"
				in:fly={{ y: 6, duration: 200 }}
			>
				{failed}
			</p>
		{/if}
	</div>
</main>
