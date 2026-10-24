// Makes the site installable and shows the daily practice reminder (Web Push).
// No offline cache: every page still comes from the network.
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener('install', () => sw.skipWaiting());
sw.addEventListener('activate', (event) => event.waitUntil(sw.clients.claim()));

sw.addEventListener('push', (event) => {
	const { title, body, url } = event.data?.json() ?? {};
	event.waitUntil(
		sw.registration.showNotification(title ?? 'EngUp', {
			body,
			icon: '/icons/icon-192.png',
			lang: 'he',
			dir: 'rtl',
			tag: 'daily-reminder',
			data: { url: url ?? '/app' }
		})
	);
});

sw.addEventListener('notificationclick', (event) => {
	event.notification.close();
	const url = new URL(event.notification.data?.url ?? '/app', sw.location.origin).href;
	event.waitUntil(
		sw.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windows) => {
			const open = windows.find((w) => w.url.startsWith(sw.location.origin));
			return open ? open.focus().then((w) => w.navigate(url)) : sw.clients.openWindow(url);
		})
	);
});
