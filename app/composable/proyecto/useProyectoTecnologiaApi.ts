import { useFetchApi } from "../useFetchApi";

export const useProyectoTecnologiaApi = () => {
    const getProyectoTecnologia = (id_proyecto: Number) => {
        return useFetchApi(`/proyectos/${id_proyecto}/tecnologias`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return {
        getProyectoTecnologia
    }
}