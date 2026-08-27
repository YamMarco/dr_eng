<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<span
	class="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-ink/70"
>
	{label}
</span>
