// Loaded blocking from app.html, so the correct theme is already on <html> before
// first paint (no light-mode flash for dark/system users). A file, not an inline
// script, so the CSP needs no hash for it.
(function () {
	try {
		var stored = localStorage.getItem('theme-mode');
		var dark =
			stored === 'dark' ||
			(stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.dataset.theme = dark ? 'dark' : 'light';
	} catch (e) {}
})();
