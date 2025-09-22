import type { ExperienceData, SkillData } from "$lib/types";

export const xpList: ExperienceData[] = [
	{
		beginDate: '2022',
		endDate: 'Present',
		company: 'Google',
		position: 'Software Engineer',
		description: [
			'Developed a web application using Svelte and Node.js',
			'Implemented a RESTful API using Node.js and Express',
			'Designed and implemented a database schema using SQL',
			'Conducted performance tests and optimizations on the application',
			"Collaborated with other developers to improve the application's functionality and user experience",
			'Participated in code reviews and provided feedback to improve code quality',
			'Contributed to the development of new features and bug fixes',
			'Documented the codebase and provided technical support to users'
		]
	},
    {
		beginDate: '2021',
		endDate: '2022',
		company: 'Amazon',
		position: 'Software Engineer',
		description: [
			'Developed a web application using Svelte and Node.js',
			'Implemented a RESTful API using Node.js and Express',
			'Designed and implemented a database schema using SQL',
			'Conducted performance tests and optimizations on the application',
			"Collaborated with other developers to improve the application's functionality and user experience",
			'Participated in code reviews and provided feedback to improve code quality',
			'Contributed to the development of new features and bug fixes',
			'Documented the codebase and provided technical support to users'
		]
	},
];

export const skillsList: SkillData[] = [
	{
		name: 'JavaScript',
		level: 'Advanced'
	},
	{
		name: 'TypeScript',
		level: 'Advanced'
	},
	{
		name: 'Svelte',
		level: 'Advanced'
	},
	{
		name: 'React',
		level: 'Advanced'
	},
	{
		name: 'Next.js',
		level: 'Intermediate'
	},
    {
		name: 'Node.js',
		level: 'Experienced'
	},
	{
		name: 'SQL',
		level: 'Experienced'
	},
	{
		name: 'DevOps',
		level: 'Experienced'
	},
    {
		name: 'Git',
		level: 'Experienced'
	},
    {
        name: 'Docker',
        level: 'Experienced'
    },
    {
        name: 'Linux',
        level: 'Advanced'
    }
];