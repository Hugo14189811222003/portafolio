import { useFetchApi } from '@/composable/useFetchApi';

export const useEducacionApi = () => {
    const getEducacion = () => {
        return useFetchApi('/educacion', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return {
        getEducacion
    }
}