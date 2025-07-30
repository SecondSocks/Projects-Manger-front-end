import { useUserStore } from "./user-store/useUserStore"

// User Store Hooks
export const useUser = () => useUserStore((state) => state.user)
export const useUserLoading = () => useUserStore((state) => state.isLoading)
export const useUserError = () => useUserStore((state) => state.error)
export const useUserActions = () => useUserStore((state) => state.actions)