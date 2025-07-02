import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export default function layout({ children }: Readonly<Props>) {
	return <div>{children}</div>
}
