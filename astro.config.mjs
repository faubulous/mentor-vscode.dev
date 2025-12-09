// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Mentor',
			logo: {
				src: './src/assets/images/mentor.svg',
				alt: 'Mentor Icon',
			},
			favicon: './src/assets/images/mentor.svg',
			customCss: [
				'./src/assets/styles/mentor.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/faubulous/mentor-vscode' }],
			sidebar: [
				{
					label: 'Welcome',
					slug: ''
				},
				{
					label: 'User Guide',
					items: [
						{
							label: 'Getting Started',
							slug: 'guide/getting-started'
						},
						{
							label: 'Workspace',
							items: [
								{
									label: 'Workspace Index',
									slug: 'guide/workspace/workspace-index'
								},
								{
									label: 'Workspace Tree',
									slug: 'guide/workspace/workspace-tree'
								},
								{
									label: 'Definitions Tree',
									slug: 'guide/workspace/definitions-tree'
								},
								{
									label: 'Settings',
									slug: 'guide/workspace/settings'
								}
							]
						}
					]
				}
			],
		}),
	],
});
