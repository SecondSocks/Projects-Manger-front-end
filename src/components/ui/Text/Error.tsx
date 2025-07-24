import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function Error({ children }: Readonly<Props>) {
	return <p className='text-red-600 opacity-80'>{children}</p>
}
