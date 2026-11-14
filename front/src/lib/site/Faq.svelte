<script lang="ts">
	import { reveal } from '$lib/site/reveal';

	// A site FAQ: a title and native <details> rows (keyboard and screen readers for free).
	let { title, items }: { title: string; items: { q: string; a: string }[] } = $props();
</script>

<section {@attach reveal} class="mx-auto flex w-full max-w-2xl flex-col gap-3">
	<h2 class="text-center text-2xl font-extrabold">{title}</h2>
	{#each items as entry (entry.q)}
		<details class="group rounded-2xl bg-surface ring-1 ring-line/70">
			<summary
				class="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 font-semibold transition duration-100 hover:text-brand active:scale-[0.99]"
			>
				{entry.q}
				<span
					class="text-xl leading-none text-muted transition-transform duration-200 group-open:rotate-45"
					aria-hidden="true">+</span
				>
			</summary>
			<p class="px-5 pb-4 text-pretty text-muted">{entry.a}</p>
		</details>
	{/each}
</section>
