// Loaded blocking from app.html, so <html> is right before first paint. A file, not
// an inline script, so the CSP needs no hash for it.
(function () {
	try {
		// Theme: no light-mode flash for dark/system users.
		var stored = localStorage.getItem('theme-mode');
		var dark =
			stored === 'dark' ||
			(stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.dataset.theme = dark ? 'dark' : 'light';
		// Signed in (a stored Supabase session): the site header shows "to the app"
		// at once. The site layout keeps it in sync once auth has loaded.
		for (var i = 0; i < localStorage.length; i++) {
			if (/^sb-.+-auth-token$/.test(localStorage.key(i) || '')) {
				document.documentElement.dataset.session = '';
				break;
			}
		}
	} catch (e) {}
})();
