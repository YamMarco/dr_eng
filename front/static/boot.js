// Loaded blocking from app.html, so <html> is right before first paint. A file, not
// an inline script, so the CSP needs no hash for it.
(function () {
	// Storage the browser refuses (all cookies blocked, some in-app browsers): reading
	// window.localStorage throws. Swap in an in-memory one, so the app runs for this visit.
	['localStorage', 'sessionStorage'].forEach(function (name) {
		try {
			window[name].length;
			return;
		} catch (e) {}
		var data = {};
		var api = {
			getItem: function (k) {
				return Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null;
			},
			setItem: function (k, v) {
				data[k] = String(v);
			},
			removeItem: function (k) {
				delete data[k];
			},
			clear: function () {
				for (var k in data) delete data[k];
			},
			key: function (i) {
				var keys = Object.keys(data);
				return i < keys.length ? keys[i] : null;
			}
		};
		var memory = new Proxy(data, {
			get: function (t, p) {
				if (p === 'length') return Object.keys(t).length;
				if (Object.prototype.hasOwnProperty.call(api, p)) return api[p];
				return t[p];
			},
			set: function (t, p, v) {
				t[p] = String(v);
				return true;
			}
		});
		try {
			Object.defineProperty(window, name, { value: memory, configurable: true });
		} catch (e) {}
	});
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
