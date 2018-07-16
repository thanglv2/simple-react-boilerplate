import axios from 'axios'
import { URL_UPDATE_USER } from './constant'

export function updateUserApi(data) {
  return axios.put(URL_UPDATE_USER, data)
}
