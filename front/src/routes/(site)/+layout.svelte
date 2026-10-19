<script lang="ts">
	import './site.css';
	import { GraduationCap } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { auth } from '$lib/auth.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { themeStore } from '$lib/theme.svelte';

	let { children } = $props();
	let t = $derived(i18n.dict.site);

	let links = $derived([
		{ href: resolve('/about'), label: t.navAbout },
		{ href: resolve('/plans'), label: t.navPlans }
	]);
</script>

<header
	class="sticky top-0 z-30 border-b border-line/60 bg-canvas/80 backdrop-blur-lg supports-[backdrop-filter]:bg-canvas/70"
>
	<div class="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 py-2.5 sm:px-6">
		<a
			href={resolve('/')}
			class="me-auto flex items-center gap-2 text-base font-extrabold tracking-tight whitespace-nowrap active:scale-[0.98] sm:text-lg"
		>
			<span class="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-white">
				<GraduationCap size={18} aria-hidden="true" />
			</span>
			<span class="max-[380px]:sr-only">{t.brand}</span>
		</a>
		<nav aria-label={t.siteNav} class="flex items-center gap-1">
			{#each links as link (link.href)}
				<a
					href={link.href}
					aria-current={page.url.pathname === link.href ? 'page' : undefined}
					class="min-h-11 content-center rounded-xl px-2 text-sm font-semibold text-muted transition duration-100 hover:bg-line/60 hover:text-ink active:scale-[0.98] aria-[current=page]:text-ink sm:px-3"
				>
					{link.label}
				</a>
			{/each}
			<a
				href={resolve('/app')}
				class="ms-1 min-h-10 content-center rounded-xl bg-brand px-4 text-sm font-semibold text-white transition duration-100 hover:bg-brand-dark active:scale-[0.98]"
			>
				{auth.session ? t.navApp : t.navEnter}
			</a>
		</nav>
	</div>
</header>

{@render children()}

<footer
	class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-6 text-sm text-muted sm:px-6"
>
	<ThemeSwitch
		label={t.themeToggle}
		dark={themeStore.resolved === 'dark'}
		onchange={(dark) => themeStore.setMode(dark ? 'dark' : 'light')}
	/>
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
