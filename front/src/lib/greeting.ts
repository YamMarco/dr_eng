// "Good morning, Noa!" - the time of day, plus the student's name when they gave one.
import { i18n } from './i18n/index.svelte';
import { profile } from './profile.svelte';

export type DayPart = 'morning' | 'noon' | 'evening' | 'night';

export function dayPart(hour: number): DayPart {
	if (hour >= 5 && hour < 12) return 'morning';
	if (hour >= 12 && hour < 17) return 'noon';
	if (hour >= 17 && hour < 22) return 'evening';
	return 'night';
}

/** Reactive on the profile: call from markup or $derived. */
export function greeting(date = new Date()): string {
	return i18n.dict.home.greeting(dayPart(date.getHours()), profile.name);
}
