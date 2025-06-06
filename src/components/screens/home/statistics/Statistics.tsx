import { H1 } from '@/components/ui/Text/H1'
import { Separator } from '@/components/ui/separator'

import { StatisticChart } from './StatisticChart'
import { statisticsData } from './Statistics.data'

export function Statistics() {
	return (
		<div className='my-25 flex-center flex-col'>
			<H1
				content='Next-gen quality and efficiency'
				size='xl'
			/>
			<div className='w-1/4 my-7.5'>
				<Separator className='bg-foreground mx-auto' />
			</div>
			<p className='text-3xl text-center'>
				Stop using outdated support platforms that are confusing and
				<br />
				frustrating. Delight your team with precise project management
			</p>
			<div className='flex w-full justify-evenly my-17.5'>
				{statisticsData.map(data => (
					<div
						key={data.title}
						className='flex-center flex-col'
					>
						<H1
							content={data.title}
							size='xl'
						/>
						<p className='text-xl'>{data.description}</p>
					</div>
				))}
			</div>
			<StatisticChart />
		</div>
	)
}
