import axios from 'axios'

import { ServerUrls } from '@/config/url.config'

import { errorCatch, getContentType } from '../api/api.helper'
import { axiosClassic } from '../api/interceptors'

import {
	getRefreshToken,
	removeFromStorage,
	saveToStorage
} from './auth.helper'
import {
	IAuthResponse,
	TLoginRequest,
	TRegisterRequest
} from '@/shared/types/auth.types'

class AuthService {
	async login(data: TLoginRequest) {
		const response = await axiosClassic.post<IAuthResponse>(
			ServerUrls.AUTH.LOGIN,
			data
		)

		if (response.data.accessToken) {
			saveToStorage(response.data.accessToken, response.data.refreshToken)
		}

		return response.data.user
	}

	async register(data: TRegisterRequest) {
		const response = await axiosClassic.post<IAuthResponse>(
			ServerUrls.AUTH.REGISTER,
			data
		)

		if (response.data.accessToken) {
			saveToStorage(response.data.accessToken, response.data.refreshToken)
		}

		return response.data.user
	}

	async logout() {
		removeFromStorage()
	}

	async getNewTokens() {
		const refreshToken = getRefreshToken()

		const response = await axios.post<string, { data: IAuthResponse }>(
			ServerUrls.AUTH.NEW_TOKENS,
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data.accessToken, response.data.refreshToken)
		}

		return response.data.user
	}

	async checkAuth() {
		try {
			const response = await this.getNewTokens()
			return response
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				//TODO: Add Toast notification
				this.logout()
			}

			return error
		}
	}
}

export const authService = new AuthService()
