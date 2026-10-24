<script lang="ts">
	import { ChevronDown, ChevronsUp, Equal, Trash2, X } from '@lucide/svelte';
	import {
		PEOPLE,
		TAGS_MAX,
		TAG_MAX,
		TITLE_MAX,
		personLabel,
		priorityLabel,
		tagColor,
		type Task,
		type TaskPatch
	} from '$lib/kanban';

	type Props = {
		task: Task;
		/** Every tag on the board, offered while typing a new one. */
		tagListId: string;
		onsave: (patch: TaskPatch) => void;
		ondelete: () => void;
		ondragstart: () => void;
		ondragend: () => void;
	};

	let { task, tagListId, onsave, ondelete, ondragstart, ondragend }: Props = $props();

	let newTag = $state('');

	const selectClass =
		'min-h-9 rounded-lg border border-line bg-canvas px-2 text-sm font-semibold text-ink focus:border-brand';

	const priorityStyle = {
		3: { icon: ChevronsUp, border: 'border-s-danger', badge: 'bg-danger-soft text-danger' },
		2: { icon: Equal, border: 'border-s-accent', badge: 'bg-accent-soft text-ink' },
		1: { icon: ChevronDown, border: 'border-s-line', badge: 'bg-line/60 text-muted' }
	};

	let priority = $derived(priorityStyle[task.priority]);
	// A wash (and ring) of the first tag's color over the card, in both themes.
	let firstTag = $derived(task.tags[0]);
	let tint = $derived(firstTag ? tagColor(firstTag, 0.16) : null);

	/** low -> medium -> high -> low */
	function nextPriority() {
		onsave({ priority: ((task.priority % 3) + 1) as Task['priority'] });
	}

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
	style:background-image={tint && `linear-gradient(${tint}, ${tint})`}
	style:--tw-ring-color={firstTag ? tagColor(firstTag, 0.5) : null}
	class="flex cursor-grab flex-col gap-3 rounded-2xl border-s-4 bg-surface p-3 shadow-sm ring-1 ring-line/70 active:cursor-grabbing {priority.border}"
>
	<div class="flex items-start gap-2">
		<textarea
			value={task.title}
			maxlength={TITLE_MAX}
			rows="1"
			dir="auto"
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
		<button
			type="button"
			onclick={nextPriority}
			aria-label="עדיפות {priorityLabel[task.priority]} - לחיצה לשינוי"
			title="עדיפות {priorityLabel[task.priority]}"
			class="inline-flex h-9 w-9 items-center justify-center rounded-lg transition active:scale-95 {priority.badge}"
		>
			<priority.icon size={18} strokeWidth={2.5} aria-hidden="true" />
		</button>
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
	</div>

	<div class="flex flex-wrap items-center gap-1.5">
		{#each task.tags as tag (tag)}
			<span
				style:background-color={tagColor(tag, 0.2)}
				class="inline-flex items-center gap-1 rounded-full py-0.5 ps-2.5 pe-1 text-xs font-semibold text-ink"
			>
				<bdi>{tag}</bdi>
				<button
					type="button"
					onclick={() => onsave({ tags: task.tags.filter((t) => t !== tag) })}
					aria-label="הסרת התגית {tag}"
					class="inline-flex h-5 w-5 items-center justify-center rounded-full hover:bg-ink/10"
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
					dir="auto"
					placeholder="+ תגית"
					aria-label="הוספת תגית"
					class="w-24 rounded-full border border-dashed border-line bg-transparent px-2.5 py-0.5 text-xs text-ink placeholder:text-muted placeholder-shown:[direction:rtl] focus:border-brand"
				/>
			</form>
		{/if}
	</div>
</article>
