import type { ContactData } from '$lib/types';
import { Mail, Phone, Linkedin, Github } from 'lucide-svelte';

export const contactList: ContactData[] = [
	{
		Icon: Linkedin,
		label: 'LinkedIn',
		content: 'linkedin.com/in/iamunhoz'
	},
	{
		Icon: Github,
		label: 'GitHub',
		content: 'github.com/iamunhoz'
	},
	{
		Icon: Phone,
		label: 'Phone',
		content: '+55(14)93300-9447'
	},
	{
		Icon: Mail,
		label: 'Email',
		content: 'iamunhoz@gmail.com'
	}
];
