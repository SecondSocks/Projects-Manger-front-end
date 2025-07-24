'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./header/Header'), { ssr: false })
const Statistics = dynamic(() => import('./statistics/Statistics'), {
	ssr: false
})
const Benefits = dynamic(() => import('./benefits/Benefits'), { ssr: false })
const Footer = dynamic(() => import('./footer/Footer'), { ssr: false })

export default function Home() {
	return (
		<div>
			<Header />
			<Statistics />
			<Benefits />
			<Footer />
		</div>
	)
}
