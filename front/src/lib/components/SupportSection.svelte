<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { ChevronLeft, Mail, MessageCircle } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { SUPPORT_EMAIL, SUPPORT_WHATSAPP, emailHref, whatsappHref } from '$lib/support';

	// Settings > help: WhatsApp or email us. Contacts live in $lib/support.

	let { index }: { index: number } = $props();

	let t = $derived(i18n.dict.settings);

	const row =
		'flex min-h-14 items-center gap-3 px-5 py-4 transition hover:bg-brand-soft active:scale-[0.99]';
	const icon = 'flex size-10 shrink-0 items-center justify-center rounded-full';
</script>

<section
	in:fly={{ y: 12, duration: 300, delay: staggerDelay(index), easing: cubicOut }}
	class="mt-6 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
>
	<h2 class="px-5 pt-5 text-sm font-bold text-muted">{t.supportSection}</h2>
	<p class="px-5 pt-1 text-sm leading-relaxed text-muted">{t.supportHint}</p>
	<ul class="mt-2 flex flex-col divide-y divide-line/70">
		{#if SUPPORT_WHATSAPP}
			<li>
				<a href={whatsappHref(t.supportMessage)} target="_blank" rel="noopener" class={row}>
					<span class="{icon} bg-brand-soft text-brand">
						<MessageCircle size={20} aria-hidden="true" />
					</span>
					<span class="flex-1">
						<span class="block font-semibold">{t.supportWhatsapp}</span>
						<span class="block text-sm text-muted">{t.supportWhatsappDesc}</span>
					</span>
					<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
				</a>
			</li>
		{/if}
		<li>
			<a href={emailHref(t.supportSubject)} class={row}>
				<span class="{icon} bg-accent-soft text-ink">
					<Mail size={20} aria-hidden="true" />
				</span>
				<span class="min-w-0 flex-1">
					<span class="block font-semibold">{t.supportEmail}</span>
					<span class="block truncate text-sm text-muted" dir="ltr">{SUPPORT_EMAIL}</span>
				</span>
				<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
			</a>
		</li>
	</ul>
</section>
