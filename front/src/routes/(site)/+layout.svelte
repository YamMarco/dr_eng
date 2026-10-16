<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n/index.svelte';

	let { children } = $props();
	let t = $derived(i18n.dict.site);

	let links = $derived([
		{ href: resolve('/about'), label: t.navAbout },
		{ href: resolve('/plans'), label: t.navPlans }
	]);
</script>

<header class="mx-auto flex w-full max-w-4xl items-center gap-2 px-4 py-3">
	<a href={resolve('/')} class="me-auto text-lg font-extrabold tracking-tight active:scale-[0.98]">
		{t.brand}
	</a>
	<nav aria-label={t.siteNav} class="flex items-center gap-1">
		{#each links as link (link.href)}
			<a
				href={link.href}
				aria-current={page.url.pathname === link.href ? 'page' : undefined}
				class="min-h-11 content-center rounded-xl px-3 text-sm font-semibold text-muted transition duration-100 hover:bg-line/60 hover:text-ink active:scale-[0.98] aria-[current=page]:text-ink"
			>
				{link.label}
			</a>
		{/each}
		<a
			href={resolve('/app')}
			class="ms-1 min-h-11 content-center rounded-xl bg-brand px-4 text-sm font-semibold text-white transition duration-100 hover:bg-brand-dark active:scale-[0.98]"
		>
			{t.navEnter}
		</a>
	</nav>
</header>

{@render children()}

<footer
	class="mx-auto flex w-full max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 px-4 py-6 text-sm text-muted"
>
	<a href={resolve('/about')} class="hover:text-ink">{t.navAbout}</a>
	<a href={resolve('/plans')} class="hover:text-ink">{t.navPlans}</a>
	<a href={resolve('/privacy')} class="hover:text-ink">{t.privacy}</a>
	<a href={resolve('/terms')} class="hover:text-ink">{t.terms}</a>
</footer>
