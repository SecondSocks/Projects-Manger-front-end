import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Error } from '@/components/ui/Text/Error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { ForgotPasswordLink } from '../ForgotPasswordLink'

import { LoginRequestSchema } from '@/shared/schemes/auth.schemes'
import { TLoginRequest } from '@/shared/types/auth.types'

export function LoginForm() {
	const form = useForm<TLoginRequest>({
		mode: 'onChange',
		resolver: zodResolver(LoginRequestSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<TLoginRequest> = data => {
		console.table(data)
		form.reset()
	}

	const emailError = form.formState.errors?.email
	const passwordError = form.formState.errors?.password

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='w-full'
		>
			<fieldset className='mb-4'>
				<label>Email</label>
				<Input
					{...form.register('email')}
					placeholder='Enter your email...'
				/>
				{emailError && <Error>{emailError.message}</Error>}
			</fieldset>
			<fieldset className='mb-2'>
				<label>Password</label>
				<Input
					{...form.register('password')}
					placeholder='Enter your password...'
				/>
				{passwordError && <Error>{passwordError.message}</Error>}
			</fieldset>
			<ForgotPasswordLink />
			<div className='flex gap-4 items-center'>
				<Button className='hover:scale-110 cursor-pointer'>Login</Button>
				<Link
					href='/register'
					className='opacity-80 hover:opacity-100 transition-opacity'
				>
					Register
				</Link>
			</div>
		</form>
	)
}
