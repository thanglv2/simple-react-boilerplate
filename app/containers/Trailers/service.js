import axios from 'axios'
import { URL_DETAIL } from '../MovieDetail/constants'
import { API_KEY } from '../../../utils/constants';
import { URL_VIDEO, URL_YOUTUBE } from './constants'

export function fetchTrailerList(id) {
  const urlTrailers = `${URL_DETAIL}${id}${URL_VIDEO}?api_key=${API_KEY}`

  return axios.get(urlTrailers)
}
