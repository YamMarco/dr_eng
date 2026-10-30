<script lang="ts">
	import { ChevronLeft, Mail, MessageSquareText, Users } from '@lucide/svelte';
	import Sheet from './Sheet.svelte';
	import Button from './Button.svelte';
	import Loader from './Loader.svelte';
	import Toggle from './Toggle.svelte';
	import { apiFetch } from '$lib/api';
	import { auth } from '$lib/auth.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { captureScreen } from '$lib/screenshot';
	import { screenContext } from '$lib/screenContext.svelte';
	import { SUPPORT_EMAIL, TESTERS_GROUP, emailHref } from '$lib/support';

	// Testers' feedback, reachable from every app screen: a tab on the screen's
	// edge, clear of the bottom bars and the lesson's action buttons. Signed in,
	// it's a report form (text + a screenshot of the screen behind it, the URL and
	// the lesson screen) that /api/feedback emails to support@; signed out, a mail link.
	let t = $derived(i18n.dict.testerFeedback);
	let open = $state(false);

	let message = $state('');
	let screenshot = $state<string | null>(null);
	let capturing = $state(false);
	let attach = $state(true);
	let status = $state<'idle' | 'sending' | 'sent' | 'failed' | 'limit'>('idle');
	// Taken when the sheet opens, so the URL and screen match the screenshot.
	let context = { url: '', screen: '' };

	async function start() {
		open = true;
		status = 'idle';
		context = { url: location.href, screen: screenContext.label };
		if (!auth.loggedIn) return;
		screenshot = null;
		capturing = true;
		// The tab and sheet are marked data-no-screenshot: the capture sees the page behind.
		screenshot = await captureScreen().catch(() => null);
		capturing = false;
	}

	async function send(event: SubmitEvent) {
		event.preventDefault();
		status = 'sending';
		const res = await apiFetch('/api/feedback', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message,
				...context,
				viewport: `${innerWidth}x${innerHeight}@${devicePixelRatio}`,
				language: i18n.language,
				screenshot: attach && screenshot ? screenshot : undefined
			})
		}).catch(() => null);
		status = res?.ok ? 'sent' : res?.status === 429 ? 'limit' : 'failed';
		if (res?.ok) message = '';
	}

	const row =
		'flex min-h-16 items-center gap-3 rounded-2xl p-3 ring-1 ring-line transition hover:bg-line/40 active:scale-[0.99]';
	const icon =
		'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand';
</script>

<button
	type="button"
	data-no-screenshot
	hidden={open}
	onclick={start}
	class="fixed inset-e-0 top-1/2 z-[60] flex min-h-10 -translate-y-1/2 items-center gap-1.5 rounded-s-full bg-brand ps-3 pe-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-brand-dark active:scale-95"
>
	<MessageSquareText size={16} aria-hidden="true" />
	{t.button}
</button>

<div data-no-screenshot class="contents">
	<Sheet bind:open title={t.title} description={t.description}>
		<!-- External links (invite, mail), not app routes. -->
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		{#if !auth.loggedIn}
			<a href={emailHref(t.emailSubject)} class={row}>
				<span class={icon}><Mail size={20} aria-hidden="true" /></span>
				<span class="flex-1">
					<span class="block font-semibold">{t.email}</span>
					<span class="block text-sm text-muted"><bdi>{SUPPORT_EMAIL}</bdi></span>
				</span>
				<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
			</a>
		{:else if status === 'sent'}
			<p class="rounded-2xl bg-brand-soft p-4 text-center font-semibold text-brand-dark">
				{t.sent}
			</p>
		{:else}
			<form onsubmit={send} class="flex flex-col gap-3">
				<textarea
					bind:value={message}
					rows="4"
					maxlength="2000"
					aria-label={t.messageLabel}
					placeholder={t.messagePlaceholder}
					class="w-full rounded-xl border-2 border-line bg-surface p-3 leading-relaxed transition focus:border-brand"
				></textarea>

				<div class="flex items-center gap-3 rounded-2xl p-2 ring-1 ring-line">
					<span
						class="flex h-16 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-line/40"
					>
						{#if screenshot}
							<img src={screenshot} alt="" class="h-full w-full object-cover object-top" />
						{:else if capturing}
							<Loader size="sm" />
						{/if}
					</span>
					<span class="flex-1 text-sm">
						<span class="block font-semibold">{t.screenshot}</span>
						<span class="block text-muted">
							{screenshot || capturing ? t.screenshotDesc : t.noScreenshot}
						</span>
					</span>
					{#if screenshot}<Toggle bind:checked={attach} label={t.screenshot} />{/if}
				</div>

				<p class="text-xs text-muted">{t.contextNote}</p>

				{#if status === 'failed' || status === 'limit'}
					<p role="alert" class="rounded-xl bg-miss-soft px-3 py-2 text-sm font-semibold text-miss">
						{status === 'limit' ? t.limit : t.failed}
					</p>
				{/if}

				<Button
					type="submit"
					busy={status === 'sending'}
					disabled={capturing || (!message.trim() && !(attach && screenshot))}
				>
					{status === 'sending' ? t.sending : t.send}
				</Button>
			</form>
		{/if}

		{#if TESTERS_GROUP && auth.loggedIn}
			<a href={TESTERS_GROUP} target="_blank" rel="noopener" class={row}>
				<span class={icon}><Users size={20} aria-hidden="true" /></span>
				<span class="flex-1">
					<span class="block font-semibold">{t.group}</span>
					<span class="block text-sm text-muted">{t.groupDesc}</span>
				</span>
				<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
			</a>
		{/if}
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</Sheet>
</div>
