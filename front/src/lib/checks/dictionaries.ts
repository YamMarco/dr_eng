import { base } from '$app/paths';
import type { DictData, DictLoader } from './typos';

// static/dict/*: Hunspell files copied from the dictionary-en / dictionary-en-gb
// packages (those packages only export node loaders, not the raw files).
const bytes = async (name: string) =>
	new Uint8Array(await (await fetch(`${base}/dict/${name}`)).arrayBuffer());

/** Browser loader: fetched the first time a text is checked, then cached by the browser. */
export const browserDictionaries: DictLoader = async (): Promise<DictData[]> => {
	const [a, b, c, d] = await Promise.all(
		['en-US.aff', 'en-US.dic', 'en-GB.aff', 'en-GB.dic'].map(bytes)
	);
	return [
		{ aff: a!, dic: b! },
		{ aff: c!, dic: d! }
	];
};
