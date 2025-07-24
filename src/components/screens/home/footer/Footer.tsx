import { Heart } from 'lucide-react'

import { H1 } from '@/components/ui/Text/H1'
import { Button } from '@/components/ui/button'

export default function Footer() {
	return (
		<div className='bg-foreground text-background flex-center flex-col gap-7.5 h-105'>
			<H1
				content='Interested? Try it now for free now!'
				className='text-6xl'
			/>
			<Button
				variant='secondary'
				size='lg'
				className='cursor-pointer transition-colors'
			>
				<Heart /> Try for free
			</Button>
		</div>
	)
}
