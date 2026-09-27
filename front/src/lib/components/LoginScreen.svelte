<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { auth } from '$lib/auth.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Mockup: inputs are disabled placeholders, the button lets anyone in.
	const input =
		'w-full rounded-2xl border-2 border-line bg-canvas px-4 py-3 text-lg disabled:cursor-not-allowed disabled:opacity-50';
</script>

<main class="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-12">
	<h1 class="text-3xl font-extrabold tracking-tight">{i18n.dict.login.title}</h1>
	<p class="mt-2 leading-relaxed text-muted">{i18n.dict.login.subtitle}</p>

	<div class="mt-8 flex flex-col gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 ring-line/70">
		<label class="flex flex-col gap-1.5 text-sm font-semibold">
			{i18n.dict.login.phoneLabel}
			<input type="tel" dir="ltr" disabled class={input} />
		</label>
		<label class="flex flex-col gap-1.5 text-sm font-semibold">
			{i18n.dict.login.passwordLabel}
			<input type="password" disabled class={input} />
		</label>
		<Button onclick={() => auth.login()}>{i18n.dict.login.submit}</Button>
	</div>
</main>
