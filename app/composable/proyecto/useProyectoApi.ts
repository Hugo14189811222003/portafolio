import { useFetchApi } from "../useFetchApi";

export const useProyectoApi = () => {
    const getProyecto = () => {
        return useFetchApi('/proyectos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    return {
        getProyecto
    }
}