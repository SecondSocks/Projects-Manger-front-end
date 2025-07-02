import { TokensName } from '@/constants/names.constants'

import { IUser } from './user.types'

export interface ILoginRequest {
	email: string
	password: string
}

export interface IRegisterRequest {
	name: string
	surname: string
	age: number
	email: string
	phoneNumber: string
	password: string
}

export interface ITokens {
	[TokensName.ACCESS_TOKEN]: string
	[TokensName.REFRESH_TOKEN]: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
