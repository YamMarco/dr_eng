<script lang="ts">
	// Labelled optional number input. Empty box = undefined (field not set).
	let {
		label,
		value,
		onChange,
		min = 0
	}: {
		label: string;
		value: number | undefined;
		onChange: (value: number | undefined) => void;
		min?: number;
	} = $props();
</script>

<label class="flex items-center gap-2 text-xs text-muted">
	{label}
	<input
		type="number"
		{min}
		value={value ?? ''}
		oninput={(e) => onChange(e.currentTarget.value ? e.currentTarget.valueAsNumber : undefined)}
		class="w-16 rounded-lg border-2 border-line bg-surface p-1"
	/>
</label>
