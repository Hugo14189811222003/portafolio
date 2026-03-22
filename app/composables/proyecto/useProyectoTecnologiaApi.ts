import { useFetchApi } from "../useFetchApi";

export const useProyectoTecnologiaApi = () => {
  const getProyectoTecnologia = (id_proyecto: number) => {
    return useFetchApi(
      `proyecto-tecnologias-${id_proyecto}`,  // 🔑 key con id
      `/proyectos/${id_proyecto}/tecnologias`
    )
  }
  return { getProyectoTecnologia }
}