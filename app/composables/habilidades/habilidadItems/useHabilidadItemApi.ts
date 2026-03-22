import { useFetchApi } from "../../useFetchApi";

export const useHabilidadItemApi = () => {
  const getHabilidadesItem = () => {
    return useFetchApi('habilidad-items', '/habilidad/items/all')
  }
  return { getHabilidadesItem }
}