<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// The two ways in: pick a plan (new visitors) or sign in (/app shows the sign-in screen).
	let t = $derived(i18n.dict.site.home);
</script>

<div class="grid w-full max-w-xl gap-3 sm:grid-cols-2">
	<Button class="px-3 whitespace-nowrap" href={resolve('/plans')}>{t.ctaStart}</Button>
	<Button variant="secondary" class="px-3 whitespace-nowrap" href={resolve('/app')}>
		{t.ctaSignIn}
	</Button>
</div>
