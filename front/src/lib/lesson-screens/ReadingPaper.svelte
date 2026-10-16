<script lang="ts">
	import type { Snippet } from 'svelte';

	// Desktop-only "reading material" frame for a passage: a paper card with
	// book-style type, sitting beside its questions. On phones it is invisible.
	let { children }: { children: Snippet } = $props();
</script>

<div
	class="lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:rounded-2xl lg:border lg:border-line lg:bg-surface lg:px-8 lg:py-7 lg:font-serif lg:shadow-sm lg:[&_p]:text-[1.0625rem] lg:[&_p]:leading-8"
>
	{@render children()}
</div>
