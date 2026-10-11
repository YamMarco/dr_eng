<script lang="ts">
	// Labelled short text input (timer keys, image alt, hints).
	let {
		label,
		value = $bindable(),
		dir = 'ltr',
		stacked = false
	}: {
		label: string;
		value: string | undefined;
		dir?: 'ltr' | 'rtl' | 'auto';
		stacked?: boolean;
	} = $props();
</script>

<label class="flex gap-2 text-xs text-muted {stacked ? 'flex-col' : 'items-center'}">
	{label}
	<input
		bind:value
		{dir}
		class="rounded-lg border-2 border-line bg-surface p-1 {stacked ? '' : 'w-28'}"
	/>
</label>
