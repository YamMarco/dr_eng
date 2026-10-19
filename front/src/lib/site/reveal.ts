import { reducedMotion } from '$lib/motion';

// Scroll-in entrance for the pre-rendered public site. Content is visible without JS;
// only blocks still below the fold get hidden, then shown once scrolled into view.
// Children's CSS animations stay paused until then (see site.css).
export function reveal(node: HTMLElement) {
	if (reducedMotion || !('IntersectionObserver' in window)) return;
	if (node.getBoundingClientRect().top < window.innerHeight) return;
	node.dataset.reveal = 'hidden';
	const io = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.dataset.reveal = 'shown';
			io.disconnect();
		},
		{ rootMargin: '0px 0px -12% 0px' }
	);
	io.observe(node);
	return () => io.disconnect();
}
