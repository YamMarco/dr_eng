<script lang="ts">
	import { Trash2, X } from '@lucide/svelte';
	import {
		PEOPLE,
		PRIORITIES,
		STATUSES,
		TAGS_MAX,
		TAG_MAX,
		TITLE_MAX,
		personLabel,
		priorityLabel,
		statusLabel,
		type Task
	} from '$lib/kanban';

	type Props = {
		task: Task;
		/** Every tag on the board, offered while typing a new one. */
		tagListId: string;
		onsave: (patch: Partial<Omit<Task, 'id'>>) => void;
		ondelete: () => void;
		ondragstart: () => void;
		ondragend: () => void;
	};

	let { task, tagListId, onsave, ondelete, ondragstart, ondragend }: Props = $props();

	let newTag = $state('');

	const selectClass =
		'min-h-9 rounded-lg border border-line bg-canvas px-2 text-sm font-semibold text-ink focus:border-brand';

	const priorityClass: Record<number, string> = {
		3: 'border-s-danger',
		2: 'border-s-accent',
		1: 'border-s-line'
	};

	function saveTitle(event: Event) {
		const input = event.currentTarget as HTMLTextAreaElement;
		const title = input.value.trim();
		if (!title) input.value = task.title;
		else if (title !== task.title) onsave({ title });
	}

	function addTag(event: SubmitEvent) {
		event.preventDefault();
		const tag = newTag.trim();
		newTag = '';
		if (tag && !task.tags.includes(tag)) onsave({ tags: [...task.tags, tag] });
	}
</script>

<article
	draggable="true"
	ondragstart={(event) => {
		event.dataTransfer?.setData('text/plain', task.id);
		ondragstart();
	}}
	{ondragend}
	class="flex cursor-grab flex-col gap-3 rounded-2xl border-s-4 bg-surface p-3 shadow-sm ring-1 ring-line/70 active:cursor-grabbing {priorityClass[
		task.priority
	]}"
>
	<div class="flex items-start gap-2">
		<textarea
			value={task.title}
			maxlength={TITLE_MAX}
			rows="1"
			onchange={saveTitle}
			aria-label="כותרת המשימה"
			class="field-sizing-content min-w-0 flex-1 resize-none rounded-lg border border-transparent bg-transparent px-1 py-0.5 font-semibold text-ink hover:border-line focus:border-brand"
		></textarea>
		<button
			type="button"
			onclick={ondelete}
			aria-label="מחיקת המשימה"
			class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-danger-soft hover:text-danger"
		>
			<Trash2 size={16} aria-hidden="true" />
		</button>
	</div>

	<div class="flex flex-wrap gap-2">
		<select
			value={task.assignee ?? ''}
			onchange={(event) => {
				const value = event.currentTarget.value;
				onsave({ assignee: value ? (value as Task['assignee']) : null });
			}}
			aria-label="אחראי"
			class={selectClass}
		>
			<option value="">ללא אחראי</option>
			{#each PEOPLE as person (person)}
				<option value={person}>{personLabel[person]}</option>
			{/each}
		</select>
		<select
			value={task.priority}
			onchange={(event) =>
				onsave({ priority: Number(event.currentTarget.value) as Task['priority'] })}
			aria-label="עדיפות"
			class={selectClass}
		>
			{#each PRIORITIES as priority (priority)}
				<option value={priority}>עדיפות {priorityLabel[priority]}</option>
			{/each}
		</select>
		<select
			value={task.status}
			onchange={(event) => onsave({ status: event.currentTarget.value as Task['status'] })}
			aria-label="סטטוס"
			class={selectClass}
		>
			{#each STATUSES as status (status)}
				<option value={status}>{statusLabel[status]}</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-wrap items-center gap-1.5">
		{#each task.tags as tag (tag)}
			<span
				class="inline-flex items-center gap-1 rounded-full bg-brand-soft py-0.5 ps-2.5 pe-1 text-xs font-semibold text-brand-dark"
			>
				{tag}
				<button
					type="button"
					onclick={() => onsave({ tags: task.tags.filter((t) => t !== tag) })}
					aria-label="הסרת התגית {tag}"
					class="inline-flex h-5 w-5 items-center justify-center rounded-full hover:bg-brand/20"
				>
					<X size={12} aria-hidden="true" />
				</button>
			</span>
		{/each}
		{#if task.tags.length < TAGS_MAX}
			<form onsubmit={addTag} class="contents">
				<input
					type="text"
					bind:value={newTag}
					maxlength={TAG_MAX}
					list={tagListId}
					placeholder="+ תגית"
					aria-label="הוספת תגית"
					class="w-24 rounded-full border border-dashed border-line bg-transparent px-2.5 py-0.5 text-xs text-ink placeholder:text-muted focus:border-brand"
				/>
			</form>
		{/if}
	</div>
</article>
