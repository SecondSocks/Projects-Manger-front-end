import Image from 'next/image'

import { H2 } from '@/components/ui/Text/H2'

import { IBenefitCard } from './BenefitsCards.data'

export function BenefitCard({ items }: Readonly<{ items: IBenefitCard }>) {
	return (
		<div className='flex-center gap-7.5 w-115'>
			<Image
				src={items.link}
				alt={`${items.title} icon`}
				width={70}
				height={46}
			/>
			<div>
				<H2
					content={items.title}
					className='text-[40px] font-semibold'
				/>
				<p>{items.description}</p>
			</div>
		</div>
	)
}
