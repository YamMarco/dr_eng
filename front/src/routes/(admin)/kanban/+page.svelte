<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowDownWideNarrow, ArrowUpNarrowWide, LoaderCircle } from '@lucide/svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import { apiFetch } from '$lib/api';
	import {
		SORTS,
		STATUSES,
		TITLE_MAX,
		sortTasks,
		statusLabel,
		type SortKey,
		type Status,
		type Task,
		type TaskPatch
	} from '$lib/kanban';
	import TaskCard from './TaskCard.svelte';

	// Staff board of project tasks, stored in the kanban_tasks table (/api/kanban).
	// Edits apply at once and save in the background; a failed save reloads the board.

	let tasks = $state<Task[]>([]);
	let loading = $state(true);
	let failed = $state(false);
	let newTitle = $state('');
	let dragId = $state<string | null>(null);
	let dropStatus = $state<Status | null>(null);

	const SORT_STORE = 'kanban-sort';
	let sort = $state(storedSort());

	let allTags = $derived([...new Set(tasks.flatMap((t) => t.tags))].sort());

	/** This browser's last choice, "<key>:<asc|desc>" (a convenience; storage may be blocked). */
	function storedSort(): { key: SortKey; desc: boolean } {
		try {
			const [key, dir] = (localStorage.getItem(SORT_STORE) ?? '').split(':');
			if (key in SORTS) return { key: key as SortKey, desc: dir === 'desc' };
		} catch {
			// no storage: default order
		}
		return { key: 'priority', desc: true };
	}

	function setSort(key: SortKey, desc: boolean) {
		sort = { key, desc };
		try {
			localStorage.setItem(SORT_STORE, `${key}:${desc ? 'desc' : 'asc'}`);
		} catch {
			// not remembered, still applied
		}
	}

	async function load() {
		loading = true;
		const res = await apiFetch('/api/kanban').catch(() => null);
		if (res?.ok) tasks = await res.json();
		else failed = true;
		loading = false;
	}

	onMount(load);

	async function send(path: string, init: RequestInit): Promise<Response | null> {
		const res = await apiFetch(path, {
			...init,
			headers: { 'Content-Type': 'application/json' }
		}).catch(() => null);
		if (!res?.ok) {
			failed = true;
			await load();
			return null;
		}
		return res;
	}

	async function add(event: SubmitEvent) {
		event.preventDefault();
		const title = newTitle.trim();
		if (!title) return;
		newTitle = '';
		const body = { title, status: 'todo', priority: 2, assignee: null, tags: [] };
		const res = await send('/api/kanban', { method: 'POST', body: JSON.stringify(body) });
		if (res) tasks.push(await res.json());
	}

	function save(id: string, patch: TaskPatch) {
		const task = tasks.find((t) => t.id === id);
		if (!task) return;
		Object.assign(task, patch, { updatedAt: new Date().toISOString() });
		send(`/api/kanban/${id}`, { method: 'PATCH', body: JSON.stringify(patch) });
	}

	function remove(task: Task) {
		if (!confirm(`למחוק את "${task.title}"?`)) return;
		tasks = tasks.filter((t) => t.id !== task.id);
		send(`/api/kanban/${task.id}`, { method: 'DELETE' });
	}

	function drop(status: Status) {
		const task = tasks.find((t) => t.id === dragId);
		if (task && task.status !== status) save(task.id, { status });
		dragId = null;
		dropStatus = null;
	}
</script>

<svelte:head><title>לוח משימות</title></svelte:head>

<AppBar title="לוח משימות" back="/app/settings" />

