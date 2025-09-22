import type { ContactData } from "$lib/types";
import { Mail, Phone, Linkedin, Github } from "lucide-svelte";

export const contactList: ContactData[] = [
	{
		Icon: Mail,
		label: 'Email',
		content: 'iamunhoz@gmail.com'
	},
	{
		Icon: Phone,
		label: 'Phone',
		content: '+55 (11) 99887-5555'
	},
	{
		Icon: Linkedin,
		label: 'LinkedIn',
		content: 'https://www.linkedin.com/in/iamunhoz/'
	},
	{
		Icon: Github,
		label: 'GitHub',
		content: 'https://github.com/iamunhoz'
	},
	
];