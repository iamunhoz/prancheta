import type { Component } from 'svelte';
import { type Icon as IconType } from 'lucide-svelte';

export type BilingualContent = {
	en: string;
	pt: string;
};

export type ExperienceData = {
	beginDate: string;
	endDate: BilingualContent | null;
	company: string;
	position: BilingualContent;
	description: BilingualContent[];
};

export type SkillData = {
	name: string;
	level: BilingualContent;
};

export type ContactData = {
	Icon: typeof IconType;
	label: string;
	content: string | Component;
};
