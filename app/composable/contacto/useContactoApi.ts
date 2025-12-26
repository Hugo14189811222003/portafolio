import { useFetchApi } from "@/composable/useFetchApi";

export const useContactoApi = () => {
    const getContacto = () => {
        return useFetchApi('/contacto', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return {
        getContacto
    }
}