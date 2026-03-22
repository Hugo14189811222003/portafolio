import { useFetchApi } from "../useFetchApi";

export const useHabilidadesApi = () => {
  const getHabilidades = () => {
    return useFetchApi('habilidades', '/habilidad')
  }
  return { getHabilidades }
}