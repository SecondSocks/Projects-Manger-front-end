import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Error } from '@/components/ui/Text/Error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useAuth } from '@/hooks/useAuth'

import { ForgotPasswordLink } from '../ForgotPasswordLink'

import { LoginRequestSchema } from '@/shared/schemes/auth.schemes'
import { TLoginRequest } from '@/shared/types/auth.types'

export function LoginForm() {
	const { login, isLoading, error } = useAuth()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TLoginRequest>({
		mode: 'onChange',
		resolver: zodResolver(LoginRequestSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<TLoginRequest> = data => {
		//TODO: Add toast
		try {
			login(data)
		} catch (error) {
			console.log(error)
		}

		reset()
	}

	const emailError = errors?.email
	const passwordError = errors?.password

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full'
		>
			<fieldset className='mb-4'>
				<label>Email</label>
				<Input
					{...register('email')}
					placeholder='Enter your email...'
				/>
				{emailError && <Error>{emailError.message}</Error>}
			</fieldset>
			<fieldset className='mb-2'>
				<label>Password</label>
				<Input
					{...register('password')}
					placeholder='Enter your password...'
				/>
				{passwordError && <Error>{passwordError.message}</Error>}
			</fieldset>
			<ForgotPasswordLink />
			<div className='flex gap-4 items-center'>
				<Button
					className='hover:scale-110 cursor-pointer'
					disabled={isLoading}
				>
					Login
				</Button>
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
