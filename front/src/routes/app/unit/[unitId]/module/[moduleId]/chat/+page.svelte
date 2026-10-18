<script lang="ts">
	// COBE chat: pick a light topic or a mini COBE part, then talk. One chat at
	// a time; "another chat" comes back here.
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { MessagesSquare, Shuffle, User, FolderOpen } from '@lucide/svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import ChatSession from '$lib/chat/ChatSession.svelte';
	import { BANTER_TOPICS, PART_A_TOPICS } from '$lib/content/cobe/chatTopics';
	import { drawTwo, type ChatMode } from '$lib/feedback/chat';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const t = $derived(i18n.dict.chat);
	let back = $derived(`/app/unit/${data.group.id}/module/${data.mod.id}`);

	let tab = $state<'banter' | 'cobe'>('banter');
	let chat = $state<{ mode: ChatMode; topics: string[]; id: number } | null>(null);
	let chats = 0;

	function start(mode: ChatMode, topics: string[]) {
		chat = { mode, topics, id: ++chats };
	}

	const surprise = () =>
		start('banter', [BANTER_TOPICS[Math.floor(Math.random() * BANTER_TOPICS.length)].id]);

	const card =
		'flex flex-col items-start gap-0.5 rounded-2xl bg-surface p-3 text-start shadow-sm ring-1 ring-line/70 transition duration-100 hover:ring-brand active:scale-[0.98]';
</script>

<AppBar title={t.title} {back} />

<main class="app-col flex flex-1 flex-col px-4 pt-4 pb-8">
	{#if chat}
		{#key chat.id}
			<ChatSession mode={chat.mode} topics={chat.topics} onagain={() => (chat = null)} {back} />
		{/key}
	{:else}
		<p
			in:fly={{ y: 12, duration: 300, easing: cubicOut }}
			class="mb-4 text-sm leading-relaxed text-muted"
		>
			{t.intro}
		</p>

		<div class="mb-4 grid grid-cols-2 gap-1 rounded-2xl bg-line/50 p-1" role="tablist">
			{#each [['banter', t.tabBanter], ['cobe', t.tabCobe]] as const as [id, label] (id)}
				<button
					type="button"
					role="tab"
					aria-selected={tab === id}
					onclick={() => (tab = id)}
					class="rounded-xl py-2 text-sm font-bold transition duration-150 active:scale-[0.98] {tab ===
					id
						? 'bg-surface text-brand shadow-sm'
						: 'text-muted hover:text-ink'}"
				>
					{label}
				</button>
			{/each}
		</div>

		{#if tab === 'banter'}
			<div class="grid grid-cols-2 gap-2.5 lg:grid-cols-3">
				{#each BANTER_TOPICS as topic, i (topic.id)}
					<button
						type="button"
						in:fly={{ y: 12, duration: 250, delay: staggerDelay(i), easing: cubicOut }}
						onclick={() => start('banter', [topic.id])}
						class={card}
					>
						<span class="font-bold">{topic.he}</span>
						<span class="text-xs text-muted" dir="ltr">{topic.en}</span>
					</button>
				{/each}
				<button
					type="button"
					in:fly={{
						y: 12,
						duration: 250,
						delay: staggerDelay(BANTER_TOPICS.length),
						easing: cubicOut
					}}
					onclick={surprise}
					class="{card} bg-brand-soft ring-brand/40"
				>
					<span class="flex items-center gap-1.5 font-bold text-brand-dark">
						<Shuffle size={16} aria-hidden="true" />
						{t.surprise}
					</span>
					<span class="text-xs text-muted">{t.surpriseSub}</span>
				</button>
			</div>
		{:else}
			<div class="flex flex-col gap-2.5">
				{#each [{ mode: 'cobe-a', icon: User, title: t.partA, desc: t.partADesc }, { mode: 'cobe-b', icon: FolderOpen, title: t.partB, desc: t.partBDesc }] as const as part, i (part.mode)}
					<button
						type="button"
						in:fly={{ y: 12, duration: 250, delay: staggerDelay(i), easing: cubicOut }}
						onclick={() => start(part.mode, part.mode === 'cobe-a' ? drawTwo(PART_A_TOPICS) : [])}
						class="{card} flex-row items-center gap-3 p-4"
					>
						<span
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"
						>
							<part.icon size={20} aria-hidden="true" />
						</span>
						<span class="flex flex-col gap-0.5">
							<span class="font-bold">{part.title}</span>
							<span class="text-xs leading-relaxed text-muted">{part.desc}</span>
						</span>
					</button>
				{/each}
			</div>
		{/if}

		<p class="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted">
			<MessagesSquare size={14} aria-hidden="true" />
			{t.privacy}
		</p>
	{/if}
</main>
