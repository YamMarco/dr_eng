// Mock auth: no real credentials yet - the login screen's button just flips
// this flag. Persisted so a returning user skips the login screen.

const STORAGE_KEY = 'logged-in';

class AuthStore {
	loggedIn = $state(
		typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY) === '1'
	);

	login() {
		this.loggedIn = true;
		localStorage.setItem(STORAGE_KEY, '1');
	}
}

export const auth = new AuthStore();
