'use client'

import { Benefits } from './benefits/Benefits'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Statistics } from './statistics/Statistics'

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
