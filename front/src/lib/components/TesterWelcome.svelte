<script lang="ts">
	import { fly } from 'svelte/transition';
	import { FlaskConical, MessageSquareText, Sparkles, Users } from '@lucide/svelte';
	import Sheet from './Sheet.svelte';
	import Button from './Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { TESTERS_GROUP } from '$lib/support';
	import { resolve } from '$app/paths';

	// A tester's first visit: what a test version means, where feedback goes, and
	// that the WhatsApp group shows their number. Once per device.
	const SEEN_KEY = 'tester-welcome-seen';

	let t = $derived(i18n.dict.testerWelcome);
	let open = $state(!localStorage.getItem(SEEN_KEY));

	const icons = [FlaskConical, MessageSquareText, Sparkles, Users];
	const link = 'font-semibold text-brand-dark underline hover:no-underline';

	function done() {
		open = false;
		localStorage.setItem(SEEN_KEY, '1');
	}
</script>

<Sheet bind:open title={t.title} description={t.intro} onclose={done}>
	<ul class="flex flex-col gap-4">
		{#each t.points as point, i (point.title)}
			{@const Icon = icons[i]}
			<li class="flex gap-3" in:fly={{ y: 12, duration: 250, delay: staggerDelay(i, 120, 70) }}>
				<span
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"
				>
					<Icon size={20} aria-hidden="true" />
				</span>
				<span class="flex-1">
					<span class="block font-semibold">{point.title}</span>
					<span class="block text-sm leading-relaxed text-muted">{point.body}</span>
					{#if Icon === Users && TESTERS_GROUP}
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a href={TESTERS_GROUP} target="_blank" rel="noopener" class="text-sm {link}">
							{t.joinGroup}
						</a>
					{/if}
				</span>
			</li>
		{/each}
	</ul>

	<p class="text-xs text-muted">
		{t.legalLead}<a href={resolve('/terms')} target="_blank" class={link}>{t.terms}</a>{t.and}<a
			href={resolve('/privacy')}
			target="_blank"
			class={link}>{t.privacy}</a
		>.
	</p>

	<Button onclick={done}>{t.start}</Button>
</Sheet>
