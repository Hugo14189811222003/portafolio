import { useFetchApi } from "../useFetchApi";

export const useTecnologiaApi = () => {
  const getTecnologia = () => {
    return useFetchApi('tecnologias', '/tecnologias')
  }
  return { getTecnologia }
}