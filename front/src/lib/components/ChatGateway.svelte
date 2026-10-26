<script lang="ts">
	// The AI chat's entry on the COBE path: same square as the word deck's, above the lessons.
	import { MessagesSquare } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { i18n } from '$lib/i18n/index.svelte';

	type Props = { unitId: string; moduleId: string };
	let { unitId, moduleId }: Props = $props();
</script>

<a
	href={resolve('/app/unit/[unitId]/module/[moduleId]/chat', { unitId, moduleId })}
	class="group flex flex-col items-center gap-1.5 rounded-3xl bg-brand-soft px-5 py-4 text-brand-dark shadow-md ring-1 ring-brand/30 transition active:scale-95"
>
	<span
		class="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-sm"
	>
		<MessagesSquare size={32} aria-hidden="true" />
	</span>
	<span class="font-extrabold">{i18n.dict.chat.title}</span>
</a>
