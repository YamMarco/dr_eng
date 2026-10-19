<script lang="ts">
	import { ChevronDown, CircleCheck } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// The two ways in, side by side: join the waitlist (/api/waitlist) or redeem a code
	// (a GET form to /checkout?coupon=). Tapping one opens its field and closes the other.
	// A link to #<id> opens the waitlist field.
	let { id }: { id: string } = $props();
	let t = $derived(i18n.dict.site.home);

	type Panel = 'waitlist' | 'code';
	type Error = keyof typeof t.waitlist.errors;
	let open = $state<Panel | null>(null);
	let email = $state('');
	let website = $state('');
	let status = $state<'idle' | 'sending' | 'done'>('idle');
	let error = $state<Error | null>(null);

	const toggle = (panel: Panel) => {
		open = open === panel ? null : panel;
		error = null;
	};
	const focus = (node: HTMLInputElement) => node.focus({ preventScroll: true });

	$effect(() => {
		const onHash = () => {
			if (location.hash === `#${id}`) open = 'waitlist';
		};
		onHash();
		window.addEventListener('hashchange', onHash);
		return () => window.removeEventListener('hashchange', onHash);
	});

	async function join(event: SubmitEvent) {
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
				open = null;
				return;
			}
			const reason = (await res.json().catch(() => ({}))).error;
			error = reason in t.waitlist.errors ? reason : 'unavailable';
		} catch {
			error = 'network';
		}
		status = 'idle';
	}

	const input =
		'min-h-[56px] w-full rounded-2xl border-2 border-line bg-surface px-4 text-lg transition-colors placeholder:text-muted/70 focus:border-brand focus:ring-0 focus:outline-none';
</script>

<div {id} class="flex w-full max-w-xl scroll-mt-28 flex-col gap-3">
	<div class="grid grid-cols-2 gap-3">
		{#if status === 'done'}
			<div
				class="relative flex items-center justify-center gap-2 rounded-2xl bg-brand-soft px-3 font-bold text-brand-dark motion-safe:animate-rise"
				role="status"
			>
				<Confetti />
				<CircleCheck
					size={22}
					class="shrink-0 motion-safe:animate-pop-correct"
					aria-hidden="true"
				/>
				{t.waitlist.doneTitle}
			</div>
		{:else}
			<Button
				class="px-3 text-base whitespace-nowrap sm:text-lg"
				onclick={() => toggle('waitlist')}
				expanded={open === 'waitlist'}
			>
				{t.ctaJoin}
				<ChevronDown
					size={18}
					class="shrink-0 transition-transform duration-200 {open === 'waitlist'
						? 'rotate-180'
						: ''}"
					aria-hidden="true"
				/>
			</Button>
		{/if}
		<Button
			variant="secondary"
			class="px-3 text-base whitespace-nowrap sm:text-lg"
			onclick={() => toggle('code')}
			expanded={open === 'code'}
		>
			{t.ctaCode}
			<ChevronDown
				size={18}
				class="shrink-0 transition-transform duration-200 {open === 'code' ? 'rotate-180' : ''}"
				aria-hidden="true"
			/>
		</Button>
	</div>

	{#if open === 'waitlist'}
		<form onsubmit={join} class="flex flex-col gap-2" transition:slide={{ duration: 200 }}>
			<div class="flex flex-col gap-3 sm:flex-row">
				<label class="flex-1">
					<span class="sr-only">{t.waitlist.label}</span>
					<input
						{@attach focus}
						type="email"
						dir="ltr"
						required
						maxlength="254"
						autocomplete="email"
						placeholder={t.waitlist.placeholder}
						bind:value={email}
						class={input}
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
					{status === 'sending' ? t.waitlist.sending : t.waitlist.submit}
				</Button>
			</div>
			{#if error}
				<p class="text-sm font-semibold text-miss" role="alert">{t.waitlist.errors[error]}</p>
			{:else}
				<p class="text-sm text-muted">{t.waitlist.note}</p>
			{/if}
		</form>
	{:else if open === 'code'}
		<form
			method="get"
			action={resolve('/checkout')}
			class="flex flex-col gap-3 sm:flex-row"
			transition:slide={{ duration: 200 }}
		>
			<label class="flex-1">
				<span class="sr-only">{t.code.label}</span>
				<input
					{@attach focus}
					type="text"
					name="coupon"
					dir="ltr"
					required
					maxlength="64"
					autocomplete="off"
					autocapitalize="characters"
					spellcheck="false"
					placeholder={t.code.label}
					class="{input} uppercase placeholder:text-end placeholder:normal-case"
				/>
			</label>
			<Button type="submit" class="sm:w-auto sm:px-7">{t.code.submit}</Button>
		</form>
	{:else if status === 'done'}
		<p class="text-sm text-muted">{t.waitlist.doneBody}</p>
	{/if}
</div>
