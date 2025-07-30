// middleware для логирования
export const logger = (config: any) => (set: any, get: any, api: any) => {
  if (process.env.NODE_ENV === 'development') {
    return config(
      (...args: any[]) => {
        console.log('🔵 User Store Action:', args)
        set(...args)
        console.log('🟢 User Store Updated:', get())
      },
      get,
      api
    )
  }
  return config(set, get, api)
}

// middleware для дебаггинга
export const debuggerMiddleware = (config: any) => (set: any, get: any, api: any) => {
  const store = config(set, get, api)
  
  if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    globalThis.debugUserStore = get
    
    // @ts-ignore
    globalThis.resetUserStore = () => {
      set({
        user: null,
        isLoading: false,
        error: null
      })
    }
  }
  
  return store
}