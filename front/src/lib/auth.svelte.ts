// Accounts: Supabase email sign-in with a one-time code (no passwords, no
// magic links - a link would open the browser instead of the mobile app).
// Without a configured Supabase project the app runs open, as before.

import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

class AuthStore {
	session = $state<Session | null>(null);
	/** False until the stored session has been read, so the login screen doesn't flash. */
	ready = $state(!supabase);

	constructor() {
		if (!supabase || typeof window === 'undefined') return;
		// The mock login's flag, from before real accounts.
		localStorage.removeItem('logged-in');
		supabase.auth.getSession().then(({ data }) => {
			this.session = data.session;
			this.ready = true;
		});
		supabase.auth.onAuthStateChange((_event, session) => {
			this.session = session;
		});
	}

	get enabled() {
		return !!supabase;
	}

	get loggedIn() {
		return !supabase || !!this.session;
	}

	get email() {
		return this.session?.user.email;
	}

	get accessToken() {
		return this.session?.access_token;
	}

	async sendCode(email: string) {
		const { error } = await supabase!.auth.signInWithOtp({
			email,
			options: { shouldCreateUser: true }
		});
		if (error) throw error;
	}

	async verifyCode(email: string, token: string) {
		const { error } = await supabase!.auth.verifyOtp({ email, token, type: 'email' });
		if (error) throw error;
	}

	async signOut() {
		await supabase?.auth.signOut();
	}
}

export const auth = new AuthStore();
