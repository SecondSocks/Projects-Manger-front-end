import { useRouter } from 'next/navigation'

import { Logo } from '@/components/ui/Logo/Logo'
import { Button } from '@/components/ui/button'

import { NavMenu } from './NavigationMenu/NavMenu'

export function Header() {
	const { push } = useRouter()

	return (
		<div className='flex items-center justify-between px-9 w-screen h-20'>
			<Logo />
			<NavMenu />
			<div className='flex-center gap-2.5'>
				<Button
					variant='outline'
					size='default'
					className='cursor-pointer'
					onClick={() => push('/login')}
				>
					Sign in
				</Button>
				<Button
					variant='default'
					size='default'
					className='cursor-pointer'
					onClick={() => push('/register')}
				>
					Start for free
				</Button>
			</div>
		</div>
	)
}
