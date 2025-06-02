import { cn } from '@/lib/utils'

interface Props {
	size?: 'sm' | 'md' | 'lg' | 'none'
	content: string
	className?: string
}

export function H1({ size = 'none', content, className }: Readonly<Props>) {
	return (
		<h1
			className={cn(`${className} scroll-m-20 font-extrabold tracking-tight`, {
				['text-5xl']: size === 'lg',
				['text-3xl']: size === 'md',
				['text-xl']: size === 'sm',
				['']: size === 'none'
			})}
		>
			{content}
		</h1>
	)
}
