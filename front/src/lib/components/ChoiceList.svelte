<script lang="ts">
	/** Single-choice list of large tappable rows (radio semantics). */
	type Props = {
		options: { value: string; label: string }[];
		value: string | undefined;
		label: string;
		onchange: (value: string) => void;
	};

	let { options, value, label, onchange }: Props = $props();
</script>

<div role="radiogroup" aria-label={label} class="flex flex-col gap-2">
	{#each options as option (option.value)}
		{@const selected = option.value === value}
		<button
			type="button"
			role="radio"
			aria-checked={selected}
			onclick={() => onchange(option.value)}
			class="flex min-h-14 items-center gap-3 rounded-2xl border-2 px-4 text-start font-semibold transition active:scale-[0.99] {selected
				? 'border-brand bg-brand-soft text-ink'
				: 'border-line bg-surface text-ink hover:border-brand/50'}"
		>
			<span
				class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 {selected
					? 'border-brand'
					: 'border-line'}"
				aria-hidden="true"
			>
				{#if selected}<span class="h-2.5 w-2.5 rounded-full bg-brand"></span>{/if}
			</span>
			{option.label}
		</button>
	{/each}
</div>
