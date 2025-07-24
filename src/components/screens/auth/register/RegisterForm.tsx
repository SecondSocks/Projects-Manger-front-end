import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Error } from '@/components/ui/Text/Error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { ForgotPasswordLink } from '../ForgotPasswordLink'

import { RegisterRequestSchema } from '@/shared/schemes/auth.schemes'
import { TLoginRequest, TRegisterRequest } from '@/shared/types/auth.types'

export function RegisterForm() {
	const form = useForm<TRegisterRequest>({
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

	const onSubmit: SubmitHandler<TLoginRequest> = data => {
		console.table(data)
		form.reset()
	}

	const nameError = form.formState.errors?.name
	const ageError = form.formState.errors?.age
	const surnameError = form.formState.errors?.surname
	const emailError = form.formState.errors?.email
	const passwordError = form.formState.errors?.password
	const phoneError = form.formState.errors?.phoneNumber

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='w-full'
		>
			<fieldset className='mb-4'>
				<label>Name</label>
				<Input
					{...form.register('name')}
					placeholder='Enter your name...'
				/>
				{nameError && <Error>{nameError.message}</Error>}
			</fieldset>
			<fieldset className='mb-4'>
				<label>Surname</label>
				<Input
					{...form.register('surname')}
					placeholder='Enter your email...'
				/>
				{surnameError && <Error>{surnameError.message}</Error>}
			</fieldset>
			<fieldset className='mb-4'>
				<label>Age</label>
				<Input
					{...form.register('age')}
					placeholder='Enter your email...'
				/>
				{ageError && <Error>{ageError.message}</Error>}
			</fieldset>
			<fieldset className='mb-4'>
				<label>Phone</label>
				<Input
					{...form.register('phoneNumber')}
					placeholder='Enter your email...'
				/>
				{phoneError && <Error>{phoneError.message}</Error>}
			</fieldset>
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
					placeholder='Enter your email...'
				/>
				{passwordError && <Error>{passwordError.message}</Error>}
			</fieldset>
			<ForgotPasswordLink />
			<div className='flex gap-4 items-center'>
				<Button className='hover:scale-110 cursor-pointer'>Register</Button>
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
