import { useFetchApi } from "../useFetchApi";

export const useHabilidadesApi = () => {
    const getHabilidades = () => {
        return useFetchApi('/habilidad', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
    }

    return {
        getHabilidades
    }
}