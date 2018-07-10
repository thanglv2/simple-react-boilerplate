import axios from 'axios'
import { URL_GET_USER } from './constant'

export function fetchUserApi() {
  return axios.get(URL_GET_USER)
}
