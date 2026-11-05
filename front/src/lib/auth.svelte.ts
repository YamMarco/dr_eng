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
/** How long a sign-out waits for Supabase before ending the session on this device anyway. */
const SIGN_OUT_WAIT_MS = 4000;

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
		// supabase-js tells every tab of this browser about a recovery, but the new-password
		// form belongs only to the tab the email link opened (read before supabase-js clears the
		// URL); the others just become signed in, on the same session.
		const openedFromRecoveryLink = /[#&?]type=recovery\b/.test(location.hash + location.search);
		supabase.auth.onAuthStateChange((event, session) => {
			this.session = session;
			if (event === 'PASSWORD_RECOVERY' && openedFromRecoveryLink) this.recovering = true;
			// The password was saved (here or in another tab) or the session ended.
			if (event === 'USER_UPDATED' || event === 'SIGNED_OUT') this.recovering = false;
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

	/** First name given at sign-up (account metadata). */
	get name(): string | undefined {
		const n = this.session?.user.user_metadata?.name;
		return typeof n === 'string' && n.trim() ? n.trim() : undefined;
	}

	get email() {
		return this.session?.user.email;
	}

	get accessToken() {
		return this.session?.access_token;
	}

	// `captchaToken`: the login screen's Turnstile token (Supabase checks it when CAPTCHA is on).
	async signIn(email: string, password: string, captchaToken?: string) {
		const { error } = await supabase!.auth.signInWithPassword({
			email,
			password,
			options: { captchaToken }
		});
		if (error) throw error;
	}

	/** `returnTo`: where the confirmation link lands (default /app; checkout passes itself).
	 *  `updates`: the separate, optional marketing-email opt-in (anti-spam law: keep when given). */
	async signUp(
		email: string,
		password: string,
		returnTo = APP_URL,
		captchaToken?: string,
		updates = false,
		name?: string
	) {
		const now = new Date().toISOString();
		const { data, error } = await supabase!.auth.signUp({
			email,
			password,
			// The sign-up form requires the terms / privacy / age checkbox: keep when it was ticked.
			options: {
				emailRedirectTo: returnTo,
				captchaToken,
				data: {
					terms_accepted_at: now,
					...(name && { name }),
					...(updates && { marketing_consent_at: now })
				}
			}
		});
		if (error) throw error;
		// A confirmed email signs up "successfully" with no identities and no
		// email sent (Supabase hides who has an account): say so instead.
		if (data.user && data.user.identities?.length === 0)
			throw Object.assign(new Error('user already exists'), { code: 'user_already_exists' });
	}

	async resendConfirmation(email: string, returnTo = APP_URL, captchaToken?: string) {
		const { error } = await supabase!.auth.resend({
			type: 'signup',
			email,
			options: { emailRedirectTo: returnTo, captchaToken }
		});
		if (error) throw error;
	}

	async sendReset(email: string, captchaToken?: string) {
		const { error } = await supabase!.auth.resetPasswordForEmail(email, {
			redirectTo: APP_URL,
			captchaToken
		});
		if (error) throw error;
	}

	async setPassword(password: string) {
		const { error } = await supabase!.auth.updateUser({ password });
		if (error) throw error;
		this.recovering = false;
	}

	/** Ends the session. If the server call fails or hangs (a stuck auth lock, a flaky phone
	 *  connection), the session is still dropped on this device: the student is never left on a
	 *  screen where "log out" does nothing. */
	async signOut() {
		if (!supabase) return;
		const ended = await Promise.race([
			supabase.auth.signOut().then(
				({ error }) => !error,
				() => false
			),
			new Promise<boolean>((resolve) => setTimeout(() => resolve(false), SIGN_OUT_WAIT_MS))
		]);
		if (ended) return;
		for (const key of Object.keys(localStorage))
			if (/^sb-.+-auth-token(-code-verifier)?$/.test(key)) localStorage.removeItem(key);
		this.session = null;
	}
}

export const auth = new AuthStore();
