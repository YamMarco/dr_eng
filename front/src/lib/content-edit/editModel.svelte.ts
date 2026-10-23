// The in-memory working copy for the /edit workspace. One instance holds one
// WHOLE module's LessonNode[] (every section on its path) so the graph shows
// everything at once. `changedSections` diffs each section's slice against what was loaded,
// so a save only rewrites the section files that actually changed.
//
// Detachable — part of src/lib/content-edit/. See README.md.

import { getLessonsBySection, moduleSections } from '$lib/content';
import { ownerModule } from '$lib/content/rules';
import type { LessonNode, LessonScreen } from '$lib/content';
import { blankScreen } from './screenSkeletons';
import type { ScreenPath } from './screenPath';
import type { Bucket, EditModelLike } from './editModelTypes';
import { EditHistory } from './editHistory.svelte';
import { TitleEdits } from './titleEdits.svelte';

/** Deep, plain clone — content nodes are pure JSON so this is safe and cheap. */
function clone<T>(v: T): T {
	return JSON.parse(JSON.stringify(v)) as T;
}

/** Lessons only ever use 'preface' or a round index as a bucket key - the
 *  wider `ScreenPath['bucket']` type exists for exam parts (a different
 *  model), so callers narrow at the boundary. */
type LessonBucket = 'preface' | number;

/** Both level versions of a node (COBE): round changes apply to both, so their rounds stay aligned. */
function versions(node: LessonNode) {
	return node.content5 ? [node.content, node.content5] : [node.content];
}

/** Swap `content` and `content5` in place on every node that has both. */
function swapLevels(nodes: LessonNode[]) {
	for (const n of nodes) if (n.content5) [n.content, n.content5] = [n.content5, n.content];
}

function screenList(node: LessonNode, bucket: LessonBucket): LessonScreen[] {
	return bucket === 'preface' ? node.content.preface : node.content.rounds[bucket].screens;
}

class EditModel implements EditModelLike {
	/** The module being edited; its path's sections are what load and save cover. */
	moduleId = $state('c');
	nodes = $state<LessonNode[]>([]);
	#dirty = $state(false);
	/** Which node the lesson pane is showing. */
	selectedNodeId = $state<string | null>(null);
	/** Which screen inside that node the form/preview is showing. */
	selectedPath = $state<ScreenPath | null>(null);

	/** Which version is being edited. At 5 the nodes that have `content5` hold
	 *  it in `content` (swapped in place), so every editing path stays on
	 *  `content`; snapshots, diffs and saves use `#stored()`. The two versions
	 *  are independent: a screen edited in one never changes the other. */
	level = $state<4 | 5>(4);

