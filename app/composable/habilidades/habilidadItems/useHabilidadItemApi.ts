import { useFetchApi } from "../../useFetchApi";

export const useHabilidadItemApi = () => {
    const getHabilidadesItem = () => {
        return useFetchApi('/habilidad/items/all', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
    }

    return {
        getHabilidadesItem
    }
}