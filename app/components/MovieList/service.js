import axios from 'axios'
import { URL_FILMS } from './constants'

export function getFilmsApi() {
  return axios.get(URL_FILMS)
}
