// Mock auth: no real credentials yet - the login screen's button just flips
// this flag. Session-scoped so a fresh visit shows the login screen again.

const STORAGE_KEY = 'logged-in';

class AuthStore {
	loggedIn = $state(
		typeof sessionStorage !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === '1'
	);

	login() {
		this.loggedIn = true;
		sessionStorage.setItem(STORAGE_KEY, '1');
	}
}

export const auth = new AuthStore();
