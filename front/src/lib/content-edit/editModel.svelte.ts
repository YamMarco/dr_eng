// The in-memory working copy for the /edit workspace. One instance holds the
// WHOLE module's LessonNode[] (every section) so the graph shows everything at
// once. `changedSections` diffs each section's slice against what was loaded,
// so a save only rewrites the section files that actually changed.
//
// Detachable — part of src/lib/content-edit/. See README.md.

import { getLessonsBySection, sectionMeta } from '$lib/content';
import type { LessonNode, LessonScreen } from '$lib/content';
import { blankScreen } from './screenSkeletons';
import type { ScreenPath } from './screenPath';

const SECTION_IDS = sectionMeta.map((s) => s.id);

/** Deep, plain clone — content nodes are pure JSON so this is safe and cheap. */
function clone<T>(v: T): T {
	return JSON.parse(JSON.stringify(v)) as T;
}

function screenList(node: LessonNode, bucket: ScreenPath['bucket']): LessonScreen[] {
	return bucket === 'preface' ? node.content.preface : node.content.rounds[bucket].screens;
}

class EditModel {
	nodes = $state<LessonNode[]>([]);
	dirty = $state(false);
	/** Which node the lesson pane is showing. */
	selectedNodeId = $state<string | null>(null);
	/** Which screen inside that node the form/preview is showing. */
	selectedPath = $state<ScreenPath | null>(null);

	/** sectionId -> JSON of that section's nodes at load / last save. */
	#baseline = new Map<string, string>();

	load() {
		this.nodes = clone(SECTION_IDS.flatMap((id) => getLessonsBySection(id)));
		this.#snapshotBaseline();
		this.dirty = false;
		this.selectedNodeId = this.nodes[0]?.id ?? null;
		this.selectedPath = null;
	}

