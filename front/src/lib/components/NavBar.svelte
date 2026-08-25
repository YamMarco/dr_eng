<script lang="ts">
	import { page } from '$app/state';

	const items = [
		{
			href: '/',
			label: 'בית',
			match: (path: string) => path === '/' || path.startsWith('/module'),
			icon: 'home'
		},
		{
			href: '/settings',
			label: 'הגדרות',
			match: (path: string) => path.startsWith('/settings'),
			icon: 'settings'
		}
	] as const;

	let path = $derived(page.url.pathname);
</script>

{#snippet homeIcon(active: boolean)}
	<svg
		viewBox="0 0 24 24"
		fill={active ? 'currentColor' : 'none'}
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="h-6 w-6"
		aria-hidden="true"
	>
		<path d="m3 11 9-8 9 8" />
		<path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
	</svg>
{/snippet}

{#snippet settingsIcon(active: boolean)}
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="h-6 w-6"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="3" fill={active ? 'currentColor' : 'none'} />
		<path
			d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
		/>
	</svg>
{/snippet}

<nav
	aria-label="ניווט ראשי"
	class="fixed inset-x-0 bottom-0 z-30 border-t border-line/70 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85"
	style="padding-bottom: env(safe-area-inset-bottom)"
>
	<div class="mx-auto flex max-w-lg items-stretch justify-around px-2">
		{#each items as item (item.href)}
			{@const active = item.match(path)}
			<a
				href={item.href}
				aria-current={active ? 'page' : undefined}
				class="flex min-h-16 flex-1 flex-col items-center justify-center gap-1 py-2 text-xs font-semibold transition {active
					? 'text-brand-dark'
					: 'text-muted hover:text-ink'}"
			>
				{#if item.icon === 'home'}
					{@render homeIcon(active)}
				{:else}
					{@render settingsIcon(active)}
				{/if}
				{item.label}
			</a>
		{/each}
	</div>
</nav>
