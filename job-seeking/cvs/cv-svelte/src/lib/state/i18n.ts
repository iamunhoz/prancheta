import { writable } from 'svelte/store';

enum Language {
	EN = 'en',
	PT = 'pt'
}

export const language = writable<Language>(Language.EN);

export const setLanguage = (lang: Language) => {
	language.set(lang);
};
