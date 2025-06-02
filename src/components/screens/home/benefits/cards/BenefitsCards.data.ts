export interface IBenefitCard {
	link: string
	title: string
	description: string
}

export const BenefitCardsData: IBenefitCard[] = [
	{
		link: '/Benefits_Icon.svg',
		title: 'Global benefits',
		description: 'One place to start, manage and scale your project globally'
	},
	{
		link: '/AI_Icon.svg',
		title: 'AI-Chat',
		description: 'You can use AI to help you organize your project and more'
	},
	{
		link: '/Statistics_Icon.svg',
		title: 'Statistics',
		description:
			'You can track the progress of your project and manage it wisely.'
	}
]
