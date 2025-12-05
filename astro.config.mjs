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
					label: 'Overview',
					slug: ''
				}
			],
		}),
	],
});
