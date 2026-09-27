<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { auth } from '$lib/auth.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Mockup: inputs are disabled placeholders, the button lets anyone in.
	const input =
		'w-full rounded-2xl border-2 border-line bg-canvas px-4 py-3 text-lg disabled:cursor-not-allowed disabled:opacity-50';

	function login() {
		auth.login();
		goto(resolve('/'));
	}
</script>

<main class="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-12">
	<h1 class="text-3xl font-extrabold tracking-tight">{i18n.dict.login.title}</h1>
	<p class="mt-2 leading-relaxed text-muted">{i18n.dict.login.subtitle}</p>

	<div class="mt-8 flex flex-col gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 ring-line/70">
		<div class="relative flex flex-col gap-4">
			<label class="flex flex-col gap-1.5 text-sm font-semibold">
				{i18n.dict.login.phoneLabel}
				<input type="tel" dir="ltr" disabled class={input} />
			</label>
			<label class="flex flex-col gap-1.5 text-sm font-semibold">
				{i18n.dict.login.passwordLabel}
				<input type="password" disabled class={input} />
			</label>
			<span
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-xl border-2 border-dashed border-ink/40 bg-accent-soft px-4 py-2 text-center text-sm font-bold whitespace-nowrap text-ink/80 shadow-md"
			>
				{i18n.dict.login.mockup}
			</span>
		</div>
		<Button onclick={login}>{i18n.dict.login.submit}</Button>
	</div>
</main>
