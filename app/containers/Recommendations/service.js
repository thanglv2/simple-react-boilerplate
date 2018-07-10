import axios from 'axios'
import { URL } from './constant'
import { API_KEY } from '../../../utils/constants';

export function recommendationsApi(id) {
  const baseUrl = `${URL}${id}/recommendations?api_key=${API_KEY}`
  return axios.get(baseUrl)
}
