import { useFetchApi } from "../useFetchApi";

export const useExperienciaApi = () => {
    const getExperiencia = () => {
        return useFetchApi('/experiencia', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
    }

    return {
        getExperiencia
    }
}