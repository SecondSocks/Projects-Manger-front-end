// api/interceptors.ts
import { ClientUrls } from '@/config/url.config'
import axios from 'axios'
import Cookies from 'js-cookie'
import { errorCatch } from './api.helper'
import { authService } from '../auth/auth.service'
import { authClientService } from './client-api'
import { useUserActions } from '@/store/store'

export const axiosClassic = axios.create({
	baseURL: ClientUrls.BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true 
})

axiosClassic.interceptors.request.use(async config => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosClassic.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				const response = await authService.getNewTokens()
				authClientService.setAuthData(response) // обновляем куки

				// Повторяем оригинальный запрос
				return axiosClassic.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					authClientService.clearAuthData()
					// Очищаем Zustand store
					const { logout } = useUserActions()
					logout()
				}
			}
		}

		throw error
	}
)