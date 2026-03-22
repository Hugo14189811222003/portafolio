// composables/useFetchApi.ts
export const useFetchApi = <T = any>(
  key: string,
  url: string,
  options: any = {}
) => {
  const config = useRuntimeConfig()

  return useAsyncData<T>(
    key,
    () => $fetch(url, {
      baseURL: config.public.apiUrl,
      headers: { 'Content-Type': 'application/json' }, // 👈 va aquí, no en cada composable
      ...options
    })
  )
}