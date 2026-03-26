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
      getCachedData(key) {
        return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
      }
    }
  )
}