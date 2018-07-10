import axios from 'axios'
import { URL_SAVE_USER } from './constants'

export function saveUserApi(data) {
  return axios.post(URL_SAVE_USER, data)
}
