import axios from 'axios'
import { URL_CAST } from './constant'
import { API_KEY } from '../../../utils/constants';

export function fetchCastsApi(id) {
  const baseUrl = `${URL_CAST}${id}/credits?api_key=${API_KEY}`

  return axios.get(baseUrl)
}
