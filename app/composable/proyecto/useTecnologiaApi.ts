import { useFetchApi } from "../useFetchApi";

export const useTecnologiaApi = () => {
    const getTecnologia = () => {
        return useFetchApi('/tecnologias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return {
        getTecnologia
    }
}
