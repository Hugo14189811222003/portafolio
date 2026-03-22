import { useFetchApi } from "~/composables/useFetchApi";

export const useContactoApi = () => {
  const getContacto = () => {
    return useFetchApi('contacto', '/contacto')
  }
  return { getContacto }
}