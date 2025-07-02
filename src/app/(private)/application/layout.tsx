import { Metadata } from 'next'
import { ReactNode } from 'react'

import { NO_INDEX_PAGE } from '@/config/seo.config'

export const metadata: Metadata = {
	title: {
		default: 'Nexa Manager',
		template: '%s | Nexa Manager'
	},
	...NO_INDEX_PAGE
}

interface Props {
	children: ReactNode
}

export default function AppLayout({ children }: Readonly<Props>) {
	return <div>{children}</div>
}
