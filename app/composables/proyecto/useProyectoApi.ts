import { useFetchApi } from "../useFetchApi";

export const useProyectoApi = () => {
  const getProyecto = () => {
    return useFetchApi('proyectos', '/proyectos')
  }
  return { getProyecto }
}