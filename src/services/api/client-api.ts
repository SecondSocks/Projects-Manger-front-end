import { TokensName } from "@/constants/names.constants";
import { IAuthResponse } from "@/shared/types/auth.types";
import Cookies from "js-cookie";

interface IAuthClientService {
    setAuthData: (data: IAuthResponse) => void
    clearAuthData: () => void
}

class AuthClientService implements IAuthClientService {
    setAuthData(data: IAuthResponse): void {
        if (typeof window !== 'undefined') {
            Cookies.set(TokensName.ACCESS_TOKEN, data.accessToken, {
                expires: 1,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'none',
            })

            Cookies.set(TokensName.REFRESH_TOKEN, data.refreshToken, {
                expires: 7,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'none'
            })
        }
    }

    clearAuthData(): void {
        if (typeof window !== 'undefined') {
            Cookies.remove(TokensName.ACCESS_TOKEN)
            Cookies.remove(TokensName.REFRESH_TOKEN)
        }
    }
}

export const authClientService = new AuthClientService()