import { ClientUrls } from "@/config/url.config"
import { errorCatch } from "@/services/api/api.helper"
import { authClientService } from "@/services/api/client-api"
import { authService } from "@/services/auth/auth.service"
import { TLoginRequest, TRegisterRequest } from "@/shared/types/auth.types"
import { useUser, useUserActions, useUserError, useUserLoading } from "@/store/store"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function useAuth() {
  const { setUser, setIsLoading, setError, logout: userLogout } = useUserActions()
  const user = useUser()
  const [isAuth, setIsAuth] = useState(!!user)
  const router = useRouter()

  const login = async (data: TLoginRequest) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await authService.login(data)

      authClientService.setAuthData(response)

      setUser(response.user)
      setIsAuth(true)

      router.push(ClientUrls.BASE_URL) //TODO: Redirect to dashboard

      return response
    } catch (error) {
      const errorMessage = errorCatch(error)
      setError(errorMessage)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: TRegisterRequest) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await authService.register(data)

      authClientService.setAuthData(response)

      setUser(response.user)
      setIsAuth(true)

      router.push(ClientUrls.BASE_URL) //TODO: Redirect to dashboard

      return response
    } catch(error) {
      const errorMessage = errorCatch(error)
      setError(errorMessage)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    authClientService.clearAuthData()
    userLogout()
    setIsAuth(false)
    router.push(ClientUrls.LOGIN)
  }

  return { user, isAuth, login, register, logout, isLoading: useUserLoading(), error: useUserError() }
}