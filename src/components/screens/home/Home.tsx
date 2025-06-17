'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./header/Header'))
const Statistics = dynamic(() => import('./statistics/Statistics'))
const Benefits = dynamic(() => import('./benefits/Benefits'))
const Footer = dynamic(() => import('./footer/Footer'))

export function Home() {
	return (
		<div className=''>
			<Header />
			<Statistics />
			<Benefits />
			<Footer />
		</div>
	)
}
