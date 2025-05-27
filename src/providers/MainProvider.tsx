'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

import { ThemeProvider } from './ThemeProvider'

const queryClient = new QueryClient()

interface Props {
	children: ReactNode
}

export function MainProvider({ children }: Readonly<Props>) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ThemeProvider>
	)
}
