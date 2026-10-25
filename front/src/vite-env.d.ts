/// <reference types="vite/client" />

interface ImportMetaEnv {
	/** Origin of the web deployment; set only for the mobile build (.env.mobile). */
	readonly VITE_API_BASE?: string;
	readonly VITE_SUPABASE_URL?: string;
	readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string;
	/** Cloudflare Turnstile site key; unset = no CAPTCHA on the login screen. */
	readonly VITE_TURNSTILE_SITE_KEY?: string;
}
