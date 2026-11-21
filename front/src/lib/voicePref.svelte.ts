// Which recorded voice reads vocab words: female (default) or male. Kept on
// the device, like the theme.
import { storeItem } from './storedJson';
import type { VoiceGender } from './vocabAudio';

const STORAGE_KEY = 'voice';

function load(): VoiceGender {
	if (typeof localStorage === 'undefined') return 'female';
	return localStorage.getItem(STORAGE_KEY) === 'male' ? 'male' : 'female';
}

class VoicePref {
	gender = $state<VoiceGender>(load());

	set(gender: VoiceGender) {
		this.gender = gender;
		storeItem(STORAGE_KEY, gender);
	}
}

export const voicePref = new VoicePref();
