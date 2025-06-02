import { Award } from 'lucide-react'

import { H1 } from '@/components/ui/Text/H1'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { BenefitCard } from './cards/BenefitCard'
import { BenefitCardsData } from './cards/BenefitsCards.data'

export function Benefits() {
	return (
		<div className='flex-center flex-col mb-25'>
			<H1
				content='Sign-in and scale your project benefits'
				size='xl'
			/>
			<div className='w-1/4 mt-7.5 mb-17.5'>
				<Separator className='bg-foreground' />
			</div>
			<div className='flex w-4/5 justify-between'>
				{BenefitCardsData.map(data => (
					<BenefitCard
						key={data.title}
						items={data}
					/>
				))}
			</div>
			<Button
				size='lg'
				className='mt-17'
			>
				<Award />
				And much more
			</Button>
		</div>
	)
}
