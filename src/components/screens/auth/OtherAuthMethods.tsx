import { H2 } from '@/components/ui/Text/H2'

export function OtherAuthMethods() {
	return (
		<div className='flex-center flex-col gap-4 w-full'>
			<H2
				size='md'
				content='OR'
			/>
			<div className='flex w-full px-8 justify-between'>
				{/*TODO: Buttons for Auth */}
				<p className='border border-white/80 hover:border-white/100 px-4 py-2 rounded-2xl'>
					Google
				</p>
				<p className='border border-white/80 hover:border-white/100 px-4 py-2 rounded-2xl'>
					VK
				</p>
				<p className='border border-white/80 hover:border-white/100 px-4 py-2 rounded-2xl'>
					Git
				</p>
			</div>
		</div>
	)
}
