// The single latest thing the student opened - a lesson, an exam or a words
// session, in any module - for the home page's "continue" bar. Per-module lesson
// position stays in moduleLocation; this only answers "what was I doing last?".

const STORAGE_KEY = 'last-engagement';

export type Engagement = {
	kind: 'lesson' | 'exam' | 'words';
	moduleId: string;
	/** Lesson or exam id; absent for a words session. */
	id?: string;
};

function load(): Engagement | null {
	if (typeof localStorage === 'undefined') return null;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}

class LastEngagementStore {
	value = $state<Engagement | null>(load());

	record(engagement: Engagement) {
		this.value = engagement;
		if (typeof localStorage !== 'undefined')
			localStorage.setItem(STORAGE_KEY, JSON.stringify(engagement));
	}
}

export const lastEngagement = new LastEngagementStore();
