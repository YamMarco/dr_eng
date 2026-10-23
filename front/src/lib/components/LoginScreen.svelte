<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
	import { auth } from '$lib/auth.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';

	// One screen, five faces: sign in, sign up, forgot password, "check your
	// email", and (arriving from a reset link) choose a new password. The email
	// only verifies; everyday sign-in is email + password. A successful sign-in
	// or password save flips the app layout past this screen by itself.

	type Mode = 'signin' | 'signup' | 'forgot' | 'sent' | 'recovery' | 'otp';

	// Mockup of a phone-code sign-in (SMS/WhatsApp). Off until a provider is chosen:
	// the button shows but is disabled, and the screens below are not wired to anything.
	const OTP_ENABLED = false;
	let phone = $state('');
	let otpCode = $state('');
	let otpSent = $state(false);

	type Props = {
		/** Opening face (checkout starts new visitors on sign up). */
		startWith?: 'signin' | 'signup';
		/** Where the sign-up confirmation link lands. Default /app. */
		returnTo?: string;
		/** A line above the card (checkout explains why it asks). */
		note?: string;
	};
	let { startWith = 'signin', returnTo, note }: Props = $props();

	let t = $derived(i18n.dict.login);
	// svelte-ignore state_referenced_locally
	let mode = $state<Mode>(auth.recovering ? 'recovery' : startWith);
	let email = $state('');
	let password = $state('');
	let sentKind = $state<'confirm' | 'reset'>('confirm');
	let busy = $state(false);
	let failed = $state<string | null>(null);
	/** What the error box offers: resend the confirmation, or sign in / reset for a known email. */
	let fix = $state<'resend' | 'existing' | null>(null);
	let resent = $state(false);

	// An expired or used email link comes back with the error in the URL.
	onMount(() => {
		const params = new URLSearchParams(location.hash.slice(1) || location.search);
		const code = params.get('error_code');
		if (!code) return;
		failed = code === 'otp_expired' ? t.errors.linkExpired : t.errors.generic;
		replaceState(location.pathname, {});
	});

	// The link from a reset email lands here with a recovery session.
	$effect(() => {
		if (auth.recovering) mode = 'recovery';
	});

	const input =
		'w-full rounded-2xl border-2 border-line bg-canvas px-4 py-3 text-lg focus:border-brand focus:outline-none';
	const linkBtn =
		'min-h-11 rounded-lg px-2 text-sm font-semibold text-brand-dark hover:underline active:scale-[0.98]';

	let head = $derived(
		mode === 'signup'
			? [t.signUpTitle, t.signUpSubtitle]
			: mode === 'forgot'
				? [t.forgotTitle, t.forgotSubtitle]
				: mode === 'recovery'
					? [t.recoveryTitle, t.recoverySubtitle]
					: mode === 'sent'
						? [t.checkEmailTitle, '']
						: mode === 'otp'
							? [t.otpTitle, t.otpSubtitle]
							: [t.title, t.subtitle]
	);

	// Supabase auth error codes -> what the student sees (and can do next).
	function messageFor(error: unknown): string {
		const { code, name, status } = (error ?? {}) as {
			code?: string;
			name?: string;
			status?: number;
		};
		if (name === 'AuthRetryableFetchError' || status === 0 || error instanceof TypeError)
			return t.errors.offline;
		switch (code) {
			case 'invalid_credentials':
				return t.errors.badCredentials;
			case 'email_not_confirmed':
				fix = 'resend';
				return t.errors.notConfirmed;
			case 'user_already_exists':
			case 'email_exists':
				fix = 'existing';
				return t.errors.alreadyRegistered;
			case 'weak_password':
				return t.errors.weakPassword;
			case 'same_password':
				return t.errors.samePassword;
			case 'email_address_invalid':
			case 'validation_failed':
				return t.errors.invalidEmail;
			case 'user_banned':
				return t.errors.banned;
			case 'signup_disabled':
				return t.errors.signupClosed;
			case 'otp_expired':
			case 'session_not_found':
			case 'session_expired':
				return t.errors.linkExpired;
			case 'over_email_send_rate_limit':
			case 'over_request_rate_limit':
				return t.errors.rateLimit;
		}
		console.error('auth error', error);
		return t.errors.generic;
	}

	async function run(action: () => Promise<void>, onDone?: () => void) {
		busy = true;
		failed = null;
		fix = null;
		resent = false;
		try {
			await action();
			onDone?.();
		} catch (error) {
			failed = messageFor(error);
		} finally {
			busy = false;
		}
	}

	function go(next: Mode) {
		mode = next;
		otpSent = false;
		failed = null;
		fix = null;
		resent = false;
		password = '';
	}

	const resend = () =>
		run(
			() => auth.resendConfirmation(email.trim(), returnTo),
			() => (resent = true)
		);

	function submit(event: SubmitEvent) {
		event.preventDefault();
		const address = email.trim();
		if (mode === 'signin') return run(() => auth.signIn(address, password));
		if (mode === 'signup')
			return run(
				() => auth.signUp(address, password, returnTo),
				() => ((sentKind = 'confirm'), go('sent'))
			);
		if (mode === 'forgot')
			return run(
				() => auth.sendReset(address),
				() => ((sentKind = 'reset'), go('sent'))
			);
		if (mode === 'recovery') return run(() => auth.setPassword(password));
	}

	let needsEmail = $derived(mode === 'signin' || mode === 'signup' || mode === 'forgot');
	let needsPassword = $derived(mode === 'signin' || mode === 'signup' || mode === 'recovery');
	let submitLabel = $derived(
		mode === 'signup'
			? t.signUp
			: mode === 'forgot'
				? t.sendLink
				: mode === 'recovery'
					? t.savePassword
					: t.signIn
	);
