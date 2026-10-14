// The app is a client-only SPA: its state lives on the device (localStorage)
// and the same bundle ships inside the Capacitor shell, which has no server.
export const ssr = false;
export const prerender = false;
