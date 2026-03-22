import { useFetchApi } from "../useFetchApi";

export const useWebApi = () => {
  const getWeb = () => {
    return useFetchApi('webs', '/webs')
  }
  return { getWeb }
}