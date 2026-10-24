// Build target. The mobile bundle is built with `vite build --mode mobile`;
// everything else is the web build. A compile-time constant, so the dead
// branch is dropped from each bundle.
export const MOBILE_BUILD = import.meta.env.MODE === 'mobile';
