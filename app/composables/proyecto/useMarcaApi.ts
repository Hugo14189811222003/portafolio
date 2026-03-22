import { useFetchApi } from "../useFetchApi";

export const useMarcaApi = () => {
  const getMarca = () => {
    return useFetchApi('marcas', '/marcas')
  }
  return { getMarca }
}