	#snapshotBaseline() {
		const plain = JSON.parse(JSON.stringify(this.nodes)) as LessonNode[];
		this.#baseline = new Map(
			SECTION_IDS.map((id) => [id, JSON.stringify(plain.filter((n) => n.section === id))])
		);
	}

	/** Section files whose nodes differ from what was loaded — what save writes. */
	get changedSections(): string[] {
		const plain = JSON.parse(JSON.stringify(this.nodes)) as LessonNode[];
		return SECTION_IDS.filter(
			(id) => JSON.stringify(plain.filter((n) => n.section === id)) !== this.#baseline.get(id)
		);
	}

	nodesForSection(id: string): LessonNode[] {
		return JSON.parse(JSON.stringify(this.nodes.filter((n) => n.section === id)));
	}

	markClean() {
		this.#snapshotBaseline();
		this.dirty = false;
	}

	/** Flag a mutation done in place on a node/screen object (e.g. an inline
	 *  prose edit on the screen canvas). */
	touch() {
		this.dirty = true;
	}

	/** The section a new/edited node belongs to (near the selection, else first). */
	get defaultSection(): string {
		return this.selectedNode?.section ?? this.nodes[0]?.section ?? SECTION_IDS[0];
	}

	get selectedNode(): LessonNode | undefined {
		return this.nodes.find((n) => n.id === this.selectedNodeId);
	}

	get selectedScreen(): LessonScreen | undefined {
		const n = this.selectedNode;
		const p = this.selectedPath;
		if (!n || !p) return undefined;
		return screenList(n, p.bucket)?.[p.index];
	}

	node(id: string): LessonNode | undefined {
		return this.nodes.find((n) => n.id === id);
	}

	select(nodeId: string, path: ScreenPath | null = null) {
		this.selectedNodeId = nodeId;
		this.selectedPath = path;
	}

	// ---------------------------------------------------------------- graph --
	setPosition(id: string, x: number, y: number) {
		const n = this.node(id);
		if (!n) return;
		n.position = { x: Math.round(x), y: Math.round(y) };
		this.dirty = true;
	}

	setMeta(id: string, patch: Partial<Pick<LessonNode, 'titleHe' | 'titleEn' | 'code' | 'big'>>) {
		const n = this.node(id);
		if (!n) return;
		Object.assign(n, patch);
		this.dirty = true;
	}

	/** Rename a node id, repointing every `required` reference. */
	renameNode(oldId: string, newId: string): boolean {
		newId = newId.trim();
		if (!newId || newId === oldId || this.node(newId)) return false;
		for (const n of this.nodes) {
			if (n.id === oldId) n.id = newId;
			n.required = n.required.map((r) => (r === oldId ? newId : r));
		}
		if (this.selectedNodeId === oldId) this.selectedNodeId = newId;
		this.dirty = true;
		return true;
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

	private freshId(base: string): string {
		let id = base;
		let i = 2;
		while (this.node(id)) id = `${base}-${i++}`;
		return id;
	}

	addNode(near?: LessonNode): LessonNode {
		const node: LessonNode = {
			id: this.freshId('new-node'),
			section: near?.section ?? this.defaultSection,
			titleHe: 'שיעור חדש',
			code: '',
			required: [],
			position: { x: near ? near.position.x : 0, y: near ? near.position.y + 120 : 120 },
			big: false,
			content: { preface: [], rounds: [{ screens: [] }] }
		};
		this.nodes.push(node);
		this.dirty = true;
		return node;
	}

	duplicateNode(id: string): LessonNode | undefined {
		const src = this.node(id);
		if (!src) return;
		const copy = clone(src);
		copy.id = this.freshId(`${src.id}-copy`);
		copy.code = '';
		copy.position = { x: src.position.x + 40, y: src.position.y + 40 };
		this.nodes.push(copy);
		this.dirty = true;
		return copy;
	}

	deleteNode(id: string) {
		this.nodes = this.nodes.filter((n) => n.id !== id);
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
		}
		const gone = new Set(rest);
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
		const tail: LessonNode = {
			...clone(src),
			id: this.freshId(`${src.id}-b`),
			code: '',
			required: [src.id],
			position: { x: src.position.x, y: src.position.y + 120 },
			content: { preface: [], rounds: moved }
		};
		const srcIdx = this.nodes.findIndex((n) => n.id === id);
		this.nodes.splice(srcIdx + 1, 0, tail);
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
		n.content.rounds.splice(idx, 0, { screens: [] });
		this.dirty = true;
	}

	deleteRound(nodeId: string, roundIndex: number) {
		const n = this.node(nodeId);
		if (!n || n.content.rounds.length <= 1) return;
		n.content.rounds.splice(roundIndex, 1);
		this.dirty = true;
	}

	duplicateRound(nodeId: string, roundIndex: number) {
		const n = this.node(nodeId);
		if (!n) return;
		n.content.rounds.splice(roundIndex + 1, 0, clone(n.content.rounds[roundIndex]));
		this.dirty = true;
	}

	moveRound(nodeId: string, from: number, to: number) {
		const n = this.node(nodeId);
		if (!n || from === to) return;
		const [r] = n.content.rounds.splice(from, 1);
		n.content.rounds.splice(to, 0, r);
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
		const list = screenList(n, bucket);
		const idx = at < 0 ? list.length : at;
		list.splice(idx, 0, blankScreen(type));
		this.dirty = true;
		this.selectedPath = { bucket, index: idx };
	}

	deleteScreen(nodeId: string, path: ScreenPath) {
		const n = this.node(nodeId);
		if (!n) return;
		screenList(n, path.bucket).splice(path.index, 1);
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
		screenList(n, path.bucket)[path.index] = screen;
		this.dirty = true;
	}

	/** Swap a screen's type, carrying over any prose fields both shapes share. */
	setScreenType(nodeId: string, path: ScreenPath, type: LessonScreen['type']) {
		const n = this.node(nodeId);
		if (!n) return;
		const list = screenList(n, path.bucket);
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
		const src = screenList(n, from.bucket);
		const [screen] = src.splice(from.index, 1);
		if (!screen) return;
		const dst = screenList(n, to.bucket);
		let idx = to.index;
		if (from.bucket === to.bucket && from.index < to.index) idx -= 1;
		idx = Math.max(0, Math.min(idx, dst.length));
		dst.splice(idx, 0, screen);
		this.dirty = true;
		this.selectedPath = { bucket: to.bucket, index: idx };
	}
}

/** One shared instance; `load()` seeds it with the whole module. */
export const editModel = new EditModel();
