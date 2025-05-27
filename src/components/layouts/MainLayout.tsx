import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function MainLayout({ children }: Readonly<Props>) {
	return <div className='flex-center'>{children}</div>
}
