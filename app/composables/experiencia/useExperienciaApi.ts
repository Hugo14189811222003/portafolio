import { useFetchApi } from "../useFetchApi";

export const useExperienciaApi = () => {
  const getExperiencia = (idUsuario: number) => {
    return useFetchApi(
      `experiencia-${idUsuario}`,
      `/experiencia?id_usuario=${idUsuario}`
    )
  }
  return { getExperiencia }
}