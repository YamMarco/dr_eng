/** Fisher-Yates: a new array in random order. */
export function shuffle<T>(items: readonly T[]): T[] {
	const a = [...items];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

/** Display order of n options: `order[slot]` = the authored index shown there. */
export function optionOrder(n: number, random = true): number[] {
	const ids = Array.from({ length: n }, (_, i) => i);
	return random ? shuffle(ids) : ids;
}

/** Keeps `order` while it still fits n options (the editor preview can add or remove some). */
export function fitOrder(order: number[], n: number): number[] {
	return order.length === n ? order : optionOrder(n, false);
}
