<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Component } from 'svelte';

	// The module page's one big card: the single next step, and its button.
	type Props = {
		icon: Component;
		title: string;
		sub?: string;
		cta: string;
		href: string;
	};

	let { icon: Icon, title, sub, cta, href }: Props = $props();
</script>

<!-- href is a runtime-built path or query string into a module page, not a typed route -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section
	in:fly={{ y: 8, duration: 250, easing: cubicOut }}
	class="flex flex-col gap-2.5 rounded-3xl bg-brand p-3.5 text-white shadow-md"
>
	<div class="flex items-start gap-3">
		<Icon size={22} class="mt-0.5 shrink-0" aria-hidden="true" />
		<div class="flex min-w-0 flex-col gap-0.5">
			<h2 dir="auto" class="[text-align:match-parent] font-extrabold">{title}</h2>
			{#if sub}<p class="text-sm leading-snug text-white/85">{sub}</p>{/if}
		</div>
	</div>
	<a
		{href}
		class="flex min-h-11 items-center justify-center rounded-full bg-white px-6 font-bold text-brand-dark shadow-sm transition active:scale-[0.98]"
	>
		{cta}
	</a>
</section>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
