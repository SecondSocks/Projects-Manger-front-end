import { IAuthResponse, TLoginRequest, TRegisterRequest } from "@/shared/types/auth.types"
import { axiosClassic } from "../api/interceptors"
import { ServerUrls } from "@/config/url.config"
import { AxiosResponse } from "axios"
import Cookies from "js-cookie"
import { TokensName } from "@/constants/names.constants"


class AuthService {
	async login(data: TLoginRequest): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(ServerUrls.AUTH.LOGIN, data)
		return response.data
	}

	async register(data: TRegisterRequest): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(ServerUrls.AUTH.REGISTER, data)
		return response.data
	}

	async getNewTokens(): Promise<IAuthResponse> {
		const refreshToken = Cookies.get(TokensName.REFRESH_TOKEN)
		const response = await axiosClassic.post<IAuthResponse>(ServerUrls.AUTH.NEW_TOKENS, { refreshToken })
		return response.data
	}

	async logout(): Promise<void> {
		Cookies.remove(TokensName.ACCESS_TOKEN)
		Cookies.remove(TokensName.REFRESH_TOKEN)
	}
}

export const authService = new AuthService()