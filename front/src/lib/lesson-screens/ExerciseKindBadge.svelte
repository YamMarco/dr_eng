<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<span
	class="mb-2 inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-ink/70"
>
	{label}
</span>
