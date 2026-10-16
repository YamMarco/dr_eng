<script lang="ts">
	import { fly } from 'svelte/transition';

	// A coupon-code input with its own submit button and a calm error line.
	// Used by checkout (apply a discount) and the in-app paywall (redeem).

	type Props = {
		value: string;
		label: string;
		action: string;
		busy?: boolean;
		error?: string | null;
		onsubmit: (code: string) => void;
	};

	let {
		value = $bindable(),
		label,
		action,
		busy = false,
		error = null,
		onsubmit
	}: Props = $props();
</script>

<form
	class="flex flex-col gap-1.5"
	onsubmit={(event) => {
		event.preventDefault();
		if (value.trim()) onsubmit(value.trim());
	}}
>
	<label for="code-field" class="text-sm font-semibold">{label}</label>
	<div class="flex gap-2">
		<input
			id="code-field"
			type="text"
			dir="ltr"
			autocomplete="off"
			autocapitalize="characters"
			spellcheck="false"
			maxlength="64"
			bind:value
			class="min-w-0 flex-1 rounded-2xl border-2 border-line bg-canvas px-4 py-3 text-lg tracking-wider uppercase focus:border-brand focus:outline-none"
		/>
		<button
			type="submit"
			disabled={busy || !value.trim()}
			class="min-h-[52px] shrink-0 rounded-2xl border-2 border-brand px-5 font-semibold text-brand transition duration-100 hover:bg-brand-soft active:scale-[0.98] disabled:opacity-50"
		>
			{action}
		</button>
	</div>
	{#if error}
		<p
			class="rounded-xl bg-miss-soft px-3 py-2 text-sm font-semibold text-miss"
			role="alert"
			in:fly={{ y: 6, duration: 200 }}
		>
			{error}
		</p>
	{/if}
</form>
