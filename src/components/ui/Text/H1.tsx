import { cn } from '@/lib/utils'

interface Props {
	size: 'sm' | 'md' | 'lg'
	content: string
}

export function H1({ size, content }: Readonly<Props>) {
	return (
		<h1
			className={cn(
				'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
				{
					['text-5xl']: size === 'lg',
					['text-3xl']: size === 'md',
					['text-xl']: size === 'sm'
				}
			)}
		>
			{content}
		</h1>
	)
}
