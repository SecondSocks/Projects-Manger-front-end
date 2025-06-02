import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart'

import { mockData } from './mock-data.data'

interface IChartConfig {
	[key: string]: {
		label: string
		color: string
	}
}

const chartConfig: IChartConfig = {
	users: {
		label: 'Users',
		color: 'var(--color-gray-400)'
	},
	proUsers: {
		label: 'Pro Users',
		color: 'var(--chart-2)'
	},
	ultimateUsers: {
		label: 'Ultimate Users',
		color: 'var(--color-red-500)'
	}
} satisfies ChartConfig

export function StatisticChart() {
	return (
		<ChartContainer
			config={chartConfig}
			className='className="min-h-[200px] max-h-[400px] w-full'
		>
			<BarChart
				accessibilityLayer
				data={mockData}
				className='w-4/5'
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey='month'
					tickLine={false}
					tickMargin={5}
					axisLine={false}
					//tickFormatter={value => value.slice(0, 3)}
				/>
				<ChartTooltip content={<ChartTooltipContent labelKey='' />} />
				<ChartLegend
					content={<ChartLegendContent />}
					className='text-base'
				/>
				<Bar
					dataKey='users'
					fill='var(--color-users)'
					radius={4}
				/>
				<Bar
					dataKey='proUsers'
					fill='var(--color-proUsers)'
					radius={4}
				/>
				<Bar
					dataKey='ultimateUsers'
					fill='var(--color-ultimateUsers)'
					radius={4}
				/>
			</BarChart>
		</ChartContainer>
	)
}
