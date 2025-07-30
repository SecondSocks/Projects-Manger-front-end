import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Error } from '@/components/ui/Text/Error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useAuth } from '@/hooks/useAuth'

import { ForgotPasswordLink } from '../ForgotPasswordLink'

import { RegisterRequestSchema } from '@/shared/schemes/auth.schemes'
import { TLoginRequest, TRegisterRequest } from '@/shared/types/auth.types'

export function RegisterForm() {
	const { register: authRegister, isLoading, error } = useAuth()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TRegisterRequest>({
		mode: 'onChange',
		resolver: zodResolver(RegisterRequestSchema),
		defaultValues: {
			email: '',
			name: '',
			password: '',
			surname: '',
			age: 0,
			phoneNumber: ''
		}
	})

	const onSubmit: SubmitHandler<TRegisterRequest> = data => {
		//TODO: Add toast
		try {
			authRegister(data)
		} catch (error) {
			console.log(`Register failed: ${error}`)
		}

		reset()
	}

	const nameError = errors?.name
	const ageError = errors?.age
	const surnameError = errors?.surname
	const emailError = errors?.email
	const passwordError = errors?.password
	const phoneError = errors?.phoneNumber

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full'
		>
			<fieldset className='mb-4'>
				<label>Name</label>
				<Input
					{...register('name')}
					placeholder='Enter your name...'
				/>
				{nameError && <Error>{nameError.message}</Error>}
			</fieldset>
			<fieldset className='mb-4'>
				<label>Surname</label>
				<Input
					{...register('surname')}
					placeholder='Enter your email...'
				/>
				{surnameError && <Error>{surnameError.message}</Error>}
			</fieldset>
			<fieldset className='mb-4'>
				<label>Age</label>
				<Input
					{...register('age')}
					placeholder='Enter your email...'
				/>
				{ageError && <Error>{ageError.message}</Error>}
			</fieldset>
			<fieldset className='mb-4'>
				<label>Phone</label>
				<Input
					{...register('phoneNumber')}
					placeholder='Enter your email...'
				/>
				{phoneError && <Error>{phoneError.message}</Error>}
			</fieldset>
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
					placeholder='Enter your email...'
				/>
				{passwordError && <Error>{passwordError.message}</Error>}
			</fieldset>
			<ForgotPasswordLink />
			<div className='flex gap-4 items-center'>
				<Button
					className='hover:scale-110 cursor-pointer'
					disabled={isLoading}
				>
					Register
				</Button>
				<Link
					href='/register'
					className='opacity-80 hover:opacity-100 transition-opacity'
				>
					Login
				</Link>
			</div>
		</form>
	)
}