	/** The nodes as the content files store them (4-point in `content`). */
	#stored(): LessonNode[] {
		const plain = clone(this.nodes);
		if (this.level === 5) swapLevels(plain);
		return plain;
	}

	/** True when the module has 5-point versions (shows the level switch). */
	get hasLevels(): boolean {
		return this.nodes.some((n) => n.content5);
	}

	setLevel(level: 4 | 5) {
		if (level === this.level) return;
		swapLevels(this.nodes);
		this.level = level;
		if (
			this.selectedNodeId &&
			this.selectedPath &&
			!this.screenAt(this.selectedNodeId, this.selectedPath)
		)
			this.selectedPath = null;
	}

	/** Hebrew titles by node id - nodes themselves carry no title text. */
	readonly titles = new TitleEdits();

	/** sectionId -> JSON of that section's nodes at load / last save. */
	#baseline = new Map<string, string>();

	#history = new EditHistory(
		() => JSON.stringify({ nodes: this.#stored(), titles: this.titles.map }),
		(snapshot) => this.#restore(snapshot)
	);

	/** Setting true records an undo step; every mutator ends with `dirty = true`. */
	get dirty() {
		return this.#dirty;
	}
	set dirty(v: boolean) {
		this.#dirty = v;
		if (v) this.#history.commit();
	}

	get canUndo() {
		return this.#history.canUndo;
	}
	get canRedo() {
		return this.#history.canRedo;
	}
	undo() {
		this.#history.undo();
	}
	redo() {
		this.#history.redo();
	}

	#restore(snapshot: string) {
		const parsed = JSON.parse(snapshot) as { nodes: LessonNode[]; titles: Record<string, string> };
		if (this.level === 5) swapLevels(parsed.nodes);
		this.nodes = parsed.nodes;
		this.titles.restore(parsed.titles);
		if (!this.node(this.selectedNodeId ?? '')) this.selectedNodeId = this.nodes[0]?.id ?? null;
		if (
			this.selectedNodeId &&
			this.selectedPath &&
			!this.screenAt(this.selectedNodeId, this.selectedPath)
		)
			this.selectedPath = null;
		this.#dirty = this.hasChanges;
	}

	get sectionIds(): string[] {
		return moduleSections(this.moduleId).map((s) => s.id);
	}

	load(moduleId: string, level: 4 | 5 = 4) {
		this.moduleId = moduleId;
		this.level = 4;
		this.nodes = clone(this.sectionIds.flatMap((id) => getLessonsBySection(id)));
		this.titles.load();
		this.#snapshotBaseline();
		this.dirty = false;
		this.selectedNodeId = this.nodes[0]?.id ?? null;
		this.selectedPath = null;
		this.#history.reset();
		this.setLevel(level);
	}

	#snapshotBaseline() {
		const plain = this.#stored();
		this.#baseline = new Map(
			this.sectionIds.map((id) => [id, JSON.stringify(plain.filter((n) => n.section === id))])
		);
	}

	/** Section files whose nodes differ from what was loaded — what save writes. */
	get changedSections(): string[] {
		const plain = this.#stored();
		return this.sectionIds.filter(
			(id) => JSON.stringify(plain.filter((n) => n.section === id)) !== this.#baseline.get(id)
		);
	}

	/** Node-level diff of a section against its last-loaded/saved baseline —
	 *  what save() actually sends. Untouched nodes never appear here, so two
	 *  people editing different nodes in the same section never collide: the
	 *  server merges each patch into whatever's currently on disk/GitHub
	 *  instead of overwriting the whole section from a possibly-stale copy. */
	changesForSection(id: string): { upserts: LessonNode[]; deletes: string[] } {
		const current = this.#stored().filter((n) => n.section === id);
		const baseline: LessonNode[] = JSON.parse(this.#baseline.get(id) ?? '[]');
		const baseById = new Map(baseline.map((n) => [n.id, n]));
		const upserts = current.filter((n) => JSON.stringify(n) !== JSON.stringify(baseById.get(n.id)));
		const currentIds = new Set(current.map((n) => n.id));
		const deletes = baseline.map((n) => n.id).filter((id) => !currentIds.has(id));
		return { upserts, deletes };
	}

	/** Anything a save would write: section node changes or title changes. */
	get hasChanges(): boolean {
		return this.changedSections.length > 0 || this.titles.changed;
	}

	markClean() {
		this.#snapshotBaseline();
		this.titles.markClean();
		this.dirty = false;
	}

	/** Flag a mutation done in place on a node/screen object (e.g. an inline
	 *  prose edit on the screen canvas). */
	touch() {
		if (this.#history.commit()) this.#dirty = true;
	}

	/** The section a new/edited node belongs to (near the selection, else first). */
	get defaultSection(): string {
		return this.selectedNode?.section ?? this.nodes[0]?.section ?? this.sectionIds[0];
	}

	get selectedNode(): LessonNode | undefined {
		return this.nodes.find((n) => n.id === this.selectedNodeId);
	}

	get selectedScreen(): LessonScreen | undefined {
		const n = this.selectedNode;
		const p = this.selectedPath;
		if (!n || !p) return undefined;
		return screenList(n, p.bucket as LessonBucket)?.[p.index];
	}

	node(id: string): LessonNode | undefined {
		return this.nodes.find((n) => n.id === id);
	}

	select(nodeId: string, path: ScreenPath | null = null) {
		this.selectedNodeId = nodeId;
		this.selectedPath = path;
	}

	// --------------------------------------------------- EditModelLike (generic) --
	bucketsOf(nodeId: string): Bucket[] {
		const n = this.node(nodeId);
		if (!n) return [];
		return [
			{ key: 'preface', label: 'פתיח', note: 'לפני סבב 1', screens: n.content.preface },
			...n.content.rounds.map((r, i) => ({
				key: i,
				label: `סבב ${i + 1}`,
				note: i < (n.requiredRounds ?? 1) ? 'חובה' : 'רשות',
				screens: r.screens
			}))
		];
	}

	screenAt(nodeId: string, path: ScreenPath): LessonScreen | undefined {
		const n = this.node(nodeId);
		if (!n) return undefined;
		return screenList(n, path.bucket as LessonBucket)?.[path.index];
	}

	readonly addBucketLabel = '➕ הוספת סבב';

	addBucket(nodeId: string, at = -1) {
		this.addRound(nodeId, at);
	}

	duplicateBucket(nodeId: string, bucketIndex: number) {
		this.duplicateRound(nodeId, bucketIndex);
	}

	deleteBucket(nodeId: string, bucketIndex: number) {
		this.deleteRound(nodeId, bucketIndex);
	}

	moveBucket(nodeId: string, from: number, to: number) {
		this.moveRound(nodeId, from, to);
	}

	// ---------------------------------------------------------------- graph --
	setPosition(id: string, x: number, y: number) {
		const n = this.node(id);
		if (!n) return;
		n.position = { x: Math.round(x), y: Math.round(y) };
		this.dirty = true;
	}

	setMeta(id: string, patch: Partial<Pick<LessonNode, 'titleEn' | 'big' | 'requiredRounds'>>) {
		const n = this.node(id);
		if (!n) return;
		Object.assign(n, patch);
		this.dirty = true;
	}

	setTitle(id: string, title: string) {
		this.titles.set(id, title);
		this.dirty = true;
	}

	/** Rename a node id, repointing every `required` reference. */
	renameNode(oldId: string, newId: string): boolean {
		newId = newId.trim();
		if (!newId || newId === oldId || this.node(newId)) return false;
		this.titles.rename(oldId, newId);
		for (const n of this.nodes) {
			if (n.id === oldId) n.id = newId;
			n.required = n.required.map((r) => (r === oldId ? newId : r));
		}
		if (this.selectedNodeId === oldId) this.selectedNodeId = newId;
		this.dirty = true;
		return true;
	}

	/** Clears `id`'s prerequisites — empty `required` is what makes a node a
	 *  root, unlocked from the start (see lessons page `isUnlocked`). */
	makeModuleStart(id: string) {
		const n = this.node(id);
		if (!n || n.required.length === 0) return;
		n.required = [];
		this.dirty = true;
	}

	/** Add or remove `fromId` in `toId`'s prerequisites (a link fromId -> toId). */
	togglePrereq(fromId: string, toId: string) {
		const to = this.node(toId);
		if (!to || fromId === toId) return;
		to.required = to.required.includes(fromId)
			? to.required.filter((r) => r !== fromId)
			: [...to.required, fromId];
		this.dirty = true;
	}

	/** Short, collision-checked id for a freshly created node (the section's
	 *  owner module + `-` + 8 random chars, e.g. `cobe-1a2b3c4d`) — stable from
	 *  the start so it can be linked/dragged before anyone bothers naming it. */
	private shortId(section: string): string {
		const prefix = ownerModule(section) ?? this.moduleId;
		let id = `${prefix}-${crypto.randomUUID().slice(0, 8)}`;
		while (this.node(id)) id = `${prefix}-${crypto.randomUUID().slice(0, 8)}`;
		return id;
	}

	addNode(near?: LessonNode): LessonNode {
		const section = near?.section ?? this.defaultSection;
		const node: LessonNode = {
			id: this.shortId(section),
			section,
			required: [],
			position: { x: near ? near.position.x : 0, y: near ? near.position.y + 120 : 120 },
			big: false,
			content: { preface: [], rounds: [{ screens: [] }] }
		};
		this.nodes.push(node);
		this.titles.set(node.id, 'שיעור חדש');
		this.dirty = true;
		return node;
	}

	duplicateNode(id: string): LessonNode | undefined {
		const src = this.node(id);
		if (!src) return;
		const copy = clone(src);
		copy.id = this.shortId(src.section);
		copy.position = { x: src.position.x + 40, y: src.position.y + 40 };
		this.titles.copy(src.id, copy.id);
		this.nodes.push(copy);
		this.dirty = true;
		return copy;
	}

	deleteNode(id: string) {
		this.nodes = this.nodes.filter((n) => n.id !== id);
		this.titles.remove(id);
		for (const n of this.nodes) n.required = n.required.filter((r) => r !== id);
		if (this.selectedNodeId === id) this.selectedNodeId = this.nodes[0]?.id ?? null;
		this.dirty = true;
	}

	/** Concatenate 2+ nodes into the first: preface + rounds appended in order.
	 *  Inbound `required` edges are repointed to the survivor. */
	mergeNodes(ids: string[]) {
		if (ids.length < 2) return;
		const [keepId, ...rest] = ids;
		const keep = this.node(keepId);
		if (!keep) return;
		for (const rid of rest) {
			const r = this.node(rid);
			if (!r) continue;
			keep.content.preface.push(...clone(r.content.preface));
			keep.content.rounds.push(...clone(r.content.rounds));
			if (keep.content5) {
				keep.content5.preface.push(...clone((r.content5 ?? r.content).preface));
				keep.content5.rounds.push(...clone((r.content5 ?? r.content).rounds));
			}
		}
		const gone = new Set(rest);
		for (const g of gone) this.titles.remove(g);
		this.nodes = this.nodes.filter((n) => !gone.has(n.id));
		for (const n of this.nodes) {
			n.required = [
				...new Set(n.required.map((x) => (gone.has(x) ? keepId : x)).filter((x) => x !== n.id))
			];
		}
		this.selectedNodeId = keepId;
		this.dirty = true;
	}

	/** Split a node after `afterRound` (0-based): rounds [0..afterRound] stay,
	 *  the rest move to a new node that requires the original. Preface stays. */
	splitNode(id: string, afterRound: number): LessonNode | undefined {
		const src = this.node(id);
		if (!src || afterRound < 0 || afterRound >= src.content.rounds.length - 1) return;
		const moved = src.content.rounds.splice(afterRound + 1);
		const moved5 = src.content5?.rounds.splice(afterRound + 1);
		const tail: LessonNode = {
			...clone(src),
			id: this.shortId(src.section),
			required: [src.id],
			position: { x: src.position.x, y: src.position.y + 120 },
			content: { preface: [], rounds: moved },
			...(moved5 && { content5: { preface: [], rounds: moved5 } })
		};
		const srcIdx = this.nodes.findIndex((n) => n.id === id);
		this.nodes.splice(srcIdx + 1, 0, tail);
		this.titles.copy(src.id, tail.id);
		// Anything that required the original now flows through the tail.
		for (const n of this.nodes) {
			if (n.id === tail.id || n.id === src.id) continue;
			n.required = n.required.map((r) => (r === src.id ? tail.id : r));
		}
		this.dirty = true;
		return tail;
	}

	// --------------------------------------------------------------- rounds --
	addRound(nodeId: string, at = -1) {
		const n = this.node(nodeId);
		if (!n) return;
		const idx = at < 0 ? n.content.rounds.length : at;
		for (const c of versions(n)) c.rounds.splice(idx, 0, { screens: [] });
		this.dirty = true;
	}

	deleteRound(nodeId: string, roundIndex: number) {
		const n = this.node(nodeId);
		if (!n || n.content.rounds.length <= 1) return;
		for (const c of versions(n)) c.rounds.splice(roundIndex, 1);
		this.dirty = true;
	}

	duplicateRound(nodeId: string, roundIndex: number) {
		const n = this.node(nodeId);
		if (!n) return;
		for (const c of versions(n)) c.rounds.splice(roundIndex + 1, 0, clone(c.rounds[roundIndex]));
		this.dirty = true;
	}

	moveRound(nodeId: string, from: number, to: number) {
		const n = this.node(nodeId);
		if (!n || from === to) return;
		for (const c of versions(n)) {
			const [r] = c.rounds.splice(from, 1);
			c.rounds.splice(to, 0, r);
		}
		this.dirty = true;
	}

	// -------------------------------------------------------------- screens --
	addScreen(
		nodeId: string,
		bucket: ScreenPath['bucket'],
		at = -1,
		type: LessonScreen['type'] = 'preface'
	) {
		const n = this.node(nodeId);
		if (!n) return;
		const list = screenList(n, bucket as LessonBucket);
		const idx = at < 0 ? list.length : at;
		list.splice(idx, 0, blankScreen(type));
		this.dirty = true;
		this.selectedPath = { bucket, index: idx };
	}

	deleteScreen(nodeId: string, path: ScreenPath) {
		const n = this.node(nodeId);
		if (!n) return;
		screenList(n, path.bucket as LessonBucket).splice(path.index, 1);
		this.dirty = true;
		if (
			this.selectedPath &&
			this.selectedPath.bucket === path.bucket &&
			this.selectedPath.index === path.index
		)
			this.selectedPath = null;
	}

	applyScreen(nodeId: string, path: ScreenPath, screen: LessonScreen) {
		const n = this.node(nodeId);
		if (!n) return;
		screenList(n, path.bucket as LessonBucket)[path.index] = screen;
		this.dirty = true;
	}

	/** Swap a screen's type, carrying over any prose fields both shapes share. */
	setScreenType(nodeId: string, path: ScreenPath, type: LessonScreen['type']) {
		const n = this.node(nodeId);
		if (!n) return;
		const list = screenList(n, path.bucket as LessonBucket);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const old = list[path.index] as any;
		if (old?.type === type) return;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const next = blankScreen(type) as any;
		for (const k of ['text', 'prompt', 'instruction', 'title', 'label', 'modelAnswer', 'dir']) {
			if (typeof old?.[k] === 'string' && k in next) next[k] = old[k];
		}
		list[path.index] = next;
		this.dirty = true;
	}

	/** Move a screen within a node, across buckets (preface <-> any round). */
	moveScreen(nodeId: string, from: ScreenPath, to: ScreenPath) {
		const n = this.node(nodeId);
		if (!n) return;
		const src = screenList(n, from.bucket as LessonBucket);
		const [screen] = src.splice(from.index, 1);
		if (!screen) return;
		const dst = screenList(n, to.bucket as LessonBucket);
		let idx = to.index;
		if (from.bucket === to.bucket && from.index < to.index) idx -= 1;
		idx = Math.max(0, Math.min(idx, dst.length));
		dst.splice(idx, 0, screen);
		this.dirty = true;
		this.selectedPath = { bucket: to.bucket, index: idx };
	}
}

/** One shared instance; `load(moduleId)` seeds it with that whole module. */
export const editModel = new EditModel();
