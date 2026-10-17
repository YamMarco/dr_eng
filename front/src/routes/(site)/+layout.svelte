<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { auth } from '$lib/auth.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { themeStore } from '$lib/theme.svelte';

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
	<button
		type="button"
		aria-label={t.themeToggle}
		onclick={() => themeStore.setMode(themeStore.resolved === 'dark' ? 'light' : 'dark')}
		class="inline-flex h-11 w-11 items-center justify-center rounded-xl text-muted transition duration-100 hover:bg-line/60 hover:text-ink active:scale-[0.95]"
	>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="h-5 w-5"
			aria-hidden="true"
		>
			{#if themeStore.resolved === 'dark'}
				<circle cx="12" cy="12" r="4" />
				<path
					d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
				/>
			{:else}
				<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
			{/if}
		</svg>
	</button>
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
			{auth.session ? t.navApp : t.navEnter}
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
	{#if auth.session}
		<button type="button" onclick={() => auth.signOut()} class="hover:text-ink">
			{t.navSignOut}
		</button>
	{/if}
</footer>
