<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import LoginScreen from '$lib/components/LoginScreen.svelte';
	import Paywall from '$lib/components/Paywall.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import FeedbackButton from '$lib/components/FeedbackButton.svelte';
	import StreakModal from '$lib/dashboard/StreakModal.svelte';
	import { auth } from '$lib/auth.svelte';
	import { access } from '$lib/access.svelte';
	import { profile } from '$lib/profile.svelte';
	import { progressSync } from '$lib/progressSync.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	// The exam-run screen has its own fixed bottom action bar - no global nav.
	const noNavPatterns = [/\/exam\/run$/];

	let signedIn = $derived(auth.loggedIn && !auth.recovering);
	$effect(() => access.sync(auth.session?.user.id));
	$effect(() => progressSync.start(auth.session?.user.id));

	// Onboarding (no profile yet) is a focused two-step flow - no nav either.
	let showNav = $derived(
		signedIn &&
			!!(access.active || access.cobe) &&
			progressSync.ready &&
			!!profile.value &&
			!noNavPatterns.some((re) => re.test(page.url.pathname))
	);
</script>

<div class="flex flex-1 flex-col {showNav ? 'pb-16 lg:pt-14 lg:pb-0' : ''}">
	{#if !auth.ready}
		<!-- Reading the stored session: the loader waits a beat, so a fast read shows nothing. -->
		<Loader screen />
	{:else if !signedIn}
		<LoginScreen homeLink />
	{:else if access.active === null || access.cobe === null || !progressSync.ready}
		<!-- Checking the plan, or bringing the account's progress to a new device: same beat. -->
		<Loader screen />
	{:else if access.active || access.cobe}
		{@render children()}
		<StreakModal />
	{:else}
		<Paywall />
	{/if}
</div>

{#if showNav}
	<NavBar />
{/if}

{#if auth.ready}
	<FeedbackButton />
{/if}
