<script lang="ts">
	import { ChevronLeft, MessageSquareText, Users } from '@lucide/svelte';
	import Sheet from './Sheet.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { TESTERS_GROUP } from '$lib/support';

	// Testers' feedback, reachable from every app screen: a tab on the screen's
	// edge, clear of the bottom bars and the lesson's action buttons.
	let t = $derived(i18n.dict.testerFeedback);
	let open = $state(false);
</script>

{#if TESTERS_GROUP}
	<button
		type="button"
		hidden={open}
		onclick={() => (open = true)}
		class="fixed inset-e-0 top-1/2 z-[60] flex -translate-y-1/2 flex-col items-center gap-1.5 rounded-s-xl bg-brand px-1.5 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-brand-dark active:scale-95"
	>
		<MessageSquareText size={16} aria-hidden="true" />
		<span class="[writing-mode:vertical-rl]">{t.button}</span>
	</button>

	<Sheet bind:open title={t.title} description={t.description}>
		<!-- An external invite link, not an app route. -->
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<a
			href={TESTERS_GROUP}
			target="_blank"
			rel="noopener"
			class="flex min-h-16 items-center gap-3 rounded-2xl p-3 ring-1 ring-line transition hover:bg-line/40 active:scale-[0.99]"
		>
			<span
				class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"
			>
				<Users size={20} aria-hidden="true" />
			</span>
			<span class="flex-1">
				<span class="block font-semibold">{t.group}</span>
				<span class="block text-sm text-muted">{t.groupDesc}</span>
			</span>
			<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
		</a>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</Sheet>
{/if}
