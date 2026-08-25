<script lang="ts">
	type Props = {
		checked: boolean;
		label: string;
		onchange?: (checked: boolean) => void;
	};

	let { checked = $bindable(), label, onchange }: Props = $props();

	function toggle() {
		checked = !checked;
		onchange?.(checked);
	}
</script>

<button
	type="button"
	role="switch"
	aria-checked={checked}
	aria-label={label}
	onclick={toggle}
	class="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors duration-150 {checked
		? 'bg-brand'
		: 'bg-line'}"
>
	<span
		class="inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-150 {checked
			? '-translate-x-7'
			: '-translate-x-1'}"
	></span>
</button>
