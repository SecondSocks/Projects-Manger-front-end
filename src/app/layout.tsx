import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { MainLayout } from '@/components/layouts/MainLayout'

import { MainProvider } from '@/providers/MainProvider'

import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['cyrillic', 'latin']
})

export const metadata: Metadata = {
	title: {
		default: 'Nexa',
		template: '%s | Nexa'
	},
	description: 'The best project manager'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${inter.variable} antialiased`}>
				<MainProvider>
					<MainLayout>{children}</MainLayout>
				</MainProvider>
			</body>
		</html>
	)
}
