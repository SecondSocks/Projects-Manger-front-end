import z from 'zod'

export const LoginRequestSchema = z.object({
	email: z.email(),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters'
	})
})

export const RegisterRequestSchema = z.object({
	name: z.string(),
	surname: z.string(),
	age: z.number(),
	email: z.email(),
	phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
		message: 'Incorrect phone number'
	}),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters'
	})
})
