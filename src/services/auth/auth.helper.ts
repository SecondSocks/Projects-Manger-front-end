import Cookies from 'js-cookie'

import { TokensName } from '@/constants/names.constants'

export const saveToStorage = (accessToken: string, refreshToken: string) => {
	Cookies.set(TokensName.ACCESS_TOKEN, accessToken)
	Cookies.set(TokensName.REFRESH_TOKEN, refreshToken)
}

export const getAccessToken = () => {
	return Cookies.get(TokensName.ACCESS_TOKEN) ?? null
}

export const getRefreshToken = () => {
	return Cookies.get(TokensName.REFRESH_TOKEN) ?? null
}

export const removeFromStorage = () => {
	Cookies.remove(TokensName.ACCESS_TOKEN)
	Cookies.remove(TokensName.REFRESH_TOKEN)
}
