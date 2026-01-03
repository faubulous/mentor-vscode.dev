// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Mentor',
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/images/mentor.svg',
				alt: 'Mentor Icon',
			},
			customCss: [
				'./src/assets/styles/mentor.css',
				'./src/assets/styles/mentor-icons.css',
				'./src/assets/styles/codicon.css'
			],
			social: [{
				icon: 'github',
				label: 'GitHub',
				href: 'https://github.com/faubulous/mentor-vscode'
			}],
			sidebar: [
				{
					label: 'About',
					items: [
						{
							label: 'Getting Started',
							slug: 'about/getting-started'
						},
						{
							label: 'Release History',
							slug: 'about/release-history'
						},
						{
							label: 'Support',
							slug: 'about/support'
						}
					]
				},
				{
					label: 'Workspace Features',
					items: [
						{
							label: 'Workspace Index',
							slug: 'features/workspace-index'
						},
						{
							label: 'Workspace Tree',
							slug: 'features/workspace-tree'
						},
						{
							label: 'Definitions Tree',
							slug: 'features/definitions-tree'
						},
						{
							label: 'Connections Tree',
							slug: 'features/connections-tree'
						}
					]
				},
				{
					label: 'Editor Features',
					items: [
						{
							label: 'Syntax Highlighting',
							slug: 'features/syntax-highlighting'
						},
						{
							label: 'Auto Complete',
							slug: 'features/auto-complete'
						},
						{
							label: 'Code Lenses',
							slug: 'features/code-lenses'
						},
						{
							label: 'Prefix Management',
							slug: 'features/prefix-management'
						},
						{
							label: 'Refactoring',
							slug: 'features/refactoring'
						},
						{
							label: 'SPARQL Query',
							slug: 'features/sparql-query'
						},
						{
							label: 'Notebooks',
							slug: 'features/notebooks'
						}
					]
				},
				// {
				// 	label: 'Collaboration',
				// 	items: [
				// 		{
				// 			label: 'Live Collaboration',
				// 			slug: 'features/live-collaboration'
				// 		},
				// 	]
				// },
			],
		}),
	],
});
