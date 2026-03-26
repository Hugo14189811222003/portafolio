// composables/useFetchApi.ts
export const useFetchApi = <T = any>(
  key: string,
  url: string,
  options: any = {}
) => {
  const config = useRuntimeConfig()
  const nuxtApp = useNuxtApp()

  return useAsyncData<T>(
    key,
    () => $fetch(url, {
      baseURL: config.public.apiUrl,
      headers: { 'Content-Type': 'application/json' },
      ...options
    }),
    {
      lazy: true, // 👈 muestra la página inmediatamente con loading
      getCachedData(key) {
        return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
      }
    }
  )
}