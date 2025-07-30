import { IUser } from "@/shared/types/user.types";
import { useUserStore } from "../useUserStore";

export interface UserStoreState {
    user: IUser | null
    isLoading: boolean
    error: string | null
    actions: {
        setUser: (user: IUser | null) => void
        setIsLoading: (isLoading: boolean) => void
        setError: (error: string | null) => void
        updateUser: (userData: Partial<IUser>) => void
        logout: () => void
    }
}

export type UserStore = ReturnType<typeof useUserStore>
export type UserStateType = UserStoreState