<main class="mx-auto w-full max-w-6xl flex-1 px-4 pt-6 pb-28">
	<form onsubmit={add} class="mb-6 flex gap-2">
		<input
			type="text"
			bind:value={newTitle}
			maxlength={TITLE_MAX}
			dir="auto"
			placeholder="משימה חדשה"
			aria-label="משימה חדשה"
			class="min-h-11 min-w-0 flex-1 rounded-xl border-2 border-line bg-surface px-3 text-ink placeholder-shown:[direction:rtl] focus:border-brand"
		/>
		<button
			type="submit"
			disabled={loading || !newTitle.trim()}
			class="min-h-11 rounded-xl bg-brand px-5 font-bold text-white transition hover:bg-brand-dark disabled:opacity-50"
		>
			הוספה
		</button>
	</form>

	<div class="mb-4 flex items-center gap-2 text-sm font-semibold text-muted">
		<label class="flex items-center gap-2">
			מיון לפי
			<select
				value={sort.key}
				onchange={(event) => {
					const key = event.currentTarget.value as SortKey;
					setSort(key, SORTS[key].desc);
				}}
				class="min-h-9 rounded-lg border border-line bg-surface px-2 font-semibold text-ink focus:border-brand"
			>
				{#each Object.entries(SORTS) as [key, option] (key)}
					<option value={key}>{option.label}</option>
				{/each}
			</select>
		</label>
		<button
			type="button"
			onclick={() => setSort(sort.key, !sort.desc)}
			aria-label={sort.desc ? 'סדר יורד - לחיצה להפוך' : 'סדר עולה - לחיצה להפוך'}
			title={sort.desc ? 'סדר יורד' : 'סדר עולה'}
			class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink transition hover:border-brand active:scale-95"
		>
			{#if sort.desc}
				<ArrowDownWideNarrow size={18} aria-hidden="true" />
			{:else}
				<ArrowUpNarrowWide size={18} aria-hidden="true" />
			{/if}
		</button>
	</div>

	{#if failed}
		<p class="mb-4 rounded-xl bg-danger-soft px-4 py-3 text-sm font-semibold text-danger">
			השמירה או הטעינה נכשלו. הלוח נטען מחדש מהשרת.
		</p>
	{/if}

	<datalist id="kanban-tags">
		{#each allTags as tag (tag)}
			<option value={tag}></option>
		{/each}
	</datalist>

	<div class="relative" aria-busy={loading}>
		<div class="grid gap-4 md:grid-cols-3" inert={loading}>
			{#each STATUSES as status (status)}
				{@const column = sortTasks(
					tasks.filter((t) => t.status === status),
					sort.key,
					sort.desc
				)}
				<section
					aria-label={statusLabel[status]}
					ondragover={(event) => {
						event.preventDefault();
						dropStatus = status;
					}}
					ondragleave={(event) => {
						if (!event.currentTarget.contains(event.relatedTarget as Node)) dropStatus = null;
					}}
					ondrop={(event) => {
						event.preventDefault();
						drop(status);
					}}
					class="flex flex-col gap-3 rounded-3xl bg-line/40 p-3 ring-2 transition {dropStatus ===
					status
						? 'ring-brand'
						: 'ring-transparent'}"
				>
					<h2 class="flex items-center justify-between px-1 font-bold text-ink">
						{statusLabel[status]}
						<span class="text-sm font-semibold text-muted">{column.length}</span>
					</h2>
					{#each column as task (task.id)}
						<TaskCard
							{task}
							tagListId="kanban-tags"
							onsave={(patch) => save(task.id, patch)}
							ondelete={() => remove(task)}
							ondragstart={() => (dragId = task.id)}
							ondragend={() => {
								dragId = null;
								dropStatus = null;
							}}
						/>
					{:else}
						<p class="px-1 py-4 text-center text-sm text-muted">אין משימות</p>
					{/each}
				</section>
			{/each}
		</div>
		{#if loading}
			<div
				role="status"
				class="absolute inset-0 z-10 flex items-start justify-center rounded-3xl bg-surface/60 pt-16 backdrop-blur-[1px]"
			>
				<span
					class="flex items-center gap-2 rounded-full bg-surface px-4 py-2 font-semibold text-ink shadow"
				>
					<LoaderCircle size={18} class="motion-safe:animate-spin" aria-hidden="true" />
					טוען...
				</span>
			</div>
		{/if}
	</div>
</main>
