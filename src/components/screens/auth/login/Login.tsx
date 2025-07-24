'use client'

import { Logo } from '@/components/ui/Logo/Logo'
import { H1 } from '@/components/ui/Text/H1'
import { Separator } from '@/components/ui/separator'

import { OtherAuthMethods } from '../OtherAuthMethods'

import { LoginForm } from './LoginForm'

export function Login() {
	return (
		<div className='flex flex-col items-center justify-center p-10'>
			<div className='flex-center flex-col mb-8'>
				<Logo />
				<H1
					size='xl'
					content='Welcome back!'
					className='text-center mt-2'
				/>
				<p className='opacity-70'>Please enter your details</p>
			</div>
			<LoginForm />
			<Separator className='my-4' />
			<OtherAuthMethods />
		</div>
	)
}
