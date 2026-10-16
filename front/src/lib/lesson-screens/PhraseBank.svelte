<script lang="ts">
	// The "ביטויים" chip on a lesson's speaking screen: ready spoken chunks by
	// job, the groups that fit this COBE part first, the student's own saved
	// phrases on top. Lessons only - the exam allows no notes.
	import { BookText, Star, Volume2 } from '@lucide/svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import { phraseGroups } from '$lib/content/cobe/phrases';
	import type { CobePart } from '$lib/feedback/speaking';
	import { myPhrases } from '$lib/phraseBank.svelte';
	import { RATE, speak } from '$lib/speech';
	import { i18n } from '$lib/i18n/index.svelte';

	let { part }: { part?: CobePart } = $props();

	const t = $derived(i18n.dict.phraseBank);
	let open = $state(false);
	const fits = (parts: CobePart[]) => !part || parts.includes(part);
	const groups = $derived(
		[...phraseGroups].sort((a, b) => Number(fits(b.parts)) - Number(fits(a.parts)))
	);
</script>

{#snippet row(phrase: string)}
	<li class="flex items-center gap-2 py-1.5">
		<button
			type="button"
			aria-label={i18n.dict.wordCard.listenLabel}
			onclick={() => speak(phrase, RATE.normal)}
			class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-ink/60 transition active:scale-95"
		>
			<Volume2 size={16} aria-hidden="true" />
		</button>
		<span class="min-w-0 flex-1 text-sm leading-snug" dir="ltr">{phrase}</span>
		<button
			type="button"
			aria-label={myPhrases.has(phrase) ? t.remove : t.save}
			onclick={() => myPhrases.toggle(phrase)}
			class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition active:scale-90 {myPhrases.has(
				phrase
			)
				? 'text-amber-500'
				: 'text-ink/30 hover:text-ink/60'}"
		>
			<Star size={18} fill={myPhrases.has(phrase) ? 'currentColor' : 'none'} aria-hidden="true" />
		</button>
	</li>
{/snippet}

<button
	type="button"
	onclick={() => (open = true)}
	class="flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-sm font-semibold text-ink/70 transition hover:bg-accent-soft/70 active:scale-[0.98]"
>
	<BookText size={16} aria-hidden="true" />{t.chip}
</button>

<Sheet bind:open title={t.title} description={t.description}>
	<div class="flex max-h-[60dvh] flex-col gap-4 overflow-y-auto pb-2">
		{#if myPhrases.list.length}
			<section>
				<h3 class="mb-1 text-xs font-bold text-amber-600">{t.mine}</h3>
				<ul class="divide-y divide-line/60">
					{#each myPhrases.list as phrase (phrase)}{@render row(phrase)}{/each}
				</ul>
			</section>
		{/if}
		{#each groups as group (group.id)}
			<section>
				<h3 class="mb-1 flex items-center gap-2 text-xs font-bold text-ink/70">
					{group.titleHe}
					{#if part && fits(group.parts)}
						<span class="rounded-full bg-brand-soft px-2 py-0.5 text-[11px] text-brand-dark"
							>{t.fits}</span
						>
					{/if}
				</h3>
				<ul class="divide-y divide-line/60">
					{#each group.phrases as phrase (phrase)}{@render row(phrase)}{/each}
				</ul>
			</section>
		{/each}
	</div>
</Sheet>
