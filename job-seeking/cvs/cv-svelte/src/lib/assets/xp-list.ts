import type { ExperienceData, SkillData } from '$lib/types';

export const xpList: ExperienceData[] = [
	{
		beginDate: '2025',
		endDate: { en: 'Present', pt: 'Atual' },
		company: { en: 'Lailla', pt: 'Lailla' },
		position: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
		location: { en: 'Brazil (remote)', pt: 'Brasil (remoto)' },
		description: [
			{
				en: 'Full-stack development of a multi-tenant SaaS focused on WhatsApp customer communication, inbox, contacts, and automation flows (fluxograms)',
				pt: 'Desenvolvimento full stack de um SaaS multi-tenant focado em comunicação via WhatsApp, caixa de entrada, contatos e automações por fluxos (fluxogramas)'
			},
			{
				en: 'Backend (NestJS): built and maintained versioned APIs, webhooks, and integrations (Postgres/TypeORM, Mongo/Mongoose, Redis, Socket.IO)',
				pt: 'Backend (NestJS): construção e manutenção de APIs versionadas, webhooks e integrações (Postgres/TypeORM, Mongo/Mongoose, Redis, Socket.IO)'
			},
			{
				en: 'Frontend (Angular 17): implemented product features and refactors in UI, creating listings, a chat room with sockets, a drag-and-drop cards UI and other implementations',
				pt: 'Frontend (Angular 17): implementação de features e refatoramentos na UI, criando listagens, uma sala de chat uma interface de cards contendo drag-and-drop e outras implementações'
			},
			{
				en: 'Implemented e-commerce integration end-to-end: credentials UX, webhook triggers mapping, payload normalization for flow variables, and token auto-refresh/re-authorization',
				pt: 'Implementação end-to-end de integração com e-commerce: UX de credenciais, mapeamento de gatilhos de webhook, normalização de payload para variáveis de fluxo e auto-refresh/reautorização de tokens'
			},
			{
				en: 'Integration with Meta WhatsApp CTWA (Click-to-WhatsApp Ads) support and corresponding frontend dashboards',
				pt: 'Integração com a CTWA (Click-to-WhatsApp Ads) no WhatsApp Meta e dashboards no frontend'
			},
			{
				en: 'Improved reliability and maintainability via refactors into smaller helpers/services, stricter typing, and diagnostics/seed scripts for faster feature development',
				pt: 'Melhoria de confiabilidade e manutenção via refatoramentos em helpers/services menores, tipagem mais estrita e scripts de diagnóstico/seeds para acelerar o desenvolvimento'
			},
			{
				en: 'Stack: TypeScript, NestJS, Angular 17, PrimeNG, Tailwind CSS, Socket.IO, TypeORM, PostgreSQL, MongoDB, Redis, Docker',
				pt: 'Stack: TypeScript, NestJS, Angular 17, PrimeNG, Tailwind CSS, Socket.IO, TypeORM, PostgreSQL, MongoDB, Redis, Docker'
			}
		]
	},
	{
		beginDate: '2024',
		endDate: {
			en: '2025',
			pt: '2025'
		},
		company: { en: 'InfinityBase', pt: 'InfinityBase' },
		position: {
			en: 'Full Stack Developer',
			pt: 'Desenvolvedor Full Stack'
		},
		location: {
			en: 'Florianopolis, Brazil (remote)',
			pt: 'Florianópolis, Brasil (remoto)'
		},
		description: [
			{
				en: 'Development of a management application for municipalities, Web and Mobile',
				pt: 'Desenvolvimento de aplicação de gestão de prefeituras, Web e Mobile'
			},
			{
				en: 'Selected to serve as acting project leader for a 6-month critical initiative overseeing a team of developers',
				pt: 'Selecionado para servir como líder de projeto para uma atividade crítica durante 6 meses de uma equipe de desenvolvedores'
			},
			{
				en: 'Web Stack: React, Next.js, trpc, react-query, orval, typescript',
				pt: 'Stack Web: React, Next.js, trpc, react-query, orval, typescript'
			},
			{
				en: 'UI Stack: tailwindcss, shadcn, radix-ui, typescript',
				pt: 'Stack UI: tailwindcss, shadcn, radix-ui, typescript'
			},
			{
				en: 'Mobile Stack: react-native, expo, typescript',
				pt: 'Stack Mobile: react-native, expo, typescript'
			},
			{
				en: 'Oversaw daily task management and sprint progress of the whole team, including QA',
				pt: 'Supervisão diária de gerenciamento de tarefas e progresso de sprints do time todo, incluindo QA'
			},
			{
				en: "Collaborated with other developers to improve the application's functionality and user experience",
				pt: 'Colaboração com outros desenvolvedores para melhorar a funcionalidade e experiência do usuário'
			},
			{
				en: 'Participated in code reviews and provided feedback to improve code quality',
				pt: 'Participação em revisões de código e forneceu feedback para melhorar a qualidade do código'
			},
			{
				en: 'Contributed to the development of new features and bug fixes',
				pt: 'Contribuição para o desenvolvimento de novas funcionalidades e correções de bugs'
			}
		]
	},
	{
		beginDate: '2022',
		endDate: {
			en: '2024',
			pt: '2024'
		},
		company: { en: 'Insoft Omni', pt: 'Insoft Omni' },
		position: {
			en: 'Full Stack Developer',
			pt: 'Desenvolvedor Full Stack'
		},
		location: {
			en: 'Ilha Bela, Brazil (remote)',
			pt: 'Ilha Bela, Brasil (remoto)'
		},
		description: [
			{
				en: 'Continuous development and maintenance of a support helpdesk application for various types of companies, Web and backend',
				pt: 'Desenvolvimento contínuo e manutenção de uma aplicação de suporte online para vários tipos de empresas, Web e backend'
			},
			{
				en: 'Acted alone for the whole period of the contract, being responsible for the  development and maintenance of the application, ensuring its smooth operation and satisfaction of all users',
				pt: 'Atuei sozinho durante todo o período do contrato, sendo responsável pelo desenvolvimento e manutenção da aplicação, garantindo uma operação tranquila e satisfação de todos os usuários'
			},
			{
				en: 'Backend Stack: Node.js, Express, structured with Controller-Service-Repository classes, MySQL, WebSockets',
				pt: 'Stack Backend: Node.js, Express, estruturado com classes Controller-Service-Repository, MySQL, WebSockets'
			},
			{
				en: 'Frontend Stack: React 17, WebSockets, Bootstrap, Material-UI, Zustand, Javascript',
				pt: 'Stack Frontend: React 17, WebSockets, Bootstrap, Material-UI, Zustand, Javascript'
			},
			{
				en: 'Integrated messaging channels API: WhatsApp, Twilio and Meta',
				pt: 'Integração de APIs de canais de mensagens: WhatsApp, Twilio e Meta'
			},
			{
				en: "Collaborated with marketing, sales and management teams to improve the application's functionality, user experience, and overall satisfaction",
				pt: 'Colaboração com equipes de marketing, vendas e gestão para melhorar a funcionalidade, experiência do usuário e satisfação geral'
			}
		]
	},
	{
		beginDate: '2021',
		endDate: {
			en: '2022',
			pt: '2022'
		},
		company: { pt: 'Plick Soluções', en: 'Plick Solutions' },
		position: {
			en: 'Frontend Developer',
			pt: 'Desenvolvedor Frontend'
		},
		location: {
			en: 'Londrina, Brazil (remote)',
			pt: 'Londrina, Brasil (remoto)'
		},
		description: [
			{
				en: 'Development of an application for processing fiscal documents and implementing digital signing workflows to ensure compliance and secure document handling',
				pt: 'Desenvolvimento de uma aplicação para processamento de documentos fiscais e implementação de fluxos de assinatura digital para garantir conformidade e manuseio seguro de documentos digitais'
			},
			{
				pt: 'Participação na configuração do frontend, incluindo o desenvolvimento da interface do usuário, a integração de APIs de terceiros e a implementação de princípios de design responsivo',
				en: 'Participation in the frontend setup, including the development of the user interface, the integration of third-party APIs, and the implementation of responsive design principles'
			},
			{
				en: 'Backend Stack: Node.js, Express, MySQL',
				pt: 'Stack Backend: Node.js, Express, MySQL'
			},
			{
				en: 'Frontend Stack: React 17, styled-component, self-made components, React Context, Javascript',
				pt: 'Stack Frontend: React 17, styled-component, componentes próprios, React Context, Javascript'
			},
			{
				en: 'Contributed to the development of new features and bug fixes',
				pt: 'Contribuição para o desenvolvimento de novas funcionalidades e correções de bugs'
			}
		]
	},
	{
		beginDate: '2013',
		endDate: {
			en: '2019',
			pt: '2019'
		},
		company: { en: 'Several Schools', pt: 'Vários Escolas' },
		position: {
			en: 'English Teacher',
			pt: 'Professor de inglês'
		},
		location: {
			en: 'Curitiba, Brazil',
			pt: 'Curitiba, Brasil'
		},
		description: [
			{
				en: 'Taught English to students of diverse ages and proficiency levels, that helped me develop strong communication and instruction skills',
				pt: 'Ensino de inglês a estudantes de diferentes idades e níveis de proficiência, que me ajudou a desenvolver fortes habilidades de comunicação e instrução'
			},
			{
				en: 'Designed lesson plans and learning materials, gaining experience in structuring complex information',
				pt: 'Elaboração de planos de aula e materiais de aprendizagem, adquirindo experiência em estruturar informações complexas'
			},
			{
				en: 'Facilitated group discussions and one-on-one sessions, which strengthened my interpersonal and problem-solving abilities',
				pt: 'Organização de discussões em grupo e sessões individuais, o que fortaleceu minhas habilidades interpessoais e de resolução de problemas'
			},
			{
				en: 'Adapted teaching methods to a variety of learning styles, which helped me be able to do onboarding and training of new developers',
				pt: 'Adaptação de métodos de ensino para diferentes estilos de aprendizagem, o que me ajudou a ser capaz de realizar onboarding e aplicar treinamento de novos colaboradores'
			}
		]
	},
	{
		beginDate: '2010',
		endDate: {
			en: '2013',
			pt: '2013'
		},
		company: { en: 'Bank CEF (Brazilian Federal Bank)', pt: 'Caixa Econômica Federal' },
		position: {
			en: 'IT Support Technician',
			pt: 'Técnico de Suporte em TI'
		},
		location: {
			en: 'Londrina, Brazil',
			pt: 'Londrina, Brasil'
		},
		description: [
			{
				en: "Configured and maintained branch office's local area networks (LANs)",
				pt: 'Instalação de redes locais (LANs) em agências,'
			},
			{
				en: 'Installed and imaged operating systems on hundreds of workstations',
				pt: 'Instalação de sistemas operacionais em centenas de estações de trabalho. '
			},
			{
				en: 'Diagnosed and repaired hardware issues, including on-site and lab-based printer and computer maintenance',
				pt: 'Diagnóstico e conserto de problemas de hardware, incluindo manutenção de impressoras e computadores tanto em campo quanto em laboratório'
			},
			{
				en: 'Provided technical support to banking staff',
				pt: 'Prestação de suporte técnico aos funcionários do banco'
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
		name: 'React Native',
		level: { en: 'Intermediate', pt: 'Intermediário' }
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
		company: {
			en: 'github.com/iamunhoz/coding-challenge-discord-clone',
			pt: 'github.com/iamunhoz/coding-challenge-discord-clone'
		},
		position: {
			en: 'Web Discord Clone',
			pt: 'Web Discord Clone'
		},
		location: {
			en: '',
			pt: ''
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
		beginDate: '2015',
		endDate: { en: '2019', pt: '2019' },
		company: {
			en: 'UFPR - Universidade Federal do Paraná',
			pt: 'UFPR - Universidade Federal do Paraná'
		},
		position: {
			en: 'Linguistics Undergraduate',
			pt: 'Graduação em Linguística'
		},

		location: {
			en: 'Curitiba, Brazil',
			pt: 'Curitiba, Brasil'
		},
		description: [
			{
				pt: 'Foco em: Semântica, Fonética/Fonologia, Gramática Gerativa, Psicolinguística e história da Lógica',
				en: 'Focus on: Semantics, Phonetics/Phonology, Grammar, Generative Grammar, Psycholinguistics and History of Logic'
			}
		]
	}
];
