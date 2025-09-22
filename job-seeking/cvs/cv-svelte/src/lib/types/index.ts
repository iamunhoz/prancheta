import type { Component } from 'svelte';
  import { type Icon as IconType } from 'lucide-svelte';


export type ExperienceData = {
	beginDate: string;
	endDate: string;
	company: string;
	position: string;
	description: string[];
};

export type SkillData = {
	name: string;
	level: string;
};

export type ContactData = {
    Icon: typeof IconType;
    label: string;
    content: string | Component;
};
