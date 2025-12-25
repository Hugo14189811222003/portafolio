import { useFetchApi } from "../useFetchApi";

export const useMarcaApi = () => {
    const getMarca = () => {
        return useFetchApi('/marcas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return {
        getMarca
    }
}