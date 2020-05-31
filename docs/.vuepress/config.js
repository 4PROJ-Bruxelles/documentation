module.exports = {
	title: 'Docs',
	description: 'Documentation for 4PROJ',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Shop', link: 'https://shop.4proj.samalev.be' }
		],
		lastUpdated: 'Last Updated',
		sidebar: [
			'/',
			{
				title: 'Shop',
				collapsable: false,
				children: [
					'shop/',
					'shop/auth',
					'shop/users',
					'shop/articles',
					'shop/categories',
					'shop/transactions',
					'shop/cart',
				]
			},
			{
				title: 'Recommandation',
				collapsable: false,
				children: [
					'recommandation/',
				]
			},
			{
				title: 'Trilateration',
				collapsable: false,
				children: [
					'trilateration/',
					'trilateration/map',
					'trilateration/beacon',
				]
			},
			{
				title: 'Mobile App',
				collapsable: false,
				children: [
					'app/',
				]
			}
		],
		sidebarDepth: 2,
		repo: '4PROJ-Bruxelles/documentation',
		repoLabel: 'Repository',
		docsDir: 'docs',
		editLinks: false
	}
}
