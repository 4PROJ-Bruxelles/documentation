module.exports = {
	title: 'Docs',
	description: 'Documentation for 4PROJ',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Shop', link: 'https://shop.4proj.tools' }
		],
		lastUpdated: 'Last Updated',
		sidebar: [
			'/',
			{
				title: 'Shop',
				collapsable: false,
				children: [
					'shop/',
				]
			},
			{
				title: 'Shop API',
				collapsable: false,
				children: [
					'shop-api/',
					'shop-api/account',
					'shop-api/users',
					'shop-api/articles',
					'shop-api/categories',
					'shop-api/transactions',
					'shop-api/cart',
				]
			},
			{
				title: 'Recommandation',
				collapsable: false,
				children: [
					'recommendation/',
					'recommendation/recommender',
				]
			},
			{
				title: 'Trilateration',
				collapsable: false,
				children: [
					'trilateration/',
					'trilateration/map',
					'trilateration/beacons',
				]
			},
			{
				title: 'Mobile App',
				collapsable: false,
				children: [
					'app/',
				]
			},
			{
				title: 'Backups',
				collapsable: false,
				children: [
					'backups/',
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
