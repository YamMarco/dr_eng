<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import LoginScreen from '$lib/components/LoginScreen.svelte';
	import { auth } from '$lib/auth.svelte';
	import { profile } from '$lib/profile.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	// The exam-run screen has its own fixed bottom action bar - no global nav.
	const noNavPatterns = [/\/exam\/run$/];

	// Onboarding (no profile yet) is a focused two-step flow - no nav either.
	let showNav = $derived(
		auth.loggedIn && !auth.recovering && !!profile.value && !noNavPatterns.some((re) => re.test(page.url.pathname))
	);
</script>

<div class="flex flex-1 flex-col {showNav ? 'pb-16 lg:ps-24 lg:pb-0' : ''}">
	{#if !auth.ready}
		<!-- Reading the stored session: a beat, so the login screen doesn't flash. -->
	{:else if auth.loggedIn && !auth.recovering}
		{@render children()}
	{:else}
		<LoginScreen />
	{/if}
</div>

{#if showNav}
	<NavBar />
{/if}
