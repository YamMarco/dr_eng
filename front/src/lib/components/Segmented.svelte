<script lang="ts" generics="T extends string">
	// A small one-of-N switch (theme mode, install platform).
	type Props = {
		options: { value: T; label: string }[];
		value: T;
		label: string;
		onchange: (value: T) => void;
	};

	let { options, value, label, onchange }: Props = $props();
</script>

<div role="radiogroup" aria-label={label} class="flex gap-1 rounded-xl bg-canvas p-1">
	{#each options as option (option.value)}
		<button
			type="button"
			role="radio"
			aria-checked={value === option.value}
			onclick={() => onchange(option.value)}
			class="min-h-11 rounded-lg px-3 text-sm font-semibold transition active:scale-95 {value ===
			option.value
				? 'bg-brand text-white shadow'
				: 'text-muted hover:text-ink'}"
		>
			{option.label}
		</button>
	{/each}
</div>
