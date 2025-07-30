// store/useUserStore.ts (альтернативный вариант)
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { IUser } from '@/shared/types/user.types'
import { UserStoreState } from './types/user-store.types'
import { debuggerMiddleware, logger } from './useUserStore.tools'

const baseStore = create<UserStoreState>((set, get) => ({
  user: null,
  isLoading: false,
  error: null,
  
  actions: {
    setUser: (user) => set({ user }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    logout: () => set({ user: null, error: null }),
    updateUser: (userData) => set((state) => ({
      user: state.user ? { ...state.user, ...userData } : state.user
    }))
  }
}))

// Комбинируем все middleware
const createStore = () => {
  let store: any = baseStore
  
  store = immer(store)
  
  store = persist(store, {
    name: 'user-storage',
    storage: createJSONStorage(() => localStorage),
    partialize: (state: UserStoreState) => ({ 
      user: state.user,
    }),
    onRehydrateStorage: () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('🔄 User store hydration started')
      }
      return (state, error) => {
        if (error) {
          console.error('❌ User store hydration error:', error)
        } else if (process.env.NODE_ENV === 'development') {
          console.log('✅ User store hydrated:', state?.user)
        }
      }
    }
  })
  
  // Добавляем логирование в development
  if (process.env.NODE_ENV === 'development') {
    store = logger(store)
  }
  
  // Добавляем дебаггер
  store = debuggerMiddleware(store)
  
  // Добавляем devtools
  if (process.env.NODE_ENV === 'development') {
    store = devtools(store, {
      name: 'UserStore',
      anonymousActionType: 'USER_STORE_ACTION',
    })
  }
  
  return create<UserStoreState>()(store)
}

export const useUserStore = createStore()