// What the student sees right now, as a JPEG data URL, for a feedback report.
// Elements under [data-no-screenshot] (the feedback tab and sheet) are left out.

const MAX_WIDTH = 1280;

/** A full-screen overlay (lesson runner, exam) under the screen's centre, else null. */
function overlay(): HTMLElement | null {
	for (const el of document.elementsFromPoint(innerWidth / 2, innerHeight / 2)) {
		if (!(el instanceof HTMLElement) || el.closest('[data-no-screenshot]')) continue;
		for (let node: HTMLElement | null = el; node && node !== document.body; node = node.parentElement) {
			const box = node.getBoundingClientRect();
			if (
				getComputedStyle(node).position === 'fixed' &&
				box.width >= innerWidth - 1 &&
				box.height >= innerHeight - 1
			)
				return node;
		}
		return null;
	}
	return null;
}

export async function captureScreen(): Promise<string> {
	// Loaded on first use: only the feedback sheet needs it.
	const { domToCanvas } = await import('modern-screenshot');
	const scale = Math.min(1, MAX_WIDTH / innerWidth);
	const options = {
		scale,
		backgroundColor: getComputedStyle(document.body).backgroundColor,
		filter: (node: Node) => !(node instanceof Element && node.hasAttribute('data-no-screenshot')),
		timeout: 5000
	};

	const target = overlay();
	if (target) return (await domToCanvas(target, options)).toDataURL('image/jpeg', 0.75);

	// The page itself: render it whole, then keep the part in view.
	const page = await domToCanvas(document.body, options);
	const view = document.createElement('canvas');
	view.width = Math.round(innerWidth * scale);
	view.height = Math.round(innerHeight * scale);
	view
		.getContext('2d')!
		.drawImage(page, 0, -Math.round(scrollY * scale));
	return view.toDataURL('image/jpeg', 0.75);
}
