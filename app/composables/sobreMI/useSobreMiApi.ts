import { useFetchApi } from "../useFetchApi";

export const useSobreMiApi = () => {
  const getSobreMi = (idUsuario: number) => {
    return useFetchApi(
      `sobre-mi-${idUsuario}`,
      `/sobre-mi?id_usuario=${idUsuario}`
    )
  }
  return { getSobreMi }
}