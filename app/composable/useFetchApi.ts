export const useFetchApi = (url: string, options: any = {}) => {
    const config = useRuntimeConfig();

    return $fetch(url, {
        baseURL: config.public.apiUrl,
        ...options
    })
}