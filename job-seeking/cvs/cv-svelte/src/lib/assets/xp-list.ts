import type { ExperienceData, SkillData } from '$lib/types';

export const xpList: ExperienceData[] = [
	{
		beginDate: '2022',
		endDate: {
			en: 'Present',
			pt: 'Atual'
		},
		company: 'Piraporinha',
		position: {
			en: 'Software Engineer',
			pt: 'Engenheiro de Software'
		},
		description: [
			{
				en: 'Developed a web application using Svelte and Node.js',
				pt: 'Desenvolveu uma aplicação web usando Svelte e Node.js'
			},
			{
				en: 'Implemented a RESTful API using Node.js and Express',
				pt: 'Implementou uma API RESTful usando Node.js e Express'
			},
			{
				en: 'Designed and implemented a database schema using SQL',
				pt: 'Desenvolveu e implementou um esquema de banco de dados usando SQL'
			},
			{
				en: 'Conducted performance tests and optimizations on the application',
				pt: 'Realizaram testes de performance e otimizações no aplicativo'
			},
			{
				en: "Collaborated with other developers to improve the application's functionality and user experience",
				pt: 'Colaborou com outros desenvolvedores para melhorar a funcionalidade e experiência do usuário'
			},
			{
				en: 'Participated in code reviews and provided feedback to improve code quality',
				pt: 'Participou em revisões de código e forneceu feedback para melhorar a qualidade do código'
			},
			{
				en: 'Contributed to the development of new features and bug fixes',
				pt: 'Contribuiu para o desenvolvimento de novas funcionalidades e correções de bugs'
			},
			{
				en: 'Documented the codebase and provided technical support to users',
				pt: 'Documentaram o código e forneceram suporte técnico aos usuários'
			}
		]
	}
];

export const skillsList: SkillData[] = [
	{
		name: 'JavaScript',
		level: { en: 'Advanced', pt: 'Avançado' }
	},
	{
		name: 'TypeScript',
		level: { en: 'Advanced', pt: 'Avançado' }
	},
	{
		name: 'React',
		level: { en: 'Advanced', pt: 'Avançado' }
	},
	{
		name: 'Next.js',
		level: { en: 'Intermediate', pt: 'Intermediário' }
	},
	{
		name: 'Node.js',
		level: { en: 'Experienced', pt: 'Experiente' }
	},
	{
		name: 'Svelte',
		level: { en: 'Experienced', pt: 'Experiente' }
	},
	{
		name: 'SQL',
		level: { en: 'Experienced', pt: 'Experiente' }
	},
	{
		name: 'DevOps',
		level: { en: 'Experienced', pt: 'Experiente' }
	},
	{
		name: 'Git',
		level: { en: 'Experienced', pt: 'Experiente' }
	},
	{
		name: 'Docker',
		level: { en: 'Experienced', pt: 'Experiente' }
	},
	{
		name: 'Linux',
		level: { en: 'Advanced', pt: 'Avançado' }
	}
];

export const projectsList: ExperienceData[] = [
	{
		beginDate: '2024',
		endDate: null,
		company: 'Piraporinha',
		position: {
			en: 'Web Discord Clone',
			pt: 'Web Discord Clone'
		},
		description: [
			{
				en: 'Full Stack application developed using React, Node.js, PostgreSQL, React-Query, WebSockets and TypeScript',
				pt: 'Aplicação Full Stack desenvolvida usando React, Node.js, PostgreSQL, React-Query, WebSockets e TypeScript'
			}
		]
	}
];

export const educationList: ExperienceData[] = [
	{
		beginDate: '2024',
		endDate: null,
		company: 'Piraporinha',
		position: {
			en: 'Web Discord Clone',
			pt: 'Web Discord Clone'
		},
		description: [
			{
				en: 'Full Stack application developed using React, Node.js, PostgreSQL, React-Query, WebSockets and TypeScript',
				pt: 'Aplicação Full Stack desenvolvida usando React, Node.js, PostgreSQL, React-Query, WebSockets e TypeScript'
			}
		]
	}
];
