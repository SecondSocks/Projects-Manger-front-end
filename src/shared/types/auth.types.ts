import z from 'zod'

import { TokensName } from '@/constants/names.constants'

import {
	LoginRequestSchema,
	RegisterRequestSchema
} from '../schemes/auth.schemes'

import { IUser } from './user.types'

export type TLoginRequest = z.infer<typeof LoginRequestSchema>

export type TRegisterRequest = z.infer<typeof RegisterRequestSchema>

export interface ITokens {
	[TokensName.ACCESS_TOKEN]: string
	[TokensName.REFRESH_TOKEN]: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
