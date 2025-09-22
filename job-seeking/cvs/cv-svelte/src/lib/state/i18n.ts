import { writable } from 'svelte/store';

enum Language {
	EN = 'en',
	PT = 'pt'
}

export const language = writable<Language>(Language.PT);

export const setLanguage = (lang: Language) => {
	language.set(lang);
};
