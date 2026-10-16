// Accounts: Supabase email + password. The email is only for verification:
// sign-up and password reset send a link, and everyday sign-in is the password.
// Without a configured Supabase project the app runs open, as before.

import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

// Links in emails open in a browser, so they must point at the web deployment -
// from the mobile app that's VITE_API_BASE, not the app's own origin.
const WEB_BASE: string =
	import.meta.env.VITE_API_BASE || (typeof location === 'undefined' ? '' : location.origin);
const APP_URL = `${WEB_BASE}/app`;

class AuthStore {
	session = $state<Session | null>(null);
	/** False until the stored session has been read, so the login screen doesn't flash. */
	ready = $state(!supabase);
	/** The student arrived from a password-reset email and must choose a new password. */
	recovering = $state(false);

	constructor() {
		if (!supabase || typeof window === 'undefined') return;
		// The mock login's flag, from before real accounts.
		localStorage.removeItem('logged-in');
		supabase.auth.getSession().then(({ data }) => {
			this.session = data.session;
			this.ready = true;
		});
		supabase.auth.onAuthStateChange((event, session) => {
			this.session = session;
			if (event === 'PASSWORD_RECOVERY') this.recovering = true;
		});
	}

	get enabled() {
		return !!supabase;
	}

	get loggedIn() {
		return !supabase || !!this.session;
	}

	/** Staff accounts (app_metadata.role, set server-side only). Open when accounts are off. */
	get isAdmin() {
		return !supabase || this.session?.user.app_metadata?.role === 'admin';
	}

	get email() {
		return this.session?.user.email;
	}

	get accessToken() {
		return this.session?.access_token;
	}

	async signIn(email: string, password: string) {
		const { error } = await supabase!.auth.signInWithPassword({ email, password });
		if (error) throw error;
	}

	/** `returnTo`: where the confirmation link lands (default /app; checkout passes itself). */
	async signUp(email: string, password: string, returnTo = APP_URL) {
		const { error } = await supabase!.auth.signUp({
			email,
			password,
			options: { emailRedirectTo: returnTo }
		});
		if (error) throw error;
	}

	async resendConfirmation(email: string, returnTo = APP_URL) {
		const { error } = await supabase!.auth.resend({
			type: 'signup',
			email,
			options: { emailRedirectTo: returnTo }
		});
		if (error) throw error;
	}

	async sendReset(email: string) {
		const { error } = await supabase!.auth.resetPasswordForEmail(email, { redirectTo: APP_URL });
		if (error) throw error;
	}

	async setPassword(password: string) {
		const { error } = await supabase!.auth.updateUser({ password });
		if (error) throw error;
		this.recovering = false;
	}

	async signOut() {
		await supabase?.auth.signOut();
	}
}

export const auth = new AuthStore();
