import { useFetchApi } from "~/composables/useFetchApi";

export const useEducacionApi = () => {
  const getEducacion = (idUsuario: number) => {
    return useFetchApi(
      `educacion-${idUsuario}`,
      `/educacion?id_usuario=${idUsuario}`
    )
  }
  return { getEducacion }
}