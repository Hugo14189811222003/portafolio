import { useFetchApi } from "../useFetchApi";

export const useWebApi = () => {
    const getWeb = () => {
        return useFetchApi('/webs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return {
        getWeb
    }
}