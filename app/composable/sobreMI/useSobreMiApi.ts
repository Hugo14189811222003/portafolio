import { useFetchApi } from "../useFetchApi";

export const useSobreMiApi = () => {
    const getSobreMi = () => {
        return useFetchApi('/sobre-mi', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    return {
        getSobreMi
    }
}