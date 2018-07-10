import axios from 'axios'
import { URL_FILMS } from './constants'

export function getFilmsApi() {
  return axios.get(URL_FILMS)
}

export function saveFilmApi(data) {
  return axios.post(URL_FILMS, data)
}

export function updateFilmApi(id) {
  return axios.patch(`${URL_FILMS}/${id}`)
}