</script>

<main class="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-12">
	<h1 class="text-3xl font-extrabold tracking-tight">{head[0]}</h1>
	{#if head[1]}<p class="mt-2 leading-relaxed text-muted">{head[1]}</p>{/if}
	{#if note}<p class="mt-4 rounded-2xl bg-brand-soft px-4 py-3 text-sm leading-relaxed">
			{note}
		</p>{/if}

	<div class="mt-8 rounded-3xl bg-surface p-5 shadow-md ring-1 ring-line/70">
		{#key mode}
			<div in:fly={{ y: 12, duration: 250, easing: cubicOut }}>
				{#if mode === 'sent'}
					<div class="flex flex-col gap-4">
						<p class="leading-relaxed">
							{#if sentKind === 'confirm'}
								{t.confirmSent} <span class="font-semibold" dir="ltr">{email.trim()}</span>.
								{t.confirmThenSignIn}
							{:else}
								{t.resetSent}
							{/if}
						</p>
						{#if sentKind === 'confirm'}
							<button type="button" class={linkBtn} disabled={busy} onclick={resend}>
								{t.resendConfirm}
							</button>
						{/if}
						<Button variant="secondary" onclick={() => go('signin')}>{t.backToSignIn}</Button>
					</div>
				{:else if mode === 'otp'}
					<form
						class="flex flex-col gap-4"
						onsubmit={(event) => {
							event.preventDefault();
							otpSent = true;
						}}
					>
						<label class="flex flex-col gap-1.5 text-sm font-semibold">
							{t.phoneLabel}
							<input
								type="tel"
								dir="ltr"
								required
								autocomplete="tel"
								bind:value={phone}
								class={input}
							/>
						</label>
						{#if otpSent}
							<label class="flex flex-col gap-1.5 text-sm font-semibold">
								{t.otpLabel}
								<input
									type="text"
									dir="ltr"
									inputmode="numeric"
									autocomplete="one-time-code"
									maxlength="6"
									bind:value={otpCode}
									class="{input} text-center text-2xl tracking-[0.4em]"
								/>
							</label>
						{/if}
						<Button type="submit">{otpSent ? t.verifyOtp : t.sendOtp}</Button>
						<button type="button" class={linkBtn} onclick={() => go('signin')}>
							{t.backToSignIn}
						</button>
					</form>
				{:else}
					<form class="flex flex-col gap-4" onsubmit={submit}>
						{#if needsEmail}
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
						{/if}
						{#if needsPassword}
							<label class="flex flex-col gap-1.5 text-sm font-semibold">
								{mode === 'recovery' ? t.newPasswordLabel : t.passwordLabel}
								<input
									type="password"
									dir="ltr"
									required
									minlength={mode === 'signin' ? undefined : 8}
									autocomplete={mode === 'signin' ? 'current-password' : 'new-password'}
									bind:value={password}
									class={input}
								/>
								{#if mode !== 'signin'}
									<span class="text-xs font-normal text-muted">{t.passwordHint}</span>
								{/if}
							</label>
						{/if}
						<Button type="submit" disabled={busy}>{busy ? t.busy : submitLabel}</Button>

						<div class="flex flex-wrap justify-between gap-x-2">
							{#if mode === 'signin'}
								<button type="button" class={linkBtn} onclick={() => go('signup')}>
									{t.toSignUp}
								</button>
								<button type="button" class={linkBtn} onclick={() => go('forgot')}>
									{t.forgot}
								</button>
							{:else if mode !== 'recovery'}
								<button type="button" class={linkBtn} onclick={() => go('signin')}>
									{t.backToSignIn}
								</button>
							{/if}
						</div>

						{#if mode === 'signin'}
							<button
								type="button"
								disabled={!OTP_ENABLED}
								onclick={() => go('otp')}
								class="flex min-h-11 items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line px-4 text-sm font-semibold text-muted enabled:hover:bg-line/40 disabled:cursor-not-allowed disabled:opacity-60"
							>
								{t.otpOption}
								{#if !OTP_ENABLED}
									<span
										class="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-bold text-ink/80"
									>
										{t.otpSoon}
									</span>
								{/if}
							</button>
						{/if}
					</form>
				{/if}
			</div>
		{/key}

		{#if resent}
			<p class="mt-4 text-sm text-muted" role="status" in:fly={{ y: 6, duration: 200 }}>
				{t.resent}
			</p>
		{/if}
		{#if failed}
			<div
				class="mt-4 rounded-2xl bg-miss-soft px-4 py-3 text-sm leading-relaxed font-semibold text-miss"
				role="alert"
				in:fly={{ y: 6, duration: 200 }}
			>
				{failed}
				{#if fix === 'resend'}
					<button type="button" class="mt-1 block underline" onclick={resend}>
						{t.resendConfirm}
					</button>
				{:else if fix === 'existing'}
					<span class="mt-1 flex flex-wrap gap-x-4">
						<button type="button" class="underline" onclick={() => go('signin')}>
							{t.backToSignIn}
						</button>
						<button type="button" class="underline" onclick={() => go('forgot')}>
							{t.forgot}
						</button>
					</span>
				{/if}
			</div>
		{/if}
	</div>
</main>
